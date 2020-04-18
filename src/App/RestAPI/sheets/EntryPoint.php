<?php
namespace Fetcher\App\RestAPI\Sheets;

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
				// 'permission_callback' => function () {
				// 	return current_user_can( 'edit_posts' );
				// },
			]
		);
	}

	public function _callback($request) {
		$sheetId = esc_html($request["sheetId"]);
		$range = esc_html($request["sheetName"]) . '!' . esc_html($request["sheetRange"]);

		$response = $this->service->spreadsheets_values->get($sheetId, $range );
		$values   = $response->getValues();
		return rest_ensure_response($values);

		// return array(
		// 	"cols" => array(
		// 		array(
		// 			"id"=>"",
		// 			"label"=>"Topping",
		// 			"pattern"=>"",
		// 			"type"=>"string",
		// 		),
		// 		array(
		// 			"id"=>"",
		// 			"label"=>"Slices",
		// 			"pattern"=>"",
		// 			"type"=>"number",
		// 		),
		// 	),
		// 	"rows" => array(
		// 		array(
		// 			"c"=>array(
		// 				array(
		// 					"v"=>$request["sheetName"],
		// 					"f"=>null
		// 				),
		// 				array(
		// 					"v"=>3,
		// 					"f"=>null
		// 				)
		// 			)
		// 		),
		// 		array(
		// 			"c"=>array(
		// 				array(
		// 					"v"=>"Onions",
		// 					"f"=>null
		// 				),
		// 				array(
		// 					"v"=>1,
		// 					"f"=>null
		// 				)
		// 			)
		// 		),
		// 		array(
		// 			"c"=>array(
		// 				array(
		// 					"v"=>"Olives",
		// 					"f"=>null
		// 				),
		// 				array(
		// 					"v"=>1,
		// 					"f"=>null
		// 				)
		// 			)
		// 		),
		// 		array(
		// 			"c"=>array(
		// 				array(
		// 					"v"=>"Zucchini",
		// 					"f"=>null
		// 				),
		// 				array(
		// 					"v"=>1,
		// 					"f"=>null
		// 				)
		// 			)
		// 		),
		// 		array(
		// 			"c"=>array(
		// 				array(
		// 					"v"=>"Pepperoni",
		// 					"f"=>null
		// 				),
		// 				array(
		// 					"v"=>2,
		// 					"f"=>null
		// 				)
		// 			)
		// 		)
		// 	)
		// );
	}
}