class Array

  def my_each(&prc)
    self.length.times { |idx| prc.call(self[idx]) }
    self
  end

  def my_map(&prc)
    result = []
    self.my_each { |el| result << prc.call(el) }
    result
  end

  def my_select(&prc)
    result = []
    self.my_each do |el|
      result << el if prc.call(el)
    end
    result
  end

  def my_inject(acc = nil)
    acc ||= self.shift

    self.my_each do |el|
      acc = yield(acc, el)
    end

    acc
  end

  def my_reject
  end

  def my_any?
  end

  def my_all?
  end

  def my_flatten(res = [])
  end

  def my_zip(*args)
  end

  def my_rotate(num = 1)
  end

  def my_join(seperator = "")
  end

  def my_reverse
  end

  # ### Factors
#
# Write a method `factors(num)` that returns an array containing all the
# factors of a given number.

def factors(num)
end

# ### Substrings and Subwords
#
# Write a method, `substrings`, that will take a `String` and return an
# array containing each of its substrings. Don't repeat substrings.
# Example output: `substrings("cat") => ["c", "ca", "cat", "a", "at",
# "t"]`.
#
# Your `substrings` method returns many strings that are not true English
# words. Let's write a new method, `subwords`, which will call
# `substrings`, filtering it to return only valid words. To do this,
# `subwords` will accept both a string and a dictionary (an array of
# words).

def substrings(string)
end

def subwords(word, dictionary)
end

# ### Doubler
# Write a `doubler` method that takes an array of integers and returns an
# array with the original elements multiplied by two.

def doubler
end


end
