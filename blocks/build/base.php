<?php

class Wp2s2fgSheetsApi{

	public static function get_api_key(){
		return esc_html(get_option( 'wp2s2fg-api-key' ));
	}
	
	public static function get_spread_sheet_id() {
		return esc_html(get_option( 'wp2s2fg-spread-sheet-id' ));
	}
	
	public static function set_api_key($api_key){
		update_option( 'wp2s2fg-api-key', sanitize_text_field( $api_key ) );
	}
	
	public static function delete_api_key() {
		delete_option( 'wp2s2fg-api-key' );
	}
	
	public static function delete_spread_sheet_id() {
		delete_option( 'wp2s2fg-spread-sheet-id' );
	}

	public static function api_key_not_set(){
		$url = admin_url( 'admin.php?page=wsgsf_settings' );
		return __( 'API-KEY is not set Please set it at the ', 'wp-simple-spreadsheet-fetcher-for-google' ) .'<a href="' . esc_url( $url ) . '">' . __( 'settings.','wp-simple-spreadsheet-fetcher-for-google' ) . '</a>';
	}

	public static function is_sheetId($sheetId){
		return $sheetId || sanitize_text_field(self::get_spread_sheet_id());
	}

	public static function sheetUrl_to_Id($sheetId){
		$sheetId = preg_replace('/https\:\/\/docs\.google\.com\/spreadsheets\/d\//', '', esc_url($sheetId));
		return preg_replace('/\/.+$/', '', $sheetId);
	}

	public static function print_sheetUrl_Not_set(){
		return __( 'Sheet URL is not set. Please set it from the sidebar.', 'wp-simple-spreadsheet-fetcher-for-google' );
	}

	public static function print_sheetName_sheetRange_range_Not_set(){
		return __( 'Fetch data setting is not set. Please set it from the sidebar.', 'wp-simple-spreadsheet-fetcher-for-google' );
	}

	public static function print_sheetName_Not_set(){
		return __( 'Sheet Name is not set. Please set it from the sidebar. Example : Sheet1', 'wp-simple-spreadsheet-fetcher-for-google' );
	}

	public static function print_sheetRange_Not_set($block){
		if($block === 'wp2s2fg/fetcher'){
			return __( 'Cell or Range is not set. Please set it from the sidebar. Example : A1:A5', 'wp-simple-spreadsheet-fetcher-for-google' );

		}elseif($block === 'wp2s2fg/fetcher-item'){
			return __( 'Cell is not set. Please set it from the sidebar. Example : A1', 'wp-simple-spreadsheet-fetcher-for-google' );
			
		}
	}
}

