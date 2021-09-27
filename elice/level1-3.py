


orderNum, time = map(int, input().split())
orders = list(map(int, input().split()))

count = 0
timeSum = 0

for order in orders:
    if time > timeSum:
        timeSum += order
        count += 1
        if time < timeSum:
            timeSum -= order
            count -= 1
            break
    elif time == timeSum:
        break
        

print(count)