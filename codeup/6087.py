#6087


a, d, n = map(int, input().split())

answer = a + (n-1)*d

print(answer)






#6088

a, r, n = map(int, input().split())

answer = a*r**(n-1)

print(answer)




#6089

a, m, d, n = map(int, input().split())

for i in range(n-1):
  answer = a*m+d
  a = answer

print(a)




#6091 최소공배수 구현방법

a, b, c = map(int, input().split())

d = 1 

while d%a != 0 or d%b != 0 or d%c != 0:
  d += 1

print(d)




#6092 이상한 출석번호 부르기 - 
n = int(input())

call_number = list(map(int, input().split()))

array = [0]*23

for i in call_number:
  array[i-1] += 1

for i in array:
  print(i, end=' ')





#6093 이상한 출석번호 부르기 2

n = int(input())

call_numbers = list(map(int, input().split()))

r_call_numbers = []

for i in range(1, n+1):
  r_call_numbers.append(call_numbers[-i])

for number in r_call_numbers:
  print(number, end=' ')

#이렇게도 가능 더 간결한 버전
for i in range(n-1, -1, -1) :   
  print(a[i], end=' ')



#6094 이상한 출석번호 부르기 3
#내 풀이
n = int(input())

call_num = list(map(int, input().split()))

answer = sorted(call_num)

print(answer[0])


#답안지 풀이
n = int(input())
a = input().split()

for i in range(n) :
  a[i] = int(a[i])

min = a[0]
for i in range(0, n) :
  if a[i] < min :
    min = a[i]

print(min)




#6095

n = int(input())

#바둑판 초기화
d = []

for i in range(20):
  d.append([])
  for j in range(20):
    d[i].append(0)
    
#바둑판 흰돌 놓기
for i in range(n):
  x, y = input().split()
  d[int(x)][int(y)] = 1

#바둑판 출력하기
for i in range(1, 20):
  for j in range(1, 20):
    print(d[i][j], end= ' ')
  print()






#6097 설탕과자 뽑기

#격차칸 설정
h, w = map(int, input().split())


#격자칸 초기화
arr = []

for i in range(h):
  arr.append([])
  for j in range(w):
    arr[i].append(0)


#막대 개수 설정

n = int(input())

#막대 그리기 과정

for i in range(n):
  l, d, x, y = input().split()
  arr[int(x)-1][int(y)-1] = 1
  for j in range(1,int(l)):
    if int(d) == 0:
      arr[int(x)-1][int(y)-1 + j] = 1
    else:
      arr[int(x)-1 + j][int(y)-1] = 1
  

#격자칸 출력
for i in arr:
  for j in range(int(w)):
    print(i[j], end=' ')
  print()





#6098 성실한 개미 

#미로상자 초기화
d = []

for i in range(10):
  a = list(map(int, input().split())) # TIL 적기 
  d.append(a)

#개미 위치 추적

i = 1
j = 1 

while True:
  
  if d[i][j+1] != 1:
  
    if d[i][j+1] == 0:
      d[i][j] = 9
      j += 1
    
    elif d[i][j+1] == 2:
      d[i][j] = 9
      d[i][j+1] = 9
      break
  
  elif d[i][j+1] == 1:
    
    if d[i+1][j] != 1:
      
      if d[i+1][j] == 0:
        d[i][j] = 9
        i += 1

      elif d[i+1][j] == 2:
        d[i][j] = 9
        d[i+1][j] = 9
        break
    else:
      d[i][j] = 9
      break


for i in d:
  for j in i:
    print(j, end=' ')  #TIL 작성 이차원배열 원소로 출력하기
  print()