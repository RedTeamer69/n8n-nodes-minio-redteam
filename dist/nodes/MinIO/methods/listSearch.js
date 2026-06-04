"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllBuckets = listAllBuckets;
exports.listAllObjects = listAllObjects;
const helper_1 = require("../utils/helper");
async function listAllBuckets() {
    const credentials = (await this.getCredentials('minIoApi'));
    const minioClient = await (0, helper_1.createMinioClient)(credentials);
    const buckets = await minioClient.listBuckets();
    const results = buckets.map(bucket => ({
        name: bucket.name,
        value: bucket.name,
    }));
    return {
        results
    };
}
async function listAllObjects() {
    const credentials = (await this.getCredentials('minIoApi'));
    const bucketName = this.getCurrentNodeParameter('bucketName').value;
    const minioClient = await (0, helper_1.createMinioClient)(credentials);
    const results = [];
    const stream = await minioClient.listObjects(bucketName);
    await new Promise((resolve, reject) => {
        stream.on('data', (obj) => {
            if (obj.name) {
                results.push({
                    name: obj.name,
                    value: obj.name,
                });
            }
        });
        stream.on('end', () => {
            resolve(results);
        });
        stream.on('error', (err) => {
            reject(err);
        });
    });
    return {
        results
    };
}
//# sourceMappingURL=listSearch.js.map