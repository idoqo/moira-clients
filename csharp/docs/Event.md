
# Org.OpenAPITools.Model.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerEvent** | **bool** |  | [optional] 
**Timestamp** | **int** |  | [optional] 
**Metric** | **string** |  | [optional] 
**Value** | **decimal** |  | [optional] 
**State** | **string** | State of the metric after the data point was recorded. Should be one of OK, WARN, ERROR, NODATA, EXCEPTION or TEST. | [optional] 
**TriggerId** | **Guid** |  | [optional] 
**SubId** | **string** |  | [optional] 
**ContactId** | **string** |  | [optional] 
**OldState** | **string** | State of the metric before the data point was recorded. | [optional] 
**Msg** | **string** |  | [optional] 
**EventMessage** | [**EventEventMessage**](EventEventMessage.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

