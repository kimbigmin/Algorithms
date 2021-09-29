# 일곱 난쟁이 - 브루트 포스 문제

list = [int(input()) for i in range(9)] # TIL: 입력한 값을 바로 리스트에 넣는 방법 

total = sum(list) 

# 브루트 포스 완전탐색 시작 (모든 원소에 대해 하나하나 직접 더하면서 비교)
for i in range(9):
  for j in range(i+1, 9):
    if 100 == total - (list[i] + list[j]):
      num1, num2 = list[i], list[j] # TIL: 두 가지 변수를 한번에 할당가능
      list.remove(num1) 
      list.remove(num2)
      list.sort()
      # 정답 출력
      for i in range(len(list)):
        print(list[i])
      break

  # 2명의 난쟁이를 제외시키면 9명 이하가 되므로 반복문 종료시킨다.
  if len(list) < 9:
    break