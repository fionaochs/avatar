import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { fetchCharacterDetail } from '../../../services/avatar';
import { useParams } from 'react-router-dom';


const Detail = () => {
  const [character, setCharacter] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchCharacterDetail(params.id)
      .then(res => setCharacter(res));
    console.log(params.id);
  }, []);
  return (
    <section>
      <h3>{character.name}</h3>
      <img src={character.image} />
      <p>Allies: {character.allies}</p>
      <p>Enemies: {character.enemies}</p>
      <p>Affiliation: {character.affiliation}</p>
    </section>
  );
};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  enemies: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Detail;
