// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaTwitter, FaGithub } from 'react-icons/fa';


const NavItem = styled(Link)`
  text-decoration: none;
  font-syle: sans;
  color: #fff; //text in navbar
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #111; //text in navbar

  }
`


const ExternalLink = styled.a`
  text-decoration: none;
  font-syle: sans;
  color: #fff; //text in navbar
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #111; //text in navbar

  }
` 

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/tags">Tags</NavItem>
      <NavItem to="/uses">Uses</NavItem>
      <NavItem to="/about">About</NavItem>
      <ExternalLink href="https://www.twitter.com/KyleLeslie"><FaTwitter /></ExternalLink>
      <ExternalLink href="https://www.github.com/Kyleslie2"><FaGithub /></ExternalLink>
    </>
  )
}

export default NavbarLinks