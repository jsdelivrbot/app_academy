require_relative 'piece'

class Queen < Piece
  include Sliders

  attr_reader :face

  def initialize
    @face = "\u2655" # white queen: "\u2655", black queen: "\u265b"
  end

  def move_dirs
    #use .move from Sliders module
  end

end
