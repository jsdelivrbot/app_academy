class CreatePostSubs < ActiveRecord::Migration
  def change
    create_table :post_subs do |t|
      t.belongs_to :post, null: false, index: true
      t.belongs_to :sub, null: false, index: true

      t.timestamps null: false
    end
  end
end
