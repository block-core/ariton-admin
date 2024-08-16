"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[474],{53474:(I,d,n)=>{n.r(d),n.d(d,{DataViewComponent:()=>f});var s=n(10467),e=n(93953),m=n(99213),u=n(96850),v=n(88834),c=n(3902),E=n(60177),l=n(18498),h=n(34635);const y=a=>["view",a];function g(a,_){if(1&a&&(e.j41(0,"div"),e.EFF(1," Data: "),e.nrm(2,"br"),e.EFF(3),e.k0s()),2&a){const t=e.XpG(2);e.R7$(3),e.SpI(" ",t.recordData()," ")}}function F(a,_){if(1&a&&(e.j41(0,"div"),e.EFF(1," Data: "),e.nrm(2,"br"),e.EFF(3),e.k0s()),2&a){const t=e.XpG(2);e.R7$(3),e.SpI(" ",t.recordData()," ")}}function D(a,_){if(1&a&&(e.j41(0,"div",0)(1,"span",1),e.EFF(2,"ID: "),e.j41(3,"a",2),e.EFF(4),e.k0s()(),e.j41(5,"span"),e.EFF(6),e.nrm(7,"br"),e.EFF(8),e.nrm(9,"br"),e.EFF(10),e.nrm(11,"br"),e.EFF(12),e.nrm(13,"br"),e.EFF(14),e.nrm(15,"br"),e.EFF(16),e.nrm(17,"br"),e.k0s()(),e.DNE(18,g,4,1,"div")(19,F,4,1,"div")),2&a){const t=e.XpG();e.R7$(3),e.Y8G("routerLink",e.eq3(10,y,t.record().id)),e.R7$(),e.JRh(t.record().id),e.R7$(2),e.SpI("Author: ",t.record().author,""),e.R7$(2),e.SpI(" Format: ",t.record().dataFormat,""),e.R7$(2),e.SpI(" Size: ",t.record().dataSize,""),e.R7$(2),e.SpI(" Created: ",t.record().dateCreated,""),e.R7$(2),e.SpI(" Published: ",t.record().published,""),e.R7$(2),e.SpI(" Date Published: ",t.record().datePublished,""),e.R7$(2),e.vxM("text/plain"==t.record().dataFormat?18:-1),e.R7$(),e.vxM("application/json"==t.record().dataFormat?19:-1)}}let f=(()=>{class a{constructor(t,r){this.identityService=t,this.route=r,this.record=(0,e.vPA)(null),this.records=(0,e.vPA)([]),this.recordId="",this.recordData=(0,e.vPA)(""),(0,e.QZP)(()=>{console.log("WEB5 INITIALIZED!!! ",this.identityService.initialized()),this.openRecord(this.recordId)}),this.route.params.subscribe(o=>{const i=o.id;this.recordId=i,this.openRecord(i)})}openRecord(t){var r=this;return(0,s.A)(function*(){if(!t||!r.identityService.initialized())return;const{record:o}=yield r.identityService.web5.dwn.records.read({message:{filter:{recordId:t}}});if(r.record.set(o),console.log(o),console.log(o.dataFormat),"application/json"===o.dataFormat){var i=yield o.data.json();console.log(i),r.recordData.set(JSON.stringify(i,null,2))}else if("text/plain"===o.dataFormat){var p=yield o.data.text();console.log(p),r.recordData.set(p)}})()}load(){var t=this;return(0,s.A)(function*(){const{protocols:r}=yield t.identityService.web5.dwn.protocols.query({message:{filter:{protocol:"https://music.org/protocol"}}});console.log(r);var{records:i}=yield t.identityService.web5.dwn.records.query({message:{filter:{dataFormat:"application/json"}}});console.log("All records:"),console.log(i),i&&t.records.set(i);var{records:i}=yield t.identityService.web5.dwn.records.query({from:t.identityService.did,message:{filter:{schema:"https://schema.org/Playlist",dataFormat:"application/json"}}});console.log(i);const o=yield t.identityService.web5.dwn.records.query({message:{filter:{parentId:"bafyreianzpmhbgcgam5mys722vnsiuwn7y4ek6kjeyjptttquasw4hge2m"}}});console.log(o.records);var{records:i}=yield t.identityService.web5.dwn.records.query({message:{filter:{protocol:"https://playlist.org/protocol",protocolPath:"playlist/video"}}});console.log(i)})()}createRecord(t){var r=this;return(0,s.A)(function*(){var{record:o}=yield r.identityService.web5.dwn.records.create({data:{content:"Hello Web5",description:"Keep Building!",tags:["web5","ariton","did"]},message:{dataFormat:"application/json",published:t}});console.log(o);var{record:o}=yield r.identityService.web5.dwn.records.create({data:"this record will be written to the local DWN",message:{dataFormat:"text/plain"}});console.log(o)})()}updateRecord(){return(0,s.A)(function*(){})()}static#e=this.\u0275fac=function(r){return new(r||a)(e.rXU(h.K),e.rXU(l.nX))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-data-view"]],standalone:!0,features:[e.aNF],decls:2,vars:1,consts:[[1,"record-line"],["matListItemTitle",""],[3,"routerLink"]],template:function(r,o){1&r&&(e.nrm(0,"br"),e.DNE(1,D,20,12)),2&r&&(e.R7$(),e.vxM(o.record()?1:-1))},dependencies:[l.Wk,E.MD,u.RI,m.m_,v.Hl,c.Fg,c.yE],styles:[".record-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #e0e0e0}"]})}return a})()}}]);