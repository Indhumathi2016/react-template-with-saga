import React from "react";
import { Form, Input } from "antd";

function PostFormFields() {
  return (
    <>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Body"
        name="body"
        rules={[{ required: true, message: "Please input your post!" }]}
      >
        <Input.TextArea />
      </Form.Item>
    </>
  );
}
export default PostFormFields;
