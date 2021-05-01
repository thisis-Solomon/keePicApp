import React, { useState } from 'react';
import './App.css';
import UpLoadFile from './components/UpLoadFile';
import Images from './components/Images';
import Modal from './components/Modal';

function App() {
	const [selectedImg, setSelectedImg] = useState(null);
	return (
		<div className='App'>
			<UpLoadFile />
			<Images setSelectedImg={setSelectedImg} />
			{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
		</div>
	);
}

export default App;
