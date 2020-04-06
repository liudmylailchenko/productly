import React from 'react';
import styled from 'styled-components/macro';
import logo from '../images/Logo.svg';
import menu from '../images/align-justify-solid.svg';
import times from '../images/times-solid.svg';
import Button from './Button';
import Container from './Container';

const Wrapper = styled.header`
  padding: 25px 0;
  position: relative;
  border-bottom: 1px solid #bcd0e5;

  @media screen and (min-width: 800px) {
    border-bottom: 0;
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
`;

const LogoWraper = styled.div`
  flex-grow: 1;
`;

const Menu = styled.div`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #bcd0e5;
  border-bottom: 1px solid #bcd0e5;
  background: white;

  &.active {
    display: flex;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    position: static;
    padding: 0;
    flex-direction: row;
    border: 0;
  }
`;

const MenuButton = styled.button`
  display: block;
  background: none;
  border: 0;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const ButtonsWrapper = styled.div`
  padding: 10px;

  button {
    margin: 0 7px;
  }

  @media screen and (min-width: 800px) {
    padding: 0;

    button {
      margin: 0 0 0 14px;
    }
  }
`;

const Navigation = styled.button`
  font-size: 14px;
  line-height: 28px;
  width: auto;
  height: auto;
  background: none;
  border: 0;
  outline: none;
  padding: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (min-width: 800px) {
    padding: 0 7px;
  }
`;

class Header extends React.Component {
  state = {
    activeMenu: false,
  };

  handleClick = () => {
    const { activeMenu } = this.state;
    this.setState({
      activeMenu: !activeMenu,
    });
  };

  render() {
    const { activeMenu } = this.state;
    return (
      <Wrapper>
        <ContainerStyled>
          <LogoWraper>
            <img src={logo} alt="" />
          </LogoWraper>
          <Menu className={activeMenu ? 'active' : ''}>
            <Navigation>Product</Navigation>
            <Navigation>Customers</Navigation>
            <Navigation>Pricng</Navigation>
            <Navigation>Resources</Navigation>

            <ButtonsWrapper>
              <Button variant="secondary" size="md">
                Sign in
              </Button>
              <Button variant="primary" size="md">
                Sign up
              </Button>
            </ButtonsWrapper>
          </Menu>
          <MenuButton onClick={this.handleClick}>
            <img src={!activeMenu ? menu : times} alt="" />
          </MenuButton>
        </ContainerStyled>
      </Wrapper>
    );
  }
}

export default Header;
