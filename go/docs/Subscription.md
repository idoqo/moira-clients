# Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Contacts** | **[]string** | ID of contacts that are part of this subscription | [optional] 
**Tags** | **[]string** | The tags for this subscription | [optional] 
**Sched** | [**SubscriptionSched**](Subscription_sched.md) |  | [optional] 
**Plotting** | [**SubscriptionPlotting**](Subscription_plotting.md) |  | [optional] 
**Id** | **string** | ID of this subscription | [optional] 
**Enabled** | **bool** | If false, notifications due for thsi subscription will not be sent | [optional] 
**AnyTags** | **bool** |  | [optional] 
**IgnoreWarnings** | **bool** | If true, notifications will not be sent for warning values. | [optional] 
**IgnoreRecoverings** | **bool** |  | [optional] 
**Throttling** | **bool** |  | [optional] 
**User** | **string** | ID of the user that created the subscription | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


