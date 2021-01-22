import React from 'react';
import { Track } from '../../types/SearchTypes';

type Props = {
    track: Track;
}

const TrackInfo: React.FC<Props> = (props) => {
    const track = props.track;
    return (
        <div className="container-fluid">
            <div className="row">
                <div></div>
                <div className="col-md-6 col-12 mx-auto">
                    <img className="img-fluid rounded" src={track.album.images[1].url} alt={track.name} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <ul className="list-unstyled">
                        <li><strong>Nombre:</strong> {track.name}</li>
                        <li><strong>Album:</strong> {track.album.name}</li>
                        <li><strong>Artistas:</strong>
                            <ul>
                                {track.artists.map(artist => <li key={artist.id}>{artist.name}</li>)}
                            </ul>
                        </li>
                        <li>
                            <strong>Contenido explicito: </strong>{track.explicit ? 'Sí' : 'No'}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TrackInfo;