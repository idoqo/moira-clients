/**
 * Moira Alert
 * This is an API description for Moira Alert project. Please check https://github.com/moira-alert
 *
 * The version of the OpenAPI document: 2.5.1.47
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { SubscriptionPlotting } from './subscriptionPlotting';
import { SubscriptionSched } from './subscriptionSched';

export class Subscription {
    'contacts'?: Array<string>;
    'tags'?: Array<string>;
    'sched'?: SubscriptionSched;
    'plotting'?: SubscriptionPlotting;
    'id'?: string;
    'enabled'?: boolean;
    'anyTags'?: boolean;
    'ignoreWarnings'?: boolean;
    'ignoreRecoverings'?: boolean;
    'throttling'?: boolean;
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<string>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "sched",
            "baseName": "sched",
            "type": "SubscriptionSched"
        },
        {
            "name": "plotting",
            "baseName": "plotting",
            "type": "SubscriptionPlotting"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "anyTags",
            "baseName": "any_tags",
            "type": "boolean"
        },
        {
            "name": "ignoreWarnings",
            "baseName": "ignore_warnings",
            "type": "boolean"
        },
        {
            "name": "ignoreRecoverings",
            "baseName": "ignore_recoverings",
            "type": "boolean"
        },
        {
            "name": "throttling",
            "baseName": "throttling",
            "type": "boolean"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Subscription.attributeTypeMap;
    }
}
