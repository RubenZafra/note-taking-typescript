import { NoteForm } from "./NoteForm"

export const NewNote = () => {
  return (
    <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">New Note</h1>
        <NoteForm />
    </div>
  )
}
