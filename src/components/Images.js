import useFireStore from './hooks/useFireStore';
import '../App.css';
import { motion } from 'framer-motion';

const Images = ({ setSelectedImg }) => {
	const { docs } = useFireStore('images');

	return (
		<motion.div className='img-grid'>
			{docs &&
				docs.map(doc => (
					<motion.div
						whileHover={{ opacity: 1 }}
						layout
						className='img-wrap'
						key={doc.id}
						onClick={() => setSelectedImg(doc.url)}
					>
						<motion.img
							src={doc.url}
							alt={doc.createdAt}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						/>
					</motion.div>
				))}
		</motion.div>
	);
};

export default Images;
