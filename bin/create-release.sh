#!/usr/bin/env bash

set -e

if [ $# -lt 1 ]; then
	echo "usage: $0 <version>"
	exit 1
fi

version=$1

if [ ! `echo $version | grep -e 'alpha' -e 'beta' -e 'RC' -e 'rc'` ] ; then
  sed -i readme.txt -e "s/^Stable tag: .*/Stable tag: ${version}/g";
fi

sed -i wp-simple-spreadsheet-fetcher-for-google.php -e "s/^ \* Version: .*/ * Version: ${version}/g";
sed -i wp-simple-spreadsheet-fetcher-for-google.php -e "s/^ \* @version .*/ * @version ${version}/g";
sed -i package.json -e "s/\"version\"\: \".....\"/\"version\"\: \"${version}\"/g";