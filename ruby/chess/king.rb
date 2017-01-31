require_relative 'piece'
require_relative 'steppers'

class King < Piece
  include Steppers

  attr_reader :face

  def initialize
    @face = "\u2654" #white king: "\u2654", black king: "\u265a"
  end

end
