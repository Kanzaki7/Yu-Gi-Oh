import { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import Liste from './assets/Liste/Liste';
import Element from './assets/Element/Element';
// import { Link } from 'react-router-dom' 
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';

function App() {

    const [data, setData] = useState([])
    // const [show, setShow] = useState(false)
    // const [number, setNumber] = useState(-1)
  
    // function showInfo(index) {
    //   setNumber(index)
    //   setShow(!show)
    // }

    useEffect(() => {
        fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
          .then((response) => response.json())
          .then((response) => setData(response.data))
          .catch((error) => console.log(error));
          console.log(data);
      }, [])

    const [search, setSearch] = useState("");
    const [searchFilter, setSearchFilter] = useState([])

    useEffect(() => {
        let filtered = data.filter(user => user.name.includes(search));
        setSearchFilter(filtered);
    }, [search, data])
    

    const Filter = (event) => {
        setSearch(event.target.value);
    };

  const routeur = createBrowserRouter([
  {
    path:"/",
    element: <Liste searchFilter={searchFilter} filter={Filter} data={data}/>,
    // errorElement: <Erreur />
  },
  {
    path:"/liste/:id",
    element: <Element searchFilter={searchFilter} filter={Filter}/>,
    // errorElement: <Erreur />
  },
])

    
  return (
    <>
      <div>
        <h1>Yu-Gi-Oh! DB</h1>
        <RouterProvider router={routeur}/>
      </div>
    </>
  )
}


export default App
