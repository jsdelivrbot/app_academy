require_relative 'piece'

class NullPiece < Piece
  attr_reader :color, :face#, :current_pos

  def initialize
    @color = nil
    @face = " "
    # @current_pos = initial_pos
  end

end
