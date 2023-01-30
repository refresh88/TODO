import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리프레쉬 막기 위함.
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText(''); // 입력 후에 입력 값 초기화 하기 위함.
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
