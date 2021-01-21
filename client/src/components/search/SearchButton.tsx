import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type Props = {
    submitHandler: () => void;
};

const SearchButton: React.FC<Props> = (props: Props) => {
    return (
        <Button color="secondary" onClick={props.submitHandler}>
            <FontAwesomeIcon icon={faSearch} />
        </Button>
    );
}
export default SearchButton;