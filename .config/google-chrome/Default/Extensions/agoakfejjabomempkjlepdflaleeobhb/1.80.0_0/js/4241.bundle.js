"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7484935b-2485-5ab9-97c9-936df5e7d81e")}catch(e){}}();
(self.webpackChunkavalanche_extension=self.webpackChunkavalanche_extension||[]).push([[4241],{25617:(e,t,a)=>{a.d(t,{w:()=>i});var r=a(67294),n=a(47886);const i=(e,t="activeTab")=>{const{search:a,pathname:i}=(0,n.TH)(),o=(0,n.k6)(),s=(0,r.useMemo)((()=>{const e=new URLSearchParams(a).get(t);return null!==e?Number(e):null}),[a,t]),c=(0,r.useCallback)((e=>{e!==s&&o.replace({pathname:i,search:`?${new URLSearchParams({[t]:String(e)}).toString()}`})}),[o,s,t,i]);return{activeTab:s??e,setActiveTab:c}}},68611:(e,t,a)=>{a.d(t,{L:()=>S,p:()=>z});var r=a(47886),n=a(67294),i=a(26793),o=a(90948),s=a(68483),c=a(27641),l=a(1336),m=a(25617),h=a(43023),u=a(87462),d=a(67294);const p={timeout:500,easing:"ease-in-out",appear:!0};function w({text:e}){return d.createElement(s.Q5I,(0,u.Z)({},p,{in:!0}),d.createElement(s.Kqy,{sx:{alignItems:"center",justifyContent:"center",flexGrow:"1",height:"100%"}},d.createElement(s.ZT$,{"data-testid":"empty-list-text",variant:"body2"},e)))}var v=a(41967),E=a(71315),k=a(49530),g=a(2734),x=a(70582),f=a(26993),y=a(57832);const b=(0,o.ZP)(s.Kqy,{shouldForwardProp:e=>"isActive"!==e})`
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
`,N=(0,o.ZP)("div")`
  width: 32px;
  height: 32px;
  position: relative;
`,C=(0,o.ZP)("div")`
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
`,T=(0,o.ZP)("img")`
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
`;var I=a(67294);function $({networkList:e}){const{t}=(0,i.$)(),{network:a,setNetwork:o,removeFavoriteNetwork:l,isFavoriteNetwork:m,addFavoriteNetwork:u}=(0,h.g)(),d=(0,r.k6)(),p=(0,g.Z)(),{capture:w}=(0,c.O)(),[$,A]=(0,n.useState)(null);return e.length?I.createElement(s.$B7,{style:{flexGrow:1,maxHeight:"unset",height:"100%"}},I.createElement(v.Z,{component:null},e.map(((e,r)=>{const n=m(e.chainId);return I.createElement(s.UO1,{key:e.chainId,className:"item"},r>0&&I.createElement(s.izJ,{sx:{mx:2}}),I.createElement(b,{onClick:()=>{o(e),x.ZP.success(t("Active Network has changed!"),{duration:2e3}),d.push("/home")},"data-testid":`network-li-${r}`,isActive:e.chainId===a?.chainId},I.createElement(s.Kqy,{direction:"row",sx:{alignItems:"center",gap:2}},I.createElement(N,null,I.createElement(E.Z,{key:e.chainId,timeout:500,classNames:"item",appear:!0,in:$===e.chainId},e.logoUri?I.createElement(T,{src:(0,y.w)(e.logoUri),position:r+1,isFavorited:r===$}):I.createElement(C,{position:r+1,isFavorited:r===$},I.createElement(s.n9J,{width:"100%",height:"100%",color:p.palette.common.white,size:32}))),I.createElement(f.A,{src:e.logoUri,width:"32px",height:"32px",position:"absolute",defaultSize:32})),I.createElement(s.ZT$,{variant:"body1",sx:{fontWeight:"fontWeightSemibold"}},e.chainName)),I.createElement(s.Kqy,{direction:"row",sx:{flexShrink:0,alignItems:"center"}},e.chainId!==k.a_.AVALANCHE_MAINNET_ID&&I.createElement(s.hU,{onClick:t=>{t.stopPropagation(),n?(A(null),l(e.chainId)):(A(e.chainId),u(e.chainId))},"data-testid":"favorite-network"},n?I.createElement(s.e0l,{size:24}):I.createElement(s.r7p,{size:24})),I.createElement(s.hU,{onClick:t=>{t.stopPropagation(),w("NetworkDetailsClicked",{chainId:e.chainId}),d.push(`/networks/details/${e.chainId}`)},"data-testid":"network-details"},I.createElement(s.uMt,{size:24})))))})))):null}var A=a(67294);function F({searchTerm:e}){const{t}=(0,i.$)(),{customNetworks:a}=(0,h.g)(),r=a.filter((t=>e&&t.chainName.match(e)));return A.createElement(s.Kqy,{sx:{height:1,pb:1}},!r.length&&A.createElement(w,{text:t("There is no search result.")}),A.createElement($,{networkList:r}))}var K=a(67294);function Z({searchTerm:e}){const{t}=(0,i.$)(),{favoriteNetworks:a}=(0,h.g)(),r=a.filter((t=>e&&t.chainName.match(e))),n=a.length>0,o=r.length>0;return K.createElement(s.Kqy,{sx:{width:1,height:1,pb:1}},!n&&K.createElement(w,{text:t("You don't have any favorite item yet.")}),n&&!o&&K.createElement(w,{text:t("There is no search result.")}),K.createElement($,{networkList:r}))}var q=a(67294);function P({searchTerm:e}){const{t}=(0,i.$)(),{networks:a}=(0,h.g)(),r=a.filter((t=>e&&t.chainName.match(e))),n=r.length>0;return q.createElement(s.Kqy,{sx:{width:1,height:1,pb:1}},n?q.createElement($,{networkList:r}):q.createElement(w,{text:t("There is no search result.")}))}var L=a(67294);let S=function(e){return e[e.Favorites=0]="Favorites",e[e.All=1]="All",e[e.Custom=2]="Custom",e}({});const U=(0,o.ZP)(s.x45)`
  flex-grow: 1;
`;function z(){const{t:e}=(0,i.$)(),[t,a]=(0,n.useState)(""),{capture:o}=(0,c.O)(),h=(0,r.k6)(),{activeTab:u,setActiveTab:d}=(0,m.w)(S.Favorites),p=new RegExp(t,"gi");return L.createElement(s.Kqy,{sx:{width:1,flexGrow:1}},L.createElement(l.V,{margin:"12px 0"},L.createElement(s.Kqy,{direction:"row",sx:{alignItems:"center",justifyContent:"space-between",pr:1}},e("Networks"),L.createElement(s.hU,{"data-testid":"add-network-button",onClick:()=>h.push("/networks/add")},L.createElement(s.pOD,{size:24})))),L.createElement(s.Kqy,{sx:{py:1,px:2}},L.createElement(s.E1j,{sx:{width:1},onChange:e=>a(e.target.value),"data-testid":"network-search"})),L.createElement(s.mQc,{size:"medium",variant:"fullWidth",indicatorColor:"secondary",value:u,onChange:(e,t)=>{t===S.Custom?o("NetworkCustomTabClicked"):t===S.Favorites?o("NetworkFavoritesTabClicked"):o("NetworkNetworksTabClicked"),d(t)}},L.createElement(s.OK9,{label:e("Favorites"),value:S.Favorites}),L.createElement(s.OK9,{label:e("Networks"),value:S.All}),L.createElement(s.OK9,{label:e("Custom"),value:S.Custom})),L.createElement(s.Kqy,{sx:{flexGrow:1,mt:-.25,pt:1,borderTop:1,borderColor:"divider"}},L.createElement(U,{value:u,index:S.Favorites},L.createElement(Z,{searchTerm:p})),L.createElement(U,{value:u,index:S.All},L.createElement(P,{searchTerm:p})),L.createElement(U,{value:u,index:S.Custom},L.createElement(F,{searchTerm:p}))))}},44241:(e,t,a)=>{a.r(t),a.d(t,{NetworkTab:()=>r.L,Networks:()=>r.p});var r=a(68611)}}]);
//# debugId=7484935b-2485-5ab9-97c9-936df5e7d81e
