# openapi_client.ContactsApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_new_contact**](ContactsApi.md#create_new_contact) | **PUT** /contact | Creates a new contact notification for the current user.
[**get_contacts**](ContactsApi.md#get_contacts) | **GET** /contact | Gets all Moira contacts.


# **create_new_contact**
> Contact create_new_contact(contact_request)

Creates a new contact notification for the current user.

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
    api_instance = openapi_client.ContactsApi(api_client)
    contact_request = openapi_client.ContactRequest() # ContactRequest | 

    try:
        # Creates a new contact notification for the current user.
        api_response = api_instance.create_new_contact(contact_request)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactsApi->create_new_contact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_request** | [**ContactRequest**](ContactRequest.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: applicaton/json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contact created successfully. |  -  |
**400** | Bad request from client |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_contacts**
> InlineResponse2001 get_contacts()

Gets all Moira contacts.

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
    api_instance = openapi_client.ContactsApi(api_client)
    
    try:
        # Gets all Moira contacts.
        api_response = api_instance.get_contacts()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ContactsApi->get_contacts: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contacts fetched successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

