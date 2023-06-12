"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[817],{817:function(r,e,n){n.r(e),n.d(e,{default:function(){return C}});var a=n(136),s=n(388),t=n(671),o=n(144),i=n(376),f=(n(653),n(235),new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63])),c=4017,u=799,l=3406,h=2276,v=1567,m=3784,b=5793,d=2896;function p(r,e){for(var n=0,a=[],s=16;s>0&&!r[s-1];)--s;a.push({children:[],index:0});for(var t,o=a[0],i=0;i<s;i++){for(var f=0;f<r[i];f++){for((o=a.pop()).children[o.index]=e[n];o.index>0;)o=a.pop();for(o.index++,a.push(o);a.length<=i;)a.push(t={children:[],index:0}),o.children[o.index]=t.children,o=t;n++}i+1<s&&(a.push(t={children:[],index:0}),o.children[o.index]=t.children,o=t)}return a[0].children}function k(r,e,n,a,s,t,o,i,c){var u=n.mcusPerLine,l=n.progressive,h=e,v=e,m=0,b=0;function d(){if(b>0)return b--,m>>b&1;if(255===(m=r[v++])){var e=r[v++];if(e)throw new Error("unexpected marker: ".concat((m<<8|e).toString(16)))}return b=7,m>>>7}function p(r){for(var e,n=r;null!==(e=d());){if("number"==typeof(n=n[e]))return n;if("object"!=typeof n)throw new Error("invalid huffman sequence")}return null}function k(r){for(var e=r,n=0;e>0;){var a=d();if(null===a)return;n=n<<1|a,--e}return n}function w(r){var e=k(r);return e>=1<<r-1?e:e+(-1<<r)+1}var y=0;var C,P=0;function T(r,e,n,a,s){var t=n%u,o=(n/u|0)*r.v+a,i=t*r.h+s;e(r,r.blocks[o][i])}function g(r,e,n){var a=n/r.blocksPerLine|0,s=n%r.blocksPerLine;e(r,r.blocks[a][s])}var x,A,L,E,D,I,q=a.length;I=l?0===t?0===i?function(r,e){var n=p(r.huffmanTableDC),a=0===n?0:w(n)<<c;r.pred+=a,e[0]=r.pred}:function(r,e){e[0]|=d()<<c}:0===i?function(r,e){if(y>0)y--;else for(var n=t,a=o;n<=a;){var s=p(r.huffmanTableAC),i=15&s,u=s>>4;if(0===i){if(u<15){y=k(u)+(1<<u)-1;break}n+=16}else{e[f[n+=u]]=w(i)*(1<<c),n++}}}:function(r,e){for(var n=t,a=o,s=0;n<=a;){var i=f[n],u=e[i]<0?-1:1;switch(P){case 0:var l=p(r.huffmanTableAC),h=15&l;if(s=l>>4,0===h)s<15?(y=k(s)+(1<<s),P=4):(s=16,P=1);else{if(1!==h)throw new Error("invalid ACn encoding");C=w(h),P=s?2:3}continue;case 1:case 2:e[i]?e[i]+=(d()<<c)*u:0===--s&&(P=2===P?3:0);break;case 3:e[i]?e[i]+=(d()<<c)*u:(e[i]=C<<c,P=0);break;case 4:e[i]&&(e[i]+=(d()<<c)*u)}n++}4===P&&(0===--y&&(P=0))}:function(r,e){var n=p(r.huffmanTableDC),a=0===n?0:w(n);r.pred+=a,e[0]=r.pred;for(var s=1;s<64;){var t=p(r.huffmanTableAC),o=15&t,i=t>>4;if(0===o){if(i<15)break;s+=16}else{e[f[s+=i]]=w(o),s++}}};var z,O,U=0;O=1===q?a[0].blocksPerLine*a[0].blocksPerColumn:u*n.mcusPerColumn;for(var M=s||O;U<O;){for(A=0;A<q;A++)a[A].pred=0;if(y=0,1===q)for(x=a[0],D=0;D<M;D++)g(x,I,U),U++;else for(D=0;D<M;D++){for(A=0;A<q;A++){var Z=x=a[A],j=Z.h,F=Z.v;for(L=0;L<F;L++)for(E=0;E<j;E++)T(x,I,U,L,E)}if(++U===O)break}if(b=0,(z=r[v]<<8|r[v+1])<65280)throw new Error("marker was not found");if(!(z>=65488&&z<=65495))break;v+=2}return v-h}function w(r,e){var n=[],a=e.blocksPerLine,s=e.blocksPerColumn,t=a<<3,o=new Int32Array(64),i=new Uint8Array(64);function f(r,n,a){var s,t,o,i,f,p,k,w,y,C,P=e.quantizationTable,T=a;for(C=0;C<64;C++)T[C]=r[C]*P[C];for(C=0;C<8;++C){var g=8*C;0!==T[1+g]||0!==T[2+g]||0!==T[3+g]||0!==T[4+g]||0!==T[5+g]||0!==T[6+g]||0!==T[7+g]?(s=b*T[0+g]+128>>8,t=b*T[4+g]+128>>8,o=T[2+g],i=T[6+g],f=d*(T[1+g]-T[7+g])+128>>8,w=d*(T[1+g]+T[7+g])+128>>8,p=T[3+g]<<4,k=T[5+g]<<4,y=s-t+1>>1,s=s+t+1>>1,t=y,y=o*m+i*v+128>>8,o=o*v-i*m+128>>8,i=y,y=f-k+1>>1,f=f+k+1>>1,k=y,y=w+p+1>>1,p=w-p+1>>1,w=y,y=s-i+1>>1,s=s+i+1>>1,i=y,y=t-o+1>>1,t=t+o+1>>1,o=y,y=f*h+w*l+2048>>12,f=f*l-w*h+2048>>12,w=y,y=p*u+k*c+2048>>12,p=p*c-k*u+2048>>12,k=y,T[0+g]=s+w,T[7+g]=s-w,T[1+g]=t+k,T[6+g]=t-k,T[2+g]=o+p,T[5+g]=o-p,T[3+g]=i+f,T[4+g]=i-f):(y=b*T[0+g]+512>>10,T[0+g]=y,T[1+g]=y,T[2+g]=y,T[3+g]=y,T[4+g]=y,T[5+g]=y,T[6+g]=y,T[7+g]=y)}for(C=0;C<8;++C){var x=C;0!==T[8+x]||0!==T[16+x]||0!==T[24+x]||0!==T[32+x]||0!==T[40+x]||0!==T[48+x]||0!==T[56+x]?(s=b*T[0+x]+2048>>12,t=b*T[32+x]+2048>>12,o=T[16+x],i=T[48+x],f=d*(T[8+x]-T[56+x])+2048>>12,w=d*(T[8+x]+T[56+x])+2048>>12,p=T[24+x],k=T[40+x],y=s-t+1>>1,s=s+t+1>>1,t=y,y=o*m+i*v+2048>>12,o=o*v-i*m+2048>>12,i=y,y=f-k+1>>1,f=f+k+1>>1,k=y,y=w+p+1>>1,p=w-p+1>>1,w=y,y=s-i+1>>1,s=s+i+1>>1,i=y,y=t-o+1>>1,t=t+o+1>>1,o=y,y=f*h+w*l+2048>>12,f=f*l-w*h+2048>>12,w=y,y=p*u+k*c+2048>>12,p=p*c-k*u+2048>>12,k=y,T[0+x]=s+w,T[56+x]=s-w,T[8+x]=t+k,T[48+x]=t-k,T[16+x]=o+p,T[40+x]=o-p,T[24+x]=i+f,T[32+x]=i-f):(y=b*a[C+0]+8192>>14,T[0+x]=y,T[8+x]=y,T[16+x]=y,T[24+x]=y,T[32+x]=y,T[40+x]=y,T[48+x]=y,T[56+x]=y)}for(C=0;C<64;++C){var A=128+(T[C]+8>>4);n[C]=A<0?0:A>255?255:A}}for(var p=0;p<s;p++){for(var k=p<<3,w=0;w<8;w++)n.push(new Uint8Array(t));for(var y=0;y<a;y++){f(e.blocks[p][y],i,o);for(var C=0,P=y<<3,T=0;T<8;T++)for(var g=n[k+T],x=0;x<8;x++)g[P+x]=i[C++]}}return n}var y=function(){function r(){(0,t.Z)(this,r),this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}return(0,o.Z)(r,[{key:"resetFrames",value:function(){this.frames=[]}},{key:"parse",value:function(r){var e=0;function n(){var n=r[e]<<8|r[e+1];return e+=2,n}function a(){var a=n(),s=r.subarray(e,e+a-2);return e+=s.length,s}function s(r){var e,n,a=0,s=0;for(n in r.components)r.components.hasOwnProperty(n)&&(a<(e=r.components[n]).h&&(a=e.h),s<e.v&&(s=e.v));var t=Math.ceil(r.samplesPerLine/8/a),o=Math.ceil(r.scanLines/8/s);for(n in r.components)if(r.components.hasOwnProperty(n)){e=r.components[n];for(var i=Math.ceil(Math.ceil(r.samplesPerLine/8)*e.h/a),f=Math.ceil(Math.ceil(r.scanLines/8)*e.v/s),c=t*e.h,u=o*e.v,l=[],h=0;h<u;h++){for(var v=[],m=0;m<c;m++)v.push(new Int32Array(64));l.push(v)}e.blocksPerLine=i,e.blocksPerColumn=f,e.blocks=l}r.maxH=a,r.maxV=s,r.mcusPerLine=t,r.mcusPerColumn=o}var t=n();if(65496!==t)throw new Error("SOI not found");for(t=n();65497!==t;){switch(t){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var o=a();65504===t&&74===o[0]&&70===o[1]&&73===o[2]&&70===o[3]&&0===o[4]&&(this.jfif={version:{major:o[5],minor:o[6]},densityUnits:o[7],xDensity:o[8]<<8|o[9],yDensity:o[10]<<8|o[11],thumbWidth:o[12],thumbHeight:o[13],thumbData:o.subarray(14,14+3*o[12]*o[13])}),65518===t&&65===o[0]&&100===o[1]&&111===o[2]&&98===o[3]&&101===o[4]&&0===o[5]&&(this.adobe={version:o[6],flags0:o[7]<<8|o[8],flags1:o[9]<<8|o[10],transformCode:o[11]});break;case 65499:for(var i=n()+e-2;e<i;){var c=r[e++],u=new Int32Array(64);if(c>>4){if(c>>4!==1)throw new Error("DQT: invalid table spec");for(var l=0;l<64;l++){u[f[l]]=n()}}else for(var h=0;h<64;h++){u[f[h]]=r[e++]}this.quantizationTables[15&c]=u}break;case 65472:case 65473:case 65474:n();for(var v={extended:65473===t,progressive:65474===t,precision:r[e++],scanLines:n(),samplesPerLine:n(),components:{},componentsOrder:[]},m=r[e++],b=void 0,d=0;d<m;d++){b=r[e];var w=r[e+1]>>4,y=15&r[e+1],C=r[e+2];v.componentsOrder.push(b),v.components[b]={h:w,v:y,quantizationIdx:C},e+=3}s(v),this.frames.push(v);break;case 65476:for(var P=n(),T=2;T<P;){for(var g=r[e++],x=new Uint8Array(16),A=0,L=0;L<16;L++,e++)x[L]=r[e],A+=x[L];for(var E=new Uint8Array(A),D=0;D<A;D++,e++)E[D]=r[e];T+=17+A,g>>4?this.huffmanTablesAC[15&g]=p(x,E):this.huffmanTablesDC[15&g]=p(x,E)}break;case 65501:n(),this.resetInterval=n();break;case 65498:n();for(var I=r[e++],q=[],z=this.frames[0],O=0;O<I;O++){var U=z.components[r[e++]],M=r[e++];U.huffmanTableDC=this.huffmanTablesDC[M>>4],U.huffmanTableAC=this.huffmanTablesAC[15&M],q.push(U)}var Z=r[e++],j=r[e++],F=r[e++],G=k(r,e,z,q,this.resetInterval,Z,j,F>>4,15&F);e+=G;break;case 65535:255!==r[e]&&e--;break;default:if(255===r[e-3]&&r[e-2]>=192&&r[e-2]<=254){e-=3;break}throw new Error("unknown JPEG marker ".concat(t.toString(16)))}t=n()}}},{key:"getResult",value:function(){var r=this.frames;if(0===this.frames.length)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(var e=0;e<this.frames.length;e++)for(var n=this.frames[e].components,a=0,s=Object.keys(n);a<s.length;a++){var t=s[a];n[t].quantizationTable=this.quantizationTables[n[t].quantizationIdx],delete n[t].quantizationIdx}for(var o=r[0],i=o.components,f=o.componentsOrder,c=[],u=o.samplesPerLine,l=o.scanLines,h=0;h<f.length;h++){var v=i[f[h]];c.push({lines:w(0,v),scaleX:v.h/o.maxH,scaleY:v.v/o.maxV})}for(var m=new Uint8Array(u*l*c.length),b=0,d=0;d<l;++d)for(var p=0;p<u;++p)for(var k=0;k<c.length;++k){var y=c[k];m[b]=y.lines[0|d*y.scaleY][0|p*y.scaleX],++b}return m}}]),r}(),C=function(r){(0,a.Z)(n,r);var e=(0,s.Z)(n);function n(r){var a;return(0,t.Z)(this,n),(a=e.call(this)).reader=new y,r.JPEGTables&&a.reader.parse(r.JPEGTables),a}return(0,o.Z)(n,[{key:"decodeBlock",value:function(r){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(r)),this.reader.getResult().buffer}}]),n}(i.B)}}]);
//# sourceMappingURL=817.26ebbe9b.chunk.js.map