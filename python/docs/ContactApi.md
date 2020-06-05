# openapi_client.ContactApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_contact**](ContactApi.md#delete_contact) | **DELETE** /contact/{contactId} | Deletes notification contact for the current user and remove the contact ID from all subscriptions.
[**test_contact_notification**](ContactApi.md#test_contact_notification) | **POST** /contact/{contactId}/test | Push a test notification to verify that the contact is properly set up.
[**update_contact**](ContactApi.md#update_contact) | **PUT** /contact/{contactId} | Updates an existing notification contact to the values passed in the request body.


# **delete_contact**
> delete_contact(contact_id)

Deletes notification contact for the current user and remove the contact ID from all subscriptions.

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
    api_instance = openapi_client.ContactApi(api_client)
    contact_id = 'bcba82f5-48cf-44c0-b7d6-e1d32c64a88c' # str | The ID of the target contact

    try:
        # Deletes notification contact for the current user and remove the contact ID from all subscriptions.
        api_instance.delete_contact(contact_id)
    except ApiException as e:
        print("Exception when calling ContactApi->delete_contact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | [**str**](.md)| The ID of the target contact | 

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
**200** | Contact has been deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_contact_notification**
> test_contact_notification(contact_id)

Push a test notification to verify that the contact is properly set up.

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
    api_instance = openapi_client.ContactApi(api_client)
    contact_id = 'bcba82f5-48cf-44c0-b7d6-e1d32c64a88c' # str | The ID of the target contact

    try:
        # Push a test notification to verify that the contact is properly set up.
        api_instance.test_contact_notification(contact_id)
    except ApiException as e:
        print("Exception when calling ContactApi->test_contact_notification: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | [**str**](.md)| The ID of the target contact | 

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
**200** | Test successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_contact**
> Contact update_contact(contact_id, contact_request)

Updates an existing notification contact to the values passed in the request body.

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
    api_instance = openapi_client.ContactApi(api_client)
    contact_id = 'bcba82f5-48cf-44c0-b7d6-e1d32c64a88c' # str | The ID of the target contact
contact_request = openapi_client.ContactRequest() # ContactRequest | 

    try:
        # Updates an existing notification contact to the values passed in the request body.
        api_response = api_instance.update_contact(contact_id, contact_request)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactApi->update_contact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | [**str**](.md)| The ID of the target contact | 
 **contact_request** | [**ContactRequest**](ContactRequest.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contact has been updated |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

