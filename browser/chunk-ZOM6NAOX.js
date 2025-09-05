import{b as Se,c as Ce}from"./chunk-SNUN3NON.js";import{b as be,c as ve,d as xe,e as ke}from"./chunk-G7JFBSCM.js";import"./chunk-LUPX6JZP.js";import"./chunk-HCPIYMOG.js";import{b as K}from"./chunk-BLDKMZNP.js";import{a as $e,b as Me}from"./chunk-XDIARWWS.js";import{b as Ie,c as Ae}from"./chunk-2QXIKTXX.js";import"./chunk-4NJTZRKX.js";import"./chunk-HLQBAXBS.js";import"./chunk-XCRGOJG6.js";import{l as we,m as ye}from"./chunk-VMXYBXWE.js";import"./chunk-X6ZJPGLO.js";import"./chunk-XX7PFCG5.js";import"./chunk-MKRCPO7H.js";import{a as Fe,b as Ee,c as Ve,d as ze,e as _e,f as Te}from"./chunk-FSKS7IY6.js";import"./chunk-HMTZZOA3.js";import{a as X}from"./chunk-TEBGWAFG.js";import"./chunk-FBPE2YDT.js";import{c as ie,d as oe,f,g as re,h as ae,i as ne,k as le,l as se,m as ue,n as de,o as ce,q as pe,r as ge,s as he,t as me,u as fe}from"./chunk-CCZK4PAX.js";import{k as Z,l as ee,o as te}from"./chunk-Z4MGQCVU.js";import"./chunk-F2X3VGZZ.js";import"./chunk-EDNOECVK.js";import{a as T}from"./chunk-TV3AL2YO.js";import"./chunk-FBKXE5PL.js";import"./chunk-PZSQWDZM.js";import{Ia as _,j as W,k as Y,o as J,s as V,ya as z}from"./chunk-2EMEEHE6.js";import{$a as I,Ac as Q,Cb as P,Gb as c,Nb as L,O as N,Oa as r,Ob as G,P as k,Pb as H,Q as S,Ta as m,Tb as p,Ub as y,V as h,Vb as U,_b as E,aa as C,ab as A,ba as $,bb as R,da as b,db as F,fb as O,ja as M,lb as w,mb as a,oa as v,ob as B,qb as j,wb as n,wc as g,xb as l,xc as q,yb as s,zc as D}from"./chunk-QN2SJYEL.js";var Ue=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding: ${e("textarea.padding.y")} ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,qe={root:({instance:e,props:u})=>["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":u.autoResize,"p-invalid":u.invalid,"p-variant-filled":u.variant?u.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled","p-textarea-fluid":u.fluid}]},De=(()=>{class e extends z{name="textarea";theme=Ue;classes=qe;static \u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var Re=(()=>{class e extends T{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new M;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=h(De);constructor(i,t){super(),this.ngModel=i,this.control=t}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let t=this.el.nativeElement.closest("p-fluid");return this.fluid||!!t}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(i){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(i){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(i||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||e)(m(le,8),m(re,8))};static \u0275dir=R({type:e,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(t,o){t&1&&c("input",function(x){return o.onInput(x)}),t&2&&B("p-filled",o.filled)("p-textarea-resizable",o.autoResize)("p-variant-filled",o.variant==="filled"||o.config.inputStyle()==="filled"||o.config.inputVariant()==="filled")("p-textarea-fluid",o.hasFluid)("p-textarea-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-textarea-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",g],variant:"variant",fluid:[2,"fluid","fluid",g],pSize:"pSize"},outputs:{onResize:"onResize"},features:[E([De]),F]})}return e})(),Oe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=A({type:e});static \u0275inj=S({})}return e})();var Ye=["input"],Je=({dt:e})=>`
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
    left: 0;
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

.p-toggleswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: ${e("toggleswitch.handle.background")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    left: ${e("toggleswitch.gap")};
    margin-top: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, left ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${e("toggleswitch.handle.checked.background")};
    left: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider:before {
    background: ${e("toggleswitch.handle.hover.background")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${e("toggleswitch.handle.checked.hover.background")};
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

.p-toggleswitch.p-disabled .p-toggleswitch-slider:before {
    background: ${e("toggleswitch.handle.disabled.background")};
}
`,Ke={root:{position:"relative"}},Xe={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider"},Be=(()=>{class e extends z{name="toggleswitch";theme=Je;classes=Xe;inlineStyles=Ke;static \u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),Ze={provide:ie,useExisting:N(()=>je),multi:!0},je=(()=>{class e extends T{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new M;input;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=h(Be);onClick(i){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:i,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(i){this.modelValue=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})();static \u0275cmp=I({type:e,selectors:[["p-inputSwitch"],["p-inputswitch"]],viewQuery:function(t,o){if(t&1&&L(Ye,5),t&2){let d;G(d=H())&&(o.input=d.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",q],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",g],readonly:[2,"readonly","readonly",g],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",g]},outputs:{onChange:"onChange"},features:[E([Ze,Be]),F],decls:5,vars:22,consts:[["input",""],[3,"click","ngClass","ngStyle"],[1,"p-hidden-accessible"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"]],template:function(t,o){if(t&1){let d=P();n(0,"div",1),c("click",function(Ge){return C(d),$(o.onClick(Ge))}),n(1,"div",2)(2,"input",3,0),c("focus",function(){return C(d),$(o.onFocus())})("blur",function(){return C(d),$(o.onBlur())}),l()(),s(4,"span",4),l()}t&2&&(j(o.styleClass),a("ngClass",o.cx("root"))("ngStyle",o.sx("root"))("ngStyle",o.style),w("data-pc-name","inputswitch")("data-pc-section","root"),r(),w("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),r(),a("ngClass",o.cx("input"))("checked",o.checked())("disabled",o.disabled)("pAutoFocus",o.autofocus),w("id",o.inputId)("aria-checked",o.checked())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("name",o.name)("tabindex",o.tabindex)("data-pc-section","hiddenInput"),r(2),a("ngClass",o.cx("slider")),w("data-pc-section","slider"))},dependencies:[V,W,J,ee,Z,_],encapsulation:2,changeDetection:0})}return e})(),Pe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=A({type:e});static \u0275inj=S({imports:[je,_,_]})}return e})();function et(e,u){if(e&1&&(n(0,"label",25),s(1,"p-radioButton",26),n(2,"span",27),p(3),l()()),e&2){let i=u.$implicit;r(),a("value",i.value),r(2),y(i.label)}}var Le=class e{constructor(u,i){this.languageService=u;this.router=i;Q(()=>{let t=this.languageService.isAr();this.countries.set([{label:t?"\u0645\u0635\u0631":"Egypt",value:"eg"},{label:t?"\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629":"Saudi Arabia",value:"sa"},{label:t?"\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A":"UAE",value:"ae"}]),this.skills.set([{label:t?"\u0623\u0646\u062C\u0648\u0644\u0627\u0631":"Angular",value:"angular"},{label:t?"\u0631\u064A\u0623\u0643\u062A":"React",value:"react"},{label:t?"\u0641\u064A\u0648":"Vue",value:"vue"}]),this.genders.set([{label:t?"\u0630\u0643\u0631":"Male",value:"male"},{label:t?"\u0623\u0646\u062B\u0649":"Female",value:"female"}])})}fb=h(ce);form=v(this.fb.group({title:this.fb.control("",f.required),description:this.fb.control(""),password:this.fb.control("",[f.required,f.minLength(6)]),phone:this.fb.control("",[f.required,f.pattern("^[0-9]{10,15}$")]),country:this.fb.control(null),skills:this.fb.control([]),agree:this.fb.control(!1),gender:this.fb.control("male"),timeOnly:this.fb.control(null),dateTime:this.fb.control(null),images:this.fb.array([]),videos:this.fb.array([])}));countries=v([]);skills=v([]);genders=v([]);images=D(()=>this.form().get("images"));videos=D(()=>this.form().get("videos"));submit(){this.form().valid?console.log("Form Value:",this.form().value):(console.warn("Form Not Valid"),this.form().markAllAsTouched())}isAr(){return this.languageService.isAr()}static \u0275fac=function(i){return new(i||e)(m(X),m(K))};static \u0275cmp=I({type:e,selectors:[["app-register"]],decls:38,vars:20,consts:[[1,"flex","flex-col","gap-4","w-3/4","mx-auto","p-4","border","rounded-md","shadow","mt-6",3,"formGroup"],[1,"grid","grid-cols-2","gap-4","py-4"],[1,"w-full"],[1,"pi","pi-user"],["pInputText","","formControlName","title",1,"w-full",3,"placeholder"],[1,"pi","pi-lock"],["formControlName","password","toggleMask","true",1,"w-full",3,"placeholder","feedback"],[1,"pi","pi-phone"],["pInputText","","formControlName","phone","type","tel",1,"w-full",3,"placeholder"],["formControlName","country","optionLabel","label","optionValue","value","placeholder","Select Country",1,"w-full","h-12",3,"options"],["pInputTextarea","","formControlName","description",1,"w-full","h-28",3,"placeholder"],[1,"grid","grid-cols-4","gap-4","py-4"],["formControlName","skills","display","chip",1,"col-span-3",3,"options","placeholder"],[1,"col-span-1","flex","gap-4","items-center"],["class","flex items-center",4,"ngFor","ngForOf"],[1,"grid","grid-cols-5","gap-4","py-4"],["formControlName","dateTime","hourFormat","24",1,"col-span-2",3,"showTime","placeholder"],["formControlName","timeOnly","hourFormat","24",1,"col-span-2",3,"timeOnly","placeholder"],[1,"col-span-1","flex","items-center","gap-2"],["formControlName","agree","binary","true"],[1,"text-lg","font-bold","w-full"],[3,"images"],[3,"videos"],["type","button",1,"transition","w-full","mx-auto","bg-green-500","cursor-pointer","text-white","p-2","rounded-md","flex","justify-center","text-2xl","font-bold","hover:bg-green-600","hover:text-white","text-center",3,"click"],[1,"pi","pi-send","ml-2","text-white","flex","items-center","justify-center","text-center","p-2","text-2xl"],[1,"flex","items-center"],["name","gender","formControlName","gender",3,"value"],[1,"ml-2"]],template:function(i,t){i&1&&(n(0,"form",0)(1,"div",1)(2,"p-inputgroup",2)(3,"p-inputgroup-addon"),s(4,"i",3),l(),s(5,"input",4),l(),n(6,"p-inputgroup",2)(7,"p-inputgroup-addon"),s(8,"i",5),l(),s(9,"p-password",6),l()(),n(10,"div",1)(11,"p-inputgroup",2)(12,"p-inputgroup-addon"),s(13,"i",7),l(),s(14,"input",8),l(),s(15,"p-select",9),l(),n(16,"textarea",10),p(17,"  "),l(),n(18,"div",11),s(19,"p-multiSelect",12),n(20,"div",13),O(21,et,4,2,"label",14),l()(),n(22,"div",15),s(23,"p-datepicker",16)(24,"p-datepicker",17),n(25,"div",18),s(26,"p-checkbox",19),n(27,"label"),p(28),l()()(),n(29,"h3",20),p(30),l(),s(31,"app-image-uploader",21),n(32,"h3",20),p(33),l(),s(34,"app-video-uploader",22),n(35,"button",23),c("click",function(){return t.submit()}),p(36),s(37,"i",24),l()()),i&2&&(a("formGroup",t.form()),r(5),a("placeholder",t.isAr()?"\u0627\u0644\u0627\u0633\u0645":"Name"),r(4),a("placeholder",t.isAr()?"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631":"Password")("feedback",!0),r(5),a("placeholder",t.isAr()?"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641":"Phone Number"),r(),a("options",t.countries()),r(),a("placeholder",t.isAr()?"\u0627\u0644\u0648\u0635\u0641":"Description"),r(3),a("options",t.skills())("placeholder",t.isAr()?"\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A":"Select Skills"),r(2),a("ngForOf",t.genders()),r(2),a("showTime",!0)("placeholder",t.isAr()?"\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u0648\u0642\u062A":"Select Date & Time"),r(),a("timeOnly",!0)("placeholder",t.isAr()?"\u0627\u062E\u062A\u0631 \u0627\u0644\u0648\u0642\u062A":"Select Time"),r(4),y(t.isAr()?"\u0623\u0646\u0627 \u0623\u062A\u0641\u0642":"I agree to terms"),r(2),y(t.isAr()?"\u0627\u0644\u0635\u0648\u0631":"Images"),r(),a("images",t.images()),r(2),y(t.isAr()?"\u0627\u0644\u0641\u064A\u062F\u064A\u0648":"Videos"),r(),a("videos",t.videos()),r(2),U(" ",t.isAr()?"\u0625\u0631\u0633\u0627\u0644":"Submit"," "))},dependencies:[V,Y,pe,se,oe,ae,ne,ue,de,fe,me,Oe,Re,Se,Ae,Ie,he,ge,ke,xe,Ce,Pe,te,Ee,Fe,ze,Ve,Te,_e,$e,Me,ye,we,ve,be],styles:["[_nghost-%COMP%]     .p-inputtext, [_nghost-%COMP%]     .p-password, [_nghost-%COMP%]     .p-inputwrapper, [_nghost-%COMP%]     .p-select, [_nghost-%COMP%]     .p-multiselect, [_nghost-%COMP%]     .p-calendar{width:100%!important;height:100%!important}"]})};export{Le as RegisterComponent};
