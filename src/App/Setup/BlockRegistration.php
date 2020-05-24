<?php
namespace Fetcher\App\Setup;
require(PLUGIN_ROOT_DIR .'vendor/autoload.php');
use Fetcher\blocks\fetcher\table\RenderTable;

Class BlockRegistration extends RenderTable{

	private $service;
    private $api_key;

	public function __construct($service,$api_key){
		$this->service = $service;
		$this->api_key = $api_key;
	}

	public function init() {
		add_action( 'block_categories', array( $this, 'register_block_categories' ),10,1 );
		add_action( 'init', array($this,'register_blocks') );
		add_action( 'wp_enqueue_scripts', array($this,'register_block_scripts') );
		add_action( 'admin_enqueue_scripts', array($this,'register_block_scripts') );
	}

	public function register_blocks() {

		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		$plugin_folder = 'wp-simple-spreadsheet-fetcher-for-google/';
		$build_dir = $plugin_folder.'build/';
		$fetcher_js = $build_dir.'index.js';
		$asset_file = include( BUILD_DIR . 'index.asset.php' );

		wp_register_script(
			'wp2s2fg-fetcher',
			plugins_url( $fetcher_js ,PLUGIN_ROOT_DIR ),
			$asset_file['dependencies'],
			$asset_file['version']
		);

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'wp2s2fg-fetcher', 'wp-simple-spreadsheet-fetcher-for-google');
		}

		$css_dir = $plugin_folder.'src/assets/css/';
		$editor_css = $css_dir.'editor.css';
		wp_register_style(
			'wp2s2fg-fetcher-style-editor',
			plugins_url( $editor_css ,PLUGIN_ROOT_DIR ),
			array()
		);

		$style_css = $css_dir.'style.css';
		wp_register_style(
			'wp2s2fg-fetcher-style',
			plugins_url( $style_css ),
			array()
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
			return $this->get_selected_value( $attributes,$this->service,$this->api_key );
		},
	) );

	register_block_type( 'wp2s2fg/fetcher-advanced', array(
		'editor_script' => 'wp2s2fg-fetcher',
		'editor_style'  => 'wp2s2fg-fetcher-style-editor',
		'style'         => 'wp2s2fg-fetcher-style'
	) );

	register_block_type( 'wp2s2fg/fetcher-item', array(
		'editor_script'   => 'wp2s2fg-fetcher',
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
			return $this->get_selected_value( $attributes );
		},
	) );
	
	register_block_type( 'wp2s2fg/fetcher-chart', array(
		'editor_script' => 'wp2s2fg-fetcher',
		'editor_style'  => 'wp2s2fg-fetcher-style-editor',
		'style'         => 'wp2s2fg-fetcher-style',
		'render_callback' => function ( $attributes,$content ) {
			$js = file_get_contents(PLUGIN_ROOT_DIR .'src/blocks/fetcher-chart/drawCharts.js');
			$js = trim($js);
			$js = ltrim($js, 'let props = "";');
			$js = str_replace("export", "", $js);
			return '<div id="chart_div">Loading Charts ...</div><script type="text/javascript">let props =' . json_encode($attributes) .';' . $js .'</script>';
		})
	);
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

	public function register_block_scripts() {
		wp_enqueue_script( 'google-charts', PLUGIN_URL .'/wp-simple-spreadsheet-fetcher-for-google/src/blocks/fetcher-chart/googleChart.js', array(), '1.0.0', false );
	}

}