prime_list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]


def getPrimes(n):
    n = int(n)
    primes = []
    for i in prime_list:
        if i <= n:
            primes.append(i)
        else:
            break
    return primes
    
    
def getAddedPrimes(n):
    li = getPrimes(n)
    i = 0
    j = -1
    arr = []
    
    while li[j] >= li[i]:
        sum_value = li[j] + li[i]
        if n > sum_value:
            i += 1

        elif n < sum_value:
            j += -1

        elif n == sum_value:
            if li[i] != li[j]:
                arr.append([li[i], li[j]])
                i += 1
                j -= 1
            else:
                arr.append([li[i], li[j]])
                break
            
    
    return ' '.join(map(str, arr[-1]))
    


evens = input().split()

for even in evens:
  even = int(even)
  print(getAddedPrimes(even))
