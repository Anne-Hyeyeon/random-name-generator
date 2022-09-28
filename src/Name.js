import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Name() {
    const SERVER_URL = "https://api.parser.name/?api_key=563dbb8df16922a5622e5f2a1a3a84e2&endpoint=generate&country_code=DE";
    const [nameData, setNameData] = useState([]);
    const getNameData = async () => { 
        try {  
          const res = await axios.get(SERVER_URL);
          setNameData(res.data.data[0]);
          console.log(res.data.data[0].name);
        } catch(err) {
          console.log(err);
        }
    }
    useEffect(() => {
        getNameData();
    }, [])
    
    return (
        <div>
          hi
        </div>
    );
}

export default Name;