"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minIoApiTest = minIoApiTest;
const helper_1 = require("../utils/helper");
async function minIoApiTest(credential) {
    const credentials = credential.data;
    if (!credentials) {
        return {
            status: 'Error',
            message: 'Invalid credentials',
        };
    }
    try {
        const minioClient = await (0, helper_1.createMinioClient)(credentials);
        await minioClient.listBuckets();
    }
    catch (error) {
        return {
            status: 'Error',
            message: `Connection failed: ${error.message}`,
        };
    }
    return {
        status: 'OK',
        message: 'Connection successful',
    };
}
//# sourceMappingURL=credentialTest.js.map