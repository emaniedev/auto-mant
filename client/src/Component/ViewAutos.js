import React, { useState, useEffect,  } from 'react';
import { useHistory } from 'react-router-dom'
import Auto from '../API/Autos';

import AutoCard from './AutoCard';

function ViewAutos() {

    const history = useHistory();
    const [autosData, setAutosData] = useState([]);
    let reloadBit = false;

    
    async function fetchAllAutos() {
        const lista = [];
        Auto.getAllAutos().then((data) => {
            
            for (let i in data) {
                const auto = data[i];
                lista.push(<AutoCard key={auto._id} data={auto}></AutoCard>)
            }
            setAutosData(lista);
        });
    }
    if (history.location.state && history.location.state.reload) {
        console.log("If History")
        console.log(reloadBit);
        reloadBit = !reloadBit;
    }
    
    useEffect(() => {    
        console.log("UseEffect!")
        fetchAllAutos();
    }, [reloadBit])
    return (
        <div>
            <ul>
                { autosData }
            </ul>
        </div>
    )
}

export default ViewAutos;