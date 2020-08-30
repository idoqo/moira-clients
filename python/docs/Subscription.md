# Subscription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | **list[str]** | ID of contacts that are part of this subscription | [optional] 
**tags** | **list[str]** | The tags for this subscription | [optional] 
**sched** | [**SubscriptionSched**](SubscriptionSched.md) |  | [optional] 
**plotting** | [**SubscriptionPlotting**](SubscriptionPlotting.md) |  | [optional] 
**id** | **str** | ID of this subscription | [optional] 
**enabled** | **bool** | If false, notifications due for thsi subscription will not be sent | [optional] 
**any_tags** | **bool** |  | [optional] 
**ignore_warnings** | **bool** | If true, notifications will not be sent for warning values. | [optional] 
**ignore_recoverings** | **bool** |  | [optional] 
**throttling** | **bool** |  | [optional] 
**user** | **str** | ID of the user that created the subscription | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


