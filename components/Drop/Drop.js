import { useDropzone } from 'react-dropzone';
import { DropContainer, Heading } from './Drop.style';

const Dropzone = ({ audioFiles }) => {
	const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
		useDropzone({
			accept: 'audio/*'
		});

	const acceptedFileItems = acceptedFiles.map((file) => {
		const objectURL = URL.createObjectURL(file);
		return objectURL;
	});

	const fileRejectionItems = fileRejections.map(({ file, errors }) =>
		console.log(file, errors)
	);
	return (
		<DropContainer {...getRootProps()}>
			<input {...getInputProps()} />
			<Heading>
				Drag n drop your music */.mp3 files here, or click to select files
			</Heading>
		</DropContainer>
	);
};

export default Dropzone;
