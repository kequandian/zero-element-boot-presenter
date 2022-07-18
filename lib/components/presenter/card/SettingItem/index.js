import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Center, Stack } from '@chakra-ui/react';
import useQuery from 'zero-element-boot/lib/components/hooks/useQuery';
import { history } from 'umi';
import ItemTitleBold from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitleBold';
import ItemTitle from 'zero-element-boot-plugin-theme/lib/components/text/ItemTitle';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Container from 'zero-element-boot/lib/components/container/Container';
import Switch from "../../Switch";
/**
 * 
 * @param {value} value 标题
 * @param {title} title 外部链接
 * @param {navigation} navigation 外部链接
 * @param {toggle} toggle 切换开关
 * @param {percentage} percentage 百分数的值
 * @param {currency} currency 金钱单位的值
 * @param {number} number 数字
 * @param {options} options 
 * @param {space} space 间距（传一个空数组时生效）
 * @param {status} status toggle的状态
 * 
 */

export default function index(props) {
  const {
    value = '',
    title = '',
    navigation,
    toggle,
    percentage = '',
    currency = '',
    number = '',
    options,
    space = '2px',
    status = ''
  } = props;
  const queryData = useQuery(props.navigation);

  const path = () => {
    history.push(queryData);
  };

  const onnextClick = navigation ? path : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, title ? /*#__PURE__*/React.createElement(CssCart, {
    backgroundColor: "#ffffff",
    height: "32px",
    width: "100%"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, {
    align: "start-with-last-end",
    direction: "row"
  }, /*#__PURE__*/React.createElement(Center, {
    h: "32px",
    w: "",
    bg: ""
  }, /*#__PURE__*/React.createElement(ItemTitle, null, title)), /*#__PURE__*/React.createElement(Center, {
    h: "32px",
    w: "",
    bg: ""
  }, percentage ? /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(ItemTitleBold, null, /*#__PURE__*/React.createElement(React.Fragment, null, "       ", percentage, "%")), /*#__PURE__*/React.createElement(Center, {
    h: "",
    w: "",
    bg: "",
    margin: "0 0 0 4px"
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg",
    width: "14px",
    height: "16px",
    onClick: onnextClick
  }))) : currency ? /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(ItemTitleBold, null, /*#__PURE__*/React.createElement(React.Fragment, null, "       \uFFE5", currency)), /*#__PURE__*/React.createElement(Center, {
    h: "",
    w: "",
    bg: "",
    margin: "0 0 0 4px"
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg",
    width: "14px",
    height: "16px",
    onClick: onnextClick
  }))) : toggle ? /*#__PURE__*/React.createElement(Center, {
    h: "32px",
    margin: "0 0 0 10px"
  }, /*#__PURE__*/React.createElement(Switch, {
    status: status
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(ItemTitleBold, null, number), /*#__PURE__*/React.createElement(Center, {
    h: "",
    w: "",
    bg: "",
    margin: "0 0 0 10px"
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg",
    width: "14px",
    height: "16px",
    onClick: onnextClick
  })))))))) : /*#__PURE__*/React.createElement(CssCart, {
    backgroundColor: "#ffffff",
    margin: "0px",
    height: space,
    width: "100%"
  }, /*#__PURE__*/React.createElement(React.Fragment, null)));
}