# 무어의 법칙

# N 입력
n = int(input())

# 2의 n 제곱을 문자화한 후 각 자리수를 리스트로 변경
result = list(str(2**n))

# 각 요소를 int 로 바꾼 후 모두 더해준다. 
print(sum(map(int, result)))