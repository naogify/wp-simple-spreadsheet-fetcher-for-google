<?php

namespace Fetcher\blocks\fetcher\table;
require(PLUGIN_ROOT_DIR .'vendor/autoload.php');
use Fetcher\App\Utils\ApiManipulation;
use Fetcher\blocks\fetcher\table\TableDesign;

class RenderTable extends ApiManipulation {

	use TableDesign;

	/**
	 * @param string $body
	 * @param string|null $link_title link text
	 * @return string
	 */
	public function url_to_link( $body, $link_title = null ) {
		$pattern = '/(?<!href=")https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:@&=+$,%#]+/';
		$body = preg_replace_callback($pattern, function($matches) use ($link_title) {
			$link_title = $link_title ?: $matches[0];
			return "<a href=\"{$matches[0]}\">$link_title</a>";
		}, $body);
		return $body;
	}

	public function get_attributes_value( $key, $array, $default = "" ) {
		return array_key_exists( $key, $array ) ? $array[$key] : $default;
	}

	public function get_selected_value($attributes, $service, $api_key) {
		$block     = $attributes['block'];
		$className    = $attributes['className'];
		$sheetId     = $attributes['sheetId'];
		$sheetName     = $attributes['sheetName'];
		$sheetRange     = $attributes['sheetRange'];
		//This attributes is deprecated since v0.2.8.
		$range = $attributes['range'];

		$result = $this->get_google_sheet_value($api_key, $sheetId, $sheetName, $sheetRange, $service, $range, $block);
		$values = '';
		if($result['status']){
			$values = $result['values'];
		} else {
			// return Error message.
			return $result["values"];
		}

		$hasFixedTable = $this->get_attributes_value( 'hasFixedTable', $attributes, false );

		$border_style = array(
			'borderStyle' => $this->get_attributes_value( 'borderStyle', $attributes, 'solid' ),
			'borderColor' => $this->get_attributes_value( 'borderColor', $attributes, '#ccc' ),
			'brderWidth' => $this->get_attributes_value( 'borderWidth', $attributes, 1 ),
			'borderUnit' => $this->get_attributes_value( 'borderUnit', $attributes, 'px' ),
			'borderLayout' => $this->get_attributes_value( 'borderLayout', $attributes, 'table-full' ),
		);

		$th_style = array(
			'fontSize' => $this->get_attributes_value( 'thFontSize', $attributes, 16 ),
			'fontColor' => $this->get_attributes_value( 'thFontColor', $attributes, 'inherit' ),
			'fontUnit' => $this->get_attributes_value( 'thFontUnit', $attributes, 'px' ),
			'lineHeight' => $this->get_attributes_value( 'thLineHeight', $attributes, 1 ),
			'letterSpace' => $this->get_attributes_value( 'thLetterSpace', $attributes, 1 ),
			'thLetterSpaceUnit' => $this->get_attributes_value( 'thLetterSpaceUnit', $attributes, 'px' ),
			'fontWeight' => $this->get_attributes_value( 'thFontWeight', $attributes, 'normal' ),
			'bgColor' => $this->get_attributes_value( 'thBgColor', $attributes, '#fff' ),
			'align' => $this->get_attributes_value( 'thBgColor', $attributes, '#left' ),
		);

		$tb_style = array(
			'fontSize' => $this->get_attributes_value( 'tbFontSize', $attributes, 16 ),
			'fontColor' => $this->get_attributes_value( 'tbFontColor', $attributes, 'inherit' ),
			'fontUnit' => $this->get_attributes_value( 'tbFontUnit', $attributes, 'px' ),
			'lineHeight' => $this->get_attributes_value( 'tbLineHeight', $attributes, 1 ),
			'letterSpace' => $this->get_attributes_value( 'tbLetterSpace', $attributes, 1 ),
			'thLetterSpaceUnit' => $this->get_attributes_value( 'tbLetterSpaceUnit', $attributes, 'px' ),
			'fontWeight' => $this->get_attributes_value( 'tbFontWeight', $attributes, 'normal' ),
			'bgColor' => $this->get_attributes_value( 'tbBgColor', $attributes, '#fff' ),
			'align' => $this->get_attributes_value( 'tbAlign', $attributes, 'left' ),
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

						// Replace url to link
						$html = $this->url_to_link($row[ $i ]);

						$data .= $data_h . $html . $data_f;
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
