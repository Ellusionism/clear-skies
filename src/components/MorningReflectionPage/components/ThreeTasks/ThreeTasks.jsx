function ThreeTasks () {
  return (
    <div className="form-outline top-buffer">
        <input
        required
        type="textarea"
        id="three-tasks"
        className="form-control" />
        <label className="form-label" htmlFor="three-tasks">What 3 tasks do I need to get done today?</label>
      </div>
  )
}

export default ThreeTasks;