var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function(vue) {
  "use strict";
  function _interopNamespace(e2) {
    if (e2 && e2.__esModule)
      return e2;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e2) {
      Object.keys(e2).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e2, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e2[k];
            }
          });
        }
      });
    }
    n["default"] = e2;
    return Object.freeze(n);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  var _export_sfc = (sfc, props) => {
    for (const [key, val] of props) {
      sfc[key] = val;
    }
    return sfc;
  };
  const _sfc_main$l = vue.defineComponent({
    props: {
      swiperData: {
        type: Array
      },
      swiperHeight: {
        type: String
      }
    }
  });
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("swiper", {
        style: vue.normalizeStyle({ height: _ctx.swiperHeight }),
        autoplay: true,
        interval: 3e3,
        "indicator-dots": "",
        circular: ""
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.swiperData, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
            vue.createElementVNode("image", {
              src: item,
              mode: "widthFix",
              class: "swiper-item"
            }, null, 8, ["src"])
          ]);
        }), 128))
      ], 4)
    ]);
  }
  var Swiper = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-76d65eb3"]]);
  var _imports_0$4 = "/static/images/home/home_icon_ziqu1.png";
  var _imports_1 = "/static/images/home/home_icon_waimai1.png";
  var _imports_2 = "/static/images/home/home_icon_baihuo1.png";
  var _imports_3 = "/static/images/home/home_icon_qiye1.png";
  var _imports_4 = "/static/images/home/home_icon_erweima.png";
  const _sfc_main$k = vue.defineComponent({
    setup() {
      return {};
    }
  });
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "home-content" }, [
      vue.createElementVNode("view", { class: "content-box" }, [
        vue.createCommentVNode(" \u5185\u5BB9\u9876\u90E8\u533A\u57DF "),
        vue.createElementVNode("view", { class: "content-top" }, [
          vue.createElementVNode("view", { class: "content-top-left" }, [
            vue.createElementVNode("navigator", {
              "open-type": "switchTab",
              url: "/pages/index/index"
            }, [
              vue.createElementVNode("image", {
                src: _imports_0$4,
                mode: "widthFix"
              }),
              vue.createElementVNode("view", { class: "mode" }, "\u95E8\u5E97\u81EA\u53D6"),
              vue.createElementVNode("view", { class: "describe" }, "\u4E0B\u5355\u514D\u6392\u961F")
            ])
          ]),
          vue.createElementVNode("view", { class: "content-top-right" }, [
            vue.createElementVNode("navigator", {
              "open-type": "navigate",
              url: "/pages/other/address/address"
            }, [
              vue.createElementVNode("image", {
                src: _imports_1,
                mode: "widthFix"
              }),
              vue.createElementVNode("view", { class: "mode" }, "\u5916\u5356"),
              vue.createElementVNode("view", { class: "describe" }, "\u65E0\u9700\u63A5\u89E6 \u9001\u559C\u5230\u5BB6")
            ])
          ])
        ]),
        vue.createCommentVNode(" \u5185\u5BB9\u4E2D\u95F4\u533A\u57DF "),
        vue.createElementVNode("view", { class: "content-center" }, [
          vue.createElementVNode("view", { class: "department" }, [
            vue.createElementVNode("navigator", {
              "open-type": "switchTab",
              url: "/pages/department/department"
            }, [
              vue.createElementVNode("image", {
                src: _imports_2,
                mode: "widthFix"
              }),
              vue.createElementVNode("text", { class: "title" }, "\u559C\u8336\u767E\u8D27"),
              vue.createElementVNode("view", { class: "describe" }, "\u7075\u611F\u5546\u54C1 \u7ACB\u5373\u9009\u8D2D")
            ])
          ]),
          vue.createElementVNode("view", { class: "enterprise" }, [
            vue.createElementVNode("navigator", {
              "open-type": "navigate",
              url: "/pages/other/enterprise-reunion/enterprise-reunion"
            }, [
              vue.createElementVNode("image", {
                src: _imports_3,
                mode: "widthFix"
              }),
              vue.createElementVNode("text", { class: "title" }, "\u4F01\u4E1A\u56E2\u9910"),
              vue.createElementVNode("view", { class: "describe" }, "50\u4EFD\u8D77\u9001")
            ])
          ])
        ]),
        vue.createCommentVNode(" \u5185\u5BB9\u5E95\u90E8\u533A\u57DF "),
        vue.createElementVNode("view", { class: "content-bottom" }, [
          vue.createElementVNode("view", { class: "integral" }, [
            vue.createElementVNode("navigator", {
              "open-type": "navigate",
              url: "/pages/other/integral-mall/integral-mall"
            }, [
              vue.createElementVNode("view", { class: "title" }, [
                vue.createTextVNode(" \u6211\u7684\u79EF\u5206 "),
                vue.createElementVNode("text", { class: "number" }, "63")
              ]),
              vue.createElementVNode("view", { class: "describe" }, "\u53EF\u5151\u6362\u559C\u8336\u5377\u548C\u4E30\u5BCC\u7075\u611F\u5468\u8FB9")
            ])
          ]),
          vue.createElementVNode("view", { class: "member" }, [
            vue.createElementVNode("image", {
              src: _imports_4,
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "describe" }, "\u4F1A\u5458\u7801")
          ])
        ])
      ])
    ]);
  }
  var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-048a8d0c"]]);
  function getScreen() {
    let width, height;
    if (window.innerWidth) {
      width = window.innerWidth;
      height = window.innerHeight;
    } else if (document.compatMode === "BackCompat") {
      width = document.body.clientWidth;
      height = document.body.clientHeight;
    } else {
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
    }
    return {
      width,
      height
    };
  }
  const _sfc_main$j = vue.defineComponent({
    components: {
      Swiper,
      HomeContent
    },
    setup() {
      const swiperHeight = vue.ref("600rpx");
      const homeSwiper = vue.reactive([
        "https://go.cdn.heytea.com/storage/ad/2020/05/21/bfd57914d80d4671b19f5d0ccc176cd5.jpg",
        "https://go.cdn.heytea.com/storage/ad/2020/05/24/49f9b50738dd47878cf1ab54c2eee2e0.jpg",
        "https://go.cdn.heytea.com/storage/ad/2020/05/01/e1c6915022c849fd9492377021aef454.jpg",
        "https://go.cdn.heytea.com/storage/ad/2020/04/27/db60b797c1cd4afabe9666e7df958ffd.jpg",
        "https://go.cdn.heytea.com/storage/ad/2020/05/21/4ba53dda599345bdaf28a08420dd1b6f.jpg"
      ]);
      return {
        homeSwiper,
        swiperHeight
      };
    }
  });
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Swiper = vue.resolveComponent("Swiper");
    const _component_HomeContent = vue.resolveComponent("HomeContent");
    return vue.openBlock(), vue.createElementBlock("view", { id: "home" }, [
      vue.createVNode(_component_Swiper, {
        swiperData: _ctx.homeSwiper,
        swiperHeight: _ctx.swiperHeight
      }, null, 8, ["swiperData", "swiperHeight"]),
      vue.createVNode(_component_HomeContent)
    ]);
  }
  var PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-92bb8f34"]]);
  var notices = [
    {
      "id": 10,
      "content": "\u591A\u8089\u8F66\u5398\u56DE\u5F52\uFF0C\u7CBE\u9009\u5F53\u5B63\u5C71\u4E1C\u6A31\u6843\uFF0C\u9897\u9897\u624B\u5DE5\u53BB\u6838\uFF0C\u5165\u8336\u6E05\u751C\u6D88\u6691\uFF0C\u5FEB\u6765\u4E0B\u5355\u5C1D\u9C9C\u5427~",
      "image_id": 114210,
      "image": "https://go.cdn.heytea.com/2020/02/26/tmp/f5d557b627b640838d0c324bd96eabfb.jpg"
    },
    {
      "id": 7,
      "content": "\u592A\u5983\u7126\u7CD6\u7206\u7C73\u82B1\u5168\u65B0\u4E0A\u5E02\uFF0C\u7126\u9999\u5341\u8DB3\uFF0C\u7F8E\u5473\u6613\u7206\uFF0C\u5FEB\u6765\u300C\u559C\u8336\u98DF\u9A8C\u5BA4\u300D\u4E0B\u5355\u5C1D\u9C9C\u5427~",
      "image_id": 104726,
      "image": "https://go.cdn.heytea.com/2020/01/09/tmp/3f393edea5094c1d8f8b524610caa531.jpg"
    }
  ];
  var _imports_0$3 = "/static/images/common/star_normal.png";
  const _sfc_main$i = vue.defineComponent({
    setup() {
      const swiperList = notices;
      return {
        swiperList
      };
    }
  });
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index-top" }, [
      vue.createCommentVNode(" \u641C\u7D22\u533A\u57DF "),
      vue.createElementVNode("view", { class: "search" }, [
        vue.createElementVNode("view", { class: "search-input" }, [
          vue.createElementVNode("icon", {
            type: "search",
            size: "15",
            class: "search-icon"
          }),
          vue.createElementVNode("text", { class: "fz14" }, "\u641C\u7D22")
        ])
      ]),
      vue.createCommentVNode(" \u5B9A\u4F4D "),
      vue.createElementVNode("view", { class: "positioning" }, [
        vue.createElementVNode("view", { class: "positioning-left" }, [
          vue.createElementVNode("view", { class: "location" }, [
            vue.createElementVNode("image", {
              src: _imports_0$3,
              style: { "width": "30rpx", "height": "30rpx" },
              mode: "widthFix"
            }),
            vue.createElementVNode("text", { class: "title" }, "\u4E2D\u5FC3\u57CE\u5E97"),
            vue.createElementVNode("image", {
              src: "/static/images/common/black_arrow_right.png",
              style: { "width": "40rpx", "height": "40rpx" },
              mode: "widthFix"
            })
          ]),
          vue.createElementVNode("view", { class: "describe" }, "\u8DDD\u79BB\u60A8520m")
        ]),
        vue.createElementVNode("view", { class: "positioning-right" }, [
          vue.createElementVNode("text", { class: "invite" }, "\u81EA\u53D6"),
          vue.createElementVNode("text", { class: "take-out" }, "\u5916\u5356")
        ])
      ]),
      vue.createCommentVNode(" swiper\u533A\u57DF "),
      vue.createElementVNode("view", { class: "swiper-box" }, [
        vue.createElementVNode("swiper", {
          class: "swiper",
          autoplay: "",
          vertical: "",
          interval: 3e3,
          duration: 1e3,
          circular: ""
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.swiperList, (item) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              key: item.id
            }, [
              vue.createElementVNode("view", { class: "swiper-item" }, [
                vue.createElementVNode("image", {
                  src: item.image
                }, null, 8, ["src"]),
                vue.createElementVNode("text", { class: "content" }, vue.toDisplayString(item.content), 1)
              ])
            ]);
          }), 128))
        ])
      ])
    ]);
  }
  var indexTop = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-73b1e644"]]);
  const asideData = vue.reactive([
    { name: "\u559C\u8336\u5B9E\u9A8C\u5BA4", img: "https://go.cdn.heytea.com/storage/category/2020/04/23/f77f2e333a34410384c21da48e138599.jpg" },
    { name: "\u5F53\u5B63\u9650\u5B9A", img: "https://go.cdn.heytea.com/storage/category/2020/05/02/c9d862a735af48d280ab8b21a2315514.jpg" },
    { name: "\u4EBA\u6C14\u5FC5\u559D\u699C", img: "https://go.cdn.heytea.com/storage/category/2020/04/23/3b52e3d18fae4290b0a668a776b21645.jpg" },
    { name: "\u559C\u8336\u5236\u51B0", img: "https://go.cdn.heytea.com/storage/category/2020/04/21/ef7b2a24507a4e20b50355eccc3261db.jpg" },
    { name: "\u679C\u8336\u5236\u51B0", img: "https://go.cdn.heytea.com/storage/category/2020/04/23/ac7a2ff85b6944fe83df06a79cc19834.jpg" },
    { name: "\u829D\u829D\u8317\u8336", img: "https://go.cdn.heytea.com/storage/category/2020/04/21/3de570175dbb4c74a6291e1b6df4eb6a.jpg" },
    { name: "\u559C\u8336\u5496\u5561", img: "https://go.cdn.heytea.com/storage/category/2020/04/23/50609654ded746f28ea60485a7e715b5.jpg" },
    { name: "\u70ED\u996E\u63A8\u8350", img: "https://go.cdn.heytea.com/storage/category/2020/04/23/72b2d1e753464b5a837618e24bc857c3.jpg" },
    { name: "\u7EAF\u8336", img: "https://go.cdn.heytea.com/storage/category/2020/04/21/43c745f3ead64208830401107c44eef2.jpg" },
    { name: "\u52A0\u6599", img: "https://go.cdn.heytea.com/storage/category/2020/04/21/19047118303443b09ba73f82c54e4f03.jpg" },
    { name: "\u5171\u540C\u6297\u75AB", img: "https://go.cdn.heytea.com/storage/category/2020/04/21/529845ef52584ca1adca3af88ebf1c66.jpg" },
    { name: "\u7075\u611F\u63D0\u793A", img: "https://go.cdn.heytea.com/storage/category/2020/04/21/6d5e68f5b2bd4fa2bb50f94e6ac0a512.jpg" },
    { name: "\u6CE2\u6CE2\u5BB6\u65CF", img: "https://go.cdn.heytea.com/storage/category/2020/04/21/0dd0e6e55c4b4f119fadda81b0a7b3f8.jpg" }
  ]);
  const goodsData = vue.reactive([
    {
      "id": 20,
      "name": "\u559C\u8336\u98DF\u9A8C\u5BA4",
      "sort": 1,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/23/f77f2e333a34410384c21da48e138599.jpg",
      "products": [
        {
          "id": 932,
          "name": "\u829D\u829D\u8393\u8393 \xAE",
          "no": "2002285591289050",
          "description": "\u51B7670ml \u70ED500ml \u4EBA\u6C14Top3 \u9009\u7528\u5B9A\u88FD\u58EB\u591A\u5564\u68A8\u914D\u642D\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\u65B0\u9C9C\u73B0\u6253\uFF0C\u8393\u9999\u6EE1\u6EA2\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 67,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 150527,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/fbcdfbd39c6548b185c1d0eef790808d.jpg"
            },
            {
              "id": 117035,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/66a64d27c2504838851ce69f2a901326.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/e75452c0d57443be87fdbe9b1dd61da5.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "0\u7CD6\u4F4E\u5361\u751C\u83CA\u7CD6",
              "values": [
                {
                  "id": 1289,
                  "name": "0\u7CD6\u4F4E\u5361\u7CD6\uFF08\u4E0D\u542B\u7CD6\u5206\uFF09",
                  "price": "1",
                  "is_selected": false,
                  "is_exclusive": true
                }
              ]
            },
            {
              "group_name": "\u52A0\u6599",
              "values": [
                {
                  "id": 1323,
                  "name": "\u829D\u58EB\u5206\u88C5",
                  "price": "1",
                  "is_selected": false,
                  "is_exclusive": true
                }
              ]
            },
            {
              "group_name": "\u7EFF\u8272\u559C\u8336",
              "values": [
                {
                  "id": 409,
                  "name": "\u5E38\u89C4\u5438\u7BA1",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 408,
                  "name": "\u7EB8\u5438\u7BA1-\u53E3\u611F\u7565\u6709\u5F71\u54CD",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 410,
                  "name": "\u4E0D\u4F7F\u7528\u5438\u7BA1",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u51B0\u91CF",
              "values": [
                {
                  "id": 558,
                  "name": "\u6B63\u5E38(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 29,
                  "name": "\u5C11\u51B0",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 33,
                  "name": "\u5C11\u5C11\u51B0",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u751C\u5EA6",
              "values": [
                {
                  "id": 67,
                  "name": "\u6807\u51C6(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 93,
                  "name": "\u5C11\u751C",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 96,
                  "name": "\u5C11\u5C11\u751C",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 51,
                  "name": "\u4E0D\u53E6\u5916\u52A0\u7CD6",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u8336\u5E95",
              "values": [
                {
                  "id": 205,
                  "name": "\u7EFF\u598D(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 413,
                  "name": "\u53BB\u8336\u5E95",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u53E3\u5473",
              "values": [
                {
                  "id": 186,
                  "name": "\u829D\u58EB(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 145,
                  "name": "\u53BB\u829D\u58EB",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 1203,
                  "name": "\u6362\u829D\u829D\u96EA\u7CD5(\u9876\u90E8)",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "32",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 30.19
        },
        {
          "id": 1061,
          "name": "\u672A\u6765\u8089\u829D\u58EB\u5821",
          "no": "2005095380168625",
          "description": "\u9009\u7528\u661F\u671F\u96F6\u690D\u7269\u57FA\u672A\u6765\u8089\u6253\u9020\uFF0C\u6BCF100\u514B\u672A\u6765\u8089\u542B17.1\u514B\u86CB\u767D\u8D28\u4E0E5.5\u514B\u81B3\u98DF\u7EA4\u7EF4\uFF0C\u70ED\u91CF\u4EC5\u4E3A\u771F\u725B\u8089\u768451%\uFF0C\u53E0\u52A0\u5E72\u916A\u7247\u4E0E\u9752\u8282\u74DC\uFF0C\u7A81\u7834\u98DF\u754C\uFF0C\u54C1\u5C1D\u672A\u6765\u3002",
          "label": "",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 153382,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/24/5ba38e1966334ff9af2ee27e1a803497.jpg"
            },
            {
              "id": 147238,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/11/88d10a251f5841a185101aaccfa7952e.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 16,
              "name": "\u542B\u5C0F\u9EA6\u3001\u5927\u8C46",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 22,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "25",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 22.12
        },
        {
          "id": 1036,
          "name": "\u6DF7\u575A\u679C",
          "no": "2004238677566283",
          "description": "\u559C\u8336\u9996\u6B3E\u6DF7\u5408\u575A\u679C\uFF0C1\u76D2\u5185\u542B3\u79CD\u53E3\u5473\uFF1A\u65E5\u5F0F\u82A5\u672B\u3001\u9165\u8106\u6D77\u82D4\u3001\u9EBB\u8FA3\u706B\u9505\u3002\u7CBE\u9009\u8D8A\u5357\u5927\u9897\u8170\u679C\u3001\u7F8E\u56FD\u52A0\u5DDE\u5DF4\u65E6\u6728\u4EC1\u4E0E\u571F\u8033\u5176\u699B\u5B50\u4EC1\uFF0C\u72EC\u7279\u55B7\u6DCB\u6280\u672F\uFF0C\u4FDD\u8BC1\u9897\u9897\u591F\u5473\u3002\u81EA\u7136\u6162\u7119\u70D8\u70E4\uFF0C\u96F6\u4EBA\u5DE5\u6DFB\u52A0\u8272\u7D20\u4E0E\u9632\u8150\u5242\u3002",
          "label": "",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 141992,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/01/7bf2447422bf4acb95b1a82366eeba34.jpg"
            },
            {
              "id": 139423,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/26/c2bf42835baf453d8987afa54e796f0e.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2349,
              "name": "\u6DF7\u575A\u679C",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 1
            }
          ],
          "labels": [
            {
              "id": 80,
              "name": "\u542B\u575A\u679C\u3001\u5927\u8C46\u53CA\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 81,
              "name": "\u542B\u5C0F\u9EA6\u5236\u54C1\u3001\u867E\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "30",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 28.3
        },
        {
          "id": 1033,
          "name": "\u5939\u5FC3\u5C0F\u65B9(\u54B8\u86CB\u9EC4\u5473)",
          "no": "2004204939030796",
          "description": "10\u7247/\u76D2\uFF0C\u6BCF\u7247\u5747\u4E3A\u72EC\u7ACB\u5C0F\u5305\u88C5\u30022.0\u65B0\u5347\u7EA7\uFF0C\u751C\u5EA6\u66F4\u4F4E\u3002\u54B8\u86CB\u9EC4\u997C\u76AE\u642D\u914D\u6D53\u90C1\u539F\u5473\u5939\u5FC3\uFF0C\u4E00\u53E3\u5403\u4E0B\u5976\u9999\u548C\u54B8\u86CB\u9EC4\u76F8\u4E92\u4EA4\u7EC7\uFF0C\u751C\u800C\u4E0D\u817B\u3002\u7CBE\u9009\u7F8E\u56FD\u8FDB\u53E3\u5DF4\u65E6\u6728\u7C89\uFF0C\u5065\u5EB7\u98DF\u6750\uFF0C\u5403\u5F97\u653E\u5FC3\u3002\u8D2D\u4E702\u76D2/3\u76D2\u5939\u5FC3\u5C0F\u65B9\uFF0C\u9ED8\u8BA4\u642D\u914D\u4E8C\u5408\u4E00/\u4E09\u5408\u4E00\u7684\u7EC4\u5408\u88C5\u8170\u5C01\u3002",
          "label": "",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 145005,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/06/b796c7a8edd44e7e968745cb63eae3a2.jpg"
            },
            {
              "id": 137571,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/21/882651cb064e4326b4b73c57cadbf8b8.jpg"
            },
            {
              "id": 137572,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/21/401a0054f6d040709b316d2c23c7b3c2.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2336,
              "name": "\u5939\u5FC3\u5C0F\u65B9(\u54B8\u86CB\u9EC4\u5473)",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 1
            }
          ],
          "labels": [
            {
              "id": 46,
              "name": "\u542B\u5C0F\u9EA6\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 92,
              "name": "\u4E73\u53CA\u575A\u679C\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "45",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 42.45
        },
        {
          "id": 1031,
          "name": "\u5939\u5FC3\u5C0F\u65B9(\u829D\u58EB\u5473)",
          "no": "2004208719981465",
          "description": "10\u7247/\u76D2\uFF0C\u6BCF\u7247\u5747\u4E3A\u72EC\u7ACB\u5C0F\u5305\u88C5\u3002\u5168\u65B0\u53E3\u5473\u767B\u573A\uFF0C\u559C\u8336\u7ECF\u5178\u829D\u58EB\u5316\u8EAB\u6D53\u90C1\u829D\u9999\u5939\u5FC3\uFF0C\u6BCF\u4E00\u53E3\u90FD\u662F\u6D53\u6D53\u829D\u58EB\u5473\u3002\u7CBE\u9009\u4E39\u9EA6\u6DF1\u52A0\u5DE5\u829D\u58EB\u4E0E\u7F8E\u56FD\u8FDB\u53E3\u5DF4\u65E6\u6728\u7C89\uFF0C\u5065\u5EB7\u98DF\u6750\uFF0C\u5403\u5F97\u653E\u5FC3\u3002\u8D2D\u4E702\u76D2/3\u76D2\u5939\u5FC3\u5C0F\u65B9\uFF0C\u9ED8\u8BA4\u642D\u914D\u4E8C\u5408\u4E00/\u4E09\u5408\u4E00\u7684\u7EC4\u5408\u88C5\u8170\u5C01\u3002",
          "label": "",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 145004,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/06/9d1f23859ef0495aade6cbe0d46c492b.jpg"
            },
            {
              "id": 137566,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/21/43b09ca3b38a4c08a0b6ad142d1ad2ed.jpg"
            },
            {
              "id": 137567,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/21/8c4264b660714a70bda5f13e92c04377.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2334,
              "name": "\u5939\u5FC3\u5C0F\u65B9(\u829D\u58EB\u5473)",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 1
            }
          ],
          "labels": [
            {
              "id": 46,
              "name": "\u542B\u5C0F\u9EA6\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 92,
              "name": "\u4E73\u53CA\u575A\u679C\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "45",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 42.45
        },
        {
          "id": 1032,
          "name": "\u5939\u5FC3\u5C0F\u65B9(\u91D1\u51E4\u5473)",
          "no": "2004202778423181",
          "description": "10\u7247/\u76D2\uFF0C\u6BCF\u7247\u5747\u4E3A\u72EC\u7ACB\u5C0F\u5305\u88C5\u30022.0\u65B0\u5347\u7EA7\uFF0C\u751C\u5EA6\u66F4\u4F4E\u3002\u91D1\u51E4\u8336\u53F6\u539F\u53F6\u7814\u78E8\u6210\u7119\u9999\u8336\u7C89\uFF0C\u878D\u5165\u997C\u76AE\u548C\u5939\u5FC3\uFF0C\u70AD\u7119\u4E4C\u9F99\u53E3\u611F\u6E05\u65B0\u3002\u7CBE\u9009\u7F8E\u56FD\u8FDB\u53E3\u5DF4\u65E6\u6728\u7C89\uFF0C\u5065\u5EB7\u98DF\u6750\uFF0C\u5403\u5F97\u653E\u5FC3\u3002\u8D2D\u4E702\u76D2/3\u76D2\u5939\u5FC3\u5C0F\u65B9\uFF0C\u9ED8\u8BA4\u642D\u914D\u4E8C\u5408\u4E00/\u4E09\u5408\u4E00\u7684\u7EC4\u5408\u88C5\u8170\u5C01\u3002",
          "label": "",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 145006,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/06/cf932ed0413a42b9a4a59aac686db19b.jpg"
            },
            {
              "id": 137569,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/21/9c35d5aa21d44791bbd2b7bad308f256.jpg"
            },
            {
              "id": 137570,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/21/6a6b02329cd64ddfa1c2ab87dfb0d209.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2335,
              "name": "\u5939\u5FC3\u5C0F\u65B9(\u91D1\u51E4\u5473)",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 1
            }
          ],
          "labels": [
            {
              "id": 46,
              "name": "\u542B\u5C0F\u9EA6\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 92,
              "name": "\u4E73\u53CA\u575A\u679C\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "45",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 42.45
        },
        {
          "id": 985,
          "name": "\u9ED1\u7CD6\u6CE2\u6CE2\u5E0C\u814A\u9178\u5976",
          "no": "2003226159266660",
          "description": "\u9ED1\u7CD6\u8106\u6CE2\u6CE2\u4E0E\u5E0C\u814A\u9178\u5976\u7075\u611F\u78B0\u649E\uFF0C\u9178\u5976\u90E8\u5206\u65E0\u7CD6\u3002\u9009\u7528100%\u751F\u725B\u4E73\u53D1\u9175\uFF0C\u96F6\u6DFB\u52A0\u8272\u7D20\u3001\u660E\u80F6\uFF0C\u6BCF100\u514B\u542B7.7\u514B\u4F18\u8D28\u86CB\u767D\u8D28\uFF0C\u4E14\u4EC5\u542B1.4\u514B\u8102\u80AA\u3002\u5EFA\u8BAE\u5C06\u5B9A\u5236\u8349\u8393\u71D5\u9EA6\u7247\u52A0\u5165\u9178\u5976\u540E\u5927\u529B\u6405\u5300\u6574\u676F\u4E00\u8D77\u98DF\u7528\u3002\u9178\u5976\u4FDD\u8D28\u671F\u8F83\u77ED\uFF0C\u8BF7\u5C3D\u5FEB\u98DF\u7528\u3002",
          "label": "",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 7,
          "images": [
            {
              "id": 126120,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/23/ecd4f6fcfdb8406ab297607c517b9790.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 93,
              "name": "\u542B\u4E73\u3001\u71D5\u9EA6\u3001\u5357\u74DC\u5B50\u4EC1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u7EFF\u8272\u559C\u8336",
              "values": [
                {
                  "id": 1334,
                  "name": "\u9700\u8981\u9910\u5177",
                  "price": "0",
                  "is_selected": 1
                },
                {
                  "id": 1335,
                  "name": "\u4E0D\u9700\u8981\u4E00\u6B21\u6027\u9910\u5177",
                  "price": "0",
                  "is_selected": 0
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "\u9178\u5976",
          "is_enable": 1,
          "price": "19",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 16.81
        },
        {
          "id": 986,
          "name": "\u84DD\u8393\u5E0C\u814A\u9178\u5976",
          "no": "2003234480984193",
          "description": "\u52A0\u62FF\u5927\u91CE\u751F\u84DD\u8393\u878D\u5165\u5E0C\u814A\u9178\u5976\uFF0C\u9178\u5976\u90E8\u5206\u65E0\u7CD6\u3002\u9009\u7528100%\u751F\u725B\u4E73\u53D1\u9175\uFF0C\u96F6\u6DFB\u52A0\u8272\u7D20\u548C\u660E\u80F6\uFF0C\u6BCF100\u514B\u542B7.7\u514B\u4F18\u8D28\u86CB\u767D\u8D28\uFF0C\u4E14\u4EC5\u542B1.4\u514B\u8102\u80AA\u3002\u5EFA\u8BAE\u5C06\u5B9A\u5236\u8349\u8393\u71D5\u9EA6\u7247\u52A0\u5165\u9178\u5976\u540E\u5927\u529B\u6405\u5300\u6574\u676F\u4E00\u8D77\u98DF\u7528\u3002\u9178\u5976\u4FDD\u8D28\u671F\u8F83\u77ED\uFF0C\u8BF7\u5C3D\u5FEB\u98DF\u7528\u3002",
          "label": "",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 8,
          "images": [
            {
              "id": 126119,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/23/ab0773906b3646278a84fe3dfaa759e9.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 93,
              "name": "\u542B\u4E73\u3001\u71D5\u9EA6\u3001\u5357\u74DC\u5B50\u4EC1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u7EFF\u8272\u559C\u8336",
              "values": [
                {
                  "id": 1334,
                  "name": "\u9700\u8981\u9910\u5177",
                  "price": "0",
                  "is_selected": 1
                },
                {
                  "id": 1335,
                  "name": "\u4E0D\u9700\u8981\u4E00\u6B21\u6027\u9910\u5177",
                  "price": "0",
                  "is_selected": 0
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "\u9178\u5976",
          "is_enable": 1,
          "price": "19",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 16.81
        },
        {
          "id": 967,
          "name": "\u828B\u6CE5\u54B8\u86CB\u9EC4\u7C73\u9762\u5305",
          "no": "2003087530550002",
          "description": "\u559C\u8336\u9996\u6B3E\u201C\u5927\u7C73\u9762\u5305\u201D\uFF0C\u51CF\u6CB9\u51CF\u7CD6\u4F4E\u70ED\u91CF\u3002\u4EE5\u5927\u7C73\u7C89\u4EE3\u66FF\u90E8\u5206\u5C0F\u9EA6\u7C89\u5236\u4F5C\u4E3A\u677E\u8F6F\u7C73\u9762\u5305\uFF0C\u5185\u9985\u4E2D\u52A0\u5165\u54B8\u86CB\u9EC4\u548C\u828B\u6CE5\uFF0C\u7F8E\u5473\u4E0E\u9971\u8179\u517C\u5907\u3002",
          "label": "",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 9,
          "images": [
            {
              "id": 119991,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/08/df694d96fb574658b11cde291aee699b.jpg"
            },
            {
              "id": 121237,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/50d442e74263480580861b2ba99db4b6.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 46,
              "name": "\u542B\u5C0F\u9EA6\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 95,
              "name": "\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u72B6\u6001",
              "values": [
                {
                  "id": 1340,
                  "name": "\u52A0\u70ED(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 1341,
                  "name": "\u5E38\u6E29",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "13",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 11.5
        },
        {
          "id": 966,
          "name": "\u7D2B\u7C73\u7D2B\u85AF\u7C73\u9762\u5305",
          "no": "2003089320320200",
          "description": "\u559C\u8336\u9996\u6B3E\u201C\u5927\u7C73\u9762\u5305\u201D\uFF0C\u51CF\u6CB9\u51CF\u7CD6\u4F4E\u70ED\u91CF\u3002\u4EE5\u5927\u7C73\u7C89\u4EE3\u66FF\u90E8\u5206\u5C0F\u9EA6\u7C89\u5236\u4F5C\u4E3A\u677E\u8F6F\u7C73\u9762\u5305\uFF0C\u5185\u9985\u4E2D\u52A0\u5165\u7D2B\u7C73\u7D2B\u85AF\u4E24\u79CD\u6742\u7CAE\uFF0C\u8425\u517B\u66F4\u5747\u8861\u3002",
          "label": "",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 10,
          "images": [
            {
              "id": 119992,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/08/08e8693f93db4152a16365469509c346.jpg"
            },
            {
              "id": 121238,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/d0674101531d4140b530fbb23bb0e458.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 99,
              "name": "\u542B\u5C0F\u9EA6\u3001\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u72B6\u6001",
              "values": [
                {
                  "id": 1340,
                  "name": "\u52A0\u70ED(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 1341,
                  "name": "\u5E38\u6E29",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "13",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 11.5
        },
        {
          "id": 188,
          "name": "\u828B\u6CE5\u7CEF\u7C73\u7CCD",
          "no": "1905258507239912",
          "description": "\u4E0B\u5355\u540E\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u76F4\u63A5\u51FA\u793A\u7ED9\u5E97\u5458\u9886\u53D6\u3002\u7CEF\u7C73\u7CCD\u5916\u76AEQ\u5F39\u8F6F\u97E7\uFF0C\u7EF5\u67D4\u7684\u828B\u6CE5\u5185\u9985\u4E2D\u5E26\u7740\u7EC6\u5BC6\u9897\u7C92\u611F\u3002",
          "label": "\u7CEF\u7C73\u7CCD",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 14,
          "images": [
            {
              "id": 2958,
              "url": "https://go.cdn.heytea.com/storage/products/2018/12/07/D26Q9kO7a2ctt3ApN39vVuZNMa7OhjX6afuAScUg.jpg"
            },
            {
              "id": 121296,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/672cdb1e78b64cba9c7bd26192f7069c.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 818,
              "name": "\u828B\u6CE5\u7CEF\u7C73\u7CCD",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [
            {
              "id": 100,
              "name": "\u542B\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "9",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 7.96
        },
        {
          "id": 522,
          "name": "\u5E03\u857E\u7CEF\u7C73\u7CCD",
          "no": "1908077847471771",
          "description": "\u4E0B\u5355\u540E\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u76F4\u63A5\u51FA\u793A\u7ED9\u5E97\u5458\u9886\u53D6\u3002Q\u5F39\u51B0\u723D\u7684\u7CEF\u7C73\u7CCD\u88F9\u5165\u53E3\u5373\u5316\u7684\u6CD5\u5F0F\u5E03\u857E\uFF0C\u6EE1\u53E3\u7559\u9999\u3002",
          "label": "\u7CEF\u7C73\u7CCD",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 15,
          "images": [
            {
              "id": 65894,
              "url": "https://go.cdn.heytea.com/product/2019/08/08/tmp/abfbe602452f4b9c8143c732b4b99f78.jpg"
            },
            {
              "id": 121292,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/3105afea13424d76b54cfdd01332aec3.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1391,
              "name": "\u5E03\u857E\u7CEF\u7C73\u7CCD",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [
            {
              "id": 90,
              "name": "\u542B\u86CB\u3001\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "9",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 7.96
        },
        {
          "id": 444,
          "name": "\u8292\u679C\u7CEF\u7C73\u7CCD",
          "no": "1906114107951144",
          "description": "\u4E0B\u5355\u540E\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u76F4\u63A5\u51FA\u793A\u7ED9\u5E97\u5458\u9886\u53D6\u3002\u7CEF\u9999\u5916\u76AE\u88F9\u5165\u5927\u5757\u8292\u679C\u679C\u8089\uFF0C\u771F\u6750\u5B9E\u6599\uFF0C\u8292\u9999\u56DB\u6EA2\u3002",
          "label": "\u7CEF\u7C73\u7CCD",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 16,
          "images": [
            {
              "id": 51963,
              "url": "https://go.cdn.heytea.com/product/2019/06/11/tmp/534fc9ec25414764b3aa479b44549a1c.jpg"
            },
            {
              "id": 121295,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/182cb5f3f04d41b3ac32146dbf38e1a9.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1246,
              "name": "\u8292\u679C\u7CEF\u7C73\u7CCD",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "12",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 10.62
        },
        {
          "id": 187,
          "name": "\u69B4\u83B2\u7CEF\u7C73\u7CCD",
          "no": "1905254929085716",
          "description": "\u4E0B\u5355\u540E\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u76F4\u63A5\u51FA\u793A\u7ED9\u5E97\u5458\u9886\u53D6\u3002\u7CEF\u7C73\u7CCD\u5916\u76AEQ\u5F39\u8F6F\u97E7\uFF0C\u69B4\u83B2\u84C9\u5185\u9985\u987A\u6ED1\uFF0C\u6D53\u90C1\u4E2D\u5E26\u6709\u6DE1\u6DE1\u5976\u9999\u3002",
          "label": "\u7CEF\u7C73\u7CCD",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 17,
          "images": [
            {
              "id": 88395,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/12/339aab7f76e24296b1e716fab785c5bb.jpg"
            },
            {
              "id": 121293,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/7579079c0b0a4d7d8b464c3321e8f767.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 817,
              "name": "\u69B4\u83B2\u7CEF\u7C73\u7CCD",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [
            {
              "id": 100,
              "name": "\u542B\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "18",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 15.93
        },
        {
          "id": 736,
          "name": "\u65E5\u5F0F\u6D77\u76D0\u725B\u89D2",
          "no": "1911120202609824",
          "description": "\u52A0\u5165\u9EC4\u6CB9\u70D8\u7119\u7684\u725B\u89D2\u5305\u66F4\u52A0\u9999\u9165\uFF0C\u8868\u9762\u6492\u4E0A\u4E9B\u8BB8\u6D77\u76D0\u63D0\u9999\u63D0\u5473\u3002",
          "label": "\u725B\u89D2",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 18,
          "images": [
            {
              "id": 88571,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/13/f26206a42b2b48c38bef58c795d30e3a.jpg"
            },
            {
              "id": 121234,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/f09ec6f23c3543619731b1c37c9e790c.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 99,
              "name": "\u542B\u5C0F\u9EA6\u3001\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u72B6\u6001",
              "values": [
                {
                  "id": 1340,
                  "name": "\u52A0\u70ED(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 1341,
                  "name": "\u5E38\u6E29",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "9",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 7.96
        },
        {
          "id": 161,
          "name": "\u6D41\u6C99\u725B\u89D2",
          "no": "1812135249995598",
          "description": "\u4E0B\u5355\u540E\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u76F4\u63A5\u51FA\u793A\u7ED9\u5E97\u5458\u9886\u53D6\u3002\u5728\u9165\u8106\u7684\u725B\u89D2\u4E2D\u6CE8\u5165\u54B8\u86CB\u9EC4\u6D41\u6C99\uFF0C\u9EC4\u6CB9\u751C\u9999\u4E2D\u5E26\u6709\u7C97\u9897\u7C92\u7684\u5FAE\u54B8\uFF0C\u5C42\u6B21\u4E30\u5BCC\uFF0C\u6EE1\u53E3\u7559\u9999\u3002",
          "label": "\u725B\u89D2",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 19,
          "images": [
            {
              "id": 88364,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/12/5ad4996d0fdd4f3a85a25b8fe95a4db8.jpg"
            },
            {
              "id": 121233,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/78ad5460e80d4587a8f07abc4baf76e9.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 87,
              "name": "\u542B\u9EA6\u5236\u54C1\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 95,
              "name": "\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u72B6\u6001",
              "values": [
                {
                  "id": 1340,
                  "name": "\u52A0\u70ED(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 1341,
                  "name": "\u5E38\u6E29",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "\u6E29\u5EA6",
          "is_enable": 1,
          "price": "10",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8.85
        },
        {
          "id": 735,
          "name": "\u828B\u6CE5\u725B\u89D2",
          "no": "1911125473384653",
          "description": "\u8F6F\u7EF5\u7EF5\u7684\u828B\u6CE5\u586B\u5165\u677E\u8106\u725B\u89D2\u5305\uFF0C\u5E26\u6765\u53CC\u91CD\u6EE1\u8DB3\u53E3\u611F\u3002",
          "label": "\u725B\u89D2",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 20,
          "images": [
            {
              "id": 88568,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/13/e479684b39db4cfea36e31c6e434ccd7.jpg"
            },
            {
              "id": 121241,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/979ca41d0238481ea7c3a7cb73335bd1.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 87,
              "name": "\u542B\u9EA6\u5236\u54C1\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 95,
              "name": "\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u72B6\u6001",
              "values": [
                {
                  "id": 1340,
                  "name": "\u52A0\u70ED(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 1341,
                  "name": "\u5E38\u6E29",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "12",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 10.62
        },
        {
          "id": 534,
          "name": "\u6CD5\u5F0F\u5E03\u857E\u725B\u89D2",
          "no": "1908125985893028",
          "description": "\u70E4\u81F3\u9165\u8106\u7684\u725B\u89D2\u4E2D\u6CE8\u5165\u9178\u751C\u829D\u58EB\u5E03\u857E\uFF0C\u6EE1\u53E3\u7559\u9999\u3002\uFF08\u829D\u58EB\u5976\u9178\u5473\u5C5E\u6B63\u5E38\u53E3\u611F\uFF09",
          "label": "\u725B\u89D2",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 21,
          "images": [
            {
              "id": 66925,
              "url": "https://go.cdn.heytea.com/product/2019/08/12/tmp/b297da7e150e46cc98c2138a290c9fb4.jpg"
            },
            {
              "id": 121231,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/1e1a115b801d439281790230bcfaeb0c.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 91,
              "name": "\u542B\u9EA6\u3001\u86CB\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 95,
              "name": "\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u72B6\u6001",
              "values": [
                {
                  "id": 1340,
                  "name": "\u52A0\u70ED(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 1341,
                  "name": "\u5E38\u6E29",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "10",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8.85
        },
        {
          "id": 535,
          "name": "\u6D77\u82D4\u8089\u9165\u725B\u89D2",
          "no": "1908128591156037",
          "description": "\u9165\u8106\u7684\u6D77\u82D4\u8089\u9165\u94FA\u6EE1\u6574\u53EA\u725B\u89D2\u5305\uFF0C\u829D\u58EB\u5976\u6CB9\u9187\u9999\u67D4\u6ED1\u3002",
          "label": "\u725B\u89D2",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 22,
          "images": [
            {
              "id": 66934,
              "url": "https://go.cdn.heytea.com/product/2019/08/12/tmp/d5ebe688cd0b4f8d922505aac18a6fcb.jpg"
            },
            {
              "id": 121232,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/a16f9bf3635e4875be1507a598d10ecc.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 87,
              "name": "\u542B\u9EA6\u5236\u54C1\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 95,
              "name": "\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u72B6\u6001",
              "values": [
                {
                  "id": 1340,
                  "name": "\u52A0\u70ED(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 1341,
                  "name": "\u5E38\u6E29",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "12",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 10.62
        },
        {
          "id": 316,
          "name": "\u54B8\u86CB\u9EC4\u5343\u5C42\u5410\u53F8",
          "no": "1903059853995257",
          "description": "\u4E0B\u5355\u540E\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u76F4\u63A5\u51FA\u793A\u7ED9\u5E97\u5458\u9886\u53D6\u3002\u54B8\u9999\u86CB\u9EC4\u4E0E\u5976\u9999\u5410\u53F8\u5C42\u5C42\u4EA4\u7EC7\uFF0C\u5E26\u6765\u6781\u5EA6\u7EC6\u817B\u7684\u53E3\u611F\u4F53\u9A8C\u3002",
          "label": "\u5410\u53F8",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 23,
          "images": [
            {
              "id": 23974,
              "url": "https://go.cdn.heytea.com/storage/products/2019/03/07/VJeeKv4CvYLoPhgFedawCrao1BfjTF2nNZ46ucKA.jpg"
            },
            {
              "id": 121290,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/f6acd196783c4d4c8cc6e41eaed3062a.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1039,
              "name": "\u54B8\u86CB\u9EC4\u5343\u5C42\u5410\u53F8",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [
            {
              "id": 87,
              "name": "\u542B\u9EA6\u5236\u54C1\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 95,
              "name": "\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "24",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 21.24
        },
        {
          "id": 159,
          "name": "\u5C0F\u828B\u5934\u6761",
          "no": "1812139850535155",
          "description": "\u4E0B\u5355\u540E\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u76F4\u63A5\u51FA\u793A\u7ED9\u5E97\u5458\u9886\u53D6\u3002\u6765\u81EA\u559C\u8336\u70ED\u9EA6\u9887\u53D7\u6B22\u8FCE\u7684\u828B\u5934\u6761\uFF0C\u73B0\u8C03\u6574\u4E3A\u9002\u5408\u4E00\u4EBA\u98DF\u7684\u5206\u91CF\uFF0C\u4F9D\u7136\u5185\u9985\u9971\u6EE1\uFF0C\u4E0E\u8F6F\u97E7\u7684\u9762\u5305\u4F53\u9ED8\u5951\u76F8\u878D\u3002",
          "label": "\u5C0F\u828B\u5934\u6761",
          "category_id": 20,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 24,
          "images": [
            {
              "id": 88366,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/12/2bed4fc9c2fe4d61a1ffd7d7835594b7.jpg"
            },
            {
              "id": 121240,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/25ea4c4d3db44e0bae3b080a18f24a69.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 99,
              "name": "\u542B\u5C0F\u9EA6\u3001\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "\u72B6\u6001",
              "values": [
                {
                  "id": 1340,
                  "name": "\u52A0\u70ED(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 1341,
                  "name": "\u5E38\u6E29",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "1",
          "remark": "\u6E29\u5EA6",
          "is_enable": 1,
          "price": "15",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 13.27
        },
        {
          "id": 1064,
          "name": "\u592A\u5983\u7126\u7CD6\u7206\u7C73\u82B1",
          "no": "2005127848825331",
          "description": "\u7CBE\u9009\u7206\u88C2\u7389\u7C73\u4E0E\u65B0\u897F\u5170\u8FDB\u53E3\u9EC4\u6CB9\u7092\u5236\uFF0C\u6BCF\u4E00\u6761\u7F1D\u9699\u90FD\u586B\u6EE1\u592A\u5983\u7126\u7CD6\u751C\u9999\uFF0C\u4E0D\u542B\u53CD\u5F0F\u8102\u80AA\u9178\uFF0C0\u9632\u8150\u5242\u3002",
          "label": "",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 150037,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/6def2c810a5c4d1a80912ffad47f3162.jpg"
            },
            {
              "id": 150038,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/99f43d68f57c4278b62e5354510223c3.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2406,
              "name": "\u592A\u5983\u7126\u7CD6\u7206\u7C73\u82B1",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 1
            }
          ],
          "labels": [
            {
              "id": 102,
              "name": "\u542B\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 0,
          "price": "12",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 11.32
        },
        {
          "id": 836,
          "name": "\u706B\u817F\u86CB\u53EF\u9882\u8106\u5821",
          "no": "1912251537314614",
          "description": "\u53EF\u9882\u9762\u5305\u5939\u5165\u5927\u5757\u70DF\u718F\u706B\u817F\u4E0E\u539F\u5473\u86CB\u997C\uFF0C\u8F66\u6253\u829D\u58EB\u66F4\u6DFB\u6D53\u90C1\u5976\u9999\u3002",
          "label": "\u53EF\u9882",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 11,
          "images": [
            {
              "id": 110948,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/12/41041a1dba3243c1859bfba0615d3797.jpg"
            },
            {
              "id": 121298,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/48db64dea6fa4c4b99ae3a005be469c9.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 94,
              "name": "\u542B\u5C0F\u9EA6\u3001\u71D5\u9EA6\u3001\u86CB",
              "type": 0,
              "label_color": "#BABABA"
            },
            {
              "id": 95,
              "name": "\u4E73\u53CA\u5927\u8C46\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "\u9C9C\u98DF",
          "is_enable": 0,
          "price": "19",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 16.81
        },
        {
          "id": 838,
          "name": "\u718F\u9E21\u829D\u58EB\u86CB\u4E09\u660E\u6CBB",
          "no": "1912253512109898",
          "description": "\u70DF\u718F\u9E21\u8089\u6DF7\u642D\u9E21\u86CB\u8272\u62C9\u4E0E\u8F66\u6253\u829D\u58EB\uFF0C\u6BCF\u4E00\u53E3\u90FD\u5341\u8DB3\u6709\u6599\u3002",
          "label": "\u53EF\u9882",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 12,
          "images": [
            {
              "id": 110950,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/12/9b8969a8830a485c945b2e5e353f20dc.jpg"
            },
            {
              "id": 121299,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/127cadc6fe59432390db87caf2fa2b68.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 96,
              "name": "\u542B\u5C0F\u9EA6\u3001\u86CB\u3001\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "\u9C9C\u98DF",
          "is_enable": 0,
          "price": "19",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 16.81
        },
        {
          "id": 837,
          "name": "\u829D\u829D\u706B\u817F\u53EF\u9882",
          "no": "1912257503138775",
          "description": "\u70D8\u70E4\u81F3\u9165\u8106\u7684\u9165\u9999\u53EF\u9882\uFF0C\u5185\u5939\u70DF\u718F\u706B\u817F\u548C\u8F66\u6253\u829D\u58EB\uFF0C\u6EE1\u53E3\u7559\u9999\u3002",
          "label": "\u53EF\u9882",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 13,
          "images": [
            {
              "id": 110949,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/12/9b90d1cb46ed434d836352e1bdd9245e.jpg"
            },
            {
              "id": 121300,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/11/7f8cca1df210430fa3375f650209a91d.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 97,
              "name": "\u542B\u5C0F\u9EA6\u3001\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "\u9C9C\u98DF",
          "is_enable": 0,
          "price": "18",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 15.93
        },
        {
          "id": 617,
          "name": "\u51B7\u8403\u6842\u82B1\u7EFF",
          "no": "1909306163749525",
          "description": "\u51B7\u8403\u8336\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u53EF\u76F4\u63A5\u5411\u5E97\u5458\u51FA\u793A\u540E\u9886\u53D6\u3002\u7EC6\u5AE9\u8336\u82BD\u4E0E\u6842\u82B1\u4E00\u540C\u4E8E\u51B7\u9732\u4E2D\u8212\u5C55\u6C90\u6D74\u516B\u5C0F\u65F6\uFF0C\u5236\u5F97\u8336\u6C64\u6E05\u9EC4\u900F\u4EAE\uFF0C\u6ECB\u5473\u9C9C\u723D\u3002",
          "label": "\u51B7\u8403",
          "category_id": 20,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 25,
          "images": [
            {
              "id": 79221,
              "url": "https://go.cdn.heytea.com/product/2019/10/01/tmp/9d41fd6573ab49ab8eeb71b2746c0ba4.jpg"
            },
            {
              "id": 116975,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/7dcb32e0d8f047678447e7c30064c030.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1515,
              "name": "\u51B7\u8403\u6842\u82B1\u7EFF",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 1
            }
          ],
          "labels": [
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "\u56FD\u5185-\u559C\u8336\u5B9E\u9A8C\u5BA4",
          "is_enable": 0,
          "price": "9",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 8.49
        }
      ],
      "categoryAds": []
    },
    {
      "id": 12,
      "name": "\u5F53\u5B63\u9650\u5B9A",
      "sort": 2,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/05/02/c9d862a735af48d280ab8b21a2315514.jpg",
      "products": [
        {
          "id": 421,
          "name": "\u829D\u829D\u6843\u6843",
          "no": "1906061363116531",
          "description": "\u51B7670ml \u70ED500ml \u7CBE\u9009\u5F53\u5B63\u6C34\u871C\u6843+NFC\u6843\u6C41\uFF08100%\u975E\u6D53\u7F29\u8FD8\u539F\u6843\u6C41\uFF09\u642D\u914D\u91D1\u7389\u8336\u5E95\u5236\u4F5C\u800C\u6210\uFF0C\u4E0D\u4F7F\u7528\u4EFB\u4F55\u9999\u7CBE\u7B49\u6DFB\u52A0\u5242\uFF0C\u4E0D\u4F7F\u7528\u4EFB\u4F55\u7F50\u5934\u6C34\u679C\u3002\u7C89\u8272\u4E3A\u706B\u9F99\u679C\u5929\u7136\u8C03\u8272\u3002\u82E5\u6709\u5C0F\u9ED1\u70B9\uFF0C\u662F\u706B\u9F99\u679C\u7C7D\uFF0C\u53EF\u653E\u5FC3\u98DF\u7528\u3002",
          "label": "",
          "category_id": 12,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 147227,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/11/f00875e937244d3188f462e43c21170a.jpg"
            },
            {
              "id": 139431,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/26/c846a8fc574146ccad2f9a7581a692ef.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "0\u7CD6\u4F4E\u5361\u751C\u83CA\u7CD6",
              "values": [
                {
                  "id": 1289,
                  "name": "0\u7CD6\u4F4E\u5361\u7CD6\uFF08\u4E0D\u542B\u7CD6\u5206\uFF09",
                  "price": "1",
                  "is_selected": false,
                  "is_exclusive": true
                }
              ]
            },
            {
              "group_name": "\u52A0\u6599",
              "values": [
                {
                  "id": 1323,
                  "name": "\u829D\u58EB\u5206\u88C5",
                  "price": "1",
                  "is_selected": false,
                  "is_exclusive": true
                }
              ]
            },
            {
              "group_name": "\u7EFF\u8272\u559C\u8336",
              "values": [
                {
                  "id": 409,
                  "name": "\u5E38\u89C4\u5438\u7BA1",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 408,
                  "name": "\u7EB8\u5438\u7BA1-\u53E3\u611F\u7565\u6709\u5F71\u54CD",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 410,
                  "name": "\u4E0D\u4F7F\u7528\u5438\u7BA1",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u51B0\u91CF",
              "values": [
                {
                  "id": 558,
                  "name": "\u6B63\u5E38(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 29,
                  "name": "\u5C11\u51B0",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 33,
                  "name": "\u5C11\u5C11\u51B0",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u751C\u5EA6",
              "values": [
                {
                  "id": 67,
                  "name": "\u6807\u51C6(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 93,
                  "name": "\u5C11\u751C",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 96,
                  "name": "\u5C11\u5C11\u751C",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 51,
                  "name": "\u4E0D\u53E6\u5916\u52A0\u7CD6",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u8336\u5E95",
              "values": [
                {
                  "id": 205,
                  "name": "\u7EFF\u598D(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 413,
                  "name": "\u53BB\u8336\u5E95",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u53E3\u5473",
              "values": [
                {
                  "id": 186,
                  "name": "\u829D\u58EB(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 145,
                  "name": "\u53BB\u829D\u58EB",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 1203,
                  "name": "\u6362\u829D\u829D\u96EA\u7CD5(\u9876\u90E8)",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "0",
          "remark": "\u5927\u9646\u666E\u901A",
          "is_enable": 1,
          "price": "30",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 28.3
        },
        {
          "id": 1037,
          "name": "\u591A\u8089\u6768\u6885",
          "no": "2004238175994068",
          "description": "\u51B7670ml \u7CBE\u9009\u5F53\u5B63\u4E91\u5357\u9C9C\u6768\u6885\uFF0C\u9897\u9897\u624B\u5265\u53BB\u6838\u3002\u642D\u914D\u6765\u81EA\u4F18\u8D28\u8336\u56ED\u7684\u7EFF\u598D\u539F\u8336\u53CA\u559C\u8336\u7ECF\u5178\u829D\u58EB\uFF0C\u51B0\u51C9\u6D88\u6691\u3002",
          "label": "",
          "category_id": 12,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 147226,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/11/b95776a518d144ce8039a149c8ecf415.jpg"
            },
            {
              "id": 139334,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/26/d9cdb5e74f93439ebe30fdaa4928b5bd.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "0\u7CD6\u4F4E\u5361\u751C\u83CA\u7CD6",
              "values": [
                {
                  "id": 1289,
                  "name": "0\u7CD6\u4F4E\u5361\u7CD6\uFF08\u4E0D\u542B\u7CD6\u5206\uFF09",
                  "price": "1",
                  "is_selected": false,
                  "is_exclusive": true
                }
              ]
            },
            {
              "group_name": "\u52A0\u6599",
              "values": [
                {
                  "id": 1323,
                  "name": "\u829D\u58EB\u5206\u88C5",
                  "price": "1",
                  "is_selected": false,
                  "is_exclusive": true
                }
              ]
            },
            {
              "group_name": "\u7EFF\u8272\u559C\u8336",
              "values": [
                {
                  "id": 409,
                  "name": "\u5E38\u89C4\u5438\u7BA1",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 408,
                  "name": "\u7EB8\u5438\u7BA1-\u53E3\u611F\u7565\u6709\u5F71\u54CD",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 410,
                  "name": "\u4E0D\u4F7F\u7528\u5438\u7BA1",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u51B0\u91CF",
              "values": [
                {
                  "id": 558,
                  "name": "\u6B63\u5E38(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 29,
                  "name": "\u5C11\u51B0",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 33,
                  "name": "\u5C11\u5C11\u51B0",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u751C\u5EA6",
              "values": [
                {
                  "id": 67,
                  "name": "\u6807\u51C6(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 93,
                  "name": "\u5C11\u751C",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 96,
                  "name": "\u5C11\u5C11\u751C",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 51,
                  "name": "\u4E0D\u53E6\u5916\u52A0\u7CD6",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u8336\u5E95",
              "values": [
                {
                  "id": 205,
                  "name": "\u7EFF\u598D(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 413,
                  "name": "\u53BB\u8336\u5E95",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u53E3\u5473",
              "values": [
                {
                  "id": 186,
                  "name": "\u829D\u58EB(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 145,
                  "name": "\u53BB\u829D\u58EB",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 1203,
                  "name": "\u6362\u829D\u829D\u96EA\u7CD5(\u9876\u90E8)",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "0",
          "remark": "\u666E\u901A",
          "is_enable": 0,
          "price": "29",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 27.36
        },
        {
          "id": 1014,
          "name": "\u829D\u829D\u8393\u8393\u6843",
          "no": "2004104298716366",
          "description": "\u51B7670ml \u8393\u8393\u4E0E\u6843\u6843\u7684\u9996\u6B21\u7075\u611F\u6DF7\u642D\u3002\u8393\u8393\u6C81\u5165\u6843\u6C41\uFF0C\u642D\u914D\u6E05\u96C5\u7EFF\u598D\u8336\u5E95\u4E0E\u6D53\u9187\u829D\u58EB\uFF0C\u4E00\u6B21\u559D\u5230\u4E24\u6B3E\u4EBA\u6C14\u996E\u54C1\u3002",
          "label": "",
          "category_id": 12,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 140872,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/28/bfbe92590fa244b09353b873a5ca98a3.jpg"
            },
            {
              "id": 134740,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/14/1feb8648edad4cc9a37d9b1bdead9b59.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "31",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 29.25
        }
      ],
      "categoryAds": []
    },
    {
      "id": 67,
      "name": "\u4EBA\u6C14\u5FC5\u559D\u699C",
      "sort": 3,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/23/3b52e3d18fae4290b0a668a776b21645.jpg",
      "products": [
        {
          "id": 944,
          "name": "\u6EE1\u676F\u7EA2\u67DA",
          "no": "2002289831003882",
          "description": "\u51B7670ml  \u70ED500ml \u4EBA\u6C14Top7 \u7CBE\u9009\u9971\u6EE1\u7EA2\u67DA\u679C\u7C92\u5165\u8336\uFF0C\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\u6D0B\u6EA2\u8309\u8389\u82B1\u9999\u3002\u51B0\u6C99\u51CF\u5F31\u4E86\u7EA2\u67DA\u7684\u5FAE\u82E6\uFF0C\u66F4\u51F8\u663E\u8336\u5473\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 72,
          "images": [
            {
              "id": 135796,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/16/334021739fee4274989793ce343156fd.jpg"
            },
            {
              "id": 117022,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/07dae739032e4b5f9034c82cfad32aa4.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/b6041bf0a93046039123851d0250101f.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 1,
          "price": "25",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 23.58
        },
        {
          "id": 931,
          "name": "\u591A\u8089\u8461\u8404",
          "no": "2002282994907759",
          "description": "\u51B7670ml \u70ED500ml \u4EBA\u6C14Top1 \u7CBE\u9009\u723D\u8106\u590F\u9ED1\u8461\u8404\u5165\u8336\uFF0C\u4FDD\u7559\u679C\u8089\u5B8C\u6574\u8089\u611F\u3002\u642D\u914D\u6E05\u96C5\u7EFF\u598D\u8336\u5E95\u4E0E\u9187\u9999\u829D\u58EB\uFF0C\u9C9C\u723D\u53EF\u53E3\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 143240,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/03/26c8a4213c9243e88f4e3f6cfa14c30b.jpg"
            },
            {
              "id": 117056,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/1d874e762358478aa3ae4385a1397819.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/b280fca74f744e6896cabdb73ae31f47.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "30",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 28.3
        },
        {
          "id": 941,
          "name": "\u591A\u8089\u8292\u8292\u7518\u9732",
          "no": "2002288368800095",
          "description": "\u51B7/\u70ED500ml  \u4EBA\u6C14Top2 \u7ECF\u5178\u8292\u8292\u4E0E\u6768\u679D\u7518\u9732\u7684\u7075\u611F\u78B0\u649E\uFF0C\u7CBE\u9009\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\uFF0C\u7206\u6C41\u7EA2\u67DA\u7C92\u649E\u4E0A\u5927\u5757\u8292\u8089\u3002\u70ED\u996E\u9ED8\u8BA4\u52A0\u5165\u828B\u5706\u6CE2\u6CE2\uFF0C\u4E0D\u542B\u8106\u6CE2\u6CE2\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 150526,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/40a6757ad5d34161aedda557f63bf315.jpg"
            },
            {
              "id": 117044,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/dab56268b0fa44499f3255e95657cf18.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/4015de8912a14300a877b19569096cda.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 932,
          "name": "\u829D\u829D\u8393\u8393 \xAE",
          "no": "2002285591289050",
          "description": "\u51B7670ml \u70ED500ml \u4EBA\u6C14Top3 \u9009\u7528\u5B9A\u88FD\u58EB\u591A\u5564\u68A8\u914D\u642D\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\u65B0\u9C9C\u73B0\u6253\uFF0C\u8393\u9999\u6EE1\u6EA2\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 67,
          "is_single": false,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 150527,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/fbcdfbd39c6548b185c1d0eef790808d.jpg"
            },
            {
              "id": 117035,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/66a64d27c2504838851ce69f2a901326.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/e75452c0d57443be87fdbe9b1dd61da5.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "materials": [
            {
              "group_name": "0\u7CD6\u4F4E\u5361\u751C\u83CA\u7CD6",
              "values": [
                {
                  "id": 1289,
                  "name": "0\u7CD6\u4F4E\u5361\u7CD6\uFF08\u4E0D\u542B\u7CD6\u5206\uFF09",
                  "price": "1",
                  "is_selected": false,
                  "is_exclusive": true
                }
              ]
            },
            {
              "group_name": "\u52A0\u6599",
              "values": [
                {
                  "id": 1323,
                  "name": "\u829D\u58EB\u5206\u88C5",
                  "price": "1",
                  "is_selected": false,
                  "is_exclusive": true
                }
              ]
            },
            {
              "group_name": "\u7EFF\u8272\u559C\u8336",
              "values": [
                {
                  "id": 409,
                  "name": "\u5E38\u89C4\u5438\u7BA1",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 408,
                  "name": "\u7EB8\u5438\u7BA1-\u53E3\u611F\u7565\u6709\u5F71\u54CD",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 410,
                  "name": "\u4E0D\u4F7F\u7528\u5438\u7BA1",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u51B0\u91CF",
              "values": [
                {
                  "id": 558,
                  "name": "\u6B63\u5E38(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 29,
                  "name": "\u5C11\u51B0",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 33,
                  "name": "\u5C11\u5C11\u51B0",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u751C\u5EA6",
              "values": [
                {
                  "id": 67,
                  "name": "\u6807\u51C6(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 93,
                  "name": "\u5C11\u751C",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 96,
                  "name": "\u5C11\u5C11\u751C",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 51,
                  "name": "\u4E0D\u53E6\u5916\u52A0\u7CD6",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u8336\u5E95",
              "values": [
                {
                  "id": 205,
                  "name": "\u7EFF\u598D(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 413,
                  "name": "\u53BB\u8336\u5E95",
                  "price": "0",
                  "is_selected": false
                }
              ]
            },
            {
              "group_name": "\u53E3\u5473",
              "values": [
                {
                  "id": 186,
                  "name": "\u829D\u58EB(\u63A8\u8350)",
                  "price": "0",
                  "is_selected": true
                },
                {
                  "id": 145,
                  "name": "\u53BB\u829D\u58EB",
                  "price": "0",
                  "is_selected": false
                },
                {
                  "id": 1203,
                  "name": "\u6362\u829D\u829D\u96EA\u7CD5(\u9876\u90E8)",
                  "price": "0",
                  "is_selected": false
                }
              ]
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "32",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 30.19
        },
        {
          "id": 1070,
          "name": "\u829D\u829D\u8393\u8393\u6843",
          "no": "2005182670291325",
          "description": "\u51B7670ml \u4EBA\u6C14Top4 \u8393\u8393\u4E0E\u6843\u6843\u7684\u9996\u6B21\u7075\u611F\u6DF7\u642D\u3002\u8393\u8393\u6C81\u5165\u6843\u6C41\uFF0C\u642D\u914D\u6E05\u96C5\u7EFF\u598D\u8336\u5E95\u4E0E\u6D53\u9187\u829D\u58EB\uFF0C\u4E00\u6B21\u559D\u5230\u4E24\u6B3E\u4EBA\u6C14\u996E\u54C1\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 150244,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/9faf0150339d4b9f97f15b95aa6e1eea.jpg"
            },
            {
              "id": 150263,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/befb6794a056416cb6d2887e8950b99e.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/05/18/a7df1a4418d14475aab48a76268cc8d1.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "31",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 29.25
        },
        {
          "id": 938,
          "name": "\u829D\u829D\u8292\u8292 \xAE",
          "no": "2002280824114931",
          "description": "\u51B7670ml \u4EBA\u6C14Top5 \u9009\u7528\u5F53\u5B63\u8292\u679C\u642D\u914D\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\u65B0\u9C9C\u73B0\u5236\uFF0C\u6E05\u65B0\u7EF5\u5BC6\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 7,
          "images": [
            {
              "id": 150528,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/0c30e67747c04eeeb05a90b06a79c999.jpg"
            },
            {
              "id": 117074,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/fa956693617d4eecb733b4a7dc9dd333.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/41c6464515484d4797055629ea3ac978.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "32",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 30.19
        },
        {
          "id": 935,
          "name": "\u70E4\u9ED1\u7CD6\u6CE2\u6CE2\u9C9C\u5976",
          "no": "2002288501288017",
          "description": "\u51B7480ml \u70ED500ml  \u4EBA\u6C14Top6  \u9ED1\u7CD6\u73CD\u73E0\u642D\u914D\u987A\u6ED1\u9C9C\u5976\uFF0C\u6CE2\u6CE2\u7CFB\u5217\u5976\u5473\u8F83\u4E3A\u6D53\u90C1\uFF0C\u4E0D\u559C\u6B22\u6D53\u539A\u53E3\u611F\u7684\u670B\u53CB\u614E\u70B9\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 8,
          "images": [
            {
              "id": 143245,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/03/489faf24180c45fe974f7711b5c945b0.jpg"
            },
            {
              "id": 116588,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/b9a1a1446e114335b9319a3a82e5e99f.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/880caa818dd1464d99f1a3b15fc74408.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 70,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u4E0D\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "21",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 19.81
        },
        {
          "id": 933,
          "name": "\u8C46\u8C46\u6CE2\u6CE2\u8336",
          "no": "2002284899436338",
          "description": "\u51B7/\u70ED500ml \u4EBA\u6C14Top8 \u9009\u7528\u6D53\u90C1\u963F\u8428\u59C6\u5976\u8336\u8336\u5E95\u3002\u6D53\u539A\u9EC4\u8C46\u7C89\u3001\u828B\u5706\u6CE2\u6CE2\u642D\u914D\u79D8\u5236\u8C46\u4E73\u5976\u76D6\uFF0C\u5E95\u90E8\u85CF\u6709\u6ED1\u5AE9\u8C46\u82B1\u3002\u996E\u7528\u79D8\u7C4D\uFF1A1.\u8200\u8D77\u9876\u90E8\u5C0F\u4E38\u5B50\u548C\u8C46\u5976\u76D6\u5148\u5C1D\uFF0C2.\u5438\u7BA1\u4E00\u63D2\u5230\u5E95\uFF0C\u518D\u5438\u8C46\u82B1\u4E0E\u5976\u8336\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 76,
          "images": [
            {
              "id": 150529,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/2cbf29cd972346e6afce4ae44bdbd001.jpg"
            },
            {
              "id": 116602,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/c1c1e721aae848ba9ec0c90642595a07.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/51dd0977ee194011b5a0c8caea5f2634.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 88,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u5927\u8C46\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 934,
          "name": "\u828B\u6CE5\u6CE2\u6CE2\u9C9C\u5976",
          "no": "2002283784744731",
          "description": "\u51B7/\u70ED500ml  \u4EBA\u6C14Top9  \u9ED8\u8BA4\u51B7\u996E\uFF0C\u53EF\u505A\u70ED\u3002\u56E0\u828B\u6CE5\u5BB9\u6613\u6C27\u5316\uFF0C\u4E3A\u4FDD\u6301\u6700\u4F73\u4F53\u9A8C\uFF0C\u8BF7\u52A1\u5FC5\u4E8E\u4E00\u5C0F\u65F6\u5185\u996E\u7528\u5B8C\u6BD5\u3002\u8336\u5E95\u53EF\u9009\u9C9C\u5976/\u6930\u5976\u3002\u624B\u6363\u65B0\u9C9C\u828B\u6CE5\u878D\u5165\u987A\u6ED1\u9C9C\u5976\uFF0C\u518D\u52A0\u5165\u9897\u9897Q\u5F39\u7684\u828B\u6CE5\u6CE2\u6CE2\uFF0C\u7EF5\u5BC6\u4E0E\u6DA6\u6CFD\uFF0C\u5C3D\u5728\u8FD9\u4E00\u676F\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 82,
          "images": [
            {
              "id": 150530,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/8f982f2fedb049bbb42afb1ec660b157.jpg"
            },
            {
              "id": 116600,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/666de01e56fa40a5b57fa6b9f3fd7651.jpg"
            }
          ],
          "name_image": "https://go.cdn.heytea.com/storage/product/2020/02/28/0c485a9ec288466186b30e1fb65449b9.jpg",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 70,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u4E0D\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 923,
          "name": "m\u8C46\u6CE2\u6CE2",
          "no": "2002263405725906",
          "description": "\u51B7480ml  \u70ED 500ml  \u56E0\u70ED\u996E\u9C9C\u5976\u6CB9\u6613\u878D\uFF0C\u63A8\u8350\u9009\u62E9\u5206\u88C5\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9ED8\u8BA4\u70ED\u996E\uFF0C\u51B7\u70ED\u7686\u5B9C\u3002\u6CD5\u8299\u5A1C\u5DE7\u514B\u529B\u53E3\u611F\u6D53\u90C1\u987A\u6ED1\uFF0C\u9C9C\u5976\u6CB9\u9876\u662Fm\u8C46\u4EEC\u7684\u5947\u5999\u6E38\u4E50\u56ED\u3002\u996E\u7528\u6B65\u9AA4\uFF1A1.\u5148\u7528\u642D\u914D\u7684\u5C0F\u52FA\u5403\u6389\u5976\u6CB9\u548Cm\u8C46\uFF1B2.\u518D\u63D2\u5165\u5438\u7BA1\u5927\u53E3\u542E\u5438\u6D53\u9999\u5DE7\u514B\u529B\u548C\u9ED1\u6CE2\u6CE2\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 172,
          "images": [
            {
              "id": 114333,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/26/2c409b83237148f58ae346c44254a382.jpg"
            },
            {
              "id": 116572,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/f1656b78be914bc7aacfabc2dd87ad6d.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 86,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "29",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 27.36
        },
        {
          "id": 922,
          "name": "\u7A7A\u6C14\u5DE7\u514B\u529B\u6CE2\u6CE2",
          "no": "2002260260233795",
          "description": "\u51B7480ml  \u70ED 500ml  \u56E0\u70ED\u996E\u9C9C\u5976\u6CB9\u6613\u878D\uFF0C\u63A8\u8350\u9009\u62E9\u5206\u88C5\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9ED8\u8BA4\u70ED\u996E\uFF0C\u51B7\u70ED\u7686\u5B9C\u3002\u6CD5\u8299\u5A1C\u5DE7\u514B\u529B\u53E3\u611F\u6D53\u90C1\u987A\u6ED1\uFF0C\u9C9C\u5976\u6CB9\u4E0E\u7A7A\u6C14\u5DE7\u514B\u529B\u4EA4\u7EC7\u51FA\u5723\u8BDE\u597D\u5473\u3002\u996E\u7528\u6B65\u9AA4\uFF1A1.\u5148\u7528\u642D\u914D\u7684\u5C0F\u52FA\u5403\u6389\u5976\u6CB9\u548C\u7A7A\u6C14\u5DE7\u514B\u529B\uFF1B2.\u518D\u63D2\u5165\u5438\u7BA1\u5927\u53E3\u542E\u5438\u6D53\u9999\u5DE7\u514B\u529B\u548C\u9ED1\u6CE2\u6CE2\u3002",
          "label": "",
          "category_id": 67,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 202,
          "images": [
            {
              "id": 114321,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/26/cd87394ec858482499b89db226e17626.jpg"
            },
            {
              "id": 116591,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/135b9a02c96b4be8af8ae7fe827613c3.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 86,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u666E\u901A",
          "is_enable": 0,
          "price": "28",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 26.42
        }
      ],
      "categoryAds": []
    },
    {
      "id": 17,
      "name": "\u559C\u8336\u5236\u51B0",
      "sort": 4,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/21/ef7b2a24507a4e20b50355eccc3261db.jpg",
      "products": [
        {
          "id": 865,
          "name": "\u9521\u5170\u5976\u8336\u8106\u7B52",
          "no": "2001106350637687",
          "description": "\u7531\u4E8E\u51B0\u6DC7\u6DCB\u6613\u5316\uFF0C\u4E0B\u5355\u540E\u9700\u5230\u51B0\u6DC7\u6DCB\u673A\u51FA\u793A\u8D2D\u4E70\u51ED\u8BC1\u5236\u4F5C\u9886\u53D6\uFF0C\u611F\u8C22\u7406\u89E3\u3002\u4E1D\u6ED1\u5976\u9999\u4E0E\u9521\u5170\u7EA2\u8336\u4EA4\u7EC7\uFF0C\u6D53\u90C1\u8336\u9999\uFF0C\u5165\u53E3\u96BE\u5FD8\u3002",
          "label": "",
          "category_id": 17,
          "is_single": true,
          "support_takeaway": 0,
          "sort": 1,
          "images": [
            {
              "id": 104839,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/10/a80b8ad8282c4c14b619a17e2524abc8.jpg"
            },
            {
              "id": 117368,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/05/a03b4da4d8984bb6a0d2374c73c3dc11.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 84,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "9",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 8.49
        },
        {
          "id": 482,
          "name": "\u829D\u829D\u8106\u7B52",
          "no": "1907049396650773",
          "description": "\u7531\u4E8E\u51B0\u6DC7\u6DCB\u6613\u5316\uFF0C\u4E0B\u5355\u540E\u9700\u5230\u51B0\u6DC7\u6DCB\u673A\u51FA\u793A\u8D2D\u4E70\u51ED\u8BC1\u5236\u4F5C\u9886\u53D6\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9996\u6B21\u5C06\u559C\u8336\u7ECF\u5178\u829D\u58EB\u4E0E\u51B0\u6DC7\u6DCB\u7ED3\u5408\uFF0C\u829D\u9999\u6D53\u90C1\uFF0C\u4E73\u9999\u4E1D\u6ED1\u3002",
          "label": "\u51B0\u6FC0\u6DCB",
          "category_id": 17,
          "is_single": true,
          "support_takeaway": 0,
          "sort": 2,
          "images": [
            {
              "id": 61018,
              "url": "https://go.cdn.heytea.com/product/2019/07/17/tmp/e9d83a24f39547f98369ce8bfdd781af.jpg"
            },
            {
              "id": 117369,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/05/a30e76e5abfb420db8deda04715c7aec.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 89,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u4E0D\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "9",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 8.49
        },
        {
          "id": 716,
          "name": "\u8C46\u8C46\u96EA\u7CD5\u676F",
          "no": "1911057652116163",
          "description": "\u96EA\u5C71\u9EC4\u8C46\u7C89\u548C\u5439\u5F39\u53EF\u7834\u7684\u8C46\u82B1\u7F6E\u4E8E\u829D\u829D\u51B0\u6DC7\u6DCB\u4E0A\uFF0C\u7F00\u4EE5\u8F6F\u7CEF\u828B\u5706\u6CE2\u6CE2\u3002",
          "label": "\u51B0\u6FC0\u6DCB",
          "category_id": 17,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 86879,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/05/1d09b9bff6934df5a55c009c4c7d176c.jpg"
            },
            {
              "id": 117140,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/e6f339018d96413897f20e143153718b.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 60,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u5927\u8C46",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "15",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 14.15
        },
        {
          "id": 91,
          "name": "\u6CE2\u6CE2\u96EA\u7CD5\u676F",
          "no": "1812235098495352",
          "description": "\u7531\u4E8E\u51B0\u6DC7\u6DCB\u6613\u5316\uFF0C\u4E0B\u5355\u540E\u9700\u5230\u51B0\u6DC7\u6DCB\u673A\u51FA\u793A\u8D2D\u4E70\u51ED\u8BC1\u5236\u4F5C\u9886\u53D6\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u6D53\u9187\u4E73\u9999\u878D\u5165\u5B9A\u5236\u8336\u9999\uFF0C\u4F50\u4EE5\u53E4\u6CD5\u9ED1\u7CD6\u71AC\u5236\u7684Q\u5F39\u6CE2\u6CE2\u3002",
          "label": "\u51B0\u6FC0\u6DCB",
          "category_id": 17,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 106621,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/16/bb5441ab575d478595c2b4cf8e3f82f9.jpg"
            },
            {
              "id": 117133,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/7ed49e6458364d8faf04850862797f1a.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "\u4E00\u4E2A\u53E3\u5473",
          "is_enable": 1,
          "price": "16",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 15.09
        },
        {
          "id": 518,
          "name": "\u7206\u828B\u6CE5\u96EA\u7CD5\u676F",
          "no": "1908020946066711",
          "description": "\u7531\u4E8E\u51B0\u6DC7\u6DCB\u6613\u5316\uFF0C\u4E0B\u5355\u540E\u9700\u5230\u51B0\u6DC7\u6DCB\u673A\u51FA\u793A\u8D2D\u4E70\u51ED\u8BC1\u5236\u4F5C\u9886\u53D6\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9187\u9999\u829D\u58EB\u96EA\u7CD5\u642D\u914D\u6EE1\u6EE1\u624B\u6363\u9C9C\u828B\u6CE5\u3001\u5927\u7C92\u828B\u5934\u4E01\u53CA\u9999\u7CEF\u828B\u5706\u6CE2\u6CE2\u3002",
          "label": "\u51B0\u6FC0\u6DCB",
          "category_id": 17,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 64564,
              "url": "https://go.cdn.heytea.com/product/2019/08/02/tmp/4e90c2391b174547b164811e4d4256ab.jpg"
            },
            {
              "id": 117147,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/c28d24b339d7480ea11c3f38d7fbca4d.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "16",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 15.09
        }
      ],
      "categoryAds": []
    },
    {
      "id": 3,
      "name": "\u679C\u8336\u5BB6\u65CF",
      "sort": 5,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/23/ac7a2ff85b6944fe83df06a79cc19834.jpg",
      "products": [
        {
          "id": 903,
          "name": "\u6EE1\u676F\u7EA2\u67DA",
          "no": "2002116591295747",
          "description": "\u51B7670ml  \u70ED500ml \u7CBE\u9009\u9971\u6EE1\u7EA2\u67DA\u679C\u7C92\u5165\u8336\uFF0C\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\u6D0B\u6EA2\u8309\u8389\u82B1\u9999\u3002\u51B0\u6C99\u51CF\u5F31\u4E86\u7EA2\u67DA\u7684\u5FAE\u82E6\uFF0C\u66F4\u51F8\u663E\u8336\u5473\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 3,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 7,
          "images": [
            {
              "id": 110879,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/11/cb131fdf77a240759b8b7ca88b6cf60c.jpg"
            },
            {
              "id": 117018,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/a680c4a889db4348ac18073afd876d16.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u7CBE\u7B80",
          "is_enable": 1,
          "price": "25",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 23.58
        },
        {
          "id": 987,
          "name": "\u591A\u8089\u8461\u8404",
          "no": "2003233053569987",
          "description": "\u51B7670ml \u70ED500ml  \u7CBE\u9009\u723D\u8106\u590F\u9ED1\u8461\u8404\u5165\u8336\uFF0C\u4FDD\u7559\u679C\u8089\u5B8C\u6574\u8089\u611F\u3002\u642D\u914D\u6E05\u96C5\u7EFF\u598D\u8336\u5E95\u4E0E\u9187\u9999\u829D\u58EB\uFF0C\u9C9C\u723D\u53EF\u53E3\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 3,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 125859,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/23/a8cc4a72b43b434488f7be0a83b0ff10.jpg"
            },
            {
              "id": 125860,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/23/befbd052ffd14a109af3512d762ef7b3.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u7CBE\u7B80\u83DC\u5355",
          "is_enable": 0,
          "price": "30",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 28.3
        },
        {
          "id": 988,
          "name": "\u829D\u829D\u8393\u8393 \xAE",
          "no": "2003236541062275",
          "description": "\u51B7670ml \u70ED500ml \u9009\u7528\u5B9A\u5236\u8349\u8393\u642D\u914D\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\u65B0\u9C9C\u73B0\u5236\uFF0C\u8393\u9999\u6EE1\u6EA2\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 3,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 125863,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/23/6e368d7fa41d423eb08ea7f9824aed49.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u56FD\u5185-\u7CBE\u7B80",
          "is_enable": 0,
          "price": "32",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 30.19
        },
        {
          "id": 901,
          "name": "\u591A\u8089\u8292\u8292\u7518\u9732",
          "no": "2002112553238348",
          "description": "\u51B7/\u70ED500ml  \u7ECF\u5178\u8292\u8292\u4E0E\u6768\u679D\u7518\u9732\u7684\u7075\u611F\u78B0\u649E\uFF0C\u7CBE\u9009\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\uFF0C\u7206\u6C41\u7EA2\u67DA\u7C92\u649E\u4E0A\u5927\u5757\u8292\u8089\u3002\u70ED\u996E\u9ED8\u8BA4\u52A0\u5165\u828B\u5706\u6CE2\u6CE2\uFF0C\u4E0D\u542B\u8106\u6CE2\u6CE2\u3002",
          "label": "",
          "category_id": 3,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 135047,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/15/44ed201701ef406087100b0c1690daad.jpg"
            },
            {
              "id": 117036,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/de106edd904148f185f6273835be0baf.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u7CBE\u7B80\u83DC\u5355",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 1027,
          "name": "\u591A\u8089\u8292\u8292\u7518\u9732MAX",
          "no": "2004177218841779",
          "description": "\u51B7670ml \u591A\u8089\u8292\u8292\u7518\u9732\u5347\u7EA7\u5927\u676F\uFF0C\u679C\u8089\u66F4\u591A\u3002\u7ECF\u5178\u8292\u8292\u4E0E\u6768\u679D\u7518\u9732\u7684\u7075\u611F\u78B0\u649E\uFF0C\u7206\u6C41\u7EA2\u67DA\u7C92\u649E\u4E0A\u5927\u5757\u8292\u8089\uFF0C\u7CBE\u9009\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\uFF0C\u597D\u559D\u4E0D\u817B\u53E3\u3002",
          "label": "",
          "category_id": 3,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 145003,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/06/811f5f21b97b494baa7dd860e73ea3d2.jpg"
            },
            {
              "id": 136964,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/19/16acc3dcfc944f65a031192183ed79fa.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u4EBA\u6C14-\u7CBE\u9009",
          "is_enable": 0,
          "price": "32",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 30.19
        },
        {
          "id": 1025,
          "name": "\u8393\u8393\u8292\u8292\u7518\u9732",
          "no": "2004173099743868",
          "description": "\u51B7500ml \u8393\u8393\u548C\u8292\u8292\u7518\u9732\u7684\u9996\u6B21\u7075\u611F\u6DF7\u642D\u3002\u5F53\u5B63\u8349\u8393\u642D\u914D\u6930\u9999\u8292\u679C\u548C\u7EA2\u67DA\u679C\u7C92\uFF0C\u7CBE\u9009\u6E05\u65B0\u7EFF\u598D\u8336\u5E95\uFF0C\u4E00\u6B21\u5C1D\u9C9C\u4E24\u6B3E\u4EBA\u6C14\u996E\u54C1\u3002",
          "label": "",
          "category_id": 3,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 145e3,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/06/f59e648a91b646a0a240f57e8504a63a.jpg"
            },
            {
              "id": 136961,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/19/35254a5c17104f14b867118cbf5e22bc.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u5F53\u5B63-\u666E\u901A",
          "is_enable": 0,
          "price": "29",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 27.36
        },
        {
          "id": 902,
          "name": "\u829D\u829D\u8292\u8292",
          "no": "2002117627568550",
          "description": "\u51B7670ml \u9009\u7528\u5F53\u5B63\u8292\u679C\u642D\u914D\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\u65B0\u9C9C\u73B0\u5236\uFF0C\u6E05\u65B0\u7EF5\u5BC6\u3002\u5982\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002",
          "label": "",
          "category_id": 3,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 110878,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/11/bcfb2519560e422e87d5d6e42311ab33.jpg"
            },
            {
              "id": 117061,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/eb615f19fc7b4597b2bf2e7d72ecc49b.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u7CBE\u9009\u83DC\u5355",
          "is_enable": 0,
          "price": "32",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 30.19
        }
      ],
      "categoryAds": []
    },
    {
      "id": 1,
      "name": "\u829D\u829D\u8317\u8336",
      "sort": 6,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/21/3de570175dbb4c74a6291e1b6df4eb6a.jpg",
      "products": [
        {
          "id": 723,
          "name": "\u829D\u829D\u7EFF\u598D",
          "no": "1911069353676862",
          "description": "\u51B7/\u70ED500ml \u829D\u58EB\u5206\u88C5\u65E0\u6CD5\u9009\u62E9\u70E4\u9ED1\u7CD6\u3002\u559C\u8336\u5B9A\u5236\u7EFF\u8336\uFF0C\u8F83\u666E\u901A\u7EFF\u8336\uFF0C\u5C11\u4E86\u51E0\u5206\u6DA9\u6C14\uFF0C\u53E3\u611F\u6E05\u6F88\uFF0C\u8309\u8389\u9999\u6C14\u99A5\u90C1\u6021\u4EBA\u3002",
          "label": "",
          "category_id": 1,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 86967,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/06/426b9ffb61b54d109c5e0a2fb17e6dd2.jpg"
            },
            {
              "id": 116966,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/e15fc76af0d5474db3fd7ea6f7c3038e.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u6709\u8C46\u8C46\u5976\u76D6",
          "is_enable": 1,
          "price": "19",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 17.92
        },
        {
          "id": 726,
          "name": "\u829D\u829D\u91D1\u7389",
          "no": "1911062610264848",
          "description": "\u51B7/\u70ED500ml \u829D\u58EB\u5206\u88C5\u65E0\u6CD5\u9009\u62E9\u70E4\u9ED1\u7CD6\u3002\u559C\u8336\u5B9A\u5236\u4E4C\u9F99\uFF0C\u6E05\u65B0\u8336\u9999\u4E2D\u5E26\u6709\u6842\u82B1\u9999\u548C\u6DE1\u6DE1\u7684\u4E73\u9999\uFF0C\u99A5\u90C1\u8FF7\u4EBA\u3002",
          "label": "",
          "category_id": 1,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 86975,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/06/71fc31a5917849148bc363187ade15dc.jpg"
            },
            {
              "id": 117003,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/9b2cde9273b34263a4de537e6c7fcdae.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u6709\u8C46\u8C46\u5976\u76D6",
          "is_enable": 1,
          "price": "22",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 20.75
        },
        {
          "id": 728,
          "name": "\u829D\u829D\u91D1\u51E4\u8336\u738B",
          "no": "1911063020240079",
          "description": "\u51B7/\u70ED500ml \u829D\u58EB\u5206\u88C5\u65E0\u6CD5\u9009\u62E9\u70E4\u9ED1\u7CD6\u3002\u559C\u8336\u5B9A\u5236\u4E4C\u9F99\u8336\uFF0C\u9999\u6C14\u70AD\u7119\u6D53\u90C1\uFF0C\u5165\u5589\u56DE\u7518\uFF0C\u8336\u9999\u4F59\u97F5\u4E0D\u65AD\u3002",
          "label": "",
          "category_id": 1,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 86978,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/06/8c674061195c47abab7f0ba5389a9277.jpg"
            },
            {
              "id": 117006,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/55ae40fc3ddb4f34b637355fb05019e0.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u6709\u8C46\u8C46\u5976\u76D6",
          "is_enable": 1,
          "price": "22",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 20.75
        },
        {
          "id": 729,
          "name": "\u829D\u829D\u5AE3\u7EA22.0",
          "no": "1911064895831191",
          "description": "\u51B7/\u70ED 500ml \u829D\u58EB\u5206\u88C5\u65E0\u6CD5\u9009\u62E9\u70E4\u9ED1\u7CD6\u3002\u559C\u8336\u5B9A\u5236\u7EA2\u8336\uFF0C\u8336\u5E95\u5168\u65B0\u5347\u7EA7\u4E3A\u871C\u9999\u7EA2\u8336\uFF0C\u6C64\u8272\u7EA2\u8273\u660E\u4EAE\uFF0C\u53E3\u5473\u4E30\u5BCC\u6DF1\u6C89\u3002",
          "label": "",
          "category_id": 1,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 86979,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/06/66ee47abea144200ad9545038f07f3e1.jpg"
            },
            {
              "id": 117365,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/05/9bf19da3d15e47309857ca6f0a374a0f.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u6709\u8C46\u8C46\u5976\u76D6",
          "is_enable": 1,
          "price": "22",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 20.75
        }
      ],
      "categoryAds": []
    },
    {
      "id": 15,
      "name": "\u559C\u8336\u5496\u5561",
      "sort": 8,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/23/50609654ded746f28ea60485a7e715b5.jpg",
      "products": [
        {
          "id": 990,
          "name": "\u96EA\u5C71\u9999\u8349\u62FF\u94C1",
          "no": "2003273864428595",
          "description": "\u51B7500ml \u70ED360ml \u56E0\u70ED\u996E\u9C9C\u5976\u6CB9\u6613\u878D\uFF0C\u63A8\u8350\u9009\u62E9\u5206\u88C5\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9999\u8349\u725B\u5976\u62FF\u94C1\u4E0E\u9999\u8349\u9C9C\u5976\u6CB9\u96EA\u9876\u7075\u611F\u78B0\u649E\uFF0C\u7F00\u4EE5\u9165\u8106\u53EF\u53E3\u7684\u78A7\u6839\u679C\u788E\uFF0C\u6563\u53D1\u51FA\u67D4\u548C\u7684\u575A\u679C\u9999\u53CA\u5976\u9999\u3002",
          "label": "",
          "category_id": 15,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 127384,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/27/22757b7d429c49929da91462c19308ec.jpg"
            },
            {
              "id": 129024,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/01/627939658eff4a9cba5a848dac2d2956.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 79,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "29",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 27.36
        },
        {
          "id": 989,
          "name": "\u96EA\u5C71\u6469\u5361",
          "no": "2003271920921171",
          "description": "\u51B7500ml \u70ED360ml \u56E0\u70ED\u996E\u9C9C\u5976\u6CB9\u6613\u878D\uFF0C\u63A8\u8350\u9009\u62E9\u5206\u88C5\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u53E3\u611F\u6D53\u90C1\u7684\u53EF\u53EF\u725B\u5976\u6469\u5361\uFF0C\u4EE5\u5165\u53E3\u5373\u5316\u7684\u9999\u8349\u9C9C\u5976\u6CB9\u5C01\u9876\uFF0C\u518D\u8F7B\u6492\u4E0A\u53EF\u53EF\u7C89\uFF0C\u4EA4\u7EC7\u51FA\u66F4\u52A0\u4E30\u5BCC\u7684\u5496\u5561\u53E3\u611F\u3002",
          "label": "",
          "category_id": 15,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 129039,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/01/7a7b828bf69b4ad59a46ad9500c915e6.jpg"
            },
            {
              "id": 129025,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/01/41e2e384cc824a63aebf2fc8285ea580.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "29",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 27.36
        },
        {
          "id": 330,
          "name": "\u829D\u829D\u5496\u5561",
          "no": "1903209749549957",
          "description": "\u51B7500ml  \u70ED360ml  \u5496\u5561\u5916\u9001\u53EF\u80FD\u4F1A\u5F71\u54CD\u53E3\u611F\u3002\u610F\u5F0F\u5976\u5496\u4E0E\u559C\u8336\u829D\u58EB\u7684\u9ED8\u5951\u7ED3\u5408\uFF0C\u5E26\u6765\u66F4\u6D53\u90C1\u7684\u5976\u9999\u3002",
          "label": "",
          "category_id": 15,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 110986,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/12/0953921c70694dd08017c3566d21bb3e.jpg"
            },
            {
              "id": 117366,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/05/9ca5660ac7584711a1e687f880c17bd9.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "25",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 23.58
        },
        {
          "id": 332,
          "name": "\u5496\u5561\u6CE2\u6CE2\u51B0",
          "no": "1903204953514910",
          "description": "\u51B7480ml  \u70ED360ml  \u5496\u5561\u5916\u9001\u53EF\u80FD\u4F1A\u5F71\u54CD\u53E3\u611F\u3002\u73B0\u8403Espresso\u6C81\u5165\u7EC6\u5BC6\u51B0\u6C99\uFF0C\u4F50\u4EE5Q\u5F39\u9ED1\u7CD6\u6CE2\u6CE2\uFF0C\u6DF7\u642D\u51FA\u65B0\u683C\u8C03\u3002",
          "label": "",
          "category_id": 15,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 83013,
              "url": "https://go.cdn.heytea.com/storage/product/2019/10/17/3db0e2c514574207972f6760b6aec5d3.jpg"
            },
            {
              "id": 117130,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/b264c852833d4622ace76ae374f5d7d7.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "25",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 23.58
        },
        {
          "id": 786,
          "name": "\u62FF\u94C1(\u65E0\u7CD6)",
          "no": "1912139005357496",
          "description": "\u70ED360ML \u51B7500ML\u3002\u9009\u7528\u4F18\u8D28\u963F\u62C9\u6BD4\u5361\u5496\u5561\u8C46\u62FC\u914D\uFF0C\u73B0\u8403\u5496\u5561\u878D\u5165\u84B8\u716E\u725B\u5976\uFF0C\u5448\u73B0\u7ECF\u5178\u62FF\u94C1\u7684\u9999\u7EAF\u3002",
          "label": "",
          "category_id": 15,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 132284,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/07/0347a8c6fbee4c9c9043fff1ab3a39dc.jpg"
            },
            {
              "id": 132393,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/07/9f200190cba74818b933e8c19efbf267.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "19",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 17.92
        },
        {
          "id": 787,
          "name": "\u7F8E\u5F0F(\u65E0\u7CD6)",
          "no": "1912139775970865",
          "description": "\u70ED360ML \u51B7500ML\u3002\u9009\u7528\u4F18\u8D28\u963F\u62C9\u6BD4\u5361\u5496\u5561\u8C46\u62FC\u914D\uFF0C\u539F\u8C46\u73B0\u78E8\uFF0C\u51B2\u6CE1\u51FA\u7EAF\u7CB9\u9971\u6EE1\u7684\u5496\u5561\u9999\u6C14\u3002",
          "label": "",
          "category_id": 15,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 132285,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/07/baedb7f7c90343c68490f6ef3b56b39e.jpg"
            },
            {
              "id": 132391,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/07/97facddd55fd4235bc6be7a6fbe96251.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 82,
              "name": "\u542B\u5496\u5561",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "13",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 12.26
        }
      ],
      "categoryAds": []
    },
    {
      "id": 7,
      "name": "\u70ED\u996E\u63A8\u8350",
      "sort": 9,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/23/72b2d1e753464b5a837618e24bc857c3.jpg",
      "products": [
        {
          "id": 651,
          "name": "\u70ED\u963F\u534E\u7530\u6CE2\u6CE2",
          "no": "1910180943088468",
          "description": "500ml \u559C\u8336\xD7\u963F\u534E\u7530\u8054\u540D\u6B3E\uFF0C\u53E3\u611F\u8F83\u751C\u817B\u3002\u9897\u9897\u8F6F\u7CEF\u7684\u9ED1\u7CD6\u6CE2\u6CE2\u5760\u5165\u9C9C\u725B\u5976\uFF0C\u7ED3\u5408\u6D3B\u529B\u6EE1\u6EE1\u7684\u963F\u534E\u7530\u9177\u8106\u9171\u3001\u963F\u534E\u7530\u8106\u8106\u4E0E\u9ED1\u7CD6\u5E03\u857E\uFF0C\u53E3\u53E3\u9999\u8106\u3002\u5982\u9700\u9009\u8D2D\u51B7\u996E\uFF0C\u8BF7\u5728\u6CE2\u6CE2\u5BB6\u65CF\u70B9\u9009\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 94128,
              "url": "https://go.cdn.heytea.com/storage/product/2019/12/06/47a76b8d425a41ff988b12d4c1f16e5f.jpg"
            },
            {
              "id": 116577,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/35198bd91dc24b02adf8c52a7381b3a3.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 86,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "28",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 26.42
        },
        {
          "id": 652,
          "name": "\u70ED\u5976\u8336\u6CE2\u6CE2",
          "no": "1910189005370634",
          "description": "500ml  \u7ECF\u5178\u5976\u8336\u56DE\u5F52\uFF0C\u6D53\u90C1\u963F\u8428\u59C6\u7EA2\u8336\u642D\u914D\u7EAF\u9C9C\u725B\u4E73\u6253\u5236\uFF0C\u9ED1\u7CD6\u6CE2\u6CE2\u4E0E\u5E03\u857E\u7684\u7EC4\u5408\u8BA9\u53E3\u611F\u5C42\u6B21\u66F4\u52A0\u4E30\u5BCC\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 94132,
              "url": "https://go.cdn.heytea.com/storage/product/2019/12/06/72bbb1e88e644114ab4fd66575e35efb.jpg"
            },
            {
              "id": 116597,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/897eabd7269d4173b5bb7596eec497ad.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u56FD\u5185",
          "is_enable": 1,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 1071,
          "name": "\u70ED\u9999\u8349\u62FF\u94C1",
          "no": "2005189358606057",
          "description": "\u70ED360ml\u3002\u9009\u7528\u4F18\u8D28\u963F\u62C9\u6BD4\u5361\u5496\u5561\u8C46\u62FC\u914D\uFF0C\u6E05\u65B0\u9999\u8349\uFF0C\u98CE\u5473\u878D\u4E8E\u73B0\u8403\u5496\u5561\u62FF\u94C1\uFF0C\u9999\u6C14\u99A5\u90C1\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 7,
          "images": [
            {
              "id": 150321,
              "url": "https://go.cdn.heytea.com/storage/product/2020/05/18/3df5323771164e91a34a9b66b5a4a93f.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "29",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 27.36
        },
        {
          "id": 843,
          "name": "\u70ED\u62FF\u94C1(\u65E0\u7CD6)",
          "no": "2001020664302393",
          "description": "360ML  \u9009\u7528\u4F18\u8D28\u963F\u62C9\u6BD4\u5361\u5496\u5561\u8C46\u62FC\u914D\uFF0C\u73B0\u8403\u5496\u5561\u878D\u5165\u84B8\u716E\u725B\u5976\uFF0C\u5448\u73B0\u7ECF\u5178\u62FF\u94C1\u7684\u9999\u7EAF\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 8,
          "images": [
            {
              "id": 132286,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/07/b0310c0436e142b8a137e459cba41872.jpg"
            },
            {
              "id": 132394,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/07/0d611cf4ca9a4a78996f5f6ae58cc94e.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "19",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 17.92
        },
        {
          "id": 175,
          "name": "\u70ED\u6EE1\u676F\u7EA2\u67DA",
          "no": "1812195149541014",
          "description": "500ml \u7CBE\u9009\u9971\u6EE1\u7EA2\u67DA\u679C\u7C92\u5165\u8336\uFF0C\u6E05\u5E7D\u7EFF\u598D\u8336\u5E95\u6D0B\u6EA2\u8309\u8389\u82B1\u9999\u3002\u70ED\u6C14\u6C24\u6C32\u7684\u8336\u6C64\uFF0C\u5E26\u51FA\u7EA2\u67DA\u7684\u9178\u751C\u3002\u82E5\u9009\u62E9\u751C\u83CA\u7CD6\uFF0C\u9047\u9178\u6027\u6C34\u679C\u4F1A\u4EA7\u751F\u6CE1\u6CAB\uFF0C\u5C5E\u6B63\u5E38\u73B0\u8C61\u3002\u5982\u9700\u9009\u8D2D\u51B7\u996E\uFF0C\u8BF7\u5728\u679C\u8336\u5BB6\u65CF\u5185\u9009\u8D2D\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 9,
          "images": [
            {
              "id": 94137,
              "url": "https://go.cdn.heytea.com/storage/product/2019/12/06/53dfa505c0374a3c8c1e591ef5f62cfa.jpg"
            },
            {
              "id": 117024,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/02b673e5db164b0cb3f86f94f551de51.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "25",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 23.58
        },
        {
          "id": 780,
          "name": "\u70ED\u7A7A\u6C14\u5DE7\u514B\u529B\u6CE2\u6CE2",
          "no": "1912127891374933",
          "description": "500ml  \u56E0\u70ED\u996E\u9C9C\u5976\u6CB9\u6613\u878D\uFF0C\u63A8\u8350\u9009\u62E9\u5206\u88C5\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9ED8\u8BA4\u70ED\u996E\uFF0C\u51B7\u70ED\u7686\u5B9C\u3002\u6CD5\u8299\u5A1C\u5DE7\u514B\u529B\u53E3\u611F\u6D53\u90C1\u987A\u6ED1\uFF0C\u9C9C\u5976\u6CB9\u4E0E\u7A7A\u6C14\u5DE7\u514B\u529B\u4EA4\u7EC7\u51FA\u5723\u8BDE\u597D\u5473\u3002\u996E\u7528\u6B65\u9AA4\uFF1A1.\u5148\u7528\u642D\u914D\u7684\u5C0F\u52FA\u5403\u6389\u5976\u6CB9\u548C\u7A7A\u6C14\u5DE7\u514B\u529B\uFF1B2.\u518D\u63D2\u5165\u5438\u7BA1\u5927\u53E3\u542E\u5438\u6D53\u9999\u5DE7\u514B\u529B\u548C\u9ED1\u6CE2\u6CE2\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 106302,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/15/38ff7925b24e45f396a53055be81e0b0.jpg"
            },
            {
              "id": 116593,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/32ebc886275f4bd3b1822378c16bb880.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 86,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "28",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 26.42
        },
        {
          "id": 781,
          "name": "\u70EDm\u8C46\u6CE2\u6CE2",
          "no": "1912127683531223",
          "description": "500ml  \u56E0\u70ED\u996E\u9C9C\u5976\u6CB9\u6613\u878D\uFF0C\u63A8\u8350\u9009\u62E9\u5206\u88C5\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9ED8\u8BA4\u70ED\u996E\uFF0C\u51B7\u70ED\u7686\u5B9C\u3002\u6CD5\u8299\u5A1C\u5DE7\u514B\u529B\u53E3\u611F\u6D53\u90C1\u987A\u6ED1\uFF0C\u9C9C\u5976\u6CB9\u9876\u662Fm\u8C46\u4EEC\u7684\u5947\u5999\u6E38\u4E50\u56ED\u3002\u996E\u7528\u6B65\u9AA4\uFF1A1.\u5148\u7528\u642D\u914D\u7684\u5C0F\u52FA\u5403\u6389\u5976\u6CB9\u548Cm\u8C46\uFF1B2.\u518D\u63D2\u5165\u5438\u7BA1\u5927\u53E3\u542E\u5438\u6D53\u9999\u5DE7\u514B\u529B\u548C\u9ED1\u6CE2\u6CE2\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 106303,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/15/bf760fd398bf4ae08b1c556550e385e6.jpg"
            },
            {
              "id": 116574,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/7263f087592a428a8581d4e8c3f88e75.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 86,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "29",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 27.36
        },
        {
          "id": 283,
          "name": "\u70ED\u828B\u6CE5\u6CE2\u6CE2\u9C9C\u5976",
          "no": "1901144910150975",
          "description": "500ml \u56E0\u828B\u6CE5\u5BB9\u6613\u6C27\u5316\uFF0C\u4E3A\u4FDD\u6301\u6700\u4F73\u4F53\u9A8C\uFF0C\u8BF7\u52A1\u5FC5\u4E8E\u4E00\u5C0F\u65F6\u5185\u996E\u7528\u5B8C\u6BD5\u3002\u8336\u5E95\u53EF\u9009\u9C9C\u5976/\u6930\u5976\u3002\u624B\u6363\u65B0\u9C9C\u828B\u6CE5\u878D\u5165\u987A\u6ED1\u9C9C\u5976\uFF0C\u518D\u52A0\u5165\u9897\u9897Q\u5F39\u7684\u828B\u6CE5\u6CE2\u6CE2\uFF0C\u7EF5\u5BC6\u4E0E\u6DA6\u6CFD\uFF0C\u5C3D\u5728\u8FD9\u4E00\u676F\u3002\u5982\u9700\u9009\u8D2D\u51B7\u996E\uFF0C\u8BF7\u5728\u6CE2\u6CE2\u5BB6\u65CF\u70B9\u9009\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 106698,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/16/546e45531ff54693af2fa84cbcab8dff.jpg"
            },
            {
              "id": 116601,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/aaef384a606640fbaa4c5f35ad3291e1.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 70,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u4E0D\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u901A\u7528",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 734,
          "name": "\u70ED\u70E4\u9ED1\u7CD6\u6CE2\u6CE2\u9C9C\u5976",
          "no": "1911118126262032",
          "description": "500ml  \u9ED1\u7CD6\u73CD\u73E0\u642D\u914D\u987A\u6ED1\u9C9C\u5976\uFF0C\u6CE2\u6CE2\u7CFB\u5217\u5976\u5473\u8F83\u4E3A\u6D53\u90C1\uFF0C\u4E0D\u559C\u6B22\u6D53\u539A\u53E3\u611F\u7684\u670B\u53CB\u614E\u70B9\u3002",
          "label": "",
          "category_id": 7,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 94130,
              "url": "https://go.cdn.heytea.com/storage/product/2019/12/06/e1f41f7109294b3b857b8bb170769ff7.jpg"
            },
            {
              "id": 116589,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/9712450d1eda45ea8a421dfc05e4a824.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 70,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u4E0D\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "21",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 19.81
        }
      ],
      "categoryAds": []
    },
    {
      "id": 6,
      "name": "\u7EAF\u8336",
      "sort": 10,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/21/43c745f3ead64208830401107c44eef2.jpg",
      "products": [
        {
          "id": 27,
          "name": "\u7EAF\u7EFF\u598D",
          "no": "1902229954555253",
          "description": "\u51B7/\u70ED500ml\uFF08\u7EAF\u8336\u7CFB\u5217\u65E0\u829D\u58EB\uFF09\u559C\u8336\u5B9A\u5236\u7EFF\u8336\uFF0C\u6C14\u8D28\u6DE1\u96C5\u82B3\u5E7D\uFF0C\u6563\u53D1\u7740\u6E05\u9038\u7684\u8309\u8389\u9999\u6C14\uFF0C\u99A5\u90C1\u6021\u4EBA\u3002",
          "label": "",
          "category_id": 6,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 82988,
              "url": "https://go.cdn.heytea.com/storage/product/2019/10/17/a2544f719c444feb92bffb1e0c806b15.jpg"
            },
            {
              "id": 118894,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/07/a9633f04b796445cb7f06a3f35eacc6e.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "13",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 12.26
        },
        {
          "id": 281,
          "name": "\u7EAF\u91D1\u7389",
          "no": "1901104953102101",
          "description": "\u51B7/\u70ED500ml\uFF08\u7EAF\u8336\u7CFB\u5217\u65E0\u829D\u58EB\uFF09\u559C\u8336\u5B9A\u5236\u4E4C\u9F99\uFF0C\u6E05\u65B0\u8336\u9999\u4E2D\u5E26\u6709\u6842\u82B1\u9999\u548C\u6DE1\u6DE1\u7684\u4E73\u9999\uFF0C\u99A5\u90C1\u8FF7\u4EBA\u3002",
          "label": "",
          "category_id": 6,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 82989,
              "url": "https://go.cdn.heytea.com/storage/product/2019/10/17/7fc2a04e49c64d4e9bacbd927c0b7831.jpg"
            },
            {
              "id": 118896,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/07/0c371c50084a43e78378ae651d043cc8.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "16",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 15.09
        },
        {
          "id": 29,
          "name": "\u7EAF\u91D1\u51E4\u8336\u738B",
          "no": "1902225410210057",
          "description": "\u51B7/\u70ED500ml\uFF08\u7EAF\u8336\u7CFB\u5217\u65E0\u829D\u58EB\uFF09\u559C\u8336\u5B9A\u5236\u4E4C\u9F99\u8336\uFF0C\u9999\u6C14\u70AD\u7119\u6D53\u90C1\uFF0C\u5165\u5589\u56DE\u7518\uFF0C\u8336\u9999\u4F59\u97F5\u4E0D\u65AD\u3002",
          "label": "",
          "category_id": 6,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 82990,
              "url": "https://go.cdn.heytea.com/storage/product/2019/10/17/ebd9855a95c8409786028992347908ab.jpg"
            },
            {
              "id": 118897,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/07/d0ec2ad62d034109beded6cc0cf7e9f4.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "16",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 15.09
        },
        {
          "id": 31,
          "name": "\u7EAF\u5AE3\u7EA22.0",
          "no": "1902229953995457",
          "description": "\u51B7/\u70ED500ml\uFF08\u7EAF\u8336\u7CFB\u5217\u65E0\u829D\u58EB\uFF09\u559C\u8336\u5B9A\u5236\u7EA2\u8336\uFF0C\u8336\u5E95\u5168\u65B0\u5347\u7EA7\u4E3A\u871C\u9999\u7EA2\u8336\uFF0C\u6C64\u8272\u7EA2\u8273\u660E\u4EAE\uFF0C\u53E3\u5473\u4E30\u5BCC\u6DF1\u6C89\u3002",
          "label": "",
          "category_id": 6,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 83919,
              "url": "https://go.cdn.heytea.com/storage/product/2019/10/22/72cffdd3f5e04521bbdefcbd4adb752d.jpg"
            },
            {
              "id": 118898,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/07/84d30cb807ac48ccb3621318eb049e8d.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "16",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 15.09
        },
        {
          "id": 1049,
          "name": "\u7EAF\u5976\u8336",
          "no": "2004304604998948",
          "description": "\u51B7/\u70ED500ml \u7CBE\u9009\u963F\u8428\u59C6\u7EA2\u8336\u642D\u914D\u725B\u5976\u8C03\u5236\uFF0C\u8336\u9999\u6D53\u90C1\uFF0C\u53E3\u611F\u5982\u4E1D\u822C\u987A\u6ED1\u3002",
          "label": "",
          "category_id": 6,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 7,
          "images": [
            {
              "id": 141380,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/30/87b82a1b87cc4858a8b39d53e29ed690.jpg"
            },
            {
              "id": 141374,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/30/c9c4430e4e55453bbdf318467867ae1d.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "22",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 20.75
        },
        {
          "id": 904,
          "name": "\u51B7\u8403\u6842\u82B1\u7EFF",
          "no": "2002116613548083",
          "description": "\u51B7\u8403\u8336\u4E0D\u7528\u7B49\u5F85\u53EB\u53F7\uFF0C\u53EF\u76F4\u63A5\u5411\u5E97\u5458\u51FA\u793A\u540E\u9886\u53D6\u3002\u7EC6\u5AE9\u8336\u82BD\u4E0E\u6842\u82B1\u4E00\u540C\u4E8E\u51B7\u9732\u4E2D\u8212\u5C55\u6C90\u6D74\u516B\u5C0F\u65F6\uFF0C\u5236\u5F97\u8336\u6C64\u6E05\u9EC4\u900F\u4EAE\uFF0C\u6ECB\u5473\u9C9C\u723D\u3002",
          "label": "",
          "category_id": 6,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 110880,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/11/f8adbf0d089e45ddaddc1e84547bcdf7.jpg"
            },
            {
              "id": 116987,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/04/9734c2930f964a40a098413e435d0944.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2105,
              "name": "\u51B7\u8403\u6842\u82B1\u7EFF",
              "appointable": true,
              "is_join_queue": 0,
              "is_now_making": 1
            }
          ],
          "labels": [
            {
              "id": 67,
              "name": "\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "1",
          "remark": "\u56FD\u5185-\u7EAF\u8336",
          "is_enable": 0,
          "price": "9",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 8.49
        },
        {
          "id": 1048,
          "name": "\u7EAF\u53EF\u53EF",
          "no": "2004300946915874",
          "description": "\u51B7/\u70ED500ml \u9187\u9999\u53EF\u53EF\u642D\u914D\u725B\u5976\u8C03\u5236\uFF0C\u4EA4\u7EC7\u51FA\u7ECF\u5178\u53EF\u53EF\u98CE\u5473\u3002",
          "label": "",
          "category_id": 6,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 141370,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/30/e0cbafb366934472bb72dca1d9882779.jpg"
            },
            {
              "id": 141375,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/30/273d81568dc045eb8d3e17f9dbad52b5.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "23",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 21.7
        }
      ],
      "categoryAds": []
    },
    {
      "id": 9,
      "name": "\u52A0\u6599",
      "sort": 11,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/21/19047118303443b09ba73f82c54e4f03.jpg",
      "products": [
        {
          "id": 48,
          "name": "\u829D\u58EB",
          "no": "1908069651779130",
          "description": "1.\u52A0\u5728\u996E\u54C1\u91CC\uFF08\u8BF7\u5907\u6CE8\uFF0C\u9700\u8981\u52A0\u6599\u662F\u54EA\u676F\u996E\u54C1\uFF092.\u5355\u72EC\u5206\u88C5\uFF081\u5143\u6253\u5305\u8D39\uFF09",
          "label": "\u52A0\u6599",
          "category_id": 9,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 60,
              "url": "https://go.cdn.heytea.com/storage/products/2018/03/22/BQiF2x5F5UHpdyrWGuomkha6cHCzajwacbSzJWrU.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "6",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 5.66
        },
        {
          "id": 51,
          "name": "\u52A0\u6599\u51B0\u6DC7\u6DCB",
          "no": "1908066825277032",
          "description": "\u4E0D\u662F\u5355\u72EC\u5403\u7684\u51B0\u6DC7\u6DCB\uFF0C\u5982\u9700\u8D2D\u4E70\u76F4\u63A5\u5403\u7684\u51B0\u6DC7\u6DCB\u8BF7\u5728\u201C\u559C\u8336\u5236\u51B0\u201D\u7CFB\u5217\u9009\u8D2D\u3002\u6E29\u99A8\u63D0\u793A\uFF1A\u51B0\u6DC7\u6DCB\u8FD0\u9001\u9014\u4E2D\u6613\u878D\u5316\uFF0C\u8BF7\u914C\u60C5\u52A0\u8D2D\u30021.\u52A0\u5728\u996E\u54C1\u91CC\uFF08\u8BF7\u60A8\u52A1\u5FC5\u5907\u6CE8\u9700\u8981\u52A0\u6599\u662F\u54EA\u676F\u996E\u54C1\uFF092.\u5355\u72EC\u5206\u88C5\uFF081\u5143\u6253\u5305\u8D39\uFF09",
          "label": "\u51B0\u6FC0\u6DCB",
          "category_id": 9,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 133116,
              "url": "https://go.cdn.heytea.com/storage/product/2020/04/09/c912c1ab408b4003ada51a1e827f549e.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "6",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 5.66
        },
        {
          "id": 95,
          "name": "\u8106\u6CE2\u6CE2",
          "no": "1908065534921229",
          "description": "\u8106\u6CE2\u6CE2\u65E0\u6CD5\u6DFB\u52A0\u5728\u70ED\u996E\u91CC\uFF0C\u6BD4\u8F83\u9002\u5408\u6DFB\u52A0\u5728\u6C34\u679C\u7C7B\u996E\u54C1\u4E2D\u30021.\u52A0\u5728\u996E\u54C1\u91CC\uFF08\u8BF7\u60A8\u52A1\u5FC5\u5907\u6CE8\uFF0C\u9700\u8981\u52A0\u6599\u662F\u54EA\u676F\u996E\u54C1\uFF092.\u5355\u72EC\u5206\u88C5\uFF081\u5143\u6253\u5305\u8D39\uFF09",
          "label": "\u52A0\u6599",
          "category_id": 9,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 192,
              "url": "https://go.cdn.heytea.com/storage/products/2018/07/15/JUCyrE0xWBQJx2h702r36Hroj9iIvk1Sx8I4xqHU.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "3",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 2.83
        },
        {
          "id": 52,
          "name": "\u7EA2\u67DA\u679C\u7C92",
          "no": "1908064628880923",
          "description": "1.\u52A0\u5728\u996E\u54C1\u91CC\uFF08\u8BF7\u5907\u6CE8\uFF0C\u9700\u8981\u52A0\u6599\u662F\u54EA\u676F\u996E\u54C1\uFF092.\u5355\u72EC\u5206\u88C5\uFF081\u5143\u6253\u5305\u8D39\uFF09",
          "label": "\u52A0\u6599",
          "category_id": 9,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 78,
              "url": "https://go.cdn.heytea.com/storage/products/2018/05/03/qOcLwgnk2Ag0yXKrlhgv4DGViu3T6xzEwho753il.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [],
          "is_premade": "1",
          "remark": "",
          "is_enable": 1,
          "price": "2",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 1.89
        },
        {
          "id": 89,
          "name": "\u9ED1\u6CE2\u6CE2",
          "no": "1908060875032077",
          "description": "\u9ED1\u6CE2\u6CE2\u56E0\u4E3A\u53E3\u5473\u4E0D\u642D\uFF0C\u65E0\u6CD5\u6DFB\u52A0\u5728\u4EFB\u4F55\u542B\u6C34\u679C\u7684\u996E\u54C1\u91CC\u3002\u7531\u4E8E\u9ED1\u6CE2\u6CE2\u672C\u8EAB\u81EA\u5E26\u751C\u5EA6\uFF0C\u8FD8\u8BF7\u914C\u60C5\u8C03\u6574\u996E\u54C1\u751C\u5EA6\u30021.\u52A0\u5728\u996E\u54C1\u91CC\uFF08\u8BF7\u60A8\u52A1\u5FC5\u5907\u6CE8\uFF0C\u9700\u8981\u52A0\u6599\u662F\u54EA\u676F\u996E\u54C1\uFF092.\u5355\u72EC\u5206\u88C5\uFF081\u5143\u6253\u5305\u8D39\uFF09",
          "label": "\u52A0\u6599",
          "category_id": 9,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 163,
              "url": "https://go.cdn.heytea.com/storage/products/2018/06/12/7STwzMTlbwolNHyOeTZHoEfOWZPp7yyEUUiwLLRx.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "2",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 1.89
        },
        {
          "id": 46,
          "name": "\u828B\u5706\u6CE2\u6CE2",
          "no": "1908063932379542",
          "description": "1.\u52A0\u5728\u996E\u54C1\u91CC\uFF08\u8BF7\u5907\u6CE8\uFF0C\u9700\u8981\u52A0\u6599\u662F\u54EA\u676F\u996E\u54C1\uFF092.\u5355\u72EC\u5206\u88C5\uFF081\u5143\u6253\u5305\u8D39\uFF09",
          "label": "\u52A0\u6599",
          "category_id": 9,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 816,
              "url": "https://go.cdn.heytea.com/storage/products/2018/10/08/zyRESIONRRKD93SzsK82Bd4bbCCMwmmvuLeXbMVj.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "3",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.06,
          "un_include_tax_price": 2.83
        }
      ],
      "categoryAds": []
    },
    {
      "id": 59,
      "name": "\u5171\u540C\u6297\u75AB",
      "sort": 12,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/21/529845ef52584ca1adca3af88ebf1c66.jpg",
      "products": [
        {
          "id": 868,
          "name": "\u65E0\u63A5\u89E6\u914D\u9001",
          "no": "2001147783071999",
          "description": "\u9632\u75AB\u671F\u95F4\uFF0C\u60A8\u53EF\u901A\u8FC7\u8BA2\u5355\u5907\u6CE8\u53CA\u7535\u8BDD\u544A\u77E5\u7B49\u65B9\u5F0F\uFF0C\u5F15\u5BFC\u9A91\u624B\u5C06\u5916\u5356\u5546\u54C1\u653E\u5728\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u4F8B\u5982\uFF1A\u60AC\u6302\u95E8\u628A\u624B\u3001\u653E\u7F6E\u5927\u5802\u684C\u9762\uFF0C\u907F\u514D\u63A5\u89E6\uFF0C\u964D\u4F4E\u98CE\u9669\u3002\u7531\u4E8E\u8336\u996E\u5747\u4E3A\u73B0\u70B9\u73B0\u5236\uFF0C\u9AD8\u5CF0\u671F\u5916\u9001\u65F6\u95F4\u9884\u8BA1\u4E3A1\u5C0F\u65F6\u5DE6\u53F3\uFF0C\u5EFA\u8BAE\u60A8\u63D0\u524D\u70B9\u5355\u3002\u5982\u679C\u60A8\u6709\u4EFB\u4F55\u5EFA\u8BAE\u6216\u9047\u5230\u914D\u9001\u3001\u6492\u6F0F\u7B49\u95EE\u9898\uFF0C\u53EF\u62E8\u6253\u672C\u5E97\u7535\u8BDD\u53CD\u9988\uFF08\u9AD8\u5CF0\u671F\u53EF\u80FD\u4F1A\u51FA\u73B0\u5FD9\u7EBF\uFF0C\u8FD8\u8BF7\u8C05\u89E3\uFF09\uFF0C\u4E5F\u53EF\u524D\u5F80\u559C\u8336GO-\u6211\u7684-\u8054\u7CFB\u5BA2\u670D\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E3A\u60A8\u5904\u7406\u3002",
          "label": "",
          "category_id": 59,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 106625,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/16/a70891bef83a4aa2b0f7c5b7d7ca1fd5.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2040,
              "name": "\u65E0\u63A5\u89E6\u914D\u9001",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 884,
          "name": "\u65E5\u5E38\u9632\u75AB",
          "no": "2001291964122103",
          "description": "1.\u5C3D\u91CF\u907F\u514D\u51FA\u95E8\uFF0C\u51FA\u95E8\u5FC5\u987B\u6234\u4E0A\u53E3\u7F69\uFF1B2.\u907F\u514D\u5728\u65E0\u4FDD\u62A4\u7684\u60C5\u51B5\u4E0B\u63A5\u89E6\u5BB6\u79BD\u5BB6\u755C\uFF1B3.\u70F9\u5236\u65F6\u5F7B\u5E95\u716E\u719F\u8089\u7C7B\u548C\u86CB\u7C7B\uFF1B4.\u54B3\u55FD\u548C\u6253\u55B7\u568F\u65F6\u4F7F\u7528\u7EB8\u5DFE\u6216\u5F2F\u66F2\u624B\u8098\u63A9\u76D6\u53E3\u9F3B\uFF0C\u7ACB\u523B\u6D88\u6BD2\u53CC\u624B\uFF1B5.\u591A\u559D\u6E29\u6C34\uFF0C\u4FDD\u6301\u5589\u5499\u6E7F\u6DA6\uFF1B6.\u52E4\u6D17\u624B\u52E4\u6D88\u6BD2\uFF1B7.\u89C4\u5F8B\u4F5C\u606F\u3002",
          "label": "",
          "category_id": 59,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 109315,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/29/59c79fe328ce49c98b469e5e3893bc69.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2075,
              "name": "\u65E5\u5E38\u9632\u75AB",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 887,
          "name": "\u95E8\u5E97\u9632\u75AB",
          "no": "2001290337601885",
          "description": "1.\u5E97\u5458\u6BCF\u65E5\u6D4B\u91CF\u4F53\u6E29\uFF0C\u5168\u5929\u4F69\u6234\u53E3\u7F69\u624B\u5957\uFF0C\u6BCF\u5C0F\u65F6\u6D17\u624B\u6D88\u6BD2\u30022.\u6BCF\u5C0F\u65F6\u6D88\u6BD2\u5E97\u5185\u53EF\u63A5\u89E6\u7269\uFF0C\u6BCF\u56DB\u5C0F\u65F6\u6E05\u6D17\u6D88\u6BD2\u9910\u5177\u30023.\u6700\u5927\u7A0B\u5EA6\u4FDD\u6301\u95E8\u5E97\u901A\u98CE\u900F\u6C14\u30024.\u95E8\u5E97\u73B0\u4EC5\u63A5\u53D7\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u70B9\u5355\uFF0C\u964D\u4F4E\u63A5\u89E6\u9891\u6B21\u30025.\u987E\u5BA2\u53CA\u9A91\u624B\u987B\u4F69\u6234\u53E3\u7F69\u65B9\u53EF\u8FDB\u5E97\u30026.\u9A91\u624B\u8FDB\u5E97\u524D\u6D4B\u91CF\u4F53\u6E29\uFF0C\u6240\u6709\u5916\u5356\u8BA2\u5355\u91C7\u53D6\u65E0\u63A5\u89E6\u914D\u9001\u3002\u6211\u4EEC\u5E0C\u671B\u4E3A\u5927\u5BB6\u63D0\u4F9B\u5B89\u5168\u7684\u73AF\u5883\uFF0C\u6109\u5FEB\u559D\u8336\u3002",
          "label": "",
          "category_id": 59,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 109320,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/29/fce916a50b5b46bdb31e862fe50f59b5.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2078,
              "name": "\u95E8\u5E97\u9632\u75AB",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 886,
          "name": "\u533B\u62A4\u5173\u6000 \u4F18\u5148\u5236\u4F5C",
          "no": "2001296678335151",
          "description": "\u6240\u6709\u533B\u9662\u548C\u9632\u75AB\u4E2D\u5FC3\u7684\u5916\u9001\u8BA2\u5355\uFF0C\u6211\u4EEC\u90FD\u5C06\u4E88\u4EE5\u4F18\u5148\u5236\u4F5C\uFF0C\u5C3D\u5FAE\u8584\u4E4B\u529B\u4E3A\u4E00\u7EBF\u533B\u751F\u548C\u62A4\u58EB\u63D0\u4F9B\u4E00\u4E9B\u652F\u6301\u3002\u613F\u533B\u52A1\u4EBA\u5458\u4EEC\u5E73\u5B89\u51EF\u65CB\u3002",
          "label": "",
          "category_id": 59,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 109319,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/29/f57d3859f66b4ffe9a43e641d023fc2b.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 2077,
              "name": "\u533B\u62A4\u5173\u6000 \u4F18\u5148\u5236\u4F5C",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        }
      ],
      "categoryAds": []
    },
    {
      "id": 8,
      "name": "\u7075\u611F\u63D0\u793A",
      "sort": 13,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/21/6d5e68f5b2bd4fa2bb50f94e6ac0a512.jpg",
      "products": [
        {
          "id": 386,
          "name": "\u597D\u679C",
          "no": "1905133973948690",
          "description": "\u9009\u7528\u6C34\u679C\u6216nfc(100%\u9C9C\u69A8\u975E\u6D53\u7F29\u8FD8\u539F)\u9C9C\u679C\u6C41\uFF0C\u4E0D\u6DFB\u52A0\u4EFB\u4F55\u8272\u7D20\uFF0C\u9999\u7CBE\u3002\u996E\u54C1\u989C\u8272\uFF08\u5982\u7C89\u8272\uFF09\u5B8C\u5168\u4F7F\u7528\u65B0\u9C9C\u6C34\u679C\u8C03\u8272\u3002\u56E0\u9C9C\u679C\u5177\u6709\u5DEE\u5F02\u6027\uFF0C\u989C\u8272\uFF0C\u53E3\u5473\u6709\u65F6\u4F1A\u6709\u7EC6\u5FAE\u5DEE\u522B\uFF0C\u5E0C\u671B\u80FD\u7406\u89E3~",
          "label": "",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 43204,
              "url": "https://go.cdn.heytea.com/product/2019/05/13/tmp/5ff509ec0bef4d17845fc8f788240945.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1299,
              "name": "\u597D\u679C",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 41,
          "name": "\u8054\u7CFB\u6211\u4EEC",
          "no": "1905150527205146",
          "description": "\u5982\u6709\u914D\u9001\u3001\u6D12\u6F0F\u3001\u53E3\u5473\u7B49\u95EE\u9898\uFF0C\u8BF7\u5C3D\u5FEB\u8054\u7CFB\u6211\u4EEC\uFF0C\u6211\u4EEC\u5C06\u5C3D\u5FEB\u89E3\u51B3\u4E3A\u60A8\u91CD\u505A\u3002",
          "label": "\u5176\u4ED6",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 50,
              "url": "https://go.cdn.heytea.com/storage/products/2018/03/09/ygQajpQgwl61yLFjiPNlKb27irYd9Wrkwf8udrZG.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1321,
              "name": "\u8054\u7CFB\u6211\u4EEC",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 42,
          "name": "\u661F\u7403\u987B\u77E5",
          "no": "1905274655799328",
          "description": "1.\u7531\u4E8E\u9C9C\u5976\u6253\u5236\uFF0C\u914D\u9001\u4E2D\u829D\u58EB/\u8F7B\u829D\u58EB\u996E\u54C1\u53EF\u80FD\u4F1A\u51FA\u73B0\u829D\u58EB\u4E0B\u6C89\u548C\u8336\u6DF7\u5408\u7684\u73B0\u8C61\u30022.\u51B0\u6C99\u7C7B\u996E\u54C1\u914D\u9001\u4E2D\u53EF\u80FD\u51FA\u73B0\u878D\u5316\u30023.\u70ED\u8336\u996E\u5747\u4E3A500ml\u89C4\u683C\uFF0C\u70ED\u5496\u5561\u5747\u4E3A360ml\u89C4\u683C\uFF0C\u671B\u5468\u77E5\u8C05\u89E3\u3002",
          "label": "\u5176\u4ED6",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 51,
              "url": "https://go.cdn.heytea.com/storage/products/2018/03/09/ecr5boTxqal4bpRBoK4pqks8SGlBxiBwgvAVWYDG.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1322,
              "name": "\u661F\u7403\u987B\u77E5",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 43,
          "name": "\u597D\u8336",
          "no": "1907103183786764",
          "description": "\u4F7F\u7528\u539F\u4EA7\u5730\u5B9A\u5236\u539F\u8336\u8336\u53F6\uFF0C\u6211\u4EEC\u5E0C\u671B\u7528\u4E00\u676F\u597D\u8336\u6FC0\u53D1\u4F60\u7684\u4E00\u4EFD\u7075\u611F\u3002",
          "label": "\u5176\u4ED6",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 52,
              "url": "https://go.cdn.heytea.com/storage/products/2018/03/09/XxWAOA4cykEeUwAbKZLuIHLEdXS96M4NSBLEOsEp.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1323,
              "name": "\u597D\u8336",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 44,
          "name": "\u597D\u5976",
          "no": "1907102611854675",
          "description": "\u9009\u7528\u9AD8\u54C1\u8D28\u51B7\u85CF\u9C9C\u5976\uFF0C\u9AD8\u54C1\u8D28\u6DE1\u5976\u6CB9\uFF0C\u829D\u58EB\u4F7F\u7528\u9C9C\u5976\u6253\u5236\uFF0C\u4E0D\u4F7F\u7528\u4EFB\u4F55\u8102\u8D28\u6CAB\uFF08\u5976\u7CBE\u3001\u5976\u76D6\u7C89\uFF09\u3002",
          "label": "\u5176\u4ED6",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 53,
              "url": "https://go.cdn.heytea.com/storage/products/2018/03/09/qS2cxdfDrzgCmAMATXlclkaXecBXLGWGMPBkl60P.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1324,
              "name": "\u597D\u5976",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 45,
          "name": "\u597D\u7CD6",
          "no": "1907106785814826",
          "description": "\u4F7F\u7528\u4F18\u8D28\u7CD6\u5206\uFF0C\u53EF\u4E8E\u4E0B\u5355\u65F6\u6309\u4E2A\u4EBA\u53E3\u5473\u8C03\u6574\u6DFB\u52A0\u7684\u7CD6\u5206\u3002",
          "label": "\u5176\u4ED6",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 54,
              "url": "https://go.cdn.heytea.com/storage/products/2018/03/09/17YCgUYwldCLGHEcNDJPjM68TQ9PaEUpp6voCUTk.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1325,
              "name": "\u597D\u7CD6",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9992",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8842.48
        },
        {
          "id": 104,
          "name": "\u8FC7\u654F\u539F",
          "no": "1905274126391239",
          "description": "\u90E8\u5206\u996E\u54C1\u4E2D\u542B\u6709\u4E73\u5236\u54C1\u3001\u83E0\u841D\u3001\u8292\u679C\u3001\u5927\u9EA6\u3001\u5C0F\u9EA6\u3001\u9EA6\u82BD\u5236\u54C1\u7B49\u81F4\u654F\u7269\uFF0C\u8BF7\u914C\u60C5\u9009\u62E9\u3002\u90E8\u5206\u996E\u54C1\u4E2D\u542B\u6709\u679C\u8089\u3001\u73CD\u73E0\u3001\u828B\u5706\u7B49\u5927\u9897\u7C92\u7269\uFF0C\u8BF7\u52FF\u5927\u529B\u5438\u5165\uFF0C\u8001\u4EBA\u3001\u513F\u7AE5\u3001\u5B55\u5987\u8BF7\u8C28\u614E\u996E\u7528\u3002\u6240\u6709\u8336\u7C7B\u996E\u54C1\u7686\u542B\u5496\u5561\u56E0\uFF0C\u5982\u5BF9\u5496\u5561\u56E0\u8FC7\u654F\uFF0C\u8BF7\u8C28\u614E\u9009\u62E9\u3002",
          "label": "\u5176\u4ED6",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 7,
          "images": [
            {
              "id": 289,
              "url": "https://go.cdn.heytea.com/storage/products/2018/08/09/sDzZBhV27AdVpth9bwpVSnY1WhreD3EN02MqE0r2.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1327,
              "name": "\u8FC7\u654F\u539F",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 462,
          "name": "\u81EA\u5E26\u676F \u51CF2\u5143",
          "no": "1906215019076002",
          "description": "\u6211\u4EEC\u66F4\u9F13\u52B1\u5927\u5BB6\u81EA\u5E26\u676F\u5230\u5E97\u996E\u8336\uFF0C\u5E76\u4E14\u6BCF\u676F\u996E\u54C1\u53EF\u4EAB\u53D7\u51CF2\u5143\u4F18\u60E0\u3002\u51CF\u5C11\u4F7F\u7528\u996E\u54C1\u676F\uFF0C\u4E00\u8D77\u4E3A\u5730\u7403\u505A\u597D\u4E8B\u3002*\u81EA\u5E26\u676F\u6307\u5B9A\u89C4\u683C\uFF1A\u6D01\u51C0\u53EF\u53D7\u70ED\uFF0C\u676F\u53E3\u22656CM\uFF0C\u5BB9\u91CF\u2265500ML\u3002\u672C\u6D3B\u52A8\u4EC5\u9650\u95E8\u5E97\u73B0\u573A\u70B9\u5355\uFF0C\u4E0D\u4E0E\u5176\u4ED6\u4F18\u60E0\u5171\u4EAB\uFF0C\u611F\u8C22\u7406\u89E3\u3002",
          "label": "",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 8,
          "images": [
            {
              "id": 54642,
              "url": "https://go.cdn.heytea.com/product/2019/06/21/tmp/b8d76851e21b469c98978adccec77715.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1273,
              "name": "\u81EA\u5E26\u676F \u51CF2\u5143",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "9999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 8848.67
        },
        {
          "id": 465,
          "name": "\u8BA9\u5783\u573E\u5404\u5F52\u5404\u5BB6",
          "no": "1906210816159145",
          "description": "\u6211\u4EEC\u73B0\u5DF2\u5728\u95E8\u5E97\u8BBE\u7F6E\u4E86\u5206\u7C7B\u5783\u573E\u6876\uFF0C\u8BF7\u5C06\u5783\u573E\u5206\u597D\u7C7B\u518D\u5165\u6876\uFF0C\u548C\u8336\u8336\u4E00\u8D77\u5206\u6E05\u6807\u8BC6\uFF0C\u73AF\u4FDD\u4E0D\u8FF7\u8DEF\u3002",
          "label": "",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 9,
          "images": [
            {
              "id": 54640,
              "url": "https://go.cdn.heytea.com/product/2019/06/21/tmp/0e79195904794fb6b23b466d00694eb8.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1276,
              "name": "\u8BA9\u5783\u573E\u5404\u5F52\u5404\u5BB6",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 884.07
        },
        {
          "id": 463,
          "name": "\u4E00\u8D77\u4F7F\u7528\u7EB8\u5438\u7BA1",
          "no": "1906210475943584",
          "description": "\u5C11\u53D6\u7528\u5438\u7BA1\uFF0C\u652F\u6301\u73AF\u4FDD\u51CF\u5851\u3002\u6211\u4EEC\u73B0\u5DF2\u63D0\u4F9B\u73AF\u4FDD\u7EB8\u5438\u7BA1\u53CA\u5E38\u89C4\u5438\u7BA1\u4E24\u9879\u9009\u62E9\uFF0C\u7531\u4E8E\u7EB8\u5438\u7BA1\u957F\u65F6\u95F4\u6D78\u6CE1\u5F3A\u5EA6\u6613\u4E0B\u964D\uFF0C\u53D6\u7528\u7EB8\u5438\u7BA1\u7684\u670B\u53CB\u8BF7\u5C3D\u5FEB\u996E\u7528\u5662\u3002",
          "label": "",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 10,
          "images": [
            {
              "id": 54615,
              "url": "https://go.cdn.heytea.com/product/2019/06/21/tmp/35794eb50dd344f488affedffa62d170.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1274,
              "name": "\u4E00\u8D77\u4F7F\u7528\u7EB8\u5438\u7BA1",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 884.07
        },
        {
          "id": 464,
          "name": "\u4E0D\u6253\u5305 \u66F4\u73AF\u4FDD",
          "no": "1906215007742339",
          "description": "\u4E00\u8D77\u6765\u53C2\u4E0E\u4E0D\u6253\u5305\u884C\u52A8\u3002\u5982\u9700\u6253\u5305\uFF0C\u8BF7\u9009\u62E9\u5E97\u5185\u7684\u53EF\u964D\u89E3\u6253\u5305\u888B\uFF0C\u66F4\u6B22\u8FCE\u5927\u5BB6\u81EA\u5E26\u73AF\u4FDD\u888B\u5662\u3002",
          "label": "",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 11,
          "images": [
            {
              "id": 54641,
              "url": "https://go.cdn.heytea.com/product/2019/06/21/tmp/f2523f450e9b4c4bbce58d88dd83bdf4.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1275,
              "name": "\u4E0D\u6253\u5305 \u66F4\u73AF\u4FDD",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 884.07
        },
        {
          "id": 466,
          "name": "\u7EB8\u5DFE\u6309\u9700\u53D6\u7528",
          "no": "1906216036305300",
          "description": "\u8282\u7EA6\u4E00\u5F20\u7EB8\uFF0C\u5B88\u62A4\u4E00\u68F5\u6811\u3002\u8BF7\u6309\u9700\u53D6\u7528\u5E97\u5185\u7EB8\u5DFE\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6D6A\u8D39\u3002",
          "label": "",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 12,
          "images": [
            {
              "id": 54639,
              "url": "https://go.cdn.heytea.com/product/2019/06/21/tmp/fad86c295f2840bda47d06600a8c9e02.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1277,
              "name": "\u7EB8\u5DFE\u6309\u9700\u53D6\u7528",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "999",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 884.07
        },
        {
          "id": 467,
          "name": "\u5FAA\u73AF\u5229\u7528 \u6FC0\u53D1\u7075\u611F",
          "no": "1906212821448901",
          "description": "\u6211\u4EEC\u63D0\u4F9B\u7684\u5916\u5E26\u7EB8\u888B\u3001\u996E\u54C1\u7EB8\u676F\u53CA\u7EB8\u676F\u5957\u90FD\u662F\u7531\u53EF\u56DE\u6536\u6750\u6599\u5236\u6210\uFF0C\u7528\u7075\u611F\u70B9\u4EAE\u751F\u6D3B\u7684\u6BCF\u4E00\u4E2A\u77AC\u95F4\uFF0C\u5E0C\u671B\u6BCF\u4E00\u4E2A\u88AB\u5E26\u8D70\u7684\u7EB8\u888B\u3001\u676F\u5957\u53CA\u7EB8\u676F\uFF0C\u90FD\u80FD\u5728\u5927\u5BB6\u7684\u5999\u624B\u4E0B\u5F97\u5230\u4E8C\u6B21\u521B\u4F5C\u4F7F\u7528\u5662\u3002",
          "label": "",
          "category_id": 8,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 13,
          "images": [
            {
              "id": 54638,
              "url": "https://go.cdn.heytea.com/product/2019/06/21/tmp/81411128480f45bf8dcd56038b5d66cb.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "skus": [
            {
              "id": 1278,
              "name": "\u5FAA\u73AF\u5229\u7528 \u6FC0\u53D1\u7075\u611F",
              "appointable": false,
              "is_join_queue": 0,
              "is_now_making": 0
            }
          ],
          "labels": [],
          "is_premade": "0",
          "remark": "",
          "is_enable": 1,
          "price": "998",
          "is_sold_out_forever": 1,
          "is_tied_product": 0,
          "has_box_fee": 0,
          "tax_rate": 0.13,
          "un_include_tax_price": 883.19
        }
      ],
      "categoryAds": []
    },
    {
      "id": 11,
      "name": "\u6CE2\u6CE2\u5BB6\u65CF",
      "sort": 7,
      "category_image_url": "https://go.cdn.heytea.com/storage/category/2020/04/21/0dd0e6e55c4b4f119fadda81b0a7b3f8.jpg",
      "products": [
        {
          "id": 706,
          "name": "\u8C46\u8C46\u6CE2\u6CE2\u8336",
          "no": "1911010700649582",
          "description": "\u51B7/\u70ED500ml \u9009\u7528\u6D53\u90C1\u963F\u8428\u59C6\u5976\u8336\u8336\u5E95\u3002\u6D53\u539A\u9EC4\u8C46\u7C89\u3001\u828B\u5706\u6CE2\u6CE2\u642D\u914D\u79D8\u5236\u8C46\u4E73\u5976\u76D6\uFF0C\u5E95\u90E8\u85CF\u6709\u6ED1\u5AE9\u8C46\u82B1\u3002\u996E\u7528\u79D8\u7C4D\uFF1A1.\u8200\u8D77\u9876\u90E8\u5C0F\u4E38\u5B50\u548C\u8C46\u5976\u76D6\u5148\u5C1D\uFF0C2.\u5438\u7BA1\u4E00\u63D2\u5230\u5E95\uFF0C\u518D\u5438\u8C46\u82B1\u4E0E\u5976\u8336\u3002",
          "label": "",
          "category_id": 11,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 1,
          "images": [
            {
              "id": 87818,
              "url": "https://go.cdn.heytea.com/storage/product/2019/11/09/5f9e812aec954a8b88a184ca6d81e8cc.jpg"
            },
            {
              "id": 116603,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/34f79e5ab5e844179bc4c0263a0ad57c.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 88,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u5927\u8C46\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u6700\u65B0",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 68,
          "name": "\u70E4\u9ED1\u7CD6\u6CE2\u6CE2\u9C9C\u5976",
          "no": "1812209997985397",
          "description": "\u51B7480ml \u70ED500ml  \u9ED1\u7CD6\u73CD\u73E0\u642D\u914D\u987A\u6ED1\u9C9C\u5976\uFF0C\u6CE2\u6CE2\u7CFB\u5217\u5976\u5473\u8F83\u4E3A\u6D53\u90C1\uFF0C\u4E0D\u559C\u6B22\u6D53\u539A\u53E3\u611F\u7684\u670B\u53CB\u614E\u70B9\u3002",
          "label": "",
          "category_id": 11,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 2,
          "images": [
            {
              "id": 71356,
              "url": "https://go.cdn.heytea.com/product/2019/08/31/tmp/1258f79c91c04932bec8b09eb7eebb90.jpg"
            },
            {
              "id": 116584,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/1b653ccc95344896bdf1f0b0ddca5be1.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 70,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u4E0D\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u552F\u4E00",
          "is_enable": 0,
          "price": "21",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 19.81
        },
        {
          "id": 133,
          "name": "\u828B\u6CE5\u6CE2\u6CE2\u9C9C\u5976",
          "no": "1812279955525098",
          "description": "\u51B7/\u70ED500ml  \u9ED8\u8BA4\u51B7\u996E\uFF0C\u53EF\u505A\u70ED\u3002\u56E0\u828B\u6CE5\u5BB9\u6613\u6C27\u5316\uFF0C\u4E3A\u4FDD\u6301\u6700\u4F73\u4F53\u9A8C\uFF0C\u8BF7\u52A1\u5FC5\u4E8E\u4E00\u5C0F\u65F6\u5185\u996E\u7528\u5B8C\u6BD5\u3002\u8336\u5E95\u53EF\u9009\u9C9C\u5976/\u6930\u5976\u3002\u624B\u6363\u65B0\u9C9C\u828B\u6CE5\u878D\u5165\u987A\u6ED1\u9C9C\u5976\uFF0C\u518D\u52A0\u5165\u9897\u9897Q\u5F39\u7684\u828B\u6CE5\u6CE2\u6CE2\uFF0C\u7EF5\u5BC6\u4E0E\u6DA6\u6CFD\uFF0C\u5C3D\u5728\u8FD9\u4E00\u676F\u3002",
          "label": "",
          "category_id": 11,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 3,
          "images": [
            {
              "id": 106697,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/16/9e614ed804284ed888b1913c4459ab93.jpg"
            },
            {
              "id": 116599,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/fe91df89885d42ffa8e8c0c58d34c6e5.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 70,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u4E0D\u542B\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u56FD\u5185",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 770,
          "name": "m\u8C46\u6CE2\u6CE2",
          "no": "1912064611771955",
          "description": "\u51B7480ml  \u70ED 500ml  \u56E0\u70ED\u996E\u9C9C\u5976\u6CB9\u6613\u878D\uFF0C\u63A8\u8350\u9009\u62E9\u5206\u88C5\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9ED8\u8BA4\u70ED\u996E\uFF0C\u51B7\u70ED\u7686\u5B9C\u3002\u6CD5\u8299\u5A1C\u5DE7\u514B\u529B\u53E3\u611F\u6D53\u90C1\u987A\u6ED1\uFF0C\u9C9C\u5976\u6CB9\u9876\u662Fm\u8C46\u4EEC\u7684\u5947\u5999\u6E38\u4E50\u56ED\u3002\u996E\u7528\u6B65\u9AA4\uFF1A1.\u5148\u7528\u642D\u914D\u7684\u5C0F\u52FA\u5403\u6389\u5976\u6CB9\u548Cm\u8C46\uFF1B2.\u518D\u63D2\u5165\u5438\u7BA1\u5927\u53E3\u542E\u5438\u6D53\u9999\u5DE7\u514B\u529B\u548C\u9ED1\u6CE2\u6CE2\u3002",
          "label": "",
          "category_id": 11,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 4,
          "images": [
            {
              "id": 106300,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/15/c067c03758e4440ea8463743dd9f6941.jpg"
            },
            {
              "id": 116575,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/ffd1a8461b8141b09d8d0d466cffc82e.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 86,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "29",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 27.36
        },
        {
          "id": 771,
          "name": "\u7A7A\u6C14\u5DE7\u514B\u529B\u6CE2\u6CE2",
          "no": "1912062784685912",
          "description": "\u51B7480ml  \u70ED 500ml  \u56E0\u70ED\u996E\u9C9C\u5976\u6CB9\u6613\u878D\uFF0C\u63A8\u8350\u9009\u62E9\u5206\u88C5\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u9ED8\u8BA4\u70ED\u996E\uFF0C\u51B7\u70ED\u7686\u5B9C\u3002\u6CD5\u8299\u5A1C\u5DE7\u514B\u529B\u53E3\u611F\u6D53\u90C1\u987A\u6ED1\uFF0C\u9C9C\u5976\u6CB9\u4E0E\u7A7A\u6C14\u5DE7\u514B\u529B\u4EA4\u7EC7\u51FA\u5723\u8BDE\u597D\u5473\u3002\u996E\u7528\u6B65\u9AA4\uFF1A1.\u5148\u7528\u642D\u914D\u7684\u5C0F\u52FA\u5403\u6389\u5976\u6CB9\u548C\u7A7A\u6C14\u5DE7\u514B\u529B\uFF1B2.\u518D\u63D2\u5165\u5438\u7BA1\u5927\u53E3\u542E\u5438\u6D53\u9999\u5DE7\u514B\u529B\u548C\u9ED1\u6CE2\u6CE2\u3002",
          "label": "",
          "category_id": 11,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 5,
          "images": [
            {
              "id": 106299,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/15/1b193e1b37e84fb49e0fd0101b58a6a2.jpg"
            },
            {
              "id": 116594,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/852db33dcf4d4d17b13971a6c42dc4e2.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 86,
              "name": "\u542B\u4E73\u3001\u9EA6\u5236\u54C1\u3001\u575A\u679C",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "28",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 26.42
        },
        {
          "id": 890,
          "name": "\u828B\u6CE5\u9ED1\u7CD6\u6CE2\u6CE2",
          "no": "2002020137219017",
          "description": "\u51B7/\u70ED500ml \u56E0\u828B\u6CE5\u6613\u6C27\u5316\uFF0C\u4E3A\u4FDD\u6301\u6700\u4F73\u53E3\u611F\uFF0C\u5EFA\u8BAE\u4E8E\u4E00\u5C0F\u65F6\u5185\u996E\u7528\u5B8C\u6BD5\u3002\u624B\u6363\u65B0\u9C9C\u828B\u6CE5\u878D\u5165\u987A\u6ED1\u725B\u5976\uFF0CQ\u5F39\u9ED1\u6CE2\u6CE2\u751C\u9999\u6D53\u90C1\u3002",
          "label": "",
          "category_id": 11,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 6,
          "images": [
            {
              "id": 109837,
              "url": "https://go.cdn.heytea.com/storage/product/2020/02/02/b42a4e5690d742e8abab89610bd865b2.jpg"
            },
            {
              "id": 117358,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/05/e7691652c4a046bdbd6fbb7862436226.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 62,
              "name": "\u542B\u4E73\u5236\u54C1",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        },
        {
          "id": 334,
          "name": "\u5976\u8336\u6CE2\u6CE2\u51B0",
          "no": "1903205298100979",
          "description": "\u51B7480ml \u70ED500ml  \u7531\u4E8E\u51B0\u6C99\u5916\u9001\u6613\u5316\uFF0C\u53E3\u611F\u4F1A\u7565\u53D7\u5F71\u54CD\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002\u7ECF\u5178\u5976\u8336\u56DE\u5F52\uFF0C\u6D53\u90C1\u963F\u8428\u59C6\u7EA2\u8336\u642D\u914D\u7EAF\u9C9C\u725B\u4E73\u6253\u5236\u7EC6\u817B\u51B0\u6C99\uFF0C\u9ED1\u7CD6\u6CE2\u6CE2\u548C\u51B0\u6DC7\u6DCB\u7403\u7684\u7EC4\u5408\u8BA9\u53E3\u611F\u5C42\u6B21\u66F4\u52A0\u4E30\u5BCC\u3002",
          "label": "",
          "category_id": 11,
          "is_single": true,
          "support_takeaway": 1,
          "sort": 7,
          "images": [
            {
              "id": 106879,
              "url": "https://go.cdn.heytea.com/storage/product/2020/01/17/6fb20e4943944d7bb00a0034563c664a.jpg"
            },
            {
              "id": 116596,
              "url": "https://go.cdn.heytea.com/storage/product/2020/03/03/6217859b873f47be860b3f37ed5701d4.jpg"
            }
          ],
          "name_image": "",
          "show_trademark": false,
          "activity_ids": [],
          "labels": [
            {
              "id": 14,
              "name": "\u53EF\u505A\u70ED\u996E",
              "type": 0,
              "label_color": "#5AA541"
            },
            {
              "id": 15,
              "name": "\u542B\u4E73\u5236\u54C1\u3001\u8336",
              "type": 0,
              "label_color": "#BABABA"
            }
          ],
          "is_premade": "0",
          "remark": "\u56FD\u5185",
          "is_enable": 0,
          "price": "27",
          "is_sold_out_forever": 0,
          "is_tied_product": 0,
          "has_box_fee": 1,
          "tax_rate": 0.06,
          "un_include_tax_price": 25.47
        }
      ],
      "categoryAds": []
    }
  ]);
  function mitt(n) {
    return { all: n = n || new Map(), on: function(t2, e2) {
      var i = n.get(t2);
      i ? i.push(e2) : n.set(t2, [e2]);
    }, off: function(t2, e2) {
      var i = n.get(t2);
      i && (e2 ? i.splice(i.indexOf(e2) >>> 0, 1) : n.set(t2, []));
    }, emit: function(t2, e2) {
      var i = n.get(t2);
      i && i.slice().map(function(n2) {
        n2(e2);
      }), (i = n.get("*")) && i.slice().map(function(n2) {
        n2(t2, e2);
      });
    } };
  }
  const emitter = mitt();
  const _sfc_main$h = vue.defineComponent({
    props: {
      asideHeight: {
        type: Number
      },
      asideData: {
        type: Array,
        default: () => []
      }
    },
    setup(props, { attrs, emit }) {
      const current = vue.ref(0);
      const asideClick = (index) => {
        current.value = index;
        emit("asideItemClick", index);
      };
      emitter.on("mainScroll", (scrollHeight) => {
        let goodsListOffsetTop = vue.ref([...attrs.GoodsListOffsetTop]);
        for (let i = 0; i < goodsListOffsetTop.value.length - 1; i++) {
          if (current.value != i && scrollHeight >= goodsListOffsetTop.value[i] && scrollHeight < goodsListOffsetTop.value[i + 1])
            current.value = i;
        }
      });
      return {
        current,
        asideClick
      };
    }
  });
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      "scroll-y": "",
      style: vue.normalizeStyle({ height: _ctx.asideHeight + "px" })
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.asideData, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(index === _ctx.current ? "active-aside-item" : "aside-item"),
          onClick: ($event) => _ctx.asideClick(index)
        }, [
          vue.createElementVNode("image", {
            src: item.img,
            mode: "widthFix"
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.name), 1)
        ], 10, ["onClick"]);
      }), 256)),
      vue.createElementVNode("view", { style: { "height": "180rpx" } })
    ], 4);
  }
  var tabsAside = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-46834605"]]);
  Object.freeze({});
  Object.freeze([]);
  const isString = (val) => typeof val === "string";
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e2) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$g = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e2) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f]]);
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  const _sfc_main$f = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      maskClick: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const { windowWidth, windowHeight, windowTop, safeAreaInsets } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + windowTop;
        if (this.safeArea) {
          this.safeAreaInsets = safeAreaInsets;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    created() {
      this.mkclick = this.maskClick;
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
    },
    methods: {
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e2) {
        e2.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:211", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets && this.safeAreaInsets.bottom || 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$2);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]]),
      onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop", "prevent"]))
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 34)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-7c43d41b"]]);
  const _sfc_main$e = vue.defineComponent({
    setup() {
      const popup = vue.ref(null);
      const showModal = () => {
        popup.value.open("center");
      };
      return {
        popup,
        showModal
      };
    }
  });
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_popup, {
        ref: "popup",
        "background-color": "#fff"
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("\u5F39\u51FA Popup")
        ]),
        _: 1
      }, 512)
    ]);
  }
  var GoodsInfo = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-23e79910"]]);
  var _imports_0$2 = "/static/images/common/round_add_normal.png";
  const _sfc_main$d = vue.defineComponent({
    components: { Swiper, GoodsInfo },
    props: {
      mainHeight: {
        type: Number
      },
      goodsData: {
        type: Array,
        default: () => []
      },
      scrollTop: {
        type: Number,
        default: 0
      }
    },
    setup() {
      const goodsSwiper = vue.reactive([
        [
          "https://go.cdn.heytea.com/storage/ad/2020/05/28/752a5519e89541bd8417614c599cf8c3.jpg",
          "https://go.cdn.heytea.com/storage/ad/2020/05/24/38b7f686cf10449c85b0f5489d5d958e.jpg",
          "https://go.cdn.heytea.com/storage/ad/2020/05/21/2315beb5105944e8b795c5c0084ec99f.jpg",
          "https://go.cdn.heytea.com/storage/ad/2020/05/21/b88c6780a73249b0b0166784917a5046.jpg"
        ],
        [
          "https://go.cdn.heytea.com/storage/ad/2020/05/21/acfc6504f3074cf6b730f516adc558f6.jpg",
          "https://go.cdn.heytea.com/storage/ad/2020/04/26/2373600789c64752b2415293877ead40.jpg",
          "https://go.cdn.heytea.com/storage/ad/2020/04/22/515df8c726e740089ae4c55582b4ce09.jpg",
          "https://go.cdn.heytea.com/storage/ad/2020/04/14/d0e51cb22c0a437293c0e6a879b59c7d.jpg"
        ]
      ]);
      vue.onMounted(() => {
        goodsTitle.value.forEach((item) => {
          goodsTitleOffsetTop.push(item.$el.offsetTop);
        });
      });
      const goodsTitle = vue.ref([]);
      const goodsTitleOffsetTop = vue.reactive([]);
      const mainScroll = (e2) => {
        emitter.emit("mainScroll", e2.detail.scrollTop);
      };
      const goodsInfo = vue.ref(null);
      const goodsClick = () => {
        goodsInfo.value.showModal();
      };
      return {
        goodsSwiper,
        goodsTitle,
        goodsTitleOffsetTop,
        goodsInfo,
        mainScroll,
        goodsClick
      };
    }
  });
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Swiper = vue.resolveComponent("Swiper");
    const _component_GoodsInfo = vue.resolveComponent("GoodsInfo");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        "scroll-top": _ctx.scrollTop,
        onScroll: _cache[1] || (_cache[1] = (...args) => _ctx.mainScroll && _ctx.mainScroll(...args)),
        "scroll-with-animation": "true",
        style: vue.normalizeStyle({ height: _ctx.mainHeight + "px" })
      }, [
        vue.createCommentVNode(" \u8F6E\u64AD\u56FE\u533A\u57DF "),
        vue.createElementVNode("view", { class: "swiper-box" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.goodsSwiper, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", null, [
              vue.createVNode(_component_Swiper, {
                swiperData: item,
                class: "swiper-item"
              }, null, 8, ["swiperData"])
            ]);
          }), 256))
        ]),
        vue.createCommentVNode(" \u5546\u54C1\u5217\u8868\u533A\u57DF "),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.goodsData, (whole, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { class: "goods-box" }, [
            vue.createElementVNode("view", { class: "goods-type" }, [
              vue.createElementVNode("view", {
                class: "goods-title",
                ref: (el) => {
                  _ctx.goodsTitle[index] = el;
                }
              }, vue.toDisplayString(whole.name), 513),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(whole.products, (item, i) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "goods-item" }, [
                  vue.createElementVNode("view", {
                    class: "goods-image",
                    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.goodsClick && _ctx.goodsClick(...args))
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.images, (jpg, n) => {
                      return vue.openBlock(), vue.createElementBlock("view", null, [
                        !n ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 0,
                          src: jpg.url,
                          mode: "widthFix"
                        }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                      ]);
                    }), 256))
                  ]),
                  vue.createElementVNode("view", { class: "goods-info" }, [
                    vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.name), 1),
                    vue.createElementVNode("view", { class: "label" }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.labels, (lab, l) => {
                        return vue.openBlock(), vue.createElementBlock("text", { class: "label-name" }, vue.toDisplayString(lab.name), 1);
                      }), 256))
                    ]),
                    vue.createElementVNode("view", { class: "description" }, vue.toDisplayString(item.description), 1),
                    vue.createElementVNode("view", { class: "specifications" }, [
                      vue.createElementVNode("view", { class: "price" }, "\uFFE5" + vue.toDisplayString(item.price), 1),
                      vue.createElementVNode("image", {
                        src: _imports_0$2,
                        mode: "widthFix"
                      })
                    ])
                  ])
                ]);
              }), 256))
            ])
          ]);
        }), 256))
      ], 44, ["scroll-top"]),
      vue.createVNode(_component_GoodsInfo, { ref: "goodsInfo" }, null, 512)
    ], 64);
  }
  var mainView = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-55f663e6"]]);
  const _sfc_main$c = vue.defineComponent({
    components: { tabsAside, mainView },
    setup() {
      vue.onMounted(() => {
        asideHeight.value = getScreen().height - aside.value.$el.offsetTop;
        mainHeight.value = getScreen().height - main.value.$el.offsetTop;
        GoodsListOffsetTop.value = mainIitem.value.goodsTitleOffsetTop;
      });
      const aside = vue.ref(null);
      const main = vue.ref(null);
      const asideHeight = vue.ref(0);
      const mainHeight = vue.ref(0);
      const mainIitem = vue.ref(null);
      let GoodsListOffsetTop = vue.ref([]);
      const scrollTop = vue.ref(0);
      const asideItemClick = (index) => {
        scrollTop.value = GoodsListOffsetTop.value[index] + 1;
      };
      return {
        aside,
        main,
        asideHeight,
        mainHeight,
        mainIitem,
        GoodsListOffsetTop,
        scrollTop,
        asideItemClick,
        asideData,
        goodsData
      };
    }
  });
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tabs_aside = vue.resolveComponent("tabs-aside");
    const _component_main_view = vue.resolveComponent("main-view");
    return vue.openBlock(), vue.createElementBlock("view", { class: "sidebar" }, [
      vue.createCommentVNode(" \u4FA7\u8FB9\u680F "),
      vue.createElementVNode("view", {
        class: "aside",
        ref: "aside"
      }, [
        vue.createVNode(_component_tabs_aside, {
          asideHeight: _ctx.asideHeight,
          asideData: _ctx.asideData,
          GoodsListOffsetTop: _ctx.GoodsListOffsetTop,
          onAsideItemClick: _ctx.asideItemClick
        }, null, 8, ["asideHeight", "asideData", "GoodsListOffsetTop", "onAsideItemClick"])
      ], 512),
      vue.createCommentVNode(" \u5546\u54C1\u89C6\u56FE "),
      vue.createElementVNode("view", {
        class: "main",
        ref: "main"
      }, [
        vue.createVNode(_component_main_view, {
          ref: "mainIitem",
          mainHeight: _ctx.mainHeight,
          goodsData: _ctx.goodsData,
          scrollTop: _ctx.scrollTop
        }, null, 8, ["mainHeight", "goodsData", "scrollTop"])
      ], 512)
    ]);
  }
  var goodsList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-9f8ca63e"]]);
  const _sfc_main$b = vue.defineComponent({
    components: {
      indexTop,
      goodsList
    }
  });
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_index_top = vue.resolveComponent("index-top");
    const _component_goods_list = vue.resolveComponent("goods-list");
    return vue.openBlock(), vue.createElementBlock("view", { id: "index" }, [
      vue.createVNode(_component_index_top),
      vue.createVNode(_component_goods_list)
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-57280228"]]);
  const _sfc_main$a = {};
  function _sfc_render$9(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, "\u767E\u8D27");
  }
  var PagesDepartmentDepartment = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9]]);
  const _sfc_main$9 = {
    name: "UniSegmentedControl",
    emits: ["clickItem"],
    props: {
      current: {
        type: Number,
        default: 0
      },
      values: {
        type: Array,
        default() {
          return [];
        }
      },
      activeColor: {
        type: String,
        default: "#2979FF"
      },
      styleType: {
        type: String,
        default: "button"
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val) {
        if (val !== this.currentIndex) {
          this.currentIndex = val;
        }
      }
    },
    created() {
      this.currentIndex = this.current;
    },
    methods: {
      _onClick(index) {
        if (this.currentIndex !== index) {
          this.currentIndex = index;
          this.$emit("clickItem", {
            currentIndex: index
          });
        }
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
      style: vue.normalizeStyle({ borderColor: $props.styleType === "text" ? "" : $props.activeColor })
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.values, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass([[
            $props.styleType === "text" ? "" : "segmented-control__item--button",
            index === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
            index === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
            index === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
          ], "segmented-control__item"]),
          key: index,
          style: vue.normalizeStyle({ backgroundColor: index === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : "transparent" }),
          onClick: ($event) => $options._onClick(index)
        }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("text", {
              style: vue.normalizeStyle({ color: index === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
              class: vue.normalizeClass(["segmented-control__text", $props.styleType === "text" && index === $data.currentIndex ? "segmented-control__item--text" : ""])
            }, vue.toDisplayString(item), 7)
          ])
        ], 14, ["onClick"]);
      }), 128))
    ], 6);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-064e9cd1"]]);
  var _imports_0$1 = "/static/images/order/order_icon_talk2.0.png";
  const _sfc_main$8 = vue.defineComponent({
    setup() {
      vue.onMounted(() => {
        scrollHeight.value = getScreen().height - tabs.value.$el.offsetTop + "px";
      });
      const current = vue.ref(0);
      const tabTitle = vue.reactive(["\u5F53\u524D\u8BA2\u5355", "\u5386\u53F2\u8BA2\u5355"]);
      const onClickItem = ({ currentIndex }) => {
        current.value = currentIndex;
      };
      const tabs = vue.ref(null);
      const scrollTop = vue.ref(0);
      const scrollHeight = vue.ref(0);
      vue.nextTick(() => {
        formatAppLog("log", "at pages/order/order.vue:76", scrollHeight.value);
      });
      const scrollView = (e2) => {
      };
      const pullUp = () => {
        formatAppLog("log", "at pages/order/order.vue:82", "\u89E6\u5E95\u4E86");
      };
      const goodsList2 = vue.reactive([
        {
          goodsName: "\u76CA\u7530\u5047\u65E5\u5929\u5730GO\u5E97",
          state: "\u5DF2\u5B8C\u6210",
          img: "https://go.cdn.heytea.com/product/2019/08/23/tmp/606742485b404725bcc5fe37330c4cde.jpg",
          number: "755067202001181805428750",
          time: "2020-01-18 18:05:43",
          money: "66.00"
        },
        {
          goodsName: "\u76CA\u7530\u5047\u65E5\u5929\u5730GO\u5E97",
          state: "\u5DF2\u5B8C\u6210",
          img: "https://go.cdn.heytea.com/storage/product/2019/11/12/5ad4996d0fdd4f3a85a25b8fe95a4db8.jpg",
          number: "755067202001181805428750",
          time: "2020-01-18 18:05:43",
          money: "66.00"
        },
        {
          goodsName: "\u76CA\u7530\u5047\u65E5\u5929\u5730GO\u5E97",
          state: "\u5DF2\u5B8C\u6210",
          img: "https://go.cdn.heytea.com/product/2019/08/23/tmp/606742485b404725bcc5fe37330c4cde.jpg",
          number: "755067202001181805428750",
          time: "2020-01-18 18:05:43",
          money: "66.00"
        },
        {
          goodsName: "\u76CA\u7530\u5047\u65E5\u5929\u5730GO\u5E97",
          state: "\u5DF2\u5B8C\u6210",
          img: "https://go.cdn.heytea.com/storage/product/2019/11/12/5ad4996d0fdd4f3a85a25b8fe95a4db8.jpg",
          number: "755067202001181805428750",
          time: "2020-01-18 18:05:43",
          money: "66.00"
        }
      ]);
      return {
        current,
        tabTitle,
        tabs,
        scrollTop,
        scrollHeight,
        goodsList: goodsList2,
        onClickItem,
        scrollView,
        pullUp
      };
    }
  });
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_segmented_control = resolveEasycom(vue.resolveDynamicComponent("uni-segmented-control"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { id: "order" }, [
      vue.createCommentVNode(" \u8054\u7CFB\u533A\u57DF "),
      vue.createElementVNode("view", { class: "contact" }, [
        vue.createElementVNode("view", { class: "contact-box" }, [
          vue.createElementVNode("image", {
            src: _imports_0$1,
            mode: "widthFix"
          }),
          vue.createElementVNode("text", { class: "fz12" }, "\u60F3\u5BF9\u4F60\u8BF4")
        ])
      ]),
      vue.createCommentVNode(" tabs\u533A\u57DF "),
      vue.createVNode(_component_uni_segmented_control, {
        current: _ctx.current,
        values: _ctx.tabTitle,
        onClickItem: _ctx.onClickItem,
        styleType: "text",
        activeColor: "#000",
        class: "tabs"
      }, null, 8, ["current", "values", "onClickItem"]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.withDirectives(vue.createElementVNode("view", null, [
          vue.createElementVNode("view", { class: "tabs-one" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("text", { class: "store" }, "\u95E8\u5E97\u8BA2\u5355"),
              vue.createElementVNode("text", { class: "invoicing" }, "\u767E\u8D27\u8BA2\u5355")
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("text", null, "\u6279\u91CF\u5F00\u7968")
            ])
          ])
        ], 512), [
          [vue.vShow, _ctx.current === 0]
        ]),
        vue.withDirectives(vue.createElementVNode("view", null, null, 512), [
          [vue.vShow, _ctx.current === 1]
        ])
      ]),
      vue.createCommentVNode(" scroll-view\u5F00\u59CB "),
      vue.createElementVNode("view", { class: "scroll-box" }, [
        vue.createElementVNode("scroll-view", {
          ref: "tabs",
          "scroll-top": _ctx.scrollTop,
          "scroll-y": "true",
          onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.scrollView && _ctx.scrollView(...args)),
          onScrolltolower: _cache[1] || (_cache[1] = (...args) => _ctx.pullUp && _ctx.pullUp(...args)),
          style: vue.normalizeStyle({ height: _ctx.scrollHeight })
        }, [
          vue.createElementVNode("view", { class: "goods-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.goodsList, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "goods-item" }, [
                vue.createElementVNode("view", { class: "info" }, [
                  vue.createElementVNode("view", { class: "left" }, [
                    vue.createElementVNode("view", { class: "name fz14" }, vue.toDisplayString(item.goodsName), 1),
                    vue.createElementVNode("image", {
                      src: item.img,
                      mode: "widthFix"
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", {
                      class: "describe",
                      style: { "margin-bottom": "20rpx" }
                    }, "\u8BA2\u5355\u7F16\u53F7\uFF1A" + vue.toDisplayString(item.number), 1),
                    vue.createElementVNode("view", { class: "describe" }, "\u4E0B\u5355\u65F6\u95F4\uFF1A" + vue.toDisplayString(item.time), 1)
                  ]),
                  vue.createElementVNode("view", { class: "right" }, [
                    vue.createElementVNode("view", {
                      class: "describe",
                      style: { "margin-bottom": "230rpx" }
                    }, vue.toDisplayString(item.state), 1),
                    vue.createElementVNode("view", { class: "fz16" }, "\uFFE5" + vue.toDisplayString(item.money), 1)
                  ])
                ]),
                vue.createElementVNode("view", { class: "btn" })
              ]);
            }), 256))
          ]),
          vue.createCommentVNode(" \u5360\u4F4D "),
          vue.createElementVNode("view", { style: { "height": "98rpx" } })
        ], 44, ["scroll-top"])
      ])
    ]);
  }
  var PagesOrderOrder = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-127632e4"]]);
  const _sfc_main$7 = vue.defineComponent({
    setup() {
      const ceiling = vue.ref(null);
      const state = vue.ref(false);
      vue.onMounted(() => {
        formatAppLog("log", "at pages/my/my.vue:117", ceiling.value.$el.offsetTop);
      });
      const scrollView = (e2) => {
        formatAppLog("log", "at pages/my/my.vue:120", e2.detail.scrollTop);
        state.value = e2.detail.scrollTop > ceiling.value.$el.offsetTop ? true : false;
      };
      return {
        ceiling,
        state,
        scrollView
      };
    }
  });
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { id: "my" }, [
      vue.withDirectives(vue.createElementVNode("view", { class: "fixed" }, "position: fixed", 512), [
        [vue.vShow, _ctx.state ? true : false]
      ]),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.scrollView && _ctx.scrollView(...args)),
        style: { "height": "100%" }
      }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1"),
          vue.createElementVNode("view", null, "1")
        ]),
        vue.createElementVNode("view", {
          class: "ceiling",
          ref: "ceiling"
        }, null, 512),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2"),
          vue.createElementVNode("view", null, "2")
        ])
      ], 32)
    ]);
  }
  var PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-0be17cc6"]]);
  var _imports_0 = "/static/images/common/edit.png";
  const _sfc_main$6 = {};
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "address" }, [
      vue.createElementVNode("view", { class: "address-list" }, [
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("view", { style: { "margin-bottom": "10rpx" } }, "\u57CE\u5E02\u7801\u519C(\u5148\u751F) 666666"),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("text", { class: "default" }, "\u9ED8\u8BA4\u5730\u5740"),
            vue.createElementVNode("text", { class: "describe" }, "\u4E0A\u6D77\u4E16\u535A\u5927")
          ])
        ]),
        vue.createElementVNode("view", { class: "edit" }, [
          vue.createElementVNode("image", { src: _imports_0 })
        ])
      ])
    ]);
  }
  var PagesOtherAddressAddress = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-2d984c31"]]);
  const _sfc_main$5 = {};
  function _sfc_render$4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "enterprise-reunion" }, [
      vue.createElementVNode("image", {
        src: "http://go.cdn.heytea.com/storage/products/2020/06/01/74271488c8d046fab5f2e64d6c94d8a7.jpeg",
        mode: "widthFix"
      })
    ]);
  }
  var PagesOtherEnterpriseReunionEnterpriseReunion = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  const _sfc_main$4 = {
    name: "tabs",
    props: ["index", "tabPadding", "animation"],
    emits: ["changeIndex"],
    setup(props, context) {
      const data = vue.reactive({
        tabList: [],
        tabIndex: props.index ? +props.index : 0,
        translateX: -100 * +props.index,
        transition: props.animation === false ? 0 : 0.2,
        scrollId: "tab_0",
        tabPadding: props.tabPadding ? props.tabPadding : 20
      });
      const tabChange = (index) => {
        if (data.tabIndex == index)
          return false;
        data.tabIndex = index;
        data.translateX = -100 * data.tabIndex;
        data.scrollId = `tab_${index - 1}`;
        context.emit("changeIndex", index);
      };
      uni.$on("getTabLabel", (val) => {
        data.tabList.push(val);
        if (data.timeId)
          clearTimeout(data.timeId);
        data.timeId = setTimeout(() => {
          uni.$off("getTabLabel");
        }, 1e3);
      });
      setTimeout(() => {
        data.scrollId = `tab_${props.index - 1}`;
      }, 100);
      return __spreadProps(__spreadValues({}, vue.toRefs(data)), {
        tabChange
      });
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab" }, [
      vue.createElementVNode("scroll-view", {
        class: "tab-bar",
        "scroll-x": "true",
        "scroll-into-view": _ctx.scrollId,
        "scroll-with-animation": ""
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.tabList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["tab-bar-item", { "active": _ctx.tabIndex === index }]),
            id: `tab_${index}`,
            style: vue.normalizeStyle({ "padding": `0 ${$props.tabPadding}rpx` }),
            key: index,
            onClick: ($event) => $setup.tabChange(index)
          }, [
            vue.createElementVNode("text", { class: "txt" }, vue.toDisplayString(item), 1)
          ], 14, ["id", "onClick"]);
        }), 128))
      ], 8, ["scroll-into-view"]),
      vue.createElementVNode("view", {
        class: "tab-cont",
        style: vue.normalizeStyle({ "transform": `translateX(${_ctx.translateX}%)`, "transition": `transform ${_ctx.transition}s ease-in-out` })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)
    ]);
  }
  var tab = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-ea11b5d6"]]);
  const _sfc_main$3 = {
    props: ["label"],
    setup(props, context) {
      uni.$emit("getTabLabel", props.label);
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-pane" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  var tabPane = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-1c9db3b7"]]);
  const _sfc_main$2 = vue.defineComponent({
    props: {
      current: {
        type: Number,
        default: 0
      },
      tabTitle: {
        type: Array,
        default: () => [
          { title: "\u9009\u98791" },
          { title: "\u9009\u98792" }
        ]
      },
      tabGoData: {
        type: Array
      },
      tabStarData: {
        type: Array
      }
    },
    components: {
      tab,
      tabPane
    },
    setup(props, { emit }) {
      const changeIndex = (index) => {
        emit("tabItemClick", index);
      };
      const tabData = vue.computed(() => {
        return props.current ? props.tabStarData : props.tabGoData;
      });
      return {
        changeIndex,
        tabData
      };
    }
  });
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tab_pane = vue.resolveComponent("tab-pane");
    const _component_tab = vue.resolveComponent("tab");
    return vue.openBlock(), vue.createBlock(_component_tab, {
      index: _ctx.current,
      animation: true,
      tabPadding: "40",
      onChangeIndex: _ctx.changeIndex
    }, {
      default: vue.withCtx(() => [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.tabTitle, (item) => {
          return vue.openBlock(), vue.createBlock(_component_tab_pane, {
            label: item.title
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "tab-list" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.tabData, (item2) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "tab-item" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("image", {
                        src: item2.http_url + item2.image_url,
                        mode: "widthFix"
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "info" }, [
                        vue.createElementVNode("view", { class: "title fz14" }, vue.toDisplayString(item2.name), 1),
                        vue.createElementVNode("view", { class: "score" }, [
                          vue.createElementVNode("text", { class: "value" }, vue.toDisplayString(item2.score), 1),
                          vue.createElementVNode("text", { class: "describe" }, "\u79EF\u5206")
                        ])
                      ])
                    ])
                  ]);
                }), 256))
              ])
            ]),
            _: 2
          }, 1032, ["label"]);
        }), 256))
      ]),
      _: 1
    }, 8, ["index", "onChangeIndex"]);
  }
  var tabList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-4b6b0251"]]);
  var integralMall = [{
    "id": 149,
    "state": "Go",
    "code": null,
    "name": "\u5916\u53563\u5143\u4EE3\u91D1\u5238",
    "score": 300,
    "store": 731,
    "imageId": 145538,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/47cf654056494b3ba5556d23391c9633.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 150,
    "state": "Go",
    "code": null,
    "name": "\u5916\u53565\u5143\u4EE3\u91D1\u5238",
    "score": 500,
    "store": 646,
    "imageId": 145539,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/31e4070fff364f98bf40b8cf6704c9c4.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 151,
    "state": "Go",
    "code": null,
    "name": "\u5916\u535610\u5143\u4EE3\u91D1\u5238",
    "score": 1e3,
    "store": 411,
    "imageId": 145540,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/4d230aaa89f3412d99b140aa0b471c09.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 152,
    "state": "Go",
    "code": null,
    "name": "\u5916\u535620\u5143\u4EE3\u91D1\u5238",
    "score": 2e3,
    "store": 877,
    "imageId": 145543,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/994d95460d41428e923d8de54840581f.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 156,
    "state": "Go",
    "code": null,
    "name": "\u5916\u5356\u4E70\u4E8C\u8D60\u4E00\u5238",
    "score": 2400,
    "store": 854,
    "imageId": 145554,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/16add8a8af2141b7bad9ebbf8c40cd84.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 153,
    "state": "Go",
    "code": null,
    "name": "\u5916\u535625\u5143\u4EE3\u91D1\u5238",
    "score": 2500,
    "store": 949,
    "imageId": 145544,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/6376f01ea7c44d988ba21376129ff67f.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 158,
    "state": "Go",
    "code": null,
    "name": "\u5916\u5356\u6CE2\u6CE2\u5BB6\u65CF\u5238",
    "score": 2800,
    "store": 197,
    "imageId": 145559,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/9cace2695e2d48bb86e5a38889282b0f.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 155,
    "state": "Go",
    "code": null,
    "name": "\u5916\u5356\u4E70\u4E00\u8D60\u4E00\u5238",
    "score": 2800,
    "store": 398,
    "imageId": 145553,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/52ebe803ab554ebb823d5e83d70dab9a.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 157,
    "state": "Go",
    "code": null,
    "name": "\u5916\u5356\u5496\u5561\u5238",
    "score": 2900,
    "store": 198,
    "imageId": 145558,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/778839aab8364f72a447f584531a2bc9.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 154,
    "state": "Go",
    "code": null,
    "name": "\u5916\u5356\u8D60\u996E\u5238",
    "score": 3600,
    "store": 473,
    "imageId": 145547,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 0,
    "image_url": "/storage/products/2020/05/07/febaf8cf51934def9e2dbd1f16f40e5e.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 136,
    "code": null,
    "name": "HEYTEA3\u5143\u4EE3\u91D1\u5238",
    "score": 300,
    "store": 806,
    "imageId": 145427,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/5a1cc7eb16614502aba65353d84a47b7.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 159,
    "code": null,
    "name": "HEYTEA\u52A0\u6599\u5238",
    "score": 450,
    "store": 163,
    "imageId": 147244,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/11/3151d4fd07e94c1e9b9b5a855e9441ce.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 137,
    "code": null,
    "name": "HEYTEA5\u5143\u4EE3\u91D1\u5238",
    "score": 500,
    "store": 546,
    "imageId": 145431,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/ff91db9794634af58e2b528669652586.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 138,
    "code": null,
    "name": "HEYTEA10\u5143\u4EE3\u91D1\u5238",
    "score": 1e3,
    "store": 217,
    "imageId": 145433,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/6accb79605344dbe92ec965a0a79fd0d.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 139,
    "code": null,
    "name": "HEYTEA20\u5143\u4EE3\u91D1\u5238",
    "score": 2e3,
    "store": 664,
    "imageId": 145434,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/b8d9c79702d84507ad9a4d62b74feafc.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 144,
    "code": null,
    "name": "HEYTEA\u4E70\u4E8C\u8D60\u4E00\u5238",
    "score": 2400,
    "store": 0,
    "imageId": 145443,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/a8a97fa8cad74c90aaa69eeecab07b15.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 140,
    "code": null,
    "name": "HEYTEA25\u5143\u4EE3\u91D1\u5238",
    "score": 2500,
    "store": 753,
    "imageId": 145435,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/1191302d792a4659859a3f3dc8272645.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 143,
    "code": null,
    "name": "HEYTEA\u4E70\u4E00\u8D60\u4E00\u5238",
    "score": 2800,
    "store": 301,
    "imageId": 145440,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/5decb0e19389487a8f8edab4e8ba50c5.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 146,
    "code": null,
    "name": "HEYTEA\u6CE2\u6CE2\u5BB6\u65CF\u5238",
    "score": 2800,
    "store": 173,
    "imageId": 145447,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/33e6164b1784406e90e156c30bb1d12d.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 147,
    "code": null,
    "name": "HEYTEA\u5496\u5561\u5238",
    "score": 2900,
    "store": 188,
    "imageId": 145448,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/60b0c4af60b0437faf7c759e4afe5b54.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 141,
    "code": null,
    "name": "HEYTEA\u4F18\u5148\u5238",
    "score": 3e3,
    "store": 734,
    "imageId": 145437,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/bdf20e5efcee4f30bb56d017601bed27.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }, {
    "id": 142,
    "code": null,
    "name": "HEYTEA\u8D60\u996E\u5238",
    "score": 3600,
    "store": 843,
    "imageId": 145438,
    "skus": null,
    "source": null,
    "specification": 0,
    "remark": "\u5151\u6362\u8BF4\u660E\uFF1A\u4EC5\u9650\u5728\u559C\u8336GO\u5C0F\u7A0B\u5E8F\u4E0B\u5355\u65F6\uFF0C\u9009\u62E9\u201C\u5916\u5356\u914D\u9001\u201D\u540E\u53EF\u7528\uFF1B\u79EF\u5206\u5546\u57CE\u53EF\u5151\u6362\u7684\u559C\u8336\u5238\u4E3A\u7535\u5B50\u5238\uFF0C\u6210\u529F\u5151\u6362\u540E\u53EF\u5728\u60A8\u7684\u559C\u8336\u5238\u8D26\u6237\u67E5\u770B\u3002\u6210\u529F\u5151\u6362\u540E\u7684\u559C\u8336\u5238\u5373\u523B\u751F\u6548\uFF0C\u4E0D\u53EF\u9000\u8D27\u3002\u82E5\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u8054\u7CFB\u559C\u8336\u5BA2\u670D\u5E2E\u60A8\u5904\u7406\u3002",
    "mall_type": 1,
    "member_type": 1,
    "image_url": "/storage/products/2020/05/07/8188b0d7fcc94a01bb81ab84eee4c62a.jpeg",
    "http_url": "https://go.cdn.heytea.com"
  }];
  const _sfc_main$1 = vue.defineComponent({
    components: {
      tabList
    },
    setup(props) {
      const tabTitle = vue.reactive([
        { title: "Go\u4F1A\u5458\u4E13\u533A" },
        { title: "\u661F\u7403\u4F1A\u5458\u4E13\u533A" }
      ]);
      const tabGoData = integralMall.filter((item) => item.state === "Go");
      const tabStarData = integralMall.filter((item) => item.state !== "Go");
      formatAppLog("log", "at pages/other/integral-mall/integral-mall.vue:34", tabGoData, tabStarData);
      const current = vue.ref(0);
      const tabItemClick = (index) => {
        current.value = index;
      };
      const scrollPage = (e2) => {
        formatAppLog("log", "at pages/other/integral-mall/integral-mall.vue:42", e2);
      };
      return {
        current,
        tabTitle,
        tabGoData,
        tabStarData,
        tabItemClick,
        scrollPage
      };
    }
  });
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tab_list = vue.resolveComponent("tab-list");
    return vue.openBlock(), vue.createElementBlock("view", { id: "integral-mall" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.scrollPage && _ctx.scrollPage(...args)),
        style: { "height": "100%" }
      }, [
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("view", { class: "fz12" }, "\u53EF\u7528\u79EF\u5206"),
          vue.createElementVNode("view", {
            class: "fz32 fw-b color-666",
            style: { "margin-top": "10rpx", "margin-left": "10rpx" }
          }, "63"),
          vue.createElementVNode("view", { class: "integral-details" }, [
            vue.createElementVNode("view", {
              "open-type": "navigate",
              class: "fz12",
              style: { "width": "120rpx", "border-right": "1px solid #999" }
            }, "\u79EF\u5206\u660E\u7EC6"),
            vue.createElementVNode("view", {
              "open-type": "navigate",
              class: "fz12",
              style: { "width": "120rpx", "margin-left": "20rpx" }
            }, "\u5151\u6362\u8BB0\u5F55")
          ])
        ]),
        vue.createVNode(_component_tab_list, {
          current: _ctx.current,
          tabTitle: _ctx.tabTitle,
          tabGoData: _ctx.tabGoData,
          tabStarData: _ctx.tabStarData,
          onTabItemClick: _ctx.tabItemClick,
          class: "tabs"
        }, null, 8, ["current", "tabTitle", "tabGoData", "tabStarData", "onTabItemClick"])
      ], 32)
    ]);
  }
  var PagesOtherIntegralMallIntegralMall = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-133490f3"]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/department/department", PagesDepartmentDepartment);
  __definePage("pages/order/order", PagesOrderOrder);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/other/address/address", PagesOtherAddressAddress);
  __definePage("pages/other/enterprise-reunion/enterprise-reunion", PagesOtherEnterpriseReunionEnterpriseReunion);
  __definePage("pages/other/integral-mall/integral-mall", PagesOtherIntegralMallIntegralMall);
  const _sfc_main = {};
  var e, t = ["scroll", "wheel", "touchstart", "touchmove", "touchenter", "touchend", "touchleave", "mouseout", "mouseleave", "mouseup", "mousedown", "mousemove", "mouseenter", "mousewheel", "mouseover"];
  if (function() {
    var e2 = false;
    try {
      var t2 = Object.defineProperty({}, "passive", { get: function() {
        e2 = true;
      } });
      window.addEventListener("test", null, t2), window.removeEventListener("test", null, t2);
    } catch (e3) {
    }
    return e2;
  }()) {
    var o = EventTarget.prototype.addEventListener;
    e = o, EventTarget.prototype.addEventListener = function(o2, r, n) {
      var s, a = typeof n == "object" && n !== null, i = a ? n.capture : n;
      (n = a ? function(e2) {
        var t2 = Object.getOwnPropertyDescriptor(e2, "passive");
        return t2 && t2.writable !== true && t2.set === void 0 ? Object.assign({}, e2) : e2;
      }(n) : {}).passive = (s = n.passive) !== void 0 ? s : t.indexOf(o2) !== -1 && true, n.capture = i !== void 0 && i, e.call(this, o2, r, n);
    }, EventTarget.prototype.addEventListener._original = e;
  }
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
