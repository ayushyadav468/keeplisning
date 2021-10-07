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

	// References

	const togglePlayPause = () => {
		const preValue = isPlaying;
		setIsPlaying(!preValue);
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
					src='https://www.youtube.com/watch?v=q5NQqwP7Rxs'
					preload='metadata'
				></audio>
				<ControlBtn>
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
				<ControlBtn>
					<BsArrowRightShort
						style={{ width: '30px', height: '30px', color: 'white' }}
					/>
				</ControlBtn>

				{/* Current Time */}
				<Text>0:00</Text>
				{/* Progress Bar */}
				<ProgressBarWrapper>
					<ProgressBar type='range' />
				</ProgressBarWrapper>
				{/* Duration */}
				<Text>5:00</Text>
			</AudioPlayerContainer>
		</div>
	);
};

export default AudioPlayer;
