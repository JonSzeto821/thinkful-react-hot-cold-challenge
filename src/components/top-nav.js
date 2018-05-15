import React from 'react';

export default function TopNav(props) {
	return (
		<nav>
			<ul>
				<li>
					<a
						href='#what'
						className='what'
						aria-label='How to play'
					>What</a>
				</li>
				<li>
					<a
						href='#feedback'
						className='new'
						aria-label='Start a New Game'
						onClick={() => props.onRestartGame()}
					>+ New Game</a>
				</li>
				<li>
					<a
						href='#get-status'
						className='visuallyHidden focusable status-link'
						onClick={() => props.onGenerateAuralUpdate()}
					>Hear State of Game</a>
				</li>
			</ul>
		</nav>
		);
}