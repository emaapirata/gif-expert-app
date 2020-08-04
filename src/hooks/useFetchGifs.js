import { useState, useEffect } from 'react'
import { getGIFs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGIFs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        });
    }, [category])

    return state;
}