(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["piano"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/modules/Piano/Piano.less":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/modules/Piano/Piano.less ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".instrument .db::after {\\n  content: 'Db' !important;\\n}\\n.instrument .d::after {\\n  content: 'D' !important;\\n}\\n.instrument .eb::after {\\n  content: 'Eb' !important;\\n}\\n.instrument .e::after {\\n  content: 'E' !important;\\n}\\n.instrument .f::after {\\n  content: 'F' !important;\\n}\\n.instrument .gb::after {\\n  content: 'Gb' !important;\\n}\\n.instrument .g::after {\\n  content: 'G' !important;\\n}\\n.instrument .ab::after {\\n  content: 'Ab' !important;\\n}\\n.instrument .a::after {\\n  content: 'A' !important;\\n}\\n.instrument .bb::after {\\n  content: 'Bb' !important;\\n}\\n.instrument .b::after {\\n  content: 'B' !important;\\n}\\n.instrument .c::after {\\n  content: 'C' !important;\\n}\\n.piano {\\n  display: grid;\\n  grid-template-columns: repeat(3, 420px);\\n}\\n.octave {\\n  display: grid;\\n  grid-template-columns: 60px 40px 60px 40px 60px 60px 40px 60px 40px 60px 40px 60px;\\n}\\n.piano .key {\\n  -webkit-border-bottom-right-radius: 3px;\\n  -webkit-border-bottom-left-radius: 3px;\\n  -moz-border-radius-bottomright: 3px;\\n  -moz-border-radius-bottomleft: 3px;\\n  border-bottom-right-radius: 3px;\\n  border-bottom-left-radius: 3px;\\n  box-shadow: 0px 0px 1px #000;\\n  position: relative;\\n}\\n.white-key {\\n  background: #f1f2f3;\\n  border-bottom: 14px solid #c9c9c9;\\n  height: 250px;\\n  width: 60px;\\n}\\n.black-key {\\n  width: 40px;\\n  background: #222;\\n  border-bottom: 20px solid #000;\\n  height: 180px;\\n  z-index: 1;\\n}\\n.piano .db {\\n  margin-left: -20px;\\n}\\n.piano .d {\\n  margin-left: -40px;\\n}\\n.piano .eb {\\n  margin-left: -60px;\\n}\\n.piano .e {\\n  margin-left: -80px;\\n}\\n.piano .f {\\n  margin-left: -80px;\\n}\\n.piano .gb {\\n  margin-left: -100px;\\n}\\n.piano .g {\\n  margin-left: -120px;\\n}\\n.piano .ab {\\n  margin-left: -140px;\\n}\\n.piano .a {\\n  margin-left: -160px;\\n}\\n.piano .bb {\\n  margin-left: -180px;\\n}\\n.piano .b {\\n  margin-left: -200px;\\n}\\n.piano .key::after {\\n  content: '';\\n  font-family: sans-serif;\\n  font-weight: bold;\\n  font-size: 10px;\\n}\\n.piano .white-key::after {\\n  color: #f1f2f3;\\n}\\n.piano .black-key::after {\\n  color: #222;\\n}\\n.octave .highlight::after {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 15px;\\n  -webkit-border-radius: 15px;\\n  background: #00aeef;\\n  position: absolute;\\n  left: 50%;\\n  margin-left: -15px;\\n  bottom: 8px;\\n  box-shadow: 0 0 5px #333;\\n  color: black;\\n}\\n.octave .rootNote::after {\\n  background: #00dab8;\\n}\\n@media (max-width: 767px) {\\n  .piano {\\n    grid-template-columns: repeat(1, 420px);\\n  }\\n  .octave:not(:first-child) {\\n    display: none;\\n  }\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9tb2R1bGVzL1BpYW5vL1BpYW5vLmxlc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QaWFuby9QaWFuby5sZXNzPzVkNTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5zdHJ1bWVudCAuZGI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdEYicgIWltcG9ydGFudDtcXG59XFxuLmluc3RydW1lbnQgLmQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdEJyAhaW1wb3J0YW50O1xcbn1cXG4uaW5zdHJ1bWVudCAuZWI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdFYicgIWltcG9ydGFudDtcXG59XFxuLmluc3RydW1lbnQgLmU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdFJyAhaW1wb3J0YW50O1xcbn1cXG4uaW5zdHJ1bWVudCAuZjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ0YnICFpbXBvcnRhbnQ7XFxufVxcbi5pbnN0cnVtZW50IC5nYjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ0diJyAhaW1wb3J0YW50O1xcbn1cXG4uaW5zdHJ1bWVudCAuZzo6YWZ0ZXIge1xcbiAgY29udGVudDogJ0cnICFpbXBvcnRhbnQ7XFxufVxcbi5pbnN0cnVtZW50IC5hYjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ0FiJyAhaW1wb3J0YW50O1xcbn1cXG4uaW5zdHJ1bWVudCAuYTo6YWZ0ZXIge1xcbiAgY29udGVudDogJ0EnICFpbXBvcnRhbnQ7XFxufVxcbi5pbnN0cnVtZW50IC5iYjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ0JiJyAhaW1wb3J0YW50O1xcbn1cXG4uaW5zdHJ1bWVudCAuYjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ0InICFpbXBvcnRhbnQ7XFxufVxcbi5pbnN0cnVtZW50IC5jOjphZnRlciB7XFxuICBjb250ZW50OiAnQycgIWltcG9ydGFudDtcXG59XFxuLnBpYW5vIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA0MjBweCk7XFxufVxcbi5vY3RhdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCA0MHB4IDYwcHggNDBweCA2MHB4IDYwcHggNDBweCA2MHB4IDQwcHggNjBweCA0MHB4IDYwcHg7XFxufVxcbi5waWFubyAua2V5IHtcXG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiAzcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogM3B4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi53aGl0ZS1rZXkge1xcbiAgYmFja2dyb3VuZDogI2YxZjJmMztcXG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgI2M5YzljOTtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuLmJsYWNrLWtleSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLnBpYW5vIC5kYiB7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxufVxcbi5waWFubyAuZCB7XFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxufVxcbi5waWFubyAuZWIge1xcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcbn1cXG4ucGlhbm8gLmUge1xcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xcbn1cXG4ucGlhbm8gLmYge1xcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xcbn1cXG4ucGlhbm8gLmdiIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XFxufVxcbi5waWFubyAuZyB7XFxuICBtYXJnaW4tbGVmdDogLTEyMHB4O1xcbn1cXG4ucGlhbm8gLmFiIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTQwcHg7XFxufVxcbi5waWFubyAuYSB7XFxuICBtYXJnaW4tbGVmdDogLTE2MHB4O1xcbn1cXG4ucGlhbm8gLmJiIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTgwcHg7XFxufVxcbi5waWFubyAuYiB7XFxuICBtYXJnaW4tbGVmdDogLTIwMHB4O1xcbn1cXG4ucGlhbm8gLmtleTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4ucGlhbm8gLndoaXRlLWtleTo6YWZ0ZXIge1xcbiAgY29sb3I6ICNmMWYyZjM7XFxufVxcbi5waWFubyAuYmxhY2sta2V5OjphZnRlciB7XFxuICBjb2xvcjogIzIyMjtcXG59XFxuLm9jdGF2ZSAuaGlnaGxpZ2h0OjphZnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogIzAwYWVlZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG4gIGJvdHRvbTogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMzMzO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ub2N0YXZlIC5yb290Tm90ZTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogIzAwZGFiODtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAucGlhbm8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCA0MjBweCk7XFxuICB9XFxuICAub2N0YXZlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/modules/Piano/Piano.less\n");

/***/ }),

/***/ "./src/modules/Piano/Piano.less":
/*!**************************************!*\
  !*** ./src/modules/Piano/Piano.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./Piano.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/modules/Piano/Piano.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9QaWFuby9QaWFuby5sZXNzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUGlhbm8vUGlhbm8ubGVzcz8wMGFiIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QaWFuby5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QaWFuby5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGlhbm8ubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Piano/Piano.less\n");

/***/ }),

/***/ "./src/modules/Piano/PianoKey.js":
/*!***************************************!*\
  !*** ./src/modules/Piano/PianoKey.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n\n\nvar PianoKey = function PianoKey(_ref) {\n  var keyObj = _ref.keyObj;\n  // {label: \"D\", name: \"d\", color: \"white\", note: \"d2\", highlight: true}\n  var className = 'key ' + keyObj.color + '-key ' + keyObj.note.replace(/\\d+/, '');\n\n  if (keyObj.highlight) {\n    className += ' highlight';\n  }\n\n  if (keyObj.rootNote) {\n    className += ' rootNote';\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: className,\n    key: keyObj.note\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PianoKey);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9QaWFuby9QaWFub0tleS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BpYW5vL1BpYW5vS2V5LmpzP2Q3Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGlhbm9LZXkgPSAoeyBrZXlPYmogfSkgPT4ge1xuXHQvLyB7bGFiZWw6IFwiRFwiLCBuYW1lOiBcImRcIiwgY29sb3I6IFwid2hpdGVcIiwgbm90ZTogXCJkMlwiLCBoaWdobGlnaHQ6IHRydWV9XG5cdHZhciBjbGFzc05hbWUgPSAna2V5ICcgKyBrZXlPYmouY29sb3IgKyAnLWtleSAnICsga2V5T2JqLm5vdGUucmVwbGFjZSgvXFxkKy8sICcnKTtcblx0aWYgKGtleU9iai5oaWdobGlnaHQpIHtcblx0XHRjbGFzc05hbWUgKz0gJyBoaWdobGlnaHQnO1xuXHR9XG5cdGlmIChrZXlPYmoucm9vdE5vdGUpIHtcblx0XHRjbGFzc05hbWUgKz0gJyByb290Tm90ZSc7XG5cdH1cblx0cmV0dXJuKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17a2V5T2JqLm5vdGV9PjwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGlhbm9LZXk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Piano/PianoKey.js\n");

/***/ }),

/***/ "./src/modules/Piano/index.js":
/*!************************************!*\
  !*** ./src/modules/Piano/index.js ***!
  \************************************/
/*! exports provided: Component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact-compat/dist/preact-compat.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _PianoKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PianoKey.js */ \"./src/modules/Piano/PianoKey.js\");\n/* harmony import */ var _Piano_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Piano.less */ \"./src/modules/Piano/Piano.less\");\n/* harmony import */ var _Piano_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Piano_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Piano = function Piano(_ref) {\n  var octavesOfPianoNotes = _ref.octavesOfPianoNotes;\n  var octs = octavesOfPianoNotes.map(function (oct, idx) {\n    var keys = oct.map(function (k) {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_PianoKey_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        keyObj: k,\n        key: k.note\n      });\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"octave\",\n      key: idx\n    }, keys);\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"instrument\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"piano\"\n  }, octs));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    octavesOfPianoNotes: state.octavesOfPianoNotes\n  };\n}; // export default connect(mapStateToProps)(Piano);\n\n\nvar Component = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Piano);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Component: Component\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9QaWFuby9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BpYW5vL2luZGV4LmpzP2E3MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUGlhbm9LZXkgZnJvbSAnLi9QaWFub0tleS5qcyc7XG5pbXBvcnQgJy4vUGlhbm8ubGVzcyc7XG5cbmNvbnN0IFBpYW5vID0gKHsgb2N0YXZlc09mUGlhbm9Ob3RlcyB9KSA9PiB7XG5cdGNvbnN0IG9jdHMgPSBvY3RhdmVzT2ZQaWFub05vdGVzLm1hcCgob2N0LCBpZHgpID0+IHtcblx0XHR2YXIga2V5cyA9IG9jdC5tYXAoXG5cdFx0XHRrID0+IDxQaWFub0tleSBrZXlPYmo9e2t9IGtleT17ay5ub3RlfSAvPlxuXHRcdCk7XG5cdFx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm9jdGF2ZVwiIGtleT17aWR4fT57a2V5c308L2Rpdj4pO1xuXHR9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zdHJ1bWVudFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwaWFub1wiPntvY3RzfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcblx0b2N0YXZlc09mUGlhbm9Ob3Rlczogc3RhdGUub2N0YXZlc09mUGlhbm9Ob3Rlc1xufSlcblxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBpYW5vKTtcbmV4cG9ydCBjb25zdCBDb21wb25lbnQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGlhbm8pO1xuZXhwb3J0IGRlZmF1bHQge0NvbXBvbmVudH07XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Piano/index.js\n");

/***/ })

}]);