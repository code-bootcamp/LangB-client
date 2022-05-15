import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Gamja Flower', cursive, 'Jua', sans-serif, 'Noto Sans KR',
      sans-serif;
    /* font-family: 'jintaek'  다운받은거 적용할때 */
  }
  // 나만의 폰트
  @font-face {
    font-family: 'Gamja Flower';
    src: url('/font/Gamja_Flower/GamjaFlower-Regular.ttf');
  }

  @font-face {
    font-family: 'Jua';
    src: url('/font/Jua/Jua-Regular.ttf');
  }
`;
