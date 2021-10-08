import { useState, useEffect, useRef } from 'react';
import {
	AudioPlayerContainer,
	ControlBtn,
	PlayPauseBtn,
	ProgressBarWrapper,
	ProgressBar,
	Text
} from '@/component/AudioPlayer/AudioPlayer.style';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = () => {
	// State
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

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
		progressBar.current.value = Number(progressBar.current.value) - 30;
		changeRange();
	};

	// Make the song to go forward 30s
	const forwardThirty = () => {
		progressBar.current.value = Number(progressBar.current.value) + 30;
		changeRange();
	};

	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#2E2D36'
			}}
		>
			<AudioPlayerContainer>
				<audio
					src='/KaunTujhe.mp3'
					preload='metadata'
					ref={audioPlayer}
				></audio>
				<ControlBtn onClick={backThirty}>
					<BsArrowLeftShort
						style={{ width: '30px', height: '30px', color: 'white' }}
					/>
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
					<BsArrowRightShort
						style={{ width: '30px', height: '30px', color: 'white' }}
					/>
				</ControlBtn>

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
				<Text>{duration && !isNaN(duration) && calculateTime(duration)}</Text>
			</AudioPlayerContainer>
		</div>
	);
};

export default AudioPlayer;
