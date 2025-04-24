import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}