import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: auto;
  /* box-sizing: border-box; */
  .body {
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    @media all and (max-height: 780px), (max-width: 400px) {
      overflow: auto;
      height: (100vh-6rem);
    }

    .children {
      height: 100%;
      flex-grow: 1;
      overflow: auto;
      @media all and (max-width: 1024px) {
        padding-top: 64px;
      }

      .ellipse6 {
        filter: blur(5px);
        position: absolute;
        right: 0;
        /* top: -40px; */
        z-index: -1;
        opacity: 0.7;
        width: 400px;
        @media all and (max-width: 768px) {
          display: none;
        }
      }
      .ellipse5 {
        filter: blur(5px);
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
        /* width: 400px; */
        @media all and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`;
