<?php

namespace Fetcher\blocks\fetcher\table;
require(PLUGIN_ROOT_DIR .'vendor/autoload.php');
use Fetcher\App\Utils\ApiManipulation;
use Fetcher\App\Utils\FetcherWarning;
use Fetcher\blocks\fetcher\table\TableDesign;

//レンダーテーブルは関数で書く。他のclassは関数内でインスタンス化して使う。
//他のclassは普通に読み込む。

class RenderTable extends ApiManipulation {

	use TableDesign;
	
	public function get_selected_value( $attributes, $service, $api_key ) {

		$block     = $attributes['block'];
		$sheetId     = $attributes['sheetId'];
		$sheetName     = $attributes['sheetName'];
		$sheetRange     = $attributes['sheetRange'];
		//This attributes is deprecated since v0.2.8.
		$range = $attributes['range'];
		$className    = $attributes['className'];

		if ( !$api_key ) {
			return FetcherWarning::api_key($api_key);
		}
		
		if(!$sheetId){
			if ( ! $sheetId_deprecated = sanitize_text_field($this->get_spread_sheet_id()) ) {
				return FetcherWarning::sheet_url();
			}
		}else{
			$sheetId = preg_replace('/https\:\/\/docs\.google\.com\/spreadsheets\/d\//', '', esc_url($sheetId));
			$sheetId = preg_replace('/\/.+$/', '', $sheetId);
		}
	
		if(!$sheetName && !$sheetRange) {
			if ( ! $range ) {
				return FetcherWarning::sheet_name_range();
			}
		}else{
	
			if(!$sheetName){
				return FetcherWarning::sheet_name();
	
			}else if(!$sheetRange){
	
				if($block === 'wp2s2fg/fetcher'){
					return FetcherWarning::sheet_range_fetcher();
	
				}elseif($block === 'wp2s2fg/fetcher-item'){
					return FetcherWarning::sheet_cell_fetcher_item();
					
				}
			}
			$range = esc_html($sheetName) . '!' . esc_html($sheetRange);
		}

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
	
					$data_h = '<td class="' . $this->createClass("td") . " " . $this->hasFixedTableClass($hasFixedTable) . '" style="' . $this->create_inline_border_style($border_style) . '">';
					$data_f = '</td>';
					$data_container_h = '';
					$data_container_f = '';
					
					if(count($values) >= 3){

						if($values[0] === $row){
							$data_container_h = '<thead class="' . $this->createClass("thead") .'" style="' . $this->setBorderVertical($border_style) .'">';
							$data_container_f = '</thead>';
							$result = $this->createStyledCell("th",$th_style,$hasFixedTable,$border_style);
							$data_h = $result["data_h"];
							$data_f = $result["data_f"];
						}else{

							if($values[$lastIndex] === $row){
								$data_container_h = '<tfoot class="' . $this->createClass("tfoot") .'">';
								$data_container_f = '</tfoot>';
							}else if($values[1] === $row){
								$data_container_h = '<tbody class="' . $this->createClass("tbody") .'">';
								$data_container_f = '';
							}else if($values[$lastIndex -1] === $row){
								$data_container_h = '';
								$data_container_f = '</tbody>';
							}
							$result = $this->createStyledCell("td",$tb_style,$hasFixedTable,$border_style);
							$data_h = $result["data_h"];
							$data_f = $result["data_f"];
						} 
					}elseif(count($values) >= 2){

						if($values[0] === $row){
							$data_container_h = '<thead class="' . $this->createClass("thead") .'" style="' . $this->setBorderVertical($border_style) .'">';
							$data_container_f = '</thead>';
							$result = $this->createStyledCell("th",$th_style,$hasFixedTable,$border_style);
							$data_h = $result["data_h"];
							$data_f = $result["data_f"];
						}else{
							if($values[1] === $row){
								$data_container_h = '<tbody class="' . $this->createClass("tbody") .'">';
								$data_container_f = '';
							}else if($values[$lastIndex] === $row){
								$data_container_h = '';
								$data_container_f = '</tbody>';
							}
							$result = $this->createStyledCell("td",$tb_style,$hasFixedTable,$border_style);
							$data_h = $result["data_h"];
							$data_f = $result["data_f"];
						}
					}
					
					$data .= $data_container_h .'<tr class="' . $this->createClass("tr") .'">';
					for ( $i = 0; $i < count( $row ); $i ++ ) {
						$data .= $data_h . esc_html( $row[ $i ] ) . $data_f;
					}
					$data .= $data_container_f . '</tr>';
	
				}
	
				$div_h   = '<div class="wp2s2fg_fetcher_table_container ' . esc_attr($className) .'">';
				$div_f = '</div>';
				$table_h = '<table class="wp2s2fg_fetcher_table '. $this->hasFixedTableClass($hasFixedTable) . '" style="' . $this->create_inline_table_border_style($border_style) . '">';
				$table_f = '</table>';
				$data =  $div_h . $table_h . $data . $table_f . $div_f;
	
			}elseif($block === 'wp2s2fg/fetcher-item'){
				$data = '<p class="wp2s2fg_fetcher-advanced_number">' . esc_html( $values[0][0] ) . '</p>';
			}
		}
		return $data;
	}
}
?>
