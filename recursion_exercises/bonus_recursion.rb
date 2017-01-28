#Problem 1: You have array of integers. Write a recursive solution to find
#the sum of the integers.

def sum_recur(array)
  return array.first if array.length <= 1
   array.shift + sum_recur(array)
end


#Problem 2: You have array of integers. Write a recursive solution to
#determine whether or not the array contains a specific value.

def my_includes?(array, target)
  return true if array.first == target
  return false if array.length <=1

  mid_idx = array.length/2
  left_array = array.take(mid_idx)
  right_array = array.drop(mid_idx)
  my_includes?(left_array, target) || my_includes?(right_array, target)
end


#Problem 3: You have an unsorted array of integers. Write a recursive
#solution to count the number of occurrences of a specific value.

def num_occur(array, target)
  count = array.first == target ? 1 : 0
  return count if array.length <= 1
  count + num_occur(array.drop(1), target)
end


#Problem 4: You have array of integers. Write a recursive solution to
#determine whether or not two adjacent elements of the array add to 12.

def add_to_twelve?(array)
  return false if array.length < 2
  return true if array[0] + array[1] == 12

  add_to_twelve?(array.drop(1))
end


#Problem 5: You have array of integers. Write a recursive solution to
#determine if the array is sorted.

def sorted?(arr)
  return arr[0] <= arr[1] if arr.length <= 2
  arr[0] <= arr[1] && sorted?(arr.drop(1))
end


#Problem 6: Write the code to give the value of a number after it is
#reversed. Must use recursion. (Don't use any #reverse methods!)
# reverse(12345).should == 54321

def reverse(string)
  return string if string.length <= 1
  string[-1] + reverse(string.chop) 
end
