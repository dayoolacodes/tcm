import styled from "@emotion/styled";

export const Container = styled.div`
  background: #fdfdfd;
  height: 6.4rem;
  padding: 1.5rem 3.9rem;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 9;
  @media all and (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-top: 1px solid #dbdee1;
    border-bottom: 1px solid #dbdee1;
  }
  button {
    border-radius: 4px;
    padding: 0.7rem 0.8rem;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #0785f3;
    margin: 0 14px;
    transform: unset;
    display: inline-block;
    &.active {
      background: rgba(5, 108, 242, 0.1);
    }
  }
`;
