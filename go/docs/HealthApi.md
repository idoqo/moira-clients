# \HealthApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetNotifierState**](HealthApi.md#GetNotifierState) | **Get** /health/notifier | Get notifier state
[**UpdateNotifierState**](HealthApi.md#UpdateNotifierState) | **Put** /health/notifier | Update notifier state



## GetNotifierState

> NotifierState GetNotifierState(ctx, )

Get notifier state

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**NotifierState**](NotifierState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateNotifierState

> NotifierState UpdateNotifierState(ctx, notifierState)

Update notifier state

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**notifierState** | [**NotifierState**](NotifierState.md)|  | 

### Return type

[**NotifierState**](NotifierState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html, 

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

