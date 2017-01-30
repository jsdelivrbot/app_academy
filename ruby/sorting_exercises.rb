class Array

  def bubble_sort(&prc)
    prc ||= Proc.new{|x,y| x<=>y}
    arr = self.dup
    sorted = false
    until sorted
      sorted = true
      (arr.length - 1).times do |i1|
        i2 = i1 + 1
        if prc.call(arr[i1], arr[i2]) == 1
          sorted = false
          arr[i1], arr[i2] = arr[i2], arr[i1]
        end
      end
    end
    arr
  end

  def merge_sort
    return self if self.length <=1
    current = self.dup

    midx = current.length/2
    left = current.take(midx).merge_sort
    right = current.drop(midx).merge_sort

    left.merge(right)
  end

  def merge(arr2)
    result = []
    until self.empty? || arr2.empty?
      result << (self[0] < arr2[0] ? self.shift : arr2.shift)
    end
    result + self + arr2
  end

  def quick_sort
    def quick_sort
      return self if self.length <= 1

      pivot = self.first
      left = []
      right = []

      self[1..-1].each { |el| el < pivot ? left << el : right << el }

      left.quick_sort + [pivot] + right.quick_sort

    end
  end
end
