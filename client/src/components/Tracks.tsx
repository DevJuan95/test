import React from 'react';
import { Track, OnSelectTrack } from '../types/SearchTypes';
import TrackCard from './Track';
type OwnProps = {
    tracks: (Track)[];
}
type Props = OnSelectTrack & OwnProps;
const Tracks: React.FC<Props> = (props: Props) => {
    return (
        <div className="row">
            {props.tracks.map(track => {
                return (
                    <TrackCard track={track} key={track.id}  onSelectTrack ={props.onSelectTrack}/>
                )
            })}
        </div>
    );
}

export default Tracks;