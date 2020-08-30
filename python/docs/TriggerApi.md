# openapi_client.TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_trigger**](TriggerApi.md#create_trigger) | **PUT** /trigger | create new trigger
[**delete_trigger**](TriggerApi.md#delete_trigger) | **DELETE** /trigger/{triggerID} | remove a trigger
[**delete_trigger_metric**](TriggerApi.md#delete_trigger_metric) | **DELETE** /trigger/{triggerID}/metrics | deletes metric from last check and all trigger pattern metrics
[**delete_trigger_no_data_metrics**](TriggerApi.md#delete_trigger_no_data_metrics) | **DELETE** /trigger/{triggerID}/metrics/nodata | deletes all metrics from last data which are in NODATA state. It also deletes all trigger patterns of those metrics
[**delete_trigger_throttling**](TriggerApi.md#delete_trigger_throttling) | **DELETE** /trigger/{triggerID}/throttling | Deletes throttling for a trigger
[**get_trigger**](TriggerApi.md#get_trigger) | **GET** /trigger/{triggerID} | Get an existing trigger
[**get_trigger_metrics**](TriggerApi.md#get_trigger_metrics) | **GET** /trigger/{triggerID}/metrics | Get metrics associated with certain trigger
[**get_trigger_plot**](TriggerApi.md#get_trigger_plot) | **GET** /trigger/{triggerID}/render | Get rendered plot for trigger
[**get_trigger_state**](TriggerApi.md#get_trigger_state) | **GET** /trigger/{triggerID}/state | Get the trigger state as at last check
[**get_trigger_throttling**](TriggerApi.md#get_trigger_throttling) | **GET** /trigger/{triggerID}/throttling | Get a trigger with its throttling i.e its next allowed message time
[**get_triggers**](TriggerApi.md#get_triggers) | **GET** /trigger | get all triggers
[**search_triggers**](TriggerApi.md#search_triggers) | **GET** /trigger/search | Search triggers. Replaces the deprecated &#x60;page&#x60; path
[**search_triggers_page**](TriggerApi.md#search_triggers_page) | **GET** /trigger/page | Search triggers. Deprecated, use the &#x60;search&#x60; endpoint instead
[**set_trigger_maintenance**](TriggerApi.md#set_trigger_maintenance) | **PUT** /trigger/{triggerID}/setMaintenance | sets metrics and the trigger itself to maintenance mode
[**update_trigger**](TriggerApi.md#update_trigger) | **PUT** /trigger/{triggerID} | Update existing trigger


# **create_trigger**
> InlineResponse2009 create_trigger(trigger)

create new trigger

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
    trigger = openapi_client.Trigger() # Trigger | 

    try:
        # create new trigger
        api_response = api_instance.create_trigger(trigger)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->create_trigger: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger** | [**Trigger**](Trigger.md)|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Trigger created |  -  |
**400** | Failed to create trigger due to invalid request body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_trigger**
> delete_trigger(trigger_id)

remove a trigger

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
        # remove a trigger
        api_instance.delete_trigger(trigger_id)
    except ApiException as e:
        print("Exception when calling TriggerApi->delete_trigger: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 

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
**200** | Trigger has been deleted |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_trigger_metric**
> delete_trigger_metric(trigger_id, name)

deletes metric from last check and all trigger pattern metrics

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
name = 'DevOps.my_server.hdd.freespace_mbytes' # str | Name of the target metric

    try:
        # deletes metric from last check and all trigger pattern metrics
        api_instance.delete_trigger_metric(trigger_id, name)
    except ApiException as e:
        print("Exception when calling TriggerApi->delete_trigger_metric: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 
 **name** | **str**| Name of the target metric | 

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
**200** | Trigger metric has been deleted |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_trigger_no_data_metrics**
> delete_trigger_no_data_metrics(trigger_id)

deletes all metrics from last data which are in NODATA state. It also deletes all trigger patterns of those metrics

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
        # deletes all metrics from last data which are in NODATA state. It also deletes all trigger patterns of those metrics
        api_instance.delete_trigger_no_data_metrics(trigger_id)
    except ApiException as e:
        print("Exception when calling TriggerApi->delete_trigger_no_data_metrics: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 

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
**200** | NODATA metrics have been deleted |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_trigger_throttling**
> delete_trigger_throttling(trigger_id)

Deletes throttling for a trigger

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
        # Deletes throttling for a trigger
        api_instance.delete_trigger_throttling(trigger_id)
    except ApiException as e:
        print("Exception when calling TriggerApi->delete_trigger_throttling: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 

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
**200** | trigger throttling has been deleted |  -  |
**400** | Bad request from client |  -  |
**404** | Trigger not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Trigger data |  -  |
**400** | Bad request from client |  -  |
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
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Metrics for trigger |  -  |
**400** | Bad request from client |  -  |
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
 - **Accept**: image/png, application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plot for trigger |  -  |
**400** | Bad request from client |  -  |
**404** | Trigger not found |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_trigger_state**
> TriggerCheck get_trigger_state(trigger_id)

Get the trigger state as at last check

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
        # Get the trigger state as at last check
        api_response = api_instance.get_trigger_state(trigger_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->get_trigger_state: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 

### Return type

[**TriggerCheck**](TriggerCheck.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | trigger state fetched successfully |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_trigger_throttling**
> InlineResponse20011 get_trigger_throttling(trigger_id)

Get a trigger with its throttling i.e its next allowed message time

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
        # Get a trigger with its throttling i.e its next allowed message time
        api_response = api_instance.get_trigger_throttling(trigger_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->get_trigger_throttling: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | trigger throttle info retrieved |  -  |
**400** | Bad request from client |  -  |
**404** | Trigger not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_triggers**
> InlineResponse2008 get_triggers()

get all triggers

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
        # get all triggers
        api_response = api_instance.get_triggers()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->get_triggers: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | fetched all triggers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_triggers**
> InlineResponse20010 search_triggers(text, only_problems=only_problems, page=page)

Search triggers. Replaces the deprecated `page` path

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
    text = 'cpu' # str | query to perform a search for
only_problems = false # bool | Restricts the result to errors only (optional)
page = 1 # int | Defines the number of the displayed page. E.g, page=2 would display the 2nd page. (optional)

    try:
        # Search triggers. Replaces the deprecated `page` path
        api_response = api_instance.search_triggers(text, only_problems=only_problems, page=page)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->search_triggers: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| query to perform a search for | 
 **only_problems** | **bool**| Restricts the result to errors only | [optional] 
 **page** | **int**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | fetched matching triggers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_triggers_page**
> InlineResponse20010 search_triggers_page(text, only_problems=only_problems, page=page)

Search triggers. Deprecated, use the `search` endpoint instead

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
    text = 'cpu' # str | query to perform a search for
only_problems = false # bool | Restricts the result to errors only (optional)
page = 1 # int | Defines the number of the displayed page. E.g, page=2 would display the 2nd page. (optional)

    try:
        # Search triggers. Deprecated, use the `search` endpoint instead
        api_response = api_instance.search_triggers_page(text, only_problems=only_problems, page=page)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TriggerApi->search_triggers_page: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| query to perform a search for | 
 **only_problems** | **bool**| Restricts the result to errors only | [optional] 
 **page** | **int**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | fetched matching triggers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_trigger_maintenance**
> set_trigger_maintenance(trigger_id, unknown_base_type)

sets metrics and the trigger itself to maintenance mode

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
unknown_base_type = openapi_client.UNKNOWN_BASE_TYPE() # UNKNOWN_BASE_TYPE | 

    try:
        # sets metrics and the trigger itself to maintenance mode
        api_instance.set_trigger_maintenance(trigger_id, unknown_base_type)
    except ApiException as e:
        print("Exception when calling TriggerApi->set_trigger_maintenance: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger_id** | [**str**](.md)| The ID of updated trigger | 
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | trigger or metric have been scheduled for maintenance |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_trigger**
> InlineResponse2009 update_trigger(trigger_id, trigger)

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

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Trigger updated |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

