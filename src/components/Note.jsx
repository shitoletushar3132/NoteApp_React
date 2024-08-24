import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { NotesContext } from "../context/NotesContext";

const Note = ({ id, note }) => {
  const [content, setContent] = useState(note.content);
  const [isEditing, setIsEditing] = useState(false);

  const { deleteNote, editNote } = useContext(NotesContext);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = (e) => {
    setIsEditing(false);
    editNote(id, e.target.value);
  };

  const handleDelete = (noteId) => {
    deleteNote(noteId);
  };

  return (
    <div className="m-2">
      <div className="h-72 w-72 bg-white relative shadow-md rounded-md">
        <div className="flex justify-between p-1 px-2">
          <div className="text-sm text-slate-400">{note.date}</div>
          <div className="flex gap-2 text-slate-400">
            <button
              className="rounded-sm hover:bg-green-400 px-1 hover:text-black"
              onClick={handleEdit}
            >
              <FiEdit size={18} />
            </button>
            <button
              className="rounded-sm hover:bg-red-500 hover:text-black"
              onClick={() => handleDelete(id)}
            >
              <MdOutlineDelete size={20} />
            </button>
          </div>
        </div>
        <div className="p-1.5 overflow-y-scroll max-h-56 h-56">
          {isEditing ? (
            <textarea
              className="w-full h-full p-2 border border-gray-300 rounded-md resize-none"
              value={content}
              onChange={handleContentChange}
              onBlur={handleSave}
              autoFocus
            />
          ) : (
            <div className="whitespace-pre-wrap ">{content}</div>
          )}
        </div>
        <div className="absolute bottom-2 right-2 text-sm text-slate-400">
          {note.time}
        </div>
      </div>
    </div>
  );
};

export default Note;
