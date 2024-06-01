/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import {
  blackPageStyle,
  layoutStyle,
} from "./styles/commonStyles/commonStyles";
import Navbar from "./components/commonComponents/Navbar";
import useNavbarStore from "./stores/navbarStore/useNavbarStore";
import { useEffect } from "react";
import { navbarMenu } from "./constants/navbarMenu";

export default function Home() {
  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[0].key);
  }, []);

  return (
    <div css={layoutStyle}>
      <div css={blackPageStyle} />
      <Navbar />
    </div>
  );
}
