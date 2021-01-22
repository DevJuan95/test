import React,{useState, useEffect} from 'react';
import { Track, OnSelectTrack } from '../types/SearchTypes';
import ReactPaginate from 'react-paginate';
import Tracks from '../components/Tracks';

type OwnProps = {
    tracks: (Track)[],
}
type Props = OwnProps & OnSelectTrack;

const TracksContainer: React.FC<Props> = (props) => {
    const tracks = <Tracks tracks={props.tracks} onSelectTrack={props.onSelectTrack}/>
    return (
        <div className="mt-2 container-fluid">
            <div className="row">
                <div className="col-12">
                    {tracks}
                </div>
            </div>
        </div>
    );
}

export default TracksContainer;