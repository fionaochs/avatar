import React, { useState, useEffect } from 'react';
import List from '../../components/App/Detail/List';
import { fetchCharacters } from '../../services/avatar';

const CharactersViewer = () => {
  const [characters, setCharacters] = useState([]);

    
  useEffect(() => {
    fetchCharacters()
      .then(res => setCharacters(res));
  }, []);
    
  return (
    <>
    
      <List characters={characters} />
    </>
  );
};



export default CharactersViewer;
