# Org.OpenAPITools.Api.TriggerApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateTrigger**](TriggerApi.md#createtrigger) | **PUT** /trigger | create new trigger
[**DeleteTrigger**](TriggerApi.md#deletetrigger) | **DELETE** /trigger/{triggerID} | remove a trigger
[**DeleteTriggerMetric**](TriggerApi.md#deletetriggermetric) | **DELETE** /trigger/{triggerID}/metrics | deletes metric from last check and all trigger pattern metrics
[**DeleteTriggerNoDataMetrics**](TriggerApi.md#deletetriggernodatametrics) | **DELETE** /trigger/{triggerID}/metrics/nodata | deletes all metrics from last data which are in NODATA state. It also deletes all trigger patterns of those metrics
[**DeleteTriggerThrottling**](TriggerApi.md#deletetriggerthrottling) | **DELETE** /trigger/{triggerID}/throttling | Deletes throttling for a trigger
[**GetTrigger**](TriggerApi.md#gettrigger) | **GET** /trigger/{triggerID} | Get an existing trigger
[**GetTriggerMetrics**](TriggerApi.md#gettriggermetrics) | **GET** /trigger/{triggerID}/metrics | Get metrics associated with certain trigger
[**GetTriggerPlot**](TriggerApi.md#gettriggerplot) | **GET** /trigger/{triggerID}/render | Get rendered plot for trigger
[**GetTriggerState**](TriggerApi.md#gettriggerstate) | **GET** /trigger/{triggerID}/state | Get the trigger state as at last check
[**GetTriggerThrottling**](TriggerApi.md#gettriggerthrottling) | **GET** /trigger/{triggerID}/throttling | Get a trigger with its throttling i.e its next allowed message time
[**GetTriggers**](TriggerApi.md#gettriggers) | **GET** /trigger | get all triggers
[**SearchTriggers**](TriggerApi.md#searchtriggers) | **GET** /trigger/search | Search triggers. Replaces the deprecated &#x60;page&#x60; path
[**SearchTriggersPage**](TriggerApi.md#searchtriggerspage) | **GET** /trigger/page | Search triggers. Deprecated, use the &#x60;search&#x60; endpoint instead
[**SetTriggerMaintenance**](TriggerApi.md#settriggermaintenance) | **PUT** /trigger/{triggerID}/setMaintenance | sets metrics and the trigger itself to maintenance mode
[**UpdateTrigger**](TriggerApi.md#updatetrigger) | **PUT** /trigger/{triggerID} | Update existing trigger



## CreateTrigger

> InlineResponse2009 CreateTrigger (Trigger trigger)

create new trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateTriggerExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var trigger = new Trigger(); // Trigger | 

            try
            {
                // create new trigger
                InlineResponse2009 result = apiInstance.CreateTrigger(trigger);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.CreateTrigger: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger** | [**Trigger**](Trigger.md)|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger created |  -  |
| **400** | Failed to create trigger due to invalid request body |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTrigger

> void DeleteTrigger (Guid triggerID)

remove a trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteTriggerExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger

            try
            {
                // remove a trigger
                apiInstance.DeleteTrigger(triggerID);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.DeleteTrigger: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger has been deleted |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTriggerMetric

> void DeleteTriggerMetric (Guid triggerID, string name)

deletes metric from last check and all trigger pattern metrics

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteTriggerMetricExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var name = DevOps.my_server.hdd.freespace_mbytes;  // string | Name of the target metric

            try
            {
                // deletes metric from last check and all trigger pattern metrics
                apiInstance.DeleteTriggerMetric(triggerID, name);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.DeleteTriggerMetric: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 
 **name** | **string**| Name of the target metric | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger metric has been deleted |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTriggerNoDataMetrics

> void DeleteTriggerNoDataMetrics (Guid triggerID)

deletes all metrics from last data which are in NODATA state. It also deletes all trigger patterns of those metrics

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteTriggerNoDataMetricsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger

            try
            {
                // deletes all metrics from last data which are in NODATA state. It also deletes all trigger patterns of those metrics
                apiInstance.DeleteTriggerNoDataMetrics(triggerID);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.DeleteTriggerNoDataMetrics: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | NODATA metrics have been deleted |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTriggerThrottling

> void DeleteTriggerThrottling (Guid triggerID)

Deletes throttling for a trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteTriggerThrottlingExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger

            try
            {
                // Deletes throttling for a trigger
                apiInstance.DeleteTriggerThrottling(triggerID);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.DeleteTriggerThrottling: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | trigger throttling has been deleted |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTrigger

> Trigger GetTrigger (Guid triggerID)

Get an existing trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger

            try
            {
                // Get an existing trigger
                Trigger result = apiInstance.GetTrigger(triggerID);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTrigger: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger data |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerMetrics

> Dictionary&lt;string, List&lt;Object&gt;&gt; GetTriggerMetrics (Guid triggerID, string from = null, string to = null)

Get metrics associated with certain trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerMetricsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var from = -1hour;  // string | The start period of metrics to get (optional) 
            var to = now;  // string | The end period of metrics to get (optional) 

            try
            {
                // Get metrics associated with certain trigger
                Dictionary<string, List<Object>> result = apiInstance.GetTriggerMetrics(triggerID, from, to);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTriggerMetrics: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 
 **from** | **string**| The start period of metrics to get | [optional] 
 **to** | **string**| The end period of metrics to get | [optional] 

### Return type

**Dictionary<string, List<Object>>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Metrics for trigger |  -  |
| **400** | Bad request from client |  -  |
| **500** | Server error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerPlot

> System.IO.Stream GetTriggerPlot (Guid triggerID, string targetID = null, string from = null, string to = null)

Get rendered plot for trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerPlotExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var targetID = t1;  // string | The ID of updated target to print plot for (optional) 
            var from = -1hour;  // string | The start period of metrics to get (optional) 
            var to = now;  // string | The end period of metrics to get (optional) 

            try
            {
                // Get rendered plot for trigger
                System.IO.Stream result = apiInstance.GetTriggerPlot(triggerID, targetID, from, to);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTriggerPlot: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 
 **targetID** | **string**| The ID of updated target to print plot for | [optional] 
 **from** | **string**| The start period of metrics to get | [optional] 
 **to** | **string**| The end period of metrics to get | [optional] 

### Return type

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plot for trigger |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |
| **500** | Server error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerState

> TriggerCheck GetTriggerState (Guid triggerID)

Get the trigger state as at last check

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerStateExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger

            try
            {
                // Get the trigger state as at last check
                TriggerCheck result = apiInstance.GetTriggerState(triggerID);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTriggerState: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 

### Return type

[**TriggerCheck**](TriggerCheck.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | trigger state fetched successfully |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggerThrottling

> InlineResponse20011 GetTriggerThrottling (Guid triggerID)

Get a trigger with its throttling i.e its next allowed message time

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggerThrottlingExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger

            try
            {
                // Get a trigger with its throttling i.e its next allowed message time
                InlineResponse20011 result = apiInstance.GetTriggerThrottling(triggerID);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTriggerThrottling: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | trigger throttle info retrieved |  -  |
| **400** | Bad request from client |  -  |
| **404** | Trigger not found |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTriggers

> InlineResponse2008 GetTriggers ()

get all triggers

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTriggersExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);

            try
            {
                // get all triggers
                InlineResponse2008 result = apiInstance.GetTriggers();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.GetTriggers: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | fetched all triggers |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchTriggers

> InlineResponse20010 SearchTriggers (string text, bool? onlyProblems = null, int? page = null)

Search triggers. Replaces the deprecated `page` path

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class SearchTriggersExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var text = cpu;  // string | query to perform a search for
            var onlyProblems = false;  // bool? | Restricts the result to errors only (optional) 
            var page = 1;  // int? | Defines the number of the displayed page. E.g, page=2 would display the 2nd page. (optional) 

            try
            {
                // Search triggers. Replaces the deprecated `page` path
                InlineResponse20010 result = apiInstance.SearchTriggers(text, onlyProblems, page);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.SearchTriggers: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **string**| query to perform a search for | 
 **onlyProblems** | **bool?**| Restricts the result to errors only | [optional] 
 **page** | **int?**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | fetched matching triggers |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchTriggersPage

> InlineResponse20010 SearchTriggersPage (string text, bool? onlyProblems = null, int? page = null)

Search triggers. Deprecated, use the `search` endpoint instead

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class SearchTriggersPageExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var text = cpu;  // string | query to perform a search for
            var onlyProblems = false;  // bool? | Restricts the result to errors only (optional) 
            var page = 1;  // int? | Defines the number of the displayed page. E.g, page=2 would display the 2nd page. (optional) 

            try
            {
                // Search triggers. Deprecated, use the `search` endpoint instead
                InlineResponse20010 result = apiInstance.SearchTriggersPage(text, onlyProblems, page);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.SearchTriggersPage: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **string**| query to perform a search for | 
 **onlyProblems** | **bool?**| Restricts the result to errors only | [optional] 
 **page** | **int?**| Defines the number of the displayed page. E.g, page&#x3D;2 would display the 2nd page. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | fetched matching triggers |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetTriggerMaintenance

> void SetTriggerMaintenance (Guid triggerID, UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE)

sets metrics and the trigger itself to maintenance mode

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class SetTriggerMaintenanceExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 

            try
            {
                // sets metrics and the trigger itself to maintenance mode
                apiInstance.SetTriggerMaintenance(triggerID, UNKNOWN_BASE_TYPE);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.SetTriggerMaintenance: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | trigger or metric have been scheduled for maintenance |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTrigger

> InlineResponse2009 UpdateTrigger (Guid triggerID, Trigger trigger)

Update existing trigger

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateTriggerExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "http://localhost:8080/api";
            var apiInstance = new TriggerApi(Configuration.Default);
            var triggerID = new Guid(); // Guid | The ID of updated trigger
            var trigger = new Trigger(); // Trigger | 

            try
            {
                // Update existing trigger
                InlineResponse2009 result = apiInstance.UpdateTrigger(triggerID, trigger);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TriggerApi.UpdateTrigger: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerID** | [**Guid**](Guid.md)| The ID of updated trigger | 
 **trigger** | [**Trigger**](Trigger.md)|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html, 

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger updated |  -  |
| **400** | Bad request from client |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

