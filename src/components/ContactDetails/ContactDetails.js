import React, { Component } from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';
import Link from '../Link';

const Container = styled('section')``;
const Header = styled('header')``;

class ContactDetails extends Component {
  static defaultProps = {
    className: '',
    location: {},
  };

  static propTypes = {
    className: PropTypes.string,
    location: PropTypes.shape({}),
  };

  componentDidMount() {}

  render() {
    const {
      className,
      location: { state },
    } = this.props;

    return (
      <article className={className}>
        <Header>
          <Link to="/">
            <Icon>arrow_back_ios</Icon>
          </Link>
          {state.first} 
          {' '}
          {state.last}
        </Header>
        <Container>{state.email}</Container>
        <Container>{state.cell}</Container>
        <Container>{state.phone}</Container>
        <Container>{state.city}</Container>
        <Container>{state.street}</Container>
      </article>
    );
  }
}

export default styled(ContactDetails)`
  background: ${props => props.theme['--color-light']};
  height: calc(100% - 2.5rem);
  position: fixed;
  top: 2.5rem;
  width: 100%;
  //
  ${Header} {
    ${props => props.theme['--font-extra-large']};
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: center;
    text-align: center;

    ${Icon} {
      height: 5rem;
      left: 0;
      line-height: 5rem;
      position: absolute;
      top: 0;
      width: 5rem;
    }
  }

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (${props => props.theme['--screen-medium']}) {
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    left: 32rem;
    width: calc(100% - 32rem);
  }
`;
