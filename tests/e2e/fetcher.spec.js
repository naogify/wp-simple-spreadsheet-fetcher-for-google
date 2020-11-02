import {
	createNewPost,
	enablePageDialogAccept,
	publishPost,
} from '@wordpress/e2e-test-utils';
import * as helper from './helper';

const name = "wp2s2fg/fetcher";
const timeout =  8000;
const insertTableFetcher = async () => {
	await page.click('button[aria-label="Add block"]');
	await page.type('input[placeholder="Search for a block"]', 'Table');
	await page.click('.editor-block-list-item-wp2s2fg-fetcher');
}

describe( 'Table', () => {
	beforeAll( async () => {
		await enablePageDialogAccept();
	} );
	beforeEach( async () => {
		await createNewPost();
	} );

	it( 'Test Javascript Error', async () => {

		// Insert Table Block.
		await insertTableFetcher();

		// Check if block was inserted and no error.
		await helper.checkForBlockErrors( name );

		// Take Screenshot for debug.
		// await page.screenshot({path: './tests/e2e/screenshot/fetcher1.png'});
	}, timeout );

	it( 'Test PHP Error', async () => {
		// Insert Table Block.
		await insertTableFetcher();

		await publishPost();

		const publishUrl = await page.evaluate( () => {
			// Get publish URL.
			const publishUrlTag = document.querySelector(".post-publish-panel__postpublish-header.is-opened").innerHTML;
			const url = publishUrlTag.match(/http.+?"/g);
			// remove "
			return url[0].slice(0, -1);

		})

		await page.goto(publishUrl);

		// Get texts in published post.
		const contents = await page.evaluate(() => {
			return document.querySelector(".entry-content").innerText;
		});

		// Check Error messages.
		expect( contents.match(/Notice/) ).toBeNull();
		expect( contents.match(/Warning/) ).toBeNull();
		expect( contents.match(/Fatal/) ).toBeNull();

		// For debugging.
		// await page.screenshot({path: './tests/e2e/screenshot/fetcher1.png'});
	}, timeout );
} );
