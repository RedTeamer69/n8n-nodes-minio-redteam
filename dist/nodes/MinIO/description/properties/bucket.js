"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBucketProperties = exports.bucketNameForMakeBucket = exports.bucketNameForBucket = exports.bucketOperations = void 0;
exports.bucketOperations = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
        show: {
            resource: [
                'bucket',
            ],
        },
    },
    options: [
        {
            name: 'List',
            value: 'list',
            action: 'List all buckets',
            description: 'Lists all buckets owned by the authenticated user',
        },
        {
            name: 'Make',
            value: 'make',
            action: 'Create a new bucket',
            description: 'Creates a new bucket with the specified name',
        },
        {
            name: 'Remove',
            value: 'remove',
            action: 'Remove a bucket',
            description: 'Removes an empty bucket',
        },
        {
            name: 'Exists',
            value: 'exists',
            action: 'Check if a bucket exists',
            description: 'Checks if a bucket exists and is accessible',
        }
    ],
    default: 'list',
};
exports.bucketNameForBucket = {
    displayName: 'Bucket Name',
    name: 'bucketName',
    type: 'resourceLocator',
    description: 'Name of the bucket to operate on',
    modes: [
        {
            displayName: 'From List',
            name: 'list',
            type: 'list',
            typeOptions: {
                searchListMethod: 'listAllBuckets',
            }
        },
        {
            displayName: 'ID',
            name: 'id',
            type: 'string',
        }
    ],
    displayOptions: {
        show: {
            resource: [
                'bucket',
            ],
        },
        hide: {
            operation: [
                'list',
                'make',
            ],
        },
    },
    required: true,
    default: { mode: 'list', value: '' },
};
exports.bucketNameForMakeBucket = {
    displayName: 'Bucket Name',
    name: 'bucketName',
    type: 'string',
    description: 'Name of the bucket to create',
    required: true,
    default: '',
    displayOptions: {
        show: {
            resource: [
                'bucket',
            ],
            operation: [
                'make',
            ],
        },
    },
};
exports.allBucketProperties = [
    exports.bucketOperations,
    exports.bucketNameForBucket,
    exports.bucketNameForMakeBucket,
];
//# sourceMappingURL=bucket.js.map