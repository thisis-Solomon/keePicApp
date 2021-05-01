import { useState, useEffect } from 'react';
import { photoKeeperFireStore } from '../firebase/config';

const useFireStore = collection => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = photoKeeperFireStore
			.collection(collection)
			.orderBy('createdAt', 'desc')
			.onSnapshot(snap => {
				let document = [];
				snap.forEach(doc => {
					document.push({ ...doc.data(), id: doc.id });
				});
				setDocs(document);
			});
		// Cleaning up                                                                                                                                          
		return () => unsub();
	}, [collection]);
	return { docs };
};

export default useFireStore;
