require 'byebug'
require 'base_helpers'

def count_perms_in_mid_range_noninclusive(num1, num2)
  return 0 unless has_min_two_binary_bases_in_range?(num1, num2)
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


def count_perms_in_initial_range_noninclusive(num1, num2)
  return 0 if is_binary_base?(num1) || num1 == num2

  initial_range_start_num = is_perfect_bit?(num1) ? num1 : next_perfect_bit(num1)
  initial_range_end_num = next_binary_base(initial_range_start_num)

  return 0 unless is_in_inclusive_range?(initial_range_start_num, [num1, num2])
  return 0 unless is_in_inclusive_range?(initial_range_end_num, [num1, num2])
  return 0 if is_binary_base?(initial_range_start_num)

  pre_range_binary_base = prev_binary_base(initial_range_start_num)

  count = count_perms_in_mid_range_noninclusive(pre_range_binary_base, initial_range_end_num)
  #39count == 3368
  #40count == 3368

  count -= prev_permutations_count_broken_set(initial_range_start_num)
  #39 count == 0
  #40 count == 3304

  # count -= prev_permutations_count(num1) if initial_range_start_num < num1
# # debugger
# #39count == 3368
# #40count == 3368
#   initial_sq = binary_ones_count(initial_range_start_num)
#   #39initial_sq == 3368
#   #40initial_sq == 3368
#
#   dynamic_chunk = dynamic_chunk(initial_range_start_num)
#   dynamic_slots_count = dynamic_chunk.length
#   highest_possible_sq = is_perfect_square?(dynamic_slots_count + 1) ? dynamic_slots_count + 1 : prev_perfect_square(dynamic_slots_count + 1)
#   current_sq = highest_possible_sq
#   # current_o_of_mag = binary_order_of_magnitude(initial_range_start_num)
#
#   while current_sq
#     # debugger if num1 == 16639
#     # debugger if num1 == 16640
#     if current_sq == 1 || highest_possible_sq == 4
#       is_incomplete_perm_set = false
#     else
#       current_sq_end_base_two_num = static_chunk(initial_range_start_num)
#       current_sq_end_base_two_num += ('1' * (current_sq - 1))
#       if (binarify(initial_range_start_num).length - current_sq_end_base_two_num.length) < 0
#         is_incomplete_perm_set = current_sq > initial_sq
#       else
#         current_sq_end_base_two_num += ('0' * (binarify(initial_range_start_num).length - current_sq_end_base_two_num.length))
#         is_incomplete_perm_set = (current_sq > initial_sq) || current_sq_end_base_two_num > binarify(initial_range_start_num)# || (initial_range_start_num >=16639 && current_sq >=4)
#       end
#     end
#
#
#     # perm_exists_beyond_range = biggest_perm(current_sq, initial_range_start_num) > initial_range_start_num
#     # debugger if num1 == 16640
#
#     if is_incomplete_perm_set
#       count -= prev_permutations_count(current_sq_end_base_two_num)
#     elsif current_sq != initial_sq
#       # cut off the initial 1 and first 0's, so that the 'dynamic_chunk' that we're working with will be < initial_range_start_num
#       ones_count = current_sq - 1
#       zeroes_count = dynamic_chunk.length - 1
#       count -= uniq_permutations_count_w_set_ones_and_zeroes(ones_count, zeroes_count)
#     end
#     current_sq = prev_perfect_square(current_sq)
#
#     # dynamic_chunk = dynamic_chunk(initial_range_start_num)
#     # ones_count = current_sq
#     # zeroes_count = dynamic_chunk.length - current_sq
#     # # need to pass in the first '0'
#     # count -= uniq_permutations_count_w_set_ones_and_zeroes(ones_count, zeroes_count)
#     # current_sq = prev_perfect_square(current_sq)
  # end

  count
end

def count_perms_in_final_range_inclusive(num1, num2)
  return 0 if no_binary_bases_in_range?(num1, num2)
  return 1 if is_binary_base?(num2)

  initial_num_in_final_range = final_base_ten_binary_base_in_range(num1, num2)
  final_num_in_final_range = is_perfect_bit?(num2) ? num2 : prev_perfect_bit(num2)

  return 1 if initial_num_in_final_range === final_num_in_final_range
  next_binary_base_beyond_range = next_binary_base(num2)

  count = 0
  # debugger if num1 == 16384 && num2 == 16639

  count += 1 if is_perfect_bit?(final_num_in_final_range)
  #count number of perms that would exist if the range end was actually the next binary base
  count += count_perms_in_mid_range_noninclusive(initial_num_in_final_range, next_binary_base_beyond_range)
  #subtract perms in initial range of that
  count -= count_perms_in_initial_range_noninclusive(final_num_in_final_range, next_binary_base_beyond_range)

  count
end
