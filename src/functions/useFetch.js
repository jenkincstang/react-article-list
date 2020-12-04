import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url){
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(url).then(res => res.data).then(data => setData(data))
    },[])
    return data;
}
