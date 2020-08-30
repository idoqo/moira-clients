# \TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateTrigger**](TriggerApi.md#CreateTrigger) | **Put** /trigger | create new trigger
[**DeleteTrigger**](TriggerApi.md#DeleteTrigger) | **Delete** /trigger/{triggerID} | remove a trigger
[**DeleteTriggerMetric**](TriggerApi.md#DeleteTriggerMetric) | **Delete** /trigger/{triggerID}/metrics | deletes metric from last check and all trigger pattern metrics
[**DeleteTriggerNoDataMetrics**](TriggerApi.md#DeleteTriggerNoDataMetrics) | **Delete** /trigger/{triggerID}/metrics/nodata | deletes all metrics from last data which are in NODATA state. It also deletes all trigger patterns of those metrics
[**DeleteTriggerThrottling**](TriggerApi.md#DeleteTriggerThrottling) | **Delete** /trigger/{triggerID}/throttling | Deletes throttling for a trigger
[**GetTrigger**](TriggerApi.md#GetTrigger) | **Get** /trigger/{triggerID} | Get an existing trigger
[**GetTriggerMetrics**](TriggerApi.md#GetTriggerMetrics) | **Get** /trigger/{triggerID}/metrics | Get metrics associated with certain trigger
[**GetTriggerPlot**](TriggerApi.md#GetTriggerPlot) | **Get** /trigger/{triggerID}/render | Get rendered plot for trigger
[**GetTriggerState**](TriggerApi.md#GetTriggerState) | **Get** /trigger/{triggerID}/state | Get the trigger state as at last check
[**GetTriggerThrottling**](TriggerApi.md#GetTriggerThrottling) | **Get** /trigger/{triggerID}/throttling | Get a trigger with its throttling i.e its next allowed message time
[**GetTriggers**](TriggerApi.md#GetTriggers) | **Get** /trigger | get all triggers
[**SearchTriggers**](TriggerApi.md#SearchTriggers) | **Get** /trigger/search | Search triggers. Replaces the deprecated &#x60;page&#x60; path
[**SearchTriggersPage**](TriggerApi.md#SearchTriggersPage) | **Get** /trigger/page | Search triggers. Deprecated, use the &#x60;search&#x60; endpoint instead
[**SetTriggerMaintenance**](TriggerApi.md#SetTriggerMaintenance) | **Put** /trigger/{triggerID}/setMaintenance | sets metrics and the trigger itself to maintenance mode
[**UpdateTrigger**](TriggerApi.md#UpdateTrigger) | **Put** /trigger/{triggerID} | Update existing trigger



## CreateTrigger

> InlineResponse2009 CreateTrigger(ctx, trigger)

create new trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**trigger** | [**Trigger**](Trigger.md)|  | 

### Return type

[**InlineResponse2009**](inline_response_200_9.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTrigger

> DeleteTrigger(ctx, triggerID)

remove a trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTriggerMetric

> DeleteTriggerMetric(ctx, triggerID, name)

deletes metric from last check and all trigger pattern metrics

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 
**name** | **string**| Name of the target metric | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTriggerNoDataMetrics

> DeleteTriggerNoDataMetrics(ctx, triggerID)

deletes all metrics from last data which are in NODATA state. It also deletes all trigger patterns of those metrics

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTriggerThrottling

> DeleteTriggerThrottling(ctx, triggerID)

Deletes throttling for a trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


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
- **Accept**: application/json, text/html, 

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
- **Accept**: application/json, text/html, 

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
- **Accept**: image/png, application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerState

> TriggerCheck GetTriggerState(ctx, triggerID)

Get the trigger state as at last check

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 

### Return type

[**TriggerCheck**](TriggerCheck.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerThrottling

> InlineResponse20011 GetTriggerThrottling(ctx, triggerID)

Get a trigger with its throttling i.e its next allowed message time

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 

### Return type

[**InlineResponse20011**](inline_response_200_11.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggers

> InlineResponse2008 GetTriggers(ctx, )

get all triggers

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2008**](inline_response_200_8.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchTriggers

> InlineResponse20010 SearchTriggers(ctx, text, optional)

Search triggers. Replaces the deprecated `page` path

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**text** | **string**| query to perform a search for | 
 **optional** | ***SearchTriggersOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a SearchTriggersOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **onlyProblems** | **optional.Bool**| Restricts the result to errors only | 
 **page** | **optional.Int32**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | 

### Return type

[**InlineResponse20010**](inline_response_200_10.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchTriggersPage

> InlineResponse20010 SearchTriggersPage(ctx, text, optional)

Search triggers. Deprecated, use the `search` endpoint instead

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**text** | **string**| query to perform a search for | 
 **optional** | ***SearchTriggersPageOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a SearchTriggersPageOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **onlyProblems** | **optional.Bool**| Restricts the result to errors only | 
 **page** | **optional.Int32**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | 

### Return type

[**InlineResponse20010**](inline_response_200_10.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetTriggerMaintenance

> SetTriggerMaintenance(ctx, triggerID, uNKNOWNBASETYPE)

sets metrics and the trigger itself to maintenance mode

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 
**uNKNOWNBASETYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTrigger

> InlineResponse2009 UpdateTrigger(ctx, triggerID, trigger)

Update existing trigger

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**triggerID** | [**string**](.md)| The ID of updated trigger | 
**trigger** | [**Trigger**](Trigger.md)|  | 

### Return type

[**InlineResponse2009**](inline_response_200_9.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html, 

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

