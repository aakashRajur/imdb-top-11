webpackJsonp([0],{208:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{movies:e.movies}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),c=n.n(s),l=n(1),u=n.n(l),p=n(38),f=n.n(p),m=n(12),d=n(7),h=n(210),g=n(218),v=n(222),b=n(228),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=f()(b.a)(function(e){var t=e.classes,n=t.translating,r=t.blur,a=e.src;return u.a.createElement(h.a,{className:n,imageClassName:r,src:a})}),w=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.wrapper=null,n.toggleGalleryState=n.toggleGalleryState.bind(n),n.state={galleryState:d.a},n}return o(t,e),y(t,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.movieID,r=e.onScroll,a=this.state.galleryState,o=t.find(function(e){return e.imdbID===n});return o?u.a.createElement(l.Fragment,null,u.a.createElement(x,{state:a,src:o.mobile}),u.a.createElement(g.a,{movie:o,state:a}),u.a.createElement(v.a,{movies:t,selected:o,state:a,onCollapse:this.toggleGalleryState(d.a),onExpand:this.toggleGalleryState(d.e),onScroll:r})):null}},{key:"toggleGalleryState",value:function(e){var t=this;return function(){return t.setState({galleryState:e})}}}]),t}(l.Component);w.propTypes={movies:c.a.arrayOf(c.a.object),onScroll:c.a.func},t.default=function(){return Object(m.b)(i)(w)}},209:function(e,t,n){"use strict";function r(e){var t=e.color,n=void 0===t?"#fff":t,r=e.className;return s.a.createElement("svg",{viewBox:"0 0 1024 1024",width:"10px",height:"10px",className:r},s.a.createElement("circle",{cx:"512",cy:"512",r:"480",fill:n,stroke:n}))}t.a=r;var a=n(2),o=n.n(a),i=n(1),s=n.n(i);r.propTypes={color:o.a.string,className:o.a.string}},210:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(6),c=n.n(s),l=n(2),u=n.n(l),p=n(1),f=n.n(p),m=n(38),d=n.n(m),h=n(211),g=n.n(h),v=n(5),b=n(212),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=d()(b.a)(function(e){var t=e.classes,n=e.next,r=e.prev,a=e.className;return f.a.createElement(p.Fragment,null,f.a.createElement("img",{className:[t.prev,a].join(" "),src:r,alt:"background"}),f.a.createElement("img",{className:[t.next,a].join(" "),src:n,alt:"background"}))}),w=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={prev:e.src||g.a,next:e.src||g.a,animating:!0},n}return i(t,e),y(t,[{key:"componentDidUpdate",value:function(){function e(e){return t.apply(this,arguments)}var t=r(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.src===this.props.src){e.next=6;break}return n=Object(v.h)(this),e.next=4,n({next:this.props.src,animating:!0});case 4:return e.next=6,Object(v.g)(n,300,{animating:!1,prev:this.props.src});case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className,r=e.imageClassName;return f.a.createElement("div",{className:[t.container,n].join(" ")},f.a.createElement(x,Object.assign({},this.state,{className:r})))}}]),t}(p.Component);w.propTypes={src:u.a.string,className:u.a.string,imageClassName:u.a.string},w.defaultProps={src:g.a},t.a=d()(b.a)(w)},211:function(e,t,n){e.exports=n.p+"static/media/wall-e.bk.64130c46.jpg"},212:function(e,t,n){"use strict";t.a={"@keyframes fade-in":{from:{opacity:0},to:{opacity:1}},"@keyframes fade-out":{from:{opacity:1},to:{opacity:0}},container:{position:"relative",overflow:"hidden"},images:{width:"110%",height:"110%",objectFit:"cover",objectPosition:"center",top:"-5%",left:"-5%",position:"absolute",background:"lightgray"},prev:{extend:"images",zIndex:2,animation:function(e){return e.prev===e.next?null:"fade-out 0.3s both"}},next:{extend:"images",zIndex:1,animation:function(e){return e.prev===e.next?null:"fade-in 0.3s both"},display:function(e){return e.prev===e.next?"none":"initial"}}}},213:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(6),l=n.n(c),u=n(2),p=n.n(u),f=n(1),m=n.n(f),d=n(38),h=n.n(d),g=n(5),v=n(214),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y={length:p.a.number,percent:p.a.number,visible:p.a.bool,innerRef:p.a.func},x={length:null,percent:0,animate:!1,visible:!1},w=h()(v.b)(function(e){var t=e.classes,n=e.pathRef;return m.a.createElement("path",{strokeMiterlimit:"10",fill:"none",strokeWidth:"60px",stroke:"#7fffaa",d:"M938,512c0,235.27-190.73,426-426,426S86,747.27,86,512,276.73,86,512,86,938,276.73,938,512Z",strokeLinecap:"round",className:t.path,ref:n})});w.propTypes=y,w.defaultProps=x;var E=h()(v.b)(function(e){var t=e.classes,n=e.pathRef;return m.a.createElement("path",{strokeMiterlimit:"10",fill:"none",strokeWidth:"70px",stroke:"#1976D2",d:"M873,512c0,199.37-161.63,361-361,361S151,711.37,151,512,312.63,151,512,151,873,312.63,873,512Z",strokeLinecap:"round",className:t.path,ref:n})});E.propTypes=y,E.defaultProps=x;var S=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.measureLength=n.measureLength.bind(n),n.state={rtLength:null,rtVisible:!0,rtValue:e.rottenTomatoes,mcLength:null,mcVisible:!0,mcValue:e.metacritics,animate:!1},n}return s(t,e),b(t,[{key:"componentDidUpdate",value:function(){function e(e){return t.apply(this,arguments)}var t=a(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.rottenTomatoes===this.props.rottenTomatoes&&t.metacritics===this.props.metacritics){e.next=6;break}return n=Object(g.h)(this),e.next=4,n({rtVisible:!1,rtValue:0,mcVisible:!1,mcValue:0});case 4:return e.next=6,n({rtVisible:!0,rtValue:this.props.rottenTomatoes,mcVisible:!0,mcValue:this.props.metacritics});case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.props,t=e.className,n=void 0===t?"":t,r=e.classes,a=this.state,o=a.rtVisible,i=a.rtLength,s=a.rtValue,c=a.mcVisible,l=a.mcLength,u=a.mcValue;return m.a.createElement("svg",{viewBox:"0 0 1024 1024",className:[r.canvas,n].join(" ")},m.a.createElement("circle",{cx:"512",cy:"512",r:"480",fill:"#333",stroke:"#333",opacity:"0.7"}),m.a.createElement(w,{pathRef:this.measureLength("rtLength"),length:i,visible:o,percent:s}),m.a.createElement(E,{pathRef:this.measureLength("mcLength"),length:l,visible:c,percent:u}))}},{key:"measureLength",value:function(e){var t=this;return function(n){if(n){var a=n.getTotalLength();t.state[e]!==a&&t.setState(r({},e,a))}}}}]),t}(f.Component);S.propTypes={rottenTomatoes:p.a.number,metacritics:p.a.number},S.defaultProps={rottenTomatoes:0,metacritics:0},t.a=h()(v.a)(S)},214:function(e,t,n){"use strict";n.d(t,"b",function(){return r});var r={path:{strokeDasharray:function(e){return e.length||0},strokeDashoffset:function(e){var t=e.length,n=e.percent;return(t||0)*(1-n)},transition:function(e){var t=e.length,n=e.percent;return t&&n?"stroke-dashoffset 0.7s ease-out":null},visibility:function(e){return e.visible?"initial":"hidden"}}};t.a={canvas:{transform:"rotate(-90deg)"}}},218:function(e,t,n){"use strict";function r(e){var t=e.classes,n=e.movie,r=n.Title,a=n.Year,o=n.Plot,i=n.Ratings,c=n.imdbRating,l=i[1],u=i[2];return s.a.createElement("div",{className:t.detail},s.a.createElement("img",{src:p.a,alt:"popcorn",className:t.popcornBegin}),s.a.createElement("div",{className:t.content},s.a.createElement("div",{className:[t.spanWide,t.title].join(" ")},r),s.a.createElement("div",{className:[t.spanWide,t.year].join(" ")},a),s.a.createElement(m.a,{rottenTomatoes:l.Value,metacritics:u.Value,className:t.rating}),s.a.createElement("div",{className:t.ratingText},10*c),s.a.createElement("div",{className:t.ratingPercent},"%"),s.a.createElement("div",{className:t.ratingSub},"Liked It"),s.a.createElement(f.a,{color:"#7fffaa",className:t.rtDot}),s.a.createElement("span",{className:t.rtLegend},"RottenTomatoes"),s.a.createElement(f.a,{color:"#1976D2",className:t.mcDot}),s.a.createElement("span",{className:t.mcLegend},"MetaCritics"),s.a.createElement(d.a,{movie:n}),s.a.createElement("div",{className:t.plotTitle},"Plot"),s.a.createElement("div",{className:t.plotContent},o)),s.a.createElement("img",{src:p.a,alt:"popcorn",className:t.popcornEnd}))}var a=n(2),o=n.n(a),i=n(1),s=n.n(i),c=n(38),l=n.n(c),u=n(219),p=n.n(u),f=n(209),m=n(213),d=n(220),h=n(221);t.a=l()(h.a)(r),r.propTypes={movie:o.a.object,state:o.a.string}},219:function(e,t,n){e.exports=n.p+"static/media/popcorn.af957b9a.png"},220:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){var t=e.classes,n=e.movie;return c.a.createElement(s.Fragment,null,Object(p.c)(n).reduce(function(e,n,a){var o=n.key,i=n.value;return[].concat(r(e),[c.a.createElement("div",{className:t.key,key:"key-"+a},o),c.a.createElement("div",{className:t.value,key:"value-"+a},i)])},[]))}var o=n(2),i=n.n(o),s=n(1),c=n.n(s),l=n(38),u=n.n(l),p=n(5),f={key:{justifySelf:"start"},value:{justifySelf:"start"}};a.propTypes={movie:i.a.object},t.a=u()(f)(a)},221:function(e,t,n){"use strict";var r=n(7),a={gridColumn:"1/span 2"},o={gridRow:"3/span 1",alignSelf:"start",zIndex:3};t.a={"@keyframes detail-scroll-down":{from:{transform:"translateY(-90vh)"},to:{transform:"translateY(0)"}},"@keyframes detail-scroll-up":{from:{transform:"translateY(0)"},to:{transform:"translateY(-90vh)"}},detail:{overflow:"auto",zIndex:2,display:"grid",gridTemplate:"1fr/1fr",perspective:"1px",height:"90vh",bottom:"100vh",animation:function(e){var t=e.state;return(t===r.a?"detail-scroll-up":t===r.e?"detail-scroll-down":null)+" 0.7s both"}},popcorn:{width:"auto",height:150,gridRow:"1/span 1",gridColumn:"1/span 1"},popcornBegin:{extend:"popcorn",transform:"translateZ(-1px) translateX(-400px)",alignSelf:"start"},popcornEnd:{extend:"popcorn",transform:"translateZ(-1px) translateX(400px)",alignSelf:"center",justifySelf:"end"},content:{gridRow:"1/span 1",gridColumn:"1/span 1",display:"grid",gridTemplate:"repeat(11, auto) 1fr/1fr 50%",justifyItems:"center",alignItems:"center",gridGap:"16px",height:"100%",margin:"auto",color:"white",padding:"40px 8% 0",overflow:"auto"},title:{extend:[a],fontSize:"2em",fontWeight:"bold",textAlign:"center",textTransform:"uppercase"},year:{extend:[a],fontSize:"1.5em"},rating:{extend:[a,o],height:"30vh",alignSelf:"center"},ratingText:{extend:[o,a],fontSize:"3em",fontWeight:"bold",color:"white",marginTop:"calc(27vh - 3em)"},ratingPercent:{extend:[o,a],margin:"calc(10vh - 4px) 0 0 64px"},ratingSub:{extend:[o,a],marginTop:"calc(15vh + 12px)",fontSize:"1em",textTransform:"uppercase"},legendText:{fontSize:"1em",gridColumn:"1/span 2",justifySelf:"start",paddingStart:16},legendDot:{gridColumn:1,justifySelf:"start"},rtDot:{extend:"legendDot",gridRow:4},rtLegend:{extend:"legendText",gridRow:4},mcDot:{extend:"legendDot",gridRow:5,marginBottom:10},mcLegend:{extend:"legendText",gridRow:5,marginBottom:10},plotTitle:{extend:[a],textAlign:"center",fontSize:"1.5em",textTransform:"uppercase"},plotContent:{extend:[a],textAlign:"center"},"@media (max-width: 575px)":{popcornBegin:{transform:"translateZ(-1px) translateX(-350px)"},popcornEnd:{transform:"translateZ(-1px) translateX(350px)"}},"@media (max-width: 450px)":{popcornBegin:{transform:"translateZ(-1px) translateX(-300px)"},popcornEnd:{transform:"translateZ(-1px) translateX(300px)"}},"@media (max-width: 375px)":{rating:{height:"25vh"},ratingText:{fontSize:"2.5em",marginTop:"calc(22.5vh - 2.5em)"},ratingPercent:{margin:"calc(9vh - 2px) 0 0 60px",fontSize:"12px"},ratingSub:{marginTop:"calc(12.5vh + 12px)",fontSize:"0.8em"}},"@media (max-width: 350px)":{popcornBegin:{transform:"translateZ(-1px) translateX(-250px)"},popcornEnd:{transform:"translateZ(-1px) translateX(250px)"},"@media (max-width: 300px)":{ratingText:{fontSize:"2em",marginTop:"calc(18vh - 2em)"},ratingPercent:{margin:"9vh 0 0 48px",fontSize:"10px"},ratingSub:{marginTop:"calc(12.5vh + 12px)",fontSize:"0.6em"}}}}},222:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(6),c=n.n(s),l=n(2),u=n.n(l),p=n(1),f=n.n(p),m=n(38),d=n.n(m),h=n(223),g=n.n(h),v=n(224),b=n.n(v),y=n(7),x=n(5),w=n(225),E=n(227),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),k=d()(E.c)(function(e){var t=e.classes,n=e.className,r=e.icon,a=e.onClick;return f.a.createElement("img",{src:r,alt:"collapse",onClick:a,className:[t.chevron,n].join(" ")})}),j=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.animateChevron=n.animateChevron.bind(n),n.wrapper=null,n.state={chevronState:null,chevronIcon:g.a},n}return i(t,e),S(t,[{key:"componentDidUpdate",value:function(){function e(e){return t.apply(this,arguments)}var t=r(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.state===this.props.state){e.next=3;break}return e.next=3,this.animateChevron();case 3:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.state,a=void 0===r?"":r,o=t.onCollapse,i=t.onExpand,s=t.movies,c=t.selected,l=c.imdbID,u=c.Title,p=c.Released,m=c.Director,d=c.Actors,h=t.onScroll,g=this.state,v=g.chevronState,b=g.chevronIcon,x=s.findIndex(function(e){return e.imdbID===l});return f.a.createElement("div",{className:n.wrapper,ref:function(t){return e.wrapper=t}},f.a.createElement(k,{className:n.toggle,icon:b,animation:v,onClick:a===y.a?i:o}),f.a.createElement("div",{className:n.card},"\xa0"),f.a.createElement(w.a,{className:n.imageSwitcher,movies:s,index:x,onScroll:h,state:a}),f.a.createElement("div",{className:n.spacer},"\xa0"),f.a.createElement("div",{className:n.title},u),f.a.createElement("div",{className:n.subtitle},p),f.a.createElement("div",{className:n.director},"Director: "+m),d.split(",").map(function(e,t){return f.a.createElement("div",{key:t,className:n["actor"+t]},e)}),f.a.createElement("div",{className:n.moreInfo,onClick:i},"More Info"))}},{key:"animateChevron",value:function(){function e(){return t.apply(this,arguments)}var t=r(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(x.h)(this),e.next=3,Promise.all([t({chevronState:this.props.state===y.a?E.a:E.b}),Object(x.g)(t,500,{chevronIcon:this.props.state===y.a?g.a:b.a}),Object(x.g)(t,1e3,{chevronState:null})]);case 3:case"end":return e.stop()}},e,this)}));return e}()}]),t}(p.Component);j.propTypes={movies:u.a.arrayOf(u.a.object),selected:u.a.object,onExpand:u.a.func,onCollapse:u.a.func,state:u.a.string,onScroll:u.a.func},t.a=d()(E.d)(j)},223:function(e,t,n){e.exports=n.p+"static/media/chevron-down.a793c44e.svg"},224:function(e,t,n){e.exports=n.p+"static/media/chevron-up.4f872acb.svg"},225:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=e.target;return(e.touches[0].clientX-t.getBoundingClientRect().left)/t.clientWidth}var c=n(6),l=n.n(c),u=n(2),p=n.n(u),f=n(1),m=n.n(f),d=n(38),h=n.n(d),g=n(5),v=n(7),b=n(226),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=h()(b.e)(function(e){var t=e.alt,n=e.src,r=e.classes,a=e.className,o=e.onTouchStart,i=e.onTouchEnd,s=e.onTouchMove;return m.a.createElement("img",{src:n,alt:t,className:[r.tiltable,a].join(""),onTouchStart:o,onTouchEnd:i,onTouchMove:s})}),w=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.container=null,n.renderPoster=n.renderPoster.bind(n),n.onMount=n.onMount.bind(n),n.toggleTiltState=n.toggleTiltState.bind(n),n.onTouchEnd=n.onTouchEnd.bind(n),n.hasContainerMounted=!1,n.state={translate:null,tilt:b.b},n}return i(t,e),y(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.movies,r=e.index,a=e.classes;return m.a.createElement("div",{className:[a.container,t].join(" "),ref:this.onMount},n.map(this.renderPoster(r)))}},{key:"componentDidUpdate",value:function(){function e(e){return t.apply(this,arguments)}var t=r(l.a.mark(function e(t){var n,r,a,o,i,s,c,u,p,f,m,d;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.state===this.props.state){e.next=7;break}return n=Object(g.h)(this),r=this.props,a=r.state,o=r.classes,i=o.translateUp,s=o.translateDown,c=o.translated,u={},p={},a===v.e?(u={translate:i},p={translate:c}):(u={translate:s},p={translate:null}),e.next=5,n(u);case 5:return e.next=7,Object(g.g)(n,500,p);case 7:if(t.index===this.props.index||!this.container){e.next=12;break}if(f=this.container.children[this.props.index],m=this.container.clientWidth,d=f.offsetLeft-.1*m,!d){e.next=12;break}return e.next=12,Object(g.a)(this.container,300,d);case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"renderPoster",value:function(e){var t=this;return function(n,r){var a=n.mobile,o=n.Title,i=t.props.classes,s=t.state.translate,c={src:a,alt:o},l=i.movie,u=m.a.createElement("img",c);return r===e&&(l=s||i.movie,u=m.a.createElement(x,Object.assign({},c,{tilt:t.state.tilt,onTouchStart:t.toggleTiltState,onTouchEnd:t.onTouchEnd,onTouchMove:t.toggleTiltState}))),m.a.createElement("div",{className:l,"data-index":r,key:r},u)}}},{key:"onMount",value:function(e){if(this.container=e,!this.hasContainerMounted){this.hasContainerMounted=!0;var t=this.props,n=t.index,r=t.movies.length,a=this.container,o=a.children,i=a.clientWidth;n>0&&n<r&&(this.container.scrollLeft=o[n].offsetLeft-.1*i)}}},{key:"onTouchEnd",value:function(){function e(){return t.apply(this,arguments)}var t=r(l.a.mark(function e(){var t,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.onScroll,n=this.state.tilt,r=Object(g.h)(this),e.next=3,r({tilt:b.b});case 3:t&&t(n===b.c?100:-100);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"toggleTiltState",value:function(e){var t=s(e),n=this.state.tilt;this.props.state===v.a&&(t<.25?n!==b.a&&this.setState({tilt:b.a}):t>.75?n!==b.c&&this.setState({tilt:b.c}):n!==b.b&&this.setState({tilt:b.b}))}}]),t}(f.Component);w.propTypes={movies:p.a.array,index:p.a.number,className:p.a.string,onScroll:p.a.func,state:p.a.string},w.defaultProps={movies:[],index:0},t.a=h()(b.d)(w)},226:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"e",function(){return i});var r="LEFT",a="RIGHT",o="NONE",i={tiltable:{transform:function(e){var t=e.tilt;return t===r?"rotateY(-8deg)":t===a?"rotateY(8deg)":null},transition:"all 0.3s"}};t.d={"@keyframes tiltable-slide-up":{from:{transform:"translateY(0)"},to:{transform:"translateY(-8%)"}},"@keyframes tiltable-slide-down":{from:{transform:"translateY(-8%)"},to:{transform:"translateY(0)"}},container:{boxSizing:"border-box",display:"grid",gridAutoFlow:"column",gridTemplate:"1fr/1fr",overflow:"hidden"},movie:{width:"80vw",height:"100%",boxSizing:"border-box",position:"relative",perspective:"100vw","& img":{width:"70vw",height:"85%",position:"absolute",margin:"5% calc(50% - 35vw) 10%",objectFit:"cover",borderRadius:8,bottom:0,boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},"&:first-child":{width:"90vw",paddingLeft:"10vw","& img":{margin:"5% calc((50% - 35vw) / 2) 10%"}},"&:last-child":{width:"90vw",paddingRight:"10vw","& img":{margin:"5% calc((50% - 35vw) / 2) 10%"}}},translateUp:{extend:"movie",animation:"tiltable-slide-up 0.5s both"},translateDown:{extend:"movie",animation:"tiltable-slide-down 0.5s both"},translated:{extend:"movie",transform:"translateY(-8%)"}}},227:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i});var r=n(7),a="COLLAPSE_CHEVRON",o="EXPAND_CHEVRON",i={"@keyframes animate-chevron":{"0%":{opacity:1,transform:"translateY(0px)"},"50%":{opacity:0,transform:"translateY(-20px)"},"100%":{opacity:1,transform:"translateY(0px)"}},chevron:{animation:function(e){return e.animation?"animate-chevron 0.7s both":null},cursor:"pointer"}};t.d=Object.assign({"@keyframes gallery-scroll-up":{from:{transform:"translateY(0)"},to:{transform:"translateY(-90vh)"}},"@keyframes gallery-scroll-down":{from:{transform:"translateY(-90vh)"},to:{transform:"translateY(0)"}},wrapper:{height:"100vh",display:"grid",gridTemplate:"repeat(2, 1fr) 8% repeat(6, auto) 10%/1fr",zIndex:4,top:0,animation:function(e){var t=e.state;return(t===r.a?"gallery-scroll-up":t===r.e?"gallery-scroll-down":null)+" 0.7s both"}},toggle:{width:24,margin:8,justifySelf:"center",alignSelf:"start",gridRow:"1",gridColumn:"1"},imageSwitcher:{gridRow:"1/span 2",gridColumn:"1",alignSelf:"end",height:"calc(100% - 40px)"},common:{width:"80vw",justifySelf:"center",textAlign:"center",color:"#9E9E9E",gridColumn:"1"},spacer:{extend:"common",borderRadius:"5px 5px 0 0",gridRow:"2"},title:{extend:"common",fontSize:"1em",fontWeight:"bolder",textTransform:"uppercase",justifySelf:"center",maxWidth:"80%",color:"black",display:"flex",alignItems:"flex-end",justifyContent:"center",gridRow:"3"},subtitle:{extend:"common",justifySelf:"center",gridRow:"4",paddingBottom:10,"&:nth-child(5)":{paddingBottom:20}},director:{extend:"common",color:"black",fontWeight:"bold",fontSize:12,gridRow:"5"},actor:{extend:"common",fontSize:12,gridColumn:"1","&:nth-last-child(2)":{paddingBottom:20}}},function(){for(var e={},t=0;t<4;t++)e["actor"+t]={extend:"actor",gridColumn:"1",gridRow:""+(6+t)};return e}(),{moreInfo:{extend:"common",background:"#E91E63",color:"white",textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",borderRadius:"0 0 5px 5px",marginBottom:20,gridRow:"10",gridColumn:"1"},card:{background:"white",gridRow:"2/span 8",gridColumn:"1",width:"80vw",justifySelf:"center",borderRadius:"5px 5px 0 0"},"@media (max-width: 400px)":{title:{maxWidth:"initial"}},"@media (max-width: 300px)":{brief:{fontSize:"12px"},title:{maxWidth:"initial"},additional:{margin:"auto"}}})},228:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(7),a={"@keyframes background-scroll-down":{from:{transform:"translateY(-5%)"},to:{transform:"translateY(5%)"}},"@keyframes background-scroll-up":{from:{transform:"translateY(5%)"},to:{transform:"translateY(-5%)"}},translating:{position:"absolute",width:"100%",height:"120%",top:"-10%",left:0,animation:function(e){return"background-scroll-"+(e.state===r.a?"up":"down")+" 0.7s both"}},blur:{filter:function(e){return"blur(8px) saturate(50%) grayscale("+(e.state===r.a?"0":"100")+"%)"},transition:"0.7s all"}}}});
//# sourceMappingURL=mobile.a8b40805.chunk.js.map