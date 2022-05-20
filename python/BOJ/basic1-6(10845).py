
# 백준 10845번 큐(Queue)구현 문제

#나의 풀이 ----------------

from sys import stdin

n = int(input())
queue = []
result = []

for _ in range(n):
    
    command = stdin.readline().strip()  #strip() 굳이 안써도 됐다.

    if command[0:4] == 'push': # 애초에 입력할 때 split()를 사용한다면 슬라이스로 나누지 않아도 됐다. 
        queue.append(command[5:])  
    
    elif command == 'pop':
        if len(queue) != 0:
            result.append(queue[0])
            del queue[0]
        else:
            result.append(-1)
            continue
    
    elif command == 'size':
        result.append(len(queue))
    
    elif command == 'empty':
        if len(queue) != 0:
            result.append(0)
        else:
            result.append(1)

    elif command == "front":
        if len(queue) != 0:
            result.append(int(queue[0]))
        else:
            result.append(-1)

    
    elif command == "back":
        if len(queue) != 0:
            result.append(int(queue[-1]))
        else:
            result.append(-1)

#답 출력
for i in result: # 답 출력시 그냥 print()로 했어도 됐다. 
    print(i)



# 다른 사람 풀이 ------------------

from sys import stdin

N = int(stdin.readline())
Que = []
for i in range(N) :
    A = stdin.readline().split()

    if A[0] == 'push' : Que.append(A[1])

    elif A[0] == 'pop' : 
        if Que : print(Que.pop(0))
        else : print(-1)

    elif A[0] == 'size' : print(len(Que))

    elif A[0] == 'empty' :
        if len(Que) == 0 : print(1)
        else : print(0)
            
    elif A[0] == 'front' :
        if len(Que) == 0 : print(-1)
        else : print(Que[0])
    
    elif A[0] == 'back' :
        if len(Que) == 0 : print(-1)
        else : print(Que[-1])