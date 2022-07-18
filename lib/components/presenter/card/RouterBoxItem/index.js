import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Center, Stack } from '@chakra-ui/react';
import useQuery from 'zero-element-boot/lib/components/hooks/useQuery';
import { history } from 'umi';
import ItemTitleBold from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitleBold';
import ItemTitle from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitle';
/**
 * 
 * @param {icon} icon 图片
 * @param {title} title 标题
 * @param {navigation} navigation 外部链接
 * @param {value} value 数值
 * 
 */

export default function index(props) {
  const {
    icon = '',
    value = '',
    title = '',
    navigation
  } = props; // console.log('props === ', props)

  const queryData = useQuery(props.navigation); // console.log('queryData === ', queryData)

  const path = () => {
    history.push(queryData);
  };

  const onnextClick = navigation ? path : null;
  return /*#__PURE__*/React.createElement(CssCart, {
    backgroundColor: "#ffffff",
    margin: " 8px  ",
    width: "70px"
  }, /*#__PURE__*/React.createElement(Center, {
    h: "100%",
    w: "100%"
  }, /*#__PURE__*/React.createElement(Stack, {
    padding: "13px 2px"
  }, icon && !value ? /*#__PURE__*/React.createElement(Center, {
    h: "60px",
    w: "100%",
    bg: ""
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    width: "36px",
    height: "36px",
    onClick: onnextClick
  })) : !icon && value ? /*#__PURE__*/React.createElement(Center, {
    h: "20px",
    w: "100%",
    bg: ""
  }, /*#__PURE__*/React.createElement(ItemTitleBold, null, value)) : icon && value ? /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Center, {
    h: "60px",
    w: "100%",
    bg: "",
    margin: "0 4px"
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    width: "36px",
    height: "36px",
    onClick: onnextClick
  })), /*#__PURE__*/React.createElement(Center, {
    h: "60px",
    w: "100%",
    bg: ""
  }, value)) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(Center, {
    h: "",
    w: "100%",
    bg: ""
  }, /*#__PURE__*/React.createElement(ItemTitle, null, title)))));
}