function AttentionSupport() {
  return (
    <div className="form-outline top-buffer">
        <input
        required
        type="textarea"
        id="attention-support"
        className="form-control" />
        <label className="form-label" htmlFor="attention-support">Who needs my attention/support most today?</label>
      </div>
  )
}

export default AttentionSupport;