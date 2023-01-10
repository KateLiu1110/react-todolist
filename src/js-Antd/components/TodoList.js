import React, {useState} from "react";
import {List} from 'antd';
import ToolItem from "./ToolItem";

const TodoList =()=>{
    const [loading, setLoading] = useState(false);

    const loadMoreData = ()=>{
        if(loading){
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res)=> res.json())
            .then((body)=>{
                setData([...data,...body.results]);
                setLoading(false);
            })
    }
    return(
        <List
            locale={{
                emptyText:"There's nothing to do"
            }}
            renderItem={(item)=>(

            )}
        />

    )
}

export default TodoList