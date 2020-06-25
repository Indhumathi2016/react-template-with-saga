import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { PageHeaderStyles } from "styles/AppStyles.style";
import { Link } from "react-router-dom";

function CustomHeader({ title, path, extra }) {
  return (
    <PageHeaderStyles>
      <span>
        <Link to={path}>
          <ArrowLeftOutlined /> Back
        </Link>
      </span>
      <h2>{title}</h2>
        {extra}
    </PageHeaderStyles>
  );
}
export default CustomHeader;
