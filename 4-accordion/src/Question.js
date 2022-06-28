import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ data }) => {
  const [opened, setOpened] = useState(false);
  const { title, info } = data;

  return (
    <article className="question">
      <h4>{title}</h4>

      <button onClick={() => setOpened(!opened)}>
        {opened ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      <div className="info"> {opened && info}</div>
    </article>
  );
};

export default Question;
