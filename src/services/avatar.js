export const fetchCharacterDetail = id => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json())
    .then(json => ({
      id: json._id,
      name: json.name,
      allies: json.allies,
      enemies: json.enemies,
      affiliation: json.affiliation,
      image: json.photoUrl
    }));
};

export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      allies: character.allies,
      enemies: character.enemies,
      affiliation: character.affiliation,
      image: character.photoUrl
    })));
};
