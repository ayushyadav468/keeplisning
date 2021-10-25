import { useState, useEffect, useRef } from 'react';
import {
	AudioPlayerContainer,
	Wrapper,
	ControlBtn,
	PlayPauseBtn,
	ProgressBarWrapper,
	ProgressBar,
	Text
} from './AudioPlayer.style';
import { MdRepeat, MdRepeatOne, MdShuffle } from 'react-icons/md';
import { FaPlay, FaPause } from 'react-icons/fa';
import {
	IoMdRewind,
	IoMdFastforward,
	IoMdSkipBackward,
	IoMdSkipForward
} from 'react-icons/io';

const AudioPlayer = ({ currentSong }) => {
	// State
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [onRepeat, setOnRepeat] = useState(false);

	// References
	const audioPlayer = useRef();
	const progressBar = useRef();
	const animationRef = useRef(); // reference to the animation of slider

	// useEffect must run only when audio player meta data is loaded
	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

	// Format Time in MM:SS
	const calculateTime = (secs) => {
		if (isNaN(secs)) {
			return `0:00`;
		}
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returendSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returendSeconds}`;
	};

	const togglePlayPause = () => {
		const preValue = isPlaying;
		setIsPlaying(!preValue);
		if (!preValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	// Handle repeat a song
	const repeatHandler = () => {
		const preValue = onRepeat;
		setOnRepeat(!preValue);
	};
	// Function keep track of current time of song
	// and change the progress bar and current time
	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	// Function keep track of change of range
	// and play the song accordingly
	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	// Function change the width of range slider
	// according to the song played
	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			'--seek-before-width',
			`${(progressBar.current.value / duration) * 100}%`
		);
		setCurrentTime(progressBar.current.value);
	};

	// Make the song to go back 30s
	const backThirty = () => {
		progressBar.current.value = Number(progressBar.current.value) - 10;
		changeRange();
	};

	// Make the song to go forward 30s
	const forwardThirty = () => {
		progressBar.current.value = Number(progressBar.current.value) + 10;
		changeRange();
	};

	const controlBtnStyle = {
		width: '25px',
		height: '25px',
		color: 'white'
	};

	return (
		<AudioPlayerContainer>
			<Wrapper>
				{currentSong.length > 0 ? (
					<audio src={currentSong} preload='metadata' ref={audioPlayer}></audio>
				) : (
					<audio src='/' preload='metadata' ref={audioPlayer}></audio>
				)}
				<ControlBtn onClick={repeatHandler}>
					{onRepeat ? (
						<MdRepeatOne style={controlBtnStyle} />
					) : (
						<MdRepeat style={controlBtnStyle} />
					)}
				</ControlBtn>
				<ControlBtn>
					<IoMdSkipBackward style={controlBtnStyle} />
				</ControlBtn>
				<ControlBtn onClick={backThirty}>
					<IoMdRewind style={controlBtnStyle} />
				</ControlBtn>
				<PlayPauseBtn onClick={togglePlayPause}>
					{isPlaying ? (
						<FaPause style={{ color: 'white' }} />
					) : (
						<FaPlay
							style={{ position: 'relative', left: '1px', color: 'white' }}
						/>
					)}
				</PlayPauseBtn>
				<ControlBtn onClick={forwardThirty}>
					<IoMdFastforward style={controlBtnStyle} />
				</ControlBtn>
				<ControlBtn>
					<IoMdSkipForward style={controlBtnStyle} />
				</ControlBtn>
				<ControlBtn>
					<MdShuffle style={controlBtnStyle} />
				</ControlBtn>
			</Wrapper>
			<Wrapper>
				{/* Current Time */}
				<Text>{calculateTime(currentTime)}</Text>
				{/* Progress Bar */}
				<ProgressBarWrapper>
					<ProgressBar
						type='range'
						defaultValue='0'
						ref={progressBar}
						onChange={changeRange}
					/>
				</ProgressBarWrapper>
				{/* Duration */}
				{/* <Text>{duration && !isNaN(duration) && calculateTime(duration)}</Text> */}
				<Text>{'00:00'}</Text>
			</Wrapper>
		</AudioPlayerContainer>
	);
};

export default AudioPlayer;
