# Org.OpenAPITools.Api.TagApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteTag**](TagApi.md#deletetag) | **DELETE** /tag/{tag} | remove a tag
[**GetTags**](TagApi.md#gettags) | **GET** /tag | get all tags
[**GetTagsSubscriptions**](TagApi.md#gettagssubscriptions) | **GET** /tag/stats | get all tags and subscriptions



## DeleteTag

> void DeleteTag (string tag)

remove a tag

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteTagExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TagApi(Configuration.Default);
            var tag = cpu;  // string | name of the tag

            try
            {
                // remove a tag
                apiInstance.DeleteTag(tag);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TagApi.DeleteTag: " + e.Message );
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
 **tag** | **string**| name of the tag | 

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
| **200** | Tag has been deleted |  -  |
| **400** | Could not delete tag |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTags

> InlineResponse2005 GetTags ()

get all tags

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTagsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TagApi(Configuration.Default);

            try
            {
                // get all tags
                InlineResponse2005 result = apiInstance.GetTags();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TagApi.GetTags: " + e.Message );
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

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tags fetched successfully |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTagsSubscriptions

> InlineResponse2006 GetTagsSubscriptions ()

get all tags and subscriptions

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTagsSubscriptionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TagApi(Configuration.Default);

            try
            {
                // get all tags and subscriptions
                InlineResponse2006 result = apiInstance.GetTagsSubscriptions();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TagApi.GetTagsSubscriptions: " + e.Message );
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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

