import { SimplifiedNote } from "../interfaces"
import { Link } from 'react-router-dom';

export const NoteCard = ({id, title, tags}: SimplifiedNote) => {
  return (
    <Link to={`/${id}`} key={id}>
        <div className="flex flex-col items-center rounded overflow-hidden shadow-lg h-40 justify-center bg-[#AFD3E2]">
            <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2">
                    {title}
                </div>
            </div>        
                {tags.length > 0 && (
                    <div className="px-6 pt-4 pb-2">
                        {tags.map(tag => (
                            <span 
                                key={tag.id} 
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {`#${tag.label}`}
                            </span>
                        ))}
                    </div>
                )}
        </div>
    </Link>
  )
}
