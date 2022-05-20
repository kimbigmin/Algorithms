#나의 풀이

def solution(a, b):

    months = {
        1 : 0, 2 : 31, 3 : 60, 4 : 91,
        5 : 121, 6 : 152, 7 : 182, 8 : 213,
        9 : 244, 10 : 274, 11 : 305, 12 : 335 
    }

    weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    days = ((months[a] + b)-1) % 7
    answer = weeks[days]
    return answer








#다른 사람 풀이 - 더 간단


def getDayName(a,b):
    months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    return days[(sum(months[:a-1])+b-1)%7]

#아래 코드는 테스트를 위한 출력 코드입니다.
print(getDayName(5,24))