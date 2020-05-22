from __future__ import print_function

import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/api"
)



# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    
    try:
        # Get available configuration
        api_response = api_instance.user_settings_get()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserApi->config_get: %s\n" % e)