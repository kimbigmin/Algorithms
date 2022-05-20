# 사탕 게임 - 브루트 포스 문제

# 가로 사탕 최대 개수 구하기    
def checkrow(arr): # TIL: 함수를 정의하고 풀면 코드가 더 깔끔해진다! 함수를 만들자. 
  maxNum = 1
  for i in range(0,n):
    cnt = 1     # TIL: current는 보통 cnt 라고 입력하는 듯하다. cnt는 최대값
    for j in range(1, n): 
      if (arr[i][j] == arr[i][j - 1]): # 다음 로우값이 같다면 cnt 최대값 +1
        cnt += 1
        maxNum = max(maxNum, cnt) # 
      else:
        cnt = 1
  return maxNum


# 세로 사탕 최대 개수 구하기
def checkcol(arr):
  maxNum = 1
  for j in range(0, n):
    cnt = 1
    for i in range(1, n):
      if (arr[i][j] == arr[i - 1][j]):
        cnt += 1
        maxNum = max(maxNum, cnt)
      else:
        cnt = 1
  return maxNum

# N x N 입력
n = int(input())

# 입력값 2차원 배열에 넣기
arr = [[0 for _ in range(n)] for _ in range(n)]
for i in range(0, n):
  a = list(input())
  for j in range(0, n):
    arr[i][j] = a[j]

arr2 = arr
result = 0  # 결과값

# 완전 탐색 시작
# 가로로 사탕 swap 
for i in range(0,n):
  for j in range(0, n-1):
    if (arr2[i][j] != arr2[i][j + 1]):
      arr2[i][j], arr2[i][j + 1] = arr2[i][j + 1], arr2[i][j] # swap
      a = checkrow(arr2) # 가로 사탕개수 비교
      result = a if a > result else result # max값 얻기
      a = checkcol(arr2) # 세로 사탕개수 비교
      result = a if a > result else result # max값 얻기
      arr2[i][j], arr2[i][j + 1] = arr2[i][j + 1], arr2[i][j] # 확인 후 swap 원상복구

# 세로로 사탕 swap 
for i in range(0, n-1):
  for j in range(0,n):
    if (arr2[i][j] != arr2[i+1][j]):
      arr2[i][j], arr2[i + 1][j] = arr2[i + 1][j], arr2[i][j] # swap
      a = checkrow(arr2) # 가로 사탕개수 비교
      result = a if a > result else result # max 값 얻기
      a = checkcol(arr2) # 세로 사탕개수 비교
      result = a if a > result else result # max 값 얻기
      arr2[i][j], arr2[i + 1][j] = arr2[i + 1][j], arr2[i][j] # swap 원상복구


print(result) 