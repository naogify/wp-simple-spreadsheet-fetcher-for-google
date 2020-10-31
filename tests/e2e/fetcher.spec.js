import {
	clickBlockToolbarButton,
	clickButton,
	createNewPost,
	enablePageDialogAccept,
	getEditedPostContent,
	insertBlock,
	searchForBlock,
} from '@wordpress/e2e-test-utils';
import * as helper from './helper';

describe( 'Table', () => {
	beforeAll( async () => {
		await enablePageDialogAccept();
	} );
	beforeEach( async () => {
		await createNewPost();
	} );

	it( 'Table block will not be broken.', async () => {

		// Insert Table Block.
		await page.click('button[aria-label="Add block"]');
		await page.type('input[placeholder="Search for a block"]', 'Table'); // Types instantly
		await page.click('.editor-block-list-item-wp2s2fg-fetcher');

		// Check if block was inserted and no error.
		await helper.checkForBlockErrors("wp2s2fg/fetcher");

		// Take Screenshot for debug.
		await page.screenshot({path: './tests/e2e/screenshot/fetcher.png'});
	} );
} );
