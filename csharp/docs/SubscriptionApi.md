# Org.OpenAPITools.Api.SubscriptionApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateSubscription**](SubscriptionApi.md#createsubscription) | **PUT** /subscription | create a new subscription
[**DeleteSubscription**](SubscriptionApi.md#deletesubscription) | **DELETE** /subscription/{subscriptionId} | deletes a subscription
[**GetSubscriptions**](SubscriptionApi.md#getsubscriptions) | **GET** /subscription | get all subscriptions
[**TestSubscriptionNotification**](SubscriptionApi.md#testsubscriptionnotification) | **PUT** /subscription/{subscriptionId}/test | send test notification for a subscription
[**UpdateSubscription**](SubscriptionApi.md#updatesubscription) | **PUT** /subscription/{subscriptionId} | update a subscription



## CreateSubscription

> Subscription CreateSubscription (Subscription subscription)

create a new subscription

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateSubscriptionExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new SubscriptionApi(Configuration.Default);
            var subscription = new Subscription(); // Subscription | 

            try
            {
                // create a new subscription
                Subscription result = apiInstance.CreateSubscription(subscription);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SubscriptionApi.CreateSubscription: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription** | [**Subscription**](Subscription.md)|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | subscription created |  -  |
| **400** | Invalid request data |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteSubscription

> void DeleteSubscription (Guid subscriptionId)

deletes a subscription

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteSubscriptionExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new SubscriptionApi(Configuration.Default);
            var subscriptionId = new Guid(); // Guid | 

            try
            {
                // deletes a subscription
                apiInstance.DeleteSubscription(subscriptionId);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SubscriptionApi.DeleteSubscription: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**Guid**](Guid.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | subscription deleted |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSubscriptions

> InlineResponse2007 GetSubscriptions ()

get all subscriptions

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetSubscriptionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new SubscriptionApi(Configuration.Default);

            try
            {
                // get all subscriptions
                InlineResponse2007 result = apiInstance.GetSubscriptions();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SubscriptionApi.GetSubscriptions: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | subscriptions fetched successfully |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TestSubscriptionNotification

> void TestSubscriptionNotification (Guid subscriptionId)

send test notification for a subscription

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class TestSubscriptionNotificationExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new SubscriptionApi(Configuration.Default);
            var subscriptionId = new Guid(); // Guid | 

            try
            {
                // send test notification for a subscription
                apiInstance.TestSubscriptionNotification(subscriptionId);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SubscriptionApi.TestSubscriptionNotification: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**Guid**](Guid.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | test notification sent successfully |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSubscription

> Subscription UpdateSubscription (Guid subscriptionId, Subscription subscription)

update a subscription

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateSubscriptionExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new SubscriptionApi(Configuration.Default);
            var subscriptionId = new Guid(); // Guid | 
            var subscription = new Subscription(); // Subscription | 

            try
            {
                // update a subscription
                Subscription result = apiInstance.UpdateSubscription(subscriptionId, subscription);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SubscriptionApi.UpdateSubscription: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**Guid**](Guid.md)|  | 
 **subscription** | [**Subscription**](Subscription.md)|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | subscription updated |  -  |
| **400** | invalid request data |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

