import React from "react";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import {LoaderStyles} from 'styles/AppStyles.style';
function Loader() {
    return (
      <LoaderStyles>
        <Spin indicator={<LoadingOutlined />}/>
      </LoaderStyles>
    )
}
export default Loader;
