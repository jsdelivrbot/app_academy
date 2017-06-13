require 'byebug'

def binarify(base_ten_num)
  base_ten_num.to_s(2)
end

def base_tenify(base_two_num)
  base_two_num.to_i(2)
end

def factorial(n)
  (1..n).inject(:*) || 1
end

def binary_order_of_magnitude(num)
  binarify(num).chars.count - 1
end

def is_perfect_square?(num)
  return false if num < 1
  Math.sqrt(num) % 1 == 0
end

def next_perfect_square(num)
  return 1 if num < 1
  is_perfect_square?(num) ? next_perfect_square(num + 1) : Math.sqrt(num).ceil**2
end

#how many 3-digit unique permutation sets exist with n possible nums
def uniq_permutations_count(slots_count, nums_count)
  # debugger
  uniq_perms_count = factorial(nums_count)/factorial(nums_count - slots_count)

  #uniq perm sets
  uniq_perms_count/factorial(slots_count)
end

p uniq_permutations_count(3,5)

def count_perms_fully_in_range(num1, num2)
  min_binary_o_of_mag = binary_order_of_magnitude(num1)
  max_binary_o_of_mag = binary_order_of_magnitude(num2)

  count = 0

  current_sq = 1
  current_o_of_mag = min_binary_o_of_mag

  while current_o_of_mag < max_binary_o_of_mag
    count += uniq_permutations_count((current_sq - 1), current_o_of_mag)

    next_sq = next_perfect_square(current_sq)
# debugger
    if next_sq > max_binary_o_of_mag
      current_o_of_mag += 1
      current_sq = 1
    else
      current_sq = next_sq
    end
  end
  count
end

p count_perms_fully_in_range(2,32) == 9
p count_perms_fully_in_range(2,64) == 20
p count_perms_fully_in_range(32,64) == 11

def perfect_bits(num1, num2)
  # count_perms_fully_in_range(num1, num2)

end

#
# def perfect_squares_in_base_ten_range(min_num, max_num)
#   squares_in_range = []
#   min_digit_count = binary_order_of_magnitude(min_num)
#   max_digit_count = binary_order_of_magnitude(max_num)
#
#   (min_digit_count..max_digit_count).each do |num|
#     num
#   end
# end
