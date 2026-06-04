import * as Minio from 'minio';
import { MinIoCredentials } from './interfaces';
export declare function createMinioClient(credentials: MinIoCredentials): Promise<Minio.Client>;
