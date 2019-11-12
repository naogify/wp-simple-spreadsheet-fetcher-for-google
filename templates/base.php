<?php
function getApiKey()
{
  $file = __DIR__ . '/.apiKey';
  if (file_exists($file)) {
	  return str_replace( PHP_EOL, '', file_get_contents( $file ) );
  }
}

function getSpreadSheetId() {
	$file = __DIR__ . '/.spreadSheetId';
	if ( file_exists( $file ) ) {
		return str_replace( PHP_EOL, '', file_get_contents( $file ) );
	}
}

function setApiKey($apiKey)
{
  $file = __DIR__ . '/.apiKey';
  file_put_contents($file, $apiKey);
}

function setSpreadSheetId( $spreadSheetId ) {
	$file = __DIR__ . '/.spreadSheetId';
	file_put_contents( $file, $spreadSheetId );
}
