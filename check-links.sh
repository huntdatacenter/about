#!/bin/bash

for link in $(find pages -type f -iname "*.md" -print0 | xargs -0 grep -hEo "(http|https)://[a-zA-Z0-9./?=_%:-]*" | sort | uniq | tr "\n" " "); do 
  #| xargs -I @ bash -c "[[ \"$(curl -s -o /dev/null -w '%{http_code}' @)\" == \"404\" ]] && echo '@ ⚠️' || echo '@ ✅' "
  echo -n "${link}: "
  output=$(curl -s -o /dev/null -w '%{http_code}' "${link}")
  echo -n "${output} "
  [[ "${output}" == "404" ]] && echo '[ERROR] ⛔️' || echo '[OK] ✅'
done

