<?php
namespace Fetcher\App\Setup;
require(PLUGIN_ROOT_DIR .'vendor/autoload.php');

Class BlockRegistration{

	public function init() {
		add_action( 'init', array($this,'register_blocks') );
		add_action( 'block_categories', array( $this, 'register_block_categories' ),10,2 );
	}

	public function register_blocks() {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
		$fetcher_js = 'index.js';
		// $fetcher_adv_js = 'fetcher-advanced.js';
		// $fetcher_adv_lay_js = 'layout.js';
		// $fetcher_itm_js = 'fetcher-item.js';

		$asset_file = include( BUILD_DIR . '/index.asset.php' );
		// $asset_file_adv = include( $dir . '/fetcher-advanced.asset.php' );
		// $asset_file_adv_lay = include( $dir . '/layout.asset.php' );
		// $asset_file_itm = include( $dir . '/fetcher-item.asset.php' );

		wp_register_script(
			'wp2s2fg-fetcher',
			plugins_url( $fetcher_js, __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version'],
			filemtime( BUILD_DIR ."/$fetcher_js" )
		);

		// wp_register_script(
		// 	'wp2s2fg-fetcher-adv',
		// 	plugins_url( $fetcher_adv_js, __FILE__ ),
		// 	$asset_file_adv['dependencies'],
		// 	$asset_file_adv['version'],
		// 	filemtime( "$dir/$fetcher_adv_js" )
		// );

		// wp_register_script(
		// 	'wp2s2fg-fetcher-adv-lay',
		// 	plugins_url( $fetcher_adv_lay_js, __FILE__ ),
		// 	$asset_file_adv['dependencies'],
		// 	$asset_file_adv['version'],
		// 	filemtime( "$dir/$fetcher_adv_lay_js" )
		// );

		// wp_register_script(
		// 	'wp2s2fg-fetcher-item',
		// 	plugins_url( $fetcher_itm_js, __FILE__ ),
		// 	$asset_file_itm['dependencies'],
		// 	$asset_file_itm['version'],
		// 	filemtime( "$dir/$fetcher_itm_js" )
		// );

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'wp2s2fg-fetcher', 'wp-simple-spreadsheet-fetcher-for-google');
			// wp_set_script_translations( 'wp2s2fg-fetcher-adv', 'wp-simple-spreadsheet-fetcher-for-google');
			// wp_set_script_translations( 'wp2s2fg-fetcher-adv-lay', 'wp-simple-spreadsheet-fetcher-for-google');
			// wp_set_script_translations( 'wp2s2fg-fetcher-item', 'wp-simple-spreadsheet-fetcher-for-google');
		}

		$editor_css = 'editor.css';
		// wp_register_style(
		// 	'wp2s2fg-fetcher-style-editor',
		// 	plugins_url( $editor_css, __FILE__ ),
		// 	array(),
		// 	filemtime( BUILD_DIR ."/$editor_css" )
		// );

		// $style_css = 'style.css';
		// wp_register_style(
		// 	'wp2s2fg-fetcher-style',
		// 	plugins_url( $style_css, __FILE__ ),
		// 	array(),
		// 	filemtime( BUILD_DIR ."/$style_css" )
		// );

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
			'tbFontSize'     => [
				'type'    => 'number',
				'default' => 16,
			],
			'tbFontColor'     => [
				'type'    => 'string',
				'default' => "inherit",
			],
			'tbFontUnit'     => [
				'type'    => 'string',
				'default' => "px",
			],
			'tbLineHeight'     => [
				'type'    => 'number',
				'default' => 1,
			],
			'tbLetterSpace'     => [
				'type'    => 'number',
				'default' => 1,
			],
			'tbLetterSpaceUnit'     => [
				'type'    => 'string',
				'default' => "px",
			],
			'tbFontWeight'=> [
				'type'    => 'string',
				'default' => "normal"
			],
			'tbBgColor'=> [
				'type'    => 'string',
				'default' => "#fff"
			],
			'tbAlign'=> [
				'type'    => 'string',
				'default' => "left"
			],
			'borderStyle'=> [
				'type'    => 'string',
				'default' => "solid"
			],
			'borderColor'=> [
				'type'    => 'string',
				'default' => "#ccc"
			],
			'borderWidth'=> [
				'type'    => 'number',
				'default' => 1
			],
			'borderUnit'=> [
				'type'    => 'string',
				'default' => "px"
			],
			'borderLayout'=> [
				'type'    => 'string',
				'default' => "table-full"
			],
			'isPanelBodyOpen'=> [
				'type'    => 'string',
				'default' => "general"
			]
		],
		'render_callback' => function ( $attributes ) {
			$attributes = array_merge($attributes,['block' => 'wp2s2fg/fetcher']);
			return wp2s2fg_get_selected_value( $attributes );
		},
	) );

	// register_block_type( 'wp2s2fg/fetcher-advanced', array(
	// 	'editor_script' => 'wp2s2fg-fetcher-adv',
	// 	'editor_style'  => 'wp2s2fg-fetcher-style-editor',
	// 	'style'         => 'wp2s2fg-fetcher-style'
	// ) );

	// register_block_type( 'wp2s2fg/fetcher-item', array(
	// 	'editor_script'   => 'wp2s2fg-fetcher-item',
	// 	'editor_style'  => 'wp2s2fg-fetcher-style-editor',
	// 	'style'         => 'wp2s2fg-fetcher-style',
	// 	'attributes'      => [
	// 		'className' => [
	// 			'type'    => 'string',
	// 			'default' => '',
	// 		],
	// 		'sheetId'     => [
	// 			'type'    => 'string',
	// 			'default' => '',
	// 		],
	// 		'sheetName'     => [
	// 			'type'    => 'string',
	// 			'default' => '',
	// 		],
	// 		'sheetRange'     => [
	// 			'type'    => 'string',
	// 			'default' => '',
	// 		],
	// 		'range'     => [
	// 			'type'    => 'string',
	// 			'default' => '',
	// 		],
	// 	],
	// 	'render_callback' => function ( $attributes ) {
	// 		$attributes = array_merge($attributes,['block' => 'wp2s2fg/fetcher-item']);
	// 		return wp2s2fg_get_selected_value( $attributes );
	// 	},
	// ) );
	}

	public function register_block_categories( $categories ) {
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

}
