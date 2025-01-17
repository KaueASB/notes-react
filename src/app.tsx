import { ChangeEvent, useState } from 'react'

import logo from './assets/Logo.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }

    return []
  })

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function onNoteDeleted(id: string) {
    const withoutNoteDeleted = notes.filter((note) => note.id !== id)

    setNotes(withoutNoteDeleted)
    localStorage.setItem('notes', JSON.stringify(withoutNoteDeleted))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const querySearch = event.target.value.toLowerCase()

    setSearch(querySearch)
  }

  const filteredNotes =
    search !== ''
      ? notes.filter((note) => note.content.toLowerCase().includes(search))
      : notes

  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6 px-5">
      <img src={logo} alt="logo nlw expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {notes &&
          filteredNotes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                note={note}
                onNoteDeleted={onNoteDeleted}
              />
            )
          })}
      </div>
    </div>
  )
}
