#https://en.wikipedia.org/wiki/Eight_queens_puzzle

class NQueens
  attr_reader :n, :board

  def initialize(n = 4)
    @n = n
    @board = Array.new(n){Array.new(n)}
    solve
  end

  def solve
    until @board.flatten.count(:Q) == n
      @board = Array.new(n){Array.new(n)}
      place_Qs
    end
    @board
  end

  def place_Qs
    until safe_moves.empty?
      self[safe_moves.sample] = :Q
    end
  end

  def all_moves
    all_moves = []
    n.times do |row|
      n.times do |col|
        all_moves << [row, col]
      end
    end
    all_moves
  end

  def open_moves
    all_moves.select{|pos| empty?(pos)}
  end

  def safe_moves
    open_moves.select{|pos| safe_move?(pos)}
  end

  def safe_move?(pos)
    safe_diagonally?(pos) && safe_horizontally?(pos) && safe_vertically?(pos)
  end

  def safe_diagonally?(pos)
    diagonal_spots(pos).none?{|spot| self[spot] == :Q}
  end

  def diagonal_spots(pos)
    row, col = pos
    all_moves.select do |pos0|
      row0, col0 = pos0
      (row - row0).abs == (col - col0).abs && pos0 !=pos
    end
  end

  def safe_horizontally?(pos)
    row, col = pos
    !@board[row].include?(:Q)
  end

  def safe_vertically?(pos)
    row, col = pos
    n.times do |board_row|
      return false if self[[board_row, col]] == :Q
    end
    true
  end

  def empty?(pos)
    self[pos].nil?
  end

  def [](pos)
    row, col = pos
    @board[row][col]
  end

  def []=(pos, mark)
    row, col = pos
    @board[row][col] = mark
  end
end
