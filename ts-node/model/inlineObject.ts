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
import { TriggerSched } from './triggerSched';

export class InlineObject {
    /**
    * Trigger description
    */
    'desc'?: string;
    /**
    * Target value at which error will be fired
    */
    'errorValue'?: number;
    /**
    * Expression that will be evaluated
    */
    'expression'?: string;
    'id'?: string;
    /**
    * Which storage to use local or remote
    */
    'isRemote'?: boolean;
    'muteNewMetrics'?: boolean;
    /**
    * Trigger name
    */
    'name'?: string;
    /**
    * Array of possible patterns to check values in simple mode
    */
    'patterns'?: Array<string>;
    'sched'?: TriggerSched;
    /**
    * Array of tags associated with this trigger
    */
    'tags'?: Array<string>;
    /**
    * Array of targets associated with this trigger
    */
    'targets'?: Array<string>;
    /**
    * Quantity of events before throttling will be enabled
    */
    'throttling'?: number;
    'triggerType'?: InlineObject.TriggerTypeEnum;
    'ttl'?: number;
    'ttlState'?: string;
    /**
    * Target value at which warning will be fired
    */
    'warnValue'?: number;
    /**
    * An array of targets which have only one metric
    */
    'aloneMetrics'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "desc",
            "baseName": "desc",
            "type": "string"
        },
        {
            "name": "errorValue",
            "baseName": "error_value",
            "type": "number"
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isRemote",
            "baseName": "is_remote",
            "type": "boolean"
        },
        {
            "name": "muteNewMetrics",
            "baseName": "mute_new_metrics",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "patterns",
            "baseName": "patterns",
            "type": "Array<string>"
        },
        {
            "name": "sched",
            "baseName": "sched",
            "type": "TriggerSched"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<string>"
        },
        {
            "name": "throttling",
            "baseName": "throttling",
            "type": "number"
        },
        {
            "name": "triggerType",
            "baseName": "trigger_type",
            "type": "InlineObject.TriggerTypeEnum"
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "number"
        },
        {
            "name": "ttlState",
            "baseName": "ttl_state",
            "type": "string"
        },
        {
            "name": "warnValue",
            "baseName": "warn_value",
            "type": "number"
        },
        {
            "name": "aloneMetrics",
            "baseName": "alone_metrics",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }
}

export namespace InlineObject {
    export enum TriggerTypeEnum {
        Rising = <any> 'rising',
        Falling = <any> 'falling',
        Expression = <any> 'expression'
    }
}
