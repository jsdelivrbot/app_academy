require_relative 'piece'

class Queen < Piece
  include Sliders

  attr_reader :face

  def initialize(color, initial_pos)
    super
    @face = (color == :white ? "\u2655" : "\u265b") # white queen: "\u2655", black queen: "\u265b"
  end

  def move_dirs
    Sliders::LATERALS + Sliders::DIAGONALS
  end

end
