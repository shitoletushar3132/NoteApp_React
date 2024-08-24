import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";
import { NotesContextProvider } from "./context/NotesContextProvider";

function App() {
  return (
    <>
      <NotesContextProvider>
        <Header />

        <Main />

        <Footer />
      </NotesContextProvider>
    </>
  );
}

export default App;
