import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

function App() {
  const [planets, setPlanets] = useState([]);
  const [detail, setDetail] = useState({});
  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
    api.get("/planets")
      .then((response) => setPlanets(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api.get(`/planets/${selectedId}`)
      .then((response) => setDetail(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [selectedId]);

  const renderItem = (item, index) => { 
    return (
      <ListItemButton component="a" onClick={() => onClickItem(index + 1)}>
        <ListItemText>{item.name} - {item.population}</ListItemText>
      </ListItemButton>
    )
  }

  const onClickItem = (id) => { 
    setSelectedId(id)
  }

  const renderDetails = () => { 
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
        <div>Detalhes:</div>  
        <div>Name: {detail.name} </div>
        <div>Diameter: {detail.diameter} </div>
        <div>Climate: {detail.climate} </div>
        <div>Gravity: {detail.gravity} </div>
        <div>Terrain: {detail.terrain} </div>
        <div>Population: {detail.population} </div>
      </div>
    )
  }

  return (
    <div className="App">
      {planets.length > 0 && 
        <div>
          {planets.map(renderItem)}
          {renderDetails()}
        </div>
      }
    </div>
  );
}

export default App;
