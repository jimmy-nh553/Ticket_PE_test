import{a as ce}from"./chunk-45ZPYATT.js";import{a as te,c as ae}from"./chunk-X5WX7QWY.js";import{a as ne}from"./chunk-HEYRUS75.js";import{a as ie}from"./chunk-JBR4PRVN.js";import{$ as ee,M as W,N as Y,aa as w,ga as oe}from"./chunk-XDDGYLIL.js";import{k as U,m as K,o as X,u as Z}from"./chunk-VDAMAAAC.js";import{$a as x,Bb as H,Cb as M,Db as G,Eb as J,Ia as N,Ka as _,L as B,La as Q,M as z,N as D,Oa as p,Qa as s,Ra as t,S as E,Ua as T,Va as k,W as m,X as O,ab as f,bb as d,bc as h,ca as L,cb as V,cc as P,da as g,db as F,ea as C,fa as q,fb as j,ga as b,jb as A,ka as y,kb as v,nb as S,ob as R,pb as I,qb as $,za as l}from"./chunk-K5RBF46N.js";var re=(()=>{class e extends ne{static \u0275fac=(()=>{let o;return function(i){return(o||(o=b(e)))(i||e)}})();static \u0275cmp=m({type:e,selectors:[["MinusIcon"]],standalone:!0,features:[_,M],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(q(),x(0,"svg",0),d(1,"path",1),f()),n&2&&(k(i.getClassNames()),s("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var de=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,ue={root:({instance:e,props:a})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":a.disabled,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},le=(()=>{class e extends oe{name="checkbox";theme=de;classes=ue;static \u0275fac=(()=>{let o;return function(i){return(o||(o=b(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var be=["checkboxicon"],pe=["input"],ke=()=>({"p-checkbox-input":!0}),xe=e=>({checked:e,class:"p-checkbox-icon"});function fe(e,a){if(e&1&&d(0,"span",8),e&2){let o=v(3);t("ngClass",o.checkboxIcon),s("data-pc-section","icon")}}function me(e,a){e&1&&d(0,"CheckIcon",9),e&2&&(t("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function ge(e,a){if(e&1&&(V(0),p(1,fe,1,2,"span",7)(2,me,1,2,"CheckIcon",6),F()),e&2){let o=v(2);l(),t("ngIf",o.checkboxIcon),l(),t("ngIf",!o.checkboxIcon)}}function Ce(e,a){e&1&&d(0,"MinusIcon",9),e&2&&(t("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function ye(e,a){if(e&1&&(V(0),p(1,ge,3,2,"ng-container",4)(2,Ce,1,2,"MinusIcon",6),F()),e&2){let o=v();l(),t("ngIf",o.checked),l(),t("ngIf",o._indeterminate())}}function _e(e,a){}function ve(e,a){e&1&&p(0,_e,0,0,"ng-template")}var Ie={provide:te,useExisting:B(()=>se),multi:!0},se=(()=>{class e extends ie{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new y;onFocus=new y;onBlur=new y;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Y(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=N(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=E(le);ngAfterContentInit(){this.templates.forEach(o=>{switch(o.getType()){case"icon":this._checkboxIconTemplate=o.template;break;case"checkboxicon":this._checkboxIconTemplate=o.template;break}})}ngOnChanges(o){super.ngOnChanges(o),o.indeterminate&&this._indeterminate.set(o.indeterminate.currentValue)}updateModel(o){let n,i=this.injector.get(ae,null,{optional:!0,self:!0}),c=i&&!this.formControl?i.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=c.filter(r=>!W(r,this.value)):n=c?[...c,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:o})}handleChange(o){this.readonly||this.updateModel(o)}onInputFocus(o){this.focused=!0,this.onFocus.emit(o)}onInputBlur(o){this.focused=!1,this.onBlur.emit(o),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(o){this.model=o,this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){setTimeout(()=>{this.disabled=o,this.cd.markForCheck()})}static \u0275fac=(()=>{let o;return function(i){return(o||(o=b(e)))(i||e)}})();static \u0275cmp=m({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,c){if(n&1&&(S(c,be,4),S(c,ee,4)),n&2){let r;I(r=$())&&(i.checkboxIconTemplate=r.first),I(r=$())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&R(pe,5),n&2){let c;I(c=$())&&(i.inputViewChild=c.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",h],binary:[2,"binary","binary",h],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",P],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",h],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",h],required:[2,"required","required",h],autofocus:[2,"autofocus","autofocus",h],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[H([Ie,le]),Q,_,L,M],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,i){if(n&1){let c=j();x(0,"div",1)(1,"input",2,0),A("focus",function(u){return g(c),C(i.onInputFocus(u))})("blur",function(u){return g(c),C(i.onInputBlur(u))})("change",function(u){return g(c),C(i.handleChange(u))}),f(),x(3,"div",3),p(4,ye,3,2,"ng-container",4)(5,ve,1,0,null,5),f()()}n&2&&(T(i.style),k(i.styleClass),t("ngClass",i.containerClass),s("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.disabled),l(),T(i.inputStyle),k(i.inputClass),t("value",i.value)("checked",i.checked)("disabled",i.disabled)("readonly",i.readonly)("ngClass",G(26,ke)),s("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),l(3),t("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),l(),t("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",J(27,xe,i.checked)))},dependencies:[Z,U,K,X,ce,re,w],encapsulation:2,changeDetection:0})}return e})(),Pe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=D({imports:[se,w,w]})}return e})();export{se as a,Pe as b};
