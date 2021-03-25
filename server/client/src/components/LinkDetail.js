import React, { useState } from "react";
import {connect} from "react-redux"
import * as actions from "../action"
import "materialize-css/dist/css/materialize.min.css";

function LinkDetail (props)  {

    
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(edit){
            const obj = {id,title,description,url};
            props.editLink(obj);
        }
        else{
            const obj = { title,  description,  url};
            props.addLink(obj);
        }
    }

    let id = "";
    var edit = false;
    if(props.location.state != null){
        edit = true;
        id = props.location.state._id;
    }

    const [header, setHeader] = useState(edit ? "Edit Link" : "Add a New Link");
    const [title, setTitle] = useState(edit ? props.location.state.title : "");
    const [description, setDescrption] = useState(edit ? props.location.state.description : "");
    const [url, setUrl] = useState(edit ? props.location.state.url : "");
    
    return (
      <div className = "LinkDetail">
              <h4>
                  {header}
              </h4>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Link Name"
                    id="title"
                    type="text"
                    className="validate"
                    value={title}
                    onChange={ e=> {
                        setTitle(e.target.value);
                    }}></input>
                <input
                    placeholder="Link Description"
                    id="description"
                    type="text"
                    className="validate"
                    value={description}
                    onChange={ e=> {
                        setDescrption(e.target.value);
                    }}></input>
                <input 
                    placeholder="https://yoururlhere.com" 
                    id="url"
                    type="text" 
                    className="validate"
                    value={url}
                    onChange={ e=> {
                        setUrl(e.target.value)
                    }}></input>
                <input type="submit" value="Submit" />
            </form>

      </div>
    );
}

export default connect(null,actions) (LinkDetail);
