class Piece
  attr_reader :color
  attr_accessor :current_pos

  def initialize(color, initial_pos)
    @color = color
    @current_pos = initial_pos
  end

  def moves
    #retrun arr of possible moves
  end

  def valid_movement?(start_pos, end_pos)
    return true
  end

end
