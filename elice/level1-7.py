# 데이터 개수 N 입력
n = int(input())
# 모든 데이터 합 total 초기화
total = 0
# 10자리 수 체크 암호 리스트 초기화
answer = []

# 모든 데이터 더하기
for _ in range(n):
    data = int(input())
    total += data

# 더한 숫자 리스트화 
totalList = list(str(total)) # list() 메소드는 str에서만 가능하므로 int는 변환 해줘야 함

# 리스트화한 숫자 중 10자리 추출
for i in range(10):
    answer.append(totalList[i])

print("".join(answer))