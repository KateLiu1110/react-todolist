import React, { useState } from "react";
import { List, Switch, Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ToolItem = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };

  const confirm =()=>{
    this.$message.info('Clicked on Yes.');
  }

  return (
    <>
      <List.Item
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
      ></List.Item>
    </>
  );
};

export default ToolItem;
