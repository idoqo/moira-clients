# coding: utf-8

"""
    Moira Alert

    This is an API description for [Moira Alert project](https://moira.readthedocs.io/en/latest/overview.html). Please check <https://github.com/moira-alert/>  # noqa: E501

    The version of the OpenAPI document: 2.5.1.48
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class InlineResponse20012(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'login': 'str',
        'contacts': 'list[Contact]',
        'subscriptions': 'list[Subscription]'
    }

    attribute_map = {
        'login': 'login',
        'contacts': 'contacts',
        'subscriptions': 'subscriptions'
    }

    def __init__(self, login=None, contacts=None, subscriptions=None, local_vars_configuration=None):  # noqa: E501
        """InlineResponse20012 - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._login = None
        self._contacts = None
        self._subscriptions = None
        self.discriminator = None

        if login is not None:
            self.login = login
        if contacts is not None:
            self.contacts = contacts
        if subscriptions is not None:
            self.subscriptions = subscriptions

    @property
    def login(self):
        """Gets the login of this InlineResponse20012.  # noqa: E501

        username of the authenticated user.  # noqa: E501

        :return: The login of this InlineResponse20012.  # noqa: E501
        :rtype: str
        """
        return self._login

    @login.setter
    def login(self, login):
        """Sets the login of this InlineResponse20012.

        username of the authenticated user.  # noqa: E501

        :param login: The login of this InlineResponse20012.  # noqa: E501
        :type: str
        """

        self._login = login

    @property
    def contacts(self):
        """Gets the contacts of this InlineResponse20012.  # noqa: E501

        user's contacts  # noqa: E501

        :return: The contacts of this InlineResponse20012.  # noqa: E501
        :rtype: list[Contact]
        """
        return self._contacts

    @contacts.setter
    def contacts(self, contacts):
        """Sets the contacts of this InlineResponse20012.

        user's contacts  # noqa: E501

        :param contacts: The contacts of this InlineResponse20012.  # noqa: E501
        :type: list[Contact]
        """

        self._contacts = contacts

    @property
    def subscriptions(self):
        """Gets the subscriptions of this InlineResponse20012.  # noqa: E501

        user's subscriptions  # noqa: E501

        :return: The subscriptions of this InlineResponse20012.  # noqa: E501
        :rtype: list[Subscription]
        """
        return self._subscriptions

    @subscriptions.setter
    def subscriptions(self, subscriptions):
        """Sets the subscriptions of this InlineResponse20012.

        user's subscriptions  # noqa: E501

        :param subscriptions: The subscriptions of this InlineResponse20012.  # noqa: E501
        :type: list[Subscription]
        """

        self._subscriptions = subscriptions

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, InlineResponse20012):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, InlineResponse20012):
            return True

        return self.to_dict() != other.to_dict()