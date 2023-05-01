import CreatableReactSelect from 'react-select/creatable';

export const NoteForm = () => {
  return (
    <form className="py-10 flex flex-col w-full items-center">
        <div className='flex flex-row gap-8 w-full mb-12'>
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
        </div>
        <div className='relative w-full'>
            <input className='border border-gray-300 p-2 w-full peer placeholder-transparent h-24' type="text" id="markdown" placeholder='Text...'/>
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
                <button className='bg-blue-500 text-white p-2 rounded-md w-1/3 hover:bg-blue-600 transition-all'>Save</button>
                <button className='bg-red-500 text-white p-2 rounded-md w-1/3 hover:bg-red-600 transition-all'>Cancel</button>
            </div>
        </div>
    </form>
  )
}
