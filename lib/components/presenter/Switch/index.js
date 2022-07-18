import React, { useState, useEffect } from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
/**
 * 
 * @param {status} status 状态 已授权（Authorized），未授权（Unauthorized）
 * 
 */

export default function index(props) {
  const {
    status = ''
  } = props;
  const [level, setLevel] = useState(status);

  const swtichClick = swtichStatus => {
    setLevel(swtichStatus);
  };

  return /*#__PURE__*/React.createElement(CssCart, {
    margin: "0 2px auto 0"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, level === 'Authorized' ? /*#__PURE__*/React.createElement("div", {
    onClick: () => swtichClick('Unauthorized')
  }, /*#__PURE__*/React.createElement("svg", {
    t: "1657878856170",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "63718",
    width: "32",
    height: "32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M764.867148 249.793136 259.0735 249.793136c-143.070486 0-259.052011 115.984594-259.052011 259.052011 0 143.07151 115.982548 259.050987 259.052011 259.050987l505.793648 0c143.067416 0 259.050987-115.979478 259.050987-259.050987C1023.917112 365.778754 907.933541 249.793136 764.867148 249.793136zM259.0735 745.516428c-130.501216 0-236.671281-106.172111-236.671281-236.671281 0-130.501216 106.170065-236.671281 236.671281-236.671281S495.744781 378.344954 495.744781 508.84617C495.744781 639.34534 389.574716 745.516428 259.0735 745.516428z",
    "p-id": "63719",
    fill: "#1296db"
  }))) : /*#__PURE__*/React.createElement("div", {
    onClick: () => swtichClick('Authorized')
  }, /*#__PURE__*/React.createElement("svg", {
    t: "1657878893746",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "64065",
    width: "32",
    height: "32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M764.928 251.392H259.072C116.224 251.392 0 367.616 0 510.464c0 142.848 116.224 259.072 259.072 259.072h505.856c142.848 0 259.072-116.224 259.072-259.072 0-142.848-116.224-259.072-259.072-259.072z m0 495.616c-130.56 0-236.544-105.984-236.544-236.544s105.984-236.544 236.544-236.544 236.544 105.984 236.544 236.544-105.984 236.544-236.544 236.544z",
    fill: "#cdcdcd",
    "p-id": "64066"
  })))));
}