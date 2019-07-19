#!/bin/bash

FAIL=0
find webroot/img/ -type f -print0 |
	while IFS= read -r -d '' FILE; do
		identify -format '%i is %[fx:w]x%[fx:h] %C' "$FILE" | grep -v '190x190 JPEG' && FAIL=1
	done
exit $FAIL
