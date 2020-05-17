// Navbar.js
import { Link } from "gatsby"
import PropTypes from "prop-types"

import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"

// import Logo from "./Logo"


const Header = styled.header`
  height: 4rem;
  margin: 0 0 2vh 0; //top, right, bottom, left

//original
//  height: 4rem;
//   margin: 0 0 1.45rem;

`


const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  // background-color: #639; //navbar colour
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  position: relative;
  justify-content: space-between;
  border-bottom: 2px solid #33333320;
  margin: 0 auto 0 auto;
  padding: 0 5vw 0 0;
  z-index: 2;
  align-self: left;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }

//Experimental:
  // height: 8vh;
  // display: flex;
  // background-color: #639; //navbar colour
  // background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  // position: relative;
  // border-bottom: 2px solid #33333320;
  // z-index: 2;
  // // justify-content: space-between;
  // // text-transform: uppercase;
  // // margin: 0 auto 0 auto;
  // // padding: 0 0 0 0;
  // // align-self: centre;
  // // max-width: 960px;

  // @media (max-width: 768px) {
  //   position: sticky;
  //   height: 8vh;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   left: 0;
  // }
`

//Experimental:
// const Container = styled.div `
//   max-width: 960px;
//   margin: 0 auto;
//   // margin: 0 10vw;
  
//   padding: 1rem 1rem;
//   display: inline-flex;
//   flex-wrap: nowrap;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: left;

// `

const Logo = styled.div `
  margin: auto 0; //TODO: use flexbox to display h1 properly
  padding: 2vh 1vw 40vh 3vw; //top, right, bottom, left
  flex: 0 1 36px;
  
  @media(max-width: 768px) and (orientation: landscape) {
    flex: 0 1 10px;
    padding: 0vh 1vw 2vh 3vw;
  }

//Experimental:
  // display:flex;
  // margin: 0 0;

  // @media(max-width: 768px) and (orientation: landscape) {
  //   flex: 0 1;
  // }
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
    top: 8vh;
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
    <Header>
    <Navigation>
      {/* <Container> */}
        <Logo>
          <h1>
            <Link to="/" style={{
                color: `white`,
                textDecoration: `none`,
                padding:`0px 4px 0px 4px`,
                border: `1px solid white`,
                MozBorderRadius: `3px`,
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
      {/* </Container> */}
      </Navigation>
    </Header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar