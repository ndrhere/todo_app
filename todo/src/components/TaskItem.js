
import React from 'react';

const TaskItem = React.memo(({ task, index, onDelete, onToggleStatus }) => {
  console.log(`Rendering task ${index}`); 
  
  return (
    <div className="col-md-4" key={index}>
      <div className="card my-3">
        <div className="card-body">
          <h5>Task Name:</h5>
          <p style={{ fontWeight: 'bold', color: '#1a3df1' }}>{task.name}</p>
          <p style={{ fontWeight: 'bold' }}>
            Status-<span className={task.status === 'Completed' ? 'statusC' : 'statusCs'}>{task.status}</span>
          </p>
        </div>
      </div>
      <button className="btn btn-success mx-1" type="button" onClick={() => onDelete(index)}>Delete</button>
      <button className="btn btn-success mx-1" type="button" onClick={() => onToggleStatus(index)}>Complete</button>
    </div>
  );
});

export default TaskItem;
