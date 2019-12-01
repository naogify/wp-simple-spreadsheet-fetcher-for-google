<?php
include_once dirname( __FILE__ ) . '/get-value-query.php';
function wp2s2fg_fetcher_block_init() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir      = dirname( __FILE__ );
	$index_js = 'index.js';
	$fetcher_item_js = 'fetcher-item.js';

	$asset_file = include( $dir . '/index.asset.php' );
	$asset_file_item = include( $dir . '/fetcher-item.asset.php' );

	wp_register_script(
		'fetcher-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		filemtime( "$dir/$index_js" )
	);

	wp_register_script(
		'fetcher-item-block-editor',
		plugins_url( $fetcher_item_js, __FILE__ ),
		$asset_file_item['dependencies'],
		$asset_file_item['version'],
		filemtime( "$dir/$fetcher_item_js" )
	);

	$editor_css = 'editor.css';
	wp_register_style(
		'fetcher-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'fetcher-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);
	register_block_type( 'wp2s2fg/fetcher', array(
		'editor_script' => 'fetcher-block-editor',
		'editor_style'  => 'fetcher-block-editor',
		'style'         => 'fetcher-block'
	) );

	register_block_type( 'wp2s2fg/fetcher-item', array(
		'editor_script'   => 'fetcher-item-block-editor',
		'editor_style'    => 'fetcher-block-editor',
		'style'           => 'fetcher-block',
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
