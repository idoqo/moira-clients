# \NotificationsApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteAllNotification**](NotificationsApi.md#DeleteAllNotification) | **Delete** /notification/all | deletes all available notifications
[**DeleteNotification**](NotificationsApi.md#DeleteNotification) | **Delete** /notification | delete a notification by id
[**GetNotifications**](NotificationsApi.md#GetNotifications) | **Get** /notification | gets a paginated list of notifications, all notifications are fetched if end &#x3D; -1 and start &#x3D; 0



## DeleteAllNotification

> DeleteAllNotification(ctx, )

deletes all available notifications

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


## DeleteNotification

> InlineResponse2003 DeleteNotification(ctx, notificationId)

delete a notification by id

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**notificationId** | [**string**](.md)| The ID of updated trigger | 

### Return type

[**InlineResponse2003**](inline_response_200_3.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNotifications

> NotificationsList GetNotifications(ctx, optional)

gets a paginated list of notifications, all notifications are fetched if end = -1 and start = 0

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GetNotificationsOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a GetNotificationsOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **optional.Int32**|  | [default to 0]
 **end** | **optional.Int32**|  | [default to -1]

### Return type

[**NotificationsList**](NotificationsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

