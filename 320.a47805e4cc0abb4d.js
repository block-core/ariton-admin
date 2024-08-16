"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[320],{62320:(R,m,a)=>{a.r(m),a.d(m,{DashboardComponent:()=>T});var p=a(10467),t=a(93953),h=a(99327),D=a(96354),C=a(60177),s=a(16195),_=a(59115),u=a(99213),c=a(88834),i=a(25596),E=a(18498),M=a(31439),O=a(36815),g=a(34635);const b=()=>["/introduction"];function v(n,d){if(1&n){const o=t.RV6();t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3,"Read the introduction"),t.k0s(),t.j41(4,"mat-card-subtitle"),t.EFF(5,"New to Ariton (alpha)? Check out the introduction."),t.k0s()(),t.j41(6,"mat-card-actions")(7,"button",9),t.EFF(8,"READ INTRODUCTION"),t.k0s(),t.j41(9,"button",10),t.bIt("click",function(){t.eBV(o);const e=t.XpG();return t.Njj(e.hideIntroduction())}),t.EFF(10,"HIDE"),t.k0s()()()}2&n&&(t.R7$(7),t.Y8G("routerLink",t.lJ4(1,b)))}function P(n,d){if(1&n&&(t.j41(0,"mat-grid-tile",5),t.EFF(1),t.k0s()),2&n){const o=d.$implicit;t.Y8G("colspan",o.cols)("rowspan",o.rows),t.R7$(),t.SpI(" ",o.text," ")}}function F(n,d){if(1&n&&(t.j41(0,"mat-grid-tile",8)(1,"mat-card",11)(2,"mat-card-header")(3,"mat-card-title"),t.EFF(4),t.j41(5,"button",12)(6,"mat-icon"),t.EFF(7,"more_vert"),t.k0s()(),t.j41(8,"mat-menu",13,1)(10,"button",14),t.EFF(11,"Expand"),t.k0s(),t.j41(12,"button",14),t.EFF(13,"Remove"),t.k0s()()()(),t.j41(14,"mat-card-content",15)(15,"div"),t.EFF(16,"Card Content Here"),t.k0s()()()()),2&n){const o=d.$implicit,r=t.sdS(9);t.Y8G("colspan",o.cols)("rowspan",o.rows),t.R7$(4),t.SpI(" ",o.title," "),t.R7$(),t.Y8G("matMenuTriggerFor",r)}}let T=(()=>{class n{constructor(o){this.identity=o,this.breakpointObserver=(0,t.WQX)(h.QP),this.appService=(0,t.WQX)(M.d),this.layout=(0,t.WQX)(O.Y),this.tiles=[],this.cards=this.breakpointObserver.observe(["(max-width: 959.98px)"]).pipe((0,D.T)(({matches:r})=>r?[{title:"Card 1",cols:1,rows:1},{title:"Favorite friends",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Favorite friends",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}])),this.layout.resetActions()}ngOnInit(){return(0,p.A)(function*(){})()}addNewTile(){this.tiles.push({cols:1,rows:1,text:"New Tile"})}hideIntroduction(){this.appService.state().hidden.introduction=!0,this.appService.saveState()}static#t=this.\u0275fac=function(r){return new(r||n)(t.rXU(g.K))};static#a=this.\u0275cmp=t.VBU({type:n,selectors:[["app-dashboard"]],viewQuery:function(r,e){if(1&r&&t.GBs(s.B_,5),2&r){let l;t.mGM(l=t.lsd())&&(e.gridList=l.first)}},standalone:!0,features:[t.aNF],decls:14,vars:3,consts:[["gridList",""],["menu","matMenu"],[1,"grid-container"],[1,"mat-h1"],["gutterSize","1em","cols","2","rowHeight","100px"],[1,"dashboard-tile",3,"colspan","rowspan"],[3,"click"],["cols","2","rowHeight","350px"],[3,"colspan","rowspan"],["mat-button","",3,"routerLink"],["mat-button","",3,"click"],[1,"dashboard-card"],["mat-icon-button","","aria-label","Toggle menu",1,"more-button",3,"matMenuTriggerFor"],["xPosition","before"],["mat-menu-item",""],[1,"dashboard-card-content"]],template:function(r,e){if(1&r){const l=t.RV6();t.j41(0,"div",2)(1,"h1",3),t.EFF(2,"Dashboard"),t.k0s(),t.DNE(3,v,11,2,"mat-card"),t.j41(4,"mat-grid-list",4),t.Z7z(5,P,2,3,"mat-grid-tile",5,t.fX1),t.k0s(),t.j41(7,"button",6),t.bIt("click",function(){return t.eBV(l),t.Njj(e.addNewTile())}),t.EFF(8,"Add Tile"),t.k0s(),t.j41(9,"mat-grid-list",7,0),t.Z7z(11,F,17,4,"mat-grid-tile",8,t.fX1),t.nI1(13,"async"),t.k0s()()}2&r&&(t.R7$(3),t.vxM(e.appService.state().hidden.introduction?-1:3),t.R7$(2),t.Dyx(e.tiles),t.R7$(6),t.Dyx(t.bMT(13,1,e.cards)))},dependencies:[C.Jj,s.Fe,s.B_,s.NS,_.Cn,_.kk,_.fb,_.Cp,u.m_,u.An,c.Hl,c.$z,c.iY,i.Hu,i.RN,i.YY,i.m2,i.MM,i.Lc,i.dh,E.iI,E.Wk],styles:[".dashboard-card[_ngcontent-%COMP%]{position:absolute;inset:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}.dashboard-tile[_ngcontent-%COMP%]{background-color:red}"]})}return n})()}}]);