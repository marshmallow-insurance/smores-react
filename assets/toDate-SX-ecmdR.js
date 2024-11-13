const r=6048e5,s=864e5,t=Symbol.for("constructDateFrom");function c(n,o){return typeof n=="function"?n(o):n&&typeof n=="object"&&t in n?n[t](o):n instanceof Date?new n.constructor(o):new Date(o)}function i(n,o){return c(o||n,n)}export{r as a,c,s as m,i as t};
//# sourceMappingURL=toDate-SX-ecmdR.js.map
