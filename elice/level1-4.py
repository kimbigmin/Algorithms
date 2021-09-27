# 생수통, 뚜껑 리스트 초기화
buckets = []
lids = []

# 생수통 입력받기
for _ in range(3):
    bucket = int(input())
    buckets.append(bucket)

# 뚜껑 입력받기
for _ in range(2):
    lid = int(input())
    lids.append(lid)

# 최소값 출력 
answer = min(buckets) + min(lids) + 10


print(answer)