"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f166cc51-8d2c-5065-a2b4-6c9e7c2531c0")}catch(e){}}();
(self.webpackChunkavalanche_extension=self.webpackChunkavalanche_extension||[]).push([[7437,4241],{37690:(e,t,n)=>{n.d(t,{W:()=>i});var a=n(90948),r=n(68483);const i=(0,a.ZP)(r.Kqy)`
  align-items: end;
  padding-left: 8px;
  line-height: 14px;
`},97725:(e,t,n)=>{n.d(t,{H:()=>o});var a=n(68483),r=n(45246),i=n(67294);function c(e,t){return t.length>e}function o({maxLength:e,text:t,className:n}){const o=t.length<=e?t:(0,r.F)(t,e/2);return i.createElement("span",{className:n},i.createElement(a.ua7,{placement:"bottom",title:t,disableHoverListener:!c(e,t),disableFocusListener:!c(e,t),sx:{cursor:"pointer"}},i.createElement(i.Fragment,null,o)))}},25617:(e,t,n)=>{n.d(t,{w:()=>i});var a=n(67294),r=n(47886);const i=(e,t="activeTab")=>{const{search:n,pathname:i}=(0,r.TH)(),c=(0,r.k6)(),o=(0,a.useMemo)((()=>{const e=new URLSearchParams(n).get(t);return null!==e?Number(e):null}),[n,t]),l=(0,a.useCallback)((e=>{e!==o&&c.replace({pathname:i,search:`?${new URLSearchParams({[t]:String(e)}).toString()}`})}),[c,o,t,i]);return{activeTab:o??e,setActiveTab:l}}},75058:(e,t,n)=>{n.d(t,{d:()=>l});var a=n(95280),r=n(9830),i=n(99295),c=n(43023),o=n(67294);function l(){const{tokens:e,isTokensCached:t}=(0,i.j)(),{accounts:{active:n}}=(0,r.a)(),{network:l,favoriteNetworks:s}=(0,c.g)(),m=(0,o.useMemo)((()=>{if(t)return{};const r=Object.keys(e.balances??{});if(!r.length)return{};const i={};return r.forEach((t=>{const r=e.balances?.[t];if(!r)return;const c=(0,a.T)(Number(t))?n?.addressBTC:n?.addressC;if(!c)return;const o=r[c];if(!o)return;const l=Object.values(o).some((e=>void 0===e.priceUSD));i[t]=l})),i}),[n?.addressBTC,n?.addressC,t,e.balances]);return{favoriteNetworksMissingPrice:(0,o.useMemo)((()=>s.some((e=>!0===m[e.chainId]))),[s,m]),activeNetworkMissingPrice:(0,o.useMemo)((()=>!!l?.chainId&&!0===m[l.chainId]),[l?.chainId,m]),isPriceMissingFromNetwork:(0,o.useCallback)((e=>!0===m[e]),[m])}}},35754:(e,t,n)=>{n.d(t,{NG:()=>Ee,pr:()=>ge,ef:()=>ke,$n:()=>pe});var a=n(68483),r=n(72250),i=n(45691),c=n(32672),o=n(27641),l=n(96505),s=n(12463),m=n(47886),d=n(26793),u=n(90948),h=n(97725);const p=(0,u.ZP)(h.H)`
  display: inline-block;
`;var g=n(43242),k=n(70917),E=n(37690),w=n(18520),b=n(57729),x=n(67294);const v=k.F4`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,y=k.F4`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`,f=(0,u.ZP)(a.Kqy)`
  &:hover {
    background-color: ${({theme:e})=>`${e.palette.common.white}40`};
    > .balance-column > .balance {
      display: block;
      animation: 0.3s ease-in-out ${v};
    }
    > .balance-column > .balance-usd {
      display: none;
      animation: 0.3s ease-in-out ${y};
    }
  }
`;function C({assetList:e}){const{t}=(0,d.$)(),{capture:n}=(0,o.O)(),{currencyFormatter:r,getTokenVisibility:u}=(0,l.K)(),k=(0,s.E)(),v=(0,m.k6)(),y=e.filter((e=>u(e))).sort(((e,t)=>(t.balanceUSD??0)-(e.balanceUSD??0))),C=y.length-4;return x.createElement(x.Fragment,null,y.slice(0,4).map((e=>x.createElement(f,{"data-testid":`${e.symbol.toLowerCase()}-token-list-row`,direction:"row",alignItems:"center",justifyContent:"space-between",margin:"0 -16px",padding:"4px 16px",key:e.symbol,onClick:t=>{t.stopPropagation(),n("PortfolioTokenSelected",{selectedToken:e.type===i.iv.ERC20?e.address:e.symbol}),k({token:e,options:{path:"/token"}})}},x.createElement(a.Kqy,{direction:"row",alignItems:"center"},x.createElement(c.T,{width:"24px",height:"24px",src:e.logoUri,name:e.name}),x.createElement(a.Kqy,{sx:{ml:1}},x.createElement(a.ZT$,{"data-testid":"token-row-name",variant:"button"},x.createElement(h.H,{maxLength:12,text:e.name})),x.createElement(a.ZT$,{variant:"caption",sx:{color:"text.secondary"}},e.balance&&(0,b.r)(e)?(0,g.m)(e.balance.add(e.unconfirmedBalance),e.decimals):e.balanceDisplayValue," ",x.createElement(p,{maxLength:8,text:e.symbol})))),x.createElement(E.W,{className:"balance-column"},"number"==typeof e.balanceUSD&&x.createElement(a.ZT$,{"data-testid":"token-row-currency-balance",variant:"caption",sx:{fontWeight:"bold"}},r(e.balanceUSD+(((0,b.r)(e)?e.unconfirmedBalanceUSD:0)||0))),x.createElement(a.Kqy,null,e.priceChanges&&e.priceChanges.value&&e.priceChanges.percentage?x.createElement(w.U,{value:e.priceChanges.value,percentage:e.priceChanges.percentage}):null))))),x.createElement(a.Kqy,{direction:"row",justifyContent:"flex-end"},C>0&&x.createElement(a.zxk,{variant:"text",onClick:()=>v.push("/assets"),sx:{mt:1,color:"seconday.main",p:0}},x.createElement(a.Kqy,{direction:"row",alignContent:"center",sx:{columnGap:"10px"}},x.createElement(a.ZT$,{variant:"caption",sx:{fontWeight:"fontWeightSemibold"}},t("+{{restAssetCount}} more",{restAssetCount:C})),x.createElement(a.XCv,{size:16})))))}const N=(0,u.ZP)(a.Zbd)`
  padding: 16px;
  cursor: pointer;
  line-height: 1;
  &:hover {
    background-color: ${({theme:e})=>`${e.palette.grey[800]}b3`};
  }
`;var $=n(43023),I=n(49530),T=n(40652),K=n(85590),q=n(67294);function P(){const{t:e}=(0,d.$)(),{network:t}=(0,$.g)(),n=(0,m.k6)();return t?.chainId===I.a_.AVALANCHE_MAINNET_ID?q.createElement(a.Kqy,{sx:{flexDirection:"row",mt:2,gap:1,justifyContent:"space-between"}},q.createElement(a.zxk,{color:"secondary",fullWidth:!0,onClick:e=>{e.stopPropagation(),(0,T.RB)({url:`${(0,K.p)()}/buy`})}},q.createElement(a.Vwp,{size:16,sx:{mr:1}}),e("Buy")),q.createElement(a.zxk,{color:"secondary",fullWidth:!0,onClick:e=>{e.stopPropagation(),n.push("/receive")}},q.createElement(a.Cge,{size:16,sx:{mr:1}}),e("Receive"))):q.createElement(a.Kqy,{sx:{mt:2,flexDirection:"row"}},q.createElement(a.zxk,{color:"secondary",fullWidth:!0,onClick:e=>{e.stopPropagation(),n.push("/receive")}},q.createElement(a.Cge,{size:16,sx:{mr:1}}),e("Receive")))}var A=n(62440),Z=n(99295),j=n(57832),S=n(67294);const F=(0,u.ZP)("div")`
  width: auto;
  height: ${({height:e})=>e??"32px"};
  position: ${({position:e})=>e??"static"};
	margin: ${({margin:e})=>e??"0"};
  top: 0;
  left: 0;
  background-color: 'grey.800',
  border-radius: 50%;
`,U=(0,u.ZP)("img")`
  width: auto;
  height: ${({height:e})=>e??"32px"};
  position: ${({position:e})=>e??"static"};
  margin: ${({margin:e})=>e??"0"};
  top: 0;
  left: 0;
`;function L({src:e,height:t,position:n,margin:r}){return S.createElement(S.Fragment,null,e?S.createElement(U,{height:t,src:(0,j.w)(e),position:n,margin:r}):S.createElement(F,{height:t,position:n,margin:r},S.createElement(a.n9J,{size:t,sx:{p:0}})))}var z=n(6419),O=n(60891),W=n(95280),M=n(13550),B=n(62334),D=n(67294);function V({balances:e}){const{t}=(0,d.$)(),n={lockedStaked:t("Locked Staked"),lockedStakeable:t("Locked Stakeable"),lockedPlatform:t("Locked Platform"),atomicMemoryLocked:t("Atomic Memory Locked"),atomicMemoryUnlocked:t("Atomic Memory Unlocked"),unlockedUnstaked:t("Unlocked Unstaked"),unlockedStaked:t("Unlocked Staked"),pendingStaked:t("Pending Staked")};return e?D.createElement(D.Fragment,null,Object.keys(n).map((t=>e[t]&&e[t]>0?D.createElement(a.Kqy,{key:`pchain-balance-${t}`,direction:"row",alignItems:"center",justifyContent:"space-between",margin:"0 -16px",padding:"4px 16px"},D.createElement(a.Kqy,{direction:"row",alignItems:"center"},D.createElement(a.ZT$,{"data-testid":"token-row-name",variant:"caption",sx:{ml:1}},n[t])),D.createElement(E.W,{className:"balance-column"},D.createElement(a.ZT$,{className:"balance","data-testid":"token-row-token-balance",variant:"caption"},`${e[t]} AVAX`))):null))):null}var _=n(23246),G=n(67294);function H({balances:e}){const{t}=(0,d.$)(),n={locked:t("Locked"),unlocked:t("Unlocked"),atomicMemoryLocked:t("Atomic Memory Locked"),atomicMemoryUnlocked:t("Atomic Memory Unlocked")};return e?G.createElement(G.Fragment,null,Object.keys(n).map((t=>e[t]&&e[t]>0?G.createElement(a.Kqy,{key:`xchain-balance-${t}`,direction:"row",alignItems:"center",justifyContent:"space-between",margin:"0 -16px",padding:"4px 16px"},G.createElement(a.Kqy,{direction:"row",alignItems:"center"},G.createElement(a.ZT$,{"data-testid":"token-row-name",variant:"caption",sx:{ml:1}},n[t])),G.createElement(E.W,{className:"balance-column"},G.createElement(a.ZT$,{className:"balance","data-testid":"token-row-token-balance",variant:"caption"},`${e[t]} AVAX`))):null))):null}const R=e=>!!e&&Object.keys(e).includes("lockedStaked"),J=e=>!!e&&Object.keys(e).includes("locked");var Q=n(67294);function X({assetList:e,activeNetworkBalance:t,activeNetworkPriceChanges:n}){const{t:r}=(0,d.$)(),i=(0,m.k6)(),{network:s,isCustomNetwork:u}=(0,$.g)(),{currencyFormatter:h}=(0,l.K)(),{isTokensCached:p}=(0,Z.j)(),{capture:g}=(0,o.O)(),k=(0,O.e)(),E=n?n?.value/t*100:void 0;if(!s||!e?.length)return Q.createElement(a.OdW,{variant:"rounded",sx:{width:343,height:190}});const b=1===e.length&&e[0]?.balance.eq(new M.BN(0)),x=e[0];return Q.createElement(Q.Fragment,null,Q.createElement(N,{"data-testid":"active-network-card",display:"block",onClick:e=>{e.stopPropagation(),g("PortfolioPrimaryNetworkClicked",{chainId:s.chainId}),(0,W.N)(s)||(0,B.B)(s)||(0,_.n)(s)?i.push("/token"):i.push("/assets")}},Q.createElement(a.Kqy,{sx:{height:"100%",rowGap:1}},Q.createElement(a.Kqy,{direction:"row",sx:{justifyContent:"space-between",width:"100%"}},Q.createElement(a.Cts,{badgeContent:Object.values(k).length?Q.createElement(a.ua7,{title:Q.createElement(A.c,{i18nKey:"Bridge in progress. <br/> Click for details."}),sx:{cursor:"pointer"}},Q.createElement(Q.Fragment,null,Object.values(k).length)):null,color:"secondary"},Q.createElement(c.T,{width:"40px",height:"40px",src:s.logoUri,name:s.chainName},Q.createElement(L,{height:"40px",src:s.logoUri}))),Q.createElement(a.AfN,{label:r("Active"),size:"small",sx:{height:"20px",cursor:"pointer",color:"success.main"},icon:Q.createElement(a.nQG,{color:"success.main"})})),Q.createElement(a.Kqy,{justifyContent:"center",sx:{rowGap:.5}},Q.createElement(a.Kqy,{sx:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},Q.createElement(a.ZT$,{"data-testid":"active-network-name",variant:"h5",sx:{color:"grey.300"}},s?.chainName),Q.createElement(a.Kqy,{sx:{textAlign:"end"}},Q.createElement(a.ZT$,{"data-testid":"active-network-total-balance",variant:"h6"},h(t)),!u(s.chainId)&&Q.createElement(a.Kqy,{sx:{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}},p&&Q.createElement(a.ua7,{title:r("Balances loading..."),placement:"bottom"},Q.createElement(a.lMq,{size:14,sx:{color:"warning.main",mr:1}})),Q.createElement(w.U,{value:n?.value,percentage:E,size:"big"})))))),Q.createElement(a.izJ,{sx:{my:2,width:"auto"}}),(0,B.B)(s)&&R(x)?Q.createElement(V,{balances:x}):(0,_.n)(s)&&J(x)?Q.createElement(H,{balances:x}):Q.createElement(C,{assetList:e}),b&&!(0,z.i)(s)?Q.createElement(P,null):null,(0,z.i)(s)?Q.createElement(a.zxk,{"data-testid":"btc-bridge-button",color:"secondary",fullWidth:!0,sx:{mt:2},onClick:e=>{e.stopPropagation(),i.push("/bridge")}},Q.createElement(a.Nj_,{sx:{mr:1}}),r("Bridge")):null))}var Y=n(9830),ee=n(26993),te=n(44241),ne=n(67294);function ae({isFullWidth:e}){const{t}=(0,d.$)(),n=(0,m.k6)();return e?ne.createElement(a.zxk,{color:"secondary",size:"large","data-testid":"see-all-networks-button",onClick:e=>{e.stopPropagation(),n.push(`/networks?activeTab=${te.NetworkTab.All}`)},fullWidth:!0},t("View All Networks")):ne.createElement(N,{"data-testid":"see-all-networks-button",sx:{width:"164px",display:"inline-block",mb:2,p:2},onClick:()=>n.push(`/networks?activeTab=${te.NetworkTab.All}`)},ne.createElement(a.Kqy,{justifyContent:"center",alignItems:"center",sx:{height:"100%"}},ne.createElement(a.ZT$,{variant:"body2",fontWeight:"fontWeightSemibold"},t("View All Networks"))))}var re=n(80179),ie=n(14358),ce=n(85114),oe=n(64813),le=n(43562),se=n(67294);const me=(0,u.ZP)("div")`
  margin-top: 4px;
  margin-right: 16px;
`,de=(0,u.ZP)(a.Kqy)`
  margin: 16px 0;
  flex-wrap: wrap;
`;function ue(){const{capture:e}=(0,o.O)(),{network:t,networks:n,setNetwork:r,favoriteNetworks:i,isCustomNetwork:c}=(0,$.g)(),{tokens:s,isTokensCached:m}=(0,Z.j)(),{accounts:{active:u}}=(0,Y.a)(),{currencyFormatter:h}=(0,l.K)(),{t:p}=(0,d.$)(),{bridgeState:g}=(0,re.e)(),{state:{pendingTransfers:k}}=(0,ce.$)();function E({chainId:e}){const t=u&&(0,le.u)(e,u)||"",n=s.balances?.[e],a=n?pe(Object.values(n[t]??{})):null;return a?ge(a):0}const w=i.filter((e=>e.chainId!==t?.chainId)).sort(((e,t)=>{const n=E(e);return E(t)-n}));return n.length?se.createElement(se.Fragment,null,se.createElement(de,{direction:"row",justifyContent:"space-between"},w.map((t=>{const{bridgeTransactions:n}=(0,ie.s)(g,t),i=Object.values(k).filter((({sourceChain:e,targetChain:n})=>(0,oe.Z)(e.chainId)===t.chainId||(0,oe.Z)(n.chainId)===t.chainId)),o=[...Object.values(n),...i],l=s.balances?.[t.chainId],d=E(t);return l?se.createElement(N,{"data-testid":`network-card-${t.chainId}-button`,key:t.chainId,sx:{width:"164px",display:"inline-block",mb:2,p:2},onClick:()=>{e("PortfolioSecondaryNetworkClicked",{chainId:t.chainId}),r(t)}},se.createElement(a.Kqy,{direction:"row",justifyContent:"center",alignItems:"flex-start"},se.createElement(me,null,se.createElement(a.Cts,{badgeContent:o.length,color:"secondary"},se.createElement(ee.A,{width:"40px",height:"40px",padding:"8px",src:t.logoUri,defaultSize:40}))),se.createElement(a.Kqy,{justifyContent:"center",sx:{width:"100%",minHeight:"51px"}},se.createElement(a.ZT$,{variant:"body2",fontWeight:"fontWeightSemibold"},t.chainName),!c(t.chainId)&&se.createElement(a.Kqy,{sx:{flexDirection:"row",alignItems:"center"}},m&&se.createElement(a.ua7,{title:p("Balances loading..."),placement:"bottom"},se.createElement(a.lMq,{size:12,sx:{color:"warning.main",mr:1}})),se.createElement(a.ZT$,{"data-testid":`network-card-${t.chainId}-balance`,size:14,height:"17px"},h(d)))))):se.createElement(a.OdW,{key:t.chainId,variant:"rounded",sx:{height:89,width:164,mb:2}})})),n.length&&se.createElement(ae,{isFullWidth:w.length%2==0}))):se.createElement(de,{direction:"row",justifyContent:"space-between"},se.createElement(a.OdW,{variant:"rounded",sx:{height:89,width:164,mb:2}}),se.createElement(a.OdW,{variant:"rounded",sx:{height:89,width:164,mb:2}}))}var he=n(67294);const pe=e=>{if(e)return e.filter((e=>!e.balance.isZero()))},ge=e=>e.reduce(((e,t)=>e+(((0,b.r)(t)?t.unconfirmedBalanceUSD:0)||0)+(t.balanceUSD||0)),0),ke=e=>e.reduce(((e,t)=>{if(!t.priceChanges)return e;const{percentage:n,value:a}=t.priceChanges;return n?{value:e.value+(a||0),percentage:[...e.percentage,n]}:e}),{percentage:[],value:0});function Ee(){const e=(0,r._)(),t=ge(e),n=ke(e);return he.createElement(a.Kqy,{sx:{m:2}},he.createElement(X,{assetList:e,activeNetworkBalance:t,activeNetworkPriceChanges:n}),he.createElement(ue,null))}},68611:(e,t,n)=>{n.d(t,{L:()=>F,p:()=>L});var a=n(47886),r=n(67294),i=n(26793),c=n(90948),o=n(68483),l=n(27641),s=n(1336),m=n(25617),d=n(43023),u=n(87462),h=n(67294);const p={timeout:500,easing:"ease-in-out",appear:!0};function g({text:e}){return h.createElement(o.Q5I,(0,u.Z)({},p,{in:!0}),h.createElement(o.Kqy,{sx:{alignItems:"center",justifyContent:"center",flexGrow:"1",height:"100%"}},h.createElement(o.ZT$,{"data-testid":"empty-list-text",variant:"body2"},e)))}var k=n(41967),E=n(71315),w=n(49530),b=n(2734),x=n(70582),v=n(26993),y=n(57832);const f=(0,c.ZP)(o.Kqy,{shouldForwardProp:e=>"isActive"!==e})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.15s ease-in-out;
  background-color: ${({isActive:e,theme:t})=>e?`${t.palette.grey[900]}80`:"inherit"};

  :hover {
    background-color: ${({theme:e})=>`${e.palette.grey[900]}80`};
  }
`,C=(0,c.ZP)("div")`
  width: 32px;
  height: 32px;
  position: relative;
`,N=(0,c.ZP)("div")`
  width: 32px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &.item-enter {
    opacity: 1;
    transform: scale(1);
    top: 0;
    left: 0;
  }
  &.item-enter-active {
    opacity: 0;
    top: ${({position:e})=>e?`-${65*e}px`:0};
    left: 40px;
    transform: scale(0);
    transition: top 500ms ease-in-out, opacity 750ms ease-in-out,
      left 500ms ease-in-out, transform 550ms ease-in-out;
  }
`,$=(0,c.ZP)("img")`
  width: 32px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &.item-enter {
    opacity: 1;
    transform: scale(1);
    top: 0;
    left: 0;
  }
  &.item-enter-active {
    opacity: 0;
    top: ${({position:e})=>e?`-${65*e}px`:0};
    left: 40px;
    transform: scale(0);
    transition: top 500ms ease-in-out, opacity 750ms ease-in-out,
      left 500ms ease-in-out, transform 550ms ease-in-out;
  }
`;var I=n(67294);function T({networkList:e}){const{t}=(0,i.$)(),{network:n,setNetwork:c,removeFavoriteNetwork:s,isFavoriteNetwork:m,addFavoriteNetwork:u}=(0,d.g)(),h=(0,a.k6)(),p=(0,b.Z)(),{capture:g}=(0,l.O)(),[T,K]=(0,r.useState)(null);return e.length?I.createElement(o.$B7,{style:{flexGrow:1,maxHeight:"unset",height:"100%"}},I.createElement(k.Z,{component:null},e.map(((e,a)=>{const r=m(e.chainId);return I.createElement(o.UO1,{key:e.chainId,className:"item"},a>0&&I.createElement(o.izJ,{sx:{mx:2}}),I.createElement(f,{onClick:()=>{c(e),x.ZP.success(t("Active Network has changed!"),{duration:2e3}),h.push("/home")},"data-testid":`network-li-${a}`,isActive:e.chainId===n?.chainId},I.createElement(o.Kqy,{direction:"row",sx:{alignItems:"center",gap:2}},I.createElement(C,null,I.createElement(E.Z,{key:e.chainId,timeout:500,classNames:"item",appear:!0,in:T===e.chainId},e.logoUri?I.createElement($,{src:(0,y.w)(e.logoUri),position:a+1,isFavorited:a===T}):I.createElement(N,{position:a+1,isFavorited:a===T},I.createElement(o.n9J,{width:"100%",height:"100%",color:p.palette.common.white,size:32}))),I.createElement(v.A,{src:e.logoUri,width:"32px",height:"32px",position:"absolute",defaultSize:32})),I.createElement(o.ZT$,{variant:"body1",sx:{fontWeight:"fontWeightSemibold"}},e.chainName)),I.createElement(o.Kqy,{direction:"row",sx:{flexShrink:0,alignItems:"center"}},e.chainId!==w.a_.AVALANCHE_MAINNET_ID&&I.createElement(o.hU,{onClick:t=>{t.stopPropagation(),r?(K(null),s(e.chainId)):(K(e.chainId),u(e.chainId))},"data-testid":"favorite-network"},r?I.createElement(o.e0l,{size:24}):I.createElement(o.r7p,{size:24})),I.createElement(o.hU,{onClick:t=>{t.stopPropagation(),g("NetworkDetailsClicked",{chainId:e.chainId}),h.push(`/networks/details/${e.chainId}`)},"data-testid":"network-details"},I.createElement(o.uMt,{size:24})))))})))):null}var K=n(67294);function q({searchTerm:e}){const{t}=(0,i.$)(),{customNetworks:n}=(0,d.g)(),a=n.filter((t=>e&&t.chainName.match(e)));return K.createElement(o.Kqy,{sx:{height:1,pb:1}},!a.length&&K.createElement(g,{text:t("There is no search result.")}),K.createElement(T,{networkList:a}))}var P=n(67294);function A({searchTerm:e}){const{t}=(0,i.$)(),{favoriteNetworks:n}=(0,d.g)(),a=n.filter((t=>e&&t.chainName.match(e))),r=n.length>0,c=a.length>0;return P.createElement(o.Kqy,{sx:{width:1,height:1,pb:1}},!r&&P.createElement(g,{text:t("You don't have any favorite item yet.")}),r&&!c&&P.createElement(g,{text:t("There is no search result.")}),P.createElement(T,{networkList:a}))}var Z=n(67294);function j({searchTerm:e}){const{t}=(0,i.$)(),{networks:n}=(0,d.g)(),a=n.filter((t=>e&&t.chainName.match(e))),r=a.length>0;return Z.createElement(o.Kqy,{sx:{width:1,height:1,pb:1}},r?Z.createElement(T,{networkList:a}):Z.createElement(g,{text:t("There is no search result.")}))}var S=n(67294);let F=function(e){return e[e.Favorites=0]="Favorites",e[e.All=1]="All",e[e.Custom=2]="Custom",e}({});const U=(0,c.ZP)(o.x45)`
  flex-grow: 1;
`;function L(){const{t:e}=(0,i.$)(),[t,n]=(0,r.useState)(""),{capture:c}=(0,l.O)(),d=(0,a.k6)(),{activeTab:u,setActiveTab:h}=(0,m.w)(F.Favorites),p=new RegExp(t,"gi");return S.createElement(o.Kqy,{sx:{width:1,flexGrow:1}},S.createElement(s.V,{margin:"12px 0"},S.createElement(o.Kqy,{direction:"row",sx:{alignItems:"center",justifyContent:"space-between",pr:1}},e("Networks"),S.createElement(o.hU,{"data-testid":"add-network-button",onClick:()=>d.push("/networks/add")},S.createElement(o.pOD,{size:24})))),S.createElement(o.Kqy,{sx:{py:1,px:2}},S.createElement(o.E1j,{sx:{width:1},onChange:e=>n(e.target.value),"data-testid":"network-search"})),S.createElement(o.mQc,{size:"medium",variant:"fullWidth",indicatorColor:"secondary",value:u,onChange:(e,t)=>{t===F.Custom?c("NetworkCustomTabClicked"):t===F.Favorites?c("NetworkFavoritesTabClicked"):c("NetworkNetworksTabClicked"),h(t)}},S.createElement(o.OK9,{label:e("Favorites"),value:F.Favorites}),S.createElement(o.OK9,{label:e("Networks"),value:F.All}),S.createElement(o.OK9,{label:e("Custom"),value:F.Custom})),S.createElement(o.Kqy,{sx:{flexGrow:1,mt:-.25,pt:1,borderTop:1,borderColor:"divider"}},S.createElement(U,{value:u,index:F.Favorites},S.createElement(A,{searchTerm:p})),S.createElement(U,{value:u,index:F.All},S.createElement(j,{searchTerm:p})),S.createElement(U,{value:u,index:F.Custom},S.createElement(q,{searchTerm:p}))))}},44241:(e,t,n)=>{n.r(t),n.d(t,{NetworkTab:()=>a.L,Networks:()=>a.p});var a=n(68611)},6419:(e,t,n)=>{n.d(t,{i:()=>r});var a=n(49530);function r(e){return e?.vmName===a.mK.BITCOIN}}}]);
//# debugId=f166cc51-8d2c-5065-a2b4-6c9e7c2531c0
