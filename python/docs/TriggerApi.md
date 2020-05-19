# openapi_client.TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trigger_trigger_id_get**](TriggerApi.md#trigger_trigger_id_get) | **GET** /trigger/{triggerId} | Update existing trigger
[**trigger_trigger_id_metrics_get**](TriggerApi.md#trigger_trigger_id_metrics_get) | **GET** /trigger/{triggerId}/metrics | Get metrics associated with certain trigger
[**trigger_trigger_id_put**](TriggerApi.md#trigger_trigger_id_put) | **PUT** /trigger/{triggerId} | Update existing trigger
[**trigger_trigger_id_render_get**](TriggerApi.md#trigger_trigger_id_render_get) | **GET** /trigger/{triggerId}/render | Get rendered plot for trigger


# **trigger_trigger_id_get**
> object trigger_trigger_id_get()

Update existing trigger

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
    api_instance = openapi_client.TriggerApi(api_client)
    
    try:
        # Update existing trigger
        api_response = api_instance.trigger_trigger_id_get()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->trigger_trigger_id_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Trigger data |  -  |
**404** | Trigger not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trigger_trigger_id_metrics_get**
> trigger_trigger_id_metrics_get()

Get metrics associated with certain trigger

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
    api_instance = openapi_client.TriggerApi(api_client)
    
    try:
        # Get metrics associated with certain trigger
        api_instance.trigger_trigger_id_metrics_get()
    except ApiException as e:
        print("Exception when calling TriggerApi->trigger_trigger_id_metrics_get: %s\n" % e)
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
**200** | Metrics for trigger |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trigger_trigger_id_put**
> InlineResponse2001 trigger_trigger_id_put(trigger_id, body)

Update existing trigger

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
    api_instance = openapi_client.TriggerApi(api_client)
    trigger_id = '5A8AF369-86D2-44DD-B514-D47995ED6AF7' # str | The ID of updated trigger
body = None # object | 

    try:
        # Update existing trigger
        api_response = api_instance.trigger_trigger_id_put(trigger_id, body)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->trigger_trigger_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 
 **body** | **object**|  | 

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
**200** | Trigger updated |  -  |
**400** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trigger_trigger_id_render_get**
> file trigger_trigger_id_render_get(target_id=target_id, _from=_from, to=to)

Get rendered plot for trigger

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
    api_instance = openapi_client.TriggerApi(api_client)
    target_id = 't1' # str | The ID of updated target to print plot for (optional)
_from = '-1hour' # str | The start period of metrics to get (optional)
to = 'now' # str | The end period of metrics to get (optional)

    try:
        # Get rendered plot for trigger
        api_response = api_instance.trigger_trigger_id_render_get(target_id=target_id, _from=_from, to=to)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->trigger_trigger_id_render_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target_id** | **str**| The ID of updated target to print plot for | [optional] 
 **_from** | **str**| The start period of metrics to get | [optional] 
 **to** | **str**| The end period of metrics to get | [optional] 

### Return type

**file**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plot for trigger |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

