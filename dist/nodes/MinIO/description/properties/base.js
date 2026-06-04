"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBaseProperties = exports.resourceProperty = void 0;
exports.resourceProperty = {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
        {
            name: 'Bucket',
            value: 'bucket',
            description: 'Operations on storage buckets',
        },
        {
            name: 'Object',
            value: 'object',
            description: 'Operations on objects stored in buckets',
        },
        {
            name: 'Presigned',
            value: 'presigned',
            description: 'Generate presigned URLs for temporary access',
        },
    ],
    default: 'bucket',
};
exports.allBaseProperties = [
    exports.resourceProperty,
];
//# sourceMappingURL=base.js.map