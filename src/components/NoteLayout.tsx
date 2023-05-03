import { Navigate, Outlet, useParams } from "react-router-dom"
import { NoteLayoutProps } from "../interfaces"

export const NoteLayout = ({notes}:NoteLayoutProps) => {
    const { id } = useParams()
    const note = notes.find( n => n.id === id )

    if (note === null) return <Navigate to="/" replace={true} />

  return <Outlet context={note} />
}