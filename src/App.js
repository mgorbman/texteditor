import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { config } from './editorConfig'

let posts = JSON.parse(localStorage.posts);

function App() {
  const TextEditor = () => {
    const [body, setBody] = useState('')

    ClassicEditor.defaultConfig = config
    // console.log('notederror');

    const handleSubmit = (e) => {
      e.preventDefault()
      posts.push(body);
      localStorage['posts'] = JSON.stringify(posts);
    }

    return (
      <form onSubmit={handleSubmit}>
        <CKEditor
          editor={ClassicEditor}
          config={config}
          onChange={(event, editor) => {
            const data = editor.getData()
            setBody(data)
          }}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
  return <TextEditor />;
}

export default App;
