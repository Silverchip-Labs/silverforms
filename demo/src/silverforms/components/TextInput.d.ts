import React from 'react';
import { HandleChangeFunc, HandleBlurFunc, HandleFocusFunc } from '../types/shared';
export interface TextInputProps {
    name: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    handleChange: HandleChangeFunc<string>;
    handleBlur?: HandleBlurFunc<React.ChangeEvent<HTMLInputElement>>;
    handleFocus?: HandleFocusFunc<React.ChangeEvent<HTMLInputElement>>;
    className?: string;
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
