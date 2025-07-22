import{b as he,d as Ce,g as xe,i as Te,j as ze}from"./chunk-X5WX7QWY.js";import{a as ve}from"./chunk-JBR4PRVN.js";import{$ as be,aa as E,ga as ye,y as fe}from"./chunk-XDDGYLIL.js";import{k as V,l as j,m as U,n as J,o as H,u as y}from"./chunk-VDAMAAAC.js";import{$a as u,Ab as F,Bb as ge,Cb as b,Db as de,Eb as z,Fb as D,Gb as S,Ib as _e,Ka as re,L as X,M as Y,N as Z,Oa as g,Pb as W,Qa as oe,Ra as o,S as q,Ua as ae,Va as M,W as f,Wa as w,X as ee,Xa as le,Za as pe,_a as ue,ab as s,bb as c,ca as te,cb as Q,da as d,db as N,ea as _,eb as C,fb as I,ga as A,jb as x,ka as R,kb as l,nb as T,oa as ne,ob as se,pb as v,qb as h,ub as O,vb as me,wa as ie,xb as ce,yb as k,za as a,zb as P}from"./chunk-K5RBF46N.js";var we=t=>({disabled:t});function Fe(t,r){if(t&1){let e=I();u(0,"div",0)(1,"button",2),x("click",function(){d(e);let n=l();return _(n.increment())}),c(2,"span",3),s(),u(3,"input",4),F("ngModelChange",function(n){d(e);let p=l();return P(p.value,n)||(p.value=n),_(n)}),x("keypress",function(n){d(e);let p=l();return _(p.validateOnlyNumbers(n))})("blur",function(){d(e);let n=l();return _(n.validateOnBlur())}),s(),u(4,"button",5),x("click",function(){d(e);let n=l();return _(n.decrement())}),c(5,"span",6),s()()}if(t&2){let e=l();a(3),k("ngModel",e.value),a(),o("disabled",e.value===0)("ngClass",z(3,we,e.value===0))}}function Se(t,r){if(t&1){let e=I();u(0,"div",1)(1,"button",7),x("click",function(){d(e);let n=l();return _(n.decrement())}),c(2,"span",6),s(),u(3,"input",8),F("ngModelChange",function(n){d(e);let p=l();return P(p.value,n)||(p.value=n),_(n)}),x("keypress",function(n){d(e);let p=l();return _(p.validateOnlyNumbers(n))})("blur",function(){d(e);let n=l();return _(n.validateOnBlur())}),s(),u(4,"button",9),x("click",function(){d(e);let n=l();return _(n.increment())}),c(5,"span",3),s()()}if(t&2){let e=l();a(),o("disabled",e.value===0)("ngClass",z(3,we,e.value===0)),a(2),k("ngModel",e.value)}}var G=class t{_value=null;get value(){return this._value}valueChange=new R;set value(r){this._value=r,this.valueChange.emit(r)}inputOrientation="vertical";onValueChange=new R;increment(){if(this.value===null){this.value=0;return}this.value+=1,this.onValueChange.emit(this.value)}decrement(){if(this.value===null||this.value<0){this.value=0;return}this.value-=1,this.onValueChange.emit(this.value)}validateOnBlur(){setTimeout(()=>{if(!this.value||this.value===null||this.value<0){this.value=0,this.onValueChange.emit(this.value);return}},100),this.value&&this.onValueChange.emit(this.value)}validateOnlyNumbers(r){let e=r.key.charCodeAt(0);e>=48&&e<=57||r.preventDefault()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["quantity-input"]],inputs:{value:"value",inputOrientation:"inputOrientation"},outputs:{valueChange:"valueChange",onValueChange:"onValueChange"},standalone:!0,features:[b],decls:2,vars:1,consts:[[1,"inline-flex","flex-col","rounded-lg","border","bg-white","shadow-sm"],[1,"inline-flex","flex-row","rounded-lg","border","bg-white","shadow-sm"],[1,"rounded-none","rounded-t-lg","border","hover:bg-gray-200","h-8","border-zinc-200",3,"click"],[1,"pi","pi-plus"],["type","number",1,"h-8","w-9","border","text-center","appearance-none","border-zinc-200",3,"ngModelChange","keypress","blur","ngModel"],[1,"rounded-none","rounded-b-lg","border","hover:bg-gray-200","h-8","border-zinc-200",3,"click","disabled","ngClass"],[1,"pi","pi-minus"],[1,"rounded-none","rounded-l-lg","border","hover:bg-gray-200","h-[30px]","w-8","border-zinc-200",3,"click","disabled","ngClass"],["type","number",1,"h-[30px]","w-12","border-y","text-center","appearance-none","border-zinc-200",3,"ngModelChange","keypress","blur","ngModel"],[1,"rounded-none","rounded-r-lg","border","hover:bg-gray-200","h-[30px]","w-8","border-zinc-200",3,"click"]],template:function(e,i){e&1&&g(0,Fe,6,5,"div",0)(1,Se,6,5,"div",1),e&2&&w(i.inputOrientation==="vertical"?0:1)},dependencies:[y,V,ze,he,Te,Ce,xe],styles:[".appearance-none[_ngcontent-%COMP%]::-webkit-inner-spin-button, .appearance-none[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.disabled[_ngcontent-%COMP%]{background-color:#e4e4e7}"]})};var Ve=({dt:t})=>`
.p-metergroup {
    display: flex;
    gap: ${t("metergroup.gap")};
}

.p-metergroup-meters {
    display: flex;
    background: ${t("metergroup.meters.background")};
    border-radius: ${t("metergroup.border.radius")};
}

.p-metergroup-label-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: ${t("metergroup.label.gap")};
}

.p-metergroup-label-marker {
    display: inline-flex;
    width: ${t("metergroup.label.marker.size")};
    height: ${t("metergroup.label.marker.size")};
    border-radius: 100%;
}

.p-metergroup-label-icon {
    font-size: ${t("metergroup.label.icon.size")};
    width: ${t("metergroup.label.icon.size")};
    height: ${t("metergroup.label.icon.size")};
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-label-list-horizontal {
    gap: ${t("metergroup.label.list.horizontal.gap")};
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: ${t("metergroup.meters.size")};
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-start-start-radius: ${t("metergroup.border.radius")};
    border-end-start-radius: ${t("metergroup.border.radius")};
}

.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-start-end-radius: ${t("metergroup.border.radius")};
    border-end-end-radius: ${t("metergroup.border.radius")};
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-label-list-vertical {
    flex-direction: column;
    gap: ${t("metergroup.label.list.vertical.gap")};
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: ${t("metergroup.meters.size")};
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-label-list {
    align-items: start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-start-start-radius: ${t("metergroup.border.radius")};
    border-start-end-radius: ${t("metergroup.border.radius")};
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-end-start-radius: ${t("metergroup.border.radius")};
    border-end-end-radius: ${t("metergroup.border.radius")};
}
`,Ee={root:({props:t})=>["p-metergroup p-component",{"p-metergroup-horizontal":t.orientation==="horizontal","p-metergroup-vertical":t.orientation==="vertical"}],meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:({props:t})=>["p-metergroup-label-list",{"p-metergroup-label-list-vertical":t.labelOrientation==="vertical","p-metergroup-label-list-horizontal":t.labelOrientation==="horizontal"}],label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},Ie=(()=>{class t extends ye{name="metergroup";theme=Ve;classes=Ee;static \u0275fac=(()=>{let e;return function(n){return(e||(e=A(t)))(n||t)}})();static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})();var Qe=(t,r)=>({$implicit:t,icon:r}),Ne=()=>({"p-metergroup-label-icon":!0}),De=t=>({color:t}),Ge=t=>({backgroundColor:t});function $e(t,r){if(t&1&&c(0,"i",8),t&2){let e=l(2).$implicit;M(e.icon),o("ngClass",de(4,Ne))("ngStyle",z(5,De,e.color))}}function Be(t,r){if(t&1&&c(0,"span",9),t&2){let e=l(2).$implicit;o("ngStyle",z(1,Ge,e.color))}}function Le(t,r){if(t&1&&(Q(0),g(1,$e,1,7,"i",6)(2,Be,1,3,"span",7),N()),t&2){let e=l().$implicit;a(),o("ngIf",e.icon),a(),o("ngIf",!e.icon)}}function qe(t,r){t&1&&C(0)}function Ae(t,r){if(t&1&&(u(0,"li",2),g(1,Le,3,2,"ng-container",3)(2,qe,1,0,"ng-container",4),u(3,"span",5),O(4),s()()),t&2){let e=r.$implicit,i=l();a(),o("ngIf",!i.iconTemplate),a(),o("ngTemplateOutlet",i.iconTemplate)("ngTemplateOutletContext",D(5,Qe,e,e.icon)),a(2),ce("",e.label," (",i.parentInstance.percentValue(e.value),")")}}var Re=["label"],We=["meter"],je=["end"],Ue=["start"],Je=["icon"],He=["container"],$=(t,r,e)=>({$implicit:t,totalPercent:r,percentages:e}),Ke=(t,r,e,i,n)=>({$implicit:t,index:r,orientation:e,class:"p-metergroup-meter",size:i,totalPercent:n});function Xe(t,r){if(t&1&&c(0,"p-meterGroupLabel",6),t&2){let e=l(2);o("value",e.value)("labelPosition",e.labelPosition)("labelOrientation",e.labelOrientation)("min",e.min)("max",e.max)("iconTemplate",e.iconTemplate||e._iconTemplate)}}function Ye(t,r){t&1&&C(0)}function Ze(t,r){if(t&1&&g(0,Xe,1,6,"p-meterGroupLabel",5)(1,Ye,1,0,"ng-container",2),t&2){let e=l();o("ngIf",!e.labelTemplate&&!e._labelTemplate),a(),o("ngTemplateOutlet",e.labelTemplate||e.labelTemplate)("ngTemplateOutletContext",S(3,$,e.value,e.totalPercent(),e.percentages()))}}function et(t,r){t&1&&C(0)}function tt(t,r){t&1&&C(0)}function nt(t,r){if(t&1&&(Q(0),c(1,"span",8),N()),t&2){let e=l().$implicit,i=l();a(),o("ngStyle",i.meterStyle(e))}}function it(t,r){if(t&1&&(Q(0),g(1,tt,1,0,"ng-container",2)(2,nt,2,1,"ng-container",7),N()),t&2){let e=r.$implicit,i=r.index,n=l();a(),o("ngTemplateOutlet",n.meterTemplate||n._meterTemplate)("ngTemplateOutletContext",_e(3,Ke,e,i,n.orientation,n.percentValue(e.value),n.totalPercent())),a(),o("ngIf",!n.meterTemplate&&!n._meterTemplate&&e.value>0)}}function rt(t,r){t&1&&C(0)}function ot(t,r){if(t&1&&c(0,"p-meterGroupLabel",6),t&2){let e=l(2);o("value",e.value)("labelPosition",e.labelPosition)("labelOrientation",e.labelOrientation)("min",e.min)("max",e.max)("iconTemplate",e.iconTemplate||e._iconTemplate)}}function at(t,r){t&1&&C(0)}function lt(t,r){if(t&1&&g(0,ot,1,6,"p-meterGroupLabel",5)(1,at,1,0,"ng-container",2),t&2){let e=l();o("ngIf",!e.labelTemplate&&!e._labelTemplate),a(),o("ngTemplateOutlet",e.labelTemplate||e._labelTemplate)("ngTemplateOutletContext",S(3,$,e.value,e.totalPercent(),e.percentages()))}}var pt=(()=>{class t{value=null;labelPosition="end";labelOrientation="horizontal";min;max;iconTemplate;get labelClass(){return{"p-metergroup-label-list p-component":!0,"p-metergroup-label-list-vertical":this.labelOrientation==="vertical","p-metergroup-label-list-horizontal":this.labelOrientation==="horizontal"}}parentInstance=q(X(()=>B));static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["p-meterGroupLabel"],["p-metergrouplabel"]],inputs:{value:"value",labelPosition:"labelPosition",labelOrientation:"labelOrientation",min:"min",max:"max",iconTemplate:"iconTemplate"},standalone:!0,features:[b],decls:2,vars:3,consts:[[3,"ngClass"],["class","p-metergroup-label",4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-metergroup-label"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-metergroup-label-text"],[3,"class","ngClass","ngStyle",4,"ngIf"],["class","p-metergroup-label-marker",3,"ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[1,"p-metergroup-label-marker",3,"ngStyle"]],template:function(i,n){i&1&&(u(0,"ol",0),g(1,Ae,5,8,"li",1),s()),i&2&&(o("ngClass",n.labelClass),a(),o("ngForOf",n.value)("ngForTrackBy",n.parentInstance.trackByFn))},dependencies:[y,V,j,U,H,J,E],encapsulation:2})}return t})(),B=(()=>{class t extends ve{value;min=0;max=100;orientation="horizontal";labelPosition="end";labelOrientation="horizontal";style;styleClass;get vertical(){return this.orientation==="vertical"}get containerClass(){return{"p-metergroup p-component":!0,"p-metergroup-horizontal":this.orientation==="horizontal","p-metergroup-vertical":this.orientation==="vertical"}}labelTemplate;meterTemplate;endTemplate;startTemplate;iconTemplate;templates;_labelTemplate;_meterTemplate;_endTemplate;_startTemplate;_iconTemplate;_componentStyle=q(Ie);container;ngAfterViewInit(){super.ngAfterViewInit();let e=this.container.nativeElement,i=fe(e);this.vertical&&(e.style.height=i+"px")}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"label":this._labelTemplate=e.template;break;case"meter":this._meterTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break}})}percent(e=0){let i=(e-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,i)))}percentValue(e){return this.percent(e)+"%"}meterStyle(e){return{backgroundColor:e.color,width:this.orientation==="horizontal"&&this.percentValue(e.value),height:this.orientation==="vertical"&&this.percentValue(e.value)}}totalPercent(){return this.percent(this.value.reduce((e,i)=>e+i.value,0))}percentages(){let e=0,i=[];return this.value.forEach(n=>{e+=n.value,i.push(e)}),i}trackByFn(e){return e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=A(t)))(n||t)}})();static \u0275cmp=f({type:t,selectors:[["p-meterGroup"],["p-metergroup"],["p-meter-group"]],contentQueries:function(i,n,p){if(i&1&&(T(p,Re,4),T(p,We,4),T(p,je,4),T(p,Ue,4),T(p,Je,4),T(p,be,4)),i&2){let m;v(m=h())&&(n.labelTemplate=m.first),v(m=h())&&(n.meterTemplate=m.first),v(m=h())&&(n.endTemplate=m.first),v(m=h())&&(n.startTemplate=m.first),v(m=h())&&(n.iconTemplate=m.first),v(m=h())&&(n.templates=m)}},viewQuery:function(i,n){if(i&1&&se(He,5,ne),i&2){let p;v(p=h())&&(n.container=p.first)}},inputs:{value:"value",min:"min",max:"max",orientation:"orientation",labelPosition:"labelPosition",labelOrientation:"labelOrientation",style:"style",styleClass:"styleClass"},standalone:!0,features:[ge([Ie]),re,b],decls:8,vars:24,consts:[["container",""],[3,"ngClass","ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-metergroup-meters"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate",4,"ngIf"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate"],[4,"ngIf"],[1,"p-metergroup-meter",3,"ngStyle"]],template:function(i,n){i&1&&(u(0,"div",1,0),g(2,Ze,2,7)(3,et,1,0,"ng-container",2),u(4,"div",3),g(5,it,3,9,"ng-container",4),s(),g(6,rt,1,0,"ng-container",2)(7,lt,2,7),s()),i&2&&(M(n.styleClass),o("ngClass",n.containerClass)("ngStyle",n.style),oe("role","meter")("aria-valuemin",n.min)("aria-valuemax",n.max)("aria-valuenow",n.totalPercent()),a(2),w(n.labelPosition==="start"?2:-1),a(),o("ngTemplateOutlet",n.startTemplate||n._startTemplate)("ngTemplateOutletContext",S(16,$,n.value,n.totalPercent(),n.percentages())),a(2),o("ngForOf",n.value)("ngForTrackBy",n.trackByFn),a(),o("ngTemplateOutlet",n.endTemplate||n._endTemplate)("ngTemplateOutletContext",S(20,$,n.value,n.totalPercent(),n.percentages())),a(),w(n.labelPosition==="end"?7:-1))},dependencies:[y,V,j,U,H,J,pt,E],encapsulation:2,changeDetection:0})}return t})(),Oe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ee({type:t});static \u0275inj=Z({imports:[B,E,E]})}return t})();var st=(t,r)=>({background:t,width:r});function mt(t,r){}function ct(t,r){if(t&1&&c(0,"span"),t&2){let e=r.$implicit,i=r.class,n=r.size;ae(D(4,st,"linear-gradient(to right, "+e.color1+", "+e.color2+")",n)),M(i)}}var L=class t{prize={no:"",itemNo:"",itemName:"",imageUrl:"",ticketsTotal:0,ticketsProgress:0,purchaseTickets:0,ticketPrice:0};progress=[];ngOnChanges(r){r.prize&&this.prizeProgressMeter()}prizeProgressMeter(){let r=this.calculatePorcentage(this.prize.ticketsTotal,this.prize.ticketsProgress);if(r>50){this.progress=[{value:50,color1:"#388E3C",color2:"#ADC34A"},{value:r-50,color1:"#FBC02D",color2:"#D32F2F"}];return}this.progress=[{value:r,color1:"#388E3C",color2:"#ADC34A"}]}calculatePorcentage(r,e){return e*100/r}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["prize-item"]],inputs:{prize:"prize"},standalone:!0,features:[te,b],decls:15,vars:6,consts:[["label",""],["meter",""],[1,"w-[290px]","text-center","p-4","pt-2","rounded-xl","border","border-slate-300","shadow-xl"],[1,"h-[60px]","flex","items-center","justify-center","w-full"],[1,"font-bold","text-xl/6"],[1,"mx-auto",3,"src","alt"],[1,"py-4","flex","gap-2"],[3,"valueChange","value","inputOrientation"],[1,"rounded-xl","w-full","font-semibold","shadow-lg","bg-red-500","text-white","px-4","py-1","transition","duration-300","ease-in-out","hover:bg-red-600","hover:scale-105"],["labelPosition","start",3,"value"]],template:function(e,i){if(e&1){let n=I();u(0,"div",2)(1,"div",3)(2,"p",4),O(3),s()(),c(4,"img",5),u(5,"div",6)(6,"quantity-input",7),F("valueChange",function(m){return d(n),P(i.prize.purchaseTickets,m)||(i.prize.purchaseTickets=m),_(m)}),s(),u(7,"button",8),O(8,"Participar"),s()(),u(9,"div")(10,"p-metergroup",9),g(11,mt,0,0,"ng-template",null,0,W)(13,ct,1,7,"ng-template",null,1,W),s()()()}e&2&&(a(3),me(i.prize.itemName),a(),o("src",i.prize.imageUrl,ie)("alt",i.prize.itemName),a(2),k("value",i.prize.purchaseTickets),o("inputOrientation","horizontal"),a(4),o("value",i.progress))},dependencies:[y,G,Oe,B]})};function gt(t,r){if(t&1&&c(0,"prize-item",1),t&2){let e=r.$implicit;o("prize",e)}}var ke=class t{prizes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["prizes-container"]],inputs:{prizes:"prizes"},standalone:!0,features:[b],decls:3,vars:0,consts:[[1,"max-w-5xl","flex","flex-wrap","gap-8","justify-center","items-center"],[3,"prize"]],template:function(e,i){e&1&&(u(0,"div",0),pe(1,gt,1,1,"prize-item",1,le),s()),e&2&&(a(),ue(i.prizes))},dependencies:[y,L]})};export{ke as a};
