const fetchPeople = window.fetch('http://star-cors.herokuapp.com/people').then(response => response.json());

const fetchFilms = window.fetch('http://star-cors.herokuapp.com/films').then(response => response.json());

const fetchVehicles = window.fetch('http://star-cors.herokuapp.com/vehicles').then(response => response.json());

const fetchStarships = window.fetch('http://star-cors.herokuapp.com/people').then(response => response.json());

const loadData = async()=>{
  const [people, films, vehcles, starships] = await Promise.all([
    fetchPeople,
    fetchFilms,
    fetchVehicles,
    fetchStarships
  ]);
};

document.querySelector('ul').innerHTML = JSON.stringify(response);

loadData();
