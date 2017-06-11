# 1A
# Write a method, digital_root(num). It should sum the digits of a positive integer. If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating until there is only one digit in the result, called the "digital root". Do not use string conversion within your method.

def digital_root(num)
  return num if num / 10 == 0
  return (num % 10) + digital_root(num / 10)
end

p digital_root(1) == 1
p digital_root(12) == 3
p digital_root(123) == 6
p digital_root(123456) == 21

# Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet. Assume lowercase and no punctuation. Preserve spaces.

def caesar_cipher(str, shift)
  alphabet = ("a".."z").to_a
  result = ''

  str.chars.to_a.each do |char|
    if char == ' '
      result.concat(' ')
    else
      new_index = alphabet.to_a.index(char) + shift
      result += alphabet[new_index % alphabet.length]
    end
  end

  result
end

p caesar_cipher('abc', 1) == 'bcd'
p caesar_cipher('abc', 3) == 'def'
p caesar_cipher('abc', 26) == 'abc'
p caesar_cipher('abc', -2) == 'yza'
p caesar_cipher('abc def', 1) == 'bcd efg'

#1b
# Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring. A substring is defined as any consecutive slice of letters from another string.

def longest_common_substring(str1, str2)
  long_string = str1.length > str2.length ? str1 : str2
  short_string = str1.length > str2.length ? str2 : str1
  longest_substr = ''

  short_string.length.times do |start_idx|
    short_string.length.times do |end_idx|
      if start_idx < end_idx
        substr = short_string.slice(start_idx, end_idx)
        if long_string.match(substr) && substr.length > longest_substr.length
          longest_substr = substr
        end
      end
    end
  end

  longest_substr
end


p longest_common_substring('asdf sdfg dfgh', 'fgdf ') == 'df '
p longest_common_substring('asdf sdfg dfgh', 'fg df ') == 'fg df'

# Write a function that takes an array of integers and returns their sum. Use recursion.

def sum_rec(arr)
  return 0 if arr.empty?
  return arr[0] + sum_rec(arr.drop(1))
end

p sum_rec([1,2,3]) == 6
p sum_rec([1]) == 1
p sum_rec([]) == 0
p sum_rec([-1,2,3]) == 4
