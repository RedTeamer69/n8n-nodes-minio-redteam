"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectStat = objectStat;
async function objectStat(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0).value;
    const objectName = this.getNodeParameter('objectName', 0).value;
    const options = this.getNodeParameter('options', 0, {});
    const statOpts = options.statOpts;
    const stat = await minioClient.statObject(bucketName, objectName, statOpts ? JSON.parse(statOpts) : {});
    return [{
            json: {
                bucket: bucketName,
                object: objectName,
                ...stat
            }
        }];
}
//# sourceMappingURL=stat.operation.js.map