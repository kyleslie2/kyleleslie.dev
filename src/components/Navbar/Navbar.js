// Navbar.js
import { Link } from "gatsby"
import PropTypes from "prop-types"

import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"


const Navigation = styled.nav`
  // height: 10vh; //good but tiny on high dpi mobile
  height: 3.5em;
  display: flex;
  // background-color: #639; //navbar colour
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  position: relative;
  justify-content: space-between;
  border-bottom: 2px solid #33333320;
  margin: 0 auto 3vh auto;
  padding: 0 5vw 0 0;
  z-index: 2;
  align-self: left;

  @media(max-width: 768px) {
    position: sticky;
    // height: 8vh;
    height:3.5rem;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }

  @media(max-width: 768px) and (orientation: landscape) {
    position: sticky;
    // height: 10vh;
    height:3.5rem;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
}
`

const Logo = styled.div `
  margin: auto 0;
  padding: 0.7rem 1vw 40vh 3vw; //top, right, bottom, left
  flex: 0 1 10rem;
  #logo{
    font-size:2em;
  }
  
  @media(max-width: 768px) and (orientation: landscape) {
    // flex: 0 1 10px;
    flex: 0 1 2rem;
    padding: 0.5rem 1vw 2vh 3vw;

    #logo{
      font-size:2rem;
    }
  }

  @media(max-width: 768px) and (orientation: portrait){
      // flex: 0 1 10px;
      flex: 0 1 2rem;
      padding: 1vh 1vw 2vh 3vw;
      margin 1vh 0;

    #logo{
      font-size:1.8rem;
    }
  }

`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  margin-left: auto;
  height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    // top: 8vh; //original
    top: 3.5rem;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #fff; //middle burger
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff; //top and bottom burgers
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = ({ siteTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    // <Header>
    <Navigation>
        <Logo>
          <h1 id="logo">
            <Link to="/" style={{
                color: `white`,
                textDecoration: `none`,
                padding:`0px 4px 0px 4px`,
                border: `2px solid white`,
                borderRadius: `3px`,
                height:`100%`,
              }}
              >
              {"KL"}
            </Link>
          </h1>
        </Logo>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
      </Navigation>
    // </Header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar