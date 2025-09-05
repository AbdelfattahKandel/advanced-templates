import{a as Dt}from"./chunk-GHFYRPR6.js";import{a as Ct,b as kt}from"./chunk-HCPIYMOG.js";import{b as H}from"./chunk-BLDKMZNP.js";import{a as $t}from"./chunk-TEBGWAFG.js";import{b as q}from"./chunk-FBPE2YDT.js";import{a as ot,b as xt}from"./chunk-EDNOECVK.js";import{a as E}from"./chunk-TV3AL2YO.js";import{$ as R,Ha as Lt,Ia as at,J as vt,P as yt,Q as Tt,R as O,X as et,ca as nt,j as Q,ma as it,p as mt,s as y,ua as _t,v as K,ya as wt}from"./chunk-2EMEEHE6.js";import{$a as g,Ac as gt,Bb as Y,Cb as j,D as st,Gb as v,Hb as L,Ib as D,Jb as B,L as J,M as lt,Mb as z,Nb as I,O as F,Oa as l,Ob as f,P as V,Pb as h,Q as ct,Tb as Z,U as X,Ub as tt,V as s,Ya as N,_b as dt,aa as M,ab as bt,ac as ft,ba as A,da as x,db as C,eb as pt,fb as m,i as rt,lb as b,ma as T,mb as p,na as ut,oa as _,ob as k,rb as $,wb as u,wc as S,xb as d,xc as ht,yb as w,zc as c}from"./chunk-QN2SJYEL.js";var Rt=["previcon"],Pt=["nexticon"],Vt=["content"],Mt=["prevButton"],At=["nextButton"],Nt=["inkbar"],jt=["tabs"],P=["*"],zt=e=>({"p-tablist-viewport":e});function Qt(e,o){e&1&&Y(0)}function Kt(e,o){if(e&1&&m(0,Qt,1,0,"ng-container",11),e&2){let t=L(2);p("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function Ht(e,o){e&1&&w(0,"ChevronLeftIcon")}function qt(e,o){if(e&1){let t=j();u(0,"button",10,3),v("click",function(){M(t);let n=L();return A(n.onPrevButtonClick())}),m(2,Kt,1,1,"ng-container")(3,Ht,1,0,"ChevronLeftIcon"),d()}if(e&2){let t=L();b("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),l(2),$(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Wt(e,o){e&1&&Y(0)}function Ut(e,o){if(e&1&&m(0,Wt,1,0,"ng-container",11),e&2){let t=L(2);p("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Gt(e,o){e&1&&w(0,"ChevronRightIcon")}function Jt(e,o){if(e&1){let t=j();u(0,"button",12,4),v("click",function(){M(t);let n=L();return A(n.onNextButtonClick())}),m(2,Ut,1,1,"ng-container")(3,Gt,1,0,"ChevronRightIcon"),d()}if(e&2){let t=L();b("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),l(2),$(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function Xt(e,o){e&1&&B(0)}var Yt=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,Zt={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},Bt=(()=>{class e extends wt{name="tabs";theme=Yt;classes=Zt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var St=(()=>{class e extends E{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=s(F(()=>W));isPrevButtonEnabled=_(!1);isNextButtonEnabled=_(!1);resizeObserver;showNavigators=c(()=>this.pcTabs.showNavigators());tabindex=c(()=>this.pcTabs.tabindex());scrollable=c(()=>this.pcTabs.scrollable());constructor(){super(),gt(()=>{this.pcTabs.value(),K(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&K(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=R(t),n=Math.abs(t.scrollLeft)-i,a=n<=0?0:n;t.scrollLeft=nt(t)?-1*a:a}onNextButtonClick(){let t=this.content.nativeElement,i=R(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,a=t.scrollWidth-i,r=n>=a?a:n;t.scrollLeft=nt(t)?-1*r:r}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:a}=t,r=Math.abs(t.scrollLeft),G=R(t);this.isPrevButtonEnabled.set(r!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&r!==n-G)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,a=yt(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=vt(a)+"px",i.style.left=et(a).left-et(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,a)=>a?n+R(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=g({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,a){if(i&1&&(z(a,Rt,4),z(a,Pt,4),z(a,Lt,4)),i&2){let r;f(r=h())&&(n.prevIconTemplate=r.first),f(r=h())&&(n.nextIconTemplate=r.first),f(r=h())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(I(Vt,5),I(Mt,5),I(At,5),I(Nt,5),I(jt,5)),i&2){let a;f(a=h())&&(n.content=a.first),f(a=h())&&(n.prevButton=a.first),f(a=h())&&(n.nextButton=a.first),f(a=h())&&(n.inkbar=a.first),f(a=h())&&(n.tabs=a.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(b("data-pc-name","tablist"),k("p-tablist",!0)("p-component",!0))},features:[C],ngContentSelectors:P,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(i,n){if(i&1){let a=j();D(),m(0,qt,4,4,"button",5),u(1,"div",6,0),v("scroll",function(G){return M(a),A(n.onScroll(G))}),u(3,"div",7,1),B(5),w(6,"span",8,2),d()(),m(8,Jt,4,4,"button",9)}i&2&&($(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),l(),p("ngClass",ft(4,zt,n.scrollable())),l(5),b("data-pc-section","inkbar"),l(2),$(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[y,Q,mt,Ct,kt,xt,ot,at],encapsulation:2,changeDetection:0})}return e})(),te=(()=>{class e extends E{value=N();disabled=T(!1,{transform:S});pcTabs=s(F(()=>W));pcTabList=s(F(()=>St));el=s(ut);ripple=c(()=>this.config.ripple());id=c(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=c(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=c(()=>it(this.pcTabs.value(),this.value()));tabindex=c(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?O(n,"data-p-disabled")||O(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?O(n,"data-p-disabled")||O(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){Tt(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){K(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tab"]],hostVars:16,hostBindings:function(i,n){i&1&&v("focus",function(r){return n.onFocus(r)})("click",function(r){return n.onClick(r)})("keydown",function(r){return n.onKeyDown(r)}),i&2&&(b("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),k("p-tab",!0)("p-tab-active",n.active())("p-disabled",n.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[pt([ot]),C],ngContentSelectors:P,decls:1,vars:0,template:function(i,n){i&1&&(D(),B(0))},dependencies:[y,at],encapsulation:2,changeDetection:0})}return e})(),ee=(()=>{class e extends E{pcTabs=s(F(()=>W));value=N(void 0);id=c(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=c(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=c(()=>it(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(i,n){i&2&&(b("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),k("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[C],ngContentSelectors:P,decls:1,vars:1,template:function(i,n){i&1&&(D(),m(0,Xt,1,0)),i&2&&$(n.active()?0:-1)},dependencies:[y],encapsulation:2,changeDetection:0})}return e})(),ne=(()=>{class e extends E{static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(i,n){i&2&&(b("data-pc-name","tabpanels")("role","presentation"),k("p-tabpanels",!0)("p-component",!0))},features:[C],ngContentSelectors:P,decls:1,vars:0,template:function(i,n){i&1&&(D(),B(0))},dependencies:[y],encapsulation:2,changeDetection:0})}return e})(),W=(()=>{class e extends E{value=N(void 0);scrollable=T(!1,{transform:S});lazy=T(!1,{transform:S});selectOnFocus=T(!1,{transform:S});showNavigators=T(!0,{transform:S});tabindex=T(0,{transform:ht});id=_(_t("pn_id_"));_componentStyle=s(Bt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(i,n){i&2&&(b("data-pc-name","tabs")("id",n.id()),k("p-tabs",!0)("p-tabs-scrollable",n.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[dt([Bt]),C],ngContentSelectors:P,decls:1,vars:0,template:function(i,n){i&1&&(D(),B(0))},dependencies:[y],encapsulation:2,changeDetection:0})}return e})(),Et=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=bt({type:e});static \u0275inj=ct({imports:[W,ne,ee,St,te]})}return e})();var U=class e{constructor(o,t){this.translate=o;this.router=t;this.initializeLanguage()}destroy$=new rt;currentLanguage=_("ar");translationsLoaded=_(!1);isBrowser=typeof window<"u";ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getDirection(){return this.currentLanguage()==="ar"?"rtl":"ltr"}getCurrentLanguage(){return this.currentLanguage()}initializeLanguage(){if(this.isBrowser){let o=localStorage.getItem("preferredLanguage");this.currentLanguage.set(o||"ar"),this.translate.setDefaultLang(this.currentLanguage()),this.translate.use(this.currentLanguage()).pipe(J(this.destroy$),st(()=>{this.translationsLoaded.set(!0)})).subscribe(),document.documentElement.lang=this.currentLanguage(),document.documentElement.dir=this.currentLanguage()==="ar"?"rtl":"ltr"}else this.translationsLoaded.set(!0)}switchLanguage(){let o=this.currentLanguage()==="ar"?"en":"ar";this.currentLanguage.set(o),this.translate.use(o).pipe(J(this.destroy$),lt(()=>{this.isBrowser&&(document.documentElement.lang=o,document.documentElement.dir=o==="ar"?"rtl":"ltr",localStorage.setItem("preferredLanguage",o))})).subscribe()}translateKey(o,t){return this.translate.instant(o,t)}isRTL(){return this.getDirection()==="rtl"}static \u0275fac=function(t){return new(t||e)(X(q),X(H))};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})};var Ft=class e{router=s(H);translateService=s(q);languageService=s($t);themeService=s(Dt);translationService=s(U);ngOnInit(){this.translateService.use(this.languageService.lang()),this.router.events.subscribe(()=>{})}switchLanguage(o){this.languageService.setLanguage(o)}toggleLang(){this.languageService.setLanguage(this.languageService.isAr()?"en":"ar")}toggleTheme(){this.themeService.toggle()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-lang-theme"]],decls:10,vars:6,consts:[[1,"h-1/10","flex","justify-start",3,"dir"],["type","button",1,"p-6","flex","items-center","gap-2",3,"click","title"],[1,"pi","pi-globe"],[1,"pi",3,"ngClass"]],template:function(t,i){t&1&&(u(0,"main")(1,"div",0)(2,"button",1),v("click",function(){return i.toggleLang()}),u(3,"label"),Z(4),d(),w(5,"i",2),d(),u(6,"button",1),v("click",function(){return i.toggleTheme()}),u(7,"label"),Z(8),d(),w(9,"i",3),d()()()),t&2&&(l(),p("dir",i.languageService.isAr()?"rtl":"ltr"),l(),p("title",i.languageService.isAr()?"English":"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"),l(2),tt(i.languageService.isAr()?"English":"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"),l(2),p("title",i.themeService.theme()==="dark"?"Light":"Dark"),l(2),tt(i.themeService.theme()==="dark"?"Light":"Dark"),l(),p("ngClass",i.themeService.theme()==="dark"?"pi-sun":"pi-moon"))},dependencies:[Et,y,Q],encapsulation:2})};export{Ft as a};
