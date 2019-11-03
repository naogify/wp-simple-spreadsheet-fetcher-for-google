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

include_once dirname( dirname( __FILE__ ) ) . '/vendor/autoload.php';
include_once dirname( dirname( __FILE__ ) ) . '/templates/base.php';


function get_selected_value( $range ) {

	/************************************************
	 * We create the client and set the simple API
	 * access key. If you comment out the call to
	 * setDeveloperKey, the request may still succeed
	 * using the anonymous quota.
	 ************************************************/
	$client = new Google_Client();

	// Warn if the API key isn't set.
	if ( ! $apiKey = getApiKey() ) {

		return __( 'API-KEY is not set.', 'wp-simple-google-sheets-fetcher' );
	}
	if ( ! $spreadSheetId = getSpreadSheetId() ) {

		return __( 'SpreadSheetId is not set.', 'wp-simple-google-sheets-fetcher' );
	}
	if ( ! $range ) {
		return __( 'Range is not set.', 'wp-simple-google-sheets-fetcher' );
	}

	$client->setDeveloperKey( $apiKey );
	$service = new Google_Service_Sheets( $client );


	/************************************************
	 * We make a call to our service, which will
	 * normally map to the structure of the API.
	 * In this case $service is Books API, the
	 * resource is volumes, and the method is
	 * listVolumes. We pass it a required parameters
	 * (the query), and an array of named optional
	 * parameters.
	 ************************************************/

	$response = $service->spreadsheets_values->get( $spreadSheetId, $range );

	$values   = $response->getValues();

	$data = '';
	if ( empty( $values ) ) {
		$data .= "No data found.\n";
	} else {

		foreach ( $values as $row ) {
			$data .= '<tr>';
			for ( $i = 0; $i < count( $row ); $i ++ ) {
				$data .= '<td>' . $row[ $i ] . '</td>';
			}
			$data .= '</tr>';
		}
	}

	$table_h = '<table>';
	$table_f = '</table>';

	return $table_h . $data . $table_f;
}
?>
