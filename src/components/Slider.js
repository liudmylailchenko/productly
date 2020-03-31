import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const CardContainer = styled.div`
  margin: 55px -16px 80px;
  display: flex;
`;

const Switch = styled.button`
  width: 16px;
  height: 16px;
  border: 0;
  background: #efefef;
  border-radius: 50%;
  outline: none;
  margin: 0 5px;

  :hover {
    cursor: pointer;
  }

  &.active {
    background: #ff9900;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class Slider extends React.Component {
  state = {
    activeSlide: 0,
  };

  handleClick = i => {
    this.setState({
      activeSlide: i,
    });
  };

  renderSwitches() {
    const { children } = this.props;
    const { activeSlide } = this.state;
    const slidesCount = Math.ceil(children.length / 3);
    const switches = [];

    for (let i = 0; i < slidesCount; i++) {
      switches.push(
        <Switch
          key={i}
          className={activeSlide === i ? 'active' : ''}
          onClick={() => this.handleClick(i)}
        />
      );
    }

    return switches;
  }

  render() {
    const { children } = this.props;
    const { activeSlide } = this.state;
    const itemsToShow = children.slice(activeSlide * 3, activeSlide * 3 + 3);

    return (
      <Wrapper>
        <CardContainer>{itemsToShow}</CardContainer>
        <SwitchContainer>{this.renderSwitches()}</SwitchContainer>
      </Wrapper>
    );
  }
}

export default Slider;
