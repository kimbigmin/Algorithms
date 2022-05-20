# 도도새의 업무일지 문제 


# 자릿수 n을 입력
n = int(input())
# 각 평균값을 입력
arr = list(map(int, input().split()))

# 결과값 리스트 생성 및 첫번째 원소는 평균값이나 origin 값이 같으므로 미리 넣어준다. 
result = []
result.append(arr[0])

# origin 값 구하기 
for i in range(1, n):
    origin_value = (arr[i]*(i+1)) - sum(result)
    result.append(origin_value)

# origin 리스트 join 하기 (join 은 문자열 리스트에서만 사용이 가능하므로 숫자 리스트는 map()함수를 통해 문자열로 변경해줘야한다. )
print(" ".join(map(str, result)))