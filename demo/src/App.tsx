import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextInput } from './silverforms';
import { HandleChangeFunc } from './silverforms/types/shared';

type FormState = {
    textInput: string,
    numberInput?: number,
    [key: string]: string | number | undefined,
};

const App: React.FC = () => {
    const initialFormState: FormState = {
        textInput: '',
        numberInput: 0,
    };
    const [form, onChange] = useState(initialFormState);

    const handleChange: HandleChangeFunc<string> = (name, value) => {
        onChange({ ...form, [name]: value });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://github.com/silverchiplabs/silverforms"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SilverForms
                </a>
                <p>Below is a form demonstrating each available form input.</p>
            </header>
            <div className="form-input">
                <TextInput name="textInput" value={form.textInput} handleChange={handleChange} />
            </div>

            <div className="form-output">{getFormValues()}</div>
        </div>
    );

    function getFormValues(): JSX.Element[] {
        return Object.keys(form).map(key => (
            <p>
                {key}: {form[key]}
            </p>
        ));
    }
};

export default App;
