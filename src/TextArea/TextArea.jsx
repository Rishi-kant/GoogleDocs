import React, { useRef } from "react";
import style from "./TextArea.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomFileName, atomInputRef } from "../AtomData/atom";
import { useEffect } from "react";
function TextArea() {
  const divRef = useRef(null);
  const [inputref, setInputRef] = useRecoilState(atomInputRef);
  const fileName = useRecoilValue(atomFileName);
  useEffect(() => {
    setInputRef(divRef);
  });

  return (
    <>
      <div className={style.wholeArea}>
        <div
          id="textPage"
          ref={divRef}
          contentEditable={true}
          className={style.txtArea}
        ></div>
      </div>
    </>
  );
}

export default TextArea;
