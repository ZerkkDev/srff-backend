"use strict";(self.webpackChunkcliente_srff=self.webpackChunkcliente_srff||[]).push([[823],{5823:(y,l,i)=>{i.r(l),i.d(l,{LoginModule:()=>h});var g=i(9808),a=i(9648),e=i(4182),o=i(5e3),p=i(4153),d=i(2290),m=i(8338);const c=[{path:"",component:(()=>{class t{constructor(n,r,u,f,v){this.fb=n,this.router=r,this.spinner=u,this.toastr=f,this.auth=v,this.type="password",this.icon="fa fa-eye-slash",this.loginForm=this.fb.group({email:new e.NI(null,[e.kI.required,e.kI.email]),password:new e.NI(null,[e.kI.required])})}ngOnInit(){}login(){this.loginForm.valid&&(this.spinner.show(),this.auth.auth(this.loginForm.value).subscribe(n=>{localStorage.setItem("token",n.token),this.auth.usuario.next(n.usuario),this.router.navigate(["app"]),this.spinner.hide()},n=>{n.error.auth&&this.toastr.error(n.error.auth),this.spinner.hide()}))}showPassword(){"password"==this.type?(this.type="text",this.icon="fa fa-eye"):(this.type="password",this.icon="fa fa-eye-slash")}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(e.qu),o.Y36(a.F0),o.Y36(p.t2),o.Y36(d._W),o.Y36(m.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:34,vars:3,consts:[[1,"offline-doc"],[1,"page-header","clear-filter"],[1,"page-header-image",2,"background-image","url('../assets/img/background.jpg')"],[1,"content-center"],[1,"col-sm-8","ml-auto","mr-auto"],[1,"card"],[1,"card-header"],["src","../../assets/img/logo.png","width","200"],[1,"card-body","row","justify-content-center"],[1,"col-md-8",3,"formGroup","submit"],[1,"input-group"],["type","email","placeholder","Correo","formControlName","email","name","email",1,"form-control"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-envelope"],["placeholder","Contrase\xf1a","formControlName","password","name","password",1,"form-control",3,"type"],[1,"input-group-prepend","password",3,"click"],[3,"ngClass"],[1,"form-group"],["type","submit",1,"btn","btn-primary"],["type","button","routerLink","/home",1,"btn","btn-secondary"],["routerLink","/password"],[1,"footer"],[1,"container-fluid"],[1,"copyright","float-center"]],template:function(n,r){1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o._UZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"div",5),o.TgZ(6,"div",6),o._UZ(7,"img",7),o.qZA(),o.TgZ(8,"div",8),o.TgZ(9,"form",9),o.NdJ("submit",function(){return r.login()}),o.TgZ(10,"div",10),o._UZ(11,"input",11),o.TgZ(12,"div",12),o.TgZ(13,"span",13),o._UZ(14,"i",14),o.qZA(),o.qZA(),o.qZA(),o._UZ(15,"br"),o.TgZ(16,"div",10),o._UZ(17,"input",15),o.TgZ(18,"div",16),o.NdJ("click",function(){return r.showPassword()}),o.TgZ(19,"span",13),o._UZ(20,"i",17),o.qZA(),o.qZA(),o.qZA(),o._UZ(21,"br"),o.TgZ(22,"div",18),o.TgZ(23,"button",19),o._uU(24," Entrar "),o.qZA(),o.TgZ(25,"button",20),o._uU(26," Atras "),o.qZA(),o.qZA(),o._UZ(27,"br"),o.TgZ(28,"a",21),o._uU(29,"Olvide mi contrase\xf1a"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(30,"footer",22),o.TgZ(31,"div",23),o.TgZ(32,"div",24),o._uU(33," \xa92021 Zona Gamer "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.xp6(9),o.Q6J("formGroup",r.loginForm),o.xp6(8),o.Q6J("type",r.type),o.xp6(3),o.Q6J("ngClass",r.icon))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,g.mk,a.rH,a.yS],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.Bz.forChild(c)],a.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[g.ez,Z,e.u5,e.UX]]}),t})()}}]);