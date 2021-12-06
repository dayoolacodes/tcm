import React, { Component } from "react";
import styled from "@emotion/styled";
import { device } from "styles";
import colors from "styles/colors";
import COLORS from "styles/colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 4rem);

  h2 {
    font-size: 10rem;
  }
`;

const Message = styled.div`
  border-radius: 5px;
  font-size: 2.4rem;
  color: ${colors.primary};
  text-align: center;
  padding: 20px;
  .refresh {
    text-decoration: underline;
    color: ${COLORS.primaryOrange};
    cursor: pointer;
  }
  @media ${device.laptop} {
    padding: 40px;
  }
`;

export const ErrorBoundaryFallback = () => (
  <Container>
    <Message>
      Oops! Something went wrong. <br />
      <span onClick={() => window.location.reload()} className="refresh">
        Click to refresh!
      </span>
    </Message>
  </Container>
);

class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorBoundaryFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
