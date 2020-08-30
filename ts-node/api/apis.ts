export * from './configApi';
import { ConfigApi } from './configApi';
export * from './contactApi';
import { ContactApi } from './contactApi';
export * from './eventApi';
import { EventApi } from './eventApi';
export * from './healthApi';
import { HealthApi } from './healthApi';
export * from './notificationsApi';
import { NotificationsApi } from './notificationsApi';
export * from './patternApi';
import { PatternApi } from './patternApi';
export * from './subscriptionApi';
import { SubscriptionApi } from './subscriptionApi';
export * from './tagApi';
import { TagApi } from './tagApi';
export * from './triggerApi';
import { TriggerApi } from './triggerApi';
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

export const APIS = [ConfigApi, ContactApi, EventApi, HealthApi, NotificationsApi, PatternApi, SubscriptionApi, TagApi, TriggerApi, UserApi];
