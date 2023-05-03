import { FormEvent, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CreatableReactSelect from 'react-select/creatable';
import { NoteFormProps, Tag } from '../interfaces';
import { v4 as uuidV4 } from 'uuid';

export const NoteForm = ({ onSubmit, onAddTag, availableTags, title = "", markdown = "", tags = [] } : NoteFormProps) => {

    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedTags,
        })

        navigate('..')
    }
    
  return (
    <form onSubmit={handleSubmit} className="py-10 flex flex-col w-full items-center">
        <div className='flex flex-row gap-8 w-full mb-12'>
            <div className="relative w-1/2">
                <input ref={titleRef} className="border border-gray-300 p-2 w-full peer placeholder-transparent" type="text" placeholder="Title" id="title" defaultValue={title} required/>
                <label className="text-xl text-gray-600 absolute left-2 -top-8 
                                peer-placeholder-shown:top-2 
                                peer-placeholder-shown:text-base 
                                peer-placeholder-shown:text-gray-400
                                transition-all" htmlFor="title">
                    Title
                </label>   
            </div>
            <CreatableReactSelect 
                onCreateOption={label => {
                    const newTag = {
                        id: uuidV4(), 
                        label
                    }
                    onAddTag(newTag)
                    setSelectedTags(prev => [...prev, newTag])
                }}
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
        <div className='relative w-full'>
            <textarea 
                rows={20} 
                cols={100} 
                wrap="true" 
                ref={markdownRef} 
                className='border border-gray-300 p-2 w-full peer placeholder-transparent h-24' 
                id="markdown" 
                placeholder='Text...' 
                defaultValue={markdown} 
                required />
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
