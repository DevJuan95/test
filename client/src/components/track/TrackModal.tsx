import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Track } from '../../types/SearchTypes';
import TrackInfo from './TrackInfo';

const TrackModal = (props: any) => {
    const show: boolean = props.show;
    const toggle: () => void = props.toggle;
    const track: Track = props.track;
    const isTrack = props.track ? true : false;
    return (
        <div>
            <Modal isOpen={show} toggle={toggle}>
                <ModalHeader
                    className="bg-dark text-white"
                    toggle={toggle}>Información detallada:</ModalHeader>
                <ModalBody>
                    {isTrack ? <TrackInfo track={track} /> : ''}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default TrackModal;