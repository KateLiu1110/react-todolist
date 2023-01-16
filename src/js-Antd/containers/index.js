import React from "react";
import { Card, Row, Col, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import AddTodoForm from "../components/AddTodoForm/AddTodoForm";
import TodoList from "../components/TodoList/TodoList";

const Index = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="戶外俱樂部" bordered={false}>
            <AddTodoForm />
          </Card>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card
            title="會員清單"
            extra={
              <Button type="primary" htmlType="submit" block>
                <PlusCircleFilled />
                新增會員
              </Button>
            }
            bordered={false}
          >
            <TodoList />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
