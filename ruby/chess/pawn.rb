require_relative 'piece'

class Pawn < Piece

  attr_reader :face

  def initialize(color, initial_pos)
    super
    @face = (color == :white ? "\u2659" : "\u265d")
  end

  def move_dirs
    #use .move from Sliders module
  end

end
