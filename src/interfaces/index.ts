export interface Note extends NoteData { 
    id: string;
}

export interface RawNote extends RawNoteData  {
    id: string;
}

export interface RawNoteData {
    title: string;
    markdown: string;
    tagIds: string[]
}
export interface NoteData {
    title: string;
    markdown: string;
    tags: Tag[]
}

export interface Tag {
    id: string;
    label: string;
}

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
} & Partial<NoteData>

export interface NewNoteProps {
    onSubmit: (data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
}
export interface EditNoteProps {
    onSubmit: (id: string, data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
}

export interface NoteListProps {
    availableTags: Tag[];
    notes: SimplifiedNote[];
}

export interface SimplifiedNote {
    tags: Tag[]
    title: string
    id: string
}

export interface NoteLayoutProps {
    notes: Note[];
}

export interface NoteProps {
    onDelete: (id: string) => void;
}