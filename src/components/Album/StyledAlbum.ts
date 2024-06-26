import Link from 'next/link';

import styled from 'styled-components';

interface Props {
  $imageUrl: string | null;
}

const AlbumContainer = styled.article<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: ${(props) => {
    if (!props.$imageUrl) {
      return 'linear-gradient(0deg, #343434 5.58%, rgba(126, 126, 126, 0) 40.58%, rgba(225, 225, 225, 0) 105.15%), var(--gray-200)';
    } else
      return `linear-gradient(0deg, #343434 5.58%, rgba(126, 126, 126, 0) 40.58%, rgba(225, 225, 225, 0) 105.15%), url('${props.$imageUrl}') no-repeat center / cover`;
  }};
  .txtWrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 2rem 1.5rem;
    .albumTitle {
      color: var(--background-color);
      font-size: var(--title-m);
    }
    .CountWrapper {
      display: flex;
      justify-content: space-between;
      align-items: end;
      .albumCount {
        color: var(--gray-200);
        font-family: var(--title-font-family);
        font-size: var(--text-l);
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        height: 20px;
      }
      button {
        width: 3rem;
        height: 2rem;
        background: url('/icons/more-white.svg') no-repeat center/ contain;
      }
      button::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 6rem;
        height: 6rem;
      }
    }
  }
`;

const AlbumLink = styled(Link)`
  display: block;
  width: inherit;
  height: inherit;
`;

export { AlbumContainer, AlbumLink };
