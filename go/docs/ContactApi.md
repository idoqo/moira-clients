# \ContactApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteContact**](ContactApi.md#DeleteContact) | **Delete** /contact/{contactId} | Deletes notification contact for the current user and remove the contact ID from all subscriptions.
[**TestContactNotification**](ContactApi.md#TestContactNotification) | **Post** /contact/{contactId}/test | Push a test notification to verify that the contact is properly set up.
[**UpdateContact**](ContactApi.md#UpdateContact) | **Put** /contact/{contactId} | Updates an existing notification contact to the values passed in the request body.



## DeleteContact

> DeleteContact(ctx, contactId)

Deletes notification contact for the current user and remove the contact ID from all subscriptions.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**contactId** | [**string**](.md)| The ID of the target contact | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TestContactNotification

> TestContactNotification(ctx, contactId)

Push a test notification to verify that the contact is properly set up.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**contactId** | [**string**](.md)| The ID of the target contact | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateContact

> Contact UpdateContact(ctx, contactId, contactRequest)

Updates an existing notification contact to the values passed in the request body.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**contactId** | [**string**](.md)| The ID of the target contact | 
**contactRequest** | [**ContactRequest**](ContactRequest.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

