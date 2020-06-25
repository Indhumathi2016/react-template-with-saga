import React from "react";
import { Form, Input } from "antd";

function CommentFormFields() {
  return (
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Body"
        name="body"
        rules={[{ required: true, message: "Please input your comment!" }]}
      >
        <Input.TextArea />
      </Form.Item>
    </>
  );
}
export default CommentFormFields;
