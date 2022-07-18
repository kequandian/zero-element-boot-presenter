import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Stack } from '@chakra-ui/react';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Avatar from 'zero-element-boot/lib/components/presenter/Avatar';
import Round from 'zero-element-boot/lib/components/layout/Round';
import ItemTitleBold from "../../../text/ItemTitleBold";
import ItemTitle from "../../../text/ItemTitle";
/**
 * 
 * @param {title} title 标题、名字
 * @param {subtitle} subtitle 副标题
 * @param {avatar} avatar 头像
 * 
 */

export default function index(props) {
  const {
    children,
    title,
    subtitle,
    avatar
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(CssCart, {
      width: "100%",
      height: "",
      backgroundColor: "transparent",
      padding: "10px"
    }, /*#__PURE__*/React.createElement(Round, {
      direction: "row",
      align: "start-with-last-end"
    }, /*#__PURE__*/React.createElement(Flexbox, {
      justify: "center",
      direction: "row",
      align: "center"
    }, /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement(Avatar, {
      size: "60px",
      url: avatar
    })), /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement(ItemTitleBold, null, title), /*#__PURE__*/React.createElement(ItemTitle, null, subtitle))), /*#__PURE__*/React.createElement("div", null, child)));
  });
}