class Array

  def bubble_sort(&prc)
    prc ||= Proc.new {|x,y| x<=>y}
    arr = self.dup
    sorted = false
    until sorted
      sorted = true
      (arr.length - 1).times do |i1|
        i2 = i1 + 1
        if prc.call(arr[i1], arr[i2]) == 1
          arr[i1], arr[i2] = arr[i2], arr[i1]
          sorted = false
        end
      end
    end
    arr
  end

  def merge_sort
    return self if self.length <= 1
    result = []
    midx = self.length / 2
    left = self.take(midx).merge_sort
    right = self.drop(midx).merge_sort

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
    return self if self.length <= 1
    pivot = [self.first]
    left = self[1..-1].select { |el| el < self.first }
    right = self[1..-1].select { |el| el >= self.first }

    left.quick_sort + pivot + right.quick_sort
  end
end

# class Array
#
#   def bubble_sort(&prc)
#     prc ||= Proc.new {|x,y| x<=>y}
#     arr = self.dup
#     sorted = false
#     until sorted
#       sorted = true
#       (arr.length - 1).times do |i1|
#         i2 = i1 + 1
#         if prc.call(arr[i1], arr[i2]) == 1
#           arr[i1], arr[i2] = arr[i2], arr[i1]
#           sorted = false
#         end
#       end
#     end
#     arr
#   end
#
#   def merge_sort
#     return self if self.length <= 1
#     result = []
#     midx = self.length / 2
#     left = self.take(midx).merge_sort
#     right = self.drop(midx).merge_sort
#
#     left.merge(right)
#   end
#
#   def merge(arr2)
#     result = []
#     arr1 = self.dup
#     until arr1.empty? || arr2.empty?
#       result << (arr1[0] < arr2[0] ? arr1.shift : arr2.shift)
#     end
#     result + arr1 + arr2
#   end
#
#   def quick_sort
#     return self if self.length <= 1
#     pivot = [self.first]
#     left = self[1..-1].select { |el| el < self.first }
#     right = self[1..-1].select { |el| el >= self.first }
#
#     left.quick_sort + pivot + right.quick_sort
#   end
# end
