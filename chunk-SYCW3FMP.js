import{a as ae,d as re,g as se,j as ce}from"./chunk-X5WX7QWY.js";import{c as le}from"./chunk-X2Y62DJS.js";import{a as ne}from"./chunk-JBR4PRVN.js";import{$ as ie,aa as $,ga as oe}from"./chunk-XDDGYLIL.js";import{k as Z,n as ee,o as te,u as S}from"./chunk-VDAMAAAC.js";import{$a as a,Ab as H,Bb as K,Cb as _,Eb as X,Ka as O,L as E,La as P,M as I,N,Oa as u,Qa as w,Ra as c,S as D,Ua as A,Va as m,W as p,Wa as f,X as B,Xa as Q,Za as z,_a as U,ab as r,bb as V,bc as v,cc as Y,da as d,ea as h,eb as j,fb as b,ga as M,jb as F,ka as L,kb as R,nb as x,ob as q,pb as y,qb as C,ub as k,vb as G,yb as W,za as l,zb as J}from"./chunk-K5RBF46N.js";import"./chunk-4CLCTAJ7.js";var we=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,me={root:{position:"relative"}},fe={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},ge=(()=>{class e extends oe{name="toggleswitch";theme=we;classes=fe;inlineStyles=me;static \u0275fac=(()=>{let t;return function(i){return(t||(t=M(e)))(i||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var be=["handle"],ye=["input"],Ce=e=>({checked:e});function ke(e,s){e&1&&j(0)}function _e(e,s){if(e&1&&u(0,ke,1,0,"ng-container",4),e&2){let t=R();c("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",X(2,Ce,t.checked()))}}var ve={provide:ae,useExisting:E(()=>T),multi:!0},T=(()=>{class e extends ne{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new L;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=D(ge);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(i){return(t||(t=M(e)))(i||e)}})();static \u0275cmp=p({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,i,n){if(o&1&&(x(n,be,4),x(n,ie,4)),o&2){let g;y(g=C())&&(i.handleTemplate=g.first),y(g=C())&&(i.templates=g)}},viewQuery:function(o,i){if(o&1&&q(ye,5),o&2){let n;y(n=C())&&(i.input=n.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",Y],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",v],readonly:[2,"readonly","readonly",v],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",v]},outputs:{onChange:"onChange"},standalone:!0,features:[K([ve,ge]),P,O,_],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){if(o&1){let n=b();a(0,"div",1),F("click",function(ue){return d(n),h(i.onClick(ue))}),a(1,"input",2,0),F("focus",function(){return d(n),h(i.onFocus())})("blur",function(){return d(n),h(i.onBlur())}),r(),a(3,"span",3)(4,"div",3),u(5,_e,1,4,"ng-container"),r()()()}o&2&&(A(i.sx("root")),m(i.styleClass),c("ngClass",i.cx("root"))("ngStyle",i.style),w("data-pc-name","toggleswitch")("data-pc-section","root"),l(),c("ngClass",i.cx("input"))("checked",i.checked())("disabled",i.disabled)("pAutoFocus",i.autofocus),w("id",i.inputId)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name)("tabindex",i.tabindex)("data-pc-section","hiddenInput"),l(2),c("ngClass",i.cx("slider")),w("data-pc-section","slider"),l(),c("ngClass",i.cx("handle")),l(),f(i.handleTemplate||i._handleTemplate?5:-1))},dependencies:[S,Z,te,ee,le,$],encapsulation:2,changeDetection:0})}return e})(),de=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=B({type:e});static \u0275inj=N({imports:[T,$,$]})}return e})();function $e(e,s){e&1&&V(0,"hr",9)}function Te(e,s){if(e&1){let t=b();a(0,"div",4)(1,"div",5),V(2,"i",6),a(3,"label",7),k(4),r()(),a(5,"p-toggleswitch",8),H("ngModelChange",function(i){let n=d(t).$implicit;return J(n.config,i)||(n.config=i),h(i)}),r()(),u(6,$e,1,0,"hr",9)}if(e&2){let t=s.$implicit,o=s.$index,i=s.$count;l(2),m(t.icon),l(),c("for",t.config),l(),G(t.label),l(),W("ngModel",t.config),l(),f(o!==i-1?6:-1)}}var he=class e{settings=[{label:"Notificaciones por email",config:!0,icon:"pi pi-envelope"},{label:"Notificaciones SMS",config:!0,icon:"pi pi-phone"},{label:"Notificaciones push",config:!1,icon:"pi pi-bell"},{label:"Ofertas y promociones",config:!0,icon:"pi pi-credit-card"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-user-settings-page"]],standalone:!0,features:[_],decls:8,vars:0,consts:[[1,"shadow-md","border","border-zinc-300","p-4","pb-6","rounded-lg"],[1,"text-lg","font-semibold"],[1,"text-sm","text-zinc-400"],[1,"mt-2"],[1,"flex","w-full","justify-between","items-center","py-3"],[1,"flex","items-center","gap-2"],[1,"text-zinc-500"],[1,"font-medium",3,"for"],[3,"ngModelChange","ngModel"],[1,""]],template:function(t,o){t&1&&(a(0,"div",0)(1,"h1",1),k(2,"Notificaciones"),r(),a(3,"p",2),k(4,"Configura c\xF3mo quieres recibir las notificaciones"),r(),a(5,"div",3),z(6,Te,7,6,null,null,Q),r()()),t&2&&(l(6),U(o.settings))},dependencies:[S,ce,re,se,de,T]})};export{he as UserSettingsPageComponent};
