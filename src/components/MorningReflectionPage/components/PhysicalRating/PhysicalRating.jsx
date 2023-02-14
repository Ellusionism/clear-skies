function PhysicalRating() {
  return (
    <>
      <div className="form-outline">
          <p className="top-buffer">How would I rate my physical health today?</p>
          <div className="btn-group">
            <input type="radio" value={1} className="btn-check" id="physical-1" autoComplete="off" />
            <label className="btn btn-secondary" htmlFor="physical-1">1</label>

            <input type="radio" value={2} className="btn-check" id="physical-2" autoComplete="off" />
            <label className="btn btn-secondary" htmlFor="physical-2">2</label>

            <input type="radio" value={3} className="btn-check" id="physical-3" autoComplete="off" />
            <label className="btn btn-secondary" htmlFor="physical-3">3</label>

            <input type="radio" value={4} className="btn-check" id="physical-4" autoComplete="off" />
            <label className="btn btn-secondary" htmlFor="physical-4">4</label>

            <input type="radio" value={5} className="btn-check" id="physical-5" autoComplete="off" />
            <label className="btn btn-secondary" htmlFor="physical-5">5</label>
          </div>
        </div>
        <div className="form-outline top-buffer">
        <input
          type="textarea"
          id="physical-comment"
          className="form-control" />
          <label className="form-label" htmlFor="physical-comment">If not a 5, how am I going to improve it today?</label>
        </div>
      </>
  )
}

export default PhysicalRating;