json.array!(@destinations) do |destination|
  json.extract! destination, :id, :city, :country, :desription
  json.url destination_url(destination, format: :json)
end
