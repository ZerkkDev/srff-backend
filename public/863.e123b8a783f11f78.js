"use strict";(self.webpackChunkcliente_srff=self.webpackChunkcliente_srff||[]).push([[863],{4863:(U,u,n)=>{n.r(u),n.d(u,{ContabilidadModule:()=>b});var s=n(9808),c=n(9648),e=n(4182),Z=n(1954),t=n(5e3),p=n(4153),g=n(8338),h=n(9089),m=n(7870);function f(i,d){if(1&i&&(t.TgZ(0,"option",14),t._uU(1),t.qZA()),2&i){const o=d.$implicit;t.Q6J("value",o.id_usuario),t.xp6(1),t.hij(" ",o.nombre," ")}}function v(i,d){if(1&i&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"label"),t._uU(3,"Empleado"),t.qZA(),t.TgZ(4,"select",12),t.YNc(5,f,2,2,"option",13),t.qZA(),t.qZA(),t.qZA()),2&i){const o=t.oxw();t.xp6(4),t.Q6J("formControl",o.id_usuario),t.xp6(1),t.Q6J("ngForOf",o.empleados)}}function T(i,d){if(1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.qZA()),2&i){const o=d.$implicit;t.xp6(2),t.Oqu(o.prepago),t.xp6(2),t.Oqu(o.diamantes),t.xp6(2),t.Oqu(o.cantidad),t.xp6(2),t.Oqu(o.total)}}const C=[{path:"",component:(()=>{class i{constructor(o,a,r,q,y){this.datePipe=o,this.spinner=a,this.auth=r,this.usuarioService=q,this.recargaService=y,this.usuarioService.empleados().subscribe(l=>{this.empleados=l}),this.auth.usuario.subscribe(l=>this.usuario=l),this.dia=new e.NI(null,e.kI.required),this.id_usuario=new e.NI(null)}ngOnInit(){}validateDates(){let o=new Date(this.dia.value),a=new Date(this.dia.value);return o=(0,Z.Z)(o,1),a=(0,Z.Z)(a,2),{desde:this.datePipe.transform(o,"yyyy-MM-dd"),hasta:this.datePipe.transform(a,"yyyy-MM-dd"),id_usuario:this.id_usuario.value}}consultar(){if(this.dia.valid){this.spinner.show();let o=this.validateDates();this.recargaService.contabilidad(o).subscribe(a=>{this.precios=a,this.total=0,this.precios.forEach(r=>{this.total+=r.total}),this.total=+this.total.toFixed(2),this.spinner.hide()},()=>this.spinner.hide())}}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(s.uU),t.Y36(p.t2),t.Y36(g.e),t.Y36(h.K),t.Y36(m.E))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-contabilidad"]],decls:33,vars:4,consts:[[1,"card"],[1,"card-header"],[1,"row"],[1,"col-md-3"],[1,"form-group"],["type","date",1,"form-control",3,"formControl"],["class","col-md-3",4,"ngIf"],["type","button",1,"btn","btn-round","btn-primary",3,"click"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"form-control",2,"background-color","#202940",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"label"),t._uU(6,"Dia"),t.qZA(),t._UZ(7,"input",5),t.qZA(),t.qZA(),t.YNc(8,v,6,2,"div",6),t.TgZ(9,"div",3),t.TgZ(10,"button",7),t.NdJ("click",function(){return a.consultar()}),t._uU(11,"Consultar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",8),t.TgZ(13,"div",9),t.TgZ(14,"table",10),t.TgZ(15,"thead"),t.TgZ(16,"th"),t._uU(17,"Precio"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Diamantes"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Cantidad"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Total"),t.qZA(),t.qZA(),t.TgZ(24,"tbody"),t.YNc(25,T,9,4,"tr",11),t.qZA(),t.TgZ(26,"tfoot"),t._UZ(27,"td"),t._UZ(28,"td"),t.TgZ(29,"td"),t._uU(30,"Total"),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(7),t.Q6J("formControl",a.dia),t.xp6(1),t.Q6J("ngIf",1==(null==a.usuario?null:a.usuario.id_tipo)),t.xp6(17),t.Q6J("ngForOf",a.precios),t.xp6(7),t.Oqu(a.total))},directives:[e.Fj,e.JJ,e.oH,s.O5,e.EJ,s.sg,e.YN,e.Kr],styles:[""]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.Bz.forChild(C)],c.Bz]}),i})(),b=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[s.uU],imports:[[s.ez,A,e.u5,e.UX]]}),i})()}}]);