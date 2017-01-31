require_relative 'piece'

class Rook < Piece
  include Sliders

  attr_reader :face

  def initialize
    @face = "\u2656" #white "\u2656", black is "\u265c"
  end

  def move_dirs
    #use .move from Sliders module
  end

end
