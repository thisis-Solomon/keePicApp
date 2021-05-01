import { useState, useEffect } from 'react';
import {
	photoKeeperStorage,
	photoKeeperFireStore,
	timestamp,
} from '../firebase/config';

const useStorage = file => {
	const [progress, setProgress] = useState(0);
	const [err, setErr] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// Ref
		const storageRef = photoKeeperStorage.ref(file.name);
		const fireStoreRef = photoKeeperFireStore.collection('images');

		storageRef.put(file).on(
			'state_changed',
			snap => {
				const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			error => {
				setErr(error);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = timestamp();
				fireStoreRef.add({ url, createdAt });
				setUrl(url);
			},
		);
	}, [file]);

	return { progress, url, err };
};

export default useStorage;
