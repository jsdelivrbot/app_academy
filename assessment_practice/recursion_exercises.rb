def recursive_fibonacci(n)
  return [1, 1].take(n) if n <= 2
  previous = recursive_fibonacci(n - 1)
  previous << (previous[-2] + previous[-1])
end

def iterative_fibonacci(n)
  result = []
  n.times { |i| result << (i <= 1 ? 1 : result[-2] + result[-1]) }
  result
end

class Array
  def deep_dup
    self.map { |el| el.is_a?(Array) ? el.deep_dup : el }
  end

  def permutations
    return [self] if self.length <= 1
    result = []

    self.each_with_index do |el,i|
      prev_perms = (self.take(i) + self.drop(i+1)).permutations

      prev_perms.each do |perm|
        result << perm + [el]
      end
    end

    result
  end

  def subsets
    return [[]] if self.length < 1
    result = []

    self.length.times do |i|
      result += (self.take(i) + self.drop(i+1)).subsets
      result << self
    end
    result.uniq
  end

  def binary_search(rollover = 0, target)
    return nil if self.empty?
    return nil if self.length == 1 && self[0] != target

    midx = self.length / 2
    return midx + rollover if self[midx] == target


    if target < self[midx]
      self.take(midx).binary_search(0, target)
    else
      self.drop(midx).binary_search(midx + rollover, target)
    end

  end

end

def make_change(amount, coins = [25, 10, 5, 1])
  return [amount] if coins.include?(amount)
  change = []
  coins.each do |coin|
    if coin < amount
  end
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
