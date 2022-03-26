import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as Controllededitor } from 'react-codemirror2';
import './Editor.css';

export default function Editor(props) {

    function handleChange(editor, data, value) {
        props.onChange(value);
    }

    const toggleEditor = () => {
        console.log('btn clicked!!');
    }

    return (
        <>
            <div className='editor-container'>
                <div className='editor-title'>
                    {props.title}
                    <button onClick={toggleEditor}>open/close</button>
                </div>
                <Controllededitor
                    onBeforeChange={handleChange}
                    value={props.value}
                    className='code-mirror-wrapper'
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: props.language,
                        theme: 'material',
                        linenumber: true
                    }}
                />

            </div>
        </>
    )
}
