"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[454],{454:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(165),r=n(861),i=n(671),u=n(144),c=n(963),o=n(136),f=n(388),d=n(376),s=(n(653),n(235),function(e){(0,o.Z)(n,e);var t=(0,f.Z)(n);function n(){var e;if((0,i.Z)(this,n),e=t.call(this),"undefined"==typeof createImageBitmap)throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if("undefined"==typeof document&&"undefined"==typeof OffscreenCanvas)throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");return(0,c.Z)(e)}return(0,u.Z)(n,[{key:"decode",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r,i,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Blob([n]),e.next=3,createImageBitmap(r);case 3:return i=e.sent,"undefined"!=typeof document?((u=document.createElement("canvas")).width=i.width,u.height=i.height):u=new OffscreenCanvas(i.width,i.height),c=u.getContext("2d"),e.abrupt("return",(c.drawImage(i,0,0),c.getImageData(0,0,i.width,i.height).data.buffer));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(d.B))}}]);
//# sourceMappingURL=454.a184a83d.chunk.js.map