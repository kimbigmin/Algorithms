#6081

n = int(input(), 16)    

for i in range(1, 16):
    print("%X*%X=%X" %(n, i, n*i))

#--------------------------------------
#6082

n = int(input())

for i in range(1, n+1):
    if i%10 == 3 or i%10 == 6 or i%10 == 9:    #생각못했던 부분
        i = 'X'
        print(i, end=' ')
    else:    
        print(i, end=' ')

#--------------------------------------
#6083

r, g, b = map(int, input().split())

count = 0
for i in range(r):
    for j in range(g):
        for k in range(b):
            answer = f'{i} {j} {k}'
            print(answer)
            count += 1
print(count)

#--------------------------------------
#6084

h, b, c, s = map(int, input().split())

answer = h*b*c*s/8/1024/1024
print('{0:0.1f} MB'.format(answer))


#---------------------------------------
#6085

w, h, b = map(int, input().split())

result = w*h*b/8/1024/1024

print('{0:0.2f} MB'.format(result))


#------------------
#6086

n = int(input())

c = 1
sum = 0
while n > sum:
    sum += c
    c += 1

print(sum)