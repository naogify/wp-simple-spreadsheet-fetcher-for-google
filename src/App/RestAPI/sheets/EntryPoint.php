<?php
namespace Fetcher\App\RestAPI\Sheets;
use Fetcher\App\Utils\FetcherWarning;

class EntryPoint {

	private $service;

	const NAMESPACE = 'api-charts/v1';
	const ROUTE = '/data-table';
	const PARAM_SHEETID = '/(?P<sheetId>.+)';
	const PARAM_SHEETNAME = '/(?P<sheetName>.+)';
	const PARAM_SHEETRANGE = '/(?P<sheetRange>.+)';
	const PARAM_CHARTWIDTH = '/(?P<chartWidth>.+)';
	const PARAM_CHARTHEIGHT = '/(?P<chartHeight>.+)';

	public function __construct($service) {
		$this->service = $service;
		add_action( 'rest_api_init', [ $this, '_rest_api_init' ] );
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

	public function _callback($request) {

		$sheetId = esc_html($request["sheetId"]);
		$sheetName = esc_html($request["sheetName"]);
		$sheetRange = esc_html($request["sheetRange"]);
		$chartWidth = intval($request["chartWidth"]);
		$chartHeight = intval($request["chartHeight"]);
		$warning = ["data"=>["status"=>404,"message"=>""]];

		if($this->is_str_null($sheetId)){
			$warning["data"]["message"] = FetcherWarning::sheet_url();
			return $warning;
		}

		if($this->is_str_null($sheetName) && $this->is_str_null($sheetRange)) {
			$warning["data"]["message"] = FetcherWarning::sheet_name_range();
			return $warning;

		}else{
			if($this->is_str_null($sheetName)){
				$warning["data"]["message"] = FetcherWarning::sheet_name();
				return $warning;

			}else if($this->is_str_null($sheetRange)){
				$warning["data"]["message"] = FetcherWarning::sheet_range_fetcher();
				return $warning;
			}
			$range = esc_html($sheetName) . '!' . esc_html($sheetRange);
		}

		$response = $this->service->spreadsheets_values->get($sheetId, $range );
		$values   = $response->getValues();
		return rest_ensure_response(["attributes" => ["chartWidth" => $chartWidth, "chartHeight" => $chartHeight],"chartData"=>$values]);
	}

	public function is_str_null($value){
		return $value === "null";
	}
}
