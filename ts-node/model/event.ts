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
import { EventEventMessage } from './eventEventMessage';

export class Event {
    'triggerEvent'?: boolean;
    'timestamp'?: number;
    'metric'?: string;
    'value'?: number;
    /**
    * State of the metric after the data point was recorded. Should be one of OK, WARN, ERROR, NODATA, EXCEPTION or TEST.
    */
    'state'?: string;
    'triggerId'?: string;
    'subId'?: string;
    'contactId'?: string;
    /**
    * State of the metric before the data point was recorded.
    */
    'oldState'?: string;
    'msg'?: string;
    'eventMessage'?: EventEventMessage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "triggerEvent",
            "baseName": "trigger_event",
            "type": "boolean"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "triggerId",
            "baseName": "trigger_id",
            "type": "string"
        },
        {
            "name": "subId",
            "baseName": "sub_id",
            "type": "string"
        },
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "string"
        },
        {
            "name": "oldState",
            "baseName": "old_state",
            "type": "string"
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string"
        },
        {
            "name": "eventMessage",
            "baseName": "event_message",
            "type": "EventEventMessage"
        }    ];

    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
}

