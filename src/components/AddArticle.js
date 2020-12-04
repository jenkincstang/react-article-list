import React, { useState } from "react";
import { connect } from "react-redux";
import {addArticle,deleteArticle} from "../actions/index"

const mapDispatchToProps = (dispatch) =>{
    return{
        addAtc:article => dispatch(addArticle(article)) 
    }
}

const NewArticle = ({addAtc}) => {
    const initState = {
        id:"",
        title:""
    };

    const [state,setState] = useState(initState);

    const handleChange = (event) =>{
        setState(
            {
                ...state,[event.target.id]:event.target.value
            }
        )
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        addAtc({...state});
        setState(initState); 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="id" value={state.id} onChange={handleChange} placeholder="input id"/>
                <input id="title" value={state.title} onChange={handleChange} placeholder="input title"/>
                <button type="submit">save</button>
            </form>
        </div>
    )
}

const AddArticle = connect(null,mapDispatchToProps)(NewArticle);

export default AddArticle;