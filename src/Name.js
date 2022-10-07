import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Name() {
    const SERVER_URL = "https://api.parser.name/?api_key=699d0e0711f7c175edbe93d887767f1a&endpoint=generate&country_code=US";
    const [nameData, setNameData] = useState([]);
    const getNameData = async () => { 
        try {  
          const res = await axios.get(SERVER_URL);
          setNameData(res.data.data[0].name);
        } catch(err) {
          console.log(err);
        }
    }
    const onClickHandler = () => {
        getNameData();
    }
    useEffect(() => {
        getNameData();
    },[])
    console.log(nameData)
    return (
        <div>
            <div>
            당신의 영어 이름은
            </div>
            <div>
            {nameData.firstname.name}
            </div>
            <div>
            추천하는 영어 성은
            </div>
            <div>
            {nameData.Lastname.name}
            </div>
            <button onClick={onClickHandler}>이름이 맘에 안들어! 이름 바꾸기</button>
        </div>
    );
}

export default Name;
