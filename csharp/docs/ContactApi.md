# Org.OpenAPITools.Api.ContactApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateNewContact**](ContactApi.md#createnewcontact) | **PUT** /contact | Creates a new contact notification for the current user.
[**DeleteContact**](ContactApi.md#deletecontact) | **DELETE** /contact/{contactId} | Deletes notification contact for the current user and remove the contact ID from all subscriptions.
[**GetContacts**](ContactApi.md#getcontacts) | **GET** /contact | Gets all Moira contacts.
[**TestContactNotification**](ContactApi.md#testcontactnotification) | **POST** /contact/{contactId}/test | Push a test notification to verify that the contact is properly set up.
[**UpdateContact**](ContactApi.md#updatecontact) | **PUT** /contact/{contactId} | Updates an existing notification contact to the values passed in the request body.



## CreateNewContact

> Contact CreateNewContact (ContactRequest contactRequest)

Creates a new contact notification for the current user.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateNewContactExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new ContactApi(Configuration.Default);
            var contactRequest = new ContactRequest(); // ContactRequest | 

            try
            {
                // Creates a new contact notification for the current user.
                Contact result = apiInstance.CreateNewContact(contactRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactApi.CreateNewContact: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactRequest** | [**ContactRequest**](ContactRequest.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact created successfully. |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteContact

> void DeleteContact (Guid contactId)

Deletes notification contact for the current user and remove the contact ID from all subscriptions.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteContactExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new ContactApi(Configuration.Default);
            var contactId = new Guid(); // Guid | The ID of the target contact

            try
            {
                // Deletes notification contact for the current user and remove the contact ID from all subscriptions.
                apiInstance.DeleteContact(contactId);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactApi.DeleteContact: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**Guid**](Guid.md)| The ID of the target contact | 

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
| **200** | Contact has been deleted |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetContacts

> InlineResponse2001 GetContacts ()

Gets all Moira contacts.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetContactsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new ContactApi(Configuration.Default);

            try
            {
                // Gets all Moira contacts.
                InlineResponse2001 result = apiInstance.GetContacts();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactApi.GetContacts: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
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
| **200** | Contacts fetched successfully |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TestContactNotification

> void TestContactNotification (Guid contactId)

Push a test notification to verify that the contact is properly set up.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class TestContactNotificationExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new ContactApi(Configuration.Default);
            var contactId = new Guid(); // Guid | The ID of the target contact

            try
            {
                // Push a test notification to verify that the contact is properly set up.
                apiInstance.TestContactNotification(contactId);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactApi.TestContactNotification: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**Guid**](Guid.md)| The ID of the target contact | 

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
| **200** | Test successful. |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateContact

> Contact UpdateContact (Guid contactId, ContactRequest contactRequest)

Updates an existing notification contact to the values passed in the request body.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateContactExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new ContactApi(Configuration.Default);
            var contactId = new Guid(); // Guid | The ID of the target contact
            var contactRequest = new ContactRequest(); // ContactRequest | 

            try
            {
                // Updates an existing notification contact to the values passed in the request body.
                Contact result = apiInstance.UpdateContact(contactId, contactRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactApi.UpdateContact: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**Guid**](Guid.md)| The ID of the target contact | 
 **contactRequest** | [**ContactRequest**](ContactRequest.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact has been updated |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

