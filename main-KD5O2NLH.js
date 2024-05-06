import {
  APP_INITIALIZER,
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  ComponentPortal,
  ConnectionPositionPair,
  DIALOG_DATA,
  DOCUMENT,
  Dialog,
  Directive,
  ElementRef,
  EventEmitter,
  FxchButtonComponent,
  FxchIconComponent,
  HammerModule,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NavigationEnd,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  Overlay,
  Platform,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Subject,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  __commonJS,
  __decorate,
  __toESM,
  bootstrapApplication,
  filter,
  fromEvent,
  importProvidersFrom,
  map,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-A7OG5Z2C.js";

// node_modules/hammerjs/hammer.js
var require_hammer = __commonJS({
  "node_modules/hammerjs/hammer.js"(exports, module) {
    "use strict";
    (function(window2, document2, exportName, undefined2) {
      "use strict";
      var VENDOR_PREFIXES = ["", "webkit", "Moz", "MS", "ms", "o"];
      var TEST_ELEMENT = document2.createElement("div");
      var TYPE_FUNCTION = "function";
      var round = Math.round;
      var abs = Math.abs;
      var now = Date.now;
      function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
      }
      function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
          each(arg, context[fn], context);
          return true;
        }
        return false;
      }
      function each(obj, iterator, context) {
        var i;
        if (!obj) {
          return;
        }
        if (obj.forEach) {
          obj.forEach(iterator, context);
        } else if (obj.length !== undefined2) {
          i = 0;
          while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
          }
        } else {
          for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
          }
        }
      }
      function deprecate(method, name, message) {
        var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
        return function() {
          var e = new Error("get-stack-trace");
          var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
          var log = window2.console && (window2.console.warn || window2.console.log);
          if (log) {
            log.call(window2.console, deprecationMessage, stack);
          }
          return method.apply(this, arguments);
        };
      }
      var assign;
      if (typeof Object.assign !== "function") {
        assign = function assign2(target) {
          if (target === undefined2 || target === null) {
            throw new TypeError("Cannot convert undefined or null to object");
          }
          var output = Object(target);
          for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined2 && source !== null) {
              for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                  output[nextKey] = source[nextKey];
                }
              }
            }
          }
          return output;
        };
      } else {
        assign = Object.assign;
      }
      var extend = deprecate(function extend2(dest, src, merge2) {
        var keys = Object.keys(src);
        var i = 0;
        while (i < keys.length) {
          if (!merge2 || merge2 && dest[keys[i]] === undefined2) {
            dest[keys[i]] = src[keys[i]];
          }
          i++;
        }
        return dest;
      }, "extend", "Use `assign`.");
      var merge = deprecate(function merge2(dest, src) {
        return extend(dest, src, true);
      }, "merge", "Use `assign`.");
      function inherit(child, base, properties) {
        var baseP = base.prototype, childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;
        if (properties) {
          assign(childP, properties);
        }
      }
      function bindFn(fn, context) {
        return function boundFn() {
          return fn.apply(context, arguments);
        };
      }
      function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) {
          return val.apply(args ? args[0] || undefined2 : undefined2, args);
        }
        return val;
      }
      function ifUndefined(val1, val2) {
        return val1 === undefined2 ? val2 : val1;
      }
      function addEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
          target.addEventListener(type, handler, false);
        });
      }
      function removeEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
          target.removeEventListener(type, handler, false);
        });
      }
      function hasParent(node, parent) {
        while (node) {
          if (node == parent) {
            return true;
          }
          node = node.parentNode;
        }
        return false;
      }
      function inStr(str, find) {
        return str.indexOf(find) > -1;
      }
      function splitStr(str) {
        return str.trim().split(/\s+/g);
      }
      function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) {
          return src.indexOf(find);
        } else {
          var i = 0;
          while (i < src.length) {
            if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
              return i;
            }
            i++;
          }
          return -1;
        }
      }
      function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
      }
      function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;
        while (i < src.length) {
          var val = key ? src[i][key] : src[i];
          if (inArray(values, val) < 0) {
            results.push(src[i]);
          }
          values[i] = val;
          i++;
        }
        if (sort) {
          if (!key) {
            results = results.sort();
          } else {
            results = results.sort(function sortUniqueArray(a, b) {
              return a[key] > b[key];
            });
          }
        }
        return results;
      }
      function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;
        while (i < VENDOR_PREFIXES.length) {
          prefix = VENDOR_PREFIXES[i];
          prop = prefix ? prefix + camelProp : property;
          if (prop in obj) {
            return prop;
          }
          i++;
        }
        return undefined2;
      }
      var _uniqueId = 1;
      function uniqueId() {
        return _uniqueId++;
      }
      function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window2;
      }
      var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
      var SUPPORT_TOUCH = "ontouchstart" in window2;
      var SUPPORT_POINTER_EVENTS = prefixed(window2, "PointerEvent") !== undefined2;
      var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
      var INPUT_TYPE_TOUCH = "touch";
      var INPUT_TYPE_PEN = "pen";
      var INPUT_TYPE_MOUSE = "mouse";
      var INPUT_TYPE_KINECT = "kinect";
      var COMPUTE_INTERVAL = 25;
      var INPUT_START = 1;
      var INPUT_MOVE = 2;
      var INPUT_END = 4;
      var INPUT_CANCEL = 8;
      var DIRECTION_NONE = 1;
      var DIRECTION_LEFT = 2;
      var DIRECTION_RIGHT = 4;
      var DIRECTION_UP = 8;
      var DIRECTION_DOWN = 16;
      var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
      var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
      var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
      var PROPS_XY = ["x", "y"];
      var PROPS_CLIENT_XY = ["clientX", "clientY"];
      function Input2(manager, callback) {
        var self2 = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget;
        this.domHandler = function(ev) {
          if (boolOrFn(manager.options.enable, [manager])) {
            self2.handler(ev);
          }
        };
        this.init();
      }
      Input2.prototype = {
        /**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */
        handler: function() {
        },
        /**
         * bind the events
         */
        init: function() {
          this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },
        /**
         * unbind the events
         */
        destroy: function() {
          this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
      };
      function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;
        if (inputClass) {
          Type = inputClass;
        } else if (SUPPORT_POINTER_EVENTS) {
          Type = PointerEventInput;
        } else if (SUPPORT_ONLY_TOUCH) {
          Type = TouchInput;
        } else if (!SUPPORT_TOUCH) {
          Type = MouseInput;
        } else {
          Type = TouchMouseInput;
        }
        return new Type(manager, inputHandler);
      }
      function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;
        if (isFirst) {
          manager.session = {};
        }
        input.eventType = eventType;
        computeInputData(manager, input);
        manager.emit("hammer.input", input);
        manager.recognize(input);
        manager.session.prevInput = input;
      }
      function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length;
        if (!session.firstInput) {
          session.firstInput = simpleCloneInputData(input);
        }
        if (pointersLength > 1 && !session.firstMultiple) {
          session.firstMultiple = simpleCloneInputData(input);
        } else if (pointersLength === 1) {
          session.firstMultiple = false;
        }
        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input);
        var target = manager.element;
        if (hasParent(input.srcEvent.target, target)) {
          target = input.srcEvent.target;
        }
        input.target = target;
      }
      function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};
        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
          prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
          };
          offset = session.offsetDelta = {
            x: center.x,
            y: center.y
          };
        }
        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
      }
      function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined2)) {
          var deltaX = input.deltaX - last.deltaX;
          var deltaY = input.deltaY - last.deltaY;
          var v = getVelocity(deltaTime, deltaX, deltaY);
          velocityX = v.x;
          velocityY = v.y;
          velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
          direction = getDirection(deltaX, deltaY);
          session.lastInterval = input;
        } else {
          velocity = last.velocity;
          velocityX = last.velocityX;
          velocityY = last.velocityY;
          direction = last.direction;
        }
        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
      }
      function simpleCloneInputData(input) {
        var pointers = [];
        var i = 0;
        while (i < input.pointers.length) {
          pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
          };
          i++;
        }
        return {
          timeStamp: now(),
          pointers,
          center: getCenter(pointers),
          deltaX: input.deltaX,
          deltaY: input.deltaY
        };
      }
      function getCenter(pointers) {
        var pointersLength = pointers.length;
        if (pointersLength === 1) {
          return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
          };
        }
        var x = 0, y = 0, i = 0;
        while (i < pointersLength) {
          x += pointers[i].clientX;
          y += pointers[i].clientY;
          i++;
        }
        return {
          x: round(x / pointersLength),
          y: round(y / pointersLength)
        };
      }
      function getVelocity(deltaTime, x, y) {
        return {
          x: x / deltaTime || 0,
          y: y / deltaTime || 0
        };
      }
      function getDirection(x, y) {
        if (x === y) {
          return DIRECTION_NONE;
        }
        if (abs(x) >= abs(y)) {
          return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }
        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
      }
      function getDistance(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
      }
      function getAngle(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
      }
      function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
      }
      function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
      }
      var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
      };
      var MOUSE_ELEMENT_EVENTS = "mousedown";
      var MOUSE_WINDOW_EVENTS = "mousemove mouseup";
      function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false;
        Input2.apply(this, arguments);
      }
      inherit(MouseInput, Input2, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function MEhandler(ev) {
          var eventType = MOUSE_INPUT_MAP[ev.type];
          if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
          }
          if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
          }
          if (!this.pressed) {
            return;
          }
          if (eventType & INPUT_END) {
            this.pressed = false;
          }
          this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
          });
        }
      });
      var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
      };
      var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT
        // see https://twitter.com/jacobrossi/status/480596438489890816
      };
      var POINTER_ELEMENT_EVENTS = "pointerdown";
      var POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";
      if (window2.MSPointerEvent && !window2.PointerEvent) {
        POINTER_ELEMENT_EVENTS = "MSPointerDown";
        POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
      }
      function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input2.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
      }
      inherit(PointerEventInput, Input2, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function PEhandler(ev) {
          var store = this.store;
          var removePointer = false;
          var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
          var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
          var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
          var isTouch = pointerType == INPUT_TYPE_TOUCH;
          var storeIndex = inArray(store, ev.pointerId, "pointerId");
          if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
              store.push(ev);
              storeIndex = store.length - 1;
            }
          } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
          }
          if (storeIndex < 0) {
            return;
          }
          store[storeIndex] = ev;
          this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType,
            srcEvent: ev
          });
          if (removePointer) {
            store.splice(storeIndex, 1);
          }
        }
      });
      var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
      var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
      function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input2.apply(this, arguments);
      }
      inherit(SingleTouchInput, Input2, {
        handler: function TEhandler(ev) {
          var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
          if (type === INPUT_START) {
            this.started = true;
          }
          if (!this.started) {
            return;
          }
          var touches = normalizeSingleTouches.call(this, ev, type);
          if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
          }
          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);
        if (type & (INPUT_END | INPUT_CANCEL)) {
          all = uniqueArray(all.concat(changed), "identifier", true);
        }
        return [all, changed];
      }
      var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
      function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input2.apply(this, arguments);
      }
      inherit(TouchInput, Input2, {
        handler: function MTEhandler(ev) {
          var type = TOUCH_INPUT_MAP[ev.type];
          var touches = getTouches.call(this, ev, type);
          if (!touches) {
            return;
          }
          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds;
        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
          targetIds[allTouches[0].identifier] = true;
          return [allTouches, allTouches];
        }
        var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
        targetTouches = allTouches.filter(function(touch) {
          return hasParent(touch.target, target);
        });
        if (type === INPUT_START) {
          i = 0;
          while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
          }
        }
        i = 0;
        while (i < changedTouches.length) {
          if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
          }
          if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
          }
          i++;
        }
        if (!changedTargetTouches.length) {
          return;
        }
        return [
          // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
          uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", true),
          changedTargetTouches
        ];
      }
      var DEDUP_TIMEOUT = 2500;
      var DEDUP_DISTANCE = 25;
      function TouchMouseInput() {
        Input2.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
      }
      inherit(TouchMouseInput, Input2, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function TMEhandler(manager, inputEvent, inputData) {
          var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH, isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
          if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
          }
          if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
          } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
          }
          this.callback(manager, inputEvent, inputData);
        },
        /**
         * remove the event listeners
         */
        destroy: function destroy() {
          this.touch.destroy();
          this.mouse.destroy();
        }
      });
      function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
          this.primaryTouch = eventData.changedPointers[0].identifier;
          setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
          setLastTouch.call(this, eventData);
        }
      }
      function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];
        if (touch.identifier === this.primaryTouch) {
          var lastTouch = { x: touch.clientX, y: touch.clientY };
          this.lastTouches.push(lastTouch);
          var lts = this.lastTouches;
          var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
              lts.splice(i, 1);
            }
          };
          setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
      }
      function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
        for (var i = 0; i < this.lastTouches.length; i++) {
          var t = this.lastTouches[i];
          var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
          if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
          }
        }
        return false;
      }
      var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
      var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined2;
      var TOUCH_ACTION_COMPUTE = "compute";
      var TOUCH_ACTION_AUTO = "auto";
      var TOUCH_ACTION_MANIPULATION = "manipulation";
      var TOUCH_ACTION_NONE = "none";
      var TOUCH_ACTION_PAN_X = "pan-x";
      var TOUCH_ACTION_PAN_Y = "pan-y";
      var TOUCH_ACTION_MAP = getTouchActionProps();
      function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
      }
      TouchAction.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function(value) {
          if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
          }
          if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
          }
          this.actions = value.toLowerCase().trim();
        },
        /**
         * just re-set the touchAction value
         */
        update: function() {
          this.set(this.manager.options.touchAction);
        },
        /**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */
        compute: function() {
          var actions = [];
          each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
              actions = actions.concat(recognizer.getTouchAction());
            }
          });
          return cleanTouchActions(actions.join(" "));
        },
        /**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */
        preventDefaults: function(input) {
          var srcEvent = input.srcEvent;
          var direction = input.offsetDirection;
          if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
          }
          var actions = this.actions;
          var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
          var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
          var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
          if (hasNone) {
            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;
            if (isTapPointer && isTapMovement && isTapTouchTime) {
              return;
            }
          }
          if (hasPanX && hasPanY) {
            return;
          }
          if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
            return this.preventSrc(srcEvent);
          }
        },
        /**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */
        preventSrc: function(srcEvent) {
          this.manager.session.prevented = true;
          srcEvent.preventDefault();
        }
      };
      function cleanTouchActions(actions) {
        if (inStr(actions, TOUCH_ACTION_NONE)) {
          return TOUCH_ACTION_NONE;
        }
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        if (hasPanX && hasPanY) {
          return TOUCH_ACTION_NONE;
        }
        if (hasPanX || hasPanY) {
          return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        }
        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
          return TOUCH_ACTION_MANIPULATION;
        }
        return TOUCH_ACTION_AUTO;
      }
      function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) {
          return false;
        }
        var touchMap = {};
        var cssSupports = window2.CSS && window2.CSS.supports;
        ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(val) {
          touchMap[val] = cssSupports ? window2.CSS.supports("touch-action", val) : true;
        });
        return touchMap;
      }
      var STATE_POSSIBLE = 1;
      var STATE_BEGAN = 2;
      var STATE_CHANGED = 4;
      var STATE_ENDED = 8;
      var STATE_RECOGNIZED = STATE_ENDED;
      var STATE_CANCELLED = 16;
      var STATE_FAILED = 32;
      function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null;
        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
      }
      Recognizer.prototype = {
        /**
         * @virtual
         * @type {Object}
         */
        defaults: {},
        /**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */
        set: function(options) {
          assign(this.options, options);
          this.manager && this.manager.touchAction.update();
          return this;
        },
        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) {
            return this;
          }
          var simultaneous = this.simultaneous;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
          }
          return this;
        },
        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, "dropRecognizeWith", this)) {
            return this;
          }
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          delete this.simultaneous[otherRecognizer.id];
          return this;
        },
        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, "requireFailure", this)) {
            return this;
          }
          var requireFail = this.requireFail;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
          }
          return this;
        },
        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) {
            return this;
          }
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          var index = inArray(this.requireFail, otherRecognizer);
          if (index > -1) {
            this.requireFail.splice(index, 1);
          }
          return this;
        },
        /**
         * has require failures boolean
         * @returns {boolean}
         */
        hasRequireFailures: function() {
          return this.requireFail.length > 0;
        },
        /**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */
        canRecognizeWith: function(otherRecognizer) {
          return !!this.simultaneous[otherRecognizer.id];
        },
        /**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */
        emit: function(input) {
          var self2 = this;
          var state = this.state;
          function emit(event) {
            self2.manager.emit(event, input);
          }
          if (state < STATE_ENDED) {
            emit(self2.options.event + stateStr(state));
          }
          emit(self2.options.event);
          if (input.additionalEvent) {
            emit(input.additionalEvent);
          }
          if (state >= STATE_ENDED) {
            emit(self2.options.event + stateStr(state));
          }
        },
        /**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */
        tryEmit: function(input) {
          if (this.canEmit()) {
            return this.emit(input);
          }
          this.state = STATE_FAILED;
        },
        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function() {
          var i = 0;
          while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
              return false;
            }
            i++;
          }
          return true;
        },
        /**
         * update the recognizer
         * @param {Object} inputData
         */
        recognize: function(inputData) {
          var inputDataClone = assign({}, inputData);
          if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
          }
          if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
          }
          this.state = this.process(inputDataClone);
          if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
          }
        },
        /**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */
        process: function(inputData) {
        },
        // jshint ignore:line
        /**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */
        getTouchAction: function() {
        },
        /**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */
        reset: function() {
        }
      };
      function stateStr(state) {
        if (state & STATE_CANCELLED) {
          return "cancel";
        } else if (state & STATE_ENDED) {
          return "end";
        } else if (state & STATE_CHANGED) {
          return "move";
        } else if (state & STATE_BEGAN) {
          return "start";
        }
        return "";
      }
      function directionStr(direction) {
        if (direction == DIRECTION_DOWN) {
          return "down";
        } else if (direction == DIRECTION_UP) {
          return "up";
        } else if (direction == DIRECTION_LEFT) {
          return "left";
        } else if (direction == DIRECTION_RIGHT) {
          return "right";
        }
        return "";
      }
      function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;
        if (manager) {
          return manager.get(otherRecognizer);
        }
        return otherRecognizer;
      }
      function AttrRecognizer() {
        Recognizer.apply(this, arguments);
      }
      inherit(AttrRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof AttrRecognizer
         */
        defaults: {
          /**
           * @type {Number}
           * @default 1
           */
          pointers: 1
        },
        /**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */
        attrTest: function(input) {
          var optionPointers = this.options.pointers;
          return optionPointers === 0 || input.pointers.length === optionPointers;
        },
        /**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */
        process: function(input) {
          var state = this.state;
          var eventType = input.eventType;
          var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
          var isValid = this.attrTest(input);
          if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
          } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
              return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
              return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
          }
          return STATE_FAILED;
        }
      });
      function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
      }
      inherit(PanRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: DIRECTION_ALL
        },
        getTouchAction: function() {
          var direction = this.options.direction;
          var actions = [];
          if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
          }
          if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
          }
          return actions;
        },
        directionTest: function(input) {
          var options = this.options;
          var hasMoved = true;
          var distance = input.distance;
          var direction = input.direction;
          var x = input.deltaX;
          var y = input.deltaY;
          if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
              direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
              hasMoved = x != this.pX;
              distance = Math.abs(input.deltaX);
            } else {
              direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
              hasMoved = y != this.pY;
              distance = Math.abs(input.deltaY);
            }
          }
          input.direction = direction;
          return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function(input) {
          return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function(input) {
          this.pX = input.deltaX;
          this.pY = input.deltaY;
          var direction = directionStr(input.direction);
          if (direction) {
            input.additionalEvent = this.options.event + direction;
          }
          this._super.emit.call(this, input);
        }
      });
      function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }
      inherit(PinchRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: "pinch",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function(input) {
          if (input.scale !== 1) {
            var inOut = input.scale < 1 ? "in" : "out";
            input.additionalEvent = this.options.event + inOut;
          }
          this._super.emit.call(this, input);
        }
      });
      function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
      }
      inherit(PressRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PressRecognizer
         */
        defaults: {
          event: "press",
          pointers: 1,
          time: 251,
          // minimal time of the pointer to be pressed
          threshold: 9
          // a minimal movement is ok, but keep it low
        },
        getTouchAction: function() {
          return [TOUCH_ACTION_AUTO];
        },
        process: function(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTime = input.deltaTime > options.time;
          this._input = input;
          if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
            this.reset();
          } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.time, this);
          } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
          }
          return STATE_FAILED;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function(input) {
          if (this.state !== STATE_RECOGNIZED) {
            return;
          }
          if (input && input.eventType & INPUT_END) {
            this.manager.emit(this.options.event + "up", input);
          } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }
      inherit(RotateRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof RotateRecognizer
         */
        defaults: {
          event: "rotate",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
      });
      function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }
      inherit(SwipeRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
          pointers: 1
        },
        getTouchAction: function() {
          return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function(input) {
          var direction = this.options.direction;
          var velocity;
          if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
          } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
          } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
          }
          return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function(input) {
          var direction = directionStr(input.offsetDirection);
          if (direction) {
            this.manager.emit(this.options.event + direction, input);
          }
          this.manager.emit(this.options.event, input);
        }
      });
      function TapRecognizer() {
        Recognizer.apply(this, arguments);
        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
      }
      inherit(TapRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          // max time between the multi-tap taps
          time: 250,
          // max time of the pointer to be down (like finger on the screen)
          threshold: 9,
          // a minimal movement is ok, but keep it low
          posThreshold: 10
          // a multi-tap can be a bit off the initial position
        },
        getTouchAction: function() {
          return [TOUCH_ACTION_MANIPULATION];
        },
        process: function(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTouchTime = input.deltaTime < options.time;
          this.reset();
          if (input.eventType & INPUT_START && this.count === 0) {
            return this.failTimeout();
          }
          if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
              return this.failTimeout();
            }
            var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
            this.pTime = input.timeStamp;
            this.pCenter = input.center;
            if (!validMultiTap || !validInterval) {
              this.count = 1;
            } else {
              this.count += 1;
            }
            this._input = input;
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
              if (!this.hasRequireFailures()) {
                return STATE_RECOGNIZED;
              } else {
                this._timer = setTimeoutContext(function() {
                  this.state = STATE_RECOGNIZED;
                  this.tryEmit();
                }, options.interval, this);
                return STATE_BEGAN;
              }
            }
          }
          return STATE_FAILED;
        },
        failTimeout: function() {
          this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
          }, this.options.interval, this);
          return STATE_FAILED;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function() {
          if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
      }
      Hammer.VERSION = "2.0.7";
      Hammer.defaults = {
        /**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */
        domEvents: false,
        /**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */
        touchAction: TOUCH_ACTION_COMPUTE,
        /**
         * @type {Boolean}
         * @default true
         */
        enable: true,
        /**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */
        inputTarget: null,
        /**
         * force an input class
         * @type {Null|Function}
         * @default null
         */
        inputClass: null,
        /**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */
        preset: [
          // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
          [RotateRecognizer, { enable: false }],
          [PinchRecognizer, { enable: false }, ["rotate"]],
          [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
          [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ["swipe"]],
          [TapRecognizer],
          [TapRecognizer, { event: "doubletap", taps: 2 }, ["tap"]],
          [PressRecognizer]
        ],
        /**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */
        cssProps: {
          /**
           * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userSelect: "none",
          /**
           * Disable the Windows Phone grippers when pressing an element.
           * @type {String}
           * @default 'none'
           */
          touchSelect: "none",
          /**
           * Disables the default callout shown when you touch and hold a touch target.
           * On iOS, when you touch and hold a touch target such as a link, Safari displays
           * a callout containing information about the link. This property allows you to disable that callout.
           * @type {String}
           * @default 'none'
           */
          touchCallout: "none",
          /**
           * Specifies whether zooming is enabled. Used by IE10>
           * @type {String}
           * @default 'none'
           */
          contentZooming: "none",
          /**
           * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userDrag: "none",
          /**
           * Overrides the highlight color shown when the user taps a link or a JavaScript
           * clickable element in iOS. This property obeys the alpha value, if specified.
           * @type {String}
           * @default 'rgba(0,0,0,0)'
           */
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      };
      var STOP = 1;
      var FORCED_STOP = 2;
      function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function(item) {
          var recognizer = this.add(new item[0](item[1]));
          item[2] && recognizer.recognizeWith(item[2]);
          item[3] && recognizer.requireFailure(item[3]);
        }, this);
      }
      Manager.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function(options) {
          assign(this.options, options);
          if (options.touchAction) {
            this.touchAction.update();
          }
          if (options.inputTarget) {
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
          }
          return this;
        },
        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function(force) {
          this.session.stopped = force ? FORCED_STOP : STOP;
        },
        /**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */
        recognize: function(inputData) {
          var session = this.session;
          if (session.stopped) {
            return;
          }
          this.touchAction.preventDefaults(inputData);
          var recognizer;
          var recognizers = this.recognizers;
          var curRecognizer = session.curRecognizer;
          if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
            curRecognizer = session.curRecognizer = null;
          }
          var i = 0;
          while (i < recognizers.length) {
            recognizer = recognizers[i];
            if (session.stopped !== FORCED_STOP && // 1
            (!curRecognizer || recognizer == curRecognizer || // 2
            recognizer.canRecognizeWith(curRecognizer))) {
              recognizer.recognize(inputData);
            } else {
              recognizer.reset();
            }
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
              curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
          }
        },
        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function(recognizer) {
          if (recognizer instanceof Recognizer) {
            return recognizer;
          }
          var recognizers = this.recognizers;
          for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
              return recognizers[i];
            }
          }
          return null;
        },
        /**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */
        add: function(recognizer) {
          if (invokeArrayArg(recognizer, "add", this)) {
            return this;
          }
          var existing = this.get(recognizer.options.event);
          if (existing) {
            this.remove(existing);
          }
          this.recognizers.push(recognizer);
          recognizer.manager = this;
          this.touchAction.update();
          return recognizer;
        },
        /**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */
        remove: function(recognizer) {
          if (invokeArrayArg(recognizer, "remove", this)) {
            return this;
          }
          recognizer = this.get(recognizer);
          if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);
            if (index !== -1) {
              recognizers.splice(index, 1);
              this.touchAction.update();
            }
          }
          return this;
        },
        /**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */
        on: function(events, handler) {
          if (events === undefined2) {
            return;
          }
          if (handler === undefined2) {
            return;
          }
          var handlers = this.handlers;
          each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
          });
          return this;
        },
        /**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */
        off: function(events, handler) {
          if (events === undefined2) {
            return;
          }
          var handlers = this.handlers;
          each(splitStr(events), function(event) {
            if (!handler) {
              delete handlers[event];
            } else {
              handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
          });
          return this;
        },
        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function(event, data) {
          if (this.options.domEvents) {
            triggerDomEvent(event, data);
          }
          var handlers = this.handlers[event] && this.handlers[event].slice();
          if (!handlers || !handlers.length) {
            return;
          }
          data.type = event;
          data.preventDefault = function() {
            data.srcEvent.preventDefault();
          };
          var i = 0;
          while (i < handlers.length) {
            handlers[i](data);
            i++;
          }
        },
        /**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */
        destroy: function() {
          this.element && toggleCssProps(this, false);
          this.handlers = {};
          this.session = {};
          this.input.destroy();
          this.element = null;
        }
      };
      function toggleCssProps(manager, add) {
        var element = manager.element;
        if (!element.style) {
          return;
        }
        var prop;
        each(manager.options.cssProps, function(value, name) {
          prop = prefixed(element.style, name);
          if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
          } else {
            element.style[prop] = manager.oldCssProps[prop] || "";
          }
        });
        if (!add) {
          manager.oldCssProps = {};
        }
      }
      function triggerDomEvent(event, data) {
        var gestureEvent = document2.createEvent("Event");
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
      }
      assign(Hammer, {
        INPUT_START,
        INPUT_MOVE,
        INPUT_END,
        INPUT_CANCEL,
        STATE_POSSIBLE,
        STATE_BEGAN,
        STATE_CHANGED,
        STATE_ENDED,
        STATE_RECOGNIZED,
        STATE_CANCELLED,
        STATE_FAILED,
        DIRECTION_NONE,
        DIRECTION_LEFT,
        DIRECTION_RIGHT,
        DIRECTION_UP,
        DIRECTION_DOWN,
        DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL,
        DIRECTION_ALL,
        Manager,
        Input: Input2,
        TouchAction,
        TouchInput,
        MouseInput,
        PointerEventInput,
        TouchMouseInput,
        SingleTouchInput,
        Recognizer,
        AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each,
        merge,
        extend,
        assign,
        inherit,
        bindFn,
        prefixed
      });
      var freeGlobal = typeof window2 !== "undefined" ? window2 : typeof self !== "undefined" ? self : {};
      freeGlobal.Hammer = Hammer;
      if (typeof define === "function" && define.amd) {
        define(function() {
          return Hammer;
        });
      } else if (typeof module != "undefined" && module.exports) {
        module.exports = Hammer;
      } else {
        window2[exportName] = Hammer;
      }
    })(window, document, "Hammer");
  }
});

// node_modules/@ngx-translate/http-loader/dist/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
};

// src/app/core/layout/app/services/app.initializer.ts
var initializeApplication = (appService) => {
  return () => new Promise((resolve) => {
    Promise.all([
      appService.initializeSvgSprite(),
      appService.initializeDeviceInfo()
    ]).then(() => resolve(true)).catch(() => resolve(true));
  });
};

// src/app/core/layout/app/services/app.service.ts
var _AppService = class _AppService {
  constructor(document2, platform) {
    this.document = document2;
    this.platform = platform;
  }
  initializeSvgSprite() {
    return new Promise((resolve) => {
      const insertIconsElement = (iconsElementId, icons) => {
        const sprite = document.getElementById(iconsElementId);
        if (sprite !== null) {
          sprite.remove();
        }
        const tempIconsContainerElement = document.createElement("div");
        tempIconsContainerElement.innerHTML = icons;
        const iconsElement = tempIconsContainerElement.firstElementChild;
        if (iconsElement != null) {
          iconsElement.id = iconsElementId;
          document.body.insertAdjacentElement("beforeend", iconsElement);
        }
      };
      const insertIconsElementOnLoaded = (iconsElementId, icons) => {
        if (document.body !== null) {
          insertIconsElement(iconsElementId, icons);
        } else {
          document.addEventListener("DOMContentLoaded", () => insertIconsElement(iconsElementId, icons));
        }
      };
      try {
        fetch("assets/sprites/icons.svg").then((response) => {
          response.text().then((icons) => {
            insertIconsElementOnLoaded("icons-sprite", icons);
            resolve();
          }).catch();
        }).catch();
      } finally {
        resolve();
      }
    });
  }
  initializeDeviceInfo() {
    return new Promise((resolve) => {
      this.document.documentElement.setAttribute("data-useragent", window.navigator.userAgent);
      if (this.platform.ANDROID || this.platform.IOS) {
        this.document.body.classList.add("is-mobile");
      }
      const deviceInfo = [];
      if (this.platform.ANDROID) {
        deviceInfo.push("android");
      }
      if (this.platform.BLINK) {
        deviceInfo.push("blink");
      }
      if (this.platform.EDGE) {
        deviceInfo.push("edge");
      }
      if (this.platform.FIREFOX) {
        deviceInfo.push("firefox");
      }
      if (this.platform.IOS) {
        deviceInfo.push("ios");
      }
      if (this.platform.SAFARI) {
        deviceInfo.push("safari");
      }
      if (this.platform.TRIDENT) {
        deviceInfo.push("trident");
      }
      if (this.platform.WEBKIT) {
        deviceInfo.push("webkit");
      }
      this.document.documentElement.setAttribute("data-device", deviceInfo.join());
      resolve();
    });
  }
};
_AppService.\u0275fac = function AppService_Factory(t) {
  return new (t || _AppService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform));
};
_AppService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppService, factory: _AppService.\u0275fac, providedIn: "root" });
var AppService = _AppService;

// src/app/core/controls/fxch-logo/fxch-logo.component.ts
var _FxchLogoComponent = class _FxchLogoComponent {
};
_FxchLogoComponent.\u0275fac = function FxchLogoComponent_Factory(t) {
  return new (t || _FxchLogoComponent)();
};
_FxchLogoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FxchLogoComponent, selectors: [["fxch-logo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 67 21", "fill", "none", 1, "fxch-logo"], ["d", "M49.8092 19.9423V0.947998H54.3273V8.19439H62.1513V0.947998H67V19.9423H62.1513V12.3665H54.3273V19.9423H49.8092Z", "fill", "white", 2, "fill", "var(--main-logo)"], ["d", "M28.7616 15.2212H23.6925L26.6678 19.8325H32.0675L28.7616 15.2212Z", "fill", "#146EF4", 2, "fill", "var(--accent-logo)"], ["d", "M0 19.7227V0.838135H13.2237V4.79071H4.4079V8.5237H13.2237V12.4763H4.4079V19.7227H0Z", "fill", "white", 2, "fill", "var(--main-logo)"], ["d", "M19.8356 10.1707L13.2238 0.947998H18.6234L22.4804 6.43769L26.2271 0.947998H31.2961L18.1827 19.7227H13.2238L19.8356 10.1707Z", "fill", "white", 2, "fill", "var(--main-logo)"], ["d", "M31.2962 9.51188C31.2962 7.51162 31.9489 5.78516 33.1559 4.18676C34.3629 2.58836 36.0587 1.42426 37.9877 0.869965C39.9167 0.315674 41.9743 0.401249 43.8502 1.11379C45.7261 1.82632 47.3186 3.12719 48.3877 4.82026L45.1247 6.86566C44.5008 5.87771 43.5715 5.11862 42.4769 4.70284C41.3822 4.28706 40.1816 4.23712 39.056 4.56056C37.9304 4.88401 36.9408 5.56329 36.2365 6.496C35.5322 7.4287 35.1513 8.34468 35.1513 9.51188H31.2962Z", "fill", "#146EF4", 2, "fill", "var(--accent-logo)"], ["d", "M31.2962 11.7077C31.2962 13.708 31.9489 15.2148 33.1559 16.8132C34.3629 18.4116 36.0587 19.5757 37.9877 20.13C39.9167 20.6843 41.9743 20.5988 43.8502 19.8862C45.7261 19.1737 47.3186 17.8728 48.3877 16.1797L45.1247 14.1343C44.5008 15.1223 43.5715 15.8814 42.4769 16.2972C41.3822 16.7129 40.1816 16.7629 39.056 16.4394C37.9304 16.116 36.9408 15.4367 36.2365 14.504C35.5322 13.5713 35.1513 12.8749 35.1513 11.7077H31.2962Z", "fill", "white", 2, "fill", "var(--main-logo)"]], template: function FxchLogoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 0);
    \u0275\u0275element(1, "path", 1)(2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n.fxch-logo[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb3JlL2NvbnRyb2xzL2Z4Y2gtbG9nby9meGNoLWxvZ28uY29tcG9uZW50LnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi5meGNoLWxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsQ0FBQTtBQUNJLFdBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */"], changeDetection: 0 });
var FxchLogoComponent = _FxchLogoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FxchLogoComponent, { className: "FxchLogoComponent", filePath: "src\\app\\core\\controls\\fxch-logo\\fxch-logo.component.ts", lineNumber: 11 });
})();

// src/app/core/services/popup/constants/fxch-popup.constants.ts
var OPENED_POPUP_CLASS = "fxch-modal-opened";

// src/app/core/constants/connected-positions.constants.ts
var POPUP_POSITIONS_OVERLAY_Y_TOP = [
  {
    originX: "start",
    originY: "bottom",
    overlayX: "start",
    overlayY: "top"
  },
  {
    originX: "end",
    originY: "bottom",
    overlayX: "end",
    overlayY: "top"
  }
];
var POPUP_POSITIONS_OVERLAY_Y_BOTTOM = [
  {
    originX: "start",
    originY: "top",
    overlayX: "start",
    overlayY: "bottom"
  },
  {
    originX: "end",
    originY: "top",
    overlayX: "end",
    overlayY: "bottom"
  }
];
var POPUP_POSITIONS = [
  ...POPUP_POSITIONS_OVERLAY_Y_TOP,
  ...POPUP_POSITIONS_OVERLAY_Y_BOTTOM
];
var MENU_POSITIONS = [
  new ConnectionPositionPair({ originX: "end", originY: "top" }, { overlayX: "start", overlayY: "top" }),
  new ConnectionPositionPair({ originX: "start", originY: "bottom" }, { overlayX: "start", overlayY: "top" }),
  new ConnectionPositionPair({ originX: "end", originY: "bottom" }, { overlayX: "end", overlayY: "top" }),
  new ConnectionPositionPair({ originX: "start", originY: "top" }, { overlayX: "start", overlayY: "bottom" })
];

// src/app/core/services/popup/fxch-popup.service.ts
var _FxchPopupService = class _FxchPopupService {
  constructor(injector, zone, overlay, dialog) {
    this.injector = injector;
    this.zone = zone;
    this.overlay = overlay;
    this.dialog = dialog;
    this.body = document.querySelector("body");
  }
  openDialog(componentOrTemplate, data, options) {
    const dialogRef = this.createDialog({
      componentOrTemplate,
      hasBackdrop: options?.hasBackdrop,
      backdropClass: "cdk-overlay-dark-backdrop",
      panelClass: options?.replacePanelClassBy ? options?.replacePanelClassBy : "fxch-dialog",
      customClass: options?.customClass,
      data
    });
    return dialogRef;
  }
  openPopup(componentOrTemplate, sourceElement, data, options) {
    const dialogRef = this.createDialog({
      componentOrTemplate,
      hasBackdrop: options?.hasBackdrop,
      backdropClass: "cdk-overlay-transparent-backdrop",
      panelClass: options?.replacePanelClassBy ? options?.replacePanelClassBy : "fxch-dropdown",
      customClass: options?.customClass,
      data
    });
    this.updatePositionStrategy(dialogRef, sourceElement, options?.positions);
    setTimeout(() => this.updatePositionStrategy(dialogRef, sourceElement, options?.positions));
    return dialogRef;
  }
  openPopupv2(componentOrTemplate, sourceElement, data, options) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      backdropClass: "cdk-overlay-transparent-backdrop",
      panelClass: options?.replacePanelClassBy ? options?.replacePanelClassBy : "fxch-dropdown",
      positionStrategy: this.overlay.position().flexibleConnectedTo(sourceElement).withPositions(options?.positions ?? POPUP_POSITIONS).withPush(true)
    });
    const localInjector = Injector.create({
      providers: [
        { provide: DIALOG_DATA, useValue: data }
      ],
      parent: this.injector
    });
    overlayRef.backdropClick().pipe(take(1)).subscribe(() => overlayRef.detach());
    const portal = new ComponentPortal(componentOrTemplate, null, localInjector);
    overlayRef.attach(portal);
    return overlayRef;
  }
  updatePositionStrategy(dialogRef, sourceElement, positions) {
    dialogRef.overlayRef.updatePositionStrategy(this.overlay.position().flexibleConnectedTo(sourceElement).withPositions(positions ?? POPUP_POSITIONS).withPush(true));
  }
  createDialog(config) {
    return this.zone.run(() => {
      if (!this.body?.classList.contains(OPENED_POPUP_CLASS)) {
        this.body?.classList.add(OPENED_POPUP_CLASS);
      }
      const classes = config.customClass == null ? [config.panelClass] : typeof config.customClass === "string" ? [config.panelClass, config.customClass] : [config.panelClass, ...config.customClass];
      const dialogRef = this.dialog.open(config.componentOrTemplate, {
        hasBackdrop: config.hasBackdrop != null ? config.hasBackdrop : true,
        backdropClass: config.backdropClass,
        panelClass: classes,
        autoFocus: false,
        data: config.data
      });
      dialogRef.closed.pipe(take(1)).subscribe(() => {
        if (this.dialog.openDialogs.length === 0) {
          this.body?.classList.remove(OPENED_POPUP_CLASS);
        }
      });
      return dialogRef;
    });
  }
};
_FxchPopupService.\u0275fac = function FxchPopupService_Factory(t) {
  return new (t || _FxchPopupService)(\u0275\u0275inject(Injector), \u0275\u0275inject(NgZone), \u0275\u0275inject(Overlay), \u0275\u0275inject(Dialog));
};
_FxchPopupService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchPopupService, factory: _FxchPopupService.\u0275fac, providedIn: "root" });
var FxchPopupService = _FxchPopupService;

// src/app/contact-modal/contact-modal.service.ts
var _ContactModalService = class _ContactModalService {
  constructor(fxchPopupService) {
    this.fxchPopupService = fxchPopupService;
  }
  openContacts() {
    void import("./chunk-RYM3SJCY.js").then(({ ContactModalComponent }) => this.fxchPopupService.openDialog(ContactModalComponent, void 0, { customClass: "fxch-contact-dialog" }));
  }
};
_ContactModalService.\u0275fac = function ContactModalService_Factory(t) {
  return new (t || _ContactModalService)(\u0275\u0275inject(FxchPopupService));
};
_ContactModalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactModalService, factory: _ContactModalService.\u0275fac, providedIn: "root" });
var ContactModalService = _ContactModalService;

// src/app/promo/promo.component.ts
var _PromoComponent = class _PromoComponent {
  constructor(contactModalService) {
    this.contactModalService = contactModalService;
  }
  openContacts() {
    this.contactModalService.openContacts();
  }
};
_PromoComponent.\u0275fac = function PromoComponent_Factory(t) {
  return new (t || _PromoComponent)(\u0275\u0275directiveInject(ContactModalService));
};
_PromoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromoComponent, selectors: [["promo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 21, consts: [[1, "fxch-promo-wrap"], [1, "fxch-promo"], [1, "fxch-promo-content"], [1, "fxch-promo-title-wrap"], [1, "fxch-promo-title"], [1, "fxch-promo-text"], [1, "fxch-promo-action", 3, "appearanceType", "color", "text", "iconName", "onClick"], [1, "fxch-promo-decoration-wrap"], [1, "fxch-promo-decoration"], ["viewBox", "0 0 808 476", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "fxch-promo-decoration-top"], ["x", "625.401", "y", "1.23765", "width", "196.913", "height", "75.1492", "rx", "8.66355", "stroke", "var(--f-divider)", "stroke-width", "1"], ["x", "313.381", "y", "1.23765", "width", "196.913", "height", "75.1492", "rx", "8.66355", "stroke", "var(--f-divider)", "stroke-width", "1"], ["x", "1.36131", "y", "1.23765", "width", "196.913", "height", "75.1492", "rx", "8.66355", "stroke", "var(--f-divider)", "stroke-width", "1"], ["d", "M723.858 81.6245V102C723.858 115.255 713.113 126 699.858 126H516.854C503.599 126 492.854 136.745 492.854 150L492.854 473", "stroke", "var(--f-divider)", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M723.858 81.6245V102C723.858 115.255 713.113 126 699.858 126H516.854C503.599 126 492.854 136.745 492.854 150L492.854 473", "stroke", "url(#top-right-line)", "stroke-width", "2", "stroke-dasharray", "100 700", "stroke-dashoffset", "0"], ["attributeName", "stroke-dashoffset", "from", "800", "to", "0", "dur", "2.2s", "repeatCount", "indefinite"], ["d", "M411.444 81.6245V473", "stroke", "var(--f-divider)", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M411.444 81.6245V473", "stroke", "var(--d-color-first-500)", "stroke-width", "2", "stroke-dasharray", "100 400", "stroke-dashoffset", "0"], ["attributeName", "stroke-dashoffset", "from", "500", "to", "0", "dur", "1.8s", "repeatCount", "indefinite"], ["d", "M99.8178 81.6245V141C99.8178 154.255 110.563 165 123.818 165H310.431C323.686 165 334.431 175.745 334.431 189L334.431 474.404", "stroke", "var(--f-divider)", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M99.8178 81.6245V141C99.8178 154.255 110.563 165 123.818 165H310.431C323.686 165 334.431 175.745 334.431 189L334.431 474.404", "fill", "none", "stroke", "url(#top-left-line)", "stroke-width", "2", "stroke-dasharray", "100 700", "stroke-dashoffset", "0"], ["attributeName", "stroke-dashoffset", "from", "800", "to", "0", "dur", "2.4s", "repeatCount", "indefinite"], ["id", "top-right-line", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "var(--d-color-second-500)", "stop-opacity", "0"], ["offset", "50%", 2, "stop-color", "var(--d-color-second-500)", "stop-opacity", "1"], ["offset", "100%", 2, "stop-color", "var(--d-color-second-500)", "stop-opacity", "0"], ["id", "top-left-line", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "var(--accent-500)", "stop-opacity", "0"], ["offset", "50%", 2, "stop-color", "var(--accent-500)", "stop-opacity", "1"], ["offset", "100%", 2, "stop-color", "var(--accent-500)", "stop-opacity", "0"], [1, "fxch-promo-decoration-block-wrap"], [1, "fxch-promo-decoration-block", 3, "title"], [1, "fxch-promo-decoration-block-icon"], ["viewBox", "0 0 869 393", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "fxch-promo-decoration-bottom"], ["d", "M867.922 392V1.05737", "stroke", "var(--f-divider)", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M867.922 392V1.05737", "stroke", "var(--d-color-second-500)", "stroke-width", "2", "stroke-dasharray", "100 400", "stroke-dashoffset", "0"], ["attributeName", "stroke-dashoffset", "from", "0", "to", "500", "dur", "1.8s", "repeatCount", "indefinite"], ["d", "M435.5 392V253C435.5 239.745 446.245 229 459.5 229H734.062C747.316 229 758.062 218.255 758.062 205V1.02295", "stroke", "var(--f-divider)", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M435.5 392V253C435.5 239.745 446.245 229 459.5 229H734.062C747.316 229 758.062 218.255 758.062 205V1.02295", "stroke", "url(#bottom-center-line)", "stroke-width", "2", "stroke-dasharray", "100 700", "stroke-dashoffset", "0"], ["attributeName", "stroke-dashoffset", "from", "0", "to", "800", "dur", "2.2s", "repeatCount", "indefinite"], ["d", "M1.5 392V180C1.5 166.745 12.2452 156 25.5 156H628.685C641.94 156 652.685 145.255 652.685 132V2.28589", "stroke", "var(--f-divider)", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1.5 392V180C1.5 166.745 12.2452 156 25.5 156H628.685C641.94 156 652.685 145.255 652.685 132V2.28589", "stroke", "url(#bottom-left-line)", "stroke-width", "2", "stroke-dasharray", "100 1200", "stroke-dashoffset", "0"], ["attributeName", "stroke-dashoffset", "from", "0", "to", "1300", "dur", "2.4s", "repeatCount", "indefinite"], ["id", "bottom-center-line", "x1", "50%", "y1", "0%", "x2", "50%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "var(--d-color-first-600)", "stop-opacity", "0"], ["offset", "50%", 2, "stop-color", "var(--d-color-first-500)", "stop-opacity", "1"], ["offset", "100%", 2, "stop-color", "var(--d-color-first-600)", "stop-opacity", "0"], ["id", "bottom-left-line", "x1", "50%", "y1", "0%", "x2", "50%", "y2", "100%"]], template: function PromoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 4);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 5);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "fxch-button", 6);
    \u0275\u0275listener("onClick", function PromoComponent_Template_fxch_button_onClick_16_listener() {
      return ctx.openContacts();
    });
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 7)(19, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 9);
    \u0275\u0275element(21, "rect", 10)(22, "rect", 11)(23, "rect", 12)(24, "path", 13);
    \u0275\u0275elementStart(25, "path", 14);
    \u0275\u0275element(26, "animate", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "path", 16);
    \u0275\u0275elementStart(28, "path", 17);
    \u0275\u0275element(29, "animate", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "path", 19);
    \u0275\u0275elementStart(31, "path", 20);
    \u0275\u0275element(32, "animate", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "defs")(34, "linearGradient", 22);
    \u0275\u0275element(35, "stop", 23)(36, "stop", 24)(37, "stop", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "linearGradient", 26);
    \u0275\u0275element(39, "stop", 27)(40, "stop", 28)(41, "stop", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 30)(43, "div", 31);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275element(45, "fxch-logo", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 33);
    \u0275\u0275element(47, "path", 34);
    \u0275\u0275elementStart(48, "path", 35);
    \u0275\u0275element(49, "animate", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "path", 37);
    \u0275\u0275elementStart(51, "path", 38);
    \u0275\u0275element(52, "animate", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "path", 40);
    \u0275\u0275elementStart(54, "path", 41);
    \u0275\u0275element(55, "animate", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "defs")(57, "linearGradient", 43);
    \u0275\u0275element(58, "stop", 44)(59, "stop", 45)(60, "stop", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "linearGradient", 47);
    \u0275\u0275element(62, "stop", 27)(63, "stop", 28)(64, "stop", 29);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "PROMO.TITLES.TRADE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "PROMO.TITLES.CONFIRM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "PROMO.TITLES.SETTLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "PROMO.MAIN_TEXT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("appearanceType", "flat")("color", "accent")("text", \u0275\u0275pipeBind1(17, 17, "PROMO.TITLES.GET_IN_TOUCH"))("iconName", "arrow-alt-right");
    \u0275\u0275advance(27);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 19, "SLOGAN"));
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  FxchLogoComponent,
  FxchButtonComponent
], styles: ["\n\n.fxch-promo[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fxch-promo-wrap[_ngcontent-%COMP%] {\n  max-width: var(--width);\n  margin: 0 auto;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-wrap[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n.fxch-promo-content[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 48px;\n  left: 0;\n  top: 0;\n  width: calc(50% + 80px);\n  max-width: 827px;\n  padding: 0 var(--padding-inline);\n  margin: 0 auto 0 0;\n  z-index: 5;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-content[_ngcontent-%COMP%] {\n    position: relative;\n    width: auto;\n    max-width: 702px;\n    padding-bottom: 60px;\n  }\n}\n.fxch-promo-title[_ngcontent-%COMP%] {\n  font-family: var(--font-titles);\n  font-size: 139px;\n  line-height: 1;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 96px;\n    line-height: 1.2;\n    font-weight: 500;\n  }\n}\n@media screen and (max-width: 960px) {\n  .fxch-promo-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 68px;\n    line-height: 1;\n    font-weight: 500;\n  }\n}\n@media screen and (max-width: 600px) {\n  .fxch-promo-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 56px;\n    line-height: 1.2;\n    font-weight: 500;\n  }\n}\n.fxch-promo-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n}\n.fxch-promo-decoration[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  align-items: start;\n}\n.fxch-promo-decoration-top[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin-left: 44%;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-decoration-top[_ngcontent-%COMP%] {\n    width: 400px;\n    margin-left: auto;\n  }\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-decoration-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    top: 0px;\n    right: 0;\n    left: 0;\n    z-index: 1;\n  }\n}\n@media screen and (max-width: 960px) {\n  .fxch-promo-decoration-wrap[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.fxch-promo-decoration-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 302px;\n  height: 122px;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 15px;\n  cursor: pointer;\n  transition: box-shadow 0.12s linear;\n  will-change: box-shadow;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-decoration-block[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 80px;\n  }\n}\n.fxch-promo-decoration-block-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 800px;\n  margin-left: 45%;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-decoration-block-wrap[_ngcontent-%COMP%] {\n    width: 200px;\n    margin-left: auto;\n    margin-right: 90px;\n  }\n}\n.fxch-promo-decoration-block-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 104px;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-decoration-block-icon[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n}\n.fxch-promo-decoration-bottom[_ngcontent-%COMP%] {\n  max-width: 869px;\n  width: 60%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-promo-decoration-bottom[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wcm9tby9wcm9tby5jb21wb25lbnQuc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi9icmVha3BvaW50Lm1peGluLnNjc3MiLCAic3JjL2FwcC9jb21tb24vbWl4aW4vdHlwb2dyYXBoeS5taXhpbi5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJAaW1wb3J0IFwiLi4vY29tbW9uL21peGluL21peGlucy5taXhpbi5zY3NzXCI7XHJcblxyXG4uZnhjaC1wcm9tbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICAgIG1heC13aWR0aDogdmFyKC0td2lkdGgpO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICByb3ctZ2FwOiA0OHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSArIDgwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogODI3cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLWlubGluZSk7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcImxnXCIpIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDJweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJoMlwiKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwiaDNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWwtbWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJ4c1wiKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWwtc21cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQtbGdcIik7XHJcbiAgICB9XHJcbiAgICAmLWRlY29yYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICAmLXRvcCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXdyYXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibGdcIikge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1ibG9jayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjEycyBsaW5lYXI7XHJcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibGdcIikge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibGdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcImxnXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJvdHRvbSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODY5cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibGdcIikge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwgIkBtaXhpbiBmb250LXN0eWxlcygkdHlwb2dyYXBoeSkge1xyXG4gICAgQGlmICgkdHlwb2dyYXBoeSA9PSAnaDEnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDI3OXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gyJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLW1kJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXNtJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwteHMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14bCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1sZycpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXNtJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhzJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxZQUFBOztBQUNBLENBQUE7QUFDSSxhQUFBLElBQUE7QUFDQSxVQUFBLEVBQUE7O0FDVUEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURaSixHQUFBO0FBSVEsY0FBQTs7O0FBR1IsQ0FBQTtBQUNJLFlBQUE7QUFDQSxXQUFBO0FBQ0EseUJBQUE7QUFDQSxXQUFBO0FBQ0EsUUFBQTtBQUNBLE9BQUE7QUFDQSxTQUFBLEtBQUEsSUFBQSxFQUFBO0FBQ0EsYUFBQTtBQUNBLFdBQUEsRUFBQSxJQUFBO0FBQ0EsVUFBQSxFQUFBLEtBQUEsRUFBQTtBQUNBLFdBQUE7O0FDTkEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURMSixHQUFBO0FBYVEsY0FBQTtBQUNBLFdBQUE7QUFDQSxlQUFBO0FBQ0Esb0JBQUE7OztBQUdSLENBQUE7QUV0QkksZUFBQSxJQUFBO0FBQ0EsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FGcUJBLGtCQUFBOztBQ2hCQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRGNKLEdBQUE7QUVoQkksaUJBQUEsSUFBQTtBQUNBLGVBQUE7QUFDQSxpQkFBQTtBQUNBLGlCQUFBOzs7QUREQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRGNKLEdBQUE7QUVWSSxpQkFBQSxJQUFBO0FBQ0EsZUFBQTtBQUNBLGlCQUFBO0FBQ0EsaUJBQUE7OztBRFBBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEY0osR0FBQTtBRUpJLGlCQUFBLElBQUE7QUFDQSxlQUFBO0FBQ0EsaUJBQUE7QUFDQSxpQkFBQTs7O0FGY0osQ0FBQTtBRU1JLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTs7QUZMSixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBO0FBQ0EsZUFBQTs7QUFDQSxDQUFBO0FBQ0ksYUFBQTtBQUNBLGVBQUE7O0FDcENKLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEa0NBLEdBQUE7QUFJUSxXQUFBO0FBQ0EsaUJBQUE7OztBQ3ZDUixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRDBDQSxHQUFBO0FBRVEsY0FBQTtBQUNBLGFBQUE7QUFDQSxTQUFBO0FBQ0EsV0FBQTtBQUNBLFVBQUE7QUFDQSxhQUFBOzs7QUNqRFIsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QUQwQ0EsR0FBQTtBQVVRLGFBQUE7OztBQUdSLENBQUE7QUFDSSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxnQkFBQTtBQUNBLGdCQUFBO0FBQ0EsaUJBQUE7QUFDQSxVQUFBO0FBQ0EsY0FBQSxXQUFBLE1BQUE7QUFDQSxlQUFBOztBQ2xFSixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRHVEQSxHQUFBO0FBYVEsV0FBQTtBQUNBLFlBQUE7OztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsYUFBQTtBQUNBLGVBQUE7O0FDNUVSLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEdUVJLEdBQUE7QUFPUSxXQUFBO0FBQ0EsaUJBQUE7QUFDQSxrQkFBQTs7O0FBR1IsQ0FBQTtBQUNJLFdBQUE7QUFDQSxTQUFBOztBQ3JGUixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRG1GSSxHQUFBO0FBSVEsV0FBQTs7O0FBSVosQ0FBQTtBQUNJLGFBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQSxFQUFBOztBQzlGSixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRDJGQSxHQUFBO0FBS1EsYUFBQTs7OyIsCiAgIm5hbWVzIjogW10KfQo= */"], changeDetection: 0 });
var PromoComponent = _PromoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromoComponent, { className: "PromoComponent", filePath: "src\\app\\promo\\promo.component.ts", lineNumber: 22 });
})();

// src/app/core/services/fxch-is-mobile.service.ts
var _FxchIsMobileService = class _FxchIsMobileService {
  static any() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
};
_FxchIsMobileService.\u0275fac = function FxchIsMobileService_Factory(t) {
  return new (t || _FxchIsMobileService)();
};
_FxchIsMobileService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchIsMobileService, factory: _FxchIsMobileService.\u0275fac, providedIn: "root" });
var FxchIsMobileService = _FxchIsMobileService;

// src/app/core/decorators/debounce.decorator.ts
function Debounce(delay = 300) {
  return function(target, propertyKey, descriptor) {
    const timeoutKey = Symbol();
    const original = descriptor.value;
    descriptor.value = function(...args) {
      clearTimeout(this[timeoutKey]);
      this[timeoutKey] = setTimeout(() => original.apply(this, args), delay);
    };
    return descriptor;
  };
}

// src/app/about-card/about-card.component.ts
var _c0 = ["textInner"];
function AboutCardComponent_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "br");
    \u0275\u0275text(2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.aboutTitleSecondLine, " ");
  }
}
function AboutCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AboutCardComponent_div_6_ng_container_2_Template, 3, 1, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx_r0.aboutTitle, " ");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", !!ctx_r0.aboutTitleSecondLine && ctx_r0.aboutTitleSecondLine !== "");
  }
}
function AboutCardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10, 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.text, " ");
  }
}
var _c1 = (a0, a1) => [a0, a1];
var _c2 = ["*"];
var _AboutCardComponent = class _AboutCardComponent {
  get aboutCardTypeClass() {
    return `fxch-about-card--${this.type}`;
  }
  get isHoverClass() {
    if (this.isHover) {
      return `fxch-about-card--active`;
    } else {
      return "";
    }
  }
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.aboutTitle = "";
    this.aboutTitleSecondLine = "";
    this.text = "";
    this.type = "first";
    this.textInner = null;
    this.isHover = false;
    this.timer = null;
    this.defaultTruncateTimeMs = 500;
  }
  toggleTap() {
    if (!FxchIsMobileService.any()) {
      return;
    }
    this.isHover = !this.isHover;
    this.clearTime();
    this.setClasses();
    this.changeDetectorRef.detectChanges();
  }
  toggleHover() {
    if (FxchIsMobileService.any()) {
      return;
    }
    this.isHover = !this.isHover;
    this.clearTime();
    this.setClasses();
    this.changeDetectorRef.detectChanges();
  }
  setClasses() {
    if (this.isHover) {
      this.textInner?.nativeElement.classList.remove("fxch-about-card-body-text-inner--truncated");
      return;
    }
    this.timer = setTimeout(() => {
      this.clearTime();
      this.textInner?.nativeElement.classList.add("fxch-about-card-body-text-inner--truncated");
      this.changeDetectorRef.detectChanges();
    }, this.defaultTruncateTimeMs);
  }
  clearTime() {
    if (this.timer != null) {
      clearTimeout(this.timer);
    }
  }
};
_AboutCardComponent.\u0275fac = function AboutCardComponent_Factory(t) {
  return new (t || _AboutCardComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_AboutCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutCardComponent, selectors: [["about-card"]], viewQuery: function AboutCardComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textInner = _t.first);
  }
}, inputs: { aboutTitle: "aboutTitle", aboutTitleSecondLine: "aboutTitleSecondLine", text: "text", type: "type" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c2, decls: 8, vars: 9, consts: [[1, "fxch-about-card", 3, "mouseenter", "mouseleave", "tap"], [1, "fxch-about-card-block"], [1, "fxch-about-card-inner"], [1, "fxch-about-card-header"], [1, "fxch-about-card-body"], ["class", "fxch-about-card-body-title", 4, "ngIf"], ["class", "fxch-about-card-body-text", 4, "ngIf"], [1, "fxch-about-card-body-title"], [4, "ngIf"], [1, "fxch-about-card-body-text"], [1, "fxch-about-card-body-text-inner", "fxch-about-card-body-text-inner--truncated"], ["textInner", ""]], template: function AboutCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("mouseenter", function AboutCardComponent_Template_div_mouseenter_0_listener() {
      return ctx.toggleHover();
    })("mouseleave", function AboutCardComponent_Template_div_mouseleave_0_listener() {
      return ctx.toggleHover();
    })("tap", function AboutCardComponent_Template_div_tap_0_listener() {
      return ctx.toggleTap();
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275template(6, AboutCardComponent_div_6_Template, 3, 2, "div", 5)(7, AboutCardComponent_div_7_Template, 4, 1, "div", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap(\u0275\u0275pureFunction2(6, _c1, ctx.aboutCardTypeClass, ctx.isHoverClass));
    \u0275\u0275styleProp("touch-action", "pan-y");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !!ctx.aboutTitle && ctx.aboutTitle !== "");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", !!ctx.text && ctx.text !== "");
  }
}, dependencies: [
  TranslateModule,
  CommonModule,
  NgIf
], styles: ['\n\n.fxch-about-card[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 550px;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1), box-shadow 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: background-color, box-shadow;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-about-card[_ngcontent-%COMP%] {\n    min-height: 380px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .fxch-about-card[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n}\n.fxch-about-card--active[_ngcontent-%COMP%]   .fxch-about-card-body-text[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n.fxch-about-card--first.fxch-about-card--active[_ngcontent-%COMP%]   .fxch-about-card-block[_ngcontent-%COMP%]:after {\n  left: 0px;\n  bottom: 0px;\n  transform: rotate(39.006deg);\n}\n.fxch-about-card--first[_ngcontent-%COMP%]   .fxch-about-card-block[_ngcontent-%COMP%]:after {\n  left: -259px;\n  bottom: -153px;\n  width: 571px;\n  height: 196px;\n  border-radius: 571px;\n  filter: blur(172px);\n  transform: rotate(-127.155deg);\n  transition:\n    left 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    bottom 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    transform 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    left,\n    bottom,\n    transform,\n    background-color;\n}\n.fxch-about-card--second.fxch-about-card--active[_ngcontent-%COMP%]   .fxch-about-card-block[_ngcontent-%COMP%]:after {\n  left: 80px;\n  top: -172px;\n  transform: rotate(29.1deg);\n}\n.fxch-about-card--second[_ngcontent-%COMP%]   .fxch-about-card-block[_ngcontent-%COMP%]:after {\n  left: -316px;\n  top: -155px;\n  width: 489px;\n  height: 350px;\n  border-radius: 489px;\n  filter: blur(192px);\n  transform: rotate(-42.654deg);\n  transition:\n    left 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    top 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    transform 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    left,\n    top,\n    transform,\n    background-color;\n}\n.fxch-about-card--third.fxch-about-card--active[_ngcontent-%COMP%]   .fxch-about-card-block[_ngcontent-%COMP%]:after {\n  left: -210px;\n  top: 230px;\n  transform: rotate(71.729deg);\n}\n.fxch-about-card--third[_ngcontent-%COMP%]   .fxch-about-card-block[_ngcontent-%COMP%]:after {\n  left: -229px;\n  top: -336px;\n  width: 498px;\n  height: 251px;\n  border-radius: 498px;\n  filter: blur(182px);\n  transform: rotate(141.21deg);\n  transition:\n    left 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    top 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    transform 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    left,\n    top,\n    transform,\n    background-color;\n}\n.fxch-about-card-block[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 43px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 12px;\n  height: 100%;\n}\n@media screen and (max-width: 960px) {\n  .fxch-about-card-block[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .fxch-about-card-block[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n}\n.fxch-about-card-block[_ngcontent-%COMP%]:after {\n  position: absolute;\n  display: block;\n  content: "";\n  z-index: 2;\n}\n.fxch-about-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 30px;\n  align-items: start;\n  align-content: space-between;\n  height: 100%;\n  z-index: 5;\n}\n.fxch-about-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.fxch-about-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: stretch;\n  row-gap: 20px;\n}\n.fxch-about-card-body-title[_ngcontent-%COMP%] {\n  font-family: var(--font-titles);\n  font-size: 48px;\n  line-height: 1;\n  font-weight: 500;\n}\n.fxch-about-card-body-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 400;\n  overflow: hidden;\n  max-height: 88px;\n  transition: max-height 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: max-height;\n}\n.fxch-about-card-body-text-inner[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 30;\n  line-clamp: 30;\n  -webkit-box-orient: vertical;\n}\n.fxch-about-card-body-text-inner--truncated[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 4;\n  line-clamp: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9hYm91dC1jYXJkL2Fib3V0LWNhcmQuY29tcG9uZW50LnNjc3MiLCAic3JjL2FwcC9jb21tb24vbWl4aW4vYnJlYWtwb2ludC5taXhpbi5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL3R5cG9ncmFwaHkubWl4aW4uc2NzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9taXhpbi9taXhpbnMubWl4aW4uc2Nzc1wiO1xyXG5cclxuLmZ4Y2gtYWJvdXQtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgIGJveC1zaGFkb3cgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgJi0tYWN0aXZlIHtcclxuICAgICAgICAuZnhjaC1hYm91dC1jYXJkLWJvZHktdGV4dCB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtLWZpcnN0IHtcclxuICAgICAgICAmLmZ4Y2gtYWJvdXQtY2FyZC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgLmZ4Y2gtYWJvdXQtY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzkuMDA2ZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZnhjaC1hYm91dC1jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjU5cHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0xNTNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1NzFweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTk2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1NzFweDtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxNzJweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTI3LjE1NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IGxlZnQsIGJvdHRvbSwgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0tc2Vjb25kIHtcclxuICAgICAgICAmLmZ4Y2gtYWJvdXQtY2FyZC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgLmZ4Y2gtYWJvdXQtY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTE3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI5LjFkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5meGNoLWFib3V0LWNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMTZweDtcclxuICAgICAgICAgICAgICAgIHRvcDogLTE1NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ4OXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ4OXB4O1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDE5MnB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00Mi42NTRkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0IC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBsZWZ0LCB0b3AsIHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtLXRoaXJkIHtcclxuICAgICAgICAmLmZ4Y2gtYWJvdXQtY2FyZC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgLmZ4Y2gtYWJvdXQtY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MS43MjlkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5meGNoLWFib3V0LWNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMjlweDtcclxuICAgICAgICAgICAgICAgIHRvcDogLTMzNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTFweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDE4MnB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE0MS4yMWRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IGxlZnQsIHRvcCwgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDQzcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwieHNcIikge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIHJvdy1nYXA6IDMwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICB9XHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgICYtYm9keSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgcm93LWdhcDogMjBweDtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJsYWJlbC14c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXNtXCIpO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4OHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogbWF4LWhlaWdodDtcclxuICAgICAgICAgICAgJi1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDMwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1jbGFtcDogMzA7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgJi0tdHJ1bmNhdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1jbGFtcDogNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwgIkBtaXhpbiBmb250LXN0eWxlcygkdHlwb2dyYXBoeSkge1xyXG4gICAgQGlmICgkdHlwb2dyYXBoeSA9PSAnaDEnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDI3OXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gyJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLW1kJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXNtJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwteHMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14bCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1sZycpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXNtJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhzJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxVQUFBO0FBQ0EsY0FBQTtBQUNBLGlCQUFBO0FBQ0EsWUFBQTtBQUNBLGNBQ0ksaUJBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUEsRUFBQSxXQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUVKLGVBQUEsZ0JBQUEsRUFBQTs7QUNNSSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRGRSLEdBQUE7QUFVUSxnQkFBQTs7O0FDSUEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURkUixHQUFBO0FBYVEsZ0JBQUE7OztBQUdBLENBQUEsd0JBQUEsQ0FBQTtBQUNJLGNBQUE7O0FBTUksQ0FBQSxzQkFBQSxDQVBSLHdCQU9RLENBQUEscUJBQUE7QUFDSSxRQUFBO0FBQ0EsVUFBQTtBQUNBLGFBQUEsT0FBQTs7QUFLUixDQVJJLHVCQVFKLENBUkkscUJBUUo7QUFDSSxRQUFBO0FBQ0EsVUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsaUJBQUE7QUFDQSxVQUFBLEtBQUE7QUFDQSxhQUFBLE9BQUE7QUFDQTtJQUNJLEtBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxPQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsVUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUlKO0lBQUEsSUFBQTtJQUFBLE1BQUE7SUFBQSxTQUFBO0lBQUE7O0FBT0EsQ0FBQSx1QkFBQSxDQW5DUix3QkFtQ1EsQ0E1QkEscUJBNEJBO0FBQ0ksUUFBQTtBQUNBLE9BQUE7QUFDQSxhQUFBLE9BQUE7O0FBS1IsQ0FSSSx3QkFRSixDQXBDSSxxQkFvQ0o7QUFDSSxRQUFBO0FBQ0EsT0FBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsaUJBQUE7QUFDQSxVQUFBLEtBQUE7QUFDQSxhQUFBLE9BQUE7QUFDQTtJQUNJLEtBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxJQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsVUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUlKO0lBQUEsSUFBQTtJQUFBLEdBQUE7SUFBQSxTQUFBO0lBQUE7O0FBT0EsQ0FBQSxzQkFBQSxDQS9EUix3QkErRFEsQ0F4REEscUJBd0RBO0FBQ0ksUUFBQTtBQUNBLE9BQUE7QUFDQSxhQUFBLE9BQUE7O0FBS1IsQ0FSSSx1QkFRSixDQWhFSSxxQkFnRUo7QUFDSSxRQUFBO0FBQ0EsT0FBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsaUJBQUE7QUFDQSxVQUFBLEtBQUE7QUFDQSxhQUFBLE9BQUE7QUFDQTtJQUNJLEtBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxJQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsVUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUlKO0lBQUEsSUFBQTtJQUFBLEdBQUE7SUFBQSxTQUFBO0lBQUE7O0FBSVosQ0FqRlk7QUFrRlIsWUFBQTtBQUNBLFdBQUE7QUFDQSxnQkFBQTtBQUNBLGdCQUFBO0FBQ0EsaUJBQUE7QUFDQSxVQUFBOztBQ2hHQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRDBGSixHQWpGWTtBQXlGSixhQUFBOzs7QUNsR0osT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QUQwRkosR0FqRlk7QUE0RkosYUFBQTs7O0FBRUosQ0E5RlEscUJBOEZSO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSxXQUFBO0FBQ0EsV0FBQTs7QUFHUixDQUFBO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSx5QkFBQTtBQUNBLFdBQUE7QUFDQSxlQUFBO0FBQ0EsaUJBQUE7QUFDQSxVQUFBO0FBQ0EsV0FBQTs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLGtCQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsV0FBQTs7QUFDQSxDQUFBO0FFbkhBLGVBQUEsSUFBQTtBQUNBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTs7QUZtSEEsQ0FwSUE7QUVvQ0EsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FGZ0dJLFlBQUE7QUFDQSxjQUFBO0FBQ0EsY0FBQSxXQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBLGVBQUE7O0FBQ0EsQ0FBQTtBQUNJLFlBQUE7QUFDQSxXQUFBO0FBQ0Esc0JBQUE7QUFDQSxjQUFBO0FBQ0Esc0JBQUE7O0FBQ0EsQ0FBQTtBQUNJLHNCQUFBO0FBQ0EsY0FBQTs7IiwKICAibmFtZXMiOiBbXQp9Cg== */'], changeDetection: 0 });
var AboutCardComponent = _AboutCardComponent;
__decorate([
  Debounce(100)
], AboutCardComponent.prototype, "toggleTap", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutCardComponent, { className: "AboutCardComponent", filePath: "src\\app\\about-card\\about-card.component.ts", lineNumber: 20 });
})();

// src/app/about/about.component.ts
var _AboutComponent = class _AboutComponent {
};
_AboutComponent.\u0275fac = function AboutComponent_Factory(t) {
  return new (t || _AboutComponent)();
};
_AboutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 20, consts: [[1, "fxch-about"], [1, "fxch-about-content"], [1, "fxch-about-item", 3, "aboutTitle", "text"], [1, "fxch-decor-circles"], [1, "fxch-decor-circles-item"], [1, "fxch-about-item", 3, "aboutTitle", "text", "type"], [1, "fxch-decor-ring"], [1, "fxch-decor-target"], [1, "fxch-decor-target-ring-block"], [1, "fxch-decor-target-ring"], [1, "fxch-decor-target-dot-block"], [1, "fxch-decor-target-dot"]], template: function AboutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "about-card", 2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275element(6, "div", 4)(7, "div", 4)(8, "div", 4)(9, "div", 4)(10, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "about-card", 5);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275element(14, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "about-card", 5);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "div", 7)(19, "div", 8);
    \u0275\u0275element(20, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 10);
    \u0275\u0275element(22, "div", 11);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("aboutTitle", \u0275\u0275pipeBind1(3, 8, "ABOUT.TITLES.TITLE_1"))("text", \u0275\u0275pipeBind1(4, 10, "ABOUT.TEXT.TEXT_1"));
    \u0275\u0275advance(9);
    \u0275\u0275property("aboutTitle", \u0275\u0275pipeBind1(12, 12, "ABOUT.TITLES.TITLE_2"))("text", \u0275\u0275pipeBind1(13, 14, "ABOUT.TEXT.TEXT_2"))("type", "second");
    \u0275\u0275advance(4);
    \u0275\u0275property("aboutTitle", \u0275\u0275pipeBind1(16, 16, "ABOUT.TITLES.TITLE_3"))("text", \u0275\u0275pipeBind1(17, 18, "ABOUT.TEXT.TEXT_3"))("type", "third");
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  CommonModule,
  AboutCardComponent
], styles: ['\n\n.fxch-about[_ngcontent-%COMP%] {\n  max-width: var(--width);\n  margin: -100px auto 0;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-about[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.fxch-about-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  column-gap: 20px;\n  row-gap: 20px;\n  align-items: stretch;\n  padding: 100px var(--padding-inline) 140px;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-about-content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    padding-top: 140px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .fxch-about-content[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n@media screen and (max-width: 1270px) {\n  .fxch-about-item[_ngcontent-%COMP%]:last-of-type {\n    grid-area: 2/1/3/3;\n  }\n}\n@media screen and (max-width: 960px) {\n  .fxch-about-item[_ngcontent-%COMP%]:last-of-type {\n    grid-area: auto;\n  }\n}\n.fxch-decor-circles[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  font-size: 2px;\n  width: 40em;\n  height: 40em;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-decor-circles[_ngcontent-%COMP%] {\n    font-size: 1px;\n  }\n}\n.fxch-decor-circles-item[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  content: "";\n  top: 0;\n  left: 0;\n  width: 40em;\n  height: 40em;\n  border-radius: 50%;\n  opacity: 0;\n  transform: translateX(0);\n  transition: transform 1s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: transform;\n}\n.fxch-decor-circles-item[_ngcontent-%COMP%]:last-of-type {\n  opacity: 1;\n}\n.fxch-decor-circles-item[_ngcontent-%COMP%]:nth-last-of-type(2) {\n  opacity: 0.8;\n}\n.fxch-decor-circles-item[_ngcontent-%COMP%]:nth-last-of-type(3) {\n  opacity: 0.6;\n}\n.fxch-decor-circles-item[_ngcontent-%COMP%]:nth-last-of-type(4) {\n  opacity: 0.4;\n}\n.fxch-decor-circles-item[_ngcontent-%COMP%]:nth-last-of-type(5) {\n  opacity: 0.2;\n}\n.fxch-decor-ring[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  border-width: 1em;\n  border-style: solid;\n  transform: rotateY(0);\n  transition: transform 1s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: transform;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-decor-ring[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n.fxch-decor-target[_ngcontent-%COMP%] {\n  --ring-size: 6em;\n  --dot-size: 6em;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  width: 8em;\n  height: 8em;\n  border-radius: 50%;\n  border-width: 1em;\n  border-style: solid;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-decor-target[_ngcontent-%COMP%] {\n    font-size: 5px;\n  }\n}\n.fxch-decor-target-ring[_ngcontent-%COMP%] {\n  display: block;\n  width: var(--ring-size);\n  height: var(--ring-size);\n  border-radius: 50%;\n  border-width: 0;\n  border-style: solid;\n  opacity: 0;\n  transition:\n    width 1s cubic-bezier(0.35, 0, 0.25, 1),\n    height 1s cubic-bezier(0.35, 0, 0.25, 1),\n    border-width 1s cubic-bezier(0.35, 0, 0.25, 1),\n    opacity 1s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    width,\n    height,\n    border-width,\n    opacity;\n}\n.fxch-decor-target-ring-block[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  content: "";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 3;\n}\n.fxch-decor-target-dot[_ngcontent-%COMP%] {\n  display: block;\n  width: var(--dot-size);\n  height: var(--dot-size);\n  border-radius: 50%;\n  border-width: 0;\n  border-style: solid;\n  opacity: 0;\n  transition:\n    width 1s cubic-bezier(0.35, 0, 0.25, 1),\n    height 1s cubic-bezier(0.35, 0, 0.25, 1),\n    border-width 1s cubic-bezier(0.35, 0, 0.25, 1),\n    opacity 1s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    width,\n    height,\n    border-width,\n    opacity;\n}\n.fxch-decor-target-dot-block[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  content: "";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi9icmVha3BvaW50Lm1peGluLnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLWFib3V0IHtcclxuICAgIG1heC13aWR0aDogdmFyKC0td2lkdGgpO1xyXG4gICAgbWFyZ2luOiAtMTAwcHggYXV0byAwO1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcImxnXCIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHggdmFyKC0tcGFkZGluZy1pbmxpbmUpIDE0MHB4O1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDIvMS8zLzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZnhjaC1kZWNvciB7XHJcbiAgICAmLWNpcmNsZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDJweDtcclxuICAgICAgICB3aWR0aDogNDBlbTtcclxuICAgICAgICBoZWlnaHQ6IDQwZW07XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcImxnXCIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MGVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1sYXN0LW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtbGFzdC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC42O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWxhc3Qtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1sYXN0LW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLXJpbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB3aWR0aDogNGVtO1xyXG4gICAgICAgIGhlaWdodDogNGVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFlbTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLXRhcmdldCB7XHJcbiAgICAgICAgLS1yaW5nLXNpemU6IDZlbTtcclxuICAgICAgICAtLWRvdC1zaXplOiA2ZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDhlbTtcclxuICAgICAgICBoZWlnaHQ6IDhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxZW07XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibGdcIikge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1yaW5nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1yaW5nLXNpemUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXJpbmctc2l6ZSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgd2lkdGggMXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgIGhlaWdodCAxcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoIDFzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDFzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB3aWR0aCwgaGVpZ2h0LCBib3JkZXItd2lkdGgsIG9wYWNpdHk7XHJcbiAgICAgICAgICAgICYtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZG90IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1kb3Qtc2l6ZSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tZG90LXNpemUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpcclxuICAgICAgICAgICAgICAgIHdpZHRoIDFzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgMXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aCAxcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogd2lkdGgsIGhlaWdodCwgYm9yZGVyLXdpZHRoLCBvcGFjaXR5O1xyXG4gICAgICAgICAgICAmLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxhQUFBLElBQUE7QUFDQSxVQUFBLE9BQUEsS0FBQTs7QUNZSSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRGRSLEdBQUE7QUFJUSxnQkFBQTs7O0FBRUosQ0FBQTtBQUNJLFdBQUE7QUFDQSx5QkFBQSxPQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsRUFBQTtBQUNBLGNBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLFdBQUEsTUFBQSxJQUFBLGtCQUFBOztBQ0VBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEUkosR0FBQTtBQVFRLDJCQUFBLE9BQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxFQUFBO0FBQ0EsaUJBQUE7OztBQ0RKLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEUkosR0FBQTtBQVlRLDJCQUFBOzs7QUNKSixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRFFBLEdBQUEsZUFBQTtBQUVRLGVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7OztBQ1ZSLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEUUEsR0FBQSxlQUFBO0FBS1EsZUFBQTs7O0FBTVosQ0FBQTtBQUNJLFlBQUE7QUFDQSxXQUFBO0FBQ0EsYUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBOztBQ3hCQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRG1CSixHQUFBO0FBT1EsZUFBQTs7O0FBRUosQ0FBQTtBQUNJLFlBQUE7QUFDQSxXQUFBO0FBQ0EsV0FBQTtBQUNBLE9BQUE7QUFDQSxRQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxpQkFBQTtBQUNBLFdBQUE7QUFDQSxhQUFBLFdBQUE7QUFDQSxjQUFBLFVBQUEsR0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFDQSxDQWJKLHVCQWFJO0FBQ0ksV0FBQTs7QUFFSixDQWhCSix1QkFnQkk7QUFDSSxXQUFBOztBQUVKLENBbkJKLHVCQW1CSTtBQUNJLFdBQUE7O0FBRUosQ0F0QkosdUJBc0JJO0FBQ0ksV0FBQTs7QUFFSixDQXpCSix1QkF5Qkk7QUFDSSxXQUFBOztBQUlaLENBQUE7QUFDSSxXQUFBO0FBQ0EsYUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsaUJBQUE7QUFDQSxnQkFBQTtBQUNBLGdCQUFBO0FBQ0EsYUFBQSxRQUFBO0FBQ0EsY0FBQSxVQUFBLEdBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBLGVBQUE7O0FDcEVBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEMERKLEdBQUE7QUFZUSxlQUFBOzs7QUFHUixDQUFBO0FBQ0ksZUFBQTtBQUNBLGNBQUE7QUFDQSxZQUFBO0FBQ0EsV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQUNBLGFBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLGlCQUFBO0FBQ0EsZ0JBQUE7QUFDQSxnQkFBQTs7QUNyRkEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QUR5RUosR0FBQTtBQWNRLGVBQUE7OztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EsU0FBQSxJQUFBO0FBQ0EsVUFBQSxJQUFBO0FBQ0EsaUJBQUE7QUFDQSxnQkFBQTtBQUNBLGdCQUFBO0FBQ0EsV0FBQTtBQUNBO0lBQ0ksTUFBQSxHQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLE9BQUEsR0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxhQUFBLEdBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsUUFBQSxHQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFJSjtJQUFBLEtBQUE7SUFBQSxNQUFBO0lBQUEsWUFBQTtJQUFBOztBQUNBLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQUNBLFdBQUE7QUFDQSxPQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxRQUFBO0FBQ0EsV0FBQTs7QUFHUixDQUFBO0FBQ0ksV0FBQTtBQUNBLFNBQUEsSUFBQTtBQUNBLFVBQUEsSUFBQTtBQUNBLGlCQUFBO0FBQ0EsZ0JBQUE7QUFDQSxnQkFBQTtBQUNBLFdBQUE7QUFDQTtJQUNJLE1BQUEsR0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxPQUFBLEdBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsYUFBQSxHQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLFFBQUEsR0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBSUo7SUFBQSxLQUFBO0lBQUEsTUFBQTtJQUFBLFlBQUE7SUFBQTs7QUFDQSxDQUFBO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGVBQUE7QUFDQSxXQUFBO0FBQ0EsT0FBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsUUFBQTtBQUNBLFdBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */'], changeDetection: 0 });
var AboutComponent = _AboutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\about\\about.component.ts", lineNumber: 19 });
})();

// src/app/core/services/fxch-scrolling.service.ts
var _FxchScrollingService = class _FxchScrollingService {
  constructor() {
    this.scrollAnchors = {};
    this.scrollingElement = null;
    this.scroll$ = new Subject();
  }
  setScrollingElement(scrollingElement) {
    this.scrollingElement = scrollingElement;
  }
  getScrollingElement() {
    return this.scrollingElement;
  }
  getScrollAnchor(id) {
    return this.scrollAnchors[id];
  }
  setScrollAnchor(id, scrollingElement) {
    this.scrollAnchors[id] = scrollingElement;
  }
  scrollTo(id) {
    setTimeout(() => {
      if (this.scrollingElement == null || this.scrollAnchors[id] == null) {
        return;
      }
      const targetElement = this.scrollAnchors[id];
      this.scrollingElement.scroll({
        top: targetElement.offsetTop,
        left: targetElement.offsetLeft,
        behavior: "smooth"
      });
    });
  }
  isAnchorActive(id) {
    if (this.scrollAnchors[id] == null) {
      return false;
    }
    const targetElement = this.scrollAnchors[id];
    const rect = targetElement.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= 100;
  }
};
_FxchScrollingService.\u0275fac = function FxchScrollingService_Factory(t) {
  return new (t || _FxchScrollingService)();
};
_FxchScrollingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchScrollingService, factory: _FxchScrollingService.\u0275fac, providedIn: "root" });
var FxchScrollingService = _FxchScrollingService;

// src/app/benefits/benefits.component.ts
var _c02 = ["firstInfo"];
var _c12 = ["secondInfo"];
var _c22 = ["thirdInfo"];
var _BenefitsComponent = class _BenefitsComponent {
  constructor(fxchScrollingService, changeDetectorRef) {
    this.fxchScrollingService = fxchScrollingService;
    this.changeDetectorRef = changeDetectorRef;
    this.firstInfoElement = null;
    this.secondInfoElement = null;
    this.thirdInfoElement = null;
    this.isFirstBenefitVisible = false;
    this.isFirstBenefitActive = false;
    this.isSecondBenefitVisible = false;
    this.isSecondBenefitActive = false;
    this.isThirdBenefitVisible = false;
    this.isThirdBenefitActive = false;
    this.unsubscribe$ = new Subject();
  }
  ngOnInit() {
    this.fxchScrollingService.scroll$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.calculateClasses());
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  calculateClasses() {
    if (this.firstInfoElement == null || this.secondInfoElement == null || this.thirdInfoElement == null) {
      return;
    }
    const rect = this.firstInfoElement.nativeElement.getBoundingClientRect();
    if (rect.top <= 0) {
      this.isFirstBenefitVisible = true;
    }
    const isFirstBlocVisible = this.isElementReachedTop(this.firstInfoElement.nativeElement, _BenefitsComponent.FirstInfoOffset);
    const isSecondBlocVisible = this.isElementReachedTop(this.secondInfoElement.nativeElement, _BenefitsComponent.SecondInfoOffset);
    const isThirdBlocVisible = this.isElementReachedTop(this.thirdInfoElement.nativeElement, _BenefitsComponent.ThirdInfoOffset);
    this.setClasses(isFirstBlocVisible && !isSecondBlocVisible && !isThirdBlocVisible, isSecondBlocVisible && !isThirdBlocVisible, isThirdBlocVisible);
    this.changeDetectorRef.detectChanges();
  }
  isElementReachedTop(element, targetTop) {
    return element.getBoundingClientRect().top <= targetTop;
  }
  setClasses(isFirstACtive, isSecondActive, isThirdActive) {
    this.isFirstBenefitVisible = isFirstACtive;
    this.isSecondBenefitVisible = isSecondActive;
    this.isThirdBenefitVisible = isThirdActive;
    setTimeout(() => {
      this.isFirstBenefitActive = isFirstACtive;
      this.changeDetectorRef.detectChanges();
    }, _BenefitsComponent.FirstInfoAminationDelayMs);
    setTimeout(() => {
      this.isSecondBenefitActive = isSecondActive;
      this.changeDetectorRef.detectChanges();
    }, _BenefitsComponent.SecondInfoAminationDelayMs);
    setTimeout(() => {
      this.isThirdBenefitActive = isThirdActive;
      this.changeDetectorRef.detectChanges();
    }, _BenefitsComponent.ThirdInfoAminationDelayMs);
  }
};
_BenefitsComponent.FirstInfoOffset = 200;
_BenefitsComponent.SecondInfoOffset = 400;
_BenefitsComponent.ThirdInfoOffset = 400;
_BenefitsComponent.FirstInfoAminationDelayMs = 300;
_BenefitsComponent.SecondInfoAminationDelayMs = 300;
_BenefitsComponent.ThirdInfoAminationDelayMs = 300;
_BenefitsComponent.\u0275fac = function BenefitsComponent_Factory(t) {
  return new (t || _BenefitsComponent)(\u0275\u0275directiveInject(FxchScrollingService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_BenefitsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BenefitsComponent, selectors: [["benefits"]], viewQuery: function BenefitsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
    \u0275\u0275viewQuery(_c12, 5);
    \u0275\u0275viewQuery(_c22, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstInfoElement = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.secondInfoElement = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thirdInfoElement = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 30, consts: [[1, "fxch-benefits"], [1, "fxch-benefits-container"], [1, "fxch-benefits-main"], [1, "fxch-benefits-info"], ["firstInfo", ""], [1, "fxch-benefits-info-title"], [1, "fxch-benefits-info-text"], ["secondInfo", ""], ["thirdInfo", ""], [1, "fxch-benefits-aside"], [1, "fxch-benefits-decoration-wrap"], [1, "fxch-benefits-decoration"], [1, "fxch-benefits-decoration-inner"], [1, "fxch-benefits-circle"], [1, "fxch-benefits-sphere"], [1, "fxch-benefits-cone"]], template: function BenefitsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3, 4)(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 3, 7)(13, "div", 5);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 6);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 3, 8)(21, "div", 5);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 6);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 9)(28, "div", 10)(29, "div", 11)(30, "div", 12);
    \u0275\u0275element(31, "div", 13)(32, "div", 13)(33, "div", 13)(34, "div", 13)(35, "div", 13)(36, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 11)(38, "div", 12);
    \u0275\u0275element(39, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 11)(41, "div", 12);
    \u0275\u0275element(42, "div", 15);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 18, "BENEFITS.TITLE_1"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 20, "BENEFITS.TEXT_1"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 22, "BENEFITS.TITLE_2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 24, "BENEFITS.TEXT_2"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 26, "BENEFITS.TITLE_3"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 28, "BENEFITS.TEXT_3"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("fxch-benefits-decoration--shown", ctx.isFirstBenefitVisible)("fxch-benefits-decoration--active", ctx.isFirstBenefitActive);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("fxch-benefits-decoration--shown", ctx.isSecondBenefitVisible)("fxch-benefits-decoration--active", ctx.isSecondBenefitActive);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fxch-benefits-decoration--shown", ctx.isThirdBenefitVisible)("fxch-benefits-decoration--active", ctx.isThirdBenefitActive);
  }
}, dependencies: [TranslateModule, TranslatePipe], styles: ["\n\n.fxch-benefits-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  grid-template-rows: minmax(0, 1fr);\n  column-gap: 28px;\n  align-items: start;\n  padding: 0 var(--padding-inline) 200px;\n  max-width: var(--width);\n  margin: 0 auto;\n}\n.fxch-benefits-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 32px;\n  align-items: start;\n  align-content: center;\n  height: 85vh;\n}\n.fxch-benefits-info-title[_ngcontent-%COMP%] {\n  font-family: var(--font-titles);\n  font-size: 56px;\n  line-height: 1.2;\n  font-weight: 500;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-benefits-info-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 48px;\n    line-height: 1;\n    font-weight: 500;\n  }\n}\n@media screen and (max-width: 960px) {\n  .fxch-benefits-info-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 32px;\n    line-height: 1;\n    font-weight: 500;\n  }\n}\n.fxch-benefits-info-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n}\n.fxch-benefits-aside[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.fxch-benefits-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 12px;\n  overflow: hidden;\n  width: 100%;\n  height: 450px;\n  opacity: 0;\n  z-index: 1;\n  transform: translateY(-50%);\n  transition: opacity 0.3s linear;\n  will-change: opacity;\n}\n.fxch-benefits-decoration[_ngcontent-%COMP%]:nth-of-type(2) {\n  z-index: 2;\n}\n.fxch-benefits-decoration[_ngcontent-%COMP%]:nth-of-type(3) {\n  z-index: 3;\n}\n.fxch-benefits-decoration--shown[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.fxch-benefits-decoration--active[_ngcontent-%COMP%]   .fxch-benefits-circle[_ngcontent-%COMP%]:first-of-type {\n  top: 280px;\n  left: 290px;\n}\n.fxch-benefits-decoration--active[_ngcontent-%COMP%]   .fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(2) {\n  top: 160px;\n  left: 180px;\n}\n.fxch-benefits-decoration--active[_ngcontent-%COMP%]   .fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(3) {\n  top: 40px;\n  left: 70px;\n}\n.fxch-benefits-decoration--active[_ngcontent-%COMP%]   .fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(4) {\n  top: -80px;\n  left: -40px;\n}\n.fxch-benefits-decoration--active[_ngcontent-%COMP%]   .fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(5) {\n  top: -200px;\n  left: -150px;\n}\n.fxch-benefits-decoration--active[_ngcontent-%COMP%]   .fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(6) {\n  top: -320px;\n  left: -260px;\n}\n.fxch-benefits-decoration--active[_ngcontent-%COMP%]   .fxch-benefits-sphere[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.fxch-benefits-decoration--active[_ngcontent-%COMP%]   .fxch-benefits-cone[_ngcontent-%COMP%] {\n  top: -32px;\n}\n.fxch-benefits-decoration-wrap[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 12vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 85vh;\n}\n.fxch-benefits-decoration-inner[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  height: 100%;\n}\n@media screen and (max-width: 960px) {\n  .fxch-benefits-decoration-inner[_ngcontent-%COMP%] {\n    max-width: 540px;\n    margin: 0 auto;\n  }\n}\n.fxch-benefits-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  font-size: 750px;\n  width: 1em;\n  height: 1em;\n  background-size: contain;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-image: url(/assets/images/benefits/cylinder.webp);\n  transition: top 0.5s cubic-bezier(0.35, 0, 0.25, 1), left 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: top, left;\n}\n.fxch-benefits-circle[_ngcontent-%COMP%]:first-of-type {\n  top: 40px;\n  left: 15px;\n}\n.fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(2) {\n  top: 10px;\n  left: 0px;\n}\n.fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(3) {\n  top: -20px;\n  left: -15px;\n}\n.fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(4) {\n  top: -50px;\n  left: -30px;\n}\n.fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(5) {\n  top: -80px;\n  left: -45px;\n}\n.fxch-benefits-circle[_ngcontent-%COMP%]:nth-of-type(6) {\n  top: -110px;\n  left: -60px;\n}\n.fxch-benefits-sphere[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  font-size: 907px;\n  width: 1em;\n  height: 1em;\n  top: 0;\n  left: 57px;\n  background-size: contain;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-image: url(/assets/images/benefits/sphere.webp);\n  transform: rotate(0);\n  transition: transform 1.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: transform;\n}\n.fxch-benefits-cone[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  font-size: 1028px;\n  width: 1em;\n  height: 1em;\n  top: 188px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-size: contain;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-image: url(/assets/images/benefits/cone.webp);\n  transition: top 1s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: top;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9iZW5lZml0cy9iZW5lZml0cy5jb21wb25lbnQuc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi90eXBvZ3JhcGh5Lm1peGluLnNjc3MiLCAic3JjL2FwcC9jb21tb24vbWl4aW4vYnJlYWtwb2ludC5taXhpbi5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJAaW1wb3J0IFwiLi4vY29tbW9uL21peGluL21peGlucy5taXhpbi5zY3NzXCI7XHJcblxyXG4uZnhjaC1iZW5lZml0cyB7XHJcbiAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMCwgMWZyKTtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyOHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctaW5saW5lKSAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoKTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgICYtaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgcm93LWdhcDogMzJweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODV2aDtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJsYWJlbC1zbVwiKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcImxnXCIpIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWwteHNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LWxnXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtYXNpZGUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgICYtZGVjb3JhdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGxpbmVhcjtcclxuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtLXNob3duIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgLmZ4Y2gtYmVuZWZpdHMge1xyXG4gICAgICAgICAgICAgICAgJi1jaXJjbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC04MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0zMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTI2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtc3BoZXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWNvbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTMycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi13cmFwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgdG9wOiAxMnZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWlubmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1jaXJjbGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDc1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JlbmVmaXRzL2N5bGluZGVyLndlYnAnKTtcclxuICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICB0b3AgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgIGxlZnQgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRvcCwgbGVmdDtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgICAgdG9wOiAtNTBweDtcclxuICAgICAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICB0b3A6IC04MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICAgICAgICAgIHRvcDogLTExMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLXNwaGVyZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTA3cHg7XHJcbiAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNTdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmVuZWZpdHMvc3BoZXJlLndlYnAnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICAmLWNvbmUgIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICB0b3A6IDE4OHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7ICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZW5lZml0cy9jb25lLndlYnAnKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogdG9wO1xyXG4gICAgfVxyXG59IiwgIkBtaXhpbiBmb250LXN0eWxlcygkdHlwb2dyYXBoeSkge1xyXG4gICAgQGlmICgkdHlwb2dyYXBoeSA9PSAnaDEnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDI3OXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gyJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLW1kJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXNtJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwteHMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14bCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1sZycpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXNtJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhzJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59IiwgIiRicmVha3BvaW50czogKFxyXG4gICAgeHMtaDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NzBweClcIixcclxuICAgIHNtLWg6IFwic2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpXCIsXHJcbiAgICB4czogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiLFxyXG4gICAgc206IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgIG1kOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpXCIsXHJcbiAgICBsZzogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzBweClcIixcclxuICAgIHhsOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1MHB4KVwiXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludCgkYnJlYWtwb2ludE5hbWUpIHtcclxuICAgICRtZWRpYVF1ZXJ5OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnROYW1lKTtcclxuXHJcbiAgICBAaWYgKCRtZWRpYVF1ZXJ5ID09IG51bGwpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYVF1ZXJ5fSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFHSSxDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBLE9BQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxFQUFBO0FBQ0Esc0JBQUEsT0FBQSxDQUFBLEVBQUE7QUFDQSxjQUFBO0FBQ0EsZUFBQTtBQUNBLFdBQUEsRUFBQSxJQUFBLGtCQUFBO0FBQ0EsYUFBQSxJQUFBO0FBQ0EsVUFBQSxFQUFBOztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EseUJBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQTs7QUFDQSxDQUFBO0FDTUEsZUFBQSxJQUFBO0FBQ0EsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOztBQ2JBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FGSUEsR0FBQTtBQ1lBLGlCQUFBLElBQUE7QUFDQSxlQUFBO0FBQ0EsaUJBQUE7QUFDQSxpQkFBQTs7O0FDbkJBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FGSUEsR0FBQTtBQ2tCQSxpQkFBQSxJQUFBO0FBQ0EsZUFBQTtBQUNBLGlCQUFBO0FBQ0EsaUJBQUE7OztBRFpBLENBQUE7QUNvQkEsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOztBRGxCSixDQUFBO0FBQ0ksVUFBQTs7QUFFSixDQUFBO0FBQ0ksWUFBQTtBQUNBLE9BQUE7QUFDQSxRQUFBO0FBQ0EsU0FBQTtBQUNBLGdCQUFBO0FBQ0EsZ0JBQUE7QUFDQSxpQkFBQTtBQUNBLFlBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLFdBQUE7QUFDQSxXQUFBO0FBQ0EsYUFBQSxXQUFBO0FBQ0EsY0FBQSxRQUFBLEtBQUE7QUFDQSxlQUFBOztBQUNBLENBaEJKLHdCQWdCSTtBQUNJLFdBQUE7O0FBRUosQ0FuQkosd0JBbUJJO0FBQ0ksV0FBQTs7QUFFSixDQUFBO0FBQ0ksV0FBQTs7QUFLUSxDQUFBLGlDQUFBLENBQUEsb0JBQUE7QUFDSSxPQUFBO0FBQ0EsUUFBQTs7QUFFSixDQUpBLGlDQUlBLENBSkEsb0JBSUE7QUFDSSxPQUFBO0FBQ0EsUUFBQTs7QUFFSixDQVJBLGlDQVFBLENBUkEsb0JBUUE7QUFDSSxPQUFBO0FBQ0EsUUFBQTs7QUFFSixDQVpBLGlDQVlBLENBWkEsb0JBWUE7QUFDSSxPQUFBO0FBQ0EsUUFBQTs7QUFFSixDQWhCQSxpQ0FnQkEsQ0FoQkEsb0JBZ0JBO0FBQ0ksT0FBQTtBQUNBLFFBQUE7O0FBRUosQ0FwQkEsaUNBb0JBLENBcEJBLG9CQW9CQTtBQUNJLE9BQUE7QUFDQSxRQUFBOztBQUdSLENBekJJLGlDQXlCSixDQUFBO0FBQ0ksYUFBQSxPQUFBOztBQUVKLENBNUJJLGlDQTRCSixDQUFBO0FBQ0ksT0FBQTs7QUFJWixDQUFBO0FBQ0ksWUFBQTtBQUNBLE9BQUE7QUFDQSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsVUFBQTs7QUFFSixDQUFBO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSxVQUFBOztBRTVGSixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRnlGQSxHQUFBO0FBS1EsZUFBQTtBQUNBLFlBQUEsRUFBQTs7O0FBSVosQ0FuRGdCO0FBb0RaLFlBQUE7QUFDQSxXQUFBO0FBQ0EsYUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsbUJBQUE7QUFDQSx1QkFBQSxJQUFBO0FBQ0EscUJBQUE7QUFDQSxvQkFBQTtBQUNBLGNBQ0ksSUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBRUosZUFBQSxHQUFBLEVBQUE7O0FBQ0EsQ0FqRVksb0JBaUVaO0FBQ0ksT0FBQTtBQUNBLFFBQUE7O0FBRUosQ0FyRVksb0JBcUVaO0FBQ0ksT0FBQTtBQUNBLFFBQUE7O0FBRUosQ0F6RVksb0JBeUVaO0FBQ0ksT0FBQTtBQUNBLFFBQUE7O0FBRUosQ0E3RVksb0JBNkVaO0FBQ0ksT0FBQTtBQUNBLFFBQUE7O0FBRUosQ0FqRlksb0JBaUZaO0FBQ0ksT0FBQTtBQUNBLFFBQUE7O0FBRUosQ0FyRlksb0JBcUZaO0FBQ0ksT0FBQTtBQUNBLFFBQUE7O0FBR1IsQ0FqRVk7QUFrRVIsWUFBQTtBQUNBLFdBQUE7QUFDQSxhQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxPQUFBO0FBQ0EsUUFBQTtBQUNBLG1CQUFBO0FBQ0EsdUJBQUEsSUFBQTtBQUNBLHFCQUFBO0FBQ0Esb0JBQUE7QUFDQSxhQUFBLE9BQUE7QUFDQSxjQUFBLFVBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFFSixDQTlFWTtBQStFUixZQUFBO0FBQ0EsV0FBQTtBQUNBLGFBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLE9BQUE7QUFDQSxRQUFBO0FBQ0EsYUFBQSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSx1QkFBQSxJQUFBO0FBQ0EscUJBQUE7QUFDQSxvQkFBQTtBQUNBLGNBQUEsSUFBQSxHQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQSxlQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */"], changeDetection: 0 });
var BenefitsComponent = _BenefitsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BenefitsComponent, { className: "BenefitsComponent", filePath: "src\\app\\benefits\\benefits.component.ts", lineNumber: 16 });
})();

// src/app/core/services/fxch-animation-frame.service.ts
var _FxchAnimationFrameService = class _FxchAnimationFrameService {
  create(callback) {
    let frameId = null;
    const context = {
      request: function() {
        if (frameId) {
          cancelAnimationFrame(frameId);
        }
        frameId = window.requestAnimationFrame(callback);
      }
    };
    return context;
  }
};
_FxchAnimationFrameService.\u0275fac = function FxchAnimationFrameService_Factory(t) {
  return new (t || _FxchAnimationFrameService)();
};
_FxchAnimationFrameService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchAnimationFrameService, factory: _FxchAnimationFrameService.\u0275fac, providedIn: "root" });
var FxchAnimationFrameService = _FxchAnimationFrameService;

// src/app/core/services/fxch-resize-observer.service.ts
var _FxchResizeObserverService = class _FxchResizeObserverService {
  constructor(fxchAnimationFrameService) {
    this.fxchAnimationFrameService = fxchAnimationFrameService;
  }
  create(callback) {
    const animationContext = this.fxchAnimationFrameService.create(callback);
    const observer = new ResizeObserver(animationContext.request);
    return observer;
  }
};
_FxchResizeObserverService.\u0275fac = function FxchResizeObserverService_Factory(t) {
  return new (t || _FxchResizeObserverService)(\u0275\u0275inject(FxchAnimationFrameService));
};
_FxchResizeObserverService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchResizeObserverService, factory: _FxchResizeObserverService.\u0275fac, providedIn: "root" });
var FxchResizeObserverService = _FxchResizeObserverService;

// src/app/core/directives/fxch-scroll-detector/fxch-scroll-detector.directive.ts
var _FxchScrollDetectorDirective = class _FxchScrollDetectorDirective {
  constructor(elementRef, renderer, resizeObserverService) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.resizeObserverService = resizeObserverService;
  }
  ngOnChanges(changes) {
    if (changes.scrollableTraget != null && changes.scrollableTraget.currentValue != null) {
      const scrollable = this.scrollableTraget ? this.scrollableTraget.nativeElement : this.elementRef.nativeElement;
      if (scrollable != null) {
        this.ngOnDestroy();
        this.subscription = fromEvent(scrollable, "scroll").subscribe(() => this.onScroll(scrollable));
        this.resizeObserver = this.resizeObserverService.create(() => this.onScroll(scrollable));
        this.resizeObserver.observe(scrollable);
        this.onScroll(scrollable);
      }
    }
  }
  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.resizeObserver != null) {
      this.resizeObserver.disconnect();
    }
  }
  onScroll(scrollable) {
    const isScrollToBottom = Math.ceil(scrollable.offsetHeight + scrollable.scrollTop) >= scrollable.scrollHeight;
    const isScrollToTop = scrollable.scrollTop === 0;
    this.toggleClass(isScrollToBottom, this.scrollClasses?.bottom);
    this.toggleClass(isScrollToTop, this.scrollClasses?.top);
  }
  toggleClass(isRemoveClass, className) {
    if (!className) {
      return;
    }
    if (isRemoveClass) {
      this.renderer.removeClass(this.elementRef.nativeElement, className);
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, className);
    }
  }
};
_FxchScrollDetectorDirective.\u0275fac = function FxchScrollDetectorDirective_Factory(t) {
  return new (t || _FxchScrollDetectorDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(FxchResizeObserverService));
};
_FxchScrollDetectorDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FxchScrollDetectorDirective, selectors: [["", "fxchScrollDetector", ""]], inputs: { scrollableTraget: "scrollableTraget", scrollClasses: "scrollClasses" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature] });
var FxchScrollDetectorDirective = _FxchScrollDetectorDirective;

// src/app/core/directives/fxch-scrollable/fxch-scrollable-horizontal-item.directive.ts
var _FxchScrollableHorizontalItemDirective = class _FxchScrollableHorizontalItemDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.element = elementRef.nativeElement;
  }
};
_FxchScrollableHorizontalItemDirective.\u0275fac = function FxchScrollableHorizontalItemDirective_Factory(t) {
  return new (t || _FxchScrollableHorizontalItemDirective)(\u0275\u0275directiveInject(ElementRef));
};
_FxchScrollableHorizontalItemDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FxchScrollableHorizontalItemDirective, selectors: [["", "fxchScrollableHorizontalItem", ""]], standalone: true });
var FxchScrollableHorizontalItemDirective = _FxchScrollableHorizontalItemDirective;

// src/app/core/directives/fxch-scrollable/fxch-scrollable-target.directive.ts
var _FxchScrollableTargetDirective = class _FxchScrollableTargetDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.element = elementRef.nativeElement;
  }
};
_FxchScrollableTargetDirective.\u0275fac = function FxchScrollableTargetDirective_Factory(t) {
  return new (t || _FxchScrollableTargetDirective)(\u0275\u0275directiveInject(ElementRef));
};
_FxchScrollableTargetDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FxchScrollableTargetDirective, selectors: [["", "fxchScrollableTarget", ""]], standalone: true });
var FxchScrollableTargetDirective = _FxchScrollableTargetDirective;

// src/app/core/directives/fxch-scrollable/fxch-scrollable-vertical-item.directive.ts
var _FxchScrollableVerticalItemDirective = class _FxchScrollableVerticalItemDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.element = elementRef.nativeElement;
  }
};
_FxchScrollableVerticalItemDirective.\u0275fac = function FxchScrollableVerticalItemDirective_Factory(t) {
  return new (t || _FxchScrollableVerticalItemDirective)(\u0275\u0275directiveInject(ElementRef));
};
_FxchScrollableVerticalItemDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FxchScrollableVerticalItemDirective, selectors: [["", "fxchScrollableVerticalItem", ""]], standalone: true });
var FxchScrollableVerticalItemDirective = _FxchScrollableVerticalItemDirective;

// src/app/core/directives/fxch-scrollable/services/fxch-scrollable-transform.service.ts
var _FxchScrollableTransformService = class _FxchScrollableTransformService {
  getTransform(element) {
    const transform = window.getComputedStyle(element, null).getPropertyValue("-webkit-transform");
    const results = transform.match(/matrix(?:(3d)\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))(?:, (-{0,1}\d+)), -{0,1}\d+\)|\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))\))/);
    if (!results) {
      return { x: 0, y: 0 };
    }
    if (results[1] === "3d") {
      return { x: Number(results[2]), y: Number(results[3]) };
    }
    results.push("0");
    return { x: Number(results[5]), y: Number(results[6]) };
  }
  createHorizontalTransformData(newHorizontal = 0, maxHorizontal = 0, alignByBorder = true) {
    return this.createTransformData(newHorizontal, maxHorizontal, 0, 0, alignByBorder);
  }
  createVerticalTransformData(newVertical = 0, maxVertical = 0, alignByBorder = true) {
    return this.createTransformData(0, 0, newVertical, maxVertical, alignByBorder);
  }
  createTransformData(newHorizontal, maxHorizontal, newVertical, maxVertical, alignByBorder) {
    return {
      newHorizontal,
      maxHorizontal,
      newVertical,
      maxVertical,
      alignByBorder
    };
  }
};
_FxchScrollableTransformService.\u0275fac = function FxchScrollableTransformService_Factory(t) {
  return new (t || _FxchScrollableTransformService)();
};
_FxchScrollableTransformService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchScrollableTransformService, factory: _FxchScrollableTransformService.\u0275fac, providedIn: "root" });
var FxchScrollableTransformService = _FxchScrollableTransformService;

// src/app/core/directives/fxch-scrollable/services/fxch-scrollable-horizontal.service.ts
var _FxchScrollableHorizontalService = class _FxchScrollableHorizontalService {
  constructor(fxchScrollableTransformService) {
    this.fxchScrollableTransformService = fxchScrollableTransformService;
  }
  isHorizontalScrollCalculation(horizontal, event) {
    return horizontal && (event.shiftKey && event.deltaY !== 0 || event.deltaX !== 0);
  }
  calculateTransform(event, scrollableContainer, scrollableState, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    const newTransform = this.getNewEventTransform(event, scrollableState);
    const maxTransform = this.getMaxTransform(scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems);
    return this.fxchScrollableTransformService.createHorizontalTransformData(newTransform, maxTransform);
  }
  calculateWheelTransform(event, scrollableContainer, scrollableState, scrollableTargets, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    const maxTransform = this.getMaxTransform(scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems);
    const currentTransform = this.fxchScrollableTransformService.getTransform(scrollableTargets[0]);
    scrollableState.startHorizontalTransform = currentTransform.x;
    let newTransform = 0;
    let isDeltaNegative = false;
    if (event.deltaX !== 0) {
      newTransform = scrollableState.startHorizontalTransform - event.deltaX;
      isDeltaNegative = event.deltaX < 0;
    } else {
      const correctedDelta = -(event.deltaY >= -10 && event.deltaY <= 10 ? event.deltaY * 10 : event.deltaY);
      newTransform = scrollableState.startHorizontalTransform + correctedDelta;
      isDeltaNegative = event.deltaY < 0;
    }
    if (isDeltaNegative && scrollableState.startHorizontalTransform <= 0 && scrollableState.startHorizontalTransform >= -125) {
      newTransform = 0;
    } else if (!isDeltaNegative && Math.abs(maxTransform) - Math.abs(scrollableState.startHorizontalTransform) <= 125 && Math.abs(maxTransform) - Math.abs(scrollableState.startHorizontalTransform) >= 0) {
      newTransform = -maxTransform;
    }
    return this.fxchScrollableTransformService.createHorizontalTransformData(newTransform, maxTransform);
  }
  calculateIndexTransform(targetItemIndex, scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    if (targetItemIndex < 0) {
      return null;
    }
    const newTransform = this.getNewIndexTransform(targetItemIndex, scrollItemsGapsSum, scrollItemsGap, scrollableItems);
    const maxTransform = this.getMaxTransform(scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems);
    return this.fxchScrollableTransformService.createHorizontalTransformData(newTransform, maxTransform);
  }
  calculateStartTransform(scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    const maxTransform = this.getMaxTransform(scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems);
    return this.fxchScrollableTransformService.createHorizontalTransformData(0, maxTransform);
  }
  calculateEndTransform(scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    const maxTransform = this.getMaxTransform(scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems);
    return this.fxchScrollableTransformService.createHorizontalTransformData(maxTransform, maxTransform);
  }
  trySetTransform(transformationData, scrollableState, scrollableTargets, borderAdjustmentGap) {
    const currentTransform = this.fxchScrollableTransformService.getTransform(scrollableTargets[0]);
    if (this.hasNotReachedAnyBorder(transformationData) || !transformationData.alignByBorder) {
      if (this.shouldAdjustNearLeftBorder(transformationData, scrollableState.startHorizontalTransform, borderAdjustmentGap) && transformationData.alignByBorder) {
        return this.setTransform(0, transformationData, scrollableTargets);
      }
      if (this.shouldAdjustNearRightBorder(transformationData, scrollableState.startHorizontalTransform, borderAdjustmentGap) && transformationData.alignByBorder) {
        return this.setTransform(-transformationData.maxHorizontal, transformationData, scrollableTargets);
      }
      return this.setTransform(transformationData.newHorizontal, transformationData, scrollableTargets);
    } else if (transformationData.newHorizontal < 0 && Math.abs(transformationData.newHorizontal) > transformationData.maxHorizontal || Math.abs(currentTransform.x) > transformationData.maxHorizontal) {
      return this.setTransform(-transformationData.maxHorizontal, transformationData, scrollableTargets);
    } else if (transformationData.newHorizontal > 0) {
      return this.setTransform(0, transformationData, scrollableTargets);
    }
    return null;
  }
  getIndexTransformItemData(targetItemIndex, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    const itemTransformValue = this.getNewIndexTransform(targetItemIndex, scrollItemsGapsSum, scrollItemsGap, scrollableItems);
    const itemWidth = scrollableItems[targetItemIndex].offsetWidth;
    return { transformValue: Math.abs(itemTransformValue), width: itemWidth };
  }
  /**
  * Calculates max X transform position value (positive).
  */
  getMaxTransform(scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    const gapsWidth = scrollItemsGapsSum > 0 ? scrollItemsGapsSum : (scrollableItems.length - 1) * scrollItemsGap;
    const scrollableElementsWidth = scrollableItems.reduce((sum, element) => sum + element.offsetWidth, 0) + gapsWidth;
    let maxTransform = scrollableElementsWidth - scrollableContainer.offsetWidth;
    if (maxTransform <= 0) {
      maxTransform = 0;
    }
    return maxTransform;
  }
  getNewEventTransform(event, scrollableState) {
    if (event == null) {
      return 0;
    }
    const eventPositionX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const startEventPositonX = scrollableState.dragStartPositionEvent instanceof MouseEvent ? scrollableState.dragStartPositionEvent.clientX : scrollableState.dragStartPositionEvent?.touches[0].clientX;
    return scrollableState.startHorizontalTransform + (eventPositionX - (startEventPositonX || 0));
  }
  getNewIndexTransform(targetItemIndex, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    const gapsWidth = scrollItemsGapsSum > 0 ? scrollItemsGapsSum : targetItemIndex * scrollItemsGap;
    const scrollableItemsWidthCalculationAction = (sum, element, index) => {
      return index < targetItemIndex ? sum + element.offsetWidth : sum;
    };
    const scrollableElementsWithGapsWidth = scrollableItems.reduce(scrollableItemsWidthCalculationAction, 0) + gapsWidth;
    return -scrollableElementsWithGapsWidth;
  }
  hasNotReachedAnyBorder(transformationData) {
    return transformationData.newHorizontal <= 0 && transformationData.maxHorizontal >= 0 && Math.abs(transformationData.newHorizontal) <= transformationData.maxHorizontal;
  }
  shouldAdjustNearLeftBorder(transformationData, startHorizontalTransform, borderAdjustmentGap) {
    return transformationData.newHorizontal >= -borderAdjustmentGap && startHorizontalTransform !== 0 && Math.abs(transformationData.maxHorizontal) > borderAdjustmentGap;
  }
  shouldAdjustNearRightBorder(transformationData, startHorizontalTransform, borderAdjustmentGap) {
    return Math.abs(transformationData.maxHorizontal) - Math.abs(transformationData.newHorizontal) <= borderAdjustmentGap && startHorizontalTransform !== 0 && Math.abs(transformationData.maxHorizontal) > borderAdjustmentGap;
  }
  setTransform(transform, transformationData, scrollableTargets) {
    if (scrollableTargets != null && scrollableTargets.length > 0) {
      scrollableTargets.forEach((element) => {
        const currentTransform = this.fxchScrollableTransformService.getTransform(element);
        element.style.transform = `translate3d(${Math.round(transform)}px, ${currentTransform.y}px, 0px)`;
      });
      return { horizontal: Math.round(transform), maxHorizontal: transformationData.maxHorizontal };
    }
    return null;
  }
};
_FxchScrollableHorizontalService.\u0275fac = function FxchScrollableHorizontalService_Factory(t) {
  return new (t || _FxchScrollableHorizontalService)(\u0275\u0275inject(FxchScrollableTransformService));
};
_FxchScrollableHorizontalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchScrollableHorizontalService, factory: _FxchScrollableHorizontalService.\u0275fac, providedIn: "root" });
var FxchScrollableHorizontalService = _FxchScrollableHorizontalService;

// src/app/core/directives/fxch-scrollable/services/fxch-scrollable-vertical.service.ts
var _FxchScrollableVerticalService = class _FxchScrollableVerticalService {
  constructor(fxchScrollableTransformService) {
    this.fxchScrollableTransformService = fxchScrollableTransformService;
  }
  isVerticalScrollCalculation(vertical, event) {
    return vertical && !event.shiftKey && event.deltaY !== 0;
  }
  calculateTransform(event, scrollable, scrollableContainer, scrollableState) {
    const newTransform = this.getNewEventTransform(event, scrollableState);
    const maxTransform = this.getMaxTransform(scrollable, scrollableContainer);
    return this.fxchScrollableTransformService.createVerticalTransformData(newTransform, maxTransform);
  }
  calculateWheelTransform(event, scrollable, scrollableContainer, scrollableState, scrollableTargets) {
    const maxTransform = this.getMaxTransform(scrollable, scrollableContainer);
    const currentTransform = this.fxchScrollableTransformService.getTransform(scrollableTargets[0]);
    scrollableState.startVerticalTransform = currentTransform.y;
    const correctedDelta = -(event.deltaY >= -10 && event.deltaY <= 10 ? event.deltaY * 10 : event.deltaY);
    let newTransform = scrollableState.startVerticalTransform + correctedDelta;
    if (event.deltaY < 0 && scrollableState.startVerticalTransform <= 0 && scrollableState.startVerticalTransform >= -125) {
      newTransform = 0;
    } else if (event.deltaY > 0 && Math.abs(maxTransform) - Math.abs(scrollableState.startVerticalTransform) <= 125 && Math.abs(maxTransform) - Math.abs(scrollableState.startVerticalTransform) >= 0) {
      newTransform = -maxTransform;
    }
    return this.fxchScrollableTransformService.createVerticalTransformData(newTransform > 0 ? -newTransform : newTransform, maxTransform);
  }
  calculateIndexTransform(targetItemIndex, scrollable, scrollableContainer, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    if (targetItemIndex < 0) {
      return null;
    }
    const newTransform = this.getNewIndexTransform(targetItemIndex, scrollItemsGapsSum, scrollItemsGap, scrollableItems);
    const maxTransform = this.getMaxTransform(scrollable, scrollableContainer);
    return this.fxchScrollableTransformService.createVerticalTransformData(newTransform, maxTransform);
  }
  calculateStartTransform(scrollable, scrollableContainer) {
    const maxTransform = this.getMaxTransform(scrollable, scrollableContainer);
    return this.fxchScrollableTransformService.createVerticalTransformData(0, maxTransform);
  }
  calculateEndTransform(scrollable, scrollableContainer) {
    const maxTransform = this.getMaxTransform(scrollable, scrollableContainer);
    return this.fxchScrollableTransformService.createVerticalTransformData(maxTransform, maxTransform);
  }
  trySetTransform(transformationData, scrollableState, scrollableTargets, borderAdjustmentGap) {
    const currentTransform = this.fxchScrollableTransformService.getTransform(scrollableTargets[0]);
    if (this.hasNotReachedAnyBorder(transformationData) || !transformationData.alignByBorder) {
      if (this.shouldAdjustNearTopBorder(transformationData, scrollableState.startVerticalTransform, borderAdjustmentGap) && transformationData.alignByBorder) {
        return this.setTransform(0, transformationData, scrollableTargets);
      }
      if (this.shouldAdjustNearBottomBorder(transformationData, scrollableState.startVerticalTransform, borderAdjustmentGap) && transformationData.alignByBorder) {
        return this.setTransform(-transformationData.maxVertical, transformationData, scrollableTargets);
      }
      return this.setTransform(transformationData.newVertical, transformationData, scrollableTargets);
    } else if (transformationData.newVertical < 0 && Math.abs(transformationData.newVertical) > transformationData.maxVertical || Math.abs(currentTransform.y) > transformationData.maxVertical) {
      return this.setTransform(-transformationData.maxVertical, transformationData, scrollableTargets);
    } else if (transformationData.newVertical > 0) {
      return this.setTransform(0, transformationData, scrollableTargets);
    }
    return null;
  }
  getMaxTransform(scrollable, scrollableContainer) {
    let maxTransform = scrollableContainer.offsetHeight - scrollable.offsetHeight;
    if (maxTransform <= 0) {
      maxTransform = 0;
    }
    return maxTransform;
  }
  getNewEventTransform(event, scrollableState) {
    if (event == null) {
      return 0;
    }
    const eventPostionY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
    const startEventPostionY = scrollableState.dragStartPositionEvent instanceof MouseEvent ? scrollableState.dragStartPositionEvent.clientY : scrollableState.dragStartPositionEvent?.touches[0].clientY;
    return scrollableState.startVerticalTransform + (eventPostionY - (startEventPostionY || 0));
  }
  getNewIndexTransform(targetItemIndex, scrollItemsGapsSum, scrollItemsGap, scrollableItems) {
    const gapsHeight = scrollItemsGapsSum > 0 ? scrollItemsGapsSum : targetItemIndex * scrollItemsGap;
    const scrollableItemsHeightCalculationAction = (sum, element, index) => {
      return index < targetItemIndex ? sum + element.offsetHeight : sum;
    };
    const scrollableElementsHeightGapsWidth = scrollableItems.reduce(scrollableItemsHeightCalculationAction, 0) + gapsHeight;
    return -scrollableElementsHeightGapsWidth;
  }
  hasNotReachedAnyBorder(transformationData) {
    return transformationData.newVertical <= 0 && transformationData.maxVertical >= 0 && Math.abs(transformationData.newVertical) <= transformationData.maxVertical;
  }
  shouldAdjustNearTopBorder(transformationData, startVerticalTransform, borderAdjustmentGap) {
    return transformationData.newVertical >= -borderAdjustmentGap && startVerticalTransform !== 0 && Math.abs(transformationData.maxVertical) > borderAdjustmentGap;
  }
  shouldAdjustNearBottomBorder(transformationData, startVerticalTransform, borderAdjustmentGap) {
    return Math.abs(transformationData.maxVertical) - Math.abs(transformationData.newVertical) <= borderAdjustmentGap && startVerticalTransform !== 0 && Math.abs(transformationData.maxVertical) > borderAdjustmentGap;
  }
  setTransform(transform, transformationData, scrollableTargets) {
    if (scrollableTargets != null && scrollableTargets.length > 0) {
      scrollableTargets.forEach((element) => {
        const currentTransform = this.fxchScrollableTransformService.getTransform(element);
        element.style.transform = `translate3d(${currentTransform.x}px, ${Math.round(transform)}px, 0px)`;
      });
      return { vertical: Math.round(transform), maxVertical: transformationData.maxVertical };
    }
    return null;
  }
};
_FxchScrollableVerticalService.\u0275fac = function FxchScrollableVerticalService_Factory(t) {
  return new (t || _FxchScrollableVerticalService)(\u0275\u0275inject(FxchScrollableTransformService));
};
_FxchScrollableVerticalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchScrollableVerticalService, factory: _FxchScrollableVerticalService.\u0275fac, providedIn: "root" });
var FxchScrollableVerticalService = _FxchScrollableVerticalService;

// src/app/core/directives/fxch-scrollable/fxch-scrollable.directive.ts
var _FxchScrollableDirective = class _FxchScrollableDirective {
  constructor(scrollableRef, fxchScrollableHorizontalService, fxchScrollableVerticalService, fxchScrollableTransformService, fxchResizeObserverService) {
    this.scrollableRef = scrollableRef;
    this.fxchScrollableHorizontalService = fxchScrollableHorizontalService;
    this.fxchScrollableVerticalService = fxchScrollableVerticalService;
    this.fxchScrollableTransformService = fxchScrollableTransformService;
    this.fxchResizeObserverService = fxchResizeObserverService;
    this.horizontal = false;
    this.vertical = true;
    this.scrollItemsGap = 0;
    this.scrollItemsGapsSum = 0;
    this.isDragScrollEnabled = true;
    this.borderAdjustmentGap = 15;
    this.onInitialized = new EventEmitter();
    this.onChanged = new EventEmitter();
    this.scrollableState = {
      startVerticalTransform: 0,
      startHorizontalTransform: 0,
      isDragCalculationEnabled: false,
      dragStartPositionEvent: null
    };
    this.isDraggingForApi = false;
    this.scrollable = scrollableRef.nativeElement;
  }
  ngAfterContentChecked() {
    if (this.scrollableContainers == null || this.scrollableContainers.length === 0) {
      throw new Error("FxchScrollableDirective cannot find FxchScrollableContainerDirective.");
    }
    if (this.scrollableTargets == null || this.scrollableTargets.length === 0) {
      throw new Error("FxchScrollableDirective cannot find FxchScrollableTargetDirective.");
    }
    if (this.horizontal && (this.horizontalScrollableItems == null || this.horizontalScrollableItems.length === 0)) {
      throw new Error("FxchScrollableDirective cannot find FxchScrollableContainerDirective child fxchScrollableHorizontalItem elements.");
    }
    if (this.vertical && (this.verticalScrollableItems == null || this.verticalScrollableItems.length === 0)) {
      throw new Error("FxchScrollableDirective cannot find FxchScrollableContainerDirective child fxchScrollableVerticalItem elements.");
    }
    this.scrollableContainersArray = this.scrollableContainers.map((c) => c.element);
    this.scrollableTargetsArray = this.scrollableTargets.map((t) => t.element);
    this.horizontalScrollableItemsArray = this.horizontalScrollableItems?.map((i) => i.element) || [];
    this.verticalScrollableItemsArray = this.verticalScrollableItems?.map((i) => i.element) || [];
    this.resizeObserver = this.fxchResizeObserverService.create(() => this.adjustBorders());
    this.resizeObserver.observe(document.body);
    this.onInitialized.emit({
      moveTo: (options) => this.onIndexMove(options),
      moveToTransform: (options) => this.onTransformMove(options),
      moveToBorder: (options) => this.moveToBorder(options),
      getIndexTransformItemData: (options) => this.fxchScrollableHorizontalService.getIndexTransformItemData(options.horizontalItemIndex || 0, this.scrollItemsGapsSum || 0, this.scrollItemsGap || 0, this.horizontalScrollableItemsArray),
      getCurrentTransform: () => this.getCurrentTransform(),
      scrollable: () => this.scrollable,
      scrollableContainers: () => this.scrollableContainersArray,
      scrollableTargets: () => this.scrollableTargetsArray,
      isDragging: () => this.isDraggingForApi
    });
  }
  ngOnDestroy() {
    if (this.resizeObserver != null) {
      this.resizeObserver.disconnect();
    }
  }
  adjustBorders() {
    const currentTransform = this.getCurrentTransform();
    const horizontal = Math.abs(currentTransform.horizontal || 0);
    const maxHorizontal = Math.abs(currentTransform.maxHorizontal || 0);
    const vertical = Math.abs(currentTransform.vertical || 0);
    const maxVertical = Math.abs(currentTransform.maxVertical || 0);
    const adjustOptions = {
      horizontalStart: false,
      horizontalEnd: horizontal > maxHorizontal,
      verticalStart: false,
      verticalEnd: vertical > maxVertical
    };
    if (adjustOptions.horizontalEnd || adjustOptions.verticalEnd) {
      this.moveToBorder(adjustOptions);
    } else {
      const resultTransform = {
        horizontal,
        maxHorizontal,
        vertical,
        maxVertical
      };
      this.postTransform(resultTransform);
      this.onChanged.emit(resultTransform);
    }
  }
  onIndexMove(options) {
    if (!this.horizontal && !this.vertical) {
      return;
    }
    const transformationDataX = this.fxchScrollableHorizontalService.calculateIndexTransform(options.horizontalItemIndex, this.scrollableContainersArray[0], this.scrollItemsGapsSum || 0, this.scrollItemsGap || 0, this.horizontalScrollableItemsArray);
    const transformationDataY = this.fxchScrollableVerticalService.calculateIndexTransform(options.verticalItemIndex, this.scrollable, this.scrollableContainersArray[0], this.scrollItemsGapsSum || 0, this.scrollItemsGap || 0, this.verticalScrollableItemsArray);
    const resultTransform = {};
    if (transformationDataX != null) {
      const resultHorizontalTransform = this.fxchScrollableHorizontalService.trySetTransform(transformationDataX, this.scrollableState, this.scrollableTargetsArray, this.borderAdjustmentGap || 0);
      if (resultHorizontalTransform != null) {
        resultTransform.horizontal = resultHorizontalTransform.horizontal;
        resultTransform.maxHorizontal = resultHorizontalTransform.maxHorizontal;
      }
    }
    if (transformationDataY != null) {
      const resultVerticalTransform = this.fxchScrollableVerticalService.trySetTransform(transformationDataY, this.scrollableState, this.scrollableTargetsArray, this.borderAdjustmentGap || 0);
      if (resultVerticalTransform != null) {
        resultTransform.vertical = resultVerticalTransform.vertical;
        resultTransform.maxVertical = resultVerticalTransform.maxVertical;
      }
    }
    this.postTransform(resultTransform);
    this.onChanged.emit(resultTransform);
  }
  onTransformMove(options) {
    if (!this.horizontal && !this.vertical) {
      return;
    }
    const currentTransform = this.getCurrentTransform();
    const transformationDataX = this.fxchScrollableTransformService.createHorizontalTransformData(options.horizontal, currentTransform.maxHorizontal);
    const transformationDataY = this.fxchScrollableTransformService.createVerticalTransformData(options.vertical, currentTransform.maxVertical);
    const resultTransform = {};
    const resultHorizontalTransform = this.fxchScrollableHorizontalService.trySetTransform(transformationDataX, this.scrollableState, this.scrollableTargetsArray, this.borderAdjustmentGap || 0);
    if (resultHorizontalTransform != null) {
      resultTransform.horizontal = resultHorizontalTransform.horizontal;
      resultTransform.maxHorizontal = resultHorizontalTransform.maxHorizontal;
    }
    const resultVerticalTransform = this.fxchScrollableVerticalService.trySetTransform(transformationDataY, this.scrollableState, this.scrollableTargetsArray, this.borderAdjustmentGap || 0);
    if (resultVerticalTransform != null) {
      resultTransform.vertical = resultVerticalTransform.vertical;
      resultTransform.maxVertical = resultVerticalTransform.maxVertical;
    }
    this.postTransform(resultTransform);
    this.onChanged.emit(resultTransform);
  }
  moveToBorder(options) {
    if (!this.horizontal && !this.vertical) {
      return;
    }
    let transformationDataX = null;
    let transformationDataY = null;
    if (options.horizontalStart) {
      transformationDataX = this.fxchScrollableHorizontalService.calculateStartTransform(this.scrollableContainersArray[0], this.scrollItemsGapsSum || 0, this.scrollItemsGap || 0, this.horizontalScrollableItemsArray);
    } else if (options.horizontalEnd) {
      transformationDataX = this.fxchScrollableHorizontalService.calculateEndTransform(this.scrollableContainersArray[0], this.scrollItemsGapsSum || 0, this.scrollItemsGap || 0, this.horizontalScrollableItemsArray);
    }
    if (options.verticalStart) {
      transformationDataY = this.fxchScrollableVerticalService.calculateStartTransform(this.scrollable, this.scrollableContainersArray[0]);
    } else if (options.verticalEnd) {
      transformationDataY = this.fxchScrollableVerticalService.calculateEndTransform(this.scrollable, this.scrollableContainersArray[0]);
    }
    const resultTransform = {};
    if (transformationDataX != null) {
      const resultHorizontalTransform = this.fxchScrollableHorizontalService.trySetTransform(transformationDataX, this.scrollableState, this.scrollableTargetsArray, this.borderAdjustmentGap || 0);
      if (resultHorizontalTransform != null) {
        resultTransform.horizontal = resultHorizontalTransform.horizontal;
        resultTransform.maxHorizontal = resultHorizontalTransform.maxHorizontal;
      }
    }
    if (transformationDataY != null) {
      const resultVerticalTransform = this.fxchScrollableVerticalService.trySetTransform(transformationDataY, this.scrollableState, this.scrollableTargetsArray, this.borderAdjustmentGap || 0);
      if (resultVerticalTransform != null) {
        resultTransform.vertical = resultVerticalTransform.vertical;
        resultTransform.maxVertical = resultVerticalTransform.maxVertical;
      }
    }
    this.postTransform(resultTransform);
    this.onChanged.emit(resultTransform);
  }
  getCurrentTransform() {
    const currentTransform = this.fxchScrollableTransformService.getTransform(this.scrollableTargetsArray[0]);
    const horizontalMaxTransform = this.fxchScrollableHorizontalService.getMaxTransform(this.scrollableContainersArray[0], this.scrollItemsGapsSum || 0, this.scrollItemsGap || 0, this.horizontalScrollableItemsArray);
    const verticalMaxTransform = this.fxchScrollableVerticalService.getMaxTransform(this.scrollable, this.scrollableContainersArray[0]);
    return {
      horizontal: currentTransform.x,
      maxHorizontal: horizontalMaxTransform,
      vertical: currentTransform.y,
      maxVertical: verticalMaxTransform
    };
  }
  postTransform(transform) {
    if (this.vertical && this.verticalTransformSettings != null) {
      this.tryAddBorderClasses(transform, this.verticalTransformSettings, this.hasReachedTopBorder, this.hasReachedBottomBorder);
    }
    if (this.horizontal && this.horizontalTransformSettings != null) {
      this.tryAddBorderClasses(transform, this.horizontalTransformSettings, this.hasReachedLeftBorder, this.hasReachedRightBorder);
    }
  }
  tryAddBorderClasses(transform, settings, hasReachedStart, hasRechedEnd) {
    if (settings.startBorderReachedClass) {
      if (hasReachedStart(transform)) {
        this.scrollable.classList.remove(settings.startBorderReachedClass);
      } else {
        this.scrollable.classList.add(settings.startBorderReachedClass);
      }
    }
    if (settings.endBorderReachedClass) {
      if (hasRechedEnd(transform)) {
        this.scrollable.classList.remove(settings.endBorderReachedClass);
      } else {
        this.scrollable.classList.add(settings.endBorderReachedClass);
      }
    }
  }
  hasReachedLeftBorder(transform) {
    return transform.horizontal === 0;
  }
  hasReachedRightBorder(transform) {
    if (transform.horizontal == null || transform.maxHorizontal == null) {
      return false;
    }
    return Math.abs(transform.horizontal) === Math.abs(transform.maxHorizontal);
  }
  hasReachedTopBorder(transform) {
    return transform.vertical === 0;
  }
  hasReachedBottomBorder(transform) {
    if (transform.vertical == null || transform.maxVertical == null) {
      return false;
    }
    return Math.abs(transform.vertical) === Math.abs(transform.maxVertical);
  }
};
_FxchScrollableDirective.\u0275fac = function FxchScrollableDirective_Factory(t) {
  return new (t || _FxchScrollableDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FxchScrollableHorizontalService), \u0275\u0275directiveInject(FxchScrollableVerticalService), \u0275\u0275directiveInject(FxchScrollableTransformService), \u0275\u0275directiveInject(FxchResizeObserverService));
};
_FxchScrollableDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FxchScrollableDirective, selectors: [["", "fxchScrollable", ""]], contentQueries: function FxchScrollableDirective_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuery(dirIndex, FxchScrollableContainerDirective, 5);
    \u0275\u0275contentQuery(dirIndex, FxchScrollableTargetDirective, 5);
    \u0275\u0275contentQuery(dirIndex, FxchScrollableHorizontalItemDirective, 5);
    \u0275\u0275contentQuery(dirIndex, FxchScrollableVerticalItemDirective, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollableContainers = _t);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollableTargets = _t);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.horizontalScrollableItems = _t);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.verticalScrollableItems = _t);
  }
}, inputs: { horizontal: "horizontal", vertical: "vertical", scrollItemsGap: "scrollItemsGap", scrollItemsGapsSum: "scrollItemsGapsSum", isDragScrollEnabled: "isDragScrollEnabled", borderAdjustmentGap: "borderAdjustmentGap", horizontalTransformSettings: "horizontalTransformSettings", verticalTransformSettings: "verticalTransformSettings" }, outputs: { onInitialized: "onInitialized", onChanged: "onChanged" }, standalone: true });
var FxchScrollableDirective = _FxchScrollableDirective;

// src/app/core/directives/fxch-scrollable/fxch-scrollable-container.directive.ts
var _FxchScrollableContainerDirective = class _FxchScrollableContainerDirective {
  constructor(fxchScrollable, elementRef, fxchScrollableHorizontalService, fxchScrollableVerticalService, fxchScrollableTransformService) {
    this.fxchScrollable = fxchScrollable;
    this.elementRef = elementRef;
    this.fxchScrollableHorizontalService = fxchScrollableHorizontalService;
    this.fxchScrollableVerticalService = fxchScrollableVerticalService;
    this.fxchScrollableTransformService = fxchScrollableTransformService;
    this.element = elementRef.nativeElement;
  }
  onMouseWheel(event) {
    const isVerticalCalculation = this.fxchScrollableVerticalService.isVerticalScrollCalculation(this.fxchScrollable.vertical || false, event);
    const resultTransform = {};
    if (isVerticalCalculation) {
      this.stopEvents(event);
      const transformationDataY = this.fxchScrollableVerticalService.calculateWheelTransform(event, this.fxchScrollable.scrollable, this.element, this.fxchScrollable.scrollableState, this.fxchScrollable.scrollableTargetsArray);
      const resultVerticalTransform = this.fxchScrollableVerticalService.trySetTransform(transformationDataY, this.fxchScrollable.scrollableState, this.fxchScrollable.scrollableTargetsArray, this.fxchScrollable.borderAdjustmentGap || 0);
      if (resultVerticalTransform != null) {
        resultTransform.vertical = resultVerticalTransform.vertical;
        resultTransform.maxVertical = resultVerticalTransform.maxVertical;
      }
    }
    const isHorizontalCalculation = this.fxchScrollableHorizontalService.isHorizontalScrollCalculation(this.fxchScrollable.horizontal || false, event);
    if (isHorizontalCalculation) {
      this.stopEvents(event);
      const transformationDataX = this.fxchScrollableHorizontalService.calculateWheelTransform(event, this.element, this.fxchScrollable.scrollableState, this.fxchScrollable.scrollableTargetsArray, this.fxchScrollable.scrollItemsGapsSum || 0, this.fxchScrollable.scrollItemsGapsSum || 0, this.fxchScrollable.horizontalScrollableItemsArray);
      const resultHorizontalTransform = this.fxchScrollableHorizontalService.trySetTransform(transformationDataX, this.fxchScrollable.scrollableState, this.fxchScrollable.scrollableTargetsArray, this.fxchScrollable.borderAdjustmentGap || 0);
      if (resultHorizontalTransform != null) {
        resultTransform.horizontal = resultHorizontalTransform.horizontal;
        resultTransform.maxHorizontal = resultHorizontalTransform.maxHorizontal;
      }
    }
    this.fxchScrollable.postTransform(resultTransform);
    this.fxchScrollable.onChanged.emit(resultTransform);
  }
  onTouchStart(event) {
    if (!this.fxchScrollable.isDragScrollEnabled) {
      return;
    }
    this.fxchScrollable.scrollableState.isDragCalculationEnabled = true;
    this.fxchScrollable.scrollableState.dragStartPositionEvent = event;
    const currentTransform = this.fxchScrollableTransformService.getTransform(this.fxchScrollable.scrollableTargetsArray[0]);
    this.fxchScrollable.scrollableState.startHorizontalTransform = currentTransform.x;
    this.fxchScrollable.scrollableState.startVerticalTransform = currentTransform.y;
  }
  onTouchEnd() {
    if (!this.fxchScrollable.isDragScrollEnabled) {
      return;
    }
    this.fxchScrollable.scrollableState.isDragCalculationEnabled = false;
    setTimeout(() => this.fxchScrollable.isDraggingForApi = false);
  }
  onTouchMove(event) {
    if (!this.fxchScrollable.isDragScrollEnabled || !this.fxchScrollable.scrollableState.isDragCalculationEnabled) {
      return;
    }
    this.stopEvents(event);
    const resultTransform = {};
    if (this.fxchScrollable.horizontal) {
      const transformationDataX = this.fxchScrollableHorizontalService.calculateTransform(event, this.element, this.fxchScrollable.scrollableState, this.fxchScrollable.scrollItemsGapsSum || 0, this.fxchScrollable.scrollItemsGap || 0, this.fxchScrollable.horizontalScrollableItemsArray);
      const resultHorizontalTransform = this.fxchScrollableHorizontalService.trySetTransform(transformationDataX, this.fxchScrollable.scrollableState, this.fxchScrollable.scrollableTargetsArray, this.fxchScrollable.borderAdjustmentGap || 0);
      if (resultHorizontalTransform != null) {
        resultTransform.horizontal = resultHorizontalTransform.horizontal;
        resultTransform.maxHorizontal = resultHorizontalTransform.maxHorizontal;
        if (resultHorizontalTransform.horizontal !== this.fxchScrollable.scrollableState.startHorizontalTransform) {
          this.fxchScrollable.isDraggingForApi = true;
        }
      }
    }
    if (this.fxchScrollable.vertical) {
      const transformationDataY = this.fxchScrollableVerticalService.calculateTransform(event, this.fxchScrollable.scrollable, this.element, this.fxchScrollable.scrollableState);
      const resultVerticalTransform = this.fxchScrollableVerticalService.trySetTransform(transformationDataY, this.fxchScrollable.scrollableState, this.fxchScrollable.scrollableTargetsArray, this.fxchScrollable.borderAdjustmentGap || 0);
      if (resultVerticalTransform != null) {
        resultTransform.vertical = resultVerticalTransform.vertical;
        resultTransform.maxVertical = resultVerticalTransform.maxVertical;
        if (resultVerticalTransform.vertical !== this.fxchScrollable.scrollableState.startVerticalTransform) {
          this.fxchScrollable.isDraggingForApi = true;
        }
      }
    }
    this.fxchScrollable.postTransform(resultTransform);
    this.fxchScrollable.onChanged.emit(resultTransform);
  }
  stopEvents(event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
_FxchScrollableContainerDirective.\u0275fac = function FxchScrollableContainerDirective_Factory(t) {
  return new (t || _FxchScrollableContainerDirective)(\u0275\u0275directiveInject(FxchScrollableDirective, 1), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FxchScrollableHorizontalService), \u0275\u0275directiveInject(FxchScrollableVerticalService), \u0275\u0275directiveInject(FxchScrollableTransformService));
};
_FxchScrollableContainerDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FxchScrollableContainerDirective, selectors: [["", "fxchScrollableContainer", ""]], hostBindings: function FxchScrollableContainerDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousewheel", function FxchScrollableContainerDirective_mousewheel_HostBindingHandler($event) {
      return ctx.onMouseWheel($event);
    })("mousedown", function FxchScrollableContainerDirective_mousedown_HostBindingHandler($event) {
      return ctx.onTouchStart($event);
    })("touchstart", function FxchScrollableContainerDirective_touchstart_HostBindingHandler($event) {
      return ctx.onTouchStart($event);
    })("mouseup", function FxchScrollableContainerDirective_mouseup_HostBindingHandler() {
      return ctx.onTouchEnd();
    })("mouseleave", function FxchScrollableContainerDirective_mouseleave_HostBindingHandler() {
      return ctx.onTouchEnd();
    })("touchend", function FxchScrollableContainerDirective_touchend_HostBindingHandler() {
      return ctx.onTouchEnd();
    })("touchcancel", function FxchScrollableContainerDirective_touchcancel_HostBindingHandler() {
      return ctx.onTouchEnd();
    })("mousemove", function FxchScrollableContainerDirective_mousemove_HostBindingHandler($event) {
      return ctx.onTouchMove($event);
    })("touchmove", function FxchScrollableContainerDirective_touchmove_HostBindingHandler($event) {
      return ctx.onTouchMove($event);
    });
  }
}, standalone: true });
var FxchScrollableContainerDirective = _FxchScrollableContainerDirective;

// src/app/partners/partners.component.ts
var _PartnersComponent = class _PartnersComponent {
  constructor() {
    this.columnGap = 80;
    this.fxchScrollableApi = null;
    this.animationInterval = null;
    this.moveToHorizontal = 0;
    this.movingToRightBorder = true;
  }
  ngAfterViewInit() {
    this.enableAutoScroll();
  }
  ngOnDestroy() {
    this.disableAutoScroll();
  }
  onScrollableInitialized(fxchScrollableApi) {
    this.fxchScrollableApi = fxchScrollableApi;
  }
  enableAutoScroll() {
    this.disableAutoScroll();
    const currentTransform = this.fxchScrollableApi?.getCurrentTransform();
    if (currentTransform == null) {
      return;
    }
    this.movingToRightBorder = currentTransform.horizontal < this.moveToHorizontal;
    this.moveToHorizontal = currentTransform.horizontal;
    this.animationInterval = setInterval(() => {
      if (Math.abs(this.moveToHorizontal) === Math.abs(currentTransform.maxHorizontal)) {
        this.movingToRightBorder = false;
      } else if (Math.abs(this.moveToHorizontal) === 0) {
        this.movingToRightBorder = true;
      }
      if (this.movingToRightBorder) {
        this.moveToHorizontal -= 1;
      } else {
        this.moveToHorizontal += 1;
      }
      this.fxchScrollableApi?.moveToTransform({
        horizontal: this.moveToHorizontal,
        vertical: 0
      });
    });
  }
  disableAutoScroll() {
    if (this.animationInterval != null) {
      clearInterval(this.animationInterval);
    }
  }
};
_PartnersComponent.\u0275fac = function PartnersComponent_Factory(t) {
  return new (t || _PartnersComponent)();
};
_PartnersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnersComponent, selectors: [["partners"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 119, vars: 9, consts: [[1, "fxch-partners"], [1, "fxch-partners-container"], [1, "fxch-partners-title"], ["fxchScrollable", "", 1, "fxch-partners-carousel", 3, "vertical", "horizontal", "scrollItemsGap", "borderAdjustmentGap", "onInitialized"], ["carousel", ""], ["fxchScrollableContainer", "", "fxchScrollableTarget", "", 1, "fxch-partners-box", 3, "mouseenter", "mouseleave", "touchstart", "touchend"], ["fxchScrollableHorizontalItem", "", 2, "width", "308px", "height", "82px"], ["viewBox", "0 0 308 82", "xmlns", "http://www.w3.org/2000/svg", 1, "fxch-partners-img"], ["d", "M41.7564 21.4391C28.7429 21.4534 15.9404 18.1468 4.55847 11.8313V13.0562C15.0894 19.3848 23.954 28.1448 30.4112 38.6039C36.8684 49.0632 40.7307 60.9176 41.6753 73.1766H42.6379C43.5748 61.0516 47.3659 49.3208 53.7011 38.944C60.0364 28.5673 68.7358 19.8394 79.0879 13.4742V11.7848C67.6693 18.1352 54.8188 21.4584 41.7564 21.4391Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M42.1508 81.3966C45.9336 81.3966 49.0001 78.3271 49.0001 74.5406C49.0001 70.754 45.9336 67.6843 42.1508 67.6843C38.3682 67.6843 35.3018 70.754 35.3018 74.5406C35.3018 78.3271 38.3682 81.3966 42.1508 81.3966Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M6.8492 20.1501C10.6319 20.1501 13.6984 17.0806 13.6984 13.2941C13.6984 9.50754 10.6319 6.43794 6.8492 6.43794C3.0665 6.43794 0 9.50754 0 13.2941C0 17.0806 3.0665 20.1501 6.8492 20.1501Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M77.1987 20.1501C80.9812 20.1501 84.0477 17.0806 84.0477 13.2941C84.0477 9.50754 80.9812 6.43794 77.1987 6.43794C73.4159 6.43794 70.3494 9.50754 70.3494 13.2941C70.3494 17.0806 73.4159 20.1501 77.1987 20.1501Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M14.9744 57.2415C17.8828 57.2415 20.2403 54.8814 20.2403 51.9702C20.2403 49.0589 17.8828 46.6988 14.9744 46.6988C12.0661 46.6988 9.7085 49.0589 9.7085 51.9702C9.7085 54.8814 12.0661 57.2415 14.9744 57.2415Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M69.0717 57.2415C71.9799 57.2415 74.3377 54.8814 74.3377 51.9702C74.3377 49.0589 71.9799 46.6988 69.0717 46.6988C66.1634 46.6988 63.8058 49.0589 63.8058 51.9702C63.8058 54.8814 66.1634 57.2415 69.0717 57.2415Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M42.1218 10.5425C45.03 10.5425 47.3877 8.18251 47.3877 5.27127C47.3877 2.36003 45.03 0 42.1218 0C39.2134 0 36.8558 2.36003 36.8558 5.27127C36.8558 8.18251 39.2134 10.5425 42.1218 10.5425Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M108.857 51.7948C106.293 51.8652 103.762 51.1962 101.567 49.8675C99.5297 48.5717 97.9168 46.7069 96.9273 44.5033C95.8192 42.044 95.2706 39.3692 95.3207 36.6719C95.275 34.0011 95.8238 31.3537 96.9273 28.9217C97.9317 26.7045 99.5576 24.827 101.607 23.5169C103.52 22.3875 105.671 21.723 107.887 21.5768C110.103 21.4305 112.322 21.8067 114.366 22.6751C115.987 23.4113 117.398 24.5407 118.472 25.961C119.604 27.484 120.363 29.2518 120.688 31.1219H118.368C117.999 28.9152 116.838 26.9191 115.103 25.5082C113.302 24.1897 111.11 23.5169 108.88 23.5982C106.764 23.5195 104.674 24.0843 102.885 25.2179C101.096 26.3516 99.6924 28.0011 98.8584 29.9493C97.9314 32.0671 97.4704 34.3599 97.5072 36.6719C97.4611 39.0315 97.9219 41.3736 98.8584 43.5396C99.6707 45.4256 101.031 47.0234 102.761 48.1258C104.609 49.2442 106.739 49.8065 108.897 49.7455C110.415 49.7668 111.917 49.4455 113.293 48.805C114.588 48.1844 115.713 47.258 116.57 46.1055C117.457 44.9157 118.074 43.5468 118.379 42.094H120.699C120.372 43.9675 119.62 45.741 118.501 47.2783C117.444 48.7124 116.05 49.863 114.442 50.628C112.691 51.4325 110.782 51.8312 108.857 51.7948Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M132.448 30.4671V32.4525C132.309 32.4525 132.164 32.4525 132.007 32.4525C131.196 32.4175 130.388 32.5658 129.642 32.8864C128.896 33.2071 128.231 33.6917 127.698 34.3045C126.577 35.6943 126.007 37.4491 126.098 39.2332V51.14H124.039V30.5833H126.098V34.0666C126.608 32.9838 127.412 32.0666 128.418 31.4193C129.49 30.7577 130.731 30.421 131.99 30.4497H132.431L132.448 30.4671Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M150.58 30.5822L143.475 48.4687L136.33 30.5822H134.115L142.449 51.0869L141.341 53.8386C141 54.8247 140.372 55.6862 139.537 56.3116C138.785 56.77 137.924 57.0185 137.044 57.0315V58.9298C138.38 58.925 139.685 58.5207 140.79 57.7688C141.959 56.8298 142.845 55.5863 143.354 54.1754L152.801 30.5764L150.58 30.5822Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M154.017 58.9534V30.5884H156.07V34.4895C156.848 33.1131 157.966 31.9597 159.317 31.1398C160.669 30.3284 162.219 29.9085 163.795 29.9266C165.555 29.9044 167.283 30.3988 168.765 31.3489C170.231 32.3001 171.399 33.6463 172.134 35.2327C172.952 37.0037 173.358 38.9367 173.324 40.8871C173.358 42.8377 172.952 44.7708 172.134 46.5415C171.395 48.1193 170.228 49.4571 168.765 50.4022C167.281 51.3409 165.555 51.8252 163.8 51.7953C162.222 51.8161 160.67 51.3894 159.323 50.5646C157.972 49.7345 156.854 48.5737 156.076 47.1917V58.9534H154.017ZM163.586 49.926C164.996 49.9662 166.386 49.5794 167.573 48.816C168.759 48.0525 169.689 46.9482 170.238 45.6475C170.896 44.1468 171.219 42.5201 171.183 40.8813C171.183 38.1141 170.493 35.9158 169.113 34.2864C168.438 33.4844 167.59 32.8468 166.632 32.4223C165.674 31.9979 164.633 31.7976 163.586 31.8365C162.551 31.7948 161.521 31.9908 160.574 32.4095C159.627 32.828 158.789 33.4582 158.123 34.2516C156.754 35.8771 156.07 38.0753 156.07 40.8464C156.037 42.4849 156.359 44.111 157.015 45.6127C157.576 46.9021 158.496 48.0026 159.665 48.7825C160.831 49.5427 162.195 49.9406 163.586 49.926Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M181.316 51.3079C179.617 51.3079 178.387 50.8784 177.622 50.0308C176.804 49.0608 176.39 47.8144 176.462 46.5476V32.4754H172.889V30.5886H176.462V25.4916H178.515V30.5886H183.265V32.4754H178.503V46.4954C178.503 47.5926 178.746 48.353 179.239 48.7768C179.963 49.268 180.834 49.4937 181.705 49.4154C182.227 49.4111 182.748 49.3703 183.265 49.2934V51.1396C182.62 51.2404 181.968 51.2966 181.316 51.3079Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M191.797 51.8021C190.026 51.8539 188.277 51.3872 186.768 50.459C185.257 49.5309 184.051 48.1818 183.294 46.5772C182.449 44.8 182.028 42.8503 182.066 40.8821C182.028 38.916 182.449 36.9682 183.294 35.1929C184.051 33.5884 185.257 32.2393 186.768 31.3112C188.277 30.3831 190.026 29.9163 191.797 29.9681C193.554 29.9213 195.286 30.3912 196.778 31.3199C198.272 32.2487 199.459 33.5952 200.195 35.1929C201.028 36.9714 201.442 38.9179 201.406 40.8821C201.442 42.8484 201.028 44.7968 200.195 46.5772C199.459 48.175 198.272 49.5215 196.778 50.4502C195.286 51.379 193.554 51.8489 191.797 51.8021ZM191.797 49.9095C193.203 49.946 194.589 49.5664 195.78 48.8182C196.925 48.0535 197.816 46.9667 198.345 45.6948C198.982 44.1662 199.29 42.5206 199.249 40.8647C199.29 39.2092 198.98 37.5635 198.345 36.0347C197.808 34.7615 196.908 33.675 195.758 32.9114C194.564 32.1674 193.179 31.79 191.773 31.8259C190.344 31.7858 188.932 32.163 187.714 32.9114C186.55 33.6707 185.637 34.7572 185.087 36.0347C184.439 37.5604 184.124 39.2073 184.165 40.8647C184.124 42.5223 184.439 44.1691 185.087 45.6948C185.635 46.9732 186.549 48.0602 187.714 48.8182C188.936 49.5816 190.356 49.9674 191.797 49.9269V49.9095Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M214.002 51.1396L203.388 22.2H208.684L216.976 45.0964L225.316 22.2H230.612L219.975 51.1396H214.002Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M234.758 27.3844C234.356 27.3909 233.957 27.3139 233.587 27.1579C233.216 27.0021 232.882 26.7708 232.607 26.4788C232.319 26.1937 232.092 25.8534 231.939 25.4783C231.787 25.1031 231.712 24.701 231.719 24.2961C231.714 23.8895 231.789 23.486 231.941 23.1091C232.093 22.7324 232.319 22.3898 232.607 22.1016C232.879 21.8028 233.211 21.5655 233.582 21.4054C233.953 21.2452 234.354 21.1659 234.758 21.1727C235.582 21.1833 236.369 21.5158 236.953 22.0992C237.535 22.6826 237.867 23.471 237.879 24.2961C237.884 24.704 237.805 25.1087 237.646 25.4844C237.487 25.8602 237.252 26.1988 236.956 26.4788C236.669 26.7704 236.327 27.0011 235.95 27.1567C235.572 27.3123 235.167 27.3897 234.758 27.3844ZM232.381 51.14V30.2407H237.141V51.14H232.381Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M250.462 30.0479C249.28 30.0176 248.115 30.341 247.117 30.9769C246.145 31.6224 245.37 32.5246 244.877 33.5834V30.257H240.158V51.1562H244.877V40.637C244.793 39.0076 245.344 37.4093 246.415 36.1784C246.932 35.6251 247.562 35.19 248.263 34.9024C248.963 34.6149 249.718 34.4819 250.474 34.5123C250.666 34.5123 250.851 34.5123 251.025 34.5123V30.0653C250.851 30.0537 250.666 30.0479 250.462 30.0479Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M267.844 33.1945C267.122 32.0384 266.081 31.1168 264.846 30.5414C263.39 29.8813 261.803 29.5579 260.205 29.595C258.706 29.5736 257.218 29.8622 255.833 30.4427C254.642 30.934 253.6 31.728 252.81 32.7462C252.019 33.7644 251.508 34.9715 251.326 36.2481H256.066C256.265 35.5622 256.67 34.9542 257.224 34.5065C258.089 33.8662 259.151 33.5517 260.224 33.6181C261.302 33.5587 262.366 33.8882 263.222 34.5471C263.573 34.8228 263.855 35.1758 264.047 35.5786C264.238 35.9813 264.336 36.4229 264.329 36.8693C264.344 37.0736 264.317 37.2787 264.25 37.4723C264.184 37.666 264.079 37.8439 263.941 37.9954C263.537 38.3152 263.041 38.4963 262.526 38.5122L258.421 39.1682C255.957 39.5823 254.088 40.3156 252.812 41.3683C252.182 41.8955 251.682 42.5611 251.35 43.3133C251.02 44.0654 250.868 44.8839 250.904 45.7049C250.878 46.7716 251.133 47.8263 251.639 48.7644C252.182 49.6888 252.991 50.4274 253.96 50.8834C255.089 51.4147 256.326 51.675 257.574 51.6438C258.968 51.6456 260.337 51.251 261.516 50.506C262.698 49.7779 263.657 48.7399 264.29 47.5047V51.1214H268.887V37.1188C268.915 35.7385 268.552 34.3787 267.844 33.1945ZM264.29 41.6411C264.308 42.7546 264.077 43.858 263.61 44.869C263.198 45.7738 262.546 46.5487 261.725 47.1099C260.907 47.6587 259.938 47.9444 258.953 47.9285C258.051 47.984 257.159 47.7074 256.448 47.1505C256.146 46.8755 255.909 46.5371 255.753 46.1595C255.596 45.782 255.525 45.3745 255.544 44.9662C255.565 44.5581 255.673 44.1592 255.864 43.7983C256.056 43.4371 256.324 43.1229 256.651 42.8778C257.551 42.3274 258.561 41.977 259.608 41.8502L262.404 41.3974L263.511 41.1478C263.785 41.0984 264.048 41.0022 264.29 40.8633V41.6411Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M272.14 51.1398V21.3408H276.82V51.1398H272.14Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M279.987 51.1398V21.3408H284.672V51.1398H279.987Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["d", "M303.158 30.2578L297.162 45.5491L291.135 30.2578H286.288L294.818 51.0874L294.284 52.4865C294.037 53.1835 293.587 53.7901 292.992 54.2281C292.285 54.6265 291.479 54.8119 290.672 54.7622H290.352V58.9131H290.672C292.33 58.9836 293.972 58.5615 295.393 57.6998C296.63 56.8947 297.643 55.5401 298.431 53.636L308 30.2462L303.158 30.2578Z", "fill", "#2D2D2D", 2, "fill", "var(--p-main)"], ["fxchScrollableHorizontalItem", "", 2, "width", "63px", "height", "62px"], ["viewBox", "0 0 63 62", "xmlns", "http://www.w3.org/2000/svg", 1, "fxch-partners-img"], ["d", "M31.5 0.5C14.103 0.5 0 14.1553 0 31H15.75C15.75 22.5776 22.8015 15.75 31.5 15.75C40.1985 15.75 47.25 22.5776 47.25 31V35.0803C42.6167 32.4853 37.2375 31 31.5 31C14.103 31 0 44.6552 0 61.5H15.75C15.75 53.0776 22.8015 46.25 31.5 46.25C40.1985 46.25 47.25 53.0776 47.25 61.5H63V31C63 14.1553 48.8971 0.5 31.5 0.5Z", "fill", "#4338CA", 2, "fill", "var(--p-a)"], ["fxchScrollableHorizontalItem", "", 2, "width", "57px", "height", "82px"], ["viewBox", "0 0 57 82", "xmlns", "http://www.w3.org/2000/svg", 1, "fxch-partners-img"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M29.8033 2.56657C29.8033 4.63972 29.8859 6.2736 29.7595 7.89107C29.7138 8.47652 29.1673 9.02297 28.8495 9.58692C28.5232 9.03719 27.9592 8.50532 27.9157 7.93408C27.7893 6.26412 27.8707 4.57848 27.8707 2.66427C27.1569 3.0022 26.6662 3.19504 26.2143 3.45496C18.6297 7.81597 11.0659 12.2131 3.45276 16.5238C2.29868 17.1774 1.87745 17.8693 1.88288 19.2053C1.937 33.2355 1.91545 47.2659 1.91947 61.2961C1.91983 61.8757 1.96805 62.4553 2.00495 63.2777C3.70813 62.2902 5.18552 61.3566 6.74074 60.5772C7.21932 60.3373 7.91016 60.5188 8.50382 60.5075C8.22836 61.0755 8.10269 61.8578 7.65041 62.172C6.12442 63.2321 4.48226 64.126 2.69506 65.197C11.0527 70.0979 19.1616 74.876 27.3158 79.576C27.7681 79.8366 28.7 79.6376 29.229 79.3376C33.2451 77.0588 37.2177 74.7035 41.2017 72.3686C45.1783 70.0385 49.152 67.704 53.388 65.2182C51.5467 64.122 49.9064 63.2176 48.3563 62.1786C47.9051 61.876 47.7122 61.19 47.401 60.6796C48.0293 60.6297 48.7768 60.3366 49.2641 60.5743C50.8764 61.3598 52.3947 62.3368 54.0854 63.3196C54.1486 62.8647 54.2071 62.6412 54.2071 62.4181C54.2124 47.7803 54.2268 33.1429 54.1647 18.5054C54.1621 17.9039 53.574 17.0943 53.026 16.7407C50.0657 14.8305 47.0349 13.0289 44.0235 11.1978C39.413 8.39487 34.7985 5.5981 29.8033 2.56657ZM56.1112 41.1719C56.1115 48.8265 56.0914 56.4816 56.1324 64.1358C56.1389 65.3494 55.8149 66.1025 54.6915 66.7514C46.2191 71.6458 37.7814 76.6002 29.3635 81.5872C28.3796 82.1701 27.6687 82.1154 26.7148 81.5511C18.2406 76.5386 9.72403 71.5976 1.27027 66.5517C0.653229 66.1831 0.0785638 65.1602 0.0752759 64.4388C0.00659366 48.8863 0.0321668 33.3339 8.81964e-06 17.7814C-0.00217427 16.659 0.400786 16.0313 1.36124 15.4841C10.1259 10.4884 18.8748 5.46504 27.5993 0.399374C28.5214 -0.135773 29.1892 -0.135044 30.0817 0.413226C38.2626 5.43953 46.4548 10.4476 54.6809 15.3995C55.7685 16.0546 56.1419 16.7924 56.1347 18.0253C56.0871 25.7405 56.1104 33.4564 56.1112 41.1719Z", "fill", "#49DDF0", 2, "fill", "var(--p-blocking)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M40.4666 34.6168C39.0436 35.4509 37.9374 36.099 36.5772 36.8963C37.9889 37.7242 39.1294 38.3931 40.4666 39.1772V34.6168ZM32.7066 29.1662C28.826 25.8904 27.323 25.7224 23.2302 29.0809C21.477 30.5197 22.7469 32.9323 22.5591 35.2391C26.1445 33.0934 29.355 31.1719 32.7066 29.1662ZM39.5656 25.0046C35.8758 22.7083 32.4592 20.5444 28.9853 18.4764C28.6244 18.2617 27.8447 18.476 27.3928 18.729C24.7993 20.1802 22.2424 21.6975 19.6811 23.2056C18.7261 23.7677 17.7927 24.3659 16.6579 25.0658C18.1481 25.9345 19.3406 26.6523 20.5586 27.3242C20.8574 27.4889 21.3294 27.6803 21.5695 27.5589C23.4615 26.6031 25.4763 25.7719 27.1017 24.4665C27.714 23.9748 27.3983 22.3329 27.505 21.2152C27.5108 21.155 27.4845 21.0756 27.5145 21.0366C27.81 20.6483 28.1147 20.267 28.4165 19.8839C28.7281 20.251 29.2213 20.5787 29.3112 20.9935C29.4621 21.6891 29.347 22.4404 29.3598 23.1677C29.3817 24.3929 33.8062 27.9927 35.0023 27.7587C35.1159 27.7365 35.2189 27.6512 35.3227 27.5881C36.6488 26.7817 37.9739 25.9743 39.5656 25.0046ZM33.5702 49.0891C33.4621 47.8387 33.812 46.1877 33.1439 45.4273C31.9923 44.116 30.3005 43.115 28.6441 42.4825C27.9342 42.2117 26.7623 43.2393 25.7704 43.5926C23.1462 44.5262 22.3414 46.2235 22.3695 49.0764C22.3973 51.8728 23.1817 53.4421 25.6761 54.6991C27.4188 55.5772 28.5834 55.7274 30.379 54.7552C32.8165 53.4356 34.2274 51.9657 33.5702 49.0891ZM15.8451 51.1032C14.9372 55.6228 15.2039 56.2651 18.7012 58.3623C19.8447 59.0484 20.9904 59.7316 22.1375 60.4114C23.7223 61.3505 25.3097 62.2855 27.1532 63.3744C27.1532 62.1769 27.0655 61.3782 27.1912 60.6141C27.2511 60.2485 27.715 59.9488 27.9964 59.6189C28.3251 59.9634 28.8625 60.2674 28.9385 60.6604C29.0887 61.4351 28.9827 62.2589 28.9827 63.3733C32.837 61.0869 36.331 59.0346 39.7929 56.9293C40.1462 56.7146 40.4991 56.1948 40.5221 55.7974C40.6079 54.313 40.5564 52.8206 40.5564 51.0664C39.7417 51.4809 39.2098 51.72 38.7082 52.0117C35.6164 53.811 32.5038 55.578 29.4595 57.4546C28.4355 58.086 27.6727 58.0638 26.656 57.4459C23.1375 55.3089 19.5587 53.2711 15.8451 51.1032ZM15.8798 26.8944C15.6979 27.2458 15.5978 27.349 15.5978 27.4521C15.5806 34.1943 15.5627 40.9361 15.5839 47.678C15.585 48.1074 15.7695 48.7249 16.0829 48.932C17.4292 49.82 18.8554 50.587 20.563 51.5782C20.563 49.8157 20.685 48.4264 20.5345 47.067C20.3123 45.0671 20.9148 43.7708 22.8751 42.9608C24.8238 42.1555 26.6936 40.1998 28.5107 40.3015C30.4295 40.4087 32.3266 42.2419 34.0663 43.5434C34.7572 44.0599 35.281 45.1404 35.3859 46.023C35.5901 47.7454 35.4458 49.5091 35.4458 51.3055C39.7026 50.0588 40.5696 48.947 40.5699 44.9155C40.5699 44.3082 40.5188 43.6946 40.5864 43.0946C40.7121 41.9798 40.2371 41.3156 39.2778 40.7623C36.654 39.2487 34.0586 37.6823 31.5141 36.0411C31.0991 35.7735 30.9997 35.0178 30.7546 34.4878C31.3391 34.4721 32.1461 34.202 32.4709 34.4841C34.1609 35.9525 35.6332 35.4192 37.183 34.2968C37.9659 33.7292 38.8671 33.3267 39.6793 32.7952C40.0106 32.5783 40.4739 32.2291 40.4896 31.9203C40.5714 30.3265 40.5276 28.7258 40.5276 26.7941C39.5726 27.3431 38.9976 27.6621 38.4335 27.9997C33.9491 30.6812 29.5085 33.4401 24.9626 36.0137C23.2032 37.01 22.1251 38.0752 22.4404 40.2468C22.5131 40.747 21.8573 41.3528 21.5369 41.9102C21.2129 41.3525 20.6258 40.8027 20.6086 40.2359C20.5151 37.1409 20.6053 34.0405 20.5235 30.9448C20.5071 30.3291 20.1794 29.5056 19.7117 29.1604C18.5522 28.3048 17.2286 27.6705 15.8798 26.8944ZM13.663 40.973C13.6626 36.0582 13.7039 31.1427 13.6341 26.2291C13.6162 24.9794 13.9969 24.2307 15.0914 23.6088C19.1027 21.3296 23.0794 18.9889 27.0366 16.6179C28.038 16.0179 28.8425 15.98 29.8566 16.6314C33.5337 18.9929 37.2487 21.2965 40.985 23.5636C42.0145 24.1884 42.5088 24.8679 42.5008 26.1602C42.4408 36.1107 42.4481 46.062 42.4945 56.0129C42.5 57.2042 42.0967 57.8906 41.0854 58.4775C37.2009 60.7308 33.3463 63.0365 29.5085 65.3688C28.5261 65.9656 27.73 66.0571 26.6823 65.41C22.8609 63.0511 18.9909 60.769 15.1027 58.5209C14.0283 57.9001 13.6136 57.1626 13.6326 55.8988C13.7083 50.9246 13.6637 45.9486 13.663 40.973Z", "fill", "#49DDF0", 2, "fill", "var(--p-blocking)"], ["fxchScrollableHorizontalItem", "", 2, "width", "281px", "height", "66px"], ["viewBox", "0 0 281 66", "xmlns", "http://www.w3.org/2000/svg", 1, "fxch-partners-img"], ["d", "M280.742 47.9135L273.676 35.943C276.004 34.9679 277.917 33.2329 279.093 31.0314C280.269 28.83 280.634 26.2972 280.128 23.8614C279.622 21.4256 278.275 19.2363 276.315 17.6637C274.356 16.0911 271.903 15.2316 269.372 15.2308H253.869C253.614 15.2297 253.362 15.2782 253.126 15.3736C252.89 15.4689 252.676 15.6091 252.496 15.7861C252.316 15.9631 252.173 16.1733 252.076 16.4048C251.979 16.6363 251.93 16.8843 251.931 17.1346V48.8654C251.931 49.3703 252.135 49.8546 252.499 50.2116C252.862 50.5687 253.355 50.7692 253.869 50.7692H255.161C255.675 50.7692 256.168 50.5687 256.531 50.2116C256.895 49.8546 257.099 49.3703 257.099 48.8654V36.8077H268.403L276.091 49.8173C276.261 50.1069 276.506 50.3474 276.8 50.5145C277.095 50.6816 277.43 50.7695 277.77 50.7692H279.086C279.427 50.7695 279.761 50.6816 280.056 50.5146C280.35 50.3476 280.595 50.1073 280.766 49.8178C280.936 49.5284 281.025 49.2 281.025 48.8657C281.026 48.5314 280.936 48.203 280.766 47.9135H280.742ZM257.099 20.3077H269.372C270.914 20.3077 272.393 20.9094 273.483 21.9806C274.574 23.0517 275.186 24.5044 275.186 26.0192C275.186 27.534 274.574 28.9868 273.483 30.0579C272.393 31.129 270.914 31.7308 269.372 31.7308H257.099V20.3077Z", "fill", "#17244B", 2, "fill", "var(--p-vultr)"], ["d", "M240.949 15.2308H213.818C213.564 15.2297 213.311 15.2782 213.076 15.3736C212.84 15.4689 212.626 15.6091 212.446 15.7861C212.266 15.9631 212.123 16.1733 212.026 16.4048C211.929 16.6363 211.879 16.8843 211.88 17.1346V18.4038C211.879 18.6542 211.929 18.9022 212.026 19.1337C212.123 19.3651 212.266 19.5754 212.446 19.7524C212.626 19.9294 212.84 20.0696 213.076 20.1649C213.311 20.2602 213.564 20.3087 213.818 20.3077H224.8V48.8654C224.8 49.3703 225.004 49.8546 225.368 50.2116C225.731 50.5687 226.224 50.7692 226.738 50.7692H228.03C228.543 50.7672 229.035 50.5659 229.398 50.2093C229.761 49.8527 229.966 49.3697 229.968 48.8654V20.3077H240.949C241.463 20.3077 241.956 20.1071 242.32 19.7501C242.683 19.393 242.887 18.9088 242.887 18.4038V17.1346C242.887 16.8846 242.837 16.637 242.74 16.406C242.642 16.1751 242.5 15.9652 242.32 15.7884C242.14 15.6116 241.926 15.4714 241.691 15.3757C241.456 15.28 241.204 15.2308 240.949 15.2308Z", "fill", "#17244B", 2, "fill", "var(--p-vultr)"], ["d", "M212.526 45.6923H195.085V17.1346C195.086 16.8843 195.037 16.6363 194.94 16.4048C194.843 16.1733 194.7 15.9631 194.52 15.7861C194.34 15.6091 194.126 15.4689 193.89 15.3736C193.654 15.2782 193.402 15.2297 193.147 15.2308H191.855C191.6 15.2297 191.348 15.2782 191.112 15.3736C190.877 15.4689 190.663 15.6091 190.482 15.7861C190.302 15.9631 190.16 16.1733 190.063 16.4048C189.966 16.6363 189.916 16.8843 189.917 17.1346V48.8654C189.917 49.3703 190.121 49.8546 190.485 50.2116C190.848 50.5687 191.341 50.7692 191.855 50.7692H212.526C213.04 50.7692 213.533 50.5687 213.897 50.2116C214.26 49.8546 214.464 49.3703 214.464 48.8654V47.5962C214.465 47.3459 214.416 47.0978 214.319 46.8664C214.222 46.6349 214.079 46.4246 213.899 46.2476C213.719 46.0706 213.505 45.9304 213.269 45.8351C213.034 45.7398 212.781 45.6913 212.526 45.6923Z", "fill", "#17244B", 2, "fill", "var(--p-vultr)"], ["d", "M179.582 17.1346C179.583 16.8843 179.533 16.6363 179.436 16.4048C179.339 16.1733 179.197 15.9631 179.016 15.7861C178.836 15.6091 178.622 15.4689 178.387 15.3736C178.151 15.2782 177.898 15.2297 177.644 15.2308H176.352C176.097 15.2297 175.844 15.2782 175.609 15.3736C175.373 15.4689 175.159 15.6091 174.979 15.7861C174.799 15.9631 174.656 16.1733 174.559 16.4048C174.462 16.6363 174.413 16.8843 174.414 17.1346V36.8077C174.414 39.3324 173.393 41.7536 171.576 43.5388C169.759 45.324 167.294 46.3269 164.724 46.3269C162.154 46.3269 159.69 45.324 157.873 43.5388C156.055 41.7536 155.034 39.3324 155.034 36.8077V17.1346C155.034 16.6297 154.83 16.1454 154.467 15.7884C154.103 15.4314 153.611 15.2308 153.097 15.2308H151.805C151.55 15.2297 151.297 15.2782 151.062 15.3736C150.826 15.4689 150.612 15.6091 150.432 15.7861C150.252 15.9631 150.109 16.1733 150.012 16.4048C149.915 16.6363 149.866 16.8843 149.867 17.1346V36.8077C149.867 40.6788 151.432 44.3914 154.218 47.1287C157.005 49.866 160.784 51.4039 164.724 51.4039C168.665 51.4039 172.444 49.866 175.23 47.1287C178.016 44.3914 179.582 40.6788 179.582 36.8077V17.1346Z", "fill", "#17244B", 2, "fill", "var(--p-vultr)"], ["d", "M140.177 15.2308H138.958C138.57 15.2284 138.19 15.3416 137.868 15.5554C137.547 15.7692 137.299 16.0737 137.157 16.4286L125.966 43.9075L114.774 16.4286C114.632 16.0737 114.384 15.7692 114.063 15.5554C113.741 15.3416 113.361 15.2284 112.973 15.2308H111.754C111.437 15.2306 111.125 15.3067 110.846 15.4524C110.566 15.5981 110.327 15.8089 110.149 16.0664C109.971 16.3239 109.861 16.6203 109.826 16.9296C109.792 17.2389 109.836 17.5517 109.953 17.8406L122.873 49.5714C123.016 49.9257 123.264 50.2295 123.585 50.4432C123.906 50.6569 124.286 50.7705 124.674 50.7692H127.257C127.645 50.7705 128.025 50.6569 128.346 50.4432C128.667 50.2295 128.915 49.9257 129.058 49.5714L141.978 17.8406C142.095 17.5517 142.139 17.2389 142.105 16.9296C142.07 16.6203 141.96 16.3239 141.782 16.0664C141.604 15.8089 141.365 15.5981 141.085 15.4524C140.806 15.3067 140.494 15.2306 140.177 15.2308Z", "fill", "#17244B", 2, "fill", "var(--p-vultr)"], ["d", "M27.0106 1.7769C26.6625 1.23177 26.1789 0.782621 25.6054 0.471757C25.0319 0.160894 24.3872 -0.001461 23.7322 -2.10217e-05H3.8765C3.18337 2.78932e-05 2.50293 0.18268 1.90609 0.528906C1.30924 0.875132 0.817817 1.37226 0.483025 1.9685C0.148233 2.56474 -0.0176806 3.23827 0.00257052 3.91892C0.0228217 4.59957 0.228497 5.26243 0.598166 5.83844L4.63552 12.1846L31.0479 8.12306L27.0106 1.7769Z", "fill", "#D0F5FD", 2, "fill", "var(--p-vultr1)"], ["d", "M31.0796 8.12308C30.7315 7.57794 30.2479 7.1288 29.6744 6.81793C29.1009 6.50707 28.4562 6.34472 27.8012 6.34616H7.9455C7.25237 6.3462 6.57193 6.52886 5.97509 6.87508C5.37824 7.22131 4.88682 7.71844 4.55203 8.31468C4.21723 8.91092 4.05132 9.58445 4.07157 10.2651C4.09182 10.9457 4.2975 11.6086 4.66717 12.1846L10.3679 21.0692L36.7803 17.0077L31.0796 8.12308Z", "fill", "#51B8FE", 2, "fill", "var(--p-vultr2)"], ["d", "M10.3679 21.0692C9.97964 20.4604 9.77265 19.7569 9.77039 19.0385C9.77039 18.0286 10.1787 17.0601 10.9056 16.346C11.6325 15.6319 12.6183 15.2308 13.6462 15.2308H33.502C34.157 15.2293 34.8016 15.3917 35.3751 15.7026C35.9487 16.0134 36.4322 16.4626 36.7803 17.0077L54.5447 44.6928C54.9349 45.3008 55.1419 46.0048 55.1419 46.7236C55.1419 47.4423 54.9349 48.1463 54.5447 48.7543L44.6208 64.2548C44.2716 64.7988 43.7878 65.2471 43.2145 65.5577C42.6412 65.8684 41.9972 66.0313 41.3425 66.0313C40.6878 66.0313 40.0438 65.8684 39.4705 65.5577C38.8973 65.2471 38.4134 64.7988 38.0642 64.2548L10.3679 21.0692Z", "fill", "#027BFB", 2, "fill", "var(--p-vultr3)"], ["d", "M60.4392 29.351C60.7872 29.9002 61.272 30.3533 61.8477 30.6674C62.4234 30.9816 63.0711 31.1464 63.7297 31.1464C64.3882 31.1464 65.0359 30.9816 65.6116 30.6674C66.1873 30.3533 66.6721 29.9002 67.0201 29.351L70.4115 24.0361L76.9197 13.8901C77.3099 13.2822 77.5169 12.5781 77.5169 11.8594C77.5169 11.1406 77.3099 10.4366 76.9197 9.82861L71.7519 1.77692C71.4038 1.23179 70.9203 0.782644 70.3467 0.47178C69.7732 0.160917 69.1286 -0.00143812 68.4736 1.86647e-06H48.6178C47.9247 5.07814e-05 47.2443 0.182703 46.6474 0.528929C46.0506 0.875155 45.5591 1.37228 45.2244 1.96852C44.8896 2.56476 44.7237 3.23829 44.7439 3.91894C44.7642 4.59959 44.9698 5.26245 45.3395 5.83846L60.4392 29.351Z", "fill", "#027BFB", 2, "fill", "var(--p-vultr4)"], ["fxchScrollableHorizontalItem", "", 2, "width", "240px", "height", "66px"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 240 66", 1, "fxch-partners-img"], ["d", "M47.1306 0H52.6586V66H47.1306V0Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M2.76639 5.62008L2.76639 0L30.548 -1.23461e-06L30.548 5.62008L2.76639 5.62008Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M37.7047 0H43.2327V56.417H37.7047V0Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M0.00100231 0H5.52895V66H0.00100231V0Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M9.42691 9.583H14.9549V66H9.42691V9.583Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M18.8519 9.583H24.3799V56.417H18.8519V9.583Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M28.2778 0H33.8058V56.417H28.2778V0Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M9.497 15.2031L9.497 9.583L24.3799 9.583L24.3799 15.2031L9.497 15.2031Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M28.3497 56.4169L28.3497 50.7968L43.2327 50.7968L43.2327 56.4169L28.3497 56.4169Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M37.7036 56.4169L37.7036 50.7968L43.2316 50.7968L43.2316 56.4169L37.7036 56.4169Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["d", "M18.8537 65.9999L18.8537 60.3798L51.4544 60.3798L51.4544 65.9999L18.8537 65.9999Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M91.2236 17.5088V39.1208L75.8414 17.5088H70.2692V48.5634H75.8414V26.9514L91.2236 48.5634H96.7955V17.5088H91.2236Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M125.787 17.5088V45.2666H110.405V17.5088H104.833V48.5634H131.359V17.5088H125.787Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M137.79 17.5088V48.5634H157.937L159.493 45.2666H143.455V17.5088H137.79Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M163.511 48.5634H169.138V17.5088H163.511V48.5634Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M198.934 17.5088V39.1208L183.552 17.5088H177.98V48.5634H183.552V26.9514L198.934 48.5634H204.506V17.5088H198.934Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M231.456 17.5088L221.644 31.1842H216.466V17.5088H210.938V48.5634H216.466V34.4808H221.644L231.767 48.5634H238.269L226.861 32.8122L237.879 17.5088H231.456Z", "fill", "#333333", 2, "fill", "var(--p-nulink)"], ["fxchScrollableHorizontalItem", "", 2, "width", "353px", "height", "34px"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 353 34", 1, "fxch-partners-img"], ["d", "M122.697 17.0352H116.663V10.9962H122.697V17.0352H125.568L126.252 17.0755L126.579 17.1057L127.137 17.2164L127.399 17.2768L127.841 17.463L128.047 17.5636L128.384 17.8354L128.54 17.9814L128.781 18.3437L128.887 18.5349L129.043 19.003L129.108 19.2546L129.189 19.8333L129.234 20.8449V23.0743H122.697M148.343 17.0352H141.805V23.0743H135.268V20.7946L135.324 20.1303L135.359 19.8132L135.485 19.2546L135.56 18.9929L135.771 18.54L135.887 18.3286L136.189 17.9763L136.349 17.8102L136.742 17.5486L136.948 17.4328L137.441 17.2567L137.702 17.1812L138.301 17.0906L139.321 17.0352H141.805V10.9962H148.343V17.0352Z", "fill", "#D53636", 2, "fill", "var(--p-t-trader)"], ["d", "M29.3065 33.2552L29.5629 33.4263L29.7942 33.4867L30.3273 33.5823L30.7195 33.6075L31.5945 33.6427H29.1657V32.8878L29.2059 33.1545M9.69507 33.2552L9.95152 33.4263L10.1828 33.4867L10.7159 33.5823L11.1081 33.6075L11.9831 33.6427H9.55427V32.8878L9.59449 33.1545M44.7391 33.6427H41.7371L43.2004 33.6075L43.8943 33.542L44.1256 33.4867L44.5128 33.3508L44.6134 33.2552L44.7441 33.0488M167.954 33.6427H164.937L166.4 33.6075L167.094 33.542L167.325 33.4867L167.713 33.3508L167.813 33.2552L167.954 33.0337M45.4079 6.46181L45.3476 6.65808L45.247 7.22676L45.2017 7.54381L45.1263 8.42451L45.0911 8.91267L45.0358 10.1809L45.0107 10.8703L44.9704 12.6116L44.9604 13.0796L44.9403 14.1214L44.9352 14.6548L44.9151 15.8425L44.9101 16.4515L44.8699 19.9843L44.7441 32.8576L44.6084 32.3544L44.3871 32.1329H44.2513L44.1357 31.9366L44.0703 31.6146L44.0401 31.3579L43.9798 30.7842L43.9547 30.4067L43.9094 29.5864L43.8893 29.0933L43.8541 28.0364L43.839 27.4275L43.8139 26.1442L43.8038 25.4195L43.7887 23.9147L43.7837 23.0844V20.4322L43.8038 16.9849L43.8189 15.0524L43.834 14.2472L43.8641 12.7324L43.8893 12.1134L43.9345 10.9559L43.9697 10.4929L44.0401 9.63233L44.0854 9.29011L44.1809 8.65601L44.2413 8.40438L44.5128 7.54885L44.7039 7.22173L45.3325 6.34103L45.5286 6.14979M297.525 25.2886L298.51 26.5619L297.877 25.968L297.575 25.5604L297.47 25.3339L297.299 24.8609L297.253 24.579L297.238 24.4583M319.314 19.4911L309.307 19.6471L306.285 19.7025L305.395 19.7176L303.916 19.7578L303.222 19.783L302.101 19.8333L301.578 19.8635L300.758 19.934L300.376 19.9742L299.788 20.0648L299.521 20.1202L299.109 20.241L298.37 20.6889L298.44 20.6083L298.822 20.3467L299.662 19.8585L300.2 19.6572L301.357 19.2898L302.061 19.1489L303.554 18.8922L304.439 18.8067L306.295 18.6507L307.371 18.6054L309.624 18.545L319.314 19.4911L318.308 17.3171L318.454 16.3558L318.675 15.8626L318.811 15.7771L319.238 15.4399L319.314 15.3141M319.314 14.5189V15.1681L319.168 15.0121L318.992 14.9467L318.569 14.8259L318.248 14.7806L317.529 14.6901L317.046 14.6599L316 14.5995L315.346 14.5793L313.958 14.5441L313.124 14.534L311.363 14.5189M47.8065 5.8579L48.0378 6.04411L48.5005 6.46684L48.7268 6.75873L49.1844 7.39284L49.4106 7.78538L49.8582 8.62582L50.0744 9.12404L50.8136 10.6992L50.9594 10.9811L50.7432 10.5935L49.7828 8.76673L49.4106 8.03701L48.7268 6.94997L48.3899 6.46684L47.7562 5.86797L47.6406 5.77738M178.011 6.46684H173.083L174.617 6.44671L175.492 6.41652L175.859 6.39136L176.548 6.336L176.819 6.30077L177.317 6.21522L177.498 6.16489L177.815 6.05417L177.905 5.98875L178.011 5.88307M178.011 5.66667L177.996 5.60628L177.905 5.51066L177.684 5.31942L177.508 5.2087L177.312 4.97217L177.196 4.71551L177.151 4.55447L177.005 3.82475V3.41711L177.151 2.37034L177.252 2.12877L177.312 2.05329L177.438 1.93754H177.508L177.865 1.7161L178.011 1.38899M46.2779 5.65157L46.4337 5.58111L46.5594 5.56602M167.808 32.3544L167.587 32.1329H167.451L167.315 31.8612L167.235 31.4183L167.2 31.0861L167.134 30.3514L167.109 29.8884L167.054 28.897L167.034 28.3283L166.993 27.1356L166.948 25.1276L166.938 24.4079L166.913 21.4337L166.943 16.8037L166.973 15.3393L167.009 13.8999L167.029 13.2256L167.074 11.9121L167.099 11.3132L167.154 10.1658L167.19 9.67259L167.255 8.74156L167.295 8.36915L167.371 7.69982L167.416 7.47839L167.501 7.12108L167.552 7.07075L167.954 6.89461V32.8878M9.86101 6.97513L9.95655 7.07075L10.0923 7.47839L10.1778 8.00178L10.213 8.36915L10.2884 9.1794L10.3186 9.67259L10.379 10.7194L10.4091 11.3132L10.4594 12.5512L10.5198 14.6095L10.5348 15.3393L10.5801 18.3487L10.5851 19.8937V22.9686L10.57 24.4079L10.5499 25.8171L10.5298 26.4763L10.4996 27.7546L10.4745 28.3283L10.4292 29.4204L10.3991 29.8884L10.3387 30.754L10.3086 31.0861L10.2331 31.68L10.1929 31.8612L10.1074 32.1329H10.0571L9.7001 32.3544L9.55427 32.6815V6.86945M29.3115 1.7161L29.5277 1.93754H29.6685L29.7842 2.18917L29.8546 2.60184L29.8847 2.92895L29.9451 3.66371L29.9702 4.14683L30.0205 5.19864L30.0406 5.83777L30.0809 7.19153L30.1261 9.63736L30.1563 12.516L30.1714 15.8173V17.0352L30.1613 20.4775L30.1513 22.561L30.1362 23.497L30.1161 25.2987L30.0959 26.0888L30.0607 27.5935L30.0406 28.2327L29.9954 29.4355L29.9702 29.9236L29.9149 30.8144L29.8847 31.1415L29.8194 31.7152L29.7842 31.8813L29.7087 32.1329H29.6685L29.3115 32.3544L29.1657 32.6815V1.18265M177.916 0.96122L177.735 0.840438L177.569 0.790113L177.181 0.694494L176.89 0.659266L176.236 0.58881L175.788 0.558615L174.813 0.513322L174.179 0.493191L172.822 0.462996L171.977 0.452931L170.177 0.437833L167.974 0.427768H166.119H178.011V1.18265M151.863 6.46684V0.427768H152.868V6.46684M32.1828 0.427768L30.7195 0.462996L30.0255 0.528419L29.7942 0.583777L29.407 0.719657L29.3065 0.815275L29.1657 1.03671V0.427768H32.1828Z", "fill", "#2D2D2D", 2, "fill", "var(--p-t-trader1)"], ["d", "M48.8122 0.181172L49.2296 0.251628L49.9889 0.478094L50.361 0.60894L51.06 1.00651L51.402 1.23298L52.0909 1.87715L52.4378 2.23446L53.162 3.19568L53.5341 3.71906L54.3487 5.06276L54.7711 5.78745L55.7265 7.58407L55.9729 8.06217L56.5059 9.12404L56.7775 9.66756L57.6625 11.4843L58.3011 12.823L59.337 15.0121L59.7494 15.8878L60.4986 17.4831L61.5345 19.6572L61.8563 20.3366L62.4497 21.5545L62.7414 22.1433L63.2643 23.1951L63.5158 23.6983L64.1996 25.0068L64.607 25.7416L64.8081 26.0938L65.1651 26.6827L65.3411 26.9645L65.6579 27.4224L65.9697 27.8502L66.4977 28.3535L66.7491 28.5497L67.2118 28.6504L67.438 28.6554L67.8856 28.434L68.6047 27.82L68.6902 27.7345L68.8309 27.4879L68.9014 27.347L69.012 26.9393L69.0673 26.7078L69.1528 26.0737L69.193 25.7214L69.2533 24.8005L69.2835 24.2972L69.3237 23.024L69.3439 22.3396L69.364 20.6536L69.3791 19.7528L69.3891 17.5838V17.0101L69.3941 15.762V0.427768H75.4284V15.3443L75.4234 17.0906V17.9361L75.4083 20.2208L75.3932 21.5696L75.3832 22.2238L75.358 23.3964L75.3429 23.9651L75.3027 24.9816L75.2776 25.4748L75.2223 26.3455L75.1619 27.1859L74.9859 28.4994L74.8853 29.1033L74.6088 30.0394L74.4579 30.4671L74.0707 31.1365L73.8595 31.4535L73.3416 31.9819L72.3811 32.7519L72.2152 32.8727L71.7475 33.0941L71.4961 33.2049L70.8826 33.3961L70.2389 33.5823L68.7153 33.839L67.9459 33.9446L66.4424 34H66.0854L65.4417 33.9497L65.1299 33.9195L64.617 33.8037L64.2751 33.7081L63.6566 33.4665L63.3548 33.3307L62.7866 32.9683L62.505 32.767L61.9519 32.2336L61.6703 31.9366L61.092 31.1767L60.7953 30.759L60.1466 29.7173L59.8147 29.1536L59.0655 27.7798L58.6733 27.045L57.7832 25.2786L56.2445 22.1332L54.2129 17.8807L53.7101 16.8138L53.4637 16.2954L53.0262 15.3644L52.463 14.1415L52.292 13.7792L51.9048 12.9236L51.7439 12.5462L51.6333 12.2543L51.2762 11.4994L51.241 11.4642L51.1002 11.2327L51.0198 11.0968L50.8136 10.6992L50.0744 9.12404L49.8582 8.62582L49.4106 7.78538L49.1844 7.39284L48.7268 6.75873L48.5005 6.46684L48.0378 6.04411L47.8065 5.8579L47.3439 5.6415L47.1126 5.56098L46.66 5.55595L46.4337 5.58111L45.9862 5.78745L45.7649 5.9183L45.3325 6.34103L44.7039 7.22173L44.5128 7.54885L44.2413 8.40438L44.1809 8.65601L44.0854 9.29011L44.0401 9.63233L43.9697 10.4929L43.9345 10.9559L43.8893 12.1134L43.8641 12.7324L43.834 14.2472L43.8189 15.0524L43.8038 16.9849L43.7837 20.4322V23.0844L43.7887 23.9147L43.8038 25.4195L43.8139 26.1442L43.839 27.4275L43.8541 28.0364L43.8893 29.0933L43.9094 29.5864L43.9547 30.4067L43.9798 30.7842L44.0401 31.3579L44.0703 31.6146L44.1357 31.9366L44.2513 32.1329H44.3871L44.6084 32.3544L44.7542 32.8878V33.0337L44.6134 33.2552L44.5128 33.3508L44.1256 33.4867L43.8943 33.542L43.2004 33.6075L41.7371 33.6427H38.7199V18.847L38.725 17.1308V16.2954L38.74 14.0409L38.7551 12.7022L38.7602 12.053L38.7903 10.8854L38.8004 10.3218L38.8406 9.31024L38.8607 8.82208L38.911 7.95145L38.9663 7.11101L39.1272 5.79248L39.2178 5.18857L39.4642 4.24748L39.5999 3.81468L39.9419 3.14032L40.1329 2.82327L40.5956 2.29988L41.4404 1.56009L41.8477 1.23801L42.8936 0.739787L43.4468 0.513322L44.7089 0.2164L45.3576 0.0956187L46.7304 0.0201303M334.274 0.523387L335.41 0.543517L337.376 0.583777L338.312 0.603908L339.901 0.649201L340.66 0.674364L341.932 0.734754L342.531 0.76495L344.004 0.875666L344.788 0.971285L345.155 1.02161L345.769 1.13736L347.217 1.59532L347.956 1.92747L349.138 2.63203L349.691 2.99941L350.551 3.84991L350.948 4.30284L351.572 5.39491L352.326 7.41297L352.497 7.98668L352.713 8.9177L352.799 9.36057L352.864 10.1557L352.879 10.5533L352.799 11.3837L352.517 12.8733L352.351 13.6332L351.778 15.0625L351.456 15.757L350.627 16.9849L350.184 17.5687L349.163 18.5249L347.474 19.5515L347.061 19.7226L346.408 20.09L346.272 20.1755L346.086 20.3316L345.965 20.5077V20.5278L346.035 20.6889L346.086 20.7895L346.242 21.0915L346.332 21.2575L346.568 21.6803L346.694 21.9067L346.996 22.4352L347.318 22.9888L348.117 24.3425L349.48 26.6122L349.963 27.4023L350.843 28.902L351.265 29.6267L351.964 30.8748L352.281 31.4535L352.718 32.3141L352.809 32.5003L352.925 32.767L353 33.0136V33.1243L352.824 33.2954L352.703 33.376L352.281 33.4917L352.035 33.542L351.351 33.6075L350.013 33.6427H347.021L344.482 29.511L344.135 28.9423L343.496 27.8552L343.194 27.3319L342.686 26.4059L342.46 25.968L342.143 25.3088L341.942 24.73V24.5539L341.796 24.2721L341.439 24.0808H341.304L341.082 23.9248L340.936 23.5574V23.4819L340.846 23.2504L340.786 23.1246L340.595 22.8176L339.77 21.7709L339.498 21.479L339.021 21.0814L338.769 20.9103L338.12 20.7191L337.934 20.6838L337.477 20.6385L337.23 20.6234L336.632 20.6134L336.31 20.6083L335.531 20.6234L334.113 20.6637L329.622 20.8097L329.341 33.6427H323.337V25.1024L323.362 23.1548L323.377 22.2137L323.432 20.5832L323.447 20.2057L323.477 19.5414L323.497 19.2244L323.533 18.701L323.553 18.4594L323.593 18.1072L323.658 17.78L323.704 17.6643L323.96 17.3774L324.116 17.2265L324.543 16.9044L326.218 15.9784L326.686 15.7771L327.651 15.4902L328.169 15.3644L329.476 15.1983L329.838 15.1631L330.688 15.1128L331.131 15.0876L332.177 15.0574L332.725 15.0474L334.002 15.0323L336.235 15.0222H337.306L339.332 14.9819L340.308 14.9568L342.008 14.8763L342.4 14.8511L343.099 14.8008L343.426 14.7756L343.974 14.7152L344.23 14.685L344.607 14.6246L344.954 14.524L345.241 14.368L345.774 13.6735L346.03 13.2809L346.433 12.2946L346.609 11.7913L346.79 10.7697L346.714 9.47632L346.629 9.19449L346.171 8.45974L345.326 7.45826L345.08 7.22676L344.477 6.91474L344.296 6.84429L343.808 6.7386L343.541 6.68828L342.837 6.61782L342.45 6.58259L341.454 6.5373L340.916 6.51717L339.559 6.49201L338.829 6.48194L337.044 6.47188L333.801 6.46684H323.337V0.342214M25.6457 6.46684H15.5885V33.6427H11.9831L11.1081 33.6075L10.7159 33.5823L10.1828 33.4867L9.95152 33.4263L9.69507 33.2552L9.59449 33.1545L9.55427 32.8878V32.6815L9.7001 32.3544L10.0571 32.1329H10.1074L10.1929 31.8612L10.2331 31.68L10.3086 31.0861L10.3387 30.754L10.3991 29.8884L10.4292 29.4204L10.4745 28.3283L10.4996 27.7546L10.5298 26.4763L10.5499 25.8171L10.57 24.4079L10.5851 22.9686V19.8937L10.5801 18.3487L10.5348 15.3393L10.5198 14.6095L10.4594 12.5512L10.4091 11.3132L10.379 10.7194L10.3186 9.67259L10.2884 9.1794L10.213 8.36915L10.1778 8.00178L10.0923 7.47839L9.95655 7.07075L9.86101 6.97513L9.38832 6.81409L9.10672 6.7386L8.28707 6.62285L7.8345 6.57253L6.69804 6.50711L4.67656 6.46684H0V0.427768H25.6457M35.1999 33.6427H31.5945L30.7195 33.6075L30.3273 33.5823L29.7942 33.4867L29.5629 33.4263L29.3065 33.2552L29.2059 33.1545L29.1657 32.8878V32.6815L29.3115 32.3544L29.6685 32.1329H29.7087L29.7842 31.8813L29.8194 31.7152L29.8847 31.1415L29.9149 30.8144L29.9702 29.9236L29.9954 29.4355L30.0406 28.2327L30.0607 27.5935L30.0959 26.0888L30.1161 25.2987L30.1362 23.497L30.1513 22.561L30.1613 20.4775L30.1714 17.0352V15.8173L30.1563 12.516L30.1261 9.63736L30.0809 7.19153L30.0406 5.83777L30.0205 5.19864L29.9702 4.14683L29.9451 3.66371L29.8847 2.92895L29.8546 2.60184L29.7842 2.18917L29.6685 1.93754H29.5277L29.3115 1.7161L29.1657 1.18265V1.03671L29.3065 0.815275L29.407 0.719657L29.7942 0.583777L30.0255 0.528419L30.7195 0.462996L32.1828 0.427768H35.1999M110.533 0.447898L110.945 0.457963L111.629 0.503256L111.941 0.523387L112.368 0.578745L112.64 0.679396V0.694494L112.499 0.915927L112.408 1.05181L111.931 1.74127L111.478 2.37537L111.232 2.71758L110.337 3.95056L109.638 4.90675L109.281 5.39994L105.851 10.0249L99.0627 19.1237V33.6427H93.0284V19.3854L86.4661 10.6338L85.561 9.43102L83.8915 7.17644L82.755 5.62137L82.393 5.13322L81.7443 4.23742L81.4376 3.80965L80.9045 3.0598L80.2458 2.12374L80.0648 1.86205L79.8133 1.47957L79.6222 1.15246L79.5669 1.00651L79.6273 0.790113L79.6977 0.694494L80.0798 0.56868L80.3162 0.518354L81.0956 0.457963L82.8204 0.427768H86.2901L91.0421 7.42806L91.6908 8.38928L92.9077 10.1306L93.491 10.9559L94.4867 12.3147L94.713 12.6217L95.1102 13.14L95.3013 13.3816L95.603 13.754L95.7438 13.9201L95.9399 14.1314L96.1008 14.2321L96.1209 14.222L96.2567 14.056L96.3422 13.9503L96.5886 13.6231L96.7294 13.4369L97.2624 12.7022L97.6949 12.0983L98.1475 11.4642L99.2437 9.89402L101.084 7.23179L105.756 0.427768H109.673M167.974 0.427768L170.177 0.437833L171.977 0.452931L172.822 0.462996L174.179 0.493191L174.813 0.513322L175.788 0.558615L176.236 0.58881L176.89 0.659266L177.181 0.694494L177.569 0.790113L177.735 0.840438L177.916 0.96122L178.011 1.18265V1.38899L177.865 1.7161L177.508 1.93754H177.438L177.312 2.05329L177.252 2.12877L177.151 2.37034L177.005 3.41711V3.82475L177.151 4.55447L177.196 4.71551L177.312 4.97217L177.508 5.2087L177.684 5.31942L177.905 5.51066L177.996 5.60628L178.041 5.77235V5.85287L177.905 5.98875L177.815 6.05417L177.498 6.16489L177.317 6.21522L176.819 6.30077L176.548 6.336L175.859 6.39136L175.492 6.41652L174.617 6.44671L173.083 6.46684H172.294L170.941 6.50711L170.302 6.53227L169.276 6.62285L168.809 6.67318L168.135 6.81409L167.552 7.07075L167.501 7.12108L167.416 7.47839L167.371 7.69982L167.295 8.36915L167.255 8.74156L167.19 9.67259L167.154 10.1658L167.099 11.3132L167.074 11.9121L167.029 13.2256L167.009 13.8999L166.973 15.3393L166.943 16.8037L166.913 21.4337L166.938 24.4079L166.948 25.1276L166.993 27.1356L167.034 28.3283L167.054 28.897L167.109 29.8884L167.134 30.3514L167.2 31.0861L167.235 31.4183L167.315 31.8612L167.451 32.1329H167.587L167.808 32.3544L167.954 32.8878V33.0337L167.813 33.2552L167.713 33.3508L167.325 33.4867L167.094 33.542L166.4 33.6075L164.937 33.6427H161.92V6.46684H152.868V0.427768H166.119M195.953 0.513322L197.834 0.548549L198.734 0.56868L200.293 0.654233L201.032 0.704559L202.314 0.840438L202.928 0.920959L203.984 1.12226L204.486 1.22795L205.361 1.4997L205.784 1.64062L206.533 1.98283L207.559 2.58674L208.208 3.02457L209.243 4.16193L209.716 4.76584L210.405 6.16489L210.707 6.88455L211.059 8.44464L211.19 9.23475L211.205 10.8603L211.169 11.6705L210.853 13.2658L210.651 14.0509L210.008 15.5204L209.646 16.23L208.675 17.4781L206.865 18.9879L206.267 19.3502L205.326 20.0548L205.13 20.2108L204.854 20.4775L204.678 20.7593V20.7895L204.748 20.9657L204.793 21.0713L204.949 21.3884L205.04 21.5645L205.271 22.0024L205.397 22.2339L205.703 22.7724L206.02 23.341L206.815 24.7099L208.182 26.9896L208.665 27.7848L209.55 29.2694L209.968 29.979L210.667 31.1969L210.827 31.4787L211.099 31.9719L211.225 32.2034L211.426 32.5808L211.516 32.7519L211.632 32.9985L211.702 33.2049V33.2652L211.456 33.376L211.295 33.4263L210.777 33.5118L210.496 33.5471L209.782 33.6024L208.56 33.6276L205.417 33.6175L197.472 20.5228L192.644 20.6687L187.817 20.8097L187.535 33.6427H184.136L182.889 33.542L182.612 33.5118L182.205 33.4364L182.029 33.3961L181.868 33.3055L181.833 33.2753L181.772 33.074L181.747 32.9532L181.697 32.5959L181.652 32.2084L181.586 31.0459L181.561 30.4168L181.531 28.122L181.546 26.4361L181.556 25.5906L181.632 23.0693L181.712 21.5444L181.757 20.8197L181.863 19.6371L181.893 19.3653L181.958 18.9275L182.059 18.4242L182.2 17.9059L182.753 16.9144L182.899 16.688L183.221 16.3156L183.688 15.9281L183.779 15.8777L184.096 15.7821L184.277 15.7368L184.78 15.6462L185.051 15.6009L185.725 15.5204L186.082 15.4751L186.922 15.3996L187.364 15.3644L188.36 15.294L188.883 15.2587L190.034 15.1933L190.628 15.1631L191.925 15.1128L194.022 15.0373L195.138 15.0071L196.984 14.9517L197.854 14.9216L199.252 14.8662L199.9 14.836L200.926 14.7655L201.394 14.7303L202.113 14.6448L202.445 14.5995L202.928 14.4787L203.149 14.4183L203.476 14.2573L204.205 13.5829L204.547 13.1602L204.954 12.1637L205.11 11.6504L205.15 10.5784L205.125 10.045L204.808 9.02339L203.933 7.69982L203.622 7.39284L203.048 6.99023L202.882 6.89964L202.435 6.7688L202.188 6.70841L201.52 6.62285L201.147 6.58259L200.167 6.53227L199.624 6.51214L198.236 6.48697L197.859 6.48194L197.009 6.47691L196.572 6.47188L195.586 6.46684H181.481L181.783 0.679396L191.337 0.538484L192.619 0.523387L194.877 0.513322M235.875 0.115749L236.383 0.19627L237.338 0.468028L237.801 0.619005L238.63 1.04677L239.681 1.85702L239.787 1.96773L240.074 2.40053L240.229 2.65719L240.617 3.37685L240.823 3.77442L241.306 4.77087L241.557 5.30432L242.13 6.57253L242.432 7.23683L243.096 8.76169L244.182 11.3283L244.564 12.2493L245.389 14.2623L246.711 17.5385L248.954 23.18L249.306 24.0607L251.584 29.823L251.805 30.3866L252.162 31.3025L252.323 31.7202L252.554 32.3091L252.725 32.7872L252.796 32.9885L252.786 33.2703L252.751 33.386L252.434 33.5219L252.223 33.5722L251.453 33.5974H251.227L250.669 33.5823L249.648 33.542L246.274 33.3911L242.306 23.3763L241.763 21.9973L240.788 19.466L240.556 18.862L240.139 17.7398L239.933 17.1963L239.581 16.225L239.133 14.9618L239.008 14.5844L238.811 13.9905L238.726 13.7188L238.63 13.3564L238.6 13.0998L238.671 13.0293L238.57 12.6821L238.138 12.0429L237.941 11.8265L237.625 11.3686L237.403 10.8603V10.8099L237.318 10.5332L237.268 10.3721L237.102 9.92422L236.393 8.21818L236.247 7.90113L235.95 7.35761L235.799 7.10598L235.493 6.69834L235.332 6.51214L235.015 6.24541L234.854 6.12463L234.527 5.99378L234.366 5.94346L234.044 5.95352L233.883 5.97365L233.562 6.1196L233.406 6.21018L233.099 6.50207L232.651 7.09592L232.601 7.1714L232.405 7.58407L232.289 7.82564L231.968 8.54026L231.797 8.92777L231.369 9.90409L231.143 10.4224L230.63 11.6303L230.358 12.2543L229.77 13.6483L228.82 15.913L226.743 20.9355L221.533 33.6427H217.968L217.375 33.6377L217.093 33.6326L216.635 33.6125L216.208 33.5924L215.695 33.4917L215.489 33.4313L215.328 33.225L215.283 33.1092L215.353 32.762L215.368 32.7016L215.524 32.294L215.62 32.0423L215.911 31.2874L216.077 30.8697L216.5 29.8129L216.726 29.2493L217.254 27.9257L217.531 27.2362L218.154 25.6963L218.481 24.9011L219.18 23.175L222.011 16.2451L223.434 12.828L224.264 10.8653L224.666 9.92422L225.385 8.29366L225.727 7.51362L226.336 6.18502L226.627 5.56098L227.14 4.51924L227.382 4.03612L227.804 3.26613L228.005 2.91385L228.352 2.39047L228.784 1.86708L229.116 1.55506L229.916 1.05181L230.333 0.820308L231.264 0.468028L231.746 0.312019L232.762 0.120782L233.275 0.0402605L234.326 0.00503256L234.849 0M270.195 0.518354L271.527 0.578745L273.855 0.80521L274.967 0.941089L276.893 1.33363L277.808 1.55003L279.392 2.12877L280.146 2.44583L281.444 3.23091L282.062 3.65364L283.123 4.67525L283.631 5.21877L284.521 6.49704L285.718 8.7315L285.964 9.26998L286.316 10.2413L286.472 10.7345L286.668 11.8316L286.708 12.1234L286.769 12.7928L286.794 13.1451L286.829 13.9452L286.849 14.368L286.864 15.3393L286.874 17.0352V17.6542L286.859 19.2445L286.829 20.1252L286.814 20.548L286.769 21.2777L286.744 21.6249L286.668 22.2389L286.583 22.8327L286.316 23.8292L285.718 25.339L285.341 26.1593L284.516 27.5734L284.089 28.2478L283.108 29.3952L282.595 29.9387L281.413 30.8396L280.785 31.2623L279.332 31.9467L278.567 32.2587L276.792 32.7419L275.857 32.9583L273.695 33.2652L272.563 33.4011L269.968 33.5521L265.513 33.6427H264.869L263.19 33.6276L262.229 33.6075L261.772 33.5924L260.977 33.5571L260.595 33.537L259.951 33.4867L259.338 33.4313L258.493 33.2652L258.126 33.1747L257.684 32.9281L257.568 32.8425L257.377 32.6412L257.286 32.5305L257.141 32.1883L257.07 31.992L256.97 31.4082L256.919 31.0761L256.849 30.1451L256.814 29.6217L256.773 28.2327L256.763 27.8502L256.748 26.9846L256.738 26.5317L256.723 24.9867L256.718 23.8091L256.713 23.1951V21.8363L256.708 21.1368V13.6835L256.713 12.2342V11.5296L256.718 10.2614L256.723 9.65246L256.728 8.55536L256.733 8.02694L256.748 7.08585L256.753 6.63292L256.773 5.83777L256.794 5.07786L256.849 3.9254L256.879 3.40705L256.97 2.66223L257.015 2.33008L257.141 1.88218L257.206 1.68591L257.377 1.42925L257.684 1.14239L257.87 1.00651L258.508 0.80521L258.694 0.759917L259.162 0.679396L259.408 0.644168L260.007 0.583777L260.324 0.553582L261.073 0.513322L261.47 0.493191L262.385 0.462996L262.863 0.452931L263.959 0.437833L265.83 0.427768H267.414M319.565 6.21522L308.713 6.48194L307.572 6.51214L307.024 6.52724L305.058 6.57756L302.78 6.65808L301.648 6.72351L301.13 6.75873L300.346 6.84429L299.989 6.88958L299.466 7.00533L299.23 7.07075L298.888 7.22676L298.148 7.90616L297.887 8.23327L297.525 8.96803L297.369 9.34547L297.233 10.1456L297.193 10.5432L297.284 11.3484L297.681 12.4858L297.791 12.6921L298.093 13.0444L298.264 13.2105L298.717 13.4923L298.968 13.6282L299.617 13.8496L299.969 13.9503L300.849 14.1163L301.321 14.1918L302.478 14.3076L303.092 14.3579L304.56 14.4334L305.339 14.4636L307.16 14.4988L310.338 14.5189H311.363L313.124 14.534L313.958 14.5441L315.346 14.5793L316 14.5995L317.046 14.6599L317.529 14.6901L318.248 14.7806L318.569 14.8259L318.992 14.9467L319.168 15.0121L319.314 15.1681L319.349 15.2487L319.238 15.4399L318.811 15.7771L318.675 15.8626L318.454 16.3558L318.308 17.3171L319.314 19.4911L309.624 18.545L307.371 18.6054L306.295 18.6507L304.439 18.8067L303.554 18.8922L302.061 19.1489L301.357 19.2898L300.2 19.6572L299.662 19.8585L298.822 20.3467L298.44 20.6083L297.887 21.2274L297.646 21.5545L297.359 22.3144L297.188 23.6178V23.9802L297.253 24.579L297.299 24.8609L297.47 25.3339L297.575 25.5604L297.877 25.968L298.51 26.5619L298.822 26.8034L299.491 27.1356L299.682 27.206L300.175 27.3218L300.441 27.3721L301.135 27.4476L301.513 27.4828L302.473 27.5332L302.996 27.5533L304.303 27.5784L305.002 27.5885L306.727 27.5986L309.85 27.6036H319.867L319.565 33.3911L308.698 33.4766L306.129 33.4615L304.877 33.4515L302.624 33.3911L302.096 33.376L301.135 33.3407L300.673 33.3206L299.883 33.2703L299.511 33.2501L298.646 33.1696L298.284 33.1092L297.736 32.9985L296.725 32.7016L296.238 32.5406L295.348 32.143L294.92 31.9266L294.151 31.4233L293.779 31.1566L293.13 30.5477L292.823 30.2256L292.29 29.511L292.044 29.1385L291.631 28.3182L291.44 27.8955L291.149 26.9695L290.842 25.4597L290.741 24.7351L290.887 23.185L291.008 22.41L291.516 20.9405L291.802 20.241L292.567 19.1036L292.768 18.852L293.205 18.4594L293.894 18.0518L294.317 17.8908L294.825 17.5989L295.026 17.4479L295.076 17.1007L295.041 16.9144L294.608 16.4112L294.473 16.2703L294.1 15.9432L293.406 15.3695L292.919 14.9819L292.235 14.2422L292.099 14.0761L291.938 13.7993L291.903 13.5175L291.978 13.3967L291.943 13.1149L291.657 12.7575L291.516 12.667L291.38 12.3851L291.44 11.9473L291.526 11.8114L291.491 11.3988L291.184 10.7798L291.073 10.6489L290.953 10.2513L290.902 10.0299L290.887 9.48638L290.897 8.9177L291.194 7.53375L291.38 6.83422L291.958 5.46536L292.114 5.14328L292.461 4.5595L293.029 3.83481L293.351 3.4926L294.005 2.91889L294.337 2.64713L295.061 2.1942L295.438 1.98283L296.303 1.64062L296.766 1.48461L297.852 1.23801L298.43 1.12729L299.808 0.96122L300.542 0.890764L302.287 0.790113L303.212 0.749852L305.4 0.704559L305.978 0.694494L307.23 0.684429L309.257 0.679396H319.565M262.742 6.71847L262.471 27.6841L269.234 27.5181L271.241 27.4627L271.839 27.4426L272.845 27.3973L273.317 27.3721L274.107 27.3117L274.474 27.2815L275.087 27.201L275.661 27.1155L276.445 26.8538L276.807 26.7078L277.416 26.2951L277.994 25.8623L278.914 24.881L279.337 24.3626L279.97 23.1548L280.257 22.5157L280.644 21.0009L280.986 18.2883L281.066 17.0252L280.961 14.7806L280.911 14.2422L280.745 13.2457L280.649 12.7575L280.393 11.8668L280.257 11.429L279.915 10.6439L279.734 10.2614L279.306 9.582L279.085 9.25489L278.572 8.6862L277.707 7.96152L277.28 7.66963L276.546 7.27709L276.164 7.10598L275.188 6.90468L274.911 6.85938L274.238 6.80403L273.876 6.77886L272.996 6.74867L272.523 6.73357L271.381 6.72351L269.32 6.71847H262.742Z", "fill", "#2D2D2D", 2, "fill", "var(--p-t-trader1)"], ["d", "M129.234 23.0743H135.268V29.1134H129.234V23.0743ZM122.697 4.95708H141.805V10.9962H122.697V4.95708Z", "fill", "#F1B82B", 2, "fill", "var(--p-t-trader2)"], ["fxchScrollableHorizontalItem", "", 2, "width", "170px", "height", "92px"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 170 92", 1, "fxch-partners-img"], ["d", "M108.232 41.9554C106.343 42.7394 104.311 43.1205 102.267 43.0742C99.4125 43.0742 97.2009 42.2673 95.6499 40.6533C94.0157 38.8152 93.1775 36.4047 93.3189 33.95C93.2468 32.7377 93.4201 31.5232 93.8285 30.3794C94.237 29.2354 94.8721 28.1856 95.6958 27.2926C97.2865 25.703 99.538 24.9115 102.45 24.9175C104.335 24.9217 106.213 25.1401 108.048 25.5685V28.4572C106.38 27.8037 104.616 27.4258 102.827 27.3384C102.035 27.2858 101.242 27.4137 100.508 27.7124C99.7733 28.0111 99.1163 28.4726 98.5867 29.0624C97.5424 30.4697 97.0319 32.2018 97.1457 33.95C97.0464 35.7045 97.6098 37.4324 98.7243 38.7919C99.2793 39.3898 99.9591 39.8582 100.716 40.1641C101.472 40.4699 102.287 40.6057 103.102 40.5617C104.89 40.5358 106.648 40.0897 108.232 39.2595V41.9554Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M111.306 42.6069V25.3855H114.977V32.3638H122.053V25.3855H125.724V42.6069H122.053V34.7848H114.977V42.6069H111.306Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M147.365 42.6069V25.3855H151.035V42.6069H147.365Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M155.192 42.6069V25.3855H158.358L166.37 37.1139V25.3855H169.261V42.6069H165.993L158.074 30.8783V42.6069H155.192Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M94.2103 66.4768V63.5881C95.7123 64.2509 97.324 64.6302 98.9642 64.7068C99.7391 64.7516 100.507 64.5388 101.148 64.1017C101.412 63.9009 101.622 63.6389 101.761 63.3385C101.9 63.038 101.964 62.7083 101.947 62.3777C101.963 61.864 101.779 61.3642 101.433 60.9838C100.867 60.4527 100.223 60.0105 99.524 59.6725L98.4043 59.0581C97.1569 58.4278 96.0345 57.5764 95.0913 56.5455C94.4562 55.7698 94.1122 54.7967 94.1186 53.7946C94.0963 53.1369 94.2272 52.4831 94.5012 51.8846C94.7751 51.2863 95.1846 50.7598 95.697 50.3465C96.8985 49.4337 98.3834 48.9726 99.891 49.0445C101.466 49.0741 103.031 49.2927 104.553 49.6955V52.3915C103.21 51.8744 101.796 51.5651 100.359 51.4745C99.6844 51.4389 99.0159 51.6188 98.4502 51.9879C98.2305 52.1366 98.0516 52.3378 97.9297 52.5733C97.8079 52.8088 97.747 53.071 97.7528 53.336C97.7732 53.7576 97.9385 54.1592 98.2208 54.473C98.7713 55.0002 99.3884 55.4534 100.056 55.8211L101.268 56.4721C102.57 57.1188 103.745 57.9947 104.737 59.0581C105.47 60.0663 105.791 61.3154 105.636 62.5519C105.481 63.7883 104.861 64.9195 103.902 65.7155C102.493 66.7204 100.784 67.2152 99.0559 67.1185C97.4212 67.0935 95.7951 66.8782 94.2103 66.4768Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M113.029 66.6596V51.7216H106.88V49.4016H122.812V51.7216H116.663V66.6229L113.029 66.6596Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M142.656 66.6593V49.438H149.08C152.622 49.438 154.394 50.8594 154.394 53.7205C154.391 54.7517 154.071 55.7571 153.476 56.5998C152.857 57.4978 152.003 58.2085 151.007 58.6539L156.595 66.6593H152.366L148.08 59.5801H146.033V66.6593H142.656ZM146.015 57.2233H146.859C149.465 57.2233 150.778 56.1688 150.778 54.0598C150.778 52.5099 149.621 51.7305 147.327 51.7305H146.023L146.015 57.2233Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M133.535 49.438H129.993L123.284 66.6593H125.891L131.204 52.8767L136.61 66.6593H140.243L133.535 49.438Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M138.232 25.3848H134.698L127.991 42.6063H130.597L135.911 28.8329L141.307 42.6063H144.942L138.232 25.3848Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M140.239 35.719H131.76V38.0941H140.239V35.719Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M135.122 59.6081H126.642V61.9832H135.122V59.6081Z", "fill", "white", 2, "fill", "var(--p-c-star)"], ["d", "M66.2136 75.5135C76.3278 66.1971 72.1395 45.4309 56.8591 29.1312C41.5785 12.8313 20.992 7.17011 10.8778 16.4865C0.763547 25.8029 4.95165 46.569 20.2322 62.8688C35.5127 79.1687 56.0992 84.8299 66.2136 75.5135Z", "fill", "url(#paint0_linear_0_66)"], ["d", "M41.238 76.6328C52.2194 69.7462 54.2412 53.3835 45.7539 40.0857C37.2664 26.7878 21.484 21.5905 10.5026 28.4771C-0.478665 35.3638 -2.50041 51.7265 5.98689 65.0245C14.4743 78.3223 30.2568 83.5195 41.238 76.6328Z", "fill", "url(#paint1_linear_0_66)"], ["d", "M51.2722 65.4661C65.0735 65.4661 76.2617 54.4975 76.2617 40.9669C76.2617 27.4362 65.0735 16.4676 51.2722 16.4676C37.4708 16.4676 26.2825 27.4362 26.2825 40.9669C26.2825 54.4975 37.4708 65.4661 51.2722 65.4661Z", "fill", "url(#paint2_linear_0_66)"], ["id", "paint0_linear_0_66", "x1", "75.3357", "y1", "76.6769", "x2", "8.23093", "y2", "12.5515", "gradientUnits", "userSpaceOnUse"], ["stop-color", "var(--p-c-star1)"], ["offset", "0.1", "stop-color", "var(--p-c-star2)"], ["offset", "0.21", "stop-color", "var(--p-c-star3)"], ["offset", "0.33", "stop-color", "var(--p-c-star4)"], ["offset", "0.46", "stop-color", "var(--p-c-star5)"], ["offset", "0.59", "stop-color", "var(--p-c-star6)"], ["offset", "0.62", "stop-color", "var(--p-c-star7)"], ["offset", "1", "stop-color", "var(--p-c-star8)", "stop-opacity", "0"], ["id", "paint1_linear_0_66", "x1", "7.05325", "y1", "33.0593", "x2", "45.4957", "y2", "76.66", "gradientUnits", "userSpaceOnUse"], ["stop-color", "var(--p-c-star9)"], ["offset", "0.09", "stop-color", "var(--p-c-star10)", "stop-opacity", "0.96"], ["offset", "0.24", "stop-color", "var(--p-c-star11)", "stop-opacity", "0.86"], ["offset", "0.42", "stop-color", "var(--p-c-star12)", "stop-opacity", "0.69"], ["offset", "0.64", "stop-color", "var(--p-c-star13)", "stop-opacity", "0.45"], ["offset", "0.89", "stop-color", "var(--p-c-star14)", "stop-opacity", "0.15"], ["id", "paint2_linear_0_66", "x1", "66.6129", "y1", "61.6041", "x2", "36.9422", "y2", "20.9855", "gradientUnits", "userSpaceOnUse"], ["stop-color", "var(--p-c-star15)"], ["offset", "0.09", "stop-color", "var(--p-c-star16)", "stop-opacity", "0.95"], ["offset", "0.25", "stop-color", "var(--p-c-star17)", "stop-opacity", "0.83"], ["offset", "0.47", "stop-color", "var(--p-c-star18)", "stop-opacity", "0.62"], ["offset", "0.73", "stop-color", "var(--p-c-star19)", "stop-opacity", "0.33"], ["fxchScrollableHorizontalItem", "", 2, "width", "131px", "height", "76px"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 131 76", 1, "fxch-partners-img"], ["d", "M36.8995 27.6029C36.8995 29.1667 37.0738 30.4346 37.3788 31.3644C37.7273 32.2942 38.1629 33.3086 38.7728 34.4075C38.9907 34.7456 39.0778 35.0837 39.0778 35.3796C39.0778 35.8022 38.8164 36.2249 38.2501 36.6475L35.5055 38.4226C35.1134 38.6762 34.7213 38.803 34.3728 38.803C33.9371 38.803 33.5015 38.5917 33.0658 38.2113C32.4559 37.5774 31.9331 36.9011 31.4975 36.2249C31.0618 35.5064 30.6262 34.7033 30.147 33.7313C26.7489 37.6196 22.4795 39.5638 17.3389 39.5638C13.6794 39.5638 10.7605 38.5494 8.62585 36.5207C6.49116 34.492 5.40204 31.7871 5.40204 28.4059C5.40204 24.8134 6.70899 21.8971 9.36646 19.6993C12.0239 17.5016 15.5527 16.4027 20.0399 16.4027C21.5211 16.4027 23.0459 16.5295 24.6578 16.7408C26.2697 16.9521 27.9251 17.2902 29.6677 17.6706V14.5853C29.6677 11.3732 28.9707 9.13313 27.6202 7.82292C26.2261 6.51271 23.8736 5.87874 20.5191 5.87874C18.9943 5.87874 17.426 6.0478 15.8141 6.42818C14.2022 6.80856 12.6338 7.27348 11.1091 7.86519C10.412 8.16104 9.88924 8.3301 9.58428 8.41463C9.27933 8.49916 9.0615 8.54142 8.88724 8.54142C8.27733 8.54142 7.97237 8.11877 7.97237 7.23121V5.16024C7.97237 4.484 8.0595 3.97682 8.27733 3.68097C8.49515 3.38511 8.88724 3.08926 9.49715 2.79341C11.0219 2.03264 12.8517 1.39867 14.9863 0.89149C17.121 0.342048 19.3864 0.0884588 21.7825 0.0884588C26.9667 0.0884588 30.7569 1.22961 33.1965 3.51191C35.5926 5.79421 36.8124 9.25992 36.8124 13.9091V27.6029H36.8995ZM19.2121 34.0271C20.6498 34.0271 22.131 33.7735 23.6993 33.2663C25.2677 32.7592 26.6618 31.8293 27.838 30.5614C28.5351 29.7584 29.0578 28.8708 29.3192 27.8564C29.5806 26.8421 29.7549 25.6164 29.7549 24.1794V22.4043C28.4915 22.1084 27.141 21.8548 25.7469 21.6858C24.3528 21.5167 23.0023 21.4322 21.6518 21.4322C18.7329 21.4322 16.5982 21.9816 15.1606 23.1228C13.723 24.2639 13.0259 25.87 13.0259 27.9832C13.0259 29.9697 13.5487 31.449 14.6378 32.4633C15.6834 33.5199 17.2082 34.0271 19.2121 34.0271ZM54.1949 38.5917C53.4107 38.5917 52.8879 38.4649 52.5394 38.1691C52.1909 37.9155 51.8859 37.3238 51.6245 36.5207L41.3867 3.85003C41.1254 3.00473 40.9947 2.45529 40.9947 2.15943C40.9947 1.4832 41.3432 1.10281 42.0402 1.10281H46.3096C47.1373 1.10281 47.7037 1.22961 48.0086 1.52546C48.3571 1.77905 48.6185 2.37076 48.8799 3.17379L56.1988 31.1531L62.995 3.17379C63.2128 2.32849 63.4742 1.77905 63.8227 1.52546C64.1712 1.27187 64.7812 1.10281 65.5653 1.10281H69.0505C69.8783 1.10281 70.4446 1.22961 70.7931 1.52546C71.1416 1.77905 71.4466 2.37076 71.6209 3.17379L78.5041 31.4912L86.0409 3.17379C86.3023 2.32849 86.6072 1.77905 86.9122 1.52546C87.2607 1.27187 87.827 1.10281 88.6112 1.10281H92.6628C93.3598 1.10281 93.7519 1.44093 93.7519 2.15943C93.7519 2.37076 93.7083 2.58208 93.6648 2.83567C93.6212 3.08926 93.5341 3.42738 93.3598 3.89229L82.8606 36.563C82.5992 37.4083 82.2943 37.9577 81.9458 38.2113C81.5973 38.4649 81.0309 38.634 80.2903 38.634H76.5437C75.716 38.634 75.1496 38.5072 74.8011 38.2113C74.4526 37.9155 74.1476 37.366 73.9734 36.5207L67.2208 9.25992L60.5118 36.4785C60.294 37.3238 60.0326 37.8732 59.684 38.1691C59.3355 38.4649 58.7256 38.5917 57.9414 38.5917H54.1949ZM110.176 39.7329C107.911 39.7329 105.645 39.4793 103.467 38.9721C101.289 38.4649 99.5896 37.9155 98.4569 37.2815C97.7599 36.9011 97.2807 36.4785 97.1064 36.0981C96.9321 35.7177 96.845 35.2951 96.845 34.9147V32.7592C96.845 31.8716 97.1935 31.449 97.847 31.449C98.1084 31.449 98.3698 31.4912 98.6312 31.5757C98.8926 31.6603 99.2846 31.8293 99.7203 31.9984C101.202 32.6324 102.813 33.1395 104.512 33.4777C106.255 33.8158 107.954 33.9848 109.697 33.9848C112.441 33.9848 114.576 33.5199 116.057 32.5901C117.538 31.6603 118.323 30.3078 118.323 28.5749C118.323 27.3915 117.93 26.4194 117.146 25.6164C116.362 24.8134 114.881 24.0949 112.746 23.4186L106.429 21.5167C103.249 20.5446 100.897 19.1076 99.4589 17.2057C98.0213 15.3461 97.2807 13.2751 97.2807 11.0773C97.2807 9.30219 97.6727 7.73839 98.4569 6.38592C99.2411 5.03344 100.287 3.85003 101.594 2.9202C102.901 1.94811 104.382 1.22961 106.124 0.722431C107.867 0.215253 109.697 0.00392914 111.614 0.00392914C112.572 0.00392914 113.574 0.046194 114.532 0.172988C115.534 0.299783 116.449 0.468842 117.364 0.637901C118.235 0.849225 119.063 1.06055 119.847 1.31414C120.632 1.56773 121.241 1.82132 121.677 2.07491C122.287 2.41302 122.723 2.75114 122.984 3.13153C123.245 3.46964 123.376 3.93456 123.376 4.52626V6.51271C123.376 7.40027 123.028 7.86519 122.374 7.86519C122.026 7.86519 121.459 7.69613 120.719 7.35801C118.235 6.25912 115.447 5.70968 112.354 5.70968C109.871 5.70968 107.911 6.09006 106.56 6.89309C105.209 7.69613 104.512 8.92181 104.512 10.6547C104.512 11.8381 104.948 12.8524 105.819 13.6555C106.691 14.4585 108.303 15.2615 110.612 15.98L116.798 17.8819C119.934 18.854 122.2 20.2065 123.55 21.9394C124.901 23.6722 125.554 25.6587 125.554 27.8564C125.554 29.6738 125.162 31.3222 124.422 32.7592C123.637 34.1962 122.592 35.4641 121.241 36.4785C119.891 37.5351 118.279 38.2959 116.406 38.8453C114.445 39.437 112.398 39.7329 110.176 39.7329Z", "fill", "#282F3D", 2, "fill", "var(--p-aws)"], ["d", "M118.41 60.2736C104.077 70.5439 83.2527 75.9961 65.3475 75.9961C40.254 75.9961 17.6438 66.9937 0.566316 52.0319C-0.784199 50.8485 0.435621 49.2424 2.04753 50.1723C20.5191 60.5694 43.3036 66.8669 66.8723 66.8669C82.7735 66.8669 100.243 63.6547 116.319 57.0614C118.715 56.0048 120.762 58.583 118.41 60.2736Z", "fill", "#EB9E3F", 2, "fill", "var(--p-aws1)"], ["d", "M124.378 53.6802C122.548 51.3979 112.267 52.5814 107.606 53.1308C106.211 53.2999 105.994 52.1164 107.257 51.2289C115.447 45.6499 128.909 47.256 130.477 49.1156C132.046 51.0176 130.042 64.0774 122.374 70.3326C121.198 71.3047 120.065 70.7975 120.588 69.5296C122.331 65.3453 126.208 55.9203 124.378 53.6802Z", "fill", "#EB9E3F", 2, "fill", "var(--p-aws1)"]], template: function PartnersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3, 4);
    \u0275\u0275listener("onInitialized", function PartnersComponent_Template_div_onInitialized_5_listener($event) {
      return ctx.onScrollableInitialized($event);
    });
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275listener("mouseenter", function PartnersComponent_Template_div_mouseenter_7_listener() {
      return ctx.disableAutoScroll();
    })("mouseleave", function PartnersComponent_Template_div_mouseleave_7_listener() {
      return ctx.enableAutoScroll();
    })("touchstart", function PartnersComponent_Template_div_touchstart_7_listener() {
      return ctx.disableAutoScroll();
    })("touchend", function PartnersComponent_Template_div_touchend_7_listener() {
      return ctx.enableAutoScroll();
    });
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 7);
    \u0275\u0275element(10, "path", 8)(11, "path", 9)(12, "path", 10)(13, "path", 11)(14, "path", 12)(15, "path", 13)(16, "path", 14)(17, "path", 15)(18, "path", 16)(19, "path", 17)(20, "path", 18)(21, "path", 19)(22, "path", 20)(23, "path", 21)(24, "path", 22)(25, "path", 23)(26, "path", 24)(27, "path", 25)(28, "path", 26)(29, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 29);
    \u0275\u0275element(32, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 32);
    \u0275\u0275element(35, "path", 33)(36, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 36);
    \u0275\u0275element(39, "path", 37)(40, "path", 38)(41, "path", 39)(42, "path", 40)(43, "path", 41)(44, "path", 42)(45, "path", 43)(46, "path", 44)(47, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 47);
    \u0275\u0275element(50, "path", 48)(51, "path", 49)(52, "path", 50)(53, "path", 51)(54, "path", 52)(55, "path", 53)(56, "path", 54)(57, "path", 55)(58, "path", 56)(59, "path", 57)(60, "path", 58)(61, "path", 59)(62, "path", 60)(63, "path", 61)(64, "path", 62)(65, "path", 63)(66, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(67, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(68, "svg", 66);
    \u0275\u0275element(69, "path", 67)(70, "path", 68)(71, "path", 69)(72, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(73, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 72);
    \u0275\u0275element(75, "path", 73)(76, "path", 74)(77, "path", 75)(78, "path", 76)(79, "path", 77)(80, "path", 78)(81, "path", 79)(82, "path", 80)(83, "path", 81)(84, "path", 82)(85, "path", 83)(86, "path", 84)(87, "path", 85)(88, "path", 86);
    \u0275\u0275elementStart(89, "defs")(90, "linearGradient", 87);
    \u0275\u0275element(91, "stop", 88)(92, "stop", 89)(93, "stop", 90)(94, "stop", 91)(95, "stop", 92)(96, "stop", 93)(97, "stop", 94)(98, "stop", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "linearGradient", 96);
    \u0275\u0275element(100, "stop", 97)(101, "stop", 98)(102, "stop", 99)(103, "stop", 100)(104, "stop", 101)(105, "stop", 102)(106, "stop", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "linearGradient", 103);
    \u0275\u0275element(108, "stop", 104)(109, "stop", 105)(110, "stop", 106)(111, "stop", 107)(112, "stop", 108)(113, "stop", 95);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(114, "div", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(115, "svg", 110);
    \u0275\u0275element(116, "path", 111)(117, "path", 112)(118, "path", 113);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "PARTNERS.TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("vertical", false)("horizontal", true)("scrollItemsGap", ctx.columnGap)("borderAdjustmentGap", 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("column-gap", ctx.columnGap, "px");
  }
}, dependencies: [
  CommonModule,
  TranslateModule,
  TranslatePipe,
  FxchScrollableTargetDirective,
  FxchScrollableContainerDirective,
  FxchScrollableHorizontalItemDirective,
  FxchScrollableDirective
], styles: ["\n\n.fxch-partners[_ngcontent-%COMP%] {\n  max-width: var(--width);\n  margin: 0 auto;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.fxch-partners-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 67px;\n  align-items: start;\n  padding: 50px var(--padding-inline) 100px;\n}\n.fxch-partners-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n}\n.fxch-partners-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: minmax(0, 1fr);\n  column-gap: 80px;\n  align-items: center;\n}\n.fxch-partners-box-img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi90eXBvZ3JhcGh5Lm1peGluLnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLXBhcnRuZXJzIHtcclxuICAgIG1heC13aWR0aDogdmFyKC0td2lkdGgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICByb3ctZ2FwOiA2N3B4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IHZhcigtLXBhZGRpbmctaW5saW5lKSAxMDBweDtcclxuICAgIH1cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC1sZ1wiKTtcclxuICAgIH1cclxuICAgICYtYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMCwgMWZyKTtcclxuICAgICAgICBjb2x1bW4tZ2FwOiA4MHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJi1pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsICJAbWl4aW4gZm9udC1zdHlsZXMoJHR5cG9ncmFwaHkpIHtcclxuICAgIEBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gxJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMicpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTM5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnaDMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC1tZCcpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC1zbScpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXhzJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQteGwnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQtbGcnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1zbScpIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14cycpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxDQUFBO0FBQ0ksYUFBQSxJQUFBO0FBQ0EsVUFBQSxFQUFBO0FBQ0EsdUJBQUE7QUFBQSxlQUFBOztBQUNBLENBQUE7QUFDSSxXQUFBO0FBQ0EseUJBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLFdBQUEsS0FBQSxJQUFBLGtCQUFBOztBQUVKLENBQUE7QUNvQ0ksYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOztBRG5DSixDQUFBO0FBQ0ksV0FBQTtBQUNBLGtCQUFBO0FBQ0Esc0JBQUEsT0FBQSxDQUFBLEVBQUE7QUFDQSxjQUFBO0FBQ0EsZUFBQTs7QUFDQSxDQUFBO0FBQ0ksV0FBQTtBQUNBLGFBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTs7IiwKICAibmFtZXMiOiBbXQp9Cg== */"], changeDetection: 0 });
var PartnersComponent = _PartnersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnersComponent, { className: "PartnersComponent", filePath: "src\\app\\partners\\partners.component.ts", lineNumber: 28 });
})();

// src/assets/team/team.json
var team_default = [
  {
    id: 1,
    imageSrc: "",
    name: "Frank Mikulecz",
    jobTitle: "TEAM.FOUNDER_AND_CEO",
    tags: ["TEAM.TAGS.NYC"]
  },
  {
    id: 2,
    imageSrc: "",
    name: "Steven Williams",
    jobTitle: "TEAM.COO",
    tags: ["TEAM.TAGS.CAPE_TOWN"]
  },
  {
    id: 3,
    imageSrc: "",
    name: "Joseph Shannon",
    jobTitle: "TEAM.HEAD_OF_LEGAL",
    tags: ["TEAM.TAGS.DUBLIN"]
  },
  {
    id: 4,
    imageSrc: "",
    name: "Altan Nar",
    jobTitle: "TEAM.FINANCE",
    tags: ["TEAM.TAGS.ISTANBUL"]
  },
  {
    id: 5,
    imageSrc: "",
    name: "Ezgi Durmu\u015F",
    jobTitle: "TEAM.ONBOARDING",
    tags: ["TEAM.TAGS.ISTANBUL"]
  },
  {
    id: 6,
    imageSrc: "",
    name: "Robert de Villiers",
    jobTitle: "TEAM.BUSINESS_DEVELOPMENT",
    tags: ["TEAM.TAGS.CAPE_TOWN"]
  },
  {
    id: 7,
    imageSrc: "",
    name: "Makgera Modise",
    jobTitle: "TEAM.TECHNOLOGY",
    tags: ["TEAM.TAGS.CAPE_TOWN"]
  },
  {
    id: 8,
    imageSrc: "",
    name: "Peter Lemke",
    jobTitle: "TEAM.SETTLEMENT_OPERATIONS",
    tags: ["TEAM.TAGS.CHICAGO"]
  }
];

// src/app/team-card/team-card.component.ts
function TeamCardComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r3.teamMember == null ? null : ctx_r3.teamMember.name);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx_r3.teamMember == null ? null : ctx_r3.teamMember.name, " ");
  }
}
function TeamCardComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, (tmp_0_0 = ctx_r4.teamMember == null ? null : ctx_r4.teamMember.jobTitle) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, (tmp_1_0 = ctx_r4.teamMember == null ? null : ctx_r4.teamMember.jobTitle) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ""), " ");
  }
}
function TeamCardComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, tag_r6), " ");
  }
}
function TeamCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
    \u0275\u0275template(5, TeamCardComponent_div_0_div_5_Template, 2, 2, "div", 7)(6, TeamCardComponent_div_0_div_6_Template, 4, 6, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275template(8, TeamCardComponent_div_0_div_8_Template, 3, 3, "div", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("--photo", ctx_r0.teamMember == null ? null : ctx_r0.teamMember.imageSrc);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.teamMember == null ? null : ctx_r0.teamMember.name);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r0.teamMember == null ? null : ctx_r0.teamMember.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.teamMember == null ? null : ctx_r0.teamMember.tags);
  }
}
function TeamCardComponent_ng_template_1_div_2_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(4);
    \u0275\u0275property("title", ctx_r10.teamMember == null ? null : ctx_r10.teamMember.name);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx_r10.teamMember == null ? null : ctx_r10.teamMember.name, " ");
  }
}
function TeamCardComponent_ng_template_1_div_2_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(4);
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, (tmp_0_0 = ctx_r11.teamMember == null ? null : ctx_r11.teamMember.jobTitle) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, (tmp_1_0 = ctx_r11.teamMember == null ? null : ctx_r11.teamMember.jobTitle) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ""), " ");
  }
}
function TeamCardComponent_ng_template_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, TeamCardComponent_ng_template_1_div_2_div_1_div_1_Template, 2, 2, "div", 21)(2, TeamCardComponent_ng_template_1_div_2_div_1_div_2_Template, 4, 6, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r8.teamMember == null ? null : ctx_r8.teamMember.name);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r8.teamMember == null ? null : ctx_r8.teamMember.jobTitle);
  }
}
function TeamCardComponent_ng_template_1_div_2_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, tag_r13), " ");
  }
}
function TeamCardComponent_ng_template_1_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, TeamCardComponent_ng_template_1_div_2_div_2_div_1_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx_r9.teamMember == null ? null : ctx_r9.teamMember.tags);
  }
}
function TeamCardComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, TeamCardComponent_ng_template_1_div_2_div_1_Template, 3, 2, "div", 18)(2, TeamCardComponent_ng_template_1_div_2_div_2_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", (ctx_r7.teamMember == null ? null : ctx_r7.teamMember.name) || (ctx_r7.teamMember == null ? null : ctx_r7.teamMember.jobTitle));
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r7.teamMember == null ? null : ctx_r7.teamMember.tags);
  }
}
function TeamCardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "fxch-logo", 15);
    \u0275\u0275template(2, TeamCardComponent_ng_template_1_div_2_Template, 3, 2, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.teamMember == null ? null : ctx_r1.teamMember.name) || (ctx_r1.teamMember == null ? null : ctx_r1.teamMember.jobTitle) || (ctx_r1.teamMember == null ? null : ctx_r1.teamMember.tags));
  }
}
var _TeamCardComponent = class _TeamCardComponent {
};
_TeamCardComponent.\u0275fac = function TeamCardComponent_Factory(t) {
  return new (t || _TeamCardComponent)();
};
_TeamCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamCardComponent, selectors: [["team-card"]], inputs: { teamMember: "teamMember" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["class", "fxch-team-card", 4, "ngIf", "ngIfElse"], ["emptyCard", ""], [1, "fxch-team-card"], [1, "fxch-team-card-img-wrap"], [1, "fxch-team-card-img"], [1, "fxch-team-card-block"], [1, "fxch-team-card-header"], ["class", "fxch-team-card-header-name", 3, "title", 4, "ngIf"], ["class", "fxch-team-card-header-job-title", 3, "title", 4, "ngIf"], [1, "fxch-team-card-footer"], ["class", "fxch-team-card-footer-item", 4, "ngFor", "ngForOf"], [1, "fxch-team-card-header-name", 3, "title"], [1, "fxch-team-card-header-job-title", 3, "title"], [1, "fxch-team-card-footer-item"], [1, "fxch-team-card-default"], [1, "fxch-team-card-default-logo"], ["class", "fxch-team-card-default-block", 4, "ngIf"], [1, "fxch-team-card-default-block"], ["class", "fxch-team-card-default-header", 4, "ngIf"], ["class", "fxch-team-card-default-footer", 4, "ngIf"], [1, "fxch-team-card-default-header"], ["class", "fxch-team-card-default-header-name", 3, "title", 4, "ngIf"], ["class", "fxch-team-card-header-default-job-title", 3, "title", 4, "ngIf"], [1, "fxch-team-card-default-header-name", 3, "title"], [1, "fxch-team-card-header-default-job-title", 3, "title"], [1, "fxch-team-card-default-footer"], ["class", "fxch-team-card-default-footer-item", 4, "ngFor", "ngForOf"], [1, "fxch-team-card-default-footer-item"]], template: function TeamCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TeamCardComponent_div_0_Template, 9, 5, "div", 0)(1, TeamCardComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(2);
    \u0275\u0275property("ngIf", ctx.teamMember == null ? null : ctx.teamMember.imageSrc)("ngIfElse", _r2);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, TranslateModule, TranslatePipe, FxchLogoComponent], styles: ["\n\n.fxch-team-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 305px;\n  height: 490px;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media screen and (max-width: 960px) {\n  .fxch-team-card[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n.fxch-team-card[_ngcontent-%COMP%]:hover   .fxch-team-card-block[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n.fxch-team-card-default[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(2, auto);\n  align-items: start;\n  align-content: space-between;\n  width: 305px;\n  height: 490px;\n  padding: 28px;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n@media screen and (max-width: 960px) {\n  .fxch-team-card-default[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n.fxch-team-card-default[_ngcontent-%COMP%]:hover   .fxch-team-card-default-block[_ngcontent-%COMP%] {\n  row-gap: 40px;\n  transform: translateY(0);\n}\n.fxch-team-card-default[_ngcontent-%COMP%]:hover   .fxch-team-card-default-header[_ngcontent-%COMP%] {\n  row-gap: 8px;\n}\n.fxch-team-card-default-logo[_ngcontent-%COMP%] {\n  display: block;\n  width: 65px;\n  height: auto;\n}\n.fxch-team-card-default-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 100px;\n  align-items: start;\n  transform: translateY(calc(100% - 88px));\n  transition: transform 0.6s linear, row-gap 0.6s linear;\n  will-change: transform, row-gap;\n}\n@media screen and (max-width: 960px) {\n  .fxch-team-card-default-block[_ngcontent-%COMP%] {\n    transform: translateY(calc(100% - 48px));\n  }\n}\n.fxch-team-card-default-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 40px;\n  align-items: start;\n  transition: row-gap 0.6s linear;\n  will-change: row-gap;\n}\n.fxch-team-card-default-header-name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-family: var(--font-titles);\n  font-size: 48px;\n  line-height: 1;\n  font-weight: 500;\n  font-size: 44px;\n  height: 2em;\n}\n@media screen and (max-width: 960px) {\n  .fxch-team-card-default-header-name[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.fxch-team-card-default-header-job-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 400;\n}\n.fxch-team-card-default-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  column-gap: 8px;\n  row-gap: 8px;\n  flex-wrap: wrap;\n}\n.fxch-team-card-default-footer-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n}\n.fxch-team-card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: var(--photo);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n.fxch-team-card-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.fxch-team-card-block[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  grid-template-columns: 100%;\n  align-content: space-between;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 28px;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: opacity;\n}\n.fxch-team-card-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 8px;\n  align-items: start;\n}\n.fxch-team-card-header-name[_ngcontent-%COMP%] {\n  font-family: var(--font-titles);\n  font-size: 32px;\n  line-height: 1;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n@media screen and (max-width: 960px) {\n  .fxch-team-card-header-name[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.fxch-team-card-header-job-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 400;\n}\n.fxch-team-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  column-gap: 8px;\n  row-gap: 8px;\n  flex-wrap: wrap;\n}\n.fxch-team-card-footer-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC90ZWFtLWNhcmQvdGVhbS1jYXJkLmNvbXBvbmVudC5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL2JyZWFrcG9pbnQubWl4aW4uc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi90eXBvZ3JhcGh5Lm1peGluLnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLXRlYW0tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzA1cHg7XHJcbiAgICBoZWlnaHQ6IDQ5MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5meGNoLXRlYW0tY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1kZWZhdWx0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDMwNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDkwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAuZnhjaC10ZWFtLWNhcmQtZGVmYXVsdCB7XHJcbiAgICAgICAgICAgICAgICAmLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICByb3ctZ2FwOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICByb3ctZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1sb2dvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYmxvY2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgIHJvdy1nYXA6IDEwMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDEwMCUgLSA4OHB4KSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjZzIGxpbmVhcixcclxuICAgICAgICAgICAgICAgIHJvdy1nYXAgLjZzIGxpbmVhcjtcclxuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgcm93LWdhcDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDEwMCUgLSA0OHB4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgIHJvdy1nYXA6IDQwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogcm93LWdhcCAuNnMgbGluZWFyO1xyXG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogcm93LWdhcDtcclxuICAgICAgICAgICAgJi1uYW1lIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgIGxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJsYWJlbC14c1wiKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1qb2ItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXNtXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZm9vdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogOHB4O1xyXG4gICAgICAgICAgICByb3ctZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC14c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tcGhvdG8pO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICYtd3JhcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuICAgIH1cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICByb3ctZ2FwOiA4cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtam9iLXRpdGxlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXNtXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBjb2x1bW4tZ2FwOiA4cHg7XHJcbiAgICAgICAgcm93LWdhcDogOHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXhzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsICIkYnJlYWtwb2ludHM6IChcclxuICAgIHhzLWg6IFwic2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjcwcHgpXCIsXHJcbiAgICBzbS1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KVwiLFxyXG4gICAgeHM6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcIixcclxuICAgIHNtOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXCIsXHJcbiAgICBtZDogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KVwiLFxyXG4gICAgbGc6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjcwcHgpXCIsXHJcbiAgICB4bDogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweClcIlxyXG4pICFkZWZhdWx0O1xyXG5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQoJGJyZWFrcG9pbnROYW1lKSB7XHJcbiAgICAkbWVkaWFRdWVyeTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50TmFtZSk7XHJcblxyXG4gICAgQGlmICgkbWVkaWFRdWVyeSA9PSBudWxsKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAbWVkaWEgI3skbWVkaWFRdWVyeX0ge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiQG1peGluIGZvbnQtc3R5bGVzKCR0eXBvZ3JhcGh5KSB7XHJcbiAgICBAaWYgKCR0eXBvZ3JhcGh5ID09ICdoMScpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjc5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnaDInKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDEzOXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gzJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA5NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwtbWQnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDY4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwtc20nKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC14cycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbCcpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhsJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LWxnJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQtc20nKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQteHMnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsQ0FBQTtBQUNJLFlBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLGlCQUFBO0FBQ0EsWUFBQTtBQUNBLFVBQUE7QUFDQSx1QkFBQTtBQUFBLGVBQUE7O0FDT0ksT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURkUixHQUFBO0FBU1EsWUFBQTs7O0FBR0EsQ0FaUixjQVlRLE9BQUEsQ0FBQTtBQUNJLFdBQUE7QUFDQSxrQkFBQTs7QUFHUixDQUFBO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSx5QkFBQTtBQUNBLHNCQUFBLE9BQUEsQ0FBQSxFQUFBO0FBQ0EsZUFBQTtBQUNBLGlCQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxXQUFBO0FBQ0EsaUJBQUE7QUFDQSxZQUFBO0FBQ0EsVUFBQTtBQUNBLHVCQUFBO0FBQUEsZUFBQTs7QUNoQkEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURHSixHQUFBO0FBZVEsWUFBQTs7O0FBSUksQ0FuQlosc0JBbUJZLE9BQUEsQ0FBQTtBQUNJLFdBQUE7QUFDQSxhQUFBLFdBQUE7O0FBRUosQ0F2Qlosc0JBdUJZLE9BQUEsQ0FBQTtBQUNJLFdBQUE7O0FBSVosQ0FBQTtBQUNJLFdBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTs7QUFFSixDQWRRO0FBZUosV0FBQTtBQUNBLHlCQUFBO0FBQ0EsV0FBQTtBQUNBLGVBQUE7QUFDQSxhQUFBLFdBQUEsS0FBQSxLQUFBLEVBQUE7QUFDQSxjQUNJLFVBQUEsS0FBQSxNQUFBLEVBQUEsUUFBQSxLQUFBO0FBRUosZUFBQSxTQUFBLEVBQUE7O0FDN0NKLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEb0NBLEdBZFE7QUF5QkEsZUFBQSxXQUFBLEtBQUEsS0FBQSxFQUFBOzs7QUFHUixDQXhCUTtBQXlCSixXQUFBO0FBQ0EseUJBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLGNBQUEsUUFBQSxLQUFBO0FBQ0EsZUFBQTs7QUFDQSxDQUFBO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSxzQkFBQTtBQUNBLGNBQUE7QUFDQSxzQkFBQTtBRTlDUixlQUFBLElBQUE7QUFDQSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7QUY2Q1EsYUFBQTtBQUNBLFVBQUE7O0FDakVSLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEeURJLEdBQUE7QUFVUSxlQUFBOzs7QUFHUixDQUFBO0FFaENKLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTs7QUZrQ0EsQ0FBQTtBQUNJLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGVBQUE7QUFDQSxjQUFBO0FBQ0EsV0FBQTtBQUNBLGFBQUE7O0FBQ0EsQ0FBQTtBQUNJLFdBQUEsSUFBQTtBQUNBLGlCQUFBO0FFeENSLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTs7QUYyQ0osQ0FBQTtBQUNJLFNBQUE7QUFDQSxVQUFBO0FBQ0Esb0JBQUEsSUFBQTtBQUNBLG1CQUFBO0FBQ0EscUJBQUE7QUFDQSx1QkFBQSxJQUFBOztBQUNBLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLFNBQUE7QUFDQSxVQUFBOztBQUdSLENBeEdJO0FBeUdBLFlBQUE7QUFDQSxXQUFBO0FBQ0EseUJBQUE7QUFDQSxpQkFBQTtBQUNBLE9BQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLFFBQUE7QUFDQSxXQUFBO0FBQ0EsVUFBQTtBQUNBLFdBQUE7QUFDQSxjQUFBLFFBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBO0FBQ0EsV0FBQTtBQUNBLGVBQUE7O0FBQ0EsQ0FBQTtBRXBHQSxlQUFBLElBQUE7QUFDQSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7QUZtR0ksaUJBQUE7QUFDQSxlQUFBO0FBQ0EsWUFBQTs7QUM5SEosT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QUQwSEEsR0FBQTtBQU1RLGVBQUE7OztBQUdSLENBQUE7QUU3RkEsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOztBRitGSixDQUFBO0FBQ0ksV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQUNBLGNBQUE7QUFDQSxXQUFBO0FBQ0EsYUFBQTs7QUFDQSxDQUFBO0FBQ0ksV0FBQSxJQUFBO0FBQ0EsaUJBQUE7QUVyR0osYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */"], changeDetection: 0 });
var TeamCardComponent = _TeamCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamCardComponent, { className: "TeamCardComponent", filePath: "src\\app\\team-card\\team-card.component.ts", lineNumber: 23 });
})();

// src/app/team/team.component.ts
var _c03 = ["teamBody"];
var _c13 = ["teamCard"];
function TeamComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12, 13);
    \u0275\u0275element(2, "team-card", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("teamMember", member_r2);
  }
}
var _TeamComponent = class _TeamComponent {
  constructor() {
    this.teamBodyElement = null;
    this.teamCardElements = null;
    this.teamMembers = team_default;
    this.columnGap = 20;
    this.fxchScrollableApi = null;
  }
  onScrollableInitialized(fxchScrollableApi) {
    this.fxchScrollableApi = fxchScrollableApi;
  }
  showPrevious() {
    const moveToIndex = this.getPreviousIndex();
    if (moveToIndex != null) {
      this.fxchScrollableApi.moveTo({ horizontalItemIndex: moveToIndex, verticalItemIndex: 0 });
    }
  }
  showNext() {
    const moveToIndex = this.getNextIndex();
    if (moveToIndex != null) {
      this.fxchScrollableApi.moveTo({ horizontalItemIndex: moveToIndex, verticalItemIndex: 0 });
    }
  }
  isPreviousAvailable() {
    return this.getPreviousIndex() != null;
  }
  isNextAvailable() {
    return this.getMoveIndex(() => 0, (index) => index < this.teamCardElements.length, (index) => index + 1, (cardRect, bodyRect) => cardRect.right > bodyRect.right) != null;
  }
  getPreviousIndex() {
    return this.getMoveIndex(() => this.teamCardElements.length - 1, (index) => index >= 0, (index) => index - 1, (cardRect, bodyRect) => cardRect.left < bodyRect.left);
  }
  getNextIndex() {
    return this.getMoveIndex(() => 0, (index) => index < this.teamCardElements.length, (index) => index + 1, (cardRect, bodyRect) => cardRect.left > bodyRect.left);
  }
  getMoveIndex(getInitailIndex, getLoopCondition, getUpdatedIndex, getScrollCondition) {
    if (this.fxchScrollableApi == null || this.teamCardElements == null || this.teamBodyElement == null) {
      return null;
    }
    const teamBodyRect = this.teamBodyElement.nativeElement.getBoundingClientRect();
    for (let index = getInitailIndex(); getLoopCondition(index); index = getUpdatedIndex(index)) {
      const teamCardElement = this.teamCardElements.get(index);
      const teamCardRect = teamCardElement.nativeElement.getBoundingClientRect();
      if (getScrollCondition(teamCardRect, teamBodyRect)) {
        return index;
      }
    }
    return null;
  }
};
_TeamComponent.\u0275fac = function TeamComponent_Factory(t) {
  return new (t || _TeamComponent)();
};
_TeamComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamComponent, selectors: [["team"]], viewQuery: function TeamComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
    \u0275\u0275viewQuery(_c13, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.teamBodyElement = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.teamCardElements = _t);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 21, consts: [[1, "fxch-team"], [1, "fxch-team-container"], [1, "fxch-team-header"], [1, "fxch-team-header-title"], [1, "fxch-team-header-actions"], [1, "fxch-team-header-actions-item", "fxch-team-header-actions-item--prev", 3, "appearanceType", "iconName", "disabled", "buttonTitle", "onClick"], [1, "fxch-team-header-actions-item", "fxch-team-header-actions-item--next", 3, "appearanceType", "iconName", "disabled", "buttonTitle", "onClick"], [1, "fxch-team-body"], ["teamBody", ""], ["fxchScrollable", "", 1, "fxch-team-carousel", 3, "vertical", "horizontal", "scrollItemsGap", "onInitialized"], ["fxchScrollableContainer", "", "fxchScrollableTarget", "", 1, "fxch-team-box"], ["fxchScrollableHorizontalItem", "", 4, "ngFor", "ngForOf"], ["fxchScrollableHorizontalItem", ""], ["teamCard", ""], [1, "fxch-team-item", 3, "teamMember"]], template: function TeamComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "fxch-button", 5);
    \u0275\u0275listener("onClick", function TeamComponent_Template_fxch_button_onClick_7_listener() {
      return ctx.showPrevious();
    });
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "fxch-button", 6);
    \u0275\u0275listener("onClick", function TeamComponent_Template_fxch_button_onClick_9_listener() {
      return ctx.showNext();
    });
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7, 8)(13, "div", 9);
    \u0275\u0275listener("onInitialized", function TeamComponent_Template_div_onInitialized_13_listener($event) {
      return ctx.onScrollableInitialized($event);
    });
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275template(15, TeamComponent_div_15_Template, 3, 1, "div", 11);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "TEAM.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("appearanceType", "flat")("iconName", "arrow-alt-left")("disabled", !ctx.isPreviousAvailable())("buttonTitle", \u0275\u0275pipeBind1(8, 17, "TEAM.PREV"));
    \u0275\u0275advance(2);
    \u0275\u0275property("appearanceType", "flat")("iconName", "arrow-alt-right")("disabled", !ctx.isNextAvailable())("buttonTitle", \u0275\u0275pipeBind1(10, 19, "TEAM.NEXT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("vertical", false)("horizontal", true)("scrollItemsGap", ctx.columnGap);
    \u0275\u0275advance(1);
    \u0275\u0275styleProp("column-gap", ctx.columnGap + "px");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx.teamMembers);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  TranslateModule,
  TranslatePipe,
  FxchScrollableTargetDirective,
  FxchScrollableContainerDirective,
  FxchScrollableHorizontalItemDirective,
  FxchScrollableDirective,
  FxchButtonComponent,
  TeamCardComponent
], styles: ["\n\n.fxch-team[_ngcontent-%COMP%] {\n  max-width: var(--width);\n  margin: 0 auto;\n}\n.fxch-team-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 40px;\n  align-items: start;\n  padding: 120px var(--padding-inline) 100px;\n}\n.fxch-team-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  column-gap: 20px;\n  align-items: center;\n}\n.fxch-team-header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n}\n.fxch-team-header-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 12px;\n  align-items: center;\n}\n.fxch-team-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: minmax(0, 1fr);\n  column-gap: 20px;\n  align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiLCAic3JjL2FwcC9jb21tb24vbWl4aW4vdHlwb2dyYXBoeS5taXhpbi5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJAaW1wb3J0IFwiLi4vY29tbW9uL21peGluL21peGlucy5taXhpbi5zY3NzXCI7XHJcblxyXG4uZnhjaC10ZWFtIHtcclxuICAgIG1heC13aWR0aDogdmFyKC0td2lkdGgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgcm93LWdhcDogNDBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTIwcHggdmFyKC0tcGFkZGluZy1pbmxpbmUpIDEwMHB4O1xyXG4gICAgfVxyXG4gICAgJi1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBhdXRvO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LWxnXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWFjdGlvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDEycHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgwLCAxZnIpO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbn0iLCAiQG1peGluIGZvbnQtc3R5bGVzKCR0eXBvZ3JhcGh5KSB7XHJcbiAgICBAaWYgKCR0eXBvZ3JhcGh5ID09ICdoMScpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjc5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnaDInKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDEzOXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gzJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA5NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwtbWQnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDY4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwtc20nKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC14cycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbCcpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhsJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LWxnJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQtc20nKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQteHMnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsQ0FBQTtBQUNJLGFBQUEsSUFBQTtBQUNBLFVBQUEsRUFBQTs7QUFDQSxDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBO0FBQ0EsV0FBQTtBQUNBLGVBQUE7QUFDQSxXQUFBLE1BQUEsSUFBQSxrQkFBQTs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBLE9BQUEsQ0FBQSxFQUFBLEtBQUE7QUFDQSxjQUFBO0FBQ0EsZUFBQTs7QUFDQSxDQUFBO0FDZ0NBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTs7QUQvQkEsQ0FBQTtBQUNJLFdBQUE7QUFDQSx5QkFBQSxPQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsRUFBQTtBQUNBLGNBQUE7QUFDQSxlQUFBOztBQUdSLENBQUE7QUFDSSxXQUFBO0FBQ0Esa0JBQUE7QUFDQSxzQkFBQSxPQUFBLENBQUEsRUFBQTtBQUNBLGNBQUE7QUFDQSxlQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */"], changeDetection: 0 });
var TeamComponent = _TeamComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamComponent, { className: "TeamComponent", filePath: "src\\app\\team\\team.component.ts", lineNumber: 34 });
})();

// src/app/news-card/news-card.component.ts
function NewsCardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx_r0.newsTitle, " ");
  }
}
function NewsCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate(ctx_r1.text);
  }
}
var _c04 = ["*"];
var _NewsCardComponent = class _NewsCardComponent {
  constructor() {
    this.newsTitle = "";
    this.text = "";
    this.type = "first";
  }
  get aboutCardTypeClass() {
    return `fxch-news-card--${this.type}`;
  }
};
_NewsCardComponent.\u0275fac = function NewsCardComponent_Factory(t) {
  return new (t || _NewsCardComponent)();
};
_NewsCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsCardComponent, selectors: [["news-card"]], inputs: { newsTitle: "newsTitle", text: "text", type: "type" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c04, decls: 12, vars: 6, consts: [["href", "#1", "target", "_blank", "rel", "nofollow", 1, "fxch-news-card"], [1, "fxch-news-card-block"], [1, "fxch-news-card-inner"], [1, "fxch-news-card-body"], ["class", "fxch-news-card-body-title", 4, "ngIf"], ["class", "fxch-news-card-body-text", 4, "ngIf"], [1, "fxch-news-card-icon-wrap"], [1, "fxch-news-card-icon-block"], [1, "fxch-news-card-icon-inner"], [1, "fxch-news-card-icon", 3, "iconName"], [1, "fxch-news-card-body-title"], [1, "fxch-news-card-body-text"]], template: function NewsCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "a", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275projection(4);
    \u0275\u0275template(5, NewsCardComponent_div_5_Template, 2, 1, "div", 4)(6, NewsCardComponent_div_6_Template, 2, 1, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
    \u0275\u0275element(10, "fxch-icon", 9)(11, "fxch-icon", 9);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.aboutCardTypeClass);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !!ctx.newsTitle && ctx.newsTitle !== "");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", !!ctx.text && ctx.text !== "");
    \u0275\u0275advance(4);
    \u0275\u0275property("iconName", "arrow-alt-right");
    \u0275\u0275advance(1);
    \u0275\u0275property("iconName", "arrow-alt-right");
  }
}, dependencies: [
  TranslateModule,
  CommonModule,
  NgIf,
  FxchIconComponent
], styles: ['\n\n.fxch-news-card[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  outline: none;\n  height: 100%;\n  min-height: 630px;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1), box-shadow 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: background-color, box-shadow;\n}\n@media screen and (max-width: 960px) {\n  .fxch-news-card[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}\n.fxch-news-card[_ngcontent-%COMP%]:hover   .fxch-news-card-icon-inner[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.fxch-news-card--first[_ngcontent-%COMP%]:hover   .fxch-news-card-block[_ngcontent-%COMP%]:after {\n  left: -30px;\n  bottom: 62px;\n  width: 680px;\n  height: 233px;\n  border-radius: 679.933px;\n  transform: rotate(39.006deg);\n}\n.fxch-news-card--first[_ngcontent-%COMP%]   .fxch-news-card-block[_ngcontent-%COMP%]:after {\n  left: -233px;\n  bottom: -96px;\n  width: 571px;\n  height: 196px;\n  border-radius: 571px;\n  filter: blur(172px);\n  transform: rotate(-62.772deg);\n  transition:\n    left 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    bottom 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    width 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    height 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    border-radius 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    transform 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    left,\n    bottom,\n    width,\n    height,\n    border-radius,\n    transform,\n    background-color;\n}\n.fxch-news-card--second[_ngcontent-%COMP%]:hover   .fxch-news-card-block[_ngcontent-%COMP%]:after {\n  left: 203px;\n  top: -100 px;\n  width: 558.709px;\n  height: 400.417px;\n  border-radius: 559px;\n  filter: blur(202px);\n  transform: rotate(29.1deg);\n}\n.fxch-news-card--second[_ngcontent-%COMP%]   .fxch-news-card-block[_ngcontent-%COMP%]:after {\n  left: -316px;\n  top: -155px;\n  width: 489px;\n  height: 350px;\n  border-radius: 489px;\n  filter: blur(192px);\n  transform: rotate(-42.654deg);\n  transition:\n    left 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    top 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    width 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    height 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    border-radius 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    filter 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    transform 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    left,\n    top,\n    width,\n    height,\n    border-radius,\n    filter,\n    transform,\n    background-color;\n}\n.fxch-news-card--third[_ngcontent-%COMP%] {\n  min-height: 412px;\n}\n@media screen and (max-width: 960px) {\n  .fxch-news-card--third[_ngcontent-%COMP%] {\n    min-height: 400px;\n  }\n}\n.fxch-news-card--third[_ngcontent-%COMP%]:hover   .fxch-news-card-block[_ngcontent-%COMP%]:after {\n  left: 162px;\n  top: 230px;\n  width: 732.883px;\n  height: 374.291px;\n  border-radius: 733px;\n  transform: rotate(14.542deg);\n}\n.fxch-news-card--third[_ngcontent-%COMP%]   .fxch-news-card-block[_ngcontent-%COMP%]:after {\n  left: 90%;\n  top: -356px;\n  width: 505px;\n  height: 258px;\n  border-radius: 505px;\n  filter: blur(212px);\n  transform: rotate(-60.238deg);\n  transition:\n    left 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    top 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    width 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    height 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    border-radius 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    transform 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    left,\n    top,\n    width,\n    height,\n    border-radius,\n    transform,\n    background-color;\n}\n.fxch-news-card-block[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 43px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 12px;\n  height: 100%;\n}\n@media screen and (max-width: 960px) {\n  .fxch-news-card-block[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .fxch-news-card-block[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n}\n.fxch-news-card-block[_ngcontent-%COMP%]:after {\n  position: absolute;\n  display: block;\n  content: "";\n  z-index: 2;\n}\n.fxch-news-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 30px;\n  align-items: start;\n  align-content: space-between;\n  height: 100%;\n  z-index: 5;\n}\n.fxch-news-card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 24px;\n  align-items: start;\n}\n.fxch-news-card-body-title[_ngcontent-%COMP%] {\n  font-family: var(--font-titles);\n  font-size: 68px;\n  line-height: 1;\n  font-weight: 500;\n}\n@media screen and (max-width: 960px) {\n  .fxch-news-card-body-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 48px;\n    line-height: 1;\n    font-weight: 500;\n  }\n}\n.fxch-news-card-body-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 400;\n}\n.fxch-news-card-icon[_ngcontent-%COMP%] {\n  display: block;\n}\n.fxch-news-card-icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.fxch-news-card-icon-block[_ngcontent-%COMP%] {\n  font-size: 60px;\n  width: 1em;\n  height: 1em;\n  overflow: hidden;\n}\n.fxch-news-card-icon-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1em);\n  align-items: center;\n  transform: translateX(-1em);\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: transform;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9uZXdzLWNhcmQvbmV3cy1jYXJkLmNvbXBvbmVudC5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL2JyZWFrcG9pbnQubWl4aW4uc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi90eXBvZ3JhcGh5Lm1peGluLnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLW5ld3MtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgIGJveC1zaGFkb3cgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5meGNoLW5ld3MtY2FyZC1pY29uIHtcclxuICAgICAgICAgICAgJi1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLS1maXJzdCB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC5meGNoLW5ld3MtY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDYycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjMzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNjc5LjkzM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM5LjAwNmRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZ4Y2gtbmV3cy1jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjMzcHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC05NnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU3MXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOTZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDU3MXB4O1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDE3MnB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC02Mi43NzJkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0IC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQsIGJvcmRlci1yYWRpdXMsIHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtLXNlY29uZCB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC5meGNoLW5ld3MtY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMDNweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMDAgcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU1OC43MDlweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMC40MTdweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1NTlweDtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMjAycHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI5LjFkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5meGNoLW5ld3MtY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTMxNnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTU1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDg5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDg5cHg7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTkycHgpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQyLjY1NGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGJvcmRlci1yYWRpdXMsIGZpbHRlciwgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0tdGhpcmQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQxMnB4O1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLmZ4Y2gtbmV3cy1jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE2MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDczMi44ODNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3NC4yOTFweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3MzNweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNC41NDJkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5meGNoLW5ld3MtY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogOTAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMzU2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1OHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTA1cHg7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMjEycHgpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTYwLjIzOGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgYm9yZGVyLXJhZGl1cywgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDQzcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwieHNcIikge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIHJvdy1nYXA6IDMwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICB9XHJcbiAgICAmLWJvZHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIHJvdy1nYXA6IDI0cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcImxhYmVsLW1kXCIpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJsYWJlbC14c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRleHQge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQtc21cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAmLXdyYXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJsb2NrIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbm5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFlbSk7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMWVtKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwgIkBtaXhpbiBmb250LXN0eWxlcygkdHlwb2dyYXBoeSkge1xyXG4gICAgQGlmICgkdHlwb2dyYXBoeSA9PSAnaDEnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDI3OXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gyJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLW1kJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXNtJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwteHMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14bCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1sZycpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXNtJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhzJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxXQUFBO0FBQ0EsVUFBQTtBQUNBLGNBQUE7QUFDQSxpQkFBQTtBQUNBLFlBQUE7QUFDQSxjQUNJLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBLEVBQUEsV0FBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFFSixlQUFBLGdCQUFBLEVBQUE7O0FDR0ksT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURkUixHQUFBO0FBYVEsZ0JBQUE7OztBQUlJLENBakJaLGNBaUJZLE9BQUEsQ0FBQTtBQUNJLGFBQUEsV0FBQTs7QUFPQSxDQUFBLHFCQUFBLE9BQUEsQ0FBQSxvQkFBQTtBQUNJLFFBQUE7QUFDQSxVQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxpQkFBQTtBQUNBLGFBQUEsT0FBQTs7QUFLUixDQVhJLHNCQVdKLENBWEksb0JBV0o7QUFDSSxRQUFBO0FBQ0EsVUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsaUJBQUE7QUFDQSxVQUFBLEtBQUE7QUFDQSxhQUFBLE9BQUE7QUFDQTtJQUNJLEtBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxPQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsTUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLE9BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxjQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsVUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQU9KO0lBQUEsSUFBQTtJQUFBLE1BQUE7SUFBQSxLQUFBO0lBQUEsTUFBQTtJQUFBLGFBQUE7SUFBQSxTQUFBO0lBQUE7O0FBT0EsQ0FBQSxzQkFBQSxPQUFBLENBbENBLG9CQWtDQTtBQUNJLFFBQUE7QUFDQSxPQUFBLEtBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQSxLQUFBO0FBQ0EsYUFBQSxPQUFBOztBQUtSLENBWkksdUJBWUosQ0E5Q0ksb0JBOENKO0FBQ0ksUUFBQTtBQUNBLE9BQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQSxLQUFBO0FBQ0EsYUFBQSxPQUFBO0FBQ0E7SUFDSSxLQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsSUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxPQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsY0FBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLE9BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxVQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsaUJBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBUUo7SUFBQSxJQUFBO0lBQUEsR0FBQTtJQUFBLEtBQUE7SUFBQSxNQUFBO0lBQUEsYUFBQTtJQUFBLE1BQUE7SUFBQSxTQUFBO0lBQUE7O0FBSVosQ0FBQTtBQUNJLGNBQUE7O0FDL0VBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEOEVKLEdBQUE7QUFHUSxnQkFBQTs7O0FBSUksQ0FQWixxQkFPWSxPQUFBLENBMUVBLG9CQTBFQTtBQUNJLFFBQUE7QUFDQSxPQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxpQkFBQTtBQUNBLGFBQUEsT0FBQTs7QUFLUixDQWxCUixzQkFrQlEsQ0FyRkksb0JBcUZKO0FBQ0ksUUFBQTtBQUNBLE9BQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQSxLQUFBO0FBQ0EsYUFBQSxPQUFBO0FBQ0E7SUFDSSxLQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsSUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxPQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsY0FBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLFVBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxpQkFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFPSjtJQUFBLElBQUE7SUFBQSxHQUFBO0lBQUEsS0FBQTtJQUFBLE1BQUE7SUFBQSxhQUFBO0lBQUEsU0FBQTtJQUFBOztBQUlaLENBekdZO0FBMEdSLFlBQUE7QUFDQSxXQUFBO0FBQ0EsZ0JBQUE7QUFDQSxnQkFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQTs7QUMxSEEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURvSEosR0F6R1k7QUFpSEosYUFBQTs7O0FDNUhKLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEb0hKLEdBekdZO0FBb0hKLGFBQUE7OztBQUVKLENBdEhRLG9CQXNIUjtBQUNJLFlBQUE7QUFDQSxXQUFBO0FBQ0EsV0FBQTtBQUNBLFdBQUE7O0FBR1IsQ0FBQTtBQUNJLFlBQUE7QUFDQSxXQUFBO0FBQ0EseUJBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQTtBQUNBLFdBQUE7O0FBRUosQ0FBQTtBQUNJLFdBQUE7QUFDQSx5QkFBQTtBQUNBLFdBQUE7QUFDQSxlQUFBOztBQUNBLENBQUE7QUVuSkEsZUFBQSxJQUFBO0FBQ0EsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOztBRFBBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEdUpBLEdBQUE7QUV2SUEsaUJBQUEsSUFBQTtBQUNBLGVBQUE7QUFDQSxpQkFBQTtBQUNBLGlCQUFBOzs7QUYwSUEsQ0FBQTtBRXZIQSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7O0FGeUhKLENBQUE7QUFDSSxXQUFBOztBQUNBLENBQUE7QUFDSSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBOztBQUVKLENBQUE7QUFDSSxhQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxZQUFBOztBQUVKLENBM0tJO0FBNEtBLFdBQUE7QUFDQSx5QkFBQSxPQUFBLENBQUEsRUFBQTtBQUNBLGVBQUE7QUFDQSxhQUFBLFdBQUE7QUFDQSxjQUFBLFVBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7IiwKICAibmFtZXMiOiBbXQp9Cg== */'], changeDetection: 0 });
var NewsCardComponent = _NewsCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsCardComponent, { className: "NewsCardComponent", filePath: "src\\app\\news-card\\news-card.component.ts", lineNumber: 19 });
})();

// src/app/news/news.component.ts
var _NewsComponent = class _NewsComponent {
};
_NewsComponent.\u0275fac = function NewsComponent_Factory(t) {
  return new (t || _NewsComponent)();
};
_NewsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsComponent, selectors: [["news"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 35, consts: [[1, "fxch-news"], [1, "fxch-news-content"], [1, "fxch-news-item", 3, "newsTitle", "text"], [1, "fxch-news-chips"], [1, "fxch-news-chips-item"], [1, "fxch-news-item", 3, "newsTitle", "text", "type"], [1, "fxch-news-item", 3, "newsTitle", "type"]], template: function NewsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "news-card", 2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 4);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "news-card", 5);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "div", 3)(16, "div", 4);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 4);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "news-card", 6);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "div", 3)(25, "div", 4);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 4);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("newsTitle", \u0275\u0275pipeBind1(3, 13, "NEWS.POST_1.TITLE"))("text", \u0275\u0275pipeBind1(4, 15, "NEWS.POST_1.TEXT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 17, "NEWS.TAGS.NEWS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" 5 ", \u0275\u0275pipeBind1(11, 19, "NEWS.TAGS.MIN_READ"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("newsTitle", \u0275\u0275pipeBind1(13, 21, "NEWS.POST_2.TITLE"))("text", \u0275\u0275pipeBind1(14, 23, "NEWS.POST_2.TEXT"))("type", "second");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 25, "NEWS.TAGS.VIDEO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" 2 ", \u0275\u0275pipeBind1(21, 27, "NEWS.TAGS.MIN_WATCH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("newsTitle", \u0275\u0275pipeBind1(23, 29, "NEWS.POST_3.TITLE"))("type", "third");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 31, "NEWS.TAGS.ARTICLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" 4 ", \u0275\u0275pipeBind1(30, 33, "NEWS.TAGS.MIN_READ"), " ");
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  CommonModule,
  NewsCardComponent
], styles: ["\n\n.fxch-news[_ngcontent-%COMP%] {\n  max-width: var(--width);\n  margin: 0 auto;\n}\n.fxch-news-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 20px;\n  row-gap: 20px;\n  align-items: stretch;\n  padding: 120px var(--padding-inline) 140px;\n}\n@media screen and (max-width: 960px) {\n  .fxch-news-content[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n.fxch-news-item[_ngcontent-%COMP%]:nth-of-type(3) {\n  grid-area: 2/1/3/3;\n}\n@media screen and (max-width: 960px) {\n  .fxch-news-item[_ngcontent-%COMP%]:nth-of-type(3) {\n    grid-area: auto;\n  }\n}\n.fxch-news-chips[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  column-gap: 8px;\n  row-gap: 8px;\n  flex-wrap: wrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.fxch-news-chips-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCAic3JjL2FwcC9jb21tb24vbWl4aW4vYnJlYWtwb2ludC5taXhpbi5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJAaW1wb3J0IFwiLi4vY29tbW9uL21peGluL21peGlucy5taXhpbi5zY3NzXCI7XHJcblxyXG4uZnhjaC1uZXdzIHtcclxuICAgIG1heC13aWR0aDogdmFyKC0td2lkdGgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgcm93LWdhcDogMjBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBwYWRkaW5nOiAxMjBweCB2YXIoLS1wYWRkaW5nLWlubGluZSkgMTQwcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMi8xLzMvMztcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtY2hpcHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDhweDtcclxuICAgICAgICByb3ctZ2FwOiA4cHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lOyBcclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxhQUFBLElBQUE7QUFDQSxVQUFBLEVBQUE7O0FBQ0EsQ0FBQTtBQUNJLFdBQUE7QUFDQSx5QkFBQSxPQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsRUFBQTtBQUNBLGNBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLFdBQUEsTUFBQSxJQUFBLGtCQUFBOztBQ0tBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEWEosR0FBQTtBQVFRLDJCQUFBOzs7QUFJSixDQUFBLGNBQUE7QUFDSSxhQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBOztBQ0ZKLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEQ0EsR0FBQSxjQUFBO0FBR1EsZUFBQTs7O0FBSVosQ0FBQTtBQUNJLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGVBQUE7QUFDQSxjQUFBO0FBQ0EsV0FBQTtBQUNBLGFBQUE7QUFDQSx1QkFBQTtBQUFBLGVBQUE7O0FBQ0EsQ0FBQTtBQUNJLFdBQUEsSUFBQTtBQUNBLGlCQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */"], changeDetection: 0 });
var NewsComponent = _NewsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsComponent, { className: "NewsComponent", filePath: "src\\app\\news\\news.component.ts", lineNumber: 19 });
})();

// src/app/technology/technology.component.ts
var _TechnologyComponent = class _TechnologyComponent {
  constructor(elementRef, fxchScrollingService, changeDetectorRef, contactModalService) {
    this.elementRef = elementRef;
    this.fxchScrollingService = fxchScrollingService;
    this.changeDetectorRef = changeDetectorRef;
    this.contactModalService = contactModalService;
    this.isEndSection = false;
    this.unsubscribe$ = new Subject();
  }
  ngOnInit() {
    this.fxchScrollingService.scroll$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.detectSection());
  }
  ngAfterViewInit() {
    this.detectSection();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  onResize() {
    this.detectSection();
  }
  openContacts() {
    this.contactModalService.openContacts();
  }
  detectSection() {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.isEndSection = rect.top <= -(rect.height / 3.5);
    this.changeDetectorRef.detectChanges();
  }
};
_TechnologyComponent.\u0275fac = function TechnologyComponent_Factory(t) {
  return new (t || _TechnologyComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FxchScrollingService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ContactModalService));
};
_TechnologyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TechnologyComponent, selectors: [["technology"]], hostBindings: function TechnologyComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function TechnologyComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, false, \u0275\u0275resolveWindow);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 25, consts: [[1, "fxch-technology-wrap"], [1, "fxch-technology"], [1, "fxch-technology-content"], [1, "fxch-technology-section", "fxch-technology-first"], [1, "fxch-technology-panel"], [1, "fxch-technology-title"], [1, "fxch-technology-subtitle"], [1, "fxch-technology-text"], [1, "fxch-technology-section", "fxch-technology-second"], [1, "fxch-technology-action", 3, "appearanceType", "color", "text", "onClick"]], template: function TechnologyComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 4)(16, "div", 5);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 6);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 7);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "fxch-button", 9);
    \u0275\u0275listener("onClick", function TechnologyComponent_Template_fxch_button_onClick_25_listener() {
      return ctx.openContacts();
    });
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("fxch-technology-wrap--end", ctx.isEndSection);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, "TECHNOLOGY.START_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 13, "TECHNOLOGY.START_SUBTITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "TECHNOLOGY.START_TEXT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 17, "TECHNOLOGY.END_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 19, "TECHNOLOGY.END_SUBTITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 21, "TECHNOLOGY.END_TEXT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("appearanceType", "flat")("color", "accent")("text", \u0275\u0275pipeBind1(26, 23, "TECHNOLOGY.GET_IN_TOUCH"));
  }
}, dependencies: [
  CommonModule,
  TranslateModule,
  TranslatePipe,
  FxchButtonComponent
], styles: ['\n\n.fxch-technology[_ngcontent-%COMP%] {\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  padding: 12vh 0;\n  height: var(--vh);\n  width: 100%;\n  overflow: hidden;\n}\n.fxch-technology-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 0 10px;\n  height: calc(2.5 * var(--vh));\n  transition: background-color 0.8s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: background-color;\n}\n.fxch-technology-wrap--end[_ngcontent-%COMP%]   .fxch-technology-first[_ngcontent-%COMP%] {\n  transform: scale(0.9, 0.9);\n  opacity: 0;\n}\n.fxch-technology-wrap--end[_ngcontent-%COMP%]   .fxch-technology-second[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.fxch-technology-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 1064px;\n  height: 100%;\n  max-height: 721px;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-technology-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.fxch-technology-section[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  row-gap: 8px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n}\n.fxch-technology-first[_ngcontent-%COMP%] {\n  transform: scale(1, 1);\n  opacity: 1;\n  transition: transform 0.8s cubic-bezier(0.35, 0, 0.25, 1), opacity 0.4s linear 0.3s;\n  will-change: transform, opacity;\n}\n.fxch-technology-second[_ngcontent-%COMP%] {\n  z-index: 10;\n  transform-origin: 50% 50%;\n  transform: translateY(100vh);\n  transition: transform 0.8s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: transform;\n}\n.fxch-technology-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  grid-template-areas: "title title" "subtitle text";\n  row-gap: 20px;\n  column-gap: 140px;\n  align-content: space-between;\n  border-radius: 12px;\n  padding: 40px;\n  height: calc(100% - 76px);\n}\n@media screen and (max-width: 1270px) {\n  .fxch-technology-panel[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .fxch-technology-panel[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    grid-template-areas: "title" "subtitle" "text";\n    padding: 30px;\n  }\n}\n.fxch-technology-title[_ngcontent-%COMP%] {\n  grid-area: title;\n  font-family: var(--font-titles);\n  font-size: 96px;\n  line-height: 1.2;\n  font-weight: 500;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-technology-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 68px;\n    line-height: 1;\n    font-weight: 500;\n  }\n}\n@media screen and (max-width: 960px) {\n  .fxch-technology-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 48px;\n    line-height: 1;\n    font-weight: 500;\n  }\n}\n@media screen and (max-width: 600px) {\n  .fxch-technology-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 32px;\n    line-height: 1;\n    font-weight: 500;\n  }\n}\n.fxch-technology-subtitle[_ngcontent-%COMP%] {\n  grid-area: subtitle;\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 400;\n  font-size: 22px;\n  line-height: 1.4;\n}\n@media screen and (max-width: 600px) {\n  .fxch-technology-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n  }\n}\n.fxch-technology-text[_ngcontent-%COMP%] {\n  grid-area: text;\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 400;\n  font-size: 22px;\n  line-height: 1.4;\n}\n@media screen and (max-width: 600px) {\n  .fxch-technology-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiLCAic3JjL2FwcC9jb21tb24vbWl4aW4vYnJlYWtwb2ludC5taXhpbi5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL3R5cG9ncmFwaHkubWl4aW4uc2NzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9taXhpbi9taXhpbnMubWl4aW4uc2Nzc1wiO1xyXG5cclxuLmZ4Y2gtdGVjaG5vbG9neSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDEydmggMDtcclxuICAgIGhlaWdodDogdmFyKC0tdmgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMi41ICogdmFyKC0tdmgpKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC44cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICYtLWVuZCB7XHJcbiAgICAgICAgICAgIC5meGNoLXRlY2hub2xvZ3kge1xyXG4gICAgICAgICAgICAgICAgJi1maXJzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSwgLjkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXNlY29uZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwNjRweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzIxcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcImxnXCIpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1zZWN0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgIHJvdy1nYXA6IDhweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgIH1cclxuICAgICYtZmlyc3Qge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgdHJhbnNmb3JtIC44cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICBvcGFjaXR5IC40cyBsaW5lYXIgLjNzO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICB9XHJcbiAgICAmLXNlY29uZCB7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgfVxyXG4gICAgJi1wYW5lbCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWlubWF4KDAsIDFmcik7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgXCJ0aXRsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgIFwic3VidGl0bGUgdGV4dFwiO1xyXG4gICAgICAgIHJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMTQwcHg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4OyBcclxuICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzZweCk7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcImxnXCIpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwic21cIikge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcImgzXCIpO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWwtbWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWwteHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJ4c1wiKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1zdWJ0aXRsZSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBzdWJ0aXRsZTtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQteGxcIik7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcInhzXCIpIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXNtXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtdGV4dCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiB0ZXh0O1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC14bFwiKTtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwieHNcIikge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQtc21cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwgIiRicmVha3BvaW50czogKFxyXG4gICAgeHMtaDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NzBweClcIixcclxuICAgIHNtLWg6IFwic2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpXCIsXHJcbiAgICB4czogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiLFxyXG4gICAgc206IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgIG1kOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpXCIsXHJcbiAgICBsZzogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzBweClcIixcclxuICAgIHhsOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1MHB4KVwiXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludCgkYnJlYWtwb2ludE5hbWUpIHtcclxuICAgICRtZWRpYVF1ZXJ5OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnROYW1lKTtcclxuXHJcbiAgICBAaWYgKCRtZWRpYVF1ZXJ5ID09IG51bGwpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYVF1ZXJ5fSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsICJAbWl4aW4gZm9udC1zdHlsZXMoJHR5cG9ncmFwaHkpIHtcclxuICAgIEBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gxJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMicpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTM5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnaDMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC1tZCcpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC1zbScpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXhzJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQteGwnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQtbGcnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1zbScpIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14cycpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxDQUFBO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGVBQUE7QUFDQSxPQUFBO0FBQ0EsV0FBQSxLQUFBO0FBQ0EsVUFBQSxJQUFBO0FBQ0EsU0FBQTtBQUNBLFlBQUE7O0FBQ0EsQ0FBQTtBQUNJLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGVBQUE7QUFDQSxXQUFBLEVBQUE7QUFDQSxVQUFBLEtBQUEsSUFBQSxFQUFBLElBQUE7QUFDQSxjQUFBLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBLGVBQUE7O0FBR1EsQ0FBQSwwQkFBQSxDQUFBO0FBQ0ksYUFBQSxNQUFBLEdBQUEsRUFBQTtBQUNBLFdBQUE7O0FBRUosQ0FKQSwwQkFJQSxDQUFBO0FBQ0ksYUFBQSxXQUFBOztBQUtoQixDQUFBO0FBQ0ksWUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsY0FBQTs7QUNwQkEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURnQkosR0FBQTtBQU1RLFdBQUE7OztBQUdSLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLGtCQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsV0FBQTtBQUNBLE9BQUE7QUFDQSxRQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxXQUFBOztBQUVKLENBaENZO0FBaUNSLGFBQUEsTUFBQSxDQUFBLEVBQUE7QUFDQSxXQUFBO0FBQ0EsY0FDSSxVQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBLEVBQUEsUUFBQSxLQUFBLE9BQUE7QUFFSixlQUFBLFNBQUEsRUFBQTs7QUFFSixDQXBDWTtBQXFDUixXQUFBO0FBQ0Esb0JBQUEsSUFBQTtBQUNBLGFBQUEsV0FBQTtBQUNBLGNBQUEsVUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQSxlQUFBOztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EseUJBQUEsS0FBQSxPQUFBLENBQUEsRUFBQTtBQUNBLHVCQUNJLGNBQUE7QUFFSixXQUFBO0FBQ0EsY0FBQTtBQUNBLGlCQUFBO0FBQ0EsaUJBQUE7QUFDQSxXQUFBO0FBQ0EsVUFBQSxLQUFBLEtBQUEsRUFBQTs7QUNoRUEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURxREosR0FBQTtBQWFRLFlBQUE7OztBQ2xFSixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRHFESixHQUFBO0FBZ0JRLDJCQUFBO0FBQ0EseUJBQ0ksUUFBQSxXQUFBO0FBR0osYUFBQTs7O0FBR1IsQ0FBQTtBQUNJLGFBQUE7QUVoRkEsZUFBQSxJQUFBO0FBQ0EsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOztBRERBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FENkVKLEdBQUE7QUV6RUksaUJBQUEsSUFBQTtBQUNBLGVBQUE7QUFDQSxpQkFBQTtBQUNBLGlCQUFBOzs7QURQQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRDZFSixHQUFBO0FFN0RJLGlCQUFBLElBQUE7QUFDQSxlQUFBO0FBQ0EsaUJBQUE7QUFDQSxpQkFBQTs7O0FEbkJBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FENkVKLEdBQUE7QUV2REksaUJBQUEsSUFBQTtBQUNBLGVBQUE7QUFDQSxpQkFBQTtBQUNBLGlCQUFBOzs7QUZpRUosQ0FBQTtBQUNJLGFBQUE7QUUvREEsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FGK0RBLGFBQUE7QUFDQSxlQUFBOztBQzlGQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRDBGSixHQUFBO0FFcERJLGVBQUE7QUFDQSxpQkFBQTtBQUNBLGlCQUFBOzs7QUYyREosQ0FBQTtBQUNJLGFBQUE7QUV4RUEsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FGd0VBLGFBQUE7QUFDQSxlQUFBOztBQ3ZHQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRG1HSixHQUFBO0FFN0RJLGVBQUE7QUFDQSxpQkFBQTtBQUNBLGlCQUFBOzs7IiwKICAibmFtZXMiOiBbXQp9Cg== */'], changeDetection: 0 });
var TechnologyComponent = _TechnologyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TechnologyComponent, { className: "TechnologyComponent", filePath: "src\\app\\technology\\technology.component.ts", lineNumber: 21 });
})();

// src/app/horizontal-text/horizontal-text.component.ts
var _c05 = ["textBlock"];
function HorizontalTextComponent_ng_container_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
}
function HorizontalTextComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const character_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", character_r2, " ");
  }
}
function HorizontalTextComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HorizontalTextComponent_ng_container_5_span_1_Template, 1, 0, "span", 6)(2, HorizontalTextComponent_ng_container_5_ng_template_2_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const character_r2 = ctx.$implicit;
    const _r5 = \u0275\u0275reference(3);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", character_r2 === " ")("ngIfElse", _r5);
  }
}
var _HorizontalTextComponent = class _HorizontalTextComponent {
  constructor(elementRef, fxchScrollPositionService, changeDetectorRef) {
    this.elementRef = elementRef;
    this.fxchScrollPositionService = fxchScrollPositionService;
    this.changeDetectorRef = changeDetectorRef;
    this.textBlockElement = null;
    this.transformWidth = 0;
    this.unsubscribe$ = new Subject();
  }
  ngOnInit() {
    this.fxchScrollPositionService.scroll$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.calculateTransform());
  }
  ngAfterViewInit() {
    this.calculateTransform();
  }
  onResize() {
    this.calculateTransform();
  }
  calculateTransform() {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    if (this.textBlockElement == null || rect.top > -200 || rect.bottom < window.innerHeight + 200) {
      return;
    }
    const relationAdjustment = FxchIsMobileService.any() ? 300 : 450;
    const relation = (this.textBlockElement.nativeElement.offsetWidth - window.innerWidth + relationAdjustment) / (rect.height - window.innerHeight);
    this.transformWidth = (rect.top + 200) * relation;
    this.changeDetectorRef.detectChanges();
  }
};
_HorizontalTextComponent.\u0275fac = function HorizontalTextComponent_Factory(t) {
  return new (t || _HorizontalTextComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FxchScrollingService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_HorizontalTextComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HorizontalTextComponent, selectors: [["horizontal-text"]], viewQuery: function HorizontalTextComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textBlockElement = _t.first);
  }
}, hostBindings: function HorizontalTextComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function HorizontalTextComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, false, \u0275\u0275resolveWindow);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 5, consts: [[1, "fxch-horizontal-text-wrap"], [1, "fxch-horizontal-text-block"], [1, "fxch-horizontal-text-content"], ["textBlock", ""], [1, "fxch-horizontal-text"], [4, "ngFor", "ngForOf"], ["class", "fxch-horizontal-text-character fxch-horizontal-text-character--space", "style", "transform: translate3d(0, 6vh, 0);opacity: .4;", 4, "ngIf", "ngIfElse"], ["notSpace", ""], [1, "fxch-horizontal-text-character", "fxch-horizontal-text-character--space", 2, "transform", "translate3d(0, 6vh, 0)", "opacity", ".4"], [1, "fxch-horizontal-text-character", "fxch-horizontal-text-character--letter", 2, "transform", "translate3d(0, 6vh, 0)", "opacity", ".4"]], template: function HorizontalTextComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2, 3)(4, "div", 4);
    \u0275\u0275template(5, HorizontalTextComponent_ng_container_5_Template, 4, 2, "ng-container", 5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("transform: translate3d(" + ctx.transformWidth + "px, 0, 0);");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 3, "HORIZONTAL_TEXT").split(""));
  }
}, dependencies: [CommonModule, NgForOf, NgIf, TranslateModule, TranslatePipe], styles: ["\n\n.fxch-horizontal-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-family: var(--font-titles);\n  font-size: 279px;\n  line-height: 1;\n  font-weight: 500;\n  font-size: 20vmin;\n  text-transform: uppercase;\n  white-space: nowrap;\n  will-change: transform;\n}\n.fxch-horizontal-text-block[_ngcontent-%COMP%] {\n  position: sticky;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  top: 0;\n  padding: 12vh 0;\n  height: var(--vh);\n  width: 100%;\n  overflow: hidden;\n}\n.fxch-horizontal-text-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 0 10px;\n  height: calc(4 * var(--vh) + 600px);\n}\n.fxch-horizontal-text-content[_ngcontent-%COMP%] {\n  padding: 0 var(--padding-inline);\n}\n.fxch-horizontal-text-character[_ngcontent-%COMP%] {\n  display: block;\n  will-change: opacity, transform;\n}\n.fxch-horizontal-text-character--space[_ngcontent-%COMP%] {\n  width: 0.4em;\n  height: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9ob3Jpem9udGFsLXRleHQvaG9yaXpvbnRhbC10ZXh0LmNvbXBvbmVudC5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL3R5cG9ncmFwaHkubWl4aW4uc2NzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9taXhpbi9taXhpbnMubWl4aW4uc2Nzc1wiO1xyXG5cclxuLmZ4Y2gtaG9yaXpvbnRhbC10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJoMVwiKTtcclxuICAgIGZvbnQtc2l6ZTogMjB2bWluO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGxpbmVhcjtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAmLWJsb2NrIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEydmggMDtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXZoKTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJi13cmFwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoNCAqIHZhcigtLXZoKSArIDYwMHB4KTtcclxuICAgIH1cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLWlubGluZSk7XHJcbiAgICB9XHJcbiAgICAmLWNoYXJhY3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjpcclxuICAgICAgICAvLyAgICAgb3BhY2l0eSAuMXMgbGluZWFyLFxyXG4gICAgICAgIC8vICAgICB0cmFuc2Zvcm0gLjJzIGxpbmVhcjtcclxuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xyXG4gICAgICAgICYtLXNwYWNlIHtcclxuICAgICAgICAgICAgd2lkdGg6IC40ZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsICJAbWl4aW4gZm9udC1zdHlsZXMoJHR5cG9ncmFwaHkpIHtcclxuICAgIEBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gxJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMicpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTM5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnaDMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC1tZCcpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC1zbScpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXhzJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQteGwnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQtbGcnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1zbScpIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14cycpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxDQUFBO0FBQ0ksV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQ0hJLGVBQUEsSUFBQTtBQUNBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTtBREVKLGFBQUE7QUFDQSxrQkFBQTtBQUNBLGVBQUE7QUFFQSxlQUFBOztBQUNBLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQUNBLE9BQUE7QUFDQSxXQUFBLEtBQUE7QUFDQSxVQUFBLElBQUE7QUFDQSxTQUFBO0FBQ0EsWUFBQTs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQUNBLFdBQUEsRUFBQTtBQUNBLFVBQUEsS0FBQSxFQUFBLEVBQUEsSUFBQSxNQUFBLEVBQUE7O0FBRUosQ0FBQTtBQUNJLFdBQUEsRUFBQSxJQUFBOztBQUVKLENBQUE7QUFDSSxXQUFBO0FBSUEsZUFBQSxPQUFBLEVBQUE7O0FBQ0EsQ0FBQTtBQUNJLFNBQUE7QUFDQSxVQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */"], changeDetection: 0 });
var HorizontalTextComponent = _HorizontalTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HorizontalTextComponent, { className: "HorizontalTextComponent", filePath: "src\\app\\horizontal-text\\horizontal-text.component.ts", lineNumber: 19 });
})();

// src/app/navigation/navigation-anchors.enum.ts
var NavigationAnchors;
(function(NavigationAnchors2) {
  NavigationAnchors2["Home"] = "home";
  NavigationAnchors2["AboutUs"] = "aboutUs";
  NavigationAnchors2["HowItWorks"] = "howItWorks";
  NavigationAnchors2["Team"] = "team";
})(NavigationAnchors || (NavigationAnchors = {}));

// src/app/home/home.component.ts
var _c06 = ["aboutUs"];
var _c14 = ["howItWorks"];
var _c23 = ["team"];
var _HomeComponent = class _HomeComponent {
  constructor(fxchScrollingService) {
    this.fxchScrollingService = fxchScrollingService;
    this.aboutUsElement = null;
    this.howItWorksElement = null;
    this.teamElement = null;
  }
  ngAfterViewInit() {
    this.fxchScrollingService.setScrollAnchor(NavigationAnchors.Home, document.body);
    if (this.aboutUsElement != null) {
      this.fxchScrollingService.setScrollAnchor(NavigationAnchors.AboutUs, this.aboutUsElement.nativeElement);
    }
    if (this.howItWorksElement != null) {
      this.fxchScrollingService.setScrollAnchor(NavigationAnchors.HowItWorks, this.howItWorksElement.nativeElement);
    }
    if (this.teamElement != null) {
      this.fxchScrollingService.setScrollAnchor(NavigationAnchors.Team, this.teamElement.nativeElement);
    }
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(FxchScrollingService));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["home"]], viewQuery: function HomeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c06, 5);
    \u0275\u0275viewQuery(_c14, 5);
    \u0275\u0275viewQuery(_c23, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.aboutUsElement = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.howItWorksElement = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.teamElement = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [[1, "fxch-index"], [1, "fxch-index-banner"], ["aboutUs", ""], [1, "fxch-index-about"], [1, "fxch-index-technology"], ["howItWorks", ""], [1, "fxch-index-horizontal"], [1, "fxch-index-benefits"], ["team", ""], [1, "fxch-index-team"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "promo", 1);
    \u0275\u0275elementStart(2, "div", null, 2);
    \u0275\u0275element(4, "about", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "technology", 4);
    \u0275\u0275elementStart(6, "div", null, 5);
    \u0275\u0275element(8, "horizontal-text", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "benefits", 7);
    \u0275\u0275elementStart(10, "div", null, 8);
    \u0275\u0275element(12, "team", 9);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [
  TranslateModule,
  PromoComponent,
  AboutComponent,
  TechnologyComponent,
  HorizontalTextComponent,
  BenefitsComponent,
  TeamComponent
], styles: ["\n\n.fxch-index[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLWluZGV4IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxDQUFBO0FBQ0ksVUFBQTs7IiwKICAibmFtZXMiOiBbXQp9Cg== */"], changeDetection: 0 });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home.component.ts", lineNumber: 33 });
})();

// src/app/page-not-found/page-not-found.component.ts
function PageNotFoundComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PageNotFoundComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PageNotFoundComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PageNotFoundComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 5);
    \u0275\u0275element(1, "path", 6)(2, "path", 7)(3, "path", 8)(4, "path", 9)(5, "path", 10)(6, "path", 11)(7, "path", 12);
    \u0275\u0275elementEnd();
  }
}
var _PageNotFoundComponent = class _PageNotFoundComponent {
};
_PageNotFoundComponent.\u0275fac = function PageNotFoundComponent_Factory(t) {
  return new (t || _PageNotFoundComponent)();
};
_PageNotFoundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageNotFoundComponent, selectors: [["page-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 10, consts: [[1, "fxch-404-wrap"], [1, "fxch-404"], [4, "ngTemplateOutlet"], [1, "fxch-404-action", 3, "text", "link", "color", "appearanceType", "iconName"], ["decorationBg", ""], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 2270 325", "fill", "none", 1, "fxch-404-decoration-img"], ["d", "M251.252 320.29H201.002V256.232H0V220.906L192.548 4.71014H251.252V210.543H305.259V256.232H251.252V320.29ZM69.9749 210.543H201.002V64.058H197.245L69.9749 206.775V210.543Z", "fill", "#2D2D2D", 2, "fill", "var(--f-fourth-text)"], ["d", "M480.164 325C385.298 325 328.943 262.826 328.943 162.5C328.943 62.6449 385.298 0 480.164 0C575.029 0 631.384 62.6449 631.384 162.5C631.384 262.826 575.029 325 480.164 325ZM480.164 276.014C547.321 276.014 577.377 241.159 577.377 162.5C577.377 83.8406 547.321 48.9855 480.164 48.9855C413.006 48.9855 382.481 83.8406 382.481 162.5C382.481 241.159 413.006 276.014 480.164 276.014Z", "fill", "#2D2D2D", 2, "fill", "var(--f-fourth-text)"], ["d", "M906.166 320.29H855.915V256.232H654.914V220.906L847.462 4.71014H906.166V210.543H960.173V256.232H906.166V320.29ZM724.888 210.543H855.915V64.058H852.158L724.888 206.775V210.543Z", "fill", "#2D2D2D", 2, "fill", "var(--f-fourth-text)"], ["d", "M1135.08 325C1040.21 325 983.856 262.826 983.856 162.5C983.856 62.6449 1040.21 0 1135.08 0C1229.94 0 1286.3 62.6449 1286.3 162.5C1286.3 262.826 1229.94 325 1135.08 325ZM1135.08 276.014C1202.23 276.014 1232.29 241.159 1232.29 162.5C1232.29 83.8406 1202.23 48.9855 1135.08 48.9855C1067.92 48.9855 1037.39 83.8406 1037.39 162.5C1037.39 241.159 1067.92 276.014 1135.08 276.014Z", "fill", "#2D2D2D", 2, "fill", "var(--f-fourth-text)"], ["d", "M1561.08 320.29H1510.83V256.232H1309.83V220.906L1502.38 4.71014H1561.08V210.543H1615.09V256.232H1561.08V320.29ZM1379.8 210.543H1510.83V64.058H1507.07L1379.8 206.775V210.543Z", "fill", "#2D2D2D", 2, "fill", "var(--f-fourth-text)"], ["d", "M1789.99 325C1695.13 325 1638.77 262.826 1638.77 162.5C1638.77 62.6449 1695.13 0 1789.99 0C1884.86 0 1941.21 62.6449 1941.21 162.5C1941.21 262.826 1884.86 325 1789.99 325ZM1789.99 276.014C1857.15 276.014 1887.2 241.159 1887.2 162.5C1887.2 83.8406 1857.15 48.9855 1789.99 48.9855C1722.83 48.9855 1692.31 83.8406 1692.31 162.5C1692.31 241.159 1722.83 276.014 1789.99 276.014Z", "fill", "#2D2D2D", 2, "fill", "var(--f-fourth-text)"], ["d", "M2215.99 320.29H2165.74V256.232H1964.74V220.906L2157.29 4.71014H2215.99V210.543H2270V256.232H2215.99V320.29ZM2034.72 210.543H2165.74V64.058H2161.99L2034.72 206.775V210.543Z", "fill", "#2D2D2D", 2, "fill", "var(--f-fourth-text)"]], template: function PageNotFoundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275template(2, PageNotFoundComponent_ng_container_2_Template, 1, 0, "ng-container", 2)(3, PageNotFoundComponent_ng_container_3_Template, 1, 0, "ng-container", 2)(4, PageNotFoundComponent_ng_container_4_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "fxch-button", 3);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PageNotFoundComponent_ng_template_7_Template, 8, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", _r4);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngTemplateOutlet", _r4);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngTemplateOutlet", _r4);
    \u0275\u0275advance(1);
    \u0275\u0275property("text", \u0275\u0275pipeBind1(6, 8, "404.BUTTON_TEXT"))("link", "/")("color", "accent")("appearanceType", "flat")("iconName", "arrow-alt-right");
  }
}, dependencies: [
  NgTemplateOutlet,
  TranslateModule,
  TranslatePipe,
  FxchButtonComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.fxch-404[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 110vmax;\n  display: flex;\n  justify-content: center;\n  align-content: space-between;\n  flex-wrap: wrap;\n  row-gap: 24px;\n  overflow: hidden;\n  pointer-events: none;\n}\n.fxch-404-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.fxch-404-decoration-img[_ngcontent-%COMP%] {\n  flex: 0 0 140%;\n}\n.fxch-404-decoration-img[_ngcontent-%COMP%]:nth-of-type(odd) {\n  transform: translateX(12%);\n}\n.fxch-404-action[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmZ4Y2gtNDA0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMTEwdm1heDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICByb3ctZ2FwOiAyNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJi1kZWNvcmF0aW9uLWltZyB7XHJcbiAgICAgICAgZmxleDogMCAwIDE0MCU7XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1hY3Rpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNJLFdBQUE7QUFDQSxVQUFBOztBQUVKLENBQUE7QUFDSSxZQUFBO0FBQ0EsT0FBQTtBQUNBLFFBQUE7QUFDQSxhQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsU0FBQTtBQUNBLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGlCQUFBO0FBQ0EsYUFBQTtBQUNBLFdBQUE7QUFDQSxZQUFBO0FBQ0Esa0JBQUE7O0FBQ0EsQ0FBQTtBQUNJLFlBQUE7QUFDQSxVQUFBOztBQUVKLENBQUE7QUFDSSxRQUFBLEVBQUEsRUFBQTs7QUFDQSxDQUZKLHVCQUVJO0FBQ0ksYUFBQSxXQUFBOztBQUdSLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLE9BQUE7QUFDQSxRQUFBO0FBQ0EsYUFBQSxVQUFBLElBQUEsRUFBQTtBQUNBLFdBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */"], changeDetection: 0 });
var PageNotFoundComponent = _PageNotFoundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageNotFoundComponent, { className: "PageNotFoundComponent", filePath: "src\\app\\page-not-found\\page-not-found.component.ts", lineNumber: 18 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: HomeComponent,
    title: "FXCH"
  },
  // {
  //     path: 'privacy-policy',
  //     component: PrivacyPolicyComponent,
  //     title: 'FXCH - Privacy Policy'
  // },
  // {
  //     path: 'terms-of-service',
  //     component: TermsOfServiceComponent,
  //     title: 'FXCH - Terms of Service'
  // },
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "404",
    component: PageNotFoundComponent,
    title: "FXCH - 404 Page not Found"
  },
  {
    path: "**",
    redirectTo: "404",
    pathMatch: "full"
  }
];

// src/app/app.config.ts
var import_hammerjs = __toESM(require_hammer());
var appConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient) => new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json"),
        deps: [HttpClient]
      }
    })),
    { provide: APP_INITIALIZER, useFactory: initializeApplication, deps: [AppService], multi: true },
    provideRouter(routes),
    importProvidersFrom(HammerModule)
  ]
};

// src/app/core/enums/languages.ts
var Languages;
(function(Languages2) {
  Languages2["EN"] = "en";
})(Languages || (Languages = {}));

// src/app/core/directives/fxch-popup/fxch-popup.directive.ts
var _FxchPopupDirective = class _FxchPopupDirective {
  constructor(popupService, elementRef, renderer) {
    this.popupService = popupService;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.opened = new EventEmitter();
  }
  openPopup() {
    this.addActiveClass();
    const dialogRef = this.popupService.openPopup(this.templateOrComponentRef, this.elementRef, this.popupData, {
      hasBackdrop: this.hasBackdrop,
      customClass: this.popupCustomClass
    });
    dialogRef.closed.pipe(take(1)).subscribe(() => this.removeActiveClass());
    this.opened.emit(dialogRef);
  }
  addActiveClass() {
    this.renderer.addClass(this.firstChild(), _FxchPopupDirective.activeClass);
  }
  removeActiveClass() {
    this.renderer.removeClass(this.firstChild(), _FxchPopupDirective.activeClass);
  }
  firstChild() {
    return this.elementRef.nativeElement.firstElementChild;
  }
};
_FxchPopupDirective.activeClass = "fxch-active";
_FxchPopupDirective.\u0275fac = function FxchPopupDirective_Factory(t) {
  return new (t || _FxchPopupDirective)(\u0275\u0275directiveInject(FxchPopupService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
_FxchPopupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FxchPopupDirective, selectors: [["", "fxchPopup", ""]], hostBindings: function FxchPopupDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function FxchPopupDirective_click_HostBindingHandler() {
      return ctx.openPopup();
    });
  }
}, inputs: { templateOrComponentRef: ["fxchPopup", "templateOrComponentRef"], hasBackdrop: "hasBackdrop", popupCustomClass: "popupCustomClass", popupData: "popupData" }, outputs: { opened: "opened" }, standalone: true });
var FxchPopupDirective = _FxchPopupDirective;

// src/app/header/header.component.ts
function HeaderComponent_div_22_ng_template_5_ng_container_0_fxch_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fxch-button", 20);
    \u0275\u0275listener("onClick", function HeaderComponent_div_22_ng_template_5_ng_container_0_fxch_button_1_Template_fxch_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const language_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r8 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r8.useLanguage(language_r6));
    });
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 1, "LANGUAGE." + language_r6));
  }
}
function HeaderComponent_div_22_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HeaderComponent_div_22_ng_template_5_ng_container_0_fxch_button_1_Template, 2, 3, "fxch-button", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const language_r6 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r5.getCurrentLanguage() !== language_r6);
  }
}
function HeaderComponent_div_22_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderComponent_div_22_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 18);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r3.languages);
  }
}
function HeaderComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275listener("opened", function HeaderComponent_div_22_Template_div_opened_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.onDesktopLanguagesMenuOpened($event));
    });
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, HeaderComponent_div_22_ng_template_5_Template, 1, 1, "ng-template", null, 17, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const _r4 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("fxchPopup", _r4)("popupCustomClass", "fxch-header-language-modal")("title", \u0275\u0275pipeBind1(2, 4, "LANGUAGE." + ctx_r0.getCurrentLanguage()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getCurrentLanguage());
  }
}
function HeaderComponent_ng_template_25_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "fxch-button", 27);
    \u0275\u0275listener("onClick", function HeaderComponent_ng_template_25_div_1_ng_container_1_Template_fxch_button_onClick_1_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r18);
      const language_r16 = restoredCtx.$implicit;
      const ctx_r17 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r17.useLanguage(language_r16));
    });
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const language_r16 = ctx.$implicit;
    const ctx_r15 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(1);
    \u0275\u0275property("appearanceType", "flat")("actionClass", "fxch-active")("actionTrigger", ctx_r15.getCurrentLanguage() == language_r16)("disabled", ctx_r15.getCurrentLanguage() == language_r16)("text", \u0275\u0275pipeBind1(2, 6, "LANGUAGE.SHORT." + language_r16))("buttonTitle", \u0275\u0275pipeBind1(3, 8, "LANGUAGE." + language_r16));
  }
}
function HeaderComponent_ng_template_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, HeaderComponent_ng_template_25_div_1_ng_container_1_Template, 4, 10, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r14 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngForOf", ctx_r14.languages);
  }
}
var _c07 = () => ["/"];
function HeaderComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, HeaderComponent_ng_template_25_div_1_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "a", 10);
    \u0275\u0275listener("click", function HeaderComponent_ng_template_25_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.scrollTo(ctx_r19.NavigationAnchors.AboutUs));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 10);
    \u0275\u0275listener("click", function HeaderComponent_ng_template_25_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.scrollTo(ctx_r21.NavigationAnchors.HowItWorks));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 10);
    \u0275\u0275listener("click", function HeaderComponent_ng_template_25_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.scrollTo(ctx_r22.NavigationAnchors.Team));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "fxch-button", 25);
    \u0275\u0275listener("onClick", function HeaderComponent_ng_template_25_Template_fxch_button_onClick_13_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r23 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r23.openContacts());
    });
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r1.languages.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fxch-header-nav-link--active", ctx_r1.activeLinks[ctx_r1.NavigationAnchors.AboutUs]);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c07));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, "HEADER.TITLES.ABOUT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fxch-header-nav-link--active", ctx_r1.activeLinks[ctx_r1.NavigationAnchors.HowItWorks]);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c07));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 18, "HEADER.TITLES.HOW_IT_WORKS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fxch-header-nav-link--active", ctx_r1.activeLinks[ctx_r1.NavigationAnchors.Team]);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c07));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "HEADER.TITLES.OUR_TEAM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "accent")("appearanceType", "flat")("text", \u0275\u0275pipeBind1(14, 22, "HEADER.TITLES.GET_IN_TOUCH"));
  }
}
var _HeaderComponent = class _HeaderComponent {
  constructor(document2, changeDetectorRef, translate, fxchScrollingService, contactModalService) {
    this.document = document2;
    this.changeDetectorRef = changeDetectorRef;
    this.translate = translate;
    this.fxchScrollingService = fxchScrollingService;
    this.contactModalService = contactModalService;
    this.NavigationAnchors = NavigationAnchors;
    this.languages = Object.values(Languages);
    this.activeLinks = {};
    this.theme = "light";
    this.mobileMenuDialogRef = null;
    this.desktopLanguagesMenuDialogRef = null;
    this.unsubscribe$ = new Subject();
  }
  ngOnInit() {
    const storedTheme = localStorage.getItem("fxch-theme");
    if (storedTheme != null) {
      this.setTheme(storedTheme);
    }
    this.fxchScrollingService.scroll$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.calculateActiveLinks());
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  onResize() {
    this.calculateActiveLinks();
    this.closeMenus();
  }
  onDesktopLanguagesMenuOpened(menuDialogRef) {
    this.desktopLanguagesMenuDialogRef = menuDialogRef;
  }
  onMobileMenuOpened(menuDialogRef) {
    this.mobileMenuDialogRef = menuDialogRef;
  }
  useLanguage(languages) {
    this.translate.use(languages);
    this.document.documentElement.setAttribute("lang", languages);
    this.closeMenus();
  }
  getCurrentLanguage() {
    return this.translate.currentLang;
  }
  setTheme(theme) {
    this.theme = theme;
    if (this.theme === "light") {
      this.document.documentElement.classList.remove("dark");
    } else {
      this.document.documentElement.classList.add("dark");
    }
    localStorage.setItem("fxch-theme", this.theme);
  }
  scrollTo(id) {
    this.closeMenus();
    this.fxchScrollingService.scrollTo(id);
  }
  openContacts() {
    this.closeMenus();
    this.contactModalService.openContacts();
  }
  calculateActiveLinks() {
    this.activeLinks[NavigationAnchors.AboutUs] = this.fxchScrollingService.isAnchorActive(NavigationAnchors.AboutUs);
    this.activeLinks[NavigationAnchors.HowItWorks] = this.fxchScrollingService.isAnchorActive(NavigationAnchors.HowItWorks);
    this.activeLinks[NavigationAnchors.Team] = this.fxchScrollingService.isAnchorActive(NavigationAnchors.Team);
    this.changeDetectorRef.detectChanges();
  }
  closeMenus() {
    this.desktopLanguagesMenuDialogRef?.close();
    this.mobileMenuDialogRef?.close();
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(FxchScrollingService), \u0275\u0275directiveInject(ContactModalService));
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function HeaderComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, false, \u0275\u0275resolveWindow);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 44, consts: [[1, "fxch-header-wrap"], [1, "fxch-header"], [1, "fxch-header-logo-block"], [1, "fxch-header-logo", 3, "routerLink", "title", "click"], [1, "fxch-header-logo-img"], [1, "fxch-header-theme", 3, "title", "click"], [1, "fxch-header-theme-icon", 3, "iconName"], [1, "fxch-header-divider"], [1, "fxch-header-menu", 3, "appearanceType", "color", "iconName", "buttonTitle", "fxchPopup", "popupCustomClass", "opened"], [1, "fxch-header-nav"], [1, "fxch-header-nav-link", 3, "routerLink", "click"], ["class", "fxch-header-language-wrap", 4, "ngIf"], [1, "fxch-header-action", 3, "color", "appearanceType", "text", "onClick"], ["mobileMenu", ""], [1, "fxch-header-language-wrap"], [1, "fxch-header-language", 3, "fxchPopup", "popupCustomClass", "title", "opened"], [1, "fxch-header-language-text"], ["languageDropdown", ""], [4, "ngFor", "ngForOf"], ["class", "fxch-header-language-item", 3, "text", "onClick", 4, "ngIf"], [1, "fxch-header-language-item", 3, "text", "onClick"], [1, "fxch-header-menu-box"], ["class", "fxch-header-menu-language", 4, "ngIf"], [1, "fxch-header-menu-nav"], [1, "fxch-header-menu-action-wrap"], [1, "fxch-header-menu-action", 3, "color", "appearanceType", "text", "onClick"], [1, "fxch-header-menu-language"], [1, "fxch-header-menu-language-item", 3, "appearanceType", "actionClass", "actionTrigger", "disabled", "text", "buttonTitle", "onClick"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_3_listener() {
      return ctx.scrollTo(ctx.NavigationAnchors.Home);
    });
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "fxch-logo", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275listener("click", function HeaderComponent_Template_div_click_6_listener() {
      return ctx.setTheme(ctx.theme === "light" ? "dark" : "light");
    });
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275element(8, "fxch-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "fxch-button", 8);
    \u0275\u0275listener("opened", function HeaderComponent_Template_fxch_button_opened_10_listener($event) {
      return ctx.onMobileMenuOpened($event);
    });
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "a", 10);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_13_listener() {
      return ctx.scrollTo(ctx.NavigationAnchors.AboutUs);
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 10);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_16_listener() {
      return ctx.scrollTo(ctx.NavigationAnchors.HowItWorks);
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 10);
    \u0275\u0275listener("click", function HeaderComponent_Template_a_click_19_listener() {
      return ctx.scrollTo(ctx.NavigationAnchors.Team);
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, HeaderComponent_div_22_Template, 7, 6, "div", 11);
    \u0275\u0275elementStart(23, "fxch-button", 12);
    \u0275\u0275listener("onClick", function HeaderComponent_Template_fxch_button_onClick_23_listener() {
      return ctx.openContacts();
    });
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, HeaderComponent_ng_template_25_Template, 15, 27, "ng-template", null, 13, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(26);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(40, _c07))("title", \u0275\u0275pipeBind1(4, 26, "SLOGAN"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(7, 28, ctx.theme === "light" ? "THEME.ENABLE_DARK_THEME" : "THEME.ENABLE_LIGHT_THEME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("iconName", ctx.theme === "light" ? "moon" : "sun");
    \u0275\u0275advance(2);
    \u0275\u0275property("appearanceType", "flat")("color", "accent")("iconName", "burger")("buttonTitle", \u0275\u0275pipeBind1(11, 30, "HEADER.TITLES.MENU"))("fxchPopup", _r2)("popupCustomClass", "fxch-header-menu-modal");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fxch-header-nav-link--active", ctx.activeLinks[ctx.NavigationAnchors.AboutUs]);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(41, _c07));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 32, "HEADER.TITLES.ABOUT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fxch-header-nav-link--active", ctx.activeLinks[ctx.NavigationAnchors.HowItWorks]);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(42, _c07));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 34, "HEADER.TITLES.HOW_IT_WORKS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fxch-header-nav-link--active", ctx.activeLinks[ctx.NavigationAnchors.Team]);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(43, _c07));
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 36, "HEADER.TITLES.OUR_TEAM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.languages.length > 1);
    \u0275\u0275advance(1);
    \u0275\u0275property("color", "accent")("appearanceType", "flat")("text", \u0275\u0275pipeBind1(24, 38, "HEADER.TITLES.GET_IN_TOUCH"));
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  RouterModule,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  FxchLogoComponent,
  FxchButtonComponent,
  FxchIconComponent,
  FxchPopupDirective
], styles: ['\n\n.fxch-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  grid-template-areas: "logo-block nav action";\n  column-gap: 0px;\n  align-items: center;\n  padding: 3px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 10px;\n  pointer-events: all;\n}\n@media screen and (max-width: 960px) {\n  .fxch-header[_ngcontent-%COMP%] {\n    grid-template-columns: 129px minmax(0, 1fr) auto;\n    grid-template-areas: "logo-block . menu";\n    width: 100%;\n    max-width: 300px;\n  }\n}\n.fxch-header-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 20px;\n}\n.fxch-header-logo[_ngcontent-%COMP%] {\n  grid-area: logo;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 12px;\n  border-radius: 8px;\n  height: 50px;\n}\n.fxch-header-logo-block[_ngcontent-%COMP%] {\n  grid-area: logo-block;\n  display: grid;\n  grid-template-columns: 129px 50px 2px;\n  grid-template-areas: "logo theme divider";\n  column-gap: 12px;\n  align-items: center;\n}\n.fxch-header-logo-img[_ngcontent-%COMP%] {\n  display: block;\n  width: 67px;\n}\n.fxch-header-theme[_ngcontent-%COMP%] {\n  grid-area: theme;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  width: 1em;\n  height: 1em;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: background-color;\n}\n.fxch-header-theme-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n}\n.fxch-header-divider[_ngcontent-%COMP%] {\n  grid-area: divider;\n  width: 2px;\n  height: 20px;\n  border-radius: 1px;\n}\n@media screen and (max-width: 960px) {\n  .fxch-header-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.fxch-header-nav[_ngcontent-%COMP%] {\n  grid-area: nav;\n  display: flex;\n  justify-content: flex-start;\n  column-gap: 0;\n  align-items: center;\n  padding: 0 20px;\n}\n@media screen and (max-width: 960px) {\n  .fxch-header-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.fxch-header-nav-link[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 14px 20px;\n  border-radius: 8px;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: color 0.2s ease;\n  will-change: color;\n}\n.fxch-header-action[_ngcontent-%COMP%] {\n  grid-area: action;\n}\n@media screen and (max-width: 960px) {\n  .fxch-header-action[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.fxch-header-language[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  column-gap: 5px;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  width: 1em;\n  height: 1em;\n  border-radius: 8px;\n  border-width: 1px;\n  border-style: solid;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1), background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color, background-color;\n}\n.fxch-header-language--active[_ngcontent-%COMP%]   .fxch-header-language-icon[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.fxch-header-language-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -50px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n@media screen and (max-width: 960px) {\n  .fxch-header-language-wrap[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.fxch-header-language-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 400;\n  text-transform: uppercase;\n  text-align: center;\n}\n.fxch-header-language-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 100%;\n  right: 0;\n  padding: 8px 0;\n  border-radius: 4px;\n  z-index: 105;\n}\n@media screen and (max-width: 960px) {\n  .fxch-header-language-dropdown[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.fxch-header-language-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  display: block;\n  content: "";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n  z-index: 100;\n}\n@media screen and (max-width: 960px) {\n  .fxch-header-language-backdrop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.fxch-header-menu[_ngcontent-%COMP%] {\n  grid-area: menu;\n  display: none;\n}\n@media screen and (max-width: 960px) {\n  .fxch-header-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.fxch-header-menu-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 16px;\n  align-items: start;\n}\n.fxch-header-menu-language[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0 24px;\n}\n.fxch-header-menu-nav[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 5px;\n  align-items: start;\n  justify-content: start;\n}\n.fxch-header-menu-nav[_ngcontent-%COMP%]   .fxch-header-nav-link[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.fxch-header-menu-action-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL2JyZWFrcG9pbnQubWl4aW4uc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi90eXBvZ3JhcGh5Lm1peGluLnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbm1heCgwLCAxZnIpIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvZ28tYmxvY2sgbmF2IGFjdGlvblwiO1xyXG4gICAgY29sdW1uLWdhcDogMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyOXB4IG1pbm1heCgwLCAxZnIpIGF1dG87XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsb2dvLWJsb2NrIC4gbWVudVwiO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgICYtbG9nbyB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBsb2dvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICYtYmxvY2sge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IGxvZ28tYmxvY2s7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTI5cHggNTBweCAycHg7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibG9nbyB0aGVtZSBkaXZpZGVyXCI7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDEycHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2N3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtdGhlbWUge1xyXG4gICAgICAgIGdyaWQtYXJlYTogdGhlbWU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtZGl2aWRlciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBkaXZpZGVyO1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtbmF2IHtcclxuICAgICAgICBncmlkLWFyZWE6IG5hdjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtbGluayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQtc21cIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZTtcclxuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtYWN0aW9uIHtcclxuICAgICAgICBncmlkLWFyZWE6IGFjdGlvbjtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtbGFuZ3VhZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDVweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICBjb2xvciAwLjVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogY29sb3IsIGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgJi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgLmZ4Y2gtaGVhZGVyLWxhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgICYtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi13cmFwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogLTUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXNtXCIpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZHJvcGRvd24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYmFja2Ryb3Age1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLW1lbnUge1xyXG4gICAgICAgIGdyaWQtYXJlYTogbWVudTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICAgICAgcm93LWdhcDogMTZweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxhbmd1YWdlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1uYXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgICAuZnhjaC1oZWFkZXItbmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYWN0aW9uIHtcclxuICAgICAgICAgICAgJi13cmFwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwgIiRicmVha3BvaW50czogKFxyXG4gICAgeHMtaDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NzBweClcIixcclxuICAgIHNtLWg6IFwic2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpXCIsXHJcbiAgICB4czogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiLFxyXG4gICAgc206IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIixcclxuICAgIG1kOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpXCIsXHJcbiAgICBsZzogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzBweClcIixcclxuICAgIHhsOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1MHB4KVwiXHJcbikgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludCgkYnJlYWtwb2ludE5hbWUpIHtcclxuICAgICRtZWRpYVF1ZXJ5OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnROYW1lKTtcclxuXHJcbiAgICBAaWYgKCRtZWRpYVF1ZXJ5ID09IG51bGwpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEBtZWRpYSAjeyRtZWRpYVF1ZXJ5fSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsICJAbWl4aW4gZm9udC1zdHlsZXMoJHR5cG9ncmFwaHkpIHtcclxuICAgIEBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gxJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMicpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTM5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnaDMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC1tZCcpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdsYWJlbC1zbScpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXhzJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQteGwnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ3RleHQtbGcnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1zbScpIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14cycpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBLEtBQUEsT0FBQSxDQUFBLEVBQUEsS0FBQTtBQUNBLHVCQUFBO0FBQ0EsY0FBQTtBQUNBLGVBQUE7QUFDQSxXQUFBO0FBQ0EsZ0JBQUE7QUFDQSxnQkFBQTtBQUNBLGlCQUFBO0FBQ0Esa0JBQUE7O0FDSUksT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURkUixHQUFBO0FBWVEsMkJBQUEsTUFBQSxPQUFBLENBQUEsRUFBQSxLQUFBO0FBQ0EseUJBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTs7O0FBRUosQ0FBQTtBQUNJLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOztBQUVKLENBQUE7QUFDSSxhQUFBO0FBQ0EsV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQUNBLFdBQUEsSUFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQTs7QUFDQSxDQUFBO0FBQ0ksYUFBQTtBQUNBLFdBQUE7QUFDQSx5QkFBQSxNQUFBLEtBQUE7QUFDQSx1QkFBQTtBQUNBLGNBQUE7QUFDQSxlQUFBOztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EsU0FBQTs7QUFHUixDQUFBO0FBQ0ksYUFBQTtBQUNBLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGVBQUE7QUFDQSxhQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxpQkFBQTtBQUNBLFVBQUE7QUFDQSxjQUFBLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBLGVBQUE7O0FBQ0EsQ0FBQTtBQUNJLFdBQUE7QUFDQSxhQUFBOztBQUdSLENBQUE7QUFDSSxhQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxpQkFBQTs7QUNuREEsT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QUQrQ0osR0FBQTtBQU1RLGFBQUE7OztBQUdSLENBQUE7QUFDSSxhQUFBO0FBQ0EsV0FBQTtBQUNBLG1CQUFBO0FBQ0EsY0FBQTtBQUNBLGVBQUE7QUFDQSxXQUFBLEVBQUE7O0FDOURBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEd0RKLEdBQUE7QUFRUSxhQUFBOzs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLG1CQUFBO0FBQ0EsV0FBQSxLQUFBO0FBQ0EsaUJBQUE7QUVoQ0osYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FGZ0NJLFVBQUE7QUFDQSxjQUFBLE1BQUEsS0FBQTtBQUNBLGVBQUE7O0FBR1IsQ0FBQTtBQUNJLGFBQUE7O0FDOUVBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FENkVKLEdBQUE7QUFHUSxhQUFBOzs7QUFHUixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBO0FBQ0EsY0FBQTtBQUNBLGVBQUE7QUFDQSxtQkFBQTtBQUNBLGFBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTtBQUNBLGlCQUFBO0FBQ0EsZ0JBQUE7QUFDQSxnQkFBQTtBQUNBLFVBQUE7QUFDQSx1QkFBQTtBQUFBLGVBQUE7QUFDQSxjQUNJLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUEsRUFBQSxpQkFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFFSixlQUFBLEtBQUEsRUFBQTs7QUFHUSxDQUFBLDZCQUFBLENBQUE7QUFDSSxhQUFBLE9BQUE7O0FBSVosQ0FBQTtBQUNJLFlBQUE7QUFDQSxTQUFBO0FBQ0EsV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTs7QUNqSEosT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QUQ0R0EsR0FBQTtBQU9RLGFBQUE7OztBQUdSLENBQUE7QUVoRkEsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FGZ0ZJLGtCQUFBO0FBQ0EsY0FBQTs7QUFFSixDQUFBO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSxPQUFBO0FBQ0EsU0FBQTtBQUNBLFdBQUEsSUFBQTtBQUNBLGlCQUFBO0FBQ0EsV0FBQTs7QUNsSUosT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QUQySEEsR0FBQTtBQVNRLGFBQUE7OztBQUdSLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLFdBQUE7QUFDQSxPQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7QUFDQSxRQUFBO0FBQ0EsVUFBQTtBQUNBLFdBQUE7O0FDaEpKLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEdUlBLEdBQUE7QUFXUSxhQUFBOzs7QUFJWixDQUFBO0FBQ0ksYUFBQTtBQUNBLFdBQUE7O0FDeEpBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEc0pKLEdBQUE7QUFJUSxhQUFBOzs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBO0FBQ0EsV0FBQTtBQUNBLGVBQUE7O0FBRUosQ0FBQTtBQUNJLFdBQUE7QUFDQSxtQkFBQTtBQUNBLGVBQUE7QUFDQSxhQUFBO0FBQ0EsV0FBQSxFQUFBOztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EseUJBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLG1CQUFBOztBQUNBLENBTkoscUJBTUksQ0E3R0o7QUE4R1EsV0FBQSxJQUFBO0FBQ0EsaUJBQUE7QUFDQSxlQUFBO0FBQ0EsWUFBQTs7QUFJSixDQUFBO0FBQ0ksV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQUNBLFdBQUEsRUFBQTs7IiwKICAibmFtZXMiOiBbXQp9Cg== */'], changeDetection: 0 });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\header\\header.component.ts", lineNumber: 35 });
})();

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var _Clipboard = class _Clipboard {
  constructor(document2) {
    this._document = document2;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
};
_Clipboard.\u0275fac = function Clipboard_Factory(t) {
  return new (t || _Clipboard)(\u0275\u0275inject(DOCUMENT));
};
_Clipboard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Clipboard,
  factory: _Clipboard.\u0275fac,
  providedIn: "root"
});
var Clipboard = _Clipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var _CdkCopyToClipboard = class _CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    this.text = "";
    this.attempts = 1;
    this.copied = new EventEmitter();
    this._pending = /* @__PURE__ */ new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
};
_CdkCopyToClipboard.\u0275fac = function CdkCopyToClipboard_Factory(t) {
  return new (t || _CdkCopyToClipboard)(\u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
};
_CdkCopyToClipboard.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCopyToClipboard,
  selectors: [["", "cdkCopyToClipboard", ""]],
  hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
        return ctx.copy();
      });
    }
  },
  inputs: {
    text: ["cdkCopyToClipboard", "text"],
    attempts: ["cdkCopyToClipboardAttempts", "attempts"]
  },
  outputs: {
    copied: "cdkCopyToClipboardCopied"
  }
});
var CdkCopyToClipboard = _CdkCopyToClipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var _ClipboardModule = class _ClipboardModule {
};
_ClipboardModule.\u0275fac = function ClipboardModule_Factory(t) {
  return new (t || _ClipboardModule)();
};
_ClipboardModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ClipboardModule
});
_ClipboardModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var ClipboardModule = _ClipboardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      declarations: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// src/app/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  copied(isSuccesfull, labelElement, value) {
    if (!value) {
      return;
    }
    if (!isSuccesfull) {
      console.log("Not Copied");
      return;
    }
    labelElement.classList.add(_FooterComponent.LabelActiveClass);
    setTimeout(() => labelElement.classList.remove(_FooterComponent.LabelActiveClass), _FooterComponent.LabelActiveClassVisibleTimeMs);
  }
};
_FooterComponent.LabelActiveClass = "fxch-footer-contacts-label--active";
_FooterComponent.LabelActiveClassVisibleTimeMs = 2e3;
_FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 23, consts: [[1, "fxch-footer-wrap"], [1, "fxch-footer"], [1, "fxch-footer-content"], [1, "fxch-footer-contacts"], [1, "fxch-footer-contacts-title"], [1, "fxch-footer-contacts-list"], [1, "fxch-footer-contacts-item"], ["href", "mailto:support@fxclr.com", 1, "fxch-footer-contacts-link", 3, "title"], [1, "fxch-footer-contacts-link-icon", 3, "iconName"], [1, "fxch-footer-contacts-link-text"], [1, "fxch-footer-contacts-copy", 3, "title", "cdkCopyToClipboard", "cdkCopyToClipboardCopied"], [1, "fxch-footer-contacts-copy-icon", 3, "iconName"], [1, "fxch-footer-contacts-label"], ["labelElement", ""], [1, "fxch-footer-contacts-label-icon", 3, "iconName"], [1, "fxch-footer-contacts-label-text"], [1, "fxch-footer-social"], ["href", "https://twitter.com/fxclr", "target", "_blank", "rel", "nofollow", 1, "fxch-footer-social-item", 3, "title"], [1, "fxch-footer-social-item-icon", 3, "iconName"], ["href", "https://www.linkedin.com/company/fxch-ltd", "target", "_blank", "rel", "nofollow", 1, "fxch-footer-social-item", 3, "title"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "a", 7);
    \u0275\u0275element(10, "fxch-icon", 8);
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275listener("cdkCopyToClipboardCopied", function FooterComponent_Template_div_cdkCopyToClipboardCopied_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const _r0 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(ctx.copied($event, _r0, "support@fxclr.com"));
    });
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275element(15, "fxch-icon", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12, 13);
    \u0275\u0275element(18, "fxch-icon", 14);
    \u0275\u0275elementStart(19, "div", 15);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 16)(23, "a", 17);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275element(25, "fxch-icon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 19);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275element(28, "fxch-icon", 18);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "FOOTER.CONTACT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", "support@fxclr.com");
    \u0275\u0275advance(1);
    \u0275\u0275property("iconName", "mail");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("support@fxclr.com");
    \u0275\u0275advance(1);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(14, 15, "FOOTER.COPY_EMAIL"))("cdkCopyToClipboard", "support@fxclr.com");
    \u0275\u0275advance(2);
    \u0275\u0275property("iconName", "copy");
    \u0275\u0275advance(3);
    \u0275\u0275property("iconName", "copy-check");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 17, "FOOTER.COPIED"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 19, "FOOTER.SOCIAL.TWITTER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("iconName", "twitter");
    \u0275\u0275advance(1);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 21, "FOOTER.SOCIAL.LINKEDIN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("iconName", "linkedin");
  }
}, dependencies: [
  CommonModule,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  ClipboardModule,
  CdkCopyToClipboard,
  FxchIconComponent
], styles: ['\n\n.fxch-footer[_ngcontent-%COMP%] {\n  padding: 0 var(--padding-inline) calc(var(--padding-inline) / 2);\n}\n.fxch-footer-wrap[_ngcontent-%COMP%] {\n  max-width: var(--width);\n  margin: 0 auto;\n}\n.fxch-footer-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-template-areas: "contacts social";\n  column-gap: 100px;\n  row-gap: 50px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 80px;\n  border-radius: 12px;\n}\n@media screen and (max-width: 960px) {\n  .fxch-footer-content[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .fxch-footer-content[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    grid-template-areas: "contacts" "social";\n  }\n}\n.fxch-footer-contacts[_ngcontent-%COMP%] {\n  grid-area: contacts;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: auto minmax(0, 1fr);\n  row-gap: 24px;\n  align-items: start;\n}\n.fxch-footer-contacts-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  font-weight: 600;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.fxch-footer-contacts-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 12px;\n  align-items: start;\n}\n.fxch-footer-contacts-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  column-gap: 12px;\n  align-items: center;\n}\n@media screen and (max-width: 960px) {\n  .fxch-footer-contacts-item[_ngcontent-%COMP%] {\n    grid-template-columns: auto 32px;\n    justify-content: start;\n  }\n}\n.fxch-footer-contacts-link[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 18px minmax(0, 1fr);\n  column-gap: 12px;\n  align-items: center;\n  text-decoration: none;\n}\n.fxch-footer-contacts-link[_ngcontent-%COMP%]:hover   .fxch-footer-contacts-link-text[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.fxch-footer-contacts-link-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n}\n.fxch-footer-contacts-copy[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 32px;\n  width: 1em;\n  height: 1em;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: background-color;\n}\n.fxch-footer-contacts-copy-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n}\n.fxch-footer-contacts-label[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  grid-template-columns: 24px minmax(0, 1fr);\n  column-gap: 10px;\n  align-items: center;\n  top: -100px;\n  right: 80px;\n  border-radius: 12px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 9px 20px;\n  opacity: 0;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  transition: opacity 0.1s cubic-bezier(0.35, 0, 0.25, 1), top 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: opacity, top;\n}\n.fxch-footer-contacts-label--active[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 40px;\n}\n.fxch-footer-contacts-label-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n}\n.fxch-footer-contacts-label-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n}\n.fxch-footer-social[_ngcontent-%COMP%] {\n  grid-area: social;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  column-gap: 12px;\n  row-gap: 12px;\n  flex-wrap: wrap;\n}\n@media screen and (max-width: 960px) {\n  .fxch-footer-social[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n.fxch-footer-social-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 52px;\n  width: 1em;\n  height: 1em;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1), background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color, background-color;\n}\n.fxch-footer-social-item-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL2JyZWFrcG9pbnQubWl4aW4uc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi90eXBvZ3JhcGh5Lm1peGluLnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctaW5saW5lKSAje2NhbGModmFyKC0tcGFkZGluZy1pbmxpbmUpIC8gMil9O1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXdpZHRoKTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNvbnRhY3RzIHNvY2lhbFwiO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDEwMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6IDUwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJzbVwiKSB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgIFwiY29udGFjdHNcIlxyXG4gICAgICAgICAgICAgICAgXCJzb2NpYWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWNvbnRhY3RzIHtcclxuICAgICAgICBncmlkLWFyZWE6IGNvbnRhY3RzO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBtaW5tYXgoMCwgMWZyKTtcclxuICAgICAgICByb3ctZ2FwOiAyNHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LWxnXCIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1saXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgICAgICByb3ctZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMTJweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcIm1kXCIpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzMnB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxpbmsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cHggbWlubWF4KDAsIDFmcik7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDEycHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAuZnhjaC1mb290ZXItY29udGFjdHMtbGluay10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC1sZyBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb3B5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgJi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRweCBtaW5tYXgoMCwgMWZyKTtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdG9wOiAtMTAwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAgODBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5IC4xcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgdG9wIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdG9wO1xyXG4gICAgICAgICAgICAmLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC1sZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtc29jaWFsIHtcclxuICAgICAgICBncmlkLWFyZWE6IHNvY2lhbDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAxMnB4O1xyXG4gICAgICAgIHJvdy1nYXA6IDEycHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpcclxuICAgICAgICAgICAgICAgIGNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwgIkBtaXhpbiBmb250LXN0eWxlcygkdHlwb2dyYXBoeSkge1xyXG4gICAgQGlmICgkdHlwb2dyYXBoeSA9PSAnaDEnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDI3OXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gyJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLW1kJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXNtJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwteHMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14bCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1sZycpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXNtJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhzJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxXQUFBLEVBQUEsSUFBQSxrQkFBQSxLQUFBLElBQUEsa0JBQUEsRUFBQTs7QUFDQSxDQUFBO0FBQ0ksYUFBQSxJQUFBO0FBQ0EsVUFBQSxFQUFBOztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EseUJBQUEsT0FBQSxDQUFBLEVBQUE7QUFDQSx1QkFBQTtBQUNBLGNBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLG1CQUFBO0FBQ0EsV0FBQTtBQUNBLGlCQUFBOztBQ0RBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEUkosR0FBQTtBQVdRLGFBQUE7OztBQ0hKLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEUkosR0FBQTtBQWNRLDJCQUFBO0FBQ0EseUJBQ0ksV0FBQTs7O0FBSVosQ0FBQTtBQUNJLGFBQUE7QUFDQSxXQUFBO0FBQ0EseUJBQUE7QUFDQSxzQkFBQSxLQUFBLE9BQUEsQ0FBQSxFQUFBO0FBQ0EsV0FBQTtBQUNBLGVBQUE7O0FBQ0EsQ0FBQTtBRWNBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTtBRmRJLGVBQUE7QUFDQSx1QkFBQTtBQUFBLGVBQUE7O0FBRUosQ0FBQTtBQUNJLFdBQUE7QUFDQSx5QkFBQTtBQUNBLFdBQUE7QUFDQSxlQUFBOztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EseUJBQUEsT0FBQSxDQUFBLEVBQUEsS0FBQTtBQUNBLGNBQUE7QUFDQSxlQUFBOztBQ2xDSixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRDhCQSxHQUFBO0FBTVEsMkJBQUEsS0FBQTtBQUNBLHFCQUFBOzs7QUFHUixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBLEtBQUEsT0FBQSxDQUFBLEVBQUE7QUFDQSxjQUFBO0FBQ0EsZUFBQTtBQUNBLG1CQUFBOztBQUVJLENBUFIseUJBT1EsT0FBQSxDQUFBO0FBQ0ksbUJBQUE7O0FBR1IsQ0FBQTtBQUNJLFdBQUE7QUFDQSxhQUFBOztBQU1SLENBQUE7QUFDSSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsYUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsaUJBQUE7QUFDQSxVQUFBO0FBQ0EsY0FBQSxpQkFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQSxlQUFBOztBQUNBLENBQUE7QUFDSSxXQUFBO0FBQ0EsYUFBQTs7QUFHUixDQUFBO0FBQ0ksWUFBQTtBQUNBLFdBQUE7QUFDQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxFQUFBO0FBQ0EsY0FBQTtBQUNBLGVBQUE7QUFDQSxPQUFBO0FBQ0EsU0FBQTtBQUNBLGlCQUFBO0FBQ0EsZ0JBQUE7QUFDQSxnQkFBQTtBQUNBLFdBQUEsSUFBQTtBQUNBLFdBQUE7QUFDQSwyQkFBQSxLQUFBO0FBQUEsbUJBQUEsS0FBQTtBQUNBLGNBQ0ksUUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQSxFQUFBLElBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBRUosZUFBQSxPQUFBLEVBQUE7O0FBQ0EsQ0FBQTtBQUNJLFdBQUE7QUFDQSxPQUFBOztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EsYUFBQTs7QUFFSixDQUFBO0FFcEVKLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTs7QUZ1RUosQ0FBQTtBQUNJLGFBQUE7QUFDQSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsY0FBQTtBQUNBLFdBQUE7QUFDQSxhQUFBOztBQ2pIQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRDBHSixHQUFBO0FBU1EscUJBQUE7OztBQUVKLENBQUE7QUFDSSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsYUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsZ0JBQUE7QUFDQSxnQkFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQTtBQUNBLGNBQ0ksTUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQSxFQUFBLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUVKLGVBQUEsS0FBQSxFQUFBOztBQUNBLENBQUE7QUFDSSxXQUFBO0FBQ0EsYUFBQTs7IiwKICAibmFtZXMiOiBbXQp9Cg== */'], changeDetection: 0 });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\footer\\footer.component.ts", lineNumber: 27 });
})();

// src/app/core/services/fxch-not-found-page.service.ts
var _FxchNotFoundPageService = class _FxchNotFoundPageService {
  constructor(router) {
    this.router = router;
    this.isNotFoundPage$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map((event) => event.urlAfterRedirects === "/404"));
  }
};
_FxchNotFoundPageService.\u0275fac = function FxchNotFoundPageService_Factory(t) {
  return new (t || _FxchNotFoundPageService)(\u0275\u0275inject(Router));
};
_FxchNotFoundPageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchNotFoundPageService, factory: _FxchNotFoundPageService.\u0275fac, providedIn: "root" });
var FxchNotFoundPageService = _FxchNotFoundPageService;

// src/app/app.component.ts
var _c08 = ["scrollContainer"];
function AppComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer", 6);
  }
}
var _AppComponent = class _AppComponent {
  constructor(translate, fxchNotFoundPageService, fxchScrollPositionService) {
    this.fxchNotFoundPageService = fxchNotFoundPageService;
    this.fxchScrollPositionService = fxchScrollPositionService;
    this.scrollContainerElement = null;
    this.getScreenWidth = 2e3;
    this.getScreenHeight = 2e3;
    this.isNotFoundPage$ = this.fxchNotFoundPageService.isNotFoundPage$;
    translate.setDefaultLang(Languages.EN);
    translate.use(Languages.EN);
  }
  ngOnInit() {
    this.getScreenSize();
  }
  ngAfterViewInit() {
    if (this.scrollContainerElement == null) {
      return;
    }
    this.fxchScrollPositionService.setScrollingElement(this.scrollContainerElement.nativeElement);
  }
  getScreenSize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  onScroll() {
    this.fxchScrollPositionService.scroll$.next();
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(FxchNotFoundPageService), \u0275\u0275directiveInject(FxchScrollingService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app"]], viewQuery: function AppComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c08, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainerElement = _t.first);
  }
}, hostBindings: function AppComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function AppComponent_resize_HostBindingHandler() {
      return ctx.getScreenSize();
    }, false, \u0275\u0275resolveWindow);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 11, consts: [[1, "fxch-p-wrap"], [1, "fxch-p-header"], [1, "fxch-p-main", "fxch-scroll", 3, "scroll"], ["scrollContainer", ""], [1, "fxch-p-content"], ["class", "fxch-p-footer", 4, "ngIf"], [1, "fxch-p-footer"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "header", 1);
    \u0275\u0275elementStart(2, "div", 2, 3);
    \u0275\u0275listener("scroll", function AppComponent_Template_div_scroll_2_listener() {
      return ctx.onScroll();
    });
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275element(6, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AppComponent_footer_7_Template, 1, 0, "footer", 5);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("--vh", ctx.getScreenHeight, "px")("--vw", ctx.getScreenWidth, "px");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fxch-p-main--404", \u0275\u0275pipeBind1(4, 7, ctx.isNotFoundPage$));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(8, 9, ctx.isNotFoundPage$));
  }
}, dependencies: [
  CommonModule,
  NgIf,
  AsyncPipe,
  TranslateModule,
  RouterOutlet,
  HeaderComponent,
  FooterComponent
], styles: ["\n\n.fxch-p-wrap[_ngcontent-%COMP%] {\n  --padding-inline: 80px;\n  --width: 1440px;\n  position: relative;\n  height: 100%;\n}\n@media screen and (max-width: 1270px) {\n  .fxch-p-wrap[_ngcontent-%COMP%] {\n    --padding-inline: 20px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .fxch-p-wrap[_ngcontent-%COMP%] {\n    --padding-inline: 10px;\n  }\n}\n.fxch-p-header[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 20;\n  pointer-events: none;\n}\n.fxch-p-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: auto min-content;\n  align-items: start;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.fxch-p-main--404[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.fxch-p-main--404[_ngcontent-%COMP%]   .fxch-p-content[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 100%;\n}\n.fxch-p-content[_ngcontent-%COMP%] {\n  padding-top: 158px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCAic3JjL2FwcC9jb21tb24vbWl4aW4vYnJlYWtwb2ludC5taXhpbi5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJAaW1wb3J0IFwiLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLXAge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgICAtLXBhZGRpbmctaW5saW5lOiA4MHB4O1xyXG4gICAgICAgIC0td2lkdGg6IDE0NDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJsZ1wiKSB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1pbmxpbmU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJ4c1wiKSB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgICYtbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIG1pbi1jb250ZW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICYtLTQwNCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIC5meGNoLXAtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTU4cHg7XHJcbiAgICB9XHJcbn0iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUdJLENBQUE7QUFDSSxvQkFBQTtBQUNBLFdBQUE7QUFDQSxZQUFBO0FBQ0EsVUFBQTs7QUNTQSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRGJKLEdBQUE7QUFNUSxzQkFBQTs7O0FDT0osT0FBQSxPQUFBLElBQUEsQ0FBQSxTQUFBLEVBQUE7QURiSixHQUFBO0FBU1Esc0JBQUE7OztBQUdSLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLE9BQUE7QUFDQSxRQUFBO0FBQ0EsU0FBQTtBQUNBLFdBQUE7QUFDQSxrQkFBQTs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBO0FBQ0Esc0JBQUEsS0FBQTtBQUNBLGVBQUE7QUFDQSxVQUFBO0FBQ0EsWUFBQTtBQUNBLGNBQUE7O0FBQ0EsQ0FBQTtBQUNJLFlBQUE7O0FBQ0EsQ0FGSixpQkFFSSxDQUFBO0FBQ0ksV0FBQTtBQUNBLFVBQUE7O0FBSVosQ0FOUTtBQU9KLGVBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */"], changeDetection: 0 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 28 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

hammerjs/hammer.js:
  (*! Hammer.JS - v2.0.7 - 2016-04-22
   * http://hammerjs.github.io/
   *
   * Copyright (c) 2016 Jorik Tangelder;
   * Licensed under the MIT license *)
*/
//# sourceMappingURL=main-KD5O2NLH.js.map
