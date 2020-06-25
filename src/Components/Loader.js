import React from "react";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
function Loader() {
    return (
        <Spin indicator={<LoadingOutlined />}/>
    )
}
export default Loader;
