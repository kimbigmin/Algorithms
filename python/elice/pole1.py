# 엘리스 SW - 가로등 1 (유클리드 호제법 여러 수 최대공약수 구하기)


arr = list(map(int, input().split())) #공백문자로 구분하여 리스트 입력받기

# 유클리드호제법 사용하여 최대공약수 구하는 함수 
def GCDofTwoNumbers(a, b): #GCDofTwoNumbers라는 이름의 함수와 매개변수 a, b 정의하기
    while b != 0 : #b가 0이 아닌 동안 반복
        a, b = b, a%b #a에 b를, b에 a와 b를 나눈 나머지를 교환하여 저장(스왑)
    return a #반환되는 a가 두 수의 최대공약수

# 최대공약수 구하기
GCD = arr[0] #arr 리스트의 첫 번째 항목(0번 방)을 GCDarr에 저장
for i in range(len(arr)): # i가 0부터 리스트 arr의 길이만큼 반복
    GCD = GCDofTwoNumbers(GCD, arr[i]) # GCDarr에 GCDarr과 arr[i]의 최대공약수를 저장

# 필요한 가로등 개수 구하기
lamp = []

# 가장 뒤에 있는 가로등 길이만큼 반복문 돌린다.
for i in range(arr[-1]+1):
    if i % GCD == 0: # 만약 최대공약수로 나눠지는 수라면 
        lamp.append(i) # 같은 간격을 위해 필요한 가로등으로 lamp 리스트에 추가해준다.


print(len(lamp)-len(arr)) # 필요한 가로등을 모두 포함한 lamp 리스트 수와 현재 가로등 수를 빼주면 필요한 가로등 수가 나온다. 