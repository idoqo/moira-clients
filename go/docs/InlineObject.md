# InlineObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Desc** | **string** | Trigger description | [optional] 
**ErrorValue** | **float32** | Target value at which error will be fired | [optional] 
**Expression** | **string** | Expression that will be evaluated | [optional] 
**Id** | **string** |  | [optional] 
**IsRemote** | **bool** | Which storage to use local or remote | [optional] 
**MuteNewMetrics** | **bool** |  | [optional] 
**Name** | **string** | Trigger name | [optional] 
**Patterns** | **[]string** | Array of possible patterns to check values in simple mode | [optional] 
**Sched** | [**TriggerSched**](_trigger_sched.md) |  | [optional] 
**Tags** | **[]string** | Array of tags associated with this trigger | [optional] 
**Targets** | **[]string** | Array of targets associated with this trigger | [optional] 
**Throttling** | **int32** | Quantity of events before throttling will be enabled | [optional] 
**TriggerType** | **string** |  | [optional] 
**Ttl** | **int32** |  | [optional] 
**TtlState** | **string** |  | [optional] 
**WarnValue** | **float32** | Target value at which warning will be fired | [optional] 
**AloneMetrics** | **[]string** | An array of targets which have only one metric | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


