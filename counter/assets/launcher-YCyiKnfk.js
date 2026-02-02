var Co=Object.defineProperty;var Lo=(i,e,t)=>e in i?Co(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var os=(i,e,t)=>Lo(i,typeof e!="symbol"?e+"":e,t);import{FilesetResolver as Po,PoseLandmarker as Do}from"https://esm.sh/@mediapipe/tasks-vision@0.10.14";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qs="161",Uo=0,dr=1,Io=2,Ga=1,No=2,Zt=3,fn=0,yt=1,Jt=2,hn=0,$n=1,fr=2,pr=3,mr=4,Fo=5,En=100,Oo=101,Bo=102,gr=103,_r=104,Ho=200,zo=201,Vo=202,ko=203,Gs=204,Ws=205,Go=206,Wo=207,Xo=208,qo=209,Yo=210,$o=211,Ko=212,jo=213,Zo=214,Jo=0,Qo=1,el=2,Wi=3,tl=4,nl=5,il=6,sl=7,Wa=0,rl=1,al=2,un=0,ol=1,ll=2,cl=3,hl=4,ul=5,dl=6,Xa=300,Zn=301,Jn=302,Xs=303,qs=304,Zi=306,Ys=1e3,Nt=1001,$s=1002,vt=1003,vr=1004,si=1005,St=1006,ls=1007,Tn=1008,dn=1009,fl=1010,pl=1011,er=1012,qa=1013,cn=1014,Qt=1015,di=1016,Ya=1017,$a=1018,An=1020,ml=1021,Ft=1023,gl=1024,_l=1025,wn=1026,Qn=1027,vl=1028,Ka=1029,xl=1030,ja=1031,Za=1033,cs=33776,hs=33777,us=33778,ds=33779,xr=35840,Sr=35841,Mr=35842,yr=35843,Ja=36196,Er=37492,br=37496,Tr=37808,Ar=37809,wr=37810,Rr=37811,Cr=37812,Lr=37813,Pr=37814,Dr=37815,Ur=37816,Ir=37817,Nr=37818,Fr=37819,Or=37820,Br=37821,fs=36492,Hr=36494,zr=36495,Sl=36283,Vr=36284,kr=36285,Gr=36286,Qa=3e3,Rn=3001,Ml=3200,yl=3201,El=0,bl=1,Lt="",ut="srgb",tn="srgb-linear",tr="display-p3",Ji="display-p3-linear",Xi="linear",Ze="srgb",qi="rec709",Yi="p3",Ln=7680,Wr=519,Tl=512,Al=513,wl=514,eo=515,Rl=516,Cl=517,Ll=518,Pl=519,Xr=35044,qr="300 es",Ks=1035,en=2e3,$i=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ps=Math.PI/180,js=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Dl(i,e){return(i%e+e)%e}function ms(i,e,t){return(1-t)*i+t*e}function Yr(i){return(i&i-1)===0&&i!==0}function Zs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,s,r,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],S=s[0],p=s[3],f=s[6],b=s[1],x=s[4],A=s[7],D=s[2],R=s[5],w=s[8];return r[0]=o*S+a*b+l*D,r[3]=o*p+a*x+l*R,r[6]=o*f+a*A+l*w,r[1]=c*S+h*b+u*D,r[4]=c*p+h*x+u*R,r[7]=c*f+h*A+u*w,r[2]=d*S+m*b+g*D,r[5]=d*p+m*x+g*R,r[8]=d*f+m*A+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=u*S,e[1]=(s*c-h*n)*S,e[2]=(a*n-s*o)*S,e[3]=d*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gs.makeScale(e,t)),this}rotate(e){return this.premultiply(gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(gs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gs=new Fe;function to(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ul(){const i=Ki("canvas");return i.style.display="block",i}const $r={};function Kn(i){i in $r||($r[i]=!0,console.warn(i))}const Kr=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jr=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Si={[tn]:{transfer:Xi,primaries:qi,toReference:i=>i,fromReference:i=>i},[ut]:{transfer:Ze,primaries:qi,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ji]:{transfer:Xi,primaries:Yi,toReference:i=>i.applyMatrix3(jr),fromReference:i=>i.applyMatrix3(Kr)},[tr]:{transfer:Ze,primaries:Yi,toReference:i=>i.convertSRGBToLinear().applyMatrix3(jr),fromReference:i=>i.applyMatrix3(Kr).convertLinearToSRGB()}},Il=new Set([tn,Ji]),qe={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Il.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Si[e].toReference,s=Si[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Si[i].primaries},getTransfer:function(i){return i===Lt?Xi:Si[i].transfer}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pn;class no{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=Ki("canvas")),Pn.width=e.width,Pn.height=e.height;const n=Pn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nl=0;class io{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vs(s[o].image)):r.push(vs(s[o]))}else r=vs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?no.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fl=0;class Et extends ti{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Nt,s=Nt,r=St,o=Tn,a=Ft,l=dn,c=Et.DEFAULT_ANISOTROPY,h=Lt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=fi(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Kn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Rn?ut:Lt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case $s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case $s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Kn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Rn:Qa}set encoding(e){Kn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rn?ut:Lt}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Xa;Et.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],S=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,A=(m+1)/2,D=(f+1)/2,R=(h+d)/4,w=(u+S)/4,G=(g+p)/4;return x>A&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=w/n):A>D?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=R/s,r=G/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=G/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-S)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ol extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Kn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rn?ut:Lt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Et(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class so extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bl extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],S=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=S;return}if(u!==S||l!==d||c!==m||h!==g){let p=1-a;const f=l*d+c*m+h*g+u*S,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const D=Math.sqrt(x),R=Math.atan2(D,f*b);p=Math.sin(p*R)/D,a=Math.sin(a*R)/D}const A=a*b;if(l=l*p+d*A,c=c*p+m*A,h=h*p+g*A,u=u*p+S*A,p===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xs.copy(this).projectOnVector(e),this.sub(xs)}reflect(e){return this.sub(xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xs=new U,Zr=new pi;class mi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pt):Pt.fromBufferAttribute(r,o),Pt.applyMatrix4(e.matrixWorld),this.expandByPoint(Pt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mi.copy(n.boundingBox)),Mi.applyMatrix4(e.matrixWorld),this.union(Mi)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pt),Pt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ai),yi.subVectors(this.max,ai),Dn.subVectors(e.a,ai),Un.subVectors(e.b,ai),In.subVectors(e.c,ai),nn.subVectors(Un,Dn),sn.subVectors(In,Un),_n.subVectors(Dn,In);let t=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-_n.z,_n.y,nn.z,0,-nn.x,sn.z,0,-sn.x,_n.z,0,-_n.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-_n.y,_n.x,0];return!Ss(t,Dn,Un,In,yi)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,Dn,Un,In,yi))?!1:(Ei.crossVectors(nn,sn),t=[Ei.x,Ei.y,Ei.z],Ss(t,Dn,Un,In,yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new U,new U,new U,new U,new U,new U,new U,new U],Pt=new U,Mi=new mi,Dn=new U,Un=new U,In=new U,nn=new U,sn=new U,_n=new U,ai=new U,yi=new U,Ei=new U,vn=new U;function Ss(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vn.fromArray(i,r);const a=s.x*Math.abs(vn.x)+s.y*Math.abs(vn.y)+s.z*Math.abs(vn.z),l=e.dot(vn),c=t.dot(vn),h=n.dot(vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Hl=new mi,oi=new U,Ms=new U;class Qi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oi.subVectors(e,this.center);const t=oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(oi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oi.copy(e.center).add(Ms)),this.expandByPoint(oi.copy(e.center).sub(Ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new U,ys=new U,bi=new U,rn=new U,Es=new U,Ti=new U,bs=new U;class ro{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ys.copy(e).add(t).multiplyScalar(.5),bi.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(ys);const r=e.distanceTo(t)*.5,o=-this.direction.dot(bi),a=rn.dot(this.direction),l=-rn.dot(bi),c=rn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const S=1/h;u*=S,d*=S,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ys).addScaledVector(bi,d),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),s=Yt.dot(Yt)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,s,r){Es.subVectors(t,e),Ti.subVectors(n,e),bs.crossVectors(Es,Ti);let o=this.direction.dot(bs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rn.subVectors(this.origin,e);const l=a*this.direction.dot(Ti.crossVectors(rn,Ti));if(l<0)return null;const c=a*this.direction.dot(Es.cross(rn));if(c<0||l+c>o)return null;const h=-a*rn.dot(bs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,s,r,o,a,l,c,h,u,d,m,g,S,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,m,g,S,p)}set(e,t,n,s,r,o,a,l,c,h,u,d,m,g,S,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Nn.setFromMatrixColumn(e,0).length(),r=1/Nn.setFromMatrixColumn(e,1).length(),o=1/Nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,m=o*u,g=a*h,S=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-S*c,t[9]=-a*l,t[2]=S-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,S=c*u;t[0]=d+S*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=S+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,S=c*u;t[0]=d-S*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=S-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*u,g=a*h,S=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+S,t[1]=l*u,t[5]=S*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,S=a*c;t[0]=l*h,t[4]=S-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-S*u}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,S=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+S,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=S*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zl,e,Vl)}lookAt(e,t,n){const s=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),an.crossVectors(n,Tt),an.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),an.crossVectors(n,Tt)),an.normalize(),Ai.crossVectors(Tt,an),s[0]=an.x,s[4]=Ai.x,s[8]=Tt.x,s[1]=an.y,s[5]=Ai.y,s[9]=Tt.y,s[2]=an.z,s[6]=Ai.z,s[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],S=n[6],p=n[10],f=n[14],b=n[3],x=n[7],A=n[11],D=n[15],R=s[0],w=s[4],G=s[8],se=s[12],v=s[1],T=s[5],X=s[9],ee=s[13],C=s[2],H=s[6],z=s[10],q=s[14],k=s[3],V=s[7],j=s[11],Z=s[15];return r[0]=o*R+a*v+l*C+c*k,r[4]=o*w+a*T+l*H+c*V,r[8]=o*G+a*X+l*z+c*j,r[12]=o*se+a*ee+l*q+c*Z,r[1]=h*R+u*v+d*C+m*k,r[5]=h*w+u*T+d*H+m*V,r[9]=h*G+u*X+d*z+m*j,r[13]=h*se+u*ee+d*q+m*Z,r[2]=g*R+S*v+p*C+f*k,r[6]=g*w+S*T+p*H+f*V,r[10]=g*G+S*X+p*z+f*j,r[14]=g*se+S*ee+p*q+f*Z,r[3]=b*R+x*v+A*C+D*k,r[7]=b*w+x*T+A*H+D*V,r[11]=b*G+x*X+A*z+D*j,r[15]=b*se+x*ee+A*q+D*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],S=e[7],p=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*m-n*l*m)+S*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],S=e[13],p=e[14],f=e[15],b=u*p*c-S*d*c+S*l*m-a*p*m-u*l*f+a*d*f,x=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,A=h*S*c-g*u*c+g*a*m-o*S*m-h*a*f+o*u*f,D=g*u*l-h*S*l-g*a*d+o*S*d+h*a*p-o*u*p,R=t*b+n*x+s*A+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=b*w,e[1]=(S*d*r-u*p*r-S*s*m+n*p*m+u*s*f-n*d*f)*w,e[2]=(a*p*r-S*l*r+S*s*c-n*p*c-a*s*f+n*l*f)*w,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*m-n*l*m)*w,e[4]=x*w,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*w,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*m+t*l*m)*w,e[8]=A*w,e[9]=(g*u*r-h*S*r-g*n*m+t*S*m+h*n*f-t*u*f)*w,e[10]=(o*S*r-g*a*r+g*n*c-t*S*c-o*n*f+t*a*f)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*w,e[12]=D*w,e[13]=(h*S*s-g*u*s+g*n*d-t*S*d-h*n*p+t*u*p)*w,e[14]=(g*a*s-o*S*s-g*n*l+t*S*l+o*n*p-t*a*p)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,S=o*h,p=o*u,f=a*u,b=l*c,x=l*h,A=l*u,D=n.x,R=n.y,w=n.z;return s[0]=(1-(S+f))*D,s[1]=(m+A)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(m-A)*R,s[5]=(1-(d+f))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(g+x)*w,s[9]=(p-b)*w,s[10]=(1-(d+S))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Nn.set(s[0],s[1],s[2]).length();const o=Nn.set(s[4],s[5],s[6]).length(),a=Nn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dt.copy(this);const c=1/r,h=1/o,u=1/a;return Dt.elements[0]*=c,Dt.elements[1]*=c,Dt.elements[2]*=c,Dt.elements[4]*=h,Dt.elements[5]*=h,Dt.elements[6]*=h,Dt.elements[8]*=u,Dt.elements[9]*=u,Dt.elements[10]*=u,t.setFromRotationMatrix(Dt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=en){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(a===en)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$i)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=en){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,m=(n+s)*h;let g,S;if(a===en)g=(o+r)*u,S=-2*u;else if(a===$i)g=r*u,S=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Nn=new U,Dt=new it,zl=new U(0,0,0),Vl=new U(1,1,1),an=new U,Ai=new U,Tt=new U,Jr=new it,Qr=new pi;class es{constructor(e=0,t=0,n=0,s=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qr.setFromEuler(this),this.setFromQuaternion(Qr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kl=0;const ea=new U,Fn=new pi,$t=new it,wi=new U,li=new U,Gl=new U,Wl=new pi,ta=new U(1,0,0),na=new U(0,1,0),ia=new U(0,0,1),Xl={type:"added"},ql={type:"removed"};class dt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new U,t=new es,n=new pi,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Fe}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.premultiply(Fn),this}rotateX(e){return this.rotateOnAxis(ta,e)}rotateY(e){return this.rotateOnAxis(na,e)}rotateZ(e){return this.rotateOnAxis(ia,e)}translateOnAxis(e,t){return ea.copy(e).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ta,e)}translateY(e){return this.translateOnAxis(na,e)}translateZ(e){return this.translateOnAxis(ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wi.copy(e):wi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(li,wi,this.up):$t.lookAt(wi,li,this.up),this.quaternion.setFromRotationMatrix($t),s&&($t.extractRotation(s.matrixWorld),Fn.setFromRotationMatrix($t),this.quaternion.premultiply(Fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,e,Gl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,Wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new U(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new U,Kt=new U,Ts=new U,jt=new U,On=new U,Bn=new U,sa=new U,As=new U,ws=new U,Rs=new U;class Vt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ut.subVectors(e,t),s.cross(Ut);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ut.subVectors(s,t),Kt.subVectors(n,t),Ts.subVectors(e,t);const o=Ut.dot(Ut),a=Ut.dot(Kt),l=Ut.dot(Ts),c=Kt.dot(Kt),h=Kt.dot(Ts),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l)}static isFrontFacing(e,t,n,s){return Ut.subVectors(n,t),Kt.subVectors(e,t),Ut.cross(Kt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ut.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;On.subVectors(s,n),Bn.subVectors(r,n),As.subVectors(e,n);const l=On.dot(As),c=Bn.dot(As);if(l<=0&&c<=0)return t.copy(n);ws.subVectors(e,s);const h=On.dot(ws),u=Bn.dot(ws);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(On,o);Rs.subVectors(e,r);const m=On.dot(Rs),g=Bn.dot(Rs);if(g>=0&&m<=g)return t.copy(r);const S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bn,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return sa.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(sa,a);const f=1/(p+S+d);return o=S*f,a=d*f,t.copy(n).addScaledVector(On,o).addScaledVector(Bn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},Ri={h:0,s:0,l:0};function Cs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Dl(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cs(o,r,e+1/3),this.g=Cs(o,r,e),this.b=Cs(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=oo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return qe.fromWorkingColorSpace(mt.copy(this),e),Math.round(Mt(mt.r*255,0,255))*65536+Math.round(Mt(mt.g*255,0,255))*256+Math.round(Mt(mt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,s=mt.g,r=mt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=ut){qe.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,s=mt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(on),this.setHSL(on.h+e,on.s+t,on.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(Ri);const n=ms(on.h,Ri.h,t),s=ms(on.s,Ri.s,t),r=ms(on.l,Ri.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Ve;Ve.NAMES=oo;let Yl=0;class gi extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=$n,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Ws,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ln,this.stencilZFail=Ln,this.stencilZPass=Ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ws&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ln&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ln&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ln&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ji extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new U,Ci=new He;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix3(e),this.setXY(t,Ci.x,Ci.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xr&&(e.usage=this.usage),e}}class lo extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class co extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $l=0;const Ct=new it,Ls=new dt,Hn=new U,At=new mi,ci=new mi,ot=new U;class Wt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(to(e)?co:lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];At.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(At.min,ci.min),At.expandByPoint(ot),ot.addVectors(At.max,ci.max),At.expandByPoint(ot)):(At.expandByPoint(ci.min),At.expandByPoint(ci.max))}At.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ot.fromBufferAttribute(a,c),l&&(Hn.fromBufferAttribute(e,c),ot.add(Hn)),s=Math.max(s,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let v=0;v<a;v++)c[v]=new U,h[v]=new U;const u=new U,d=new U,m=new U,g=new He,S=new He,p=new He,f=new U,b=new U;function x(v,T,X){u.fromArray(s,v*3),d.fromArray(s,T*3),m.fromArray(s,X*3),g.fromArray(o,v*2),S.fromArray(o,T*2),p.fromArray(o,X*2),d.sub(u),m.sub(u),S.sub(g),p.sub(g);const ee=1/(S.x*p.y-p.x*S.y);isFinite(ee)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-S.y).multiplyScalar(ee),b.copy(m).multiplyScalar(S.x).addScaledVector(d,-p.x).multiplyScalar(ee),c[v].add(f),c[T].add(f),c[X].add(f),h[v].add(b),h[T].add(b),h[X].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let v=0,T=A.length;v<T;++v){const X=A[v],ee=X.start,C=X.count;for(let H=ee,z=ee+C;H<z;H+=3)x(n[H+0],n[H+1],n[H+2])}const D=new U,R=new U,w=new U,G=new U;function se(v){w.fromArray(r,v*3),G.copy(w);const T=c[v];D.copy(T),D.sub(w.multiplyScalar(w.dot(T))).normalize(),R.crossVectors(G,T);const ee=R.dot(h[v])<0?-1:1;l[v*4]=D.x,l[v*4+1]=D.y,l[v*4+2]=D.z,l[v*4+3]=ee}for(let v=0,T=A.length;v<T;++v){const X=A[v],ee=X.start,C=X.count;for(let H=ee,z=ee+C;H<z;H+=3)se(n[H+0]),se(n[H+1]),se(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),S=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ra=new it,xn=new ro,Li=new Qi,aa=new U,zn=new U,Vn=new U,kn=new U,Ps=new U,Pi=new U,Di=new He,Ui=new He,Ii=new He,oa=new U,la=new U,ca=new U,Ni=new U,Fi=new U;class kt extends dt{constructor(e=new Wt,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Pi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ps.fromBufferAttribute(u,e),o?Pi.addScaledVector(Ps,h):Pi.addScaledVector(Ps.sub(t),h))}t.add(Pi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere),Li.applyMatrix4(r),xn.copy(e.ray).recast(e.near),!(Li.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Li,aa)===null||xn.origin.distanceToSquared(aa)>(e.far-e.near)**2))&&(ra.copy(r).invert(),xn.copy(e.ray).applyMatrix4(ra),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=d.length;g<S;g++){const p=d[g],f=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,D=x;A<D;A+=3){const R=a.getX(A),w=a.getX(A+1),G=a.getX(A+2);s=Oi(this,f,e,n,c,h,u,R,w,G),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=g,f=S;p<f;p+=3){const b=a.getX(p),x=a.getX(p+1),A=a.getX(p+2);s=Oi(this,o,e,n,c,h,u,b,x,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=d.length;g<S;g++){const p=d[g],f=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,D=x;A<D;A+=3){const R=A,w=A+1,G=A+2;s=Oi(this,f,e,n,c,h,u,R,w,G),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=g,f=S;p<f;p+=3){const b=p,x=p+1,A=p+2;s=Oi(this,o,e,n,c,h,u,b,x,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Kl(i,e,t,n,s,r,o,a){let l;if(e.side===yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===fn,a),l===null)return null;Fi.copy(a),Fi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fi);return c<t.near||c>t.far?null:{distance:c,point:Fi.clone(),object:i}}function Oi(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,zn),i.getVertexPosition(l,Vn),i.getVertexPosition(c,kn);const h=Kl(i,e,t,n,zn,Vn,kn,Ni);if(h){s&&(Di.fromBufferAttribute(s,a),Ui.fromBufferAttribute(s,l),Ii.fromBufferAttribute(s,c),h.uv=Vt.getInterpolation(Ni,zn,Vn,kn,Di,Ui,Ii,new He)),r&&(Di.fromBufferAttribute(r,a),Ui.fromBufferAttribute(r,l),Ii.fromBufferAttribute(r,c),h.uv1=Vt.getInterpolation(Ni,zn,Vn,kn,Di,Ui,Ii,new He),h.uv2=h.uv1),o&&(oa.fromBufferAttribute(o,a),la.fromBufferAttribute(o,l),ca.fromBufferAttribute(o,c),h.normal=Vt.getInterpolation(Ni,zn,Vn,kn,oa,la,ca,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Vt.getNormal(zn,Vn,kn,u.normal),h.face=u}return h}class _i extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function g(S,p,f,b,x,A,D,R,w,G,se){const v=A/w,T=D/G,X=A/2,ee=D/2,C=R/2,H=w+1,z=G+1;let q=0,k=0;const V=new U;for(let j=0;j<z;j++){const Z=j*T-ee;for(let he=0;he<H;he++){const be=he*v-X;V[S]=be*b,V[p]=Z*x,V[f]=C,c.push(V.x,V.y,V.z),V[S]=0,V[p]=0,V[f]=R>0?1:-1,h.push(V.x,V.y,V.z),u.push(he/w),u.push(1-j/G),q+=1}}for(let j=0;j<G;j++)for(let Z=0;Z<w;Z++){const he=d+Z+H*j,be=d+Z+H*(j+1),B=d+(Z+1)+H*(j+1),K=d+(Z+1)+H*j;l.push(he,be,K),l.push(be,B,K),k+=6}a.addGroup(m,k,se),m+=k,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ei(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _t(i){const e={};for(let t=0;t<i.length;t++){const n=ei(i[t]);for(const s in n)e[s]=n[s]}return e}function jl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ho(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}const Zl={clone:ei,merge:_t};var Jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jl,this.fragmentShader=Ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uo extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=en}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ln=new U,ha=new He,ua=new He;class It extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ln.x,ln.y).multiplyScalar(-e/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ln.x,ln.y).multiplyScalar(-e/ln.z)}getViewSize(e,t){return this.getViewBounds(e,ha,ua),t.subVectors(ua,ha)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gn=-90,Wn=1;class ec extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new It(Gn,Wn,e,t);s.layers=this.layers,this.add(s);const r=new It(Gn,Wn,e,t);r.layers=this.layers,this.add(r);const o=new It(Gn,Wn,e,t);o.layers=this.layers,this.add(o);const a=new It(Gn,Wn,e,t);a.layers=this.layers,this.add(a);const l=new It(Gn,Wn,e,t);l.layers=this.layers,this.add(l);const c=new It(Gn,Wn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fo extends Et{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Zn,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tc extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Kn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Rn?ut:Lt),this.texture=new fo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _i(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:hn});r.uniforms.tEquirect.value=t;const o=new kt(s,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=St),new ec(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ds=new U,nc=new U,ic=new Fe;class Mn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ds.subVectors(n,t).cross(nc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ds),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ic.getNormalMatrix(e),s=this.coplanarPoint(Ds).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new Qi,Bi=new U;class nr{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],S=s[10],p=s[11],f=s[12],b=s[13],x=s[14],A=s[15];if(n[0].setComponents(l-r,d-c,p-m,A-f).normalize(),n[1].setComponents(l+r,d+c,p+m,A+f).normalize(),n[2].setComponents(l+o,d+h,p+g,A+b).normalize(),n[3].setComponents(l-o,d-h,p-g,A-b).normalize(),n[4].setComponents(l-a,d-u,p-S,A-x).normalize(),t===en)n[5].setComponents(l+a,d+u,p+S,A+x).normalize();else if(t===$i)n[5].setComponents(a,u,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Bi.x=s.normal.x>0?e.max.x:e.min.x,Bi.y=s.normal.y>0?e.max.y:e.min.y,Bi.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function po(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sc(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let S;if(u instanceof Float32Array)S=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)S=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)S=i.SHORT;else if(u instanceof Uint32Array)S=i.UNSIGNED_INT;else if(u instanceof Int32Array)S=i.INT;else if(u instanceof Int8Array)S=i.BYTE;else if(u instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:S,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let S=0,p=g.length;S<p;S++){const f=g[S];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class ts extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],S=[],p=[];for(let f=0;f<h;f++){const b=f*d-o;for(let x=0;x<c;x++){const A=x*u-r;g.push(A,-b,0),S.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const x=b+c*f,A=b+c*(f+1),D=b+1+c*(f+1),R=b+1+c*f;m.push(x,A,R),m.push(A,D,R)}this.setIndex(m),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(S,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ac=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_c=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ec=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Oc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$c=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ih=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ih=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$h=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ru=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ou=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,du=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_u=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Au=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:rc,alphahash_pars_fragment:ac,alphamap_fragment:oc,alphamap_pars_fragment:lc,alphatest_fragment:cc,alphatest_pars_fragment:hc,aomap_fragment:uc,aomap_pars_fragment:dc,batching_pars_vertex:fc,batching_vertex:pc,begin_vertex:mc,beginnormal_vertex:gc,bsdfs:_c,iridescence_fragment:vc,bumpmap_pars_fragment:xc,clipping_planes_fragment:Sc,clipping_planes_pars_fragment:Mc,clipping_planes_pars_vertex:yc,clipping_planes_vertex:Ec,color_fragment:bc,color_pars_fragment:Tc,color_pars_vertex:Ac,color_vertex:wc,common:Rc,cube_uv_reflection_fragment:Cc,defaultnormal_vertex:Lc,displacementmap_pars_vertex:Pc,displacementmap_vertex:Dc,emissivemap_fragment:Uc,emissivemap_pars_fragment:Ic,colorspace_fragment:Nc,colorspace_pars_fragment:Fc,envmap_fragment:Oc,envmap_common_pars_fragment:Bc,envmap_pars_fragment:Hc,envmap_pars_vertex:zc,envmap_physical_pars_fragment:Jc,envmap_vertex:Vc,fog_vertex:kc,fog_pars_vertex:Gc,fog_fragment:Wc,fog_pars_fragment:Xc,gradientmap_pars_fragment:qc,lightmap_fragment:Yc,lightmap_pars_fragment:$c,lights_lambert_fragment:Kc,lights_lambert_pars_fragment:jc,lights_pars_begin:Zc,lights_toon_fragment:Qc,lights_toon_pars_fragment:eh,lights_phong_fragment:th,lights_phong_pars_fragment:nh,lights_physical_fragment:ih,lights_physical_pars_fragment:sh,lights_fragment_begin:rh,lights_fragment_maps:ah,lights_fragment_end:oh,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:ch,logdepthbuf_pars_vertex:hh,logdepthbuf_vertex:uh,map_fragment:dh,map_pars_fragment:fh,map_particle_fragment:ph,map_particle_pars_fragment:mh,metalnessmap_fragment:gh,metalnessmap_pars_fragment:_h,morphcolor_vertex:vh,morphnormal_vertex:xh,morphtarget_pars_vertex:Sh,morphtarget_vertex:Mh,normal_fragment_begin:yh,normal_fragment_maps:Eh,normal_pars_fragment:bh,normal_pars_vertex:Th,normal_vertex:Ah,normalmap_pars_fragment:wh,clearcoat_normal_fragment_begin:Rh,clearcoat_normal_fragment_maps:Ch,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Ph,opaque_fragment:Dh,packing:Uh,premultiplied_alpha_fragment:Ih,project_vertex:Nh,dithering_fragment:Fh,dithering_pars_fragment:Oh,roughnessmap_fragment:Bh,roughnessmap_pars_fragment:Hh,shadowmap_pars_fragment:zh,shadowmap_pars_vertex:Vh,shadowmap_vertex:kh,shadowmask_pars_fragment:Gh,skinbase_vertex:Wh,skinning_pars_vertex:Xh,skinning_vertex:qh,skinnormal_vertex:Yh,specularmap_fragment:$h,specularmap_pars_fragment:Kh,tonemapping_fragment:jh,tonemapping_pars_fragment:Zh,transmission_fragment:Jh,transmission_pars_fragment:Qh,uv_pars_fragment:eu,uv_pars_vertex:tu,uv_vertex:nu,worldpos_vertex:iu,background_vert:su,background_frag:ru,backgroundCube_vert:au,backgroundCube_frag:ou,cube_vert:lu,cube_frag:cu,depth_vert:hu,depth_frag:uu,distanceRGBA_vert:du,distanceRGBA_frag:fu,equirect_vert:pu,equirect_frag:mu,linedashed_vert:gu,linedashed_frag:_u,meshbasic_vert:vu,meshbasic_frag:xu,meshlambert_vert:Su,meshlambert_frag:Mu,meshmatcap_vert:yu,meshmatcap_frag:Eu,meshnormal_vert:bu,meshnormal_frag:Tu,meshphong_vert:Au,meshphong_frag:wu,meshphysical_vert:Ru,meshphysical_frag:Cu,meshtoon_vert:Lu,meshtoon_frag:Pu,points_vert:Du,points_frag:Uu,shadow_vert:Iu,shadow_frag:Nu,sprite_vert:Fu,sprite_frag:Ou},ie={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},zt={basic:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:_t([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:_t([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:_t([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:_t([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:_t([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:_t([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:_t([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:_t([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:_t([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:_t([ie.lights,ie.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};zt.physical={uniforms:_t([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Hi={r:0,b:0,g:0};function Bu(i,e,t,n,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?S(a,l):x&&x.isColor&&(S(x,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Zi)?(h===void 0&&(h=new kt(new _i(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ei(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=qe.getTransfer(x.colorSpace)!==Ze,(u!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new ts(2,2),new pn({name:"BackgroundMaterial",uniforms:ei(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=qe.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function S(p,f){p.getRGB(Hi,ho(i)),n.buffers.color.setClear(Hi.r,Hi.g,Hi.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,S(a,l)},render:g}}function Hu(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(C,H,z,q,k){let V=!1;if(o){const j=S(q,z,H);c!==j&&(c=j,m(c.object)),V=f(C,q,z,k),V&&b(C,q,z,k)}else{const j=H.wireframe===!0;(c.geometry!==q.id||c.program!==z.id||c.wireframe!==j)&&(c.geometry=q.id,c.program=z.id,c.wireframe=j,V=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,G(C,H,z,q),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function S(C,H,z){const q=z.wireframe===!0;let k=a[C.id];k===void 0&&(k={},a[C.id]=k);let V=k[H.id];V===void 0&&(V={},k[H.id]=V);let j=V[q];return j===void 0&&(j=p(d()),V[q]=j),j}function p(C){const H=[],z=[],q=[];for(let k=0;k<s;k++)H[k]=0,z[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:z,attributeDivisors:q,object:C,attributes:{},index:null}}function f(C,H,z,q){const k=c.attributes,V=H.attributes;let j=0;const Z=z.getAttributes();for(const he in Z)if(Z[he].location>=0){const B=k[he];let K=V[he];if(K===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),B===void 0||B.attribute!==K||K&&B.data!==K.data)return!0;j++}return c.attributesNum!==j||c.index!==q}function b(C,H,z,q){const k={},V=H.attributes;let j=0;const Z=z.getAttributes();for(const he in Z)if(Z[he].location>=0){let B=V[he];B===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(B=C.instanceColor));const K={};K.attribute=B,B&&B.data&&(K.data=B.data),k[he]=K,j++}c.attributes=k,c.attributesNum=j,c.index=q}function x(){const C=c.newAttributes;for(let H=0,z=C.length;H<z;H++)C[H]=0}function A(C){D(C,0)}function D(C,H){const z=c.newAttributes,q=c.enabledAttributes,k=c.attributeDivisors;z[C]=1,q[C]===0&&(i.enableVertexAttribArray(C),q[C]=1),k[C]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,H),k[C]=H)}function R(){const C=c.newAttributes,H=c.enabledAttributes;for(let z=0,q=H.length;z<q;z++)H[z]!==C[z]&&(i.disableVertexAttribArray(z),H[z]=0)}function w(C,H,z,q,k,V,j){j===!0?i.vertexAttribIPointer(C,H,z,k,V):i.vertexAttribPointer(C,H,z,q,k,V)}function G(C,H,z,q){if(n.isWebGL2===!1&&(C.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=q.attributes,V=z.getAttributes(),j=H.defaultAttributeValues;for(const Z in V){const he=V[Z];if(he.location>=0){let be=k[Z];if(be===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),be!==void 0){const B=be.normalized,K=be.itemSize,oe=t.get(be);if(oe===void 0)continue;const xe=oe.buffer,Se=oe.type,de=oe.bytesPerElement,ze=n.isWebGL2===!0&&(Se===i.INT||Se===i.UNSIGNED_INT||be.gpuType===qa);if(be.isInterleavedBufferAttribute){const Re=be.data,P=Re.stride,ct=be.offset;if(Re.isInstancedInterleavedBuffer){for(let _e=0;_e<he.locationSize;_e++)D(he.location+_e,Re.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let _e=0;_e<he.locationSize;_e++)A(he.location+_e);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let _e=0;_e<he.locationSize;_e++)w(he.location+_e,K/he.locationSize,Se,B,P*de,(ct+K/he.locationSize*_e)*de,ze)}else{if(be.isInstancedBufferAttribute){for(let Re=0;Re<he.locationSize;Re++)D(he.location+Re,be.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Re=0;Re<he.locationSize;Re++)A(he.location+Re);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Re=0;Re<he.locationSize;Re++)w(he.location+Re,K/he.locationSize,Se,B,K*de,K/he.locationSize*Re*de,ze)}}else if(j!==void 0){const B=j[Z];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(he.location,B);break;case 3:i.vertexAttrib3fv(he.location,B);break;case 4:i.vertexAttrib4fv(he.location,B);break;default:i.vertexAttrib1fv(he.location,B)}}}}R()}function se(){X();for(const C in a){const H=a[C];for(const z in H){const q=H[z];for(const k in q)g(q[k].object),delete q[k];delete H[z]}delete a[C]}}function v(C){if(a[C.id]===void 0)return;const H=a[C.id];for(const z in H){const q=H[z];for(const k in q)g(q[k].object),delete q[k];delete H[z]}delete a[C.id]}function T(C){for(const H in a){const z=a[H];if(z[C.id]===void 0)continue;const q=z[C.id];for(const k in q)g(q[k].object),delete q[k];delete z[C.id]}}function X(){ee(),h=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:ee,dispose:se,releaseStatesOfGeometry:v,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:A,disableUnusedAttributes:R}}function zu(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let S=0;S<d;S++)g+=u[S];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Vu(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,A=o||e.has("OES_texture_float"),D=x&&A,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:S,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:R}}function ku(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Mn,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,S=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,x=b*4;let A=f.clippingState||null;l.value=A,A=h(g,d,x,m);for(let D=0;D!==x;++D)A[D]=t[D];f.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const S=u!==null?u.length:0;let p=null;if(S!==0){if(p=l.value,g!==!0||p===null){const f=m+S*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,A=m;x!==S;++x,A+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function Gu(i){let e=new WeakMap;function t(o,a){return a===Xs?o.mapping=Zn:a===qs&&(o.mapping=Jn),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xs||a===qs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ir extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qn=4,da=[.125,.215,.35,.446,.526,.582],bn=20,Us=new ir,fa=new Ve;let Is=null,Ns=0,Fs=0;const yn=(1+Math.sqrt(5))/2,Xn=1/yn,pa=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,yn,Xn),new U(0,yn,-Xn),new U(Xn,0,yn),new U(-Xn,0,yn),new U(yn,Xn,0),new U(-yn,Xn,0)];class ma{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Is=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Is,Ns,Fs),e.scissorTest=!1,zi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===Jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:di,format:Ft,colorSpace:tn,depthBuffer:!1},s=ga(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ga(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wu(r)),this._blurMaterial=Xu(r,e,t)}return s}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,n,s){const a=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fa),h.toneMapping=un,h.autoClear=!1;const m=new ji({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new kt(new _i,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(fa),S=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;zi(s,b*x,f>2?x:0,x,x),h.setRenderTarget(s),S&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Zn||e.mapping===Jn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=va()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_a());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pa[(s-1)%pa.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new kt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*bn-1),S=r/g,p=isFinite(r)?1+Math.floor(h*S):bn;p>bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bn}`);const f=[];let b=0;for(let w=0;w<bn;++w){const G=w/S,se=Math.exp(-G*G/2);f.push(se),w===0?b+=se:w<p&&(b+=2*se)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const A=this._sizeLods[s],D=3*A*(s>x-qn?s-x+qn:0),R=4*(this._cubeSize-A);zi(t,D,R,3*A,2*A),l.setRenderTarget(t),l.render(u,Us)}}function Wu(i){const e=[],t=[],n=[];let s=i;const r=i-qn+1+da.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-qn?l=da[o-i+qn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,S=3,p=2,f=1,b=new Float32Array(S*g*m),x=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,G=R>2?0:-1,se=[w,G,0,w+2/3,G,0,w+2/3,G+1,0,w,G,0,w+2/3,G+1,0,w,G+1,0];b.set(se,S*g*R),x.set(d,p*g*R);const v=[R,R,R,R,R,R];A.set(v,f*g*R)}const D=new Wt;D.setAttribute("position",new Gt(b,S)),D.setAttribute("uv",new Gt(x,p)),D.setAttribute("faceIndex",new Gt(A,f)),e.push(D),s>qn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ga(i,e,t){const n=new Cn(i,e,t);return n.texture.mapping=Zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xu(i,e,t){const n=new Float32Array(bn),s=new U(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function _a(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function va(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function sr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xs||l===qs,h=l===Zn||l===Jn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ma(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ma(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $u(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const S=d.morphAttributes[g];for(let p=0,f=S.length;p<f;p++)e.remove(S[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const S=m[g];for(let p=0,f=S.length;p<f;p++)e.update(S[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let S=0;if(m!==null){const b=m.array;S=m.version;for(let x=0,A=b.length;x<A;x+=3){const D=b[x+0],R=b[x+1],w=b[x+2];d.push(D,R,R,w,w,D)}}else if(g!==void 0){const b=g.array;S=g.version;for(let x=0,A=b.length/3-1;x<A;x+=3){const D=x+0,R=x+1,w=x+2;d.push(D,R,R,w,w,D)}}else return;const p=new(to(d)?co:lo)(d,1);p.version=S;const f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ku(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,S){if(S===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*l,S),t.update(g,r,S)}function d(m,g,S){if(S===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<S;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,S);let f=0;for(let b=0;b<S;b++)f+=g[b];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ju(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zu(i,e){return i[0]-e[0]}function Ju(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Qu(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let C=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",C)};S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let G=0;b===!0&&(G=1),x===!0&&(G=2),A===!0&&(G=3);let se=h.attributes.position.count*G,v=1;se>e.maxTextureSize&&(v=Math.ceil(se/e.maxTextureSize),se=e.maxTextureSize);const T=new Float32Array(se*v*4*g),X=new so(T,se,v,g);X.type=Qt,X.needsUpdate=!0;const ee=G*4;for(let H=0;H<g;H++){const z=D[H],q=R[H],k=w[H],V=se*v*4*H;for(let j=0;j<z.count;j++){const Z=j*ee;b===!0&&(o.fromBufferAttribute(z,j),T[V+Z+0]=o.x,T[V+Z+1]=o.y,T[V+Z+2]=o.z,T[V+Z+3]=0),x===!0&&(o.fromBufferAttribute(q,j),T[V+Z+4]=o.x,T[V+Z+5]=o.y,T[V+Z+6]=o.z,T[V+Z+7]=0),A===!0&&(o.fromBufferAttribute(k,j),T[V+Z+8]=o.x,T[V+Z+9]=o.y,T[V+Z+10]=o.z,T[V+Z+11]=k.itemSize===4?o.w:1)}}S={count:g,texture:X,size:new He(se,v)},r.set(h,S),h.addEventListener("dispose",C)}let p=0;for(let b=0;b<d.length;b++)p+=d[b];const f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}else{const m=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){const A=g[x];A[0]=x,A[1]=d[x]}g.sort(Ju);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Zu);const S=h.morphAttributes.position,p=h.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const A=a[x],D=A[0],R=A[1];D!==Number.MAX_SAFE_INTEGER&&R?(S&&h.getAttribute("morphTarget"+x)!==S[D]&&h.setAttribute("morphTarget"+x,S[D]),p&&h.getAttribute("morphNormal"+x)!==p[D]&&h.setAttribute("morphNormal"+x,p[D]),s[x]=R,f+=R):(S&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}const b=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function ed(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class mo extends Et{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:wn,h!==wn&&h!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wn&&(n=cn),n===void 0&&h===Qn&&(n=An),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const go=new Et,_o=new mo(1,1);_o.compareFunction=eo;const vo=new so,xo=new Bl,So=new fo,xa=[],Sa=[],Ma=new Float32Array(16),ya=new Float32Array(9),Ea=new Float32Array(4);function ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xa[s];if(r===void 0&&(r=new Float32Array(s),xa[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ns(i,e){let t=Sa[e];t===void 0&&(t=new Int32Array(e),Sa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function td(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function rd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Ea.set(n),i.uniformMatrix2fv(this.addr,!1,Ea),rt(t,n)}}function ad(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;ya.set(n),i.uniformMatrix3fv(this.addr,!1,ya),rt(t,n)}}function od(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Ma.set(n),i.uniformMatrix4fv(this.addr,!1,Ma),rt(t,n)}}function ld(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function ud(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function dd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function gd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?_o:go;t.setTexture2D(e||r,s)}function _d(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xo,s)}function vd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||So,s)}function xd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vo,s)}function Sd(i){switch(i){case 5126:return td;case 35664:return nd;case 35665:return id;case 35666:return sd;case 35674:return rd;case 35675:return ad;case 35676:return od;case 5124:case 35670:return ld;case 35667:case 35671:return cd;case 35668:case 35672:return hd;case 35669:case 35673:return ud;case 5125:return dd;case 36294:return fd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return _d;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return xd}}function Md(i,e){i.uniform1fv(this.addr,e)}function yd(i,e){const t=ni(e,this.size,2);i.uniform2fv(this.addr,t)}function Ed(i,e){const t=ni(e,this.size,3);i.uniform3fv(this.addr,t)}function bd(i,e){const t=ni(e,this.size,4);i.uniform4fv(this.addr,t)}function Td(i,e){const t=ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ad(i,e){const t=ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wd(i,e){const t=ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rd(i,e){i.uniform1iv(this.addr,e)}function Cd(i,e){i.uniform2iv(this.addr,e)}function Ld(i,e){i.uniform3iv(this.addr,e)}function Pd(i,e){i.uniform4iv(this.addr,e)}function Dd(i,e){i.uniform1uiv(this.addr,e)}function Ud(i,e){i.uniform2uiv(this.addr,e)}function Id(i,e){i.uniform3uiv(this.addr,e)}function Nd(i,e){i.uniform4uiv(this.addr,e)}function Fd(i,e,t){const n=this.cache,s=e.length,r=ns(t,s);st(n,r)||(i.uniform1iv(this.addr,r),rt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||go,r[o])}function Od(i,e,t){const n=this.cache,s=e.length,r=ns(t,s);st(n,r)||(i.uniform1iv(this.addr,r),rt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xo,r[o])}function Bd(i,e,t){const n=this.cache,s=e.length,r=ns(t,s);st(n,r)||(i.uniform1iv(this.addr,r),rt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||So,r[o])}function Hd(i,e,t){const n=this.cache,s=e.length,r=ns(t,s);st(n,r)||(i.uniform1iv(this.addr,r),rt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vo,r[o])}function zd(i){switch(i){case 5126:return Md;case 35664:return yd;case 35665:return Ed;case 35666:return bd;case 35674:return Td;case 35675:return Ad;case 35676:return wd;case 5124:case 35670:return Rd;case 35667:case 35671:return Cd;case 35668:case 35672:return Ld;case 35669:case 35673:return Pd;case 5125:return Dd;case 36294:return Ud;case 36295:return Id;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Od;case 35680:case 36300:case 36308:case 36293:return Bd;case 36289:case 36303:case 36311:case 36292:return Hd}}class Vd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sd(t.type)}}class kd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zd(t.type)}}class Gd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Os=/(\w+)(\])?(\[|\.)?/g;function ba(i,e){i.seq.push(e),i.map[e.id]=e}function Wd(i,e,t){const n=i.name,s=n.length;for(Os.lastIndex=0;;){const r=Os.exec(n),o=Os.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ba(t,c===void 0?new Vd(a,i,e):new kd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Gd(a),ba(t,u)),t=u}}}class Gi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Wd(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ta(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xd=37297;let qd=0;function Yd(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $d(i){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i);let n;switch(e===t?n="":e===Yi&&t===qi?n="LinearDisplayP3ToLinearSRGB":e===qi&&t===Yi&&(n="LinearSRGBToLinearDisplayP3"),i){case tn:case Ji:return[n,"LinearTransferOETF"];case ut:case tr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Aa(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yd(i.getShaderSource(e),o)}else return s}function Kd(i,e){const t=$d(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jd(i,e){let t;switch(e){case ol:t="Linear";break;case ll:t="Reinhard";break;case cl:t="OptimizedCineon";break;case hl:t="ACESFilmic";break;case dl:t="AgX";break;case ul:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yn).join(`
`)}function Jd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yn).join(`
`)}function Qd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ef(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Yn(i){return i!==""}function wa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ra(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(i){return i.replace(tf,sf)}const nf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sf(i,e){let t=De[e];if(t===void 0){const n=nf.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Js(t)}const rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ca(i){return i.replace(rf,af)}function af(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function La(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function of(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ga?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===No?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function lf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zn:case Jn:e="ENVMAP_TYPE_CUBE";break;case Zi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jn:e="ENVMAP_MODE_REFRACTION";break}return e}function hf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wa:e="ENVMAP_BLENDING_MULTIPLY";break;case rl:e="ENVMAP_BLENDING_MIX";break;case al:e="ENVMAP_BLENDING_ADD";break}return e}function uf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function df(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=of(t),c=lf(t),h=cf(t),u=hf(t),d=uf(t),m=t.isWebGL2?"":Zd(t),g=Jd(t),S=Qd(r),p=s.createProgram();let f,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Yn).join(`
`),f.length>0&&(f+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Yn).join(`
`),b.length>0&&(b+=`
`)):(f=[La(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yn).join(`
`),b=[m,La(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?De.tonemapping_pars_fragment:"",t.toneMapping!==un?jd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Kd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yn).join(`
`)),o=Js(o),o=wa(o,t),o=Ra(o,t),a=Js(a),a=wa(a,t),a=Ra(a,t),o=Ca(o),a=Ca(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const A=x+f+o,D=x+b+a,R=Ta(s,s.VERTEX_SHADER,A),w=Ta(s,s.FRAGMENT_SHADER,D);s.attachShader(p,R),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function G(X){if(i.debug.checkShaderErrors){const ee=s.getProgramInfoLog(p).trim(),C=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(w).trim();let z=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,w);else{const k=Aa(s,R,"vertex"),V=Aa(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ee+`
`+k+`
`+V)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(C===""||H==="")&&(q=!1);q&&(X.diagnostics={runnable:z,programLog:ee,vertexShader:{log:C,prefix:f},fragmentShader:{log:H,prefix:b}})}s.deleteShader(R),s.deleteShader(w),se=new Gi(s,p),v=ef(s,p)}let se;this.getUniforms=function(){return se===void 0&&G(this),se};let v;this.getAttributes=function(){return v===void 0&&G(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,Xd)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}let ff=0;class pf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mf(e),t.set(e,n)),n}}class mf{constructor(e){this.id=ff++,this.code=e,this.usedTimes=0}}function gf(i,e,t,n,s,r,o){const a=new ao,l=new pf,c=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,T,X,ee,C){const H=ee.fog,z=C.geometry,q=v.isMeshStandardMaterial?ee.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),V=k&&k.mapping===Zi?k.image.height:null,j=S[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=Z!==void 0?Z.length:0;let be=0;z.morphAttributes.position!==void 0&&(be=1),z.morphAttributes.normal!==void 0&&(be=2),z.morphAttributes.color!==void 0&&(be=3);let B,K,oe,xe;if(j){const $e=zt[j];B=$e.vertexShader,K=$e.fragmentShader}else B=v.vertexShader,K=v.fragmentShader,l.update(v),oe=l.getVertexShaderID(v),xe=l.getFragmentShaderID(v);const Se=i.getRenderTarget(),de=C.isInstancedMesh===!0,ze=C.isBatchedMesh===!0,Re=!!v.map,P=!!v.matcap,ct=!!k,_e=!!v.aoMap,Te=!!v.lightMap,me=!!v.bumpMap,Je=!!v.normalMap,Le=!!v.displacementMap,y=!!v.emissiveMap,_=!!v.metalnessMap,I=!!v.roughnessMap,Q=v.anisotropy>0,Y=v.clearcoat>0,J=v.iridescence>0,fe=v.sheen>0,re=v.transmission>0,le=Q&&!!v.anisotropyMap,ye=Y&&!!v.clearcoatMap,Ue=Y&&!!v.clearcoatNormalMap,$=Y&&!!v.clearcoatRoughnessMap,We=J&&!!v.iridescenceMap,Oe=J&&!!v.iridescenceThicknessMap,Ae=fe&&!!v.sheenColorMap,ge=fe&&!!v.sheenRoughnessMap,ce=!!v.specularMap,Pe=!!v.specularColorMap,ke=!!v.specularIntensityMap,je=re&&!!v.transmissionMap,Be=re&&!!v.thicknessMap,Ye=!!v.gradientMap,E=!!v.alphaMap,te=v.alphaTest>0,ne=!!v.alphaHash,ue=!!v.extensions;let ve=un;v.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Ge={isWebGL2:u,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:B,fragmentShader:K,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ze,instancing:de,instancingColor:de&&C.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:tn,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:P,envMap:ct,envMapMode:ct&&k.mapping,envMapCubeUVHeight:V,aoMap:_e,lightMap:Te,bumpMap:me,normalMap:Je,displacementMap:m&&Le,emissiveMap:y,normalMapObjectSpace:Je&&v.normalMapType===bl,normalMapTangentSpace:Je&&v.normalMapType===El,metalnessMap:_,roughnessMap:I,anisotropy:Q,anisotropyMap:le,clearcoat:Y,clearcoatMap:ye,clearcoatNormalMap:Ue,clearcoatRoughnessMap:$,iridescence:J,iridescenceMap:We,iridescenceThicknessMap:Oe,sheen:fe,sheenColorMap:Ae,sheenRoughnessMap:ge,specularMap:ce,specularColorMap:Pe,specularIntensityMap:ke,transmission:re,transmissionMap:je,thicknessMap:Be,gradientMap:Ye,opaque:v.transparent===!1&&v.blending===$n&&v.alphaToCoverage===!1,alphaMap:E,alphaTest:te,alphaHash:ne,combine:v.combine,mapUv:Re&&p(v.map.channel),aoMapUv:_e&&p(v.aoMap.channel),lightMapUv:Te&&p(v.lightMap.channel),bumpMapUv:me&&p(v.bumpMap.channel),normalMapUv:Je&&p(v.normalMap.channel),displacementMapUv:Le&&p(v.displacementMap.channel),emissiveMapUv:y&&p(v.emissiveMap.channel),metalnessMapUv:_&&p(v.metalnessMap.channel),roughnessMapUv:I&&p(v.roughnessMap.channel),anisotropyMapUv:le&&p(v.anisotropyMap.channel),clearcoatMapUv:ye&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&p(v.sheenRoughnessMap.channel),specularMapUv:ce&&p(v.specularMap.channel),specularColorMapUv:Pe&&p(v.specularColorMap.channel),specularIntensityMapUv:ke&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:Be&&p(v.thicknessMap.channel),alphaMapUv:E&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Je||Q),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!z.attributes.uv&&(Re||E),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===Ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jt,flipSided:v.side===yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ue&&v.extensions.derivatives===!0,extensionFragDepth:ue&&v.extensions.fragDepth===!0,extensionDrawBuffers:ue&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ue&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function b(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const X in v.defines)T.push(X),T.push(v.defines[X]);return v.isRawShaderMaterial===!1&&(x(T,v),A(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function A(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function D(v){const T=S[v.type];let X;if(T){const ee=zt[T];X=Zl.clone(ee.uniforms)}else X=v.uniforms;return X}function R(v,T){let X;for(let ee=0,C=h.length;ee<C;ee++){const H=h[ee];if(H.cacheKey===T){X=H,++X.usedTimes;break}}return X===void 0&&(X=new df(i,T,v,r),h.push(X)),X}function w(v){if(--v.usedTimes===0){const T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),v.destroy()}}function G(v){l.remove(v)}function se(){l.dispose()}return{getParameters:f,getProgramCacheKey:b,getUniforms:D,acquireProgram:R,releaseProgram:w,releaseShaderCache:G,programs:h,dispose:se}}function _f(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function vf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Da(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,m,g,S,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:S,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=S,f.group=p),e++,f}function a(u,d,m,g,S,p){const f=o(u,d,m,g,S,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,g,S,p){const f=o(u,d,m,g,S,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||vf),n.length>1&&n.sort(d||Pa),s.length>1&&s.sort(d||Pa)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function xf(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Da,i.set(n,[o])):s>=r.length?(o=new Da,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Mf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yf=0;function Ef(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bf(i,e){const t=new Sf,n=Mf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);const r=new U,o=new it,a=new it;function l(h,u){let d=0,m=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let S=0,p=0,f=0,b=0,x=0,A=0,D=0,R=0,w=0,G=0,se=0;h.sort(Ef);const v=u===!0?Math.PI:1;for(let X=0,ee=h.length;X<ee;X++){const C=h[X],H=C.color,z=C.intensity,q=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=H.r*z*v,m+=H.g*z*v,g+=H.b*z*v;else if(C.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(C.sh.coefficients[V],z);se++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*v),C.castShadow){const j=C.shadow,Z=n.get(C);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,s.directionalShadow[S]=Z,s.directionalShadowMap[S]=k,s.directionalShadowMatrix[S]=C.shadow.matrix,A++}s.directional[S]=V,S++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(H).multiplyScalar(z*v),V.distance=q,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,s.spot[f]=V;const j=C.shadow;if(C.map&&(s.spotLightMap[w]=C.map,w++,j.updateMatrices(C),C.castShadow&&G++),s.spotLightMatrix[f]=j.matrix,C.castShadow){const Z=n.get(C);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,s.spotShadow[f]=Z,s.spotShadowMap[f]=k,R++}f++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(H).multiplyScalar(z),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),s.rectArea[b]=V,b++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*v),V.distance=C.distance,V.decay=C.decay,C.castShadow){const j=C.shadow,Z=n.get(C);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,s.pointShadow[p]=Z,s.pointShadowMap[p]=k,s.pointShadowMatrix[p]=C.shadow.matrix,D++}s.point[p]=V,p++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(z*v),V.groundColor.copy(C.groundColor).multiplyScalar(z*v),s.hemi[x]=V,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==S||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==b||T.hemiLength!==x||T.numDirectionalShadows!==A||T.numPointShadows!==D||T.numSpotShadows!==R||T.numSpotMaps!==w||T.numLightProbes!==se)&&(s.directional.length=S,s.spot.length=f,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=R+w-G,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=se,T.directionalLength=S,T.pointLength=p,T.spotLength=f,T.rectAreaLength=b,T.hemiLength=x,T.numDirectionalShadows=A,T.numPointShadows=D,T.numSpotShadows=R,T.numSpotMaps=w,T.numLightProbes=se,s.version=yf++)}function c(h,u){let d=0,m=0,g=0,S=0,p=0;const f=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const A=h[b];if(A.isDirectionalLight){const D=s.directional[d];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),d++}else if(A.isSpotLight){const D=s.spot[g];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),g++}else if(A.isRectAreaLight){const D=s.rectArea[S];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),a.identity(),o.copy(A.matrixWorld),o.premultiply(f),a.extractRotation(o),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),S++}else if(A.isPointLight){const D=s.point[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){const D=s.hemi[p];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function Ua(i,e){const t=new bf(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tf(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Ua(i,e),t.set(r,[l])):o>=a.length?(l=new Ua(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Af extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wf extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lf(i,e,t){let n=new nr;const s=new He,r=new He,o=new lt,a=new Af({depthPacking:yl}),l=new wf,c={},h=t.maxTextureSize,u={[fn]:yt,[yt]:fn,[Jt]:Jt},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Rf,fragmentShader:Cf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new kt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let f=this.type;this.render=function(R,w,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const se=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),X=i.state;X.setBlending(hn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ee=f!==Zt&&this.type===Zt,C=f===Zt&&this.type!==Zt;for(let H=0,z=R.length;H<z;H++){const q=R[H],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const V=k.getFrameExtents();if(s.multiply(V),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,k.mapSize.y=r.y)),k.map===null||ee===!0||C===!0){const Z=this.type!==Zt?{minFilter:vt,magFilter:vt}:{};k.map!==null&&k.map.dispose(),k.map=new Cn(s.x,s.y,Z),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const j=k.getViewportCount();for(let Z=0;Z<j;Z++){const he=k.getViewport(Z);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),X.viewport(o),k.updateMatrices(q,Z),n=k.getFrustum(),A(w,G,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Zt&&b(k,G),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(se,v,T)};function b(R,w){const G=e.update(S);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Cn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,G,d,S,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,G,m,S,null)}function x(R,w,G,se){let v=null;const T=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)v=T;else if(v=G.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=v.uuid,ee=w.uuid;let C=c[X];C===void 0&&(C={},c[X]=C);let H=C[ee];H===void 0&&(H=v.clone(),C[ee]=H,w.addEventListener("dispose",D)),v=H}if(v.visible=w.visible,v.wireframe=w.wireframe,se===Zt?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,G.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const X=i.properties.get(v);X.light=G}return v}function A(R,w,G,se,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Zt)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);const ee=e.update(R),C=R.material;if(Array.isArray(C)){const H=ee.groups;for(let z=0,q=H.length;z<q;z++){const k=H[z],V=C[k.materialIndex];if(V&&V.visible){const j=x(R,V,se,v);R.onBeforeShadow(i,R,w,G,ee,j,k),i.renderBufferDirect(G,null,ee,j,R,k),R.onAfterShadow(i,R,w,G,ee,j,k)}}}else if(C.visible){const H=x(R,C,se,v);R.onBeforeShadow(i,R,w,G,ee,H,null),i.renderBufferDirect(G,null,ee,H,R,null),R.onAfterShadow(i,R,w,G,ee,H,null)}}const X=R.children;for(let ee=0,C=X.length;ee<C;ee++)A(X[ee],w,G,se,v)}function D(R){R.target.removeEventListener("dispose",D);for(const G in c){const se=c[G],v=R.target.uuid;v in se&&(se[v].dispose(),delete se[v])}}}function Pf(i,e,t){const n=t.isWebGL2;function s(){let E=!1;const te=new lt;let ne=null;const ue=new lt(0,0,0,0);return{setMask:function(ve){ne!==ve&&!E&&(i.colorMask(ve,ve,ve,ve),ne=ve)},setLocked:function(ve){E=ve},setClear:function(ve,Ge,$e,ht,wt){wt===!0&&(ve*=ht,Ge*=ht,$e*=ht),te.set(ve,Ge,$e,ht),ue.equals(te)===!1&&(i.clearColor(ve,Ge,$e,ht),ue.copy(te))},reset:function(){E=!1,ne=null,ue.set(-1,0,0,0)}}}function r(){let E=!1,te=null,ne=null,ue=null;return{setTest:function(ve){ve?de(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(ve){te!==ve&&!E&&(i.depthMask(ve),te=ve)},setFunc:function(ve){if(ne!==ve){switch(ve){case Jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case el:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=ve}},setLocked:function(ve){E=ve},setClear:function(ve){ue!==ve&&(i.clearDepth(ve),ue=ve)},reset:function(){E=!1,te=null,ne=null,ue=null}}}function o(){let E=!1,te=null,ne=null,ue=null,ve=null,Ge=null,$e=null,ht=null,wt=null;return{setTest:function(Ke){E||(Ke?de(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Ke){te!==Ke&&!E&&(i.stencilMask(Ke),te=Ke)},setFunc:function(Ke,gt,Bt){(ne!==Ke||ue!==gt||ve!==Bt)&&(i.stencilFunc(Ke,gt,Bt),ne=Ke,ue=gt,ve=Bt)},setOp:function(Ke,gt,Bt){(Ge!==Ke||$e!==gt||ht!==Bt)&&(i.stencilOp(Ke,gt,Bt),Ge=Ke,$e=gt,ht=Bt)},setLocked:function(Ke){E=Ke},setClear:function(Ke){wt!==Ke&&(i.clearStencil(Ke),wt=Ke)},reset:function(){E=!1,te=null,ne=null,ue=null,ve=null,Ge=null,$e=null,ht=null,wt=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,S=[],p=null,f=!1,b=null,x=null,A=null,D=null,R=null,w=null,G=null,se=new Ve(0,0,0),v=0,T=!1,X=null,ee=null,C=null,H=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=V>=2);let Z=null,he={};const be=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),K=new lt().fromArray(be),oe=new lt().fromArray(B);function xe(E,te,ne,ue){const ve=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(E,Ge),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<ne;$e++)n&&(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)?i.texImage3D(te,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(te+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Ge}const Se={};Se[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Se[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(i.DEPTH_TEST),l.setFunc(Wi),Le(!1),y(dr),de(i.CULL_FACE),me(hn);function de(E){d[E]!==!0&&(i.enable(E),d[E]=!0)}function ze(E){d[E]!==!1&&(i.disable(E),d[E]=!1)}function Re(E,te){return m[E]!==te?(i.bindFramebuffer(E,te),m[E]=te,n&&(E===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=te),E===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=te)),!0):!1}function P(E,te){let ne=S,ue=!1;if(E)if(ne=g.get(te),ne===void 0&&(ne=[],g.set(te,ne)),E.isWebGLMultipleRenderTargets){const ve=E.texture;if(ne.length!==ve.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,$e=ve.length;Ge<$e;Ge++)ne[Ge]=i.COLOR_ATTACHMENT0+Ge;ne.length=ve.length,ue=!0}}else ne[0]!==i.COLOR_ATTACHMENT0&&(ne[0]=i.COLOR_ATTACHMENT0,ue=!0);else ne[0]!==i.BACK&&(ne[0]=i.BACK,ue=!0);ue&&(t.isWebGL2?i.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function ct(E){return p!==E?(i.useProgram(E),p=E,!0):!1}const _e={[En]:i.FUNC_ADD,[Oo]:i.FUNC_SUBTRACT,[Bo]:i.FUNC_REVERSE_SUBTRACT};if(n)_e[gr]=i.MIN,_e[_r]=i.MAX;else{const E=e.get("EXT_blend_minmax");E!==null&&(_e[gr]=E.MIN_EXT,_e[_r]=E.MAX_EXT)}const Te={[Ho]:i.ZERO,[zo]:i.ONE,[Vo]:i.SRC_COLOR,[Gs]:i.SRC_ALPHA,[Yo]:i.SRC_ALPHA_SATURATE,[Xo]:i.DST_COLOR,[Go]:i.DST_ALPHA,[ko]:i.ONE_MINUS_SRC_COLOR,[Ws]:i.ONE_MINUS_SRC_ALPHA,[qo]:i.ONE_MINUS_DST_COLOR,[Wo]:i.ONE_MINUS_DST_ALPHA,[$o]:i.CONSTANT_COLOR,[Ko]:i.ONE_MINUS_CONSTANT_COLOR,[jo]:i.CONSTANT_ALPHA,[Zo]:i.ONE_MINUS_CONSTANT_ALPHA};function me(E,te,ne,ue,ve,Ge,$e,ht,wt,Ke){if(E===hn){f===!0&&(ze(i.BLEND),f=!1);return}if(f===!1&&(de(i.BLEND),f=!0),E!==Fo){if(E!==b||Ke!==T){if((x!==En||R!==En)&&(i.blendEquation(i.FUNC_ADD),x=En,R=En),Ke)switch(E){case $n:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fr:i.blendFunc(i.ONE,i.ONE);break;case pr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}A=null,D=null,w=null,G=null,se.set(0,0,0),v=0,b=E,T=Ke}return}ve=ve||te,Ge=Ge||ne,$e=$e||ue,(te!==x||ve!==R)&&(i.blendEquationSeparate(_e[te],_e[ve]),x=te,R=ve),(ne!==A||ue!==D||Ge!==w||$e!==G)&&(i.blendFuncSeparate(Te[ne],Te[ue],Te[Ge],Te[$e]),A=ne,D=ue,w=Ge,G=$e),(ht.equals(se)===!1||wt!==v)&&(i.blendColor(ht.r,ht.g,ht.b,wt),se.copy(ht),v=wt),b=E,T=!1}function Je(E,te){E.side===Jt?ze(i.CULL_FACE):de(i.CULL_FACE);let ne=E.side===yt;te&&(ne=!ne),Le(ne),E.blending===$n&&E.transparent===!1?me(hn):me(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),l.setFunc(E.depthFunc),l.setTest(E.depthTest),l.setMask(E.depthWrite),a.setMask(E.colorWrite);const ue=E.stencilWrite;c.setTest(ue),ue&&(c.setMask(E.stencilWriteMask),c.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),c.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),I(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(E){X!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),X=E)}function y(E){E!==Uo?(de(i.CULL_FACE),E!==ee&&(E===dr?i.cullFace(i.BACK):E===Io?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),ee=E}function _(E){E!==C&&(k&&i.lineWidth(E),C=E)}function I(E,te,ne){E?(de(i.POLYGON_OFFSET_FILL),(H!==te||z!==ne)&&(i.polygonOffset(te,ne),H=te,z=ne)):ze(i.POLYGON_OFFSET_FILL)}function Q(E){E?de(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function Y(E){E===void 0&&(E=i.TEXTURE0+q-1),Z!==E&&(i.activeTexture(E),Z=E)}function J(E,te,ne){ne===void 0&&(Z===null?ne=i.TEXTURE0+q-1:ne=Z);let ue=he[ne];ue===void 0&&(ue={type:void 0,texture:void 0},he[ne]=ue),(ue.type!==E||ue.texture!==te)&&(Z!==ne&&(i.activeTexture(ne),Z=ne),i.bindTexture(E,te||Se[E]),ue.type=E,ue.texture=te)}function fe(){const E=he[Z];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Oe(){try{i.texStorage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Pe(E){K.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),K.copy(E))}function ke(E){oe.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),oe.copy(E))}function je(E,te){let ne=u.get(te);ne===void 0&&(ne=new WeakMap,u.set(te,ne));let ue=ne.get(E);ue===void 0&&(ue=i.getUniformBlockIndex(te,E.name),ne.set(E,ue))}function Be(E,te){const ue=u.get(te).get(E);h.get(te)!==ue&&(i.uniformBlockBinding(te,ue,E.__bindingPointIndex),h.set(te,ue))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,he={},m={},g=new WeakMap,S=[],p=null,f=!1,b=null,x=null,A=null,D=null,R=null,w=null,G=null,se=new Ve(0,0,0),v=0,T=!1,X=null,ee=null,C=null,H=null,z=null,K.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:ze,bindFramebuffer:Re,drawBuffers:P,useProgram:ct,setBlending:me,setMaterial:Je,setFlipSided:Le,setCullFace:y,setLineWidth:_,setPolygonOffset:I,setScissorTest:Q,activeTexture:Y,bindTexture:J,unbindTexture:fe,compressedTexImage2D:re,compressedTexImage3D:le,texImage2D:ge,texImage3D:ce,updateUBOMapping:je,uniformBlockBinding:Be,texStorage2D:Oe,texStorage3D:Ae,texSubImage2D:ye,texSubImage3D:Ue,compressedTexSubImage2D:$,compressedTexSubImage3D:We,scissor:Pe,viewport:ke,reset:Ye}}function Df(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return m?new OffscreenCanvas(y,_):Ki("canvas")}function S(y,_,I,Q){let Y=1;if((y.width>Q||y.height>Q)&&(Y=Q/Math.max(y.width,y.height)),Y<1||_===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const J=_?Zs:Math.floor,fe=J(Y*y.width),re=J(Y*y.height);u===void 0&&(u=g(fe,re));const le=I?g(fe,re):u;return le.width=fe,le.height=re,le.getContext("2d").drawImage(y,0,0,fe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+fe+"x"+re+")."),le}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Yr(y.width)&&Yr(y.height)}function f(y){return a?!1:y.wrapS!==Nt||y.wrapT!==Nt||y.minFilter!==vt&&y.minFilter!==St}function b(y,_){return y.generateMipmaps&&_&&y.minFilter!==vt&&y.minFilter!==St}function x(y){i.generateMipmap(y)}function A(y,_,I,Q,Y=!1){if(a===!1)return _;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=_;if(_===i.RED&&(I===i.FLOAT&&(J=i.R32F),I===i.HALF_FLOAT&&(J=i.R16F),I===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(J=i.R8UI),I===i.UNSIGNED_SHORT&&(J=i.R16UI),I===i.UNSIGNED_INT&&(J=i.R32UI),I===i.BYTE&&(J=i.R8I),I===i.SHORT&&(J=i.R16I),I===i.INT&&(J=i.R32I)),_===i.RG&&(I===i.FLOAT&&(J=i.RG32F),I===i.HALF_FLOAT&&(J=i.RG16F),I===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RGBA){const fe=Y?Xi:qe.getTransfer(Q);I===i.FLOAT&&(J=i.RGBA32F),I===i.HALF_FLOAT&&(J=i.RGBA16F),I===i.UNSIGNED_BYTE&&(J=fe===Ze?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function D(y,_,I){return b(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==vt&&y.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function R(y){return y===vt||y===vr||y===si?i.NEAREST:i.LINEAR}function w(y){const _=y.target;_.removeEventListener("dispose",w),se(_),_.isVideoTexture&&h.delete(_)}function G(y){const _=y.target;_.removeEventListener("dispose",G),T(_)}function se(y){const _=n.get(y);if(_.__webglInit===void 0)return;const I=y.source,Q=d.get(I);if(Q){const Y=Q[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(y),Object.keys(Q).length===0&&d.delete(I)}n.remove(y)}function v(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const I=y.source,Q=d.get(I);delete Q[_.__cacheKey],o.memory.textures--}function T(y){const _=y.texture,I=n.get(y),Q=n.get(_);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(I.__webglFramebuffer[Y]))for(let J=0;J<I.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(I.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(I.__webglFramebuffer[Y]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Y])}else{if(Array.isArray(I.__webglFramebuffer))for(let Y=0;Y<I.__webglFramebuffer.length;Y++)i.deleteFramebuffer(I.__webglFramebuffer[Y]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Y=0;Y<I.__webglColorRenderbuffer.length;Y++)I.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Y]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Y=0,J=_.length;Y<J;Y++){const fe=n.get(_[Y]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(_[Y])}n.remove(_),n.remove(y)}let X=0;function ee(){X=0}function C(){const y=X;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),X+=1,y}function H(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function z(y,_){const I=n.get(y);if(y.isVideoTexture&&Je(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(I,y,_);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function q(y,_){const I=n.get(y);if(y.version>0&&I.__version!==y.version){K(I,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function k(y,_){const I=n.get(y);if(y.version>0&&I.__version!==y.version){K(I,y,_);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function V(y,_){const I=n.get(y);if(y.version>0&&I.__version!==y.version){oe(I,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}const j={[Ys]:i.REPEAT,[Nt]:i.CLAMP_TO_EDGE,[$s]:i.MIRRORED_REPEAT},Z={[vt]:i.NEAREST,[vr]:i.NEAREST_MIPMAP_NEAREST,[si]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[ls]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},he={[Tl]:i.NEVER,[Pl]:i.ALWAYS,[Al]:i.LESS,[eo]:i.LEQUAL,[wl]:i.EQUAL,[Ll]:i.GEQUAL,[Rl]:i.GREATER,[Cl]:i.NOTEQUAL};function be(y,_,I){if(_.type===Qt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===St||_.magFilter===ls||_.magFilter===si||_.magFilter===Tn||_.minFilter===St||_.minFilter===ls||_.minFilter===si||_.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),I?(i.texParameteri(y,i.TEXTURE_WRAP_S,j[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,j[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,j[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Z[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Z[_.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Nt||_.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,R(_.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==vt&&_.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===vt||_.minFilter!==si&&_.minFilter!==Tn||_.type===Qt&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===di&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(y,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function B(y,_){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",w));const Q=_.source;let Y=d.get(Q);Y===void 0&&(Y={},d.set(Q,Y));const J=H(_);if(J!==y.__cacheKey){Y[J]===void 0&&(Y[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Y[J].usedTimes++;const fe=Y[y.__cacheKey];fe!==void 0&&(Y[y.__cacheKey].usedTimes--,fe.usedTimes===0&&v(_)),y.__cacheKey=J,y.__webglTexture=Y[J].texture}return I}function K(y,_,I){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);const Y=B(y,_),J=_.source;t.bindTexture(Q,y.__webglTexture,i.TEXTURE0+I);const fe=n.get(J);if(J.version!==fe.__version||Y===!0){t.activeTexture(i.TEXTURE0+I);const re=qe.getPrimaries(qe.workingColorSpace),le=_.colorSpace===Lt?null:qe.getPrimaries(_.colorSpace),ye=_.colorSpace===Lt||re===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ue=f(_)&&p(_.image)===!1;let $=S(_.image,Ue,!1,s.maxTextureSize);$=Le(_,$);const We=p($)||a,Oe=r.convert(_.format,_.colorSpace);let Ae=r.convert(_.type),ge=A(_.internalFormat,Oe,Ae,_.colorSpace,_.isVideoTexture);be(Q,_,We);let ce;const Pe=_.mipmaps,ke=a&&_.isVideoTexture!==!0&&ge!==Ja,je=fe.__version===void 0||Y===!0,Be=J.dataReady,Ye=D(_,$,We);if(_.isDepthTexture)ge=i.DEPTH_COMPONENT,a?_.type===Qt?ge=i.DEPTH_COMPONENT32F:_.type===cn?ge=i.DEPTH_COMPONENT24:_.type===An?ge=i.DEPTH24_STENCIL8:ge=i.DEPTH_COMPONENT16:_.type===Qt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===wn&&ge===i.DEPTH_COMPONENT&&_.type!==er&&_.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=cn,Ae=r.convert(_.type)),_.format===Qn&&ge===i.DEPTH_COMPONENT&&(ge=i.DEPTH_STENCIL,_.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=An,Ae=r.convert(_.type))),je&&(ke?t.texStorage2D(i.TEXTURE_2D,1,ge,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ge,$.width,$.height,0,Oe,Ae,null));else if(_.isDataTexture)if(Pe.length>0&&We){ke&&je&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,Pe[0].width,Pe[0].height);for(let E=0,te=Pe.length;E<te;E++)ce=Pe[E],ke?Be&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,ce.width,ce.height,Oe,Ae,ce.data):t.texImage2D(i.TEXTURE_2D,E,ge,ce.width,ce.height,0,Oe,Ae,ce.data);_.generateMipmaps=!1}else ke?(je&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,$.width,$.height),Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,Oe,Ae,$.data)):t.texImage2D(i.TEXTURE_2D,0,ge,$.width,$.height,0,Oe,Ae,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ge,Pe[0].width,Pe[0].height,$.depth);for(let E=0,te=Pe.length;E<te;E++)ce=Pe[E],_.format!==Ft?Oe!==null?ke?Be&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,E,0,0,0,ce.width,ce.height,$.depth,Oe,ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,E,ge,ce.width,ce.height,$.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,E,0,0,0,ce.width,ce.height,$.depth,Oe,Ae,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,E,ge,ce.width,ce.height,$.depth,0,Oe,Ae,ce.data)}else{ke&&je&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,Pe[0].width,Pe[0].height);for(let E=0,te=Pe.length;E<te;E++)ce=Pe[E],_.format!==Ft?Oe!==null?ke?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,E,0,0,ce.width,ce.height,Oe,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,E,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?Be&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,ce.width,ce.height,Oe,Ae,ce.data):t.texImage2D(i.TEXTURE_2D,E,ge,ce.width,ce.height,0,Oe,Ae,ce.data)}else if(_.isDataArrayTexture)ke?(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ge,$.width,$.height,$.depth),Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Oe,Ae,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,Oe,Ae,$.data);else if(_.isData3DTexture)ke?(je&&t.texStorage3D(i.TEXTURE_3D,Ye,ge,$.width,$.height,$.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Oe,Ae,$.data)):t.texImage3D(i.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,Oe,Ae,$.data);else if(_.isFramebufferTexture){if(je)if(ke)t.texStorage2D(i.TEXTURE_2D,Ye,ge,$.width,$.height);else{let E=$.width,te=$.height;for(let ne=0;ne<Ye;ne++)t.texImage2D(i.TEXTURE_2D,ne,ge,E,te,0,Oe,Ae,null),E>>=1,te>>=1}}else if(Pe.length>0&&We){ke&&je&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,Pe[0].width,Pe[0].height);for(let E=0,te=Pe.length;E<te;E++)ce=Pe[E],ke?Be&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,Oe,Ae,ce):t.texImage2D(i.TEXTURE_2D,E,ge,Oe,Ae,ce);_.generateMipmaps=!1}else ke?(je&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,$.width,$.height),Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,Ae,$)):t.texImage2D(i.TEXTURE_2D,0,ge,Oe,Ae,$);b(_,We)&&x(Q),fe.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function oe(y,_,I){if(_.image.length!==6)return;const Q=B(y,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+I);const J=n.get(Y);if(Y.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+I);const fe=qe.getPrimaries(qe.workingColorSpace),re=_.colorSpace===Lt?null:qe.getPrimaries(_.colorSpace),le=_.colorSpace===Lt||fe===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ye=_.isCompressedTexture||_.image[0].isCompressedTexture,Ue=_.image[0]&&_.image[0].isDataTexture,$=[];for(let E=0;E<6;E++)!ye&&!Ue?$[E]=S(_.image[E],!1,!0,s.maxCubemapSize):$[E]=Ue?_.image[E].image:_.image[E],$[E]=Le(_,$[E]);const We=$[0],Oe=p(We)||a,Ae=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),ce=A(_.internalFormat,Ae,ge,_.colorSpace),Pe=a&&_.isVideoTexture!==!0,ke=J.__version===void 0||Q===!0,je=Y.dataReady;let Be=D(_,We,Oe);be(i.TEXTURE_CUBE_MAP,_,Oe);let Ye;if(ye){Pe&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,ce,We.width,We.height);for(let E=0;E<6;E++){Ye=$[E].mipmaps;for(let te=0;te<Ye.length;te++){const ne=Ye[te];_.format!==Ft?Ae!==null?Pe?je&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,0,0,ne.width,ne.height,Ae,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,ce,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,0,0,ne.width,ne.height,Ae,ge,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,ce,ne.width,ne.height,0,Ae,ge,ne.data)}}}else{Ye=_.mipmaps,Pe&&ke&&(Ye.length>0&&Be++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,ce,$[0].width,$[0].height));for(let E=0;E<6;E++)if(Ue){Pe?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,$[E].width,$[E].height,Ae,ge,$[E].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,ce,$[E].width,$[E].height,0,Ae,ge,$[E].data);for(let te=0;te<Ye.length;te++){const ue=Ye[te].image[E].image;Pe?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,0,0,ue.width,ue.height,Ae,ge,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,ce,ue.width,ue.height,0,Ae,ge,ue.data)}}else{Pe?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,Ae,ge,$[E]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,ce,Ae,ge,$[E]);for(let te=0;te<Ye.length;te++){const ne=Ye[te];Pe?je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,0,0,Ae,ge,ne.image[E]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,ce,Ae,ge,ne.image[E])}}}b(_,Oe)&&x(i.TEXTURE_CUBE_MAP),J.__version=Y.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function xe(y,_,I,Q,Y,J){const fe=r.convert(I.format,I.colorSpace),re=r.convert(I.type),le=A(I.internalFormat,fe,re,I.colorSpace);if(!n.get(_).__hasExternalTextures){const Ue=Math.max(1,_.width>>J),$=Math.max(1,_.height>>J);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,J,le,Ue,$,_.depth,0,fe,re,null):t.texImage2D(Y,J,le,Ue,$,0,fe,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),me(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Y,n.get(I).__webglTexture,0,Te(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,Y,n.get(I).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(y,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer&&!_.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||me(_)){const Y=_.depthTexture;Y&&Y.isDepthTexture&&(Y.type===Qt?Q=i.DEPTH_COMPONENT32F:Y.type===cn&&(Q=i.DEPTH_COMPONENT24));const J=Te(_);me(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Q,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Q,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(_.depthBuffer&&_.stencilBuffer){const Q=Te(_);I&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,_.width,_.height):me(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const Q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Y=0;Y<Q.length;Y++){const J=Q[Y],fe=r.convert(J.format,J.colorSpace),re=r.convert(J.type),le=A(J.internalFormat,fe,re,J.colorSpace),ye=Te(_);I&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,le,_.width,_.height):me(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,le,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,le,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z(_.depthTexture,0);const Q=n.get(_.depthTexture).__webglTexture,Y=Te(_);if(_.depthTexture.format===wn)me(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Qn)me(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ze(y){const _=n.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");de(_.__webglFramebuffer,y)}else if(I){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=i.createRenderbuffer(),Se(_.__webglDepthbuffer[Q],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Se(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(y,_,I){const Q=n.get(y);_!==void 0&&xe(Q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&ze(y)}function P(y){const _=y.texture,I=n.get(y),Q=n.get(_);y.addEventListener("dispose",G),y.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,o.memory.textures++);const Y=y.isWebGLCubeRenderTarget===!0,J=y.isWebGLMultipleRenderTargets===!0,fe=p(y)||a;if(Y){I.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[re]=[];for(let le=0;le<_.mipmaps.length;le++)I.__webglFramebuffer[re][le]=i.createFramebuffer()}else I.__webglFramebuffer[re]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)I.__webglFramebuffer[re]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(J)if(s.drawBuffers){const re=y.texture;for(let le=0,ye=re.length;le<ye;le++){const Ue=n.get(re[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&me(y)===!1){const re=J?_:[_];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){const ye=re[le];I.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const Ue=r.convert(ye.format,ye.colorSpace),$=r.convert(ye.type),We=A(ye.internalFormat,Ue,$,ye.colorSpace,y.isXRRenderTarget===!0),Oe=Te(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,We,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,I.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),be(i.TEXTURE_CUBE_MAP,_,fe);for(let re=0;re<6;re++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)xe(I.__webglFramebuffer[re][le],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else xe(I.__webglFramebuffer[re],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);b(_,fe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const re=y.texture;for(let le=0,ye=re.length;le<ye;le++){const Ue=re[le],$=n.get(Ue);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),be(i.TEXTURE_2D,Ue,fe),xe(I.__webglFramebuffer,y,Ue,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),b(Ue,fe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?re=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,Q.__webglTexture),be(re,_,fe),a&&_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)xe(I.__webglFramebuffer[le],y,_,i.COLOR_ATTACHMENT0,re,le);else xe(I.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,re,0);b(_,fe)&&x(re),t.unbindTexture()}y.depthBuffer&&ze(y)}function ct(y){const _=p(y)||a,I=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0,Y=I.length;Q<Y;Q++){const J=I[Q];if(b(J,_)){const fe=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(J).__webglTexture;t.bindTexture(fe,re),x(fe),t.unbindTexture()}}}function _e(y){if(a&&y.samples>0&&me(y)===!1){const _=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],I=y.width,Q=y.height;let Y=i.COLOR_BUFFER_BIT;const J=[],fe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(y),le=y.isWebGLMultipleRenderTargets===!0;if(le)for(let ye=0;ye<_.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){J.push(i.COLOR_ATTACHMENT0+ye),y.depthBuffer&&J.push(fe);const Ue=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ue===!1&&(y.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ye]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),le){const $=n.get(_[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,I,Q,0,0,I,Q,Y,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let ye=0;ye<_.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,re.__webglColorRenderbuffer[ye]);const Ue=n.get(_[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Te(y){return Math.min(s.maxSamples,y.samples)}function me(y){const _=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Je(y){const _=o.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function Le(y,_){const I=y.colorSpace,Q=y.format,Y=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Ks||I!==tn&&I!==Lt&&(qe.getTransfer(I)===Ze?a===!1?e.has("EXT_sRGB")===!0&&Q===Ft?(y.format=Ks,y.minFilter=St,y.generateMipmaps=!1):_=no.sRGBToLinear(_):(Q!==Ft||Y!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}this.allocateTextureUnit=C,this.resetTextureUnits=ee,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=me}function Uf(i,e,t){const n=t.isWebGL2;function s(r,o=Lt){let a;const l=qe.getTransfer(o);if(r===dn)return i.UNSIGNED_BYTE;if(r===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(r===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(r===fl)return i.BYTE;if(r===pl)return i.SHORT;if(r===er)return i.UNSIGNED_SHORT;if(r===qa)return i.INT;if(r===cn)return i.UNSIGNED_INT;if(r===Qt)return i.FLOAT;if(r===di)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ml)return i.ALPHA;if(r===Ft)return i.RGBA;if(r===gl)return i.LUMINANCE;if(r===_l)return i.LUMINANCE_ALPHA;if(r===wn)return i.DEPTH_COMPONENT;if(r===Qn)return i.DEPTH_STENCIL;if(r===Ks)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vl)return i.RED;if(r===Ka)return i.RED_INTEGER;if(r===xl)return i.RG;if(r===ja)return i.RG_INTEGER;if(r===Za)return i.RGBA_INTEGER;if(r===cs||r===hs||r===us||r===ds)if(l===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ds)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xr||r===Sr||r===Mr||r===yr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ja)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Er||r===br)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Er)return l===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===br)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tr||r===Ar||r===wr||r===Rr||r===Cr||r===Lr||r===Pr||r===Dr||r===Ur||r===Ir||r===Nr||r===Fr||r===Or||r===Br)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Tr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ar)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ur)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ir)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Or)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Br)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fs||r===Hr||r===zr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fs)return l===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sl||r===Vr||r===kr||r===Gr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===An?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class If extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ui extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nf={type:"move"};class Bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),f=this._getHandJoint(c,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ff=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Of=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Et,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new pn({extensions:{fragDepth:!0},vertexShader:Ff,fragmentShader:Of,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kt(new ts(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Hf extends ti{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const S=new Bf,p=t.getContextAttributes();let f=null,b=null;const x=[],A=[],D=new He;let R=null;const w=new It;w.layers.enable(1),w.viewport=new lt;const G=new It;G.layers.enable(2),G.viewport=new lt;const se=[w,G],v=new If;v.layers.enable(1),v.layers.enable(2);let T=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=x[B];return K===void 0&&(K=new Bs,x[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=x[B];return K===void 0&&(K=new Bs,x[B]=K),K.getGripSpace()},this.getHand=function(B){let K=x[B];return K===void 0&&(K=new Bs,x[B]=K),K.getHandSpace()};function ee(B){const K=A.indexOf(B.inputSource);if(K===-1)return;const oe=x[K];oe!==void 0&&(oe.update(B.inputSource,B.frame,c||o),oe.dispatchEvent({type:B.type,data:B.inputSource}))}function C(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",H);for(let B=0;B<x.length;B++){const K=A[B];K!==null&&(A[B]=null,x[B].disconnect(K))}T=null,X=null,S.reset(),e.setRenderTarget(f),m=null,d=null,u=null,s=null,b=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",C),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Cn(m.framebufferWidth,m.framebufferHeight,{format:Ft,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,oe=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=p.stencil?Qn:wn,oe=p.stencil?An:cn);const Se={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Cn(d.textureWidth,d.textureHeight,{format:Ft,type:dn,depthTexture:new mo(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const de=e.properties.get(b);de.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(B){for(let K=0;K<B.removed.length;K++){const oe=B.removed[K],xe=A.indexOf(oe);xe>=0&&(A[xe]=null,x[xe].disconnect(oe))}for(let K=0;K<B.added.length;K++){const oe=B.added[K];let xe=A.indexOf(oe);if(xe===-1){for(let de=0;de<x.length;de++)if(de>=A.length){A.push(oe),xe=de;break}else if(A[de]===null){A[de]=oe,xe=de;break}if(xe===-1)break}const Se=x[xe];Se&&Se.connect(oe)}}const z=new U,q=new U;function k(B,K,oe){z.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);const xe=z.distanceTo(q),Se=K.projectionMatrix.elements,de=oe.projectionMatrix.elements,ze=Se[14]/(Se[10]-1),Re=Se[14]/(Se[10]+1),P=(Se[9]+1)/Se[5],ct=(Se[9]-1)/Se[5],_e=(Se[8]-1)/Se[0],Te=(de[8]+1)/de[0],me=ze*_e,Je=ze*Te,Le=xe/(-_e+Te),y=Le*-_e;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(y),B.translateZ(Le),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const _=ze+Le,I=Re+Le,Q=me-y,Y=Je+(xe-y),J=P*Re/I*_,fe=ct*Re/I*_;B.projectionMatrix.makePerspective(Q,Y,J,fe,_,I),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function V(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;S.texture!==null&&(B.near=S.depthNear,B.far=S.depthFar),v.near=G.near=w.near=B.near,v.far=G.far=w.far=B.far,(T!==v.near||X!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,X=v.far,w.near=T,w.far=X,G.near=T,G.far=X,w.updateProjectionMatrix(),G.updateProjectionMatrix(),B.updateProjectionMatrix());const K=B.parent,oe=v.cameras;V(v,K);for(let xe=0;xe<oe.length;xe++)V(oe[xe],K);oe.length===2?k(v,w,G):v.projectionMatrix.copy(w.projectionMatrix),j(B,v,K)};function j(B,K,oe){oe===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(oe.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=js*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return S.texture!==null};let Z=null;function he(B,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let xe=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,xe=!0);for(let de=0;de<oe.length;de++){const ze=oe[de];let Re=null;if(m!==null)Re=m.getViewport(ze);else{const ct=u.getViewSubImage(d,ze);Re=ct.viewport,de===0&&(e.setRenderTargetTextures(b,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(b))}let P=se[de];P===void 0&&(P=new It,P.layers.enable(de),P.viewport=new lt,se[de]=P),P.matrix.fromArray(ze.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ze.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Re.x,Re.y,Re.width,Re.height),de===0&&(v.matrix.copy(P.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),xe===!0&&v.cameras.push(P)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const de=u.getDepthInformation(oe[0]);de&&de.isValid&&de.texture&&S.init(e,de,s.renderState)}}for(let oe=0;oe<x.length;oe++){const xe=A[oe],Se=x[oe];xe!==null&&Se!==void 0&&Se.update(xe,K,c||o)}S.render(e,v),Z&&Z(B,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const be=new po;be.setAnimationLoop(he),this.setAnimationLoop=function(B){Z=B},this.dispose=function(){}}}function zf(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ho(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,x,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),S(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,b,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===yt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===yt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vf(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const A=x.program;n.uniformBlockBinding(b,A)}function c(b,x){let A=s[b.id];A===void 0&&(g(b),A=h(b),s[b.id]=A,b.addEventListener("dispose",p));const D=x.program;n.updateUBOMapping(b,D);const R=e.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function h(b){const x=u();b.__bindingPointIndex=x;const A=i.createBuffer(),D=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,A),A}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=s[b.id],A=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,w=A.length;R<w;R++){const G=Array.isArray(A[R])?A[R]:[A[R]];for(let se=0,v=G.length;se<v;se++){const T=G[se];if(m(T,R,se,D)===!0){const X=T.__offset,ee=Array.isArray(T.value)?T.value:[T.value];let C=0;for(let H=0;H<ee.length;H++){const z=ee[H],q=S(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,X+C,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,C),C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,x,A,D){const R=b.value,w=x+"_"+A;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const G=D[w];if(typeof R=="number"||typeof R=="boolean"){if(G!==R)return D[w]=R,!0}else if(G.equals(R)===!1)return G.copy(R),!0}return!1}function g(b){const x=b.uniforms;let A=0;const D=16;for(let w=0,G=x.length;w<G;w++){const se=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,T=se.length;v<T;v++){const X=se[v],ee=Array.isArray(X.value)?X.value:[X.value];for(let C=0,H=ee.length;C<H;C++){const z=ee[C],q=S(z),k=A%D;k!==0&&D-k<q.boundary&&(A+=D-k),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=q.storage}}}const R=A%D;return R>0&&(A+=D-R),b.__size=A,b.__cache={},this}function S(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const A=o.indexOf(x.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Mo{constructor(e={}){const{canvas:t=Ul(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let S=null,p=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=un,this.toneMappingExposure=1;const x=this;let A=!1,D=0,R=0,w=null,G=-1,se=null;const v=new lt,T=new lt;let X=null;const ee=new Ve(0);let C=0,H=t.width,z=t.height,q=1,k=null,V=null;const j=new lt(0,0,H,z),Z=new lt(0,0,H,z);let he=!1;const be=new nr;let B=!1,K=!1,oe=null;const xe=new it,Se=new He,de=new U,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return w===null?q:1}let P=n;function ct(M,L){for(let F=0;F<M.length;F++){const O=M[F],N=t.getContext(O,L);if(N!==null)return N}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qs}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",E,!1),t.addEventListener("webglcontextcreationerror",te,!1),P===null){const L=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&L.shift(),P=ct(L,M),P===null)throw ct(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let _e,Te,me,Je,Le,y,_,I,Q,Y,J,fe,re,le,ye,Ue,$,We,Oe,Ae,ge,ce,Pe,ke;function je(){_e=new Yu(P),Te=new Vu(P,_e,e),_e.init(Te),ce=new Uf(P,_e,Te),me=new Pf(P,_e,Te),Je=new ju(P),Le=new _f,y=new Df(P,_e,me,Le,Te,ce,Je),_=new Gu(x),I=new qu(x),Q=new sc(P,Te),Pe=new Hu(P,_e,Q,Te),Y=new $u(P,Q,Je,Pe),J=new ed(P,Y,Q,Je),Oe=new Qu(P,Te,y),Ue=new ku(Le),fe=new gf(x,_,I,_e,Te,Pe,Ue),re=new zf(x,Le),le=new xf,ye=new Tf(_e,Te),We=new Bu(x,_,I,me,J,d,l),$=new Lf(x,J,Te),ke=new Vf(P,Je,Te,me),Ae=new zu(P,_e,Je,Te),ge=new Ku(P,_e,Je,Te),Je.programs=fe.programs,x.capabilities=Te,x.extensions=_e,x.properties=Le,x.renderLists=le,x.shadowMap=$,x.state=me,x.info=Je}je();const Be=new Hf(x,P);this.xr=Be,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=_e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=_e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(H,z,!1))},this.getSize=function(M){return M.set(H,z)},this.setSize=function(M,L,F=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,z=L,t.width=Math.floor(M*q),t.height=Math.floor(L*q),F===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(H*q,z*q).floor()},this.setDrawingBufferSize=function(M,L,F){H=M,z=L,q=F,t.width=Math.floor(M*F),t.height=Math.floor(L*F),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,L,F,O){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,L,F,O),me.viewport(v.copy(j).multiplyScalar(q).floor())},this.getScissor=function(M){return M.copy(Z)},this.setScissor=function(M,L,F,O){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,L,F,O),me.scissor(T.copy(Z).multiplyScalar(q).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(M){me.setScissorTest(he=M)},this.setOpaqueSort=function(M){k=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(M=!0,L=!0,F=!0){let O=0;if(M){let N=!1;if(w!==null){const ae=w.texture.format;N=ae===Za||ae===ja||ae===Ka}if(N){const ae=w.texture.type,pe=ae===dn||ae===cn||ae===er||ae===An||ae===Ya||ae===$a,Me=We.getClearColor(),Ee=We.getClearAlpha(),Ie=Me.r,we=Me.g,Ce=Me.b;pe?(m[0]=Ie,m[1]=we,m[2]=Ce,m[3]=Ee,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Ie,g[1]=we,g[2]=Ce,g[3]=Ee,P.clearBufferiv(P.COLOR,0,g))}else O|=P.COLOR_BUFFER_BIT}L&&(O|=P.DEPTH_BUFFER_BIT),F&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",E,!1),t.removeEventListener("webglcontextcreationerror",te,!1),le.dispose(),ye.dispose(),Le.dispose(),_.dispose(),I.dispose(),J.dispose(),Pe.dispose(),ke.dispose(),fe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",wt),Be.removeEventListener("sessionend",Ke),oe&&(oe.dispose(),oe=null),gt.stop()};function Ye(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function E(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Je.autoReset,L=$.enabled,F=$.autoUpdate,O=$.needsUpdate,N=$.type;je(),Je.autoReset=M,$.enabled=L,$.autoUpdate=F,$.needsUpdate=O,$.type=N}function te(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ne(M){const L=M.target;L.removeEventListener("dispose",ne),ue(L)}function ue(M){ve(M),Le.remove(M)}function ve(M){const L=Le.get(M).programs;L!==void 0&&(L.forEach(function(F){fe.releaseProgram(F)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,F,O,N,ae){L===null&&(L=ze);const pe=N.isMesh&&N.matrixWorld.determinant()<0,Me=To(M,L,F,O,N);me.setMaterial(O,pe);let Ee=F.index,Ie=1;if(O.wireframe===!0){if(Ee=Y.getWireframeAttribute(F),Ee===void 0)return;Ie=2}const we=F.drawRange,Ce=F.attributes.position;let tt=we.start*Ie,bt=(we.start+we.count)*Ie;ae!==null&&(tt=Math.max(tt,ae.start*Ie),bt=Math.min(bt,(ae.start+ae.count)*Ie)),Ee!==null?(tt=Math.max(tt,0),bt=Math.min(bt,Ee.count)):Ce!=null&&(tt=Math.max(tt,0),bt=Math.min(bt,Ce.count));const at=bt-tt;if(at<0||at===1/0)return;Pe.setup(N,O,Me,F,Ee);let Xt,Qe=Ae;if(Ee!==null&&(Xt=Q.get(Ee),Qe=ge,Qe.setIndex(Xt)),N.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*Re()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(N.isLine){let Ne=O.linewidth;Ne===void 0&&(Ne=1),me.setLineWidth(Ne*Re()),N.isLineSegments?Qe.setMode(P.LINES):N.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else N.isPoints?Qe.setMode(P.POINTS):N.isSprite&&Qe.setMode(P.TRIANGLES);if(N.isBatchedMesh)Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Qe.renderInstances(tt,at,N.count);else if(F.isInstancedBufferGeometry){const Ne=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,is=Math.min(F.instanceCount,Ne);Qe.renderInstances(tt,at,is)}else Qe.render(tt,at)};function Ge(M,L,F){M.transparent===!0&&M.side===Jt&&M.forceSinglePass===!1?(M.side=yt,M.needsUpdate=!0,xi(M,L,F),M.side=fn,M.needsUpdate=!0,xi(M,L,F),M.side=Jt):xi(M,L,F)}this.compile=function(M,L,F=null){F===null&&(F=M),p=ye.get(F),p.init(),b.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==F&&M.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights);const O=new Set;return M.traverse(function(N){const ae=N.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Me=ae[pe];Ge(Me,F,N),O.add(Me)}else Ge(ae,F,N),O.add(ae)}),b.pop(),p=null,O},this.compileAsync=function(M,L,F=null){const O=this.compile(M,L,F);return new Promise(N=>{function ae(){if(O.forEach(function(pe){Le.get(pe).currentProgram.isReady()&&O.delete(pe)}),O.size===0){N(M);return}setTimeout(ae,10)}_e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let $e=null;function ht(M){$e&&$e(M)}function wt(){gt.stop()}function Ke(){gt.start()}const gt=new po;gt.setAnimationLoop(ht),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(M){$e=M,Be.setAnimationLoop(M),M===null?gt.stop():gt.start()},Be.addEventListener("sessionstart",wt),Be.addEventListener("sessionend",Ke),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(L),L=Be.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,L,w),p=ye.get(M,b.length),p.init(),b.push(p),xe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),be.setFromProjectionMatrix(xe),K=this.localClippingEnabled,B=Ue.init(this.clippingPlanes,K),S=le.get(M,f.length),S.init(),f.push(S),Bt(M,L,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(k,V),this.info.render.frame++,B===!0&&Ue.beginShadows();const F=p.state.shadowsArray;if($.render(F,M,L),B===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1)&&We.render(S,M),p.setupLights(x._useLegacyLights),L.isArrayCamera){const O=L.cameras;for(let N=0,ae=O.length;N<ae;N++){const pe=O[N];ar(S,M,pe,pe.viewport)}}else ar(S,M,L);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(x,M,L),Pe.resetDefaultState(),G=-1,se=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function Bt(M,L,F,O){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||be.intersectsSprite(M)){O&&de.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xe);const pe=J.update(M),Me=M.material;Me.visible&&S.push(M,pe,Me,F,de.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||be.intersectsObject(M))){const pe=J.update(M),Me=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),de.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),de.copy(pe.boundingSphere.center)),de.applyMatrix4(M.matrixWorld).applyMatrix4(xe)),Array.isArray(Me)){const Ee=pe.groups;for(let Ie=0,we=Ee.length;Ie<we;Ie++){const Ce=Ee[Ie],tt=Me[Ce.materialIndex];tt&&tt.visible&&S.push(M,pe,tt,F,de.z,Ce)}}else Me.visible&&S.push(M,pe,Me,F,de.z,null)}}const ae=M.children;for(let pe=0,Me=ae.length;pe<Me;pe++)Bt(ae[pe],L,F,O)}function ar(M,L,F,O){const N=M.opaque,ae=M.transmissive,pe=M.transparent;p.setupLightsView(F),B===!0&&Ue.setGlobalState(x.clippingPlanes,F),ae.length>0&&bo(N,ae,L,F),O&&me.viewport(v.copy(O)),N.length>0&&vi(N,L,F),ae.length>0&&vi(ae,L,F),pe.length>0&&vi(pe,L,F),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function bo(M,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ae=Te.isWebGL2;oe===null&&(oe=new Cn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?di:dn,minFilter:Tn,samples:ae?4:0})),x.getDrawingBufferSize(Se),ae?oe.setSize(Se.x,Se.y):oe.setSize(Zs(Se.x),Zs(Se.y));const pe=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(ee),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();const Me=x.toneMapping;x.toneMapping=un,vi(M,F,O),y.updateMultisampleRenderTarget(oe),y.updateRenderTargetMipmap(oe);let Ee=!1;for(let Ie=0,we=L.length;Ie<we;Ie++){const Ce=L[Ie],tt=Ce.object,bt=Ce.geometry,at=Ce.material,Xt=Ce.group;if(at.side===Jt&&tt.layers.test(O.layers)){const Qe=at.side;at.side=yt,at.needsUpdate=!0,or(tt,F,O,bt,at,Xt),at.side=Qe,at.needsUpdate=!0,Ee=!0}}Ee===!0&&(y.updateMultisampleRenderTarget(oe),y.updateRenderTargetMipmap(oe)),x.setRenderTarget(pe),x.setClearColor(ee,C),x.toneMapping=Me}function vi(M,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ae=M.length;N<ae;N++){const pe=M[N],Me=pe.object,Ee=pe.geometry,Ie=O===null?pe.material:O,we=pe.group;Me.layers.test(F.layers)&&or(Me,L,F,Ee,Ie,we)}}function or(M,L,F,O,N,ae){M.onBeforeRender(x,L,F,O,N,ae),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,L,F,O,M,ae),N.transparent===!0&&N.side===Jt&&N.forceSinglePass===!1?(N.side=yt,N.needsUpdate=!0,x.renderBufferDirect(F,L,O,N,M,ae),N.side=fn,N.needsUpdate=!0,x.renderBufferDirect(F,L,O,N,M,ae),N.side=Jt):x.renderBufferDirect(F,L,O,N,M,ae),M.onAfterRender(x,L,F,O,N,ae)}function xi(M,L,F){L.isScene!==!0&&(L=ze);const O=Le.get(M),N=p.state.lights,ae=p.state.shadowsArray,pe=N.state.version,Me=fe.getParameters(M,N.state,ae,L,F),Ee=fe.getProgramCacheKey(Me);let Ie=O.programs;O.environment=M.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(M.isMeshStandardMaterial?I:_).get(M.envMap||O.environment),Ie===void 0&&(M.addEventListener("dispose",ne),Ie=new Map,O.programs=Ie);let we=Ie.get(Ee);if(we!==void 0){if(O.currentProgram===we&&O.lightsStateVersion===pe)return cr(M,Me),we}else Me.uniforms=fe.getUniforms(M),M.onBuild(F,Me,x),M.onBeforeCompile(Me,x),we=fe.acquireProgram(Me,Ee),Ie.set(Ee,we),O.uniforms=Me.uniforms;const Ce=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),cr(M,Me),O.needsLights=wo(M),O.lightsStateVersion=pe,O.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=we,O.uniformsList=null,we}function lr(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Gi.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function cr(M,L){const F=Le.get(M);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function To(M,L,F,O,N){L.isScene!==!0&&(L=ze),y.resetTextureUnits();const ae=L.fog,pe=O.isMeshStandardMaterial?L.environment:null,Me=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tn,Ee=(O.isMeshStandardMaterial?I:_).get(O.envMap||pe),Ie=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,we=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ce=!!F.morphAttributes.position,tt=!!F.morphAttributes.normal,bt=!!F.morphAttributes.color;let at=un;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(at=x.toneMapping);const Xt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=Xt!==void 0?Xt.length:0,Ne=Le.get(O),is=p.state.lights;if(B===!0&&(K===!0||M!==se)){const Rt=M===se&&O.id===G;Ue.setState(O,M,Rt)}let et=!1;O.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==is.state.version||Ne.outputColorSpace!==Me||N.isBatchedMesh&&Ne.batching===!1||!N.isBatchedMesh&&Ne.batching===!0||N.isInstancedMesh&&Ne.instancing===!1||!N.isInstancedMesh&&Ne.instancing===!0||N.isSkinnedMesh&&Ne.skinning===!1||!N.isSkinnedMesh&&Ne.skinning===!0||N.isInstancedMesh&&Ne.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ne.instancingColor===!1&&N.instanceColor!==null||Ne.envMap!==Ee||O.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ue.numPlanes||Ne.numIntersection!==Ue.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==we||Ne.morphTargets!==Ce||Ne.morphNormals!==tt||Ne.morphColors!==bt||Ne.toneMapping!==at||Te.isWebGL2===!0&&Ne.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ne.__version=O.version);let mn=Ne.currentProgram;et===!0&&(mn=xi(O,L,N));let hr=!1,ii=!1,ss=!1;const ft=mn.getUniforms(),gn=Ne.uniforms;if(me.useProgram(mn.program)&&(hr=!0,ii=!0,ss=!0),O.id!==G&&(G=O.id,ii=!0),hr||se!==M){ft.setValue(P,"projectionMatrix",M.projectionMatrix),ft.setValue(P,"viewMatrix",M.matrixWorldInverse);const Rt=ft.map.cameraPosition;Rt!==void 0&&Rt.setValue(P,de.setFromMatrixPosition(M.matrixWorld)),Te.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ft.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),se!==M&&(se=M,ii=!0,ss=!0)}if(N.isSkinnedMesh){ft.setOptional(P,N,"bindMatrix"),ft.setOptional(P,N,"bindMatrixInverse");const Rt=N.skeleton;Rt&&(Te.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),ft.setValue(P,"boneTexture",Rt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(ft.setOptional(P,N,"batchingTexture"),ft.setValue(P,"batchingTexture",N._matricesTexture,y));const rs=F.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0&&Te.isWebGL2===!0)&&Oe.update(N,F,mn),(ii||Ne.receiveShadow!==N.receiveShadow)&&(Ne.receiveShadow=N.receiveShadow,ft.setValue(P,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(gn.envMap.value=Ee,gn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),ii&&(ft.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Ao(gn,ss),ae&&O.fog===!0&&re.refreshFogUniforms(gn,ae),re.refreshMaterialUniforms(gn,O,q,z,oe),Gi.upload(P,lr(Ne),gn,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Gi.upload(P,lr(Ne),gn,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ft.setValue(P,"center",N.center),ft.setValue(P,"modelViewMatrix",N.modelViewMatrix),ft.setValue(P,"normalMatrix",N.normalMatrix),ft.setValue(P,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Rt=O.uniformsGroups;for(let as=0,Ro=Rt.length;as<Ro;as++)if(Te.isWebGL2){const ur=Rt[as];ke.update(ur,mn),ke.bind(ur,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}function Ao(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function wo(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,L,F){Le.get(M.texture).__webglTexture=L,Le.get(M.depthTexture).__webglTexture=F;const O=Le.get(M);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,L){const F=Le.get(M);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,F=0){w=M,D=L,R=F;let O=!0,N=null,ae=!1,pe=!1;if(M){const Ee=Le.get(M);Ee.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(P.FRAMEBUFFER,null),O=!1):Ee.__webglFramebuffer===void 0?y.setupRenderTarget(M):Ee.__hasExternalTextures&&y.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const we=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[L])?N=we[L][F]:N=we[L],ae=!0):Te.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?N=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?N=we[F]:N=we,v.copy(M.viewport),T.copy(M.scissor),X=M.scissorTest}else v.copy(j).multiplyScalar(q).floor(),T.copy(Z).multiplyScalar(q).floor(),X=he;if(me.bindFramebuffer(P.FRAMEBUFFER,N)&&Te.drawBuffers&&O&&me.drawBuffers(M,N),me.viewport(v),me.scissor(T),me.setScissorTest(X),ae){const Ee=Le.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ee.__webglTexture,F)}else if(pe){const Ee=Le.get(M.texture),Ie=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.__webglTexture,F||0,Ie)}G=-1},this.readRenderTargetPixels=function(M,L,F,O,N,ae,pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){me.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Ee=M.texture,Ie=Ee.format,we=Ee.type;if(Ie!==Ft&&ce.convert(Ie)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===di&&(_e.has("EXT_color_buffer_half_float")||Te.isWebGL2&&_e.has("EXT_color_buffer_float"));if(we!==dn&&ce.convert(we)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===Qt&&(Te.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-O&&F>=0&&F<=M.height-N&&P.readPixels(L,F,O,N,ce.convert(Ie),ce.convert(we),ae)}finally{const Ee=w!==null?Le.get(w).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(M,L,F=0){const O=Math.pow(2,-F),N=Math.floor(L.image.width*O),ae=Math.floor(L.image.height*O);y.setTexture2D(L,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,M.x,M.y,N,ae),me.unbindTexture()},this.copyTextureToTexture=function(M,L,F,O=0){const N=L.image.width,ae=L.image.height,pe=ce.convert(F.format),Me=ce.convert(F.type);y.setTexture2D(F,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment),L.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,M.x,M.y,N,ae,pe,Me,L.image.data):L.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,pe,L.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,O,M.x,M.y,pe,Me,L.image),O===0&&F.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(M,L,F,O,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=M.max.x-M.min.x+1,pe=M.max.y-M.min.y+1,Me=M.max.z-M.min.z+1,Ee=ce.convert(O.format),Ie=ce.convert(O.type);let we;if(O.isData3DTexture)y.setTexture3D(O,0),we=P.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)y.setTexture2DArray(O,0),we=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const Ce=P.getParameter(P.UNPACK_ROW_LENGTH),tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),bt=P.getParameter(P.UNPACK_SKIP_PIXELS),at=P.getParameter(P.UNPACK_SKIP_ROWS),Xt=P.getParameter(P.UNPACK_SKIP_IMAGES),Qe=F.isCompressedTexture?F.mipmaps[N]:F.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Qe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,M.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,M.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?P.texSubImage3D(we,N,L.x,L.y,L.z,ae,pe,Me,Ee,Ie,Qe.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(we,N,L.x,L.y,L.z,ae,pe,Me,Ee,Qe.data)):P.texSubImage3D(we,N,L.x,L.y,L.z,ae,pe,Me,Ee,Ie,Qe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ce),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,bt),P.pixelStorei(P.UNPACK_SKIP_ROWS,at),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xt),N===0&&O.generateMipmaps&&P.generateMipmap(we),me.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){D=0,R=0,w=null,me.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tr?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Ji?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Rn:Qa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rn?ut:tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kf extends Mo{}kf.prototype.isWebGL1Renderer=!0;class Gf extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class yo extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new U,Na=new U,Fa=new it,Hs=new ro,Vi=new Qi;class Wf extends dt{constructor(e=new Wt,t=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ia.fromBufferAttribute(t,s-1),Na.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(Na);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(s),Vi.radius+=r,e.ray.intersectsSphere(Vi)===!1)return;Fa.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(Fa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=f,A=b-1;x<A;x+=m){const D=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(p,D),h.fromBufferAttribute(p,R),Hs.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(d);G<e.near||G>e.far||t.push({distance:G,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=f,A=b-1;x<A;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Hs.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class rr extends Wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new U,h=new He;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Eo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zs=new it,Oa=new U,Ba=new U;class Xf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oa),Ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ba),t.updateMatrixWorld(),zs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qf extends Xf{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yf extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new qf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $f extends Eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ha(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ha();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ha(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qs);function jf(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Zf(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Jf(i,e,t){return e&&Zf(i.prototype,e),i}var Qf=function(){function i(){jf(this,i);const e=window.AudioContext||window.webkitAudioContext;if(this.audioCtx=null,e)try{this.audioCtx=new e}catch(t){console.error("AudioContext error:",t)}}return Jf(i,[{key:"resumeContext",value:function(){return this.audioCtx&&this.audioCtx.state==="suspended"?this.audioCtx.resume():Promise.resolve()}},{key:"playStartBeep",value:async function(){this.audioCtx&&(await this.resumeContext(),this._playBeep({frequency:520,type:"triangle",duration:.12,volume:.2}))}},{key:"playCountdownBeep",value:async function(){this.audioCtx&&(await this.resumeContext(),this._playBeep({frequency:900,type:"square",duration:.05,volume:.18}))}},{key:"playRepValidated",value:async function(){if(!this.audioCtx)return;await this.resumeContext();const t=this.audioCtx.currentTime;this._playBeep({frequency:620,type:"square",duration:.05,volume:.18,when:t}),this._playBeep({frequency:760,type:"triangle",duration:.07,volume:.18,when:t+.07})}},{key:"playCelebrationSound",value:async function(){if(!this.audioCtx)return;await this.resumeContext();const t=this.audioCtx.currentTime;this._playBeep({frequency:520,type:"sawtooth",duration:.08,volume:.16,when:t,filterFreq:1600}),this._playBeep({frequency:660,type:"sawtooth",duration:.1,volume:.18,when:t+.1,filterFreq:1600}),this._playBeep({frequency:820,type:"sawtooth",duration:.14,volume:.2,when:t+.22,filterFreq:1800})}},{key:"_playBeep",value:function(t){if(!this.audioCtx)return;const n=t.frequency??440,s=t.type??"triangle",r=t.duration??.1,o=t.volume??.2,a=t.when??this.audioCtx.currentTime,l=t.filterFreq??2e3,c=this.audioCtx.createOscillator(),h=this.audioCtx.createGain(),u=this.audioCtx.createBiquadFilter(),d=t.detune??Math.random()*8-4;c.detune.setValueAtTime(d,a),c.type=s,c.frequency.setValueAtTime(n,a),u.type="lowpass",u.frequency.setValueAtTime(l,a);const m=.012,g=Math.max(.03,r*.7);h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(o,a+m),h.gain.exponentialRampToValueAtTime(1e-4,a+r+g),c.connect(u),u.connect(h),h.connect(this.audioCtx.destination),c.start(a),c.stop(a+r+g)}}]),i}();const ep="https://lmblqxwssrxucbtowfkq.supabase.co",tp="sb_publishable_8cLzA_3Ud6AaLSi8mTf1Gw_4lJZTLjs",Vs=window.supabase.createClient(ep,tp),ki=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);function za(i){return Math.max(0,Math.min(1,i))}function W(i,e=.5){return!!i&&(i.visibility??0)>=e}function Xe(i,e,t){if(!i||!e||!t)return null;const n=i.x-e.x,s=i.y-e.y,r=(i.z??0)-(e.z??0),o=t.x-e.x,a=t.y-e.y,l=(t.z??0)-(e.z??0),c=n*o+s*a+r*l,h=Math.sqrt(n*n+s*s+r*r),u=Math.sqrt(o*o+a*a+l*l);if(h===0||u===0)return null;const d=Math.max(-1,Math.min(1,c/(h*u)));return Math.acos(d)*180/Math.PI}function np(i,e=180){if(i==null)return null;const t=Math.abs(e-i);return t<=5?10:t<=10?8:t<=20?6:t<=30?4:2}function Va(i){return i==null?null:i<=80?10:i<=90?8:i<=100?6:i<=110?4:2}function ip(i,e){if(!(e!=null&&e._poseMetrics))return null;const t=e._poseMetrics(i),n=t.shWrXL==null?t.shWrXR:t.shWrXR==null?t.shWrXL:(t.shWrXL+t.shWrXR)/2;let s=null;n!=null&&e.name!=="Tuck planche"&&e.name!=="Adv. tuck planche"&&(n>=.16?s=10:n>=.14?s=8:n>=.12?s=6:n>=.1?s=4:s=2);const r=t.shHipYL==null?t.shHipYR:t.shHipYR==null?t.shHipYL:(t.shHipYL+t.shHipYR)/2;let o=null;r!=null&&(r<=.04?o=10:r<=.06?o=8:r<=.1?o=6:r<=.15?o=4:o=2);let a=null;if(e.name==="Straddle planche"||e.name==="Full planche"||e.name==="Planche lean"){const d=t.aL==null?t.aR:t.aR==null?t.aL:(t.aL+t.aR)/2;if(d!=null){const m=Math.abs(170-d);m<=5?a=10:m<=10?a=8:m<=15?a=6:m<=20?a=4:a=2}}let l=null;if(e.name==="Adv. tuck planche"){const d=t.khsAngleL==null?t.khsAngleR:t.khsAngleR==null?t.khsAngleL:(t.khsAngleL+t.khsAngleR)/2;d!=null&&(d>=85?l=10:d>=80?l=8:d>=75?l=6:d>=70?l=4:l=2)}let c=null;if(e.name==="Straddle planche"||e.name==="Full planche"||e.name==="Planche lean"){const d=t.hkaAngleL==null?t.hkaAngleR:t.hkaAngleR==null?t.hkaAngleL:(t.hkaAngleL+t.hkaAngleR)/2;if(d!=null){const m=Math.abs(175-d);m<=5?c=10:m<=10?c=8:m<=15?c=6:m<=20?c=4:c=2}}const h=[s,o,a,l,c].filter(d=>d!=null);return console.log(`[${e.name}] Scores - Lean: ${s}, Trunk: ${o}, Alignment: ${a}, KneeHipShoulder: ${l}, StraightLegs: ${c}`),h.length?{avgScore:Math.round(h.reduce((d,m)=>d+m,0)/h.length*10)/10,leanScore:s,trunkScore:o,alignmentScore:a,kneeHipShoulderScore:l,straightLegsScore:c}:{avgScore:null,leanScore:s,trunkScore:o,alignmentScore:a,kneeHipShoulderScore:l,straightLegsScore:c}}function Ht(i){return i.length?i.reduce((e,t)=>e+t,0)/i.length:null}function hi(i,e={}){return{name:i,mode:"hold",tracking:"timer",initState:"off",activeState:"on",idleEndState:"off",requireShouldersAheadOfWrists:!0,shWrXStartMin:.16,shWrXStopMin:.155,armTorsoMaxDeg:130,requiredVisibility:.45,straightStartDeg:130,straightStopDeg:128,hysteresisDeg:2,shHipYStartMax:.19,shHipYStopMax:.27,sidePolicy:"either",_poseMetrics(t){const n=t[11],s=t[12],r=t[13],o=t[14],a=t[23],l=t[24],c=t[15],h=t[16],u=t[27],d=t[28],m=t[25],g=t[26],S=W(n,this.requiredVisibility)&&W(r,this.requiredVisibility)&&W(a,this.requiredVisibility)&&W(c,this.requiredVisibility)&&W(u,this.requiredVisibility),p=W(s,this.requiredVisibility)&&W(o,this.requiredVisibility)&&W(l,this.requiredVisibility)&&W(h,this.requiredVisibility)&&W(d,this.requiredVisibility),f=S?Xe(n,a,u):null,b=p?Xe(s,l,d):null,x=S?Math.abs(n.y-a.y):null,A=p?Math.abs(s.y-l.y):null,D=S?Xe(r,n,a):null,R=p?Xe(o,s,l):null,w=S?n.x-c.x:null,G=p?s.x-h.x:null,se=S&&W(m,this.requiredVisibility),v=p&&W(g,this.requiredVisibility),T=se?Xe(m,a,n):null,X=v?Xe(g,l,s):null,ee=se?Xe(a,m,u):null,C=v?Xe(l,g,d):null;return{aL:f,aR:b,shHipYL:x,shHipYR:A,armTorsoL:D,armTorsoR:R,shWrXL:w,shWrXR:G,khsAngleL:T,khsAngleR:X,hkaAngleL:ee,hkaAngleR:C}},_effectiveAngle(t){const{aL:n,aR:s}=this._poseMetrics(t);return n==null?s:s==null?n:(n+s)/2},_effectiveArmTorsoAngle(t){const{armTorsoL:n,armTorsoR:s}=this._poseMetrics(t);return n==null?s:s==null?n:(n+s)/2},_effectiveShHipY(t){const{shHipYL:n,shHipYR:s}=this._poseMetrics(t);return n==null?s:s==null?n:(n+s)/2},canStart(t){const{aL:n,aR:s,shHipYL:r,shHipYR:o,armTorsoL:a,armTorsoR:l,shWrXL:c,shWrXR:h,khsAngleL:u,khsAngleR:d}=this._poseMetrics(t),m=n==null?s:s==null?n:(n+s)/2,g=r==null?o:o==null?r:(r+o)/2,S=a==null?l:l==null?a:(a+l)/2,p=c==null?h:h==null?c:(c+h)/2,f=u==null?d:d==null?u:(u+d)/2;if(console.log("Planche canStart check:",{ang:m,yDiff:g,armTorso:S,shWrX:p,khsAngle:f,straightStartDeg:this.straightStartDeg,hysteresisDeg:this.hysteresisDeg,shHipYStartMax:this.shHipYStartMax,armTorsoMaxDeg:this.armTorsoMaxDeg,shWrXStartMin:this.shWrXStartMin}),m==null||g==null||S==null)return console.log("Planche canStart -> false (missing metrics)"),!1;if(S>this.armTorsoMaxDeg)return console.log("Planche canStart -> false (armTorso > armTorsoMaxDeg)"),!1;if(this.requireShouldersAheadOfWrists){if(p==null)return console.log("Planche canStart -> false (shWrX missing)"),!1;if(p<this.shWrXStartMin)return console.log("Planche canStart -> false (shWrX < shWrXStartMin)"),!1}if(this.name==="Adv. tuck planche"){if(f==null)return console.log("Planche canStart -> false (khsAngle missing for Adv. tuck)"),!1;if(f<82)return console.log(`Planche canStart -> false (khsAngle ${f}° < 82° for Adv. tuck)`),!1}const b=this.straightStartDeg==null?!0:m>=this.straightStartDeg-this.hysteresisDeg,x=g<=this.shHipYStartMax;b||console.log("Planche canStart -> false (angle below start)"),x||console.log("Planche canStart -> false (shHipY above start max)");const A=b&&x;return console.log("Planche canStart ->",A),A},canComplete(t){const{aL:n,aR:s,shHipYL:r,shHipYR:o,shWrXL:a,shWrXR:l}=this._poseMetrics(t),c=n==null?s:s==null?n:(n+s)/2,h=r==null?o:o==null?r:(r+o)/2,u=a==null?l:l==null?a:(a+l)/2;if(console.log("Planche canComplete check:",{ang:c,yDiff:h,shWrX:u,straightStopDeg:this.straightStopDeg,hysteresisDeg:this.hysteresisDeg,shHipYStopMax:this.shHipYStopMax,shWrXStopMin:this.shWrXStopMin}),c==null||h==null)return console.log("Planche canComplete -> true (missing metrics)"),!0;if(this.requireShouldersAheadOfWrists){if(u==null)return console.log("Planche canComplete -> true (shWrX missing)"),!0;if(u<this.shWrXStopMin)return console.log("Planche canComplete -> true (shWrX < shWrXStopMin)"),!0}return this.straightStopDeg!=null&&c<=this.straightStopDeg+this.hysteresisDeg?(console.log("Planche canComplete -> true (angle below stop)"),!0):h>=this.shHipYStopMax?(console.log("Planche canComplete -> true (shHipY above stop)"),!0):(console.log("Planche canComplete -> false (no stop condition met)"),!1)},getAscentSignal(t){const n=t[11],s=t[12];return!W(n,.35)||!W(s,.35)?null:(n.y+s.y)/2},...e}}function ks(i,e={}){return{name:i,mode:"hold",tracking:"timer",initState:"off",activeState:"on",idleEndState:"off",requiredVisibility:.45,armTorsoMaxDeg:135,shHipYMax:.08,hipAnkleYMax:.12,hysteresisDeg:2,sidePolicy:"either",_poseMetrics(t){const n=t[11],s=t[12],r=t[13],o=t[14],a=t[23],l=t[24],c=t[27],h=t[28],u=W(n,this.requiredVisibility)&&W(r,this.requiredVisibility)&&W(a,this.requiredVisibility)&&W(c,this.requiredVisibility),d=W(s,this.requiredVisibility)&&W(o,this.requiredVisibility)&&W(l,this.requiredVisibility)&&W(h,this.requiredVisibility),m=u?Xe(r,n,a):null,g=d?Xe(o,s,l):null,S=u?Math.abs(n.y-a.y):null,p=d?Math.abs(s.y-l.y):null,f=u?Math.abs(a.y-c.y):null,b=d?Math.abs(l.y-h.y):null;return{armTorsoL:m,armTorsoR:g,shHipYL:S,shHipYR:p,hipAnkYL:f,hipAnkYR:b}},_avg(t,n){return t==null?n:n==null?t:(t+n)/2},canStart(t){const{armTorsoL:n,armTorsoR:s,shHipYL:r,shHipYR:o,hipAnkYL:a,hipAnkYR:l}=this._poseMetrics(t),c=this._avg(n,s),h=this._avg(r,o),u=this._avg(a,l);return!(c==null||h==null||u==null||c>this.armTorsoMaxDeg+this.hysteresisDeg||h>this.shHipYMax||u>this.hipAnkleYMax)},canComplete(t){const{armTorsoL:n,armTorsoR:s,shHipYL:r,shHipYR:o,hipAnkYL:a,hipAnkYR:l}=this._poseMetrics(t),c=this._avg(n,s),h=this._avg(r,o),u=this._avg(a,l);return c==null||h==null||u==null||c>this.armTorsoMaxDeg+this.hysteresisDeg||h>this.shHipYMax||u>this.hipAnkleYMax},getAscentSignal(t){const n=t[11],s=t[12];return!W(n,.35)||!W(s,.35)?null:(n.y+s.y)/2},...e}}function sp(i,e={}){return{name:i,mode:"hold",tracking:"timer",initState:"off",activeState:"on",idleEndState:"off",requiredVisibility:.45,straightStartDeg:155,straightStopDeg:135,hysteresisDeg:3,shHipYMax:.08,hipAnkleYMax:.1,armTorsoMaxDeg:140,sidePolicy:"either",_poseMetrics(t){const n=t[11],s=t[12],r=t[13],o=t[14],a=t[23],l=t[24],c=t[27],h=t[28],u=W(n,this.requiredVisibility)&&W(r,this.requiredVisibility)&&W(a,this.requiredVisibility)&&W(c,this.requiredVisibility),d=W(s,this.requiredVisibility)&&W(o,this.requiredVisibility)&&W(l,this.requiredVisibility)&&W(h,this.requiredVisibility),m=u?Xe(n,a,c):null,g=d?Xe(s,l,h):null,S=u?Xe(r,n,a):null,p=d?Xe(o,s,l):null,f=u?Math.abs(n.y-a.y):null,b=d?Math.abs(s.y-l.y):null,x=u?Math.abs(a.y-c.y):null,A=d?Math.abs(l.y-h.y):null;return{straightL:m,straightR:g,armTorsoL:S,armTorsoR:p,shHipYL:f,shHipYR:b,hipAnkYL:x,hipAnkYR:A}},_avg(t,n){return t==null?n:n==null?t:(t+n)/2},canStart(t){const n=this._poseMetrics(t),s=this._avg(n.straightL,n.straightR),r=this._avg(n.armTorsoL,n.armTorsoR),o=this._avg(n.shHipYL,n.shHipYR),a=this._avg(n.hipAnkYL,n.hipAnkYR);return s==null||r==null||o==null||a==null||r>this.armTorsoMaxDeg?!1:s>=this.straightStartDeg-this.hysteresisDeg&&o<=this.shHipYMax&&a<=this.hipAnkleYMax},canComplete(t){const n=this._poseMetrics(t),s=this._avg(n.straightL,n.straightR),r=this._avg(n.shHipYL,n.shHipYR),o=this._avg(n.hipAnkYL,n.hipAnkYR);return s==null||r==null||o==null||s<=this.straightStopDeg+this.hysteresisDeg||r>this.shHipYMax||o>this.hipAnkleYMax},getAscentSignal(t){const n=t[11],s=t[12];return!W(n,.35)||!W(s,.35)?null:(n.y+s.y)/2},...e}}function rp(){return{Tractions:{name:"Tractions",mode:"reps",initState:"hanging",activeState:"pulling",idleEndState:"pulling",startHeadVsElbow:-.02,completeHeadVsWrist:.04,requiredVisibility:.5,canStart(i){const e=i[0],t=i[13],n=i[14];if(!W(e,this.requiredVisibility)||!W(t,this.requiredVisibility)||!W(n,this.requiredVisibility))return!1;const s=e.y,r=(t.y+n.y)/2;return s>r+this.startHeadVsElbow},canComplete(i){const e=i[0],t=i[15],n=i[16];if(!W(e,this.requiredVisibility)||!W(t,this.requiredVisibility)||!W(n,this.requiredVisibility))return!1;const s=e.y,r=(t.y+n.y)/2;return s<=r+this.completeHeadVsWrist},getAscentSignal(i){const e=i[0];return W(e,.5)?e.y:null}},Pompes:{name:"Pompes",mode:"reps",initState:"up",activeState:"down",idleEndState:"up",topAngleDeg:149,bottomAngleDeg:110,requiredVisibility:.45,armPolicy:"either",hysteresisDeg:3,_elbowAngles(i){const e=i[11],t=i[12],n=i[13],s=i[14],r=i[15],o=i[16],a=W(e,this.requiredVisibility)&&W(n,this.requiredVisibility)&&W(r,this.requiredVisibility),l=W(t,this.requiredVisibility)&&W(s,this.requiredVisibility)&&W(o,this.requiredVisibility),c=a?Xe(e,n,r):null,h=l?Xe(t,s,o):null;return{aL:c,aR:h}},_effectiveAngle(i){const{aL:e,aR:t}=this._elbowAngles(i);return this.armPolicy==="both"?e==null||t==null?null:(e+t)/2:e==null&&t==null?null:e==null?t:t==null?e:(e+t)/2},canStart(i){const e=this._effectiveAngle(i);return e==null?!1:e<=this.bottomAngleDeg+this.hysteresisDeg},canComplete(i){const e=this._effectiveAngle(i);return e==null?!1:e>=this.topAngleDeg-this.hysteresisDeg},getAscentSignal(i){const e=i[11],t=i[12];return!W(e,.35)||!W(t,.35)?null:(e.y+t.y)/2}},Handstand:{name:"Handstand",mode:"hold",tracking:"timer",initState:"off",activeState:"on",idleEndState:"off",requiredVisibility:.4,invertMarginY:.08,straightStartDeg:165,straightStopDeg:145,hysteresisDeg:3,sidePolicy:"either",_bodyAnglesAndInversion(i){const e=i[11],t=i[12],n=i[23],s=i[24],r=i[27],o=i[28],a=W(e,this.requiredVisibility)&&W(n,this.requiredVisibility)&&W(r,this.requiredVisibility),l=W(t,this.requiredVisibility)&&W(s,this.requiredVisibility)&&W(o,this.requiredVisibility),c=a?Xe(e,n,r):null,h=l?Xe(t,s,o):null,u=a?r.y+this.invertMarginY<e.y:null,d=l?o.y+this.invertMarginY<t.y:null;return{aL:c,aR:h,invL:u,invR:d}},_effectiveStraightAngle(i){const{aL:e,aR:t}=this._bodyAnglesAndInversion(i);return this.sidePolicy==="both"?e==null||t==null?null:(e+t)/2:e==null&&t==null?null:e==null?t:t==null?e:(e+t)/2},_isInverted(i){const{invL:e,invR:t}=this._bodyAnglesAndInversion(i);return this.sidePolicy==="both"?e==null||t==null?!1:!!e&&!!t:e==null&&t==null?!1:e==null?!!t:t==null?!!e:!!e||!!t},canStart(i){if(!this._isInverted(i))return!1;const t=this._effectiveStraightAngle(i);return t==null?!1:t>=this.straightStartDeg-this.hysteresisDeg},canComplete(i){const e=this._isInverted(i),t=this._effectiveStraightAngle(i);return t!=null&&console.log(`[Handstand] Angle: ${t.toFixed(1)}° | Inverted: ${e} | Threshold: ${this.straightStopDeg+this.hysteresisDeg}°`),!e||t==null?!0:t<=this.straightStopDeg+this.hysteresisDeg},getAscentSignal(i){const e=i[11],t=i[12];return!W(e,.35)||!W(t,.35)?null:(e.y+t.y)/2},_effectiveAngle(i){return this._effectiveStraightAngle(i)}},"Handstand Push Up":{name:"Handstand Push Up",mode:"reps",initState:"top",activeState:"bottom",idleEndState:"top",endPolicy:"break_pose",breakPoseGraceMs:400,requiredVisibility:.45,invertMarginY:.06,topAngleDeg:145,bottomAngleDeg:115,hysteresisDeg:4,armPolicy:"either",sidePolicy:"either",finalizeLikeHandstand:!0,_isInverted(i){const e=i[11],t=i[12],n=i[27],s=i[28],r=W(e,.4)&&W(n,.4)&&n.y+this.invertMarginY<e.y,o=W(t,.4)&&W(s,.4)&&s.y+this.invertMarginY<t.y;return this.sidePolicy==="both"?r&&o:r||o},_elbowAngles(i){const e=i[11],t=i[12],n=i[13],s=i[14],r=i[15],o=i[16],a=W(e,.4)&&W(n,.4)&&W(r,.4),l=W(t,.4)&&W(s,.4)&&W(o,.4),c=a?Xe(e,n,r):null,h=l?Xe(t,s,o):null;return this.armPolicy==="both"?c==null||h==null?null:(c+h)/2:c??h},canStart(i){if(!this._isInverted(i))return!1;const e=this._elbowAngles(i);return e==null?!1:e<=this.bottomAngleDeg+this.hysteresisDeg},canComplete(i){if(!this._isInverted(i))return!1;const e=this._elbowAngles(i);return e==null?!1:e>=this.topAngleDeg-this.hysteresisDeg},getAscentSignal(i){const e=i[11],t=i[12];return!W(e,.35)||!W(t,.35)?null:(e.y+t.y)/2}},"90 Degree HSPU":{name:"90 Degree HSPU",mode:"reps",initState:"top",activeState:"bottom",idleEndState:"top",hasReachedInvertedLock:!1,endPolicy:"break_pose",breakPoseGraceMs:400,finalizeLikeHandstand:!0,requiredVisibility:.45,invertMarginY:.06,topAngleDeg:145,bottomAngleDeg:110,hysteresisDeg:4,armTorsoMaxDeg:130,armPolicy:"either",sidePolicy:"either",_isInverted(i){const e=i[11],t=i[12],n=i[27],s=i[28],r=W(e,.4)&&W(n,.4)&&n.y+this.invertMarginY<e.y,o=W(t,.4)&&W(s,.4)&&s.y+this.invertMarginY<t.y;return r||o},_poseMetrics(i){const e=i[11],t=i[12],n=i[13],s=i[14],r=i[15],o=i[16],a=i[23],l=i[24],c=W(e,this.requiredVisibility)&&W(n,this.requiredVisibility)&&W(r,this.requiredVisibility)&&W(a,this.requiredVisibility),h=W(t,this.requiredVisibility)&&W(s,this.requiredVisibility)&&W(o,this.requiredVisibility)&&W(l,this.requiredVisibility),u=c?Xe(e,n,r):null,d=h?Xe(t,s,o):null,m=c?Xe(n,e,a):null,g=h?Xe(s,t,l):null;return{elbowL:u,elbowR:d,armTorsoL:m,armTorsoR:g}},_avg(i,e){return i==null?e:e==null?i:(i+e)/2},_isInvertedLock(i){if(!this._isInverted(i))return!1;const{elbowL:e,elbowR:t,armTorsoL:n,armTorsoR:s}=this._poseMetrics(i),r=this._avg(e,t),o=this._avg(n,s);return r==null||o==null?!1:r>=this.topAngleDeg-this.hysteresisDeg&&o<=this.armTorsoMaxDeg},canStart(i){if(!this._isInverted(i))return!1;if(!this.hasReachedInvertedLock)return this._isInvertedLock(i)&&(this.hasReachedInvertedLock=!0),!1;const{elbowL:e,elbowR:t,armTorsoL:n,armTorsoR:s}=this._poseMetrics(i),r=this._avg(e,t),o=this._avg(n,s);return r==null||o==null?!1:r<=this.bottomAngleDeg+this.hysteresisDeg&&o<=this.armTorsoMaxDeg},canComplete(i){if(!this._isInverted(i))return!1;const{elbowL:e,elbowR:t,armTorsoL:n,armTorsoR:s}=this._poseMetrics(i),r=this._avg(e,t),o=this._avg(n,s);if(r==null||o==null)return!1;const a=r>=this.topAngleDeg-this.hysteresisDeg&&o<=this.armTorsoMaxDeg;return a&&(this.hasReachedInvertedLock=!1),a},getAscentSignal(i){const e=i[11],t=i[12];return!W(e,.35)||!W(t,.35)?null:(e.y+t.y)/2}},Dips:{name:"Dips",mode:"reps",initState:"top",activeState:"bottom",idleEndState:"top",requiredVisibility:.45,topAngleDeg:155,bottomAngleDeg:100,hysteresisDeg:4,armPolicy:"either",sidePolicy:"either",_elbowAngles(i){const e=i[11],t=i[12],n=i[13],s=i[14],r=i[15],o=i[16],a=W(e,this.requiredVisibility)&&W(n,this.requiredVisibility)&&W(r,this.requiredVisibility),l=W(t,this.requiredVisibility)&&W(s,this.requiredVisibility)&&W(o,this.requiredVisibility),c=a?Xe(e,n,r):null,h=l?Xe(t,s,o):null;return this.armPolicy==="both"?c==null||h==null?null:(c+h)/2:c??h},_shouldersAboveElbows(i){const e=i[11],t=i[12],n=i[13],s=i[14],r=W(e,.4)&&W(n,.4),o=W(t,.4)&&W(s,.4),a=r?e.y<n.y:null,l=o?t.y<s.y:null;return this.sidePolicy==="both"?a==null||l==null?!1:a&&l:a||l},canStart(i){const e=this._elbowAngles(i);return e==null?!1:e<=this.bottomAngleDeg+this.hysteresisDeg},canComplete(i){const e=this._elbowAngles(i);return e==null||e<this.topAngleDeg-this.hysteresisDeg?!1:this._shouldersAboveElbows(i)},getAscentSignal(i){const e=i[11],t=i[12];return!W(e,.35)||!W(t,.35)?null:(e.y+t.y)/2}},"Front Lever Raises":{name:"Front Lever Raises",mode:"reps",initState:"hang",activeState:"front",idleEndState:"hang",requiredVisibility:.45,hysteresisDeg:2,armTorsoMaxDeg:135,shHipYMax:.08,hipAnkleYMax:.12,sidePolicy:"either",_poseMetrics(i){const e=i[11],t=i[12],n=i[13],s=i[14],r=i[23],o=i[24],a=i[27],l=i[28],c=W(e,this.requiredVisibility)&&W(n,this.requiredVisibility)&&W(r,this.requiredVisibility)&&W(a,this.requiredVisibility),h=W(t,this.requiredVisibility)&&W(s,this.requiredVisibility)&&W(o,this.requiredVisibility)&&W(l,this.requiredVisibility),u=c?Xe(n,e,r):null,d=h?Xe(s,t,o):null,m=c?Math.abs(e.y-r.y):null,g=h?Math.abs(t.y-o.y):null,S=c?Math.abs(r.y-a.y):null,p=h?Math.abs(o.y-l.y):null;return{armTorsoL:u,armTorsoR:d,shHipYL:m,shHipYR:g,hipAnkYL:S,hipAnkYR:p}},_avg(i,e){return i==null?e:e==null?i:(i+e)/2},canStart(i){const e=this._poseMetrics(i),t=this._avg(e.armTorsoL,e.armTorsoR),n=this._avg(e.shHipYL,e.shHipYR),s=this._avg(e.hipAnkYL,e.hipAnkYR);return!(t==null||n==null||s==null||t>this.armTorsoMaxDeg+this.hysteresisDeg||n>this.shHipYMax||s>this.hipAnkleYMax)},canComplete(i){const e=this._poseMetrics(i),t=this._avg(e.shHipYL,e.shHipYR),n=this._avg(e.hipAnkYL,e.hipAnkYR);return t==null||n==null?!1:t>this.shHipYMax+this.hysteresisDeg||n>this.hipAnkleYMax+this.hysteresisDeg},getAscentSignal(i){const e=i[11],t=i[12];return!W(e,.35)||!W(t,.35)?null:(e.y+t.y)/2}},"Straddle planche":hi("Straddle planche"),"Full planche":hi("Full planche",{straightStartDeg:129,straightStopDeg:125,shHipYStartMax:.28,shHipYStopMax:.3,shWrXStartMin:.2,shWrXStopMin:.19,armTorsoMaxDeg:120}),"Tuck planche":hi("Tuck planche",{straightStartDeg:null,straightStopDeg:null,shHipYStartMax:.11,shHipYStopMax:.09,shWrXStartMin:.06,shWrXStopMin:.05}),"Adv. tuck planche":hi("Adv. tuck planche",{straightStartDeg:null,straightStopDeg:null,shHipYStartMax:.11,shHipYStopMax:.09,shWrXStartMin:.06,shWrXStopMin:.05}),"Planche lean":hi("Planche lean",{shHipYStartMax:.09,shHipYStopMax:.1}),"Front Lever":ks("Front Lever",{armTorsoMaxDeg:100}),"Tuck Front Lever":ks("Tuck Front Lever",{armTorsoMaxDeg:145}),"Straddle Front Lever":ks("Straddle Front Lever",{armTorsoMaxDeg:140}),"Human Flag":sp("Human Flag")}}class ap{constructor(e){os(this,"I18N",{fr:{title:"Compteur de répétitions en temps réel – Calisthenics Ambition",instructions:"> active ta caméra<br />> positionne-toi pour que ton haut du corps soit visible<br />",loading:"Chargement de la caméra et de la détection de pose…",start:"DÉMARRER",exercise:"Exercice",reps:"Répétitions",time:"Temps",quit:"↩ Quitter",weight:"Lest (kg)",assist:"Assist (kg)",language:"Langue",setCompleted:"Set",totalSets:"Total sets",saveSession:"Sauvegarder la séance",restartSet:"Recommencer un set",sessionSaved:"✅ Séance enregistrée !",saveError:"❌ Erreur sauvegarde (voir console)",unitSeconds:"s",unitReps:"reps",quality:"💎 Note de forme",exerciseLabel:"Exercice:",languageLabel:"Langue :",hideLabel:"Masquer lignes/interface",downloadVideo:"Télécharger vidéo"},en:{title:"Calisthenics Ambition real-time rep counter",instructions:"> enable camera access<br />> position yourself so your upper body is visible<br />",loading:"Loading camera and pose detection...",start:"START",exercise:"Exercise",reps:"Reps",time:"Time",quit:"↩ Exit",weight:"Load (kg)",assist:"Assist (kg)",language:"Language",setCompleted:"Set",totalSets:"Total sets",saveSession:"Save session",restartSet:"Restart set",sessionSaved:"✅ Session saved!",saveError:"❌ Save error (see console)",unitSeconds:"s",unitReps:"reps",quality:"💎 Form score",exerciseLabel:"Exercise:",languageLabel:"Language:",hideLabel:"Hide lines/interface",downloadVideo:"Download video"}});os(this,"EXERCISE_LABELS",{fr:{Tractions:"Tractions",Pompes:"Pompes",Dips:"Dips",Handstand:"Handstand","Handstand Push Up":"Handstand Push Up","90 Degree HSPU":"90 Degree HSPU","Front Lever":"Front Lever","Front Lever Raises":"Front Lever Raises","Human Flag":"Human Flag","Straddle planche":"Straddle planche","Full planche":"Full planche","Tuck planche":"Tuck planche","Planche lean":"Planche lean"},en:{Tractions:"Pull Ups",Pompes:"Push Ups",Dips:"Dips",Handstand:"Handstand","Handstand Push Up":"Handstand Push Up","90 Degree HSPU":"90 Degree HSPU","Front Lever":"Front Lever","Front Lever Raises":"Front Lever Raises","Human Flag":"Human Flag","Straddle planche":"Straddle planche","Full planche":"Full planche","Tuck planche":"Tuck planche","Planche lean":"Planche lean"}});this.renderDiv=e,this.ctx=null,this.sessionStartedAt=null,this.EXERCISES=rp(),this.exercise=this.EXERCISES.Tractions,this.scene=null,this.camera=null,this.renderer=null,this.videoElement=null,this.currentFacingMode="user",this.startScreenOverlay=null,this.startButton=null,this.counterContainer=null,this.counterDisplay=null,this.gameOverContainer=null,this.gameOverText=null,this.loadingText=null,this.weightKgInput=null,this.saveSessionBtn=null,this.restartSetBtn=null,this.exerciseSelect=null,this.liveMenuContainer=null,this.backButton=null,this.isSwitchingExercise=!1,this.autoFinalizeOnSwitch=!0,this.hideLandmarksAndUI=!1,this.hideCheckboxOverlay=null,this.hideCheckboxLive=null,this.mediaRecorder=null,this.recordedChunks=[],this.recordedVideoBlob=null,this.recordedMimeType=null,this.downloadVideoBtn=null,this.holdStartMs=null,this.lastTimerUiUpdateMs=0,this.timerUiEveryMs=100,this.lastTrackedLandmarks=null,this.poseBrokenSinceMs=null,this.qualitySamples=[],this.qualityScoreLastSet=null,this.leanScoreLastSet=null,this.trunkScoreLastSet=null,this.alignmentScoreLastSet=null,this.kneeHipShoulderScoreLastSet=null,this.straightLegsScoreLastSet=null,this.shHipYSamples=[],this.shWrXSamples=[],this.alignmentAngleSamples=[],this.leanScoreSamples=[],this.trunkScoreSamples=[],this.alignmentScoreSamples=[],this.kneeHipShoulderScoreSamples=[],this.straightLegsScoreSamples=[],this.poseEverValid=!1,this.plancheSetVariants=[],this.plancheSetCustoms=[],this._plancheVariantUI=null,this.poseLandmarker=null,this.lastVideoTime=-1,this.numPosesToTrack=1,this.poses=[],this.lastLandmarkPositions=[],this.gameState="loading",this.clock=new Kf,this.audioManager=new Qf,this.smoothingFactor=.4,this.repState=this.exercise.initState,this.repStarted=!1,this.consecutiveFramesRequired=2,this.stateFrameCount=0,this.lastStateChange=Date.now(),this.minTimeBetweenStateChanges=100,this.sets=[],this.currentSetReps=0,this.lastRepTimeMs=Date.now(),this.setEndIdleMs=2500,this.minRepsToAutoEnd=1,this.prevAscentSignal=null,this.isAscending=!1,this.ascendEps=.0015,this.lastAscentTimeMs=Date.now(),this.poseLineMaterial=new yo({color:16777215,linewidth:3}),this.circleMaterial=new ji({color:255}),this.poseConnections=[[11,12],[11,23],[12,24],[23,24],[11,13],[13,15],[12,14],[14,16],[23,25],[25,27],[24,26],[26,28]],this.poseKeypointIndices=[0,11,12,13,14,15,16,23,24,25,26,27,28],this.lang=localStorage.getItem("lang")||"fr",this._init().catch(t=>{console.error("Initialization failed:",t),this._showError("Initialization failed. Check console.")})}getExerciseLabel(e){var t,n;return((n=(t=this.EXERCISE_LABELS)==null?void 0:t[this.lang])==null?void 0:n[e])||e}setContext(e){var n,s;this.ctx=e||null;const t=(((n=this.ctx)==null?void 0:n.exercise)||"Tractions").trim();this.EXERCISES[t]&&this._setExercise(t),console.log("[game] ctx set:",this.ctx,"| exercise =",(s=this.exercise)==null?void 0:s.name)}setLanguage(e){var a,l,c;this.lang=this.I18N[e]?e:"fr",localStorage.setItem("lang",this.lang);const t=this.I18N[this.lang];if((a=this.exerciseSelect)!=null&&a.previousSibling&&(this.exerciseSelect.previousSibling.textContent=`${t.exercise} :`),this.liveMenuContainer){const h=(l=this.liveMenuContainer)==null?void 0:l.querySelector('[data-role="exercise-label"]');h&&(h.textContent=`${t.exercise}:`);const u=(c=this.liveMenuContainer)==null?void 0:c.querySelector('[data-role="hide-label-live"]');u&&(u.textContent=t.hideLabel)}this.backButton&&(this.backButton.textContent=t.quit),this.weightKgInput&&(this.weightKgInput.placeholder=this.I18N[this.lang].weight),this.assistKgInput&&(this.assistKgInput.placeholder=this.I18N[this.lang].assist),this.saveSessionBtn&&(this.saveSessionBtn.textContent=t.saveSession),this.restartSetBtn&&(this.restartSetBtn.textContent=t.restartSet),this._updateCounterDisplay();const n=document.querySelector('[data-role="language-label"]');n&&(n.textContent=`${this.I18N[this.lang].language} :`);const s=document.querySelector('[data-role="hide-label"]');s&&(s.textContent=t.hideLabel);const r=document.getElementById("titleText");r&&(r.innerHTML=t.title);const o=document.getElementById("instructionsText");o&&(o.innerHTML=t.instructions),this.loadingText&&(this.loadingText.textContent=t.loading),this.startButton&&(this.startButton.textContent=t.start),this._refreshExerciseSelectLabels()}_setExercise(e){var s;const t=this.EXERCISES[e]||this.EXERCISES.Tractions;this.exercise=t,this.ctx||(this.ctx={}),this.ctx.exercise=t.name,this.ctx.mode=t.mode,this.repState=t.initState,this.repStarted=!1,this.stateFrameCount=0,this.lastStateChange=Date.now(),this.holdStartMs=null,this.lastTimerUiUpdateMs=0,this.lastTrackedLandmarks=null,this.poseBrokenSinceMs=null,this.exerciseSelect&&(this.exerciseSelect.value=t.name);const n=(s=this.liveMenuContainer)==null?void 0:s.querySelector("select");n&&(n.value=t.name),console.log("[game] exercise configured:",t.name)}async _init(){this._setupDOMReferences(),this._setupThree(),await this._setupPoseTracking(),await this.videoElement.play(),window.addEventListener("resize",()=>this._onResize()),this.gameState="ready",this._showStartButton(),this._animate()}_setupDOMReferences(){this.videoElement=document.getElementById("videoElement"),this.startScreenOverlay=document.getElementById("startScreenOverlay"),this.startButton=document.getElementById("startButton"),this.counterContainer=document.getElementById("counterContainer"),this.counterDisplay=document.getElementById("counterDisplay"),this.gameOverContainer=document.getElementById("gameOverContainer"),this.gameOverText=document.getElementById("gameOverText"),this.loadingText=document.getElementById("loadingText"),this.weightKgInput=document.getElementById("weightKgInput"),this.assistKgInput=document.getElementById("assistKgInput"),this.saveSessionBtn=document.getElementById("saveSessionBtn"),this.restartSetBtn=document.getElementById("restartSetBtn"),this.flipCameraBtn=document.getElementById("flipCameraBtn"),this._injectExerciseMenuOverlay(),this._injectExerciseMenuLive(),this._injectBackButtonLive(),this.startButton.onclick=()=>this._startGame();const e=localStorage.getItem("lang")||"fr";this.setLanguage(e),localStorage.getItem("lang"),this.saveSessionBtn&&this.saveSessionBtn.addEventListener("click",async t=>{t.preventDefault(),t.stopPropagation();try{const n=this._buildSessionPayload();await this._saveSessionToSupabase(n),this.saveSessionBtn.style.display="none",this._showStatusScreen(this.I18N[this.lang].sessionSaved,"white",!0)}catch(n){console.error("[save] crash ❌",n),this._showStatusScreen(this.I18N[this.lang].saveError,"orange",!0)}}),this.restartSetBtn&&this.restartSetBtn.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),this.gameState==="paused"&&this._startNewSet()}),this.flipCameraBtn&&this.flipCameraBtn.addEventListener("click",async()=>{this.audioManager.resumeContext(),await this._flipCamera()})}_injectExerciseMenuOverlay(){var h,u;if(!this.startScreenOverlay)return;const e=document.createElement("div");e.style.cssText=`
    position: relative;
    margin: 0 auto 12px auto;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    flex-wrap: wrap;
  `;const t=document.createElement("div");t.textContent="Exercice :",t.style.cssText="color: white; font-weight: 600; font-size: 14px;";const n=document.createElement("select");n.style.cssText=`
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.25);
    background: rgba(0,0,0,0.35);
    color: white;
    font-size: 14px;
    outline: none;
    cursor: pointer;
  `,Object.keys(this.EXERCISES).forEach(d=>{const m=document.createElement("option");m.value=d,m.textContent=this.getExerciseLabel(d),n.appendChild(m)}),n.value=((h=this.exercise)==null?void 0:h.name)||"Tractions",n.addEventListener("change",()=>{var m;this._setExercise(n.value);const d=(m=this.liveMenuContainer)==null?void 0:m.querySelector("select");d&&(d.value=n.value)});const s=document.createElement("div");s.className="lang-switch",s.style.cssText=`
  display: flex;
  align-items: center;
  gap: 8px;
`;const r=document.createElement("div");r.dataset.role="language-label",r.style.cssText=`
  color: white;
  font-weight: 600;
  font-size: 14px;
`;const o=document.createElement("div");o.style.cssText=`
  display: flex;
  gap: 10px;
`,o.innerHTML=`
  <button class="lang-flag" data-lang="fr" title="Français">
    <img src="https://flagcdn.com/24x18/fr.png" alt="Français">
  </button>
  <button class="lang-flag" data-lang="en" title="English">
    <img src="https://flagcdn.com/24x18/gb.png" alt="English">
  </button>
`,o.querySelectorAll(".lang-flag").forEach(d=>{d.addEventListener("click",()=>{const m=d.dataset.lang;localStorage.setItem("lang",m),this.setLanguage(m),this._refreshExerciseSelectLabels()})}),s.appendChild(r),s.appendChild(o),e.appendChild(s);const a=document.createElement("div");a.style.cssText=`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;const l=document.createElement("input");l.type="checkbox",l.id="hideCheckboxOverlay",l.checked=this.hideLandmarksAndUI,l.style.cssText=`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;const c=document.createElement("label");c.htmlFor="hideCheckboxOverlay",c.dataset.role="hide-label",c.textContent=this.I18N[this.lang].hideLabel||"Masquer lignes/interface",c.style.cssText=`
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
`,l.addEventListener("change",()=>{this.hideLandmarksAndUI=l.checked,this.hideCheckboxLive&&(this.hideCheckboxLive.checked=l.checked),this._updateLandmarksAndUIVisibility()}),a.appendChild(l),a.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(a),this.hideCheckboxOverlay=l,(u=this.startButton)!=null&&u.parentElement?this.startButton.parentElement.insertBefore(e,this.startButton):this.startScreenOverlay.appendChild(e),this.exerciseSelect=n}_injectExerciseMenuLive(){var c;if(!this.renderDiv)return;const e=document.createElement("div");e.style.cssText=`
      position: absolute;
      top: 69px;
      right: 12px;
      z-index: 999999;
      display: none; /* affiché à Start */
      padding: 8px 10px;
      border-radius: 12px;
      background: rgba(0,0,0,0.35);
      border: 1px solid rgba(255,255,255,0.18);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    `;const t=document.createElement("div");t.style.cssText=`
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
    `;const n=document.createElement("div");n.dataset.role="exercise-label",n.textContent="Exercice:",n.style.cssText="color: white; font-weight: 600; font-size: 13px;";const s=document.createElement("select");s.style.cssText=`
      padding: 6px 8px;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.25);
      background: rgba(0,0,0,0.35);
      color: white;
      font-size: 13px;
      outline: none;
      cursor: pointer;
    `,Object.keys(this.EXERCISES).forEach(h=>{const u=document.createElement("option");u.value=h,u.textContent=this.getExerciseLabel(h),s.appendChild(u)}),s.value=((c=this.exercise)==null?void 0:c.name)||"Tractions",s.addEventListener("change",()=>this._handleExerciseSwitch(s.value)),t.appendChild(n),t.appendChild(s),e.appendChild(t);const r=document.createElement("div");r.style.cssText=`
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      margin-top: 6px;
      cursor: pointer;
    `;const o=document.createElement("input");o.type="checkbox",o.id="hideCheckboxLive",o.checked=this.hideLandmarksAndUI,o.style.cssText=`
      cursor: pointer;
      width: 14px;
      height: 14px;
    `;const a=document.createElement("label");a.htmlFor="hideCheckboxLive",a.dataset.role="hide-label-live",a.textContent=this.I18N[this.lang].hideLabel||"Masquer lignes/interface",a.style.cssText=`
      color: white;
      font-weight: 600;
      font-size: 12px;
      cursor: pointer;
      user-select: none;
    `,o.addEventListener("change",()=>{this.hideLandmarksAndUI=o.checked,this.hideCheckboxOverlay&&(this.hideCheckboxOverlay.checked=o.checked),this._updateLandmarksAndUIVisibility()}),r.appendChild(o),r.appendChild(a),e.appendChild(r),this.hideCheckboxLive=o,getComputedStyle(this.renderDiv).position==="static"&&(this.renderDiv.style.position="relative"),this.renderDiv.appendChild(e),this.liveMenuContainer=e}_injectBackButtonLive(){if(!this.renderDiv)return;const e=document.createElement("button");e.type="button",e.textContent="↩ Quitter",e.style.cssText=`
      position: absolute;
      top: 69px;
      left: 12px;
      z-index: 999999;
      display: none; /* affiché à Start */
      padding: 8px 10px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.18);
      background: rgba(0,0,0,0.35);
      color: white;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    `,e.addEventListener("click",n=>{var r,o;n.preventDefault(),n.stopPropagation();const s=((r=this.exercise)==null?void 0:r.tracking)==="timer"||((o=this.exercise)==null?void 0:o.mode)==="hold";this.gameState==="tracking"&&this.autoFinalizeOnSwitch&&(this.currentSetReps>=1?this._finalizeSet():s&&this.holdStartMs!=null&&this._finalizeSet());try{window.history.back()}catch{window.location.href="/"}}),getComputedStyle(this.renderDiv).position==="static"&&(this.renderDiv.style.position="relative"),this.renderDiv.appendChild(e),this.backButton=e}_refreshExerciseSelectLabels(){var n;const e=s=>{s&&[...s.options].forEach(r=>{r.textContent=this.getExerciseLabel(r.value)})};e(this.exerciseSelect);const t=(n=this.liveMenuContainer)==null?void 0:n.querySelector("select");e(t)}_updateLandmarksAndUIVisibility(){const e=this.hideLandmarksAndUI;if(this.gameState==="tracking"||this.gameState==="paused"){const t=e?"none":"block";this.backButton&&(this.backButton.style.display=t),this.weightKgInput&&(this.weightKgInput.style.display=e?"none":""),this.assistKgInput&&(this.assistKgInput.style.display=e?"none":"")}}async _handleExerciseSwitch(e){var t;if(!this.isSwitchingExercise&&this.EXERCISES[e]&&e!==((t=this.exercise)==null?void 0:t.name)){this.isSwitchingExercise=!0;try{this.sets=[],this.currentSetReps=0,this.currentSetDisplay=null,this.repState=this.EXERCISES[e].initState,this.repStarted=!1,this.stateFrameCount=0,this.holdStartMs=null,this.lastTimerUiUpdateMs=0,this.poseBrokenSinceMs=null,this.poseEverValid=!1,this.lastRepTimeMs=Date.now(),this.prevAscentSignal=null,this.isAscending=!1,this.lastAscentTimeMs=Date.now(),this.exerciseSelect&&(this.exerciseSelect.value=e),this._setExercise(e),this._startNewSet()}finally{this.isSwitchingExercise=!1}}}_setupThree(){const{clientWidth:e,clientHeight:t}=this.renderDiv;this.scene=new Gf,this.camera=new ir(e/-2,e/2,t/2,t/-2,1,1e3),this.camera.position.z=100,this.renderer=new Mo({alpha:!0,antialias:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),Object.assign(this.renderer.domElement.style,{position:"absolute",top:"0",left:"0",zIndex:"1"}),this.renderDiv.appendChild(this.renderer.domElement),this.scene.add(new $f(16777215,.7));const n=new Yf(16777215,.9);n.position.set(0,0,100),this.scene.add(n);for(let s=0;s<this.numPosesToTrack;s++){const r=new ui;r.visible=!1,this.scene.add(r),this.poses.push({landmarks:null,anchorPos:new U,lineGroup:r}),this.lastLandmarkPositions.push([])}}_sampleQuality(e){var s,r,o,a,l,c;if(!this.exercise||this.gameState!=="tracking"||this.repState!==this.exercise.activeState)return;let t=null;const n=this.exercise.name||"";if(n.toLowerCase().includes("planche")){const h=ip(e,this.exercise);t=h==null?void 0:h.avgScore,(h==null?void 0:h.leanScore)!=null&&this.leanScoreSamples.push(h.leanScore),(h==null?void 0:h.trunkScore)!=null&&this.trunkScoreSamples.push(h.trunkScore),(h==null?void 0:h.alignmentScore)!=null&&this.alignmentScoreSamples.push(h.alignmentScore),(h==null?void 0:h.kneeHipShoulderScore)!=null&&this.kneeHipShoulderScoreSamples.push(h.kneeHipShoulderScore),(h==null?void 0:h.straightLegsScore)!=null&&this.straightLegsScoreSamples.push(h.straightLegsScore);const u=(r=(s=this.exercise)._poseMetrics)==null?void 0:r.call(s,e);if(u){const d=u.shHipYL==null?u.shHipYR:u.shHipYR==null?u.shHipYL:(u.shHipYL+u.shHipYR)/2;d!=null&&this.shHipYSamples.push(d);const m=u.shWrXL==null?u.shWrXR:u.shWrXR==null?u.shWrXL:(u.shWrXL+u.shWrXR)/2;m!=null&&this.shWrXSamples.push(m);const g=this.exercise.name||"";if(g==="Straddle planche"||g==="Full planche"||g==="Planche lean"){const S=u.aL==null?u.aR:u.aR==null?u.aL:(u.aL+u.aR)/2;S!=null&&this.alignmentAngleSamples.push(S)}}}else if(this.exercise.mode==="hold"&&typeof this.exercise._effectiveAngle=="function"){const h=this.exercise._effectiveAngle(e);t=np(h,175),t!=null&&this.alignmentScoreSamples.push(t),h!=null&&this.alignmentAngleSamples.push(h)}else if(n==="Handstand Push Up"){const h=(a=(o=this.exercise)._elbowAngles)==null?void 0:a.call(o,e);t=Va(h)}else if(n==="90 Degree HSPU"){const h=(c=(l=this.exercise)._poseMetrics)==null?void 0:c.call(l,e),u=h?h.elbowL??h.elbowR:null;t=Va(u)}t!=null&&this.qualitySamples.push(t)}async _setupPoseTracking(){const e=await Po.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");this.poseLandmarker=await Do.createFromOptions(e,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",delegate:"GPU"},numPoses:this.numPosesToTrack,runningMode:"VIDEO",outputSegmentationMasks:!1});const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:this.currentFacingMode,width:{ideal:1280},height:{ideal:720}},audio:!1});return this.videoElement.srcObject=t,this.currentFacingMode==="user"?this.videoElement.classList.add("user-camera"):this.videoElement.classList.remove("user-camera"),new Promise(n=>{this.videoElement.onloadedmetadata=()=>n()})}_getVisibleVideoParameters(){if(!this.videoElement||this.videoElement.videoWidth===0||this.videoElement.videoHeight===0)return null;const e=this.videoElement.videoWidth,t=this.videoElement.videoHeight,n=this.renderDiv.clientWidth,s=this.renderDiv.clientHeight;if(!e||!t||!n||!s)return null;const r=e/t,o=n/s;let a,l,c,h;if(r>o){const u=s/t,m=(e*u-n)/u;a=m/2,l=0,c=e-m,h=t}else{const u=n/e,m=(t*u-s)/u;a=0,l=m/2,c=e,h=t-m}return{offsetX:a,offsetY:l,visibleWidth:c,visibleHeight:h,videoNaturalWidth:e,videoNaturalHeight:t}}async _flipCamera(){try{const e=this.gameState==="tracking"&&this.mediaRecorder&&this.mediaRecorder.state==="recording";e&&this._stopVideoRecording(),this.currentFacingMode=this.currentFacingMode==="user"?"environment":"user",this.videoElement&&this.videoElement.srcObject&&this.videoElement.srcObject.getTracks().forEach(s=>s.stop());const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:this.currentFacingMode,width:{ideal:1280},height:{ideal:720}},audio:!1});this.videoElement.srcObject=t,this.currentFacingMode==="user"?this.videoElement.classList.add("user-camera"):this.videoElement.classList.remove("user-camera"),await new Promise(n=>{this.videoElement.onloadedmetadata=()=>n()}),e&&this._startVideoRecording()}catch(e){console.error("[flipCamera] Error flipping camera:",e),this.currentFacingMode=this.currentFacingMode==="user"?"environment":"user"}}_startGame(){var e;this.gameState==="ready"&&((e=this.exerciseSelect)!=null&&e.value&&this._setExercise(this.exerciseSelect.value),this.sessionStartedAt=new Date().toISOString(),this.audioManager.resumeContext(),this.startScreenOverlay&&(this.startScreenOverlay.style.display="none"),this.startButton&&(this.startButton.style.display="none"),this.counterContainer&&(this.counterContainer.style.display="block"),this.liveMenuContainer&&(this.liveMenuContainer.style.display="block"),this.backButton&&(this.backButton.style.display="block"),this.sets=[],this.plancheSetVariants=[],this.plancheSetCustoms=[],this._startNewSet(),this._refreshExerciseSelectLabels(),this._updateLandmarksAndUIVisibility())}_startNewSet(){var e;this.gameOverContainer&&(this.gameOverContainer.style.display="none"),this.restartSetBtn&&(this.restartSetBtn.style.display="none"),this.saveSessionBtn&&(this.saveSessionBtn.style.display="none"),this.gameState="tracking",this.lastVideoTime=-1,this.clock.start(),this.currentSetReps=0,this.repState=this.exercise.initState,this.repStarted=!1,this.stateFrameCount=0,this.lastStateChange=Date.now(),this.holdStartMs=null,this.lastTimerUiUpdateMs=0,this.lastTrackedLandmarks=null,this.poseEverValid=!1,this.poseBrokenSinceMs=null,this.lastRepTimeMs=Date.now(),this.prevAscentSignal=null,this.isAscending=!1,this.lastAscentTimeMs=Date.now(),this.currentSetDisplay=null,((e=this.exercise)==null?void 0:e.name)==="90 Degree HSPU"&&(this.exercise.hasReachedInvertedLock=!1),this.qualitySamples=[],this.qualityScoreLastSet=null,this.leanScoreLastSet=null,this.trunkScoreLastSet=null,this.alignmentScoreLastSet=null,this.kneeHipShoulderScoreLastSet=null,this.straightLegsScoreLastSet=null,this.shHipYSamples=[],this.shWrXSamples=[],this.alignmentAngleSamples=[],this.leanScoreSamples=[],this.trunkScoreSamples=[],this.alignmentScoreSamples=[],this.kneeHipShoulderScoreSamples=[],this.straightLegsScoreSamples=[],this._updateCounterDisplay(),this._startVideoRecording()}_finalizeSet(){var l,c;this.currentSetReps>=this.minRepsToAutoEnd&&this.sets.push(this.currentSetReps),this.audioManager.playCelebrationSound(),this.gameState="paused";const e=((l=this.exercise)==null?void 0:l.tracking)==="timer"||((c=this.exercise)==null?void 0:c.mode)==="hold",t=this.I18N[this.lang],n=e?t.unitSeconds:t.unitReps,s=this.qualitySamples.length>3?this.qualitySamples.slice(0,-3):this.qualitySamples,r=Ht(s);if(this.qualityScoreLastSet=r!=null?Math.round(r*10)/10:null,this.leanScoreLastSet=null,this.trunkScoreLastSet=null,this.alignmentScoreLastSet=null,this.kneeHipShoulderScoreLastSet=null,this.straightLegsScoreLastSet=null,this.alignmentAngleLastSet=null,this.qualityScoreLastSet!=null){const h=this.leanScoreSamples.length>0?Ht(this.leanScoreSamples):null,u=this.trunkScoreSamples.length>0?Ht(this.trunkScoreSamples):null,d=this.alignmentScoreSamples.length>0?Ht(this.alignmentScoreSamples):null,m=this.kneeHipShoulderScoreSamples.length>0?Ht(this.kneeHipShoulderScoreSamples):null,g=this.straightLegsScoreSamples.length>0?Ht(this.straightLegsScoreSamples):null,S=this.alignmentAngleSamples.length>0?Ht(this.alignmentAngleSamples):null;this.leanScoreLastSet=h!=null?Math.round(h*10)/10:null,this.trunkScoreLastSet=u!=null?Math.round(u*10)/10:null,this.alignmentScoreLastSet=d!=null?Math.round(d*10)/10:null,this.kneeHipShoulderScoreLastSet=m!=null?Math.round(m*10)/10:null,this.straightLegsScoreLastSet=g!=null?Math.round(g*10)/10:null,this.alignmentAngleLastSet=S!=null?Math.round(S*10)/10:null,console.log(`
🎯 SCORES FINAUX POUR LE SCORE AFFICHÉ (${this.qualityScoreLastSet}/10):`),this.leanScoreLastSet!=null&&console.log(`   - Lean Score: ${this.leanScoreLastSet}/10`),this.trunkScoreLastSet!=null&&console.log(`   - Trunk Score: ${this.trunkScoreLastSet}/10`),this.alignmentScoreLastSet!=null&&console.log(`   - Alignment Score: ${this.alignmentScoreLastSet}/10`),this.kneeHipShoulderScoreLastSet!=null&&console.log(`   - Knee-Hip-Shoulder Score (Adv. Tuck): ${this.kneeHipShoulderScoreLastSet}/10`),this.straightLegsScoreLastSet!=null&&console.log(`   - Straight Legs Score: ${this.straightLegsScoreLastSet}/10`),console.log("")}if(this.shHipYSamples.length>0){const h=Ht(this.shHipYSamples);console.log(`📊 Moyenne shHipY: ${h==null?void 0:h.toFixed(4)} (${this.shHipYSamples.length} échantillons)`),console.log("📊 Échantillons shHipY:",this.shHipYSamples.map(u=>u.toFixed(4)))}if(this.alignmentAngleSamples.length>0){const h=Ht(this.alignmentAngleSamples);console.log(`📐 Moyenne angle d'alignement: ${h==null?void 0:h.toFixed(2)}° (${this.alignmentAngleSamples.length} échantillons)`),console.log("📐 Échantillons angles:",this.alignmentAngleSamples.map(u=>u.toFixed(2)))}if(this.shWrXSamples.length>0){const h=Ht(this.shWrXSamples);console.log(`📊 Moyenne shWrX: ${h==null?void 0:h.toFixed(4)} (${this.shWrXSamples.length} échantillons)`),console.log("📊 Échantillons shWrX:",this.shWrXSamples.map(u=>u.toFixed(4)))}const o=`${t.setCompleted}: ${this.currentSetReps} ${n}`,a=`${t.totalSets}: ${this.sets.length} (${this.sets.join(" / ")})`;if(this._showStatusScreen(o,null,a,"white",!0),this.qualityScoreLastSet!=null){const h={leanScore:this.leanScoreLastSet,trunkScore:this.trunkScoreLastSet,alignmentScore:this.alignmentScoreLastSet,kneeHipShoulderScore:this.kneeHipShoulderScoreLastSet,straightLegsScore:this.straightLegsScoreLastSet,alignmentAngle:this.alignmentAngleLastSet};this._displayQualityScore(this.exercise,h)}this.restartSetBtn&&(this.restartSetBtn.style.display="inline-block"),this.saveSessionBtn&&(this.saveSessionBtn.style.display="block"),this._stopVideoRecording()}_checkEndOfSet(){var s,r,o;if(((s=this.exercise)==null?void 0:s.name)==="Handstand Push Up"&&this.exercise.finalizeLikeHandstand){if(this.currentSetReps<this.minRepsToAutoEnd)return;const a=this.lastTrackedLandmarks;if(!(a!=null&&a.length))return;const l=this.exercise._isInverted(a),c=Date.now();if(l){this.poseBrokenSinceMs=null;return}if(this.poseBrokenSinceMs==null){this.poseBrokenSinceMs=c;return}c-this.poseBrokenSinceMs>=this.exercise.breakPoseGraceMs&&this._finalizeSet();return}if(((r=this.exercise)==null?void 0:r.tracking)==="timer"||((o=this.exercise)==null?void 0:o.mode)==="hold")return;const e=Date.now(),t=e-this.lastRepTimeMs;if(this.isAscending)return;const n=e-this.lastAscentTimeMs;this.repState===this.exercise.idleEndState&&this.currentSetReps>=this.minRepsToAutoEnd&&t>=this.setEndIdleMs&&n>=this.setEndIdleMs&&this._finalizeSet()}_trackMovement(e){var r,o,a,l,c,h,u;if(((r=this.exercise)==null?void 0:r.endPolicy)==="break_pose"&&this.repState===this.exercise.initState&&(a=(o=this.exercise).isPoseValid)!=null&&a.call(o,e)&&(this.poseEverValid=!0),!(e!=null&&e.length)||!this.exercise)return;if(this._sampleQuality(e),((l=this.exercise)==null?void 0:l.tracking)==="timer"||((c=this.exercise)==null?void 0:c.mode)==="hold"){this._trackTimer(e);return}const t=(u=(h=this.exercise).getAscentSignal)==null?void 0:u.call(h,e);if(t!=null){if(this.prevAscentSignal!==null){const d=t-this.prevAscentSignal;this.isAscending=d<-this.ascendEps,this.isAscending&&(this.lastAscentTimeMs=Date.now())}this.prevAscentSignal=t}const n=Date.now();if(n-this.lastStateChange<this.minTimeBetweenStateChanges)return;let s=this.repState;this.repState===this.exercise.initState?!this.repStarted&&this.exercise.canStart(e,this)?(this.stateFrameCount++,this.stateFrameCount>=this.consecutiveFramesRequired&&(s=this.exercise.activeState,this.repStarted=!0,this.audioManager.playStartBeep(),this.stateFrameCount=0,this.lastAscentTimeMs=Date.now())):this.stateFrameCount=0:this.repState===this.exercise.activeState&&(this.repStarted&&this.exercise.canComplete(e,this)?(this.stateFrameCount++,this.stateFrameCount>=this.consecutiveFramesRequired&&(s=this.exercise.initState,this.currentSetReps++,this.lastRepTimeMs=Date.now(),this.lastAscentTimeMs=Date.now(),this.audioManager.playRepValidated(),this._updateCounterDisplay(),this.stateFrameCount=0,this.repStarted=!1)):this.stateFrameCount=0),s!==this.repState&&(this.repState=s,this.lastStateChange=n)}_trackTimer(e){const t=Date.now();if(t-this.lastStateChange<this.minTimeBetweenStateChanges)return;let n=this.repState;if(this._sampleQuality(e),this.repState===this.exercise.initState)!this.repStarted&&this.exercise.canStart(e,this)?(this.stateFrameCount++,this.stateFrameCount>=this.consecutiveFramesRequired&&(n=this.exercise.activeState,this.repStarted=!0,this.audioManager.playStartBeep(),this.stateFrameCount=0,this.lastStateChange=t,this.holdStartMs=t,this.currentSetReps=0,this._updateCounterDisplay())):this.stateFrameCount=0;else if(this.repState===this.exercise.activeState){if(this.holdStartMs!=null){const s=Math.max(0,(t-this.holdStartMs)/1e3),r=Math.floor(s);r!==this.currentSetReps&&(this.currentSetReps=r),this.currentSetDisplay=Math.round(s*10)/10,t-this.lastTimerUiUpdateMs>=this.timerUiEveryMs&&(this.lastTimerUiUpdateMs=t,this._updateCounterDisplay())}if(this.repStarted&&this.exercise.canComplete(e,this)){if(this.stateFrameCount++,this.stateFrameCount>=this.consecutiveFramesRequired){if(n=this.exercise.initState,this.stateFrameCount=0,this.repStarted=!1,this.holdStartMs!=null){const s=Math.max(0,(t-this.holdStartMs)/1e3);this.currentSetReps=Math.max(this.currentSetReps,Math.floor(s))}this.holdStartMs=null,this._updateCounterDisplay(),this._finalizeSet();return}}else this.stateFrameCount=0}n!==this.repState&&(this.repState=n,this.lastStateChange=t)}_updateCounterDisplay(){var s,r,o,a,l;const e=this.sets.length?` | Sets: ${this.sets.join(" / ")}`:"",t=((r=this.getExerciseLabel)==null?void 0:r.call(this,(s=this.exercise)==null?void 0:s.name))||((o=this.exercise)==null?void 0:o.name)||"Exercise";if(((a=this.exercise)==null?void 0:a.tracking)==="timer"||((l=this.exercise)==null?void 0:l.mode)==="hold"){const c=this.currentSetDisplay!=null?this.currentSetDisplay.toFixed(1):this.currentSetReps.toString();this.counterDisplay.textContent=`${t} — Time: ${c}s${e}`;return}this.counterDisplay.textContent=`${t} — Reps: ${this.currentSetReps}${e}`}_updatePose(){var o;if(!this.poseLandmarker||!this.videoElement.srcObject||this.videoElement.readyState<2||this.videoElement.videoWidth===0)return;const e=this.videoElement.currentTime;if(e<=this.lastVideoTime)return;this.lastVideoTime=e;const t=this.poseLandmarker.detectForVideo(this.videoElement,performance.now());if(!((o=t==null?void 0:t.landmarks)!=null&&o.length)){this.poses.forEach(a=>a.lineGroup&&(a.lineGroup.visible=!1));return}const n=this._getVisibleVideoParameters();if(!n)return;const{clientWidth:s,clientHeight:r}=this.renderDiv;this.poses.forEach((a,l)=>{var c;if(((c=t.landmarks[l])==null?void 0:c.length)>0){const h=t.landmarks[l];(!this.lastLandmarkPositions[l]||this.lastLandmarkPositions[l].length!==h.length)&&(this.lastLandmarkPositions[l]=h.map(d=>({...d})));const u=h.map((d,m)=>{const g=this.lastLandmarkPositions[l][m];return{x:this.smoothingFactor*d.x+(1-this.smoothingFactor)*g.x,y:this.smoothingFactor*d.y+(1-this.smoothingFactor)*g.y,z:this.smoothingFactor*d.z+(1-this.smoothingFactor)*g.z,visibility:d.visibility}});this.lastLandmarkPositions[l]=u.map(d=>({...d})),a.landmarks=u,this.lastTrackedLandmarks=u,this.gameState==="tracking"&&this._trackMovement(u),this._updatePoseVisuals(l,u,n,s,r)}else a.landmarks=null,a.lineGroup&&(a.lineGroup.visible=!1)})}_updatePoseVisuals(e,t,n,s,r){var u,d;const a=this.poses[e].lineGroup;for(;a.children.length;){const m=a.children[0];a.remove(m),m.geometry&&m.geometry.dispose(),m.material&&m.material!==this.poseLineMaterial&&m.material!==this.circleMaterial&&((d=(u=m.material).dispose)==null||d.call(u))}const l=t.map(m=>{const g=m.x*n.videoNaturalWidth,S=m.y*n.videoNaturalHeight;let p=za((g-n.offsetX)/n.visibleWidth);const f=za((S-n.offsetY)/n.visibleHeight);ki&&this.currentFacingMode==="environment"&&(p=1-p);const b=(1-p)*s-s/2,x=(1-f)*r-r/2,A=(m.visibility??0)>.3;return new U(b,x,A?1.1:-1e4)}),c=1,h=ki?6:8;this.poseConnections.forEach(([m,g])=>{const S=l[m],p=l[g];if((S==null?void 0:S.z)>-1e3&&(p==null?void 0:p.z)>-1e3){const f=new Wt().setFromPoints([S.clone().setZ(c),p.clone().setZ(c)]);a.add(new Wf(f,this.poseLineMaterial))}}),this.poseKeypointIndices.forEach(m=>{const g=l[m];if(!g||g.z<=-1e3)return;let S=255;m===0?S=16711680:m===13||m===14?S=16776960:(m===15||m===16)&&(S=65280);const p=S===255?this.circleMaterial:new ji({color:S}),f=new kt(new rr(h,16),p);f.position.copy(g),f.position.z=c+.1,a.add(f)}),a.visible=!this.hideLandmarksAndUI}_showStartButton(){this.loadingText&&(this.loadingText.style.display="none"),this.startButton&&(this.startButton.style.display="block")}_showStatusScreen(e,t=null,n=null,s="white"){if(!(!this.gameOverContainer||!this.gameOverText))if(this.gameOverContainer.style.display="block",typeof n=="string"&&t)this.gameOverText.innerHTML=`<div style="color: ${s}">${e}</div><div style="color: skyblue; margin-top: 8px;">${t}</div><div style="color: ${s}; margin-top: 8px;">${n}</div>`;else if(typeof n=="string"&&!t)this.gameOverText.innerHTML=`<div style="color: ${s}">${e}</div><div style="color: ${s}; margin-top: 8px;">${n}</div>`;else{const r=e,o=t||"white";this.gameOverText.innerText=r,this.gameOverText.style.color=o}}_showError(e){this.gameState="error",this._showStatusScreen(`ERROR: ${e}`,"orange")}_onResize(){const{clientWidth:e,clientHeight:t}=this.renderDiv;this.camera.left=e/-2,this.camera.right=e/2,this.camera.top=t/2,this.camera.bottom=t/-2,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}_animate(){requestAnimationFrame(()=>this._animate()),this.gameState==="tracking"&&(this._updatePose(),this._checkEndOfSet()),this.renderer.render(this.scene,this.camera)}_buildSessionPayload(){var o,a,l,c,h,u,d,m,g,S,p,f,b,x,A;const e=[...this.sets],t=((o=this.exercise)==null?void 0:o.name)||((a=this.ctx)==null?void 0:a.exercise)||"Tractions",n=((l=this.exercise)==null?void 0:l.mode)||((c=this.ctx)==null?void 0:c.mode)||"reps",s={Tractions:"Pull Ups",Pompes:"Push Ups",Dips:"Dips","Muscle Up":"Muscle Up","Handstand Push Up":"Handstand Push Up",Planche:"Planche",Handstand:"Handstand"};let r=t;return r=s[r]||r,{date:((h=this.ctx)==null?void 0:h.sessionDate)||new Date().toISOString().slice(0,10),duration:"",exercises:[{name:r,mode:n,weight:String(Number(((u=this.weightKgInput)==null?void 0:u.value)||0)),assist:String(Number(((d=this.assistKgInput)==null?void 0:d.value)||0)),s1:((m=e[0])==null?void 0:m.toString())||"",s2:((g=e[1])==null?void 0:g.toString())||"",s3:((S=e[2])==null?void 0:S.toString())||"",s4:((p=e[3])==null?void 0:p.toString())||"",s5:((f=e[4])==null?void 0:f.toString())||"",s6:((b=e[5])==null?void 0:b.toString())||"",s7:((x=e[6])==null?void 0:x.toString())||"",s8:((A=e[7])==null?void 0:A.toString())||"",ressenti:"",quality:this.qualityScoreLastSet??null,leanScore:this.leanScoreLastSet??null,trunkScore:this.trunkScoreLastSet??null,alignmentScore:this.alignmentScoreLastSet??null,kneeHipShoulderScore:this.kneeHipShoulderScoreLastSet??null,straightLegsScore:this.straightLegsScoreLastSet??null}]}}async _ensureUsername(){var r;if(!((r=this.ctx)!=null&&r.userId))return;const e=o=>typeof o=="string"&&o.trim().length>0;if(e(this.ctx.username))return;const{data:t,error:n}=await Vs.from("user_profiles").select("username").eq("user_id",this.ctx.userId).single();let s=t==null?void 0:t.username;e(s)||(s=`User${Math.floor(1e3+Math.random()*9e3)}`,await Vs.from("user_profiles").update({username:s}).eq("user_id",this.ctx.userId)),this.ctx.username=s}async _saveSessionToSupabase(e){var r;if(!((r=this.ctx)!=null&&r.userId)){console.warn("[save] No ctx.userId, skip saving");return}if(this.premiumManager&&!this.premiumManager.canSaveSession()){console.warn("[save] Session limit reached (30 sessions)"),this.premiumManager.showSessionLimitPaywall();return}await this._ensureUsername();const t={user_id:this.ctx.userId,username:this.ctx.username,session_date:e.date||new Date().toISOString().slice(0,10),payload:e},{data:n,error:s}=await Vs.from("workout_sessions").insert([t]).select();if(s)throw console.error("[save] Supabase insert error ❌",s),s;console.log("[save] inserted ✅",n),this.premiumManager&&(await this.premiumManager._getSessionCount(),this.premiumManager.isApproachingLimit()&&this.premiumManager.showLimitWarning())}_startVideoRecording(){var t;this.recordedChunks=[],this.recordedVideoBlob=null,this.recordedMimeType=null,this.downloadVideoBtn&&(this.downloadVideoBtn.style.display="none");const e=(t=this.videoElement)==null?void 0:t.srcObject;if(!e){console.warn("[recording] No video stream available");return}try{let n;ki&&MediaRecorder.isTypeSupported("video/mp4")?n={mimeType:"video/mp4"}:MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?n={mimeType:"video/webm;codecs=vp9"}:MediaRecorder.isTypeSupported("video/webm;codecs=vp8")?n={mimeType:"video/webm;codecs=vp8"}:MediaRecorder.isTypeSupported("video/webm")?n={mimeType:"video/webm"}:n={},this.recordedMimeType=n.mimeType||"video/webm",this.mediaRecorder=new MediaRecorder(e,n),this.mediaRecorder.ondataavailable=s=>{s.data&&s.data.size>0&&this.recordedChunks.push(s.data)},this.mediaRecorder.onstop=()=>{this.recordedChunks.length>0&&(this.recordedVideoBlob=new Blob(this.recordedChunks,{type:this.recordedMimeType}),this._createDownloadVideoButton(),console.log("[recording] Video recorded successfully",this.recordedVideoBlob.size,"bytes",this.recordedMimeType))},this.mediaRecorder.start(),console.log("[recording] Started recording")}catch(n){console.error("[recording] Failed to start recording:",n)}}_stopVideoRecording(){this.mediaRecorder&&this.mediaRecorder.state!=="inactive"&&(this.mediaRecorder.stop(),console.log("[recording] Stopped recording"))}_createDownloadVideoButton(){if(!this.recordedVideoBlob)return;this.downloadVideoBtn||(this.downloadVideoBtn=document.createElement("button"),this.downloadVideoBtn.style.cssText=`
        position: fixed;
        bottom: 80px;
        right: 20px;
        z-index: 9999;
        padding: 10px 20px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
        transition: all 0.3s ease;
        text-transform: none;
        letter-spacing: 0.3px;
        display: none;
      `,this.downloadVideoBtn.addEventListener("click",()=>{this._downloadVideo()}),this.downloadVideoBtn.addEventListener("mouseenter",()=>{this.downloadVideoBtn.style.transform="translateY(-2px)",this.downloadVideoBtn.style.boxShadow="0 6px 20px rgba(245, 87, 108, 0.6)",this.downloadVideoBtn.style.background="linear-gradient(135deg, #f5576c 0%, #f093fb 100%)"}),this.downloadVideoBtn.addEventListener("mouseleave",()=>{this.downloadVideoBtn.style.transform="translateY(0px)",this.downloadVideoBtn.style.boxShadow="0 4px 15px rgba(245, 87, 108, 0.4)",this.downloadVideoBtn.style.background="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}),this.downloadVideoBtn.addEventListener("mousedown",()=>{this.downloadVideoBtn.style.transform="translateY(0px)",this.downloadVideoBtn.style.boxShadow="0 2px 10px rgba(245, 87, 108, 0.4)"}),document.body.appendChild(this.downloadVideoBtn));const e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style="vertical-align: middle; margin-right: 6px;">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>`,t=this.I18N[this.lang].downloadVideo||"Download video";this.downloadVideoBtn.innerHTML=e+t,this.downloadVideoBtn.style.display="block"}async _downloadVideo(){var a;if(!this.recordedVideoBlob)return;const e=((a=this.exercise)==null?void 0:a.name)||"workout",t=new Date().toISOString().slice(0,19).replace(/:/g,"-"),n=this.recordedMimeType==="video/mp4"?"mp4":"webm",s=`${e}_${t}.${n}`;if(ki&&navigator.share&&navigator.canShare)try{const l=new File([this.recordedVideoBlob],s,{type:this.recordedMimeType});if(navigator.canShare({files:[l]})){await navigator.share({files:[l],title:e,text:this.I18N[this.lang].downloadVideo||"Download video"}),console.log("[recording] Video shared successfully");return}}catch(l){console.log("[recording] Share failed or cancelled:",l)}const r=URL.createObjectURL(this.recordedVideoBlob),o=document.createElement("a");o.style.display="none",o.href=r,o.download=s,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(r)},100),console.log("[recording] Video downloaded")}_displayQualityScore(e,t){const n=this._calculateGlobalScore(t),s=document.createElement("div");s.id="qualityScoreContainer",s.style.cssText=`
      position: fixed;
      bottom: 120px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      background: rgba(0, 0, 0, 0.85);
      color: white;
      padding: 20px;
      border-radius: 15px;
      min-width: 200px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      text-align: center;
    `;const r=document.createElement("div");r.style.cssText=`
      font-size: 32px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 10px;
      color: ${this._getScoreColor(n)};
    `,r.textContent=`${n}/10`,s.appendChild(r);const o=document.createElement("div");o.style.cssText=`
      font-size: 13px;
      text-align: center;
      opacity: 0.8;
      margin-bottom: 15px;
    `,o.textContent="Score de qualité",s.appendChild(o);const a=document.createElement("button");a.style.cssText=`
      width: 100%;
      padding: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    `,a.textContent="🔍 Voir les détails",a.addEventListener("click",()=>{this.premiumManager&&this.premiumManager.canViewQualityDetails()?this._showQualityBreakdown(e,t):this.premiumManager&&this.premiumManager.showQualityDetailsPaywall()}),a.addEventListener("mouseenter",()=>{a.style.transform="translateY(-2px)",a.style.boxShadow="0 4px 12px rgba(102, 126, 234, 0.4)"}),a.addEventListener("mouseleave",()=>{a.style.transform="translateY(0)",a.style.boxShadow="none"}),s.appendChild(a);const l=document.getElementById("qualityScoreContainer");l&&l.remove(),document.body.appendChild(s)}_calculateGlobalScore(e){let t=0,n=0;return[e.leanScore,e.trunkScore,e.alignmentScore,e.kneeHipShoulderScore,e.straightLegsScore,e.elbowDepthScore,e.stabilityScore].forEach(r=>{r!=null&&!isNaN(r)&&(t+=r,n++)}),n===0?0:Math.round(t/n)}_showQualityBreakdown(e,t){const n=document.createElement("div");n.id="qualityBreakdownModal",n.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      z-index: 10001;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(5px);
    `;const s=document.createElement("div");s.style.cssText=`
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      padding: 30px;
      border-radius: 20px;
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      color: white;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;let r=`
      <h2 style="font-size: 24px; margin-bottom: 20px; text-align: center;">
        🔍 Analyse Technique
      </h2>
      <div style="text-align: center; margin-bottom: 20px;">
        <span style="font-size: 14px; opacity: 0.8;">${e.name}</span>
      </div>
    `;const o=e.name,a=o==="Handstand",l=o==="Handstand Push Up",c=o==="Advanced Tuck Planche Push Ups",h=o==="Front Lever Pull Up"||o==="Full planche",u=[];if(t.alignmentScore!=null){const d=t.alignmentAngle!=null?` (Moy: ${t.alignmentAngle.toFixed(1)}°)`:"";u.push({name:a?"Alignement vertical":"Alignement",score:t.alignmentScore,icon:"📏",description:a?`Alignement épaules-hanches-chevilles${d}`:`Alignement épaules-hanches-chevilles${d}`})}t.leanScore!=null&&!a&&u.push({name:"Lean (avancée)",score:t.leanScore,icon:"📐",description:"Position des épaules par rapport aux poignets"}),t.trunkScore!=null&&u.push({name:"Tronc",score:t.trunkScore,icon:"🎯",description:"Alignement du tronc"}),t.kneeHipShoulderScore!=null&&c&&u.push({name:"Genou-Hanche-Épaule",score:t.kneeHipShoulderScore,icon:"🔺",description:"Alignement spécifique Advanced Tuck"}),t.straightLegsScore!=null&&h&&u.push({name:"Jambes tendues",score:t.straightLegsScore,icon:"🦵",description:"Extension des jambes"}),t.elbowDepthScore!=null&&l&&u.push({name:"Profondeur coude",score:t.elbowDepthScore,icon:"⬇️",description:"Angle du coude à la descente"}),t.stabilityScore!=null&&u.push({name:"Stabilité",score:t.stabilityScore,icon:"⚖️",description:"Contrôle du corps pendant le mouvement"}),r+='<div style="margin-top: 20px;">',u.length===0?r+=`
        <div style="text-align: center; opacity: 0.7; padding: 20px;">
          Aucun critère détaillé disponible pour cet exercice.
        </div>
      `:u.forEach(d=>{const m=this._getScoreColor(d.score);r+=`
          <div style="
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 12px;
            border-left: 4px solid ${m};
          ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 16px; font-weight: 600;">
                ${d.icon} ${d.name}
              </span>
              <span style="font-size: 20px; font-weight: 700; color: ${m};">
                ${d.score}/10
              </span>
            </div>
            <div style="font-size: 13px; opacity: 0.8;">
              ${d.description}
            </div>
          </div>
        `}),r+="</div>",r+=`
      <button id="closeBreakdown" style="
        width: 100%;
        margin-top: 20px;
        padding: 12px;
        background: rgba(255,255,255,0.15);
        border: 1px solid rgba(255,255,255,0.3);
        color: white;
        border-radius: 10px;
        cursor: pointer;
        font-size: 14px;
      ">
        Fermer
      </button>
    `,s.innerHTML=r,n.appendChild(s),document.body.appendChild(n),s.querySelector("#closeBreakdown").addEventListener("click",()=>{n.remove()}),n.addEventListener("click",d=>{d.target===n&&n.remove()})}_getScoreColor(e){return e>=9?"#4ade80":e>=7?"#fbbf24":e>=5?"#fb923c":"#ef4444"}}class op{constructor(e){this.supabase=e,this.isPremium=!1,this.sessionCount=0,this.MAX_FREE_SESSIONS=30}async init(){try{return await this._checkPremiumStatus(),await this._getSessionCount(),console.log(`[Premium] Status: ${this.isPremium?"Premium ✨":"Free"}, Sessions: ${this.sessionCount}/${this.MAX_FREE_SESSIONS}`),!0}catch(e){return console.error("[Premium] Init failed:",e),!0}}async _checkPremiumStatus(){try{const{data:{user:e}}=await this.supabase.auth.getUser();if(!e){this.isPremium=!1;return}const{data:t,error:n}=await this.supabase.from("user_purchases").select("is_premium, purchase_date").eq("user_id",e.id).single();n&&n.code!=="PGRST116"&&console.error("[Premium] Error checking status:",n),this.isPremium=(t==null?void 0:t.is_premium)||!1}catch(e){console.error("[Premium] Failed to check premium:",e),this.isPremium=!1}}async _getSessionCount(){try{const{data:{user:e}}=await this.supabase.auth.getUser();if(!e){this.sessionCount=0;return}const{count:t,error:n}=await this.supabase.from("workout_sessions").select("*",{count:"exact",head:!0}).eq("user_id",e.id);if(n){console.error("[Premium] Error counting sessions:",n),this.sessionCount=0;return}this.sessionCount=t||0}catch(e){console.error("[Premium] Failed to count sessions:",e),this.sessionCount=0}}canSaveSession(){return this.isPremium?!0:this.sessionCount<this.MAX_FREE_SESSIONS}canViewQualityDetails(){return this.isPremium}isApproachingLimit(){return this.isPremium?!1:this.sessionCount>=this.MAX_FREE_SESSIONS-5}showLimitWarning(){const e=this.MAX_FREE_SESSIONS-this.sessionCount;if(e<=0||e>5)return;const t=document.createElement("div");t.id="limitWarning",t.style.cssText=`
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9998;
      padding: 12px 20px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      border-radius: 25px;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
      cursor: pointer;
      transition: all 0.3s ease;
      animation: slideDown 0.5s ease;
    `,t.innerHTML=`
      ⚠️ Plus que ${e} sessions gratuites restantes
      <span style="opacity: 0.8; font-size: 11px; margin-left: 8px;">
        Cliquer pour débloquer
      </span>
    `,t.addEventListener("click",()=>{this.showUpgradeModal("limit_warning")}),t.addEventListener("mouseenter",()=>{t.style.transform="translateX(-50%) translateY(-2px)",t.style.boxShadow="0 6px 20px rgba(245, 87, 108, 0.6)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateX(-50%) translateY(0)",t.style.boxShadow="0 4px 15px rgba(245, 87, 108, 0.4)"});const n=document.getElementById("limitWarning");n&&n.remove(),document.body.appendChild(t);const s=document.createElement("style");s.textContent=`
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }
    `,document.getElementById("premiumAnimations")||(s.id="premiumAnimations",document.head.appendChild(s))}showSessionLimitPaywall(){const e=document.createElement("div");e.id="sessionLimitPaywall",e.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      animation: fadeIn 0.3s ease;
    `;const t=document.createElement("div");t.style.cssText=`
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 35px;
      border-radius: 20px;
      max-width: 500px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      color: white;
      animation: scaleIn 0.4s ease;
    `,t.innerHTML=`
      <div style="font-size: 60px; margin-bottom: 20px;">🎯</div>
      <h2 style="font-size: 26px; margin-bottom: 15px; font-weight: 700;">
        30 sessions sauvegardées !
      </h2>
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 25px; opacity: 0.95;">
        Bravo pour votre assiduité ! Vous avez atteint la limite de 
        <strong>30 sessions</strong> en version gratuite.<br><br>
        Continuez à progresser avec l'<strong>historique illimité</strong>.
      </p>

      <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 25px;">
        <h3 style="font-size: 18px; margin-bottom: 12px; font-weight: 600;">✨ Version Premium</h3>
        <ul style="text-align: left; list-style: none; padding: 0; font-size: 14px; line-height: 1.8;">
          <li>📊 <strong>Historique illimité</strong> de vos sessions</li>
          <li>🔍 <strong>Analyse détaillée</strong> du score de qualité</li>
          <li>🎯 <strong>Critères techniques</strong> dévoilés</li>
          <li>☁️ <strong>Sauvegarde cloud</strong> permanente</li>
          <li style="opacity: 0.7;">📈 <strong>Statistiques avancées</strong></li>
          <li>✨ <strong>Futures fonctionnalités</strong> incluses</li>
        </ul>
      </div>

      <div style="font-size: 32px; font-weight: 800; margin-bottom: 8px; color: #ffd700;">
        14,99€
      </div>
      <p style="font-size: 13px; opacity: 0.8; margin-bottom: 25px;">
        Paiement unique • Accès à vie
      </p>

      <button id="upgradeNowBtn" style="
        width: 100%;
        padding: 16px 30px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(245, 87, 108, 0.4);
        margin-bottom: 15px;
      ">
        🚀 Passer Premium
      </button>

      <p style="font-size: 13px; opacity: 0.7; margin-top: 15px;">
        Vous pouvez continuer à vous entraîner normalement,<br>
        mais les nouvelles sessions ne seront pas sauvegardées.
      </p>

      <button id="closePaywallBtn" style="
        margin-top: 15px;
        background: transparent;
        border: 1px solid rgba(255,255,255,0.3);
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
      ">
        Continuer sans sauvegarder
      </button>
    `,e.appendChild(t),document.body.appendChild(e);const n=t.querySelector("#upgradeNowBtn");n.addEventListener("click",()=>{this._handleUpgrade("session_limit")}),n.addEventListener("mouseenter",()=>{n.style.transform="translateY(-2px)",n.style.boxShadow="0 12px 30px rgba(245, 87, 108, 0.6)"}),n.addEventListener("mouseleave",()=>{n.style.transform="translateY(0)",n.style.boxShadow="0 8px 20px rgba(245, 87, 108, 0.4)"}),t.querySelector("#closePaywallBtn").addEventListener("click",()=>{e.remove()});const r=document.createElement("style");r.textContent=`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,document.head.appendChild(r)}showQualityDetailsPaywall(){const e=document.createElement("div");e.id="qualityDetailsPaywall",e.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(8px);
      animation: fadeIn 0.3s ease;
    `;const t=document.createElement("div");t.style.cssText=`
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      padding: 35px 30px;
      border-radius: 20px;
      max-width: 480px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      color: white;
      animation: scaleIn 0.4s ease;
    `,t.innerHTML=`
      <div style="font-size: 50px; margin-bottom: 18px;">🔍</div>
      <h2 style="font-size: 24px; margin-bottom: 14px; font-weight: 700;">
        Analyse technique avancée
      </h2>
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 22px; opacity: 0.95;">
        Débloquez le <strong>détail complet</strong> de votre score de qualité :
      </p>

      <div style="background: rgba(255,255,255,0.1); padding: 18px; border-radius: 12px; margin-bottom: 22px;">
        <ul style="text-align: left; list-style: none; padding: 0; font-size: 14px; line-height: 1.9;">
          <li>🎯 <strong>Alignement</strong> du corps (shoulders/hips/ankles)</li>
          <li>📐 <strong>Angles articulaires</strong> (coudes, genoux)</li>
          <li>⚖️ <strong>Amplitude</strong> de mouvement (ROM)</li>
          <li style="opacity: 0.7;">⏱️ <strong>Tempo</strong> et contrôle (très prochainement)</li>
          <li style="opacity: 0.7;">🎭 <strong>Stabilité</strong> (très prochainement)</li>
          <li style="opacity: 0.7;">📊 <strong>Progression</strong> entre sessions (très prochainement)</li>
        </ul>
      </div>

      <p style="font-size: 13px; opacity: 0.85; margin-bottom: 20px;">
        Comprenez précisément ce qui impacte votre score<br>
        et progressez plus rapidement.
      </p>

      <div style="font-size: 28px; font-weight: 800; margin-bottom: 6px; color: #ffd700;">
        14,99€
      </div>
      <p style="font-size: 12px; opacity: 0.8; margin-bottom: 20px;">
        Paiement unique • Accès à vie
      </p>

      <button id="upgradeDetailsBtn" style="
        width: 100%;
        padding: 15px 28px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 17px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 6px 18px rgba(245, 87, 108, 0.4);
        margin-bottom: 12px;
      ">
        Débloquer l'analyse avancée
      </button>

      <button id="closeDetailsPaywall" style="
        width: 100%;
        background: transparent;
        border: 1px solid rgba(255,255,255,0.25);
        color: rgba(255,255,255,0.8);
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s ease;
      ">
        Plus tard
      </button>
    `,e.appendChild(t),document.body.appendChild(e);const n=t.querySelector("#upgradeDetailsBtn");n.addEventListener("click",()=>{this._handleUpgrade("quality_details")}),n.addEventListener("mouseenter",()=>{n.style.transform="translateY(-2px)",n.style.boxShadow="0 8px 22px rgba(245, 87, 108, 0.6)"}),n.addEventListener("mouseleave",()=>{n.style.transform="translateY(0)",n.style.boxShadow="0 6px 18px rgba(245, 87, 108, 0.4)"});const s=t.querySelector("#closeDetailsPaywall");s.addEventListener("click",()=>{e.remove()}),s.addEventListener("mouseenter",()=>{s.style.background="rgba(255,255,255,0.05)",s.style.borderColor="rgba(255,255,255,0.4)"}),s.addEventListener("mouseleave",()=>{s.style.background="transparent",s.style.borderColor="rgba(255,255,255,0.25)"}),e.addEventListener("click",r=>{r.target===e&&e.remove()})}showUpgradeModal(e="general"){const t=document.createElement("div");t.id="upgradeModal",t.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.75);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(4px);
      animation: fadeIn 0.2s ease;
    `;const n=document.createElement("div");n.style.cssText=`
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 32px 28px;
      border-radius: 18px;
      max-width: 420px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      color: white;
      animation: scaleIn 0.3s ease;
    `;const s=this.MAX_FREE_SESSIONS-this.sessionCount;n.innerHTML=`
      <div style="font-size: 45px; margin-bottom: 14px;">⭐</div>
      <h2 style="font-size: 22px; margin-bottom: 12px; font-weight: 700;">
        Passez Premium
      </h2>
      <p style="font-size: 14px; line-height: 1.5; margin-bottom: 18px; opacity: 0.92;">
        ${s>0?`Plus que <strong>${s} sessions</strong> gratuites restantes.`:"Limite gratuite atteinte."}<br>
        Débloquez l'historique illimité et l'analyse avancée !
      </p>

      <div style="font-size: 26px; font-weight: 800; margin-bottom: 6px; color: #ffd700;">
        14,99€
      </div>
      <p style="font-size: 12px; opacity: 0.75; margin-bottom: 18px;">
        Paiement unique • Accès à vie
      </p>

      <button id="upgradeModalBtn" style="
        width: 100%;
        padding: 14px 24px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(245, 87, 108, 0.4);
        margin-bottom: 10px;
      ">
        Débloquer Premium
      </button>

      <button id="closeModalBtn" style="
        width: 100%;
        padding: 11px 20px;
        background: transparent;
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      ">
        ${s>0?"Continuer en gratuit":"Fermer"}
      </button>
    `,t.appendChild(n),document.body.appendChild(t),n.querySelector("#upgradeModalBtn").addEventListener("click",()=>{this._handleUpgrade(e)}),n.querySelector("#closeModalBtn").addEventListener("click",()=>{t.remove()}),t.addEventListener("click",r=>{r.target===t&&t.remove()})}async _handleUpgrade(e="unknown"){const t="https://buy.stripe.com/aFaeV5bnu4gE5rC6BN83C00";console.log(`[Premium] Upgrade clicked from: ${e}`),typeof gtag<"u"&&gtag("event","upgrade_clicked",{source:e,session_count:this.sessionCount});const{data:{user:n}}=await this.supabase.auth.getUser();let s=t;if(n){const o=s.includes("?")?"&":"?";s=`${s}${o}client_reference_id=${n.id}`}console.log(`[Premium] Redirecting to: ${s}`);const r=document.createElement("a");r.href=s,r.target="_blank",r.rel="noopener noreferrer",r.style.display="none",document.body.appendChild(r),r.click(),setTimeout(()=>document.body.removeChild(r),100),n&&this._startPaymentVerification()}_startPaymentVerification(){console.log("[Premium] Starting payment verification...");let e=0;const t=20,n=setInterval(async()=>{e++,await this._checkPremiumStatus(),this.isPremium?(console.log("🎉 [Premium] Payment verified! Premium activated!"),clearInterval(n),this._showSuccessMessage(),setTimeout(()=>{window.location.reload()},2e3)):e>=t&&(console.log("[Premium] Payment verification timeout"),clearInterval(n))},6e3)}_showSuccessMessage(){const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10001;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px 40px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      text-align: center;
      animation: scaleIn 0.5s ease;
    `,e.innerHTML=`
      <div style="font-size: 60px; margin-bottom: 15px;">🎉</div>
      <h2 style="font-size: 24px; margin-bottom: 10px; font-weight: 700;">
        Premium Activé !
      </h2>
      <p style="font-size: 15px; opacity: 0.9;">
        Bienvenue dans la version complète
      </p>
    `,document.body.appendChild(e)}async verifyPaymentManually(e){try{const{data:{user:t}}=await this.supabase.auth.getUser();if(!t)return console.error("[Premium] No user logged in"),!1;const{data:n,error:s}=await this.supabase.functions.invoke("verify-payment",{body:{sessionId:e}});return s?(console.error("[Premium] Error verifying payment:",s),!1):n.success?(this.isPremium=!0,console.log("✅ [Premium] Payment verified manually"),this._showSuccessMessage(),setTimeout(()=>window.location.reload(),2e3),!0):!1}catch(t){return console.error("[Premium] Failed to verify payment:",t),!1}}unlockPremium(){this.isPremium=!0,console.log("[Premium] Unlocked manually (dev mode) 🔓")}resetSessionCount(){this.sessionCount=0,console.log("[Premium] Session count reset ♻️")}}const ka=document.getElementById("renderDiv");if(!ka)console.error("Fatal Error: renderDiv element not found.");else{const i=window.supabase.createClient("https://lmblqxwssrxucbtowfkq.supabase.co","sb_publishable_8cLzA_3Ud6AaLSi8mTf1Gw_4lJZTLjs"),e=new op(i);window.premiumManager=e,e.init();const t=new ap(ka);window.gameInstance=t,t.premiumManager=e;const n=document.getElementById("weightKgInput");n&&n.addEventListener("input",()=>{t.weightKg=Number(n.value||0)});const r=new URLSearchParams(window.location.search).get("ctx");let o={};if(r)try{o=JSON.parse(atob(decodeURIComponent(r)))}catch(l){console.warn("[main] Invalid ctx param",l)}const a=o.lang||localStorage.getItem("lang")||"fr";o.lang=a,t.setContext(o),window.addEventListener("languagechange",()=>{var c;const l=localStorage.getItem("lang")||"fr";(c=t.setLanguage)==null||c.call(t,l)}),console.log("[main] Game initialized with ctx:",o)}
