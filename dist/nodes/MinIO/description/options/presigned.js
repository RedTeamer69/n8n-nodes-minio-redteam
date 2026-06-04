"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPresignedOptions = exports.optionsForPutPresignedUrl = exports.optionsForGetPresignedUrl = void 0;
exports.optionsForGetPresignedUrl = {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
        show: {
            resource: ['presigned'],
            operation: ['get'],
        }
    },
    options: [
        {
            displayName: 'Expiration',
            name: 'expiry',
            type: 'number',
            description: 'The expiration time in seconds for the presigned URL',
            default: 604800,
        },
        {
            displayName: 'Response Headers',
            name: 'reqParams',
            type: 'collection',
            description: 'Response headers to override',
            placeholder: 'Add header',
            default: {},
            options: [
                {
                    displayName: 'Header Name',
                    name: 'name',
                    type: 'string',
                    description: 'Name of the header to include',
                    default: '',
                },
                {
                    displayName: 'Header Value',
                    name: 'value',
                    type: 'string',
                    description: 'Value of the header to include',
                    default: '',
                },
            ],
        },
        {
            displayName: 'Request Date',
            name: 'requestDate',
            type: 'dateTime',
            description: 'A date object, the URL will be issued at',
            default: '',
        }
    ],
};
exports.optionsForPutPresignedUrl = {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
        show: {
            resource: ['presigned'],
            operation: ['put'],
        }
    },
    options: [
        {
            displayName: 'Expiration',
            name: 'expiry',
            type: 'number',
            description: 'The expiration time in seconds for the presigned URL',
            default: 604800,
        },
    ],
};
exports.allPresignedOptions = [
    exports.optionsForGetPresignedUrl,
    exports.optionsForPutPresignedUrl,
];
//# sourceMappingURL=presigned.js.map