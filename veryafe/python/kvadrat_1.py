t = [10, 50, 1000]

for N in t:
	f1 = f2 = 1
	s = 0
	for n in range(0, N):
		f = f1 + f2
		f1, f2 = f2, f
		s += sum([int(c) for c in str(f)]) % 10

	print("{}={}".format(N, s%10))