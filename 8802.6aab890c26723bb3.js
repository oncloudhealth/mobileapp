"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8802],{8802:(A,c,a)=>{a.r(c),a.d(c,{LoginPageModule:()=>v});var d=a(9808),i=a(4182),r=a(7590),l=a(2292),n=a(2096);function m(o,t){1&o&&(n.TgZ(0,"span"),n._uU(1,"Email is required"),n.qZA())}function f(o,t){1&o&&(n.TgZ(0,"span"),n._uU(1,"Email is invalid"),n.qZA())}function _(o,t){if(1&o&&(n.TgZ(0,"ion-note",16),n.YNc(1,m,2,0,"span",17),n.YNc(2,f,2,0,"span",17),n.qZA()),2&o){n.oxw();const e=n.MAs(8);n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.required),n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.email)}}function Z(o,t){1&o&&(n.TgZ(0,"span"),n._uU(1,"Password is required"),n.qZA())}function P(o,t){1&o&&(n.TgZ(0,"span"),n._uU(1,"Password must be at least 8 characters long"),n.qZA())}function x(o,t){1&o&&(n.TgZ(0,"span"),n._uU(1,"Password must not exceed 40 characters"),n.qZA())}function L(o,t){if(1&o&&(n.TgZ(0,"ion-note",16),n.YNc(1,Z,2,0,"span",17),n.YNc(2,P,2,0,"span",17),n.YNc(3,x,2,0,"span",17),n.qZA()),2&o){n.oxw();const e=n.MAs(12);n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.required),n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.minlength),n.xp6(1),n.Q6J("ngIf",null==e.errors?null:e.errors.maxlength)}}const T=[{path:"",component:(()=>{class o{constructor(e,u){this.router=e,this.navController=u}ngOnInit(){}onLogin(e){console.log(e.value),this.navController.navigateRoot("/create-profile")}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(l.F0),n.Y36(r.SH))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:24,vars:5,consts:[["fullscreen","true",1,"ion-padding-top"],["novalidate","",3,"ngSubmit"],["f","ngForm"],[1,"ion-padding","ion-margin-top"],["lines","none",1,"ion-margin-bottom"],["placeholder","Email","type","email","name","email","ngModel","","email","","required","",3,"clearInput"],["email","ngModel"],["slot","error",4,"ngIf"],["placeholder","Password (at leat 8 characters)","minlength","8","maxlength","40","type","password","name","password","ngModel","","password","","required","",3,"clearInput"],["password","ngModel"],[1,"ion-padding"],["shape","round","expand","block","type","submit","color","primary",3,"disabled"],[1,"ion-text-center"],["routerLink","/forgot-password","fill","clear",1,"ion-no-padding"],[1,"btn-signup"],["color","primary","routerLink","/signup"],["slot","error"],[4,"ngIf"]],template:function(e,u){if(1&e){const p=n.EpF();n.TgZ(0,"ion-content",0)(1,"form",1,2),n.NdJ("ngSubmit",function(){n.CHM(p);const s=n.MAs(2);return n.KtG(s.valid&&u.onLogin(s))}),n.TgZ(3,"div",3)(4,"h1"),n._uU(5,"Sign In"),n.qZA()(),n.TgZ(6,"ion-item",4),n._UZ(7,"ion-input",5,6),n.YNc(9,_,3,2,"ion-note",7),n.qZA(),n.TgZ(10,"ion-item",4),n._UZ(11,"ion-input",8,9),n.YNc(13,L,4,3,"ion-note",7),n.qZA(),n.TgZ(14,"div",10)(15,"ion-button",11),n._uU(16,"Sign in"),n.qZA()(),n.TgZ(17,"div",12)(18,"ion-button",13),n._uU(19,"Forgot password?"),n.qZA(),n.TgZ(20,"div",14),n._uU(21,"Don't have an account? "),n.TgZ(22,"ion-text",15),n._uU(23,"Sign Up"),n.qZA()()()()()}if(2&e){const p=n.MAs(2),g=n.MAs(8),s=n.MAs(12);n.xp6(7),n.Q6J("clearInput",!0),n.xp6(2),n.Q6J("ngIf",g.invalid&&(g.dirty||g.touched)),n.xp6(2),n.Q6J("clearInput",!0),n.xp6(2),n.Q6J("ngIf",s.invalid&&(s.dirty||s.touched)),n.xp6(2),n.Q6J("disabled",p.invalid)}},dependencies:[d.O5,i._Y,i.JJ,i.JL,i.Q7,i.wO,i.nD,i.on,i.On,i.F,r.YG,r.W2,r.pK,r.Ie,r.uN,r.yW,r.j9,r.YI,l.rH],styles:[".btn-signup[_ngcontent-%COMP%]{position:absolute;bottom:100px;width:100%}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.Bz.forChild(T),l.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[d.ez,i.u5,i.UX,r.Pc,h]}),o})()}}]);