import React from 'react';
import { Input, Label, Form } from 'reactstrap';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type Props = {
    changeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    submitHandler: () => void;
}
const Search: React.FC<Props> = (props: Props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    return (
        <div className="row">
            <div className="col-sm-12">
                <Form onSubmit={handleSubmit}>
                    <Label className="font-weight-bold">Nombre de la canción:</Label>
                    <div className="d-flex">
                        <Input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Ingrese un nombre para buscar"
                            onChange={props.changeHandler}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    props.submitHandler()
                                }
                            }} />

                        <Button color="secondary" onClick={props.submitHandler}>
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Search;
