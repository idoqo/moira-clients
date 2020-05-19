# Org.OpenAPITools.Api.TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TriggerTriggerIdGet**](TriggerApi.md#triggertriggeridget) | **GET** /trigger/{triggerId} | Update existing trigger
[**TriggerTriggerIdMetricsGet**](TriggerApi.md#triggertriggeridmetricsget) | **GET** /trigger/{triggerId}/metrics | Get metrics associated with certain trigger
[**TriggerTriggerIdPut**](TriggerApi.md#triggertriggeridput) | **PUT** /trigger/{triggerId} | Update existing trigger
[**TriggerTriggerIdRenderGet**](TriggerApi.md#triggertriggeridrenderget) | **GET** /trigger/{triggerId}/render | Get rendered plot for trigger



## TriggerTriggerIdGet

> Object TriggerTriggerIdGet ()

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
    public class TriggerTriggerIdGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);

            try
            {
                // Update existing trigger
                Object result = apiInstance.TriggerTriggerIdGet();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.TriggerTriggerIdGet: " + e.Message );
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

**Object**

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


## TriggerTriggerIdMetricsGet

> void TriggerTriggerIdMetricsGet ()

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
    public class TriggerTriggerIdMetricsGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);

            try
            {
                // Get metrics associated with certain trigger
                apiInstance.TriggerTriggerIdMetricsGet();
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.TriggerTriggerIdMetricsGet: " + e.Message );
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


## TriggerTriggerIdPut

> InlineResponse2001 TriggerTriggerIdPut (Guid triggerID, Object body)

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
    public class TriggerTriggerIdPutExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var body = ;  // Object | 

            try
            {
                // Update existing trigger
                InlineResponse2001 result = apiInstance.TriggerTriggerIdPut(triggerID, body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.TriggerTriggerIdPut: " + e.Message );
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
 **body** | **Object**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger updated |  -  |
| **400** | Invalid input |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TriggerTriggerIdRenderGet

> System.IO.Stream TriggerTriggerIdRenderGet (string targetID = null, string from = null, string to = null)

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
    public class TriggerTriggerIdRenderGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var targetID = t1;  // string | The ID of updated target to print plot for (optional) 
            var from = -1hour;  // string | The start period of metrics to get (optional) 
            var to = now;  // string | The end period of metrics to get (optional) 

            try
            {
                // Get rendered plot for trigger
                System.IO.Stream result = apiInstance.TriggerTriggerIdRenderGet(targetID, from, to);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.TriggerTriggerIdRenderGet: " + e.Message );
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

