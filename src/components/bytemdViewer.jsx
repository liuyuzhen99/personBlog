import gfm from "@bytemd/plugin-gfm";
import { Viewer } from "@bytemd/react";
import { useState } from "react";
import "bytemd/dist/index.css";
import "../styles/bytemd.css";

const plugins = [
  gfm(),
  // Add more plugins here
];

function BytemdViewer() {
  const [value, setValue] = useState("");

  return (
    <Viewer
      value={value}
      plugins={plugins}
      onChange={(v) => {
        setValue(v);
      }}
    />
  );
}

export default BytemdViewer;
