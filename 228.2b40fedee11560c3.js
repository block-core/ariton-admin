"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[228],{92228:(_,r,e)=>{e.r(r),e.d(r,{NotificationsComponent:()=>u});var s=e(10467),i=e(93953),l=e(88834),f=e(36815);let u=(()=>{class c{constructor(){this.layout=(0,i.WQX)(f.Y),this.layout.resetActions()}enableNotifications(){var o=this;return(0,s.A)(function*(){console.log("Notifications enabled"),o.sendNotification("Hello World")})()}disableNotifications(){return(0,s.A)(function*(){console.log("Notifications disabled")})()}ngOnInit(){var o=this;return(0,s.A)(function*(){console.log("Notifications component loaded"),o.registration=yield navigator.serviceWorker.getRegistration()})()}sendNotification(o){var t=this;return(0,s.A)(function*(){console.log("Sending notification"),"granted"===Notification.permission?(console.log("Notifications enabled!!!!"),t.showNotification(o)):(console.error("Notifications not enabled"),"denied"!==Notification.permission&&"granted"===(yield Notification.requestPermission())&&t.showNotification("Hello World"))})()}showNotification(o){var t=this;return(0,s.A)(function*(){var n="Ariton says hi!";const a={body:o};console.log("Showing notification"),t.registration&&"showNotification"in t.registration?(console.log("Using service worker"),t.registration.showNotification(n,a)):(console.log("Using new notification"),new Notification(n,a))})()}static#i=this.\u0275fac=function(t){return new(t||c)};static#t=this.\u0275cmp=i.VBU({type:c,selectors:[["app-notifications"]],standalone:!0,features:[i.aNF],decls:12,vars:0,consts:[["mat-flat-button","",3,"click"]],template:function(t,n){1&t&&(i.j41(0,"h1"),i.EFF(1,"Notifications"),i.k0s(),i.j41(2,"p"),i.EFF(3,"TODO: This notification should use the modern support for browser vendor based infrastructure for notifications."),i.k0s(),i.j41(4,"button",0),i.bIt("click",function(){return n.enableNotifications()}),i.EFF(5,"Enable Device Notifications"),i.k0s(),i.EFF(6,"\n\xa0\n"),i.j41(7,"button",0),i.bIt("click",function(){return n.disableNotifications()}),i.EFF(8,"Disable Device Notifications"),i.k0s(),i.EFF(9,"\n\xa0\n"),i.j41(10,"button",0),i.bIt("click",function(){return n.sendNotification("Welcome to Ariton!")}),i.EFF(11,"Trigger notification"),i.k0s())},dependencies:[l.Hl,l.$z]})}return c})()}}]);