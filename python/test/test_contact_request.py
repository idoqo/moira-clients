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
from openapi_client.models.contact_request import ContactRequest  # noqa: E501
from openapi_client.rest import ApiException

class TestContactRequest(unittest.TestCase):
    """ContactRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ContactRequest
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.contact_request.ContactRequest()  # noqa: E501
        if include_optional :
            return ContactRequest(
                type = 'mail', 
                value = 'devops@example.com'
            )
        else :
            return ContactRequest(
        )

    def testContactRequest(self):
        """Test ContactRequest"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
