function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import RouterItem from "../RouterItem";
/**
 * 
 * @param {data} items 数据
 * 
 */

export default function index(props) {
  const {
    items
  } = props;
  console.log(items, ' == items'); // const data = [
  //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/invite.svg", "title": "我的邀请", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
  //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/ThreeLevelAgent.svg", "title": "三级代理", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
  //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/secondaryAgent.svg", "title": "二级代理", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
  //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/report.svg", "title": "结算报表", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
  //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/history.svg", "title": "历史", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
  //     { "icon": "http://static.smallsaas.cn/house/2022/svg/Router/SetUp.svg", "title": "设置", "nextIcon": "http://static.smallsaas.cn/house/2022/svg/Router/enter.svg", "navigation": "/agent?level=2" },
  // ]

  return items && items.map((item, i) => /*#__PURE__*/React.createElement(RouterItem, _extends({}, item, {
    key: i
  })));
}