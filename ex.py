
from operator import le
import re


uni = list(map(int, input("집합을 입력하세요").split()))
result= [[]]

for i in uni:
  size = len(result)
  for j in range(size):
    result.append(result[j] + [i])

print (result)
