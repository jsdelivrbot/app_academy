require_relative 'board'
require 'colorize'
require_relative 'cursor'
require 'byebug'

class Display
  attr_reader :cursor

  def initialize(board)
    @cursor = Cursor.new([0,0], board)
  end

  def render(board)
    system("clear")
    line = "-----------------"
    result = [line]

    board.grid.each_with_index do |row, row_index|
      row_result = "|"

      row.each_with_index do |piece, col_index|
        current_pos = [row_index, col_index]
        if current_pos == @cursor.cursor_pos
          if board.empty?(current_pos)
            row_result += "X".red + "|"
          else
            row_result += piece.face.red + "|"
          end
        else
          row_result += piece.face + "|"
        end
      end

      result << row_result
      result << line
    end

    puts result
  end

  def get_input(board)
    render(board)
    while true
      cursor.get_input
      render(board)
    end
  end

end

if __FILE__ == $0
  board = Board.new
  display = Display.new(board)
  display.get_input(board)

end
