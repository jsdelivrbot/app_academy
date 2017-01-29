class Array
  def deep_dup
    self.map { |el| el.is_a?(Array) ? el.deep_dup : el }
  end
end

# Fibonacci
#
# Write a recursive and an iterative Fibonacci method. The method should
# take in an integer n and return the first n Fibonacci numbers in an
# array.
#
# You shouldn't have to pass any arrays between methods; you should be
# able to do this just passing a single argument for the number of
#   Fibonacci numbers requested.

  def recursive_fibonacci(n)
  end

  def iterative_fibonacci(n)
  end

# Array Subsets
#
# Write a method subsets that will return all subsets of an array.
#
# subsets([]) # => [[]]
# subsets([1]) # => [[], [1]]
# subsets([1, 2]) # => [[], [1], [2], [1, 2]]
# subsets([1, 2, 3])
# # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
# You can implement this as an Array method if you prefer.
#
# Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
#
# Those that do not contain 3 (all of these are subsets of [1, 2]).
# For every subset that does not contain 3, there is also a
# corresponding subset that is the same, except it also does contain 3.

def subsets
end

# Permutations


# Write a recursive method permutations(array) that calculates all the
# permutations of the given array. For an array of length n there are
# n! different permutations. So for an array with three elements we
# will have 3 * 2 * 1 = 6 different permutations.
#
# permutations([1, 2, 3]) # => [[1, 2, 3], [1, 3, 2],
#                         #     [2, 1, 3], [2, 3, 1],
#                         #     [3, 2, 1], [3, 1, 2]]
# You can use Ruby's built in Array#permutation method to get a better
# understanding of what you will be building.
#
# [1, 2, 3].permutation.to_a  # => [[1, 2, 3], [1, 3, 2],
#                             #     [2, 1, 3], [2, 3, 1],
#                             #     [3, 2, 1], [3, 1, 2]]

def permutations
end

# Binary Search
#
# The binary search algorithm begins by comparing the target value to
# the value of the middle element of the sorted array. If the target
# value is equal to the middle element's value, then the position is
# returned and the search is finished. If the target value is less than
# the middle element's value, then the search continues on the lower
# half of the array; or if the target value is greater than the middle
# element's value, then the search continues on the upper half of the
# array. This process continues, eliminating half of the elements, and
# comparing the target value to the value of the middle element of the
# remaining elements - until the target value is either found (and its
# associated element position is returned), or until the entire array
# has been searched (and "not found" is returned).
#
# Write a recursive binary search: bsearch(array, target). Note that
# binary search only works on sorted arrays. Make sure to return the
# location of the found object (or nil if not found!). Hint: you will
# probably want to use subarrays.
#
# This your first problem which is half a PITA to solve iteratively.
#
# Make sure that these test cases are working:
#
# bsearch([1, 2, 3], 1) # => 0
# bsearch([2, 3, 4, 5], 3) # => 1
# bsearch([2, 4, 6, 8, 10], 6) # => 2
# bsearch([1, 3, 4, 5, 9], 5) # => 3
# bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

def bsearch
end

# Make Change
#
# RubyQuiz: Make change.
#
# Here's a game plan for solving the problem:
#
# First, write a 'greedy' version called greedy_make_change:
#
# Take as many of the biggest coin as possible and add them to your
# result.
# Add to the result by recursively calling your method on the remaining
# amount, leaving out the biggest coin, until the remainder is zero.
# Once you have a working greedy version, talk with your partner about
# refactoring this to make_better_change. What's wrong with
# greedy_make_change?
#
# Consider the case of greedy_make_change(24, [10,7,1]). Because it
#   takes as many 10 pieces as possible, greedy_make_change misses the
#   correct answer of [10,7,7] (try it in pry).
#
# To make_better_change, we only take one coin at a time and never rule
# out denominations that we've already used. This allows each coin to be
# available each time we get a new remainder. By iterating over the
# denominations and continuing to search for the best change, we assure
# that we test for 'non-greedy' uses of each denomination.
#
# Discuss the following game plan and then work together to implement
# your new method:
#
# Iterate over each coin.
# Grab only one of that one coin and recursively call make_better_change
# on the remainder using coins less than or equal to the current coin.
# Add the change for the remainder to the single coin you originally
# grabbed to obtain a possible solution.
# Keep track of the best solution and return it at the end.
# N.B. Don't generate every possible permutation of coins and then
# compare them. Remember that a permutation is not the same thing as a
# combination - we will need to check every combination of coins that
# add up to our target, we just don't want to check the same combination
# in different orders. If you get stuck you can start by writing a
# solution that calculates and compares all of the permutations without
# storing them in an array. Then go back and refactor your solution so
# that it only calculates and compares all of the different combinations.
#
# Make sure you and your partner understand each line before moving on.
