# \TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTrigger**](TriggerApi.md#GetTrigger) | **Get** /trigger/{triggerID} | Get an existing trigger
[**GetTriggerMetrics**](TriggerApi.md#GetTriggerMetrics) | **Get** /trigger/{triggerID}/metrics | Get metrics associated with certain trigger
[**GetTriggerPlot**](TriggerApi.md#GetTriggerPlot) | **Get** /trigger/{triggerID}/render | Get rendered plot for trigger
[**UpdateTrigger**](TriggerApi.md#UpdateTrigger) | **Put** /trigger/{triggerID} | Update existing trigger



## GetTrigger

> Trigger GetTrigger(ctx, triggerID)

Get an existing trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerMetrics

> map[string][]map[string]interface{} GetTriggerMetrics(ctx, triggerID, optional)

Get metrics associated with certain trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 
 **optional** | ***GetTriggerMetricsOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a GetTriggerMetricsOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **from** | **optional.String**| The start period of metrics to get | 
 **to** | **optional.String**| The end period of metrics to get | 

### Return type

[**map[string][]map[string]interface{}**](array.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerPlot

> *os.File GetTriggerPlot(ctx, triggerID, optional)

Get rendered plot for trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 
 **optional** | ***GetTriggerPlotOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a GetTriggerPlotOpts struct


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


## UpdateTrigger

> InlineResponse2004 UpdateTrigger(ctx, triggerID, trigger)

Update existing trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 
**trigger** | [**Trigger**](Trigger.md)|  | 

### Return type

[**InlineResponse2004**](inline_response_200_4.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

