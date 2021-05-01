import '../App.css';
import { motion } from 'framer-motion';

function Modal({ selectedImg, setSelectedImg }) {
	const handleCloseModal = event => {
		if (event.target.classList.contains('modal-popup')) {
			setSelectedImg(null);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='modal-popup'
			onClick={handleCloseModal}
		>
			<motion.img
				src={selectedImg}
				alt='detailedImage'
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
			/>
		</motion.div>
	);
}

export default Modal;
