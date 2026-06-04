"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBucketOptions = exports.optionsForMakeBucket = void 0;
exports.optionsForMakeBucket = {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
        show: {
            resource: ['bucket'],
            operation: ['make'],
        }
    },
    options: [
        {
            displayName: 'Region',
            name: 'region',
            type: 'string',
            description: 'The region where the bucket will be created',
            default: 'us-east-1',
        },
        {
            displayName: 'Bucket Options',
            name: 'makeOpts',
            type: 'json',
            description: 'Options to create a bucket',
            default: '{}',
        },
    ],
};
exports.allBucketOptions = [
    exports.optionsForMakeBucket,
];
//# sourceMappingURL=bucket.js.map