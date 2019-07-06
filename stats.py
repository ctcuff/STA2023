from math import sqrt
from statistics import median, mode, stdev, mean


def five_num_sum(arr):
    print()
    n = len(arr)
    arr.sort()
    _min = arr[0]
    q1 = median(arr[:n // 2])
    mid = median(arr)
    q3 = median(arr[(n // 2) + 1:])
    _max = arr[-1]
    return _min, q1, mid, q3, _max


def stats_range(arr):
    return max(arr) - min(arr)


numbers = [12, 13, 14, 14, 12, 10, 13, 13, 13, 14, 34]
print(mean(numbers), median(numbers), mode(numbers))
