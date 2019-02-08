import React from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from '../Avatar';
import Link from '../Link';

const Container = styled('div')``;
const Name = styled('span')``;
const Phone = styled('span')``;
const City = styled('span')``;

const Contact = ({
  className,
  id,
  email,
  name: { first, last },
  cell,
  phone,
  location: { city, street },
  picture: { thumbnail },
}) => (
  <Link
    to={{
      pathname: id,
      state: { first, last, email, cell, phone, city, street },
    }}
  >
    <article className={className}>
      <Avatar image={thumbnail} name={`${first} ${last}`} />
      <Container>
        <Name>{`${first} ${last}`}</Name>
        <Phone>{phone}</Phone>
        <City>{city}</City>
      </Container>
    </article>
  </Link>
);

Contact.defaultProps = {
  className: '',
  email: '',
  cell: '',
  phone: '',
  picture: {},
};

Contact.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  email: PropTypes.string,
  cell: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
  }).isRequired,
  picture: PropTypes.shape({
    thumbnail: PropTypes.string,
  }),
};

export default styled(Contact)`
  border-bottom: 0.1rem solid ${props => rgba(props.theme['--color-dark'], 0.1)};
  display: flex;
  margin: 0 1.2rem 0 2.4rem;
  padding: 0.8rem 0;

  ${Avatar} {
    height: 6rem;
    width: 6rem;
  }

  ${Container} {
    margin-left: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ${Name} {
    ${props => props.theme['--font-large']};
    font-weight: ${props => props.theme['--font-weight-demi']};
  }

  ${Phone} {
    ${props => props.theme['--font-small']};
    color: ${props => props.theme['--font-opacity-40']};
    font-weight: ${props => props.theme['--font-weight-demi']};
  }
`;
