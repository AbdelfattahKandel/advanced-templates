import{a as ke}from"./chunk-HMTZZOA3.js";import{c as Ee,t as Me}from"./chunk-CCZK4PAX.js";import{b as xe,f as Se,i as Z,k as Le}from"./chunk-Z4MGQCVU.js";import{c as ge,d as J,f as X,h as ee}from"./chunk-F2X3VGZZ.js";import{c as Ie}from"./chunk-EDNOECVK.js";import{a as R}from"./chunk-TV3AL2YO.js";import{Ea as Ce,H as _e,Ha as Te,Ia as _,J as we,Ja as B,K as ye,da as be,j as ue,l as me,o as he,p as fe,s as z,ua as ve,v as Y,ya as O}from"./chunk-2EMEEHE6.js";import{$a as T,$b as pe,Ab as V,Bb as j,Cb as y,Gb as b,Hb as l,Ib as Q,Jb as N,Mb as k,Nb as oe,O as ne,Oa as r,Ob as v,P as E,Pb as C,Q as M,Sb as ae,Tb as se,Ub as le,V as S,_b as D,aa as u,ab as P,ac as q,ba as m,bc as de,ca as ie,cb as re,da as g,db as I,fb as h,ja as A,jc as G,lb as d,lc as W,mb as o,nc as ce,ob as U,pb as H,qb as w,wb as f,wc as L,xb as c,xc as K,yb as $,zb as F}from"./chunk-QN2SJYEL.js";var Oe=["*"],Re=({dt:e})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${e("inputgroup.addon.padding")};
    background: ${e("inputgroup.addon.background")};
    color: ${e("inputgroup.addon.color")};
    border-block-start: 1px solid ${e("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${e("inputgroup.addon.border.color")};
    min-width: ${e("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}
`,$e={root:({props:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},Pe=(()=>{class e extends O{name="inputgroup";theme=Re;classes=$e;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var Be=(()=>{class e extends R{style;styleClass;_componentStyle=S(Pe);static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(i,n){i&2&&(d("data-pc-name","inputgroup"),H(n.style),w(n.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[D([Pe]),I],ngContentSelectors:Oe,decls:1,vars:0,template:function(i,n){i&1&&(Q(),N(0))},dependencies:[z,_],encapsulation:2})}return e})(),zt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=M({imports:[Be,_,_]})}return e})();var Ae=["*"],He={root:"p-inputgroupaddon"},Fe=(()=>{class e extends O{name="inputgroupaddon";classes=He;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})(),je=(()=>{class e extends R{style;styleClass;_componentStyle=S(Fe);get hostStyle(){return this.style}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(i,n){i&2&&(d("data-pc-name","inputgroupaddon"),H(n.hostStyle),w(n.styleClass),U("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[D([Fe]),I],ngContentSelectors:Ae,decls:1,vars:0,template:function(i,n){i&1&&(Q(),N(0))},dependencies:[z],encapsulation:2})}return e})(),Zt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=M({imports:[je,_,_]})}return e})();var Ve=(()=>{class e extends Ie{pathId;ngOnInit(){this.pathId="url(#"+ve()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["EyeSlashIcon"]],features:[I],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ie(),f(0,"svg",0)(1,"g"),$(2,"path",1),c(),f(3,"defs")(4,"clipPath",2),$(5,"rect",3),c()()()),i&2&&(w(n.getClassNames()),d("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),r(),d("clip-path",n.pathId),r(3),o("id",n.pathId))},encapsulation:2})}return e})();var Qe=["content"],Ne=["footer"],Ge=["header"],We=["clearicon"],Ze=["hideicon"],Ue=["showicon"],qe=["input"],Ke=()=>({class:"p-password-toggle-mask-icon p-password-mask-icon"}),Ye=(e,a)=>({showTransitionParams:e,hideTransitionParams:a}),Je=e=>({value:"visible",params:e}),Xe=e=>({width:e});function et(e,a){if(e&1){let t=y();f(0,"TimesIcon",8),b("click",function(){u(t);let n=l(2);return m(n.clear())}),c()}e&2&&d("data-pc-section","clearIcon")}function tt(e,a){}function nt(e,a){e&1&&h(0,tt,0,0,"ng-template")}function it(e,a){if(e&1){let t=y();F(0),h(1,et,1,1,"TimesIcon",7),f(2,"span",8),b("click",function(){u(t);let n=l();return m(n.clear())}),h(3,nt,1,0,null,9),c(),V()}if(e&2){let t=l();r(),o("ngIf",!t.clearIconTemplate&&!t._clearIconTemplate),r(),d("data-pc-section","clearIcon"),r(),o("ngTemplateOutlet",t.clearIconTemplate||t._clearIconTemplate)}}function rt(e,a){if(e&1){let t=y();f(0,"EyeSlashIcon",12),b("click",function(){u(t);let n=l(3);return m(n.onMaskToggle())}),c()}e&2&&d("data-pc-section","hideIcon")}function ot(e,a){}function at(e,a){e&1&&h(0,ot,0,0,"ng-template")}function st(e,a){if(e&1){let t=y();f(0,"span",13),b("click",function(){u(t);let n=l(3);return m(n.onMaskToggle())}),h(1,at,1,0,null,14),c()}if(e&2){let t=l(3);r(),o("ngTemplateOutlet",t.hideIconTemplate||t._hideIconTemplate)("ngTemplateOutletContext",pe(2,Ke))}}function lt(e,a){if(e&1&&(F(0),h(1,rt,1,1,"EyeSlashIcon",10)(2,st,2,3,"span",11),V()),e&2){let t=l(2);r(),o("ngIf",!t.hideIconTemplate&&!t._hideIconTemplate),r(),o("ngIf",t.hideIconTemplate||t._hideIconTemplate)}}function pt(e,a){if(e&1){let t=y();f(0,"EyeIcon",12),b("click",function(){u(t);let n=l(3);return m(n.onMaskToggle())}),c()}e&2&&d("data-pc-section","showIcon")}function dt(e,a){}function ct(e,a){e&1&&h(0,dt,0,0,"ng-template")}function ut(e,a){if(e&1){let t=y();f(0,"span",13),b("click",function(){u(t);let n=l(3);return m(n.onMaskToggle())}),h(1,ct,1,0,null,9),c()}if(e&2){let t=l(3);r(),o("ngTemplateOutlet",t.showIconTemplate||t._showIconTemplate)}}function mt(e,a){if(e&1&&(F(0),h(1,pt,1,1,"EyeIcon",10)(2,ut,2,1,"span",11),V()),e&2){let t=l(2);r(),o("ngIf",!t.showIconTemplate&&!t._showIconTemplate),r(),o("ngIf",t.showIconTemplate||t._showIconTemplate)}}function ht(e,a){if(e&1&&(F(0),h(1,lt,3,2,"ng-container",5)(2,mt,3,2,"ng-container",5),V()),e&2){let t=l();r(),o("ngIf",t.unmasked),r(),o("ngIf",!t.unmasked)}}function ft(e,a){e&1&&j(0)}function gt(e,a){e&1&&j(0)}function _t(e,a){if(e&1&&(F(0),h(1,gt,1,0,"ng-container",9),V()),e&2){let t=l(2);r(),o("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)}}function wt(e,a){if(e&1&&(f(0,"div",17)(1,"div",18),$(2,"div",3),G(3,"mapper"),c(),f(4,"div",19),se(5),c()()),e&2){let t=l(2);r(),d("data-pc-section","meter"),r(),o("ngClass",W(3,6,t.meter,t.strengthClass))("ngStyle",q(9,Xe,t.meter?t.meter.width:"")),d("data-pc-section","meterLabel"),r(2),d("data-pc-section","info"),r(),le(t.infoText)}}function yt(e,a){e&1&&j(0)}function bt(e,a){if(e&1){let t=y();f(0,"div",15,1),b("click",function(n){u(t);let s=l();return m(s.onOverlayClick(n))})("@overlayAnimation.start",function(n){u(t);let s=l();return m(s.onAnimationStart(n))})("@overlayAnimation.done",function(n){u(t);let s=l();return m(s.onAnimationEnd(n))}),h(2,ft,1,0,"ng-container",9)(3,_t,2,1,"ng-container",16)(4,wt,6,11,"ng-template",null,2,ce)(6,yt,1,0,"ng-container",9),c()}if(e&2){let t=ae(5),i=l();o("@overlayAnimation",q(9,Je,de(6,Ye,i.showTransitionOptions,i.hideTransitionOptions))),d("data-pc-section","panel"),r(2),o("ngTemplateOutlet",i.headerTemplate||i._headerTemplate),r(),o("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",t),r(3),o("ngTemplateOutlet",i.footerTemplate||i._footerTemplate)}}var vt=({dt:e})=>`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${e("password.meter.height")};
    background: ${e("password.meter.background")};
    border-radius: ${e("password.meter.border.radius")};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${e("password.meter.border.radius")};
}

.p-password-meter-weak {
    background: ${e("password.strength.weak.background")};
}

.p-password-meter-medium {
    background: ${e("password.strength.medium.background")};
}

.p-password-meter-strong {
    background: ${e("password.strength.strong.background")};
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    position: absolute;
    padding: ${e("password.overlay.padding")};
    background: ${e("password.overlay.background")};
    color: ${e("password.overlay.color")};
    border: 1px solid ${e("password.overlay.border.color")};
    box-shadow: ${e("password.overlay.shadow")};
    border-radius: ${e("password.overlay.border.radius")};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${e("password.content.gap")};
}

.p-password-toggle-mask-icon {
    inset-inline-end: ${e("form.field.padding.x")};
    color: ${e("password.icon.color")};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${e("icon.size")} / 2));
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon,
.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

/* For PrimeNG */
p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: ${e("inputtext.invalid.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-password-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    inset-inline-end: ${e("form.field.padding.x")};
    color: ${e("form.field.icon.color")};
}

.p-password-fluid-directive {
    width:100%
}
`,Ct={root:({instance:e})=>({position:e.appendTo==="self"?"relative":void 0})},Tt={root:({instance:e})=>({"p-password p-component p-inputwrapper":!0,"p-inputwrapper-filled":e.filled(),"p-variant-filled":'instance.variant === "filled" || instance.config.inputVariant() === "filled" || instance.config.inputStyle() === "filled"',"p-inputwrapper-focus":e.focused,"p-password-fluid":e.hasFluid}),pcInput:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:({instance:e})=>`p-password-meter-label ${e.meter?"p-password-meter-"+e.meter.strength:""}`,meterText:"p-password-meter-text"},De=(()=>{class e extends O{name="password";theme=vt;classes=Tt;inlineStyles=Ct;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var It=(()=>{class e{transform(t,i,...n){return i(t,...n)}static \u0275fac=function(i){return new(i||e)};static \u0275pipe=re({name:"mapper",type:e,pure:!0})}return e})(),kt={provide:Ee,useExisting:ne(()=>ze),multi:!0},ze=(()=>{class e extends R{ariaLabel;fluid;ariaLabelledBy;label;disabled;promptLabel;mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";weakLabel;mediumLabel;maxLength;strongLabel;inputId;feedback=!0;appendTo;toggleMask;size;inputStyleClass;styleClass;style;inputStyle;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autocomplete;placeholder;showClear=!1;autofocus;variant;tabindex;onFocus=new A;onBlur=new A;onClear=new A;input;contentTemplate;footerTemplate;headerTemplate;clearIconTemplate;hideIconTemplate;showIconTemplate;templates;_contentTemplate;_footerTemplate;_headerTemplate;_clearIconTemplate;_hideIconTemplate;_showIconTemplate;overlayVisible=!1;meter;infoText;focused=!1;unmasked=!1;mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;overlay;value=null;onModelChange=()=>{};onModelTouched=()=>{};translationSubscription;_componentStyle=S(De);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}overlayService=S(Ce);ngOnInit(){super.ngOnInit(),this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"clearicon":this._clearIconTemplate=t.template;break;case"hideicon":this._hideIconTemplate=t.template;break;case"showicon":this._showIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,Z.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null;break}}onAnimationEnd(t){switch(t.toState){case"void":Z.clear(t.element);break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=we(this.input.nativeElement)+"px",_e(this.overlay,this.input.nativeElement)):ye(this.overlay,this.input.nativeElement)}onInput(t){this.value=t.target.value,this.onModelChange(this.value)}onInputFocus(t){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(t)}onKeyUp(t){if(this.feedback){let i=t.target.value;if(this.updateUI(i),t.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}}updateUI(t){let i=null,n=null;switch(this.testStrength(t)){case 1:i=this.weakText(),n={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),n={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),n={strength:"strong",width:"100%"};break;default:i=this.promptText(),n=null;break}this.meter=n,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}testStrength(t){let i=0;return this.strongCheckRegExp.test(t)?i=3:this.mediumCheckRegExp.test(t)?i=2:t.length&&(i=1),i}writeValue(t){t===void 0?this.value=null:this.value=t,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}bindScrollListener(){Y(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new Se(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}bindResizeListener(){if(Y(this.platformId)&&!this.resizeListener){let t=this.document.defaultView;this.resizeListener=this.renderer.listen(t,"resize",()=>{this.overlayVisible&&!be()&&(this.overlayVisible=!1)})}}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}containerClass(t){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":t}}get rootClass(){return this._componentStyle.classes.root({instance:this})}inputFieldClass(t){return{"p-password-input":!0,"p-disabled":t}}strengthClass(t){return`p-password-meter-label p-password-meter${t?.strength?`-${t.strength}`:""}`}filled(){return this.value!=null&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(B.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(B.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(B.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(B.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&(this.appendTo==="body"?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(t){return t?"text":"password"}getTranslation(t){return this.config.getTranslation(t)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(Z.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-password"]],contentQueries:function(i,n,s){if(i&1&&(k(s,Qe,4),k(s,Ne,4),k(s,Ge,4),k(s,We,4),k(s,Ze,4),k(s,Ue,4),k(s,Te,4)),i&2){let p;v(p=C())&&(n.contentTemplate=p.first),v(p=C())&&(n.footerTemplate=p.first),v(p=C())&&(n.headerTemplate=p.first),v(p=C())&&(n.clearIconTemplate=p.first),v(p=C())&&(n.hideIconTemplate=p.first),v(p=C())&&(n.showIconTemplate=p.first),v(p=C())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&oe(qe,5),i&2){let s;v(s=C())&&(n.input=s.first)}},inputs:{ariaLabel:"ariaLabel",fluid:[2,"fluid","fluid",L],ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:[2,"disabled","disabled",L],promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:[2,"maxLength","maxLength",K],strongLabel:"strongLabel",inputId:"inputId",feedback:[2,"feedback","feedback",L],appendTo:"appendTo",toggleMask:[2,"toggleMask","toggleMask",L],size:"size",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autocomplete:"autocomplete",placeholder:"placeholder",showClear:[2,"showClear","showClear",L],autofocus:[2,"autofocus","autofocus",L],variant:"variant",tabindex:[2,"tabindex","tabindex",K]},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[D([kt,De]),I],decls:8,vars:34,consts:[["input",""],["overlay",""],["content",""],[3,"ngClass","ngStyle"],["pInputText","",3,"input","focus","blur","keyup","disabled","pSize","ngClass","ngStyle","value","variant","pAutoFocus"],[4,"ngIf"],["class","p-password-overlay p-component",3,"click",4,"ngIf"],["class","p-password-clear-icon",3,"click",4,"ngIf"],[1,"p-password-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["class","p-password-toggle-mask-icon p-password-mask-icon",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[1,"p-password-toggle-mask-icon","p-password-mask-icon",3,"click"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-password-overlay","p-component",3,"click"],[4,"ngIf","ngIfElse"],[1,"p-password-content"],[1,"p-password-meter"],[1,"p-password-meter-text"]],template:function(i,n){if(i&1){let s=y();f(0,"div",3)(1,"input",4,0),G(3,"mapper"),G(4,"mapper"),b("input",function(x){return u(s),m(n.onInput(x))})("focus",function(x){return u(s),m(n.onInputFocus(x))})("blur",function(x){return u(s),m(n.onInputBlur(x))})("keyup",function(x){return u(s),m(n.onKeyUp(x))}),c(),h(5,it,4,3,"ng-container",5)(6,ht,3,2,"ng-container",5)(7,bt,7,11,"div",6),c()}i&2&&(w(n.styleClass),o("ngClass",n.rootClass)("ngStyle",n.style),d("data-pc-name","password")("data-pc-section","root"),r(),w(n.inputStyleClass),o("disabled",n.disabled)("pSize",n.size)("ngClass",W(3,28,n.disabled,n.inputFieldClass))("ngStyle",n.inputStyle)("value",n.value)("variant",n.variant)("pAutoFocus",n.autofocus),d("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("tabindex",n.tabindex)("type",W(4,31,n.unmasked,n.inputType))("placeholder",n.placeholder)("autocomplete",n.autocomplete)("maxlength",n.maxLength)("data-pc-section","input"),r(4),o("ngIf",n.showClear&&n.value!=null),r(),o("ngIf",n.toggleMask),r(),o("ngIf",n.overlayVisible))},dependencies:[z,ue,me,fe,he,Me,Le,xe,Ve,ke,It,_],encapsulation:2,data:{animation:[ge("overlayAnimation",[ee(":enter",[X({opacity:0,transform:"scaleY(0.8)"}),J("{{showTransitionParams}}")]),ee(":leave",[J("{{hideTransitionParams}}",X({opacity:0}))])])]},changeDetection:0})}return e})(),Dn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=M({imports:[ze,_,_]})}return e})();export{Be as a,zt as b,je as c,Zt as d,ze as e,Dn as f};
