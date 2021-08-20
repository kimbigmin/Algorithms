
# 백준 1406번 에디터 문제 - 두 개의 stack 이용하여 문제해결

from sys import stdin

stack_l = list(stdin.readline().strip()) # 여러개의 숫자를 입력받을 때는 sys모듈의 stdin readline()을 사용하자. 
stack_r = []
n = int(input()) # 한 개만 입력받기에 input() 써도 된다. 

for _ in range(n):
    temp = stdin.readline() # 실행 명령어를 받는다. 
    if temp[0] == 'L':
        if len(stack_l) == 0:
            continue
        stack_r.append(stack_l.pop())
    elif temp[0] == 'D':
        if len(stack_r) == 0:
            continue
        stack_l.append(stack_r.pop())
    elif temp[0] == 'B':
        if len(stack_l) == 0:
            continue
        stack_l.pop()
    elif temp[0] == 'P':
        stack_l.append(temp[2])