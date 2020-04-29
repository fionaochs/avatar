import React from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';

const List = ({ characters }) => {
  const charactersList = characters.map(character => (
    <li key={character.id}>
      <Detail {...characters} />
    </li>
  ));
  return (
    <ul>
      {charactersList}
    </ul>
  );
};

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    allies: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    enemies: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired
};

export default List;
