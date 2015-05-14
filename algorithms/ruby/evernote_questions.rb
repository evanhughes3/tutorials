# https://evernote.com/careers/challenge.php

# Frequency Counting of Words / Top N words in a document.

# Given N terms, your task is to find the k most frequent terms from given N terms.

arr = ['Fee', 'Fee', 'Fee', 'Fi', 'Fo', 'Fum', 'Fi', ]

def count_of_words(array_of_words, top_number)
  count_hash = Hash.new(0)
  return_array = []
  array_of_words.each do |word|
    count_hash[word] += 1
  end
  sorted_nested_arrays = count_hash.sort_by do |word, occurences|
    occurences
  end

  sorted_nested_arrays.reverse[0..(top_number-1)].flatten.each
end

count_of_words(arr, 2) == ['Fee', 'Fi']


