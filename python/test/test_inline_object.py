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
from openapi_client.models.inline_object import InlineObject  # noqa: E501
from openapi_client.rest import ApiException

class TestInlineObject(unittest.TestCase):
    """InlineObject unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test InlineObject
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.inline_object.InlineObject()  # noqa: E501
        if include_optional :
            return InlineObject(
                desc = 'Dice roll trigger', 
                error_value = 7, 
                expression = 't1 > 6 ? ERROR : (t1 > 4)? WARN : OK', 
                id = '0', 
                is_remote = False, 
                mute_new_metrics = True, 
                name = 'Dice Roll', 
                patterns = ["local.dice.roll"], 
                sched = openapi_client.models._trigger_sched._trigger_sched(
                    days = [
                        openapi_client.models._trigger_sched_days._trigger_sched_days(
                            enabled = True, 
                            name = '0', )
                        ], 
                    end_offset = 56, 
                    start_offset = 56, 
                    tz_offset = 56, ), 
                tags = ["test"], 
                targets = [
                    '0'
                    ], 
                throttling = 56, 
                trigger_type = 'rising', 
                ttl = 56, 
                ttl_state = '0', 
                warn_value = 5, 
                alone_metrics = ["t1","t2"]
            )
        else :
            return InlineObject(
        )

    def testInlineObject(self):
        """Test InlineObject"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
