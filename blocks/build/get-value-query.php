<?php
/*
 * Copyright 2013 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

include_once dirname( dirname( dirname( __FILE__ ) ) ) . '/vendor/autoload.php';
include_once dirname( __FILE__ ) . '/base.php';


function wp2s2fg_get_selected_value( $attributes ) {

	$block     = $attributes['block'];
	$sheetId     = $attributes['sheetId'];
	$sheetName     = $attributes['sheetName'];
	$sheetRange     = $attributes['sheetRange'];
	//This attributes is deprecated since v0.2.8.
	$range = $attributes['range'];
	$className    = $attributes['className'];
	$client = new Google_Client();

	if ( ! $api_key = sanitize_text_field(wp2s2fg_get_api_key()) ) {

		$url = admin_url( 'admin.php?page=wsgsf_settings' );
		$url = '<a href="' . esc_url( $url ) . '">' . __( 'settings.' ) . '</a>';
		return __( 'API-KEY is not set Please set it at the ', 'wp-simple-spreadsheet-fetcher-for-google' ) . $url;
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

	$client->setDeveloperKey( $api_key );
	$service = new Google_Service_Sheets( $client );
	$response = $service->spreadsheets_values->get( !empty($sheetId_deprecated) ? $sheetId_deprecated : $sheetId, $range );
	$values   = $response->getValues();

	$hasFixedTable     = $attributes['hasFixedTable'];
	$thFontSize     = $attributes['thFontSize'];
	$thFontUnit     = $attributes['thFontUnit'];
	$thLineHeight     = $attributes['thLineHeight'];
	$thLetterSpace     = $attributes['thLetterSpace'];
	$thFontWeight     = $attributes['thFontWeight'];
	$thBgColor     = $attributes['thBgColor'];
	$thAlign     = $attributes['thAlign'];
	$thBorderStyle     = $attributes['thBorderStyle'];
	$thBorderColor     = $attributes['thBorderColor'];
	$thBorderWidth     = $attributes['thBorderWidth'];
	$thBorderUnit     = $attributes['thBorderUnit'];
	$thBorderLayout     = $attributes['thBorderLayout'];
	
	$data = '';
	if ( empty( $values ) ) {
		$data .= __( 'No data found.', 'wp-simple-spreadsheet-fetcher-for-google' );
	} else {

		if($block === 'wp2s2fg/fetcher') {

			$lastIndex = count($values) -1;
			foreach ( $values as $row ) {

				$data_h = '<td>';
				$data_f = '</td>';
				$data_container_h = '';
				$data_container_f = '';

				if(count($values) >= 3){
				if($values[0] === $row){
					$data_container_h = '<thead>';
					$data_container_f = '</thead>';
					$data_h = '<th>';
					$data_f = '</th>';
				}else if($values[$lastIndex] === $row){
					$data_container_h = '<tfoot>';
					$data_container_f = '</tfoot>';
				}else if($values[1] === $row){
					$data_container_h = '<tbody>';
					$data_container_f = '';
				}else if($values[$lastIndex -1] === $row){
					$data_container_h = '';
					$data_container_f = '</tbody>';
				}}

				$data .= $data_container_h .'<tr>';
				for ( $i = 0; $i < count( $row ); $i ++ ) {
					$data .= $data_h . esc_html( $row[ $i ] ) . $data_f;
				}
				$data .= $data_container_f . '</tr>';

			}
			$div_h   = '<div class="wp2s2fg_fetcher_table_container ' . esc_attr($className) .'">';
			$div_f = '</div>';
			$table_h = '<table class="wp2s2fg_fetcher_table">';
			$table_f = '</table>';

			$data =  $div_h . $table_h . $data . $table_f . $div_f;

		}elseif($block === 'wp2s2fg/fetcher-item'){
			$data = '<p class="wp2s2fg_fetcher-advanced_number">' . esc_html( $values[0][0] ) . '</p>';
		}
	}
	return $data;
}
?>
