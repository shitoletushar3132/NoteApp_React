import React, { useContext, useState } from "react";
import { RiFileAddLine } from "react-icons/ri";
import { NotesContext } from "../context/NotesContext";

const Header = () => {
  const { addNote } = useContext(NotesContext);

  const handleAddNewClick = () => {
    const newNoteData = {
      id: Date.now(),
      content: "Add here note",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
    addNote(newNoteData);
  };

  return (
    <div>
      <div className="bg-[#BCFFFA] flex justify-between items-center p-4">
        <div className="text-xl font-bold">TS NOTES</div>
        <div className="flex gap-4 px-5">
          <button
            className="flex items-center justify-center bg-[#08B27E] rounded-xl p-2 text-white"
            onClick={handleAddNewClick}
          >
            <RiFileAddLine />
            <span className="ml-2">Add new</span>
          </button>
          <button className="bg-[#F2FFFF] p-2 rounded-md text-gray-700">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
