function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, useState } from 'react';
import { WingBlank, NavBar, ImagePicker } from 'antd-mobile'; // 引入自己修改的样式

import "./index.less"; // 引入默认的图片

import logo from "../../../assets/edit.svg";
export default class Info extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      avator: []
    });

    _defineProperty(this, "change", (files, type, index) => {
      this.setState({
        avator: files
      });
    });
  }

  render() {
    const {
      avator
    } = this.state;

    const avatorImg = () => {
      // 如果选择了图片就用选择后的图作为头像
      if (avator[0]) {
        return /*#__PURE__*/React.createElement("img", {
          className: "user-avatar",
          src: avator[0].url,
          alt: ""
        });
      } else {
        // 没有选择图片则默认显示引入的 logo
        return /*#__PURE__*/React.createElement("img", {
          className: "user-avatar",
          src: logo,
          alt: ""
        });
      }
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "demo"
    }, /*#__PURE__*/React.createElement(NavBar, null, "\u804A\u5929"), /*#__PURE__*/React.createElement(WingBlank, {
      className: "user-avatar-upload"
    }, avatorImg(), /*#__PURE__*/React.createElement(ImagePicker, {
      onChange: this.change,
      accept: "image/gif,image/jpeg,image/jpg,image/png"
    })));
  }

}