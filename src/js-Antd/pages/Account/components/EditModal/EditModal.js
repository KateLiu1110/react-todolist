import { Form, Upload, Radio, Input } from "antd";
import { useState } from "react";
import mockData from "../TodoList/mock.json";

const EditModal = ({add}) => {
  const [fileList, setFileList] = useState([]);
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <>
      <Form>
        <Form.Item label="會員照片">
          <Upload
            action= {mockData.results}
            listType="picture-card"
            fileList={fileList} //上傳列表檔案
            onChange={handleChange}
          >
            Upload
          </Upload>
        </Form.Item>
        <Form.Item label="性別">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="姓名">
          <Input />
        </Form.Item>
        <Form.Item label="信箱">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default EditModal;
