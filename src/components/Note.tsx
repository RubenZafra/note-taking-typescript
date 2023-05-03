import { Link } from "react-router-dom"
import { useNote } from "../hooks/useNote"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export const Note = () => {

    const note = useNote()

  return (
  <div className="flex flex-col items-center w-full">
    <section className="flex flex-col text-center w-2/3">
        <div className="flex justify-between mb-12">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold p-4">{note.title}</h1>
                <div className="flex items-center justify-center">
                {note.tags.length > 0 && (
                    <div className="pt-4 pb-2">
                        {note.tags.map(tag => (
                            <span 
                                key={tag.id} 
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {`#${tag.label}`}
                            </span>
                        ))}
                    </div>
                )}
                </div>
            </div>
            
            <div className="mr-4">
                <Link to={`/${note.id}/edit`}>
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">Edit</button>
                </Link>
                <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                <Link to="/">
                    <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">Back</button>
                </Link>
            </div>
        </div>
        </section>
        <div className="text-left w-2/3">
            <ReactMarkdown>{note.markdown}</ReactMarkdown>
        </div>
    </div>
  )
}
