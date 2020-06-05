# coding: utf-8

"""
    Moira Alert

    This is an API description for Moira Alert project. Please check https://github.com/moira-alert  # noqa: E501

    The version of the OpenAPI document: 2.5.1.47
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import openapi_client
from openapi_client.api.event_api import EventApi  # noqa: E501
from openapi_client.rest import ApiException


class TestEventApi(unittest.TestCase):
    """EventApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.event_api.EventApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_delete_events(self):
        """Test case for delete_events

        Deletes all notification events  # noqa: E501
        """
        pass

    def test_get_trigger_events(self):
        """Test case for get_trigger_events

        Gets all trigger events for current page and their count  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
