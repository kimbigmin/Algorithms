# 단백질 바 문제

# 단백질 g 입력
protein = int(input())

# 큐브 리스트 초기화
cubes = [250, 40, 10]

# 답안 리스트 초기화
answer = []

# 그리디 알고리즘 실행
for cube in cubes:
    count = protein // cube
    if count == 0:
        answer.append(0) 
    else:
        answer.append(count)
    
    protein %= cube

# 전체 answer 리스트의 합이 0이 아니고, protein이 빠짐없이 채워졌다면 결과값 출력
if (sum(answer) != 0) and (protein == 0):
    answer.reverse()
    print(" ".join(map(str, answer)))
else:
    print(-1) # 나머지가 남아 생성할 수 없으면 -1 출력 