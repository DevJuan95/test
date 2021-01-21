import React from 'react';
import { Input, Label } from 'reactstrap';
import SearchButton from './SearchButton';
type Props = {
    changeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
}
const Search: React.FC<Props> = (props: Props) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <Label className="font-weight-bold">Nombre de la canción:</Label>
                <div className="d-flex">
                    <Input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Ingrese un nombre para buscar"
                        onChange={props.changeHandler} />
                    <SearchButton submitHandler={props.submitHandler} />
                </div>
            </div>
        </div>
    );
}

export default Search;
