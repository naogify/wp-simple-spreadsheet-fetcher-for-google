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

include_once __DIR__ . '/vendor/autoload.php';
include_once "templates/base.php";


/************************************************
 * We create the client and set the simple API
 * access key. If you comment out the call to
 * setDeveloperKey, the request may still succeed
 * using the anonymous quota.
 ************************************************/
$client = new Google_Client();
$client->setApplicationName( "Client_Library_Examples" );

// Warn if the API key isn't set.
if ( ! $apiKey = getApiKey() ) {
	echo missingApiKeyWarning();

	return;
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

$spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
$range = 'Class Data!A2:E';
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();

//
//if (empty($values)) {
//	print "No data found.\n";
//} else {
//	print "Name, Major:\n";
//	foreach ($values as $row) {
//		// Print columns A and E, which correspond to indices 0 and 4.
//		printf("%s, %s\n", $row[0], $row[4]);
//	}
//}
?>
