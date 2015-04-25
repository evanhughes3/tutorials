# Reverse all letters of a word in a string, keeping the order the same.
# "hello there sir" === "olleh ereht ris"

def reverse_words(sentence)
  split_sentence = sentence.split(' ')
  reversed_sentence = ''
  split_sentence.each do |word|
    counter = word.length - 1
    until counter < 0
      reversed_sentence += word[counter]
      counter -= 1
    end
    reversed_sentence += ' '
  end
  reversed_sentence.strip
end

p reverse_words("hello there sir") == "olleh ereht ris"