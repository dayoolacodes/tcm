import styled from "@emotion/styled";

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 7rem 2.4rem;

  .button-span button {
    padding: 0.5rem 1rem;
    margin-top: 2rem;
  }

  > div {
    margin: 0.8rem;
    justify-content: center;

    p {
      text-align: center;
      line-height: 2.4rem;
      &.header {
        font-size: 1.8rem;
        font-weight: 500;
      }
      &.desc {
        max-width: 36%.4rem;
      }
    }
  }

  @keyframes slow-blink {
    0% {
      opacity: 1;
      filter: drop-shadow(0.4rem 0.8rem 1.2rem #f2f6f8);
    }
    30% {
      opacity: 1;
      filter: drop-shadow(0.4rem 0.8rem 1.2rem #f2f6f8);
    }
    50% {
      opacity: 0.2;
      filter: drop-shadow(0rem 0rem 0rem #f2f6f8);
    }
    100% {
      opacity: 1;
      filter: drop-shadow(0.4rem 0.8rem 1.2rem #f2f6f8);
    }
  }

  svg {
    margin: 1.5rem auto;
    /* width: 5rem; */
    height: 7rem;
    animation-name: slow-blink;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
`;
