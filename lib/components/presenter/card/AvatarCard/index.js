import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Stack, Center } from '@chakra-ui/react';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Avatar from 'zero-element-boot/lib/components/presenter/Avatar';
import Round from 'zero-element-boot/lib/components/layout/Round';
import ItemTitleBold from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitleBold';
import ItemTitle from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitle';
import Container from 'zero-element-boot/lib/components/container/Container';
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
    title = '',
    subtitle = '',
    avatar,
    size = '60px'
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(CssCart, {
      width: "100%",
      height: "",
      backgroundColor: "",
      padding: ""
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, {
      direction: "row",
      align: "start-with-last-end"
    }, /*#__PURE__*/React.createElement(Flexbox, {
      justify: "center",
      direction: "row",
      align: "center"
    }, /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement(Avatar, {
      size: size,
      url: avatar
    })), /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement(ItemTitleBold, null, title), /*#__PURE__*/React.createElement(ItemTitle, null, subtitle))), /*#__PURE__*/React.createElement(Center, {
      h: "100%",
      w: ""
    }, child))));
  });
}