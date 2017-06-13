require 'byebug'

def binarify(base_ten_num)
  base_ten_num.to_s(2)
end

def base_tenify(base_two_num)
  base_two_num.to_i(2)
end

def binary_ones_count(base_ten_num)
  binarify(base_ten_num).count('1')
end

def ones_count(base_two_num)
  base_two_num.count('1')
end

# p binary_ones_count(0) == 0
# p binary_ones_count(1) == 1
# p binary_ones_count(23) == 4
# p binary_ones_count(24) == 2

def is_perfect_square?(num)
  return false if num < 1
  Math.sqrt(num) % 1 == 0
end

# p is_perfect_square?(0) == false
# p is_perfect_square?(1) == true
# p is_perfect_square?(4) == true
# p is_perfect_square?(2) == false

def is_perfect_bit?(base_ten_num)
  is_perfect_square?(binary_ones_count(base_ten_num))
end

def is_perfect_base_two_bit?(base_two_num)
  is_perfect_square?(ones_count(base_two_num))
end

def next_perfect_bit(num)
  return 1 if num < 1
  Math.sqrt(num) % 1 == 0 ? next_perfect_bit(num + 1) : Math.sqrt(num).ceil**2
end

# def perfect_bits(a, b)
#   (a..b).to_a.count { |current_num| is_perfect_bit?(current_num) }
# end

def binary_order_of_magnitude(num)
  binarify(num).chars.count
end

def next_sq_num(num)
  return 1 if num < 1
  Math.sqrt(num) % 1 == 0 ? next_sq_num(num + 1) : Math.sqrt(num).ceil**2
end

def binary_perms(arr)
  arr.pop(1)
  arr.permutation.map{|perm| (['1'] + perm).join('')}.uniq
end

# p binary_perms(["1", "1", "0", "0"])

def all_binary_permutations(num_binary_digits, num_ones)
  all_digits = []
  (num_binary_digits - num_ones).times { all_digits << '0' }
  num_ones.times { all_digits << '1' }
  # debugger
  binary_perms(all_digits)
end

def all_binary_permutations_in_range(min, max)

end

p all_binary_permutations(2, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(2, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(3, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(3, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(4, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(4, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(4, 4)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(4, 4).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(5, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(5, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(5, 4)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(5, 4).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(6, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(6, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(6, 4)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(6, 4).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(7, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(7, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(7, 4)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(7, 4).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(8, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(8, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(8, 4)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(8, 4).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(9, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(9, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(9, 4)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(9, 4).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(9, 9)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(9, 9).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(10, 1)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(10, 1).map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(10, 4)#.map{|base_two_num| base_tenify(base_two_num)}
p all_binary_permutations(10, 4).map{|base_two_num| base_tenify(base_two_num)}
# p all_binary_permutations(10, 9)#.map{|base_two_num| base_tenify(base_two_num)}
# p all_binary_permutations(10, 9).map{|base_two_num| base_tenify(base_two_num)}
# returns permuations in ascending order

def num_binary_permutations(num_binary_digits, num_ones)
  all_binary_permutations(num_binary_digits, num_ones).count
end

def collect_perfect_bit_perms_up_to(digit_limit)
  current_one_count = 1
  perfect_bit_perms = []

  while current_one_count <= digit_limit
    perfect_bit_perms += all_binary_permutations(digit_limit, current_one_count)
    current_one_count = next_sq_num(current_one_count)
  end

  perfect_bit_perms
end

# p collect_perfect_bit_perms_up_to(4)

def perfect_bits(num1, num2, count = 0)
  current_binary_digit_limit = binary_order_of_magnitude(num1)
  final_binary_digit_limit = binary_order_of_magnitude(num2)

  while current_binary_digit_limit <= final_binary_digit_limit
    collect_perfect_bit_perms(current_binary_digit_limit)
    current_binary_digit_limit += 1
  end

  next_perfect_bit = next_perfect_bit(num1)
  return count if next_perfect_bit > num2
  count += 1
  perfect_bits(next_perfect_bit, num2, count)
end

# p perfect_bits(0, 5)# == 3
# p perfect_bits(1, 10)# == 4
# p perfect_bits(1, 100)# == 33
# p perfect_bits(1, 1000)# == 225
# p perfect_bits(12345, 123456)# == 23391
