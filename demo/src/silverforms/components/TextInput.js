import React from 'react';
var TextInput = function (_a) {
    var name = _a.name, value = _a.value, placeholder = _a.placeholder, disabled = _a.disabled, maxLength = _a.maxLength, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleFocus = _a.handleFocus, _b = _a.className, className = _b === void 0 ? '' : _b;
    var onChange = function (_a) {
        var _b = _a.target, name = _b.name, value = _b.value;
        handleChange(name, value);
    };
    var onBlur = function (e) {
        var _a;
        (_a = handleBlur) === null || _a === void 0 ? void 0 : _a(e);
    };
    var onFocus = function (e) {
        var _a;
        (_a = handleFocus) === null || _a === void 0 ? void 0 : _a(e);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { name: name, value: value, placeholder: placeholder, disabled: (disabled !== null && disabled !== void 0 ? disabled : false), maxLength: maxLength, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: className })));
};
export default TextInput;
