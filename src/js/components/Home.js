import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Home = memo(({ name = 'World' }) => {
  return <div>{`Hello ${name}!`}</div>;
});

Home.propTypes = {
  name: PropTypes.string,
};

export default Home;
