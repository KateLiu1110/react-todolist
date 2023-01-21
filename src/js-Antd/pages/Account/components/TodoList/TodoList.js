import React from "react";
import { List, Skeleton, Divider  } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import ToolItem from "../ToolItem/ToolItem";

const TodoList = ({listData, loadMoreData}) => {
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
        dataLength={listData.length}
        next={loadMoreData}
        hasMore={listData.length < 50}
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
          dataSource={listData}
          renderItem={(item) => <ToolItem listData={item} />}
        />
      </InfiniteScroll>
    </div>
  );
};

export default TodoList;
