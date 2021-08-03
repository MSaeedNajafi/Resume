import styled from "styled-components";
import { Link } from "react-scroll";
import COL from "./Colors";

export const Button = styled(Link)`
  border-radius: 5px;
  // background: ${({ primary }) => (primary ? "#fff" : COL.btnSecondaryColor)};
  background: transparent;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? COL.btnPrimaryColor : COL.btnSecondaryColor)};
  // color: ${COL.btnPrimaryColor};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 3px solid
    ${({ dark }) => (dark ? COL.btnPrimaryColor : COL.btnSecondaryColor)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    // background: ${({ primary }) =>
      primary ? COL.btnInfoHoverColor : COL.btnSecondaryColor};

    color: ${({ dark }) => (dark ? "#fff" : COL.btnPrimaryColor)};
    border: 3px solid ${({ dark }) => (dark ? "#fff" : COL.btnPrimaryColor)};
    //${COL.btnPrimaryColor};
  }
`;
