# Question: Sort an array using insert sort algorithm.  Sort should be destructive.

# Input: Array
# Output: Sorted Array

# Steps:

# 1. Start at second element in array
# 2. Compare to first element, and if it's smaller, switch it.
# 3. Move on to third element, compare the second element, if smaller, switch it.
# 4. Check the new second element, compare it to the first, if it's smaller, switch it
# repeat until sorted...

# [4,7,1,2]

def insert_sort(nums)
  nums.each_with_index do |num, index|
    next if index == 0 #because we want to start at 1
    value = num
    previous_index = index - 1 #points to element BEFORE current element
    while previous_index >= 0
      if value < nums[previous_index]
        nums[previous_index+1] = nums[previous_index]
        nums[previous_index] = value
        previous_index = previous_index - 1
      else
        break
      end
    end
  end
end


p insert_sort([4,7,1,2]) == [1,2,4,7]
p insert_sort([1,2,11,6,1,]) == [1,1,2,6,11]