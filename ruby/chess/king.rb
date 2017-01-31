require_relative 'piece'
require_relative 'steppers'

class King < Piece
  include Steppers

  attr_reader :face

  def initialize(color, initial_pos)
    super
    @face = (color == :white ? "\u2654" : "\u265a")
  end

end
