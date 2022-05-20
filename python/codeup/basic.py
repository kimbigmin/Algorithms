def solution(array):
  
  count_list = []
  result = []


  for i in array:

    if i in count_list:
      continue
    count_list.append(i)

    if array.count(i) != 1:
      result.append(array.count(i))
    
    else:
      continue

  if len(result) == 0:
    result.append(-1)

  return result


arr = [2,3]




print(solution(arr))


