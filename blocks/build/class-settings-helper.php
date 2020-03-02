<?php

class SettingsHelper {

    static public function is_api_key_set($api_key){
        if ( ! $api_key = sanitize_text_field(wp2s2fg_get_api_key()) ) {
            $url = admin_url( 'admin.php?page=wsgsf_settings' );
            $url = '<a href="' . esc_url( $url ) . '">' . __( 'settings.' ) . '</a>';
            return __( 'API-KEY is not set Please set it at the ', 'wp-simple-spreadsheet-fetcher-for-google' ) . $url;
        }
    }
    

	if(!$sheetId){
		if ( ! $sheetId_deprecated = sanitize_text_field(wp2s2fg_get_spread_sheet_id()) ) {
			return __( 'Sheet URL is not set. Please set it from the sidebar.', 'wp-simple-spreadsheet-fetcher-for-google' );
		}
	}else{
		$sheetId = preg_replace('/https\:\/\/docs\.google\.com\/spreadsheets\/d\//', '', esc_url($sheetId));
		$sheetId = preg_replace('/\/.+$/', '', $sheetId);
	}

	if(!$sheetName && !$sheetRange) {
		if ( ! $range ) {
			return __( 'Fetch data setting is not set. Please set it from the sidebar.', 'wp-simple-spreadsheet-fetcher-for-google' );
		}

	}else{

		if(!$sheetName){
			return __( 'Sheet Name is not set. Please set it from the sidebar. Example : Sheet1', 'wp-simple-spreadsheet-fetcher-for-google' );

		}else if(!$sheetRange){

			if($block === 'wp2s2fg/fetcher'){
				return __( 'Cell or Range is not set. Please set it from the sidebar. Example : A1:A5', 'wp-simple-spreadsheet-fetcher-for-google' );

			}elseif($block === 'wp2s2fg/fetcher-item'){
				return __( 'Cell is not set. Please set it from the sidebar. Example : A1', 'wp-simple-spreadsheet-fetcher-for-google' );
				
			}
		}
		$range = esc_html($sheetName) . '!' . esc_html($sheetRange);
	}
}