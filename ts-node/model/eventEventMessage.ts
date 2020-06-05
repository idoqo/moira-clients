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
import { EventEventMessageMaintenance } from './eventEventMessageMaintenance';

export class EventEventMessage {
    'maintenance'?: EventEventMessageMaintenance;
    'interval'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maintenance",
            "baseName": "maintenance",
            "type": "EventEventMessageMaintenance"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EventEventMessage.attributeTypeMap;
    }
}

