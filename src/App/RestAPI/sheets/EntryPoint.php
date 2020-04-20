<?php
namespace Fetcher\App\RestAPI\Sheets;
use Fetcher\App\Utils\FetcherWarning;

class EntryPoint {

	private $service;

	const REST_API_NAMESPACE = 'api-charts/v1';
	const REST_API_ROUTE = '/data-table';
	const REST_API_PARAM_SHEETID = '/(?P<sheetId>.+)';
	const REST_API_PARAM_SHEETNAME = '/(?P<sheetName>.+)';
	const REST_API_PARAM_SHEETRANGE = '/(?P<sheetRange>.+)';

	public function __construct($service) {
		$this->service = $service;
		add_action( 'rest_api_init', [ $this, '_rest_api_init' ] );
	}

	public function _rest_api_init() {
		register_rest_route(
			self::REST_API_NAMESPACE,
			self::REST_API_ROUTE . self::REST_API_PARAM_SHEETID . self::REST_API_PARAM_SHEETNAME . self::REST_API_PARAM_SHEETRANGE,
			[
				'methods'  => 'GET',
				'callback' => [ $this, '_callback' ],
			]
		);
	}

	public function _callback($request) {

		$sheetId = esc_html($request["sheetId"]);
		$sheetName = esc_html($request["sheetName"]);
		$sheetRange = esc_html($request["sheetRange"]);
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
		return rest_ensure_response($values);
	}

	public function is_str_null($value){
		return $value === "null";
	}
}