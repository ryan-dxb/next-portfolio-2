import React from "react";
import {
  FacebookBrand,
  GithubBrand,
  TwitterBrand,
  YoutubeBrand,
} from "../components/AllSvgs";
import { NavLink } from "react-router-dom";
import { darkTheme } from "../components/Themes";

import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 3;

  &>*:not(:last-child) {
    margin: 0.5rem 0;
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  console.log(props.theme);

  console.log(darkTheme.text);
  return (
    <Icons>
      <div>
        <NavLink style={{ color: "inherit" }} to="/" target="_black">
          <GithubBrand
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: "inherit" }} to="/" target="_black">
          <TwitterBrand
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: "inherit" }} to="/" target="_black">
          <FacebookBrand
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: "inherit" }} to="/" target="_black">
          <YoutubeBrand
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
