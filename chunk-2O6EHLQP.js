import {
  ChangeDetectorRef,
  CommonModule,
  DialogRef,
  Directive,
  ElementRef,
  EventEmitter,
  FxchButtonComponent,
  FxchIconComponent,
  FxchToastService,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgIf,
  NgModule,
  Optional,
  Output,
  Renderer2,
  RouterModule,
  RuntimeError,
  Self,
  SkipSelf,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Version,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-XSYWN34I.js";

// node_modules/@angular/forms/fesm2022/forms.mjs
var _BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
};
_BaseControlValueAccessor.\u0275fac = function BaseControlValueAccessor_Factory(t) {
  return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_BaseControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseControlValueAccessor
});
var BaseControlValueAccessor = _BaseControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
};
_BuiltInControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuiltInControlValueAccessor_BaseFactory;
  return function BuiltInControlValueAccessor_Factory(t) {
    return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
  };
})();
_BuiltInControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BuiltInControlValueAccessor,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var BuiltInControlValueAccessor = _BuiltInControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken("NgValueAccessor");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var _CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
};
_CheckboxControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxControlValueAccessor_BaseFactory;
  return function CheckboxControlValueAccessor_Factory(t) {
    return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
  };
})();
_CheckboxControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxControlValueAccessor = _CheckboxControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken("CompositionEventMode");
var _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
};
_DefaultValueAccessor.\u0275fac = function DefaultValueAccessor_Factory(t) {
  return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
};
_DefaultValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var DefaultValueAccessor = _DefaultValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken("NgValidators");
var NG_ASYNC_VALIDATORS = new InjectionToken("NgAsyncValidators");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```typescript
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays. The
   * `minLength` validator logic is also not invoked for values when their `length` property is 0
   * (for example in case of an empty string or an empty array), to support optional controls. You
   * can use the standard `required` validator if empty values should not be considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use the
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```typescript
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```typescript
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```typescript
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static nullValidator(control) {
    return nullValidator(control);
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatus.\u0275fac = function NgControlStatus_Factory(t) {
  return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
};
_NgControlStatus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatus = _NgControlStatus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatusGroup.\u0275fac = function NgControlStatusGroup_Factory(t) {
  return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
};
_NgControlStatusGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 16,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatusGroup = _NgControlStatusGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var _NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
};
_NgForm.\u0275fac = function NgForm_Factory(t) {
  return new (t || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgForm.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: ["ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
});
var NgForm = _NgForm;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
};
_AbstractFormGroupDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AbstractFormGroupDirective_BaseFactory;
  return function AbstractFormGroupDirective_Factory(t) {
    return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
  };
})();
_AbstractFormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractFormGroupDirective,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var AbstractFormGroupDirective = _AbstractFormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var _NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
};
_NgModelGroup.\u0275fac = function NgModelGroup_Factory(t) {
  return new (t || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_NgModelGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: ["ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
});
var NgModelGroup = _NgModelGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var _NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
};
_NgModel.\u0275fac = function NgModel_Factory(t) {
  return new (t || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgModel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"],
    options: ["ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var NgModel = _NgModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var _\u0275NgNoValidate = class _\u0275NgNoValidate {
};
_\u0275NgNoValidate.\u0275fac = function \u0275NgNoValidate_Factory(t) {
  return new (t || _\u0275NgNoValidate)();
};
_\u0275NgNoValidate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
var \u0275NgNoValidate = _\u0275NgNoValidate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var _NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_NumberValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NumberValueAccessor_BaseFactory;
  return function NumberValueAccessor_Factory(t) {
    return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
  };
})();
_NumberValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var NumberValueAccessor = _NumberValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var _RadioControlRegistryModule = class _RadioControlRegistryModule {
};
_RadioControlRegistryModule.\u0275fac = function RadioControlRegistryModule_Factory(t) {
  return new (t || _RadioControlRegistryModule)();
};
_RadioControlRegistryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _RadioControlRegistryModule
});
_RadioControlRegistryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var RadioControlRegistryModule = _RadioControlRegistryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistryModule, [{
    type: NgModule
  }], null, null);
})();
var _RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
};
_RadioControlRegistry.\u0275fac = function RadioControlRegistry_Factory(t) {
  return new (t || _RadioControlRegistry)();
};
_RadioControlRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RadioControlRegistry,
  factory: _RadioControlRegistry.\u0275fac,
  providedIn: RadioControlRegistryModule
});
var RadioControlRegistry = _RadioControlRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: RadioControlRegistryModule
    }]
  }], null, null);
})();
var _RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
};
_RadioControlValueAccessor.\u0275fac = function RadioControlValueAccessor_Factory(t) {
  return new (t || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
};
_RadioControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RadioControlValueAccessor = _RadioControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var _RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_RangeValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RangeValueAccessor_BaseFactory;
  return function RangeValueAccessor_Factory(t) {
    return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
  };
})();
_RangeValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RangeValueAccessor = _RangeValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken("NgModelWithFormControlWarning");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var _FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
};
_FormControlDirective._ngModelWarningSentOnce = false;
_FormControlDirective.\u0275fac = function FormControlDirective_Factory(t) {
  return new (t || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormControlDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    form: ["formControl", "form"],
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
};
_FormGroupDirective.\u0275fac = function FormGroupDirective_Factory(t) {
  return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: ["formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormGroupDirective = _FormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
};
_FormGroupName.\u0275fac = function FormGroupName_Factory(t) {
  return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormGroupName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: ["formGroupName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormGroupName = _FormGroupName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var _FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
};
_FormArrayName.\u0275fac = function FormArrayName_Factory(t) {
  return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormArrayName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: ["formArrayName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormArrayName = _FormArrayName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var _FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
};
_FormControlName._ngModelWarningSentOnce = false;
_FormControlName.\u0275fac = function FormControlName_Factory(t) {
  return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};
_FormControlName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    name: ["formControlName", "name"],
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlName = _FormControlName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
};
_SelectControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectControlValueAccessor_BaseFactory;
  return function SelectControlValueAccessor_Factory(t) {
    return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
  };
})();
_SelectControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectControlValueAccessor = _SelectControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_NgSelectOption.\u0275fac = function NgSelectOption_Factory(t) {
  return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
};
_NgSelectOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var NgSelectOption = _NgSelectOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
};
_SelectMultipleControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectMultipleControlValueAccessor_BaseFactory;
  return function SelectMultipleControlValueAccessor_Factory(t) {
    return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
  };
})();
_SelectMultipleControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectMultipleControlValueAccessor = _SelectMultipleControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _\u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_\u0275NgSelectMultipleOption.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
  return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
};
_\u0275NgSelectMultipleOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var \u0275NgSelectMultipleOption = _\u0275NgSelectMultipleOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var _AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
};
_AbstractValidatorDirective.\u0275fac = function AbstractValidatorDirective_Factory(t) {
  return new (t || _AbstractValidatorDirective)();
};
_AbstractValidatorDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractValidatorDirective,
  features: [\u0275\u0275NgOnChangesFeature]
});
var AbstractValidatorDirective = _AbstractValidatorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var _MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
};
_MaxValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxValidator_BaseFactory;
  return function MaxValidator_Factory(t) {
    return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(t || _MaxValidator);
  };
})();
_MaxValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxValidator,
  selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxValidator = _MaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var _MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
};
_MinValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinValidator_BaseFactory;
  return function MinValidator_Factory(t) {
    return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(t || _MinValidator);
  };
})();
_MinValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinValidator,
  selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinValidator = _MinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var _RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_RequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RequiredValidator_BaseFactory;
  return function RequiredValidator_Factory(t) {
    return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
  };
})();
_RequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var RequiredValidator = _RequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var _CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
};
_CheckboxRequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxRequiredValidator_BaseFactory;
  return function CheckboxRequiredValidator_Factory(t) {
    return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
  };
})();
_CheckboxRequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxRequiredValidator = _CheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var _EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_EmailValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmailValidator_BaseFactory;
  return function EmailValidator_Factory(t) {
    return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(t || _EmailValidator);
  };
})();
_EmailValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var EmailValidator = _EmailValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var _MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
};
_MinLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinLengthValidator_BaseFactory;
  return function MinLengthValidator_Factory(t) {
    return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
  };
})();
_MinLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinLengthValidator = _MinLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var _MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
};
_MaxLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxLengthValidator_BaseFactory;
  return function MaxLengthValidator_Factory(t) {
    return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
  };
})();
_MaxLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxLengthValidator = _MaxLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var _PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
};
_PatternValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PatternValidator_BaseFactory;
  return function PatternValidator_Factory(t) {
    return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(t || _PatternValidator);
  };
})();
_PatternValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var PatternValidator = _PatternValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var _\u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
};
_\u0275InternalFormsSharedModule.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
  return new (t || _\u0275InternalFormsSharedModule)();
};
_\u0275InternalFormsSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _\u0275InternalFormsSharedModule
});
_\u0275InternalFormsSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [RadioControlRegistryModule]
});
var \u0275InternalFormsSharedModule = _\u0275InternalFormsSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      imports: [RadioControlRegistryModule],
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var _FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
};
_FormBuilder.\u0275fac = function FormBuilder_Factory(t) {
  return new (t || _FormBuilder)();
};
_FormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FormBuilder,
  factory: _FormBuilder.\u0275fac,
  providedIn: "root"
});
var FormBuilder = _FormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NonNullableFormBuilder = class _NonNullableFormBuilder {
};
_NonNullableFormBuilder.\u0275fac = function NonNullableFormBuilder_Factory(t) {
  return new (t || _NonNullableFormBuilder)();
};
_NonNullableFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NonNullableFormBuilder,
  factory: () => (() => inject(FormBuilder).nonNullable)(),
  providedIn: "root"
});
var NonNullableFormBuilder = _NonNullableFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var _UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
};
_UntypedFormBuilder.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UntypedFormBuilder_BaseFactory;
  return function UntypedFormBuilder_Factory(t) {
    return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
  };
})();
_UntypedFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UntypedFormBuilder,
  factory: _UntypedFormBuilder.\u0275fac,
  providedIn: "root"
});
var UntypedFormBuilder = _UntypedFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.0.8");
var _FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_FormsModule.\u0275fac = function FormsModule_Factory(t) {
  return new (t || _FormsModule)();
};
_FormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _FormsModule
});
_FormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var FormsModule = _FormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var _ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_ReactiveFormsModule.\u0275fac = function ReactiveFormsModule_Factory(t) {
  return new (t || _ReactiveFormsModule)();
};
_ReactiveFormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReactiveFormsModule
});
_ReactiveFormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var ReactiveFormsModule = _ReactiveFormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/core/controls/fxch-input/providers/fxch-input-classes.provider.ts
var _FxchInputClassesProvider = class _FxchInputClassesProvider {
  getInputWrapperAppearanceTypeClass(appearanceType) {
    return `fxch-input-wrap--${appearanceType}`;
  }
  getInputWrapperColorClass(color) {
    return `fxch-input-wrap--${color}`;
  }
  getInputWrapperPrefixClass(iconName) {
    return iconName != null && iconName !== "" ? "fxch-input-wrap--prefix" : "";
  }
  getInputWrapperLargeClass(large) {
    return large ? "fxch-input-wrap--large" : "";
  }
  getInputWrapperClearClass(clearAllowed) {
    return clearAllowed ? "fxch-input-wrap--clear" : "";
  }
  getInputWrapperLabelClass(label) {
    return label != null && label !== "" ? "fxch-input-wrap--label" : "";
  }
  getInputWrapperErrorClass(canShowError) {
    return canShowError ? "fxch-input-wrap--error" : "";
  }
  getInputWrapperFocusClass(focused) {
    return focused ? "fxch-input-wrap--focus" : "";
  }
  getInputWrapperDisabledClass(disabled) {
    return disabled ? "fxch-disabled" : "";
  }
  getInputWrapperReadonlyClass(readonly) {
    return readonly ? "fxch-input-wrap--readonly" : "";
  }
  getInputWrapperActionClass(actionClass, actionTrigger) {
    return actionClass != null && actionClass !== "" && (actionTrigger == null || actionTrigger) ? actionClass : "";
  }
  getInputWrapperCustomClass(customClass) {
    return customClass != null && customClass !== "" ? customClass : "";
  }
  getInputHintTextClass(hint) {
    return hint != null && hint.text != null && hint.text !== "" ? "fxch-input-hint--text" : "";
  }
  getInputHintErrorClass(canShowError) {
    return canShowError ? "fxch-input-hint--error" : "";
  }
  getInputHintCounterClass(hint) {
    return hint != null && hint.maxLength != null && hint.maxLength !== 0 ? "fxch-input-hint--counter" : "";
  }
  getErrorMessageClass(canShowError, errorCode, maxLengthHint) {
    return maxLengthHint != null && maxLengthHint !== 0 && canShowError && errorCode === _FxchInputClassesProvider.maxLengthErrorCode ? "fxch-error-msg" : "";
  }
  getNotEmptyClass(value) {
    return !!value ? "fxch-input-wrap--not-empty" : "";
  }
};
_FxchInputClassesProvider.maxLengthErrorCode = "maxlength";
_FxchInputClassesProvider.\u0275fac = function FxchInputClassesProvider_Factory(t) {
  return new (t || _FxchInputClassesProvider)();
};
_FxchInputClassesProvider.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchInputClassesProvider, factory: _FxchInputClassesProvider.\u0275fac, providedIn: "root" });
var FxchInputClassesProvider = _FxchInputClassesProvider;

// src/app/core/controls/fxch-input/fxch-input.component.ts
function FxchInputComponent_fxch_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fxch-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("iconName", ctx_r0.iconName);
  }
}
function FxchInputComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function FxchInputComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275listener("click", function FxchInputComponent_span_4_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onClear($event));
    });
    \u0275\u0275element(1, "fxch-icon", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("iconName", "close");
  }
}
function FxchInputComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx_r6.hint.text, " ");
  }
}
function FxchInputComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r7.inputHintCounterCustomClasses);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate2(" ", ctx_r7.currentValueLength, "/", ctx_r7.hint.maxLength, " ");
  }
}
function FxchInputComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx_r8.error == null ? null : ctx_r8.error.message, " ");
  }
}
function FxchInputComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, FxchInputComponent_div_5_div_1_Template, 2, 1, "div", 12)(2, FxchInputComponent_div_5_div_2_Template, 2, 4, "div", 13)(3, FxchInputComponent_div_5_div_3_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r3.inputHintCustomClasses);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r3.hint != null && ctx_r3.hint.text != null && ctx_r3.hint.text !== "");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r3.hint != null && ctx_r3.hint.maxLength != null && ctx_r3.hint.maxLength > 0);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r3.canShowError());
  }
}
var _FxchInputComponent = class _FxchInputComponent {
  constructor(fxchInputClassesProvider) {
    this.fxchInputClassesProvider = fxchInputClassesProvider;
    this.type = "text";
    this.value = "";
    this.label = "";
    this.name = "";
    this.customClass = "";
    this.appearanceType = "fill";
    this.large = false;
    this.color = "default";
    this.disabled = false;
    this.readonly = false;
    this.clearAllowed = false;
    this.validateOnInitialization = false;
    this.validators = [];
    this.changed = new EventEmitter();
    this.validated = new EventEmitter();
    this.error = null;
    this.focused = false;
  }
  ngOnInit() {
    const validators = this.validators?.filter((validationItem) => validationItem.validator != null).map((validationItem) => validationItem.validator) ?? [];
    this.formControl = new FormControl(this.value, validators);
    this.formGroup?.setControl(this.name, this.formControl);
    this.formGroup?.updateValueAndValidity();
    if (this.validateOnInitialization) {
      this.formControl.markAsDirty();
      this.setFormError();
    }
    this.disableControl(this.disabled);
  }
  ngOnChanges(changes) {
    if (changes.value != null && !changes.value.isFirstChange()) {
      this.formControl.setValue(changes.value.currentValue);
      this.setFormError();
    }
    if (changes.disabled != null) {
      this.disableControl(changes.disabled.currentValue);
    }
  }
  get currentValueLength() {
    return this.formControl != null && this.formControl.value != null && this.formControl.value !== "" ? this.formControl.value.length : 0;
  }
  get inputWrapperCustomClasses() {
    return [
      this.fxchInputClassesProvider.getInputWrapperAppearanceTypeClass(this.appearanceType),
      this.fxchInputClassesProvider.getInputWrapperColorClass(this.color),
      this.fxchInputClassesProvider.getInputWrapperPrefixClass(this.iconName),
      this.fxchInputClassesProvider.getInputWrapperLargeClass(this.large),
      this.fxchInputClassesProvider.getInputWrapperClearClass(this.clearAllowed),
      this.fxchInputClassesProvider.getInputWrapperLabelClass(this.label),
      this.fxchInputClassesProvider.getInputWrapperErrorClass(this.canShowError()),
      this.fxchInputClassesProvider.getInputWrapperFocusClass(this.focused),
      this.fxchInputClassesProvider.getInputWrapperDisabledClass(this.disabled),
      this.fxchInputClassesProvider.getInputWrapperReadonlyClass(this.readonly),
      this.fxchInputClassesProvider.getInputWrapperActionClass(this.actionClass, this.actionTrigger),
      this.fxchInputClassesProvider.getInputWrapperCustomClass(this.customClass),
      this.fxchInputClassesProvider.getNotEmptyClass(this.formControl.value)
    ];
  }
  get inputHintCustomClasses() {
    return [
      this.fxchInputClassesProvider.getInputHintTextClass(this.hint),
      this.fxchInputClassesProvider.getInputHintErrorClass(this.canShowError()),
      this.fxchInputClassesProvider.getInputHintCounterClass(this.hint)
    ];
  }
  get inputHintCounterCustomClasses() {
    return [
      this.fxchInputClassesProvider.getErrorMessageClass(this.canShowError(), this.error?.code, this.hint?.maxLength)
    ];
  }
  canShowError() {
    const hasFormData = this.hasFormData();
    return this.error != null && (!hasFormData || hasFormData && this.formControl.dirty);
  }
  onInput() {
    this.setFormError();
    this.changed.emit(this.formControl.value);
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.formControl.markAsDirty();
    this.setFormError();
  }
  onClear($event) {
    if (this.hasFormData()) {
      this.formControl.markAsPristine();
    }
    this.formControl.setValue("");
    this.onInput();
    $event.stopPropagation();
    $event.preventDefault();
  }
  hasFormData() {
    return this.formGroup != null && this.name != null && this.name !== "";
  }
  setFormError() {
    if (this.formControl.errors == null) {
      this.error = null;
      this.validated.emit(true);
      return;
    }
    const validator = this.validators.find((validator2) => validator2.showError(this.formControl));
    this.error = validator != null ? { code: validator.errorCode, message: validator.message } : null;
    this.validated.emit(this.error == null);
  }
  disableControl(disabled) {
    if (this.formControl == null) {
      return;
    }
    disabled ? this.formControl.disable() : this.formControl.enable();
  }
};
_FxchInputComponent.\u0275fac = function FxchInputComponent_Factory(t) {
  return new (t || _FxchInputComponent)(\u0275\u0275directiveInject(FxchInputClassesProvider));
};
_FxchInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FxchInputComponent, selectors: [["fxch-input"]], inputs: { type: "type", value: "value", placeholder: "placeholder", label: "label", formGroup: "formGroup", name: "name", iconName: "iconName", actionClass: "actionClass", actionTrigger: "actionTrigger", customClass: "customClass", appearanceType: "appearanceType", large: "large", color: "color", disabled: "disabled", readonly: "readonly", autocomplete: "autocomplete", clearAllowed: "clearAllowed", validateOnInitialization: "validateOnInitialization", hint: "hint", validators: "validators" }, outputs: { changed: "changed", validated: "validated" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 6, vars: 13, consts: [[1, "fxch-input-wrap"], ["class", "fxch-input-icon", 3, "iconName", 4, "ngIf"], [1, "fxch-input", 3, "type", "formControl", "disabled", "readonly", "placeholder", "name", "autocomplete", "input", "focus", "blur"], ["class", "fxch-input-label", 4, "ngIf"], ["class", "fxch-input-clear", 3, "click", 4, "ngIf"], ["class", "fxch-input-hint", 3, "class", 4, "ngIf"], [1, "fxch-input-icon", 3, "iconName"], [1, "fxch-input-label"], [1, "fxch-input-label-text"], [1, "fxch-input-clear", 3, "click"], [1, "fxch-input-clear-icon", 3, "iconName"], [1, "fxch-input-hint"], ["class", "fxch-input-hint-text", 4, "ngIf"], ["class", "fxch-input-hint-counter", 3, "class", 4, "ngIf"], ["class", "fxch-input-error fxch-error-msg", 4, "ngIf"], [1, "fxch-input-hint-text"], [1, "fxch-input-hint-counter"], [1, "fxch-input-error", "fxch-error-msg"]], template: function FxchInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 0);
    \u0275\u0275template(1, FxchInputComponent_fxch_icon_1_Template, 1, 1, "fxch-icon", 1);
    \u0275\u0275elementStart(2, "input", 2);
    \u0275\u0275listener("input", function FxchInputComponent_Template_input_input_2_listener() {
      return ctx.onInput();
    })("focus", function FxchInputComponent_Template_input_focus_2_listener() {
      return ctx.onFocus();
    })("blur", function FxchInputComponent_Template_input_blur_2_listener() {
      return ctx.onBlur();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FxchInputComponent_span_3_Template, 3, 1, "span", 3)(4, FxchInputComponent_span_4_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FxchInputComponent_div_5_Template, 4, 5, "div", 5);
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.inputWrapperCustomClasses);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.iconName != null && ctx.iconName !== "");
    \u0275\u0275advance(1);
    \u0275\u0275property("type", ctx.type)("formControl", ctx.formControl)("disabled", ctx.disabled)("readonly", ctx.readonly)("placeholder", ctx.placeholder)("name", ctx.name)("autocomplete", ctx.autocomplete);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.label != null && ctx.label !== "");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.clearAllowed && !!ctx.formControl.value && ctx.currentValueLength);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.hint != null || ctx.canShowError());
  }
}, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, ReactiveFormsModule, FormControlDirective, FxchIconComponent], styles: ['\n\n.fxch-input[_ngcontent-%COMP%] {\n  grid-area: input;\n  border: none;\n  background-color: transparent !important;\n  padding: 0;\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  outline: none !important;\n}\n.fxch-input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: var(--font-global);\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  opacity: 1;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-family: var(--font-global);\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  opacity: 1;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-input[_ngcontent-%COMP%]::-ms-expand {\n  font-family: var(--font-global);\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  opacity: 1;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-family: var(--font-global);\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  opacity: 1;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-input.ng-invalid[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.fxch-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-areas: "input";\n  column-gap: 12px;\n  align-items: center;\n  padding: 7px 27px;\n  height: 44px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 12px;\n  min-width: 100px;\n  width: 100%;\n  font-weight: 400;\n  margin-bottom: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: 0 !important;\n  transition:\n    color 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    border-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    color,\n    background-color,\n    border-color;\n}\n.fxch-input-wrap--large[_ngcontent-%COMP%] {\n  height: 68px;\n  padding: 14px 27px;\n}\n.fxch-input-wrap--large[_ngcontent-%COMP%]   .fxch-input-label[_ngcontent-%COMP%] {\n  display: flex;\n}\n.fxch-input-wrap--outline[_ngcontent-%COMP%]   .fxch-input-label[_ngcontent-%COMP%] {\n  top: 0;\n  transform: translateY(-50%);\n}\n.fxch-input-wrap--outline[_ngcontent-%COMP%]   .fxch-input-label-text[_ngcontent-%COMP%] {\n  padding: 0 2px;\n}\n.fxch-input-wrap--fill.fxch-input-wrap--prefix[_ngcontent-%COMP%]   .fxch-input-label[_ngcontent-%COMP%] {\n  left: 37px;\n}\n.fxch-input-wrap--fill.fxch-input-wrap--large.fxch-input-wrap--label[_ngcontent-%COMP%]   .fxch-input[_ngcontent-%COMP%] {\n  line-height: 20px;\n  transform: translateY(6px);\n}\n.fxch-input-wrap--fill.fxch-input-wrap--large.fxch-input-wrap--label[_ngcontent-%COMP%]   .fxch-input[_ngcontent-%COMP%]::-moz-placeholder {\n  line-height: 20px;\n}\n.fxch-input-wrap--fill.fxch-input-wrap--large.fxch-input-wrap--label[_ngcontent-%COMP%]   .fxch-input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  line-height: 20px;\n}\n.fxch-input-wrap--fill.fxch-input-wrap--large.fxch-input-wrap--label[_ngcontent-%COMP%]   .fxch-input[_ngcontent-%COMP%]::-ms-expand {\n  line-height: 20px;\n}\n.fxch-input-wrap--fill.fxch-input-wrap--large.fxch-input-wrap--label[_ngcontent-%COMP%]   .fxch-input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  line-height: 20px;\n}\n.fxch-input-wrap--fill.fxch-input-wrap--large.fxch-input-wrap--clear[_ngcontent-%COMP%]   .fxch-input-label[_ngcontent-%COMP%] {\n  right: 37px;\n}\n.fxch-input-wrap--fill[_ngcontent-%COMP%]   .fxch-input-label[_ngcontent-%COMP%] {\n  top: 0px;\n}\n.fxch-input-wrap--clear[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) 24px;\n  grid-template-areas: "input clear";\n}\n.fxch-input-wrap--prefix[_ngcontent-%COMP%] {\n  grid-template-columns: 24px minmax(0, 1fr);\n  grid-template-areas: "prefix input";\n}\n.fxch-input-wrap--prefix.fxch-input-wrap--clear[_ngcontent-%COMP%] {\n  grid-template-columns: 24px minmax(0, 1fr) 24px;\n  grid-template-areas: "prefix input clear";\n}\n.fxch-input-wrap.fxch-disabled[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.fxch-input-wrap.fxch-disabled[_ngcontent-%COMP%]   .fxch-input[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.fxch-input-wrap.fxch-disabled[_ngcontent-%COMP%]   .fxch-input-clear[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.fxch-input-wrap.fxch-input-wrap--empty[_ngcontent-%COMP%]   .fxch-input-clear[_ngcontent-%COMP%], .fxch-input-wrap.fxch-input-wrap--readonly[_ngcontent-%COMP%]   .fxch-input-clear[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.fxch-input-label[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: flex-start;\n  align-items: center;\n  position: absolute;\n  left: 13px;\n  right: 13px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-input-label-text[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.fxch-input-icon[_ngcontent-%COMP%] {\n  grid-area: prefix;\n  display: block;\n  font-size: 24px;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-input-clear[_ngcontent-%COMP%] {\n  grid-area: clear;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  opacity: 1;\n  cursor: pointer;\n  transition:\n    opacity 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    opacity,\n    background-color,\n    color;\n}\n.fxch-input-clear-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n}\n.fxch-input-hint[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  column-gap: 5px;\n  padding: 2px 8px 0;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n}\n.fxch-input-hint--error[_ngcontent-%COMP%] {\n  grid-template-areas: "error";\n}\n.fxch-input-hint--error.fxch-input-hint--counter[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  grid-template-areas: "error counter";\n}\n.fxch-input-hint--error.fxch-input-hint--text[_ngcontent-%COMP%] {\n  grid-template-areas: "hint" "error";\n}\n.fxch-input-hint--error.fxch-input-hint--text.fxch-input-hint--counter[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) 50px;\n  grid-template-areas: "hint counter" "error error";\n}\n.fxch-input-hint--text[_ngcontent-%COMP%] {\n  grid-template-areas: "hint";\n}\n.fxch-input-hint--counter[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  grid-template-areas: ". counter";\n}\n.fxch-input-hint--counter.fxch-input-hint--text[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  grid-template-areas: "hint counter";\n}\n.fxch-input-hint-counter[_ngcontent-%COMP%] {\n  grid-area: counter;\n}\n.fxch-input-hint-text[_ngcontent-%COMP%] {\n  grid-area: hint;\n}\n.fxch-input-error[_ngcontent-%COMP%] {\n  grid-area: error;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb3JlL2NvbnRyb2xzL2Z4Y2gtaW5wdXQvZnhjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi90eXBvZ3JhcGh5Lm1peGluLnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi8uLi8uLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLWlucHV0IHtcclxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC1sZ1wiKTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWdsb2JhbCk7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LWxnXCIpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWdsb2JhbCk7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LWxnXCIpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjo6LW1zLWV4cGFuZCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZ2xvYmFsKTtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQtbGdcIik7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogY29sb3I7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1nbG9iYWwpO1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC1sZ1wiKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiBjb2xvcjtcclxuICAgIH1cclxuICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImlucHV0XCI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMTJweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAyN3B4O1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgY29sb3IgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSksXHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjtcclxuICAgICAgICAmLS1sYXJnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjhweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTRweCAyN3B4O1xyXG4gICAgICAgICAgICAuZnhjaC1pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtLW91dGxpbmUge1xyXG4gICAgICAgICAgICAuZnhjaC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAmLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1maWxsIHtcclxuICAgICAgICAgICAgJi5meGNoLWlucHV0LXdyYXAge1xyXG4gICAgICAgICAgICAgICAgJi0tcHJlZml4IHtcclxuICAgICAgICAgICAgICAgICAgICAuZnhjaC1pbnB1dC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi0tbGFyZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICYuZnhjaC1pbnB1dC13cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi0tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ4Y2gtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6LW1zLWV4cGFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYtLWNsZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5meGNoLWlucHV0LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZnhjaC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAmLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1jbGVhciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMjRweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbnB1dCBjbGVhclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1wcmVmaXgge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggbWlubWF4KDAsIDFmcik7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicHJlZml4IGlucHV0XCI7XHJcbiAgICAgICAgICAgICYuZnhjaC1pbnB1dC13cmFwIHtcclxuICAgICAgICAgICAgICAgICYtLWNsZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggbWlubWF4KDAsIDFmcikgMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInByZWZpeCBpbnB1dCBjbGVhclwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZnhjaC1kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgLmZ4Y2gtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmLWNsZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZnhjaC1pbnB1dC13cmFwIHtcclxuICAgICAgICAgICAgJi0tZW1wdHksXHJcbiAgICAgICAgICAgICYtLXJlYWRvbmx5IHtcclxuICAgICAgICAgICAgICAgIC5meGNoLWlucHV0LWNsZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTNweDtcclxuICAgICAgICByaWdodDogMTNweDtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQteHNcIik7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IGNvbG9yO1xyXG4gICAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtaWNvbiB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBwcmVmaXg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiBjb2xvcjtcclxuICAgIH1cclxuICAgICYtY2xlYXIge1xyXG4gICAgICAgIGdyaWQtYXJlYTogY2xlYXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICBvcGFjaXR5IC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICBjb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvciwgY29sb3I7XHJcbiAgICAgICAgJi1pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWhpbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggOHB4IDA7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXhzXCIpO1xyXG4gICAgICAgICYtLWVycm9yIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJlcnJvclwiO1xyXG4gICAgICAgICAgICAmLmZ4Y2gtaW5wdXQtaGludCB7XHJcbiAgICAgICAgICAgICAgICAmLS1jb3VudGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJlcnJvciBjb3VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLS10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhpbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5meGNoLWlucHV0LWhpbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLS1jb3VudGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaW50IGNvdW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3IgZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLS10ZXh0IHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoaW50XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtLWNvdW50ZXIge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBjb3VudGVyXCI7XHJcbiAgICAgICAgICAgICYuZnhjaC1pbnB1dC1oaW50IHtcclxuICAgICAgICAgICAgICAgICYtLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhpbnQgY291bnRlclwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY291bnRlciB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogY291bnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBoaW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtZXJyb3Ige1xyXG4gICAgICAgIGdyaWQtYXJlYTogZXJyb3I7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXhzXCIpO1xyXG4gICAgfVxyXG59IiwgIkBtaXhpbiBmb250LXN0eWxlcygkdHlwb2dyYXBoeSkge1xyXG4gICAgQGlmICgkdHlwb2dyYXBoeSA9PSAnaDEnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDI3OXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gyJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLW1kJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXNtJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwteHMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14bCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1sZycpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXNtJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhzJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxhQUFBO0FBQ0EsVUFBQTtBQUNBLG9CQUFBO0FBQ0EsV0FBQTtBQzJDSSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7QUQzQ0osV0FBQTs7QUFDQSxDQVBKLFVBT0k7QUFDSSxlQUFBLElBQUE7QUN1Q0EsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FEdkNBLFdBQUE7QUFDQSxjQUFBLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFFSixDQWRKLFVBY0k7QUFDSSxlQUFBLElBQUE7QUNnQ0EsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FEaENBLFdBQUE7QUFDQSxjQUFBLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFFSixDQXJCSixVQXFCSTtBQUNJLGVBQUEsSUFBQTtBQ3lCQSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7QUR6QkEsV0FBQTtBQUNBLGNBQUEsTUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQSxlQUFBOztBQUVKLENBNUJKLFVBNEJJO0FBQ0ksZUFBQSxJQUFBO0FDa0JBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTtBRGxCQSxXQUFBO0FBQ0EsY0FBQSxNQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBLGVBQUE7O0FBRUosQ0FuQ0osVUFtQ0ksQ0FBQTtBQUNJLFVBQUE7O0FBRUosQ0FBQTtBQUNJLFlBQUE7QUFDQSxXQUFBO0FBQ0EseUJBQUE7QUFDQSx1QkFBQTtBQUNBLGNBQUE7QUFDQSxlQUFBO0FBQ0EsV0FBQSxJQUFBO0FBQ0EsVUFBQTtBQUNBLGdCQUFBO0FBQ0EsZ0JBQUE7QUFDQSxpQkFBQTtBQUNBLGFBQUE7QUFDQSxTQUFBO0FBQ0EsZUFBQTtBQUNBLGlCQUFBO0FBQ0EsVUFBQTtBQUNBLHVCQUFBO0FBQUEsZUFBQTtBQUNBLFdBQUE7QUFDQTtJQUNJLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxpQkFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLGFBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBR0o7SUFBQSxLQUFBO0lBQUEsZ0JBQUE7SUFBQTs7QUFDQSxDQUFBO0FBQ0ksVUFBQTtBQUNBLFdBQUEsS0FBQTs7QUFDQSxDQUhKLHVCQUdJLENBQUE7QUFDSSxXQUFBOztBQUtBLENBQUEseUJBQUEsQ0FOSjtBQU9RLE9BQUE7QUFDQSxhQUFBLFdBQUE7O0FBQ0EsQ0FISix5QkFHSSxDQUFBO0FBQ0ksV0FBQSxFQUFBOztBQVFKLENBQUEscUJBQUEsQ0FBQSx3QkFBQSxDQWxCUjtBQW1CWSxRQUFBOztBQU1JLENBUFIscUJBT1EsQ0E1QnBCLHNCQTRCb0IsQ0FBQSx1QkFBQSxDQTFGNUI7QUEyRmdDLGVBQUE7QUFDQSxhQUFBLFdBQUE7O0FBQ0EsQ0FWWixxQkFVWSxDQS9CeEIsc0JBK0J3QixDQUhKLHVCQUdJLENBN0ZoQyxVQTZGZ0M7QUFDSSxlQUFBOztBQUVKLENBYloscUJBYVksQ0FsQ3hCLHNCQWtDd0IsQ0FOSix1QkFNSSxDQWhHaEMsVUFnR2dDO0FBQ0ksZUFBQTs7QUFFSixDQWhCWixxQkFnQlksQ0FyQ3hCLHNCQXFDd0IsQ0FUSix1QkFTSSxDQW5HaEMsVUFtR2dDO0FBQ0ksZUFBQTs7QUFFSixDQW5CWixxQkFtQlksQ0F4Q3hCLHNCQXdDd0IsQ0FaSix1QkFZSSxDQXRHaEMsVUFzR2dDO0FBQ0ksZUFBQTs7QUFLUixDQXpCUixxQkF5QlEsQ0E5Q3BCLHNCQThDb0IsQ0FBQSx1QkFBQSxDQTNDaEI7QUE0Q29CLFNBQUE7O0FBT2hCLENBakNJLHNCQWlDSixDQW5ESjtBQW9EUSxPQUFBOztBQUlaLENBYm9CO0FBY2hCLHlCQUFBLE9BQUEsQ0FBQSxFQUFBLEtBQUE7QUFDQSx1QkFBQTs7QUFFSixDQTFDWTtBQTJDUix5QkFBQSxLQUFBLE9BQUEsQ0FBQSxFQUFBO0FBQ0EsdUJBQUE7O0FBRUksQ0E5Q0ksdUJBOENKLENBckJZO0FBc0JSLHlCQUFBLEtBQUEsT0FBQSxDQUFBLEVBQUEsS0FBQTtBQUNBLHVCQUFBOztBQUlaLENBakdKLGVBaUdJLENBQUE7QUFDSSxVQUFBOztBQUNBLENBbkdSLGVBbUdRLENBRkosY0FFSSxDQXpJWjtBQTBJZ0Isa0JBQUE7O0FBQ0EsQ0FyR1osZUFxR1ksQ0FKUixjQUlRLENBQUE7QUFDSSxXQUFBO0FBQ0Esa0JBQUE7O0FBT0osQ0E5R1osZUE4R1ksQ0FBQSx1QkFBQSxDQVRBO0FBU0EsQ0E5R1osZUE4R1ksQ0FBQSwwQkFBQSxDQVRBO0FBVUksV0FBQTtBQUNBLGtCQUFBOztBQUtoQixDQTFGUTtBQTJGSixXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsWUFBQTtBQUNBLFFBQUE7QUFDQSxTQUFBO0FDeEdBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTtBRHdHQSxjQUFBLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFDQSxDQTNGWTtBQTRGUixXQUFBO0FBQ0EsYUFBQTtBQUNBLGlCQUFBO0FBQ0EsWUFBQTtBQUNBLGVBQUE7O0FBR1IsQ0FBQTtBQUNJLGFBQUE7QUFDQSxXQUFBO0FBQ0EsYUFBQTtBQUNBLGNBQUEsTUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQSxlQUFBOztBQUVKLENBekNZO0FBMENSLGFBQUE7QUFDQSxXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsYUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsaUJBQUE7QUFDQSxXQUFBO0FBQ0EsVUFBQTtBQUNBO0lBQ0ksUUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsRUFBQTtJQUFBLGlCQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsTUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFHSjtJQUFBLE9BQUE7SUFBQSxnQkFBQTtJQUFBOztBQUNBLENBQUE7QUFDSSxXQUFBO0FBQ0EsYUFBQTs7QUFHUixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBO0FBQ0EsY0FBQTtBQUNBLFdBQUEsSUFBQSxJQUFBO0FDcEpBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTs7QURvSkEsQ0FBQTtBQUNJLHVCQUFBOztBQUVJLENBSFIsc0JBR1EsQ0FBQTtBQUNJLHlCQUFBLE9BQUEsQ0FBQSxFQUFBLEtBQUE7QUFDQSx1QkFBQTs7QUFFSixDQVBSLHNCQU9RLENBQUE7QUFDSSx1QkFDSSxPQUFBOztBQUdBLENBWmhCLHNCQVlnQixDQUxSLHFCQUtRLENBVFI7QUFVWSx5QkFBQSxPQUFBLENBQUEsRUFBQSxLQUFBO0FBQ0EsdUJBQ0ksZUFBQTs7QUFPeEIsQ0FmUTtBQWdCSix1QkFBQTs7QUFFSixDQXRCUTtBQXVCSix5QkFBQSxPQUFBLENBQUEsRUFBQSxLQUFBO0FBQ0EsdUJBQUE7O0FBRUksQ0ExQkEsd0JBMEJBLENBdEJBO0FBdUJJLHlCQUFBLE9BQUEsQ0FBQSxFQUFBLEtBQUE7QUFDQSx1QkFBQTs7QUFJWixDQUFBO0FBQ0ksYUFBQTs7QUFFSixDQUFBO0FBQ0ksYUFBQTs7QUFHUixDQUFBO0FBQ0ksYUFBQTtBQ2pNQSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */'], changeDetection: 0 });
var FxchInputComponent = _FxchInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FxchInputComponent, { className: "FxchInputComponent", filePath: "src\\app\\core\\controls\\fxch-input\\fxch-input.component.ts", lineNumber: 26 });
})();

// src/app/core/controls/fxch-textarea/providers/fxch-textarea-classes.provider.ts
var _FxchTextAreaClassesProvider = class _FxchTextAreaClassesProvider {
  getTextAreaWrapperAppearanceTypeClass(appearanceType) {
    return `fxch-textarea-wrap--${appearanceType}`;
  }
  getTextAreaWrapperColorClass(color) {
    return `fxch-textarea-wrap--${color}`;
  }
  getTextAreaWrapperPrefixClass(iconName) {
    return iconName != null && iconName !== "" ? "fxch-textarea-wrap--prefix" : "";
  }
  getTextAreaWrapperLargeClass(large) {
    return large ? "fxch-textarea-wrap--large" : "";
  }
  getTextAreaWrapperClearClass(clearAllowed) {
    return clearAllowed ? "fxch-textarea-wrap--clear" : "";
  }
  getTextAreaWrapperInfoClass(infoTemplate) {
    return infoTemplate != null ? "fxch-textarea-wrap--info" : "";
  }
  getTextAreaWrapperLabelClass(label) {
    return label != null && label !== "" ? "fxch-textarea-wrap--label" : "";
  }
  getTextAreaWrapperErrorClass(canShowError) {
    return canShowError ? "fxch-textarea-wrap--error" : "";
  }
  getTextAreaWrapperFocusClass(focused) {
    return focused ? "fxch-textarea-wrap--focus" : "";
  }
  getTextAreaWrapperDisabledClass(disabled) {
    return disabled ? "fxch-disabled" : "";
  }
  getTextAreaWrapperReadonlyClass(readonly) {
    return readonly ? "fxch-textarea-wrap--readonly" : "";
  }
  getTextAreaWrapperActionClass(actionClass, actionTrigger) {
    return actionClass != null && actionClass !== "" && (actionTrigger == null || actionTrigger) ? actionClass : "";
  }
  getTextAreaWrapperCustomClass(customClass) {
    return customClass != null && customClass !== "" ? customClass : "";
  }
  getTextAreaHintTextClass(hint) {
    return hint != null && hint.text != null && hint.text !== "" ? "fxch-textarea-hint--text" : "";
  }
  getTextAreaHintErrorClass(canShowError) {
    return canShowError ? "fxch-textarea-hint--error" : "";
  }
  getTextAreaHintCounterClass(hint) {
    return hint != null && hint.maxLength != null && hint.maxLength !== 0 ? "fxch-textarea-hint--counter" : "";
  }
  getErrorMessageClass(canShowError, errorCode, maxLengthHint) {
    return maxLengthHint != null && maxLengthHint !== 0 && canShowError && errorCode === _FxchTextAreaClassesProvider.maxLengthErrorCode ? "fxch-error-msg" : "";
  }
  getNotEmptyClass(value) {
    return !!value ? "fxch-textarea-wrap--not-empty" : "";
  }
};
_FxchTextAreaClassesProvider.maxLengthErrorCode = "maxlength";
_FxchTextAreaClassesProvider.\u0275fac = function FxchTextAreaClassesProvider_Factory(t) {
  return new (t || _FxchTextAreaClassesProvider)();
};
_FxchTextAreaClassesProvider.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FxchTextAreaClassesProvider, factory: _FxchTextAreaClassesProvider.\u0275fac, providedIn: "root" });
var FxchTextAreaClassesProvider = _FxchTextAreaClassesProvider;

// src/app/core/controls/fxch-textarea/fxch-textarea.component.ts
function FxchTextAreaComponent_fxch_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fxch-icon", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("iconName", ctx_r0.iconName);
  }
}
function FxchTextAreaComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function FxchTextAreaComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx_r3.hint.text, " ");
  }
}
function FxchTextAreaComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r4.textAreaHintCounterCustomClasses);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate2(" ", ctx_r4.currentValueLength, "/", ctx_r4.hint.maxLength, " ");
  }
}
function FxchTextAreaComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(1);
    \u0275\u0275textInterpolate1(" ", ctx_r5.error == null ? null : ctx_r5.error.message, " ");
  }
}
function FxchTextAreaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, FxchTextAreaComponent_div_5_div_1_Template, 2, 1, "div", 9)(2, FxchTextAreaComponent_div_5_div_2_Template, 2, 4, "div", 10)(3, FxchTextAreaComponent_div_5_div_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.textAreaHintCustomClasses);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r2.hint != null && ctx_r2.hint.text != null && ctx_r2.hint.text !== "");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r2.hint != null && ctx_r2.hint.maxLength != null && ctx_r2.hint.maxLength > 0);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx_r2.canShowError());
  }
}
var _FxchTextAreaComponent = class _FxchTextAreaComponent {
  constructor(fxchTextAreaClassesProvider) {
    this.fxchTextAreaClassesProvider = fxchTextAreaClassesProvider;
    this.value = "";
    this.label = "";
    this.name = "";
    this.customClass = "";
    this.appearanceType = "fill";
    this.color = "default";
    this.disabled = false;
    this.readonly = false;
    this.rows = 3;
    this.validators = [];
    this.onChanged = new EventEmitter();
    this.onValidated = new EventEmitter();
    this.error = null;
    this.focused = false;
  }
  ngOnInit() {
    const validators = this.validators?.filter((validationItem) => validationItem.validator != null).map((validationItem) => validationItem.validator) ?? [];
    this.formControl = new FormControl(this.value, validators);
    this.formGroup?.setControl(this.name, this.formControl);
    this.formGroup?.updateValueAndValidity();
    this.disableControl(this.disabled);
  }
  ngOnChanges(changes) {
    if (changes.value != null && !changes.value.isFirstChange()) {
      this.formControl.setValue(changes.value.currentValue);
    }
    if (changes.disabled != null) {
      this.disableControl(changes.disabled.currentValue);
    }
  }
  get currentValueLength() {
    return this.formControl != null && this.formControl.value != null && this.formControl.value !== "" ? this.formControl.value.length : 0;
  }
  get textAreaWrapperCustomClasses() {
    return [
      this.fxchTextAreaClassesProvider.getTextAreaWrapperAppearanceTypeClass(this.appearanceType),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperColorClass(this.color),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperPrefixClass(this.iconName),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperLabelClass(this.label),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperErrorClass(this.canShowError()),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperFocusClass(this.focused),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperDisabledClass(this.disabled),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperReadonlyClass(this.readonly),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperActionClass(this.actionClass, this.actionTrigger),
      this.fxchTextAreaClassesProvider.getTextAreaWrapperCustomClass(this.customClass),
      this.fxchTextAreaClassesProvider.getNotEmptyClass(this.formControl.value)
    ];
  }
  get textAreaHintCustomClasses() {
    return [
      this.fxchTextAreaClassesProvider.getTextAreaHintTextClass(this.hint),
      this.fxchTextAreaClassesProvider.getTextAreaHintErrorClass(this.canShowError()),
      this.fxchTextAreaClassesProvider.getTextAreaHintCounterClass(this.hint)
    ];
  }
  get textAreaHintCounterCustomClasses() {
    return [
      this.fxchTextAreaClassesProvider.getErrorMessageClass(this.canShowError(), this.error?.code, this.hint?.maxLength)
    ];
  }
  canShowError() {
    const hasFormData = this.hasFormData();
    return this.error != null && (!hasFormData || hasFormData && this.formControl.dirty);
  }
  onInput() {
    this.setFormError();
    this.onChanged.emit(this.formControl.value);
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.formControl.markAsDirty();
    this.setFormError();
  }
  hasFormData() {
    return this.formGroup != null && this.name != null && this.name !== "";
  }
  setFormError() {
    if (this.formControl.errors == null) {
      this.error = null;
      this.onValidated.emit(true);
      return;
    }
    const validator = this.validators.find((validator2) => validator2.showError(this.formControl));
    this.error = validator != null ? { code: validator.errorCode, message: validator.message } : null;
    this.onValidated.emit(this.error == null);
  }
  disableControl(disabled) {
    if (this.formControl == null) {
      return;
    }
    disabled ? this.formControl.disable() : this.formControl.enable();
  }
};
_FxchTextAreaComponent.\u0275fac = function FxchTextAreaComponent_Factory(t) {
  return new (t || _FxchTextAreaComponent)(\u0275\u0275directiveInject(FxchTextAreaClassesProvider));
};
_FxchTextAreaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FxchTextAreaComponent, selectors: [["fxch-textarea"]], inputs: { value: "value", placeholder: "placeholder", label: "label", formGroup: "formGroup", name: "name", iconName: "iconName", actionClass: "actionClass", actionTrigger: "actionTrigger", customClass: "customClass", appearanceType: "appearanceType", color: "color", disabled: "disabled", readonly: "readonly", autocomplete: "autocomplete", hint: "hint", rows: "rows", validators: "validators" }, outputs: { onChanged: "onChanged", onValidated: "onValidated" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 6, vars: 12, consts: [[1, "fxch-textarea-wrap"], ["class", "fxch-textarea-icon", 3, "iconName", 4, "ngIf"], ["type", "text", 1, "fxch-textarea", 3, "formControl", "disabled", "readonly", "placeholder", "name", "autocomplete", "rows", "input", "focus", "blur"], ["class", "fxch-textarea-label", 4, "ngIf"], ["class", "fxch-textarea-hint", 3, "class", 4, "ngIf"], [1, "fxch-textarea-icon", 3, "iconName"], [1, "fxch-textarea-label"], [1, "fxch-textarea-label-text"], [1, "fxch-textarea-hint"], ["class", "fxch-textarea-hint-text", 4, "ngIf"], ["class", "fxch-textarea-hint-counter", 3, "class", 4, "ngIf"], ["class", "fxch-textarea-error", 4, "ngIf"], [1, "fxch-textarea-hint-text"], [1, "fxch-textarea-hint-counter"], [1, "fxch-textarea-error"]], template: function FxchTextAreaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 0);
    \u0275\u0275template(1, FxchTextAreaComponent_fxch_icon_1_Template, 1, 1, "fxch-icon", 1);
    \u0275\u0275elementStart(2, "textarea", 2);
    \u0275\u0275listener("input", function FxchTextAreaComponent_Template_textarea_input_2_listener() {
      return ctx.onInput();
    })("focus", function FxchTextAreaComponent_Template_textarea_focus_2_listener() {
      return ctx.onFocus();
    })("blur", function FxchTextAreaComponent_Template_textarea_blur_2_listener() {
      return ctx.onBlur();
    });
    \u0275\u0275text(3, "    ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FxchTextAreaComponent_span_4_Template, 3, 1, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FxchTextAreaComponent_div_5_Template, 4, 5, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.textAreaWrapperCustomClasses);
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.iconName != null && ctx.iconName !== "");
    \u0275\u0275advance(1);
    \u0275\u0275property("formControl", ctx.formControl)("disabled", ctx.disabled)("readonly", ctx.readonly)("placeholder", ctx.placeholder)("name", ctx.name)("autocomplete", ctx.autocomplete)("rows", ctx.rows);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.label != null && ctx.label !== "");
    \u0275\u0275advance(1);
    \u0275\u0275property("ngIf", ctx.hint != null || ctx.canShowError());
  }
}, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, ReactiveFormsModule, FormControlDirective, FxchIconComponent], styles: ['\n\n.fxch-textarea[_ngcontent-%COMP%] {\n  grid-area: input;\n  border: none;\n  background-color: transparent !important;\n  padding: 19px 27px 19px 0;\n  resize: vertical;\n  min-height: 66px;\n  max-height: 180px;\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  outline: none !important;\n}\n.fxch-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: var(--font-global);\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  opacity: 1;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-family: var(--font-global);\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  opacity: 1;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-textarea[_ngcontent-%COMP%]::-ms-expand {\n  font-family: var(--font-global);\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  opacity: 1;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-family: var(--font-global);\n  font-size: 20px;\n  line-height: 1.4;\n  font-weight: 400;\n  opacity: 1;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-textarea-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-areas: "input";\n  column-gap: 12px;\n  align-items: start;\n  padding: 0 0 0 27px;\n  min-height: 68px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 12px;\n  min-width: 100px;\n  width: 100%;\n  font-weight: 400;\n  margin-bottom: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: 0 !important;\n  transition:\n    color 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1),\n    border-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change:\n    color,\n    background-color,\n    border-color;\n}\n.fxch-textarea-wrap.fxch-disabled[_ngcontent-%COMP%]   .fxch-textarea[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.fxch-textarea-wrap--outline[_ngcontent-%COMP%]   .fxch-textarea-label[_ngcontent-%COMP%] {\n  top: 0;\n  transform: translateY(-50%);\n}\n.fxch-textarea-wrap--outline[_ngcontent-%COMP%]   .fxch-textarea-label-text[_ngcontent-%COMP%] {\n  padding: 0 2px;\n}\n.fxch-textarea-wrap--fill.fxch-textarea-wrap--label[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.fxch-textarea-wrap--fill.fxch-textarea-wrap--label[_ngcontent-%COMP%]   .fxch-textarea[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n.fxch-textarea-wrap--fill.fxch-textarea-wrap--label[_ngcontent-%COMP%]   .fxch-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  line-height: 20px;\n}\n.fxch-textarea-wrap--fill.fxch-textarea-wrap--label[_ngcontent-%COMP%]   .fxch-textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  line-height: 20px;\n}\n.fxch-textarea-wrap--fill.fxch-textarea-wrap--label[_ngcontent-%COMP%]   .fxch-textarea[_ngcontent-%COMP%]::-ms-expand {\n  line-height: 20px;\n}\n.fxch-textarea-wrap--fill.fxch-textarea-wrap--label[_ngcontent-%COMP%]   .fxch-textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  line-height: 20px;\n}\n.fxch-textarea-wrap--fill[_ngcontent-%COMP%]   .fxch-textarea-label[_ngcontent-%COMP%] {\n  top: 0px;\n}\n.fxch-textarea-wrap--prefix[_ngcontent-%COMP%] {\n  grid-template-columns: 24px minmax(0, 1fr);\n  grid-template-areas: "prefix input";\n}\n.fxch-textarea-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: absolute;\n  left: 8px;\n  right: 8px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-textarea-label-text[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.fxch-textarea-icon[_ngcontent-%COMP%] {\n  grid-area: prefix;\n  display: block;\n  padding-top: 21px;\n  font-size: 24px;\n  transition: color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: color;\n}\n.fxch-textarea-hint[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-areas: "hint";\n  column-gap: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  padding: 2px 8px 0;\n}\n.fxch-textarea-hint--error[_ngcontent-%COMP%] {\n  grid-template-areas: "error";\n}\n.fxch-textarea-hint--error.fxch-textarea-hint--counter[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  grid-template-areas: "error counter";\n}\n.fxch-textarea-hint--error.fxch-textarea-hint--hint[_ngcontent-%COMP%] {\n  grid-template-columns: 100%;\n  grid-template-areas: "hint" "error";\n}\n.fxch-textarea-hint--error.fxch-textarea-hint--hint.fxch-textarea-hint--counter[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  grid-template-areas: "hint counter" "error error";\n}\n.fxch-textarea-hint--counter[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  grid-template-areas: ". counter";\n}\n.fxch-textarea-hint--hint[_ngcontent-%COMP%] {\n  grid-template-columns: "hint";\n}\n.fxch-textarea-hint--hint.fxch-textarea-hint--counter[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  grid-template-areas: "hint counter";\n}\n.fxch-textarea-hint--counter[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  grid-template-areas: ". counter";\n}\n.fxch-textarea-hint-counter[_ngcontent-%COMP%] {\n  grid-area: counter;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n}\n.fxch-textarea-error[_ngcontent-%COMP%] {\n  grid-area: error;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n}\n.fxch-textarea.ng-invalid[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb3JlL2NvbnRyb2xzL2Z4Y2gtdGV4dGFyZWEvZnhjaC10ZXh0YXJlYS5jb21wb25lbnQuc2NzcyIsICJzcmMvYXBwL2NvbW1vbi9taXhpbi90eXBvZ3JhcGh5Lm1peGluLnNjc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgXCIuLi8uLi8uLi9jb21tb24vbWl4aW4vbWl4aW5zLm1peGluLnNjc3NcIjtcclxuXHJcbi5meGNoLXRleHRhcmVhIHtcclxuICAgIGdyaWQtYXJlYTogaW5wdXQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTlweCAyN3B4IDE5cHggMDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICBtaW4taGVpZ2h0OiA2NnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQtbGdcIik7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1nbG9iYWwpO1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC1sZ1wiKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiBjb2xvcjtcclxuICAgIH1cclxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1nbG9iYWwpO1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwidGV4dC1sZ1wiKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiBjb2xvcjtcclxuICAgIH1cclxuICAgICY6Oi1tcy1leHBhbmQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWdsb2JhbCk7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LWxnXCIpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZ2xvYmFsKTtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQtbGdcIik7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogY29sb3I7XHJcbiAgICB9XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImlucHV0XCI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMTJweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMjdweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb246XHJcbiAgICAgICAgICAgIGNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3IgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3I7XHJcbiAgICAgICAgJi5meGNoLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgLmZ4Y2gtdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi0tb3V0bGluZSB7XHJcbiAgICAgICAgICAgIC5meGNoLXRleHRhcmVhLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi0tZmlsbCB7XHJcbiAgICAgICAgICAgICYuZnhjaC10ZXh0YXJlYS13cmFwIHtcclxuICAgICAgICAgICAgICAgICYtLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAuZnhjaC10ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Oi1tcy1leHBhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZnhjaC10ZXh0YXJlYS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1wcmVmaXgge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggbWlubWF4KDAsIDFmcik7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicHJlZml4IGlucHV0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXCJ0ZXh0LXhzXCIpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiBjb2xvcjtcclxuICAgICAgICAmLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWljb24ge1xyXG4gICAgICAgIGdyaWQtYXJlYTogcHJlZml4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogY29sb3I7XHJcbiAgICB9XHJcbiAgICAmLWhpbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGludFwiO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDVweDtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQteHNcIik7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDhweCAwO1xyXG4gICAgICAgICYtLWVycm9yIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJlcnJvclwiO1xyXG4gICAgICAgICAgICAmLmZ4Y2gtdGV4dGFyZWEtaGludCB7XHJcbiAgICAgICAgICAgICAgICAmLS1jb3VudGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJlcnJvciBjb3VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLS1oaW50IHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoaW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICYuZnhjaC10ZXh0YXJlYS1oaW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi0tY291bnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGludCBjb3VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yIGVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi0tY291bnRlciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIGNvdW50ZXJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi0taGludCB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogXCJoaW50XCI7XHJcbiAgICAgICAgICAgICYuZnhjaC10ZXh0YXJlYS1oaW50IHtcclxuICAgICAgICAgICAgICAgICYtLWNvdW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhpbnQgY291bnRlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi0tY291bnRlciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIGNvdW50ZXJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb3VudGVyIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb3VudGVyO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQteHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1lcnJvciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBlcnJvcjtcclxuICAgICAgICBAaW5jbHVkZSBmb250LXN0eWxlcyhcInRleHQteHNcIik7XHJcbiAgICB9XHJcbiAgICAmLm5nLWludmFsaWQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwgIkBtaXhpbiBmb250LXN0eWxlcygkdHlwb2dyYXBoeSkge1xyXG4gICAgQGlmICgkdHlwb2dyYXBoeSA9PSAnaDEnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDI3OXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gyJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLW1kJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXNtJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwteHMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14bCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1sZycpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXNtJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhzJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxhQUFBO0FBQ0EsVUFBQTtBQUNBLG9CQUFBO0FBQ0EsV0FBQSxLQUFBLEtBQUEsS0FBQTtBQUNBLFVBQUE7QUFDQSxjQUFBO0FBQ0EsY0FBQTtBQ3dDSSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7QUR4Q0osV0FBQTs7QUFDQSxDQVZKLGFBVUk7QUFDSSxlQUFBLElBQUE7QUNvQ0EsYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBO0FEcENBLFdBQUE7QUFDQSxjQUFBLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFFSixDQWpCSixhQWlCSTtBQUNJLGVBQUEsSUFBQTtBQzZCQSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7QUQ3QkEsV0FBQTtBQUNBLGNBQUEsTUFBQSxLQUFBLGFBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQSxlQUFBOztBQUVKLENBeEJKLGFBd0JJO0FBQ0ksZUFBQSxJQUFBO0FDc0JBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTtBRHRCQSxXQUFBO0FBQ0EsY0FBQSxNQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBLGVBQUE7O0FBRUosQ0EvQkosYUErQkk7QUFDSSxlQUFBLElBQUE7QUNlQSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7QURmQSxXQUFBO0FBQ0EsY0FBQSxNQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBLGVBQUE7O0FBRUosQ0FBQTtBQUNJLFlBQUE7QUFDQSxXQUFBO0FBQ0EseUJBQUE7QUFDQSx1QkFBQTtBQUNBLGNBQUE7QUFDQSxlQUFBO0FBQ0EsV0FBQSxFQUFBLEVBQUEsRUFBQTtBQUNBLGNBQUE7QUFDQSxnQkFBQTtBQUNBLGdCQUFBO0FBQ0EsaUJBQUE7QUFDQSxhQUFBO0FBQ0EsU0FBQTtBQUNBLGVBQUE7QUFDQSxpQkFBQTtBQUNBLFVBQUE7QUFDQSx1QkFBQTtBQUFBLGVBQUE7QUFDQSxXQUFBO0FBQ0E7SUFDSSxNQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBO0lBQUEsaUJBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUE7SUFBQSxhQUFBLEtBQUEsYUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQTtBQUdKO0lBQUEsS0FBQTtJQUFBLGdCQUFBO0lBQUE7O0FBRUksQ0F6QlIsa0JBeUJRLENBQUEsY0FBQSxDQS9EWjtBQWdFZ0Isa0JBQUE7O0FBSUosQ0FBQSw0QkFBQSxDQUFBO0FBQ0ksT0FBQTtBQUNBLGFBQUEsV0FBQTs7QUFDQSxDQUhKLDRCQUdJLENBQUE7QUFDSSxXQUFBLEVBQUE7O0FBTUosQ0FBQSx3QkFBQSxDQUFBO0FBQ0ksZUFBQTs7QUFDQSxDQUZKLHdCQUVJLENBRkosMEJBRUksQ0FoRnBCO0FBaUZ3QixlQUFBOztBQUNBLENBSlIsd0JBSVEsQ0FKUiwwQkFJUSxDQWxGeEIsYUFrRndCO0FBQ0ksZUFBQTs7QUFFSixDQVBSLHdCQU9RLENBUFIsMEJBT1EsQ0FyRnhCLGFBcUZ3QjtBQUNJLGVBQUE7O0FBRUosQ0FWUix3QkFVUSxDQVZSLDBCQVVRLENBeEZ4QixhQXdGd0I7QUFDSSxlQUFBOztBQUVKLENBYlIsd0JBYVEsQ0FiUiwwQkFhUSxDQTNGeEIsYUEyRndCO0FBQ0ksZUFBQTs7QUFLaEIsQ0FuQkkseUJBbUJKLENBN0JBO0FBOEJJLE9BQUE7O0FBR1IsQ0FBQTtBQUNJLHlCQUFBLEtBQUEsT0FBQSxDQUFBLEVBQUE7QUFDQSx1QkFBQTs7QUFHUixDQXRDUTtBQXVDSixXQUFBO0FBQ0EsbUJBQUE7QUFDQSxlQUFBO0FBQ0EsWUFBQTtBQUNBLFFBQUE7QUFDQSxTQUFBO0FDdkRBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTtBRHVEQSxjQUFBLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFDQSxDQTdDUTtBQThDSixXQUFBO0FBQ0EsYUFBQTtBQUNBLGlCQUFBO0FBQ0EsWUFBQTtBQUNBLGVBQUE7O0FBR1IsQ0FBQTtBQUNJLGFBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTtBQUNBLGFBQUE7QUFDQSxjQUFBLE1BQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBO0FBQ0EsdUJBQUE7QUFDQSxjQUFBO0FDL0VBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTtBRCtFQSxXQUFBLElBQUEsSUFBQTs7QUFDQSxDQUFBO0FBQ0ksdUJBQUE7O0FBRUksQ0FIUix5QkFHUSxDQUFBO0FBQ0kseUJBQUEsT0FBQSxDQUFBLEVBQUEsS0FBQTtBQUNBLHVCQUFBOztBQUVKLENBUFIseUJBT1EsQ0FBQTtBQUNJLHlCQUFBO0FBQ0EsdUJBQ0ksT0FBQTs7QUFHQSxDQWJoQix5QkFhZ0IsQ0FOUix3QkFNUSxDQVZSO0FBV1kseUJBQUEsT0FBQSxDQUFBLEVBQUEsS0FBQTtBQUNBLHVCQUNJLGVBQUE7O0FBT3hCLENBcEJRO0FBcUJKLHlCQUFBLE9BQUEsQ0FBQSxFQUFBLEtBQUE7QUFDQSx1QkFBQTs7QUFFSixDQXBCUTtBQXFCSix5QkFBQTs7QUFFSSxDQXZCQSx3QkF1QkEsQ0EzQkE7QUE0QkkseUJBQUEsT0FBQSxDQUFBLEVBQUEsS0FBQTtBQUNBLHVCQUNJOztBQUloQixDQWxDUTtBQW1DSix5QkFBQSxPQUFBLENBQUEsRUFBQSxLQUFBO0FBQ0EsdUJBQUE7O0FBRUosQ0FBQTtBQUNJLGFBQUE7QUM1SEosYUFBQTtBQUNBLGVBQUE7QUFDQSxlQUFBOztBRDhISixDQUFBO0FBQ0ksYUFBQTtBQ2pJQSxhQUFBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7O0FEa0lKLENBN0xKLGFBNkxJLENBQUE7QUFDSSxVQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */'], changeDetection: 0 });
var FxchTextAreaComponent = _FxchTextAreaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FxchTextAreaComponent, { className: "FxchTextAreaComponent", filePath: "src\\app\\core\\controls\\fxch-textarea\\fxch-textarea.component.ts", lineNumber: 26 });
})();

// src/app/core/validators/email-with-dot.validator.ts
var emailWithDotValidator = (control) => {
  const result = Validators.email(control);
  const isStandartValidationPassed = result == null;
  if (!isStandartValidationPassed) {
    return result;
  }
  const dotAtTheEndPattern = /^.*\.[a-z]{1,}$/i;
  return dotAtTheEndPattern.test(control.value) ? null : { "email": true };
};

// src/app/contact-form/contact-form.component.ts
var _c0 = (a0) => ({ maxLength: a0 });
var _ContactFormComponent = class _ContactFormComponent {
  get nameValidators() {
    return [{
      errorCode: "required",
      message: this.translateService.instant("CONTACT_FORM.VALIDATORS.NAME"),
      showError: (control) => control.hasError("required"),
      validator: Validators.required
    }];
  }
  get emailValidators() {
    return [{
      errorCode: "required",
      message: this.translateService.instant("CONTACT_FORM.VALIDATORS.EMAIL"),
      showError: (control) => control.hasError("required"),
      validator: Validators.required
    }, {
      errorCode: "email",
      message: this.translateService.instant("CONTACT_FORM.VALIDATORS.EMAIL_FORMAT"),
      showError: (control) => control.hasError("email"),
      validator: emailWithDotValidator
    }];
  }
  get subjectValidators() {
    return [{
      errorCode: "required",
      message: this.translateService.instant("CONTACT_FORM.VALIDATORS.EMAIL"),
      showError: (control) => control.hasError("required"),
      validator: Validators.required
    }];
  }
  get messageValidators() {
    return [{
      errorCode: "maxlength",
      message: this.translateService.instant("CONTACT_FORM.VALIDATORS.MESSAGE") + this.messageCharactersLimit,
      showError: (control) => control.hasError("maxlength"),
      validator: Validators.maxLength(this.messageCharactersLimit)
    }];
  }
  constructor(translateService) {
    this.translateService = translateService;
    this.submit = new EventEmitter();
    this.messageCharactersLimit = 300;
    this.contactsFormGroup = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      subject: new FormControl(""),
      message: new FormControl("")
    });
  }
  submitApplication() {
    if (this.contactsFormGroup.invalid) {
      return;
    }
    console.log(`Form Submited: name: ${this.contactsFormGroup.value.name}, 
            email: ${this.contactsFormGroup.value.email}, 
            subject: ${this.contactsFormGroup.value.subject}, 
            message: ${this.contactsFormGroup.value.message}.`);
    this.submit.emit();
  }
};
_ContactFormComponent.\u0275fac = function ContactFormComponent_Factory(t) {
  return new (t || _ContactFormComponent)(\u0275\u0275directiveInject(TranslateService));
};
_ContactFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactFormComponent, selectors: [["contact-form"]], outputs: { submit: "submit" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 49, consts: [[1, "fxch-contact-form", 3, "formGroup", "submit"], [1, "fxch-contact-form-block"], [1, "fxch-contact-form-item", "fxch-contact-form-item--name", 3, "formGroup", "name", "validators", "placeholder", "appearanceType", "large", "iconName"], [1, "fxch-contact-form-item", "fxch-contact-form-item--email", 3, "formGroup", "name", "validators", "placeholder", "appearanceType", "large", "type", "iconName"], [1, "fxch-contact-form-item", "fxch-contact-form-item--subject", 3, "formGroup", "name", "validators", "placeholder", "appearanceType", "large", "iconName"], [1, "fxch-contact-form-item", "fxch-contact-form-item--text", 3, "formGroup", "name", "validators", "placeholder", "appearanceType", "iconName", "rows", "hint"], [1, "fxch-contact-form-submit", 3, "appearanceType", "color", "large", "text", "type", "disabled"]], template: function ContactFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275listener("submit", function ContactFormComponent_Template_form_submit_0_listener() {
      return ctx.submitApplication();
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "fxch-input", 2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "fxch-input", 3);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "fxch-input", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275element(8, "fxch-textarea", 5);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "fxch-button", 6);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.contactsFormGroup);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.contactsFormGroup)("name", "name")("validators", ctx.nameValidators)("placeholder", \u0275\u0275pipeBind1(3, 37, "CONTACT_FORM.NAME"))("appearanceType", "outline")("large", true)("iconName", "user");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.contactsFormGroup)("name", "email")("validators", ctx.emailValidators)("placeholder", \u0275\u0275pipeBind1(5, 39, "CONTACT_FORM.EMAIL"))("appearanceType", "outline")("large", true)("type", "email")("iconName", "mail");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.contactsFormGroup)("name", "subject")("validators", ctx.subjectValidators)("placeholder", \u0275\u0275pipeBind1(7, 41, "CONTACT_FORM.SUBJECT"))("appearanceType", "outline")("large", true)("iconName", "subject");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.contactsFormGroup)("name", "message")("validators", ctx.messageValidators)("placeholder", \u0275\u0275pipeBind1(9, 43, "CONTACT_FORM.MESSAGE"))("appearanceType", "outline")("iconName", "article")("rows", 1)("hint", \u0275\u0275pureFunction1(47, _c0, ctx.messageCharactersLimit));
    \u0275\u0275advance(2);
    \u0275\u0275property("appearanceType", "flat")("color", "accent")("large", true)("text", \u0275\u0275pipeBind1(11, 45, "CONTACT_FORM.SUBMIT"))("type", "submit")("disabled", ctx.contactsFormGroup.invalid);
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatusGroup,
  FormGroupDirective,
  RouterModule,
  FxchInputComponent,
  FxchTextAreaComponent,
  FxchButtonComponent
], styles: ["\n\n.fxch-contact-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 48px;\n  align-items: start;\n}\n@media screen and (max-width: 767px) {\n  .fxch-contact-form[_ngcontent-%COMP%] {\n    row-gap: 36px;\n  }\n}\n.fxch-contact-form-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 12px;\n  row-gap: 12px;\n  align-items: start;\n}\n@media screen and (max-width: 767px) {\n  .fxch-contact-form-block[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n.fxch-contact-form-item--subject[_ngcontent-%COMP%] {\n  grid-area: 2/1/3/3;\n}\n@media screen and (max-width: 767px) {\n  .fxch-contact-form-item--subject[_ngcontent-%COMP%] {\n    grid-area: auto;\n  }\n}\n.fxch-contact-form-item--text[_ngcontent-%COMP%] {\n  grid-area: 3/1/4/3;\n}\n@media screen and (max-width: 767px) {\n  .fxch-contact-form-item--text[_ngcontent-%COMP%] {\n    grid-area: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL2JyZWFrcG9pbnQubWl4aW4uc2NzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9taXhpbi9taXhpbnMubWl4aW4uc2Nzc1wiO1xyXG5cclxuLmZ4Y2gtY29udGFjdC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICByb3ctZ2FwOiA0OHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChcInNtXCIpIHtcclxuICAgICAgICByb3ctZ2FwOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgJi1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMTJweDtcclxuICAgICAgICByb3ctZ2FwOiAxMnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwic21cIikge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICAmLS1zdWJqZWN0IHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwic21cIikge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtLXRleHQge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IDMvMS80LzM7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJzbVwiKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxXQUFBO0FBQ0EseUJBQUE7QUFDQSxXQUFBO0FBQ0EsZUFBQTs7QUNVSSxPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRGRSLEdBQUE7QUFNUSxhQUFBOzs7QUFFSixDQUFBO0FBQ0ksV0FBQTtBQUNBLHlCQUFBLE9BQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxFQUFBO0FBQ0EsY0FBQTtBQUNBLFdBQUE7QUFDQSxlQUFBOztBQ0NBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FETkosR0FBQTtBQU9RLDJCQUFBOzs7QUFJSixDQUFBO0FBQ0ksYUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7QUNOSixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBREtBLEdBQUE7QUFHUSxlQUFBOzs7QUFHUixDQUFBO0FBQ0ksYUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7QUNaSixPQUFBLE9BQUEsSUFBQSxDQUFBLFNBQUEsRUFBQTtBRFdBLEdBQUE7QUFHUSxlQUFBOzs7IiwKICAibmFtZXMiOiBbXQp9Cg== */"], changeDetection: 0 });
var ContactFormComponent = _ContactFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactFormComponent, { className: "ContactFormComponent", filePath: "src\\app\\contact-form\\contact-form.component.ts", lineNumber: 27 });
})();

// src/app/contact-modal/contact-modal.component.ts
var _ContactModalComponent = class _ContactModalComponent {
  constructor(dialogRef, fxchToastService) {
    this.dialogRef = dialogRef;
    this.fxchToastService = fxchToastService;
  }
  closeModal() {
    this.dialogRef.close();
  }
  sendEmail() {
    this.fxchToastService.showSuccess("CONTACT_MODAL.SUCCESS");
    this.closeModal();
  }
};
_ContactModalComponent.\u0275fac = function ContactModalComponent_Factory(t) {
  return new (t || _ContactModalComponent)(\u0275\u0275directiveInject(DialogRef), \u0275\u0275directiveInject(FxchToastService));
};
_ContactModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactModalComponent, selectors: [["contact-modal"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 7, consts: [[1, "fxch-contact"], [1, "fxch-contact-close", 3, "title", "click"], [1, "fxch-contact-close-icon", 3, "iconName"], [1, "fxch-contact-title"], [1, "fxch-contact-form-box", 3, "submit"]], template: function ContactModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function ContactModalComponent_Template_div_click_1_listener() {
      return ctx.closeModal();
    });
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "fxch-icon", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "contact-form", 4);
    \u0275\u0275listener("submit", function ContactModalComponent_Template_contact_form_submit_7_listener() {
      return ctx.sendEmail();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(1);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 3, "CONTACT.CLOSE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("iconName", "close");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "CONTACT.TITLE"));
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  FxchIconComponent,
  ContactFormComponent
], styles: ["\n\n.fxch-contact[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n  row-gap: 48px;\n  align-items: start;\n  padding: 40px;\n}\n@media screen and (max-width: 960px) {\n  .fxch-contact[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .fxch-contact[_ngcontent-%COMP%] {\n    row-gap: 36px;\n  }\n}\n.fxch-contact-close[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 12px;\n  right: 12px;\n  font-size: 38px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  z-index: 5;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  will-change: background-color;\n}\n.fxch-contact-close-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n}\n.fxch-contact-title[_ngcontent-%COMP%] {\n  font-family: var(--font-titles);\n  font-size: 68px;\n  line-height: 1;\n  font-weight: 500;\n  font-size: 64px;\n}\n@media screen and (max-width: 960px) {\n  .fxch-contact-title[_ngcontent-%COMP%] {\n    font-family: var(--font-titles);\n    font-size: 48px;\n    line-height: 1;\n    font-weight: 500;\n  }\n}\n.fxch-contact-form-box[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb250YWN0LW1vZGFsL2NvbnRhY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCAic3JjL2FwcC9jb21tb24vbWl4aW4vYnJlYWtwb2ludC5taXhpbi5zY3NzIiwgInNyYy9hcHAvY29tbW9uL21peGluL3R5cG9ncmFwaHkubWl4aW4uc2NzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9taXhpbi9taXhpbnMubWl4aW4uc2Nzc1wiO1xyXG5cclxuLmZ4Y2gtY29udGFjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgcm93LWdhcDogNDhweDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwibWRcIikge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50KFwic21cIikge1xyXG4gICAgICAgIHJvdy1nYXA6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAmLWNsb3NlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICByaWdodDogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWwtbWRcIik7XHJcbiAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoXCJtZFwiKSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVzKFwibGFiZWwteHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1mb3JtLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iLCAiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4cy1oOiBcInNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY3MHB4KVwiLFxyXG4gICAgc20taDogXCJzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcIixcclxuICAgIHhzOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCIsXHJcbiAgICBzbTogXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLFxyXG4gICAgbWQ6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweClcIixcclxuICAgIGxnOiBcInNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KVwiLFxyXG4gICAgeGw6IFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpXCJcclxuKSAhZGVmYXVsdDtcclxuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50KCRicmVha3BvaW50TmFtZSkge1xyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQG1lZGlhICN7JG1lZGlhUXVlcnl9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwgIkBtaXhpbiBmb250LXN0eWxlcygkdHlwb2dyYXBoeSkge1xyXG4gICAgQGlmICgkdHlwb2dyYXBoeSA9PSAnaDEnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDI3OXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2gyJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICdoMycpIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLW1kJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZiAoJHR5cG9ncmFwaHkgPT0gJ2xhYmVsLXNtJykge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwteHMnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAnbGFiZWwnKSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC14bCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmICgkdHlwb2dyYXBoeSA9PSAndGV4dC1sZycpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXNtJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYgKCR0eXBvZ3JhcGh5ID09ICd0ZXh0LXhzJykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLHlCQUFBO0FBQ0EsV0FBQTtBQUNBLGVBQUE7QUFDQSxXQUFBOztBQ1FJLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEZFIsR0FBQTtBQVFRLGFBQUE7OztBQ01BLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEZFIsR0FBQTtBQVdRLGFBQUE7OztBQUVKLENBQUE7QUFDSSxZQUFBO0FBQ0EsV0FBQTtBQUNBLG1CQUFBO0FBQ0EsZUFBQTtBQUNBLE9BQUE7QUFDQSxTQUFBO0FBQ0EsYUFBQTtBQUNBLFNBQUE7QUFDQSxVQUFBO0FBQ0EsaUJBQUE7QUFDQSxXQUFBO0FBQ0EsVUFBQTtBQUNBLGNBQUEsaUJBQUEsS0FBQSxhQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0EsZUFBQTs7QUFDQSxDQUFBO0FBQ0ksV0FBQTtBQUNBLGFBQUE7O0FBR1IsQ0FBQTtBRWZJLGVBQUEsSUFBQTtBQUNBLGFBQUE7QUFDQSxlQUFBO0FBQ0EsZUFBQTtBRmNBLGFBQUE7O0FDckJBLE9BQUEsT0FBQSxJQUFBLENBQUEsU0FBQSxFQUFBO0FEbUJKLEdBQUE7QUVISSxpQkFBQSxJQUFBO0FBQ0EsZUFBQTtBQUNBLGlCQUFBO0FBQ0EsaUJBQUE7OztBRk9KLENBQUE7QUFDSSxXQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */"], changeDetection: 0 });
var ContactModalComponent = _ContactModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactModalComponent, { className: "ContactModalComponent", filePath: "src\\app\\contact-modal\\contact-modal.component.ts", lineNumber: 21 });
})();
export {
  ContactModalComponent
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.0.8
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-2O6EHLQP.js.map
