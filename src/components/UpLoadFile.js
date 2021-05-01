import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import '../App.css';

const UpLoadFile = () => {
	const [file, setFile] = useState(null);
	const [err, setErr] = useState(null);

	const types = ['image/jpeg', 'image/png'];

	const handleChange = event => {
		let fileSelected = event.target.files[0];

		if (fileSelected && types.includes(fileSelected.type)) {
			setFile(fileSelected);
			setErr('');
		} else {
			setFile(null);
			setErr('Please select an image in format of (png or jpeg)');
		}
	};
	return (
		<form>
			<label>
				<input type='file' onChange={handleChange} />
				{/* <span>Pic</span> */}
			</label>
			<div>
				{err && <div>{err}</div>}
				{file && <div>{file.name} </div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UpLoadFile;
