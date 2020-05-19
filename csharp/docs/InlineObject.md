
# Org.OpenAPITools.Model.InlineObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Desc** | **string** | Trigger description | [optional] 
**ErrorValue** | **decimal** | Target value at which error will be fired | [optional] 
**Expression** | **string** | Expression that will be evaluated | [optional] 
**Id** | **string** |  | [optional] 
**IsRemote** | **bool** | Which storage to use local or remote | [optional] 
**MuteNewMetrics** | **bool** |  | [optional] 
**Name** | **string** | Trigger name | [optional] 
**Patterns** | **List&lt;string&gt;** | Array of possible patterns to check values in simple mode | [optional] 
**Sched** | [**TriggerSched**](TriggerSched.md) |  | [optional] 
**Tags** | **List&lt;string&gt;** | Array of tags associated with this trigger | [optional] 
**Targets** | **List&lt;string&gt;** | Array of targets associated with this trigger | [optional] 
**Throttling** | **int** | Quantity of events before throttling will be enabled | [optional] 
**TriggerType** | **string** |  | [optional] 
**Ttl** | **int** |  | [optional] 
**TtlState** | **string** |  | [optional] 
**WarnValue** | **decimal** | Target value at which warning will be fired | [optional] 
**AloneMetrics** | **List&lt;string&gt;** | An array of targets which have only one metric | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

