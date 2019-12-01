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
	$range     = $attributes['range'];
	$client = new Google_Client();

	if ( ! $api_key = sanitize_text_field(wp2s2fg_get_api_key()) ) {

		return __( 'API-KEY is not set.', 'wp2s2fg' );
	}
	if ( ! $spread_sheet_id = sanitize_text_field(wp2s2fg_get_spread_sheet_id()) ) {

		return __( 'SpreadSheetId is not set.', 'wp2s2fg' );
	}
	if ( ! $range ) {
		return __( 'Cell is not set.', 'wp2s2fg' );
	}

	$client->setDeveloperKey( $api_key );
	$service = new Google_Service_Sheets( $client );
	$response = $service->spreadsheets_values->get( $spread_sheet_id, $range );
	$values   = $response->getValues();

	$data = '';
	if ( empty( $values ) ) {
		$data .= __( 'No data found.', 'wp2s2fg' );
	} else {

		if($block === 'wp2s2fg/fetcher') {

			foreach ( $values as $row ) {
				$data .= '<tr>';
				for ( $i = 0; $i < count( $row ); $i ++ ) {
					$data .= '<td>' . esc_html( $row[ $i ] ) . '</td>';
				}
				$data .= '</tr>';
			}
			$div_h   = '<div class="wp2s2fg_fetcher_table">';
			$div_f   = '</div>';
			$table_h = '<table>';
			$table_f = '</table>';

			$data =  $div_h . $table_h . $data . $table_f . $div_f;

		}elseif($block === 'wp2s2fg/fetcher-item'){
			$data = '<p class="wp2s2fg_fetcher-advanced_number">' . esc_html( $values[0][0] ) . '</p>';
		}
	}
	return $data;
}
?>
