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
import img from "../../images/me.jpg";
import { Button } from "../ButtonElemts";

const AboutSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <AboutContainer>
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
              <TopTitile>Hello</TopTitile>
              <Title>Saeed Najafi</Title>
              <Description>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </Description>
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
                  Read More {hover ? <ArrowForward /> : <ArrowRight />}
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
