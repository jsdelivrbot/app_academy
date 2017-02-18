# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  validates :title, :user_id, presence: true
  validate :min_one_sub

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :post_subs, inverse_of: :post, dependent: :destroy

  has_many :subs,
    through: :post_subs,
    source: :sub

  def min_one_sub
    self.subs.count > 0
  end

end
