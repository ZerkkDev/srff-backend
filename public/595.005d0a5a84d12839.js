"use strict";(self.webpackChunkcliente_srff=self.webpackChunkcliente_srff||[]).push([[595],{4595:(T,d,s)=>{s.r(d),s.d(d,{PreciosModule:()=>x});var l=s(9808),g=s(9648),t=s(5e3),u=s(2290),m=s(4153),f=s(5875),a=s(4182);function h(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"input",9),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().$implicit.bonus=r}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("ngModel",e.bonus)}}function Z(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"textarea",14),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().$implicit.bonus=r}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("ngModel",e.bonus)}}function _(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",7),t.TgZ(2,"input",8),t.NdJ("ngModelChange",function(r){return t.CHM(e).$implicit.prepago=r}),t.qZA(),t.qZA(),t.TgZ(3,"td",7),t.TgZ(4,"input",9),t.NdJ("ngModelChange",function(r){return t.CHM(e).$implicit.diamantes=r}),t.qZA(),t.qZA(),t.TgZ(5,"td"),t.YNc(6,h,1,1,"input",10),t.YNc(7,Z,1,1,"textarea",11),t.qZA(),t.TgZ(8,"td",5),t.TgZ(9,"button",12),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().guardar(i)}),t._UZ(10,"i",13),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(1),t.Q6J("width",85),t.xp6(1),t.Q6J("ngModel",e.prepago),t.xp6(1),t.Q6J("width",300),t.xp6(1),t.Q6J("ngModel",e.diamantes),t.xp6(2),t.Q6J("ngIf",!e.tarjeta),t.xp6(1),t.Q6J("ngIf",e.tarjeta)}}const C=[{path:"",component:(()=>{class n{constructor(e,c,r){this.toastr=e,this.spinner=c,this.precioService=r,this.precioService.precios.subscribe(i=>{i?this.precios=i:this.precioService.preciosActivos().subscribe(p=>this.precioService.precios.next(p))})}ngOnInit(){}guardar(e){this.spinner.show(),this.precioService.update(e,e.id_precio).subscribe(c=>{this.toastr.success("Guardado"),this.spinner.hide()},()=>this.spinner.hide())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u._W),t.Y36(m.t2),t.Y36(f.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-precios"]],decls:16,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[1,"text-center"],[4,"ngFor","ngForOf"],[3,"width"],["type","number","min","0","step","0.01",1,"form-control",3,"ngModel","ngModelChange"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","text","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],["rows","5","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],["type","button",1,"btn","btn-just-icon","btn-round","btn-success","btn-sm",3,"click"],[1,"fa","fa-save"],["rows","5",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"table",4),t.TgZ(5,"thead"),t.TgZ(6,"th"),t._uU(7,"Precio"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Diamantes"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Bonus"),t.qZA(),t.TgZ(12,"th",5),t._uU(13,"Guardar"),t.qZA(),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,_,11,6,"tr",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(15),t.Q6J("ngForOf",c.precios))},directives:[l.sg,a.qQ,a.wV,a.Fj,a.JJ,a.On,l.O5],styles:[""]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(C)],g.Bz]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,M,a.u5,a.UX]]}),n})()}}]);