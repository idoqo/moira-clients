# \EventApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteEvents**](EventApi.md#DeleteEvents) | **Delete** /event/all | Deletes all notification events
[**GetTriggerEvents**](EventApi.md#GetTriggerEvents) | **Get** /event/{triggerID} | Gets all trigger events for current page and their count



## DeleteEvents

> DeleteEvents(ctx, )

Deletes all notification events

### Required Parameters

This endpoint does not need any parameter.

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


## GetTriggerEvents

> InlineResponse2002 GetTriggerEvents(ctx, triggerID, optional)

Gets all trigger events for current page and their count

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 
 **optional** | ***GetTriggerEventsOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a GetTriggerEventsOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **page** | **optional.Int32**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | 
 **size** | **optional.Int32**| Number of items to be displayed on one page. | 

### Return type

[**InlineResponse2002**](inline_response_200_2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

