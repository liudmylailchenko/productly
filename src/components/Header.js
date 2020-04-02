import React from 'react';
import styled from 'styled-components';
import logo from '../images/Logo.svg';
import menu from '../images/align-justify-solid.svg';
import times from '../images/times-solid.svg';
import Button from './Button';
import Container from './Container';

const Wrapper = styled.header`
  padding: 25px 0;

  @media screen and (max-width: 800px) {
    position: relative;
    border-bottom: 1px solid #bcd0e5;
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
  display: flex;

  @media screen and (max-width: 800px) {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #bcd0e5;

    &.active {
      display: flex;
    }
  }
`;

const MenuButton = styled.button`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    background: none;
    border: none;
    outline: none;

    :hover {
      cursor: pointer;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const ButtonsWrapper = styled.div`
  button {
    margin-left: 14px;
  }

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

const Navigation = styled.button`
  font-size: 14px;
  line-height: 28px;
  width: auto;
  height: auto;
  background: none;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

class Header extends React.Component {
  state = {
    activeMenu: false,
  };

  handleClick = () => {
    const { activeMenu } = this.state;
    const changeActiveMenu = activeMenu === false ? true : false;
    this.setState({
      activeMenu: changeActiveMenu,
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
          <Menu className={activeMenu === true ? 'active' : ''}>
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
            <img src={activeMenu === false ? menu : times} alt="" />
          </MenuButton>
        </ContainerStyled>
      </Wrapper>
    );
  }
}

export default Header;
