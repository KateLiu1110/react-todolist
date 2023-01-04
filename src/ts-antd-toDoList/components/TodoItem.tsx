import React from "react";
import { Tooltip, List, Switch, Popconfirm, Button } from "antd";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { ITodo } from "../store/todo.model";

interface ITodoItemProps {
  todo: ITodo;
}

/**
 * React.FC (use ts in react)
 * List.Item actions=>列表顯示位置
 * Tooltip 文字提示
 * Popconfirm 氣泡確認框
 */
export const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  return (
    <List.Item
      className=""
      key={todo.id}
      actions={[
        <Tooltip title={true ? "Mark as uncompleted" : "Mark as completed"}>
          <Switch 
            defaultChecked={todo.completed}
            checkedChildren={<CheckOutlined/>}
            unCheckedChildren={<CloseOutlined/>}
            onChange={()=>}
           />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {}}
        >
          <Button>X</Button>
        </Popconfirm>,
      ]}
    ></List.Item>
  );
};
