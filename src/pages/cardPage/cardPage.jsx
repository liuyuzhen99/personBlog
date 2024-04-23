import React from "react";
import { useState } from "react";
import BytemdViewer from "../../components/bytemdViewer";
import BytemdEditor from "../../components/bytemdEditor";
import { CiEdit } from "react-icons/ci";
import { MdCancelPresentation } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import "./cardPage.css";

function cardPage() {
  const [showEditPage, setShowEditPage] = useState(true);
  const [buttonField, setButtonField] = useState(true);

  const handleBtnClick = () => {
    setShowEditPage(!showEditPage);
    setButtonField(!buttonField);
  };
  return (
    <div>
      <div className="top-bar">
        <text>tag</text>
        <button className="edit-btn" onClick={handleBtnClick}>
          {buttonField ? (
            <CiEdit />
          ) : (
            <div>
              <MdCancelPresentation />
              <GiConfirmed />
            </div>
          )}
        </button>
      </div>
      <div>{showEditPage ? <BytemdEditor /> : <BytemdViewer />}</div>
    </div>
  );
}

export default cardPage;
