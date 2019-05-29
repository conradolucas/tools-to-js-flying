// Nerdzão #96 - Precisamos falar sobre CSS
// https://www.meetup.com/pt-BR/Nerdzao/events/259942397/
// https://github.com/IgorHalfeld/css-in-javascripto-demo/blob/master/simple-css-in-js/styleheet.js
// https://speakerdeck.com/igorhalfeld/css-in-javascript
const StyleSheet = {

  sheet: null,
    init() {
      const styleEl = document.createElement('style');
      document.head.appendChild(styleEl);
      this.sheet = styleEl.sheet;
    },
  create(selector, styleString) {
          const rule = `${selector} { ${styleString} }`;
          const index = this.sheet.cssRules.length;
    this.sheet.insertRule(rule, index);
  },
};

export default StyleSheet;
