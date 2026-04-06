"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=d(function(m,s){
var c=require('@stdlib/blas-ext-base-gfind-index/dist').ndarray;function o(r,e,n,i,t,q){var a;return r<=0?-1:(i+=(r-1)*n,n*=-1,a=c(r,e,n,i,t,q),a<0||(a=r-1-a),a)}s.exports=o
});var v=d(function(O,f){
var y=require('@stdlib/strided-base-stride2offset/dist'),g=u();function p(r,e,n,i,t){return g(r,e,n,y(r,n),i,t)}f.exports=p
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=v(),L=u();I(x,"ndarray",L);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
