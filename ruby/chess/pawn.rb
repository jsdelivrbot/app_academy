require_relative 'piece'

class Pawn < Piece

  attr_reader :face

  def initialize
    @face = "\u2659" #white pawn: "\u2659", black pawn: "\u265d"
  end

  def move_dirs
    #use .move from Sliders module
  end

end
