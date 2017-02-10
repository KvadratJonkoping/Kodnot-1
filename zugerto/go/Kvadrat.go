package main

import (
	"fmt"
	"strconv"
	"strings"
)

func fibonacci() func() int {
	a, b := 1, 2
	return func() int {
		a, b = b, a+b
		return a
	}
}

func getFigures(number int) []string {
	return strings.Split(strconv.Itoa(number), "")
}

func kvadrat(antalTal int) int {
	f := fibonacci()
	totalSum := 0
	for i := 0; i < 50; i++ {
		sum := 0
		for _, figure := range getFigures(f()) {
			i, _ := strconv.Atoi(figure)
			sum += i
		}
		totalSum += sum % 10

	}
	return totalSum % 10
}

func main() {
	fmt.Println("Result med 10 tal i fibonacci-serien: ", kvadrat(10))
	fmt.Println("Result med 50 tal i fibonacci-serien: ", kvadrat(50))
	fmt.Println("Result med 1000 tal i fibonacci-serien: ", kvadrat(1000))
}
