# 두 사람의 태어난 년도를 자연수로 받는다. 
a, b = map(str, input().split())

# 각 숫자를 list 화 한다.
a_list = list(a)
b_list = list(b)

# 각 숫자를 역순으로 돌린다.
a_list.reverse()
b_list.reverse()

# 역순으로된 리스트를 int메서드와 함께 join 해준다.
a_result = int(''.join(a_list))
b_result = int(''.join(b_list))

# 값 출력 
print(a_result + b_result)
