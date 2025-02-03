import { Button, Form, Input } from "antd";

const Signup = () => {
  const onFinish = (values: any) => {
    console.log("Signup:", values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="name" rules={[{ required: true, message: "Enter your name" }]}>
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true, message: "Enter your email" }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "Enter your password" }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
