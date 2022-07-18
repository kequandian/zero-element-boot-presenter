function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SettingItem from "../SettingItem";
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Center } from '@chakra-ui/react';
export default function index(props) {
  const {
    items
  } = props;
  return items && items.map((item, i) => i == items.length - 1 ? /*#__PURE__*/React.createElement(CssCart, {
    padding: "10px 2px 10px 6px",
    margin: " 0 8px"
  }, /*#__PURE__*/React.createElement(SettingItem, _extends({}, item, {
    key: i
  }))) : /*#__PURE__*/React.createElement(CssCart, {
    padding: "10px 2px 10px 6px",
    margin: " 0 8px",
    borderBottom: "0.1px #dfe1e6 solid"
  }, /*#__PURE__*/React.createElement(SettingItem, _extends({}, item, {
    key: i
  }))));
}