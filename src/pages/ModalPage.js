import { useState } from "react";
import Modal from "../components/Modal";
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setUseModal] = useState(false);

    const handleClick = () => {
        setUseModal(!showModal);
    };

    return (
        <div>
            <Button onClick={handleClick} primary>Toggle Modal</Button>
            {showModal && <Modal />}
        </div>
    );
}

export default ModalPage;