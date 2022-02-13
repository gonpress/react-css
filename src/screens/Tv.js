import React, {useEffect, useState} from 'react';
import {tvsApi} from "../Api";


const Tv = () => {
    const [tvs, setTvs] = useState({
        onTheAir: [],
        popular: [],
        latest: [],
    })

    const getTvs = async () => {
        try{
            const onTheAir = await tvsApi.onTheAir();
            const popular = await tvsApi.popular();
            const latest = await tvsApi.latest();

            setTvs({
                onTheAir:onTheAir.data.results,
                popular:popular.data.results,
                latest:latest.data.results,
            })
        }catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getTvs();
    }, []);


    return (
        <div>
            <h1>Tv</h1>
            {tvs.onTheAir.length}
        </div>
    );
};

export default Tv;
