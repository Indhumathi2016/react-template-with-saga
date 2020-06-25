import styled from "styled-components";
import variables from "styles/variables";
export const AppStyles = styled.div`
  background: ${variables.WHITE_COLOR};
  .details {
    text-decoration: underline;
    color: ${variables.LINK_COLOR};
    * {
      color: ${variables.LINK_COLOR};
    }
  }
`;
export const LoaderStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserStyles = styled.div`
  .ant-card {
    cursor: pointer;
  }
`;
export const PageHeaderStyles = styled.div`
  display: flex;
  padding: 15px 0;
  align-items: center;
  h2 {
    margin-left: 30px;
  }
`;
export const PostStyles = styled.div`
  .ant-card {
    margin: 10px 0px;
  }
  .link {
    color: ${variables.LINK_COLOR};
    cursor: pointer;
    text-decoration: underline;
  }
  .name,
  .comments {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:first-child {
      font-weight: 600;
    }
  }
  .comments {
    margin: 20px 0;
  }
`;
