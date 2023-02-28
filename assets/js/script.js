/******** PLUGINS  *********/

// XML TO JSON
window.jQuery&&function(e){e.extend({xml2json:function(n,t){function l(n,a){if(!n)return null;var o="",i=null,c=null;n.nodeType,r(n.localName||n.nodeName),n.text||n.nodeValue||"";n.childNodes&&n.childNodes.length>0&&e.each(n.childNodes,function(e,n){var t=n.nodeType,a=r(n.localName||n.nodeName),c=n.text||n.nodeValue||"";if(8!=t)if(3!=t&&4!=t&&a)i=i||{},i[a]?(i[a].length||(i[a]=u(i[a])),i[a]=u(i[a]),i[a][i[a].length]=l(n,!0),i[a].length=i[a].length):i[a]=l(n);else{if(c.match(/^\s+$/))return;o+=c.replace(/^\s+/,"").replace(/\s+$/,"")}}),n.attributes&&n.attributes.length>0&&(c={},i=i||{},e.each(n.attributes,function(e,n){var t=r(n.name),l=n.value;c[t]=l,i[t]?(i[cnn]=u(i[cnn]),i[t][i[t].length]=l,i[t].length=i[t].length):i[t]=l})),i&&(i=e.extend(""!=o?new String(o):{},i||{}),o=i.text?[i.text||""].concat([o]):o,o&&(i.text=o),o="");var d=i||o;return t&&(o&&(d={}),o=d.text||o||"",o&&(d.text=o),a||(d=u(d))),d}if(!n)return{};var r=function(e){return String(e||"").replace(/-/g,"_")},u=function(n){return e.isArray(n)||(n=[n]),n.length=n.length,n};if("string"==typeof n&&(n=e.text2xml(n)),n.nodeType){if(3==n.nodeType||4==n.nodeType)return n.nodeValue;var a=9==n.nodeType?n.documentElement:n,o=l(a,!0);return n=null,a=null,o}},text2xml:function(n){return e.parseXML(n)}})}(jQuery);

// NEW FORMATTER
!function(e){function t(e){var t=document.createElement("input"),a="on"+e,i=a in t;return i||(t.setAttribute(a,"return;"),i="function"==typeof t[a]),t=null,i}function a(e){var t="text"==e||"tel"==e;if(!t){var a=document.createElement("input");a.setAttribute("type",e),t="text"===a.type,a=null}return t}function i(t,a,r){var n=r.aliases[t];return n?(n.alias&&i(n.alias,void 0,r),e.extend(!0,r,n),e.extend(!0,r,a),!0):!1}function r(t,a){function i(a){function i(e,t,a,i){this.matches=[],this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=a||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}function r(a,i,r){var n=t.definitions[i],o=0==a.matches.length;if(r=void 0!=r?r:a.matches.length,n&&!f){n.placeholder=e.isFunction(n.placeholder)?n.placeholder.call(this,t):n.placeholder;for(var s=n.prevalidator,l=s?s.length:0,u=1;u<n.cardinality;u++){var c=l>=u?s[u-1]:[],p=c.validator,d=c.cardinality;a.matches.splice(r++,0,{fn:p?"string"==typeof p?new RegExp(p):new function(){this.test=p}:new RegExp("."),cardinality:d?d:1,optionality:a.isOptional,newBlockMarker:o,casing:n.casing,def:n.definitionSymbol||i,placeholder:n.placeholder,mask:i})}a.matches.splice(r++,0,{fn:n.validator?"string"==typeof n.validator?new RegExp(n.validator):new function(){this.test=n.validator}:new RegExp("."),cardinality:n.cardinality,optionality:a.isOptional,newBlockMarker:o,casing:n.casing,def:n.definitionSymbol||i,placeholder:n.placeholder,mask:i})}else a.matches.splice(r++,0,{fn:null,cardinality:0,optionality:a.isOptional,newBlockMarker:o,casing:null,def:i,placeholder:void 0,mask:i}),f=!1}for(var n,o,s,l,u,c,p=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,f=!1,d=new i,m=[],v=[];n=p.exec(a);)switch(o=n[0],o.charAt(0)){case t.optionalmarker.end:case t.groupmarker.end:if(s=m.pop(),m.length>0){if(l=m[m.length-1],l.matches.push(s),l.isAlternator){u=m.pop();for(var h=0;h<u.matches.length;h++)u.matches[h].isGroup=!1;m.length>0?(l=m[m.length-1],l.matches.push(u)):d.matches.push(u)}}else d.matches.push(s);break;case t.optionalmarker.start:m.push(new i(!1,!0));break;case t.groupmarker.start:m.push(new i(!0));break;case t.quantifiermarker.start:var g=new i(!1,!1,!0);o=o.replace(/[{}]/g,"");var k=o.split(","),y=isNaN(k[0])?k[0]:parseInt(k[0]),x=1==k.length?y:isNaN(k[1])?k[1]:parseInt(k[1]);if(("*"==x||"+"==x)&&(y="*"==x?0:1),g.quantifier={min:y,max:x},m.length>0){var b=m[m.length-1].matches;if(n=b.pop(),!n.isGroup){var P=new i(!0);P.matches.push(n),n=P}b.push(n),b.push(g)}else{if(n=d.matches.pop(),!n.isGroup){var P=new i(!0);P.matches.push(n),n=P}d.matches.push(n),d.matches.push(g)}break;case t.escapeChar:f=!0;break;case t.alternatormarker:m.length>0?(l=m[m.length-1],c=l.matches.pop()):c=d.matches.pop(),c.isAlternator?m.push(c):(u=new i(!1,!1,!1,!0),u.matches.push(c),m.push(u));break;default:if(m.length>0){if(l=m[m.length-1],l.matches.length>0&&!l.isAlternator&&(c=l.matches[l.matches.length-1],c.isGroup&&(c.isGroup=!1,r(c,t.groupmarker.start,0),r(c,t.groupmarker.end))),r(l,o),l.isAlternator){u=m.pop();for(var h=0;h<u.matches.length;h++)u.matches[h].isGroup=!1;m.length>0?(l=m[m.length-1],l.matches.push(u)):d.matches.push(u)}}else d.matches.length>0&&(c=d.matches[d.matches.length-1],c.isGroup&&(c.isGroup=!1,r(c,t.groupmarker.start,0),r(c,t.groupmarker.end))),r(d,o)}return d.matches.length>0&&(c=d.matches[d.matches.length-1],c.isGroup&&(c.isGroup=!1,r(c,t.groupmarker.start,0),r(c,t.groupmarker.end)),v.push(d)),v}function r(r,n){if(void 0!=r&&""!=r){if(1==r.length&&0==t.greedy&&0!=t.repeat&&(t.placeholder=""),t.repeat>0||"*"==t.repeat||"+"==t.repeat){var o="*"==t.repeat?0:"+"==t.repeat?1:t.repeat;r=t.groupmarker.start+r+t.groupmarker.end+t.quantifiermarker.start+o+","+t.repeat+t.quantifiermarker.end}var s;return void 0==e.inputmask.masksCache[r]||a===!0?(s={mask:r,maskToken:i(r),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:n},a!==!0&&(e.inputmask.masksCache[r]=s)):s=e.extend(!0,{},e.inputmask.masksCache[r]),s}}function n(e){if(e=e.toString(),t.numericInput){e=e.split("").reverse();for(var a=0;a<e.length;a++)e[a]==t.optionalmarker.start?e[a]=t.optionalmarker.end:e[a]==t.optionalmarker.end?e[a]=t.optionalmarker.start:e[a]==t.groupmarker.start?e[a]=t.groupmarker.end:e[a]==t.groupmarker.end&&(e[a]=t.groupmarker.start);e=e.join("")}return e}var o=void 0;if(e.isFunction(t.mask)&&(t.mask=t.mask.call(this,t)),e.isArray(t.mask)){if(t.mask.length>1){t.keepStatic=void 0==t.keepStatic?!0:t.keepStatic;var s="(";return e.each(t.mask,function(t,a){s.length>1&&(s+=")|("),s+=n(void 0==a.mask||e.isFunction(a.mask)?a:a.mask)}),s+=")",r(s,t.mask)}t.mask=t.mask.pop()}return t.mask&&(o=void 0==t.mask.mask||e.isFunction(t.mask.mask)?r(n(t.mask),t.mask):r(n(t.mask.mask),t.mask)),o}function n(i,r,n){function o(e,t,a){t=t||0;var i,r,n,o=[],s=0;do{if(e===!0&&p().validPositions[s]){var l=p().validPositions[s];r=l.match,i=l.locator.slice(),o.push(a===!0?l.input:O(s,r))}else n=h(s,i,s-1),r=n.match,i=n.locator.slice(),o.push(O(s,r));s++}while((void 0==ie||ie>s-1)&&null!=r.fn||null==r.fn&&""!=r.def||t>=s);return o.pop(),o}function p(){return r}function f(e){var t=p();t.buffer=void 0,t.tests={},e!==!0&&(t._buffer=void 0,t.validPositions={},t.p=0)}function d(e,t){var a=p(),i=-1,r=a.validPositions;void 0==e&&(e=-1);var n=i,o=i;for(var s in r){var l=parseInt(s);r[l]&&(t||null!=r[l].match.fn)&&(e>=l&&(n=l),l>=e&&(o=l))}return i=-1!=n&&e-n>1||e>o?n:o}function m(t,a,i){if(n.insertMode&&void 0!=p().validPositions[t]&&void 0==i){var r,o=e.extend(!0,{},p().validPositions),s=d();for(r=t;s>=r;r++)delete p().validPositions[r];p().validPositions[t]=a;var l,u=!0,c=p().validPositions;for(r=l=t;s>=r;r++){var f=o[r];if(void 0!=f)for(var m=l;m<A()&&(null==f.match.fn&&c[r]&&(c[r].match.optionalQuantifier===!0||c[r].match.optionality===!0)||null!=f.match.fn);){if(null==f.match.fn||!n.keepStatic&&c[r]&&(void 0!=c[r+1]&&y(r+1,c[r].locator.slice(),r).length>1||void 0!=c[r].alternation)?m++:m=R(l),k(m,f.match.def)){u=_(m,f.input,!0,!0)!==!1,l=m;break}u=null==f.match.fn}if(!u)break}if(!u)return p().validPositions=e.extend(!0,{},o),!1}else p().validPositions[t]=a;return!0}function v(e,t,a,i){var r,o=e;for(p().p=e,void 0!=p().validPositions[e]&&p().validPositions[e].input==n.radixPoint&&(t++,o++),r=o;t>r;r++)void 0!=p().validPositions[r]&&(a===!0||0!=n.canClearPosition(p(),r,d(),i,n))&&delete p().validPositions[r];for(f(!0),r=o+1;r<=d();){for(;void 0!=p().validPositions[o];)o++;var s=p().validPositions[o];o>r&&(r=o+1);var l=p().validPositions[r];void 0!=l&&void 0==s?(k(o,l.match.def)&&_(o,l.input,!0)!==!1&&(delete p().validPositions[r],r++),o++):r++}var u=d(),c=A();for(u>=e&&void 0!=p().validPositions[u]&&p().validPositions[u].input==n.radixPoint&&delete p().validPositions[u],r=u+1;c>=r;r++)p().validPositions[r]&&delete p().validPositions[r];f(!0)}function h(e,t,a){var i=p().validPositions[e];if(void 0==i)for(var r=y(e,t,a),o=d(),s=p().validPositions[o]||y(0,void 0,void 0)[0],l=void 0!=s.alternation?s.locator[s.alternation].toString().split(","):[],u=0;u<r.length&&(i=r[u],!(i.match&&(n.greedy&&i.match.optionalQuantifier!==!0||(i.match.optionality===!1||i.match.newBlockMarker===!1)&&i.match.optionalQuantifier!==!0)&&(void 0==s.alternation||void 0!=i.locator[s.alternation]&&w(i.locator[s.alternation].toString().split(","),l))));u++);return i}function g(e){return p().validPositions[e]?p().validPositions[e].match:y(e)[0].match}function k(e,t){for(var a=!1,i=y(e),r=0;r<i.length;r++)if(i[r].match&&i[r].match.def==t){a=!0;break}return a}function y(t,a,i,r){function n(a,i,r,o){function l(r,o,d){if(s>1e4)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+p().mask),!0;if(s==t&&void 0==r.matches)return u.push({match:r,locator:o.reverse()}),!0;if(void 0!=r.matches){if(r.isGroup&&d!==!0){if(r=l(a.matches[f+1],o))return!0}else if(r.isOptional){var m=r;if(r=n(r,i,o,d)){var v=u[u.length-1].match,h=0==e.inArray(v,m.matches);if(!h)return!0;c=!0,s=t}}else if(r.isAlternator){var g,k=r,y=[],x=u.slice(),b=o.length,P=i.length>0?i.shift():-1;if(-1==P||"string"==typeof P){var S,w=s,_=i.slice();"string"==typeof P&&(S=P.split(","));for(var E=0;E<k.matches.length;E++){u=[],r=l(k.matches[E],[E].concat(o),d)||r,g=u.slice(),s=w,u=[];for(var A=0;A<_.length;A++)i[A]=_[A];for(var R=0;R<g.length;R++){var j=g[R];j.alternation=b;for(var C=0;C<y.length;C++){var F=y[C];if(j.match.mask==F.match.mask&&("string"!=typeof P||-1!=e.inArray(j.locator[b].toString(),S))){g.splice(R,1),F.locator[b]=F.locator[b]+","+j.locator[b],F.alternation=b;break}}}y=y.concat(g)}"string"==typeof P&&(y=e.map(y,function(t,a){if(isFinite(a)){var i,r=t.locator[b].toString().split(",");t.locator[b]=void 0,t.alternation=void 0;for(var n=0;n<r.length;n++)i=-1!=e.inArray(r[n],S),i&&(void 0!=t.locator[b]?(t.locator[b]+=",",t.locator[b]+=r[n]):t.locator[b]=parseInt(r[n]),t.alternation=b);if(void 0!=t.locator[b])return t}})),u=x.concat(y),s=t,c=!0}else r=l(k.matches[P],[P].concat(o),d);if(r)return!0}else if(r.isQuantifier&&d!==!0)for(var O=r,M=i.length>0&&d!==!0?i.shift():0;M<(isNaN(O.quantifier.max)?M+1:O.quantifier.max)&&t>=s;M++){var D=a.matches[e.inArray(O,a.matches)-1];if(r=l(D,[M].concat(o),!0)){var v=u[u.length-1].match;v.optionalQuantifier=M>O.quantifier.min-1;var h=0==e.inArray(v,D.matches);if(h){if(M>O.quantifier.min-1){c=!0,s=t;break}return!0}return!0}}else if(r=n(r,i,o,d))return!0}else s++}for(var f=i.length>0?i.shift():0;f<a.matches.length;f++)if(a.matches[f].isQuantifier!==!0){var d=l(a.matches[f],[f].concat(r),o);if(d&&s==t)return d;if(s>t)break}}var o=p().maskToken,s=a?i:0,l=a||[0],u=[],c=!1;if(void 0==a){for(var f,d=t-1;void 0==(f=p().validPositions[d])&&d>-1;)d--;if(void 0!=f&&d>-1)s=d,l=f.locator.slice();else{for(d=t-1;void 0==(f=p().tests[d])&&d>-1;)d--;void 0!=f&&d>-1&&(s=d,l=f[0].locator.slice())}}for(var m=l.shift();m<o.length;m++){var v=n(o[m],l,[m]);if(v&&s==t||s>t)break}return(0==u.length||c)&&u.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),p().tests[t]=e.extend(!0,[],u),p().tests[t]}function x(){return void 0==p()._buffer&&(p()._buffer=o(!1,1)),p()._buffer}function b(){return void 0==p().buffer&&(p().buffer=o(!0,d(),!0)),p().buffer}function P(e,t,a){if(a=a||b().slice(),e===!0)f(),e=0,t=a.length;else for(var i=e;t>i;i++)delete p().validPositions[i],delete p().tests[i];for(var i=e;t>i;i++)a[i]!=n.skipOptionalPartCharacter&&_(i,a[i],!0,!0)}function S(e,t){switch(t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase()}return e}function w(t,a){for(var i=n.greedy?a:a.slice(0,1),r=!1,o=0;o<t.length;o++)if(-1!=e.inArray(t[o],i)){r=!0;break}return r}function _(t,a,i,r){function o(t,a,i,r){var o=!1;return e.each(y(t),function(s,l){for(var u=l.match,c=a?1:0,h="",g=(b(),u.cardinality);g>c;g--)h+=C(t-(g-1));if(a&&(h+=a),o=null!=u.fn?u.fn.test(h,p(),t,i,n):a!=u.def&&a!=n.skipOptionalPartCharacter||""==u.def?!1:{c:u.def,pos:t},o!==!1){var k=void 0!=o.c?o.c:a;k=k==n.skipOptionalPartCharacter&&null===u.fn?u.def:k;var y=t,x=b();if(void 0!=o.remove&&(e.isArray(o.remove)||(o.remove=[o.remove]),e.each(o.remove.sort(function(e,t){return t-e}),function(e,t){v(t,t+1,!0)})),void 0!=o.insert&&(e.isArray(o.insert)||(o.insert=[o.insert]),e.each(o.insert.sort(function(e,t){return e-t}),function(e,t){_(t.pos,t.c,!0)})),o.refreshFromBuffer){var w=o.refreshFromBuffer;if(i=!0,P(w===!0?w:w.start,w.end,x),void 0==o.pos&&void 0==o.c)return o.pos=d(),!1;if(y=void 0!=o.pos?o.pos:t,y!=t)return o=e.extend(o,_(y,k,!0)),!1}else if(o!==!0&&void 0!=o.pos&&o.pos!=t&&(y=o.pos,P(t,y),y!=t))return o=e.extend(o,_(y,k,!0)),!1;return 1!=o&&void 0==o.pos&&void 0==o.c?!1:(s>0&&f(!0),m(y,e.extend({},l,{input:S(k,u)}),r)||(o=!1),!1)}}),o}function s(t,a,i,r){var o,s,l,u,c=e.extend(!0,{},p().validPositions);for(o=d();o>=0;o--)if(u=p().validPositions[o],u&&void 0!=u.alternation&&u.locator[u.alternation].length>1){s=p().validPositions[o].alternation;break}if(void 0!=s)for(var m in p().validPositions)if(u=p().validPositions[m],parseInt(m)>parseInt(o)&&u.alternation){for(var v=u.locator[s],h=p().validPositions[o].locator[s].toString().split(","),g=0;g<h.length;g++)if(v<h[g]){for(var k,y,x=m-1;x>=0;x--)if(k=p().validPositions[x],void 0!=k){y=k.locator[s],k.locator[s]=parseInt(h[g]);break}if(v!=k.locator[s]){for(var b=[],P=m;P<d()+1;P++){var S=p().validPositions[P];S&&null!=S.match.fn&&b.push(S.input),delete p().validPositions[P],delete p().tests[P]}for(f(!0),n.keepStatic=!n.keepStatic,l=!0;b.length>0;){var w=b.shift();if(w!=n.skipOptionalPartCharacter&&!(l=_(d()+1,w,!1,!0)))break}if(k.alternation=s,k.locator[s]=y,l&&(l=_(t,a,i,r)),n.keepStatic=!n.keepStatic,l)return l;f(),p().validPositions=e.extend(!0,{},c)}}break}return!1}function l(t,a){for(var i=p().validPositions[a],r=i.locator,n=r.length,o=t;a>o;o++)if(!E(o)){var s=y(o),l=s[0],u=-1;e.each(s,function(e,t){for(var a=0;n>a;a++)t.locator[a]&&w(t.locator[a].toString().split(","),r[a].toString().split(","))&&a>u&&(u=a,l=t)}),m(o,e.extend({},l,{input:l.match.def}),!0)}}i=i===!0;for(var u=b(),c=t-1;c>-1&&!p().validPositions[c];c--);for(c++;t>c;c++)void 0==p().validPositions[c]&&((!E(c)||u[c]!=O(c))&&y(c).length>1||u[c]==n.radixPoint||"0"==u[c]&&e.inArray(n.radixPoint,u)<c)&&o(c,u[c],!0);var h=t,g=!1,k=e.extend(!0,{},p().validPositions);if(h<A()&&(g=o(h,a,i,r),(!i||r)&&g===!1)){var x=p().validPositions[h];if(!x||null!=x.match.fn||x.match.def!=a&&a!=n.skipOptionalPartCharacter){if((n.insertMode||void 0==p().validPositions[R(h)])&&!E(h))for(var j=h+1,F=R(h);F>=j;j++)if(g=o(j,a,i,r),g!==!1){l(h,j),h=j;break}}else g={caret:R(h)}}if(g===!1&&n.keepStatic&&K(u)&&(g=s(t,a,i,r)),g===!0&&(g={pos:h}),e.isFunction(n.postValidation)&&0!=g&&!i){f(!0);var M=n.postValidation(b(),n);if(!M)return f(!0),p().validPositions=e.extend(!0,{},k),!1}return g}function E(e){var t=g(e);if(null!=t.fn)return t.fn;if(!n.keepStatic&&void 0==p().validPositions[e]){for(var a=y(e),i=!0,r=0;r<a.length;r++)if(""!=a[r].match.def&&(null!==a[r].match.fn||void 0==a[r].alternation||a[r].locator[a[r].alternation].length>1)){i=!1;break}return i}return!1}function A(){var e;ie=ae.prop("maxLength"),-1==ie&&(ie=void 0);var t,a=d(),i=p().validPositions[a],r=void 0!=i?i.locator.slice():void 0;for(t=a+1;void 0==i||null!=i.match.fn||null==i.match.fn&&""!=i.match.def;t++)i=h(t,r,t-1),r=i.locator.slice();var n=g(t-1);return e=""!=n.def?t:t-1,void 0==ie||ie>e?e:ie}function R(e){var t=A();if(e>=t)return t;for(var a=e;++a<t&&!E(a)&&(n.nojumps!==!0||n.nojumpsThreshold>a););return a}function j(e){var t=e;if(0>=t)return 0;for(;--t>0&&!E(t););return t}function C(e){return void 0==p().validPositions[e]?O(e):p().validPositions[e].input}function F(t,a,i,r,o){if(r&&e.isFunction(n.onBeforeWrite)){var s=n.onBeforeWrite.call(t,r,a,i,n);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;P(l===!0?l:l.start,l.end,s.buffer),f(!0),a=b()}i=s.caret||i}}t._valueSet(a.join("")),void 0!=i&&T(t,i),o===!0&&(oe=!0,e(t).trigger("input"))}function O(e,t){if(t=t||g(e),void 0!=t.placeholder)return t.placeholder;if(null==t.fn){if(!n.keepStatic&&void 0==p().validPositions[e]){for(var a=y(e),i=!0,r=0;r<a.length;r++)if(""!=a[r].match.def&&(null!==a[r].match.fn||void 0==a[r].alternation||a[r].locator[a[r].alternation].length>1)){i=!1;break}if(i)return n.placeholder.charAt(e%n.placeholder.length)}return t.def}return n.placeholder.charAt(e%n.placeholder.length)}function M(t,a,i,r){function n(){var e=!1,t=x().slice(l,R(l)).join("").indexOf(s);if(-1!=t&&!E(l)){e=!0;for(var a=x().slice(l,l+t),i=0;i<a.length;i++)if(" "!=a[i]){e=!1;break}}return e}var o=void 0!=r?r.slice():t._valueGet().split(""),s="",l=0;if(f(),p().p=R(-1),a&&t._valueSet(""),!i){var u=x().slice(0,R(-1)).join(""),c=o.join("").match(new RegExp(D(u),"g"));c&&c.length>0&&(o.splice(0,c.length*u.length),l=R(l))}e.each(o,function(a,r){var o=e.Event("keypress");o.which=r.charCodeAt(0),s+=r;var u=d(void 0,!0),c=p().validPositions[u],f=h(u+1,c?c.locator.slice():void 0,u);if(!n()||i){var m=i?a:null==f.match.fn&&f.match.optionality&&u+1<p().p?u+1:p().p;z.call(t,o,!0,!1,i,m),l=m+1,s=""}else z.call(t,o,!0,!1,!0,u+1)}),a&&F(t,b(),e(t).is(":focus")?R(d(0)):void 0,e.Event("checkval"))}function D(t){return e.inputmask.escapeRegex(t)}function G(t){if(t.data("_inputmask")&&!t.hasClass("hasDatepicker")){var a=[],i=p().validPositions;for(var r in i)i[r].match&&null!=i[r].match.fn&&a.push(i[r].input);var o=(re?a.reverse():a).join(""),s=(re?b().slice().reverse():b()).join("");return e.isFunction(n.onUnMask)&&(o=n.onUnMask.call(t,s,o,n)||o),o}return t[0]._valueGet()}function I(e){if(re&&"number"==typeof e&&(!n.greedy||""!=n.placeholder)){var t=b().length;e=t-e}return e}function T(t,a,i){var r,o=t.jquery&&t.length>0?t[0]:t;if("number"!=typeof a)return o.setSelectionRange?(a=o.selectionStart,i=o.selectionEnd):window.getSelection?(r=window.getSelection().getRangeAt(0),r.commonAncestorContainer.parentNode==o&&(a=r.startOffset,i=r.endOffset)):document.selection&&document.selection.createRange&&(r=document.selection.createRange(),a=0-r.duplicate().moveStart("character",-1e5),i=a+r.text.length),{begin:I(a),end:I(i)};if(a=I(a),i=I(i),i="number"==typeof i?i:a,e(o).is(":visible")){var s=e(o).css("font-size").replace("px","")*i;if(o.scrollLeft=s>o.scrollWidth?s:0,l||0!=n.insertMode||a!=i||i++,o.setSelectionRange)o.selectionStart=a,o.selectionEnd=i;else if(window.getSelection){r=document.createRange(),r.setStart(o.firstChild,a<o._valueGet().length?a:o._valueGet().length),r.setEnd(o.firstChild,i<o._valueGet().length?i:o._valueGet().length),r.collapse(!0);var u=window.getSelection();u.removeAllRanges(),u.addRange(r)}else o.createTextRange&&(r=o.createTextRange(),r.collapse(!0),r.moveEnd("character",i),r.moveStart("character",a),r.select())}}function N(t){var a,i,r=b(),n=r.length,o=d(),s={},l=p().validPositions[o],u=void 0!=l?l.locator.slice():void 0;for(a=o+1;a<r.length;a++)i=h(a,u,a-1),u=i.locator.slice(),s[a]=e.extend(!0,{},i);var c=l&&void 0!=l.alternation?l.locator[l.alternation]:void 0;for(a=n-1;a>o&&(i=s[a].match,(i.optionality||i.optionalQuantifier||c&&c!=s[a].locator[l.alternation])&&r[a]==O(a,i));a--)n--;return t?{l:n,def:s[n]?s[n].match:void 0}:n}function B(e){for(var t=N(),a=e.length-1;a>t&&!E(a);a--);return e.splice(t,a+1-t),e}function K(t){if(e.isFunction(n.isComplete))return n.isComplete.call(ae,t,n);if("*"!=n.repeat){var a=!1,i=N(!0),r=j(i.l);if(d(),void 0==i.def||i.def.newBlockMarker||i.def.optionality||i.def.optionalQuantifier){a=!0;for(var o=0;r>=o;o++){var s=E(o),l=g(o);if(s&&void 0==p().validPositions[o]&&l.optionality!==!0&&l.optionalQuantifier!==!0||!s&&t[o]!=O(o)){a=!1;break}}}return a}}function H(e,t){return re?e-t>1||e-t==1&&n.insertMode:t-e>1||t-e==1&&n.insertMode}function L(t){var a=e._data(t).events,i=!1;e.each(a,function(t,a){e.each(a,function(e,t){if("inputmask"==t.namespace&&"setvalue"!=t.type){var a=t.handler;t.handler=function(e){if(!this.disabled&&(!this.readOnly||"keydown"==e.type&&e.ctrlKey&&67==e.keyCode)){switch(e.type){case"input":if(oe===!0||i===!0)return oe=!1,e.preventDefault();break;case"keydown":ne=!1,i=!1;break;case"keypress":if(ne===!0)return e.preventDefault();ne=!0;break;case"compositionstart":i=!0;break;case"compositionupdate":oe=!0;break;case"compositionend":i=!1}return a.apply(this,arguments)}e.preventDefault()}}})})}function U(t){function a(t){if(void 0==e.valHooks[t]||1!=e.valHooks[t].inputmaskpatch){var a=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},i=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(t){var i=e(t);if(i.data("_inputmask")){if(i.data("_inputmask").opts.autoUnmask)return i.inputmask("unmaskedvalue");var r=a(t),n=i.data("_inputmask"),o=n.maskset,s=o._buffer;return s=s?s.join(""):"",r!=s?r:""}return a(t)},set:function(t,a){var r,n=e(t),o=n.data("_inputmask");return r=i(t,a),o&&n.triggerHandler("setvalue.inputmask"),r},inputmaskpatch:!0}}}function i(){var t=e(this),a=e(this).data("_inputmask");return a?a.opts.autoUnmask?t.inputmask("unmaskedvalue"):o.call(this)!=x().join("")?o.call(this):"":o.call(this)}function r(t){var a=e(this).data("_inputmask");s.call(this,t),a&&e(this).triggerHandler("setvalue.inputmask")}function n(t){e(t).bind("mouseenter.inputmask",function(){var t=e(this),a=this,i=a._valueGet();""!=i&&i!=b().join("")&&t.triggerHandler("setvalue.inputmask")});var a=e._data(t).events,i=a.mouseover;if(i){for(var r=i[i.length-1],n=i.length-1;n>0;n--)i[n]=i[n-1];i[0]=r}}var o,s;if(!t._valueGet){var l;Object.getOwnPropertyDescriptor&&void 0==t.value?(o=function(){return this.textContent},s=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:i,set:r})):((l=Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(t,"value"))&&l.configurable,document.__lookupGetter__&&t.__lookupGetter__("value")?(o=t.__lookupGetter__("value"),s=t.__lookupSetter__("value"),t.__defineGetter__("value",i),t.__defineSetter__("value",r)):(o=function(){return t.value},s=function(e){t.value=e},a(t.type),n(t))),t._valueGet=function(e){return re&&e!==!0?o.call(this).split("").reverse().join(""):o.call(this)},t._valueSet=function(e){s.call(this,re?e.split("").reverse().join(""):e)}}}function W(t,a,i,r){function o(){if(n.keepStatic){f(!0);var a,i=[],r=e.extend(!0,{},p().validPositions);for(a=d();a>=0;a--){var o=p().validPositions[a];if(o){if(void 0!=o.alternation&&o.locator[o.alternation]==h(a).locator[o.alternation])break;null!=o.match.fn&&i.push(o.input),delete p().validPositions[a]}}if(a>0)for(;i.length>0;){p().p=R(d());var s=e.Event("keypress");s.which=i.pop().charCodeAt(0),z.call(t,s,!0,!1,!1,p().p)}else p().validPositions=e.extend(!0,{},r)}}if((n.numericInput||re)&&(a==e.inputmask.keyCode.BACKSPACE?a=e.inputmask.keyCode.DELETE:a==e.inputmask.keyCode.DELETE&&(a=e.inputmask.keyCode.BACKSPACE),re)){var s=i.end;i.end=i.begin,i.begin=s}if(a==e.inputmask.keyCode.BACKSPACE&&(i.end-i.begin<1||0==n.insertMode)?i.begin=j(i.begin):a==e.inputmask.keyCode.DELETE&&i.begin==i.end&&(i.end=E(i.end)?i.end+1:R(i.end)+1),v(i.begin,i.end,!1,r),r!==!0){o();var l=d(i.begin);l<i.begin?(-1==l&&f(),p().p=R(l)):p().p=i.begin}}function q(a){var i=this,r=e(i),o=a.keyCode,l=T(i);o==e.inputmask.keyCode.BACKSPACE||o==e.inputmask.keyCode.DELETE||s&&127==o||a.ctrlKey&&88==o&&!t("cut")?(a.preventDefault(),88==o&&(X=b().join("")),W(i,o,l),F(i,b(),p().p,a,X!=b().join("")),i._valueGet()==x().join("")?r.trigger("cleared"):K(b())===!0&&r.trigger("complete"),n.showTooltip&&r.prop("title",p().mask)):o==e.inputmask.keyCode.END||o==e.inputmask.keyCode.PAGE_DOWN?setTimeout(function(){var e=R(d());n.insertMode||e!=A()||a.shiftKey||e--,T(i,a.shiftKey?l.begin:e,e)},0):o==e.inputmask.keyCode.HOME&&!a.shiftKey||o==e.inputmask.keyCode.PAGE_UP?T(i,0,a.shiftKey?l.begin:0):(n.undoOnEscape&&o==e.inputmask.keyCode.ESCAPE||90==o&&a.ctrlKey)&&a.altKey!==!0?(M(i,!0,!1,X.split("")),r.click()):o!=e.inputmask.keyCode.INSERT||a.shiftKey||a.ctrlKey?0!=n.insertMode||a.shiftKey||(o==e.inputmask.keyCode.RIGHT?setTimeout(function(){var e=T(i);T(i,e.begin)},0):o==e.inputmask.keyCode.LEFT&&setTimeout(function(){var e=T(i);T(i,re?e.begin+1:e.begin-1)},0)):(n.insertMode=!n.insertMode,T(i,n.insertMode||l.begin!=A()?l.begin:l.begin-1)),n.onKeyDown.call(this,a,b(),T(i).begin,n),se=-1!=e.inArray(o,n.ignorables)}function z(t,a,i,r,o){var s=this,l=e(s),u=t.which||t.charCode||t.keyCode;if(!(a===!0||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||se))return!0;if(u){46==u&&0==t.shiftKey&&","==n.radixPoint&&(u=44);var c,d=a?{begin:o,end:o}:T(s),v=String.fromCharCode(u),h=H(d.begin,d.end);h&&(p().undoPositions=e.extend(!0,{},p().validPositions),W(s,e.inputmask.keyCode.DELETE,d,!0),d.begin=p().p,n.insertMode||(n.insertMode=!n.insertMode,m(d.begin,r),n.insertMode=!n.insertMode),h=!n.multi),p().writeOutBuffer=!0;var g=re&&!h?d.end:d.begin,k=_(g,v,r);if(k!==!1){if(k!==!0&&(g=void 0!=k.pos?k.pos:g,v=void 0!=k.c?k.c:v),f(!0),void 0!=k.caret)c=k.caret;else{var x=p().validPositions;c=!n.keepStatic&&(void 0!=x[g+1]&&y(g+1,x[g].locator.slice(),g).length>1||void 0!=x[g].alternation)?g+1:R(g)}p().p=c}if(i!==!1){var S=this;if(setTimeout(function(){n.onKeyValidation.call(S,k,n)},0),p().writeOutBuffer&&k!==!1){var w=b();F(s,w,a?void 0:n.numericInput?j(c):c,t,a!==!0),a!==!0&&setTimeout(function(){K(w)===!0&&l.trigger("complete")},0)}else h&&(p().buffer=void 0,p().validPositions=p().undoPositions)}else h&&(p().buffer=void 0,p().validPositions=p().undoPositions);if(n.showTooltip&&l.prop("title",p().mask),a&&e.isFunction(n.onBeforeWrite)){var E=n.onBeforeWrite.call(this,t,b(),c,n);if(E&&E.refreshFromBuffer){var A=E.refreshFromBuffer;P(A===!0?A:A.start,A.end,E.buffer),f(!0),E.caret&&(p().p=E.caret)}}t.preventDefault()}}function Q(t){var a=this,i=e(a),r=a._valueGet(!0),o=T(a);if("propertychange"==t.type&&a._valueGet().length<=A())return!0;if("paste"==t.type){var s=r.substr(0,o.begin),l=r.substr(o.end,r.length);s==x().slice(0,o.begin).join("")&&(s=""),l==x().slice(o.end).join("")&&(l=""),window.clipboardData&&window.clipboardData.getData?r=s+window.clipboardData.getData("Text")+l:t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.getData&&(r=s+t.originalEvent.clipboardData.getData("text/plain")+l)}var u=r;if(e.isFunction(n.onBeforePaste)){if(u=n.onBeforePaste.call(a,r,n),u===!1)return t.preventDefault(),!1;u||(u=r)}return M(a,!0,!1,re?u.split("").reverse():u.split("")),i.click(),K(b())===!0&&i.trigger("complete"),!1}function $(t){var a=this;M(a,!0,!1),K(b())===!0&&e(a).trigger("complete"),t.preventDefault()}function V(e){var t=this;X=b().join(""),(""==te||0!=e.originalEvent.data.indexOf(te))&&(ee=T(t))}function Y(t){var a=this,i=ee||T(a);0==t.originalEvent.data.indexOf(te)&&(f(),i={begin:0,end:0});var r=t.originalEvent.data;T(a,i.begin,i.end);for(var o=0;o<r.length;o++){var s=e.Event("keypress");s.which=r.charCodeAt(o),ne=!1,se=!1,z.call(a,s)}setTimeout(function(){var e=p().p;F(a,b(),n.numericInput?j(e):e)},0),te=t.originalEvent.data}function Z(){}function J(t){if(ae=e(t),ae.is(":input")&&a(ae.attr("type"))||t.isContentEditable||ae.is("div")){if(ae.data("_inputmask",{maskset:r,opts:n,isRTL:!1}),n.showTooltip&&ae.prop("title",p().mask),("rtl"==t.dir||n.rightAlign)&&ae.css("text-align","right"),"rtl"==t.dir||n.numericInput){t.dir="ltr",ae.removeAttr("dir");var i=ae.data("_inputmask");i.isRTL=!0,ae.data("_inputmask",i),re=!0}ae.unbind(".inputmask"),(ae.is(":input")||t.isContentEditable)&&(ae.closest("form").bind("submit",function(){X!=b().join("")&&ae.change(),ae[0]._valueGet&&ae[0]._valueGet()==x().join("")&&ae[0]._valueSet(""),n.removeMaskOnSubmit&&ae.inputmask("remove")}).bind("reset",function(){setTimeout(function(){ae.triggerHandler("setvalue.inputmask")},0)}),ae.bind("mouseenter.inputmask",function(){var t=e(this),a=this;!t.is(":focus")&&n.showMaskOnHover&&a._valueGet()!=b().join("")&&F(a,b())}).bind("blur.inputmask",function(t){var a=e(this),i=this;if(a.data("_inputmask")){var r=i._valueGet(),o=b().slice();le=!0,X!=o.join("")&&setTimeout(function(){a.change(),X=o.join("")},0),""!=r&&(n.clearMaskOnLostFocus&&(r==x().join("")?o=[]:B(o)),K(o)===!1&&(a.trigger("incomplete"),n.clearIncomplete&&(f(),o=n.clearMaskOnLostFocus?[]:x().slice())),F(i,o,void 0,t))}}).bind("focus.inputmask",function(){var t=(e(this),this),a=t._valueGet();n.showMaskOnFocus&&(!n.showMaskOnHover||n.showMaskOnHover&&""==a)&&t._valueGet()!=b().join("")&&F(t,b(),R(d())),X=b().join("")}).bind("mouseleave.inputmask",function(){var t=e(this),a=this;if(n.clearMaskOnLostFocus){var i=b().slice(),r=a._valueGet();t.is(":focus")||r==t.attr("placeholder")||""==r||(r==x().join("")?i=[]:B(i),F(a,i))}}).bind("click.inputmask",function(){var t=e(this),a=this;if(t.is(":focus")){var i=T(a);if(i.begin==i.end)if(n.radixFocus&&""!=n.radixPoint&&-1!=e.inArray(n.radixPoint,b())&&(le||b().join("")==x().join("")))T(a,e.inArray(n.radixPoint,b())),le=!1;else{var r=re?I(i.begin):i.begin,o=R(d(r));o>r?T(a,E(r)?r:R(r)):T(a,o)}}}).bind("dblclick.inputmask",function(){var e=this;setTimeout(function(){T(e,0,R(d()))},0)}).bind(c+".inputmask dragdrop.inputmask drop.inputmask",Q).bind("cut.inputmask",function(t){oe=!0;var a=this,i=e(a),r=T(a);W(a,e.inputmask.keyCode.DELETE,r),F(a,b(),p().p,t,X!=b().join("")),a._valueGet()==x().join("")&&i.trigger("cleared"),n.showTooltip&&i.prop("title",p().mask)}).bind("complete.inputmask",n.oncomplete).bind("incomplete.inputmask",n.onincomplete).bind("cleared.inputmask",n.oncleared),ae.bind("keydown.inputmask",q).bind("keypress.inputmask",z),u||ae.bind("compositionstart.inputmask",V).bind("compositionupdate.inputmask",Y).bind("compositionend.inputmask",Z),"paste"===c&&ae.bind("input.inputmask",$)),ae.bind("setvalue.inputmask",function(){var t=this,a=t._valueGet();t._valueSet(e.isFunction(n.onBeforeMask)?n.onBeforeMask.call(t,a,n)||a:a),M(t,!0,!1),X=b().join(""),(n.clearMaskOnLostFocus||n.clearIncomplete)&&t._valueGet()==x().join("")&&t._valueSet("")}),U(t);var o=e.isFunction(n.onBeforeMask)?n.onBeforeMask.call(t,t._valueGet(),n)||t._valueGet():t._valueGet();M(t,!0,!1,o.split(""));var s=b().slice();X=s.join("");var l;try{l=document.activeElement}catch(m){}K(s)===!1&&n.clearIncomplete&&f(),n.clearMaskOnLostFocus&&(s.join("")==x().join("")?s=[]:B(s)),F(t,s),l===t&&T(t,R(d())),L(t)}}var X,ee,te,ae,ie,re=!1,ne=!1,oe=!1,se=!1,le=!0;if(void 0!=i)switch(i.action){case"isComplete":return ae=e(i.el),r=ae.data("_inputmask").maskset,n=ae.data("_inputmask").opts,K(i.buffer);case"unmaskedvalue":return ae=i.$input,r=ae.data("_inputmask").maskset,n=ae.data("_inputmask").opts,re=i.$input.data("_inputmask").isRTL,G(i.$input);case"mask":X=b().join(""),J(i.el);break;case"format":ae=e({}),ae.data("_inputmask",{maskset:r,opts:n,isRTL:n.numericInput}),n.numericInput&&(re=!0);var ue=(e.isFunction(n.onBeforeMask)?n.onBeforeMask.call(ae,i.value,n)||i.value:i.value).split("");return M(ae,!1,!1,re?ue.reverse():ue),e.isFunction(n.onBeforeWrite)&&n.onBeforeWrite.call(this,void 0,b(),0,n),i.metadata?{value:re?b().slice().reverse().join(""):b().join(""),metadata:ae.inputmask("getmetadata")}:re?b().slice().reverse().join(""):b().join("");case"isValid":ae=e({}),ae.data("_inputmask",{maskset:r,opts:n,isRTL:n.numericInput}),n.numericInput&&(re=!0);var ue=i.value.split("");M(ae,!1,!0,re?ue.reverse():ue);for(var ce=b(),pe=N(),fe=ce.length-1;fe>pe&&!E(fe);fe--);return ce.splice(pe,fe+1-pe),K(ce)&&i.value==ce.join("");case"getemptymask":return ae=e(i.el),r=ae.data("_inputmask").maskset,n=ae.data("_inputmask").opts,x();case"remove":var de=i.el;ae=e(de),r=ae.data("_inputmask").maskset,n=ae.data("_inputmask").opts,de._valueSet(G(ae)),ae.unbind(".inputmask"),ae.removeData("_inputmask");var me;Object.getOwnPropertyDescriptor&&(me=Object.getOwnPropertyDescriptor(de,"value")),me&&me.get?de._valueGet&&Object.defineProperty(de,"value",{get:de._valueGet,set:de._valueSet}):document.__lookupGetter__&&de.__lookupGetter__("value")&&de._valueGet&&(de.__defineGetter__("value",de._valueGet),de.__defineSetter__("value",de._valueSet));try{delete de._valueGet,delete de._valueSet}catch(ve){de._valueGet=void 0,de._valueSet=void 0}break;case"getmetadata":if(ae=e(i.el),r=ae.data("_inputmask").maskset,n=ae.data("_inputmask").opts,e.isArray(r.metadata)){for(var he,ge=d(),ke=ge;ke>=0;ke--)if(p().validPositions[ke]&&void 0!=p().validPositions[ke].alternation){he=p().validPositions[ke].alternation;break}return void 0!=he?r.metadata[p().validPositions[ge].locator[he]]:r.metadata[0]}return r.metadata}}if(void 0===e.fn.inputmask){var o=navigator.userAgent,s=null!==o.match(new RegExp("iphone","i")),l=(null!==o.match(new RegExp("android.*safari.*","i")),null!==o.match(new RegExp("android.*chrome.*","i"))),u=null!==o.match(new RegExp("android.*firefox.*","i")),c=(/Kindle/i.test(o)||/Silk/i.test(o)||/KFTT/i.test(o)||/KFOT/i.test(o)||/KFJWA/i.test(o)||/KFJWI/i.test(o)||/KFSOWI/i.test(o)||/KFTHWA/i.test(o)||/KFTHWI/i.test(o)||/KFAPWA/i.test(o)||/KFAPWI/i.test(o),t("paste")?"paste":t("input")?"input":"propertychange");
e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:e.noop,postValidation:void 0},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},escapeRegex:function(e){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return e.replace(new RegExp("(\\"+t.join("|\\")+")","gim"),"\\$1")},format:function(t,a,o){var s=e.extend(!0,{},e.inputmask.defaults,a);return i(s.alias,a,s),n({action:"format",value:t,metadata:o},r(s,a&&void 0!==a.definitions),s)},isValid:function(t,a){var o=e.extend(!0,{},e.inputmask.defaults,a);return i(o.alias,a,o),n({action:"isValid",value:t},r(o,a&&void 0!==a.definitions),o)}},e.fn.inputmask=function(t,a){function o(t,a,r){var n=e(t);n.data("inputmask-alias")&&i(n.data("inputmask-alias"),e.extend(!0,{},a),a);for(var o in a){var s=n.data("inputmask-"+o.toLowerCase());void 0!=s&&("mask"==o&&0==s.indexOf("[")?(a[o]=s.replace(/[\s[\]]/g,"").split("','"),a[o][0]=a[o][0].replace("'",""),a[o][a[o].length-1]=a[o][a[o].length-1].replace("'","")):a[o]="boolean"==typeof s?s:s.toString(),r&&(r[o]=a[o]))}return a}var s,l=e.extend(!0,{},e.inputmask.defaults,a);if("string"==typeof t)switch(t){case"mask":return i(l.alias,a,l),this.each(function(){return o(this,l),s=r(l,a&&void 0!==a.definitions),void 0==s?this:void n({action:"mask",el:this},s,l)});case"unmaskedvalue":var u=e(this);return u.data("_inputmask")?n({action:"unmaskedvalue",$input:u}):u.val();case"remove":return this.each(function(){var t=e(this);t.data("_inputmask")&&n({action:"remove",el:this})});case"getemptymask":return this.data("_inputmask")?n({action:"getemptymask",el:this}):"";case"hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case"isComplete":return this.data("_inputmask")?n({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):!0;case"getmetadata":return this.data("_inputmask")?n({action:"getmetadata",el:this}):void 0;default:return i(l.alias,a,l),i(t,a,l)||(l.mask=t),this.each(function(){return o(this,l),s=r(l,a&&void 0!==a.definitions),void 0==s?this:void n({action:"mask",el:this},s,l)})}else{if("object"==typeof t)return l=e.extend(!0,{},e.inputmask.defaults,t),i(l.alias,t,l),this.each(function(){return o(this,l),s=r(l,t&&void 0!==t.definitions),void 0==s?this:void n({action:"mask",el:this},s,l)});if(void 0==t)return this.each(function(){var t=e(this).attr("data-inputmask");if(t&&""!=t)try{t=t.replace(new RegExp("'","g"),'"');var r=e.parseJSON("{"+t+"}");e.extend(!0,r,a),l=e.extend(!0,{},e.inputmask.defaults,r),l=o(this,l),i(l.alias,r,l),l.alias=void 0,e(this).inputmask("mask",l)}catch(n){}if(e(this).attr("data-inputmask-mask")||e(this).attr("data-inputmask-alias")){l=e.extend(!0,{},e.inputmask.defaults,{});var s={};l=o(this,l,s),i(l.alias,s,l),l.alias=void 0,e(this).inputmask("mask",l)}})}}}return e.fn.inputmask}(jQuery),function(e){return e.extend(e.inputmask.defaults.definitions,{h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),e.extend(e.inputmask.defaults.aliases,{"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(t){var a=e.inputmask.escapeRegex.call(this,t);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+a+"[01])")},val2:function(t){var a=e.inputmask.escapeRegex.call(this,t);return new RegExp("((0[1-9]|[12][0-9])"+a+"(0[1-9]|1[012]))|(30"+a+"(0[13-9]|1[012]))|(31"+a+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(e,t,a){if(isNaN(e))return!1;var i=parseInt(e.concat(t.toString().slice(e.length))),r=parseInt(e.concat(a.toString().slice(e.length)));return(isNaN(i)?!1:i>=t&&a>=i)||(isNaN(r)?!1:r>=t&&a>=r)},determinebaseyear:function(e,t,a){var i=(new Date).getFullYear();if(e>i)return e;if(i>t){for(var r=t.toString().slice(0,2),n=t.toString().slice(2,4);r+a>t;)r--;var o=r+n;return e>o?e:o}return i},onKeyDown:function(t){var a=e(this);if(t.ctrlKey&&t.keyCode==e.inputmask.keyCode.RIGHT){var i=new Date;a.val(i.getDate().toString()+(i.getMonth()+1).toString()+i.getFullYear().toString()),a.triggerHandler("setvalue.inputmask")}},getFrontValue:function(e,t,a){for(var i=0,r=0,n=0;n<e.length&&"2"!=e.charAt(n);n++){var o=a.definitions[e.charAt(n)];o?(i+=r,r=o.cardinality):r++}return t.join("").substr(i,r)},definitions:{1:{validator:function(e,t,a,i,r){var n=r.regex.val1.test(e);return i||n||e.charAt(1)!=r.separator&&-1=="-./".indexOf(e.charAt(1))||!(n=r.regex.val1.test("0"+e.charAt(0)))?n:(t.buffer[a-1]="0",{refreshFromBuffer:{start:a-1,end:a},pos:a,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,a,i,r){var n=e;isNaN(t.buffer[a+1])||(n+=t.buffer[a+1]);var o=1==n.length?r.regex.val1pre.test(n):r.regex.val1.test(n);if(!i&&!o){if(o=r.regex.val1.test(e+"0"))return t.buffer[a]=e,t.buffer[++a]="0",{pos:a,c:"0"};if(o=r.regex.val1.test("0"+e))return t.buffer[a]="0",a++,{pos:a}}return o},cardinality:1}]},2:{validator:function(e,t,a,i,r){var n=r.getFrontValue(t.mask,t.buffer,r);-1!=n.indexOf(r.placeholder[0])&&(n="01"+r.separator);var o=r.regex.val2(r.separator).test(n+e);if(!i&&!o&&(e.charAt(1)==r.separator||-1!="-./".indexOf(e.charAt(1)))&&(o=r.regex.val2(r.separator).test(n+"0"+e.charAt(0))))return t.buffer[a-1]="0",{refreshFromBuffer:{start:a-1,end:a},pos:a,c:e.charAt(0)};if(r.mask.indexOf("2")==r.mask.length-1&&o){var s=t.buffer.join("").substr(4,4)+e;if(s!=r.leapday)return!0;var l=parseInt(t.buffer.join("").substr(0,4),10);return l%4===0?l%100===0?l%400===0?!0:!1:!0:!1}return o},cardinality:2,prevalidator:[{validator:function(e,t,a,i,r){isNaN(t.buffer[a+1])||(e+=t.buffer[a+1]);var n=r.getFrontValue(t.mask,t.buffer,r);-1!=n.indexOf(r.placeholder[0])&&(n="01"+r.separator);var o=1==e.length?r.regex.val2pre(r.separator).test(n+e):r.regex.val2(r.separator).test(n+e);return i||o||!(o=r.regex.val2(r.separator).test(n+"0"+e))?o:(t.buffer[a]="0",a++,{pos:a})},cardinality:1}]},y:{validator:function(e,t,a,i,r){if(r.isInYearRange(e,r.yearrange.minyear,r.yearrange.maxyear)){var n=t.buffer.join("").substr(0,6);if(n!=r.leapday)return!0;var o=parseInt(e,10);return o%4===0?o%100===0?o%400===0?!0:!1:!0:!1}return!1},cardinality:4,prevalidator:[{validator:function(e,t,a,i,r){var n=r.isInYearRange(e,r.yearrange.minyear,r.yearrange.maxyear);if(!i&&!n){var o=r.determinebaseyear(r.yearrange.minyear,r.yearrange.maxyear,e+"0").toString().slice(0,1);if(n=r.isInYearRange(o+e,r.yearrange.minyear,r.yearrange.maxyear))return t.buffer[a++]=o.charAt(0),{pos:a};if(o=r.determinebaseyear(r.yearrange.minyear,r.yearrange.maxyear,e+"0").toString().slice(0,2),n=r.isInYearRange(o+e,r.yearrange.minyear,r.yearrange.maxyear))return t.buffer[a++]=o.charAt(0),t.buffer[a++]=o.charAt(1),{pos:a}}return n},cardinality:1},{validator:function(e,t,a,i,r){var n=r.isInYearRange(e,r.yearrange.minyear,r.yearrange.maxyear);if(!i&&!n){var o=r.determinebaseyear(r.yearrange.minyear,r.yearrange.maxyear,e).toString().slice(0,2);if(n=r.isInYearRange(e[0]+o[1]+e[1],r.yearrange.minyear,r.yearrange.maxyear))return t.buffer[a++]=o.charAt(1),{pos:a};if(o=r.determinebaseyear(r.yearrange.minyear,r.yearrange.maxyear,e).toString().slice(0,2),r.isInYearRange(o+e,r.yearrange.minyear,r.yearrange.maxyear)){var s=t.buffer.join("").substr(0,6);if(s!=r.leapday)n=!0;else{var l=parseInt(e,10);n=l%4===0?l%100===0?l%400===0?!0:!1:!0:!1}}else n=!1;if(n)return t.buffer[a-1]=o.charAt(0),t.buffer[a++]=o.charAt(1),t.buffer[a++]=e.charAt(0),{refreshFromBuffer:{start:a-3,end:a},pos:a}}return n},cardinality:2},{validator:function(e,t,a,i,r){return r.isInYearRange(e,r.yearrange.minyear,r.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(t){var a=e.inputmask.escapeRegex.call(this,t);return new RegExp("((0[13-9]|1[012])"+a+"[0-3])|(02"+a+"[0-2])")},val2:function(t){var a=e.inputmask.escapeRegex.call(this,t);return new RegExp("((0[1-9]|1[012])"+a+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+a+"30)|((0[13578]|1[02])"+a+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(t){var a=e(this);if(t.ctrlKey&&t.keyCode==e.inputmask.keyCode.RIGHT){var i=new Date;a.val((i.getMonth()+1).toString()+i.getDate().toString()+i.getFullYear().toString()),a.triggerHandler("setvalue.inputmask")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(t){var a=e(this);if(t.ctrlKey&&t.keyCode==e.inputmask.keyCode.RIGHT){var i=new Date;a.val(i.getFullYear().toString()+(i.getMonth()+1).toString()+i.getDate().toString()),a.triggerHandler("setvalue.inputmask")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(e,t,a,i,r){if("24"==r.hourFormat&&24==parseInt(e,10))return t.buffer[a-1]="0",t.buffer[a]="0",{refreshFromBuffer:{start:a-1,end:a},c:"0"};var n=r.regex.hrs.test(e);if(!i&&!n&&(e.charAt(1)==r.timeseparator||-1!="-.:".indexOf(e.charAt(1)))&&(n=r.regex.hrs.test("0"+e.charAt(0))))return t.buffer[a-1]="0",t.buffer[a]=e.charAt(0),a++,{refreshFromBuffer:{start:a-2,end:a},pos:a,c:r.timeseparator};if(n&&"24"!==r.hourFormat&&r.regex.hrs24.test(e)){var o=parseInt(e,10);return 24==o?(t.buffer[a+5]="a",t.buffer[a+6]="m"):(t.buffer[a+5]="p",t.buffer[a+6]="m"),o-=12,10>o?(t.buffer[a]=o.toString(),t.buffer[a-1]="0"):(t.buffer[a]=o.toString().charAt(1),t.buffer[a-1]=o.toString().charAt(0)),{refreshFromBuffer:{start:a-1,end:a+6},c:t.buffer[a]}}return n},cardinality:2,prevalidator:[{validator:function(e,t,a,i,r){var n=r.regex.hrspre.test(e);return i||n||!(n=r.regex.hrs.test("0"+e))?n:(t.buffer[a]="0",a++,{pos:a})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(e,t,a,i,r){var n=r.regex.mspre.test(e);return i||n||!(n=r.regex.ms.test("0"+e))?n:(t.buffer[a]="0",a++,{pos:a})},cardinality:1}]},t:{validator:function(e,t,a,i,r){return r.regex.ampm.test(e+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"}}),e.fn.inputmask}(jQuery),function(e){return e.extend(e.inputmask.defaults.definitions,{A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"}}),e.extend(e.inputmask.defaults.aliases,{url:{mask:"ir",placeholder:"",separator:"",defaultPrefix:"http://",regex:{urlpre1:new RegExp("[fh]"),urlpre2:new RegExp("(ft|ht)"),urlpre3:new RegExp("(ftp|htt)"),urlpre4:new RegExp("(ftp:|http|ftps)"),urlpre5:new RegExp("(ftp:/|ftps:|http:|https)"),urlpre6:new RegExp("(ftp://|ftps:/|http:/|https:)"),urlpre7:new RegExp("(ftp://|ftps://|http://|https:/)"),urlpre8:new RegExp("(ftp://|ftps://|http://|https://)")},definitions:{i:{validator:function(){return!0},cardinality:8,prevalidator:function(){for(var e=[],t=8,a=0;t>a;a++)e[a]=function(){var e=a;return{validator:function(t,a,i,r,n){if(n.regex["urlpre"+(e+1)]){var o,s=t;e+1-t.length>0&&(s=a.buffer.join("").substring(0,e+1-t.length)+""+s);var l=n.regex["urlpre"+(e+1)].test(s);if(!r&&!l){for(i-=e,o=0;o<n.defaultPrefix.length;o++)a.buffer[i]=n.defaultPrefix[o],i++;for(o=0;o<s.length-1;o++)a.buffer[i]=s[o],i++;return{pos:i}}return l}return!1},cardinality:e}}();return e}()},r:{validator:".",cardinality:50}},insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,a){return a-1>-1&&"."!=t.buffer[a-1]?(e=t.buffer[a-1]+e,e=a-2>-1&&"."!=t.buffer[a-2]?t.buffer[a-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)},cardinality:1}}},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,64}]@*{1,64}[.*{2,64}][.*{2,6}][.*{1,2}]",greedy:!1,onBeforePaste:function(e){return e=e.toLowerCase(),e.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"}}}}),e.fn.inputmask}(jQuery),function(e){return e.extend(e.inputmask.defaults.aliases,{numeric:{mask:function(e){function t(t){for(var a="",i=0;i<t.length;i++)a+=e.definitions[t[i]]?"\\"+t[i]:t[i];return a}if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator==e.radixPoint&&(e.groupSeparator="."==e.radixPoint?",":","==e.radixPoint?".":"")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.autoGroup=e.autoGroup&&""!=e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var a=Math.floor(e.integerDigits/e.groupSize),i=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0==i?a-1:a)}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),e.radixFocus=e.radixFocus&&"0"==e.placeholder,e.definitions[";"]=e.definitions["~"];var r=t(e.prefix);return r+="[+]",r+="~{1,"+e.integerDigits+"}",void 0!=e.digits&&(isNaN(e.digits)||parseInt(e.digits)>0)&&(r+=e.digitsOptional?"["+(e.decimalProtect?":":e.radixPoint)+";{"+e.digits+"}]":(e.decimalProtect?":":e.radixPoint)+";{"+e.digits+"}"),""!=e.negationSymbol.back&&(r+="[-]"),r+=t(e.suffix),e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,groupSeparator:"",radixPoint:".",radixFocus:!0,groupSize:3,autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:void 0,max:void 0,postFormat:function(t,a,i,r){var n=!1;t.length>=r.suffix.length&&t.join("").indexOf(r.suffix)==t.length-r.suffix.length&&(t.length=t.length-r.suffix.length,n=!0),a=a>=t.length?t.length-1:a<r.prefix.length?r.prefix.length:a;var o=!1,s=t[a];if(""==r.groupSeparator||-1!=e.inArray(r.radixPoint,t)&&a>=e.inArray(r.radixPoint,t)||new RegExp("["+e.inputmask.escapeRegex(r.negationSymbol.front)+"+]").test(s)){if(n)for(var l=0,u=r.suffix.length;u>l;l++)t.push(r.suffix.charAt(l));return{pos:a}}var c=t.slice();s==r.groupSeparator&&(c.splice(a--,1),s=c[a]),i?c[a]="?":c.splice(a,0,"?");var p=c.join(""),f=p;if(p.length>0&&r.autoGroup||i&&-1!=p.indexOf(r.groupSeparator)){var d=e.inputmask.escapeRegex(r.groupSeparator);o=0==p.indexOf(r.groupSeparator),p=p.replace(new RegExp(d,"g"),"");var m=p.split(r.radixPoint);if(p=""==r.radixPoint?p:m[0],p!=r.prefix+"?0"&&p.length>=r.groupSize+r.prefix.length)for(var v=new RegExp("([-+]?[\\d?]+)([\\d?]{"+r.groupSize+"})");v.test(p);)p=p.replace(v,"$1"+r.groupSeparator+"$2"),p=p.replace(r.groupSeparator+r.groupSeparator,r.groupSeparator);""!=r.radixPoint&&m.length>1&&(p+=r.radixPoint+m[1])}o=f!=p,t.length=p.length;for(var l=0,u=p.length;u>l;l++)t[l]=p.charAt(l);var h=e.inArray("?",t);if(i?t[h]=s:t.splice(h,1),!o&&n)for(var l=0,u=r.suffix.length;u>l;l++)t.push(r.suffix.charAt(l));return{pos:h,refreshFromBuffer:o,buffer:t}},onBeforeWrite:function(t,a,i,r){if(t&&"blur"==t.type){var n=a.join(""),o=n.replace(r.prefix,"");if(o=o.replace(r.suffix,""),o=o.replace(new RegExp(e.inputmask.escapeRegex(r.groupSeparator),"g"),""),","===r.radixPoint&&(o=o.replace(e.inputmask.escapeRegex(r.radixPoint),".")),isFinite(o)&&isFinite(r.min)&&parseFloat(o)<parseFloat(r.min))return e.extend(!0,{refreshFromBuffer:!0,buffer:(r.prefix+r.min).split("")},r.postFormat((r.prefix+r.min).split(""),0,!0,r));var s=""!=r.radixPoint?a.join("").split(r.radixPoint):[a.join("")],l=s[0].match(r.regex.integerPart(r)),u=2==s.length?s[1].match(r.regex.integerNPart(r)):void 0;!l||l[0]!=r.negationSymbol.front+"0"&&l[0]!=r.negationSymbol.front&&"+"!=l[0]||void 0!=u&&!u[0].match(/^0+$/)||a.splice(l.index,1);var c=e.inArray(r.radixPoint,a);if(-1!=c&&isFinite(r.digits)&&!r.digitsOptional){for(var p=1;p<=r.digits;p++)(void 0==a[c+p]||a[c+p]==r.placeholder.charAt(0))&&(a[c+p]="0");return{refreshFromBuffer:!0,buffer:a}}}if(r.autoGroup){var f=r.postFormat(a,i-1,!0,r);return f.caret=i<=r.prefix.length?f.pos:f.pos+1,f}},regex:{integerPart:function(t){return new RegExp("["+e.inputmask.escapeRegex(t.negationSymbol.front)+"+]?\\d+")},integerNPart:function(t){return new RegExp("[\\d"+e.inputmask.escapeRegex(t.groupSeparator)+"]+")}},signHandler:function(e,t,a,i,r){if(!i&&r.allowMinus&&"-"===e||r.allowPlus&&"+"===e){var n=t.buffer.join("").match(r.regex.integerPart(r));if(n&&n[0].length>0)return t.buffer[n.index]==("-"===e?"+":r.negationSymbol.front)?"-"==e?""!=r.negationSymbol.back?{pos:n.index,c:r.negationSymbol.front,remove:n.index,caret:a,insert:{pos:t.buffer.length-r.suffix.length-1,c:r.negationSymbol.back}}:{pos:n.index,c:r.negationSymbol.front,remove:n.index,caret:a}:""!=r.negationSymbol.back?{pos:n.index,c:"+",remove:[n.index,t.buffer.length-r.suffix.length-1],caret:a}:{pos:n.index,c:"+",remove:n.index,caret:a}:t.buffer[n.index]==("-"===e?r.negationSymbol.front:"+")?"-"==e&&""!=r.negationSymbol.back?{remove:[n.index,t.buffer.length-r.suffix.length-1],caret:a-1}:{remove:n.index,caret:a-1}:"-"==e?""!=r.negationSymbol.back?{pos:n.index,c:r.negationSymbol.front,caret:a+1,insert:{pos:t.buffer.length-r.suffix.length,c:r.negationSymbol.back}}:{pos:n.index,c:r.negationSymbol.front,caret:a+1}:{pos:n.index,c:e,caret:a+1}}return!1},radixHandler:function(t,a,i,r,n){if(!r&&t===n.radixPoint&&n.digits>0){var o=e.inArray(n.radixPoint,a.buffer),s=a.buffer.join("").match(n.regex.integerPart(n));if(-1!=o&&a.validPositions[o])return a.validPositions[o-1]?{caret:o+1}:{pos:s.index,c:s[0],caret:o+1};if(!s||"0"==s[0]&&s.index+1!=i)return a.buffer[s?s.index:i]="0",{pos:(s?s.index:i)+1}}return!1},leadingZeroHandler:function(t,a,i,r,n){var o=a.buffer.join("").match(n.regex.integerNPart(n)),s=e.inArray(n.radixPoint,a.buffer);if(o&&!r&&(-1==s||s>=i))if(0==o[0].indexOf("0")){i<n.prefix.length&&(i=o.index);var l=e.inArray(n.radixPoint,a._buffer),u=a._buffer&&a.buffer.slice(s).join("")==a._buffer.slice(l).join("")||0==parseInt(a.buffer.slice(s+1).join("")),c=a._buffer&&a.buffer.slice(o.index,s).join("")==a._buffer.slice(n.prefix.length,l).join("")||"0"==a.buffer.slice(o.index,s).join("");if(-1==s||u&&c)return a.buffer.splice(o.index,1),i=i>o.index?i-1:o.index,{pos:i,remove:o.index};if(o.index+1==i||"0"==t)return a.buffer.splice(o.index,1),i=o.index,{pos:i,remove:o.index}}else if("0"===t&&i<=o.index&&o[0]!=n.groupSeparator)return!1;return!0},postValidation:function(t,a){var i=!0,r=t.join(""),n=r.replace(a.prefix,"");return n=n.replace(a.suffix,""),n=n.replace(new RegExp(e.inputmask.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(n=n.replace(e.inputmask.escapeRegex(a.radixPoint),".")),n=n.replace(new RegExp("^"+e.inputmask.escapeRegex(a.negationSymbol.front)),"-"),n=n.replace(new RegExp(e.inputmask.escapeRegex(a.negationSymbol.back)+"$"),""),isFinite(n)&&isFinite(a.max)&&(i=parseFloat(n)<=parseFloat(a.max)),i},definitions:{"~":{validator:function(t,a,i,r,n){var o=n.signHandler(t,a,i,r,n);if(!o&&(o=n.radixHandler(t,a,i,r,n),!o&&(o=r?new RegExp("[0-9"+e.inputmask.escapeRegex(n.groupSeparator)+"]").test(t):new RegExp("[0-9]").test(t),o===!0&&(o=n.leadingZeroHandler(t,a,i,r,n),o===!0)))){var s=e.inArray(n.radixPoint,a.buffer);o=n.digitsOptional===!1&&i>s&&!r?{pos:i,remove:i}:{pos:i}}return o},cardinality:1,prevalidator:null},"+":{validator:function(e,t,a,i,r){var n=r.signHandler(e,t,a,i,r);return!n&&(i&&r.allowMinus&&e===r.negationSymbol.front||r.allowMinus&&"-"==e||r.allowPlus&&"+"==e)&&(n="-"==e?""!=r.negationSymbol.back?{pos:a,c:"-"===e?r.negationSymbol.front:"+",caret:a+1,insert:{pos:t.buffer.length,c:r.negationSymbol.back}}:{pos:a,c:"-"===e?r.negationSymbol.front:"+",caret:a+1}:!0),n},cardinality:1,prevalidator:null,placeholder:""},"-":{validator:function(e,t,a,i,r){var n=r.signHandler(e,t,a,i,r);return!n&&i&&r.allowMinus&&e===r.negationSymbol.back&&(n=!0),n},cardinality:1,prevalidator:null,placeholder:""},":":{validator:function(t,a,i,r,n){var o=n.signHandler(t,a,i,r,n);if(!o){var s="["+e.inputmask.escapeRegex(n.radixPoint)+"]";o=new RegExp(s).test(t),o&&a.validPositions[i]&&a.validPositions[i].match.placeholder==n.radixPoint&&(o={caret:i+1})}return o},cardinality:1,prevalidator:null,placeholder:function(e){return e.radixPoint}}},insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,onUnMask:function(t,a,i){var r=t.replace(i.prefix,"");return r=r.replace(i.suffix,""),r=r.replace(new RegExp(e.inputmask.escapeRegex(i.groupSeparator),"g"),""),i.unmaskAsNumber?(r=r.replace(e.inputmask.escapeRegex.call(this,i.radixPoint),"."),Number(r)):r},isComplete:function(t,a){var i=t.join(""),r=t.slice();if(a.postFormat(r,0,!0,a),r.join("")!=i)return!1;var n=i.replace(a.prefix,"");return n=n.replace(a.suffix,""),n=n.replace(new RegExp(e.inputmask.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(n=n.replace(e.inputmask.escapeRegex(a.radixPoint),".")),isFinite(n)},onBeforeMask:function(t,a){if(""!=a.radixPoint&&isFinite(t))t=t.toString().replace(".",a.radixPoint);else{var i=t.match(/,/g),r=t.match(/\./g);r&&i?r.length>i.length?(t=t.replace(/\./g,""),t=t.replace(",",a.radixPoint)):i.length>r.length?(t=t.replace(/,/g,""),t=t.replace(".",a.radixPoint)):t=t.indexOf(".")<t.indexOf(",")?t.replace(/\./g,""):t=t.replace(/,/g,""):t=t.replace(new RegExp(e.inputmask.escapeRegex(a.groupSeparator),"g"),"")}return 0==a.digits&&(-1!=t.indexOf(".")?t=t.substring(0,t.indexOf(".")):-1!=t.indexOf(",")&&(t=t.substring(0,t.indexOf(",")))),t},canClearPosition:function(t,a,i,r,n){var o=t.validPositions[a].input,s=o!=n.radixPoint&&isFinite(o)||a==i||o==n.groupSeparator||o==n.negationSymbol.front||o==n.negationSymbol.back;if(s&&isFinite(o)){var l;if(!r&&t.buffer){l=t.buffer.join("").substr(0,a).match(n.regex.integerNPart(n));var u=a+1,c=null==l||0==parseInt(l[0].replace(new RegExp(e.inputmask.escapeRegex(n.groupSeparator),"g"),""));if(c)for(;t.validPositions[u]&&(t.validPositions[u].input==n.groupSeparator||"0"==t.validPositions[u].input);)delete t.validPositions[u],u++}var p=[];for(var f in t.validPositions)p.push(t.validPositions[f].input);l=p.join("").match(n.regex.integerNPart(n));var d=e.inArray(n.radixPoint,t.buffer);if(l&&(-1==d||d>=a))if(0==l[0].indexOf("0"))s=l.index!=a||-1==d;else{var m=parseInt(l[0].replace(new RegExp(e.inputmask.escapeRegex(n.groupSeparator),"g"),""));-1!=d&&10>m&&"0"==n.placeholder.charAt(0)&&(t.validPositions[a].input="0",t.p=n.prefix.length+1,s=!1)}}return s}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:"0",radixPoint:""}}),e.fn.inputmask}(jQuery),function(e){return e.extend(e.inputmask.defaults.aliases,{phone:{url:"phone-codes/phone-codes.js",maskInit:"+pp(pp)pppppppp",countrycode:"",mask:function(t){t.definitions={p:{validator:function(){return!1},cardinality:1},"#":{validator:"[0-9]",cardinality:1}};var a=[];return e.ajax({url:t.url,async:!1,dataType:"json",success:function(e){a=e},error:function(e,a,i){alert(i+" - "+t.url)}}),a=a.sort(function(e,t){return(e.mask||e)<(t.mask||t)?-1:1}),""!=t.countrycode&&(t.maskInit="+"+t.countrycode+t.maskInit.substring(3)),a.splice(0,0,t.maskInit),a},nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(e,t){var a=e.replace(/^0/g,"");return(a.indexOf(t.countrycode)>1||-1==a.indexOf(t.countrycode))&&(a="+"+t.countrycode+a),a}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),e.fn.inputmask}(jQuery),function(e){return e.extend(e.inputmask.defaults.aliases,{Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(e,t){return new RegExp(t.regex).test(e.join(""))},definitions:{r:{validator:function(t,a,i,r,n){function o(e,t){this.matches=[],this.isGroup=e||!1,this.isQuantifier=t||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function s(){var e,t,a=new o,i=[];for(n.regexTokens=[];e=n.tokenizer.exec(n.regex);)switch(t=e[0],t.charAt(0)){case"(":i.push(new o(!0));break;case")":var r=i.pop();i.length>0?i[i.length-1].matches.push(r):a.matches.push(r);break;case"{":case"+":case"*":var s=new o(!1,!0);t=t.replace(/[{}]/g,"");var l=t.split(","),u=isNaN(l[0])?l[0]:parseInt(l[0]),c=1==l.length?u:isNaN(l[1])?l[1]:parseInt(l[1]);if(s.quantifier={min:u,max:c},i.length>0){var p=i[i.length-1].matches;if(e=p.pop(),!e.isGroup){var r=new o(!0);r.matches.push(e),e=r}p.push(e),p.push(s)}else{if(e=a.matches.pop(),!e.isGroup){var r=new o(!0);r.matches.push(e),e=r}a.matches.push(e),a.matches.push(s)}break;default:i.length>0?i[i.length-1].matches.push(t):a.matches.push(t)}a.matches.length>0&&n.regexTokens.push(a)}function l(t,a){var i=!1;a&&(c+="(",f++);for(var r=0;r<t.matches.length;r++){var n=t.matches[r];if(1==n.isGroup)i=l(n,!0);else if(1==n.isQuantifier){var o=e.inArray(n,t.matches),s=t.matches[o-1],u=c;if(isNaN(n.quantifier.max)){for(;n.repeaterPart&&n.repeaterPart!=c&&n.repeaterPart.length>c.length&&!(i=l(s,!0)););i=i||l(s,!0),i&&(n.repeaterPart=c),c=u+n.quantifier.max}else{for(var p=0,m=n.quantifier.max-1;m>p&&!(i=l(s,!0));p++);c=u+"{"+n.quantifier.min+","+n.quantifier.max+"}"}}else if(void 0!=n.matches)for(var v=0;v<n.length&&!(i=l(n[v],a));v++);else{var h;if("["==n.charAt(0)){h=c,h+=n;for(var g=0;f>g;g++)h+=")";var k=new RegExp("^("+h+")$");i=k.test(d)}else for(var y=0,x=n.length;x>y;y++)if("\\"!=n.charAt(y)){h=c,h+=n.substr(0,y+1),h=h.replace(/\|$/,"");for(var g=0;f>g;g++)h+=")";var k=new RegExp("^("+h+")$");if(i=k.test(d))break}c+=n}if(i)break}return a&&(c+=")",f--),i}null==n.regexTokens&&s();var u=a.buffer.slice(),c="",p=!1,f=0;u.splice(i,0,t);for(var d=u.join(""),m=0;m<n.regexTokens.length;m++){var o=n.regexTokens[m];if(p=l(o,o.isGroup))break}return p},cardinality:1}}}}),e.fn.inputmask}(jQuery);


/******** PAGE SCRIPTS  *********/
$(document).ready(function(){

	/************************************
			   FORMATTER
	*************************************/
	if ($('.credit-input').length > 0 ) {
		$('.credit-input').inputmask({"mask": "9999-9999-9999-9999"});
	};




/*
	if ( $('.phone-input').length > 0 ) {
		$('.phone-input').attr("placeholder", "0(5__) ___-____")
		$('.phone-input').inputmask({"mask": "0(599) 999-9999"});
	}

	*/

	////Sizi arayalım form kıntrol
	$('#siziArayalimForm').submit(function() {
		var ret = true;
		$('#siziArayalimForm .sa_input').each(function(){
			if ($(this).val() == "") {
				ret = false;
				$(this).addClass('gerkli_alan');
			}else{
				$(this).removeClass('gerkli_alan');
			}
		});

		if ($('#siziArayalimForm .phone-input').inputmask("isComplete")){
		    $('#siziArayalimForm .phone-input').removeClass('gerkli_alan');
		}else{
			ret = false;
			$('#siziArayalimForm .phone-input').addClass('gerkli_alan');
		}

		return ret;	  
	});


	/************************************
			   SHARE URLS
	*************************************/
	if ( $('.social-buttons').length > 0 ) {
		var links = {
			facebook: "http://www.facebook.com/sharer.php?u={{url}}",
			twitter: "https://twitter.com/share?url={{url}}&text={{title}}",
			googlePlus: "https://plus.google.com/share?url={{url}}"
		};

		var pageUrl = encodeURIComponent(window.location.href);
		var pageTitle = encodeURIComponent(window.document.title);

		$('.social-buttons a').each(function(i, el){
			var target = $(el).data('share');
			var shareHref = links[target].replace('{{url}}', pageUrl).replace('{{title}}', pageTitle);
			$(el).attr('href', shareHref);
		})
	};


	/************************************
			   DATE PICKER
	*************************************/
	if( $('.date-picker').length > 0 ) {
	    $('.date-picker').datepick({
				minDate: 1
			});
	};

	/************************************
			   AKORDİYON
	*************************************/
	$('.accordion .item-title').click(function(){

		var $accordion = $(this).parents('.accordion');
		var $thisContent = $(this).next('.item-content');
		var $active = $accordion.find('.item-title.active');
		var $activeContent = $active.next('.item-content');

		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$thisContent.slideUp();
		}
		else {
			$active.removeClass('active');
			$activeContent.slideUp();
			$(this).addClass('active');
			$thisContent.slideDown();
		}
	});

	$('.slide-trigger').click(function(){
		var $el = $(this);
		var $target = $( $(this).data('target') );

		$target.hasClass('active') ? $target.slideUp().removeClass('active') : $target.slideDown().addClass('active');
	});

	$('.siparis-acc-trigger').click(function(e){
		e.preventDefault();

		var $item = $(this).parents('.siparis-uzatma-item');
		var $content = $item.find('.siparis-uzatma-item-content');

		if ( $item.hasClass('active') ) {
			$content.slideUp();
			$item.removeClass('active');
		}
		else {
			$content.slideDown();
			$item.addClass('active');
		}

	});


	/************************************
			   AUTO CLEAR
	*************************************/

	if ( $('.auto-clear').length > 0 ) {

		function autoClear() {

			var $wrapper = $('.auto-clear');

			$wrapper.each(function(i, el){

				var $steps = $(el).children('.col');
				var childWidth = $steps.eq(0).width();
				var count = Math.floor( $(el).width() / childWidth );

				$steps.css('clear', 'none');

				$steps.each(function(index, elem) {
					if ( index % count == 0 ) $(elem).css('clear', 'left');
				});
			});
		};

		autoClear();

		$(window).resize(function(){
			autoClear();
		});
	};


	/************************************
			   SCROLL TO TOP
	*************************************/
	$('footer .scroll-top').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

	function scrollElement(el) {
		$('html, body').animate({
	        scrollTop: $(el).offset().top
	    }, 600);
	};



	/************************************
			   MOBILE SIDEBAR
	*************************************/
	/* Trigger Buttons */
	$('.sidebar-trigger').click(function(){
		var $target = $( $(this).data('target') ).parent('.sidebar-wrapper');
		$target.addClass('opened');
	});

	/* Close Button */
	$('.sidebar-close').click(function(){
		var $wrapper = $(this).parents('.sidebar-wrapper');

		$wrapper.removeClass('opened');
	});

	/* Overlay Close */
	$('.sidebar-wrapper').click(function(e){
		if (  $(e.target).hasClass('sidebar-wrapper') ) $(this).removeClass('opened');
	});

	/************************************
			   HERO SLIDER
	*************************************/
	if ( $('#hero-slider').length > 0 ) {
		initSlider();
	}

	function initSlider() {
	    var $heroSlider = $('#hero-slider');

	    function animateElements($wrapper){
	        var $activeItem = $wrapper.find('.active');

	        $allElems = $wrapper.find('[data-animate]');
	        $allElems.each(function(i,el){
	            var animation = $(el).data('animate').split(',')[1] || "bounceIn";
	            $(el).removeClass("animated " + animation);
	            $(el).css('opacity', 0);
	        });

	        var $animElems = $activeItem.find('[data-animate]');


	        $animElems.each(function(i,el){

	            var animateArgs = $(el).data('animate').split(',');
	            var elemOrder = parseInt(animateArgs[0]) || 0;
	            var animation = animateArgs[1] || "bounceIn";


	            setTimeout(function(){
	                $(el).css('opacity', 1);
	                $(el).addClass("animated " + animation);
	            }, elemOrder * 250);

	        });


	    };

	    function deleteVideoOnMobile() {
	    	var $video = $heroSlider.find('.item.video');
	    	if ( $video.length > 0 && $(window).width() < 768) {
	    		$video.remove();
	    	}
	    };

	    function deleteControlsOnSingle() {
	    	var $items = $heroSlider.find('.item');
	    	var $controls = $('.hero-slider-controls');
	    	if ($items.length < 2) {
	    		$controls.remove();
	    	}
	    };

	    deleteVideoOnMobile();
	    deleteControlsOnSingle();

	    $heroSlider.owlCarousel({
	        singleItem: true,
	        pagination: false,
	        autoPlay: 5000,
	        stopOnHover: true,
	        addClassActive: true,
	        afterMove: animateElements
	    });
/////YSMMEDIA jquery
	    animateElements($heroSlider);

	    var owls = $heroSlider.data('owlCarousel');

	        $('.div1').click(function(){
	        	owls.goTo(0);
	        });
	        $('.div2').click(function(){
	        	owls.goTo(1);
	        });
	        $('.div3').click(function(){
	        	owls.goTo(2);
	        });
 /////YSMMEDIA jquery
	    //Controls
	    $('.hs-control-left').click(function(){
	        var $slider = $(this).parents('.hero-slider-wrapper').find('.owl-carousel');
	        $slider.trigger('owl.prev');
	    });

	    $('.hs-control-right').click(function(){
	        var $slider = $(this).parents('.hero-slider-wrapper').find('.owl-carousel');
	        $slider.trigger('owl.next');
	    });

	    //Slider Video
	    var $sliderVideos = $heroSlider.find('video');

	    $sliderVideos.each(function(i, el){
	        el.play();
	        el.muted = true;
	    });
	};


	/************************************
			   GOOGLE MAPS
	*************************************/
	if ( $('.map-tabs-wrapper').length > 0 ) {

		var depoProps = {
	        location: {
	            lat: 40.8022664,
	            lng: 29.4615633
	        },
	        address: 'Sultan Orhan Mah. Koca Beton San. Sit. Edepola Lojistik Merkezi No:1 Gebze / KOCAELİ',
	        id: 'map-depo',
	        marker: 'img/kgmarker2.png'
	    };

	    var ofisProps = {
	        location: {
	            lat: 40.998935,
	            lng: 29.1220442
	        },
	        address: 'Çamlık Mah. İkbal Cad. Dinç Sok. No: 31 Ümraniye / İSTANBUL',
	        id: 'map-ofis',
	        marker: 'img/kgmarker.png'
	    };

		function initMap(props) {

	        var myLatLng = props.location;
	        var infoContent = props.address;

	        // Create a map object and specify the DOM element for display.
	        var map = new google.maps.Map(document.getElementById(props.id), {
	            center: myLatLng,
	            scrollwheel: false,
	            mapTypeControl: false,
	            zoom: 15,
	        });

	        var marker = new google.maps.Marker({
	            position: myLatLng,
	            map: map,
	            icon: props.marker
	        });


	        var infowindow = new google.maps.InfoWindow({
	            content: infoContent
	        });

	        marker.addListener('click', function() {
	            infowindow.open(map, marker);
	        });
	    };

	    initMap(depoProps);
	    initMap(ofisProps);

	    var $mapSlider = $('#map-slider');

	    $mapSlider.owlCarousel({
	        singleItem: true,
	        pagination: false,
	        mouseDrag: false,
	        touchDrag: false
	    });

	    $('.map-tabs-nav li').click(function(){
	        var owlEvent = $(this).data('owl-event');
	        var owlArray = owlEvent.split(',');

	        (owlArray.length < 2) ? $mapSlider.trigger(owlArray[0]) : $mapSlider.trigger(owlArray[0], parseInt(owlArray[1]));

	        $('.map-tabs-nav li').removeClass('active');
	        $(this).addClass('active');
	    });

			function fixTabs(){
				var maxHeight = 0;
				$('.map-tabs-nav li').each(function(i,el){
					$(el).css('height', 'auto');
					var elHeight = $(el).height();
					if(  elHeight > maxHeight ) maxHeight = elHeight;
					$(el).height('auto');
				});

				$('.map-tabs-nav li').each(function(i,el){
					$(el).height(maxHeight);
				});
			};

			fixTabs();

			$(window).resize(function(){
				fixTabs();
			});
	};

	/************************************
			        POPUP
	*************************************/

	/* Close Popup */
	function closePopup($popup){
		$popup.removeClass('active');
	};

	$('.ed-popup .popup-close').click(function(){
		var $wrapper = $(this).parents('.ed-popup-wrapper');

		closePopup($wrapper);
	});


	$('.ed-popup-wrapper').click(function(e){
		if ( $(e.target).hasClass('ed-popup-wrapper') ) closePopup($(this));
	});


	/* Open Popup */
	$('.popup-trigger').click(function(e){
		e.preventDefault();
		var $target = $( '#' + $(this).data('target') );
		$target.addClass('active');
	});

	/* Auto Popup */
	if( $('.auto-popup').length > 0 ) {
		var delay = parseInt( $('.auto-popup').data('delay') ) || 3000;

		setTimeout(function(){
			$('.auto-popup').addClass('active');
		}, delay);
	}

	/************************************
			  RESPONSIVE TABLE
	*************************************/
	if ( $('.table-responsive').length > 0 ) {

		$('.table-responsive').scroll(function(){

			if( $(this).scrollLeft() > 0 ) {
				if ( !$(this).hasClass('scrolled') ) {
					$(this).addClass('scrolled');
				}
			}
			else {
				$(this).removeClass('scrolled');
			}

		});

	}

	/************************************
			PRODUCT GALLERY WRAPPER
	*************************************/

	if ( $('.product-gallery-wrapper').length > 0 ) {

		$('.product-gallery-wrapper').each(function(i, el) {

	        //var $mainGallery = $('#product-main');
	        var $mainGallery = $(el).find('.product-main');
	        //var $thumbGallery = $('#product-thumb');
	        var $thumbGallery = $(el).find('.product-thumb');
	        var $galleryPopup = $('#gallery-popup');

	        $mainGallery.owlCarousel({
	            singleItem: true,
	            pagination: false,
	            addClassActive: true,
	            afterMove: function($wrapper){
	                var index = $wrapper.find('.owl-item.active').index();
	                var $thumbItems = $thumbGallery.find('.item');

	                $thumbGallery.trigger('owl.goTo', index);
	                $thumbItems.removeClass('active');
	                $thumbItems.eq(index).addClass('active');
	            }
	        });

	        $thumbGallery.owlCarousel({
	            items: 3,
	            itemsCustom: [[0, 3], [480, 3], [768, 3]],
	            pagination: false
	        });

	        $thumbGallery.find('.item').click(function(){
	            var index = $(this).parents('.owl-item').index();

	            $mainGallery.trigger('owl.goTo', index);
	            $thumbGallery.find('.item').removeClass('active');
	            $(this).addClass('active');
	        });

	        $mainGallery.find('.item').click(function(){
	            var index = $(this).parents('.owl-item').index();
	            var imgSrc = $(this).find('img').attr('src');
	            var galleryId = $(this).parents('.product-main').attr('id');

	            $galleryPopup.find('.popup-body img').attr({
	            	'src': imgSrc,
	            	'data-index': index,
	            	'data-gallery': galleryId
	            });

	            $galleryPopup.addClass('active');
	        });


	        /* THUMB CONTROLS */
	        /*$('.product-thumb-wrapper .thumb-control').click(function(){
	            if ( $(this).hasClass('left-control') ) $thumbGallery.trigger('owl.prev');
	            if ( $(this).hasClass('right-control') ) $thumbGallery.trigger('owl.next');
	        });  */

			$(el).find('.thumb-control').click(function(){
	            if ( $(this).hasClass('left-control') ) $thumbGallery.trigger('owl.prev');
	            if ( $(this).hasClass('right-control') ) $thumbGallery.trigger('owl.next');
	        });

		});

        $('#gallery-popup').find('.popup-body img').click(function(){
        	var $targetGallery = $ ( '#' + $(this).attr('data-gallery') );
        	console.log($targetGallery);
        	var imageLength = $targetGallery.find('.item').length;
        	var index = parseInt( $(this).attr('data-index') );

        	var targetIndex = (index + 1) < imageLength ? (index + 1) : 0;

        	var targetSrc = $targetGallery.find('.owl-item').eq(targetIndex).find('.item img').attr('src');
        	console.log( targetSrc );
        	$(this).attr({
        		'src': targetSrc,
        		'data-index': targetIndex
        	});

        });

    };

    /************************************
		         TABLE DIV
	*************************************/

	// function resizeTableDivs() {
	// 	$('.table-div .row').each(function(i, el){
	// 		var maxHeight = 0;
	// 		var $cols = $(el).find('.col');

	// 		$cols.each(function(index, element){
	// 			$(element).css('height', 'auto');
	// 		});

	// 		$cols.each(function(index, element){
	// 			var elHeight = $(element).height();
	// 			if( elHeight > maxHeight ) maxHeight = elHeight;
	// 		});

	// 		$cols.css('height', maxHeight + 7);
	// 	});
	// };

	// if( $('.table-div').length > 0 || $('#sepet').length > 0 ) {
	// 	setInterval(resizeTableDivs, 200);
	// };

	// $('.t-fix').click(function(){
	// 	setTimeout(resizeTableDivs, 100);
	// });

	/************************************
	         HOME STEPS ACCORDION
	*************************************/
	if ( $('.step-boxes.home-steps').length > 0 && $(window).width() < 480 ) {
		var $triggers = $('.home-steps .desc-trigger');
		var $allDescs = $('.home-steps .step-content p');

		$triggers.click(function(){

			var $desc = $(this).next('p');

			if( !$(this).hasClass('active') ) {
				$allDescs.slideUp().removeClass('active');
				$desc.slideDown();
				$(this).addClass('active');
			}
			else {
				$allDescs.slideUp().removeClass('active');
				$desc.slideUp();
			}

		});

	};

	/************************************
	         INPUT NUMBER
	*************************************/
	if ( $('.number-input').length > 0 && !$('.number-input').hasClass('ang') ) {

		$(document).delegate('.number-input span', 'click', function(){
			var $input = $(this).parents('.number-input').find('.input-number');
			var maxValue = $input.data('max') || 999;
			var minValue = $input.data('min') || 0;
			var value = parseInt( $input.val() );
			var newValue = 0;

			if( $(this).hasClass('number-minus') ) {
				newValue = (value > minValue) ? (value - 1) : value;
			}
			else {
				newValue = maxValue && (value + 1) <= maxValue ? (value + 1) : value;
			}

			$input.val(newValue);

		});

		/*$('.number-input span').click(function(){


		});*/
	};

	/************************************
	         HACİM HESAPLAMA
	*************************************/
	//Slide Toggle
	$(document).delegate('.slide-toggle', 'click', function(){
		$icon = $(this).find('.fa');
		$list = $(this).parent('p').siblings('li');

		if ( $(this).hasClass('active') ) {
			$list.slideUp();
			$(this).removeClass('active');
			$icon.removeClass('fa-minus').addClass('fa-plus');
		}
		else {
			$list.slideDown();
			$(this).addClass('active');
			$icon.removeClass('fa-plus').addClass('fa-minus');
		}
	});

	$(document).delegate('.venue-select', 'change', function(){
		scrollElement('.thing-selection');
	});

	/************************************
	        MARKALAR SAYFASI SCROLL
	*************************************/
	$('.markalar-scroll').click(function(){
		var $self = $(this);
		if ( !$self.hasClass('inactive') ) {

			var direction = $self.attr('data-direction'),
					$list = $self.parents('.markalar-menu').find('.markalar-list'),
					scrollTop = $list.scrollTop(),
					boxHeight = $list.height(),
					fullHeight = $list.prop('scrollHeight');

			var scrollTo = direction == 'down' ? scrollTop + boxHeight : scrollTop - boxHeight;

	    $list.animate({
	        scrollTop: scrollTo
	    }, 300);


			// if(scrollTo >= (fullHeight - boxHeight) || scrollTo <= 0) {
			// 	$self.addClass('inactive');
			// }
			// else {
			// 	$('.markalar-scroll').removeClass('inactive');
			// }

		}
	});

	$('.markalar-list').scroll(function(){
		var $self = $(this);

		var scrollTop = $self.scrollTop(),
				boxHeight = $self.height(),
				fullHeight = $self.prop('scrollHeight');

		if (scrollTop >= (fullHeight - boxHeight)) {
			$('.markalar-scroll[data-direction="down"]').addClass('inactive');
		}
		else if (scrollTop == 0) {
			$('.markalar-scroll[data-direction="up"]').addClass('inactive');
		}
		else {
			$('.markalar-scroll').removeClass('inactive');
		}
	});

	/* SÜRE UZATMA & İADE SAYFASI SLİDER */
	if ( $('.sure-main').length > 0 ) {

		$('.mn-envanter-slider').each(function(i, el) {
			var length = $(el).find('.item').length;

			var items, controls;

			var windowWidth = $(window).width();
			if (windowWidth >= 769) {
				if (length >= 3) {
					items = 3;
					controls = length == 3 ? false : true;
				}
				else {
					items = length;
					controls = false;
				}
			}
			else if (windowWidth >= 480) {
				if (length >= 2) {
					items = 2;
					controls = length == 2 ? false : true;
				}
				else {
					items = length;
					controls = false;
				}
			}
			else {
				items = 1;
				controls = length <= 1 ? false : true;
			}

			if (controls == false) {
				$(el).parents('.mn-envanter').find('.mn-envanter-control').hide();
			}

			$(this).owlCarousel({
				items: items,
				pagination: false,
				navigation: false
			});

			$(el).parents('.mn-envanter').find('.control-left').click(function(){
				$(el).trigger('owl.prev');
			});

			$(el).parents('.mn-envanter').find('.control-right').click(function(){
				$(el).trigger('owl.next');
			});

		});

		$('.sure-line .item').click(function(){
			var bigImg = $(this).attr('data-img');

			if(bigImg) {
				$('#sure-popup-img').attr('src', bigImg);

				$('#sure-urun-popup').addClass('active');
			}
		});
	}

	/* Submenu Open/Close */
	$('.sidebar-body li.has-child > a').click(function(e){
		e.preventDefault();

		var $subMenu = $(this).next('.sub-menu');
		var $parentLi = $(this).parent('li');
		var $arrowIcon = $(this).find('.arrow-icon');
		var $allLi = $('.sidebar-body li.has-child');


		if ( $parentLi.hasClass('active') ) {
			$subMenu.slideUp();
			$parentLi.removeClass('active');
			$arrowIcon.removeClass('fa-angle-up').addClass('fa-angle-down');
		}
		else {
			$allLi.removeClass('active');
			$allLi.find('.sub-menu').slideUp();
			$allLi.find('.arrow-icon').removeClass('fa-angle-up').addClass('fa-angle-down');
			$subMenu.slideDown();
			$parentLi.addClass('active');
			$arrowIcon.removeClass('fa-angle-down').addClass('fa-angle-up');
		}
	});

	////////Menü fixx

//	$('header.mobile').addClass('menuFixMod');

	$(document).scroll(function(){
		var $self = $(this);
		menuAyarla($self.scrollTop());
	});

	$(window).resize(function(){
		var $self = $(document);
		menuAyarla($self.scrollTop());
	});

	function menuAyarla(scrollTop = 0){
		if (scrollTop == 0 && $(window).width() > 768) {
			//$('header.desktop').slideDown();
			//$('header.mobile').fadeOut();
			//$("#header.desktop").fadeOut()
		} else {
			//$('header.mobile').fadeIn();
			//$('header.desktop').slideUp();
			//$("#header.mobil").fadeIn();
 		}	
	}
 
});
