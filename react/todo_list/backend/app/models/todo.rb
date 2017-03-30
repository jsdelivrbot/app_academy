class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, :stepsHidden, :stepFormHidden, inclusion: { in: [true, false] }

end
