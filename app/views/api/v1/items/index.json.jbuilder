json.items @items do |item|
  json.id item.id
  json.name item.name
  json.mark item.mark
  json.created_at item.created_at
  json.updated_at item.updated_at
end
