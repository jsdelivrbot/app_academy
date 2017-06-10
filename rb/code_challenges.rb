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
