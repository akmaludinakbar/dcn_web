(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{3508:function(n,e,t){"use strict";var r=t(5318);e.Z=void 0;var a=r(t(4938)),i=t(5893),o=(0,a.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");e.Z=o},954:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/absensi",function(){return t(9270)}])},968:function(n,e,t){"use strict";t.d(e,{Z:function(){return T}});var r=t(5893),a=(t(2073),t(7294)),i=t(1496),o=t(2734),l=t(7357),s=t(9058),c=t(6720),d=t(9206),u=t(3808),h=t(8843),x=t(3972),f=t(7720),p=t(4799),m=t(326),j=t(9572),g=t(6215),Z=t(9861),b=t(7594),y=t(9334),w=t(2165),k=t(6448),v=t(1163);function P(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function _(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function S(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){_(n,e,t[e])}))}return n}function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,i=[],o=!0,l=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(s){l=!0,a=s}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return P(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=240,F=(0,i.ZP)("main",{shouldForwardProp:function(n){return"open"!==n}})((function(n){var e=n.theme,t=n.open;return S({flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:"-".concat(O,"px")},t&&{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0})})),M=(0,i.ZP)(d.Z,{shouldForwardProp:function(n){return"open"!==n}})((function(n){var e=n.theme,t=n.open;return S({transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},t&&{width:"calc(100% - ".concat(O,"px)"),marginLeft:"".concat(O,"px"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})})})),N=(0,i.ZP)("div")((function(n){var e=n.theme;return S({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})})),E=[{path:"/home",name:"Dashboard"},{path:"/home/Pekerja",name:"Pekerja"},{path:"/home/Lokasi",name:"Tambah Lokasi"},{path:"/home/Pekerjaan",name:"Tambah Pekerjaan"},{path:"/home/absensi",name:"Catatan Kehadiran"}];function I(n){var e=n.children,t=(0,o.Z)(),i=C(a.useState(!1),2),d=i[0],P=i[1],_=C(a.useState("Dashboard"),2),I=_[0],T=_[1],K=(0,v.useRouter)(),L=K.asPath;K.pathname;return(0,r.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,r.jsx)(c.ZP,{}),(0,r.jsx)(M,{position:"fixed",open:d,children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(p.Z,{color:"inherit","aria-label":"open drawer",onClick:function(){P(!0)},edge:"start",sx:S({mr:2},d&&{display:"none"}),children:(0,r.jsx)(m.Z,{})}),(0,r.jsx)(x.Z,{variant:"h6",noWrap:!0,component:"div",children:I})]})}),(0,r.jsxs)(s.ZP,{sx:{width:O,flexShrink:0,"& .MuiDrawer-paper":{width:O,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:d,children:[(0,r.jsx)(N,{children:(0,r.jsx)(p.Z,{onClick:function(){P(!1)},children:"ltr"===t.direction?(0,r.jsx)(j.Z,{}):(0,r.jsx)(g.Z,{})})}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(h.Z,{children:E.map((function(n,e){return(0,r.jsxs)(Z.ZP,{button:!0,onClick:function(e){T(n.name),v.default.push(n.path)},style:n.path!=L?{}:{backgroundColor:n.path==L?"#d8d8d8":""},children:[(0,r.jsx)(b.Z,{children:e%2===0?(0,r.jsx)(w.Z,{}):(0,r.jsx)(k.Z,{})}),(0,r.jsx)(y.Z,{primary:n.name})]},n.name)}))}),(0,r.jsx)(f.Z,{})]}),(0,r.jsxs)(F,{open:d,children:[(0,r.jsx)(N,{}),e]})]})}t(4209);var T=function(n){var e=n.children;return(0,r.jsx)(I,{children:e})}},9270:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return A},default:function(){return R}});var r=t(5893),a=t(7294),i=t(9874),o=t(8102),l=t(5921),s=t(8263),c=t(2623),d=t(6532),u=t(1250),h=t(3972),x=t(3083),f=t(9587),p=t(3931),m=t(2715),j=t(9397),g=t(3413),Z=t(1987),b=t(3614),y=t(7858),w=t(8439),k=t(9549),v=t(6125),P=t(968),_=t(1496),S=t(9755),C=t(2912),O=(t(1163),t(3508)),F=t(3942),M=t(2359),N=t(9669);function E(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){E(n,e,t[e])}))}return n}function T(n,e,t,r,a){return{name:n,calories:e,fat:t,carbs:r,protein:a}}var K=(0,_.ZP)(o.Z)((function(n){var e,t=n.theme;return E(e={},"&.".concat(S.Z.head),{backgroundColor:t.palette.common.black,color:t.palette.common.white}),E(e,"&.".concat(S.Z.body),{fontSize:14}),e})),L=(0,_.ZP)(l.Z)((function(n){return{"&:nth-of-type(odd)":{backgroundColor:n.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),D=(T("Frozen yoghurt",159,6,24),T("Ice cream sandwich",237,9,37),T("Eclair",262,16,24),T("Cupcake",305,3.7,67),T("Gingerbread",356,16,49),(0,i.Z)((function(n){return{table:{boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.1);"},btn:{color:"#326144",width:"120px",marginLeft:"10px",padding:"7px",backgroundColor:"#FFFFFF",border:"1px solid #326144"},menu:{display:"flex",padding:"10px 30px 10px 30px",alignItems:"center",justifyContent:"flex-end"},btn_search:{backgroundColor:"#326144",color:"white",padding:"7px",width:"120px"},icon:{color:"green"},table_footer:{display:"flex",justifyContent:"flex-end"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{border:"2px solid #000",boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.1);",padding:10,width:"30%"},options:{width:"100%"},formControl:{width:"100%"},footer_modal:{display:"flex",justifyContent:"flex-end",marginTop:"20%"},defaultContent:{padding:"10px"},hidden:{display:"none"},btn_back:{backgroundColor:"#326144"},vip_chip:{backgroundColor:"#232735",color:"white"}}}))),A=!0;function R(n){var e=n.listlokasikerja,t=n.listnamapegawai,i=(0,a.useState)(n.data),P=i[0],_=i[1],S=(0,a.useState)(null),E=S[0],T=S[1],A=(0,a.useState)(null),R=A[0],z=A[1],W=(0,a.useState)(null),J=W[0],$=W[1],G=(0,a.useState)(null),X=G[0],U=G[1],q=D();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:(0,r.jsxs)(s.ZP,{container:!0,direction:"row",spacing:3,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,children:(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(u.Z,{expandIcon:(0,r.jsx)(O.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",style:{backgroundColor:"#0486cfa1"},children:(0,r.jsx)(h.Z,{children:"Filters"})}),(0,r.jsx)(x.Z,{children:(0,r.jsxs)(s.ZP,{container:!0,direction:"row",style:{padding:20},spacing:1,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,container:!0,direction:"row",children:[" ",(0,r.jsxs)(s.ZP,{item:!0,xs:4,children:[" ","Nama"]}),(0,r.jsxs)(s.ZP,{item:!0,xs:5,children:[" ",(0,r.jsx)(f.Z,{labelId:"demo-simple-select-label-2",id:"demo-simple-select-2",displayEmpty:!0,fullWidth:!0,size:"small",value:"".concat(E),onChange:function(n){return T(n.target.value)},children:t&&t.map((function(n){return(0,r.jsx)(p.Z,{value:n.nama,children:n.nama},n.nama)}))})]})]})," ",(0,r.jsxs)(s.ZP,{item:!0,xs:12,container:!0,direction:"row",children:[" ",(0,r.jsxs)(s.ZP,{item:!0,xs:4,children:[" ","Tempat Kerja"]}),(0,r.jsxs)(s.ZP,{item:!0,xs:5,children:[" ",(0,r.jsx)(f.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",displayEmpty:!0,fullWidth:!0,size:"small",value:"".concat(J),onChange:function(n){return $(n.target.value)},children:e&&e.map((function(n){return(0,r.jsx)(p.Z,{value:n.NamaLokasiKerja,children:n.NamaLokasiKerja},n.NamaLokasiKerja)}))})]})]})," ",(0,r.jsxs)(s.ZP,{item:!0,xs:12,container:!0,direction:"row",children:[" ",(0,r.jsxs)(s.ZP,{item:!0,xs:4,children:[" ","Tanggal Masuk"]}),(0,r.jsxs)(s.ZP,{item:!0,xs:5,children:[" ",(0,r.jsx)(M._,{dateAdapter:N.Z,children:(0,r.jsx)(F.$,{inputFormat:"MM/dd/yyyy",maxDate:Date.now(),fullWidth:!0,value:R,onChange:function(n){z((0,C.Z)(n,"yyyy-MM-dd"))},renderInput:function(n){return(0,r.jsx)(m.Z,I({},n))}})})]})]})," ",(0,r.jsxs)(s.ZP,{item:!0,xs:12,container:!0,direction:"row",children:[" ",(0,r.jsxs)(s.ZP,{item:!0,xs:4,children:[" ","Tanggal Keluar"]}),(0,r.jsxs)(s.ZP,{item:!0,xs:5,children:[" ",(0,r.jsx)(M._,{dateAdapter:N.Z,children:(0,r.jsx)(F.$,{inputFormat:"MM/dd/yyyy",fullWidth:!0,maxDate:Date.now(),value:X,onChange:function(n){U((0,C.Z)(n,"yyyy-MM-dd"))},renderInput:function(n){return(0,r.jsx)(m.Z,I({},n))}})})]})]})," ",(0,r.jsxs)(s.ZP,{item:!0,xs:12,container:!0,direction:"row",justifyContent:"flex-end",alignItems:"flex-end",spacing:2,children:[(0,r.jsx)(s.ZP,{item:!0,children:(0,r.jsx)(j.Z,{variant:"contained",color:"warning",onClick:function(){T(null),U(null),z(null),$(null);var n=JSON.stringify({nama:"",tanggal_masuk:"",tanggal_keluar:"",tempat_kerja:""});fetch("".concat(window.location.origin,"/api/pekerja/list"),{method:"POST",body:n}).then((function(n){return n.json()})).then((function(n){200==n.status?_(n.data):alert("!! ERROR "+n.data)})).catch((function(n){console.log(n)}))},children:"Reset"})}),(0,r.jsx)(s.ZP,{item:!0,children:(0,r.jsx)(j.Z,{variant:"contained",onClick:function(){var n={nama:E,tanggal_masuk:R,tanggal_keluar:X,tempat_kerja:J},e=JSON.stringify(n);fetch("".concat(window.location.origin,"/api/pekerja/list"),{method:"POST",body:e}).then((function(n){return n.json()})).then((function(n){200==n.status?_(n.data):alert("!! ERROR "+n.data)})).catch((function(n){console.log(n)}))},children:"Filter"})})]})]})})]})})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,children:(0,r.jsxs)(c.Z,{children:[" ",(0,r.jsxs)(g.Z,{component:Z.Z,children:[(0,r.jsxs)(b.Z,{sx:{minWidth:650},size:"small","aria-label":"simple table",className:q.table,children:[(0,r.jsx)(y.Z,{style:{backgroundColor:"#0486cfa1"},children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{children:"#"}),(0,r.jsx)(o.Z,{align:"left",children:"Nama"}),(0,r.jsx)(o.Z,{align:"left",children:"Tempat Kerja"}),(0,r.jsx)(o.Z,{align:"left",children:"Jam Masuk"}),(0,r.jsx)(o.Z,{align:"left",children:"Jam Keluar"}),(0,r.jsx)(o.Z,{align:"left",children:"Foto Masuk"}),(0,r.jsx)(o.Z,{align:"left",children:"Foto Keluar"}),(0,r.jsx)(o.Z,{align:"left",children:"Keterangan"})]})}),(0,r.jsx)(w.Z,{children:P&&P.map((function(n,e){return(0,r.jsxs)(L,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,r.jsx)(K,{align:"left",children:e+1}),(0,r.jsx)(K,{component:"th",scope:"row",children:n.nama}),(0,r.jsx)(K,{align:"left",children:n.lokasi}),(0,r.jsx)(K,{align:"left",children:n.jam_masuk}),(0,r.jsx)(K,{align:"left",children:n.jam_keluar}),(0,r.jsx)(K,{align:"left",children:""==n.url_foto_masuk?"":"http://localhost:64045/".concat(n.url_foto_masuk)}),(0,r.jsx)(K,{align:"left",children:""==n.url_foto_keluar?"":"http://localhost:64045/".concat(n.url_foto_keluar)}),(0,r.jsx)(K,{align:"left",children:n.keterangan})]},e)}))})]}),(0,r.jsx)(k.Z,{className:q.footer,children:(0,r.jsx)(v.Z,{rowsPerPageOptions:[10,25,50],colSpan:3,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0}})})]})]})})]})})})}R.Layout=P.Z}},function(n){n.O(0,[680,613,614,878,365,730,674,701,795,774,888,179],(function(){return e=954,n(n.s=e);var e}));var e=n.O();_N_E=e}]);