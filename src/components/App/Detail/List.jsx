import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Detail from './Detail';

const List = ({ characters }) => {
  const charactersList = characters.map(character => 
    <>
      <Link key={character.id} to={`characters/${character.id}`}>
        <li>
          <Detail {...character} />
        </li>
      </Link>
    </>
  );

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
