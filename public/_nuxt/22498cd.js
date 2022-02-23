(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vue-scrollto/vue-scrollto.js
var vue_scrollto = __webpack_require__(102);
var vue_scrollto_default = /*#__PURE__*/__webpack_require__.n(vue_scrollto);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loader.vue?vue&type=template&id=001c026c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loaderSpinner",class:("size-" + _vm.size)},[_vm._v("Loading...")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Loader.vue?vue&type=template&id=001c026c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loader.vue?vue&type=script&lang=ts&

/* harmony default export */ var Loadervue_type_script_lang_ts_ = (vue_runtime_esm["a" /* default */].extend({
  name: "Loader",
  props: {
    size: {
      type: String,
      default: "md",
      required: false
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Loader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Loadervue_type_script_lang_ts_ = (Loadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Loader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Loader = (component.exports);
// CONCATENATED MODULE: ./src/plugins/main.ts



vue_runtime_esm["a" /* default */].use(vue_scrollto_default.a);
vue_runtime_esm["a" /* default */].component("Loader", Loader);
vue_runtime_esm["a" /* default */].mixin({
  methods: {
    scrollTo: function scrollTo(selector) {
      this.$scrollTo(document.querySelector(selector), 1100, {
        x: false,
        y: true,
        cancelable: true,
        offset: -84
      });
    }
  }
});
/**
 * 100vh issue fix
 * @refer https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9
 */

var appHeight = function appHeight() {
  var doc = document.documentElement;
  doc.style.setProperty("--app-height", "".concat(window.screen.availHeight, "px"));
}; // listener removed to avoid changing set variable
// window.addEventListener("resize", appHeight);


appHeight();

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ZCta.vue?vue&type=template&id=55b7f218&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.scroll)?_c('a',{class:_vm.classAttribute,on:{"!click":function($event){return _vm.scrollTo(_vm.scroll)}}},[_vm._t("default"),_vm._v(" "),_c('svg',{staticClass:"HoverArrow",attrs:{"width":"10","height":"10","viewBox":"0 0 10 10","aria-hidden":"true"}},[_c('g',{attrs:{"fill-rule":"evenodd"}},[_c('path',{staticClass:"HoverArrow__linePath",attrs:{"d":"M0 5h7"}}),_vm._v(" "),_c('path',{staticClass:"HoverArrow__tipPath",attrs:{"d":"M1 1l4 4-4 4"}})])])],2):_c('a',{class:_vm.classAttribute,attrs:{"href":_vm.href,"target":_vm.target}},[_vm._t("default"),_vm._v(" "),_c('svg',{staticClass:"HoverArrow",attrs:{"width":"10","height":"10","viewBox":"0 0 10 10","aria-hidden":"true"}},[_c('g',{attrs:{"fill-rule":"evenodd"}},[_c('path',{staticClass:"HoverArrow__linePath",attrs:{"d":"M0 5h7"}}),_vm._v(" "),_c('path',{staticClass:"HoverArrow__tipPath",attrs:{"d":"M1 1l4 4-4 4"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ZCta.vue?vue&type=template&id=55b7f218&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ZCta.vue?vue&type=script&lang=ts&




/* harmony default export */ var ZCtavue_type_script_lang_ts_ = (vue_runtime_esm["a" /* default */].extend({
  name: "ZCta",
  props: {
    scroll: {
      required: false,
      type: String,
      default: ""
    },
    href: {
      required: false,
      type: String,
      default: ""
    },
    target: {
      required: false,
      type: String,
      default: "_blank"
    },
    cssClass: {
      required: false,
      type: String,
      default: ""
    }
  },
  computed: {
    classAttribute: function classAttribute() {
      var cssClasses = ["CtaButton", "variant--Link", "CtaButton--arrow"];

      if (this.cssClass) {
        var parsedClasses = this.cssClass.split(" ");
        parsedClasses.forEach(function (singleClassName) {
          cssClasses.push(singleClassName);
        });
      }

      return cssClasses;
    }
  }
}));
// CONCATENATED MODULE: ./src/components/ZCta.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ZCtavue_type_script_lang_ts_ = (ZCtavue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/ZCta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ZCtavue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ZCta = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/SocialBlock.vue?vue&type=template&id=7786d1fd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"socialIcons"},_vm._l((_vm.socialNetworks),function(socialProfile,numIndex){return _c('a',{key:numIndex,staticClass:"socialItem",attrs:{"href":socialProfile.url,"target":"_blank"}},[_c('i',{class:[socialProfile.icon,'fab']}),_vm._v(" "),_c('span',[_vm._v(_vm._s(socialProfile.name))])])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/blocks/SocialBlock.vue?vue&type=template&id=7786d1fd&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/SocialBlock.vue?vue&type=script&lang=ts&


/* harmony default export */ var SocialBlockvue_type_script_lang_ts_ = (vue_runtime_esm["a" /* default */].extend({
  props: {
    location: {
      required: false,
      type: String,
      default: "header"
    }
  },
  computed: {
    socialNetworks: function socialNetworks() {
      var _this = this;

      var socialIcons = [{
        name: "Medium Blog",
        icon: ["fa-medium-m", "fab"],
        url: "https://medium.com/matter-labs"
      }, {
        name: "Discord Community",
        icon: ["fa-discord", "fab"],
        url: "https://discord.com/invite/px2aR7w"
      }, {
        name: "Telegram Community",
        icon: ["fa-telegram-plane", "fab"],
        url: "https://t.me/zksync"
      }, {
        name: "Twitter Community",
        icon: ["fa-twitter", "fab"],
        url: "https://twitter.com/zksync"
      }, {
        name: "All Contacts",
        icon: ["fa-at", "fal"],
        url: "/contact.html",
        hideIn: "footer"
      }];
      return socialIcons.filter(function (item) {
        return !item.hideIn || item.hideIn !== _this.location;
      });
    }
  }
}));
// CONCATENATED MODULE: ./src/blocks/SocialBlock.vue?vue&type=script&lang=ts&
 /* harmony default export */ var blocks_SocialBlockvue_type_script_lang_ts_ = (SocialBlockvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/blocks/SocialBlock.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blocks_SocialBlockvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SocialBlock = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=template&id=294bb5d4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"indexLayout"},[_c('header-component'),_vm._v(" "),_c('div',{staticClass:"routerContainer"},[_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[_c('nuxt')],1)],1),_vm._v(" "),_c('footer-component')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=template&id=294bb5d4&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/Header.vue?vue&type=template&id=00fec43a&
var Headervue_type_template_id_00fec43a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.handleClose),expression:"handleClose"}],staticClass:"indexHeader",class:{'opened': _vm.opened}},[_c('div',{staticClass:"mobileIndexHeader"},[_c('i-container',{staticClass:"mobileOnly"},[_c('i-row',[_c('i-column',[_c('transition',{attrs:{"name":"fade"}},[_c('logo')],1)],1),_vm._v(" "),_c('i-column',{staticClass:"_padding-right-0"},[_c('div',{staticClass:"hamContainer"},[_c('svg',{attrs:{"id":"ham","viewBox":"0 0 100 100","width":"80"},on:{"click":function($event){_vm.opened=!_vm.opened;}}},[_c('path',{staticClass:"line top",attrs:{"d":"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),_vm._v(" "),_c('path',{staticClass:"line middle",attrs:{"d":"m 30,50 h 40"}}),_vm._v(" "),_c('path',{staticClass:"line bottom",attrs:{"d":"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"mainIndexHeader"},[_c('i-container',[_c('i-row',[_c('i-column',{staticClass:"_padding-left-0 desktopOnly",attrs:{"xs":12,"md":4}},[_c('logo')],1),_vm._v(" "),_c('i-column',{staticClass:"_padding-y-0",attrs:{"xs":12,"md":4}},[_c('div',{staticClass:"linksContainer"},[_c('a',{staticClass:"linkItem",attrs:{"href":"/faq/","target":"_blank"}},[_vm._v("FAQ")]),_vm._v(" "),_c('a',{staticClass:"linkItem",attrs:{"href":"/dev/","target":"_blank"}},[_vm._v("Docs")]),_vm._v(" "),_c('i-dropdown',{staticClass:"_background-transparent _border-none likeLinkItem",class:{'opened': _vm.dropdownOpened},attrs:{"hide-on-click":true,"placement":"bottom","size":"sm","trigger":"click","variation":"dark"}},[_c('a',{staticClass:"dropDownHandler linkItem _position-top-0",on:{"!click":function($event){_vm.dropdownOpened = !_vm.dropdownOpened}}},[_vm._v("zkTools "),_c('i',{staticClass:"fal",class:{'fa-chevron-up': _vm.dropdownOpened, 'fa-chevron-down': !_vm.dropdownOpened}})]),_vm._v(" "),_c('i-dropdown-menu',{model:{value:(_vm.dropdownOpened),callback:function ($$v) {_vm.dropdownOpened=$$v},expression:"dropdownOpened"}},_vm._l((_vm.dropdownOptions),function(item,index){return _c('i-dropdown-item',{key:index,attrs:{"href":item.link,"target":"_blank"},on:{"!click":function($event){_vm.dropdownOpened = false;}}},[_vm._v(_vm._s(item.name)+"\n                ")])}),1)],1),_vm._v(" "),_c('a',{staticClass:"linkItem",attrs:{"href":"https://www.notion.so/matterlabs/Career-at-Matter-Labs-4a69ed0f7acb45c89f662cf12dbc2464","target":"_blank"}},[_vm._v("We're hiring")])],1)]),_vm._v(" "),_c('i-column',{staticClass:"_padding-right-0 _justify-content-end",attrs:{"xs":12,"md":4}},[_c('social-block')],1)],1)],1)],1)])}
var Headervue_type_template_id_00fec43a_staticRenderFns = []


// CONCATENATED MODULE: ./src/blocks/Header.vue?vue&type=template&id=00fec43a&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/Logo.vue?vue&type=template&id=60580d0c&
var Logovue_type_template_id_60580d0c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_display-flex _flex-direction-row _align-items-center headerWrapper"},[_c('svg',{staticClass:"projectLogo _margin-right-1-2",attrs:{"width":"120","height":"27","viewBox":"0 0 120 27","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M41.6539 13.4915L29.8378 1.71674V10.34L18.1055 18.9739L29.8378 18.982V25.2662L41.6539 13.4915Z","fill":"#4E529A"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M-0.00158644 13.4872L11.8145 25.2619L11.8145 16.708L23.5469 8.0047L11.8145 7.99664L11.8145 1.71246L-0.00158644 13.4872Z","fill":"#8C8DFC"}}),_vm._v(" "),_c('path',{attrs:{"d":"M59.2586 19.3717H50.2148V16.7746L55.3922 11.0034H50.3482V8.45069H59.1697V10.9146L53.8368 16.7968H59.2586V19.3717Z","fill":"white","fill-opacity":"0.9"}}),_vm._v(" "),_c('path',{attrs:{"d":"M71.6009 8.45069L67.2235 13.0455L71.6898 19.3717H68.0678L65.1792 15.1986L63.957 16.486V19.3717H61.0017V3.30096H63.957V12.5128L67.7345 8.45069H71.6009Z","fill":"white","fill-opacity":"0.9"}}),_vm._v(" "),_c('path',{attrs:{"d":"M84.4547 7.38523L81.6994 8.22872C81.5957 7.66639 81.3142 7.15586 80.855 6.69712C80.3958 6.23838 79.7217 6.00901 78.8329 6.00901C78.1071 6.00901 77.5145 6.20878 77.0553 6.60833C76.5961 6.99308 76.3664 7.45922 76.3664 8.00675C76.3664 8.96862 76.9368 9.56054 78.0774 9.78251L80.2773 10.2043C81.6697 10.4706 82.7512 11.0255 83.5215 11.869C84.2918 12.7125 84.6769 13.704 84.6769 14.8434C84.6769 16.1457 84.1584 17.2851 83.1215 18.2618C82.0993 19.2237 80.7217 19.7046 78.9885 19.7046C77.996 19.7046 77.0997 19.5566 76.2998 19.2607C75.4998 18.9647 74.8554 18.5726 74.3666 18.0842C73.8777 17.5811 73.4926 17.0558 73.2111 16.5082C72.9445 15.9459 72.7815 15.3688 72.7223 14.7769L75.5665 14.0222C75.6406 14.8656 75.9665 15.5686 76.5442 16.1309C77.1368 16.6932 77.9589 16.9744 79.0107 16.9744C79.8106 16.9744 80.4328 16.7968 80.8772 16.4416C81.3364 16.0865 81.5661 15.6203 81.5661 15.0432C81.5661 14.5845 81.3957 14.1923 81.055 13.8668C80.7291 13.5264 80.2624 13.2971 79.6551 13.1787L77.4553 12.7347C76.1813 12.4684 75.1739 11.943 74.4333 11.1587C73.6926 10.3744 73.3222 9.39776 73.3222 8.22872C73.3222 6.8377 73.8555 5.66865 74.9221 4.72158C76.0035 3.7745 77.2997 3.30096 78.8107 3.30096C79.7143 3.30096 80.5217 3.42675 81.2327 3.67832C81.9438 3.92988 82.5141 4.27024 82.9437 4.69938C83.3733 5.11373 83.7066 5.54287 83.9437 5.98681C84.1807 6.43075 84.351 6.89689 84.4547 7.38523Z","fill":"white","fill-opacity":"0.9"}}),_vm._v(" "),_c('path',{attrs:{"d":"M89.6555 23.6779H86.5224L89.1 17.9954L84.4559 8.45069H87.7668L90.6777 14.8434L93.3664 8.45069H96.5217L89.6555 23.6779Z","fill":"white","fill-opacity":"0.9"}}),_vm._v(" "),_c('path',{attrs:{"d":"M100.601 13.0899V19.3717H97.6454V8.45069H100.512V9.80471C100.823 9.27198 101.267 8.86503 101.845 8.58387C102.423 8.30271 103.03 8.16213 103.667 8.16213C104.956 8.16213 105.934 8.56907 106.6 9.38297C107.282 10.1821 107.622 11.2179 107.622 12.4906V19.3717H104.667V13.0011C104.667 12.35 104.497 11.8246 104.156 11.4251C103.83 11.0255 103.326 10.8258 102.645 10.8258C102.023 10.8258 101.527 11.0403 101.156 11.4695C100.786 11.8986 100.601 12.4388 100.601 13.0899Z","fill":"white","fill-opacity":"0.9"}}),_vm._v(" "),_c('path',{attrs:{"d":"M114.866 10.848C114.081 10.848 113.422 11.1217 112.888 11.6693C112.355 12.2168 112.088 12.9641 112.088 13.9112C112.088 14.8582 112.355 15.6129 112.888 16.1753C113.436 16.7228 114.103 16.9966 114.888 16.9966C115.584 16.9966 116.14 16.819 116.555 16.4638C116.97 16.0939 117.251 15.6573 117.399 15.1542L119.999 16.0199C119.732 17.0262 119.155 17.8918 118.266 18.617C117.377 19.3421 116.251 19.7046 114.888 19.7046C113.259 19.7046 111.888 19.1571 110.777 18.062C109.681 16.9522 109.133 15.5686 109.133 13.9112C109.133 12.239 109.674 10.8554 110.755 9.76032C111.851 8.66526 113.199 8.11773 114.799 8.11773C116.192 8.11773 117.332 8.48028 118.221 9.20539C119.11 9.9157 119.68 10.7814 119.932 11.8024L117.288 12.6903C116.932 11.4621 116.125 10.848 114.866 10.848Z","fill":"white","fill-opacity":"0.9"}})])])}
var Logovue_type_template_id_60580d0c_staticRenderFns = []


// CONCATENATED MODULE: ./src/blocks/Logo.vue?vue&type=template&id=60580d0c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/blocks/Logo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  Logovue_type_template_id_60580d0c_render,
  Logovue_type_template_id_60580d0c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Logo = (component.exports);
// EXTERNAL MODULE: ./src/blocks/SocialBlock.vue + 4 modules
var SocialBlock = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/directives/click-outside.js
var click_outside = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/Header.vue?vue&type=script&lang=ts&




/* harmony default export */ var Headervue_type_script_lang_ts_ = (vue_runtime_esm["a" /* default */].extend({
  components: {
    logo: Logo,
    SocialBlock: SocialBlock["a" /* default */]
  },
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  data: function data() {
    return {
      opened: false,
      showLogo: true,
      dropdownOpened: false,
      dropdownOptions: [{
        name: "zkWallet",
        link: "https://wallet.zksync.io/"
      }, {
        name: "zkLink",
        link: "https://link.zksync.io/"
      }, {
        name: "zkScan",
        link: "https://zkscan.io/"
      }, {
        name: "Alternative Withdrawal",
        link: "https://withdraw.zksync.io/"
      }, {
        name: "Solution for Out-of-gas issue",
        link: "https://out-of-gas.zksync.io/"
      }, {
        name: "zkCheckout",
        link: "https://www.npmjs.com/package/zksync-checkout/"
      }, {
        name: "zkMint",
        link: "https://mint.zksync.dev"
      }]
    };
  },
  beforeMount: function beforeMount() {
    if ( true && window.pageXOffset < 768) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if ( true && window.pageXOffset < 768) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll: function handleScroll() {
      this.showLogo = window.pageYOffset > 300;
    },
    handleClose: function handleClose() {
      this.dropdownOpened = false;
    }
  }
}));
// CONCATENATED MODULE: ./src/blocks/Header.vue?vue&type=script&lang=ts&
 /* harmony default export */ var blocks_Headervue_type_script_lang_ts_ = (Headervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/blocks/Header.vue





/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  blocks_Headervue_type_script_lang_ts_,
  Headervue_type_template_id_00fec43a_render,
  Headervue_type_template_id_00fec43a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = (Header_component.exports);

/* nuxt-component-imports */
installComponents(Header_component, {IColumn: __webpack_require__(63).default,IRow: __webpack_require__(60).default,IContainer: __webpack_require__(59).default,IDropdownItem: __webpack_require__(160).default,IDropdownMenu: __webpack_require__(98).default,IDropdown: __webpack_require__(99).default})

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(324);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/Footer.vue?vue&type=template&id=2ac16026&
var Footervue_type_template_id_2ac16026_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"mainFooter"},[_c('i-container',[_c('i-row',{staticClass:"_padding-y-lg-2 _padding-y-xs-1"},[_c('i-column',{staticClass:"_padding-left-0",attrs:{"xs":12,"md":6}},[_c('div',{staticClass:"secondaryText"},[_vm._v("\n          Made with ❤ by "),_c('a',{attrs:{"href":"https://matter-labs.io","target":"_blank"}},[_vm._v("Matter Labs")])])]),_vm._v(" "),_c('i-column',{staticClass:"_padding-right-0",attrs:{"xs":12,"md":6}},[_c('div',{staticClass:"rightSideLinks"},[_c('a',{attrs:{"href":'/contact.html'}},[_c('i',{staticClass:"fal fa-at"}),_vm._v(" Contacts")]),_vm._v(" "),_c('a',{attrs:{"href":'https://github.com/matter-labs/zksync'}},[_c('i',{staticClass:"fab fa-github"}),_vm._v(" GitHub")]),_vm._v(" "),_c('a',{attrs:{"href":'/legal/terms.html'}},[_vm._v("Terms")]),_vm._v(" "),_c('a',{attrs:{"href":'/legal/privacy.html'}},[_vm._v("Privacy Policy")])])])],1)],1)],1)}
var Footervue_type_template_id_2ac16026_staticRenderFns = []


// CONCATENATED MODULE: ./src/blocks/Footer.vue?vue&type=template&id=2ac16026&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/blocks/Footer.vue?vue&type=script&lang=ts&

/* harmony default export */ var Footervue_type_script_lang_ts_ = (vue_runtime_esm["a" /* default */].extend({
  name: "Footer"
}));
// CONCATENATED MODULE: ./src/blocks/Footer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var blocks_Footervue_type_script_lang_ts_ = (Footervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/blocks/Footer.vue





/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  blocks_Footervue_type_script_lang_ts_,
  Footervue_type_template_id_2ac16026_render,
  Footervue_type_template_id_2ac16026_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Footer = (Footer_component.exports);

/* nuxt-component-imports */
installComponents(Footer_component, {IColumn: __webpack_require__(63).default,IRow: __webpack_require__(60).default,IContainer: __webpack_require__(59).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=script&lang=ts&


/* AOS doesn't support TS */
// @ts-ignore: Unreachable code error



/* harmony default export */ var defaultvue_type_script_lang_ts_ = (vue_runtime_esm["a" /* default */].extend({
  components: {
    headerComponent: Header,
    footerComponent: Footer
  },
  data: function data() {
    return {};
  },
  created: function created() {
    aos_default.a.init({
      once: true
    });
    this.$inkline.config.variant = "dark";
    /* Vue 2 TS doesn't support custom global properties, therefore we need to bypass type checking */
  },
  mounted: function mounted() {
    if (true) {
      window.history.scrollRestoration = "manual";
    }

    this.handlePageScroll();
  },
  methods: {
    handlePageScroll: function handlePageScroll() {
      var lastScroll = this.$store.getters["scroll/getLastScroll"];
      document.documentElement.scrollTop = lastScroll !== false ? lastScroll.y : 0;
    }
  }
}));
// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layouts_default = __webpack_exports__["a"] = (default_component.exports);

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
var state = function state() {
  return {};
};
var getters = {};
var actions = {};

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
var state = function state() {
  return {
    lastScroll: false,
    lastPath: ""
  };
};
var mutations = {
  setLastScroll: function setLastScroll(state, lastScroll) {
    if (!lastScroll) {
      state.lastScroll = false;
    } else {
      state.lastScroll = lastScroll;
    }
  },
  setLastPath: function setLastPath(state, lastPath) {
    state.lastPath = lastPath;
  }
};
var getters = {
  getLastScroll: function getLastScroll(state) {
    return state.lastScroll;
  },
  getLastPath: function getLastPath(state) {
    return state.lastPath;
  }
};

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(334);
module.exports = __webpack_require__(335);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=template&id=012ffb98&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-404"},[_c('svg',{class:_vm.className,style:(_vm.cssProps),attrs:{"width":_vm.width,"height":_vm.height ? _vm.height : false,"viewBox":"0 0 448 142","fill":_vm.color ? _vm.color : 'white',"aria-hidden":_vm.title ? false : !_vm.desc,"xmlns":"http://www.w3.org/2000/svg"}},[(!!_vm.title)?_c('title',{staticClass:"h2"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),(!!_vm.desc)?_c('desc',[_vm._v(_vm._s(_vm.desc))]):_vm._e(),_vm._v(" "),_c('g',{attrs:{"clip-path":"url(#clip0)"}},[_c('path',{attrs:{"d":"M16.5156 115.941C16.5156 117.449 15.9688 118.625 14.875 119.469C13.7812 120.312 12.2969 120.734 10.4219 120.734C8.39062 120.734 6.82812 120.473 5.73438 119.949V118.027C6.4375 118.324 7.20312 118.559 8.03125 118.73C8.85938 118.902 9.67969 118.988 10.4922 118.988C11.8203 118.988 12.8203 118.738 13.4922 118.238C14.1641 117.73 14.5 117.027 14.5 116.129C14.5 115.535 14.3789 115.051 14.1367 114.676C13.9023 114.293 13.5039 113.941 12.9414 113.621C12.3867 113.301 11.5391 112.938 10.3984 112.531C8.80469 111.961 7.66406 111.285 6.97656 110.504C6.29688 109.723 5.95703 108.703 5.95703 107.445C5.95703 106.125 6.45312 105.074 7.44531 104.293C8.4375 103.512 9.75 103.121 11.3828 103.121C13.0859 103.121 14.6523 103.434 16.082 104.059L15.4609 105.793C14.0469 105.199 12.6719 104.902 11.3359 104.902C10.2812 104.902 9.45703 105.129 8.86328 105.582C8.26953 106.035 7.97266 106.664 7.97266 107.469C7.97266 108.062 8.08203 108.551 8.30078 108.934C8.51953 109.309 8.88672 109.656 9.40234 109.977C9.92578 110.289 10.7227 110.637 11.793 111.02C13.5898 111.66 14.8242 112.348 15.4961 113.082C16.1758 113.816 16.5156 114.77 16.5156 115.941ZM30.8125 114.066C30.8125 116.16 30.2852 117.797 29.2305 118.977C28.1758 120.148 26.7188 120.734 24.8594 120.734C23.7109 120.734 22.6914 120.465 21.8008 119.926C20.9102 119.387 20.2227 118.613 19.7383 117.605C19.2539 116.598 19.0117 115.418 19.0117 114.066C19.0117 111.973 19.5352 110.344 20.582 109.18C21.6289 108.008 23.082 107.422 24.9414 107.422C26.7383 107.422 28.1641 108.02 29.2188 109.215C30.2812 110.41 30.8125 112.027 30.8125 114.066ZM21.0273 114.066C21.0273 115.707 21.3555 116.957 22.0117 117.816C22.668 118.676 23.6328 119.105 24.9062 119.105C26.1797 119.105 27.1445 118.68 27.8008 117.828C28.4648 116.969 28.7969 115.715 28.7969 114.066C28.7969 112.434 28.4648 111.195 27.8008 110.352C27.1445 109.5 26.1719 109.074 24.8828 109.074C23.6094 109.074 22.6484 109.492 22 110.328C21.3516 111.164 21.0273 112.41 21.0273 114.066ZM40.0938 107.422C40.6641 107.422 41.1758 107.469 41.6289 107.562L41.3594 109.367C40.8281 109.25 40.3594 109.191 39.9531 109.191C38.9141 109.191 38.0234 109.613 37.2812 110.457C36.5469 111.301 36.1797 112.352 36.1797 113.609V120.5H34.2344V107.656H35.8398L36.0625 110.035H36.1562C36.6328 109.199 37.207 108.555 37.8789 108.102C38.5508 107.648 39.2891 107.422 40.0938 107.422ZM49.8906 107.422C50.4609 107.422 50.9727 107.469 51.4258 107.562L51.1562 109.367C50.625 109.25 50.1562 109.191 49.75 109.191C48.7109 109.191 47.8203 109.613 47.0781 110.457C46.3438 111.301 45.9766 112.352 45.9766 113.609V120.5H44.0312V107.656H45.6367L45.8594 110.035H45.9531C46.4297 109.199 47.0039 108.555 47.6758 108.102C48.3477 107.648 49.0859 107.422 49.8906 107.422ZM51.7891 107.656H53.875L56.6875 114.98C57.3047 116.652 57.6875 117.859 57.8359 118.602H57.9297C58.0312 118.203 58.2422 117.523 58.5625 116.562C58.8906 115.594 59.9531 112.625 61.75 107.656H63.8359L58.3164 122.281C57.7695 123.727 57.1289 124.75 56.3945 125.352C55.668 125.961 54.7734 126.266 53.7109 126.266C53.1172 126.266 52.5312 126.199 51.9531 126.066V124.508C52.3828 124.602 52.8633 124.648 53.3945 124.648C54.7305 124.648 55.6836 123.898 56.2539 122.398L56.9688 120.57L51.7891 107.656ZM67.9609 117.711L68.1367 117.98C67.9336 118.762 67.6406 119.668 67.2578 120.699C66.875 121.738 66.4766 122.703 66.0625 123.594H64.5977C64.8086 122.781 65.0391 121.777 65.2891 120.582C65.5469 119.387 65.7266 118.43 65.8281 117.711H67.9609ZM88.5273 120.5L86.1719 112.965C86.0234 112.504 85.7461 111.457 85.3398 109.824H85.2461C84.9336 111.191 84.6602 112.246 84.4258 112.988L82 120.5H79.75L76.2461 107.656H78.2852C79.1133 110.883 79.7422 113.34 80.1719 115.027C80.6094 116.715 80.8594 117.852 80.9219 118.438H81.0156C81.1016 117.992 81.2383 117.418 81.4258 116.715C81.6211 116.004 81.7891 115.441 81.9297 115.027L84.2852 107.656H86.3945L88.6914 115.027C89.1289 116.371 89.4258 117.5 89.582 118.414H89.6758C89.707 118.133 89.7891 117.699 89.9219 117.113C90.0625 116.527 90.8789 113.375 92.3711 107.656H94.3867L90.8359 120.5H88.5273ZM102.145 120.734C100.246 120.734 98.7461 120.156 97.6445 119C96.5508 117.844 96.0039 116.238 96.0039 114.184C96.0039 112.113 96.5117 110.469 97.5273 109.25C98.5508 108.031 99.9219 107.422 101.641 107.422C103.25 107.422 104.523 107.953 105.461 109.016C106.398 110.07 106.867 111.465 106.867 113.199V114.43H98.0195C98.0586 115.938 98.4375 117.082 99.1562 117.863C99.8828 118.645 100.902 119.035 102.215 119.035C103.598 119.035 104.965 118.746 106.316 118.168V119.902C105.629 120.199 104.977 120.41 104.359 120.535C103.75 120.668 103.012 120.734 102.145 120.734ZM101.617 109.051C100.586 109.051 99.7617 109.387 99.1445 110.059C98.5352 110.73 98.1758 111.66 98.0664 112.848H104.781C104.781 111.621 104.508 110.684 103.961 110.035C103.414 109.379 102.633 109.051 101.617 109.051ZM126.918 120.5L124.562 112.965C124.414 112.504 124.137 111.457 123.73 109.824H123.637C123.324 111.191 123.051 112.246 122.816 112.988L120.391 120.5H118.141L114.637 107.656H116.676C117.504 110.883 118.133 113.34 118.562 115.027C119 116.715 119.25 117.852 119.312 118.438H119.406C119.492 117.992 119.629 117.418 119.816 116.715C120.012 116.004 120.18 115.441 120.32 115.027L122.676 107.656H124.785L127.082 115.027C127.52 116.371 127.816 117.5 127.973 118.414H128.066C128.098 118.133 128.18 117.699 128.312 117.113C128.453 116.527 129.27 113.375 130.762 107.656H132.777L129.227 120.5H126.918ZM140.535 120.734C138.637 120.734 137.137 120.156 136.035 119C134.941 117.844 134.395 116.238 134.395 114.184C134.395 112.113 134.902 110.469 135.918 109.25C136.941 108.031 138.312 107.422 140.031 107.422C141.641 107.422 142.914 107.953 143.852 109.016C144.789 110.07 145.258 111.465 145.258 113.199V114.43H136.41C136.449 115.938 136.828 117.082 137.547 117.863C138.273 118.645 139.293 119.035 140.605 119.035C141.988 119.035 143.355 118.746 144.707 118.168V119.902C144.02 120.199 143.367 120.41 142.75 120.535C142.141 120.668 141.402 120.734 140.535 120.734ZM140.008 109.051C138.977 109.051 138.152 109.387 137.535 110.059C136.926 110.73 136.566 111.66 136.457 112.848H143.172C143.172 111.621 142.898 110.684 142.352 110.035C141.805 109.379 141.023 109.051 140.008 109.051ZM154.445 107.422C155.016 107.422 155.527 107.469 155.98 107.562L155.711 109.367C155.18 109.25 154.711 109.191 154.305 109.191C153.266 109.191 152.375 109.613 151.633 110.457C150.898 111.301 150.531 112.352 150.531 113.609V120.5H148.586V107.656H150.191L150.414 110.035H150.508C150.984 109.199 151.559 108.555 152.23 108.102C152.902 107.648 153.641 107.422 154.445 107.422ZM163.809 120.734C161.91 120.734 160.41 120.156 159.309 119C158.215 117.844 157.668 116.238 157.668 114.184C157.668 112.113 158.176 110.469 159.191 109.25C160.215 108.031 161.586 107.422 163.305 107.422C164.914 107.422 166.188 107.953 167.125 109.016C168.062 110.07 168.531 111.465 168.531 113.199V114.43H159.684C159.723 115.938 160.102 117.082 160.82 117.863C161.547 118.645 162.566 119.035 163.879 119.035C165.262 119.035 166.629 118.746 167.98 118.168V119.902C167.293 120.199 166.641 120.41 166.023 120.535C165.414 120.668 164.676 120.734 163.809 120.734ZM163.281 109.051C162.25 109.051 161.426 109.387 160.809 110.059C160.199 110.73 159.84 111.66 159.73 112.848H166.445C166.445 111.621 166.172 110.684 165.625 110.035C165.078 109.379 164.297 109.051 163.281 109.051ZM179.922 107.656V115.988C179.922 117.035 180.16 117.816 180.637 118.332C181.113 118.848 181.859 119.105 182.875 119.105C184.219 119.105 185.199 118.738 185.816 118.004C186.441 117.27 186.754 116.07 186.754 114.406V107.656H188.699V120.5H187.094L186.812 118.777H186.707C186.309 119.41 185.754 119.895 185.043 120.23C184.34 120.566 183.535 120.734 182.629 120.734C181.066 120.734 179.895 120.363 179.113 119.621C178.34 118.879 177.953 117.691 177.953 116.059V107.656H179.922ZM201.625 120.5V112.191C201.625 111.145 201.387 110.363 200.91 109.848C200.434 109.332 199.688 109.074 198.672 109.074C197.328 109.074 196.344 109.438 195.719 110.164C195.094 110.891 194.781 112.09 194.781 113.762V120.5H192.836V107.656H194.418L194.734 109.414H194.828C195.227 108.781 195.785 108.293 196.504 107.949C197.223 107.598 198.023 107.422 198.906 107.422C200.453 107.422 201.617 107.797 202.398 108.547C203.18 109.289 203.57 110.48 203.57 112.121V120.5H201.625ZM215.477 120.5L215.09 118.672H214.996C214.355 119.477 213.715 120.023 213.074 120.312C212.441 120.594 211.648 120.734 210.695 120.734C209.422 120.734 208.422 120.406 207.695 119.75C206.977 119.094 206.617 118.16 206.617 116.949C206.617 114.355 208.691 112.996 212.84 112.871L215.02 112.801V112.004C215.02 110.996 214.801 110.254 214.363 109.777C213.934 109.293 213.242 109.051 212.289 109.051C211.219 109.051 210.008 109.379 208.656 110.035L208.059 108.547C208.691 108.203 209.383 107.934 210.133 107.738C210.891 107.543 211.648 107.445 212.406 107.445C213.938 107.445 215.07 107.785 215.805 108.465C216.547 109.145 216.918 110.234 216.918 111.734V120.5H215.477ZM211.082 119.129C212.293 119.129 213.242 118.797 213.93 118.133C214.625 117.469 214.973 116.539 214.973 115.344V114.184L213.027 114.266C211.48 114.32 210.363 114.562 209.676 114.992C208.996 115.414 208.656 116.074 208.656 116.973C208.656 117.676 208.867 118.211 209.289 118.578C209.719 118.945 210.316 119.129 211.082 119.129ZM226.914 107.445C228.602 107.445 229.91 108.023 230.84 109.18C231.777 110.328 232.246 111.957 232.246 114.066C232.246 116.176 231.773 117.816 230.828 118.988C229.891 120.152 228.586 120.734 226.914 120.734C226.078 120.734 225.312 120.582 224.617 120.277C223.93 119.965 223.352 119.488 222.883 118.848H222.742L222.332 120.5H220.938V102.266H222.883V106.695C222.883 107.688 222.852 108.578 222.789 109.367H222.883C223.789 108.086 225.133 107.445 226.914 107.445ZM226.633 109.074C225.305 109.074 224.348 109.457 223.762 110.223C223.176 110.98 222.883 112.262 222.883 114.066C222.883 115.871 223.184 117.164 223.785 117.945C224.387 118.719 225.352 119.105 226.68 119.105C227.875 119.105 228.766 118.672 229.352 117.805C229.938 116.93 230.23 115.676 230.23 114.043C230.23 112.371 229.938 111.125 229.352 110.305C228.766 109.484 227.859 109.074 226.633 109.074ZM237.602 120.5H235.656V102.266H237.602V120.5ZM247.152 120.734C245.254 120.734 243.754 120.156 242.652 119C241.559 117.844 241.012 116.238 241.012 114.184C241.012 112.113 241.52 110.469 242.535 109.25C243.559 108.031 244.93 107.422 246.648 107.422C248.258 107.422 249.531 107.953 250.469 109.016C251.406 110.07 251.875 111.465 251.875 113.199V114.43H243.027C243.066 115.938 243.445 117.082 244.164 117.863C244.891 118.645 245.91 119.035 247.223 119.035C248.605 119.035 249.973 118.746 251.324 118.168V119.902C250.637 120.199 249.984 120.41 249.367 120.535C248.758 120.668 248.02 120.734 247.152 120.734ZM246.625 109.051C245.594 109.051 244.77 109.387 244.152 110.059C243.543 110.73 243.184 111.66 243.074 112.848H249.789C249.789 111.621 249.516 110.684 248.969 110.035C248.422 109.379 247.641 109.051 246.625 109.051ZM265.586 119.129C265.93 119.129 266.262 119.105 266.582 119.059C266.902 119.004 267.156 118.949 267.344 118.895V120.383C267.133 120.484 266.82 120.566 266.406 120.629C266 120.699 265.633 120.734 265.305 120.734C262.82 120.734 261.578 119.426 261.578 116.809V109.168H259.738V108.23L261.578 107.422L262.398 104.68H263.523V107.656H267.25V109.168H263.523V116.727C263.523 117.5 263.707 118.094 264.074 118.508C264.441 118.922 264.945 119.129 265.586 119.129ZM281.008 114.066C281.008 116.16 280.48 117.797 279.426 118.977C278.371 120.148 276.914 120.734 275.055 120.734C273.906 120.734 272.887 120.465 271.996 119.926C271.105 119.387 270.418 118.613 269.934 117.605C269.449 116.598 269.207 115.418 269.207 114.066C269.207 111.973 269.73 110.344 270.777 109.18C271.824 108.008 273.277 107.422 275.137 107.422C276.934 107.422 278.359 108.02 279.414 109.215C280.477 110.41 281.008 112.027 281.008 114.066ZM271.223 114.066C271.223 115.707 271.551 116.957 272.207 117.816C272.863 118.676 273.828 119.105 275.102 119.105C276.375 119.105 277.34 118.68 277.996 117.828C278.66 116.969 278.992 115.715 278.992 114.066C278.992 112.434 278.66 111.195 277.996 110.352C277.34 109.5 276.367 109.074 275.078 109.074C273.805 109.074 272.844 109.492 272.195 110.328C271.547 111.164 271.223 112.41 271.223 114.066ZM296.453 109.168H293.184V120.5H291.238V109.168H288.941V108.289L291.238 107.586V106.871C291.238 103.715 292.617 102.137 295.375 102.137C296.055 102.137 296.852 102.273 297.766 102.547L297.262 104.105C296.512 103.863 295.871 103.742 295.34 103.742C294.605 103.742 294.062 103.988 293.711 104.48C293.359 104.965 293.184 105.746 293.184 106.824V107.656H296.453V109.168ZM300.742 120.5H298.797V107.656H300.742V120.5ZM298.633 104.176C298.633 103.73 298.742 103.406 298.961 103.203C299.18 102.992 299.453 102.887 299.781 102.887C300.094 102.887 300.363 102.992 300.59 103.203C300.816 103.414 300.93 103.738 300.93 104.176C300.93 104.613 300.816 104.941 300.59 105.16C300.363 105.371 300.094 105.477 299.781 105.477C299.453 105.477 299.18 105.371 298.961 105.16C298.742 104.941 298.633 104.613 298.633 104.176ZM313.656 120.5V112.191C313.656 111.145 313.418 110.363 312.941 109.848C312.465 109.332 311.719 109.074 310.703 109.074C309.359 109.074 308.375 109.438 307.75 110.164C307.125 110.891 306.812 112.09 306.812 113.762V120.5H304.867V107.656H306.449L306.766 109.414H306.859C307.258 108.781 307.816 108.293 308.535 107.949C309.254 107.598 310.055 107.422 310.938 107.422C312.484 107.422 313.648 107.797 314.43 108.547C315.211 109.289 315.602 110.48 315.602 112.121V120.5H313.656ZM328.352 118.777H328.246C327.348 120.082 326.004 120.734 324.215 120.734C322.535 120.734 321.227 120.16 320.289 119.012C319.359 117.863 318.895 116.23 318.895 114.113C318.895 111.996 319.363 110.352 320.301 109.18C321.238 108.008 322.543 107.422 324.215 107.422C325.957 107.422 327.293 108.055 328.223 109.32H328.375L328.293 108.395L328.246 107.492V102.266H330.191V120.5H328.609L328.352 118.777ZM324.461 119.105C325.789 119.105 326.75 118.746 327.344 118.027C327.945 117.301 328.246 116.133 328.246 114.523V114.113C328.246 112.293 327.941 110.996 327.332 110.223C326.73 109.441 325.766 109.051 324.438 109.051C323.297 109.051 322.422 109.496 321.812 110.387C321.211 111.27 320.91 112.52 320.91 114.137C320.91 115.777 321.211 117.016 321.812 117.852C322.414 118.688 323.297 119.105 324.461 119.105ZM344.711 119.129C345.055 119.129 345.387 119.105 345.707 119.059C346.027 119.004 346.281 118.949 346.469 118.895V120.383C346.258 120.484 345.945 120.566 345.531 120.629C345.125 120.699 344.758 120.734 344.43 120.734C341.945 120.734 340.703 119.426 340.703 116.809V109.168H338.863V108.23L340.703 107.422L341.523 104.68H342.648V107.656H346.375V109.168H342.648V116.727C342.648 117.5 342.832 118.094 343.199 118.508C343.566 118.922 344.07 119.129 344.711 119.129ZM357.836 120.5V112.191C357.836 111.145 357.598 110.363 357.121 109.848C356.645 109.332 355.898 109.074 354.883 109.074C353.531 109.074 352.543 109.441 351.918 110.176C351.301 110.91 350.992 112.113 350.992 113.785V120.5H349.047V102.266H350.992V107.785C350.992 108.449 350.961 109 350.898 109.438H351.016C351.398 108.82 351.941 108.336 352.645 107.984C353.355 107.625 354.164 107.445 355.07 107.445C356.641 107.445 357.816 107.82 358.598 108.57C359.387 109.312 359.781 110.496 359.781 112.121V120.5H357.836ZM371.688 120.5L371.301 118.672H371.207C370.566 119.477 369.926 120.023 369.285 120.312C368.652 120.594 367.859 120.734 366.906 120.734C365.633 120.734 364.633 120.406 363.906 119.75C363.188 119.094 362.828 118.16 362.828 116.949C362.828 114.355 364.902 112.996 369.051 112.871L371.23 112.801V112.004C371.23 110.996 371.012 110.254 370.574 109.777C370.145 109.293 369.453 109.051 368.5 109.051C367.43 109.051 366.219 109.379 364.867 110.035L364.27 108.547C364.902 108.203 365.594 107.934 366.344 107.738C367.102 107.543 367.859 107.445 368.617 107.445C370.148 107.445 371.281 107.785 372.016 108.465C372.758 109.145 373.129 110.234 373.129 111.734V120.5H371.688ZM367.293 119.129C368.504 119.129 369.453 118.797 370.141 118.133C370.836 117.469 371.184 116.539 371.184 115.344V114.184L369.238 114.266C367.691 114.32 366.574 114.562 365.887 114.992C365.207 115.414 364.867 116.074 364.867 116.973C364.867 117.676 365.078 118.211 365.5 118.578C365.93 118.945 366.527 119.129 367.293 119.129ZM381.297 119.129C381.641 119.129 381.973 119.105 382.293 119.059C382.613 119.004 382.867 118.949 383.055 118.895V120.383C382.844 120.484 382.531 120.566 382.117 120.629C381.711 120.699 381.344 120.734 381.016 120.734C378.531 120.734 377.289 119.426 377.289 116.809V109.168H375.449V108.23L377.289 107.422L378.109 104.68H379.234V107.656H382.961V109.168H379.234V116.727C379.234 117.5 379.418 118.094 379.785 118.508C380.152 118.922 380.656 119.129 381.297 119.129ZM397.844 120.734C397.008 120.734 396.242 120.582 395.547 120.277C394.859 119.965 394.281 119.488 393.812 118.848H393.672C393.766 119.598 393.812 120.309 393.812 120.98V126.266H391.867V107.656H393.449L393.719 109.414H393.812C394.312 108.711 394.895 108.203 395.559 107.891C396.223 107.578 396.984 107.422 397.844 107.422C399.547 107.422 400.859 108.004 401.781 109.168C402.711 110.332 403.176 111.965 403.176 114.066C403.176 116.176 402.703 117.816 401.758 118.988C400.82 120.152 399.516 120.734 397.844 120.734ZM397.562 109.074C396.25 109.074 395.301 109.438 394.715 110.164C394.129 110.891 393.828 112.047 393.812 113.633V114.066C393.812 115.871 394.113 117.164 394.715 117.945C395.316 118.719 396.281 119.105 397.609 119.105C398.719 119.105 399.586 118.656 400.211 117.758C400.844 116.859 401.16 115.621 401.16 114.043C401.16 112.441 400.844 111.215 400.211 110.363C399.586 109.504 398.703 109.074 397.562 109.074ZM414.484 120.5L414.098 118.672H414.004C413.363 119.477 412.723 120.023 412.082 120.312C411.449 120.594 410.656 120.734 409.703 120.734C408.43 120.734 407.43 120.406 406.703 119.75C405.984 119.094 405.625 118.16 405.625 116.949C405.625 114.355 407.699 112.996 411.848 112.871L414.027 112.801V112.004C414.027 110.996 413.809 110.254 413.371 109.777C412.941 109.293 412.25 109.051 411.297 109.051C410.227 109.051 409.016 109.379 407.664 110.035L407.066 108.547C407.699 108.203 408.391 107.934 409.141 107.738C409.898 107.543 410.656 107.445 411.414 107.445C412.945 107.445 414.078 107.785 414.812 108.465C415.555 109.145 415.926 110.234 415.926 111.734V120.5H414.484ZM410.09 119.129C411.301 119.129 412.25 118.797 412.938 118.133C413.633 117.469 413.98 116.539 413.98 115.344V114.184L412.035 114.266C410.488 114.32 409.371 114.562 408.684 114.992C408.004 115.414 407.664 116.074 407.664 116.973C407.664 117.676 407.875 118.211 408.297 118.578C408.727 118.945 409.324 119.129 410.09 119.129ZM430.457 107.656V108.887L428.078 109.168C428.297 109.441 428.492 109.801 428.664 110.246C428.836 110.684 428.922 111.18 428.922 111.734C428.922 112.992 428.492 113.996 427.633 114.746C426.773 115.496 425.594 115.871 424.094 115.871C423.711 115.871 423.352 115.84 423.016 115.777C422.188 116.215 421.773 116.766 421.773 117.43C421.773 117.781 421.918 118.043 422.207 118.215C422.496 118.379 422.992 118.461 423.695 118.461H425.969C427.359 118.461 428.426 118.754 429.168 119.34C429.918 119.926 430.293 120.777 430.293 121.895C430.293 123.316 429.723 124.398 428.582 125.141C427.441 125.891 425.777 126.266 423.59 126.266C421.91 126.266 420.613 125.953 419.699 125.328C418.793 124.703 418.34 123.82 418.34 122.68C418.34 121.898 418.59 121.223 419.09 120.652C419.59 120.082 420.293 119.695 421.199 119.492C420.871 119.344 420.594 119.113 420.367 118.801C420.148 118.488 420.039 118.125 420.039 117.711C420.039 117.242 420.164 116.832 420.414 116.48C420.664 116.129 421.059 115.789 421.598 115.461C420.934 115.188 420.391 114.723 419.969 114.066C419.555 113.41 419.348 112.66 419.348 111.816C419.348 110.41 419.77 109.328 420.613 108.57C421.457 107.805 422.652 107.422 424.199 107.422C424.871 107.422 425.477 107.5 426.016 107.656H430.457ZM420.215 122.656C420.215 123.352 420.508 123.879 421.094 124.238C421.68 124.598 422.52 124.777 423.613 124.777C425.246 124.777 426.453 124.531 427.234 124.039C428.023 123.555 428.418 122.895 428.418 122.059C428.418 121.363 428.203 120.879 427.773 120.605C427.344 120.34 426.535 120.207 425.348 120.207H423.016C422.133 120.207 421.445 120.418 420.953 120.84C420.461 121.262 420.215 121.867 420.215 122.656ZM421.27 111.77C421.27 112.668 421.523 113.348 422.031 113.809C422.539 114.27 423.246 114.5 424.152 114.5C426.051 114.5 427 113.578 427 111.734C427 109.805 426.039 108.84 424.117 108.84C423.203 108.84 422.5 109.086 422.008 109.578C421.516 110.07 421.27 110.801 421.27 111.77ZM438.52 120.734C436.621 120.734 435.121 120.156 434.02 119C432.926 117.844 432.379 116.238 432.379 114.184C432.379 112.113 432.887 110.469 433.902 109.25C434.926 108.031 436.297 107.422 438.016 107.422C439.625 107.422 440.898 107.953 441.836 109.016C442.773 110.07 443.242 111.465 443.242 113.199V114.43H434.395C434.434 115.938 434.812 117.082 435.531 117.863C436.258 118.645 437.277 119.035 438.59 119.035C439.973 119.035 441.34 118.746 442.691 118.168V119.902C442.004 120.199 441.352 120.41 440.734 120.535C440.125 120.668 439.387 120.734 438.52 120.734ZM437.992 109.051C436.961 109.051 436.137 109.387 435.52 110.059C434.91 110.73 434.551 111.66 434.441 112.848H441.156C441.156 111.621 440.883 110.684 440.336 110.035C439.789 109.379 439.008 109.051 437.992 109.051Z","fill-opacity":"0.5"}}),_vm._v(" "),_c('path',{attrs:{"d":"M153.87 61.2955H179.003V70.5H189.588V61.2955H196.083V52.4233H189.588V18.1364H175.73L153.87 52.5767V61.2955ZM179.208 52.4233H165.017V52.0142L178.799 30.2045H179.208V52.4233ZM223.99 71.6506C237.158 71.6506 245.11 61.6278 245.135 44.3693C245.161 27.2386 237.107 17.4205 223.99 17.4205C210.848 17.4205 202.871 27.2131 202.846 44.3693C202.794 61.5767 210.797 71.625 223.99 71.6506ZM223.99 62.4716C217.982 62.4716 214.096 56.4375 214.121 44.3693C214.147 32.4801 218.007 26.4972 223.99 26.4972C229.948 26.4972 233.834 32.4801 233.834 44.3693C233.86 56.4375 229.973 62.4716 223.99 62.4716ZM252.237 61.2955H277.37V70.5H287.956V61.2955H294.45V52.4233H287.956V18.1364H274.098L252.237 52.5767V61.2955ZM277.575 52.4233H263.385V52.0142L277.166 30.2045H277.575V52.4233Z"}})]),_vm._v(" "),_c('defs',[_c('clipPath',{attrs:{"id":"clip0"}},[_c('rect',{attrs:{"width":"448","height":"241","transform":"translate(0 0.5)"}})])])]),_vm._v(" "),_c('div',{staticClass:"flex _text-nowrap"},[_vm._v("\n    Start from "),_c('z-cta',{staticClass:"linkItem",attrs:{"href":"/","target":"_self"}},[_vm._v("the homepage")])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=template&id=012ffb98&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/ZCta.vue + 4 modules
var ZCta = __webpack_require__(171);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=script&lang=ts&


/* harmony default export */ var errorvue_type_script_lang_ts_ = (vue_runtime_esm["a" /* default */].extend({
  components: {
    ZCta: ZCta["a" /* default */]
  },
  props: {
    activeColor: {
      required: false,
      type: String,
      default: ""
    },
    className: {
      required: false,
      type: String,
      default: "image-404"
    },
    color: {
      required: false,
      type: String,
      default: ""
    },
    desc: {
      required: false,
      type: String,
      default: ""
    },
    focusColor: {
      required: false,
      type: String,
      default: ""
    },
    hoverColor: {
      required: false,
      type: String,
      default: ""
    },
    width: {
      required: false,
      type: String,
      default: "448"
    },
    height: {
      required: false,
      type: String,
      default: ""
    },
    title: {
      required: false,
      type: String,
      default: ""
    }
  },
  head: {
    bodyAttrs: {
      class: "page-404-body inkline -dark"
    }
  },
  computed: {
    cssProps: function cssProps() {
      return {
        "--active-color": this.activeColor || "currentColor",
        "--focus-color": this.focusColor || "currentColor",
        "--hover-color": this.hoverColor || "currentColor"
      };
    }
  }
}));
// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_errorvue_type_script_lang_ts_ = (errorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/layouts/error.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var error = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);