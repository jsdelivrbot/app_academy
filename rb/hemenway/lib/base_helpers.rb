require 'byebug'

#### base two <=> base ten conversion methods ####
def binarify(base_ten_num)
  base_ten_num.to_s(2)
end

def base_tenify(base_two_num)
  base_two_num.to_i(2)
end

def binary_ones_count(base_ten_num)
  binarify(base_ten_num).count('1')
end

#### perfect square helper methods ####
def is_perfect_square?(num)
  return false if num < 1
  Math.sqrt(num) % 1 === 0
end

def next_perfect_square(num)
  return 1 if num < 1
  is_perfect_square?(num) ? next_perfect_square(num + 1) : Math.sqrt(num).ceil**2
end

def prev_perfect_square(num)
  return nil if num <= 1
  is_perfect_square?(num) ? prev_perfect_square(num - 1) : Math.sqrt(num).floor**2
end

#### perfect bit helper methods ####
def is_perfect_bit?(base_ten_num)
  is_perfect_square?(binary_ones_count(base_ten_num))
end

def next_perfect_bit(base_ten_num, is_initial_recursion = true)
  return 1 if base_ten_num < 1

  if is_initial_recursion || !is_perfect_bit?(base_ten_num)
    next_num = base_ten_num + 1
    return next_perfect_bit(next_num, false)

  # cut out when hits a perfect bit that isn't the initial num
  elsif is_perfect_bit?(base_ten_num)
    return base_ten_num
  end
end

def prev_perfect_bit_recursive(base_ten_num, ones_count = nil, is_initial_recursion = true)
  return nil if base_ten_num < 1
  base_two_num = binarify(base_ten_num)

  ones_count ||=

  has_wrong_ones_count = !!ones_count && (ones_count != base_two_num.count('1'))

  if is_initial_recursion || !is_perfect_bit?(base_ten_num) || has_wrong_ones_count
    prev_num = base_ten_num - 1
    return prev_perfect_bit(prev_num, ones_count, false)

  # cut out when hits a perfect bit that isn't the initial num
  elsif is_perfect_bit?(base_ten_num) && !has_wrong_ones_count
    return base_ten_num
  end
end

def closest_prev_perfect_bit_ones_count(base_two_num)
  if closest_prev_perfect_bit_has_same_ones_count(base_two_num)
    base_two_num.count('1')
  else
    prev_perfect_square(base_two_num.count('1'))
  end
end

def closest_prev_perfect_bit_has_same_ones_count(base_two_num)
  return false if base_tenify(base_two_num) < 2 #<'10'
  return true if base_two_num.length <= 4 && base_two_num.count('1') == 1 #'100'

  wo_initial_one = base_two_num.chars.drop(1)
  wo_immediate_zeroes = wo_initial_one.index('1') ? wo_initial_one.drop(wo_initial_one.index('1')) : []
  has_room = wo_immediate_zeroes.include?('0')
  is_perfect_square?(base_two_num.count('1')) && has_room
end

#### binary base helper methods ####
def is_binary_base?(num)
  binarify(num).count('1') == 1
end

def next_binary_base(base_ten_num)
  return 0 if base_ten_num < 0
  return 1 if base_ten_num == 0
  next_base = 2**(binary_order_of_magnitude(base_ten_num) + 1)
end

def prev_binary_base(base_ten_num)
  return nil if base_ten_num < 1
  return 0 if base_ten_num === 1
  return base_ten_num - 1 if base_ten_num < 3

  prev_base = 2**(binary_order_of_magnitude(base_ten_num))
  prev_base === base_ten_num ? prev_binary_base(prev_base - 1) : prev_base
end

def initial_base_ten_binary_base_in_range(num1, num2)
  return nil if num2 < 1
  return num1 if is_binary_base?(num1)
  next_base = next_binary_base(num1)
  return next_base if next_base <= num2
  nil
end

def final_base_ten_binary_base_in_range(num1, num2)
  return num2 if is_binary_base?(num2)
  prev_base = prev_binary_base(num2)
  return prev_base if prev_base >= num1
  nil
end


#### combinatoric helper methods ####
def factorial(n)
  (1..n).inject(:*) || 1
end

#how many 3-digit unique permutation sets exist with n possible nums
def uniq_permutations_count(slots_count, nums_count)
  uniq_perms_count = factorial(nums_count)/factorial(nums_count - slots_count)
  uniq_perms_count/factorial(slots_count)
end

def uniq_permutations_count_w_set_ones_and_zeroes(ones_count, zeroes_count)
  factorial(ones_count + zeroes_count)/(factorial(ones_count) * factorial(zeroes_count))
end

def prev_permutations_count(base_ten_or_two_num, ones_count_goal)
  base_ten_num = !base_ten_or_two_num.is_a?(String) ? base_ten_or_two_num : binarify(base_ten_or_two_num)
  base_two_num = binarify(base_ten_num)
  raise 'only accepts perfect bits' unless is_perfect_bit?(base_ten_num)

  # set bits arr to relevant base_ten_num
  if base_two_num.count('1') == ones_count_goal
    dynamic_chunk = dynamic_chunk(base_ten_num)
    static_chunk = static_chunk(base_ten_num)
    bits_arr = dynamic_chunk.chars
  else
    initial_binary_base = prev_binary_base(base_ten_num)
    base_ten_num = prev_perfect_bit(base_ten_num, ones_count_goal)
    return 0 if base_ten_num < initial_binary_base
  end

  # take care of base cases
  return 1 if ones_count_goal && ones_count_goal == 1 && !is_binary_base?(base_ten_num) #'11111', and ones_count_goal == 1
  return 0 if base_two_num.count('1') < 2 #'100000000'
  return 0 if !base_two_num.index('0') && !ones_count_goal #'111111111'
  # debugger if base_two_num.count('1') != ones_count_goal

  # count previous permutations
  count = 0
  only_ones_remain = false
  until bits_arr.length <= 1 || only_ones_remain

    if bits_arr.first == '1'
      ones_count = bits_arr.count('1')
      zeroes_count = bits_arr.count('0')
      only_ones_remain = zeroes_count.zero?

      unless only_ones_remain
        zeroes_count -= 1
        count += uniq_permutations_count_w_set_ones_and_zeroes(ones_count, zeroes_count)
      end
    end
    bits_arr.shift
  end

  count
end

### miscellaneous helper methods ###
def binary_order_of_magnitude(base_ten_num)
  binarify(base_ten_num).chars.count - 1
end

def remove_index(arr, idx)
  arr.slice(0...idx) + arr.slice((idx + 1)..arr.length)
end
#
# def dynamic_chunk(base_two_num)
#   return '' unless base_two_num.index('0')
#
#   #remove initial ones
#   num = base_two_num.slice((base_two_num.index('0'))..base_two_num.length)
#
#   first_one_idx = num.index('1')
#
#   if first_one_idx
#
#     # change first 1 to 0
#     num[first_one_idx] = '0'
#
#     #slice off first 0, because 1 will have shifted over there
#     return num.slice(1..num.length)
#   else
#     return num
#   end
#
# end

def no_binary_bases_in_range?(num1, num2) #(16,32) deliberately returns true
  return !is_binary_base?(num1) if num1 == num2
  return false if is_binary_base?(num1) || is_binary_base?(num2)
  (next_binary_base(num1) > num2) && prev_binary_base(num2) && (prev_binary_base(num2) < num1)
end

def has_min_two_binary_bases_in_range?(num1, num2)
  return false if num1 == num2
  binary_bases = []
  binary_bases << num1 if is_binary_base?(num1)
  binary_bases << num2 if is_binary_base?(num2)

  first_binary_base = next_binary_base(num1)
  last_binary_base = prev_binary_base(num2)

  binary_bases << first_binary_base if first_binary_base < num2
  binary_bases << last_binary_base if last_binary_base > num1

  binary_bases.uniq.count >= 2
end

def is_in_inclusive_range?(x, range)
  x >= range[0] && x <= range[1]
end

def static_chunk(base_ten_num)# => excludes first one in output
  base_two_num = binarify(base_ten_num)

  first_zero_idx = base_two_num.index('0')
  return base_two_num if is_binary_base?(base_ten_num) || !first_zero_idx
  return '1' if first_zero_idx > 1

  second_one_idx = first_zero_idx + base_two_num.slice(base_two_num.index('0')..base_two_num.length - 1).index('1')
  base_two_num.slice(0...second_one_idx)
end

# if start out with '100111000', the initial '100' must stay fixed and we're only concerned with '111000' if we're curious about permutations of lesser base value.
def dynamic_chunk(base_ten_num) #=>inncludes first 1 in output
  base_two_num = binarify(base_ten_num)
  base_two_num.slice(static_chunk(base_ten_num).length..(base_two_num.length - 1))
end
