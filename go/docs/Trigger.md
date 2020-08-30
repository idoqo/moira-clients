# Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the trigger | [optional] 
**Name** | **string** | name of the trigger | 
**Desc** | **string** | informative description of the trigger | 
**Targets** | **[]string** | graphite metric to cause this trigger | [optional] 
**WarnValue** | **int32** | value at which Moira should send a WARNING alert | [optional] 
**ErrorValue** | **int32** | value at which Moira should send an ERROR alert | 
**TriggerType** | **string** | Value is either &#39;rising&#39; or &#39;falling&#39;. Dictates when alerts are sent for &#x60;warn_value&#x60; and &#x60;error_value&#x60; | [optional] 
**Tags** | **[]string** | the tags associated with this trigger. New tags are automatically created | [optional] 
**TtlState** | **string** | state to put the metric in if Moira doesn&#39;t receive new data for it from graphite. See &lt;https://moira.readthedocs.io/en/latest/development/architecture.html?highlight&#x3D;ttl#state/&gt; | 
**Ttl** | **int32** | number of seconds to wait for metric update from Graphite before changing the metric state | 
**Sched** | [**SubscriptionSched**](Subscription_sched.md) |  | [optional] 
**Expression** | **string** |  | [optional] 
**Patterns** | **[]string** | optional Graphite pattern is a single dot-separated metric name, possibly containing one or more wildcards | [optional] 
**IsRemote** | **bool** | dictates if trigger should be added to Graphite instead of Redis. See &lt;https://moira.readthedocs.io/en/latest/installation/configuration.html#remote-triggers-checker/&gt; | [optional] 
**MuteNewMetrics** | **bool** | if true, Moira will notify you each time the metric state changes, e.g NODATA -&gt; OK | 
**Throttling** | **int32** | See &lt;https://moira.readthedocs.io/en/latest/user_guide/throttling.html/&gt; | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


