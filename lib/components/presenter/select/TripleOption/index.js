function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Flex, Center } from '@chakra-ui/react';
import Item from "./item";
/**
 * 
 * @param {options} options 数据
 * @param {size} size 大小（传数字）
 * 
 options={[{ "value": "null", "name": "无效" },{ "value": "SECONDARY_AGENT", "name": "三级" },{...}]}
 * 
 */

export default function index(props) {
  const {
    defaultValue,
    defaultStatus,
    options,
    callBack,
    id,
    size
  } = props;
  return /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(Flex, null, options && options.map((item, i) => /*#__PURE__*/React.createElement(Item, _extends({
    id: id,
    callBack: callBack,
    defaultValue: defaultValue,
    defaultStatus: defaultStatus
  }, item, {
    key: i,
    size: size
  })))));
}