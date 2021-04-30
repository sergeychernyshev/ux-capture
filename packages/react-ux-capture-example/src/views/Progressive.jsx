import React from 'react';

import UXCaptureInlineMark from '@ux-capture/react-ux-capture/lib/UXCaptureInlineMark';
import UXCaptureImageLoad from '@ux-capture/react-ux-capture/lib/UXCaptureImageLoad';
import UXCaptureInteractiveMark from '@ux-capture/react-ux-capture/lib/UXCaptureInteractiveMark';

import View from './shared/View';
import Lazy from './shared/Lazy';
import { getBoxStyle } from '../reports/ZoneHelper';

const destinationVerified = [
	'ux-text-title',
	'ux-image-inline-logo',
	'ux-image-onload-logo',
];
const primaryContentDisplayed = ['ux-text-primary'];
const secondaryContentDisplayed = [
	'ux-text-secondary',
	'ux-image-inline-kitten',
	'ux-image-onload-kitten',
];
const primaryActionAvailable = ['ux-text-button', 'ux-handler-button'];

export const Zones = {
	'ux-destination-verified': destinationVerified,
	'ux-primary-content-displayed': primaryContentDisplayed,
	'ux-primary-action-available': primaryActionAvailable,
	'ux-secondary-content-displayed': secondaryContentDisplayed,
};

const Progressive = () => (
	<View
		destinationVerified={destinationVerified}
		primaryContentDisplayed={primaryContentDisplayed}
		secondaryContentDisplayed={secondaryContentDisplayed}
		primaryActionAvailable={primaryActionAvailable}
	>
		<div className="chunk">
			<h1
				className="text--pageTitle"
				style={getBoxStyle('ux-destination-verified')}
			>
				Progressive View
			</h1>
			<UXCaptureInlineMark mark="ux-text-title" />
		</div>
		<div className="chunk">
			<div style={getBoxStyle('ux-primary-content-displayed')}>
				<p>Primary content paragraph.</p>
				<p>
					This view uses progressive enhancement, lazy-loading all but
					primary content.
				</p>
				<p>Click action for the button also takes time to attach.</p>
			</div>
			<UXCaptureInlineMark mark="ux-text-primary" />
		</div>
		<div className="chunk">
			<Lazy
				delay={1000}
				fallback={
					<React.Fragment>
						<button
							className="button"
							disabled
							style={getBoxStyle('ux-primary-action-available')}
						>
							Primary action button
						</button>
						<UXCaptureInlineMark mark="ux-text-button" />
					</React.Fragment>
				}
			>
				<UXCaptureInteractiveMark mark="ux-handler-button">
					<button
						className="button"
						style={getBoxStyle('ux-primary-action-available')}
						onClick={() => alert('Progressive enhancement is the best!')}
					>
						Primary action button
					</button>
				</UXCaptureInteractiveMark>
			</Lazy>
		</div>
		<div className="chunk">
			<div style={getBoxStyle('ux-secondary-content-displayed')}>
				<Lazy
					delay={2000}
					fallback={
						<div
							style={{
								backgroundColor: '#F7F7F7',
								padding: '1em',
								color: 'silver',
							}}
						>
							Kitten is strolling lazily onto the screen ...
						</div>
					}
				>
					<UXCaptureInteractiveMark mark="ux-image-inline-kitten">
						<UXCaptureImageLoad
							mark="ux-image-onload-kitten"
							src="http://placekitten.com/1400/600"
							alt="kitten"
							width="100%"
						/>
					</UXCaptureInteractiveMark>
				</Lazy>
			</div>
		</div>

		<Lazy delay={1500}>
			<div className="chunk">
				<p style={getBoxStyle('ux-secondary-content-displayed')}>
					<UXCaptureInteractiveMark mark="ux-text-secondary">
						Secondary content paragraph
					</UXCaptureInteractiveMark>
				</p>
			</div>

			<div className="chunk">
				<p>
					The Restum ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</Lazy>
	</View>
);

export default Progressive;
