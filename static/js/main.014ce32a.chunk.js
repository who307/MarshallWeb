(this.webpackJsonpmarshallwep=this.webpackJsonpmarshallwep||[]).push([[0],{25:function(e,s,c){},31:function(e,s,c){},34:function(e,s,c){},35:function(e,s,c){},36:function(e,s,c){},37:function(e,s,c){},38:function(e,s,c){},39:function(e,s,c){},40:function(e,s,c){"use strict";c.r(s);var t=c(0),n=c(2),a=c.n(n),i=c(18),r=c.n(i),l=(c(25),c(7)),j=c(1),o=c(11),d=c(14),b=c(5),O=c(4);c(31);function h(e){var s=Object(n.useState)({country:"SOUTH KOREA",language:"ENGLISH"}),c=Object(l.a)(s,2),a=c[0],i=c[1],r=Object(n.useState)(),h=Object(l.a)(r,2),x=h[0],m=h[1],u=function(){m(!x)},N=Object(n.useState)(),p=Object(l.a)(N,2),v=p[0],g=p[1],y=function(){g(!v)},E=function(e){e.preventDefault();var s=e.target,c=s.name,t=s.value;i(Object(d.a)(Object(d.a)({},a),{},Object(o.a)({},c,t))),x&&!v?u():(!x&&v||u(),y())};return Object(t.jsxs)("div",{className:"countryDiv",style:e.openCountry?{}:{height:"0"},children:[Object(t.jsx)(O.a,{className:"_closeBtn",onClick:function(){e.setOpenCountry(!e.openCountry)},icon:b.f}),Object(t.jsxs)("div",{className:"countryWrap",children:[Object(t.jsx)("h2",{children:"SELECT COUNTRY AND LANGUAGE"}),Object(t.jsxs)("span",{children:["COUNTRY, SHIPPING DESTINATIONS AND FREIGHT COSTS ARE",Object(t.jsx)("br",{})," DETERMINED BY YOUR COUNTRY SELECTION."]}),Object(t.jsxs)("div",{className:"selectDiv",children:[Object(t.jsxs)("div",{className:"selectCountry",children:[Object(t.jsxs)("div",{className:"selectWrap",onClick:u,children:[a.country,Object(t.jsx)(O.a,{style:x?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"},icon:b.b})]}),Object(t.jsxs)("div",{className:"countryDropDown",style:x?e.openCountry?{zIndex:"99",opacity:"1",transition:"opacity 0.3s"}:{opacity:"0"}:{display:"none"},children:[Object(t.jsx)("button",{name:"country",onClick:E,value:"CANADA",children:"CANADA"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"FRANCE",children:"FRANCE"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"GERMANY",children:"GERMANY"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"ITALY",children:"ITALY"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"NETHERLANDS",children:"NETHERLANDS"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"SOUTH KOREA",children:"SOUTH KOREA"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"SPAIN",children:"SPAIN"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"SWEDEN",children:"SWEDEN"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"UNITED KINGDOM",children:"UNITED KINGDOM"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"USA",children:"USA"}),Object(t.jsx)("button",{name:"country",onClick:E,value:"",children:"SHOW ALL"})]})]}),Object(t.jsxs)("div",{className:"selectLanguage",children:[Object(t.jsxs)("div",{className:"selectWrap",onClick:y,children:[a.language,Object(t.jsx)(O.a,{style:v?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"},icon:b.b})]}),Object(t.jsxs)("div",{className:"languageDropDown",style:v?e.openCountry?{zIndex:"99",opacity:"1",transition:"opacity 0.3s"}:{opacity:"0"}:{display:"none"},children:[Object(t.jsx)("button",{name:"language",onClick:E,value:"ENGLISH",children:"ENGLISH"}),Object(t.jsx)("button",{name:"language",onClick:E,value:"SPANISH",children:"SPANISH"})]})]}),Object(t.jsx)("button",{onClick:function(){e.setCountry(a),e.setOpenCountry(!e.openCountry),alert("\uad6d\uac00 : ".concat(a.country," \uc5b8\uc5b4 : ").concat(a.language," \uc785\ub2c8\ub2e4.")),x&&!v?u():!x&&v?y():x&&v&&(u(),y())},className:"button",children:"CONFIRM"})]}),Object(t.jsx)(j.b,{to:"#",children:Object(t.jsxs)("span",{children:["IF YOUR COUNTRY IS NOT VISIBLE IN THE LIST CLICK HERE TO VISIT OUR COUNTRY ",Object(t.jsx)("br",{}),"DIRECTORY"]})})]})]})}c(34);function x(e){var s=function(){e.setOpenCountry(!e.openCountry),document.querySelector("html").scrollTo(0,0)};Object(n.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}));var c=Object(n.useRef)(),a=Object(n.useRef)(),i=function(){var s=document.documentElement.scrollTop,t=document.documentElement.scrollWidth;0===s&&t>1e3&&(c.current.style="top : -120px;",a.current.style=""),t<1e3&&(c.current.style="top : px;"),!1===e.openCountry&&t>1e3&&(s>=110?(c.current.style="top : 0px;",a.current.style="background : black;"):s<=110&&(c.current.style="top : -120px;",a.current.style=""))},r=function(){e.setOpenMobile(!e.openMobile),e.setOpenCountry(!1)};return Object(t.jsxs)("div",{className:"header",children:[Object(t.jsxs)("div",{className:"headerContainer",style:e.openCountry?{position:"absolute",top:"19vw",zIndex:"99"}:{position:"absolute",top:"-1vw",zIndex:"9999"},children:[Object(t.jsx)("div",{className:"hiddenCategory",ref:c,children:Object(t.jsxs)("div",{className:"hiddenWrap",children:[Object(t.jsx)(j.b,{className:"hiddenLogo",to:"/home",children:Object(t.jsx)("img",{className:"headerLogoH",src:"https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"})}),Object(t.jsxs)("div",{className:"categoryWrapH",children:[Object(t.jsxs)("ul",{className:"categoryMenuH",children:[Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/headphones",children:"HEADPHONES"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/speakers",children:"SPEAKERS"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/accessories",children:"ACCESSORIES"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/backstage",children:"BACKSTAGE"})})]}),Object(t.jsxs)("div",{className:"iconDivH",children:[Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.d}),Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.c}),Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.e})]})]}),Object(t.jsx)("div",{className:"languageDivH",children:Object(t.jsxs)("div",{className:"languageWrapH",onClick:s,children:[Object(t.jsxs)("span",{children:[e.country.country," / ",e.country.language]}),Object(t.jsx)(O.a,{icon:b.b})]})})]})}),Object(t.jsxs)("div",{className:"headerWrap",children:[Object(t.jsx)("div",{className:"languageDiv",children:Object(t.jsxs)("div",{className:"languageWrap",onClick:s,children:[Object(t.jsxs)("span",{children:[e.country.country," / ",e.country.language]}),Object(t.jsx)(O.a,{icon:b.b})]})}),Object(t.jsx)(j.b,{to:"/home",children:Object(t.jsx)("img",{className:"headerLogo",src:"https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"})}),Object(t.jsx)("div",{ref:a,className:"headerCategory",children:Object(t.jsxs)("div",{className:"categoryWrap",children:[Object(t.jsxs)("ul",{className:"categoryMenu",children:[Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/headphones",children:"HEADPHONES"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/speakers",children:"SPEAKERS"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/accessories",children:"ACCESSORIES"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/backstage",children:"BACKSTAGE"})})]}),Object(t.jsxs)("div",{className:"iconDiv",children:[Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.d}),Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.c}),Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.e})]})]})})]})]}),Object(t.jsxs)("div",{className:"headerMobile",children:[Object(t.jsxs)("div",{className:"headerMobileWrap",style:e.openCountry?{position:"absolute",top:"29vw"}:{position:"fixed",top:"0vw"},children:[Object(t.jsx)(j.b,{className:"hiddenLogoM",to:"/home",children:Object(t.jsx)("img",{className:"headerLogoH",src:"https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"})}),Object(t.jsxs)("div",{className:"iconDivH",children:[Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.d}),Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.c}),Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:b.e}),Object(t.jsx)(O.a,{onClick:r,style:{cursor:"pointer"},icon:b.a})]})]}),Object(t.jsxs)("div",{className:"headerMobileMenu",style:e.openMobile?{}:{display:"none"},children:[Object(t.jsx)("div",{onClick:r,className:"closeBtn",children:Object(t.jsx)(O.a,{icon:b.f})}),Object(t.jsxs)("div",{className:"categoryWrapH",children:[Object(t.jsxs)("ul",{className:"categoryMenuH",children:[Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/home",children:"HOME"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/headphones",children:"HEADPHONES"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/speakers",children:"SPEAKERS"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/accessories",children:"ACCESSORIES"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/backstage",children:"BACKSTAGE"})}),Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"/login",children:"LOGIN"})})]}),Object(t.jsx)("div",{className:"languageDivH",children:Object(t.jsxs)("div",{className:"languageWrapH",onClick:function(){e.setOpenMobile(!e.openMobile),e.setOpenCountry(!e.openCountry)},children:[Object(t.jsxs)("span",{children:[e.country.country," / ",e.country.language]}),Object(t.jsx)(O.a,{icon:b.b})]})})]})]})]})]})}c(35);function m(e){return Object(t.jsx)("div",{className:"homeContainer",children:Object(t.jsxs)("div",{className:"homeContainerWrap",children:[Object(t.jsxs)("div",{className:"homeMain",style:e.openCountry?{zIndex:""}:{zIndex:"9"},children:[Object(t.jsx)("div",{className:"homeWrap",children:Object(t.jsxs)("div",{className:"mainText",children:[Object(t.jsx)(j.b,{id:"text1",to:"#",children:Object(t.jsx)("span",{children:"EMBERTON"})}),Object(t.jsx)(j.b,{id:"text2",to:"#",children:"FILL YOUR HOME WITH ABSOLUTE 360\u02da SOUND"}),Object(t.jsx)(j.b,{id:"text3",to:"#",children:"Rock out but stay in with big-stage sound in a small frame"}),Object(t.jsx)("button",{className:"button",children:"GET IT NOW"})]})}),Object(t.jsx)("div",{className:"gradientDiv"})]}),Object(t.jsx)("article",{className:"homeContents01",children:Object(t.jsxs)("div",{className:"contentsDiv01",children:[Object(t.jsxs)(j.b,{className:"imgDiv01",to:"#",children:[Object(t.jsx)("div",{className:"gradientDiv"}),Object(t.jsxs)("div",{className:"contentsText",children:[Object(t.jsx)("span",{children:"ACTON II BLUETOOTH"}),Object(t.jsx)("h2",{children:"TAKE THE BIG STAGE HOME"}),Object(t.jsx)("button",{className:"button",children:"GET IT NOW"})]})]}),Object(t.jsxs)(j.b,{className:"imgDiv02",to:"#",children:[Object(t.jsx)("div",{className:"gradientDiv"}),Object(t.jsxs)("div",{className:"contentsText",children:[Object(t.jsx)("span",{children:"ACTON II BLUETOOTH"}),Object(t.jsx)("h2",{children:"BIG SOUND FOR SMALL SPACES"}),Object(t.jsx)("button",{className:"button",children:"GET IT NOW"})]})]})]})}),Object(t.jsxs)("article",{className:"homeContents02",children:[Object(t.jsxs)(j.b,{to:"#",className:"contentsText",children:[Object(t.jsx)("span",{children:"MAJOR IV"}),Object(t.jsx)("h2",{children:"AN ICON, REBORN WITH UNRIVALLED MARHHALL SOUND"}),Object(t.jsx)("p",{children:"Take some time for yourself and your music"}),Object(t.jsx)("button",{className:"button",children:"GET IT NOW"})]}),Object(t.jsx)(j.b,{to:"#",className:"gradientDiv"})]}),Object(t.jsx)("article",{className:"homeContents03",children:Object(t.jsxs)("div",{className:"contentsDiv03",children:[Object(t.jsxs)(j.b,{to:"#",className:"imgDiv01",children:[Object(t.jsxs)("div",{className:"contentsText",children:[Object(t.jsx)("span",{children:"MAJOR III BLUETOOTH"}),Object(t.jsx)("h2",{children:"THE MODERN GO-TO CLASSIC"})]}),Object(t.jsx)("div",{className:"gradientDiv"})]}),Object(t.jsxs)(j.b,{to:"#",className:"imgDiv02",children:[Object(t.jsxs)("div",{className:"contentsText",children:[Object(t.jsx)("span",{children:"SPEAKER POWER CABLE"}),Object(t.jsx)("h2",{children:"PLUG IN AND CHILL OUT"})]}),Object(t.jsx)("div",{className:"gradientDiv"})]}),Object(t.jsxs)(j.b,{to:"#",className:"imgDiv03",children:[Object(t.jsxs)("div",{className:"contentsText",children:[Object(t.jsx)("span",{children:"MONITOR II A.N.C."}),Object(t.jsx)("h2",{children:"RETREAT INTO YOUR MUSIC"})]}),Object(t.jsx)("div",{className:"gradientDiv"})]})]})}),Object(t.jsxs)("article",{className:"homeContents04",children:[Object(t.jsxs)("div",{className:"contentsTitle",children:[Object(t.jsx)("h2",{children:"MOST POPULAR ITEMS"}),Object(t.jsx)("span",{children:"Award winning products for your home or on the go"})]}),Object(t.jsxs)("div",{className:"contentsDiv04",children:[Object(t.jsxs)("div",{className:"contentsWrap",children:[Object(t.jsx)(j.b,{className:"imgLink",to:"#",children:Object(t.jsx)("div",{className:"imgDiv01"})}),Object(t.jsxs)(j.b,{to:"#",className:"contentsText",children:[Object(t.jsx)("div",{className:"productName",children:Object(t.jsx)("h2",{children:"MONITOR II A.N.C."})}),Object(t.jsxs)("div",{className:"priceText",children:[Object(t.jsx)("i",{children:"$"}),Object(t.jsx)("span",{children:"359.00"})]})]})]}),Object(t.jsxs)("div",{className:"contentsWrap",children:[Object(t.jsx)(j.b,{className:"imgLink",to:"#",children:Object(t.jsx)("div",{className:"imgDiv02"})}),Object(t.jsxs)(j.b,{to:"#",className:"contentsText",children:[Object(t.jsxs)("div",{className:"productName",children:[Object(t.jsx)("h2",{children:"EMBERTON"}),Object(t.jsx)("h3",{children:"PORTABLE"})]}),Object(t.jsxs)("div",{className:"priceText",children:[Object(t.jsx)("div",{children:"From"}),Object(t.jsx)("i",{children:"$"}),Object(t.jsx)("span",{children:"179.00"})]}),Object(t.jsxs)("div",{className:"colorSelect",children:[Object(t.jsxs)(j.b,{to:"color",children:[" ",Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #000000 50%"}})]}),Object(t.jsxs)(j.b,{to:"color",children:[" ",Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #b9935e 50%"}})]})]})]})]}),Object(t.jsxs)("div",{className:"contentsWrap",children:[Object(t.jsx)(j.b,{className:"imgLink",to:"#",children:Object(t.jsx)("div",{className:"imgDiv03"})}),Object(t.jsxs)(j.b,{to:"#",className:"contentsText",children:[Object(t.jsxs)("div",{className:"productName",children:[Object(t.jsx)("h2",{children:"STOCKWELL II"}),Object(t.jsx)("h3",{children:"PORTABLE"})]}),Object(t.jsxs)("div",{className:"priceText",children:[Object(t.jsx)("div",{children:"From"}),Object(t.jsx)("i",{children:"$"}),Object(t.jsx)("span",{children:"239.00"})]}),Object(t.jsxs)("div",{className:"colorSelect",children:[Object(t.jsx)(j.b,{to:"color",children:Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #000000 50%"}})}),Object(t.jsx)(j.b,{to:"color",children:Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #3F5364, #3F5364 50%, #3F5364 50%"}})}),Object(t.jsx)(j.b,{to:"color",children:Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #50294c, #50294c 50%, #50294c 50% "}})}),Object(t.jsx)(j.b,{to:"color",children:Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #b9935e 50%"}})})]})]})]}),Object(t.jsxs)("div",{className:"contentsWrap",children:[Object(t.jsx)(j.b,{className:"imgLink",to:"#",children:Object(t.jsx)("div",{className:"imgDiv04"})}),Object(t.jsxs)(j.b,{to:"#",className:"contentsText",children:[Object(t.jsxs)("div",{className:"productName",children:[Object(t.jsx)("h2",{children:"KILBURN II"}),Object(t.jsx)("h3",{children:"PORTABLE"})]}),Object(t.jsxs)("div",{className:"priceText",children:[Object(t.jsx)("div",{children:"From"}),Object(t.jsx)("i",{children:"$"}),Object(t.jsx)("span",{children:"309.00"})]}),Object(t.jsxs)("div",{className:"colorSelect",children:[Object(t.jsx)(j.b,{to:"color",children:Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #000000 50%"}})}),Object(t.jsx)(j.b,{to:"color",children:Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #AFAEAA, #AFAEAA 50%, #AFAEAA 50%"}})}),Object(t.jsx)(j.b,{to:"color",children:Object(t.jsx)("span",{style:{background:"linear-gradient(90deg, #50294c, #50294c 50%, #50294c 50% "}})})]})]})]})]})]})]})})}var u=c(9);c(36);function N(e){return Object(t.jsx)("div",{className:"footerContainer",children:Object(t.jsxs)("div",{className:"footerWrap",children:[Object(t.jsx)("div",{className:"newsLetterDiv",children:Object(t.jsxs)("div",{className:"newLetterWrap",children:[Object(t.jsxs)("div",{className:"newsLetterText",children:[Object(t.jsx)("h2",{children:"SIGN UP FOR OUR NEWSLETTER"}),Object(t.jsx)("span",{children:"Get 10 % off on your first order."})]}),Object(t.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Your email address goes here"}),Object(t.jsxs)("div",{className:"policyText",children:[Object(t.jsx)("h2",{children:"BY SUBSCRIBING YOU ACCEPT OUR"}),Object(t.jsx)(j.b,{to:"policy",children:"PRIVACY POLICY."})]}),Object(t.jsx)(j.b,{to:"subscribe",children:Object(t.jsx)("button",{className:"button",children:"SUBSCRIBE"})})]})}),Object(t.jsxs)("div",{className:"footerMenuDiv",children:[Object(t.jsxs)("div",{className:"footerMenuWrap",children:[Object(t.jsxs)("div",{className:"footerMenu",children:[Object(t.jsx)("h2",{children:"CUSTOMER SERVICE"}),Object(t.jsx)(j.b,{to:"#",children:"CONTACT US"}),Object(t.jsx)(j.b,{to:"#",children:"BUSINESS CUSTOMERS"}),Object(t.jsx)(j.b,{to:"#",children:"DELIVERY TIMES"}),Object(t.jsx)(j.b,{to:"#",children:"EXCHANGE AND RETURN"}),Object(t.jsx)(j.b,{to:"#",children:"USER MANUALS"}),Object(t.jsx)(j.b,{to:"#",children:"HELP CENTRE"}),Object(t.jsx)(j.b,{to:"#",children:"SHIPPING UPDATE - COVID-19"})]}),Object(t.jsxs)("div",{className:"footerMenu",children:[Object(t.jsx)("h2",{children:"SECURITY"}),Object(t.jsx)(j.b,{to:"#",children:"TERMS OF USE"}),Object(t.jsx)(j.b,{to:"#",children:"TERMS OF PURCHASE"}),Object(t.jsx)(j.b,{to:"#",children:"PAYMENT METHODS"}),Object(t.jsx)(j.b,{to:"#",children:"DECLARATION OF CONFORMITY"}),Object(t.jsx)(j.b,{to:"#",children:"GLOBAL WARRANTY"}),Object(t.jsx)(j.b,{to:"#",children:"PRIVACY POLICY"}),Object(t.jsx)(j.b,{to:"#",children:"GDPR"}),Object(t.jsx)(j.b,{to:"#",children:"COOKIES"})]}),Object(t.jsxs)("div",{className:"footerMenu",children:[Object(t.jsx)("h2",{children:"PRESS"}),Object(t.jsx)(j.b,{to:"#",children:"PRESS ROOM"})]})]}),Object(t.jsxs)("div",{className:"footerLogin",children:[Object(t.jsx)("h1",{children:"MY ACOUNT"}),Object(t.jsx)("span",{children:"LOGIN OR CREATE AN ACCOUNT"}),Object(t.jsxs)("div",{className:"footerbuttonDiv",children:[Object(t.jsx)(j.b,{className:"button",to:"login",children:"LOGIN"}),Object(t.jsx)(j.b,{className:"button",to:"CreateAccount",children:"CREATE ACCOUNT"})]})]})]}),Object(t.jsxs)("div",{className:"footerPaymentsDiv",children:[Object(t.jsx)("h2",{children:"SAFE PAYMENTS"}),Object(t.jsxs)("span",{children:["WE PROVIE THE FOLLOWING PAYMENT",Object(t.jsx)("br",{}),"METHODS"]}),Object(t.jsxs)("div",{className:"footerPayments",children:[Object(t.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw4e75c85b/images/payment-methods/Amex_neg.svg"}),Object(t.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw820e0b5e/images/payment-methods/Mastercard_horizontal_neg.svg"}),Object(t.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw04337432/images/payment-methods/Visa_neg.svg"}),Object(t.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw17c504e2/images/payment-methods/Discover_neg.svg"}),Object(t.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw9e123cd0/images/payment-methods/Diners_horizontal_neg.svg"}),Object(t.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb6cc1da1/images/payment-methods/Maestro_horizontal_neg.svg"}),Object(t.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw29c26121/images/payment-methods/jcb_neg.svg"}),Object(t.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw2405c4db/images/payment-methods/PayPal_horizontal_neg.svg"})]})]}),Object(t.jsx)("div",{className:"footerBottom",children:Object(t.jsxs)("div",{className:"footerBottomWrap",children:[Object(t.jsx)("div",{className:"footerAsset",children:Object(t.jsx)("h2",{children:"\xa92020 ZOUND INDUSTRIES. ALL RIGHTS RESERVED. ORG. NR 5567574610"})}),Object(t.jsx)("div",{className:"footerLogo",children:Object(t.jsx)(j.b,{to:"home",children:Object(t.jsx)("img",{src:"https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"})})}),Object(t.jsxs)("div",{className:"footerIcons",children:[Object(t.jsx)(j.b,{to:"spotify",children:Object(t.jsx)("div",{children:Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:u.d})})}),Object(t.jsx)(j.b,{to:"facebook",children:Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:u.a})}),Object(t.jsx)(j.b,{to:"instargram",children:Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:u.b})}),Object(t.jsx)(j.b,{to:"pinterest",children:Object(t.jsx)(O.a,{style:{cursor:"pointer"},icon:u.c})})]})]})})]})})}c(37);function p(e){return Object(t.jsxs)("div",{className:"_cookieContainer",children:[Object(t.jsxs)("div",{className:"_cookieWrap",children:[Object(t.jsx)("span",{children:"This site uses cookies. Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used. For more detailed information on the cookies we use, please check our "}),Object(t.jsx)(j.b,{className:"_linkStyle",to:"policy",children:"Cookie Policy."})]}),Object(t.jsx)(O.a,{onClick:function(){console.log(e.openCookie),e.setOpenCookie(!e.openCookie)},className:"_closeBtn",icon:b.f})]})}c(38),c(39);var v=function(){var e=Object(n.useState)({country:"SOUTH KOREA",language:"ENGLISH"}),s=Object(l.a)(e,2),c=s[0],a=s[1],i=Object(n.useState)(!0),r=Object(l.a)(i,2),o=r[0],d=r[1],b=Object(n.useState)(!0),O=Object(l.a)(b,2),u=O[0],v=O[1],g=Object(n.useState)(!1),y=Object(l.a)(g,2),E=y[0],S=y[1];return Object(n.useEffect)((function(){document.querySelector("html").style=!0===E?"overflow-y : hidden":""})),Object(t.jsx)(j.a,{children:Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(x,{openCountry:o,setOpenCountry:d,country:c,openMobile:E,setOpenMobile:S}),Object(t.jsx)(h,{openCountry:o,setOpenCountry:d,setCountry:a}),Object(t.jsx)(m,{openCountry:o}),!0===u&&Object(t.jsx)(p,{openCookie:u,setOpenCookie:v}),Object(t.jsx)(N,{openCountry:o})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(s){var c=s.getCLS,t=s.getFID,n=s.getFCP,a=s.getLCP,i=s.getTTFB;c(e),t(e),n(e),a(e),i(e)}))};r.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(v,{})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.014ce32a.chunk.js.map