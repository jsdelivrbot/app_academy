def binarify(base_ten_num)
  base_ten_num.to_s(2)
end

def base_tenify(base_two_num)
  base_two_num.to_i(2)
end

def binary_ones_count(base_ten_num)
  binarify(base_ten_num).count('1')
end

def factorial(n)
  (1..n).inject(:*) || 1
end

def binary_order_of_magnitude(num)
  binarify(num).chars.count - 1
end

def is_perfect_square?(num)
  return false if num < 1
  Math.sqrt(num) % 1 === 0
end

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

# p next_perfect_bit(33)#==39
# p next_perfect_bit(16)#==23

def prev_perfect_bit(base_ten_num, is_initial_recursion = true)
  return nil if base_ten_num < 1

  if is_initial_recursion || !is_perfect_bit?(base_ten_num)
    prev_num = base_ten_num - 1
    return prev_perfect_bit(prev_num, false)

  # cut out when hits a perfect bit that isn't the initial num
  elsif is_perfect_bit?(base_ten_num)
    return base_ten_num
  end
end

# p is_perfect_bit?(30000)
# p is_perfect_bit?(29999)
# p is_perfect_bit?(29998)
# p prev_perfect_bit(30000)#==29998
# p prev_perfect_bit(16)#==15

def next_perfect_square(num)
  return 1 if num < 1
  is_perfect_square?(num) ? next_perfect_square(num + 1) : Math.sqrt(num).ceil**2
end

def prev_perfect_square(num)
  return nil if num <= 1
  is_perfect_square?(num) ? prev_perfect_square(num - 1) : Math.sqrt(num).floor**2
end

def is_binary_base?(num)
  binarify(num).count('1') == 1
end

def next_binary_base(base_ten_num)
  2**(binarify(base_ten_num).to_s.length + 1)
end

def prev_binary_base(base_ten_num)
  return nil if base_ten_num < 0
  return 0 if base_ten_num < 1
  return base_ten_num - 1 if base_ten_num < 3
  2**(binarify(base_ten_num).length - 1)
end



def initial_base_ten_binary_base_in_range(num1, num2)
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

#how many 3-digit unique permutation sets exist with n possible nums
def uniq_permutations_count(slots_count, nums_count)
  uniq_perms_count = factorial(nums_count)/factorial(nums_count - slots_count)

  #uniq perm sets
  uniq_perms_count/factorial(slots_count)
end

def uniq_permutations_count_w_set_ones_and_zeroes(ones_count, zeroes_count)
  factorial(ones_count + zeroes_count)/(factorial(ones_count) * factorial(zeroes_count))
end

def count_perms_in_mid_range_noninclusive(num1, num2)
  min_binary_o_of_mag = binary_order_of_magnitude(initial_base_ten_binary_base_in_range(num1, num2))
  max_binary_o_of_mag = binary_order_of_magnitude(final_base_ten_binary_base_in_range(num1, num2))

  count = 0

  current_sq = 1
  current_o_of_mag = min_binary_o_of_mag

  while current_o_of_mag < max_binary_o_of_mag
    count += uniq_permutations_count((current_sq - 1), current_o_of_mag)

    next_sq = next_perfect_square(current_sq)

    if next_sq > max_binary_o_of_mag
      current_o_of_mag += 1
      current_sq = 1
    else
      current_sq = next_sq
    end
  end

  count
end

def count_zeroes_before_first_hanging_one(base_two_num)
  return 0 unless base_two_num.index('0')
  num_with_initial_ones_removed = base_two_num.slice((base_two_num.index('0'))..base_two_num.length)
  first_one_idx = num_with_initial_ones_removed.index('1')
  first_one_idx ? first_one_idx + 1 : 1
end

def dynamic_chunk(base_two_num)
  return '' unless base_two_num.index('0')

  #remove initial ones
  num = base_two_num.slice((base_two_num.index('0'))..base_two_num.length)

  first_one_idx = num.index('1')

  if first_one_idx

    # change first 1 to 0
    num[first_one_idx] = '0'

    #slice off first 0, because 1 will have shifted over there
    return num.slice(1..num.length)
  else
    return num
  end

end

def remove_index(arr, idx)
  arr.slice(0...idx) + arr.slice((idx + 1)..arr.length)
end

# given '110101' in a sorted list of permutations, how many perms precede it?
def prev_permutations_count(base_ten_num)
  base_two_num = binarify(base_ten_num)
  bits_arr = base_two_num.chars.slice(1..base_two_num.length)
  count = 0

  idx = 0

  until bits_arr.length <= 1
    if idx.to_s === bits_arr.first
      bits_arr.shift
      idx = 0
    else
      dynamic_chunk = bits_arr.slice((idx + 1)..bits_arr.length)
      ones_count = dynamic_chunk.count('1')
      zeroes_count = dynamic_chunk.count('0')

      # add to ones count if idx == 0, otherwise subtract
      # add to zeroes count if idx = 1, otherwise subtract
      if idx === 0
        ones_count += 1
        zeroes_count -= 1
      else
        ones_count -= 1
        zeroes_count += 1
      end

      count += uniq_permutations_count_w_set_ones_and_zeroes(ones_count, zeroes_count)
      idx += 1
    end
  end

  count
end

# p prev_permutations_count(53)# == 5
# p prev_permutations_count(60)# == 9
# p prev_permutations_count(99)# == 10
# p prev_permutations_count(120)# == 19
# p prev_permutations_count(267)# == 1

# num1 = 1099511000000
# num2 = 1099511627776

def count_perms_in_initial_range_noninclusive(num1, num2)
  #skip if there is no initial range
  return 0 if is_binary_base?(num1)
  count = 0
  #narrow down range to actually be the initial range, cutting off the mid and/or final range

  initial_range_start_num = is_perfect_bit?(num1) ? num1 : next_perfect_bit(num1)
  initial_range_end_num = next_binary_base(initial_range_start_num)

  return 0 if num2 <= initial_range_start_num || is_binary_base?(initial_range_start_num)

  pre_range_binary_base = prev_binary_base(initial_range_start_num)

  # debugger
  count = count_perms_in_mid_range_noninclusive(pre_range_binary_base, initial_range_end_num) - prev_permutations_count(initial_range_start_num)


  current_sq = prev_perfect_square(binary_ones_count(initial_range_start_num))
  current_o_of_mag = binary_order_of_magnitude(initial_range_start_num)



  while current_sq
    count -= uniq_permutations_count((current_sq - 1), current_o_of_mag)
    current_sq = prev_perfect_square(current_sq)
  end

  count
end

# p count_perms_in_initial_range_noninclusive(30000, 32768) #== 450
# num1 = 16384
# num2 = 30000
def count_perms_in_final_range_inclusive(num1, num2)
  initial_num_in_final_range = final_base_ten_binary_base_in_range(num1, num2)
  final_num_in_final_range = is_perfect_bit?(num2) ? num2 : prev_perfect_bit(num2)

  return 1 if initial_num_in_final_range === final_num_in_final_range
  next_binary_base_beyond_range = next_binary_base(num2)

  count = 0
# debugger
  #count number of perms that would exist if the range end was actually the next binary base
  count += count_perms_in_mid_range_noninclusive(initial_num_in_final_range, next_binary_base_beyond_range)

  #subtract perms in initial range of that
  count -= count_perms_in_initial_range_noninclusive(final_num_in_final_range, next_binary_base_beyond_range)

  count += 1 if final_num_in_final_range == num2
  count
end

def within_same_base_range?(num1, num2)
  (next_binary_base(num1) > num2) && (prev_binary_base(num2) < num1)
end

# p count_perms_in_final_range_inclusive(10, 33) #==
# p count_perms_in_final_range_inclusive(32, 33) #== 0
#
# p count_perms_in_final_range_inclusive(23,46) #==
# p count_perms_in_final_range_inclusive(32,46) #== 5

def perfect_bits(num1, num2)
  num1 = is_perfect_bit?(num1) ? num1 : next_perfect_bit(num1)
  num2 = is_perfect_bit?(num2) ? num2 : prev_perfect_bit(num2)
  count = 0

  if within_same_base_range?(num1, num2)
    prev_binary_base_before_range = prev_binary_base(num1)
    next_binary_base_beyond_range = next_binary_base(num2)

    #get count for full range
    count += count_perms_in_mid_range_noninclusive(prev_binary_base_before_range, next_binary_base_beyond_range)

    #subtract initial chunk before num1
    count -= count_perms_in_initial_range_noninclusive(prev_binary_base_before_range, num1)

    #subtract final chunk beyond num2
    count -= count_perms_in_final_range_inclusive(num2, next_binary_base_beyond_range)
  else
    count += count_perms_in_initial_range_noninclusive(num1, num2)
    count += count_perms_in_mid_range_noninclusive(num1, num2)
    count += count_perms_in_final_range_inclusive(num1, num2)
  end

  count
end

p '---initial range---'
p perfect_bits(10, 16) == 2
p perfect_bits(100, 128) == 10
p perfect_bits(1000, 1024) == 6
p perfect_bits(30000, 32768) == 651 => perfect_bits(30000, 32768)
p perfect_bits(1099511000000, 1099511627776) == 8657 => perfect_bits(1099511000000, 1099511627776)
# num1 = 1099511000000
# num2 = 1099511627776
# p 'initial', count_perms_in_initial_range_noninclusive(num1, num2)
# p 'mid', count_perms_in_mid_range_noninclusive(num1, num2)
# p 'final', count_perms_in_final_range_inclusive(num1, num2)
p perfect_bits(9223372036854770000, 9223372036854775808)==1

p '---mid range---'
p perfect_bits(2, 4) == 2
p perfect_bits(16, 32) == 6
p perfect_bits(128, 256) == 37
p perfect_bits(16384, 32768) == 3369
p perfect_bits(2, 9223372036854775808)==734248687150654971
p perfect_bits(128, 1099511627776)==103351068365

p '---final range, inclusive---'
p perfect_bits(4, 11) == 2 =>perfect_bits(4, 11)
p perfect_bits(16, 28) == 2 =>perfect_bits(16, 28)
p perfect_bits(32, 46) == 5 =>perfect_bits(32, 46)
p perfect_bits(16384, 30000) == 2719 =>perfect_bits(16384, 30000)
# num1 = 16384
# num2 = 30000
# p 'initial', count_perms_in_initial_range_noninclusive(num1, num2)
# p 'mid', count_perms_in_mid_range_noninclusive(num1, num2)
# p 'final', count_perms_in_final_range_inclusive(num1, num2)
p perfect_bits(9223372036854775807, 9223372036854775815)==2 =>perfect_bits(9223372036854775807, 9223372036854775815)

p '---initial+mid range, non-inclusive---'
p perfect_bits(10, 32) == 7
p perfect_bits(30, 64) == 13
p perfect_bits(100, 256) == 46

p '---middle of mid range--'
p '---mid+final range, inclusive---'
p perfect_bits(16, 39)==7
p perfect_bits(16, 40)==6
p perfect_bits(16, 43)==8
p perfect_bits(16, 44)==7
p perfect_bits(16, 45)==9
p perfect_bits(16, 46)==10
p perfect_bits(16, 47)==9
p perfect_bits(16, 140)==39

p '--when a === b---'
p perfect_bits(32768, 32768) == 1
p perfect_bits(32767, 32767) == 0
