/*!
 * ng-bootstrap-select v0.5.0
 *
 * Licensed under MIT
 */

"use strict";function isWindow(a){return a&&a.window===a}function isArrayLike(a){if(null==a||isWindow(a))return!1;if(isArray(a)||isString(a)||jqLite&&a instanceof jqLite)return!0;var b="length"in Object(a)&&a.length;return isNumber(b)&&(b>=0&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function selectpickerDirective(a,b){return{restrict:"A",priority:1e3,link:function(c,d,e){function f(b){function c(a){return"\\\\\\"+a}function d(a){return a.replace(p,l).replace(q,m)}for(var e,f,g,h=0,i=[],j=b?b.length:0,k=[],l="{{",m="}}",n=l.length,o=m.length,p=new RegExp(l.replace(/./g,c),"g"),q=new RegExp(m.replace(/./g,c),"g"),r=[];j>h;){if(-1==(e=b.indexOf(l,h))||-1==(f=b.indexOf(m,e+n))){h!==j&&k.push(d(b.substring(h)));break}h!==e&&k.push(d(b.substring(h,e))),g=b.substring(e+n,f),i.push(g),h=f+o,r.push(k.length),k.push("")}return function(b,c){for(var d=0,e=i.length;e>d;d++)k[r[d]]=a(i[d])(b,c);return k.join("")}}function g(){function a(a){var b;if(!r&&isArrayLike(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}if("object"!=typeof o||!$.isEmptyObject(o)){var b=u(c)||[],g=a(b);l=[],m=[];for(var h=0,i=d.find("option"),j=i.length;j>h;h++){var k=i[h].value,n=i.eq(h);if(""===k)l.push(n);else{if("?"!==k)break;m.push(n)}}l.length>1&&l[1].remove(),d.find("option").each(function(a){l.length&&a--,m.length&&a--;var d={},h={},i={},j=b===g?a:g[a],k=b[j];if(d=w(k,j),e.bsOptionAttrs&&(r&&j||!r&&k)){var n="function"==typeof o?o(k,j):o;if($.isEmptyObject(n))return;for(var p in n){var q=n[p],s=p.split("data-")[1]?p.split("data-")[1].replace(/-([a-z])/g,function(a){return a[1].toUpperCase()}):null,t=f(q)(c,d);s?i[s]=t||q:h[p]=t||q}$(this).data(i).attr(h)}})}}function h(a){c[k](function(){e.ngOptions&&e.bsOptionAttrs&&g(),d.selectpicker("refresh")})}function i(a){void 0!==c.$parent[e.ngModel]&&c.$parent[e.ngModel]!==a&&(c.$parent[e.ngModel]=a),c.$$childHead&&c.$$childHead[e.ngModel]&&(c.$$childHead[e.ngModel]=a),c[k](function(){d.selectpicker("render")})}var j,k=c.$applyAsync?"$applyAsync":"$evalAsync";if(e.ngOptions){var l,m,n=(e.multiple,e.ngOptions),o=a(e.bsOptionAttrs)(c),p=n.match(NG_OPTIONS_REGEXP);j=p[8];var q=p[5]||p[7],r=p[6],s=/ as /.test(p[0])&&p[1],t=p[9],u=(a(p[2]?p[1]:q),s&&a(s),t&&a(t),a(p[2]||p[1]),a(p[3]||""),a(p[4]||""),a(j)),v={},w=r?function(a,b){return v[r]=b,v[q]=a,v}:function(a){return v[q]=a,v};c[k](function(){d.selectpicker(a(e.selectpicker)())})}else j=e.selectCollection,d.selectpicker(a(e.selectpicker)()),b(function(){h()});j&&c.$watch(j,h,!0),e.$observe("spTheme",function(a){b(function(){d.data("selectpicker").$button.removeClass(function(a,b){return(b.match(/(^|\s)?btn-\S+/g)||[]).join(" ")}),d.selectpicker("setStyle",a)})}),e.ngModel&&c.$watch(e.ngModel,function(a,b){return a!==b?b?i(a):h(a):void 0},!0),e.ngDisabled&&c.$watch(e.ngDisabled,h,!0),c.$on("$destroy",function(){b(function(){d.selectpicker("destroy")})})}}}angular.module("ng-bootstrap-select",[]).directive("selectpicker",["$parse","$timeout",selectpickerDirective]);var isArray=Array.isArray,NG_OPTIONS_REGEXP=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;