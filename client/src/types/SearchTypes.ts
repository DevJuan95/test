
export interface Data {
    limit: number;
    offset: number;
    tracks: (Track)[];
}
export interface Track {
    id: string,
    name: string,
    album: Album,
    artist: Artist,
    duration: number,
    images: Image[],
    artists: Artist[],
    explicit: boolean,
}

export interface Image {
    height: number,
    width: number,
    url: string,
}

export interface Artist {
    id: string;
    name: string;
}

export interface Album {
    id: string;
    images: Image[];
    name: string;
    releaseDate: Date;
}

export type OnSelectTrack = {
    onSelectTrack: (track: Track) => void;
}