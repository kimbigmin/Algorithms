# 1874번 스택수열 문제
# 처음엔 이해 안갔지만, 하나씩 확인 해본 후 이해

n = int(input())
count = 0 # 오름차순
stack = [] # 숫자가 들어갈 스택 (1,2,3,4,5,6,7,8,9 순서로)
result = [] # 부호가 들어갈 스택
no_message=True

for i in range(0,n):
    x = int(input())

    while count < x:
      count += 1
      stack.append(count)
      result.append("+")

    if stack[-1]==x:
        stack.pop()
        result.append("-")
    else:
        no_message = False # 스택 구성이 안되면 False 로 변경 뒤 NO 출력
        break

if no_message==False:
    print("NO")
else:
    print("\n".join(result))

    