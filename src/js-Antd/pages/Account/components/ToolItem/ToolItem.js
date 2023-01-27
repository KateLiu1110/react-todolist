import React, { useState } from "react";
import { List, Switch, Button, Popconfirm, Avatar, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import * as Style from "./style";

const ToolItem = ({ listData, deleteDataInfo }) => {
  const [disabled, setDisabled] = useState(false);
  const toggle = () => {
    setDisabled(!disabled);
  };

  const deleteItem = () => {
    deleteDataInfo(function (pre) {
      return pre.filter((item) => item.id !== id);
    });
  };

  const cancel = (e) => {
    console.log(e.target.value);
    message.error("取消刪除!");
  };
  const { id, email, picture, name } = listData;
  return (
    <List.Item key={email}>
      <List.Item.Meta
        avatar={<Avatar src={picture} />}
        title={<a href="https://ant.design">{name}</a>}
        description={email}
      />
      <Style.EditItem>
        {/* <Switch
          checkedChildren="編輯中"
          unCheckedChildren="關閉"
          onChange={toggle}
        /> */}
        {/* <Button type="primary" onClick={toggle}>
          Edit
        </Button> */}
        <Popconfirm
          title="請問要刪除嗎?"
          onConfirm={deleteItem}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={{ fontSize: "16px", color: "red" }} />
        </Popconfirm>
      </Style.EditItem>
    </List.Item>
  );
};

export default ToolItem;
