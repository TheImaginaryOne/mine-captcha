(this["webpackJsonpmine-captcha"]=this["webpackJsonpmine-captcha"]||[]).push([[0],{70:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t.n(r),o=t(26),c=t.n(o),a=t(11),s=t(8),l=t(6),f=t(23),d=t(22),u=t(10),b=t(16),h=function(){function n(e,t,r){Object(u.a)(this,n),this.list=void 0,this.width=void 0,this.height=void 0,this.list=r,this.width=e,this.height=t}return Object(b.a)(n,[{key:"get",value:function(n,e){return this.list[n+e*this.width]}},{key:"set",value:function(n,e,t){this.list[n+e*this.width]=t}},{key:"toArray",value:function(){return this.list}}],[{key:"fill",value:function(e,t,r){return new n(e,t,new Array(e*t).fill(r))}},{key:"from",value:function(e){return new n(e.width,e.height,e.list)}}]),n}();function j(n,e,t){for(var r=Math.max(e-1,0);r<=Math.min(e+1,n.width-1);r++)for(var i=Math.max(t-1,0);i<=Math.min(t+1,n.height-1);i++)n.set(r,i,n.get(r,i)+1)}function O(n){for(var e=n*n,t=new Array(e),r=0;r<e;r++)t[r]=r;t=function(n){for(var e=n.length,t=-1,r=e-1,i=Object(d.a)(n);++t<e;){var o=t+Math.floor(Math.random()*(r-t+1)),c=i[o];i[o]=i[t],i[t]=c}return i}(t);for(var i=function(n,e){return Math.floor((e-n)*Math.random()+n)}(e/4,e/3+1),o=h.fill(n,n,0),c=0;c<i;c++){var a=t[c];j(o,a%n,Math.floor(a/n))}for(var s=e/4,l=0;l<i+s;l++){var f=t[l],u=f%n,b=Math.floor(f/n);o.set(u,b,null)}for(var O=0;O<n;O++)for(var x=0;x<n;x++){0===o.get(O,x)&&o.set(O,x,null)}return o}var x,p,g,v,m,w,y,k,C,S,D,M,E,I,N=t(3),z=l.b.div(x||(x=Object(s.a)(["\nbackground-color: #ffffff;\npadding: 8px;\n"]))),R=l.b.div(p||(p=Object(s.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(",", 1fr);\ngrid-auto-rows: 1fr;\naspect-ratio: 1;\ngap: 4px;\nmargin-bottom: 8px;\n"])),(function(n){return n.numColumns})),T=l.b.span(g||(g=Object(s.a)(["\nfont-size: ","px;\nfont-weight: bold;\ntext-align: center;\ncolor: ",";\n"])),(function(n){return n.fontSize}),(function(n){var e=n.colorIndex,t=n.theme;return e>3?t.gameColors[3]:t.gameColors[e]})),A=l.b.div(v||(v=Object(s.a)(["\nbackground-color: #dddddd;\ntransition: border-color 0.1s;\n\ndisplay: flex;\njustify-content: center;\nalign-content: center;\nflex-direction: column;\n","\n;\n\n:hover {\n  background-color: #cccccc;\n}\n"])),(function(n){var e=n.isSelected,t=n.theme;return e?"border: 4px solid "+t.primaryColor:"border: 4px solid rgba(0,0,0,0)"})),F=l.b.button(m||(m=Object(s.a)(["\nbackground-color: ",";\nborder: none;\nborder-radius: 4px;\nfont-size: 16px;\nfont-family: ",";\nfont-weight: 500;\npadding: 12px 16px;\ncolor: #ffffff;\n:hover {\n    filter: brightness(90%);\n}\n"])),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.fontFamily})),_=l.b.span(w||(w=Object(s.a)(["\nfont-size: 16px;\ncolor: ",";\n"])),(function(n){return n.theme.errorColor})),P=l.b.div(y||(y=Object(s.a)(["\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\n"]))),B=l.b.div(k||(k=Object(s.a)(["\nmargin-right: 16px;\n"])));function V(n){var e=n.selection,t=n.content,i=n.onSquareClick,o=n.onVerifyClick,c=n.isIncorrect,s=Object(r.useState)(!1),l=Object(a.a)(s,2),d=l[0],u=l[1],b=e.width,h=e.height,j=new Array(b*h);console.log(b);for(var O=function(n){for(var r=function(r){var o=t.get(n,r);j[n+r*b]=Object(N.jsx)(A,{onClick:function(){return i(n,r)},isSelected:e.get(n,r),children:null!==o&&Object(N.jsx)(T,{fontSize:Math.floor(150/b),colorIndex:o,children:t.get(n,r)})},"".concat(n,":").concat(r))},o=0;o<h;o++)r(o)},x=0;x<b;x++)O(x);Object(r.useEffect)((function(){if(d){var n=window.setTimeout((function(){return u(!1)}),50);return function(){return window.clearTimeout(n)}}}),[d]);var p=Object(f.useSpring)({transform:"translate3d(".concat(d?10:0,"px, 0px, 0px)"),config:{friction:10,tension:700}});return Object(N.jsxs)(z,{children:[Object(N.jsx)(R,{numColumns:b,children:j}),Object(N.jsxs)(P,{children:[Object(N.jsx)(B,{children:Object(N.jsx)(f.animated.div,{style:p,children:Object(N.jsx)(F,{onClick:function(n){var e=o();u(!e)},children:"VERIFY"})})}),c&&Object(N.jsx)(_,{children:"Incorrect answer"})]})]})}var G,L,q,H,J,W,U,Y=l.b.div(C||(C=Object(s.a)(["\nborder: 1px solid #cccccc;\nbackground-color: #fafafa;\nborder-radius: 4px;\npadding: 16px;\nheight: 32px;\nwidth: 300px;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\n","\n"])),(function(n){return!n.isDone&&"\n  cursor: pointer;\n  :hover {\n    background-color: #eeeeee;\n  }"})),K=l.b.span(S||(S=Object(s.a)(["\nfont-family: ",";\ncolor: #444444;\n"])),(function(n){return n.theme.fontFamily})),Q=l.b.div(D||(D=Object(s.a)(["\nflex: 1;\n"]))),X=l.b.div(M||(M=Object(s.a)(["\npadding-right: 16px;\nwidth: 32px;\nheight: 32px;\n"]))),Z=l.b.div(E||(E=Object(s.a)(["\nborder: 2px solid #cccccc;\nbackground-color: #ffffff;\nborder-radius: 2px;\nwidth: 28px;\nheight: 28px;\n"])));function $(){var n=l.b.img(I||(I=Object(s.a)(["\n    width: 40px;\n    height: 40px;\n  "])));return Object(N.jsx)(n,{src:"./UncoveredMine.png",alt:"Minesweeper Logo"})}function nn(){var n=Object(f.useSpring)({from:{strokeDashoffset:15},to:{strokeDashoffset:0}});return Object(N.jsx)(f.animated.svg,{width:"32",height:"32",viewBox:"0 0 10.583333 10.583334",children:Object(N.jsx)(f.animated.path,{style:n,fill:"rgb(0,0,0,0)",stroke:"#2ca02c",strokeWidth:1,strokeDasharray:15,d:"M 0.52916667,5.8208333 3.96875,9.2604166 9.7895833,0.79375"})})}function en(n){var e=n.isDone,t=n.onClick;return Object(N.jsxs)(Y,{isDone:e,onClick:function(n){return!e&&t()},children:[Object(N.jsx)(X,{children:e?Object(N.jsx)(nn,{}):Object(N.jsx)(Z,{})}),Object(N.jsx)(Q,{children:Object(N.jsx)(K,{children:"I am a robot"})}),Object(N.jsx)($,{})]})}var tn,rn={primaryColor:"#4A91DA",errorColor:"#D6614D",fontFamily:'"Roboto", arial, san-serif',gameColors:["#444444","#4A91DA","#579C6E","#D6614D"]},on=Object(l.b)(f.animated.div)(G||(G=Object(s.a)(["\nposition: relative;\ntop: -100px;\nleft: 200px;\ndisplay: inline-block;\nz-index: 999;\n"]))),cn=l.b.div(L||(L=Object(s.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nbottom: 0;\nright: 0;\nwidth: 100%;\n"]))),an=l.b.div(q||(q=Object(s.a)(["\nposition: absolute;\nwidth: 0;\nheight: 0;\n"]))),sn=l.b.div(H||(H=Object(s.a)(["\nwidth: 300px;\nfont-family: ",";\nbox-shadow: 0px 12px 16px rgba(0,0,0,0.2);\n"])),(function(n){return n.theme.fontFamily})),ln=l.b.div(J||(J=Object(s.a)(["\nbackground-color: ",";\npadding: 16px;\n"])),(function(n){return n.theme.primaryColor})),fn=l.b.div(W||(W=Object(s.a)(["\ncolor: #ffffff;\nfont-size: 24px;\nfont-weight: bold;\n"]))),dn=l.b.div(U||(U=Object(s.a)(["\ncolor: #ffffff;\n"]))),un=function(){return Object(N.jsxs)(ln,{children:[Object(N.jsx)(dn,{children:"Select all squares with"}),Object(N.jsx)(fn,{children:"Mines"})]})};function bn(n){var e=n.isIncorrect,t=n.board,i=n.onVerifyClick,o=Object(r.useState)(h.fill(t.width,t.height,!1)),c=Object(a.a)(o,2),s=c[0],l=c[1];Object(r.useEffect)((function(){l(h.fill(t.width,t.height,!1))}),[t]);return Object(N.jsxs)(sn,{children:[Object(N.jsx)(un,{}),Object(N.jsx)(V,{selection:s,content:t,onSquareClick:function(n,e){var t=h.from(s);t.set(n,e,!t.get(n,e)),l(t)},isIncorrect:e,onVerifyClick:function(){return i(s)}})]})}!function(n){n[n.NOT_DONE=0]="NOT_DONE",n[n.IN_PROGRESS=1]="IN_PROGRESS",n[n.DONE=2]="DONE"}(tn||(tn={}));var hn=Object(r.forwardRef)((function(n,e){var t=Object(r.useState)(null),i=Object(a.a)(t,2),o=i[0],c=i[1],s=Object(r.useState)(tn.NOT_DONE),d=Object(a.a)(s,2),u=d[0],b=d[1],x=Object(r.useState)(!1),p=Object(a.a)(x,2),g=p[0],v=p[1],m=function(){b(tn.NOT_DONE)},w={reset:m};function y(n){return function(n,e){for(var t=n.width,r=n.height,i=h.fill(t,r,0),o=0;o<t;o++)for(var c=0;c<r;c++)n.get(o,c)&&j(i,o,c);for(var a=0;a<t;a++)for(var s=0;s<r;s++){var l=e.get(a,s);if(null!==l&&i.get(a,s)!==l)return!1}return!0}(n,o)?(b(tn.DONE),!0):(v(!0),!1)}Object(r.useImperativeHandle)(e,(function(){return w}));var k=u===tn.IN_PROGRESS;return Object(N.jsx)("div",{children:Object(N.jsxs)(l.a,{theme:rn,children:[Object(N.jsx)(en,{isDone:u===tn.DONE,onClick:function(){c(O(n.gridSize)),v(!1),b(tn.IN_PROGRESS)}}),k&&Object(N.jsx)(cn,{onClick:m}),Object(N.jsx)(f.Transition,{items:k,config:{mass:.1,tension:200},from:{opacity:0},enter:{opacity:1},leave:{opacity:0},children:function(n,e){return e&&Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(an,{children:Object(N.jsx)(on,{style:n,children:Object(N.jsx)(bn,{board:o,isIncorrect:g,onVerifyClick:y})})})})}})]})})})),jn=t(94),On=t(97),xn=t(98),pn=t(92),gn=t(95),vn=t(71),mn=t(99),wn=t(96);var yn=function(){var n=Object(r.useState)(4),e=Object(a.a)(n,2),t=e[0],i=e[1],o=Object(r.useRef)(null);return Object(N.jsx)(pn.a,{maxWidth:"md",children:Object(N.jsx)(mn.a,{variant:"outlined",children:Object(N.jsx)(jn.a,{children:Object(N.jsxs)(gn.a,{container:!0,spacing:3,children:[Object(N.jsxs)(gn.a,{item:!0,xs:12,children:[Object(N.jsx)(vn.a,{variant:"h3",component:"h1",gutterBottom:!0,children:"Mine Captcha"}),Object(N.jsxs)(vn.a,{variant:"body1",children:["This was inspired by ",Object(N.jsx)(wn.a,{href:"https://xkcd.com/2496/",children:"xkcd 2496"}),'. Click on the Captcha button to solve a "Minesweeper" puzzle (which is not really a Minesweeper problem, but more like a "tentaizu" puzzle.)']})]}),Object(N.jsxs)(gn.a,{item:!0,xs:6,children:[Object(N.jsx)(vn.a,{id:"discrete-slider",gutterBottom:!0,children:"Size of grid (number of columns and rows)"}),Object(N.jsx)(xn.a,{valueLabelDisplay:"auto",min:4,max:10,step:1,onChange:function(n,e){i(e)},value:t,marks:[{value:4,label:"4"},{value:10,label:"10"}]}),Object(N.jsx)(On.a,{color:"primary",variant:"outlined",onClick:function(){null!==o&&null!=o.current&&o.current.reset()},children:"Reset CAPTCHA"})]}),Object(N.jsx)(gn.a,{item:!0,xs:6,children:Object(N.jsx)(hn,{gridSize:t,ref:o})})]})})})})},kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,101)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),o(n),c(n)}))};c.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(yn,{})}),document.getElementById("root")),kn()}},[[70,1,2]]]);
//# sourceMappingURL=main.88f2fa13.chunk.js.map