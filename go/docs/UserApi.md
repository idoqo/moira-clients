# \UserApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetUser**](UserApi.md#GetUser) | **Get** /user | Gets the username of the authenticated user if it is available.
[**GetUserSettings**](UserApi.md#GetUserSettings) | **Get** /user/settings | Get the user&#39;s contacts and subscriptions.



## GetUser

> User GetUser(ctx, )

Gets the username of the authenticated user if it is available.

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserSettings

> InlineResponse2005 GetUserSettings(ctx, )

Get the user's contacts and subscriptions.

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2005**](inline_response_200_5.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

