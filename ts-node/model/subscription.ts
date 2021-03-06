/**
 * Moira Alert
 * This is an API description for [Moira Alert project](https://moira.readthedocs.io/en/latest/overview.html). Please check <https://github.com/moira-alert/>
 *
 * The version of the OpenAPI document: 2.5.1.48
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
    /**
    * ID of contacts that are part of this subscription
    */
    'contacts'?: Array<string>;
    /**
    * The tags for this subscription
    */
    'tags'?: Array<string>;
    'sched'?: SubscriptionSched;
    'plotting'?: SubscriptionPlotting;
    /**
    * ID of this subscription
    */
    'id'?: string;
    /**
    * If false, notifications due for thsi subscription will not be sent
    */
    'enabled'?: boolean;
    'anyTags'?: boolean;
    /**
    * If true, notifications will not be sent for warning values.
    */
    'ignoreWarnings'?: boolean;
    'ignoreRecoverings'?: boolean;
    'throttling'?: boolean;
    /**
    * ID of the user that created the subscription
    */
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

