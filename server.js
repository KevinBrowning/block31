/* 
1. create express and app
2. make an array of pets
3. make app listen to port and make sure server runs
4. make a get that displays all pets
5. make a get that finds a pet by name from array
6. make a get that filters pets by owner from array
*/

const express = require(`express`);
const app = express();
const PORT = 8080
const pets = [
{
  name: `mark`,
  owner: `daryl`
},
{
  name: `selinda`,
  owner: `daryl`
},
{
  name: `kylah`,
  owner: `jessica`
},
{
  name: `maci`,
  owner: `jessica`
}
]

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get(`/api/v1/pets`, (req, res) => {
  res.json(pets);
});

app.get(`/api/v1/pets/:name`, (req, res) => {
  const { name } = req.params
  const pet = pets.find(pet => pet.name === name);

  if(pet){
    res.json(pet)
  } else {
    res.json(pets);
  }
});

app.get(`/api/v1/pets-query`, (req, res) => {
  let { owner } = req.query
  const filteredOwners = pets.filter(pet => pet.owner === owner)

  if(filteredOwners){
    res.json(filteredOwners);
  } else {
    res.json(pets);
  }
});