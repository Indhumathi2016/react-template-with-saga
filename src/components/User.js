import React, { useEffect, useState } from "react";
import { store } from "redux/store";
import actions from "redux/User/actions";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "antd";
import { UserStyles } from "styles/AppStyles.style";
import CustomHeader from "components/CustomHeader";
import ButtonField from 'components/ButtonField';
import CommentModal from 'components/CommentModal';
import PostFormFields from 'components/PostFormFields';

function User() {
  const { userPosts, users, isShowCommentModal, addCommentLoader } = useSelector(state => state.User),
    [userName, setUserName] = useState("");
  let { id } = useParams();

  useEffect(
    () => {
      store.dispatch({
        type: actions.GET_USER_POSTS,
        userId: id
      });
      const user = users.find(user => user.id === parseInt(id));
      if (user) {
        setUserName(user.name);
      }
    },
    [id, users]
  );

  function onClickPost(post) {
    store.dispatch({
      type: actions.SET_POST_DETAILS,
      userName,
        post,
    });
  }
  function handleConfirm(values) {
      store.dispatch({type: actions.ADD_POST})
  }
  return (
    <UserStyles>
      <CustomHeader title={userName} path={"/"} extra={<ButtonField />}/>
      {userPosts.map((post, index) => (
        <Card key={index} onClick={() => onClickPost(post)}>
          <Link to={`/users/${id}/post/${post.id}`}>{post.title}</Link>
        </Card>
      ))}
        <CommentModal
            visible={isShowCommentModal}
            title={"Add Post"}
            handleConfirm={handleConfirm}
            loader={addCommentLoader}
            formFields={<PostFormFields />}
        />
    </UserStyles>
  );
}

export default User;
