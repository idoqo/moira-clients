# openapi_client.SubscriptionApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_subscription**](SubscriptionApi.md#create_subscription) | **PUT** /subscription | create a new subscription
[**delete_subscription**](SubscriptionApi.md#delete_subscription) | **DELETE** /subscription/{subscriptionId} | deletes a subscription
[**get_subscriptions**](SubscriptionApi.md#get_subscriptions) | **GET** /subscription | get all subscriptions
[**test_subscription_notification**](SubscriptionApi.md#test_subscription_notification) | **PUT** /subscription/{subscriptionId}/test | send test notification for a subscription
[**update_subscription**](SubscriptionApi.md#update_subscription) | **PUT** /subscription/{subscriptionId} | update a subscription


# **create_subscription**
> Subscription create_subscription(subscription)

create a new subscription

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
    api_instance = openapi_client.SubscriptionApi(api_client)
    subscription = openapi_client.Subscription() # Subscription | 

    try:
        # create a new subscription
        api_response = api_instance.create_subscription(subscription)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SubscriptionApi->create_subscription: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription** | [**Subscription**](Subscription.md)|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | subscription created |  -  |
**400** | Invalid request data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_subscription**
> delete_subscription(subscription_id)

deletes a subscription

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
    api_instance = openapi_client.SubscriptionApi(api_client)
    subscription_id = 'bcba82f5-48cf-44c0-b7d6-e1d32c64a88c' # str | 

    try:
        # deletes a subscription
        api_instance.delete_subscription(subscription_id)
    except ApiException as e:
        print("Exception when calling SubscriptionApi->delete_subscription: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | [**str**](.md)|  | 

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
**200** | subscription deleted |  -  |
**400** | Bad request from client |  -  |
**404** | Trigger not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_subscriptions**
> InlineResponse2007 get_subscriptions()

get all subscriptions

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
    api_instance = openapi_client.SubscriptionApi(api_client)
    
    try:
        # get all subscriptions
        api_response = api_instance.get_subscriptions()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SubscriptionApi->get_subscriptions: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | subscriptions fetched successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_subscription_notification**
> test_subscription_notification(subscription_id)

send test notification for a subscription

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
    api_instance = openapi_client.SubscriptionApi(api_client)
    subscription_id = 'bcba82f5-48cf-44c0-b7d6-e1d32c64a88c' # str | 

    try:
        # send test notification for a subscription
        api_instance.test_subscription_notification(subscription_id)
    except ApiException as e:
        print("Exception when calling SubscriptionApi->test_subscription_notification: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | [**str**](.md)|  | 

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
**200** | test notification sent successfully |  -  |
**400** | Bad request from client |  -  |
**404** | Trigger not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_subscription**
> Subscription update_subscription(subscription_id, subscription)

update a subscription

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
    api_instance = openapi_client.SubscriptionApi(api_client)
    subscription_id = 'bcba82f5-48cf-44c0-b7d6-e1d32c64a88c' # str | 
subscription = openapi_client.Subscription() # Subscription | 

    try:
        # update a subscription
        api_response = api_instance.update_subscription(subscription_id, subscription)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SubscriptionApi->update_subscription: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | [**str**](.md)|  | 
 **subscription** | [**Subscription**](Subscription.md)|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | subscription updated |  -  |
**400** | invalid request data |  -  |
**404** | Trigger not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

