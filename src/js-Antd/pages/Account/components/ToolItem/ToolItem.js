import React, { useState } from "react";
import { List, Switch, Button, Popconfirm, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import * as Style from "./style";

const ToolItem = ({ listData }) => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };

  const confirm = () => {
    this.$message.info("Clicked on Yes.");
  };
  const { email, picture, name } = listData;
  return (
    <List.Item key={email}>
      <List.Item.Meta
        avatar={<Avatar src={picture.large} />}
        title={<a href="https://ant.design">{name.last}</a>}
        description={email}
      />
      <Style.EditItem>
        <Switch
          disabled={disabled}
          defaultChecked
          checkedChildren="編輯中"
          unCheckedChildren="關閉"
        />
        <Button type="primary" onClick={toggle}>
          Edit
        </Button>
        <Popconfirm
          title="請問要刪除嗎?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined twoToneColor="#eb2f96" />
        </Popconfirm>
      </Style.EditItem>
    </List.Item>
  );
};

export default ToolItem;
