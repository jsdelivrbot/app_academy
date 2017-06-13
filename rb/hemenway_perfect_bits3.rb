perfect_squares = [1,4,9,16]
require 'byebug'
def factorial(n)
  (1..n).inject(:*) || 1
end

#how many 3-digit unique permutation sets exist with n possible nums
def uniq_permutations_count(slots_count, n)
  debugger
  uniq_perms_count = factorial(n) - factorial(n - slots_count)
  uniq_perms_count/slots_count
end

p uniq_permutations_count(3,5)
