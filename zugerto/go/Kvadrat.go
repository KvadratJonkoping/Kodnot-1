package main

import (
	"fmt"
	"math/big"
	"strconv"
	"strings"
)

func fibonacci() func() *big.Int {
	a, b := big.NewInt(1), big.NewInt(2)
	return func() *big.Int {
		a, b = b, a.Add(a, b)
		return a
	}
}

func getFigures(number *big.Int) []string {
	return strings.Split(number.String(), "")
}

func kvadrat(numberOfNumbers int) int {
	f := fibonacci()
	totalSum := 0
	for i := 0; i < numberOfNumbers; i++ {
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
	fmt.Println("Resultat med 10 tal i fibonacci-serien: ", kvadrat(10))
	fmt.Println("Resultat med 50 tal i fibonacci-serien: ", kvadrat(50))
	fmt.Println("Resultat med 1000 tal i fibonacci-serien: ", kvadrat(1000))
}
