# Org.OpenAPITools.Api.NotificationsApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteAllNotification**](NotificationsApi.md#deleteallnotification) | **DELETE** /notification/all | deletes all available notifications
[**DeleteNotification**](NotificationsApi.md#deletenotification) | **DELETE** /notification | delete a notification by id
[**GetNotifications**](NotificationsApi.md#getnotifications) | **GET** /notification | gets a paginated list of notifications, all notifications are fetched if end &#x3D; -1 and start &#x3D; 0



## DeleteAllNotification

> void DeleteAllNotification ()

deletes all available notifications

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteAllNotificationExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new NotificationsApi(Configuration.Default);

            try
            {
                // deletes all available notifications
                apiInstance.DeleteAllNotification();
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling NotificationsApi.DeleteAllNotification: " + e.Message );
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | all notificiations have been deleted |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteNotification

> InlineResponse2003 DeleteNotification (Guid notificationId)

delete a notification by id

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteNotificationExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new NotificationsApi(Configuration.Default);
            var notificationId = new Guid(); // Guid | The ID of updated trigger

            try
            {
                // delete a notification by id
                InlineResponse2003 result = apiInstance.DeleteNotification(notificationId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling NotificationsApi.DeleteNotification: " + e.Message );
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
 **notificationId** | [**Guid**](Guid.md)| The ID of updated trigger | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | notification have been deleted |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNotifications

> NotificationsList GetNotifications (int? start = null, int? end = null)

gets a paginated list of notifications, all notifications are fetched if end = -1 and start = 0

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetNotificationsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new NotificationsApi(Configuration.Default);
            var start = 1;  // int? |  (optional)  (default to 0)
            var end = 15;  // int? |  (optional)  (default to -1)

            try
            {
                // gets a paginated list of notifications, all notifications are fetched if end = -1 and start = 0
                NotificationsList result = apiInstance.GetNotifications(start, end);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling NotificationsApi.GetNotifications: " + e.Message );
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
 **start** | **int?**|  | [optional] [default to 0]
 **end** | **int?**|  | [optional] [default to -1]

### Return type

[**NotificationsList**](NotificationsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Notifications fetched successfully |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

