"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[613],{29613:(f,i,t)=>{t.r(i),t.d(i,{NewComponent:()=>m});var g=t(10467),r=t(88834),y=t(74862),e=t(93953),h=t(34635);let m=(()=>{class o{constructor(n){this.identityService=n}ngOnInit(){}createAccount(){var n=this;return(0,g.A)(function*(){console.log("Creating agents...");const{web5:l,did:v}=yield y.uW.connect({sync:"5s",recoveryPhrase:"rubber fresh pluck lion upper length scene spawn fruit place spin glare"});console.log(v),console.log(l);const E=yield l.agent.agentDid.export();console.log(E);const d=l.agent,p=yield d.identity.list();console.log(p);const c=p[0];console.log(c.metadata),c.metadata.name="John Doe";const _=yield c.export();console.log("DIDS:"),console.log(_);const u=yield d.agentDid.export();console.log(u),console.log(JSON.stringify(_.portableDid)),console.log(JSON.stringify(u)),console.log("Agents created."),console.log(n.identityService.agents()),console.log(yield n.identityService.agents()[0].identity.list()),console.log(yield n.identityService.agents()[1].identity.list())})()}static#e=this.\u0275fac=function(s){return new(s||o)(e.rXU(h.K))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["app-new"]],standalone:!0,features:[e.aNF],decls:5,vars:0,consts:[["mat-flat-button","",3,"click"]],template:function(s,a){1&s&&(e.j41(0,"h1"),e.EFF(1,"Create new account"),e.k0s(),e.j41(2,"p")(3,"button",0),e.bIt("click",function(){return a.createAccount()}),e.EFF(4,"Create account"),e.k0s()())},dependencies:[r.Hl,r.$z]})}return o})()}}]);