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
    className: string;
}

const TextInput: React.FC<TextInputProps> = ({
    name,
    value,
    placeholder,
    disabled,
    maxLength,
    handleChange,
    handleBlur,
    handleFocus,
    className = '',
}) => {
    const onChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>): void => {
        handleChange(name, value);
    };
    const onBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
        handleBlur?.(e);
    };
    const onFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
        handleFocus?.(e);
    };

    return (
        <>
            <input
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled ?? false}
                maxLength={maxLength}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                className={className}
            />
        </>
    );
};

export default TextInput;
