require_relative 'piece'

class Knight < Piece
  include Steppers

    attr_reader :face

    def initialize
      @face = "\u2658" # white "\u2658", black knight: "\u265E"
    end
end
