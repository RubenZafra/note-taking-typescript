import { useMemo, useState } from "react";
import { Link } from "react-router-dom"
import ReactSelect from 'react-select/creatable';
import { NoteListProps, SimplifiedNote, Tag } from "../interfaces";
import { NoteCard } from "./NoteCard";

export const NoteList = ({ availableTags, notes} : NoteListProps)=> {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState("")

    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) 
            && (selectedTags.length === 0 || selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)))
        })
    }, [title, selectedTags, notes])

  return (
    <section className="flex flex-col text-center w-2/3">
        <div className="flex justify-between mb-12">
            <h1 className="text-3xl font-bold p-4">Notes</h1>
            <div className="mr-4">
                <Link to="/new">
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">Create</button>
                </Link>
                <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Edit Tags</button>
            </div>
        </div>
        <div className="flex justify-between mb-12">
            <div className="relative w-1/2 mr-4">
                    <input className="border border-gray-300 p-2 w-full peer placeholder-transparent" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" id="title" required/>
                    <label className="text-xl text-gray-600 absolute left-2 -top-8 
                                    peer-placeholder-shown:top-2 
                                    peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400
                                    transition-all" htmlFor="title">
                        Title
                    </label>   
            </div>
            <ReactSelect 
                isMulti 
                value={selectedTags.map(tag => { 
                    return {label:tag.label, value: tag.id
                    }})
                    } 
                options={availableTags.map(tag => {
                    return {label: tag.label, value: tag.id}
                })
                }
                onChange={tags => {
                    setSelectedTags(tags.map(tag => {
                        return {label:tag.label, id: tag.value}
                    }))
                }}
                placeholder="Tags..." 
                className='w-1/2'
            />

        </div>
        <div className="flex flex-row flex-wrap flex-start justify-center gap-4 w-full">
            {filteredNotes.map(note => (
                <div key={note.id} className="w-1/4">
                    <NoteCard id={note.id} title={note.title} tags={note.tags}/>
                </div>
            ))}
        </div>
    </section>
  )
}
