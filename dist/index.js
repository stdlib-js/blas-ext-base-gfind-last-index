"use strict";var d=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var u=d(function(m,s){
var c=require('@stdlib/blas-ext-base-gfind-index/dist').ndarray;function o(r,e,n,a,t,q){var i;return r<=0?-1:(a+=(r-1)*n,n*=-1,i=c(r,e,n,a,t,q),i<0?i:r-1-i)}s.exports=o
});var v=d(function(O,f){
var y=require('@stdlib/strided-base-stride2offset/dist'),g=u();function p(r,e,n,a,t){return g(r,e,n,y(r,n),a,t)}f.exports=p
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=v(),L=u();I(x,"ndarray",L);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
