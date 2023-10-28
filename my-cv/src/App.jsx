import { useState } from "react";

import Editor from "./components/editor/Editor";
import Cv from "./components/cv/Cv";

function App() {
  return (
    <>
      <div className="page">
        <Editor />
        <Cv />
      </div>
    </>
  );
}

export default App;
