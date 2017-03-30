class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :done, null: false, default: false
      t.boolean :stepFormHidden, null: true
      t.boolean :stepsHidden, null: false, default: true

      t.timestamps
    end

    add_index :todos, :title
  end
end
