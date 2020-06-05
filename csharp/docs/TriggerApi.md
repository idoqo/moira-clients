# Org.OpenAPITools.Api.TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTrigger**](TriggerApi.md#gettrigger) | **GET** /trigger/{triggerID} | Get an existing trigger
[**GetTriggerMetrics**](TriggerApi.md#gettriggermetrics) | **GET** /trigger/{triggerID}/metrics | Get metrics associated with certain trigger
[**GetTriggerPlot**](TriggerApi.md#gettriggerplot) | **GET** /trigger/{triggerID}/render | Get rendered plot for trigger
[**UpdateTrigger**](TriggerApi.md#updatetrigger) | **PUT** /trigger/{triggerID} | Update existing trigger



## GetTrigger

> Trigger GetTrigger (Guid triggerID)

Get an existing trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger

            try
            {
                // Get an existing trigger
                Trigger result = apiInstance.GetTrigger(triggerID);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTrigger: " + e.Message );
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

### Return type

[**Trigger**](Trigger.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger data |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerMetrics

> Dictionary&lt;string, List&lt;Object&gt;&gt; GetTriggerMetrics (Guid triggerID, string from = null, string to = null)

Get metrics associated with certain trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerMetricsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var from = -1hour;  // string | The start period of metrics to get (optional) 
            var to = now;  // string | The end period of metrics to get (optional) 

            try
            {
                // Get metrics associated with certain trigger
                Dictionary<string, List<Object>> result = apiInstance.GetTriggerMetrics(triggerID, from, to);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTriggerMetrics: " + e.Message );
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
 **from** | **string**| The start period of metrics to get | [optional] 
 **to** | **string**| The end period of metrics to get | [optional] 

### Return type

**Dictionary<string, List<Object>>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Metrics for trigger |  -  |
| **500** | Server error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerPlot

> System.IO.Stream GetTriggerPlot (Guid triggerID, string targetID = null, string from = null, string to = null)

Get rendered plot for trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerPlotExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var targetID = t1;  // string | The ID of updated target to print plot for (optional) 
            var from = -1hour;  // string | The start period of metrics to get (optional) 
            var to = now;  // string | The end period of metrics to get (optional) 

            try
            {
                // Get rendered plot for trigger
                System.IO.Stream result = apiInstance.GetTriggerPlot(triggerID, targetID, from, to);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTriggerPlot: " + e.Message );
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
 **targetID** | **string**| The ID of updated target to print plot for | [optional] 
 **from** | **string**| The start period of metrics to get | [optional] 
 **to** | **string**| The end period of metrics to get | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plot for trigger |  -  |
| **500** | Server error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTrigger

> InlineResponse2004 UpdateTrigger (Guid triggerID, Trigger trigger)

Update existing trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateTriggerExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var trigger = new Trigger(); // Trigger | 

            try
            {
                // Update existing trigger
                InlineResponse2004 result = apiInstance.UpdateTrigger(triggerID, trigger);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.UpdateTrigger: " + e.Message );
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
 **trigger** | [**Trigger**](Trigger.md)|  | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger updated |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

