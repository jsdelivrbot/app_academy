class Array
  def my_each
    i = 0
    until i == self.length
      yield(self[i])
      i += 1
    end
    self
  end

  def my_select
    res = []
    self.my_each do |el|
      res << el if yield(el)
    end
    res
  end

  def my_reject
    res = []
    self.my_each do |el|
      res << el unless yield(el)
    end
    res
  end

  def my_any?
    self.my_each do |el|
      return true if yield(el)
    end
    false
  end

  def my_all?
    all = true
    self.my_each do |el|
      all = false unless yield(el)
    end
    all
  end

  def my_flatten(res = [])
    self.my_each do |el|
      if el.is_a?(Array)
        el.my_flatten(res)
      else
        res << el
      end
    end
    res
  end

  def my_zip(*args)
    res = []
    self.length.times do |i|
      res << Array.new(args.length + 1)
    end
    args = [self.dup] + args

    args.each_with_index do |array, args_idx|
      array.each_with_index do |el, array_idx|
        res[array_idx][args_idx] = el if res[array_idx]
      end
    end
  res
  end

  def my_rotate(num = 1)
    res = num > 0 ? self.dup : self.dup.reverse
    num.abs.times do
      res << res.shift
    end
    res = num > 0 ? res : res.reverse
  end

  def my_join(seperator = "")
    thing = self.dup
    last_el = thing.pop
    string = thing.inject(""){|string, el| string + el + seperator}
    string + last_el
  end

end
