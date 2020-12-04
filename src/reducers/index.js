import {ADD_ARTICLE,DELETE_ARTICLE} from "../constants/index"
 
const initState = [
    {id:1,title:"hello world, i love study"},
    {id:2,title:"i love you, you love me"}
];

export default function rootReducer(state=initState,action){
    switch(action.type){
        case ADD_ARTICLE:{
            return[
                ...state,
                action.payload
            ]
        }
        case DELETE_ARTICLE:{
            return [...state.filter(article=>article.id!==action.payload.id)]
        }
        default:
            return state;
    }
} 

