import { useState } from "react";
import { Link } from "react-router-dom"
import ReactSelect from 'react-select/creatable';
import { NoteListProps, Tag } from "../interfaces";

export const NoteList = ({ availableTags} : NoteListProps)=> {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState("")

  return (
    <section className="flex flex-col text-center w-1/3">
        <div className="flex justify-between mb-6">
            <h1 className="text-3xl font-bold p-4">Notes</h1>
            <div className="mr-4">
                <Link to="/new">
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">Create</button>
                </Link>
                <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Edit Tags</button>
            </div>
        </div>
        <div className="flex justify-between">
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
    </section>
  )
}
