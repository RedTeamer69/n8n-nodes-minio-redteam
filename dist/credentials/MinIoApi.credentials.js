"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinIoApi = void 0;
class MinIoApi {
    constructor() {
        this.name = 'minIoApi';
        this.displayName = 'MinIO API';
        this.documentationUrl = 'https://github.com/minio/minio-js/blob/master/docs/API.md#1-constructor';
        this.properties = [
            {
                displayName: 'Endpoint',
                name: 'endpoint',
                type: 'string',
                default: 'play.min.io',
            },
            {
                displayName: 'Port',
                name: 'port',
                type: 'number',
                default: 9000,
            },
            {
                displayName: 'Access Key',
                name: 'accessKey',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                }
            },
            {
                displayName: 'Secret Key',
                name: 'secretKey',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                }
            },
            {
                displayName: 'Use SSL',
                name: 'useSSL',
                type: 'boolean',
                default: false,
            },
            {
                displayName: 'Allow Insecure',
                name: 'allowInsecure',
                type: 'boolean',
                default: false,
                description: 'Whether to allow insecure connections (e.g. self-signed certificates)',
            },
        ];
    }
}
exports.MinIoApi = MinIoApi;
//# sourceMappingURL=MinIoApi.credentials.js.map