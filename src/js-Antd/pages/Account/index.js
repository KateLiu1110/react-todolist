import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
// import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";
import EditModal from "./components/EditModal/EditModal";
// import mockData from "../Account/components/TodoList/mock.json";
import mockData from "./components/TodoList/mock";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data,setData]=useState([]);
  const [loading, setLoading] = useState(false);
  const moreDataFn = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setData([...data, ...mockData.results]);
    setLoading(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };



  useEffect(() => {
    moreDataFn();
  }, []);
  
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
            {/* <AddTodoForm /> */}
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
              <Button type="primary" onClick={showModal} block>
                <PlusCircleFilled />
                新增會員
              </Button>
            }
            bordered={false}
          >
            <TodoList listData={data} loadMoreData={moreDataFn} deleteData={setData}/>
          </Card>
        </Col>
      </Row>
        <EditModal openModal={isModalOpen} closeModal={setIsModalOpen} add={setData} />
    </>
  );
};

export default Index;
