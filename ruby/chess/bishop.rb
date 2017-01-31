require_relative 'piece'
require_relative 'sliders'

class Bishop < Piece
  include Sliders

  def move_dirs
    #use .move from Sliders module
  end

end
