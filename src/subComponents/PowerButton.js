import React from "react";
import styled from "styled-components";
import { PowerButtonSvg } from "../components/AllSvgs";
import { NavLink } from "react-router-dom";

const Power = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);

  background-color: #FCF6F4;
  padding: 0.3rem ;
    border-radius: 50%;
    border 1px solid #000;
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;

    &:hover {
        background-color: rgba(0, 255, 0, 0.4);
        box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
    }

    &::first-child {
        text-decoration: none;
        color: inherit;
    }
`;
const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerButtonSvg
          style={{ display: "flex" }}
          width={30}
          height={30}
          fill="currentColor"
        />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
