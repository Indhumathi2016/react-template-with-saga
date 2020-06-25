import React, { useEffect } from "react";
import { AppStyles } from "styles/AppStyles.style";
import { Button, Card, Col, Row } from "antd";
import { useSelector } from "react-redux";
import { store } from "redux/store";
import actions from "redux/User/actions";
import { Link } from "react-router-dom";
import Loader from "components/Loader";

function App() {
  const { users, isFetchingUsers } = useSelector(state => state.User);
  useEffect(() => {
    store.dispatch({ type: actions.GET_USERS });
  }, []);
  return (
    <AppStyles>
      {isFetchingUsers ? (
        <Loader />
      ) : (
        <Row gutter={[20, 20]}>
          {users.map((user, index) => (
            <Col span={6} key={index}>
              <Card>
                <div className={"user"}>{user.name}</div>
                <div className={"details m-t-20"}>
                  <div>{user.email}</div>
                  <div>{user.phone}</div>
                  <div>{user.website}</div>
                </div>
                <div className={"company m-t-20"}>
                  <div>{user.company.name}</div>
                  <div>{user.company.catchPhrase}</div>
                  <div>{user.company.bs}</div>
                </div>
                <div />
                <Button className={"m-t-20"}>
                  <Link to={`/users/${user.id}`}>Details</Link>
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </AppStyles>
  );
}

export default App;
