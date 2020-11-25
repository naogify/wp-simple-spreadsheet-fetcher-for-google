<?php
/**
 * Plugin Name:     WP Simple Spreadsheet Fetcher for Google
 * Plugin URI:      https://github.com/naogify/wp-simple-google-sheets-fetcher
 * Description:     This is the simple plugin to fetch data from Google Sheets and display it on your website. Please go to "Plugins" > "WP-Simple-Spreadsheet-Fetcher-for-Google" for initial setting.
 * Author:          Naoki Ohashi
 * Author URI:      https://naoki-is-me
 * Text Domain:     wp-simple-spreadsheet-fetcher-for-google
 * Version: 0.7.7
 *
 * @package         Wp_Simple_Spreadsheet_Fetcher_for_Google
 * @version 0.7.7
 */

defined( 'ABSPATH' ) || exit;
require('vendor/autoload.php');
use Fetcher\App\Setup\ApiSettingScreen;
use Fetcher\App\Setup\BlockRegistration;
use Fetcher\App\Utils\ApiManipulation;
use Fetcher\App\RestAPI\sheets\EntryPoint;

define( "PLUGIN_ROOT_DIR", plugin_dir_path(  __FILE__  ));
define( "PLUGIN_URL", plugins_url());
define( "BUILD_DIR", PLUGIN_ROOT_DIR . 'build/' );
define( "ASSETS_DIR", PLUGIN_ROOT_DIR . 'src/assets/' );

$ApiSettingScreen = new ApiSettingScreen();
$ApiSettingScreen->init();

$ApiManipulation = new ApiManipulation();
$client = new Google_Client();
$api_key = sanitize_text_field($ApiManipulation->get_api_key());
$service="";
if($api_key){
    $client->setDeveloperKey( $api_key );
    $service = new Google_Service_Sheets( $client );
}

$BlockRegistration = new BlockRegistration($service,$api_key);
$BlockRegistration->init();
new EntryPoint($service);
