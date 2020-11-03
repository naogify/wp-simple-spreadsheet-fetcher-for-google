import {
	createNewPost,
	enablePageDialogAccept,
	publishPost,
	insertBlock
} from '@wordpress/e2e-test-utils';
import * as helper from './helper';

const name = "wp2s2fg/fetcher-chart";

describe( 'Chart', () => {
	beforeAll( async () => {
		await enablePageDialogAccept();
	} );
	beforeEach( async () => {
		await createNewPost();
	} );

	jest.setTimeout(10000);

	it( 'Check Javascript Error', async () => {

		// Insert Table Block.
		await insertBlock( 'Chart' );

		// Check if block was inserted and no error.
		await helper.checkForBlockErrors(name);

		// Take Screenshot for debug.
		// await page.screenshot({path: './tests/e2e/screenshot/fetcher-chart.png'});
	});

	it( 'Check PHP Error', async () => {
		// Insert Table Block.
		await insertBlock( 'Chart' );

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
		// await page.screenshot({path: './tests/e2e/screenshot/fetcher-chart1.png'});
	});
} );
