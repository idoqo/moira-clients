export * from './configApi';
import { ConfigApi } from './configApi';
export * from './contactApi';
import { ContactApi } from './contactApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './eventApi';
import { EventApi } from './eventApi';
export * from './healthApi';
import { HealthApi } from './healthApi';
export * from './patternApi';
import { PatternApi } from './patternApi';
export * from './triggerApi';
import { TriggerApi } from './triggerApi';
export * from './triggersApi';
import { TriggersApi } from './triggersApi';
export * from './userApi';
import { UserApi } from './userApi';
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

export const APIS = [ConfigApi, ContactApi, ContactsApi, EventApi, HealthApi, PatternApi, TriggerApi, TriggersApi, UserApi];
