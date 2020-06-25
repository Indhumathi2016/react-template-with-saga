import React from "react";
import { Button } from "antd";
import { store } from "redux/store";
import actions from "redux/User/actions";

function ButtonField() {
  function onAddPost() {
    store.dispatch({ type: actions.SHOW_COMMENT_MODAL, payload: true });
  }
  return (
    <Button className={'btn-circle'} shape="circle" type={"primary"} onClick={onAddPost}>
      {" "}
      +{" "}
    </Button>
  );
}
export default ButtonField;
