# InlineObject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desc** | **str** | Trigger description | [optional] 
**error_value** | **float** | Target value at which error will be fired | [optional] 
**expression** | **str** | Expression that will be evaluated | [optional] 
**id** | **str** |  | [optional] 
**is_remote** | **bool** | Which storage to use local or remote | [optional] 
**mute_new_metrics** | **bool** |  | [optional] 
**name** | **str** | Trigger name | [optional] 
**patterns** | **list[str]** | Array of possible patterns to check values in simple mode | [optional] 
**sched** | [**TriggerSched**](TriggerSched.md) |  | [optional] 
**tags** | **list[str]** | Array of tags associated with this trigger | [optional] 
**targets** | **list[str]** | Array of targets associated with this trigger | [optional] 
**throttling** | **int** | Quantity of events before throttling will be enabled | [optional] 
**trigger_type** | **str** |  | [optional] 
**ttl** | **int** |  | [optional] 
**ttl_state** | **str** |  | [optional] 
**warn_value** | **float** | Target value at which warning will be fired | [optional] 
**alone_metrics** | **list[str]** | An array of targets which have only one metric | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


