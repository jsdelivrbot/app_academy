require_relative 'piece'

class Rook < Piece
  include Sliders

  attr_reader :face

  def initialize(color, initial_pos)
    super
    @face = (color == :white ? "\u2656" : "\u265c")#white "\u2656", black is "\u265c"
  end

  def move_dirs
    Sliders::LATERALS
  end



end
