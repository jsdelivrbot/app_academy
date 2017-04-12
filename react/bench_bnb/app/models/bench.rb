class Bench < ApplicationRecord
  def self.in_bounds(bounds)
  # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  #... query logic goes here
    self.all.map do |bench|
      bench.lat.between?(bounds[:northEast][:lat], bounds[:southWest][:lat]) &&
      bench.lng.between?(bounds[:northEast][:lng], bounds[:southWest][:lng])
    end
  end
end
