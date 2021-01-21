import React from 'react';
import { Track, OnSelectTrack } from '../types/SearchTypes';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';

type OwnProps = {
    track: Track;
}
type Props = OnSelectTrack & OwnProps;
const TrackCard: React.FC<Props> = (props: Props) => {
    return (
        <div className="col-sm-3 col-12 mt-4">
            <Card>
                <CardImg top width="100%" src={props.track.album.images[1].url} alt="Card image cap" />
                <CardBody className="text-center">
                    <CardTitle tag="h5">{props.track.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Artists: {props.track.artists[0].name}</CardSubtitle>
                    <button className="btn btn-danger" onClick={() => { props.onSelectTrack(props.track) }}>Ver más</button>
                </CardBody>
            </Card>
        </div>
    );
}

export default TrackCard;