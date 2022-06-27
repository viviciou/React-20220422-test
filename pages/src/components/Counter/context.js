import React from 'react';
// 參考https://medium.com/@nightspirit622/%E8%A9%B2%E4%B8%8D%E8%A9%B2%E7%94%A8context-api-%E4%BE%86%E5%8F%96%E4%BB%A3-redux-4d7395d5c8da


const ctx = React.createContext();

export const { Provider, Consumer } = ctx;

export const withCounter = Component => props => <Consumer>{value => <Component {...props} counter={value} />}</Consumer>

export default ctx