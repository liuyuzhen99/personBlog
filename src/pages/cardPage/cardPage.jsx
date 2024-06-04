import React from "react";
import { useState } from "react";
// import BytemdViewer from "../../components/bytemdViewer";
// import BytemdEditor from "../../components/bytemdEditor";
// import { CiEdit } from "react-icons/ci";
// import { MdCancelPresentation } from "react-icons/md";
// import { GiConfirmed } from "react-icons/gi";
import { Viewer, Editor } from "@bytemd/react";
import { CgClose } from "react-icons/cg";
import "bytemd/dist/index.css";
import "github-markdown-css";
import "./cardPage.css";

function cardPage() {
  const [content, setContent] = useState("# Hello, ByteMD!");
  const [previousContent, setPreviousContent] = useState("");
  const [editMode, setEditMode] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState(new Set());

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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      if (tags.size < 3) {
        setTags(new Set([...tags, inputValue.trim()]));
      } else {
        alert("最多可以添加三个标签");
      }

      setInputValue("");
    }
  };

  const removeTag = (tag) => {
    const updatedTags = new Set(tags);
    updatedTags.delete(tag);
    setTags(updatedTags);
  };

  return (
    <div className="bytemd-right">
      <div className="bytemd-navbar">
        {editMode ? (
          <div className="editMode-navbar">
            <div className="tag-box">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="添加标签..."
              />
              <div className="tag-n-close-btn-list">
                {[...tags].map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "8px",
                    }}
                  >
                    <div className="tag-n-close-btn">
                      <span>{tag}</span>
                      <CgClose onClick={() => removeTag(tag)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="btn-box">
              <button onClick={handleSave}>确定</button>
              <button onClick={handleCancel}>取消</button>
            </div>
          </div>
        ) : (
          <div className="uneditMode-navbar">
            <div className="tag-box">
              <div className="tag-list">
                {[...tags].map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "8px",
                    }}
                  >
                    <span className="tag">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
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
