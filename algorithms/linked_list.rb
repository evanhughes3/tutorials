class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node=nil)
    @value = value
    @next_node = next_node
  end

end



class LinkedList
  attr_accessor :head

  def initialize(head=nil)
    @head = head
  end

  # def push(node_to_add)
  #   if head.nil?
  #     head = node_to_add
  #   else
  #     current_node = head
  #       while current_node.next_node != nil
  #         current_node = current_node.next_node
  #       end
  #     current_node.next_node = node_to_add
  #   end
  # end

  def find(target)
    current_node = head

    while current_node
      return current_node if current_node.value == target
      current_node = current_node.next_node
    end
    nil
  end

end


# irb:

# my_list2 = LinkedList.new

# irb(main):002:0> node_1 = Node.new(1)
#=> #<Node:0x007faba1b607c0 @value=1, @next_node=nil>

# node_2 = Node.new(2)
# => #<Node:0x007faba1bab450 @value=2, @next_node=nil>

# irb(main):013:0> node_1.next_node = node_2
# => #<Node:0x007faba1bab450 @value=2, @next_node=nil>

# irb(main):014:0> node_1
# => #<Node:0x007faba1b607c0 @value=1, @next_node=#<Node:0x007faba1bab450 @value=2, @next_node=nil>>

# irb(main):015:0> node_3 = Node.new(3)
# => #<Node:0x007faba1bb51f8 @value=3, @next_node=nil>

# irb(main):016:0> node_2.next_node = node_3
# => #<Node:0x007faba1bb51f8 @value=3, @next_node=nil>

# irb(main):020:0> my_list2.head
# => nil

# irb(main):021:0> my_list2.head = node_1
# => #<Node:0x007faba1b607c0 @value=1, @next_node=#<Node:0x007faba1bab450 @value=2, @next_node=#<Node:0x007faba1bb51f8 @value=3, @next_node=nil>>>

# irb(main):024:0> my_list2.find(3)
# => #<Node:0x007faba1bb51f8 @value=3, @next_node=nil>

# irb(main):025:0> my_list2.find(2)
# => #<Node:0x007faba1bab450 @value=2, @next_node=#<Node:0x007faba1bb51f8 @value=3, @next_node=nil>>