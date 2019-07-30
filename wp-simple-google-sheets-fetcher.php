<?php
/**
 * Plugin Name:     WP Simple Google Sheets Fetcher
 * Plugin URI:      PLUGIN SITE HERE
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

class WPSimpleGoogleSheetsFetcher {

	function __construct() {

		if ( isset( $_POST['api_key'] ) ) {
			setApiKey( $_POST['api_key'] );
			echo $this->renderSetApiKey();
		}

		if ( ! getApiKey() ) {
			echo $this->renderApiKeyNotSet();
		}
	}

	function renderSetApiKey() {
		return '<span class="warn">API Key set!</span >';
	}

	function renderApiKeyNotSet() {

		$html = '<div class="api-key" >';
		$html .= '<strong > You have not entered your API key </strong >';
		$html .= '<form action="' . htmlspecialchars( $_SERVER["PHP_SELF"] ) . '" method="POST" >';
		$html .= 'API Key:<input type="text" name="api_key" placeholder="API-Key" required />';
		$html .= '<input type="submit" value="Set API-Key" />';
		$html .= '</form >';
		$html .= '<em> This can be found in the <a href="http://developers.google.com/console" target="_blank"> Google API Console </em >';
		$html .= '</div>';

		return $html;
	}
}

$WPSimpleGoogleSheetsFetcher = new WPSimpleGoogleSheetsFetcher();
