# 골드바흐의 추측 


from prime import prime_list
# prime_list는 1부터 10000사이의 소수가 오름차순으로 저장된 리스트 입니다.

# 소수리스트 얻는 함수
def getPrimes(n):
    n = int(n)
    primes = []
    for i in prime_list:
        if i <= n:
            primes.append(i)
        else:
            break
    return primes


# 두 소수의 합 구하는 함수 
def getAddedPrimes(n):
    li = getPrimes(n)  # 소수리스트 얻는 함수 이용
    i = 0 # 리스트 첫번째값 포인트
    j = -1 # 리스트 마지막값 포인트
    arr = [] # 정답 리스트
    
    # 탐색시작 
    while li[j] >= li[i]:
        sum_value = li[j] + li[i]
        if n > sum_value: # 더한 값이 입력값보다 크기가 작으면 앞 포인터 오른쪽으로 이동
            i += 1 

        elif n < sum_value: # 더한 값이 입력값보다 크기가 크면 뒤 포인터 왼쪽으로 이동
            j += -1

        elif n == sum_value: # 더한 값이 입력값과 같고
            if li[i] != li[j]: # 두 값이 같지않다면 
                arr.append([li[i], li[j]])
                i += 1  # 차이가 더 작은 수를 찾기 위해 계속 탐색
                j -= 1  # 두개 모두 이동
            else:
                arr.append([li[i], li[j]]) # 두 값이 같으면 정답 리스트에 추가 후 반복중지
                break
            
    # 리스트 제거후 출력
    return ' '.join(map(str, arr[-1]))
    


# 정답 출력

evens = input().split() # 입력받기 TIL: .split() 는 리스트를 반환해낸다.  

for even in evens:
  even = int(even) 
  print(getAddedPrimes(even))