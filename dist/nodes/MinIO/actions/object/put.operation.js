"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putObject = putObject;
const n8n_workflow_1 = require("n8n-workflow");
async function putObject(minioClient) {
    const items = this.getInputData();
    const uploadedData = [];
    let item;
    for (let i = 0; i < items.length; i++) {
        const bucketName = this.getNodeParameter('bucketName', i).value;
        const fieldName = this.getNodeParameter('fieldName', i);
        const options = this.getNodeParameter('options', i, {});
        const objectName = options.objectName;
        const metadata = options.metadata;
        item = items[i];
        const newItem = {
            json: {},
            pairedItem: {
                item: i,
            },
        };
        Object.assign(newItem.json, item.json);
        const binaryData = this.helpers.assertBinaryData(i, fieldName);
        const finalObjectName = objectName || binaryData.fileName || 'untitled';
        let fileContent;
        if (binaryData.id) {
            fileContent = await this.helpers.getBinaryStream(binaryData.id);
        }
        else {
            fileContent = Buffer.from(binaryData.data, n8n_workflow_1.BINARY_ENCODING);
        }
        const finalMetadata = {
            ...(metadata ? JSON.parse(metadata) : {}),
            'Content-Type': binaryData.mimeType || 'application/octet-stream',
        };
        const result = await minioClient.putObject(bucketName, finalObjectName, fileContent, undefined, finalMetadata);
        uploadedData.push({
            json: {
                bucket: bucketName,
                object: finalObjectName,
                ...result,
            },
        });
    }
    return uploadedData;
}
//# sourceMappingURL=put.operation.js.map