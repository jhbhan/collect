import React , {useState} from 'react';
import {Link} from 'react-router-dom';

function NewRoom (props){


  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const [url, setUrl] = useState("");
  
  return (  
      <div className="Room col s4">
        <div className="card darken-1">
          <div className="card-content ">
            <span className="card-title"><input
                    placeholder="Link Name"
                    id="title"
                    type="text"
                    className="validate"
                    value={title}
                    onChange={ e=> {
                        setTitle(e.target.value);
                    }}></input>
                </span>
            <p><input
                    placeholder="Link Description"
                    id="description"
                    type="text"
                    className="validate"
                    value={description}
                    onChange={ e=> {
                        setDescrption(e.target.value);
                    }}></input></p>
          </div>
          <div className="card-action">
            <div style={{display:'flex', justifyContent: 'space-between'}}>
            <input
              placeholder="Link URL"
              id="url"
              type="text"
              className="validate"
              value={url}
              onChange={ e=> {
                  setUrl(e.target.value);
              }}></input>
            </div>
              
          </div>
        </div>
      </div>
  );
    
}

export default NewRoom;