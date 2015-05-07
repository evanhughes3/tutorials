# Write the function is_value_present? that takes the root node of a binary search tree and an integer as arguments and returns true or false if the integer is in the tree.

class Node
  attr_accessor :value, :left_child, :right_child

  def initialize(value)
    @value = value
    @left_child = nil
    @right_child = nil
  end
end

# def make_BST(size)
#   nums = (0..size).to_a.shuffle
#   root = Node.new(nums.shift)
#   until nums.empty?
#     add_node(root, Node.new(nums.shift))
#   end
# end


# def add_node(root, node)
#   if node.value < root.value
#     if root.left_child == nil
#       root.left_child = node
#       return
#     else
#       add_node(root.left_child, node)
#     end
#   else
#     if root.right_child == nil
#       root.right_child = node
#       return
#     else
#       add_node(root.right_child, node)
#     end
#   end
#   return root
# end

root = Node.new(10)
root.left_child = Node.new(3)
root.right_child = Node.new(8)
root.left_child.left_child = Node.new(2)
root.left_child.right_child = Node.new(7)


def is_value_present(root, integer)
  return false if root == nil

  if root.value == integer
    return true
  elsif root.value > integer
    is_value_present(root.left_child, integer)
  else
    is_value_present(root.right_child, integer)
  end

end

p root

#TESTS
p is_value_present(root, 8)
p is_value_present(root, 7)
p is_value_present(root, 3)
p is_value_present(root, 10)