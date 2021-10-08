import styled from 'styled-components';

export const AudioPlayerContainer = styled.div`
	width: 100%;
	padding: 0.5rem 2rem;
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	width: 100%;
	padding: 1rem 0;
	display: flex;
	flex-flow: row;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

export const ControlBtn = styled.button`
	width: 40px;
	height: 40px;
	font-size: 1em;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: none;
	border: none;
	border-radius: 50%;
	&:hover,
	&:active,
	&:focus {
		background: var(--secondary-bg);
	}
`;

export const PlayPauseBtn = styled.button`
	width: 50px;
	height: 50px;
	background: var(--gradient);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: none;
`;

export const Text = styled.p`
	font-size: 1em;
	color: white;
`;

export const ProgressBarWrapper = styled.div`
	width: 80%;
	/* margin: 0 1.5rem; */
`;

export const ProgressBar = styled.input`
	--bar-bg: #2e2d36;
	--seek-before-width: 0;
	--seek-before-color: #ffa501;
	--knobby-color: #fff;

	appearance: none;
	background: var(--bar-bg);
	border-radius: 10px;
	width: 100%;
	height: 11px;
	outline: none;
	cursor: pointer;
	position: relative;
	/* progress bar - safari */
	&::-w--knobby-colorr-runnable-track {
		background: var(--bar-bg);
		border-radius: 10px;
		position: relative;
		width: 100%;
		height: 11px;
		outline: none;
	}
	/* progress bar firefox */
	&::-moz-range-track {
		background: var(--bar-bg);
		border-radius: 10px;
		position: relative;
		width: 100%;
		height: 11px;
		outline: none;
	}
	&::-moz-focus-outer {
		border: 0;
	}
	&::before {
		content: '';
		height: 11px;
		width: var(--seek-before-width);
		background-color: var(--seek-before-color);
		border-radius: 10px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		cursor: pointer;
	}
	&::-moz-range-progress {
		background-color: var(--seek-before-color);
		border-radius: 10px;
		height: 11px;
	}
	&::-webkit-slider-thumb {
		--webkit-appearance: none;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		border: none;
		background: var(--knobby-color);
		cursor: pointer;
		position: relative;
		margin: -2px 0 0 0;
		z-index: 3;
		box-sizing: border-box;
		transform: scale(1.1);
	}
	&:active::-webkit-slider-thumb {
		transform: scale(1.3);
		background: var(--knobby-color);
	}
	&::-moz-range-thumb {
		height: 15px;
		width: 15px;
		border-radius: 50%;
		border: transparent;
		background: var(--knobby-color);
		cursor: pointer;
		position: relative;
		z-index: 3;
		box-sizing: border-box;
		transform: scale(1.1);
	}
	&:active::-moz-range-thumb {
		transform: scale(1.3);
		background: var(--knobby-color);
	}
`;
