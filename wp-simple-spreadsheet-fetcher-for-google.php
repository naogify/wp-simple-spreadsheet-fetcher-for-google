<?php
/**
 * Plugin Name:     WP Simple Spreadsheet Fetcher for Google
 * Plugin URI:      https://github.com/naogify/wp-simple-google-sheets-fetcher
 * Description:     Simple plugin to fetch data from google spreadsheet.
 * Author:          Naoki Ohashi
 * Author URI:      https://naoki-is-me
 * Text Domain:     wp2s2fg
 * Domain Path:     /languages
 * Version:         0.2.2
 *
 * @package         Wp_Simple_Spreadsheet_Fetcher_for_Google
 */

include_once dirname( __FILE__ ) . '/vendor/autoload.php';
include_once dirname( __FILE__ ) . '/templates/base.php';
include_once dirname( __FILE__ ) . '/blocks/parser.php';
include_once dirname( __FILE__ ) . '/blocks/get-value-query.php';

class WPSimpleSpreadsheetFetcherForGoogle {

	public function __construct() {
	}

	public function init() {
		add_action( 'admin_menu', array( $this, 'add_sub_menu' ) );
	}

	public function render_set_api_key() {
		$message = '<span class="success" style="color:#28a745; font-size:1.2rem">' . __( "API Key and SpreadSheetId set!", 'wp2s2fg' ) . '</span >';

		return $this->render_settings_page( $message );
	}

	public function render_api_key_not_set() {
		$message = '<strong class="warn" style="color:#dc3545; font-size:1.2rem">' . __( " You have not entered your API key", 'wp2s2fg' ) . '</strong >';

		return $this->render_settings_page( $message );
	}

	public function render_settings_page( $message ) {

		if ( wp2s2fg_get_api_key() && wp2s2fg_get_spread_sheet_id() ) {
			$api_key         = wp2s2fg_get_api_key();
			$spread_sheet_id = wp2s2fg_get_spread_sheet_id();
		} else {
			$api_key         = '';
			$spread_sheet_id = '';
		}

		$html = '<div class="api-key" >';
		$html .= '<h2>' . __( "Setting API key and SpreadSheetId", 'wp2s2fg' ) . '</h2>';
		$html .= $message;
		$html .= '<br>';
		$html .= '<br>';
		$html .= '<form action="' . htmlspecialchars( $_SERVER["PHP_SELF"] . '?' . $_SERVER["QUERY_STRING"] ) . '" method="POST" >';
		$html .= __( "API Key : ", 'wp2s2fg' ) . '<input type="text" name="api_key" placeholder="API-Key" value="' . esc_html( $api_key ) . '" required />';
		$html .= '<br>';
		$html .= __( "SpreadSheetId : ", 'wp2s2fg' ) . '<input type="text" name="spread_sheet_id" placeholder="Spread-SheetId" value="' . esc_html( $spread_sheet_id ) . '"required />';
		$html .= '<br>';
		$html .= '<br>';
		$html .= '<input type="submit" value="Set Configuration Info" />';
		$html .= '</form >';
		$html .= '<br>';
		$html .= '<em>' . __( "This can be found in the", 'wp2s2fg' ) . '<a href="http://developers.google.com/console" target="_blank">' . __( "Google API Console", 'wp2s2fg' ) . '</a></em >';
		$html .= '<h2>' . __( "How to use", 'wp2s2fg' ) . '</h2>';
		$html .= '<ul>';
		$html .= '<li>' . __( "1. Create the api key . For more detail . Please refer to ", 'wp2s2fg' ) . '<a href="https://developers.google.com/sheets/api/quickstart/js#step_1_turn_on_the" target="_blank">' . __( "https://developers.google.com/sheets/api/quickstart/js#step_1_turn_on_the", 'wp2s2fg' ) . '</a></li>';
		$html .= '<li>' . __( "2. Turn on Get shareable link . For more detail . Please refer to ", 'wp2s2fg' ) . '<a href="https://support.google.com/drive/answer/2494822#link_sharing" target="_blank">' . __( "https://support.google.com/drive/answer/2494822#link_sharing", 'wp2s2fg' ) . '</a></li>';
		$html .= '<li>' . __( "3. Get Spreadsheet ID . For more detail . Please refer to ", 'wp2s2fg' ) . '<a href="https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id" target="_blank">' . __( "https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id", 'wp2s2fg' ) . '</a></li>';
		$html .= '<li>' . __( "4. Save your api key and sheetsID from the form above.", 'wp2s2fg' ) . '</li>';
		$html .= '<li>' . __( "5. Choose \"Display Google Sheets Data\" block at Widgets category , use side panel to indicate the range to fetch data.", 'wp2s2fg' ) . '</li>';
		$html .= '</ul>';
		$html .= '</div>';
		return $html;
	}

	public function add_sub_menu() {
		$custom_page = add_submenu_page(
			'/plugins.php',
			__( 'WP Simple Spreadsheet Fetcher for Google', 'wp2s2fg' ),
			__( 'WP Simple Spreadsheet Fetcher for Google', 'wp2s2fg' ),
			'edit_others_posts',
			'wsgsf_settings',
			array( $this, 'render_settings' )
		);
	}

	public function render_settings() {

		if ( isset( $_POST['api_key'] ) && isset( $_POST['spread_sheet_id'] ) ) {
			wp2s2fg_set_api_key( sanitize_text_field( $_POST['api_key'] ) );
			wp2s2fg_set_spread_sheet_id( sanitize_text_field( $_POST['spread_sheet_id'] ) );
		}

		if ( ! wp2s2fg_get_api_key() || ! wp2s2fg_get_spread_sheet_id() ) {
			echo $this->render_api_key_not_set();
		}else{
			echo $this->render_set_api_key();
		}
	}

}

$WPSimpleSpreadsheetFetcherForGoogle = new WPSimpleSpreadsheetFetcherForGoogle();
$WPSimpleSpreadsheetFetcherForGoogle->init();
