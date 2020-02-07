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

class StyleControl {

	public $style;
	public $layout;

	// public function __construct($style, $layout){
    //     $this->$th_style = $style;
	// 	$this->$layout = $layout;
	// }
	
	public function init($style, $layout){
        $this->$th_style = $style;
		$this->$layout = $layout;
    }

	public function setBorderLayout($layout){
		
	}
	public function create_inline_border_style(){
		$semiColon = "; ";
		return isset($this->$style["borderStyle"]) && isset($this->$style["borderColor"])&& isset($this->$style["brderWidth"]) && isset($this->$style["borderUnit"]) ? "border:" . esc_html($this->$style["brderWidth"]) . esc_html($this->$style["borderUnit"]) . " " . esc_html($this->$style["borderStyle"]) . " " . $this->$style["borderColor"] . $semiColon  : "";
	}

	public function create_inline_font_style(){
		$semiColon = "; ";
		$fontSize = is_numeric($this->$style["fontSize"]) && isset($this->$style["fontUnit"])  ? "font-size:". $this->$style["fontSize"] . esc_html($this->$style["fontUnit"]) . $semiColon : "";
		$fontColor = isset($this->$style["fontUnit"])  ? "color:". $this->$style["fontColor"] . $semiColon : "";
		$lineHeight = is_numeric($this->$style["lineHeight"]) ? "line-height:". $this->$style["lineHeight"] . $semiColon : "";
		$letterSpace = is_numeric($this->$style["letterSpace"]) && isset($this->$style["thLetterSpaceUnit"]) ? "letter-spacing:".$this->$style["letterSpace"] . $this->$style["thLetterSpaceUnit"] . $semiColon : "";
		$fontWeight = isset($this->$style["fontWeight"]) ? "font-weight:".esc_html($this->$style["fontWeight"]) . $semiColon : "";
		return $fontSize . $fontColor . $lineHeight. $letterSpace . $fontWeight;
	}

	public function create_inline_th_bg_color(){
		$semiColon = "; ";
		return isset($this->$style["bgColor"]) ? "background-color:".esc_html($this->$style["bgColor"]) . $semiColon : "";
	}

	public function create_inline_th_align(){
		$semiColon = "; ";
		return isset($this->$style["align"]) ? "text-align:".esc_html($this->$style["align"]) . $semiColon : "";

	}
}


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
	$thFontColor     = $attributes['thFontColor'];
	$thFontUnit     = $attributes['thFontUnit'];
	$thLineHeight     = $attributes['thLineHeight'];
	$thLetterSpace     = $attributes['thLetterSpace'];
	$thLetterSpaceUnit     = $attributes['thLetterSpaceUnit'];
	$thFontWeight     = $attributes['thFontWeight'];
	$thBgColor     = $attributes['thBgColor'];
	$thAlign     = $attributes['thAlign'];
	$thBorderStyle     = $attributes['thBorderStyle'];
	$thBorderColor     = $attributes['thBorderColor'];
	$thBorderWidth     = $attributes['thBorderWidth'];
	$thBorderUnit     = $attributes['thBorderUnit'];
	$borderLayout     = $attributes['borderLayout'];

	$th_style = array(
		'fontSize'=> $thFontSize,
		'fontColor'=> $thFontColor,
		'fontUnit'=> $thFontUnit,
		'lineHeight'=>$thLineHeight,
		'letterSpace'=>$thLetterSpace,
		'thLetterSpaceUnit'=>$thLetterSpaceUnit,
		'fontWeight'=>$thFontWeight,
		'bgColor'=>$thBgColor,
		'align'=>$thAlign,
		'borderStyle'=>$thBorderStyle,
		'borderColor'=>$thBorderColor,
		'brderWidth'=>$thBorderWidth,
		'borderUnit'=>$thBorderUnit,
	);

	$th_style_control = new StyleControl();
	// $th_style_control = new StyleControl( $th_style, $borderLayout );

	return var_export($th_style_control->init($th_style, $borderLayout),true);
	return "<div>hello</div>";


	
	$data = '';
	if ( empty( $values ) ) {
		$data .= __( 'No data found.', 'wp-simple-spreadsheet-fetcher-for-google' );
	} else {

		if($block === 'wp2s2fg/fetcher') {


			$lastIndex = count($values) -1;
			foreach ( $values as $row ) {

				$data_h = '<td style="' . $th_style_control->create_inline_border_style() . '">';
				$data_f = '</td>';
				$data_container_h = '';
				$data_container_f = '';

				if(count($values) >= 3){
					if($values[0] === $row){
						$data_container_h = '<thead style="' . $th_style_control->create_inline_th_bg_color() .'">';
						$data_container_f = '</thead>';
						$data_h = '<th style="' . $th_style_control->create_inline_font_style() . $th_style_control->create_inline_border_style() . $th_style_control->create_inline_th_align() . '">';
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
					}
				}elseif(count($values) >= 2){
					if($values[0] === $row){
						$data_container_h = '<thead style="' . $th_style_control->create_inline_th_bg_color() .'">';
						$data_container_f = '</thead>';
						$data_h = '<th style="' . $th_style_control->create_inline_font_style() . $th_style_control->create_inline_border_style() . $th_style_control->create_inline_th_align() . '">';
						$data_f = '</th>';
					}else if($values[1] === $row){
						$data_container_h = '<tbody>';
						$data_container_f = '';
					}else if($values[$lastIndex] === $row){
						$data_container_h = '';
						$data_container_f = '</tbody>';
					}
				}

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
