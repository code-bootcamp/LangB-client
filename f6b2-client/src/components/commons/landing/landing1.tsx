import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

const hexaFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `;

const textScale = keyframes`
  0% {
    color: white;
    transform: scale(1);
    opacity: 0;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
  100% {
    color: white;
    transform: scale(1);
    opacity: 1;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
`;

const explore = keyframes`
  0% {
    color: white;
    transform: scale(1);
    opacity: 0.5;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
  50% {
    color: white;
    transform: scale(1.05);
    opacity: 1;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
  100% {
    color: white;
    transform: scale(1);
    opacity: 0.5;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
`;

// 랜딩 전체 배경
const Main = styled.div`
  --s: 80px; /* size */
  --r: 1.15; /* ratio */
  /* clip-path */
  --h: 0.5;
  --v: 0.25;
  --hc: calc(clamp(0, var(--h), 0.5) * var(--s));
  --vc: calc(clamp(0, var(--v), 0.5) * var(--s) * var(--r));

  /*margin */
  --mv: 2px; /* vertical */
  --mh: calc(var(--mv) + (var(--s) - 2 * var(--hc)) / 2); /* horizontal */
  /* for the float*/
  --f: calc(2 * var(--s) * var(--r) + 4 * var(--mv) - 2 * var(--vc) - 2px);
  /* 내가 추가한 것 */
  background-color: #3a3939;
  /* width: 100vw; */
  height: 100vh;
  overflow: hidden;
`;

// 육각형들 부모요소
const Container = styled.div`
  grid-column: 1/-1;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  font-size: 0; /*disable white space between inline block element */
  position: relative;
  z-index: 2;
  padding-bottom: 50px;

  /* 변경 하면 안됨 */
  ::before {
    content: "";
    width: calc(var(--s) / 2 + var(--mh));
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(
      transparent 0 calc(var(--f) - 2px),
      #fff 0 var(--f)
    );
  }
`;

// 노란 육각형
const Hexa1 = styled.div`
  background: linear-gradient(301.93deg, #ffd850 8.84%, #ffb950 68.21%);
  width: var(--s);
  margin: var(--mv) var(--mh);
  height: calc(var(--s) * var(--r));
  display: inline-block;
  font-size: initial;
  /* clip-path 요소잘라내기 */
  clip-path: polygon(
    var(--hc) 0,
    calc(100% - var(--hc)) 0,
    100% var(--vc),
    100% calc(100% - var(--vc)),
    calc(100% - var(--hc)) 100%,
    var(--hc) 100%,
    0 calc(100% - var(--vc)),
    0 var(--vc)
  );
  margin-bottom: calc(var(--mv) - var(--vc));
  animation: ${hexaFade} 3s;
`;

// 검정 육각형
const Hexa2 = styled.div`
  background-color: #3a3939;
  width: var(--s);
  margin: var(--mv) var(--mh);
  height: calc(var(--s) * var(--r));
  display: inline-block;
  font-size: initial;
  /* clip-path 요소잘라내기 */
  clip-path: polygon(
    var(--hc) 0,
    calc(100% - var(--hc)) 0,
    100% var(--vc),
    100% calc(100% - var(--vc)),
    calc(100% - var(--hc)) 100%,
    var(--hc) 100%,
    0 calc(100% - var(--vc)),
    0 var(--vc)
  );
  margin-bottom: calc(var(--mv) - var(--vc));
`;

// text박스
const Text = styled.div`
  /* padding-top: 280px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 아래는 변경하지 말 것 */
  text-transform: uppercase;
  white-space: pre;
  font-size: 100px;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #fff;
  inset: 0;
  /* 내가 추가 */
  text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  animation: ${textScale} 2s 3s;
  animation-fill-mode: forwards;
  opacity: 0;
  position: absolute;
  z-index: 1;
`;

const MoveGarden = styled.div`
  margin-top: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 아래는 변경하지 말 것 */
  width: 100%;
  height: 50px;
  /* white-space: pre; */
  font-size: 30px;
  font-family: sans-serif;
  font-weight: 700;
  text-align: center;
  color: #fff;
  inset: 0;
  /* 내가 추가 */
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  animation: ${explore} 2s 3s linear infinite;
  opacity: 0;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  :hover {
    animation-play-state: paused;
  }
`;

export default function Landing1() {
  const router = useRouter();
  const onClickMoveToGarden = () => {
    router.push("/garden");
  };

  return (
    <Main>
      <Container style={{ animationDelay: "0.3" }}>
        <Text>BUILD YOUR HIVE</Text>
        <MoveGarden onClick={onClickMoveToGarden}>Click to explore</MoveGarden>
        {/* <div>
          <img src="/landing/hive.png" />
        </div> */}
        {/* row1 */}
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        {/* row2 */}
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        {/* row3 */}
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        {/* row4 */}
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        {/* row5 */}
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        {/* row6 */}
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        {/* row7 */}
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        {/* row8 */}
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        {/* row9 */}
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        {/* row10 */}
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
        <Hexa1></Hexa1>
        <Hexa2></Hexa2>
        <Hexa2></Hexa2>
        <Hexa1></Hexa1>
      </Container>
    </Main>
  );
}
