import styled from 'styled-components';

const StyledSharingModal = styled.dialog`
  overflow: hidden;
  border-radius: 10px;
  color: var(--gray-900);
  background: var(--background-color);
  width: 280px;

  & > div {
    position: relative;
    font-size: var(--text-l);
  }

  .search-member {
    padding: 12px 16px 16px;
  }

  .search {
    margin: 0 0 8px;
    display: flex;
    border-radius: 10px;
    border: 1px solid var(--gray-200);
  }

  input {
    padding: 6px 0 5px 12px;
    min-width: 0;
    flex-grow: 1;
    font-size: var(--text-m);
  }

  input:focus {
    outline: none;
  }

  .search.focus {
    border-color: var(--point-color);
    outline: 1px solid var(--point-color);
  }

  .search > button {
    padding: 0 12px;

    img {
      margin: auto;
      width: 18px;
      height: 18px;
      aspect-ratio: 1/1;
    }
  }

  div.member {
    padding: 12px;
    background: var(--gray-100);
    border-radius: 8px;
  }

  .manage {
    margin-left: 16px;
    font-size: var(--text-s);
    color: var(--gray-600);
  }

  ul {
    margin: 4px 0 10px;
  }

  .member {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;

    div {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      line-height: 1;
      font-size: var(--text-m);

      span {
        display: block;
      }

      span:last-child {
        margin-top: 2px;
        font-size: var(--text-s);
      }
    }

    button {
      flex-shrink: 0;
      margin: 0 -5px 0 auto;
      padding: 11px 5px;
      line-height: 1;
      font-size: var(--text-m);
      color: var(--error-color);
    }

    img {
      flex-shrink: 0;
      width: 3.2rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      border: 1px solid var(--gray-100);
    }
  }

  .close-button {
    position: absolute;
    box-sizing: content-box;
    top: 4px;
    right: 6px;
    width: 1.6rem;
    aspect-ratio: 1/1;
    padding: 10px;
  }
`;

const DialogTitle = styled.strong`
  display: block;
  padding: 10px 16px;
  text-align: center;
  font-size: var(--text-l);
  border-bottom: 1px solid var(--gray-200);
`;

export { StyledSharingModal, DialogTitle };
