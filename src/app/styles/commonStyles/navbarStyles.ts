import { css } from "@emotion/react";
import { commonColors } from "./commonStyles";

export const navbarStyles = {
  outline: [
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 60px;
      padding: 0px 20px;
      border-bottom: 0.5px solid #ffffff66;
    `,
  ],
  title: [
    css`
      font-size: 2rem;
      font-weight: bold;
      transition: 0.2s;
      &:hover {
        transform: scale(1.05);
        text-shadow: 0 0 20px black;
      }
    `,
  ],
  navbarMainContainer: [
    css`
      height: 100%;
      z-index: 100;

      @media (max-width: 750px) {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 60px;
        background-color: #3e596b;
      }
    `,
  ],
  menuButton: (key: string, whichMenu: string) => {
    return [
      css`
        flex: 1;
        height: 100%;
        padding: 0 20px;
        border: none;
        background-color: ${key === whichMenu ? `#00000044` : `transparent`};
        font-size: 0.9rem;
        white-space: nowrap;
        ${key === whichMenu && `border-bottom: 1px solid white;`}
        &:hover {
          background-color: #00000066;
        }
      `,
    ];
  },
  signInUpSection: [
    css`
      display: flex;
      gap: 10px;
    `,
  ],
  signInUpButton: [
    css`
      width: max-content;
      padding: 8px 15px;
      border: 1px solid white;
      border-radius: 20px;
      background-color: transparent;
      transition: 0.2s;
      &:hover {
        background-color: #00000020;
        font-weight: bold;
      }
    `,
  ],
  SignUpBtnHover: [
    css`
      &:hover {
        border: 1px solid #7eb1d3;
        background-color: #ffffff;
        color: #000000;
      }
    `,
  ],
};
