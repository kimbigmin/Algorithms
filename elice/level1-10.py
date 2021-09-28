# 더할 두 수를 입력받는다.
n = int(input())

# 문자열로 변경한다.
n = str(n)

# n에 10이 포함되어있지 않으면 -1을 출력하는 find()메서드를 사용한다.
if n.find('10') == -1:
    not10_li = list(n)   # 포함되있지 않으므로 리스트로 변경후 모두 더해준다.
    print(sum(map(int, not10_li)))
# n에 10이 포함되어 있을경우 split 로 10과 나머지 숫자를 나눠준다. 
else: 
    is10_li = n.split('10')
    result_li = list(filter(None, is10_li)) # filter() 메서드를 사용하여 split 후 남은 '' 빈 문자열을 리스트에서 없애준다. 
    if sum(map(int, result_li)) == 0: # 1010 인 경우 리스트안에는 아무 숫자가 없기때문에 바로 20을 출력해준다. 
        print(20)
    else:
        print(sum(map(int, result_li)) + 10) # 10과 나머지 1개의 숫자의 경우엔 1개 숫자에 10을 따로 더해줘서 출력해준다. 