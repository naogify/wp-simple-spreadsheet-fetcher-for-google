<?php
include_once dirname( __FILE__ ) . '/get-value-query.php';
function wp2s2fg_parser_block_init() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir      = dirname( __FILE__ );
	$index_js = 'index.js';

	wp_register_script(
		'parser-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
		),
		filemtime( "$dir/$index_js" )
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
		'editor_script'   => 'parser-block-editor',
		'editor_style'    => 'parser-block-editor',
		'style'           => 'parser-block',
		'attributes'      => [
			'range' => [
				'type'    => 'string',
				'default' => '',
			]
		],
		'render_callback' => function ( $attributes ) {


			return wp2s2fg_get_selected_value( $attributes['range'] );
		},
	) );
}
add_action( 'init', 'wp2s2fg_parser_block_init' );
