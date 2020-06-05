# openapi_client.EventApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_events**](EventApi.md#delete_events) | **DELETE** /event/all | Deletes all notification events
[**get_trigger_events**](EventApi.md#get_trigger_events) | **GET** /event/{triggerId} | Gets all trigger events for current page and their count


# **delete_events**
> delete_events()

Deletes all notification events

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
    api_instance = openapi_client.EventApi(api_client)
    
    try:
        # Deletes all notification events
        api_instance.delete_events()
    except ApiException as e:
        print("Exception when calling EventApi->delete_events: %s\n" % e)
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
**200** | Events removed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_trigger_events**
> InlineResponse2002 get_trigger_events(trigger_id, page=page, size=size)

Gets all trigger events for current page and their count

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
    api_instance = openapi_client.EventApi(api_client)
    trigger_id = '5A8AF369-86D2-44DD-B514-D47995ED6AF7' # str | The ID of updated trigger
page = 1 # int | Defines the number of the displayed page. E.g, page=2 would display the 2nd page. (optional)
size = 15 # int | Number of items to be displayed on one page. (optional)

    try:
        # Gets all trigger events for current page and their count
        api_response = api_instance.get_trigger_events(trigger_id, page=page, size=size)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EventApi->get_trigger_events: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 
 **page** | **int**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | [optional] 
 **size** | **int**| Number of items to be displayed on one page. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Events fetched successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

