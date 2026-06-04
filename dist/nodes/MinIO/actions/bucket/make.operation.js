"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBucket = makeBucket;
async function makeBucket(minioClient) {
    const bucketName = this.getNodeParameter('bucketName', 0);
    const options = this.getNodeParameter('options', 0, {});
    const region = options.region;
    const makeOpts = options.makeOpts;
    await minioClient.makeBucket(bucketName, region, makeOpts ? JSON.parse(makeOpts) : {});
    return [
        {
            json: {
                bucket: bucketName,
                created: true,
            },
        },
    ];
}
//# sourceMappingURL=make.operation.js.map