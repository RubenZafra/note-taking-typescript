import { useOutletContext } from "react-router-dom"
import { Note } from "../interfaces"

export const useNote =  () => {
    return useOutletContext<Note>()
}