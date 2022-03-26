import Editor from "./Editor";
import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcdoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`
      )
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

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
          language='css'
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
          srcDoc={srcdoc}
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
