import CreatableReactSelect from 'react-select/creatable';

export const NoteForm = () => {
  return (
    <form className="py-10 flex gap-8 w-full items-center">
        <div className="relative w-1/2">
            <input className="border border-gray-300 p-2 w-full peer placeholder-transparent" type="text" placeholder="Title" id="title" />
            <label className="text-xl text-gray-600 absolute left-2 -top-8 
                            peer-placeholder-shown:top-2 
                            peer-placeholder-shown:text-base 
                            peer-placeholder-shown:text-gray-400
                            transition-all" htmlFor="title">
                Title
            </label>   
        </div>
            <CreatableReactSelect isMulti placeholder="Tags..." className='w-1/2'/>
    </form>
  )
}
