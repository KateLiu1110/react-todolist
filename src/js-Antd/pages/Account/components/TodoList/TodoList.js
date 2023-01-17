import React, { useEffect, useState } from "react";
import { List, Skeleton, Divider  } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import ToolItem from "../ToolItem/ToolItem";
import mockData from "./mock";

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setData([...data, ...mockData.results]);
    setLoading(false);
    // fetch(
    //   "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    // )
    //   .then((res) => res.json())
    //   .then((body) => {
    //     setData([...data, ...body.results]);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 300,
        overflow: "auto",
        padding: "0 16px",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            active
            paragraph={{
              row: 1,
            }}
          />
        }
        endMessage={<Divider plain>已載完資料....</Divider>}
        scrollableTarget="scrollableDiv" // 指定滾動的父容器
      >
        <List
          dataSource={data}
          renderItem={(item) => <ToolItem listData={item} />}
          // pagination={{
          //   position: "bottom",
          //   pageSize: 10,
          // }}
        />
      </InfiniteScroll>
    </div>
  );
};

export default TodoList;
