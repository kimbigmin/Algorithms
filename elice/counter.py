# 마트 계산대 (이분탐색 문제)

# 수용가능 인원 구하는 함수
def getAcceptable(time, arr):
    peopleNum = 0
    for i in arr:
        peopleNum += time // i

    return peopleNum



n = int(input()) # 고객 수 입력
counters = list(map(int, input().split())) # 각 카운터 시간입력
minTime = min(counters) * n # 소요시간이 가장 작은 카운터에 고객수를 곱한다.
result = int((0 + minTime) / 2) # 이진탐색을 위한 기준시간이자 최소값 설정

acceptedPeople = getAcceptable(result, counters) # 시간에 대한 수용가능 인원 구하기

# 이분탐색 시작
while n < acceptedPeople: # 고객수보다 시간대비 수용가능 인원이 더 많다면 
    result -= 1 # 시간을 줄이고 
    acceptedPeople = getAcceptable(result, counters) # 수용가능 인원을 고객수와 같거나 더 작을 때까지 다시 구한다.

if n > acceptedPeople: # 위 반복문을 통해 고객수가 수용가능 인원보다 더 많아졌다면 
    while n > acceptedPeople: # 다시 수용가능 인원이 더 많아질때까지 소요시간(최소값)을 더 해준다.
        result += 1
        acceptedPeople = getAcceptable(result, counters)
        
    print(result) # 수용가능인원이 더 많아지면 해당 최고시간을 결과값으로 반환해준다.

elif n == acceptedPeople: # 위 반복문을 통해 고객수가 수용가능 인원과 같아졌다면 
    print(result)   # 계산에 필요한 최소시간 결과값을 반환해준다. 