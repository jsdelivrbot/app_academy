class Piece
  attr_reader :color, :face

  def initialize
    @color = nil
    @face = "p"
  end

  def moves
    #retrun arr of possible moves
  end

  def valid_movement?(start_pos, end_pos)
    return true
  end

end
