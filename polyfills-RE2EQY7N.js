(function(e){let t=e.performance;function o(L){t&&t.mark&&t.mark(L)}function r(L,n){t&&t.measure&&t.measure(L,n)}o("Zone");let a=e.__Zone_symbol_prefix||"__zone_symbol__";function l(L){return a+L}let g=e[l("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(g||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone}let oe=class oe{static assertZonePatched(){if(e.Promise!==re.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=oe.current;for(;n.parent;)n=n.parent;return n}static get current(){return V.zone}static get currentTask(){return te}static __load_patch(n,i,s=!1){if(re.hasOwnProperty(n)){if(!s&&g)throw Error("Already loaded patch: "+n)}else if(!e["__Zone_disable_"+n]){let v="Zone:"+n;o(v),re[n]=i(e,oe,q),r(v,v)}}get parent(){return this._parent}get name(){return this._name}constructor(n,i){this._parent=n,this._name=i?i.name||"unnamed":"<root>",this._properties=i&&i.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,i)}get(n){let i=this.getZoneWith(n);if(i)return i._properties[n]}getZoneWith(n){let i=this;for(;i;){if(i._properties.hasOwnProperty(n))return i;i=i._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,i){if(typeof n!="function")throw new Error("Expecting function got: "+n);let s=this._zoneDelegate.intercept(this,n,i),v=this;return function(){return v.runGuarded(s,this,arguments,i)}}run(n,i,s,v){V={parent:V,zone:this};try{return this._zoneDelegate.invoke(this,n,i,s,v)}finally{V=V.parent}}runGuarded(n,i=null,s,v){V={parent:V,zone:this};try{try{return this._zoneDelegate.invoke(this,n,i,s,v)}catch(U){if(this._zoneDelegate.handleError(this,U))throw U}}finally{V=V.parent}}runTask(n,i,s){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||Y).name+"; Execution: "+this.name+")");if(n.state===x&&(n.type===J||n.type===w))return;let v=n.state!=E;v&&n._transitionTo(E,M),n.runCount++;let U=te;te=n,V={parent:V,zone:this};try{n.type==w&&n.data&&!n.data.isPeriodic&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,n,i,s)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{n.state!==x&&n.state!==d&&(n.type==J||n.data&&n.data.isPeriodic?v&&n._transitionTo(M,E):(n.runCount=0,this._updateTaskCount(n,-1),v&&n._transitionTo(x,E,x))),V=V.parent,te=U}}scheduleTask(n){if(n.zone&&n.zone!==this){let s=this;for(;s;){if(s===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);s=s.parent}}n._transitionTo(W,x);let i=[];n._zoneDelegates=i,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(s){throw n._transitionTo(d,W,x),this._zoneDelegate.handleError(this,s),s}return n._zoneDelegates===i&&this._updateTaskCount(n,1),n.state==W&&n._transitionTo(M,W),n}scheduleMicroTask(n,i,s,v){return this.scheduleTask(new m(D,n,i,s,v,void 0))}scheduleMacroTask(n,i,s,v,U){return this.scheduleTask(new m(w,n,i,s,v,U))}scheduleEventTask(n,i,s,v,U){return this.scheduleTask(new m(J,n,i,s,v,U))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||Y).name+"; Execution: "+this.name+")");if(!(n.state!==M&&n.state!==E)){n._transitionTo($,M,E);try{this._zoneDelegate.cancelTask(this,n)}catch(i){throw n._transitionTo(d,$),this._zoneDelegate.handleError(this,i),i}return this._updateTaskCount(n,-1),n._transitionTo(x,$),n.runCount=0,n}}_updateTaskCount(n,i){let s=n._zoneDelegates;i==-1&&(n._zoneDelegates=null);for(let v=0;v<s.length;v++)s[v]._updateTaskCount(n.type,i)}};oe.__symbol__=l;let _=oe,b={name:"",onHasTask:(L,n,i,s)=>L.hasTask(i,s),onScheduleTask:(L,n,i,s)=>L.scheduleTask(i,s),onInvokeTask:(L,n,i,s,v,U)=>L.invokeTask(i,s,v,U),onCancelTask:(L,n,i,s)=>L.cancelTask(i,s)};class k{constructor(n,i,s){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=n,this._parentDelegate=i,this._forkZS=s&&(s&&s.onFork?s:i._forkZS),this._forkDlgt=s&&(s.onFork?i:i._forkDlgt),this._forkCurrZone=s&&(s.onFork?this.zone:i._forkCurrZone),this._interceptZS=s&&(s.onIntercept?s:i._interceptZS),this._interceptDlgt=s&&(s.onIntercept?i:i._interceptDlgt),this._interceptCurrZone=s&&(s.onIntercept?this.zone:i._interceptCurrZone),this._invokeZS=s&&(s.onInvoke?s:i._invokeZS),this._invokeDlgt=s&&(s.onInvoke?i:i._invokeDlgt),this._invokeCurrZone=s&&(s.onInvoke?this.zone:i._invokeCurrZone),this._handleErrorZS=s&&(s.onHandleError?s:i._handleErrorZS),this._handleErrorDlgt=s&&(s.onHandleError?i:i._handleErrorDlgt),this._handleErrorCurrZone=s&&(s.onHandleError?this.zone:i._handleErrorCurrZone),this._scheduleTaskZS=s&&(s.onScheduleTask?s:i._scheduleTaskZS),this._scheduleTaskDlgt=s&&(s.onScheduleTask?i:i._scheduleTaskDlgt),this._scheduleTaskCurrZone=s&&(s.onScheduleTask?this.zone:i._scheduleTaskCurrZone),this._invokeTaskZS=s&&(s.onInvokeTask?s:i._invokeTaskZS),this._invokeTaskDlgt=s&&(s.onInvokeTask?i:i._invokeTaskDlgt),this._invokeTaskCurrZone=s&&(s.onInvokeTask?this.zone:i._invokeTaskCurrZone),this._cancelTaskZS=s&&(s.onCancelTask?s:i._cancelTaskZS),this._cancelTaskDlgt=s&&(s.onCancelTask?i:i._cancelTaskDlgt),this._cancelTaskCurrZone=s&&(s.onCancelTask?this.zone:i._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let v=s&&s.onHasTask,U=i&&i._hasTaskZS;(v||U)&&(this._hasTaskZS=v?s:b,this._hasTaskDlgt=i,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=n,s.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=i,this._scheduleTaskCurrZone=this.zone),s.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=i,this._invokeTaskCurrZone=this.zone),s.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=i,this._cancelTaskCurrZone=this.zone))}fork(n,i){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,n,i):new _(n,i)}intercept(n,i,s){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,n,i,s):i}invoke(n,i,s,v,U){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,n,i,s,v,U):i.apply(s,v)}handleError(n,i){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,n,i):!0}scheduleTask(n,i){let s=i;if(this._scheduleTaskZS)this._hasTaskZS&&s._zoneDelegates.push(this._hasTaskDlgtOwner),s=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,n,i),s||(s=i);else if(i.scheduleFn)i.scheduleFn(i);else if(i.type==D)R(i);else throw new Error("Task is missing scheduleFn.");return s}invokeTask(n,i,s,v){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,n,i,s,v):i.callback.apply(s,v)}cancelTask(n,i){let s;if(this._cancelTaskZS)s=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,n,i);else{if(!i.cancelFn)throw Error("Task is not cancelable");s=i.cancelFn(i)}return s}hasTask(n,i){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,n,i)}catch(s){this.handleError(n,s)}}_updateTaskCount(n,i){let s=this._taskCounts,v=s[n],U=s[n]=v+i;if(U<0)throw new Error("More tasks executed then were scheduled.");if(v==0||U==0){let u={microTask:s.microTask>0,macroTask:s.macroTask>0,eventTask:s.eventTask>0,change:n};this.hasTask(this.zone,u)}}}class m{constructor(n,i,s,v,U,u){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=n,this.source=i,this.data=v,this.scheduleFn=U,this.cancelFn=u,!s)throw new Error("callback is not defined");this.callback=s;let f=this;n===J&&v&&v.useG?this.invoke=m.invokeTask:this.invoke=function(){return m.invokeTask.call(e,f,this,arguments)}}static invokeTask(n,i,s){n||(n=this),Q++;try{return n.runCount++,n.zone.runTask(n,i,s)}finally{Q==1&&T(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,W)}_transitionTo(n,i,s){if(this._state===i||this._state===s)this._state=n,n==x&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${n}', expecting state '${i}'${s?" or '"+s+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let Z=l("setTimeout"),O=l("Promise"),C=l("then"),G=[],A=!1,K;function F(L){if(K||e[O]&&(K=e[O].resolve(0)),K){let n=K[C];n||(n=K.then),n.call(K,L)}else e[Z](L,0)}function R(L){Q===0&&G.length===0&&F(T),L&&G.push(L)}function T(){if(!A){for(A=!0;G.length;){let L=G;G=[];for(let n=0;n<L.length;n++){let i=L[n];try{i.zone.runTask(i,null,null)}catch(s){q.onUnhandledError(s)}}}q.microtaskDrainDone(),A=!1}}let Y={name:"NO ZONE"},x="notScheduled",W="scheduling",M="scheduled",E="running",$="canceling",d="unknown",D="microTask",w="macroTask",J="eventTask",re={},q={symbol:l,currentZoneFrame:()=>V,onUnhandledError:z,microtaskDrainDone:z,scheduleMicroTask:R,showUncaughtError:()=>!_[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:z,patchMethod:()=>z,bindArguments:()=>[],patchThen:()=>z,patchMacroTask:()=>z,patchEventPrototype:()=>z,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>z,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>z,wrapWithCurrentZone:()=>z,filterProperties:()=>[],attachOriginToPatched:()=>z,_redefineProperty:()=>z,patchCallbacks:()=>z,nativeScheduleMicroTask:F},V={parent:null,zone:new _(null,null)},te=null,Q=0;function z(){}return r("Zone","Zone"),e.Zone=_})(globalThis);var me=Object.getOwnPropertyDescriptor,Ze=Object.defineProperty,Me=Object.getPrototypeOf,ut=Object.create,ft=Array.prototype.slice,Le="addEventListener",Ae="removeEventListener",Se=Zone.__symbol__(Le),Oe=Zone.__symbol__(Ae),ie="true",ce="false",pe=Zone.__symbol__("");function je(e,t){return Zone.current.wrap(e,t)}function xe(e,t,o,r,a){return Zone.current.scheduleMacroTask(e,t,o,r,a)}var j=Zone.__symbol__,we=typeof window<"u",Ee=we?window:void 0,X=we&&Ee||globalThis,ht="removeAttribute";function $e(e,t){for(let o=e.length-1;o>=0;o--)typeof e[o]=="function"&&(e[o]=je(e[o],t+"_"+o));return e}function dt(e,t){let o=e.constructor.name;for(let r=0;r<t.length;r++){let a=t[r],l=e[a];if(l){let g=me(e,a);if(!Ke(g))continue;e[a]=(_=>{let b=function(){return _.apply(this,$e(arguments,o+"."+a))};return ae(b,_),b})(l)}}}function Ke(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}var Je=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Pe=!("nw"in X)&&typeof X.process<"u"&&{}.toString.call(X.process)==="[object process]",He=!Pe&&!Je&&!!(we&&Ee.HTMLElement),Qe=typeof X.process<"u"&&{}.toString.call(X.process)==="[object process]"&&!Je&&!!(we&&Ee.HTMLElement),be={},We=function(e){if(e=e||X.event,!e)return;let t=be[e.type];t||(t=be[e.type]=j("ON_PROPERTY"+e.type));let o=this||e.target||X,r=o[t],a;if(He&&o===Ee&&e.type==="error"){let l=e;a=r&&r.call(this,l.message,l.filename,l.lineno,l.colno,l.error),a===!0&&e.preventDefault()}else a=r&&r.apply(this,arguments),a!=null&&!a&&e.preventDefault();return a};function qe(e,t,o){let r=me(e,t);if(!r&&o&&me(o,t)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;let a=j("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete r.writable,delete r.value;let l=r.get,g=r.set,_=t.slice(2),b=be[_];b||(b=be[_]=j("ON_PROPERTY"+_)),r.set=function(k){let m=this;if(!m&&e===X&&(m=X),!m)return;typeof m[b]=="function"&&m.removeEventListener(_,We),g&&g.call(m,null),m[b]=k,typeof k=="function"&&m.addEventListener(_,We,!1)},r.get=function(){let k=this;if(!k&&e===X&&(k=X),!k)return null;let m=k[b];if(m)return m;if(l){let Z=l.call(this);if(Z)return r.set.call(this,Z),typeof k[ht]=="function"&&k.removeAttribute(t),Z}return null},Ze(e,t,r),e[a]=!0}function et(e,t,o){if(t)for(let r=0;r<t.length;r++)qe(e,"on"+t[r],o);else{let r=[];for(let a in e)a.slice(0,2)=="on"&&r.push(a);for(let a=0;a<r.length;a++)qe(e,r[a],o)}}var ne=j("originalInstance");function ye(e){let t=X[e];if(!t)return;X[j(e)]=t,X[e]=function(){let a=$e(arguments,e);switch(a.length){case 0:this[ne]=new t;break;case 1:this[ne]=new t(a[0]);break;case 2:this[ne]=new t(a[0],a[1]);break;case 3:this[ne]=new t(a[0],a[1],a[2]);break;case 4:this[ne]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},ae(X[e],t);let o=new t(function(){}),r;for(r in o)e==="XMLHttpRequest"&&r==="responseBlob"||function(a){typeof o[a]=="function"?X[e].prototype[a]=function(){return this[ne][a].apply(this[ne],arguments)}:Ze(X[e].prototype,a,{set:function(l){typeof l=="function"?(this[ne][a]=je(l,e+"."+a),ae(this[ne][a],l)):this[ne][a]=l},get:function(){return this[ne][a]}})}(r);for(r in t)r!=="prototype"&&t.hasOwnProperty(r)&&(X[e][r]=t[r])}function le(e,t,o){let r=e;for(;r&&!r.hasOwnProperty(t);)r=Me(r);!r&&e[t]&&(r=e);let a=j(t),l=null;if(r&&(!(l=r[a])||!r.hasOwnProperty(a))){l=r[a]=r[t];let g=r&&me(r,t);if(Ke(g)){let _=o(l,a,t);r[t]=function(){return _(this,arguments)},ae(r[t],l)}}return l}function _t(e,t,o){let r=null;function a(l){let g=l.data;return g.args[g.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(g.target,g.args),l}r=le(e,t,l=>function(g,_){let b=o(g,_);return b.cbIdx>=0&&typeof _[b.cbIdx]=="function"?xe(b.name,_[b.cbIdx],b,a):l.apply(g,_)})}function ae(e,t){e[j("OriginalDelegate")]=t}var Xe=!1,Ce=!1;function Tt(){try{let e=Ee.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function Et(){if(Xe)return Ce;Xe=!0;try{let e=Ee.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Ce=!0)}catch{}return Ce}Zone.__load_patch("ZoneAwarePromise",(e,t,o)=>{let r=Object.getOwnPropertyDescriptor,a=Object.defineProperty;function l(u){if(u&&u.toString===Object.prototype.toString){let f=u.constructor&&u.constructor.name;return(f||"")+": "+JSON.stringify(u)}return u?u.toString():Object.prototype.toString.call(u)}let g=o.symbol,_=[],b=e[g("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,k=g("Promise"),m=g("then"),Z="__creationTrace__";o.onUnhandledError=u=>{if(o.showUncaughtError()){let f=u&&u.rejection;f?console.error("Unhandled Promise rejection:",f instanceof Error?f.message:f,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",f,f instanceof Error?f.stack:void 0):console.error(u)}},o.microtaskDrainDone=()=>{for(;_.length;){let u=_.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(f){C(f)}}};let O=g("unhandledPromiseRejectionHandler");function C(u){o.onUnhandledError(u);try{let f=t[O];typeof f=="function"&&f.call(this,u)}catch{}}function G(u){return u&&u.then}function A(u){return u}function K(u){return n.reject(u)}let F=g("state"),R=g("value"),T=g("finally"),Y=g("parentPromiseValue"),x=g("parentPromiseState"),W="Promise.then",M=null,E=!0,$=!1,d=0;function D(u,f){return c=>{try{q(u,f,c)}catch(h){q(u,!1,h)}}}let w=function(){let u=!1;return function(c){return function(){u||(u=!0,c.apply(null,arguments))}}},J="Promise resolved with itself",re=g("currentTaskTrace");function q(u,f,c){let h=w();if(u===c)throw new TypeError(J);if(u[F]===M){let y=null;try{(typeof c=="object"||typeof c=="function")&&(y=c&&c.then)}catch(P){return h(()=>{q(u,!1,P)})(),u}if(f!==$&&c instanceof n&&c.hasOwnProperty(F)&&c.hasOwnProperty(R)&&c[F]!==M)te(c),q(u,c[F],c[R]);else if(f!==$&&typeof y=="function")try{y.call(c,h(D(u,f)),h(D(u,!1)))}catch(P){h(()=>{q(u,!1,P)})()}else{u[F]=f;let P=u[R];if(u[R]=c,u[T]===T&&f===E&&(u[F]=u[x],u[R]=u[Y]),f===$&&c instanceof Error){let p=t.currentTask&&t.currentTask.data&&t.currentTask.data[Z];p&&a(c,re,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<P.length;)Q(u,P[p++],P[p++],P[p++],P[p++]);if(P.length==0&&f==$){u[F]=d;let p=c;try{throw new Error("Uncaught (in promise): "+l(c)+(c&&c.stack?`
`+c.stack:""))}catch(N){p=N}b&&(p.throwOriginal=!0),p.rejection=c,p.promise=u,p.zone=t.current,p.task=t.currentTask,_.push(p),o.scheduleMicroTask()}}}return u}let V=g("rejectionHandledHandler");function te(u){if(u[F]===d){try{let f=t[V];f&&typeof f=="function"&&f.call(this,{rejection:u[R],promise:u})}catch{}u[F]=$;for(let f=0;f<_.length;f++)u===_[f].promise&&_.splice(f,1)}}function Q(u,f,c,h,y){te(u);let P=u[F],p=P?typeof h=="function"?h:A:typeof y=="function"?y:K;f.scheduleMicroTask(W,()=>{try{let N=u[R],I=!!c&&T===c[T];I&&(c[Y]=N,c[x]=P);let S=f.run(p,void 0,I&&p!==K&&p!==A?[]:[N]);q(c,!0,S)}catch(N){q(c,!1,N)}},c)}let z="function ZoneAwarePromise() { [native code] }",oe=function(){},L=e.AggregateError;class n{static toString(){return z}static resolve(f){return q(new this(null),E,f)}static reject(f){return q(new this(null),$,f)}static any(f){if(!f||typeof f[Symbol.iterator]!="function")return Promise.reject(new L([],"All promises were rejected"));let c=[],h=0;try{for(let p of f)h++,c.push(n.resolve(p))}catch{return Promise.reject(new L([],"All promises were rejected"))}if(h===0)return Promise.reject(new L([],"All promises were rejected"));let y=!1,P=[];return new n((p,N)=>{for(let I=0;I<c.length;I++)c[I].then(S=>{y||(y=!0,p(S))},S=>{P.push(S),h--,h===0&&(y=!0,N(new L(P,"All promises were rejected")))})})}static race(f){let c,h,y=new this((N,I)=>{c=N,h=I});function P(N){c(N)}function p(N){h(N)}for(let N of f)G(N)||(N=this.resolve(N)),N.then(P,p);return y}static all(f){return n.allWithCallback(f)}static allSettled(f){return(this&&this.prototype instanceof n?this:n).allWithCallback(f,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(f,c){let h,y,P=new this((S,H)=>{h=S,y=H}),p=2,N=0,I=[];for(let S of f){G(S)||(S=this.resolve(S));let H=N;try{S.then(B=>{I[H]=c?c.thenCallback(B):B,p--,p===0&&h(I)},B=>{c?(I[H]=c.errorCallback(B),p--,p===0&&h(I)):y(B)})}catch(B){y(B)}p++,N++}return p-=2,p===0&&h(I),P}constructor(f){let c=this;if(!(c instanceof n))throw new Error("Must be an instanceof Promise.");c[F]=M,c[R]=[];try{let h=w();f&&f(h(D(c,E)),h(D(c,$)))}catch(h){q(c,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return n}then(f,c){let h=this.constructor?.[Symbol.species];(!h||typeof h!="function")&&(h=this.constructor||n);let y=new h(oe),P=t.current;return this[F]==M?this[R].push(P,y,f,c):Q(this,P,y,f,c),y}catch(f){return this.then(null,f)}finally(f){let c=this.constructor?.[Symbol.species];(!c||typeof c!="function")&&(c=n);let h=new c(oe);h[T]=T;let y=t.current;return this[F]==M?this[R].push(y,h,f,f):Q(this,y,h,f,f),h}}n.resolve=n.resolve,n.reject=n.reject,n.race=n.race,n.all=n.all;let i=e[k]=e.Promise;e.Promise=n;let s=g("thenPatched");function v(u){let f=u.prototype,c=r(f,"then");if(c&&(c.writable===!1||!c.configurable))return;let h=f.then;f[m]=h,u.prototype.then=function(y,P){return new n((N,I)=>{h.call(this,N,I)}).then(y,P)},u[s]=!0}o.patchThen=v;function U(u){return function(f,c){let h=u.apply(f,c);if(h instanceof n)return h;let y=h.constructor;return y[s]||v(y),h}}return i&&(v(i),le(e,"fetch",u=>U(u))),Promise[t.__symbol__("uncaughtPromiseErrors")]=_,n});Zone.__load_patch("toString",e=>{let t=Function.prototype.toString,o=j("OriginalDelegate"),r=j("Promise"),a=j("Error"),l=function(){if(typeof this=="function"){let k=this[o];if(k)return typeof k=="function"?t.call(k):Object.prototype.toString.call(k);if(this===Promise){let m=e[r];if(m)return t.call(m)}if(this===Error){let m=e[a];if(m)return t.call(m)}}return t.call(this)};l[o]=t,Function.prototype.toString=l;let g=Object.prototype.toString,_="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?_:g.call(this)}});var _e=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{_e=!1}var gt={useG:!0},ee={},tt={},nt=new RegExp("^"+pe+"(\\w+)(true|false)$"),rt=j("propagationStopped");function ot(e,t){let o=(t?t(e):e)+ce,r=(t?t(e):e)+ie,a=pe+o,l=pe+r;ee[e]={},ee[e][ce]=a,ee[e][ie]=l}function mt(e,t,o,r){let a=r&&r.add||Le,l=r&&r.rm||Ae,g=r&&r.listeners||"eventListeners",_=r&&r.rmAll||"removeAllListeners",b=j(a),k="."+a+":",m="prependListener",Z="."+m+":",O=function(R,T,Y){if(R.isRemoved)return;let x=R.callback;typeof x=="object"&&x.handleEvent&&(R.callback=E=>x.handleEvent(E),R.originalDelegate=x);let W;try{R.invoke(R,T,[Y])}catch(E){W=E}let M=R.options;if(M&&typeof M=="object"&&M.once){let E=R.originalDelegate?R.originalDelegate:R.callback;T[l].call(T,Y.type,E,M)}return W};function C(R,T,Y){if(T=T||e.event,!T)return;let x=R||T.target||e,W=x[ee[T.type][Y?ie:ce]];if(W){let M=[];if(W.length===1){let E=O(W[0],x,T);E&&M.push(E)}else{let E=W.slice();for(let $=0;$<E.length&&!(T&&T[rt]===!0);$++){let d=O(E[$],x,T);d&&M.push(d)}}if(M.length===1)throw M[0];for(let E=0;E<M.length;E++){let $=M[E];t.nativeScheduleMicroTask(()=>{throw $})}}}let G=function(R){return C(this,R,!1)},A=function(R){return C(this,R,!0)};function K(R,T){if(!R)return!1;let Y=!0;T&&T.useG!==void 0&&(Y=T.useG);let x=T&&T.vh,W=!0;T&&T.chkDup!==void 0&&(W=T.chkDup);let M=!1;T&&T.rt!==void 0&&(M=T.rt);let E=R;for(;E&&!E.hasOwnProperty(a);)E=Me(E);if(!E&&R[a]&&(E=R),!E||E[b])return!1;let $=T&&T.eventNameToString,d={},D=E[b]=E[a],w=E[j(l)]=E[l],J=E[j(g)]=E[g],re=E[j(_)]=E[_],q;T&&T.prepend&&(q=E[j(T.prepend)]=E[T.prepend]);function V(c,h){return!_e&&typeof c=="object"&&c?!!c.capture:!_e||!h?c:typeof c=="boolean"?{capture:c,passive:!0}:c?typeof c=="object"&&c.passive!==!1?{...c,passive:!0}:c:{passive:!0}}let te=function(c){if(!d.isExisting)return D.call(d.target,d.eventName,d.capture?A:G,d.options)},Q=function(c){if(!c.isRemoved){let h=ee[c.eventName],y;h&&(y=h[c.capture?ie:ce]);let P=y&&c.target[y];if(P){for(let p=0;p<P.length;p++)if(P[p]===c){P.splice(p,1),c.isRemoved=!0,P.length===0&&(c.allRemoved=!0,c.target[y]=null);break}}}if(c.allRemoved)return w.call(c.target,c.eventName,c.capture?A:G,c.options)},z=function(c){return D.call(d.target,d.eventName,c.invoke,d.options)},oe=function(c){return q.call(d.target,d.eventName,c.invoke,d.options)},L=function(c){return w.call(c.target,c.eventName,c.invoke,c.options)},n=Y?te:z,i=Y?Q:L,s=function(c,h){let y=typeof h;return y==="function"&&c.callback===h||y==="object"&&c.originalDelegate===h},v=T&&T.diff?T.diff:s,U=Zone[j("UNPATCHED_EVENTS")],u=e[j("PASSIVE_EVENTS")],f=function(c,h,y,P,p=!1,N=!1){return function(){let I=this||e,S=arguments[0];T&&T.transferEventName&&(S=T.transferEventName(S));let H=arguments[1];if(!H)return c.apply(this,arguments);if(Pe&&S==="uncaughtException")return c.apply(this,arguments);let B=!1;if(typeof H!="function"){if(!H.handleEvent)return c.apply(this,arguments);B=!0}if(x&&!x(c,H,I,arguments))return;let ue=_e&&!!u&&u.indexOf(S)!==-1,se=V(arguments[2],ue);if(U){for(let he=0;he<U.length;he++)if(S===U[he])return ue?c.call(I,S,H,se):c.apply(this,arguments)}let Ne=se?typeof se=="boolean"?!0:se.capture:!1,Ue=se&&typeof se=="object"?se.once:!1,lt=Zone.current,Ie=ee[S];Ie||(ot(S,$),Ie=ee[S]);let Ge=Ie[Ne?ie:ce],de=I[Ge],Ve=!1;if(de){if(Ve=!0,W){for(let he=0;he<de.length;he++)if(v(de[he],H))return}}else de=I[Ge]=[];let ke,ze=I.constructor.name,Fe=tt[ze];Fe&&(ke=Fe[S]),ke||(ke=ze+h+($?$(S):S)),d.options=se,Ue&&(d.options.once=!1),d.target=I,d.capture=Ne,d.eventName=S,d.isExisting=Ve;let ge=Y?gt:void 0;ge&&(ge.taskData=d);let fe=lt.scheduleEventTask(ke,H,ge,y,P);if(d.target=null,ge&&(ge.taskData=null),Ue&&(se.once=!0),!_e&&typeof fe.options=="boolean"||(fe.options=se),fe.target=I,fe.capture=Ne,fe.eventName=S,B&&(fe.originalDelegate=H),N?de.unshift(fe):de.push(fe),p)return I}};return E[a]=f(D,k,n,i,M),q&&(E[m]=f(q,Z,oe,i,M,!0)),E[l]=function(){let c=this||e,h=arguments[0];T&&T.transferEventName&&(h=T.transferEventName(h));let y=arguments[2],P=y?typeof y=="boolean"?!0:y.capture:!1,p=arguments[1];if(!p)return w.apply(this,arguments);if(x&&!x(w,p,c,arguments))return;let N=ee[h],I;N&&(I=N[P?ie:ce]);let S=I&&c[I];if(S)for(let H=0;H<S.length;H++){let B=S[H];if(v(B,p)){if(S.splice(H,1),B.isRemoved=!0,S.length===0&&(B.allRemoved=!0,c[I]=null,typeof h=="string")){let ue=pe+"ON_PROPERTY"+h;c[ue]=null}return B.zone.cancelTask(B),M?c:void 0}}return w.apply(this,arguments)},E[g]=function(){let c=this||e,h=arguments[0];T&&T.transferEventName&&(h=T.transferEventName(h));let y=[],P=st(c,$?$(h):h);for(let p=0;p<P.length;p++){let N=P[p],I=N.originalDelegate?N.originalDelegate:N.callback;y.push(I)}return y},E[_]=function(){let c=this||e,h=arguments[0];if(h){T&&T.transferEventName&&(h=T.transferEventName(h));let y=ee[h];if(y){let P=y[ce],p=y[ie],N=c[P],I=c[p];if(N){let S=N.slice();for(let H=0;H<S.length;H++){let B=S[H],ue=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,h,ue,B.options)}}if(I){let S=I.slice();for(let H=0;H<S.length;H++){let B=S[H],ue=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,h,ue,B.options)}}}}else{let y=Object.keys(c);for(let P=0;P<y.length;P++){let p=y[P],N=nt.exec(p),I=N&&N[1];I&&I!=="removeListener"&&this[_].call(this,I)}this[_].call(this,"removeListener")}if(M)return this},ae(E[a],D),ae(E[l],w),re&&ae(E[_],re),J&&ae(E[g],J),!0}let F=[];for(let R=0;R<o.length;R++)F[R]=K(o[R],r);return F}function st(e,t){if(!t){let l=[];for(let g in e){let _=nt.exec(g),b=_&&_[1];if(b&&(!t||b===t)){let k=e[g];if(k)for(let m=0;m<k.length;m++)l.push(k[m])}}return l}let o=ee[t];o||(ot(t),o=ee[t]);let r=e[o[ce]],a=e[o[ie]];return r?a?r.concat(a):r.slice():a?a.slice():[]}function pt(e,t){let o=e.Event;o&&o.prototype&&t.patchMethod(o.prototype,"stopImmediatePropagation",r=>function(a,l){a[rt]=!0,r&&r.apply(a,l)})}function yt(e,t,o,r,a){let l=Zone.__symbol__(r);if(t[l])return;let g=t[l]=t[r];t[r]=function(_,b,k){return b&&b.prototype&&a.forEach(function(m){let Z=`${o}.${r}::`+m,O=b.prototype;try{if(O.hasOwnProperty(m)){let C=e.ObjectGetOwnPropertyDescriptor(O,m);C&&C.value?(C.value=e.wrapWithCurrentZone(C.value,Z),e._redefineProperty(b.prototype,m,C)):O[m]&&(O[m]=e.wrapWithCurrentZone(O[m],Z))}else O[m]&&(O[m]=e.wrapWithCurrentZone(O[m],Z))}catch{}}),g.call(t,_,b,k)},e.attachOriginToPatched(t[r],g)}function it(e,t,o){if(!o||o.length===0)return t;let r=o.filter(l=>l.target===e);if(!r||r.length===0)return t;let a=r[0].ignoreProperties;return t.filter(l=>a.indexOf(l)===-1)}function Ye(e,t,o,r){if(!e)return;let a=it(e,t,o);et(e,a,r)}function De(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}function kt(e,t){if(Pe&&!Qe||Zone[e.symbol("patchEvents")])return;let o=t.__Zone_ignore_on_properties,r=[];if(He){let a=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=Tt()?[{target:a,ignoreProperties:["error"]}]:[];Ye(a,De(a),o&&o.concat(l),Me(a))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<r.length;a++){let l=t[r[a]];l&&l.prototype&&Ye(l.prototype,De(l.prototype),o)}}Zone.__load_patch("util",(e,t,o)=>{let r=De(e);o.patchOnProperties=et,o.patchMethod=le,o.bindArguments=$e,o.patchMacroTask=_t;let a=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[a]=e[l]),e[a]&&(t[a]=t[l]=e[a]),o.patchEventPrototype=pt,o.patchEventTarget=mt,o.isIEOrEdge=Et,o.ObjectDefineProperty=Ze,o.ObjectGetOwnPropertyDescriptor=me,o.ObjectCreate=ut,o.ArraySlice=ft,o.patchClass=ye,o.wrapWithCurrentZone=je,o.filterProperties=it,o.attachOriginToPatched=ae,o._redefineProperty=Object.defineProperty,o.patchCallbacks=yt,o.getGlobalObjects=()=>({globalSources:tt,zoneSymbolEventNames:ee,eventNames:r,isBrowser:He,isMix:Qe,isNode:Pe,TRUE_STR:ie,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:pe,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Ae})});function vt(e,t){t.patchMethod(e,"queueMicrotask",o=>function(r,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}var ve=j("zoneTask");function Te(e,t,o,r){let a=null,l=null;t+=r,o+=r;let g={};function _(k){let m=k.data;return m.args[0]=function(){return k.invoke.apply(this,arguments)},m.handleId=a.apply(e,m.args),k}function b(k){return l.call(e,k.data.handleId)}a=le(e,t,k=>function(m,Z){if(typeof Z[0]=="function"){let O={isPeriodic:r==="Interval",delay:r==="Timeout"||r==="Interval"?Z[1]||0:void 0,args:Z},C=Z[0];Z[0]=function(){try{return C.apply(this,arguments)}finally{O.isPeriodic||(typeof O.handleId=="number"?delete g[O.handleId]:O.handleId&&(O.handleId[ve]=null))}};let G=xe(t,Z[0],O,_,b);if(!G)return G;let A=G.data.handleId;return typeof A=="number"?g[A]=G:A&&(A[ve]=G),A&&A.ref&&A.unref&&typeof A.ref=="function"&&typeof A.unref=="function"&&(G.ref=A.ref.bind(A),G.unref=A.unref.bind(A)),typeof A=="number"||A?A:G}else return k.apply(e,Z)}),l=le(e,o,k=>function(m,Z){let O=Z[0],C;typeof O=="number"?C=g[O]:(C=O&&O[ve],C||(C=O)),C&&typeof C.type=="string"?C.state!=="notScheduled"&&(C.cancelFn&&C.data.isPeriodic||C.runCount===0)&&(typeof O=="number"?delete g[O]:O&&(O[ve]=null),C.zone.cancelTask(C)):k.apply(e,Z)})}function bt(e,t){let{isBrowser:o,isMix:r}=t.getGlobalObjects();if(!o&&!r||!e.customElements||!("customElements"in e))return;let a=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"];t.patchCallbacks(t,e.customElements,"customElements","define",a)}function wt(e,t){if(Zone[t.symbol("patchEventTarget")])return;let{eventNames:o,zoneSymbolEventNames:r,TRUE_STR:a,FALSE_STR:l,ZONE_SYMBOL_PREFIX:g}=t.getGlobalObjects();for(let b=0;b<o.length;b++){let k=o[b],m=k+l,Z=k+a,O=g+m,C=g+Z;r[k]={},r[k][l]=O,r[k][a]=C}let _=e.EventTarget;if(!(!_||!_.prototype))return t.patchEventTarget(e,t,[_&&_.prototype]),!0}function Pt(e,t){t.patchEventPrototype(e,t)}Zone.__load_patch("legacy",e=>{let t=e[Zone.__symbol__("legacyPatch")];t&&t()});Zone.__load_patch("timers",e=>{let t="set",o="clear";Te(e,t,o,"Timeout"),Te(e,t,o,"Interval"),Te(e,t,o,"Immediate")});Zone.__load_patch("requestAnimationFrame",e=>{Te(e,"request","cancel","AnimationFrame"),Te(e,"mozRequest","mozCancel","AnimationFrame"),Te(e,"webkitRequest","webkitCancel","AnimationFrame")});Zone.__load_patch("blocking",(e,t)=>{let o=["alert","prompt","confirm"];for(let r=0;r<o.length;r++){let a=o[r];le(e,a,(l,g,_)=>function(b,k){return t.current.run(l,e,k,_)})}});Zone.__load_patch("EventTarget",(e,t,o)=>{Pt(e,o),wt(e,o);let r=e.XMLHttpRequestEventTarget;r&&r.prototype&&o.patchEventTarget(e,o,[r.prototype])});Zone.__load_patch("MutationObserver",(e,t,o)=>{ye("MutationObserver"),ye("WebKitMutationObserver")});Zone.__load_patch("IntersectionObserver",(e,t,o)=>{ye("IntersectionObserver")});Zone.__load_patch("FileReader",(e,t,o)=>{ye("FileReader")});Zone.__load_patch("on_property",(e,t,o)=>{kt(o,e)});Zone.__load_patch("customElements",(e,t,o)=>{bt(e,o)});Zone.__load_patch("XHR",(e,t)=>{b(e);let o=j("xhrTask"),r=j("xhrSync"),a=j("xhrListener"),l=j("xhrScheduled"),g=j("xhrURL"),_=j("xhrErrorBeforeScheduled");function b(k){let m=k.XMLHttpRequest;if(!m)return;let Z=m.prototype;function O(d){return d[o]}let C=Z[Se],G=Z[Oe];if(!C){let d=k.XMLHttpRequestEventTarget;if(d){let D=d.prototype;C=D[Se],G=D[Oe]}}let A="readystatechange",K="scheduled";function F(d){let D=d.data,w=D.target;w[l]=!1,w[_]=!1;let J=w[a];C||(C=w[Se],G=w[Oe]),J&&G.call(w,A,J);let re=w[a]=()=>{if(w.readyState===w.DONE)if(!D.aborted&&w[l]&&d.state===K){let V=w[t.__symbol__("loadfalse")];if(w.status!==0&&V&&V.length>0){let te=d.invoke;d.invoke=function(){let Q=w[t.__symbol__("loadfalse")];for(let z=0;z<Q.length;z++)Q[z]===d&&Q.splice(z,1);!D.aborted&&d.state===K&&te.call(d)},V.push(d)}else d.invoke()}else!D.aborted&&w[l]===!1&&(w[_]=!0)};return C.call(w,A,re),w[o]||(w[o]=d),E.apply(w,D.args),w[l]=!0,d}function R(){}function T(d){let D=d.data;return D.aborted=!0,$.apply(D.target,D.args)}let Y=le(Z,"open",()=>function(d,D){return d[r]=D[2]==!1,d[g]=D[1],Y.apply(d,D)}),x="XMLHttpRequest.send",W=j("fetchTaskAborting"),M=j("fetchTaskScheduling"),E=le(Z,"send",()=>function(d,D){if(t.current[M]===!0||d[r])return E.apply(d,D);{let w={target:d,url:d[g],isPeriodic:!1,args:D,aborted:!1},J=xe(x,R,w,F,T);d&&d[_]===!0&&!w.aborted&&J.state===K&&J.invoke()}}),$=le(Z,"abort",()=>function(d,D){let w=O(d);if(w&&typeof w.type=="string"){if(w.cancelFn==null||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(t.current[W]===!0)return $.apply(d,D)})}});Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&dt(e.navigator.geolocation,["getCurrentPosition","watchPosition"])});Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function o(r){return function(a){st(e,r).forEach(g=>{let _=e.PromiseRejectionEvent;if(_){let b=new _(r,{promise:a.promise,reason:a.rejection});g.invoke(b)}})}}e.PromiseRejectionEvent&&(t[j("unhandledPromiseRejectionHandler")]=o("unhandledrejection"),t[j("rejectionHandledHandler")]=o("rejectionhandled"))});Zone.__load_patch("queueMicrotask",(e,t,o)=>{vt(e,o)});var Rt=":";var Be=class{visitText(t,o){return t.value}visitContainer(t,o){return`[${t.children.map(r=>r.visit(this)).join(", ")}]`}visitIcu(t,o){let r=Object.keys(t.cases).map(a=>`${a} {${t.cases[a].visit(this)}}`);return`{${t.expression}, ${t.type}, ${r.join(", ")}}`}visitTagPlaceholder(t,o){return t.isVoid?`<ph tag name="${t.startName}"/>`:`<ph tag name="${t.startName}">${t.children.map(r=>r.visit(this)).join(", ")}</ph name="${t.closeName}">`}visitPlaceholder(t,o){return t.value?`<ph name="${t.name}">${t.value}</ph>`:`<ph name="${t.name}"/>`}visitIcuPlaceholder(t,o){return`<ph icu name="${t.name}">${t.value.visit(this)}</ph>`}visitBlockPlaceholder(t,o){return`<ph block name="${t.startName}">${t.children.map(r=>r.visit(this)).join(", ")}</ph name="${t.closeName}">`}},St=new Be;var ct;(function(e){e[e.Little=0]="Little",e[e.Big=1]="Big"})(ct||(ct={}));function Nt(e,t){for(let o=1,r=1;o<e.length;o++,r++)if(t[r]==="\\")r++;else if(e[o]===Rt)return o;throw new Error(`Unterminated $localize metadata block in "${t}".`)}var Re=function(e,...t){if(Re.translate){let r=Re.translate(e,t);e=r[0],t=r[1]}let o=at(e[0],e.raw[0]);for(let r=1;r<e.length;r++)o+=t[r-1]+at(e[r],e.raw[r]);return o},It=":";function at(e,t){return t.charAt(0)===It?e.substring(Nt(e,t)+1):e}globalThis.$localize=Re;
/*! Bundled license information:

zone.js/fesm2015/zone.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/localize/fesm2022/localize.mjs:
  (**
   * @license Angular v17.0.8
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/localize/fesm2022/init.mjs:
  (**
   * @license Angular v17.0.8
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
