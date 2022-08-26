import React from "react";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  function backOne() {
    return navigate(-1);
  }

  return (
    <>
      <aside className="back_btn">
        <button onClick={backOne}>Back</button>
      </aside>
    </>
  );
};

export default BackBtn;
