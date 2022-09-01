import React, { useState } from 'react';
import { Center, Flex } from "@chakra-ui/react";
/**
 * 
 * 翻页组件
 * 
 * @param {函数} cb 外部传入的函数
 * @param {maxNumber} maxNumber 最大页数
 * 
 */

export default function Index(props) {
  const {
    cb,
    maxNumber
  } = props;
  const [number, setnumber] = React.useState(1);

  function add() {
    const num = number + 1;
    setnumber(num);
    cb(num, number); // console.log('number ==',number)
  }

  function decrease() {
    const num = number - 1;

    if (num <= 0) {
      setnumber(0);
      cb(0);
    } else {
      setnumber(num);
      cb(num, number);
    }
  }

  const baseStyle = {
    textAlign: 'center',
    padding: '4px ',
    // backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    height: '100%'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: baseStyle
  }, /*#__PURE__*/React.createElement(Flex, {
    gap: "0"
  }, number == 1 ? /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement("svg", {
    t: "1660897665311",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "127868",
    width: "16",
    height: "16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M709.610667 85.333333c-14.933333 0-29.866667 5.802667-41.28 16.554667L273.109333 473.344a52.757333 52.757333 0 0 0 0 77.76l395.221334 371.456c22.826667 21.482667 59.776 21.482667 82.56 0a52.757333 52.757333 0 0 0 0-77.76L396.949333 512.213333 750.890667 179.626667a52.757333 52.757333 0 0 0 0-77.738667A60.522667 60.522667 0 0 0 709.610667 85.333333z",
    fill: "#bfbfbf",
    "p-id": "127869"
  }))) : /*#__PURE__*/React.createElement(Center, {
    onClick: () => decrease()
  }, /*#__PURE__*/React.createElement("svg", {
    t: "1660897665311",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "127868",
    width: "16",
    height: "16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M709.610667 85.333333c-14.933333 0-29.866667 5.802667-41.28 16.554667L273.109333 473.344a52.757333 52.757333 0 0 0 0 77.76l395.221334 371.456c22.826667 21.482667 59.776 21.482667 82.56 0a52.757333 52.757333 0 0 0 0-77.76L396.949333 512.213333 750.890667 179.626667a52.757333 52.757333 0 0 0 0-77.738667A60.522667 60.522667 0 0 0 709.610667 85.333333z",
    fill: "#2c2c2c",
    "p-id": "127869"
  }))), /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px',
      width: '56px',
      height: '100%'
    }
  }, number)), number == maxNumber ? /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement("svg", {
    t: "1660898416570",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "128287",
    width: "16",
    height: "16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M314.389333 938.666667c14.933333 0 29.866667-5.802667 41.28-16.554667l395.221334-371.456a52.757333 52.757333 0 0 0 0-77.76L355.669333 101.44c-22.826667-21.482667-59.776-21.482667-82.56 0a52.757333 52.757333 0 0 0 0 77.76l353.941334 332.586667-353.941334 332.586666a52.757333 52.757333 0 0 0 0 77.738667 60.522667 60.522667 0 0 0 41.28 16.554667z",
    fill: "#bfbfbf",
    "p-id": "128288"
  }))) : /*#__PURE__*/React.createElement(Center, {
    onClick: () => add()
  }, /*#__PURE__*/React.createElement("svg", {
    t: "1660897609667",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "126978",
    width: "16",
    height: "16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M314.389333 938.666667c14.933333 0 29.866667-5.802667 41.28-16.554667l395.221334-371.456a52.757333 52.757333 0 0 0 0-77.76L355.669333 101.44c-22.826667-21.482667-59.776-21.482667-82.56 0a52.757333 52.757333 0 0 0 0 77.76l353.941334 332.586667-353.941334 332.586666a52.757333 52.757333 0 0 0 0 77.738667 60.522667 60.522667 0 0 0 41.28 16.554667z",
    fill: "#2c2c2c",
    "p-id": "126979"
  })))));
}