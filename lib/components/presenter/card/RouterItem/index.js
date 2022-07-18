import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Center } from '@chakra-ui/react';
import useQuery from 'zero-element-boot/lib/components/hooks/useQuery';
import { history } from 'umi';
import ItemTitleBold from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitleBold'; // import ItemTitle from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitle';

import ContainerInactiveTitle from 'zero-element-boot-plugin-theme/lib/components/text/ContainerInactiveTitle';
/**
 * 
 * @param {icon} icon 图片
 * @param {title} title 标题
 * @param {navigation} navigation 外部链接
 * @param {nextIcon} nextIcon "下一个"指示图标
 * @param {像素} space 间距
 * 
 */

export default function index(props) {
  const {
    icon = '',
    title = '',
    navigation,
    nextIcon = '',
    text = '',
    space = '16px'
  } = props; // console.log('props === ', props)

  const queryData = useQuery(props.navigation); // console.log('queryData === ', queryData)

  const path = () => {
    history.push(queryData);
  };

  const onnextClick = navigation ? path : null;
  return !space || title ? /*#__PURE__*/React.createElement(CssCart, {
    backgroundColor: "#ffffff",
    height: "52px",
    width: "100%",
    margin: "1px 0 0  0 "
  }, /*#__PURE__*/React.createElement(Flex, {
    padding: "12px 8px"
  }, /*#__PURE__*/React.createElement(Flex, {
    w: "100%"
  }, icon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Center, {
    h: "100%",
    w: "32px",
    bg: ""
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    width: "16px",
    height: "16px"
  })), /*#__PURE__*/React.createElement(ItemTitleBold, null, title)) : /*#__PURE__*/React.createElement(ItemTitleBold, null, title)), nextIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex, {
    h: "100%",
    onClick: onnextClick
  }, /*#__PURE__*/React.createElement(ContainerInactiveTitle, null, text), /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '12px',
      height: '27px'
    },
    onClick: onnextClick
  }, /*#__PURE__*/React.createElement("img", {
    src: nextIcon,
    width: "12px"
  }))))) : /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(ContainerInactiveTitle, null, text)))) : /*#__PURE__*/React.createElement(CssCart, {
    height: space,
    width: "100%"
  }, /*#__PURE__*/React.createElement(React.Fragment, null));
}