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
              <TopTitile>Welcome</TopTitile>
              <Title>I am Saeed</Title>
              <Description>
                I love to code. I am pioneerwho is not afraid to think out side
                of the box. I love to come up with solutions and solve problems.
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
                  Want to know More? {hover ? <ArrowForward /> : <ArrowRight />}
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
