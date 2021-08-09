import React, { useState } from "react";
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
  IconWrap,
} from "./ContactElements";
import { useTranslation } from "react-i18next";
import { send } from "emailjs-com";
import COL from "../Colors";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [toSend, setToSend] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_8yf4u5h", "contactme", toSend, "user_NXy5GXQ6TAHi06abFf5Ck")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({ email: "", subject: "", message: "" });
        setSubmitted(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <IconWrap>
            <Icon to="/">
              iam<span style={{ color: COL.btnPrimaryColor }}>$</span>aeed
            </Icon>
          </IconWrap>
          <FormCotent>
            <Form action="#" onSubmit={onSubmit}>
              <FormH1>{t("contactme")}</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                htmlFor="for"
                value={toSend.email}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Subject</FormLabel>
              <FormInput
                type="text"
                name="subject"
                htmlFor="for"
                value={toSend.subject}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInputTextArea
                type="text"
                name="message"
                htmlFor="for"
                value={toSend.message}
                onChange={handleChange}
                required
              />

              <FormButton type="submit">
                {submitted ? t("msgbeensent") : t("send")}
              </FormButton>
            </Form>
          </FormCotent>
        </FormWrap>
      </Container>
    </>
  );
};
//template_u53r1y8
export default Contact;
