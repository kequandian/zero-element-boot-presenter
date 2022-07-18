function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Gridbox from 'zero-element-boot/lib/components/layout/Gridbox';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Center } from '@chakra-ui/react';
import Container from 'zero-element-boot/lib/components/container/Container';
import RouterBoxItem from "../RouterBoxItem";
/**
 * 
 * @param {data} items 数据
 * 
 */

export default function index(props) {
  const {
    items
  } = props;
  return /*#__PURE__*/React.createElement(CssCart, {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15) ",
    backgroundColor: "#ffffff",
    padding: "10px",
    margin: "8px",
    borderRadius: "8px",
    width: ""
  }, /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(Container, null, items && items.map((item, i) => /*#__PURE__*/React.createElement(Gridbox, {
    columns: "4"
  }, /*#__PURE__*/React.createElement(RouterBoxItem, _extends({}, item, {
    key: i
  })))))));
}