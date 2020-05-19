export * from './configApi';
import { ConfigApi } from './configApi';
export * from './triggerApi';
import { TriggerApi } from './triggerApi';
export * from './triggersApi';
import { TriggersApi } from './triggersApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.ClientResponse, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [ConfigApi, TriggerApi, TriggersApi];
