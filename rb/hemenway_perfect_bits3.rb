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
  binarify(num).chars.count
end

def is_perfect_square?(num)
  return false if num < 1
  Math.sqrt(num) % 1 == 0
end

def next_perfect_square(num)
  return false if num < 1
  Math.sqrt(num) % 1 == 0
end

def perfect_squares_in_base_ten_range(min_num, max_num)
  squares_in_range = []
  min_digit_count = binary_order_of_magnitude(min_num)
  max_digit_count = binary_order_of_magnitude(max_num)

  (min_digit_count..max_digit_count).each do |num|
    num
  end
end

#how many 3-digit unique permutation sets exist with n possible nums
def uniq_permutations_count(slots_count, nums_count)
  # debugger
  uniq_perms_count = factorial(nums_count)/factorial(nums_count - slots_count)

  #uniq perm sets
  uniq_perms_count/factorial(slots_count)
end

p uniq_permutations_count(3,5)
