import React from "react";
import {connect} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { deleteArticle } from "../actions/index";

const mapStateToProps = state =>{
    return {
        articles:state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        delArt:article=>dispatch(deleteArticle(article))
    }
}

const List = ({articles,delArt}) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    articles.map(article => {
                        return (
                        <tr key={uuidv4()}>
                            <td>{article.id}</td>
                            <td>{article.title}</td>
                            <td><button onClick={()=>delArt(article)}>delete</button></td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

const ArticleList = connect(mapStateToProps,mapDispatchToProps)(List);

export default ArticleList;