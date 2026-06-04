"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listObjects = listObjects;
async function listObjects(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0).value;
    const options = this.getNodeParameter('options', 0, {});
    const prefix = options.prefix;
    const recursive = options.recursive;
    const listOptions = options.listOpts;
    const data = [];
    await new Promise((resolve, reject) => {
        const stream = minioClient.listObjects(bucketName, prefix, recursive, listOptions ? JSON.parse(listOptions) : {});
        stream.on('data', (obj) => {
            data.push(obj);
        });
        stream.on('end', () => {
            resolve();
        });
        stream.on('error', (err) => {
            reject(err);
        });
    });
    return data.reduce((acc, object) => {
        acc.push({
            json: {
                object,
            },
        });
        return acc;
    }, []);
}
//# sourceMappingURL=list.operation.js.map