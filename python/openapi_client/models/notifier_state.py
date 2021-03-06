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


class NotifierState(object):
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
        'state': 'str',
        'message': 'str'
    }

    attribute_map = {
        'state': 'state',
        'message': 'message'
    }

    def __init__(self, state=None, message=None, local_vars_configuration=None):  # noqa: E501
        """NotifierState - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._state = None
        self._message = None
        self.discriminator = None

        if state is not None:
            self.state = state
        if message is not None:
            self.message = message

    @property
    def state(self):
        """Gets the state of this NotifierState.  # noqa: E501

        New state of the notifier service. Should be either OK or ERROR  # noqa: E501

        :return: The state of this NotifierState.  # noqa: E501
        :rtype: str
        """
        return self._state

    @state.setter
    def state(self, state):
        """Sets the state of this NotifierState.

        New state of the notifier service. Should be either OK or ERROR  # noqa: E501

        :param state: The state of this NotifierState.  # noqa: E501
        :type: str
        """

        self._state = state

    @property
    def message(self):
        """Gets the message of this NotifierState.  # noqa: E501

        Optional description for the state change  # noqa: E501

        :return: The message of this NotifierState.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this NotifierState.

        Optional description for the state change  # noqa: E501

        :param message: The message of this NotifierState.  # noqa: E501
        :type: str
        """

        self._message = message

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
        if not isinstance(other, NotifierState):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, NotifierState):
            return True

        return self.to_dict() != other.to_dict()
