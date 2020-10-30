<?php

namespace Fetcher\App\Utils;

class FetcherWarning{

	public static function api_key($api_key){

		$url = admin_url( 'admin.php?page=wsgsf_settings' );
		$url = '<a href="' . esc_url( $url ) . '">' . __( 'settings.' ) . '</a>';
		return __( 'API-KEY is not set Please set it at the ', 'wp-simple-spreadsheet-fetcher-for-google' ) . $url;
	}

	public static function sheet_url(){
		return __( 'Sheet URL is not set. Please set it from the sidebar.  IMPORTANT : Please change the sheet sharing settings to "Anyone with the link", this plugin dose not work with "Restricted" sheets.', 'wp-simple-spreadsheet-fetcher-for-google' );
	}

	public static function sheet_name_range(){
		return __( 'Fetch data setting is not set. Please set it from the sidebar.', 'wp-simple-spreadsheet-fetcher-for-google' );
	}

	public static function sheet_name(){
		return __( 'Sheet Name is not set. Please set it from the sidebar. Example : Sheet1', 'wp-simple-spreadsheet-fetcher-for-google' );
	}

	public static function sheet_range_fetcher(){
		return __( 'Cell or Range is not set. Please set it from the sidebar. Example : A1:A5', 'wp-simple-spreadsheet-fetcher-for-google' );
	}

	public static function sheet_cell_fetcher_item(){
		return __( 'Cell is not set. Please set it from the sidebar. Example : A1', 'wp-simple-spreadsheet-fetcher-for-google' );
	}

	public static function sheet_name_warning( $sheet_name ){
		return __( 'Sheet Name: ','wp-simple-spreadsheet-fetcher-for-google' ) . esc_html($sheet_name) . __( ' is not existed.','wp-simple-spreadsheet-fetcher-for-google' );
	}
}
