(this["webpackJsonpthe-cat-dog-portal"]=this["webpackJsonpthe-cat-dog-portal"]||[]).push([[0],{29:function(e,n,t){e.exports=t.p+"static/media/catsDogsLogo.98c1f5ca.png"},31:function(e,n,t){e.exports=t(55)},54:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(24),o=t.n(c),i=t(3),u=t(4),l=t(1),s=t(2),m=t(9);function p(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    @media (min-width: 700px) {\n        display: none;\n    }\n"]);return p=function(){return e},e}function f(){var e=Object(l.a)(["\n    width: 4rem;\n    height: 3rem;\n    background: none;\n    border: none;\n    color: white;\n    font-size: 3rem;\n    cursor: pointer;\n\n    @media (min-width: 700px) {\n        display: none;\n    }\n"]);return f=function(){return e},e}function d(){var e=Object(l.a)(["\n    margin: 10px;\n    max-width: 180px;\n    height: auto;\n"]);return d=function(){return e},e}function h(){var e=Object(l.a)(["\n    color: white;\n    font-size: 1.3rem;\n    font-family: Arial, Helvetica, sans-serif;\n    text-decoration: none;\n    margin: 10px;\n"]);return h=function(){return e},e}function b(){var e=Object(l.a)(['\n    color: white;\n    font-size: 1.3rem;\n    font-family: Arial, Helvetica, sans-serif;\n    text-decoration: none;\n\n    &::after {\n        content: "";\n        display: block;\n        width: 0;\n        height: .1rem;\n        background: white;\n        transition: width .3s;\n    }\n\n    &:hover::after {\n        width: 100%;\n    }\n\n    @media (max-width: 700px) {\n        display: none;\n    }\n']);return b=function(){return e},e}function v(){var e=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n"]);return v=function(){return e},e}function g(){var e=Object(l.a)(["\n    width: 100%;\n    height: 80px;\n    display: flex;\n"]);return g=function(){return e},e}function w(){var e=Object(l.a)(["\n    flex: 30%;\n    display: flex;\n    justify-content: flex-end;\n    padding-right: 50px;\n"]);return w=function(){return e},e}function j(){var e=Object(l.a)(["\n    flex: 70%;\n    display: flex;\n    align-items: center;\n    padding-right: 20px;\n"]);return j=function(){return e},e}function x(){var e=Object(l.a)(["\n    width: 100%;\n    height: ",";\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n"]);return x=function(){return e},e}var E=s.a.nav(x(),(function(e){return e.showNavy?"100vh":"80px"})),O=s.a.div(j()),y=s.a.div(w()),k=s.a.div(g()),S=s.a.div(v()),C=Object(s.a)(m.b)(b()),I=Object(s.a)(m.b)(h()),A=s.a.img(d()),T=s.a.button(f()),U=s.a.div(p()),z=t(29),P=t.n(z),D=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],c=n[1];return r.a.createElement(E,{showNavy:t},r.a.createElement(k,null,r.a.createElement(O,null,r.a.createElement(S,null,r.a.createElement(C,{to:"/the-cat-api-portal-reactjs"},"Home"),r.a.createElement(C,{to:"/upload"}," Upload "),r.a.createElement(C,{to:"/myImages"},"My Images"),r.a.createElement(C,{to:"/publicImages"},"Public Images"),r.a.createElement(T,{onClick:function(){c((function(e){return!e}))}},t?r.a.createElement(r.a.Fragment,null,"\xd7"):r.a.createElement(r.a.Fragment,null," \u2261")))),r.a.createElement(y,null,r.a.createElement(A,{src:P.a,alt:"Cats&Dogs-Logo"}))),t&&r.a.createElement(U,null,r.a.createElement(I,{to:"/home",onClick:function(){c((function(e){return!e}))}},"Home"),r.a.createElement(I,{to:"/myImages",onClick:function(){c((function(e){return!e}))}},"My Images"),r.a.createElement(I,{to:"/publicImages",onClick:function(){c((function(e){return!e}))}},"Public Images"),r.a.createElement(I,{to:"/upload",onClick:function(){c((function(e){return!e}))}},"Upload")))},L=t(7),F=t.n(L),H=t(8),M=t(30);t(53);function N(){var e=Object(l.a)(["\n    cursor: pointer;\n"]);return N=function(){return e},e}function R(){var e=Object(l.a)([""]);return R=function(){return e},e}function V(){var e=Object(l.a)(["\n    height: auto;\n"]);return V=function(){return e},e}function _(){var e=Object(l.a)(["\n    margin-bottom: 1rem;\n"]);return _=function(){return e},e}function G(){var e=Object(l.a)(["\n    margin-top: 1.5rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return G=function(){return e},e}var B=s.a.div(G()),J=s.a.h1(_()),q=s.a.div(V()),K=s.a.img(R()),Q=s.a.button(N()),W="70a140d6-a3c3-42f0-a7a0-954e5966763d",X=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1];Object(a.useEffect)((function(){o()}),[]);var o=function(){var e=Object(H.a)(F.a.mark((function e(){var n,t,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-api-key":W}},e.prev=1,e.next=4,fetch("https://api.thecatapi.com/v1/images/?limit=10",n);case 4:if(200===(t=e.sent).status){e.next=8;break}throw a="Something went wrong ".concat(t.status),new Error(a);case 8:return e.next=10,t.json();case 10:r=e.sent,console.log(r),c(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(H.a)(F.a.mark((function e(n){var t,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"DELETE",headers:{Accept:"application/json","x-api-key":W},body:null},e.prev=1,e.next=4,fetch("".concat("https://api.thecatapi.com/v1/images","/").concat(n),t);case 4:if(204===(a=e.sent).status){e.next=8;break}throw r="An error occured: ".concat(a.status),new Error(r);case 8:o(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(B,null,r.a.createElement(J,null,"My \xa0",r.a.createElement("span",{role:"img","aria-labelledby":"emoji"},"\ud83d\udc08"),"\xa0 Images"),r.a.createElement(M.Carousel,{width:600,autoPlay:!0,showThumbs:!1},t&&t.map((function(e){return r.a.createElement(q,{key:e.id},r.a.createElement(K,{src:e.url,alt:"animal_picture"}),r.a.createElement(Q,{className:"legend",onClick:function(){return i(e.id)},type:"button"},"Delete"))}))))};function Y(){var e=Object(l.a)(["\n    max-width: 23vw;\n    height: auto;\n    object-fit: cover;\n    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3); \n    outline: .1em solid black;\n    outline-offset: 0.2rem;\n"]);return Y=function(){return e},e}function Z(){var e=Object(l.a)(['\n    position: relative;\n    flex: 1 1 auto;\n\n    &:hover::after {\n        content: "\u2764";\n        padding: 5px 10px;\n        background-color: white;\n        color: red;\n        /* display: block; */\n        position: absolute;\n        border: 1px solid white;\n        border-radius: 50%;\n        left: 14px;\n        top: 13px;\n        cursor: pointer;\n    }\n'],['\n    position: relative;\n    flex: 1 1 auto;\n\n    &:hover::after {\n        content: "\\u2764";\n        padding: 5px 10px;\n        background-color: white;\n        color: red;\n        /* display: block; */\n        position: absolute;\n        border: 1px solid white;\n        border-radius: 50%;\n        left: 14px;\n        top: 13px;\n        cursor: pointer;\n    }\n']);return Z=function(){return e},e}function $(){var e=Object(l.a)(["\n    max-width: 80%;\n    //max-height: 100vh;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.3rem;\n    padding: .3rem;\n    margin-bottom: 1rem;\n    justify-content: center;\n"]);return $=function(){return e},e}function ee(){var e=Object(l.a)(["\n    font-size: 1.5rem;\n    background-color: white;\n    border-radius: 0.5rem;\n    margin: 1rem 0;\n    padding: .8rem;\n    outline: .1em solid black;\n    outline-offset: 0.2rem;\n    cursor: pointer;\n\n    &:hover {\n        background-color: black;\n        color: white;\n    }\n"]);return ee=function(){return e},e}function ne(){var e=Object(l.a)(["\n    width: 12.5rem;\n    margin: .7rem .7rem;\n    cursor: pointer;\n    padding: .6rem 1rem;\n    border-radius: 0.3rem;\n    background-color: black;\n    color: white;\n"]);return ne=function(){return e},e}function te(){var e=Object(l.a)(["\n    width: 12.5rem;\n    margin: .7rem .7rem;\n    cursor: pointer;\n    padding: .6rem 1rem;\n    border-radius: 0.3rem;\n    background-color: black;\n    color: white;\n"]);return te=function(){return e},e}function ae(){var e=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n"]);return ae=function(){return e},e}function re(){var e=Object(l.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n"]);return re=function(){return e},e}function ce(){var e=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return ce=function(){return e},e}var oe=s.a.div(ce()),ie=s.a.h1(re()),ue=s.a.div(ae()),le=s.a.select(te()),se=s.a.select(ne()),me=s.a.button(ee()),pe=s.a.div($()),fe=s.a.div(Z()),de=s.a.img(Y()),he=function(){var e=Object(a.useState)(),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(a.useState)([]),p=Object(u.a)(m,2),f=p[0],d=p[1],h=Object(a.useState)([]),b=Object(u.a)(h,2),v=b[0],g=b[1],w=function(){var e=Object(H.a)(F.a.mark((function e(){var n,t,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{Accept:"application/json"}},e.prev=1,e.next=4,fetch("https://api.thecatapi.com/v1/categories",n);case 4:if(200===(t=e.sent).status){e.next=8;break}throw a="Something went wrong ".concat(t.status),new Error(a);case 8:return e.next=10,t.json();case 10:r=e.sent,d(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(H.a)(F.a.mark((function e(){var n,a,r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{Accept:"application/json"}},e.prev=1,e.next=4,fetch("".concat("https://api.thecatapi.com/v1/images/search/?category_ids","=").concat(l,"&limit=").concat(t),n);case 4:if(200===(a=e.sent).status){e.next=8;break}throw r="Something went wrong ".concat(a.status),new Error(r);case 8:return e.next=10,a.json();case 10:c=e.sent,g(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){w()}),[]);return r.a.createElement(oe,null,r.a.createElement(ie,null,"All Users Public Uploaded Images"),r.a.createElement(ue,null,r.a.createElement(le,{"aria-label":"Default select",onChange:function(e){return n=e.target.value,void s(n);var n}},r.a.createElement("option",null,"Select a category..."),f&&f.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement(se,{"aria-label":"Default select",onChange:function(e){return n=e.target.value,void c(n);var n}},r.a.createElement("option",null,"Select number of pics..."),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:9},"9"),r.a.createElement("option",{value:15},"15"))),r.a.createElement(me,{type:"button",onClick:j},"Show Images"),r.a.createElement(pe,null,v&&v.map((function(e){return r.a.createElement(fe,{key:e.id},r.a.createElement(de,{key:e.id,src:e.url,alt:e.id}))}))))};function be(){var e=Object(l.a)(["\n    font-size: 1.4rem;\n    width: 50%;\n    background-color: ",";\n    color : white;\n    border-radius: .5rem;\n    margin-top: 1rem;\n    padding: .5rem;\n"]);return be=function(){return e},e}function ve(){var e=Object(l.a)(["\n    font-size: 1.1rem;\n    height: 2.5rem;\n    margin-top: 1rem;\n    background-color: white;\n    width: 10rem;\n    padding: 0.5rem;\n    color: black;\n    outline: .1em solid black;\n    outline-offset: 0.2rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n\n    &:hover {\n        color: white;\n        background-color: black;\n    }\n"]);return ve=function(){return e},e}function ge(){var e=Object(l.a)(["\n    font-size: 1rem;\n"]);return ge=function(){return e},e}function we(){var e=Object(l.a)(["\n    max-width: 25rem;\n    height: auto;\n"]);return we=function(){return e},e}function je(){var e=Object(l.a)(["\n    width: 100%;\n    height: auto;\n"]);return je=function(){return e},e}function xe(){var e=Object(l.a)(["\n    opacity: 0;\n    z-index: -1;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(l.a)(["\n    cursor: pointer;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(l.a)(["\n    font-weight: bold;\n"]);return ye=function(){return e},e}function ke(){var e=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n"]);return ke=function(){return e},e}var Se=s.a.div(ke()),Ce=s.a.h1(ye()),Ie=s.a.form(Oe()),Ae=s.a.label(Ee()),Te=s.a.input(xe()),Ue=s.a.div(je()),ze=s.a.img(we()),Pe=(s.a.p(ge()),s.a.button(ve())),De=s.a.div(be(),(function(e){return e.isFilePicked?"red":"#34eb37"})),Le=function(){var e=Object(a.useState)(),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(a.useState)(!1),p=Object(u.a)(m,2),f=p[0],d=p[1],h=Object(a.useState)(""),b=Object(u.a)(h,2),v=b[0],g=b[1];Object(a.useEffect)((function(){if(t){var e=URL.createObjectURL(t);return s(e),function(){return URL.revokeObjectURL(e)}}s(void 0)}),[t]);var w=function(){var e=Object(H.a)(F.a.mark((function e(n){var a,r,o,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(a=new FormData).append("file",t),r={method:"POST",headers:{Accept:"application/json","x-api-key":"70a140d6-a3c3-42f0-a7a0-954e5966763d"},body:a},e.prev=4,e.next=7,fetch("https://api.thecatapi.com/v1/images/upload",r);case 7:if(200===(o=e.sent).status){e.next=13;break}throw g("Oops...Something went wrong!"),setTimeout((function(){return g("")}),4e3),i="Something went wrong ".concat(o.status),new Error(i);case 13:g("Picture uploaded successfully!"),setTimeout((function(){return g("")}),3e3),c(),d(!1),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(Se,null,r.a.createElement(Ce,null,"Upload your image (gif/jpg/png)"),f&&r.a.createElement(Ue,null,r.a.createElement(ze,{src:l})),r.a.createElement(Ie,{method:"POST"},r.a.createElement(Ae,{htmlFor:"upload-photo"},r.a.createElement("span",{role:"img","aria-labelledby":"attached"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-paperclip",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"}))),"\xa0",f?"Change Image...":"Choose Image..."),r.a.createElement(Te,{type:"file",name:"file",id:"upload-photo",onChange:function(e){return function(e){var n=e.target.files;n&&0!==n.length?(c(n[0]),d(!0)):c(void 0)}(e)}})),r.a.createElement(Pe,{type:"button",onClick:w},"Upload \u21ee"),v&&r.a.createElement(De,{isFilePicked:f},v))},Fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"A place were you can upload your favorite animal pics! Enjoy!"))};t(54);var He=function(){return r.a.createElement("div",{className:"app__wrapper"},r.a.createElement(D,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/the-cat-api-portal-reactjs",component:Fe}),r.a.createElement(i.a,{path:"/upload",component:Le}),r.a.createElement(i.a,{path:"/myImages",component:X}),r.a.createElement(i.a,{path:"/publicImages",component:he})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(He,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.05c0df9b.chunk.js.map