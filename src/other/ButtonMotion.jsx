import {motion} from 'framer-motion';
import Modal from './Modal';
import { useState } from 'react';

const ButtonMotion = ({text}) => {
    
    const [modalOpen,setModalOpen] = useState(false);


    const close = () => {
        setModalOpen(false);

    };

    const open = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <motion.button
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className='px-6 rounded-md py-2 bg-blue text-white '
                onClick={() => (modalOpen ? close() : open())}
            >
                Read More
            </motion.button>

            {modalOpen && <Modal modalOpen={modalOpen} handleClose = {close} text = {text}/>}

        </div>
    )
}

export default ButtonMotion;