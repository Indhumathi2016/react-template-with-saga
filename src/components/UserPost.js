import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomHeader from "components/CustomHeader";
import { useParams } from "react-router-dom";
import { store } from "redux/store";
import actions from "redux/User/actions";
import { PostStyles } from "styles/AppStyles.style";
import { Button, Card } from "antd";
import AddModal from "components/AddModal";
import CommentFormFields from "components/CommentFormFileds";

function UserPost(props) {
  const {
      currentUserName,
      comments,
      currentPost,
      isShowModal,
      isAdding,
      isRemovingPost
    } = useSelector(state => state.User),
    { userId, postId } = useParams(),
    [showComment, updateShowComment] = useState(false);

  useEffect(
    () => {
      store.dispatch({
        type: actions.GET_USER_POST_DETAILS,
        postId: postId
      });
    },
    [postId]
  );
  function addComment() {
    store.dispatch({ type: actions.SHOW_COMMENT_MODAL, payload: true });
  }
  function handleConfirm(values) {
    store.dispatch({ type: actions.ADD_COMMENT, payload: values, postId });
  }
  function onRemovePost() {
    store.dispatch({ type: actions.REMOVE_POST, postId, userId });
  }

  return (
    <PostStyles>
      <CustomHeader
        title={currentUserName}
        path={`/users/${userId}`}
        extra={
          <Button
            loading={isRemovingPost}
            type="primary"
            onClick={onRemovePost}
          >
            Remove
          </Button>
        }
      />
      <h1 className={"m-t-20"}>{currentPost.title}</h1>
      <p className={"m-t-20"}>{currentPost.body}</p>
      <div className={"comments"}>
        <div className={"link"} onClick={() => updateShowComment(!showComment)}>
          {!showComment ? "Show Comments" : "Hide Comments"}
        </div>
        <div className={"link"} onClick={addComment}>
          Add Comments
        </div>
      </div>
      {showComment && (
        <>
          {comments.map((comment, index) => (
            <Card key={index}>
              <div className={"name"}>
                <span>{comment.name}</span>
                <span className={"link"}>{comment.email}</span>
              </div>
              <div className={"m-t-20"}>{comment.body}</div>
            </Card>
          ))}
        </>
      )}
      <AddModal
        visible={isShowModal}
        title={"Add Comment"}
        handleConfirm={handleConfirm}
        loader={isAdding}
        formFields={<CommentFormFields />}
      />
    </PostStyles>
  );
}
export default UserPost;
