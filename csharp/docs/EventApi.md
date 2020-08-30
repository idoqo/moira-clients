# Org.OpenAPITools.Api.EventApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteEvents**](EventApi.md#deleteevents) | **DELETE** /event/all | Deletes all notification events
[**GetTriggerEvents**](EventApi.md#gettriggerevents) | **GET** /event/{triggerID} | Gets all trigger events for current page and their count



## DeleteEvents

> void DeleteEvents ()

Deletes all notification events

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteEventsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new EventApi(Configuration.Default);

            try
            {
                // Deletes all notification events
                apiInstance.DeleteEvents();
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EventApi.DeleteEvents: " + e.Message );
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
| **200** | Events removed successfully. |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerEvents

> InlineResponse2002 GetTriggerEvents (Guid triggerID, int? page = null, int? size = null)

Gets all trigger events for current page and their count

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerEventsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new EventApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var page = 1;  // int? | Defines the number of the displayed page. E.g, page=2 would display the 2nd page. (optional) 
            var size = 15;  // int? | Number of items to be displayed on one page. (optional) 

            try
            {
                // Gets all trigger events for current page and their count
                InlineResponse2002 result = apiInstance.GetTriggerEvents(triggerID, page, size);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EventApi.GetTriggerEvents: " + e.Message );
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
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 
 **page** | **int?**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | [optional] 
 **size** | **int?**| Number of items to be displayed on one page. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Events fetched successfully. |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

