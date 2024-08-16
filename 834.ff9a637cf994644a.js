"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[834],{38834:(ge,R,o)=>{o.r(R),o.d(R,{FriendsComponent:()=>le});var u=o(10467),e=o(93953),j=o(86600),F=o(18617),x=o(60177);let G=0;const B="mat-badge-content",y=new Set;let I=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ng-component"]],standalone:!0,features:[e.aNF],decls:0,vars:0,template:function(n,a){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0})}return i})(),N=(()=>{class i{get color(){return this._color}set color(t){this._setColor(t),this._color=t}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateDescription(t)}constructor(t,n,a,s,r){this._ngZone=t,this._elementRef=n,this._ariaDescriber=a,this._renderer=s,this._animationMode=r,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=G++,this._isInitialized=!1,this._interactivityChecker=(0,e.WQX)(F.Z7),this._document=(0,e.WQX)(x.qQ);const d=(0,e.WQX)(e.o8S);if(!y.has(d)){y.add(d);const l=(0,e.a0P)(I,{environmentInjector:(0,e.WQX)(e.uvJ)});d.onDestroy(()=>{y.delete(d),0===y.size&&l.destroy()})}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const t=this._renderer.createElement("span"),n="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(B),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(n)})}):t.classList.add(n),t}_updateRenderedContent(t){const n=`${t??""}`.trim();this._isInitialized&&n&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=n),this._content=n}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){const n=this._elementRef.nativeElement.classList;n.remove(`mat-badge-${this._color}`),t&&n.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${B}`);for(const n of Array.from(t))n!==this._badgeElement&&n.remove()}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(e.SKi),e.rXU(e.aKT),e.rXU(F.vr),e.rXU(e.sFG),e.rXU(e.bc$,8))};static#t=this.\u0275dir=e.FsC({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(n,a){2&n&&e.AVh("mat-badge-overlap",a.overlap)("mat-badge-above",a.isAbove())("mat-badge-below",!a.isAbove())("mat-badge-before",!a.isAfter())("mat-badge-after",a.isAfter())("mat-badge-small","small"===a.size)("mat-badge-medium","medium"===a.size)("mat-badge-large","large"===a.size)("mat-badge-hidden",a.hidden||!a.content)("mat-badge-disabled",a.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",e.L39],disabled:[2,"matBadgeDisabled","disabled",e.L39],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",e.L39]},standalone:!0,features:[e.GFd]})}return i})(),O=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({imports:[F.Pd,j.yE,j.yE]})}return i})();var M=o(88834),g=o(25596),A=o(99213),$=o(3902),z=o(59115),C=o(96850),T=o(34635),p=o(22312),w=o(31439),P=o(39434),X=o(345),S=o(78013),L=o(33347),V=o(14823),E=o(18498);const W=["*"],h=i=>["/profile",i];function Y(i,c){if(1&i&&e.EFF(0),2&i){let t;const n=e.XpG(2);e.SpI(" (",null==(t=n.data().profile)?null:t.title,") ")}}function Q(i,c){if(1&i&&(e.j41(0,"a",0),e.EFF(1),e.DNE(2,Y,1,1),e.k0s()),2&i){let t,n,a;const s=e.XpG();e.Y8G("routerLink",e.eq3(3,h,null==(t=s.data().profile)?null:t.did)),e.R7$(),e.SpI("",null==(n=s.data().profile)?null:n.name," "),e.R7$(),e.vxM(null!=(a=s.data().profile)&&a.title?2:-1)}}function q(i,c){if(1&i&&e.EFF(0),2&i){let t;const n=e.XpG(2);e.SpI(" (",null==(t=n.data().profile)?null:t.title,") ")}}function J(i,c){if(1&i&&(e.j41(0,"em")(1,"a",0),e.EFF(2,"No name set "),e.DNE(3,q,1,1),e.k0s()()),2&i){let t,n;const a=e.XpG();e.R7$(),e.Y8G("routerLink",e.eq3(2,h,null==(t=a.data().profile)?null:t.did)),e.R7$(2),e.vxM(null!=(n=a.data().profile)&&n.title?3:-1)}}function U(i,c){if(1&i&&(e.nrm(0,"img",1),e.nI1(1,"safeResourceUrl")),2&i){let t;const n=e.XpG();e.Y8G("routerLink",e.eq3(4,h,null==(t=n.data().profile)?null:t.did))("src",e.bMT(1,2,n.data().avatar),e.B4B)}}function H(i,c){if(1&i&&e.nrm(0,"img",2),2&i){let t;const n=e.XpG();e.Y8G("routerLink",e.eq3(2,h,null==(t=n.data().profile)?null:t.did))("src","/avatar-placeholder.png",e.B4B)}}function Z(i,c){if(1&i&&(e.j41(0,"p"),e.EFF(1),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.JRh(t.data().message)}}let K=(()=>{class i{constructor(){this.identity=(0,e.WQX)(T.K),this.profile=(0,e.WQX)(P.p),this.sanitizer=(0,e.WQX)(X.up),this.did=e.hFB.required(),this.data=(0,e.vPA)({})}ngAfterViewInit(){var t=this;return(0,u.A)(function*(){if(t.did()){const n=yield t.profile.loadProfile(t.did());console.log(n),t.data.set(n)}})()}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-profile-card"]],inputs:{did:[1,"did"]},standalone:!0,features:[e.aNF],ngContentSelectors:W,decls:16,vars:9,consts:[[3,"routerLink"],["mat-card-image","","onerror","this.src='/avatar-placeholder.png';this.onerror='';",1,"profile-thumbnail",3,"routerLink","src"],["mat-card-image","",1,"profile-thumbnail",3,"routerLink","src"]],template:function(n,a){if(1&n&&(e.NAR(),e.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),e.DNE(3,Q,3,5,"a",0)(4,J,4,4,"em"),e.k0s(),e.j41(5,"mat-card-subtitle")(6,"a",0),e.EFF(7),e.nI1(8,"did"),e.k0s()()(),e.nrm(9,"br"),e.DNE(10,U,2,6,"img",1)(11,H,1,4,"img",2),e.j41(12,"mat-card-content"),e.DNE(13,Z,2,1,"p"),e.k0s(),e.j41(14,"mat-card-actions"),e.SdG(15),e.k0s()()),2&n){let s,r,d;e.R7$(3),e.vxM(null!=(s=a.data().profile)&&s.name?3:4),e.R7$(3),e.Y8G("routerLink",e.eq3(7,h,null==(r=a.data().profile)?null:r.did)),e.R7$(),e.JRh(e.bMT(8,5,null==(d=a.data().profile)?null:d.did)),e.R7$(3),e.vxM(a.data().avatar?10:11),e.R7$(3),e.vxM(a.data().message?13:-1)}},dependencies:[E.iI,E.Wk,V.uc,g.Hu,g.RN,g.YY,g.m2,g.MM,g.kF,g.Lc,g.dh,S.d,L.k],styles:[".profile-thumbnail[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})}return i})();var f=o(37413),v=o(69371),ee=o(36815),te=o(71997);const ne=i=>["/profile",i];function ie(i,c){1&i&&(e.j41(0,"mat-icon",6),e.EFF(1,"person"),e.k0s(),e.j41(2,"span",7),e.EFF(3,"Friends"),e.k0s())}function ae(i,c){if(1&i&&(e.j41(0,"app-profile-card",3)(1,"button",8),e.EFF(2,"VIEW"),e.k0s(),e.j41(3,"button",9),e.EFF(4,"MESSAGE"),e.k0s()()),2&i){const t=c.$implicit;e.Y8G("did",t.data.did),e.R7$(),e.Y8G("routerLink",e.eq3(3,ne,t.data.did)),e.R7$(2),e.Y8G("disabled",!0)}}function oe(i,c){if(1&i&&(e.j41(0,"mat-icon",6),e.EFF(1,"person_add"),e.k0s(),e.j41(2,"span",10),e.EFF(3,"Requests\xa0"),e.k0s()),2&i){const t=e.XpG();e.R7$(2),e.Y8G("matBadge",t.requests().length)}}function se(i,c){if(1&i){const t=e.RV6();e.j41(0,"app-profile-card",3)(1,"button",11),e.EFF(2,"PENDING"),e.k0s(),e.j41(3,"button",12),e.bIt("click",function(){e.eBV(t);const a=e.XpG().$implicit,s=e.XpG();return e.Njj(s.reject(a))}),e.EFF(4,"CANCEL"),e.k0s()()}if(2&i){const t=e.XpG().$implicit;e.Y8G("did",t.record.recipient),e.R7$(),e.Y8G("disabled",!0)}}function re(i,c){if(1&i){const t=e.RV6();e.j41(0,"app-profile-card",3)(1,"button",13),e.bIt("click",function(){e.eBV(t);const a=e.XpG().$implicit,s=e.XpG();return e.Njj(s.accept(a))}),e.EFF(2,"CONFIRM"),e.k0s(),e.j41(3,"button",12),e.bIt("click",function(){e.eBV(t);const a=e.XpG().$implicit,s=e.XpG();return e.Njj(s.reject(a))}),e.EFF(4,"DELETE"),e.k0s()()}if(2&i){const t=e.XpG().$implicit;e.Y8G("did",t.record.author)}}function de(i,c){1&i&&e.DNE(0,se,5,2,"app-profile-card",3)(1,re,5,1,"app-profile-card",3),2&i&&e.vxM("out"==c.$implicit.direction?0:1)}let le=(()=>{class i{constructor(){var t=this;this.requests=(0,e.vPA)([]),this.friends=(0,e.vPA)([]),this.identity=(0,e.WQX)(T.K),this.layout=(0,e.WQX)(ee.Y),this.app=(0,e.WQX)(w.d),this.layout.resetActions(),(0,e.QZP)((0,u.A)(function*(){t.app.initialized()&&(yield t.processFriends(),yield t.loadFriends(),yield t.loadRequests())}))}loadRequests(){var t=this;return(0,u.A)(function*(){var{records:n}=yield t.identity.web5.dwn.records.query({message:{filter:{protocol:p.iU.uri,schema:"https://schema.ariton.app/message/schema/request",dataFormat:"application/json"}}});if(console.log("Records from requests:"),console.log(n),n)for(const r of n){let d=yield r.data.json(),l={record:r,data:d};r.author==t.identity.did&&(l.direction="out"),t.requests.update(m=>[...m,l]),console.log("All requests:",t.requests())}})()}accept(t){var n=this;return(0,u.A)(function*(){const a=t.data.vc;if(console.log("signedVcJwt:",a),!a)return;try{yield f.l6.verify({vcJwt:a})}catch(me){return void console.error("Error verifying VC:",me)}const s=f.l6.parseJwt({vcJwt:a}),r=s.issuer;if(s.issuer!=t.record.author)return void console.error("VC issuer is different than data record author");console.log("Friend request validated");const d=yield f.l6.create({type:p.eE.friendship,issuer:n.identity.did,subject:r,data:{vc:a}});console.log("TWO WAY VC:",d);const l=yield n.identity.activeAgent().identity.get({didUri:n.identity.did}),m=yield d.sign({did:l.did});console.log("TWO WAY VC JWT:",m);const{record:b}=yield n.identity.web5.dwn.records.create({data:m,message:{schema:p.eE.friendship,dataFormat:p.eE.format,published:!1}});console.log("TWO WAY VC RECORD:",b);const{status:_}=yield b.send(n.identity.did);console.log("Record sent:",_,b);const{status:k,record:ce}=yield n.identity.web5.dwn.records.create({data:{vc:m},store:!1,message:{recipient:r,protocol:v.Q.protocol,protocolPath:"credential",schema:v.Q.types.credential.schema,dataFormat:v.Q.types.credential.dataFormats[0]}});console.log("Request create status:",k);const{status:D}=yield ce.send(r);202!==D.code?n.app.openSnackBar(`Friend request failed.Code: ${D.code}, Details: ${D.detail}.`):(n.app.openSnackBar("Friend request accepted"),yield n.reject(t))})()}reject(t){var n=this;return(0,u.A)(function*(){console.log("Rejecting request:",t);const a=t.record.recipient==n.identity.did?t.record.author:t.record.recipient;console.log("Target DID:",a),console.log("this.identity.did:",n.identity.did),console.log("entry.record.recipient:",t.record.recipient),console.log("entry.record.author:",t.record.author);const{status:s}=yield t.record.delete(),{status:r}=yield t.record.send(a);console.log("Delete status:",s),console.log("deleteSendStatus:",r),n.requests.update(d=>d.filter(l=>l!==t))})()}processFriends(){var t=this;return(0,u.A)(function*(){var{records:n}=yield t.identity.web5.dwn.records.query({message:{filter:{protocol:p.iU.uri,schema:v.Q.types.credential.schema,dataFormat:v.Q.types.credential.dataFormats[0]}}});console.log("VC Records:",n);for(const a of n){console.log("Record:",a);const s=yield a.data.json();console.log("JSON:",s);try{yield f.l6.verify({vcJwt:s.vc})}catch(m){console.error("Error verifying VC:",m),console.log("THIS REQUEST SHOULD BE DELETED FROM DWN",a.id)}const r=f.l6.parseJwt({vcJwt:s.vc});console.log("PARSED INVCOMING VC:",r),console.log("vc.issuer === this.identity.did:",r.issuer===t.identity.did);const{record:d}=yield t.identity.web5.dwn.records.create({data:s.vc,message:{schema:p.eE.friendship,dataFormat:p.eE.format,published:!1}});console.log("TWO WAY VC RECORD:",d);const{status:l}=yield d.send(t.identity.did);console.log("Record sent:",l,d),yield a?.delete()}})()}loadFriends(){var t=this;return(0,u.A)(function*(){var{records:n}=yield t.identity.web5.dwn.records.query({message:{filter:{schema:p.eE.friendship,dataFormat:p.eE.format}}});if(console.log("Friend VCs:"),console.log(n),t.friends.set([]),n)for(const r of n){let d=yield r.data.text(),l=f.l6.parseJwt({vcJwt:d}),m=l.issuer;l.issuer==t.identity.did&&(m=f.l6.parseJwt({vcJwt:l.vcDataModel.credentialSubject.vc}).issuer);let b={record:r,data:{did:m}};t.friends.update(_=>[..._,b]),console.log("All friends:",t.friends())}})()}ngOnInit(){this.layout.marginOff()}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-friends"]],standalone:!0,features:[e.aNF],decls:24,vars:0,consts:[["menu","matMenu"],["mat-tab-label",""],[1,"container","responsive-grid"],[3,"did"],["xPosition","before"],["mat-menu-item",""],[1,"tab-icon"],[1,"hide-small"],["mat-flat-button","",3,"routerLink"],["mat-button","",3,"disabled"],["matBadgeOverlap","false",1,"hide-small",3,"matBadge"],["mat-flat-button","",3,"disabled"],["mat-button","",3,"click"],["mat-flat-button","",3,"click"]],template:function(n,a){1&n&&(e.j41(0,"mat-tab-group")(1,"mat-tab"),e.DNE(2,ie,4,0,"ng-template",1),e.j41(3,"div",2),e.Z7z(4,ae,5,5,"app-profile-card",3,e.fX1),e.k0s(),e.j41(6,"mat-menu",4,0)(8,"button",5)(9,"mat-icon"),e.EFF(10,"favorite"),e.k0s(),e.j41(11,"span"),e.EFF(12,"Favorite"),e.k0s()(),e.nrm(13,"mat-divider"),e.j41(14,"button",5)(15,"mat-icon"),e.EFF(16,"person_remove"),e.k0s(),e.j41(17,"span"),e.EFF(18,"Unfriend"),e.k0s()()()(),e.j41(19,"mat-tab"),e.DNE(20,oe,4,1,"ng-template",1),e.j41(21,"div",2),e.Z7z(22,de,2,1,null,null,e.fX1),e.k0s()()()),2&n&&(e.R7$(4),e.Dyx(a.friends()),e.R7$(18),e.Dyx(a.requests()))},dependencies:[x.MD,$.Fg,te.q,g.Hu,M.Hl,M.$z,C.RI,C.ES,C.mq,C.T8,A.m_,A.An,O,N,z.Cn,z.kk,z.fb,K,E.iI,E.Wk],styles:[".toolbox[_ngcontent-%COMP%]{display:flex;gap:1em;align-items:baseline}.toolbox-left[_ngcontent-%COMP%]{flex-grow:2}.toolbox-right[_ngcontent-%COMP%]{flex-grow:1}.search-input[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{padding:24px}img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}.responsive-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:24px}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.2em}.mat-badge[_ngcontent-%COMP%]{margin-left:.5em;border-color:2px solid red}"]})}return i})()}}]);