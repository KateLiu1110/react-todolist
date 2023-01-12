import React, { useEffect, useState } from "react";
import { List } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import ToolItem from "./ToolItem";

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <InfiniteScroll>
        <List
        dataSource={data}
        locale={{
            emptyText: "There's nothing to do",
        }}
        renderItem={(item) => <ToolItem />}
        pagination={{
            position:'bottom',
            pageSize: 10
        }}
        />
    </InfiniteScroll>

  );
};

export default TodoList;
