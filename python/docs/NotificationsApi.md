# openapi_client.NotificationsApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_all_notification**](NotificationsApi.md#delete_all_notification) | **DELETE** /notification/all | deletes all available notifications
[**delete_notification**](NotificationsApi.md#delete_notification) | **DELETE** /notification | delete a notification by id
[**get_notifications**](NotificationsApi.md#get_notifications) | **GET** /notification | gets a paginated list of notifications, all notifications are fetched if end &#x3D; -1 and start &#x3D; 0


# **delete_all_notification**
> delete_all_notification()

deletes all available notifications

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
    api_instance = openapi_client.NotificationsApi(api_client)
    
    try:
        # deletes all available notifications
        api_instance.delete_all_notification()
    except ApiException as e:
        print("Exception when calling NotificationsApi->delete_all_notification: %s\n" % e)
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
**200** | all notificiations have been deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_notification**
> InlineResponse2003 delete_notification(notification_id)

delete a notification by id

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
    api_instance = openapi_client.NotificationsApi(api_client)
    notification_id = '5A8AF369-86D2-44DD-B514-D47995ED6AF7' # str | The ID of updated trigger

    try:
        # delete a notification by id
        api_response = api_instance.delete_notification(notification_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling NotificationsApi->delete_notification: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification_id** | [**str**](.md)| The ID of updated trigger | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | notification have been deleted |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notifications**
> NotificationsList get_notifications(start=start, end=end)

gets a paginated list of notifications, all notifications are fetched if end = -1 and start = 0

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
    api_instance = openapi_client.NotificationsApi(api_client)
    start = 0 # int |  (optional) (default to 0)
end = -1 # int |  (optional) (default to -1)

    try:
        # gets a paginated list of notifications, all notifications are fetched if end = -1 and start = 0
        api_response = api_instance.get_notifications(start=start, end=end)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling NotificationsApi->get_notifications: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**|  | [optional] [default to 0]
 **end** | **int**|  | [optional] [default to -1]

### Return type

[**NotificationsList**](NotificationsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Notifications fetched successfully |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

