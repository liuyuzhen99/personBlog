import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/react";
import { useState } from "react";
import "bytemd/dist/index.css";
import "../styles/bytemd.css";

const plugins = [
  gfm(),
  // Add more plugins here
];

function Bytemd() {
  const [value, setValue] = useState("");

  return (
    <Editor
      value={value}
      plugins={plugins}
      onChange={(v) => {
        setValue(v);
      }}
    />
  );
}

export default Bytemd;
