const devUrl = '//common.51tule.com/common/??';
const prodUrl = '//xdres.51tule.com/common/??';

const pathArr = {
  'react': 'react/15.3.1/react-with-addons.min.js',
  'reactDom': 'react/15.3.1/react-dom.min.js',
  'react16': 'react/16.3.2/react.production.min.js',
  'reactDom16': 'react/16.3.2/react-dom.production.min.js',
  'zepto': 'zepto/tbjZepto.min.js',
  'fastclick': 'fastclick/1.0.6/fastclick.min.js',
  'promise': 'promise/es6-promise.min.js',
  'swiper': 'swiper/3.4.2/swiper.zepto.min.js',
  'iscroll': 'iscroll/5.2.0/iscroll-probe.min.js'
};

const getLibUrl = (libArr, isProduct) => {
  let fullUrl = isProduct ? prodUrl : devUrl;
  for (let i = 0; i < libArr.length; i++) {
    fullUrl += pathArr[libArr[i]];
    if (i !== libArr.length - 1) {
      fullUrl += ',';
    }
  }
  return fullUrl;
};

module.exports = getLibUrl;