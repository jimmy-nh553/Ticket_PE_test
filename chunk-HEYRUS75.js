import{c as zt}from"./chunk-X2Y62DJS.js";import{a as f}from"./chunk-JBR4PRVN.js";import{$ as Mt,B as bt,E as Tt,I as C,K as pt,S as gt,aa as D,b as O,d as P,ga as B,k as Bt,q as L,u as dt,x as Et,y as Ft}from"./chunk-XDDGYLIL.js";import{k as It,m as _t,n as wt,o as St,u as U,w as Dt}from"./chunk-VDAMAAAC.js";import{$a as w,Bb as h,Cb as $,Eb as ut,Ja as lt,Ka as b,La as H,M as k,N as R,Oa as z,Qa as p,Ra as l,S as m,Sa as mt,Ta as Y,Ua as yt,Va as _,W as y,X as q,Y as M,ab as S,bb as v,bc as c,ca as W,cb as tt,cc as xt,db as et,dc as G,eb as vt,fa as K,fc as kt,ga as u,jb as $t,ka as X,kb as g,la as ft,lb as ot,mb as nt,na as I,nb as Q,pb as Z,qb as J,rb as ct,sb as Ct,ub as it,vb as rt,za as d}from"./chunk-K5RBF46N.js";import{a as st}from"./chunk-4CLCTAJ7.js";var Jt=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Gt={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":pt(t.value)&&String(t.value).length===1,"p-badge-dot":C(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Ot=(()=>{class t extends B{name="badge";theme=Jt;classes=Gt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var ht=(()=>{class t extends f{styleClass=I();style=I();badgeSize=I();size=I();severity=I();value=I();badgeDisabled=I(!1,{transform:c});_componentStyle=m(Ot);containerClass=G(()=>{let e="p-badge p-component";return pt(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),C(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,i){n&2&&(yt(i.style()),_(i.containerClass()),mt("display",i.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[h([Ot]),b,$],decls:1,vars:1,template:function(n,i){n&1&&it(0),n&2&&rt(i.value())},dependencies:[U,D],encapsulation:2,changeDetection:0})}return t})(),Lt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=q({type:t});static \u0275inj=R({imports:[ht,D,D]})}return t})();var jt=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Wt=(()=>{class t extends B{name="baseicon";inlineStyles=jt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Kt=["*"],at=(()=>{class t extends f{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=C(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",c],styleClass:"styleClass"},standalone:!0,features:[h([Wt]),H,b,$],ngContentSelectors:Kt,decls:1,vars:0,template:function(n,i){n&1&&(ot(),nt(0))},encapsulation:2,changeDetection:0})}return t})();var Nt=(()=>{class t extends at{pathId;ngOnInit(){this.pathId="url(#"+gt()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[b,$],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(K(),w(0,"svg",0)(1,"g"),v(2,"path",1),S(),w(3,"defs")(4,"clipPath",2),v(5,"rect",3),S()()()),n&2&&(_(i.getClassNames()),p("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),d(),p("clip-path",i.pathId),d(3),l("id",i.pathId))},encapsulation:2})}return t})();var je=(()=>{class t extends at{static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["TimesIcon"]],standalone:!0,features:[b,$],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(K(),w(0,"svg",0),v(1,"path",1),S()),n&2&&(_(i.getClassNames()),p("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var Xt=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Yt={root:"p-ink"},At=(()=>{class t extends B{name="ripple";theme=Xt;classes=Yt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Vt=(()=>{class t extends f{zone=m(ft);_componentStyle=m(At);animationListener;mouseDownListener;timeout;constructor(){super(),kt(()=>{Dt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(P(n,"p-ink-active"),!dt(n)&&!bt(n)){let s=Math.max(Bt(this.el.nativeElement),Ft(this.el.nativeElement));n.style.height=s+"px",n.style.width=s+"px"}let i=Et(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-bt(n)/2,a=e.pageY-i.top+this.document.body.scrollLeft-dt(n)/2;this.renderer.setStyle(n,"top",a+"px"),this.renderer.setStyle(n,"left",r+"px"),O(n,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&P(s,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&P(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),P(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Tt(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=M({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[h([At]),b]})}return t})();var te=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,ee={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},F=(()=>{class t extends B{name="button";theme=te;classes=ee;static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var oe=["content"],ne=["loading"],ie=["icon"],re=["*"],Ht=t=>({class:t});function ae(t,o){t&1&&vt(0)}function se(t,o){if(t&1&&v(0,"span",8),t&2){let e=g(3);l("ngClass",e.iconClass()),p("aria-hidden",!0)("data-pc-section","loadingicon")}}function le(t,o){if(t&1&&v(0,"SpinnerIcon",9),t&2){let e=g(3);l("styleClass",e.spinnerIconClass())("spin",!0),p("aria-hidden",!0)("data-pc-section","loadingicon")}}function ce(t,o){if(t&1&&(tt(0),z(1,se,1,3,"span",6)(2,le,1,4,"SpinnerIcon",7),et()),t&2){let e=g(2);d(),l("ngIf",e.loadingIcon),d(),l("ngIf",!e.loadingIcon)}}function ue(t,o){}function de(t,o){if(t&1&&z(0,ue,0,0,"ng-template",10),t&2){let e=g(2);l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function be(t,o){if(t&1&&(tt(0),z(1,ce,3,2,"ng-container",2)(2,de,1,1,null,5),et()),t&2){let e=g();d(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),d(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",ut(3,Ht,e.iconClass()))}}function pe(t,o){if(t&1&&v(0,"span",8),t&2){let e=g(2);_(e.icon),l("ngClass",e.iconClass()),p("data-pc-section","icon")}}function ge(t,o){}function he(t,o){if(t&1&&z(0,ge,0,0,"ng-template",10),t&2){let e=g(2);l("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function fe(t,o){if(t&1&&(tt(0),z(1,pe,1,4,"span",11)(2,he,1,1,null,5),et()),t&2){let e=g();d(),l("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),d(),l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",ut(3,Ht,e.iconClass()))}}function me(t,o){if(t&1&&(w(0,"span",12),it(1),S()),t&2){let e=g();p("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),d(),rt(e.label)}}function ye(t,o){if(t&1&&v(0,"p-badge",13),t&2){let e=g();l("value",e.badge)("severity",e.badgeSeverity)}}var E={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Rt=(()=>{class t extends f{_componentStyle=m(F);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=M({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&Y("p-button-label",!0)},standalone:!0,features:[h([F]),b]})}return t})(),qt=(()=>{class t extends f{_componentStyle=m(F);static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=M({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&Y("p-button-icon",!0)},standalone:!0,features:[h([F]),b]})}return t})(),Do=(()=>{class t extends f{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=lt(qt);labelSignal=lt(Rt);isIconOnly=G(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(E);isTextButton=G(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=m(F);ngAfterViewInit(){super.ngAfterViewInit(),O(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}getStyleClass(){let e=[E.button,E.component];return this.icon&&!this.label&&C(this.htmlElement.textContent)&&e.push(E.iconOnly),this.loading&&(e.push(E.disabled,E.loading),!this.icon&&this.label&&e.push(E.labelOnly),this.icon&&!this.label&&!C(this.htmlElement.textContent)&&e.push(E.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return C(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}createLabel(){if(!L(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!L(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let i=this.label?"p-button-icon-"+this.iconPos:null;i&&O(n,i);let r=this.getIconClass();r&&O(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=L(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=L(this.htmlElement,".p-button-icon"),n=L(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275dir=M({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&(ct(r,i.iconSignal,qt,5),ct(r,i.labelSignal,Rt,5)),n&2&&Ct(2)},hostVars:4,hostBindings:function(n,i){n&2&&Y("p-button-icon-only",i.isIconOnly())("p-button-text",i.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",c],rounded:[2,"rounded","rounded",c],text:[2,"text","text",c],outlined:[2,"outlined","outlined",c],size:"size",plain:[2,"plain","plain",c],fluid:[2,"fluid","fluid",c],label:"label",icon:"icon",buttonProps:"buttonProps"},standalone:!0,features:[h([F]),H,b,W]})}return t})(),ve=(()=>{class t extends f{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new X;onFocus=new X;onBlur=new X;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return C(this.fluid)?!!n:this.fluid}_componentStyle=m(F);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=u(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(Q(r,oe,5),Q(r,ne,5),Q(r,ie,5),Q(r,Mt,4)),n&2){let a;Z(a=J())&&(i.contentTemplate=a.first),Z(a=J())&&(i.loadingIconTemplate=a.first),Z(a=J())&&(i.iconTemplate=a.first),Z(a=J())&&(i.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",c],loading:[2,"loading","loading",c],loadingIcon:"loadingIcon",raised:[2,"raised","raised",c],rounded:[2,"rounded","rounded",c],text:[2,"text","text",c],plain:[2,"plain","plain",c],severity:"severity",outlined:[2,"outlined","outlined",c],link:[2,"link","link",c],tabindex:[2,"tabindex","tabindex",xt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",c],fluid:[2,"fluid","fluid",c],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[h([F]),H,b,W,$],ngContentSelectors:re,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(ot(),w(0,"button",0),$t("click",function(a){return i.onClick.emit(a)})("focus",function(a){return i.onFocus.emit(a)})("blur",function(a){return i.onBlur.emit(a)}),nt(1),z(2,ae,1,0,"ng-container",1)(3,be,3,5,"ng-container",2)(4,fe,3,5,"ng-container",2)(5,me,2,3,"span",3)(6,ye,1,2,"p-badge",4),S()),n&2&&(l("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),p("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),d(2),l("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),d(),l("ngIf",i.loading),d(),l("ngIf",!i.loading),d(),l("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),d(),l("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[U,It,_t,St,wt,Vt,zt,Nt,Lt,ht,D],encapsulation:2,changeDetection:0})}return t})(),Bo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=q({type:t});static \u0275inj=R({imports:[U,ve,D,D]})}return t})();var Qt=class t{static isArray(o,e=!0){return Array.isArray(o)&&(e||o.length!==0)}static isObject(o,e=!0){return typeof o=="object"&&!Array.isArray(o)&&o!=null&&(e||Object.keys(o).length!==0)}static equals(o,e,n){return n?this.resolveFieldData(o,n)===this.resolveFieldData(e,n):this.equalsByValue(o,e)}static equalsByValue(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var n=Array.isArray(o),i=Array.isArray(e),r,a,s;if(n&&i){if(a=o.length,a!=e.length)return!1;for(r=a;r--!==0;)if(!this.equalsByValue(o[r],e[r]))return!1;return!0}if(n!=i)return!1;var x=this.isDate(o),N=this.isDate(e);if(x!=N)return!1;if(x&&N)return o.getTime()==e.getTime();var A=o instanceof RegExp,V=e instanceof RegExp;if(A!=V)return!1;if(A&&V)return o.toString()==e.toString();var T=Object.keys(o);if(a=T.length,a!==Object.keys(e).length)return!1;for(r=a;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,T[r]))return!1;for(r=a;r--!==0;)if(s=T[r],!this.equalsByValue(o[s],e[s]))return!1;return!0}return o!==o&&e!==e}static resolveFieldData(o,e){if(o&&e){if(this.isFunction(e))return e(o);if(e.indexOf(".")==-1)return o[e];{let n=e.split("."),i=o;for(let r=0,a=n.length;r<a;++r){if(i==null)return null;i=i[n[r]]}return i}}else return null}static isFunction(o){return!!(o&&o.constructor&&o.call&&o.apply)}static reorderArray(o,e,n){let i;o&&e!==n&&(n>=o.length&&(n%=o.length,e%=o.length),o.splice(n,0,o.splice(e,1)[0]))}static insertIntoOrderedArray(o,e,n,i){if(n.length>0){let r=!1;for(let a=0;a<n.length;a++)if(this.findIndexInList(n[a],i)>e){n.splice(a,0,o),r=!0;break}r||n.push(o)}else n.push(o)}static findIndexInList(o,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]==o){n=i;break}}return n}static contains(o,e){if(o!=null&&e&&e.length){for(let n of e)if(this.equals(o,n))return!0}return!1}static removeAccents(o){return o&&(o=o.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),o}static isDate(o){return Object.prototype.toString.call(o)==="[object Date]"}static isEmpty(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!this.isDate(o)&&typeof o=="object"&&Object.keys(o).length===0}static isNotEmpty(o){return!this.isEmpty(o)}static compare(o,e,n,i=1){let r=-1,a=this.isEmpty(o),s=this.isEmpty(e);return a&&s?r=0:a?r=i:s?r=-i:typeof o=="string"&&typeof e=="string"?r=o.localeCompare(e,n,{numeric:!0}):r=o<e?-1:o>e?1:0,r}static sort(o,e,n=1,i,r=1){let a=t.compare(o,e,i,n),s=n;return(t.isEmpty(o)||t.isEmpty(e))&&(s=r===1?n:r),s*a}static merge(o,e){if(!(o==null&&e==null)){{if((o==null||typeof o=="object")&&(e==null||typeof e=="object"))return st(st({},o||{}),e||{});if((o==null||typeof o=="string")&&(e==null||typeof e=="string"))return[o||"",e||""].join(" ")}return e||o}}static isPrintableCharacter(o=""){return this.isNotEmpty(o)&&o.length===1&&o.match(/\S| /)}static getItemValue(o,...e){return this.isFunction(o)?o(...e):o}static findLastIndex(o,e){let n=-1;if(this.isNotEmpty(o))try{n=o.findLastIndex(e)}catch{n=o.lastIndexOf([...o].reverse().find(e))}return n}static findLast(o,e){let n;if(this.isNotEmpty(o))try{n=o.findLast(e)}catch{n=[...o].reverse().find(e)}return n}static deepEquals(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var n=Array.isArray(o),i=Array.isArray(e),r,a,s;if(n&&i){if(a=o.length,a!=e.length)return!1;for(r=a;r--!==0;)if(!this.deepEquals(o[r],e[r]))return!1;return!0}if(n!=i)return!1;var x=o instanceof Date,N=e instanceof Date;if(x!=N)return!1;if(x&&N)return o.getTime()==e.getTime();var A=o instanceof RegExp,V=e instanceof RegExp;if(A!=V)return!1;if(A&&V)return o.toString()==e.toString();var T=Object.keys(o);if(a=T.length,a!==Object.keys(e).length)return!1;for(r=a;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,T[r]))return!1;for(r=a;r--!==0;)if(s=T[r],!this.deepEquals(o[s],e[s]))return!1;return!0}return o!==o&&e!==e}static minifyCSS(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(o){return this.isString(o)?o.replace(/(-|_)/g,"").toLowerCase():o}static isString(o,e=!0){return typeof o=="string"&&(e||o!=="")}},Zt=0;function Fo(t="pn_id_"){return Zt++,`${t}${Zt}`}function $e(){let t=[],o=(r,a)=>{let s=t.length>0?t[t.length-1]:{key:r,value:a},x=s.value+(s.key===r?0:a)+2;return t.push({key:r,value:x}),x},e=r=>{t=t.filter(a=>a.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,a,s)=>{a&&(a.style.zIndex=String(o(r,s)))},clear:r=>{r&&(e(i(r)),r.style.zIndex="")},getCurrent:()=>n()}}var To=$e();export{at as a,Nt as b,je as c,Vt as d,Do as e,ve as f,Bo as g,Qt as h,Fo as i,To as j};
