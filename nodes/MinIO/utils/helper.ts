import * as Minio from 'minio';
import { MinIoCredentials } from './interfaces';
import { Agent } from 'node:https';

export async function createMinioClient(credentials: MinIoCredentials): Promise<Minio.Client> {
	const clientConfig: Minio.ClientOptions = {
		endPoint: credentials.endpoint,
		port: credentials.port,
		useSSL: credentials.useSSL,
		accessKey: credentials.accessKey,
		secretKey: credentials.secretKey,
	};

	// transportAgent (HTTPS) se nastavuje jen při SSL — jinak SDK selže při HTTP
	if (credentials.useSSL) {
		clientConfig.transportAgent = new Agent({
			rejectUnauthorized: credentials.allowInsecure !== true,
		});
	}

	return new Minio.Client(clientConfig);
}
