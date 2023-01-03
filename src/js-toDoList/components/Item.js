


const Item = ({id,noteData,dateData,timeData,deleteDataInfo})=>{
    function deleteItem(){
        deleteDataInfo(function(pre){
            return pre.filter(item=>item.id !== id)
        })
    }
    return <div className="item">
        <p>{noteData}</p>
        <p>{dateData}</p><p>{timeData}</p>
        <button onClick={deleteItem} className="remove">刪除</button>
    </div>
}

export default Item