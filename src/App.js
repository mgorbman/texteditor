import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import parse from 'html-react-parser'
import "./App.css"

import { config } from './editorConfig'

let posts = JSON.parse(localStorage.posts);

function App() {
  const TextEditor = () => {
    const [body, setBody] = useState('')

    ClassicEditor.defaultConfig = config
    // console.log('note');

    const handleSubmit = (e) => {
      e.preventDefault()
      posts.push(body);
      localStorage['posts'] = JSON.stringify(posts);
    }

    return (
      <div className="App">
        <div className="Editor">
          <form onSubmit={handleSubmit}>
            <CKEditor
              editor={ClassicEditor}
              data={body}
              config={config}
              onChange={(event, editor) => {
                const data = editor.getData()
                setBody(data)
              }}
            />

            <button type='submit'>Submit</button>

          </form>
        </div>
        <div className="Preview">
          <h2>Content</h2>
          <p>{parse(body)}</p>
        </div>
      </div>
    )
  }
  return <TextEditor />;
}

export default App;
