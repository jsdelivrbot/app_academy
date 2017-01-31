require_relative 'piece'

class Knight < Piece
  include Steppers

    attr_reader :face

    def initialize(color, initial_pos)
    super
    @face = (color == :white ? "\u2658" : "\u265E")
    end
end
