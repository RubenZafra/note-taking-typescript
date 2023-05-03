
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
import { EditNote } from './components/EditNote'



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

  const onUpdateNote = (id: string, {tags,...data} :  NoteData) => {

    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return {...note, ...data, tagIds: tags.map(tag => tag.id)}
        } else {
          return note
        }
      })
    })
  }

  const onDeleteNote = (id: string) => {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    })
  }

  const updateTag = (id:string, label:string) => {

    setTags( prevTags => {
      return prevTags.map(tag => {
         if (tag.id === id) {
           return {...tag, label}
         } else {
           return tag
         }
       })}
     )}


  

  const deleteTag = (id: string) => {
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== id)
    })
  }

  const addTag = (tag: Tag) => {
    setTags(prev => [...prev, tag])
  }

  return (

    <div className='h-screen bg-[#fff] flex items-center justify-center'>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace/>} />
        <Route path="/" element={<NoteList deleteTag={deleteTag} updateTag={updateTag} notes={noteWithTags} availableTags={tags} />} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags}/>} />
        <Route path="/:id" element={<NoteLayout notes={noteWithTags}/>} >
          <Route index element={<Note onDelete={onDeleteNote}/>} />
          <Route path="edit" element={<EditNote onSubmit={onUpdateNote} onAddTag={addTag} availableTags={tags} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
