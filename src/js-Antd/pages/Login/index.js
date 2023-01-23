import { Form, Input,Button } from "antd";

const Login = () => {
  return (
    <Form>
      <Form.Item>
        <h1>山海戀租車系統</h1>
      </Form.Item>
      <Form.Item
        label="帳號"
        name="username"
        rules={[{ required: true, message: "請輸入帳號!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密碼"
        name="userPassword"
        rules={[{ required: true, message: "請輸入密碼!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
    <Button type="primary" block>登入</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
