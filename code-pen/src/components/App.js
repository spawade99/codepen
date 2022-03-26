import Editor from "./Editor";
import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <>
      <div className="pane pane-top">
        <Editor
          onChange={setHtml}
          value={html}
          title='HTML'
          language='xml'
        />
        <Editor
          onChange={setCss}
          value={css}
          title='CSS'
          language='Css'
        />
        <Editor
          onChange={setJs}
          value={js}
          title='Javascript'
          language='javascript'
        />

      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"//avoid scripting security issue
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
