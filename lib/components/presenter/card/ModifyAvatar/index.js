function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Gridbox from 'zero-element-boot/lib/components/layout/Gridbox';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Center, Stack } from '@chakra-ui/react';
import Container from 'zero-element-boot/lib/components/container/Container';
import Item from "./item";
/**
 * 修改个人信息的item容器
 * 
 * @param {data} items 数据
 * 
 */

export default function index(props) {
  const {
    items,
    columns = '1'
  } = props;
  return /*#__PURE__*/React.createElement(CssCart, {
    backgroundColor: "#ffffff",
    padding: "4px",
    margin: "",
    borderRadius: "8px",
    width: "100%"
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "0"
  }, items && items.map((item, i) => /*#__PURE__*/React.createElement(Item, _extends({}, item, {
    key: i
  })))));
}