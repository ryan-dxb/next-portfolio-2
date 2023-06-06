import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: translateY(-50%);
  rotate: 90deg;
  text-decoration: none;
  z-index: 3;
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  rotate: -90deg;
  text-decoration: none;
  z-index: 3;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  text-decoration: none;
  z-index: 3;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};

  text-decoration: none;
  z-index: 3;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "90%" : "50%")};

  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 3;
  transition: all 1s ease;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > :nth-child(1) {
    animation: ${rotate} 2s linear infinite;
  }

  span {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    font-family: "Karla", sans-serif;
    font-weight: 500;
    padding-top: 1rem;
    color: ${(props) => props.theme.text};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 100 : 200}
            height={click ? 100 : 200}
            fill="currentColor"
          />
          <span>Click Here</span>
        </Center>

        <Contact target="_blank" to={{ pathname: "mailto:example.com" }}>
          <h3>Say hi...</h3>
        </Contact>

        <BLOG to="/blog">
          <h2>Blog</h2>
        </BLOG>

        <WORK to="/work" click={click}>
          <h2>Work</h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" click={click}>
            <h2>About</h2>
          </ABOUT>
          <SKILLS to="/skills" click={click}>
            <h2>Skills</h2>
          </SKILLS>
        </BottomBar>
      </Container>

      {click && <Intro />}
    </MainContainer>
  );
};

export default Main;
