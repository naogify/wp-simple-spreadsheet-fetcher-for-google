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
		return '<span class="warn">API Key and SpreadSheetId set!</span >';
	}

	function renderApiKeyNotSet() {

		$html = '<div class="api-key" >';
		$html .= '<strong > You have not entered your API key </strong >';
		$html .= '<form action="' . htmlspecialchars( $_SERVER["PHP_SELF"].'?'.$_SERVER["QUERY_STRING"] ) . '" method="POST" >';
		$html .= 'API Key:<input type="text" name="api_key" placeholder="API-Key" required />';
		$html .= '<br>';
		$html .= 'SpreadSheetId:<input type="text" name="spread_sheetId" placeholder="Spread-SheetId" required />';
		$html .= '<input type="submit" value="Set Configuration Info" />';
		$html .= '</form >';
		$html .= '<em> This can be found in the <a href="http://developers.google.com/console" target="_blank"> Google API Console</a></em >';
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
