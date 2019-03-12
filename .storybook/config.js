import { configure } from '@storybook/react';

function loadStories() {
	require('../stories/test.story.jsx');
}

configure(loadStories, module);
