# 단어뒤집기 문제 BOJ 9093번
N = int(input())

for i in range(N):
  string = input()
  string += ' '
  stack = []
  for j in string:
    if j != ' ':
      stack.append[j]
    else:
      while stack:
        print(stack.pop(), end='')
      print(' ', end='')
