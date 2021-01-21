import React, { useState, useEffect } from 'react';
import HomeLayout from '../components/layouts/HomeLayout';
import { Data, Track } from '../types/SearchTypes';
import Search from '../components/search/Search';
import fetchData from '../api/fetchAPI';
import TracksContainer from './TracksContainer';

const HomeContainer: React.FC = () => {
    const initialData: Data = {
        limit: 0,
        offset: 0,
        tracks: [],
    }
    const [data, setData] = useState<Data>(initialData);
    const [query, setQuery] = useState('');
    const [selectedTrack, setSelectedTrack] = useState<(Track)[]>([]);

    const onChangeSearchHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const searchQuery = evt.target.value;
        setQuery(searchQuery);
    }

    const onClickSearchButtonHandler = async () => {
        try {
            const serverData = await fetchData(query);
            setData(serverData.data);
            console.log(serverData.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    const onClickSelectTrackHandler = (track: Track) => {
        alert("hola mundo");
    }

    return (
        <HomeLayout>
            <Search
                changeHandler={onChangeSearchHandler}
                submitHandler={onClickSearchButtonHandler}
            />
            <TracksContainer tracks={data.tracks} onSelectTrack={onClickSelectTrackHandler} />
        </HomeLayout>
    );
}

export default HomeContainer;