import React, { useState, useEffect } from 'react';
import HomeLayout from '../components/layouts/HomeLayout';
import { Data, Track } from '../types/SearchTypes';
import Search from '../components/search/Search';
import fetchData from '../api/fetchAPI';
import Tracks from '../components/track/Tracks';
import Pagination from '../components/pagination/Pagination';
import TrackModal from '../components/track/TrackModal';
import {triggerError} from '../helpers/error';

const TracksContainer: React.FC = () => {
    const initialData: Data = {
        limit: 8,
        offset: 0,
        tracks: [],
        total: 0,
    }
    const [data, setData] = useState<Data>(initialData);
    const [query, setQuery] = useState<string>('');
    const [offset, setOffset] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [selectedTrack, setSelectedTrack] = useState<Track>();
    const [showTrack, setShowTrack] = useState<boolean>(false);
    const maximunOffset = 2000;
    const [oldQuery, setOldQuery] = useState('');
    /**
     * on data changed handler;
     */
    useEffect(() => {
        setCurrentPage(0);
        setOffset(0);
    }, [data]);
    /**
     * handles the search param
     * @param {React.ChangeEvent} evt 
     */
    const onChangeSearchHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const searchQuery = evt.target.value;
        setQuery(searchQuery);
    }
    /**
     * Fetch all the data from the server.
     */
    const fetchTracks = async () => {
        try {
            const response = await fetchData(query, data.limit, offset);
            setData(response.data);
            setOldQuery(query);
        } catch (e) {
            triggerError(e.message);
        }
    }
    /**
     * Handler for the event onClick for seaching
     */
    const onClickSearchButtonHandler = async () => {
        try {
            await fetchTracks();
        } catch (e) {
            triggerError(e.message);
        }
    }
    /**
     * Handles the modal
     */
    const toggleModal = () => {
        setShowTrack(!showTrack);
    }
    /**
     * Handles the selection of one song
     * @param {Track} track 
     */
    const onSelectTrackHandler = (track: Track) => {
        setSelectedTrack(track);
        setShowTrack(true);
    }
    /**
     * handler for click on pagination button
     * @param option 
     */
    const paginationClickHandler = async (option: any) => {
        const newOffset = Math.ceil(option.selected * data.limit);
        try {
            const response = await fetchData(oldQuery, data.limit, newOffset);
            setData(response.data);
            setOffset(newOffset);
            setCurrentPage(option.selected);
        } catch (e) {
            triggerError(e.message);
        }
    }
    /**
     * calculates the maximun pagecount 
     * @param data Data
     * @returns number
     */
    const calculatePageCount = (data: Data): number => {
        if (data.total > (maximunOffset)) {
            return Math.ceil(maximunOffset / data.limit);
        } else {
            return Math.ceil(data.total / data.limit);
        }
    }
    const pagination = (
        <Pagination
            calculatePageCount={calculatePageCount}
            paginationClickHandler={paginationClickHandler}
            pageCount={calculatePageCount(data)}
            currentPage={currentPage}
        />);
    return (
        <HomeLayout>
            <Search
                changeHandler={onChangeSearchHandler}
                submitHandler={onClickSearchButtonHandler}
            />
            <TrackModal show={showTrack} track={selectedTrack} toggle={toggleModal} />
            <Tracks
                tracks={data.tracks}
                pagination={pagination}
                onSelectTrack={onSelectTrackHandler} />
        </HomeLayout>
    );
}

export default TracksContainer;