import {
	createNewPost,
	enablePageDialogAccept,
	publishPost,
} from '@wordpress/e2e-test-utils';
import * as helper from './helper';

const insertTableFetcher = async () =>{
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
		await helper.checkForBlockErrors("wp2s2fg/fetcher");

		// Take Screenshot for debug.
		await page.screenshot({path: './tests/e2e/screenshot/fetcher.png'});
	} );

	it( 'Test PHP Error', async () => {
		// Insert Table Block.
		await insertTableFetcher();

		await publishPost();

		const publishUrl = await page.evaluate(() => {
			// Get publish URL.
			return document.querySelector("#inspector-text-control-7").value;
		});

		await page.goto(publishUrl);

		// Get texts in published post.
		const contents = await page.evaluate(() => {
			return document.querySelector(".entry-content").innerText;
		});

		// Check Error messages.
		expect( contents.match(/Notice/) ).toBeNull();
		expect( contents.match(/Warning/) ).toBeNull();
		expect( contents.match(/Fatal/) ).toBeNull();

		await page.screenshot({path: './tests/e2e/screenshot/fetcher2.png'});

	} );

} );
