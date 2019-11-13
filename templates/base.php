<?php
function getApiKey()
{
	$apiKey = esc_html(get_option( 'wp-s2fg-api-key' ));
	if ( $apiKey ) {
		return $apiKey;
	}
}

function getSpreadSheetId() {
	$spreadSheetId = esc_html(get_option( 'wp-s2fg-spread-sheet-id' ));
	if ( $spreadSheetId ) {
		return $spreadSheetId;
	}
}

function setApiKey($apiKey)
{
	update_option( 'wp-s2fg-api-key', sanitize_text_field( $apiKey ) );
}

function setSpreadSheetId( $spreadSheetId ) {
	update_option( 'wp-s2fg-spread-sheet-id', sanitize_text_field( $spreadSheetId ) );
}
