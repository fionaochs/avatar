import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, allies, enemies, affiliation, image }) => (
  <section>
    <h3>{name}</h3>
    <img src={image} />
    <p>Allies: {allies}</p>
    <p>Enemies: {enemies}</p>
    <p>Affiliation: {affiliation}</p>
  </section>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  enemies: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Detail;
