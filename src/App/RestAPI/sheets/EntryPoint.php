<?php
namespace Fetcher\App\RestAPI\Sheets;

class EntryPoint {

	const REST_API_NAMESPACE = 'api-charts/v1';
	const REST_API_ROUTE = '/data-table/';

	public function __construct() {
		add_action( 'rest_api_init', [ $this, '_rest_api_init' ] );
	}

	public function _rest_api_init() {
		register_rest_route(
			self::REST_API_NAMESPACE,
			self::REST_API_ROUTE,
			[
				'methods'  => 'POST',
				'callback' => [ $this, '_callback' ],
				// 'permission_callback' => function () {
				// 	return current_user_can( 'edit_posts' );
				// },
			]
		);
	}

	public function _callback($request) {
		
		return array(
			"cols" => array(
				array(
					"id"=>"",
					"label"=>"Topping",
					"pattern"=>"",
					"type"=>"string",
				),
				array(
					"id"=>"",
					"label"=>"Slices",
					"pattern"=>"",
					"type"=>"number",
				),
			),
			"rows" => array(
				array(
					"c"=>array(
						array(
							"v"=>$request["sheetName"],
							"f"=>null
						),
						array(
							"v"=>3,
							"f"=>null
						)
					)
				),
				array(
					"c"=>array(
						array(
							"v"=>"Onions",
							"f"=>null
						),
						array(
							"v"=>1,
							"f"=>null
						)
					)
				),
				array(
					"c"=>array(
						array(
							"v"=>"Olives",
							"f"=>null
						),
						array(
							"v"=>1,
							"f"=>null
						)
					)
				),
				array(
					"c"=>array(
						array(
							"v"=>"Zucchini",
							"f"=>null
						),
						array(
							"v"=>1,
							"f"=>null
						)
					)
				),
				array(
					"c"=>array(
						array(
							"v"=>"Pepperoni",
							"f"=>null
						),
						array(
							"v"=>2,
							"f"=>null
						)
					)
				)
			)
		);
	}
}