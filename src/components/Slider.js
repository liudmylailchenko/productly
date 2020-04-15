import React from 'react';
import styled from 'styled-components/macro';

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
    slidesToShow: 1,
  };

  handleClick = i => {
    this.setState({
      activeSlide: i,
    });
  };

  renderSwitches() {
    const { children } = this.props;
    const { slidesToShow, activeSlide } = this.state;
    const slidesCount = Math.ceil(children.length / slidesToShow);

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

  handleResize = () => {
    const windowWidth = window.innerWidth;

    let slidesToShow = 3;

    if (windowWidth < 500) {
      slidesToShow = 1;
    } else if (windowWidth < 770) {
      slidesToShow = 2;
    }

    if (this.state.slidesToShow !== slidesToShow) {
      this.setState({
        slidesToShow,
        activeSlide: 0,
      });
    }
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { children } = this.props;
    const { activeSlide, slidesToShow } = this.state;

    const itemsToShow = children.slice(
      activeSlide * slidesToShow,
      activeSlide * slidesToShow + slidesToShow
    );

    return (
      <Wrapper>
        <CardContainer>{itemsToShow}</CardContainer>
        <SwitchContainer>{this.renderSwitches()}</SwitchContainer>
      </Wrapper>
    );
  }
}

export default Slider;
