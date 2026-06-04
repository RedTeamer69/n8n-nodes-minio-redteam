"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBucket = removeBucket;
async function removeBucket(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0).value;
    await minioClient.removeBucket(bucketName);
    return [
        {
            json: {
                bucket: bucketName,
                removed: true,
            },
        },
    ];
}
//# sourceMappingURL=remove.operation.js.map