//Redux
import { connect } from 'react-redux';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { links } from './../../../utilities/links';
import CTA from './../../CTA';

const StartPage = ({ firstState }) => {
	return (
		<main
			css={css`
				width: 100%;
				padding: 0 1rem;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
			`}>
			<img
				src="./hamsterwars_icon4shadow.svg"
				alt="testbilden"
				css={css`width: 90%;`}
			/>
			<article
				css={css`
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: space-around;
					text-align: center;
				`}>
				<h1 className="inline">BARA </h1>
				<h1 className="giant inline" css={css`margin: .4rem 0;`}>
					1
				</h1>{' '}
				<h1 className="inline">HAMSTER KAN VA SÖTAST</h1>
				<CTA link={links.battle} text={'RANDOM BATTLE'} />
				<article
					className="highlight"
					css={css`margin-top: 1rem;`}>
					<h3
						className="highlight"
						css={css`margin: 1rem 0 .5rem;`}>
						Om projektet
					</h3>
					<p>
						Det här är en kul liten sida där man klickar på den
						hamster man tycker är sötast. <br />
						<br />
						Dessa är några av biblioteken/webbtjänster/tekniker
						jag använt mig av för att bygga den:
					</p>
					<ul
						css={css`
							margin-top: 1rem;
							list-style: none;
							display: flex;
							flex-direction: column;
						`}>
						<li>React</li>
						<li>Redux</li>
						<li>Redux-thunk</li>
						<li>React-Spring</li>
						<li>@emotion/core</li>
						<li>Node</li>
						<li>Express</li>
						<li>Firebase storage</li>
						<li>Firestore</li>
						<li>Heroku</li>
						<li>med mera...</li>
					</ul>
				</article>
			</article>
		</main>
	);
};

const mapStateToProps = state => {
	return {
		firstState: state
	};
};

export default connect(mapStateToProps, null)(StartPage);
