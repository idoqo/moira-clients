export * from './contact';
export * from './contactRequest';
export * from './errorBadRequest';
export * from './event';
export * from './eventEventMessage';
export * from './eventEventMessageMaintenance';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse20010';
export * from './inlineResponse20011';
export * from './inlineResponse20012';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2004List';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse2009';
export * from './inlineResponse200Contacts';
export * from './inlineResponse404';
export * from './inlineResponse500';
export * from './maintenanceInfo';
export * from './metricState';
export * from './notificationsList';
export * from './notificationsListList';
export * from './notificationsListPlotting';
export * from './notifierState';
export * from './subscription';
export * from './subscriptionPlotting';
export * from './subscriptionSched';
export * from './subscriptionSchedDays';
export * from './tagStatistics';
export * from './trigger';
export * from './triggerCheck';
export * from './user';

import localVarRequest = require('request');

import { Contact } from './contact';
import { ContactRequest } from './contactRequest';
import { ErrorBadRequest } from './errorBadRequest';
import { Event } from './event';
import { EventEventMessage } from './eventEventMessage';
import { EventEventMessageMaintenance } from './eventEventMessageMaintenance';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse20010 } from './inlineResponse20010';
import { InlineResponse20011 } from './inlineResponse20011';
import { InlineResponse20012 } from './inlineResponse20012';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2004List } from './inlineResponse2004List';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2008 } from './inlineResponse2008';
import { InlineResponse2009 } from './inlineResponse2009';
import { InlineResponse200Contacts } from './inlineResponse200Contacts';
import { InlineResponse404 } from './inlineResponse404';
import { InlineResponse500 } from './inlineResponse500';
import { MaintenanceInfo } from './maintenanceInfo';
import { MetricState } from './metricState';
import { NotificationsList } from './notificationsList';
import { NotificationsListList } from './notificationsListList';
import { NotificationsListPlotting } from './notificationsListPlotting';
import { NotifierState } from './notifierState';
import { Subscription } from './subscription';
import { SubscriptionPlotting } from './subscriptionPlotting';
import { SubscriptionSched } from './subscriptionSched';
import { SubscriptionSchedDays } from './subscriptionSchedDays';
import { TagStatistics } from './tagStatistics';
import { Trigger } from './trigger';
import { TriggerCheck } from './triggerCheck';
import { User } from './user';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "SubscriptionPlotting.ThemeEnum": SubscriptionPlotting.ThemeEnum,
        "SubscriptionSchedDays.NameEnum": SubscriptionSchedDays.NameEnum,
        "Trigger.TriggerTypeEnum": Trigger.TriggerTypeEnum,
        "Trigger.TtlStateEnum": Trigger.TtlStateEnum,
}

let typeMap: {[index: string]: any} = {
    "Contact": Contact,
    "ContactRequest": ContactRequest,
    "ErrorBadRequest": ErrorBadRequest,
    "Event": Event,
    "EventEventMessage": EventEventMessage,
    "EventEventMessageMaintenance": EventEventMessageMaintenance,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse20010": InlineResponse20010,
    "InlineResponse20011": InlineResponse20011,
    "InlineResponse20012": InlineResponse20012,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2004List": InlineResponse2004List,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse2009": InlineResponse2009,
    "InlineResponse200Contacts": InlineResponse200Contacts,
    "InlineResponse404": InlineResponse404,
    "InlineResponse500": InlineResponse500,
    "MaintenanceInfo": MaintenanceInfo,
    "MetricState": MetricState,
    "NotificationsList": NotificationsList,
    "NotificationsListList": NotificationsListList,
    "NotificationsListPlotting": NotificationsListPlotting,
    "NotifierState": NotifierState,
    "Subscription": Subscription,
    "SubscriptionPlotting": SubscriptionPlotting,
    "SubscriptionSched": SubscriptionSched,
    "SubscriptionSchedDays": SubscriptionSchedDays,
    "TagStatistics": TagStatistics,
    "Trigger": Trigger,
    "TriggerCheck": TriggerCheck,
    "User": User,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
