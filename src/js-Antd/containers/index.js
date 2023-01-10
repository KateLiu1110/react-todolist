import React from "react";
import { Card, Row, Col } from "antd";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

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
          <Card title="新建會員資料" bordered={false}>
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
