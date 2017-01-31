require_relative 'piece'
require_relative 'null_piece'

class Board
  attr_reader :grid

  def initialize
    set_grid
  end

  def set_grid
    end_rows = Array.new(2) { Array.new(8) { Piece.new } }
    mid_rows = Array.new(4) { Array.new(8) { NullPiece.new } }
    other_rows = Array.new(2) { Array.new(8) { Piece.new } }
    @grid = end_rows + mid_rows + other_rows
  end

  def move_piece(start_pos, end_pos)
    raise "not a valid move" unless valid_move?(start_pos, end_pos)

    if self[start_pos].color != self[end_pos].color
      self[end_pos] = self[start_pos]
      self[start_pos] = NullPiece.new
    else
      self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
    end

  end

  def valid_move?(start_pos, end_pos)
    !empty?(start_pos) &&
      (empty?(end_pos) || different_colors?(start_pos, end_pos)) &&
      in_bounds([start_pos, end_pos]).length == 2 &&
      self[start_pos].valid_movement?(start_pos, end_pos)
  end

  def in_bounds(positions_array)
    positions_array.select { |position| in_bounds?(position) }
  end

  def in_bounds?(pos)
    row, col = pos
    (0..7).include?(row) && (0..7).include?(col)
  end

  def different_colors?(pos1, pos2)
    self[pos1].color != self[pos2].color
  end

  def empty?(pos)
    self[pos].is_a?(NullPiece)
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos,val)
    row, col = pos
    @grid[row][col] = val
  end

end
