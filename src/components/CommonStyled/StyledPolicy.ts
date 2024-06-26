import styled from 'styled-components';

const StyledPolicy = styled.main`
  color: var(--gray-900);
  font-size: var(--text-m);

  & > p {
    margin: 0 auto 24px;
    max-width: 976px;
  }

  section {
    max-width: 976px;
    margin: 0 auto;

    a {
      border-bottom: 1px solid var(--gray-600);
    }

    li + li {
      margin-top: 24px;
    }

    h4 {
      display: block;
      font-size: var(--text-m);
      font-weight: 600;
      margin-bottom: 6px;
    }

    p + p {
      margin-top: 4px;
    }
  }

  ul {
    li + li {
      margin-top: 8px;
      padding-top: 0;
      border-top: none;
    }
  }

  ul ul {
    margin: 4px 0 0 16px;
    font-size: var(--text-s);

    li + li {
      margin-top: 6px;
    }
  }

  margin: 0 var(--right-padding-pc) 0 var(--nav-width-pc);
  padding: var(--padding-top-pc) var(--margin-pc) 52px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    padding: calc(var(--nav-height-tablet)) 24px 32px;
  }

  @media (max-width: 430px) {
    margin: 0 auto;
    padding: calc(var(--nav-height-mobile) + 36px) 16px;

    & > p {
      margin: 0 auto;
    }
  }
`;

export default StyledPolicy;
