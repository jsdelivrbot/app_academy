class AddStepFormHiddenFromTodos < ActiveRecord::Migration[5.0]
  def change
    add_column :todos, :stepFormHidden, :boolean, null: false, default: true
  end
end
