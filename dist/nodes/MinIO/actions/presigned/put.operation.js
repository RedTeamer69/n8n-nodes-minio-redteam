"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presignedPut = presignedPut;
async function presignedPut(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0).value;
    const objectName = this.getNodeParameter('objectName', 0).value;
    const options = this.getNodeParameter('options', 0, {});
    const expiry = options.expiry;
    const presignedUrl = await minioClient.presignedPutObject(bucketName, objectName, expiry);
    return [{
            json: {
                presignedUrl
            }
        }];
}
//# sourceMappingURL=put.operation.js.map