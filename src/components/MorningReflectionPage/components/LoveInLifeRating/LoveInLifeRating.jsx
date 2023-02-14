function LoveInLifeRating() {
  return (
    <>
      <div className="form-outline">
        <p className="top-buffer">How would I rate the amount of <br></br> love in my life today?</p>
        <div className="btn-group">
          <input type="radio" value={1} className="btn-check" id="love-in-life-1" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="love-in-life-1">1</label>

          <input type="radio" value={2} className="btn-check" id="love-in-life-2" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="love-in-life-2">2</label>

          <input type="radio" value={3} className="btn-check" id="love-in-life-3" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="love-in-life-3">3</label>

          <input type="radio" value={4} className="btn-check" id="love-in-life-4" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="love-in-life-4">4</label>

          <input type="radio" value={5} className="btn-check" id="love-in-life-5" autoComplete="off" />
          <label className="btn btn-secondary" htmlFor="love-in-life-5">5</label>
        </div>
      </div>
      <div className="form-outline top-buffer">
      <input
        type="textarea"
        id="love-in-life-comment"
        className="form-control" />
        <label className="form-label" htmlFor="love-in-life-comment">If not a 5, how am I going to improve it today?</label>
      </div>
    </>
  )
}

export default LoveInLifeRating;