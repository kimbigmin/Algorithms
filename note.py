
N = int(input())

for _ in range(N):
    ps = input()
    ps_list = list(ps)
    sum = 0

    for i in ps_list:
        if i == '(':
            sum += 1
        elif i == ')':
            sum -= 1
        if sum < 0:
            print('NO')
            break
        
    if sum > 0:
        print("NO")
    elif sum == 0:
        print("YES")