import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import COL from "../Colors";

export const AboutContainer = styled.div`
  background: ${COL.heroBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  // padding 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgb(0, 0, 0) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const AboutWrapper = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutBg = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  justify-content: flex-end;
  align-content: center;
  display: grid;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Text = styled.p`
  color: ${COL.heroTextColor};
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopTitile = styled.p`
  color: ${COL.topTitleColor};
  font-size: 48px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 35px;
  //   text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: ${COL.tilteInfoSecondaryColor};
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-szie: 18px;
  line-height: 24px;
  color: ${COL.descPrimary};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 300px;
  height: 100%;

  @media screen and (max-width: 768px) {
    max-width: 250px;
  }
  @media screen and (max-width: 480px) {
    max-width: 200px;
  }
  transition: all 0.2s ease-in-out;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 550px;
`;

export const AboutBtnWapper = styled.div`
  //   margin-top: 32px;
  display: flex;
  //   flex-direction: column;
  //   align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
