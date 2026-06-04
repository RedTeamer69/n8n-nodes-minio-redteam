"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presignedGet = presignedGet;
async function presignedGet(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0).value;
    const objectName = this.getNodeParameter('objectName', 0).value;
    const options = this.getNodeParameter('options', 0, {});
    const expiry = options.expiry;
    const reqParams = options.reqParams;
    const requestDate = options.requestDate;
    const presignedUrl = await minioClient.presignedGetObject(bucketName, objectName, expiry, reqParams, requestDate ? new Date(requestDate) : undefined);
    return [{
            json: {
                presignedUrl
            }
        }];
}
//# sourceMappingURL=get.operation.js.map