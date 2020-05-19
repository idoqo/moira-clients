# openapi_client.TriggersApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trigger_put**](TriggersApi.md#trigger_put) | **PUT** /trigger | Create new trigger


# **trigger_put**
> InlineResponse2001 trigger_put(inline_object)

Create new trigger

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost:8080/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TriggersApi(api_client)
    inline_object = openapi_client.InlineObject() # InlineObject | 

    try:
        # Create new trigger
        api_response = api_instance.trigger_put(inline_object)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggersApi->trigger_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object** | [**InlineObject**](InlineObject.md)|  | 

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
**200** | Trigger created |  -  |
**500** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

