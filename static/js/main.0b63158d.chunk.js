(this.webpackJsonpmarshallwep=this.webpackJsonpmarshallwep||[]).push([[0],{30:function(e,t,s){},36:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(2),n=s.n(a),i=s(23),r=s.n(i),l=(s(30),s(8)),o=s(1),d=s(5),j=function(){return Object(c.jsxs)("div",{className:"not-found",children:[Object(c.jsx)("h1",{children:"404 NOT FOUND!"}),Object(c.jsx)("p",{children:"\ucc3e\uc73c\uc2dc\ub294 \ud398\uc774\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4! \uc8fc\uc18c\uac00 \ub9de\ub098 \ub2e4\uc2dc \ud55c \ubc88 \ud655\uc778\ud574\uc8fc\uc138\uc694!"})]})},h=s(16),b=s(19),O=s(6),m=s(4);s(36);function x(e){var t=Object(a.useState)({country:"SOUTH KOREA",language:"ENGLISH"}),s=Object(l.a)(t,2),n=s[0],i=s[1],r=Object(a.useState)(),d=Object(l.a)(r,2),j=d[0],x=d[1],u=function(){x(!j)},p=Object(a.useState)(),g=Object(l.a)(p,2),N=g[0],v=g[1],E=function(){v(!N)},y=function(e){e.preventDefault();var t=e.target,s=t.name,c=t.value;i(Object(b.a)(Object(b.a)({},n),{},Object(h.a)({},s,c))),j&&!N?u():(!j&&N||u(),E())};return Object(c.jsxs)("div",{className:"countryDiv",style:e.openCountry?{}:{height:"0"},children:[Object(c.jsx)(m.a,{className:"_closeBtn",onClick:function(){e.setOpenCountry(!e.openCountry)},icon:O.f}),Object(c.jsxs)("div",{className:"countryWrap",children:[Object(c.jsx)("h2",{children:"SELECT COUNTRY AND LANGUAGE"}),Object(c.jsxs)("span",{children:["COUNTRY, SHIPPING DESTINATIONS AND FREIGHT COSTS ARE",Object(c.jsx)("br",{})," DETERMINED BY YOUR COUNTRY SELECTION."]}),Object(c.jsxs)("div",{className:"selectDiv",children:[Object(c.jsxs)("div",{className:"selectCountry",children:[Object(c.jsxs)("div",{className:"selectWrap",onClick:u,children:[n.country,Object(c.jsx)(m.a,{style:j?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"},icon:O.b})]}),Object(c.jsxs)("div",{className:"countryDropDown",style:j?e.openCountry?{zIndex:"99",opacity:"1",transition:"opacity 0.3s"}:{opacity:"0"}:{display:"none"},children:[Object(c.jsx)("button",{name:"country",onClick:y,value:"CANADA",children:"CANADA"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"FRANCE",children:"FRANCE"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"GERMANY",children:"GERMANY"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"ITALY",children:"ITALY"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"NETHERLANDS",children:"NETHERLANDS"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"SOUTH KOREA",children:"SOUTH KOREA"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"SPAIN",children:"SPAIN"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"SWEDEN",children:"SWEDEN"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"UNITED KINGDOM",children:"UNITED KINGDOM"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"USA",children:"USA"}),Object(c.jsx)("button",{name:"country",onClick:y,value:"",children:"SHOW ALL"})]})]}),Object(c.jsxs)("div",{className:"selectLanguage",children:[Object(c.jsxs)("div",{className:"selectWrap",onClick:E,children:[n.language,Object(c.jsx)(m.a,{style:N?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"},icon:O.b})]}),Object(c.jsxs)("div",{className:"languageDropDown",style:N?e.openCountry?{zIndex:"99",opacity:"1",transition:"opacity 0.3s"}:{opacity:"0"}:{display:"none"},children:[Object(c.jsx)("button",{name:"language",onClick:y,value:"ENGLISH",children:"ENGLISH"}),Object(c.jsx)("button",{name:"language",onClick:y,value:"SPANISH",children:"SPANISH"})]})]}),Object(c.jsx)("button",{onClick:function(){e.setCountry(n),e.setOpenCountry(!e.openCountry),alert("\uad6d\uac00 : ".concat(n.country," \uc5b8\uc5b4 : ").concat(n.language," \uc785\ub2c8\ub2e4.")),j&&!N?u():!j&&N?E():j&&N&&(u(),E())},className:"button",children:"CONFIRM"})]}),Object(c.jsx)(o.b,{to:"#",children:Object(c.jsxs)("span",{children:["IF YOUR COUNTRY IS NOT VISIBLE IN THE LIST CLICK HERE TO VISIT OUR COUNTRY ",Object(c.jsx)("br",{}),"DIRECTORY"]})})]})]})}s(39);function u(e){var t=function(){e.setOpenCountry(!e.openCountry),document.querySelector("html").scrollTo(0,0)};Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}));var s=Object(a.useRef)(),n=Object(a.useRef)(),i=function(){var t=document.documentElement.scrollTop,c=document.documentElement.scrollWidth;0===t&&c>1e3&&(s.current.style="top : -120px;",n.current.style=""),c<1e3&&(s.current.style="top : px;"),!1===e.openCountry&&c>1e3&&(t>=110?(s.current.style="top : 0px;",n.current.style="background : black;"):t<=110&&(s.current.style="top : -120px;",n.current.style=""))},r=function(){e.setOpenMobile(!e.openMobile),e.setOpenCountry(!1)};return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"headerContainer",style:e.openCountry?{position:"absolute",top:"19vw",zIndex:"99"}:{position:"absolute",top:"-1vw",zIndex:"9999"},children:[Object(c.jsx)("div",{className:"hiddenCategory",ref:s,children:Object(c.jsxs)("div",{className:"hiddenWrap",children:[Object(c.jsx)(o.b,{className:"hiddenLogo",to:"/MarshallWeb",altt:"logo",children:Object(c.jsx)("img",{className:"headerLogoH",src:"https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"})}),Object(c.jsxs)("div",{className:"categoryWrapH",children:[Object(c.jsxs)("ul",{className:"categoryMenuH",children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/headphones",children:"HEADPHONES"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"SPEAKERS"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"ACCESSORIES"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"BACKSTAGE"})})]}),Object(c.jsxs)("div",{className:"iconDivH",children:[Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.d}),Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.c}),Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.e})]})]}),Object(c.jsx)("div",{className:"languageDivH",children:Object(c.jsxs)("div",{className:"languageWrapH",onClick:t,children:[Object(c.jsxs)("span",{children:[e.country.country," / ",e.country.language]}),Object(c.jsx)(m.a,{icon:O.b})]})})]})}),Object(c.jsxs)("div",{className:"headerWrap",children:[Object(c.jsx)("div",{className:"languageDiv",children:Object(c.jsxs)("div",{className:"languageWrap",onClick:t,children:[Object(c.jsxs)("span",{children:[e.country.country," / ",e.country.language]}),Object(c.jsx)(m.a,{icon:O.b})]})}),Object(c.jsx)(o.b,{to:"/MarshallWeb",children:Object(c.jsx)("img",{className:"headerLogo",alt:"logo",src:"https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"})}),Object(c.jsx)("div",{ref:n,className:"headerCategory",children:Object(c.jsxs)("div",{className:"categoryWrap",children:[Object(c.jsxs)("ul",{className:"categoryMenu",children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/headphones",children:"HEADPHONES"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"SPEAKERS"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"ACCESSORIES"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"BACKSTAGE"})})]}),Object(c.jsxs)("div",{className:"iconDiv",children:[Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.d}),Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.c}),Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.e})]})]})})]})]}),Object(c.jsxs)("div",{className:"headerMobile",children:[Object(c.jsxs)("div",{className:"headerMobileWrap",style:e.openCountry?{position:"absolute",top:"29vw"}:{position:"fixed",top:"0vw"},children:[Object(c.jsx)(o.b,{className:"hiddenLogoM",to:"/MarshallWeb",alt:"logo",children:Object(c.jsx)("img",{className:"headerLogoH",src:"https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"})}),Object(c.jsxs)("div",{className:"iconDivH",children:[Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.d}),Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.c}),Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:O.e}),Object(c.jsx)(m.a,{onClick:r,style:{cursor:"pointer"},icon:O.a})]})]}),Object(c.jsxs)("div",{className:"headerMobileMenu",style:e.openMobile?{}:{display:"none"},children:[Object(c.jsx)("div",{onClick:r,className:"closeBtn",children:Object(c.jsx)(m.a,{icon:O.f})}),Object(c.jsxs)("div",{className:"categoryWrapH",children:[Object(c.jsxs)("ul",{className:"categoryMenuH",children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{onClick:r,to:"/MarshallWeb",children:"HOME"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{onClick:r,to:"/headphones",children:"HEADPHONES"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{onClick:r,to:"#",children:"SPEAKERS"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{onClick:r,to:"#",children:"ACCESSORIES"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{onClick:r,to:"#",children:"BACKSTAGE"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{onClick:r,to:"#",children:"LOGIN"})})]}),Object(c.jsx)("div",{className:"languageDivH",children:Object(c.jsxs)("div",{className:"languageWrapH",onClick:function(){e.setOpenMobile(!e.openMobile),e.setOpenCountry(!e.openCountry),document.querySelector("html").scrollTo(0,0)},children:[Object(c.jsxs)("span",{children:[e.country.country," / ",e.country.language]}),Object(c.jsx)(m.a,{icon:O.b})]})})]})]})]})]})}s(40);function p(e){return Object(c.jsxs)("div",{className:"homeContainer",children:[Object(c.jsxs)("div",{className:"homeMain",style:e.openCountry?{zIndex:""}:{zIndex:"9"},children:[Object(c.jsx)("div",{className:"homeWrap",children:Object(c.jsxs)("div",{className:"mainText",children:[Object(c.jsx)(o.b,{id:"text1",to:"#",children:Object(c.jsx)("span",{children:"EMBERTON"})}),Object(c.jsx)(o.b,{id:"text2",to:"#",children:"FILL YOUR HOME WITH ABSOLUTE 360\u02da SOUND"}),Object(c.jsx)(o.b,{id:"text3",to:"#",children:"Rock out but stay in with big-stage sound in a small frame"}),Object(c.jsx)("button",{className:"button",children:"GET IT NOW"})]})}),Object(c.jsx)("div",{className:"gradientDiv"})]}),Object(c.jsx)("article",{className:"homeContents01",children:Object(c.jsxs)("div",{className:"contentsDiv01",children:[Object(c.jsxs)(o.b,{className:"imgDiv01",to:"#",children:[Object(c.jsx)("div",{className:"gradientDiv"}),Object(c.jsxs)("div",{className:"contentsText",children:[Object(c.jsx)("span",{children:"ACTON II BLUETOOTH"}),Object(c.jsx)("h2",{children:"TAKE THE BIG STAGE HOME"}),Object(c.jsx)("button",{className:"button",children:"GET IT NOW"})]})]}),Object(c.jsxs)(o.b,{className:"imgDiv02",to:"#",children:[Object(c.jsx)("div",{className:"gradientDiv"}),Object(c.jsxs)("div",{className:"contentsText",children:[Object(c.jsx)("span",{children:"ACTON II BLUETOOTH"}),Object(c.jsx)("h2",{children:"BIG SOUND FOR SMALL SPACES"}),Object(c.jsx)("button",{className:"button",children:"GET IT NOW"})]})]})]})}),Object(c.jsxs)("article",{className:"homeContents02",children:[Object(c.jsxs)(o.b,{to:"#",className:"contentsText",children:[Object(c.jsx)("span",{children:"MAJOR IV"}),Object(c.jsx)("h2",{children:"AN ICON, REBORN WITH UNRIVALLED MARHHALL SOUND"}),Object(c.jsx)("p",{children:"Take some time for yourself and your music"}),Object(c.jsx)("button",{className:"button",children:"GET IT NOW"})]}),Object(c.jsx)(o.b,{to:"#",className:"gradientDiv"})]}),Object(c.jsx)("article",{className:"homeContents03",children:Object(c.jsxs)("div",{className:"contentsDiv03",children:[Object(c.jsxs)(o.b,{to:"#",className:"imgDiv01",children:[Object(c.jsxs)("div",{className:"contentsText",children:[Object(c.jsx)("span",{children:"MAJOR III BLUETOOTH"}),Object(c.jsx)("h2",{children:"THE MODERN GO-TO CLASSIC"})]}),Object(c.jsx)("div",{className:"gradientDiv"})]}),Object(c.jsxs)(o.b,{to:"#",className:"imgDiv02",children:[Object(c.jsxs)("div",{className:"contentsText",children:[Object(c.jsx)("span",{children:"SPEAKER POWER CABLE"}),Object(c.jsx)("h2",{children:"PLUG IN AND CHILL OUT"})]}),Object(c.jsx)("div",{className:"gradientDiv"})]}),Object(c.jsxs)(o.b,{to:"#",className:"imgDiv03",children:[Object(c.jsxs)("div",{className:"contentsText",children:[Object(c.jsx)("span",{children:"MONITOR II A.N.C."}),Object(c.jsx)("h2",{children:"RETREAT INTO YOUR MUSIC"})]}),Object(c.jsx)("div",{className:"gradientDiv"})]})]})}),Object(c.jsxs)("article",{className:"homeContents04",children:[Object(c.jsxs)("div",{className:"contentsTitle",children:[Object(c.jsx)("h2",{children:"MOST POPULAR ITEMS"}),Object(c.jsx)("span",{children:"Award winning products for your home or on the go"})]}),Object(c.jsxs)("div",{className:"contentsDiv04",children:[Object(c.jsxs)("div",{className:"contentsWrap",children:[Object(c.jsx)(o.b,{className:"imgLink",to:"#",children:Object(c.jsx)("div",{className:"imgDiv01"})}),Object(c.jsxs)(o.b,{to:"#",className:"contentsText",children:[Object(c.jsx)("div",{className:"productName",children:Object(c.jsx)("h2",{children:"MONITOR II A.N.C."})}),Object(c.jsxs)("div",{className:"priceText",children:[Object(c.jsx)("i",{children:"$"}),Object(c.jsx)("span",{children:"359.00"})]})]})]}),Object(c.jsxs)("div",{className:"contentsWrap",children:[Object(c.jsx)(o.b,{className:"imgLink",to:"#",children:Object(c.jsx)("div",{className:"imgDiv02"})}),Object(c.jsxs)(o.b,{to:"#",className:"contentsText",children:[Object(c.jsxs)("div",{className:"productName",children:[Object(c.jsx)("h2",{children:"EMBERTON"}),Object(c.jsx)("h3",{children:"PORTABLE"})]}),Object(c.jsxs)("div",{className:"priceText",children:[Object(c.jsx)("div",{children:"From"}),Object(c.jsx)("i",{children:"$"}),Object(c.jsx)("span",{children:"179.00"})]}),Object(c.jsxs)("div",{className:"colorSelect",children:[Object(c.jsxs)(o.b,{to:"color",children:[" ",Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #000000 50%"}})]}),Object(c.jsxs)(o.b,{to:"color",children:[" ",Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #b9935e 50%"}})]})]})]})]}),Object(c.jsxs)("div",{className:"contentsWrap",children:[Object(c.jsx)(o.b,{className:"imgLink",to:"#",children:Object(c.jsx)("div",{className:"imgDiv03"})}),Object(c.jsxs)(o.b,{to:"#",className:"contentsText",children:[Object(c.jsxs)("div",{className:"productName",children:[Object(c.jsx)("h2",{children:"STOCKWELL II"}),Object(c.jsx)("h3",{children:"PORTABLE"})]}),Object(c.jsxs)("div",{className:"priceText",children:[Object(c.jsx)("div",{children:"From"}),Object(c.jsx)("i",{children:"$"}),Object(c.jsx)("span",{children:"239.00"})]}),Object(c.jsxs)("div",{className:"colorSelect",children:[Object(c.jsx)(o.b,{to:"color",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #000000 50%"}})}),Object(c.jsx)(o.b,{to:"color",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #3F5364, #3F5364 50%, #3F5364 50%"}})}),Object(c.jsx)(o.b,{to:"color",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #50294c, #50294c 50%, #50294c 50% "}})}),Object(c.jsx)(o.b,{to:"color",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #b9935e 50%"}})})]})]})]}),Object(c.jsxs)("div",{className:"contentsWrap",children:[Object(c.jsx)(o.b,{className:"imgLink",to:"#",children:Object(c.jsx)("div",{className:"imgDiv04"})}),Object(c.jsxs)(o.b,{to:"#",className:"contentsText",children:[Object(c.jsxs)("div",{className:"productName",children:[Object(c.jsx)("h2",{children:"KILBURN II"}),Object(c.jsx)("h3",{children:"PORTABLE"})]}),Object(c.jsxs)("div",{className:"priceText",children:[Object(c.jsx)("div",{children:"From"}),Object(c.jsx)("i",{children:"$"}),Object(c.jsx)("span",{children:"309.00"})]}),Object(c.jsxs)("div",{className:"colorSelect",children:[Object(c.jsx)(o.b,{to:"color",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #000000 50%"}})}),Object(c.jsx)(o.b,{to:"color",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #AFAEAA, #AFAEAA 50%, #AFAEAA 50%"}})}),Object(c.jsx)(o.b,{to:"color",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #50294c, #50294c 50%, #50294c 50% "}})})]})]})]})]})]})]})}s(41);function g(e){var t=Object(a.useState)([{mainTitle:"LEND US YOUR EARS AND WE\u2019LL PLAY YOU A SONG",mainImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw1a4324d2/images/categories/headphones/monitor-ii-anc/desktop/HERO-Mon-II-ANC-Desktop-1927x800-2.jpg?sw=2000&sh=2000&sm=fit",categorytitle:"ALL HEADPHONES",subTitle:"From in-ears to over-ears and everything in-between, there\u2019s a Marshall headphone that\u2019s perfect for you."},{mainTitle:"THE BIGGER, THE BADDER",mainImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb95c0544/images/front-page/year/2020/february/HERO-Mon-II-ANC-Desktop-1927x800.jpg?sw=1680&sh=2000&sm=fit",categorytitle:"OVER-EAR HEADPHONES",subTitle:"What makes a good headphone great? Hi-Fi sound for starters. Pair that with long-wearing comfort, an ergonomic fit and devilish good looks, and you\u2019ve got yourself a Marshall over-ear headphone. Meet your master."},{mainTitle:"SLIP ON SOMETHING MORE COMFORTABLE",mainImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwf55d415f/images/categories/headphones/on-ear-category/category-headphones-on-ear-Desktop@1,41x.jpg?sw=1680&sh=2000&sm=fit",categorytitle:"ON-EAR HEADPHONES",subTitle:"Built for life on the road or life behind a desk, Marshall on-ear headphones provide endless comfort for hours upon hours of listening."},{mainTitle:"SMALL BUT MIGHTY",mainImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwa49073f5/images/categories/headphones/in-ear-category/new-category-headphones-in-ear-Desktop@1.41x.jpg?sw=1680&sh=2000&sm=fit",categorytitle:"IN-EAR HEADPHONES",subTitle:"Searching for the perfect in-ear headphone? Look no further. Each in-ear from Marshall comes with a microphone and remote, a tangle resistant cord, and interchangeable sleeves or adjustable ear-loops ensuring that the earbuds will fit comfortably in your ears."},{mainTitle:"FREEDOM OF WIRELESS",mainImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw67ef0771/images/categories/headphones/bluetooth-category/category-headphones-bluetooth-Desktop@1,41x.jpg?sw=2000&sh=2000&sm=fit",categorytitle:"BLUETOOTH WIRELESS HEADPHONES",subTitle:"Bluetooth headphones from Marshall. Now go forth, and hear all the chords without the cords, combined with over 50 years of tried and true Marshall performance.NEW"},{mainTitle:"TURN IT UP AND TUNE OUT",mainImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwe8ed4363/images/categories/headphones/anc-category/new-category-headphones-noise-cancelling-Desktop@1.41x.jpg?sw=1680&sh=2000&sm=fit",categorytitle:"ACTIVE NOISE CANCELLING HEADPHONES",subTitle:"Our active noise cancelling headphones utilise four microphones to continuously measure and pinpoint ambient noise to block out the things you don\u2019t want to hear. Now you can focus on what matters most \u2013 the music."}]),s=Object(l.a)(t,2),n=s[0],i=(s[1],Object(a.useState)([{id:1,productImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw6b782c73/images/marshall/headphones/major-iv/medium/cart-marshall-major-iv-black.png?sw=670&sh=670&sm=fit",stock:"OUT OF STOCK",name:"MAJOR IV",price:"179.00",category:"onEar",blueTooth:"blueTooth",new:Object(c.jsx)("div",{className:"newProduct",children:"NEW"})},{id:2,productImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw64d73121/images/marshall/headphones/monitor-ii-anc/medium/mh-monitor-II-ANC-medium.png?sw=380&sh=380&sm=fit",stock:"",name:"MONITOR II A.N.C.",price:"359.00",category:"overEar",noiseCancel:"noiseCancel"},{id:3,productImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwf5df594f/images/marshall/headphones/mid-anc/medium/pl-marshall-headphones-mid-anc-1700x1700.png?sw=380&sh=380&sm=fit",stock:"",name:"MID A.N.C.",price:"329.00",category:"onEar",blueTooth:"blueTooth",noiseCancel:"noiseCancel"},{id:4,productImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwbeee2a1b/images/marshall/headphones/major-iii-bt/black/medium/pl-marshall-headphones-major-iii-bluetooth-black-1700x1700.png?sw=380&sh=380&sm=fit",stock:"",name:"MAJOR III BLUETOOTH",price:"179.00",category:"onEar",blueTooth:"blueTooth",color:Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"#",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #000000, #000000 50%, #000000 50%"}})}),Object(c.jsx)(o.b,{to:"#",children:Object(c.jsx)("span",{style:{background:"linear-gradient(90deg, #ffffff, #ffffff 50%, #ffffff 50%"}})})]})},{id:5,productImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw3f238268/images/marshall/headphones/minor-ii/black/medium/pl-marshall-headphones-minor-ii-black-1700x1700.png?sw=380&sh=380&sm=fit",stock:"",name:"MINOR II",price:"159.00",category:"inEar",blueTooth:"blueTooth",color:Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"#",children:Object(c.jsx)("span",{style:{background:"black"}})}),Object(c.jsx)(o.b,{to:"#",children:Object(c.jsx)("span",{style:{background:"white"}})}),Object(c.jsx)(o.b,{to:"#",children:Object(c.jsx)("span",{style:{background:"#824820"}})})]})},{id:6,productImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwacdd1bc3/images/marshall/headphones/mode-eq/medium/pl-marshall-headphones-mode-eq-1700x1700.png?sw=380&sh=380&sm=fit",stock:"",name:"MODE EQ",price:"99.00",category:"inEar"},{id:7,productImg:"https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw0ea9b3e6/images/marshall/headphones/mode/medium/pl-marshall-headphones-mode-1700x1700.png?sw=380&sh=380&sm=fit",stock:"",name:"MODE",price:"75.00",category:"inEar"}])),r=Object(l.a)(i,2),d=r[0],j=(r[1],Object(a.useState)(0)),h=Object(l.a)(j,2),b=h[0],O=h[1],m=function(e){O(Number(e.target.id)),N(Number(e.target.id))},x=Object(a.useState)(),u=Object(l.a)(x,2),p=u[0],g=u[1],N=function(e){switch(e){case 1:g("overEar");break;case 2:g("onEar");break;case 3:g("inEar");break;case 4:g("blueTooth");break;case 5:g("noiseCancel");break;default:g("all")}},v=d.map((function(e){if(0===b||p===e.category||p===e.blueTooth||p===e.noiseCancel)return Object(c.jsxs)("div",{className:"productWrap",children:[Object(c.jsxs)(o.b,{className:"imgLink",to:"#",children:[e.new,Object(c.jsx)("div",{style:{background:"url( "+e.productImg+")no-repeat center/100%"},className:"imgDiv"})]}),Object(c.jsxs)(o.b,{to:"#",className:"productText",children:[Object(c.jsx)("div",{className:"productName",children:Object(c.jsx)("h2",{children:e.name})}),Object(c.jsx)("span",{className:"productStock",children:e.stock}),Object(c.jsxs)("div",{className:"priceText",children:[Object(c.jsx)("i",{children:"$"}),Object(c.jsx)("span",{children:e.price})]}),Object(c.jsx)("div",{className:"colorSelect",children:e.color})]})]},e.id)}));return Object(c.jsxs)("div",{className:"headPhoneContainer",children:[Object(c.jsxs)("div",{style:{background:"url( "+n[b].mainImg+")no-repeat center/100%"},className:"headPhoneMain",children:[Object(c.jsx)("div",{className:"headPhoneWrap",children:Object(c.jsx)("div",{className:"mainText",children:Object(c.jsx)(o.b,{id:"text1",to:"#",children:n[b].mainTitle})})}),Object(c.jsx)("div",{className:"gradientDiv"})]}),Object(c.jsxs)("div",{className:"headPhoneContants",children:[Object(c.jsxs)("div",{className:"headPhoneCategory",children:[Object(c.jsx)("h3",{children:"SHOP BY CATEGORY"}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:m,id:"0",children:"ALL"})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:m,id:"1",children:"OVER-EAR"})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:m,id:"2",children:"ON-EAR"})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:m,id:"3",children:"IN-EAR"})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:m,id:"4",children:"BLUETOOTH"})}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:m,id:"5",children:"NOISE CANCELLING"})})]}),Object(c.jsxs)("div",{className:"headPhoneProduct",children:[Object(c.jsxs)("div",{className:"headPhoneTitle",children:[Object(c.jsx)("h2",{children:n[b].categorytitle}),Object(c.jsx)("span",{children:n[b].subTitle})]}),Object(c.jsx)("div",{className:"headPhoneList",children:v})]})]})]})}var N=s(14);s(42);function v(e){return Object(c.jsx)("div",{className:"footerContainer",children:Object(c.jsxs)("div",{className:"footerWrap",children:[Object(c.jsx)("div",{className:"newsLetterDiv",children:Object(c.jsxs)("div",{className:"newLetterWrap",children:[Object(c.jsxs)("div",{className:"newsLetterText",children:[Object(c.jsx)("h2",{children:"SIGN UP FOR OUR NEWSLETTER"}),Object(c.jsx)("span",{children:"Get 10 % off on your first order."})]}),Object(c.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Your email address goes here"}),Object(c.jsxs)("div",{className:"policyText",children:[Object(c.jsx)("h2",{children:"BY SUBSCRIBING YOU ACCEPT OUR"}),Object(c.jsx)(o.b,{to:"policy",children:"PRIVACY POLICY."})]}),Object(c.jsx)(o.b,{to:"subscribe",children:Object(c.jsx)("button",{className:"button",children:"SUBSCRIBE"})})]})}),Object(c.jsxs)("div",{className:"footerMenuDiv",children:[Object(c.jsxs)("div",{className:"footerMenuWrap",children:[Object(c.jsxs)("ul",{className:"footerMenu",children:[Object(c.jsx)("h2",{children:"CUSTOMER SERVICE"}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"CONTACT US"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"BUSINESS CUSTOMERS"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"DELIVERY TIMES"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"EXCHANGE AND RETURN"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"USER MANUALS"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"HELP CENTRE"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"SHIPPING UPDATE - COVID-19"})})]}),Object(c.jsxs)("ul",{className:"footerMenu",children:[Object(c.jsx)("h2",{children:"POLICIES"}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"SECURITY"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"TERMS OF USE"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"TERMS OF PURCHASE"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"PAYMENT METHODS"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"DECLARATION OF CONFORMITY"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"GLOBAL WARRANTY"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"PRIVACY POLICY"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"GDPR"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"COOKIES"})})]}),Object(c.jsxs)("ul",{className:"footerMenu",children:[Object(c.jsx)("h2",{children:"PRESS"}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"#",children:"PRESS ROOM"})})]})]}),Object(c.jsxs)("div",{className:"footerLogin",children:[Object(c.jsx)("h1",{children:"MY ACOUNT"}),Object(c.jsx)("span",{children:"LOGIN OR CREATE AN ACCOUNT"}),Object(c.jsxs)("div",{className:"footerbuttonDiv",children:[Object(c.jsx)(o.b,{className:"button",to:"login",children:"LOGIN"}),Object(c.jsx)(o.b,{className:"button",to:"CreateAccount",children:"CREATE ACCOUNT"})]})]})]}),Object(c.jsxs)("div",{className:"footerPaymentsDiv",children:[Object(c.jsx)("h2",{children:"SAFE PAYMENTS"}),Object(c.jsxs)("span",{children:["WE PROVIE THE FOLLOWING PAYMENT",Object(c.jsx)("br",{}),"METHODS"]}),Object(c.jsxs)("div",{className:"footerPayments",children:[Object(c.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw4e75c85b/images/payment-methods/Amex_neg.svg"}),Object(c.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw820e0b5e/images/payment-methods/Mastercard_horizontal_neg.svg"}),Object(c.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw04337432/images/payment-methods/Visa_neg.svg"}),Object(c.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw17c504e2/images/payment-methods/Discover_neg.svg"}),Object(c.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw9e123cd0/images/payment-methods/Diners_horizontal_neg.svg"}),Object(c.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb6cc1da1/images/payment-methods/Maestro_horizontal_neg.svg"}),Object(c.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw29c26121/images/payment-methods/jcb_neg.svg"}),Object(c.jsx)("img",{alt:"",src:"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw2405c4db/images/payment-methods/PayPal_horizontal_neg.svg"})]})]}),Object(c.jsx)("div",{className:"footerBottom",children:Object(c.jsxs)("div",{className:"footerBottomWrap",children:[Object(c.jsx)("div",{className:"footerAsset",children:Object(c.jsx)("h2",{children:"\xa92020 ZOUND INDUSTRIES. ALL RIGHTS RESERVED. ORG. NR 5567574610"})}),Object(c.jsx)("div",{className:"footerLogo",children:Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("img",{src:"https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"})})}),Object(c.jsxs)("div",{className:"footerIcons",children:[Object(c.jsx)(o.b,{to:"/MarshallWeb",children:Object(c.jsx)("div",{children:Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:N.d})})}),Object(c.jsx)(o.b,{to:"/MarshallWeb",children:Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:N.a})}),Object(c.jsx)(o.b,{to:"/MarshallWeb",children:Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:N.b})}),Object(c.jsx)(o.b,{to:"/MarshallWeb",children:Object(c.jsx)(m.a,{style:{cursor:"pointer"},icon:N.c})})]})]})})]})})}s(43);function E(e){return Object(c.jsxs)("div",{className:"_cookieContainer",children:[Object(c.jsxs)("div",{className:"_cookieWrap",children:[Object(c.jsx)("span",{children:"This site uses cookies. Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used. For more detailed information on the cookies we use, please check our "}),Object(c.jsx)(o.b,{className:"_linkStyle",to:"policy",children:"Cookie Policy."})]}),Object(c.jsx)(m.a,{onClick:function(){console.log(e.openCookie),e.setOpenCookie(!e.openCookie)},className:"_closeBtn",icon:O.f})]})}s(44),s(45);var y=function(){var e=Object(a.useState)({country:"SOUTH KOREA",language:"ENGLISH"}),t=Object(l.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)(!1),r=Object(l.a)(i,2),h=r[0],b=r[1],O=Object(a.useState)(!0),m=Object(l.a)(O,2),N=m[0],y=m[1],w=Object(a.useState)(!1),S=Object(l.a)(w,2),C=S[0],f=S[1];return Object(a.useEffect)((function(){document.querySelector("html").style=!0===C?"width : 100%; height : 100%; overflow-y : hidden; touch-action : none;":"position: relative;"}),[C]),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(u,{openCountry:h,setOpenCountry:b,country:s,openMobile:C,setOpenMobile:f}),Object(c.jsx)(x,{openCountry:h,setOpenCountry:b,setCountry:n}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/MarshallWeb",component:p,render:function(){return Object(c.jsx)(p,{openCountry:h})}}),Object(c.jsx)(d.a,{path:"/headphones",component:g,render:function(){return Object(c.jsx)(g,{openCountry:h})}}),Object(c.jsx)(d.a,{component:j})]}),!0===N&&Object(c.jsx)(E,{openCookie:N,setOpenCookie:y}),Object(c.jsx)(v,{openCountry:h})]})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.0b63158d.chunk.js.map