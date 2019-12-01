<?php
include_once dirname( __FILE__ ) . '/get-value-query.php';
function wp2s2fg_parser_block_init() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir      = dirname( __FILE__ );
	$index_js = 'index.js';
	$parser_item_js = 'parser-item.js';

	$asset_file = include( $dir . '/index.asset.php' );
	$asset_file_item = include( $dir . '/parser-item.asset.php' );

	wp_register_script(
		'parser-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		filemtime( "$dir/$index_js" )
	);

	wp_register_script(
		'parser-item-block-editor',
		plugins_url( $parser_item_js, __FILE__ ),
		$asset_file_item['dependencies'],
		$asset_file_item['version'],
		filemtime( "$dir/$parser_item_js" )
	);

	$editor_css = 'editor.css';
	wp_register_style(
		'parser-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'parser-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);
	register_block_type( 'wp2s2fg/parser', array(
		'editor_script' => 'parser-block-editor',
		'editor_style'  => 'parser-block-editor',
		'style'         => 'parser-block'
	) );

	register_block_type( 'wp2s2fg/parser-item', array(
		'editor_script'   => 'parser-item-block-editor',
		'editor_style'    => 'parser-block-editor',
		'style'           => 'parser-block',
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
add_action( 'init', 'wp2s2fg_parser_block_init' );

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
