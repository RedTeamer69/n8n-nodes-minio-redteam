"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObject = getObject;
async function getObject(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0).value;
    const objectName = this.getNodeParameter('objectName', 0).value;
    const fieldName = this.getNodeParameter('fieldName', 0);
    const options = this.getNodeParameter('options', 0, {});
    const getOpts = options.getOpts;
    const stream = await minioClient.getObject(bucketName, objectName, getOpts ? JSON.parse(getOpts) : {});
    const binaryData = await this.helpers.prepareBinaryData(stream);
    return [{
            json: {
                mimeType: binaryData.mimeType,
                fileType: binaryData.fileType,
                fileName: binaryData.fileName,
                fileExtension: binaryData.fileExtension,
                fileSize: binaryData.fileSize,
            },
            binary: {
                [fieldName]: binaryData
            }
        }];
}
//# sourceMappingURL=get.operation.js.map