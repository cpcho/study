a = [30523, 30424]
m = [41322, 532351]

def minimum_moves(a, m):
	broken_a_total = split_item(a)
	broken_m_total = split_item(m)
	idx = 0
	min_moves = 0
	while idx <= len(broken_a_total) - 1:
		if len(broken_a_total) == len(broken_m_total):
			min_moves += abs(int(broken_a_total[idx]) - int(broken_m_total[idx]))
			idx += 1
		else:
			return 'Two arrays do not have a same length'
	return min_moves

def split_item(arr):
	broken_arr = []
	broken_arr_total = []
	idx = 0
	for i in arr:
		broken_arr.append(str(i))
	while idx <= len(broken_arr) - 1:
		for i in broken_arr[idx]:
			broken_arr_total.append(i)
		idx += 1
	return broken_arr_total

print(minimum_moves(a, m))

# def minimum_moves(a, m):
# 	broken_a = []
# 	broken_a_total = []
# 	idx = 0
# 	for i in a:
# 		broken_a.append(str(i))
# 	while idx <= len(broken_a) - 1:
# 		for i in broken_a[idx]:
# 			broken_a_total.append(i)
# 		idx += 1
# 	broken_m = []
# 	broken_m_total = []
# 	idx = 0
# 	for i in m:
# 		broken_m.append(str(i))
# 	while idx <= len(broken_m) - 1:
# 		for i in broken_m[idx]:
# 			broken_m_total.append(i)
# 		idx += 1
# 	idx = 0
# 	min_moves = 0
# 	while idx <= len(broken_a_total) - 1:
# 		min_moves += abs(int(broken_a_total[idx]) - int(broken_m_total[idx]))
# 		idx += 1
# 	return min_moves