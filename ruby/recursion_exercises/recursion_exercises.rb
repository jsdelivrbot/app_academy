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

def make_change(amount, coins = [25, 10, 5, 1])
  return [amount] if coins.include?(amount)
  next_coin = best_coin(amount, coins) || largest_coin(amount, coins)
  [next_coin] + make_change((amount - next_coin), coins)
end

def best_coin(amount, coins = [25, 10, 5, 1])
  coins.each do |coin|
    return coin if amount % coin == 0 && coin != 1
  end
  nil
end

def largest_coin(amount, coins = [25, 10, 5, 1])
  coins.each do |coin|
    return coin if coin <= amount
  end
  nil
end
