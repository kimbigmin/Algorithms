
#괄호 9012번 문제

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
        if sum < 0:    #맨 처음부터 ')' 가 나오게 되면 이미 psv 에 만족하지 못하기 때문에 바로 'NO'를 출력하는 것이다.
            print('NO')
            break
        
    if sum > 0:
        print("NO")
    elif sum == 0:
        print("YES")