# coding: utf-8

"""
    Moira Alert

    This is an API description for Moira Alert project. Please check https://github.com/moira-alert  # noqa: E501

    The version of the OpenAPI document: 2.5.1.47
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import openapi_client
from openapi_client.models.inline_response2005 import InlineResponse2005  # noqa: E501
from openapi_client.rest import ApiException

class TestInlineResponse2005(unittest.TestCase):
    """InlineResponse2005 unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test InlineResponse2005
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.inline_response2005.InlineResponse2005()  # noqa: E501
        if include_optional :
            return InlineResponse2005(
                login = 'petr', 
                contacts = [
                    openapi_client.models.contact.Contact(
                        id = '1dd38765-c5be-418d-81fa-7a5f879c2315', 
                        user = '0', 
                        type = 'mail', 
                        value = 'devops@example.com', )
                    ], 
                subscriptions = [
                    openapi_client.models.subscription.Subscription(
                        contacts = [
                            '0'
                            ], 
                        tags = [
                            '0'
                            ], 
                        sched = openapi_client.models.subscription_sched.Subscription_sched(
                            days = [
                                openapi_client.models.subscription_sched_days.Subscription_sched_days(
                                    enabled = True, 
                                    name = '0', )
                                ], 
                            tz_offset = 56, 
                            start_offset = 56, 
                            end_offset = 56, ), 
                        plotting = openapi_client.models.subscription_plotting.Subscription_plotting(
                            enabled = True, 
                            theme = '0', ), 
                        id = '0', 
                        enabled = True, 
                        any_tags = True, 
                        ignore_warnings = True, 
                        ignore_recoverings = True, 
                        throttling = True, 
                        user = '0', )
                    ]
            )
        else :
            return InlineResponse2005(
        )

    def testInlineResponse2005(self):
        """Test InlineResponse2005"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()