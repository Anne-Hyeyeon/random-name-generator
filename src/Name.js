import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Name() {
    const SERVER_URL = "https://api.parser.name/?api_key=699d0e0711f7c175edbe93d887767f1a&endpoint=generate&country_code=US";
    useEffect(() => {
        const getNameData = async () => { 
            try {  
              const res = await axios.get(SERVER_URL);
              setNameData(res.data.data[0].name);
            } catch(err) {
              console.log(err);
            }
        }
        getNameData();
    },[])
    const [nameData, setNameData] = useState([]);
    console.log(nameData.firstname.name)

    return (
        <div>
            
        </div>
    );
}

export default Name;