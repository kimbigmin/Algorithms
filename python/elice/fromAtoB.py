# 여기서부터 여기까지 문제  


# 현재 가진 돈 입력
money = int(input())

# 상점의 물품 가격리스트 입력
items = list(map(int, input().split()))

# TIL: 이중 반복문 중단스위치
isbreak = False
# 더하는 값
total = 0

# 리스트 내 원소 하나하나 더한다. 
for i in range(len(items)):
    if items[i] != items[-1]: # 현재 원소가 마지막 원소가 아니라면  
        total += items[i] # 더해나간다.
        for j in range(i+1, len(items)): # 실수한 부분: i+1 이 아니라 1로 썼다. 
            total += items[j]
            if total > money:
                total = 0
                break
            elif total == money:
                start_idx, end_idx = i, j
                isbreak = True # 실수한 부분: isbreak == True 로 적었다. 
                break
            else:
                continue
        if isbreak == True: # 이중 for문 break 스위치
            print('와 '.join(map(str, items[start_idx : end_idx+1])) + '을 가르키며...')
            print('여기서부터 여기까지 다 주세요!')
            break
        
    # 현재원소가 마지막 원소이고 마지막 원소가 내 예산과 같다면 
    elif (items[i] == items[-1]) and (items[i] == money):
        print(str(items[i]) + '을 가르키며...')
        print('이거 주세요!')
        break    

    # 현재 원소가 마지막 원소인데 마지막 원소까지 내 예산과 같지 않다면
    else:
        print('다음에 올게요...')
        break