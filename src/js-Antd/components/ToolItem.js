import React, { useState } from "react";
import { List, Switch, Button, Popconfirm, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ToolItem = ({ listData }) => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };

  const confirm = () => {
    this.$message.info("Clicked on Yes.");
  };
  const { email,picture,name } = listData;
  return (
    <>
      <List.Item
        key={email}
        className="list-item"
        actions={[
          <>
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
          </>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={picture.large}/>}
          title={<a href="www">{name.last}</a>}
          description={email}
        />
      </List.Item>
    </>
  );
};

export default ToolItem;
