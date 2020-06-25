import React from "react";
import { Button, Form, Modal } from "antd";
import actions from "redux/User/actions";
import { store } from "redux/store";

function AddModal({ visible, title, handleConfirm, loader, formFields }) {
  function handleCancel() {
    store.dispatch({ type: actions.SHOW_COMMENT_MODAL, payload: false });
  }

  return (
    <Modal
      title={title}
      visible={visible}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loader}
          form="add-comment"
          htmlType="submit"
        >
          Save
        </Button>
      ]}
      onCancel={handleCancel}
      destroyOnClose={true}
    >
      <Form id="add-comment" colon={false} hideRequiredMark={true} onFinish={handleConfirm} name={'add-comment'}>
          {formFields}
      </Form>
    </Modal>
  );
}
export default AddModal;
