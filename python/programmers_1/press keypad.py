def distance(hand, number):
    
    keypad = {
        '1': (0, 0), '2': (0, 1), '3': (0, 2),
        '4': (1, 0), '5': (1, 1), '6': (1, 2),
        '7': (2, 0), '8': (2, 1), '9': (2, 2),
        '*': (3, 0), '0': (3, 1), '#': (3, 2)
        }
    
    hand = str(hand)
    number = str(number)
    x_h, y_h = keypad[hand]
    x_n, y_n = keypad[number]
    
    return abs(x_h - x_n) + abs(y_h - y_n)




def solution(numbers, hand):
    answer = ''
    
    tmp_r = '#'
    tmp_l = '*'
    
    for number in numbers:
        
        if number in [1, 4, 7]:
            answer += 'L'
            tmp_l = number
        
        elif number in [3, 6, 9]:
            answer += 'R'
            tmp_r = number
        
        elif number in [2, 5, 8, 0]:
            d_r = distance(tmp_r, number)
            d_l = distance(tmp_l, number)
            
            if d_r > d_l:
                answer += 'L'
                tmp_l = number
            
            elif d_r < d_l:
                answer += 'R'
                tmp_r = number
            
            elif d_r == d_l:
                
                if hand == 'right':
                    answer += 'R'
                    tmp_r = number
                
                else:
                    answer += 'L'
                    tmp_l = number
                
            
    return answer


