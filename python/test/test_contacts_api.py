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
from openapi_client.api.contacts_api import ContactsApi  # noqa: E501
from openapi_client.rest import ApiException


class TestContactsApi(unittest.TestCase):
    """ContactsApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.contacts_api.ContactsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_new_contact(self):
        """Test case for create_new_contact

        Creates a new contact notification for the current user.  # noqa: E501
        """
        pass

    def test_get_contacts(self):
        """Test case for get_contacts

        Gets all Moira contacts.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
