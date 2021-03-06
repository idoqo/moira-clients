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


class TriggerCheck(object):
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
        'metrics': 'MetricState',
        'score': 'int',
        'state': 'str',
        'maintenance': 'int',
        'maintenance_info': 'MaintenanceInfo',
        'timestamp': 'int',
        'event_timestamp': 'int',
        'last_successful_check_timestamp': 'int',
        'suppressed': 'bool',
        'suppressed_state': 'str',
        'msg': 'str',
        'trigger_id': 'str'
    }

    attribute_map = {
        'metrics': 'metrics',
        'score': 'score',
        'state': 'state',
        'maintenance': 'maintenance',
        'maintenance_info': 'maintenance_info',
        'timestamp': 'timestamp',
        'event_timestamp': 'event_timestamp',
        'last_successful_check_timestamp': 'last_successful_check_timestamp',
        'suppressed': 'suppressed',
        'suppressed_state': 'suppressed_state',
        'msg': 'msg',
        'trigger_id': 'trigger_id'
    }

    def __init__(self, metrics=None, score=None, state=None, maintenance=None, maintenance_info=None, timestamp=None, event_timestamp=None, last_successful_check_timestamp=None, suppressed=None, suppressed_state=None, msg=None, trigger_id=None, local_vars_configuration=None):  # noqa: E501
        """TriggerCheck - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._metrics = None
        self._score = None
        self._state = None
        self._maintenance = None
        self._maintenance_info = None
        self._timestamp = None
        self._event_timestamp = None
        self._last_successful_check_timestamp = None
        self._suppressed = None
        self._suppressed_state = None
        self._msg = None
        self._trigger_id = None
        self.discriminator = None

        if metrics is not None:
            self.metrics = metrics
        if score is not None:
            self.score = score
        if state is not None:
            self.state = state
        if maintenance is not None:
            self.maintenance = maintenance
        if maintenance_info is not None:
            self.maintenance_info = maintenance_info
        if timestamp is not None:
            self.timestamp = timestamp
        if event_timestamp is not None:
            self.event_timestamp = event_timestamp
        if last_successful_check_timestamp is not None:
            self.last_successful_check_timestamp = last_successful_check_timestamp
        if suppressed is not None:
            self.suppressed = suppressed
        if suppressed_state is not None:
            self.suppressed_state = suppressed_state
        if msg is not None:
            self.msg = msg
        if trigger_id is not None:
            self.trigger_id = trigger_id

    @property
    def metrics(self):
        """Gets the metrics of this TriggerCheck.  # noqa: E501


        :return: The metrics of this TriggerCheck.  # noqa: E501
        :rtype: MetricState
        """
        return self._metrics

    @metrics.setter
    def metrics(self, metrics):
        """Sets the metrics of this TriggerCheck.


        :param metrics: The metrics of this TriggerCheck.  # noqa: E501
        :type: MetricState
        """

        self._metrics = metrics

    @property
    def score(self):
        """Gets the score of this TriggerCheck.  # noqa: E501


        :return: The score of this TriggerCheck.  # noqa: E501
        :rtype: int
        """
        return self._score

    @score.setter
    def score(self, score):
        """Sets the score of this TriggerCheck.


        :param score: The score of this TriggerCheck.  # noqa: E501
        :type: int
        """

        self._score = score

    @property
    def state(self):
        """Gets the state of this TriggerCheck.  # noqa: E501


        :return: The state of this TriggerCheck.  # noqa: E501
        :rtype: str
        """
        return self._state

    @state.setter
    def state(self, state):
        """Sets the state of this TriggerCheck.


        :param state: The state of this TriggerCheck.  # noqa: E501
        :type: str
        """

        self._state = state

    @property
    def maintenance(self):
        """Gets the maintenance of this TriggerCheck.  # noqa: E501


        :return: The maintenance of this TriggerCheck.  # noqa: E501
        :rtype: int
        """
        return self._maintenance

    @maintenance.setter
    def maintenance(self, maintenance):
        """Sets the maintenance of this TriggerCheck.


        :param maintenance: The maintenance of this TriggerCheck.  # noqa: E501
        :type: int
        """

        self._maintenance = maintenance

    @property
    def maintenance_info(self):
        """Gets the maintenance_info of this TriggerCheck.  # noqa: E501


        :return: The maintenance_info of this TriggerCheck.  # noqa: E501
        :rtype: MaintenanceInfo
        """
        return self._maintenance_info

    @maintenance_info.setter
    def maintenance_info(self, maintenance_info):
        """Sets the maintenance_info of this TriggerCheck.


        :param maintenance_info: The maintenance_info of this TriggerCheck.  # noqa: E501
        :type: MaintenanceInfo
        """

        self._maintenance_info = maintenance_info

    @property
    def timestamp(self):
        """Gets the timestamp of this TriggerCheck.  # noqa: E501


        :return: The timestamp of this TriggerCheck.  # noqa: E501
        :rtype: int
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """Sets the timestamp of this TriggerCheck.


        :param timestamp: The timestamp of this TriggerCheck.  # noqa: E501
        :type: int
        """

        self._timestamp = timestamp

    @property
    def event_timestamp(self):
        """Gets the event_timestamp of this TriggerCheck.  # noqa: E501


        :return: The event_timestamp of this TriggerCheck.  # noqa: E501
        :rtype: int
        """
        return self._event_timestamp

    @event_timestamp.setter
    def event_timestamp(self, event_timestamp):
        """Sets the event_timestamp of this TriggerCheck.


        :param event_timestamp: The event_timestamp of this TriggerCheck.  # noqa: E501
        :type: int
        """

        self._event_timestamp = event_timestamp

    @property
    def last_successful_check_timestamp(self):
        """Gets the last_successful_check_timestamp of this TriggerCheck.  # noqa: E501


        :return: The last_successful_check_timestamp of this TriggerCheck.  # noqa: E501
        :rtype: int
        """
        return self._last_successful_check_timestamp

    @last_successful_check_timestamp.setter
    def last_successful_check_timestamp(self, last_successful_check_timestamp):
        """Sets the last_successful_check_timestamp of this TriggerCheck.


        :param last_successful_check_timestamp: The last_successful_check_timestamp of this TriggerCheck.  # noqa: E501
        :type: int
        """

        self._last_successful_check_timestamp = last_successful_check_timestamp

    @property
    def suppressed(self):
        """Gets the suppressed of this TriggerCheck.  # noqa: E501


        :return: The suppressed of this TriggerCheck.  # noqa: E501
        :rtype: bool
        """
        return self._suppressed

    @suppressed.setter
    def suppressed(self, suppressed):
        """Sets the suppressed of this TriggerCheck.


        :param suppressed: The suppressed of this TriggerCheck.  # noqa: E501
        :type: bool
        """

        self._suppressed = suppressed

    @property
    def suppressed_state(self):
        """Gets the suppressed_state of this TriggerCheck.  # noqa: E501


        :return: The suppressed_state of this TriggerCheck.  # noqa: E501
        :rtype: str
        """
        return self._suppressed_state

    @suppressed_state.setter
    def suppressed_state(self, suppressed_state):
        """Sets the suppressed_state of this TriggerCheck.


        :param suppressed_state: The suppressed_state of this TriggerCheck.  # noqa: E501
        :type: str
        """

        self._suppressed_state = suppressed_state

    @property
    def msg(self):
        """Gets the msg of this TriggerCheck.  # noqa: E501


        :return: The msg of this TriggerCheck.  # noqa: E501
        :rtype: str
        """
        return self._msg

    @msg.setter
    def msg(self, msg):
        """Sets the msg of this TriggerCheck.


        :param msg: The msg of this TriggerCheck.  # noqa: E501
        :type: str
        """

        self._msg = msg

    @property
    def trigger_id(self):
        """Gets the trigger_id of this TriggerCheck.  # noqa: E501


        :return: The trigger_id of this TriggerCheck.  # noqa: E501
        :rtype: str
        """
        return self._trigger_id

    @trigger_id.setter
    def trigger_id(self, trigger_id):
        """Sets the trigger_id of this TriggerCheck.


        :param trigger_id: The trigger_id of this TriggerCheck.  # noqa: E501
        :type: str
        """

        self._trigger_id = trigger_id

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
        if not isinstance(other, TriggerCheck):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, TriggerCheck):
            return True

        return self.to_dict() != other.to_dict()
