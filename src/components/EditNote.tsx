import { useNote } from "../hooks/useNote"
import { EditNoteProps } from "../interfaces"
import { NoteForm } from "./NoteForm"

export const EditNote = ({onSubmit, onAddTag, availableTags}: EditNoteProps) => {
  const note = useNote()
  return (
    <div className="flex flex-col gap-1 w-1/3 items-center">
        <h1 className="text-5xl font-bold mb-8">Edit Note</h1>
        <NoteForm title={note.title} markdown={note.markdown} tags={note.tags} onSubmit={data =>onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags} />
    </div>
  )
}
 