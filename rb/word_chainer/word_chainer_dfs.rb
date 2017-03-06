require "byebug"
class WordChainer
  ALPHABET = ("a".."z").to_a

  attr_reader :dict, :goal, :start_word

  def initialize(start_word, goal, filename = 'dictionary.txt')
    @dict = File.readlines(filename).map(&:chomp).select do |word|
      word.length == start_word.length
    end
    @start_word = start_word
    @goal = goal
  end

  def play(current_word = @start_word, target = @goal, current_path = [])
    return current_path if current_word == target
    return nil if current_word != target && adjacent_words(current_word).empty?
    adj_words = adjacent_words(current_word)
    check_me = sort_by_best_match(adj_words) - current_path
    debugger
    check_me.each do |next_word|
      if play(next_word, target, current_path)
        return play(next_word, target, current_path)
      end
    end

    return "Try another set of words"
  end

  def sort_by_best_match(adj_words)
    adj_words.sort_by{|word| num_matching_letters(word, goal)}
  end

  def best_match(arr)
    return nil if arr.empty?
    best_count = num_matching_letters(arr[0], @goal)
    best_match = arr[0]
    arr.each do |test_word|
      current_count = num_matching_letters(test_word, @goal)
      if current_count > best_count
        best_count = current_count
        best_match = test_word
      end
    end
    best_match
  end

  def replace_letter(word, idx, letter)
    word[0...idx] + letter + word [(idx + 1)..-1]
  end

  private

  def adjacent_words(word)
    adj_words = []

    word.chars.each_with_index do |char, idx|
      ALPHABET.each do |letter|
        new_word = replace_letter(word, idx, letter)
        if @dict.include?(new_word) &&
          !adj_words.include?(new_word) &&
          word != new_word
          adj_words << new_word
        end
      end
    end
    adj_words
  end

  def num_matching_letters(word1, word2)
    counter = 0
    word1.chars.each_with_index do |char, idx|
      counter +=1 if char == word2[idx]
    end
    counter
  end


end
