
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { NewNote } from './components/NewNote'
import { NoteData, RawNote, Tag } from './interfaces'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useMemo } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { NoteList } from './components/NoteList'
import { NoteLayout } from './components/NoteLayout'
import { Note } from './components/Note'



function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const noteWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  },[notes, tags])

  const onCreateNote = ({tags, ...data}: NoteData) => {
    setNotes(prevNotes => {
      return [...prevNotes, {...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }]
    })
  }

  const addTag = (tag: Tag) => {
    setTags(prev => [...prev, tag])
  }

  return (

    <div className='h-screen bg-[#fff] flex items-center justify-center'>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace/>} />
        <Route path="/" element={<NoteList notes={noteWithTags} availableTags={tags} />} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags}/>} />
        <Route path="/:id" element={<NoteLayout notes={noteWithTags}/>} >
          <Route index element={<Note />} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
