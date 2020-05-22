# openapi_client.TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_trigger**](TriggerApi.md#get_trigger) | **GET** /trigger/{triggerID} | Get an existing trigger
[**get_trigger_metrics**](TriggerApi.md#get_trigger_metrics) | **GET** /trigger/{triggerID}/metrics | Get metrics associated with certain trigger
[**get_trigger_plot**](TriggerApi.md#get_trigger_plot) | **GET** /trigger/{triggerID}/render | Get rendered plot for trigger
[**update_trigger**](TriggerApi.md#update_trigger) | **PUT** /trigger/{triggerID} | Update existing trigger


# **get_trigger**
> Trigger get_trigger(trigger_id)

Get an existing trigger

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

    try:
        # Get an existing trigger
        api_response = api_instance.get_trigger(trigger_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->get_trigger: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 

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
**200** | Trigger data |  -  |
**404** | Trigger not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_trigger_metrics**
> dict(str, list[object]) get_trigger_metrics(trigger_id, _from=_from, to=to)

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
    trigger_id = '5A8AF369-86D2-44DD-B514-D47995ED6AF7' # str | The ID of updated trigger
_from = '-1hour' # str | The start period of metrics to get (optional)
to = 'now' # str | The end period of metrics to get (optional)

    try:
        # Get metrics associated with certain trigger
        api_response = api_instance.get_trigger_metrics(trigger_id, _from=_from, to=to)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->get_trigger_metrics: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 
 **_from** | **str**| The start period of metrics to get | [optional] 
 **to** | **str**| The end period of metrics to get | [optional] 

### Return type

**dict(str, list[object])**

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

# **get_trigger_plot**
> file get_trigger_plot(trigger_id, target_id=target_id, _from=_from, to=to)

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
    trigger_id = '5A8AF369-86D2-44DD-B514-D47995ED6AF7' # str | The ID of updated trigger
target_id = 't1' # str | The ID of updated target to print plot for (optional)
_from = '-1hour' # str | The start period of metrics to get (optional)
to = 'now' # str | The end period of metrics to get (optional)

    try:
        # Get rendered plot for trigger
        api_response = api_instance.get_trigger_plot(trigger_id, target_id=target_id, _from=_from, to=to)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->get_trigger_plot: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 
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

# **update_trigger**
> InlineResponse2001 update_trigger(trigger_id, trigger)

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
trigger = openapi_client.Trigger() # Trigger | 

    try:
        # Update existing trigger
        api_response = api_instance.update_trigger(trigger_id, trigger)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->update_trigger: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 
 **trigger** | [**Trigger**](Trigger.md)|  | 

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

