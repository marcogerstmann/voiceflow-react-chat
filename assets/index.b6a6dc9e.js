import{M as t}from"./index.db776702.js";import{B as p}from"./index.59315d89.js";import{t as c,C as u}from"./tag.f72bf942.js";import{s as i}from"./animation.e88f737c.js";import{a as m,j as e}from"./jsx-runtime.3055f20f.js";const n=c(u.TOOLTIP),r=i(n(p.Reset,"button"),{height:"$md",border:"1px solid $medGrey",borderTopColor:"rgba(223,223,223,0.5)",borderRadius:"$1",borderTopLeftRadius:0,borderTopRightRadius:0,typo:{weight:"$2"},color:"$primary",backgroundColor:"#fbfbfb"}),a=i(n("div"),{display:"inline-flex",flexDirection:"column",variants:{withAction:{true:{boxShadow:"0 1px 2px $shadow2",[`& ${t.Debug.Container}`]:{boxShadow:"none",borderBottom:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}}}}),f=({label:o,onClick:s,children:l,...d})=>m(a,{withAction:!!o,children:[e(t.Debug,{...d,children:l}),o&&e(r,{onClick:s,children:o})]}),y=Object.assign(f,{Button:r,Container:a});try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"Renders a {@link Message.Debug } with an optional action.",displayName:"Tooltip",props:{label:{defaultValue:null,description:"If provided, this will render an action button within the tooltip.",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"A callback handler for the action button.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},orientation:{defaultValue:{value:"'left'"},description:"The end of the message where the arrow is rendered.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/index.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/index.tsx#Tooltip"})}catch{}export{y as T};
//# sourceMappingURL=index.b6a6dc9e.js.map
