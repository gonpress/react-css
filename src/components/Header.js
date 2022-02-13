import React from 'react';
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";

// import styles from "./Header.module.css";

// HTML을 스타일화
const HeaderNav = styled.header`
  color:white;
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  
  background-color: rgba(20,20,20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.8);
  
`;

const List = styled.ul`
  display:flex; 
`;
const Item = styled.li`
    font-weight: bold;
  font-size: 15px;
    width:80px;
    height:50px;
    text-align : center;
    border-bottom: 3px solid
      ${props => (props.selected ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

// 리액트 컴포넌트 스타일화
const SLink = styled(Link)`
  height:50px;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
    const {pathname} = useLocation();
    return (
        <HeaderNav>
            <List>
                <Item selected={pathname === "/"}>
                    <SLink to="/">Movies</SLink>
                </Item>
                <Item selected={pathname === "/tv"}>
                    <SLink to="/tv">Tv</SLink>
                </Item>
                <Item selected={pathname === "/search"}>
                    <SLink to="/search">Search</SLink>
                </Item>
            </List>
        </HeaderNav>
    );
};

export default Header;
