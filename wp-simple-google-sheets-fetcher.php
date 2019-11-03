<?php
/**
 * Plugin Name:     WP Simple Google Sheets Fetcher
 * Plugin URI:      https://github.com/naogify/wp-simple-google-sheets-fetcher
 * Description:     Simple plugin to fetch data from google spreadsheet.
 * Author:          Naoki Ohashi
 * Author URI:      https://naoki-is-me
 * Text Domain:     wp-simple-google-sheets-fetcher
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Wp_Simple_Google_Sheets_Fetcher
 */

include_once dirname( __FILE__ ) . '/vendor/autoload.php';
include_once dirname( __FILE__ ) . '/templates/base.php';
include_once dirname( __FILE__ ) . '/blocks/parser.php';
include_once dirname( __FILE__ ) . '/blocks/get-value-query.php';

class WPSimpleGoogleSheetsFetcher {

	function __construct() {
	}

	public function init() {
		add_action( 'admin_menu', array( $this, 'addSubMenu' ) );
	}

	function renderSetApiKey() {
		return '<span class="warn">' . __( "API Key and SpreadSheetId set!", 'wp-simple-google-sheets-fetcher' ) . '</span >';
	}

	function renderApiKeyNotSet() {

		$html = '<div class="api-key" >';
		$html .= '<h2>' . __( "== Setting API key and SpreadSheetId ==", 'wp-simple-google-sheets-fetcher' ) . '</h2>';
		$html .= '<strong >' . __( " You have not entered your API key", 'wp-simple-google-sheets-fetcher' ) . '</strong >';
		$html .= '<br>';
		$html .= '<br>';
		$html .= '<form action="' . htmlspecialchars( $_SERVER["PHP_SELF"].'?'.$_SERVER["QUERY_STRING"] ) . '" method="POST" >';
		$html .= __( "API Key:", 'wp-simple-google-sheets-fetcher' ) . '<input type="text" name="api_key" placeholder="API-Key" required />';
		$html .= '<br>';
		$html .= __( "SpreadSheetId:", 'wp-simple-google-sheets-fetcher' ) . '<input type="text" name="spread_sheetId" placeholder="Spread-SheetId" required />';
		$html .= '<br>';
		$html .= '<br>';
		$html .= '<input type="submit" value="Set Configuration Info" />';
		$html .= '</form >';
		$html .= '<br>';
		$html .= '<em>' . __( "This can be found in the", 'wp-simple-google-sheets-fetcher' ) . '<a href="http://developers.google.com/console" target="_blank">' . __( "Google API Console", 'wp-simple-google-sheets-fetcher' ) . '</a></em >';
		$html .= '<h2>' . __( "== How to use ==", 'wp-simple-google-sheets-fetcher' ) . '</h2>';
		$html .= '<ul>';
		$html .= '<li>' . __( "1. Create the api key . For more detail . Please refer to ", 'wp-simple-google-sheets-fetcher' ) . '<a href="https://developers.google.com/sheets/api/quickstart/js#step_1_turn_on_the" target="_blank">' . __( "https://developers.google.com/sheets/api/quickstart/js#step_1_turn_on_the", 'wp-simple-google-sheets-fetcher' ) . '</a></li>';
		$html .= '<li>' . __( "2. Turn on Get shareable link . For more detail . Please refer to ", 'wp-simple-google-sheets-fetcher' ) . '<a href="https://support.google.com/drive/answer/2494822#link_sharing" target="_blank">' . __( "https://support.google.com/drive/answer/2494822#link_sharing", 'wp-simple-google-sheets-fetcher' ) . '</a></li>';
		$html .= '<li>' . __( "3. Get Spreadsheet ID . For more detail . Please refer to ", 'wp-simple-google-sheets-fetcher' ) . '<a href="https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id" target="_blank">' . __( "https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id", 'wp-simple-google-sheets-fetcher' ) . '</a></li>';
		$html .= '<li>' . __( "4. Move to the settings page from side menu that Plugins > WP Simple Google Sheets Fetcher.", 'wp-simple-google-sheets-fetcher' ) . '</li>';
		$html .= '<li>' . __( "5. Enter your api key and sheetsID in form.", 'wp-simple-google-sheets-fetcher' ) . '</li>';
		$html .= '<li>' . __( "6. Choose \"Display Google Sheets Data\" block, use side panel to indicate the range to fetch data.", 'wp-simple-google-sheets-fetcher' ) . '</li>';
		$html .= '</ul>';
		$html .= '</div>';
		return $html;
	}

	public function addSubMenu() {
		$custom_page = add_submenu_page(
			'/plugins.php',
			__( 'WP Simple Google Sheets Fetcher', 'wp-simple-google-sheets-fetcher' ),
			__( 'WP Simple Google Sheets Fetcher', 'wp-simple-google-sheets-fetcher' ),
			'edit_others_posts',
			'wsgsf_settings',
			array($this,'renderSettings')
		);
	}

	public function renderSettings() {

		if ( isset( $_POST['api_key'] ) && isset( $_POST['spread_sheetId'] ) ) {
			setApiKey( $_POST['api_key'] );
			setSpreadSheetId( $_POST['spread_sheetId'] );

			echo $this->renderSetApiKey();
		}

		if ( ! getApiKey() || ! getSpreadSheetId() ) {
			echo $this->renderApiKeyNotSet();
		}

	}

}

$WPSimpleGoogleSheetsFetcher = new WPSimpleGoogleSheetsFetcher();
$WPSimpleGoogleSheetsFetcher->init();
