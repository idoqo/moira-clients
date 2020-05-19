# Org.OpenAPITools.Api.TriggersApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TriggerPut**](TriggersApi.md#triggerput) | **PUT** /trigger | Create new trigger



## TriggerPut

> InlineResponse2001 TriggerPut (InlineObject inlineObject)

Create new trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class TriggerPutExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggersApi(Configuration.Default);
            var inlineObject = new InlineObject(); // InlineObject | 

            try
            {
                // Create new trigger
                InlineResponse2001 result = apiInstance.TriggerPut(inlineObject);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggersApi.TriggerPut: " + e.Message );
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

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
| **200** | Trigger created |  -  |
| **500** | Invalid input |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

