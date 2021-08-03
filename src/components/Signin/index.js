import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormCotent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  FormInput,
  Text,
  FormInputTextArea,
} from "./SigninElements";
import COL from "../Colors";
const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            iam<span style={{ color: COL.btnPrimaryColor }}>$</span>aeed
          </Icon>
          <FormCotent>
            <Form action="#">
              <FormH1>Please Contact Me:</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Subject</FormLabel>
              <FormInput type="subject" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInputTextArea type="message" required />
              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormCotent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
