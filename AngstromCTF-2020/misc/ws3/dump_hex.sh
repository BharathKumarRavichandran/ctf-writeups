search_dir='exports'

for entry in "$search_dir"/*
do
  echo "$entry"
  hexdump -C $entry > "$entry.hex"
done