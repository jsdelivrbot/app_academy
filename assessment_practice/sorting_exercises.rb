class Array

  def bubble_sort!
    sorted = false

    until sorted
      sorted = true

      (self.length - 1).times do |i1|
        i2 = i1 + 1
        if self[i1] > self[i2]
          sorted = false
          self[i1], self[i2] = self[i2], self[i1]
        end
      end
    end

    self
  end

  def bubble_sort(&prc)
    prc ||= Proc.new{ |num1, num2| num1 <=> num2 }
    sorted = false
    result = self.dup

    until sorted
      sorted = true
      (self.length - 1).times do |i1|
        i2 = i1 + 1
        unless prc.call(result[i1], result[i2]) == -1
          sorted = false
          result[i1], result[i2] = result[i2], result[i1]
        end
      end
    end

    result
  end

  def merge_sort
    return [] if self.length < 1
    return self if self.length == 1

    mid_idx = self.length/2
    left = self.take(mid_idx).merge_sort
    right = self.drop(mid_idx).merge_sort

    left.merge(right)
  end

  def merge(arr2)
    result = []
    arr1 = self.dup
    until arr1.empty? || arr2.empty?
      result << (arr1[0] < arr2[0] ? arr1.shift : arr2.shift)
    end
    result + arr1 + arr2
  end

  def quick_sort
  end
end
