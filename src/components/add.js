import React from 'react'

const Add = ({ addStatus, toggleAdd, addJoke }) => {
  return (
    <div className="card">
      <div className="card-header text-center">
        <a href="/#" className="btn btn-primary" onClick={() => toggleAdd()}>Add a Joke</a>
      </div>
      {addStatus ? <AddForm addJoke={addJoke}/> : null}
    </div>
  )
}

const AddForm = ({ addJoke }) => {
  return (
    <div className="card-body text-center">
      <h5 className="card-title">Enter Joke Text and Corresponding Image URL</h5>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Joke</span>
          </div>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="joke_input">
          </input>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">URL</span>
          </div>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="url_input">
          </input>
        </div>
      <a href="/#" className="btn btn-primary" onClick={()=> addJoke()}>Submit</a>
    </div>
  )
}
export default Add