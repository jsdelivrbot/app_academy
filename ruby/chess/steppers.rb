module Steppers

  def add_diff(pos1, pos2)
    [pos1[0] + pos2[0], pos1[1] + pos2[1]]
  end
end
