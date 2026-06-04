"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeObject = removeObject;
async function removeObject(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0).value;
    const objectName = this.getNodeParameter('objectName', 0).value;
    const options = this.getNodeParameter('options', 0, {});
    const removeOpts = options.removeOpts;
    await minioClient.removeObject(bucketName, objectName, removeOpts ? JSON.parse(removeOpts) : {});
    return [{
            json: {
                bucket: bucketName,
                object: objectName,
                removed: true
            }
        }];
}
//# sourceMappingURL=remove.operation.js.map