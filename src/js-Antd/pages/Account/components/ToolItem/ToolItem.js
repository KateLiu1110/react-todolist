import React, { useState } from "react";
import { List, Switch, Button, Popconfirm, Avatar, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import * as Style from "./style";

const ToolItem = ({ listData }) => {
  const [disabled, setDisabled] = useState(false);
  const toggle = () => {
    setDisabled(!disabled);
  };

  const confirm = (e) => {
    console.log(e.target);
    console.log(listData);
    listData.picture='';
    listData.name = '';
    listData.email= '';
    message.success('刪除成功!');
  };

  const cancel =(e)=>{
    console.log(e.target.value);
    message.error('取消刪除!');
  }
  const { email, picture, name } = listData;
  return (
    <List.Item key={email}>
      <List.Item.Meta
        avatar={<Avatar src={picture} />}
        title={<a href="https://ant.design">{name}</a>}
        description={email}
      />
      <Style.EditItem>
        <Switch
          checkedChildren="編輯中"
          unCheckedChildren="關閉"
          onChange={toggle}
        />
        {/* <Button type="primary" onClick={toggle}>
          Edit
        </Button> */}
        <Popconfirm
          title="請問要刪除嗎?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />
        </Popconfirm>
      </Style.EditItem>
    </List.Item>
  );
};

export default ToolItem;
