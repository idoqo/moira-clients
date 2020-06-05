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
import { Contact } from './contact';
import { Subscription } from './subscription';

export class InlineResponse2005 {
    /**
    * username of the authenticated user.
    */
    'login'?: string;
    /**
    * user\'s contacts
    */
    'contacts'?: Array<Contact>;
    /**
    * user\'s subscriptions
    */
    'subscriptions'?: Array<Subscription>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "login",
            "baseName": "login",
            "type": "string"
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<Contact>"
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<Subscription>"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2005.attributeTypeMap;
    }
}

