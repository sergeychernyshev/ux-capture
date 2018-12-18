import ExpectedMark from './ExpectedMark';
import UXBase from './UXBase';

import { INTERACTIVE_TRANSITION_START_MARK_NAME } from './UXCapture';

/**
 * A `Zone` is a collection of DOM elements on a page that correspond
 * to a given phase of page load. (e.g. all elements in `ux-destination-verfied`)
 *
 * Example props:
 *
 * {
 *  name: "ux-destination-verified",
 *  marks: ["ux-image-online-logo", "ux-image-inline-logo"]
 *  onMeasure: measureName => {},
 *  onMark: markName => {}
 * }
 */
export default class Zone extends UXBase {
	// Name used for UserTiming measures
	measureName = this.props.name;

	constructor(props) {
		super(props);

		// Create a new `ExpectedMark` for each mark
		const configuredMarkNames = this.props.elements
			? // new elements array on zone object
			  this.props.elements.map(element => element.marks).flat()
			: // legacy with direct marks array on zone object
			  this.props.marks;

		// mark names for elements already on the page
		const alreadyOnThePage =
			this.props.startMarkName === INTERACTIVE_TRANSITION_START_MARK_NAME
				? props.elements.reduce((elements, element) => {
						const nodes = this.selectDOMNodes(element);

						// if array or element list is returned, check if it has one or more entries
						if (nodes && (typeof nodes.length === 'undefined' || nodes.length > 0)) {
							elements.push.apply(elements, element.marks);
						}

						return elements;
				  }, [])
				: []; // in page view mode, expect Zone to be defined before any elements are on the page

		// do not create marks for elements that are already on the page
		const markNamesToExpect = configuredMarkNames.filter(
			markName =>
				!alreadyOnThePage.find(existingMarkName => existingMarkName === markName)
		);

		this.marks = markNamesToExpect.map(markName => {
			const mark = ExpectedMark.create(markName);

			mark.onComplete(completeMark => {
				// pass the event upstream
				this.props.onMark(markName);
				if (this.marks.every(m => m.marked)) {
					this.measure(markName);
				}
			});

			return mark;
		});

		// if expected some marks, but all are already on the page,
		// create zero-length measure
		if (configuredMarkNames.length > 0 && markNamesToExpect.length === 0) {
			this.measure(this.props.startMarkName);
		}
	}

	/**
	 * Returns DOM nodes collection / array or individual DOM Node based on selector configuration
	 *
	 * @param {Object} element - individual element configuration object
	 * @returns {Node|Node[]|null}
	 */
	selectDOMNodes(element) {
		// if elements have selectors defined or global element selector is configured,
		// use them to find marks to record
		if (element.elementSelector) {
			if (typeof element.elementSelector === 'function') {
				return element.elementSelector();
			} else {
				// if not a function, treat it as CSS selector argument
				return document.querySelectorAll(element.elementSelector);
			}
		} else if (this.props.elementSelector) {
			return this.props.elementSelector(element);
		} else {
			return null;
		}
	}

	/**
	 * Records measure on Performance Timeline and calls onMeasure callback
	 *
	 * @param {ExpectedMark} lastMark last mark that triggered completion
	 */
	measure(endMarkName) {
		if (
			typeof window.performance !== 'undefined' &&
			typeof window.performance.measure !== 'undefined'
		) {
			window.performance.measure(
				this.measureName,
				this.props.startMarkName,
				endMarkName
			);
		}

		this.props.onMeasure(this.measureName);
	}
}
