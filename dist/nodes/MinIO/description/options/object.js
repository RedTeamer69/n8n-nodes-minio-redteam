"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allObjectOptions = exports.optionsForRemoveObject = exports.optionsForStatObject = exports.optionsForPutObject = exports.optionsForGetObject = exports.optionsForListObjects = void 0;
exports.optionsForListObjects = {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
        show: {
            resource: ['object'],
            operation: ['list'],
        }
    },
    options: [
        {
            displayName: 'Prefix',
            name: 'prefix',
            type: 'string',
            description: 'The prefix of the objects that should be listed',
            default: '',
        },
        {
            displayName: 'Recursive',
            name: 'recursive',
            type: 'boolean',
            description: 'true indicates recursive style listing and false indicates directory style listing delimited by \'/\'',
            default: false,
        },
        {
            displayName: 'List Options',
            name: 'listOpts',
            type: 'json',
            description: 'Query params to list object which can have {IncludeVersion: _bool_ }',
            default: '{}',
        }
    ],
};
exports.optionsForGetObject = {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
        show: {
            resource: ['object'],
            operation: ['get'],
        }
    },
    options: [
        {
            displayName: 'Get Options',
            name: 'getOpts',
            type: 'json',
            description: 'Options to get an object',
            default: '{}',
        },
    ],
};
exports.optionsForPutObject = {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
        show: {
            resource: ['object'],
            operation: ['put'],
        }
    },
    options: [
        {
            displayName: 'Object Name',
            name: 'objectName',
            type: 'string',
            description: 'Name of the object to upload',
            default: '',
        },
        {
            displayName: 'Metadata',
            name: 'metadata',
            type: 'json',
            description: 'Metadata to set for the object',
            default: '{}',
        }
    ],
};
exports.optionsForStatObject = {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
        show: {
            resource: ['object'],
            operation: ['stat'],
        }
    },
    options: [
        {
            displayName: 'Stat Options',
            name: 'statOpts',
            type: 'json',
            description: 'Version of the object in the form {versionId:"my-versionId"}',
            default: '{}',
        },
    ],
};
exports.optionsForRemoveObject = {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
        show: {
            resource: ['object'],
            operation: ['remove'],
        }
    },
    options: [
        {
            displayName: 'Remove Options',
            name: 'removeOpts',
            type: 'json',
            description: 'Version of the object in the form {versionId:"my-versionId", governanceBypass: true or false }',
            default: '{}',
        },
    ],
};
exports.allObjectOptions = [
    exports.optionsForListObjects,
    exports.optionsForGetObject,
    exports.optionsForPutObject,
    exports.optionsForStatObject,
    exports.optionsForRemoveObject,
];
//# sourceMappingURL=object.js.map