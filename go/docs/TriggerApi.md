# \TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TriggerTriggerIdGet**](TriggerApi.md#TriggerTriggerIdGet) | **Get** /trigger/{triggerId} | Update existing trigger
[**TriggerTriggerIdMetricsGet**](TriggerApi.md#TriggerTriggerIdMetricsGet) | **Get** /trigger/{triggerId}/metrics | Get metrics associated with certain trigger
[**TriggerTriggerIdPut**](TriggerApi.md#TriggerTriggerIdPut) | **Put** /trigger/{triggerId} | Update existing trigger
[**TriggerTriggerIdRenderGet**](TriggerApi.md#TriggerTriggerIdRenderGet) | **Get** /trigger/{triggerId}/render | Get rendered plot for trigger



## TriggerTriggerIdGet

> map[string]interface{} TriggerTriggerIdGet(ctx, )

Update existing trigger

### Required Parameters

This endpoint does not need any parameter.

### Return type

**map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TriggerTriggerIdMetricsGet

> TriggerTriggerIdMetricsGet(ctx, )

Get metrics associated with certain trigger

### Required Parameters

This endpoint does not need any parameter.

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TriggerTriggerIdPut

> InlineResponse2001 TriggerTriggerIdPut(ctx, triggerID, body)

Update existing trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 
**body** | **map[string]interface{}**|  | 

### Return type

[**InlineResponse2001**](inline_response_200_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TriggerTriggerIdRenderGet

> *os.File TriggerTriggerIdRenderGet(ctx, optional)

Get rendered plot for trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***TriggerTriggerIdRenderGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a TriggerTriggerIdRenderGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetID** | **optional.String**| The ID of updated target to print plot for | 
 **from** | **optional.String**| The start period of metrics to get | 
 **to** | **optional.String**| The end period of metrics to get | 

### Return type

[***os.File**](*os.File.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

