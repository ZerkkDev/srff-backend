"use strict";(self.webpackChunkcliente_srff=self.webpackChunkcliente_srff||[]).push([[481],{7481:(y,g,p)=>{p.r(g),p.d(g,{UsersModule:()=>k});var c=p(9808),h=p(9648),r=p(4182),t=p(5e3),Z=p(2290),m=p(4153),f=p(9089),a=p(520),d=p(591),_=p(2340);let b=(()=>{class i{constructor(e){this.http=e,this.base=_.N.base,this.tipos=new d.X(null)}options(){return{headers:new a.WM({Authorization:"Bearer "+localStorage.getItem("token")})}}index(){return this.http.get(this.base+"tipo",this.options())}store(e){return this.http.post(this.base+"tipo",e,this.options())}show(e){return this.http.get(this.base+"tipo/"+e,this.options())}update(e,o){return this.http.put(this.base+"tipo/"+o,e,this.options())}destroy(e){return this.http.delete(this.base+"tipo/"+e,this.options())}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(a.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),T=(()=>{class i{constructor(e){this.http=e,this.base=_.N.base,this.groups=new d.X(null)}options(){return{headers:new a.WM({Authorization:"Bearer "+localStorage.getItem("token")})}}index(){return this.http.get(this.base+"group",this.options())}store(e){return this.http.post(this.base+"group",e,this.options())}show(e){return this.http.get(this.base+"group/"+e,this.options())}update(e,o){return this.http.put(this.base+"group/"+o,e,this.options())}destroy(e){return this.http.delete(this.base+"group/"+e,this.options())}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(a.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function v(i,n){if(1&i&&(t.TgZ(0,"option",19),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",t.lcZ(2,2,e.nombre)," ")}}function x(i,n){if(1&i&&(t.TgZ(0,"option",19),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.id_tipo),t.xp6(1),t.hij(" ",t.lcZ(2,2,e.nombre)," ")}}function A(i,n){if(1&i&&(t.TgZ(0,"option",19),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",t.lcZ(2,2,e.nombre)," ")}}function C(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",23),t.TgZ(12,"input",24),t.NdJ("ngModelChange",function(s){return t.CHM(e).$implicit.saldo=s}),t.qZA(),t.qZA(),t.TgZ(13,"td",23),t.TgZ(14,"select",25),t.NdJ("ngModelChange",function(s){return t.CHM(e).$implicit.id_tipo=s}),t.YNc(15,x,3,4,"option",12),t.qZA(),t.qZA(),t.TgZ(16,"td",23),t.TgZ(17,"select",25),t.NdJ("ngModelChange",function(s){return t.CHM(e).$implicit.id_group=s}),t.TgZ(18,"option",19),t._uU(19,"Sin grupo"),t.qZA(),t.YNc(20,A,3,4,"option",12),t.qZA(),t.qZA(),t.TgZ(21,"td",21),t.TgZ(22,"div",26),t.TgZ(23,"label",27),t.TgZ(24,"input",28),t.NdJ("ngModelChange",function(s){return t.CHM(e).$implicit.activo=s}),t.qZA(),t.TgZ(25,"span",29),t._UZ(26,"span",30),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"td",21),t.TgZ(28,"button",31),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw(2).guardar(u)}),t._UZ(29,"i",32),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=n.$implicit,o=t.oxw(2);t.xp6(2),t.Oqu(e.cedula_ruc),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.correo),t.xp6(2),t.Oqu(e.telefono),t.xp6(2),t.Oqu(e.direccion),t.xp6(1),t.Q6J("width",85),t.xp6(1),t.Q6J("ngModel",e.saldo),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("ngModel",e.id_tipo),t.xp6(1),t.Q6J("ngForOf",o.tipos),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("ngModel",e.id_group),t.xp6(1),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",o.groups),t.xp6(4),t.Q6J("ngModel",e.activo)}}function q(i,n){if(1&i&&(t.TgZ(0,"table",20),t.TgZ(1,"thead"),t.TgZ(2,"th"),t._uU(3,"C\xe9dula"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Nombre"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Correo"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Telefono"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Direcci\xf3n"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Saldo"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Tipo"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Grupo"),t.qZA(),t.TgZ(18,"th",21),t._uU(19,"Activo"),t.qZA(),t.TgZ(20,"th",21),t._uU(21,"Guardar"),t.qZA(),t.qZA(),t.TgZ(22,"tbody"),t.YNc(23,C,30,15,"tr",22),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(23),t.Q6J("ngForOf",null==e.page?null:e.page.data)}}function U(i,n){if(1&i&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.label)}}function J(i,n){if(1&i&&t._UZ(0,"i"),2&i){const e=t.oxw().$implicit;t.Tol(e.icon)}}function M(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"li"),t.TgZ(1,"button",35),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw(2).paginate(u.url)}),t.YNc(2,U,2,1,"div",18),t.YNc(3,J,1,2,"i",39),t.qZA(),t.qZA()}if(2&i){const e=n.$implicit;t.MT6("page-item ",e.active?"active":""," ",e.url?"":"disabled",""),t.xp6(2),t.Q6J("ngIf",!e.icon),t.xp6(1),t.Q6J("ngIf",e.icon)}}function w(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"nav"),t.TgZ(1,"ul",33),t.TgZ(2,"li",34),t.TgZ(3,"button",35),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return s.paginate(null==s.page?null:s.page.first_page_url)}),t._UZ(4,"i",36),t.qZA(),t.qZA(),t.YNc(5,M,4,6,"li",37),t.TgZ(6,"li",34),t.TgZ(7,"button",35),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return s.paginate(null==s.page?null:s.page.last_page_url)}),t._UZ(8,"i",38),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",null==e.page?null:e.page.links)}}const N=[{path:"",component:(()=>{class i{constructor(e,o,s,u,l){this.toastr=e,this.spinner=o,this.userService=s,this.tiposService=u,this.groupService=l,this.initTipos(),this.initGroups(),this.userService.page.subscribe(L=>this.page=L),this.nombre=new r.NI(null,r.kI.required),this.id_group=new r.NI(null,r.kI.required)}ngOnInit(){}initTipos(){this.tiposService.tipos.value||this.tiposService.index().subscribe(e=>this.tiposService.tipos.next(e)),this.tiposService.tipos.subscribe(e=>this.tipos=e)}initGroups(){this.groupService.groups.value||this.groupService.index().subscribe(e=>this.groupService.groups.next(e)),this.groupService.groups.subscribe(e=>this.groups=e)}showByNombre(){this.id_group.reset(),this.nombre.valid&&(this.request={nombre:this.nombre.value},this.spinner.show(),this.userService.showByNombre(this.request).subscribe(e=>{this.setPage(e),this.spinner.hide()},()=>this.spinner.hide()))}showByGroup(){this.nombre.reset(),this.id_group.valid&&(this.request={id_group:this.id_group.value},this.spinner.show(),this.userService.showByGroup(this.request).subscribe(e=>{this.setPage(e),this.spinner.hide()},()=>this.spinner.hide()))}paginate(e){this.spinner.show(),this.userService.paginate(e,this.request).subscribe(o=>{this.setPage(o),this.spinner.hide()},()=>this.spinner.hide())}setPage(e){e&&(e.links[0].icon="fa fa-angle-left",e.links[e.links.length-1].icon="fa fa-angle-right",this.userService.page.next(e))}guardar(e){"null"==e.id_group&&(e.id_group=null),this.spinner.show(),this.userService.update(e,e.id_usuario).subscribe(()=>{this.toastr.success("Guardado"),this.spinner.hide()},()=>this.spinner.hide())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z._W),t.Y36(m.t2),t.Y36(f.K),t.Y36(b),t.Y36(T))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list"]],decls:23,vars:5,consts:[[1,"card"],[1,"card-header"],[1,"row"],[1,"col-md-4","col-xxl-3","row","align-items-center"],[1,"input-group","ml-3",3,"submit"],["type","text","placeholder","Nombre",1,"form-control",3,"formControl"],[1,"input-group-prepend"],["type","submit",1,"btn","btn-just-icon","btn-sm","btn-primary"],[1,"fa","fa-search"],[1,"col-md-3","col-xxl-2"],[1,"form-group"],[1,"form-control",2,"background-color","#202940",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-2","col-xxl-2","row","align-items-center"],["type","button",1,"btn","btn-round","btn-primary",3,"click"],[1,"card-body"],[1,"table-responsive"],["class","table",4,"ngIf"],[4,"ngIf"],[3,"value"],[1,"table"],[1,"text-center"],[4,"ngFor","ngForOf"],[3,"width"],["type","number","min","0","step","0.01",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-control",2,"background-color","#202940",3,"ngModel","ngModelChange"],[1,"form-check","mt-3"],[1,"form-check-label"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check-sign"],[1,"check"],["type","button",1,"btn","btn-just-icon","btn-round","btn-success","btn-sm",3,"click"],[1,"fa","fa-save"],[1,"pagination"],[1,"page-item"],[1,"page-link",3,"click"],[1,"fa","fa-angle-double-left"],[3,"class",4,"ngFor","ngForOf"],[1,"fa","fa-angle-double-right"],[3,"class",4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"form",4),t.NdJ("submit",function(){return o.showByNombre()}),t._UZ(5,"input",5),t.TgZ(6,"div",6),t.TgZ(7,"button",7),t._UZ(8,"i",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(9,"div",9),t.TgZ(10,"div",9),t.TgZ(11,"div",10),t.TgZ(12,"label"),t._uU(13,"Filtrar por grupo"),t.qZA(),t.TgZ(14,"select",11),t.YNc(15,v,3,4,"option",12),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",13),t.TgZ(17,"button",14),t.NdJ("click",function(){return o.showByGroup()}),t._uU(18," Buscar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",15),t.TgZ(20,"div",16),t.YNc(21,q,24,1,"table",17),t.YNc(22,w,9,1,"nav",18),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("formControl",o.nombre),t.xp6(9),t.Q6J("formControl",o.id_group),t.xp6(1),t.Q6J("ngForOf",o.groups),t.xp6(6),t.Q6J("ngIf",o.page),t.xp6(1),t.Q6J("ngIf",null==o.page?null:o.page.links))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.oH,r.EJ,c.sg,r.YN,r.Kr,c.O5,r.qQ,r.wV,r.On,r.Wl],pipes:[c.rS],styles:[""]}),i})()}];let S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[h.Bz.forChild(N)],h.Bz]}),i})(),k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,S,r.u5,r.UX]]}),i})()}}]);