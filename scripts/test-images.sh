#!/bin/bash

FAIL=0
for FILE in webroot/img/*; do
	identify -format '%i is %[fx:w]x%[fx:h] %C' "$FILE" | grep -v '190x190 JPEG' && FAIL=1
done
exit $FAIL
