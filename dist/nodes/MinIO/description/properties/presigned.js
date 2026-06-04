"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPresignedProperties = exports.objectNameForPresigned = exports.bucketNameForPresigned = exports.presignedOperations = void 0;
exports.presignedOperations = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
        show: {
            resource: [
                'presigned',
            ],
        },
    },
    options: [
        {
            name: 'Get',
            value: 'get',
            action: 'Generate presigned URL for download',
            description: 'Generates a presigned URL for downloading an object (default expiry: 7 days)',
        },
        {
            name: 'Put',
            value: 'put',
            action: 'Generate presigned URL for upload',
            description: 'Generates a presigned URL for uploading an object (default expiry: 7 days)',
        },
    ],
    default: 'get',
};
exports.bucketNameForPresigned = {
    displayName: 'Bucket Name',
    name: 'bucketName',
    type: 'resourceLocator',
    description: 'Name of the bucket for which to generate the presigned URL',
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
                'presigned',
            ],
        },
    },
    required: true,
    default: { mode: 'list', value: '' },
};
exports.objectNameForPresigned = {
    displayName: 'Object Name',
    name: 'objectName',
    type: 'resourceLocator',
    description: 'Name of the object (key) for which to generate the presigned URL',
    modes: [
        {
            displayName: 'From List',
            name: 'list',
            type: 'list',
            typeOptions: {
                searchListMethod: 'listAllObjects',
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
                'presigned',
            ],
        },
    },
    required: true,
    default: { mode: 'list', value: '' },
};
exports.allPresignedProperties = [
    exports.presignedOperations,
    exports.bucketNameForPresigned,
    exports.objectNameForPresigned,
];
//# sourceMappingURL=presigned.js.map