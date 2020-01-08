#!/usr/bin/env bash

set -e

if [ $# -lt 1 ]; then
	echo "usage: $0 <version>"
	exit 1
fi

version=$1

if [ ! `echo $version | grep -e 'alpha' -e 'beta' -e 'RC' -e 'rc'` ] ; then
  sed -i '' -e "s/^Stable tag: .*/Stable tag: ${version}/g" readme.txt;
fi


sed -i '' -e "s/^ \* Version: .*/ * Version: ${version}/g" wp-simple-spreadsheet-fetcher-for-google.php;
sed -i '' -e "s/^ \* @version .*/ * @version ${version}/g" wp-simple-spreadsheet-fetcher-for-google.php;
© 2020 GitHub, Inc.