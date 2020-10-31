<?php
namespace Fetcher\App\RestAPI\Sheets;
use Fetcher\App\Utils\FetcherWarning;
use Fetcher\App\Utils\ApiManipulation;

class EntryPoint extends ApiManipulation {

	private $service;

	const NAMESPACE = 'api-charts/v1';
	const ROUTE = '/data-table';
	const PARAM_SHEETID = '/(?P<sheetId>.+)';
	const PARAM_SHEETNAME = '/(?P<sheetName>.+)';
	const PARAM_SHEETRANGE = '/(?P<sheetRange>.+)';
	const PARAM_CHARTWIDTH = '/(?P<chartWidth>.+)';
	const PARAM_CHARTHEIGHT = '/(?P<chartHeight>.+)';

	public function __construct( $service ) {
		$this->service = $service;
		add_action( 'rest_api_init', [ $this, '_rest_api_init' ] );
		add_action( 'wp_head', [ $this, 'print_rest_url' ] );
		add_action( 'admin_head', [ $this, 'print_rest_url' ] );
	}

	public function _rest_api_init() {
		register_rest_route(
			self::NAMESPACE,
			self::ROUTE . self::PARAM_SHEETID . self::PARAM_SHEETNAME . self::PARAM_SHEETRANGE . self::PARAM_CHARTWIDTH . self::PARAM_CHARTHEIGHT,
			[
				'methods'  => 'GET',
				'callback' => [ $this, '_callback' ],
				'permission_callback' => '__return_true',
			]
		);
	}

	public function _callback( $request ) {

		$sheetUrl = esc_html($request["sheetId"]);
		$sheetName = esc_html($request["sheetName"]);
		$sheetRange = esc_html($request["sheetRange"]);
		$chartWidth = intval($request["chartWidth"]);
		$chartHeight = intval($request["chartHeight"]);
		$api_key = $this->get_api_key();
		$warning = ["data"=>["status"=>404,"message"=>""]];

		$result = $this->get_google_sheet_value( $api_key, $sheetUrl, $sheetName, $sheetRange, $this->service, "", 'wp2s2fg/fetcher-chart' );

		// Return error message.
		if(!$result['status']){
			$warning["data"]["message"] = $result['values'];
			return $warning;
		}

		return rest_ensure_response( [ "attributes" => [ "chartWidth" => $chartWidth, "chartHeight" => $chartHeight ],"chartData" => $result['values']] );
	}

	public function print_rest_url(){

		echo '<script>',
			'var wssffg_rest_url = "' . esc_url(get_rest_url()) . '";',
		'</script>';
	}
}
