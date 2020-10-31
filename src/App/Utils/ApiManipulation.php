<?php

namespace Fetcher\App\Utils;
use Fetcher\App\Utils\FetcherWarning;

class ApiManipulation{

	function get_google_sheet_value($api_key, $sheetUrl, $sheetName, $sheetRange, $service, $range="", $block=""){

		// If SheetId is url, get sheetId from url.
		if(strpos($sheetUrl,'http') !== false){
			//Get SheetId from URL.
			$sheetId = $this->get_sheet_id_from_url($sheetUrl);
		} else {
			$sheetId = $sheetUrl;
		}

		$message = $this->is_all_api_argument_is_correct($api_key, $sheetId, $sheetName, $sheetRange, $service, $range, $block);
		if ("success" === $message){
			// Get selected Sheet's value.
			$range = esc_html($sheetName) . '!' . esc_html($sheetRange);
			$response = $service->spreadsheets_values->get( !empty($sheetId_deprecated) ? $sheetId_deprecated : $sheetId, $range );
			$values = $response->getValues();
			$status = true;
		} else {
			$values = $message;
			$status = false;
		}

		return ["status" => $status, "values" => $values];
	}

	function is_all_api_argument_is_correct($api_key, $sheetId, $sheetName, $sheetRange, $service, $range="", $block=""){

		// Check API Key is set.
		if ( !$api_key ) {
			return FetcherWarning::api_key( $api_key );
		}

		// Check SheetId is set.
		if( !$sheetId || $this->is_str_null( $sheetId ) ){
			if ( ! $sheetId_deprecated = sanitize_text_field($this->get_spread_sheet_id()) ) {
				return FetcherWarning::sheet_url();
			}
		}

		// Check SheetName and SheetRange are set.
		if( !$sheetName && !$sheetRange || $this->is_str_null( $sheetName ) && $this->is_str_null( $sheetRange ) ) {
			if ( ! $range ) {
				return FetcherWarning::sheet_name_range();
			}
		}

		// Check SheetName is set.
		if( !$sheetName || $this->is_str_null( $sheetName ) ){
			return FetcherWarning::sheet_name();
		}

		// Check SheetRange is set.
		if( !$sheetRange || $this->is_str_null( $sheetRange ) ){
			if($block === 'wp2s2fg/fetcher'){
				return FetcherWarning::sheet_range_fetcher();

			}elseif($block === 'wp2s2fg/fetcher-item'){
				return FetcherWarning::sheet_cell_fetcher_item();
			}
		}

		// Get All Sheets in the file.
		$response = $service->spreadsheets->get(!empty($sheetId_deprecated) ? $sheetId_deprecated : $sheetId);
		$all_sheets = $response->getSheets();

		// Check Sheet Name is existed.
		if (!$this->is_sheet_name_exist($all_sheets, $sheetName) ) {
			// Add Warning
			return FetcherWarning::sheet_name_warning($sheetName);
		}

		//Check Sheet Range is correct
		if(!$this->is_sheet_range_correct($sheetRange)){
			return FetcherWarning::sheet_range_is_incorrect();
		}

		return "success";
	}

	function get_sheet_id_from_url($sheet_url){
		$sheetId = preg_replace('/https\:\/\/docs\.google\.com\/spreadsheets\/d\//', '', esc_url($sheet_url));
		$sheetId = preg_replace('/\/.+$/', '', $sheetId);
		return $sheetId;
	}

	function get_api_key(){
		$api_key = esc_html(get_option( 'wp2s2fg-api-key' ));
		if ( $api_key ) {
			return $api_key;
		}
	}

	function get_spread_sheet_id() {
		$spread_sheet_id = esc_html(get_option( 'wp2s2fg-spread-sheet-id' ));
		if ( $spread_sheet_id ) {
			return $spread_sheet_id;
		}
	}

	function set_api_key($api_key){
		update_option( 'wp2s2fg-api-key', sanitize_text_field( $api_key ) );
	}

	function delete_api_key() {
		delete_option( 'wp2s2fg-api-key' );
	}

	function delete_spread_sheet_id() {
		delete_option( 'wp2s2fg-spread-sheet-id' );
	}

	function is_sheet_name_exist($sheetsList, $sheetName) {
		foreach($sheetsList as $sheet) {
		  if($sheet->properties->title === $sheetName) {
			return true;
		  }
		}
		return false;
	}

	function is_sheet_range_correct($sheetRange){

		preg_match('/^[a-zA-Z][0-9]+$/', $sheetRange, $frontMatch);
		preg_match('/^[a-zA-Z][0-9]+:[a-zA-Z][0-9]+$/', $sheetRange, $allMatch);

		if($frontMatch || $allMatch){
			return true;
		}else{
			return false;
		}
	}

	public function is_str_null($value){
		return $value === "null";
	}
}

