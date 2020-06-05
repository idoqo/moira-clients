# openapi_client.TriggersApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_trigger**](TriggersApi.md#create_trigger) | **PUT** /trigger | Create new trigger


# **create_trigger**
> InlineResponse2004 create_trigger(trigger)

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
    trigger = openapi_client.Trigger() # Trigger | 

    try:
        # Create new trigger
        api_response = api_instance.create_trigger(trigger)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggersApi->create_trigger: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**200** | Trigger created |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

