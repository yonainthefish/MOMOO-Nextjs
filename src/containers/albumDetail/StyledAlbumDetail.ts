import styled from 'styled-components';

const StyledAlbum = styled.main`
  position: relative;
  min-height: calc(100vh - var(--padding-top-pc));
  display: flex;
  flex-direction: column;
  padding: 0 var(--margin-pc) 56px;
  margin: var(--padding-top-pc) var(--right-padding-pc) 0 var(--nav-width-pc);

  section {
    position: relative;
    margin: calc(64px + var(--title-s) * 1.5) auto 0;
    flex-grow: 1;
    width: min(976px, 100%);
  }

  @media (max-width: 1024px) {
    padding: calc(59px + var(--nav-height-tablet)) var(--margin-tablet) 0;
    margin: 0;
    min-height: 100vh;

    section {
      margin-top: calc(12px + var(--title-s) * 1.5);
    }
  }

  @media (max-width: 430px) {
    padding: var(--nav-height-mobile) var(--margin-mobile);

    section {
      margin: 0;
      padding: 40px 0 0;
    }
  }
`;

const StyledFeedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: -8px -8px;
  grid-auto-rows: 1px;

  @media (max-width: 430px) {
    margin: -6px -6px 0;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 430px) {
    margin-top: 0;
  }
`;

const StyledAddFeed = styled.div`
  position: fixed;
  width: 100%;
  padding: 0 var(--right-padding-pc) 0 var(--nav-width-pc);
  z-index: 100;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    padding: 0 var(--margin-tablet) 0;
  }

  button {
    display: block;
    margin: auto;
    padding: 16px;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    background: white;
  }

  img {
    width: 24px;
    aspect-ratio: 1/1;
  }
`;

export default StyledAlbum;
export { StyledFeedList, StyledAddFeed };
