<?php
include_once dirname( __FILE__ ) . '/get-value-query.php';
function wp2s2fg_fetcher_block_init() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir      = dirname( __FILE__ );
	$fetcher_js = 'fetcher.js';
	$fetcher_adv_js = 'fetcher-advanced.js';
	$fetcher_adv_lay_js = 'layout.js';
	$fetcher_itm_js = 'fetcher-item.js';

	$asset_file = include( $dir . '/fetcher.asset.php' );
	$asset_file_adv = include( $dir . '/fetcher-advanced.asset.php' );
	$asset_file_adv_lay = include( $dir . '/layout.asset.php' );
	$asset_file_itm = include( $dir . '/fetcher-item.asset.php' );

	wp_register_script(
		'wp2s2fg-fetcher',
		plugins_url( $fetcher_js, __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		filemtime( "$dir/$fetcher_js" )
	);

	wp_register_script(
		'wp2s2fg-fetcher-adv',
		plugins_url( $fetcher_adv_js, __FILE__ ),
		$asset_file_adv['dependencies'],
		$asset_file_adv['version'],
		filemtime( "$dir/$fetcher_adv_js" )
	);

	wp_register_script(
		'wp2s2fg-fetcher-adv-lay',
		plugins_url( $fetcher_adv_lay_js, __FILE__ ),
		$asset_file_adv['dependencies'],
		$asset_file_adv['version'],
		filemtime( "$dir/$fetcher_adv_lay_js" )
	);

	wp_register_script(
		'wp2s2fg-fetcher-item',
		plugins_url( $fetcher_itm_js, __FILE__ ),
		$asset_file_itm['dependencies'],
		$asset_file_itm['version'],
		filemtime( "$dir/$fetcher_itm_js" )
	);

	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'wp2s2fg-fetcher', 'wp-simple-spreadsheet-fetcher-for-google');
		wp_set_script_translations( 'wp2s2fg-fetcher-adv', 'wp-simple-spreadsheet-fetcher-for-google');
		wp_set_script_translations( 'wp2s2fg-fetcher-adv-lay', 'wp-simple-spreadsheet-fetcher-for-google');
		wp_set_script_translations( 'wp2s2fg-fetcher-item', 'wp-simple-spreadsheet-fetcher-for-google');
	}

	$editor_css = 'editor.css';
	wp_register_style(
		'wp2s2fg-fetcher-style-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'wp2s2fg-fetcher-style',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'wp2s2fg/fetcher', array(
		'editor_script' => 'wp2s2fg-fetcher',
		'editor_style'  => 'wp2s2fg-fetcher-style-editor',
		'style'         => 'wp2s2fg-fetcher-style',
		'attributes'      => [
			'className' => [
				'type'    => 'string',
				'default' => '',
			],
			'sheetId'     => [
				'type'    => 'string',
				'default' => '',
			],
			'sheetName'     => [
				'type'    => 'string',
				'default' => '',
			],
			'sheetRange'     => [
				'type'    => 'string',
				'default' => '',
			],
			'range'     => [
				'type'    => 'string',
				'default' => '',
			],
			'hasFixedTable'=> [
				'type'    => 'boolean',
				'default' => false
			],
			'thFontSize'     => [
				'type'    => 'number',
				'default' => 16,
			],
			'thFontColor'     => [
				'type'    => 'string',
				'default' => "inherit",
			],
			'thFontUnit'     => [
				'type'    => 'string',
				'default' => "px",
			],
			'thLineHeight'     => [
				'type'    => 'number',
				'default' => 1,
			],
			'thLetterSpace'     => [
				'type'    => 'number',
				'default' => 1,
			],
			'thLetterSpaceUnit'     => [
				'type'    => 'string',
				'default' => "px",
			],
			'isVisible'=> [
				'type'    => 'boolean',
				'default' => false
			],
			'thFontWeight'=> [
				'type'    => 'string',
				'default' => "normal"
			],
			'thBgColor'=> [
				'type'    => 'string',
				'default' => "#fff"
			],
			'thAlign'=> [
				'type'    => 'string',
				'default' => "left"
			],	
			'thBorderStyle'=> [
				'type'    => 'string',
				'default' => "solid"
			],
			'thBorderColor'=> [
				'type'    => 'string',
				'default' => "#ccc"
			],
			'thBorderWidth'=> [
				'type'    => 'number',
				'default' => 1
			],
			'thBorderUnit'=> [
				'type'    => 'string',
				'default' => "px"
			],
			'thBorderLayout'=> [
				'type'    => 'string',
				'default' => "full"
			]
		],
		'render_callback' => function ( $attributes ) {
			$attributes = array_merge($attributes,['block' => 'wp2s2fg/fetcher']);
			return wp2s2fg_get_selected_value( $attributes );
		},
	) );

	register_block_type( 'wp2s2fg/fetcher-advanced', array(
		'editor_script' => 'wp2s2fg-fetcher-adv',
		'editor_style'  => 'wp2s2fg-fetcher-style-editor',
		'style'         => 'wp2s2fg-fetcher-style'
	) );

	register_block_type( 'wp2s2fg/fetcher-item', array(
		'editor_script'   => 'wp2s2fg-fetcher-item',
		'editor_style'  => 'wp2s2fg-fetcher-style-editor',
		'style'         => 'wp2s2fg-fetcher-style',
		'attributes'      => [
			'className' => [
				'type'    => 'string',
				'default' => '',
			],
			'sheetId'     => [
				'type'    => 'string',
				'default' => '',
			],
			'sheetName'     => [
				'type'    => 'string',
				'default' => '',
			],
			'sheetRange'     => [
				'type'    => 'string',
				'default' => '',
			],
			'range'     => [
				'type'    => 'string',
				'default' => '',
			],
		],
		'render_callback' => function ( $attributes ) {
			$attributes = array_merge($attributes,['block' => 'wp2s2fg/fetcher-item']);
			return wp2s2fg_get_selected_value( $attributes );
		},
	) );
}
add_action( 'init', 'wp2s2fg_fetcher_block_init' );

if ( ! function_exists( 'wp2s2fg_categories' ) ) {
	function wp2s2fg_categories( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'wp2s2fg-blocks-cat',
					'title' => __( 'WP Simple Spreadsheet Fetcher for Google', 'wp-simple-spreadsheet-fetcher-for-google' ),
					'icon'  => 'smiley',
				)
			)
		);
	}
	add_filter( 'block_categories', 'wp2s2fg_categories', 10, 2 );
}
