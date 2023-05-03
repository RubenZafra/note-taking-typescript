import { NewNoteProps } from "../interfaces"
import { NoteForm } from "./NoteForm"

export const NewNote = ({onSubmit, onAddTag, availableTags}: NewNoteProps) => {
  return (
    <div className="flex flex-col gap-1 w-1/3 items-center">
        <h1 className="text-5xl font-bold">New Note</h1>
        <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </div>
  )
}
