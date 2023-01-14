import React, { useEffect, useState } from "react";
import { List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
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
    // loadMoreData()
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 800,
        overflow: "auto",
        padding: "0 16px",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={true}
        loader={
          <Skeleton
            avatar
            active
            paragraph={{
              row: 1,
            }}
          />
        }
        endMessage={<p>已載完資料....</p>}
        scrollableTarget="scrollableDiv" // 指定滾動的父容器
      >
        <List
          dataSource={data}
          locale={{
            emptyText: "There's nothing to do",
          }}
          renderItem={(item) => <ToolItem listData={item} />}
          pagination={{
            position: "bottom",
            pageSize: 10,
          }}
        />
      </InfiniteScroll>
    </div>
  );
};

export default TodoList;
