<?php
include_once dirname( __FILE__ ) . '/get-value-query.php';
function wp2s2fg_fetcher_block_init() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir      = dirname( __FILE__ );
	$fetcher_js = 'fetcher.js';
	$fetcher_adv_js = 'fetcher-advanced.js';
	$fetcher_itm_js = 'fetcher-item.js';

	$asset_file = include( $dir . '/fetcher.asset.php' );
	$asset_file_adv = include( $dir . '/fetcher-advanced.asset.php' );
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
		'wp2s2fg-fetcher-itm',
		plugins_url( $fetcher_itm_js, __FILE__ ),
		$asset_file_itm['dependencies'],
		$asset_file_itm['version'],
		filemtime( "$dir/$fetcher_itm_js" )
	);

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
			'range'     => [
				'type'    => 'string',
				'default' => '',
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
		'editor_script'   => 'wp2s2fg-fetcher-itm',
		'editor_style'  => 'wp2s2fg-fetcher-style-editor',
		'style'         => 'wp2s2fg-fetcher-style',
		'attributes'      => [
			'className' => [
				'type'    => 'string',
				'default' => '',
			],
			'range'     => [
				'type'    => 'string',
				'default' => '',
			]
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
					'title' => __( 'WP Simple Spreadsheet Fetcher for Google', 'wp2s2fg' ),
					'icon'  => 'smiley',
				)
			)
		);
	}
	add_filter( 'block_categories', 'wp2s2fg_categories', 10, 2 );
}
