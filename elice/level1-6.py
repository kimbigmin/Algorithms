# 숫자 나라 특허 전쟁

# 숫자 입력
n = int(input())

# 정답리스트 초기화
answer = []


for i in range(1, n):
    if i%3 == 0: # 3으로 나눠지면 리스트에 추가
        answer.append(i)
    elif i%5 == 0: # 5로 나눠지면 리스트에 추가 
        answer.append(i)
        
print(sum(answer)) # 리스트의 모든 원소 합 출력