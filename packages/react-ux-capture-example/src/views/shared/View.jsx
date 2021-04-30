import React from 'react';
import UXCaptureStartView from '@ux-capture/react-ux-capture/lib/UXCaptureStartView';

export default props => {
	const {
		destinationVerified,
		primaryContentDisplayed,
		primaryActionAvailable,
		secondaryContentDisplayed,
		header,
		children,
		footer,
	} = props;
	return (
		<div className="bounds">
			<div className="section">
				<UXCaptureStartView
					destinationVerified={destinationVerified || undefined}
					primaryContentDisplayed={primaryContentDisplayed || undefined}
					primaryActionAvailable={primaryActionAvailable || undefined}
					secondaryContentDisplayed={secondaryContentDisplayed || undefined}
				/>
				{header}
				{children}
				{footer}
			</div>
		</div>
	);
};
