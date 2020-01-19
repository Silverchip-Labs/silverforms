import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextInput } from './silverforms';
import { HandleChangeFunc } from './silverforms/types/shared';

const App: React.FC = () => {
    const [form, onChange] = useState({ textInput: '' });

    const handleChange: HandleChangeFunc<string> = (name, value) => {
        onChange({ ...form, [name]: value });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <TextInput name="textInput" value={form.textInput} handleChange={handleChange} />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
