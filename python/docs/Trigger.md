# Trigger

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the trigger | [optional] 
**name** | **str** | name of the trigger | 
**desc** | **str** | informative description of the trigger | 
**targets** | **list[str]** | graphite metric to cause this trigger | [optional] 
**warn_value** | **int** | value at which Moira should send a WARNING alert | [optional] 
**error_value** | **int** | value at which Moira should send an ERROR alert | 
**trigger_type** | **str** | Value is either &#39;rising&#39; or &#39;falling&#39;. Dictates when alerts are sent for &#x60;warn_value&#x60; and &#x60;error_value&#x60; | [optional] 
**tags** | **list[str]** | the tags associated with this trigger. New tags are automatically created | [optional] 
**ttl_state** | **str** | state to put the metric in if Moira doesn&#39;t receive new data for it from graphite. See &lt;https://moira.readthedocs.io/en/latest/development/architecture.html?highlight&#x3D;ttl#state/&gt; | 
**ttl** | **int** | number of seconds to wait for metric update from Graphite before changing the metric state | 
**sched** | [**SubscriptionSched**](SubscriptionSched.md) |  | [optional] 
**expression** | **str** |  | [optional] 
**patterns** | **list[str]** | optional Graphite pattern is a single dot-separated metric name, possibly containing one or more wildcards | [optional] 
**is_remote** | **bool** | dictates if trigger should be added to Graphite instead of Redis. See &lt;https://moira.readthedocs.io/en/latest/installation/configuration.html#remote-triggers-checker/&gt; | [optional] 
**mute_new_metrics** | **bool** | if true, Moira will notify you each time the metric state changes, e.g NODATA -&gt; OK | 
**throttling** | **int** | See &lt;https://moira.readthedocs.io/en/latest/user_guide/throttling.html/&gt; | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


