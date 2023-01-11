import { useState } from "react";
import Modal from "../components/Modal";
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Toggle Modal</Button>
            {showModal && modal}
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus non diam aliquet lacinia eu non turpis. Ut elementum ornare tellus ac egestas. Nulla eu diam at tellus egestas gravida vitae id mi. Nullam ut velit ac libero vulputate luctus. Nam a varius nunc, at feugiat mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed pellentesque lorem. Aenean et tellus ac ipsum auctor cursus laoreet at diam. Integer condimentum quis mauris vulputate malesuada.</p>
        </div>
    );
}

export default ModalPage;