class FixEverything < ActiveRecord::Migration
  def change
    change_column_default :tracks, :track_type, to: "regular"
    change_column :tracks, :lyrics, :text
    remove_column :tracks, :album_id
    remove_column :albums, :band_id
  end
end
