# openapi_client.HealthApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_notifier_state**](HealthApi.md#get_notifier_state) | **GET** /health/notifier | Get notifier state
[**update_notifier_state**](HealthApi.md#update_notifier_state) | **PUT** /health/notifier | Update notifier state


# **get_notifier_state**
> NotifierState get_notifier_state()

Get notifier state

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
    api_instance = openapi_client.HealthApi(api_client)
    
    try:
        # Get notifier state
        api_response = api_instance.get_notifier_state()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling HealthApi->get_notifier_state: %s\n" % e)
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
**200** | Notifier state retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_notifier_state**
> NotifierState update_notifier_state(notifier_state)

Update notifier state

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
    api_instance = openapi_client.HealthApi(api_client)
    notifier_state = {"state":"OK","message":""} # NotifierState | 

    try:
        # Update notifier state
        api_response = api_instance.update_notifier_state(notifier_state)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling HealthApi->update_notifier_state: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notifier_state** | [**NotifierState**](NotifierState.md)|  | 

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
**200** | Update state of the Moira service |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

