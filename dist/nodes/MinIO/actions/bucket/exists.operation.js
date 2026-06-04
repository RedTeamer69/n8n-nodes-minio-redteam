"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketExists = bucketExists;
async function bucketExists(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0).value;
    const exists = await minioClient.bucketExists(bucketName);
    return [
        {
            json: {
                bucket: bucketName,
                exists,
            },
        },
    ];
}
//# sourceMappingURL=exists.operation.js.map