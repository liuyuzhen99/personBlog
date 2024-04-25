import React from "react";
import { useState } from "react";
// import BytemdViewer from "../../components/bytemdViewer";
// import BytemdEditor from "../../components/bytemdEditor";
// import { CiEdit } from "react-icons/ci";
// import { MdCancelPresentation } from "react-icons/md";
// import { GiConfirmed } from "react-icons/gi";
import { Viewer, Editor } from "@bytemd/react";
import "bytemd/dist/index.css";
import "github-markdown-css";
import "./cardPage.css";

function cardPage() {
  const [content, setContent] = useState("# Hello, ByteMD!");
  const [previousContent, setPreviousContent] = useState("");
  const [editMode, setEditMode] = useState(true);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handlePreview = () => {
    setEditMode(false);
  };

  const handleCancel = () => {
    setContent(previousContent);
    setEditMode(false);
  };

  const handleSave = () => {
    setPreviousContent(content);
    setEditMode(false);
  };

  return (
    <div className="bytemd-right">
      <div className="bytemd-navbar">
        {editMode ? (
          <div className="editMode-navbar">
            <text>tag</text>
            <div className="btn-box">
              <button onClick={handleSave}>确定</button>
              <button onClick={handleCancel}>取消</button>
            </div>
          </div>
        ) : (
          <div className="uneditMode-navbar">
            <span>tag</span>
            <button onClick={handleEdit}>编辑</button>
          </div>
        )}
      </div>
      <div className="bytemd-content">
        {editMode ? (
          <Editor value={content} onChange={setContent} />
        ) : (
          <div className="bytemd-viewer">
            <Viewer value={content} />
          </div>
        )}
      </div>
    </div>
  );
}

export default cardPage;
