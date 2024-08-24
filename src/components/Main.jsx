import React, { useContext } from "react";
import Background from "../assets/Background.jpg";
import Note from "./Note";
import { NotesContext } from "../context/NotesContext";

const Main = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div
      className="bg-cover bg-center "
      style={{
        backgroundImage: `url(${Background})`,
        height: "calc(100vh - 112px)",
      }}
    >
      <div className="bg-[black] bg-opacity-50 h-full overflow-y-scroll">
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {notes.map((note) => (
              <Note id={note.id} key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
