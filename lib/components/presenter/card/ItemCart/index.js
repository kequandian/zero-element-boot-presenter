import React from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
/**
 * 
 * 
 */

export default function index(props) {
  const {
    children,
    ...rest
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(CssCart, {
      background: "",
      padding: "",
      boxShadow: "0 0px 2px rgba(0, 0, 0, 0.12)",
      borderRadius: "10px",
      margin: "10px",
      overflow: "hidden"
    }, /*#__PURE__*/React.cloneElement(child, { ...rest
    }));
  });
}