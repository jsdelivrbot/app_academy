require_relative 'piece'
require_relative 'null_piece'
require_relative 'bishop'
require_relative 'king'
require_relative 'knight'
require_relative 'pawn'
require_relative 'queen'
require_relative 'rook'

class Board
  attr_reader :grid

  def initialize
    set_grid
  end

  def set_grid
    top_row = [
        Rook.new,
        Knight.new,
        Bishop.new,
        Queen.new,
        King.new,
        Bishop.new,
        Knight.new,
        Rook.new
      ]

    top_pawn_row = Array.new(1) { Array.new(8) { Pawn.new } }
    mid_rows = Array.new(4) { Array.new(8) { NullPiece.new } }
    bottom_pawn_row = Array.new(1) { Array.new(8) { Pawn.new } }

    bottom_row = [
        Rook.new,
        Knight.new,
        Bishop.new,
        Queen.new,
        King.new,
        Bishop.new,
        Knight.new,
        Rook.new
      ]

    @grid = [top_row] +
      top_pawn_row +
      mid_rows +
      bottom_pawn_row +
      [bottom_row]
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
