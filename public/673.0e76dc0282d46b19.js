"use strict";(self.webpackChunkcliente_srff=self.webpackChunkcliente_srff||[]).push([[673],{3673:(b,l,r)=>{r.r(l),r.d(l,{AvisosModule:()=>C});var u=r(9808),v=r(9648),g=r(5226),p=r.n(g),t=r(5e3),h=r(4153),Z=r(2290),m=r(8190),d=r(4182);function A(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"input",8),t.NdJ("ngModelChange",function(n){return t.CHM(e).$implicit.title=n}),t.qZA(),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"textarea",9),t.NdJ("ngModelChange",function(n){return t.CHM(e).$implicit.message=n}),t.qZA(),t.qZA(),t.TgZ(5,"td",6),t.TgZ(6,"div",10),t.TgZ(7,"label",11),t.TgZ(8,"input",12),t.NdJ("ngModelChange",function(n){return t.CHM(e).$implicit.active=n}),t.qZA(),t.TgZ(9,"span",13),t._UZ(10,"span",14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"td",15),t.TgZ(12,"button",16),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().update(i)}),t._UZ(13,"i",17),t.qZA(),t.qZA(),t.TgZ(14,"td",15),t.TgZ(15,"button",18),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().test(i)}),t._UZ(16,"i",19),t.qZA(),t.qZA(),t.TgZ(17,"td",15),t.TgZ(18,"button",20),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().destroy(i.id)}),t._UZ(19,"i",21),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=c.$implicit;t.xp6(2),t.Q6J("ngModel",e.title),t.xp6(2),t.Q6J("ngModel",e.message),t.xp6(4),t.Q6J("ngModel",e.active),t.xp6(3),t.Q6J("width",10),t.xp6(3),t.Q6J("width",10),t.xp6(3),t.Q6J("width",10)}}const f=[{path:"",component:(()=>{class s{constructor(e,o,n){this.spinner=e,this.toastr=o,this.avisoService=n,this.avisoService.avisos.subscribe(i=>this.avisos=i),this.avisoService.avisos.value||this.avisoService.index().subscribe(i=>this.avisoService.avisos.next(i))}ngOnInit(){}store(){this.spinner.show(),this.avisoService.store({title:"titulo",message:"mensaje",active:!1}).subscribe(o=>{this.avisos.push(o),this.spinner.hide()},()=>{this.spinner.hide()})}update(e){this.spinner.show(),this.avisoService.update(e,e.id).subscribe(o=>{!0===e.active&&this.avisos.map(n=>{n.active=!1,n.id==e.id&&(n.active=!0)}),this.toastr.success("Guardado"),this.spinner.hide()},()=>{this.spinner.hide()})}destroy(e){this.spinner.show(),this.avisoService.destroy(e).subscribe(o=>{this.avisos=this.avisos.filter(n=>n.id!==e),this.toastr.error("Aviso Eliminado"),this.spinner.hide()},()=>{this.spinner.hide()})}test(e){p().fire({title:e.title,text:e.message})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(h.t2),t.Y36(Z._W),t.Y36(m.M))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-avisos-index"]],decls:23,vars:1,consts:[[1,"card"],[1,"card-header"],["title","Agregar Aviso","type","button",1,"btn","btn-success","btn-round",3,"click"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[1,"text-center"],[4,"ngFor","ngForOf"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["rows","5",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-check"],[1,"form-check-label"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check-sign"],[1,"check"],[1,"text-center",3,"width"],["title","Guardar","type","button",1,"btn","btn-success","btn-round","btn-just-icon","btn-sm",3,"click"],[1,"fa","fa-save"],["title","Probar","type","button",1,"btn","btn-info","btn-round","btn-just-icon","btn-sm",3,"click"],[1,"fa","fa-exclamation-circle"],["title","Eliminar","type","button",1,"btn","btn-default","btn-round","btn-just-icon","btn-sm",3,"click"],[1,"fa","fa-trash-alt"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return o.store()}),t._uU(3," Agregar "),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"table",5),t.TgZ(7,"thead"),t.TgZ(8,"tr"),t.TgZ(9,"th"),t._uU(10,"Titulo"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Mensaje"),t.qZA(),t.TgZ(13,"th",6),t._uU(14,"Activo"),t.qZA(),t.TgZ(15,"th",6),t._uU(16,"Guardar"),t.qZA(),t.TgZ(17,"th",6),t._uU(18,"Probar"),t.qZA(),t.TgZ(19,"th",6),t._uU(20,"Eliminar"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"tbody"),t.YNc(22,A,20,6,"tr",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(22),t.Q6J("ngForOf",o.avisos))},directives:[u.sg,d.Fj,d.JJ,d.On,d.Wl],styles:[""]}),s})()}];let x=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[v.Bz.forChild(f)],v.Bz]}),s})(),C=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[u.ez,x,d.u5,d.UX]]}),s})()}}]);