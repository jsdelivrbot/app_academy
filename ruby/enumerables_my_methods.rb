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

  def my_reject(&prc)
    result = []
    self.my_each do |el|
      result << el unless prc.call(el)
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

  def my_any?(&prc)
    self.my_each do |el|
      return true if prc.call(el)
    end
    false
  end

  def my_all?(&prc)
    self.each do |el|
      return false unless prc.call(el)
    end
    true
  end

  def my_flatten_v0(result = [])
    self.my_each do |el|
      if el.is_a?(Array)
        el.my_flatten(result)
      else
        result << el
      end
    end
    result
  end

  def my_flatten_v1
    result = []
    self.each do |el|
      if el.is_a?(Array)
        result += el.my_flatten_v1
      else
        result << el
      end
    end
    result
  end

  def my_zip(*args)
    result = []
    args = [self.dup] + args
    i = 0
    until i == self.length
      result << (args.map {|arr| arr[i] })
      i += 1
    end
    result
  end

  def my_rotate(num = 1)
    result = num >=0 ? self.dup : self.dup.reverse
    num.abs.times { result << result.shift }
    result= num >=0 ? result : result.reverse
  end

  def my_join(seperator = "")
    result = ""
    self.each_with_index do |el, idx|
      result += el
      result += seperator unless idx == self.length - 1
    end
    result
  end

  def my_reverse
    result = []
    (self.length - 1).downto(0) do |i|
      result << self[i]
    end
    result
  end

end
