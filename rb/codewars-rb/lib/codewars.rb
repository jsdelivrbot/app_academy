# ----------
# ~ 7 kyu ~
# ----------

# Given a number as a parameter, return an array containing strings which form a box.
# Ex:
  # box(5) => [
  #   '-----',
  #   '-   -',
  #   '-   -',
  #   '-   -',
  #   '-----'
  # ]

def box(n)
  arr = []
  n.times do |i|
    line = '-'
    if (n > 2)
      (n - 2).times do
        additive = (i == 0 || i == (n - 1)) ? '-' : ' '
        line += additive
      end
    end
    line += '-'
    arr << line
  end
  arr
end
