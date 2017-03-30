class RemoveStepFormHiddenFromTodos < ActiveRecord::Migration[5.0]
  def change
    remove_column :todos, :stepFormHidden
  end
end
