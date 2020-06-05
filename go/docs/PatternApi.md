# \PatternApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeletePattern**](PatternApi.md#DeletePattern) | **Delete** /pattern/{pattern} | Deletes a Moira pattern
[**GetAllPatterns**](PatternApi.md#GetAllPatterns) | **Get** /pattern | Get all patterns



## DeletePattern

> DeletePattern(ctx, pattern)

Deletes a Moira pattern

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pattern** | **string**| Trigger pattern to operate on. | 

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


## GetAllPatterns

> InlineResponse2003 GetAllPatterns(ctx, )

Get all patterns

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2003**](inline_response_200_3.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaton/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

