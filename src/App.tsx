
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { NewNote } from './components/NewNote'
import { RawNote, Tag } from './interfaces'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useMemo } from 'react'

function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const noteWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  },[notes, tags])

  return (

    <div className='h-screen bg-[#fff] flex items-center justify-center'>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace/>} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id" element={<h1>New</h1>} >
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
