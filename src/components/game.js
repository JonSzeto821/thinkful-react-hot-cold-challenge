import React from 'react';

//Components needed
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Take a guess!',
			auralStatus: '',
			correctAnswer: Math.random(Math.random()*100) + 1
		};
	}

	restartGame(){
		this.setState({
			guesses: [];
			feedback: 'Take a guess!',
			auralStatus: '',
			correctAnswer: Math.random(Math.random()*100) + 1
		});
	}

	makeGuess(guess) {
		guess = parseInt(guess, 10);
		if(isNaN(guess)){
			this.setState({feedback: 'Please enter a valid integer!'});
			return;
		}

		const difference = Math.abs(guess - this.state.correctAnswer);

		let feedback;
		if(difference >= 50){
			feedback = 'You\'re Ice Cold';
		} else if(difference >= 30) {
			feedback = 'You\'re  Cold';
		} else if(difference >= 10) {
			feedback = 'You\'re  warm';
		} else if(difference >= 1) {
			feedback = 'You\'re  Hot';
		} else {
			feedback = 'Correct!';
		}

		this.setState({
			feedback,
			guesses: [...state.guesses, guess]
		});

		document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
	}

	generateAuralUpdate() {
		const {guesses, feedback} = this.state;
		const pluralize = guesses.length !== 1;

		let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

		if(guesses.length > 0) {
			auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
		}

		this.setState({
			auralStatus
		});
	}

	render() {
		const {feedback, guesses, auralStatus} = this.state;
		const guessCount = guesses.length;

		return(
			<div>
				<Header />
				<main role='main'>
					<GuessSection />
					<StatusSection />
					<InfoSection />
				</main>
			</div>

			);
	}
}




