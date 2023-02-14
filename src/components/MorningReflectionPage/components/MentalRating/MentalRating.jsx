function MentalRating() {
  return (
    <>
      <div className="form-outline">
        <p className="top-buffer">How would I rate my mental health today?</p>
        <div className="btn-group">
          <input type="radio" value={1} className="btn-check" id="mental-1" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="mental-1">1</label>

          <input type="radio" value={2} className="btn-check" id="mental-2" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="mental-2">2</label>

          <input type="radio" value={3} className="btn-check" id="mental-3" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="mental-3">3</label>

          <input type="radio" value={4} className="btn-check" id="mental-4" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="mental-4">4</label>

          <input type="radio" value={5} className="btn-check" id="mental-5" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="mental-5">5</label>
        </div>
      </div>
      <div className="form-outline top-buffer">
      <input
        type="textarea"
        id="mental-comment"
        className="form-control" />
        <label className="form-label" htmlFor="mental-comment">If not a 5, how am I going to improve it today?</label>
      </div>
    </>
  )
}

export default MentalRating;