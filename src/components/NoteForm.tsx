import { FormEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CreatableReactSelect from 'react-select/creatable';
import { NoteFormProps, Tag } from '../interfaces';

export const NoteForm = ({ onSubmit } : NoteFormProps) => {

    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLInputElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: []
        })
    }
    
  return (
    <form onSubmit={handleSubmit} className="py-10 flex flex-col w-full items-center">
        <div className='flex flex-row gap-8 w-full mb-12'>
            <div className="relative w-1/2">
                <input ref={titleRef} className="border border-gray-300 p-2 w-full peer placeholder-transparent" type="text" placeholder="Title" id="title" required/>
                <label className="text-xl text-gray-600 absolute left-2 -top-8 
                                peer-placeholder-shown:top-2 
                                peer-placeholder-shown:text-base 
                                peer-placeholder-shown:text-gray-400
                                transition-all" htmlFor="title">
                    Title
                </label>   
            </div>
            <CreatableReactSelect 
                isMulti 
                value={selectedTags.map(tag => { 
                    return {label:tag.label, value: tag.id
                    }})
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
        <div className='relative w-full'>
            <input ref={markdownRef} className='border border-gray-300 p-2 w-full peer placeholder-transparent h-24' type="text" id="markdown" placeholder='Text...' required />
            <label 
                className='text-xl text-gray-600 absolute left-2 -top-8
                            peer-placeholder-shown:top-2
                            peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-400
                            transition-all'
                htmlFor="markdown"
            >
                Text
            </label>
            <div className='mt-12 flex gap-8 items-center justify-center'>
                <button type="submit" className='bg-blue-500 text-white p-2 rounded-md w-1/3 hover:bg-blue-600 transition-all'>Save</button>
                <Link to=".." className='bg-red-500 text-white p-2 rounded-md w-1/3 hover:bg-red-600 transition-all text-center'>
                    <button type="button">Cancel</button>
                </Link>
            </div>
        </div>
    </form>
  )
}
