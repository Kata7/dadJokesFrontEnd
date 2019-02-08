import React from 'react'

const CardList = ({ cardList, editJoke, deleteJoke }) => {
  const list = cardList.map(card => <Card key={card.id} id={card.id} text={card.text} url={card.url} editJoke={editJoke} deleteJoke={deleteJoke}/>)
  return (
    <div>
      {list}
    </div>
  )
}

const Card = ({ id, text, url, editJoke, deleteJoke }) => {

  return (
    <div className="card">
    <h2>ID: {id}</h2>
      <div className="card-body row">
        <div className="col-lg-10 col-sm-12">
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">Joke</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="jokeEdit_input" defaultValue={text}>
            </input>
          </div>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">URL</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="urlEdit_input" defaultValue={url}>
            </input>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="row">
            <div className="col-lg-12 col-6">
              <a href="/#" className="btn btn-success" onClick={(e) => editJoke(e, id)}>Edit</a>
            </div>
            <div className="col-lg-12 col-6">
              <a href="/#" className="btn btn-danger" onClick={() => deleteJoke(id)}>Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CardList