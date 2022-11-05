"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4886],{4886:(Q,d,l)=>{l.r(d),l.d(d,{SignupPageModule:()=>U});var g=l(9808),r=l(4182),a=l(7590),m=l(2292),f=l(655),n=l(2096);let h=(()=>{class e{constructor(){this.matchPassword=[]}validate(o){return class _{static match(i,o){return u=>{const s=u.controls[i],t=u.controls[o];return(null==t?void 0:t.errors)&&!t.errors.matching?null:(console.log(null==s?void 0:s.value,null==t?void 0:t.value),(null==s?void 0:s.value)!==(null==t?void 0:t.value)?(null==t||t.setErrors({matching:!0}),{matching:!0}):(null==t||t.setErrors(null),null))}}}.match(this.matchPassword[0],this.matchPassword[1])(o)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=n.lG2({type:e,selectors:[["","appMatchPassword",""]],inputs:{matchPassword:["appMatchPassword","matchPassword"]},features:[n._Bn([{provide:r.Cf,useExisting:e,multi:!0}])]}),e})();function v(e,i){1&e&&(n.TgZ(0,"span"),n._uU(1,"Email is required"),n.qZA())}function P(e,i){1&e&&(n.TgZ(0,"span"),n._uU(1,"Email is invalid"),n.qZA())}function Z(e,i){if(1&e&&(n.TgZ(0,"ion-note",16),n.YNc(1,v,2,0,"span",17),n.YNc(2,P,2,0,"span",17),n.qZA()),2&e){n.oxw();const o=n.MAs(8);n.xp6(1),n.Q6J("ngIf",null==o.errors?null:o.errors.required),n.xp6(1),n.Q6J("ngIf",null==o.errors?null:o.errors.email)}}function x(e,i){1&e&&(n.TgZ(0,"span"),n._uU(1,"Password is required"),n.qZA())}function S(e,i){1&e&&(n.TgZ(0,"span"),n._uU(1,"Password must be at least 8 characters long"),n.qZA())}function w(e,i){1&e&&(n.TgZ(0,"span"),n._uU(1,"Password must not exceed 40 characters"),n.qZA())}function M(e,i){if(1&e&&(n.TgZ(0,"ion-note",16),n.YNc(1,x,2,0,"span",17),n.YNc(2,S,2,0,"span",17),n.YNc(3,w,2,0,"span",17),n.qZA()),2&e){n.oxw();const o=n.MAs(12);n.xp6(1),n.Q6J("ngIf",null==o.errors?null:o.errors.required),n.xp6(1),n.Q6J("ngIf",null==o.errors?null:o.errors.minlength),n.xp6(1),n.Q6J("ngIf",null==o.errors?null:o.errors.maxlength)}}function T(e,i){1&e&&(n.TgZ(0,"span"),n._uU(1,"Password is required"),n.qZA())}function A(e,i){1&e&&(n.TgZ(0,"span"),n._uU(1,"Invalid password confirmation"),n.qZA())}function y(e,i){if(1&e&&(n.TgZ(0,"ion-note",16),n.YNc(1,T,2,0,"span",17),n.YNc(2,A,2,0,"span",17),n.qZA()),2&e){n.oxw();const o=n.MAs(16);n.xp6(1),n.Q6J("ngIf",null==o.errors?null:o.errors.required),n.xp6(1),n.Q6J("ngIf",null==o.errors?null:o.errors.matching)}}const I=function(){return["password","confirmPassword"]},J=[{path:"",component:(()=>{class e{constructor(o,u){this.alertController=o,this.navController=u}ngOnInit(){}onSubmit(o){return(0,f.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:"Sign Up successfull! You should receive an email shortly with further instructions on how to link with your agency.",backdropDismiss:!1,buttons:[{text:"OK",role:"confirm"}]})).present()})}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(a.Br),n.Y36(a.SH))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],decls:25,vars:9,consts:[["fullscreen","true",1,"ion-padding-top"],["novalidate","","id","signup","name","signup",3,"appMatchPassword","ngSubmit"],["f","ngForm"],[1,"ion-padding","ion-margin-top"],["lines","none",1,"ion-margin-bottom"],["placeholder","Email","type","email","name","email","ngModel","","email","","required","",3,"clearInput"],["email","ngModel"],["slot","error",4,"ngIf"],["placeholder","Password (at leat 8 characters)","minlength","8","maxlength","40","type","password","name","password","ngModel","","required","",3,"clearInput"],["password","ngModel"],["placeholder","Re-type Password","type","password","name","confirmPassword","ngModel","","required","",3,"clearInput"],["confirmPassword","ngModel"],[1,"ion-text-center","ion-padding"],["shape","round","color","primary","expand","block","type","submit","form","signup",1,"ion-no-padding",3,"disabled"],[1,"btn-signup"],["color","primary",3,"click"],["slot","error"],[4,"ngIf"]],template:function(o,u){if(1&o){const s=n.EpF();n.TgZ(0,"ion-content",0)(1,"form",1,2),n.NdJ("ngSubmit",function(){n.CHM(s);const c=n.MAs(2);return n.KtG(c.valid&&u.onSubmit(c))}),n.TgZ(3,"div",3)(4,"h1"),n._uU(5,"Sign Up"),n.qZA()(),n.TgZ(6,"ion-item",4),n._UZ(7,"ion-input",5,6),n.YNc(9,Z,3,2,"ion-note",7),n.qZA(),n.TgZ(10,"ion-item",4),n._UZ(11,"ion-input",8,9),n.YNc(13,M,4,3,"ion-note",7),n.qZA(),n.TgZ(14,"ion-item",4),n._UZ(15,"ion-input",10,11),n.YNc(17,y,3,2,"ion-note",7),n.qZA(),n.TgZ(18,"div",12)(19,"ion-button",13),n._uU(20,"Sign Up"),n.qZA(),n.TgZ(21,"div",14),n._uU(22,"Already have an account? "),n.TgZ(23,"ion-text",15),n.NdJ("click",function(){return u.navController.pop()}),n._uU(24,"Sign In"),n.qZA()()()()()}if(2&o){const s=n.MAs(2),t=n.MAs(8),c=n.MAs(12),p=n.MAs(16);n.xp6(1),n.Q6J("appMatchPassword",n.DdM(8,I)),n.xp6(6),n.Q6J("clearInput",!0),n.xp6(2),n.Q6J("ngIf",t.invalid&&(t.dirty||t.touched)),n.xp6(2),n.Q6J("clearInput",!0),n.xp6(2),n.Q6J("ngIf",c.invalid&&(c.dirty||c.touched)),n.xp6(2),n.Q6J("clearInput",!0),n.xp6(2),n.Q6J("ngIf",p.invalid&&(p.dirty||p.touched)),n.xp6(2),n.Q6J("disabled",s.invalid)}},dependencies:[g.O5,r._Y,r.JJ,r.JL,r.Q7,r.wO,r.nD,r.on,r.On,r.F,a.YG,a.W2,a.pK,a.Ie,a.uN,a.yW,a.j9,h],styles:[".btn-signup[_ngcontent-%COMP%]{position:absolute;bottom:100px;width:100%}"]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[m.Bz.forChild(J),m.Bz]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.ez,r.u5,a.Pc,q]}),e})()}}]);