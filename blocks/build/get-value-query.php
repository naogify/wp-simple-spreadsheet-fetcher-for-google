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
include_once dirname( __FILE__ ) . '/class-style-control.php';

function wp2s2fg_get_selected_value( $attributes ) {

	$block     = $attributes['block'];
	$sheetId     = $attributes['sheetId'];
	$sheetName     = $attributes['sheetName'];
	$sheetRange     = $attributes['sheetRange'];
	//This attributes is deprecated since v0.2.8.
	$range = $attributes['range'];
	$className    = $attributes['className'];

	//Get API-Key
	$api_key = Wp2s2fgSheetsApi::get_api_key();
	if(!$api_key){return Wp2s2fgSheetsApi::api_key_not_set();};

	//Get SheetURL
	if(Wp2s2fgSheetsApi::is_sheetId($sheetId)){
		$sheetId = Wp2s2fgSheetsApi::sheetUrl_to_Id($sheetId);
	}else{
		return Wp2s2fgSheetsApi::print_sheetUrl_Not_set();
	}

	//Get Range
	if(!$sheetName && !$sheetRange){
		if(!$range){
			return Wp2s2fgSheetsApi::print_sheetName_sheetRange_range_Not_set();
		}
	}else{
		if(!$sheetName){
			return Wp2s2fgSheetsApi::print_sheetName_Not_set();
		}
		if(!$sheetRange){
			return Wp2s2fgSheetsApi::print_sheetRange_Not_set($block);
		}
		if($sheetName && $sheetRange){
			$range = esc_html($sheetName) . '!' . esc_html($sheetRange);
		}
	}

	$client = new Google_Client();
	$client->setDeveloperKey( $api_key );
	$service = new Google_Service_Sheets( $client );
	$response = $service->spreadsheets_values->get( !empty($sheetId_deprecated) ? $sheetId_deprecated : $sheetId, $range );
	$values   = $response->getValues();

	$hasFixedTable     = $attributes['hasFixedTable'];

	$border_style = array(
		'borderStyle'=>$attributes['borderStyle'],
		'borderColor'=>$attributes['borderColor'],
		'brderWidth'=>$attributes['borderWidth'],
		'borderUnit'=>$attributes['borderUnit'],
		'borderLayout'=>$attributes['borderLayout'],
	);

	$th_style = array(
		'fontSize'=> $attributes['thFontSize'],
		'fontColor'=> $attributes['thFontColor'],
		'fontUnit'=> $attributes['thFontUnit'],
		'lineHeight'=>$attributes['thLineHeight'],
		'letterSpace'=>$attributes['thLetterSpace'],
		'thLetterSpaceUnit'=>$attributes['thLetterSpaceUnit'],
		'fontWeight'=>$attributes['thFontWeight'],
		'bgColor'=>$attributes['thBgColor'],
		'align'=>$attributes['thAlign'],
	);

	$tb_style = array(
		'fontSize'=> $attributes['tbFontSize'],
		'fontColor'=> $attributes['tbFontColor'],
		'fontUnit'=> $attributes['tbFontUnit'],
		'lineHeight'=>$attributes['tbLineHeight'],
		'letterSpace'=>$attributes['tbLetterSpace'],
		'thLetterSpaceUnit'=>$attributes['tbLetterSpaceUnit'],
		'fontWeight'=>$attributes['tbFontWeight'],
		'bgColor'=>$attributes['tbBgColor'],
		'align'=>$attributes['tbAlign'],
	);
		
	$data = '';
	if ( empty( $values ) ) {
		$data .= __( 'No data found.', 'wp-simple-spreadsheet-fetcher-for-google' );
	} else {

		if($block === 'wp2s2fg/fetcher') {

			$lastIndex = count($values) -1;

			foreach ( $values as $row ) {

				$data_h = '<td class="' . StyleControl::createClass("td") . " " . StyleControl::hasFixedTableClass($hasFixedTable) . '" style="' . StyleControl::create_inline_border_style($border_style) . '">';
				$data_f = '</td>';
				$data_container_h = '';
				$data_container_f = '';

				if(count($values) >= 3){
					if($values[0] === $row){
						$data_container_h = '<thead class="' . StyleControl::createClass("thead") .'" style="' . StyleControl::setBorderVertical($border_style) .'">';
						$data_container_f = '</thead>';
						$result = StyleControl::createStyledCell("th",$th_style,$hasFixedTable,$border_style);
						$data_h = $result["data_h"];
						$data_f = $result["data_f"];
					}else{
						if($values[$lastIndex] === $row){
							$data_container_h = '<tfoot class="' . StyleControl::createClass("tfoot") .'">';
							$data_container_f = '</tfoot>';
						}else if($values[1] === $row){
							$data_container_h = '<tbody class="' . StyleControl::createClass("tbody") .'">';
							$data_container_f = '';
						}else if($values[$lastIndex -1] === $row){
							$data_container_h = '';
							$data_container_f = '</tbody>';
						}
						$result = StyleControl::createStyledCell("td",$tb_style,$hasFixedTable,$border_style);
						$data_h = $result["data_h"];
						$data_f = $result["data_f"];
					} 
				}elseif(count($values) >= 2){
					if($values[0] === $row){
						$data_container_h = '<thead class="' . StyleControl::createClass("thead") .'" style="' . StyleControl::setBorderVertical($border_style) .'">';
						$data_container_f = '</thead>';
						$result = StyleControl::createStyledCell("th",$th_style,$hasFixedTable,$border_style);
						$data_h = $result["data_h"];
						$data_f = $result["data_f"];
					}else{
						if($values[1] === $row){
							$data_container_h = '<tbody class="' . StyleControl::createClass("tbody") .'">';
							$data_container_f = '';
						}else if($values[$lastIndex] === $row){
							$data_container_h = '';
							$data_container_f = '</tbody>';
						}
						$result = StyleControl::createStyledCell("td",$tb_style,$hasFixedTable,$border_style);
						$data_h = $result["data_h"];
						$data_f = $result["data_f"];
					}
				}

				$data .= $data_container_h .'<tr class="' . StyleControl::createClass("tr") .'">';
				for ( $i = 0; $i < count( $row ); $i ++ ) {
					$data .= $data_h . esc_html( $row[ $i ] ) . $data_f;
				}
				$data .= $data_container_f . '</tr>';

			}

			$div_h   = '<div class="wp2s2fg_fetcher_table_container ' . esc_attr($className) .'">';
			$div_f = '</div>';
			$table_h = '<table class="wp2s2fg_fetcher_table '. StyleControl::hasFixedTableClass($hasFixedTable) . '" style="' . StyleControl::create_inline_table_border_style($border_style) . '">';
			$table_f = '</table>';

			$data =  $div_h . $table_h . $data . $table_f . $div_f;

		}elseif($block === 'wp2s2fg/fetcher-item'){
			$data = '<p class="wp2s2fg_fetcher-advanced_number">' . esc_html( $values[0][0] ) . '</p>';
		}
	}
	return $data;
}
?>
