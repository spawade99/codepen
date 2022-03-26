import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as Controllededitor } from 'react-codemirror2';
import './Editor.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Editor(props) {

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value) {
        props.onChange(value);
    }

    const toggleEditor = () => {
        setOpen(() => !open);
    }

    return (
        <>
            <div className={`editor-container ${open ? '' : 'collapse'}`}>
                <div className='editor-title'>
                    {props.title}
                    <button type='button' className='btn' onClick={toggleEditor}>
                        <i class={"bi bi-arrows-angle-" + (open ? 'contract' : 'expand')} />
                    </button>
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
