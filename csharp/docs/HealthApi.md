# Org.OpenAPITools.Api.HealthApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetNotifierState**](HealthApi.md#getnotifierstate) | **GET** /health/notifier | Get notifier state
[**UpdateNotifierState**](HealthApi.md#updatenotifierstate) | **PUT** /health/notifier | Update notifier state



## GetNotifierState

> NotifierState GetNotifierState ()

Get notifier state

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetNotifierStateExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new HealthApi(Configuration.Default);

            try
            {
                // Get notifier state
                NotifierState result = apiInstance.GetNotifierState();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling HealthApi.GetNotifierState: " + e.Message );
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

[**NotifierState**](NotifierState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Notifier state retrieved |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateNotifierState

> NotifierState UpdateNotifierState (NotifierState notifierState)

Update notifier state

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateNotifierStateExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new HealthApi(Configuration.Default);
            var notifierState = new NotifierState(); // NotifierState | 

            try
            {
                // Update notifier state
                NotifierState result = apiInstance.UpdateNotifierState(notifierState);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling HealthApi.UpdateNotifierState: " + e.Message );
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
 **notifierState** | [**NotifierState**](NotifierState.md)|  | 

### Return type

[**NotifierState**](NotifierState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Update state of the Moira service |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

