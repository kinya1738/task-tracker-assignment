import { useState, useEffect } from 'react';

export default function TaskForm({ onAdd, onSaveEdit, editingTask, onCancelEdit }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editingTask) setInput(editingTask.text);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) onSaveEdit(input);
    else onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={editingTask ? "Edit task..." : "Add new task..."}
      />
      <button type="submit">
        {editingTask ? "Save" : "Add"}
      </button>
      {editingTask && (
        <button type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}