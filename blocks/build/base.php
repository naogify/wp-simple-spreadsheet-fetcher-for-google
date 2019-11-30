<?php
function wp2s2fg_get_api_key()
{
	$api_key = esc_html(get_option( 'wp2s2fg-api-key' ));
	if ( $api_key ) {
		return $api_key;
	}
}

function wp2s2fg_get_spread_sheet_id() {
	$spread_sheet_id = esc_html(get_option( 'wp2s2fg-spread-sheet-id' ));
	if ( $spread_sheet_id ) {
		return $spread_sheet_id;
	}
}

function wp2s2fg_set_api_key($api_key)
{
	update_option( 'wp2s2fg-api-key', sanitize_text_field( $api_key ) );
}

function wp2s2fg_set_spread_sheet_id( $spread_sheet_id ) {
	update_option( 'wp2s2fg-spread-sheet-id', sanitize_text_field( $spread_sheet_id ) );
}
