function LookingForward(setLookingForward) {

  const handleInputChange = (event) => {
    event.preventDefault();
    setLookingForward(event.target.value);
    console.log(event.target.value);
  }

  return(
    <div className="form-outline top-buffer">
      <textarea
      required
      value={' '}
      onChange={event => handleInputChange(event)}
      rows="4"
      id="greatest-challenge"
      className="form-control border" />
      <label
      className="form-label"
      htmlFor="greatest-challenge"
      >What will be my greatest challenge today?</label>
    </div>
  )
}

export default LookingForward;