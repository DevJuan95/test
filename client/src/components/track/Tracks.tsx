import React from 'react';
import { Track, OnSelectTrack } from '../../types/SearchTypes';
import TrackCard from './TrackCard';
import { CardGroup } from 'reactstrap';

type OwnProps = {
    tracks: (Track)[];
    pagination: any;
}
type Props = OnSelectTrack & OwnProps;
const Tracks: React.FC<Props> = (props: Props) => {

    return (
        <div className="mt-2 container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <CardGroup>
                            {props.tracks.map(track => {
                                return (
                                    <TrackCard track={track} key={track.id} onSelectTrack={props.onSelectTrack} />
                                )
                            })}
                        </CardGroup>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {props.tracks.length === 0 ? '' : props.pagination}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tracks;