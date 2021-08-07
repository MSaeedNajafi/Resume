import React, { useState } from "react";
import Video from "../../video/video.mp4";
import {
  AboutBg,
  AboutContainer,
  AboutWrapper,
  VideoBg,
  AboutRow,
  Column1,
  Column2,
  Text,
  TextWrapper,
  TopTitile,
  Title,
  Description,
  ImgWrap,
  Img,
  AboutBtnWapper,
  ArrowForward,
  ArrowRight,
} from "./AboutElements";
import { useTranslation } from "react-i18next";
import img from "../../images/me.jpg";
import { Button } from "../ButtonElemts";

const AboutSection = () => {
  const [hover, setHover] = useState(false);
  const { t, i18n } = useTranslation();
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <AboutContainer id="top">
        <AboutBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </AboutBg>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <ImgWrap>
                <Img src={img} alt="Me" />
              </ImgWrap>
              {/* <TextWrapper>
                <Text>Hey 1</Text>
              </TextWrapper> */}
            </Column1>
            <Column2>
              <TopTitile>{t("Welcome")}</TopTitile>
              <Title>{t("iam")}</Title>
              <Description>{t("about")}</Description>
              <AboutBtnWapper>
                <Button
                  to="about"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t("wantmote")} {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </AboutBtnWapper>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
