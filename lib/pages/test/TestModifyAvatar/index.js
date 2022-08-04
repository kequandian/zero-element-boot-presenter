import React from 'react';
import RouterBox from "../../../components/presenter/card/RouterBox";
import Router from "../../../components/presenter/card/Router";
import Settings from "../../../components/presenter/card/Settings";
import ModifyAvatar from "../../../components/presenter/card/ModifyAvatar";
export default function index(props) {
  const data = [{
    "title": "头像",
    "icon": "https://static.smallsaas.cn/house/2022/image/dealSquare/DefaultCell.svg"
  }, {
    "title": "昵称",
    "content": "西红柿"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModifyAvatar, {
    items: data
  }));
}