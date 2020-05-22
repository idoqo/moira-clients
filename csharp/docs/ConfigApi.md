# Org.OpenAPITools.Api.ConfigApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetConfig**](ConfigApi.md#getconfig) | **GET** /config | Get available configuration



## GetConfig

> InlineResponse200 GetConfig ()

Get available configuration

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetConfigExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new ConfigApi(Configuration.Default);

            try
            {
                // Get available configuration
                InlineResponse200 result = apiInstance.GetConfig();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConfigApi.GetConfig: " + e.Message );
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration fetched successfully. |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

