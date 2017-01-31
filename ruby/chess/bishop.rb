require_relative 'piece'
require_relative 'sliders'

class Bishop < Piece
  include Sliders
  attr_reader :face

  def initialize
    @face = "\u2657" #white bishop: "\u2657", black bishop: "\u265d"
  end

  def move_dirs
    #use .move from Sliders module
  end

end
