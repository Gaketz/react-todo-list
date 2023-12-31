export default function Task(props) {
  return (
    <div className="card">
      <div className="row align-items-center justify-content-between m-3">
        <div className="col-auto xs-6">
          <h5
            className="card-title lead"
            style={{
              textDecoration: props.completed ? "line-through" : "none",
            }}
          >
            {props.taskName}
          </h5>
        </div>
        <div className="col-auto xs-6">
          <p
            className="card-text"
            style={{
              textDecoration: props.completed ? "line-through" : "none",
            }}
          >
            {props.description}
          </p>
        </div>
        <div className="col-auto row-xs-12">
          <button
            className="btn btn-warning m-2"
            onClick={() => props.completeTask(props.id)}
          >
            Complete
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
