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
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

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
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="bytemd-right">
      <div className="bytemd-navbar">
        {editMode ? (
          <div className="editMode-navbar">
            <div className="tag-box">
              <input
                className="tag-input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="添加标签..."
              />
              {tags.map((tag, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "8px",
                  }}
                >
                  <span>{tag}</span>
                  <button
                    className="tag-remove-btn"
                    onClick={() => removeTag(index)}
                    style={{ marginLeft: "4px" }}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <div className="btn-box">
              <button onClick={handleSave}>确定</button>
              <button onClick={handleCancel}>取消</button>
            </div>
          </div>
        ) : (
          <div className="uneditMode-navbar">
            <div className="tag-box">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "8px",
                  }}
                >
                  <span>{tag}</span>
                </div>
              ))}
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
