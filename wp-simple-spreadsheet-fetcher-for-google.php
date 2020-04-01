<?php
/**
 * Plugin Name:     WP Simple Spreadsheet Fetcher for Google
 * Plugin URI:      https://github.com/naogify/wp-simple-google-sheets-fetcher
 * Description:     This is the simple plugin to fetch data from Google Sheets and display it on your website. Please go to "Plugins" > "WP-Simple-Spreadsheet-Fetcher-for-Google" for initial setting.
 * Author:          Naoki Ohashi
 * Author URI:      https://naoki-is-me
 * Text Domain:     wp-simple-spreadsheet-fetcher-for-google
 * Domain Path:     /languages
 * Version: 0.6.0
 *
 * @package         Wp_Simple_Spreadsheet_Fetcher_for_Google
 * @version 0.6.0
 */

defined( 'ABSPATH' ) || exit;
require('vendor/autoload.php');
use Fetcher\App\Setup\ApiSettingScreen;
use Fetcher\App\Setup\BlockRegistration;

define( "PLUGIN_ROOT_DIR", plugin_dir_path(  __FILE__  ));
define( "BUILD_DIR", PLUGIN_ROOT_DIR . 'build' );

$ApiSettingScreen = new ApiSettingScreen();
$ApiSettingScreen->init();

$BlockRegistration = new BlockRegistration();
$BlockRegistration->init();