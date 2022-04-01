"use strict";(self.webpackChunkcliente_srff=self.webpackChunkcliente_srff||[]).push([[403],{7403:(q,l,i)=>{i.r(l),i.d(l,{ResetPasswordModule:()=>v});var u=i(9808),d=i(9648),s=i(4182),g=i(5226),Z=i.n(g),e=i(5e3),p=i(4153),c=i(2290),m=i(8338);const f=[{path:"",component:(()=>{class o{constructor(t,r,n){this.spinner=t,this.toastr=r,this.auth=n,this.email=new s.NI(null,[s.kI.required,s.kI.email])}ngOnInit(){}send(){this.email.valid&&(this.spinner.show(),this.auth.password({email:this.email.value}).subscribe(t=>{this.email.reset(),t.message&&Z().fire({icon:"success",title:"Correo enviado",text:"Revise su correo en la bandeja de entrada o Spam"}),this.spinner.hide()},t=>{t.error.password&&this.toastr.error(t.error.password),this.spinner.hide()}))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.t2),e.Y36(c._W),e.Y36(m.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-password"]],decls:27,vars:1,consts:[[1,"offline-doc"],[1,"page-header","clear-filter"],[1,"page-header-image",2,"background-image","url('../assets/img/background.jpg')"],[1,"content-center"],[1,"col-md-8","ml-auto","mr-auto"],[1,"card"],[1,"card-header"],["src","../../assets/img/logo.png","width","200"],[1,"card-body","row","justify-content-center"],[1,"col-md-8"],[1,"input-group"],["type","email","name","email","placeholder","Correo",1,"form-control",3,"formControl"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-envelope"],[1,"form-group"],["type","button",1,"btn","btn-primary",3,"click"],["routerLink","/login",1,"btn","btn-secondary"],[1,"footer"],[1,"container-fluid"],[1,"copyright","float-center"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8),e.TgZ(9,"div",9),e.TgZ(10,"h6"),e._uU(11,"Ingrese su correo"),e.qZA(),e.TgZ(12,"div",10),e._UZ(13,"input",11),e.TgZ(14,"div",12),e.TgZ(15,"span",13),e._UZ(16,"i",14),e.qZA(),e.qZA(),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"div",15),e.TgZ(19,"button",16),e.NdJ("click",function(){return r.send()}),e._uU(20," Enviar "),e.qZA(),e.TgZ(21,"a",17),e._uU(22," Atras "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"footer",18),e.TgZ(24,"div",19),e.TgZ(25,"div",20),e._uU(26," \xa92021 Zona Gamer "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(13),e.Q6J("formControl",r.email))},directives:[s.Fj,s.JJ,s.oH,d.yS],styles:[""]}),o})()},{path:"reset/:token",component:(()=>{class o{constructor(t,r,n,w,A,T){this.fb=t,this.route=r,this.router=n,this.spinner=w,this.toastr=A,this.auth=T,this.type="password",this.icon="fa fa-eye-slash",this.form=t.group({password:new s.NI(null,[s.kI.required,s.kI.minLength(10)]),password_confirm:new s.NI(null,[s.kI.required])}),this.route.params.subscribe(y=>{this.token=y.token})}ngOnInit(){}send(){var t,r;if(!this.form.controls.password.valid)return(null===(t=this.form.controls.password.errors)||void 0===t?void 0:t.required)&&this.toastr.error("Ingrese una contrase\xf1a"),void((null===(r=this.form.controls.password.errors)||void 0===r?void 0:r.minlength)&&this.toastr.error("La contrase\xf1a debe tener al menos 10 caracteres"));this.form.controls.password.value===this.form.controls.password_confirm.value?this.form.valid&&(this.spinner.show(),this.form.value.token=this.token,this.auth.passwordReset(this.form.value).subscribe(n=>{n&&(this.form.reset(),this.toastr.success(n.message),this.router.navigate(["login"])),this.spinner.hide()},n=>{n.error.password&&this.toastr.error(n.error.password),this.spinner.hide()})):this.toastr.error("Las contrase\xf1as no son iguales")}showPassword(){"password"==this.type?(this.type="text",this.icon="fa fa-eye"):(this.type="password",this.icon="fa fa-eye-slash")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(s.qu),e.Y36(d.gz),e.Y36(d.F0),e.Y36(p.t2),e.Y36(c._W),e.Y36(m.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-reset"]],decls:33,vars:5,consts:[[1,"offline-doc"],[1,"page-header","clear-filter"],[1,"page-header-image",2,"background-image","url('../assets/img/background.jpg')"],[1,"content-center"],[1,"col-md-8","ml-auto","mr-auto"],[1,"card"],[1,"card-header"],["src","../../assets/img/logo.png","width","200"],[1,"card-body","row","justify-content-center"],[1,"col-md-8",3,"formGroup","submit"],[1,"input-group"],["placeholder","Nueva contrase\xf1a","formControlName","password",1,"form-control",3,"type"],[1,"input-group-prepend","password",3,"click"],[1,"input-group-text"],[3,"ngClass"],["placeholder","Repita la contrase\xf1a","formControlName","password_confirm",1,"form-control",3,"type"],[1,"form-group"],["type","submit",1,"btn","btn-primary"],["routerLink","/login",1,"btn","btn-secondary"],[1,"footer"],[1,"container-fluid"],[1,"copyright","float-center"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8),e.TgZ(9,"form",9),e.NdJ("submit",function(){return r.send()}),e.TgZ(10,"h6"),e._uU(11,"Ingrese su correo"),e.qZA(),e.TgZ(12,"div",10),e._UZ(13,"input",11),e.TgZ(14,"div",12),e.NdJ("click",function(){return r.showPassword()}),e.TgZ(15,"span",13),e._UZ(16,"i",14),e.qZA(),e.qZA(),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"div",10),e._UZ(19,"input",15),e.TgZ(20,"div",12),e.NdJ("click",function(){return r.showPassword()}),e.TgZ(21,"span",13),e._UZ(22,"i",14),e.qZA(),e.qZA(),e.qZA(),e._UZ(23,"br"),e.TgZ(24,"div",16),e.TgZ(25,"button",17),e._uU(26," Enviar "),e.qZA(),e.TgZ(27,"a",18),e._uU(28," Atras "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"footer",19),e.TgZ(30,"div",20),e.TgZ(31,"div",21),e._uU(32," \xa92021 Zona Gamer "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(9),e.Q6J("formGroup",r.form),e.xp6(4),e.Q6J("type",r.type),e.xp6(3),e.Q6J("ngClass",r.icon),e.xp6(3),e.Q6J("type",r.type),e.xp6(3),e.Q6J("ngClass",r.icon))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,u.mk,d.yS],styles:[""]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(f)],d.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.ez,h,s.u5,s.UX]]}),o})()}}]);