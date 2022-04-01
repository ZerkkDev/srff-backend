"use strict";(self.webpackChunkcliente_srff=self.webpackChunkcliente_srff||[]).push([[469],{2469:(J,b,n)=>{n.r(b),n.d(b,{RegisterModule:()=>N});var f=n(9808),u=n(9648),e=n(5e3),C=n(4153),y=n(2290),_=n(8338);function I(o,s){1&o&&e._UZ(0,"img",17)}let U=(()=>{class o{constructor(t,i,a,d){this.route=t,this.spinner=i,this.toastr=a,this.auth=d,this.text="Confirmando...",this.route.params.subscribe(c=>{c.token&&(this.spinner.show(),this.auth.confirmacion({token:c.token}).subscribe(l=>{l.message&&(this.toastr.success(l.message),this.text="Cuenta Activada"),this.spinner.hide()},l=>{l.error&&(this.text=l.error),this.spinner.hide()}))})}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gz),e.Y36(C.t2),e.Y36(y._W),e.Y36(_.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-confirmacion"]],decls:25,vars:2,consts:[[1,"offline-doc"],[1,"page-header","clear-filter"],[1,"page-header-image",2,"background-image","url('../assets/img/background.jpg')"],[1,"content-center"],[1,"col-md-8","ml-auto","mr-auto"],[1,"card"],[1,"card-header"],["src","../../assets/img/logo.png","width","200"],[1,"card-body","row","justify-content-center"],[1,"col-md-8"],["src","../../../assets/img/check.png","width","100px",4,"ngIf"],[1,"form-group"],["routerLink","/login",1,"btn","btn-success"],["routerLink","/home",1,"btn","btn-secondary"],[1,"footer"],[1,"container-fluid"],[1,"copyright","float-center"],["src","../../../assets/img/check.png","width","100px"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8),e.TgZ(9,"div",9),e.TgZ(10,"h3"),e._uU(11),e.qZA(),e.YNc(12,I,1,0,"img",10),e._UZ(13,"br"),e._UZ(14,"br"),e._UZ(15,"br"),e.TgZ(16,"div",11),e.TgZ(17,"a",12),e._uU(18," Iniciar Sesi\xf3n "),e.qZA(),e.TgZ(19,"a",13),e._uU(20," Atras "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"footer",14),e.TgZ(22,"div",15),e.TgZ(23,"div",16),e._uU(24," \xa92021 Zona Gamer "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(11),e.Oqu(i.text),e.xp6(1),e.Q6J("ngIf","Cuenta Activada"==i.text))},directives:[f.O5,u.yS],styles:[""]}),o})();var r=n(4182),k=n(5226),w=n.n(k);const R=[{path:"",component:(()=>{class o{constructor(t,i,a,d){this.fb=t,this.spinner=i,this.toastr=a,this.auth=d,this.type="password",this.icon="fa fa-eye-slash",this.form=this.fb.group({nombre:new r.NI(null,[r.kI.required]),cedula_ruc:new r.NI(null,[r.kI.required,r.kI.minLength(10),r.kI.maxLength(13),r.kI.pattern("^[0-9]*$")]),telefono:new r.NI(null,[r.kI.required,r.kI.minLength(10),r.kI.maxLength(10),r.kI.pattern("^[0-9]*$")]),direccion:new r.NI(null,[r.kI.required]),correo:new r.NI(null,[r.kI.required,r.kI.email]),contrasenia:new r.NI(null,[r.kI.required,r.kI.minLength(10)]),confirmacion:new r.NI(null,[r.kI.required])})}ngOnInit(){}register(){var t,i,a,d,c,l,g,Z,h,p,v,q,A,T;if(this.form.controls.nombre.valid){if(!this.form.controls.cedula_ruc.valid)return(null===(i=this.form.controls.cedula_ruc.errors)||void 0===i?void 0:i.required)&&this.toastr.error("Ingrese su c\xe9dula o Ruc"),(null===(a=this.form.controls.cedula_ruc.errors)||void 0===a?void 0:a.minlength)&&this.toastr.error("La c\xe9dula debe tener al menos 10 n\xfameros"),(null===(d=this.form.controls.cedula_ruc.errors)||void 0===d?void 0:d.maxlength)&&this.toastr.error("La c\xe9dula no debe tener m\xe1s de 13 n\xfameros"),void((null===(c=this.form.controls.cedula_ruc.errors)||void 0===c?void 0:c.pattern)&&this.toastr.error("C\xe9dula no valida"));if(!this.form.controls.telefono.valid)return(null===(l=this.form.controls.telefono.errors)||void 0===l?void 0:l.required)&&this.toastr.error("Ingrese su n\xfamero de telefono"),(null===(g=this.form.controls.telefono.errors)||void 0===g?void 0:g.minlength)&&this.toastr.error("El telefono debe tener al menos 10 n\xfameros"),(null===(Z=this.form.controls.telefono.errors)||void 0===Z?void 0:Z.maxlength)&&this.toastr.error("El telefono no debe tener m\xe1s de 10 n\xfameros"),void((null===(h=this.form.controls.telefono.errors)||void 0===h?void 0:h.pattern)&&this.toastr.error("Tel\xe9fono no valida"));if(this.form.controls.direccion.valid)return this.form.controls.correo.valid?this.form.controls.contrasenia.valid?void(this.form.controls.contrasenia.value===this.form.controls.confirmacion.value?this.form.valid&&(this.spinner.show(),this.auth.register(this.form.value).subscribe(m=>{m.message&&w().fire({icon:"success",title:"Cuenta Creada",text:"Revise su correo en la bandeja de entrada o Spam"}),this.form.reset(),this.spinner.hide()},m=>{m.error.register&&this.toastr.error(m.error.register),this.spinner.hide()})):this.toastr.error("Las contrase\xf1as no son iguales")):((null===(A=this.form.controls.contrasenia.errors)||void 0===A?void 0:A.required)&&this.toastr.error("Ingrese una contrase\xf1a"),void((null===(T=this.form.controls.contrasenia.errors)||void 0===T?void 0:T.minlength)&&this.toastr.error("La contrase\xf1a debe tener al menos 10 caracteres"))):((null===(v=this.form.controls.correo.errors)||void 0===v?void 0:v.required)&&this.toastr.error("Ingrese su correo"),void((null===(q=this.form.controls.correo.errors)||void 0===q?void 0:q.pattern)&&this.toastr.error("Correo no valido")));(null===(p=this.form.controls.direccion.errors)||void 0===p?void 0:p.required)&&this.toastr.error("Ingrese su ciudad")}else(null===(t=this.form.controls.nombre.errors)||void 0===t?void 0:t.required)&&this.toastr.error("Ingrese su nombre")}showPassword(){"password"==this.type?(this.type="text",this.icon="fa fa-eye"):(this.type="password",this.icon="fa fa-eye-slash")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(C.t2),e.Y36(y._W),e.Y36(_.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],decls:57,vars:5,consts:[[1,"offline-doc"],[1,"page-header"],[1,"page-header-image",2,"background-image","url('../assets/img/background.jpg')"],[1,"content-center"],[1,"col-md-9","ml-auto","mr-auto"],[1,"card"],[1,"card-header"],["src","../../assets/img/logo.png","width","175"],[1,"card-body","text-left"],[1,"row",3,"formGroup","submit"],[1,"col-md-6"],[1,"form-group"],["type","text","name","name","formControlName","nombre","required","",1,"form-control"],[1,"col-md-3"],["type","text","name","cedula","formControlName","cedula_ruc","required","",1,"form-control"],["type","text","name","telefono","formControlName","telefono","required","",1,"form-control"],[1,"col-md-8"],["type","email","name","email","formControlName","correo","required","",1,"form-control"],[1,"col-md-4"],["type","text","name","ciudad","formControlName","direccion","required","",1,"form-control"],[1,"mt-3","mb-2"],[1,"input-group"],["formControlName","contrasenia","name","password",1,"form-control",3,"type"],[1,"input-group-prepend","password",3,"click"],[1,"input-group-text"],[3,"ngClass"],["formControlName","confirmacion","name","password",1,"form-control",3,"type"],[1,"col-md-12"],[1,"form-group","text-center"],["type","submit",1,"btn","btn-primary"],["type","button","routerLink","/home",1,"btn","btn-secondary"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8),e.TgZ(9,"form",9),e.NdJ("submit",function(){return i.register()}),e.TgZ(10,"div",10),e.TgZ(11,"div",11),e.TgZ(12,"label"),e._uU(13,"Nombre y Apellido"),e.qZA(),e._UZ(14,"input",12),e.qZA(),e.qZA(),e.TgZ(15,"div",13),e.TgZ(16,"div",11),e.TgZ(17,"label"),e._uU(18,"C\xe9dula / RUC"),e.qZA(),e._UZ(19,"input",14),e.qZA(),e.qZA(),e.TgZ(20,"div",13),e.TgZ(21,"div",11),e.TgZ(22,"label"),e._uU(23,"Tel\xe9fono"),e.qZA(),e._UZ(24,"input",15),e.qZA(),e.qZA(),e.TgZ(25,"div",16),e.TgZ(26,"div",11),e.TgZ(27,"label"),e._uU(28,"Correo "),e.qZA(),e._UZ(29,"input",17),e.qZA(),e.qZA(),e.TgZ(30,"div",18),e.TgZ(31,"div",11),e.TgZ(32,"label"),e._uU(33,"Ciudad"),e.qZA(),e._UZ(34,"input",19),e.qZA(),e.qZA(),e.TgZ(35,"div",10),e.TgZ(36,"div",20),e._uU(37,"Contrase\xf1a"),e.qZA(),e.TgZ(38,"div",21),e._UZ(39,"input",22),e.TgZ(40,"div",23),e.NdJ("click",function(){return i.showPassword()}),e.TgZ(41,"span",24),e._UZ(42,"i",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(43,"div",10),e.TgZ(44,"div",20),e._uU(45,"Repita la contrase\xf1a"),e.qZA(),e.TgZ(46,"div",21),e._UZ(47,"input",26),e.TgZ(48,"div",23),e.NdJ("click",function(){return i.showPassword()}),e.TgZ(49,"span",24),e._UZ(50,"i",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",27),e.TgZ(52,"div",28),e.TgZ(53,"button",29),e._uU(54," Registrase "),e.qZA(),e.TgZ(55,"button",30),e._uU(56," Atras "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(9),e.Q6J("formGroup",i.form),e.xp6(30),e.Q6J("type",i.type),e.xp6(3),e.Q6J("ngClass",i.icon),e.xp6(5),e.Q6J("type",i.type),e.xp6(3),e.Q6J("ngClass",i.icon))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,f.mk,u.rH],styles:[""]}),o})()},{path:"confirmacion/:token",component:U}];let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(R)],u.Bz]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.ez,x,r.u5,r.UX]]}),o})()}}]);