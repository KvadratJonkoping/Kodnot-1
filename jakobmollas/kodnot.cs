using System;
using System.Linq;
using System.Numerics;

namespace Challenge
{
    class Program
    {
        static void Main()
        {
            new[] {10, 50, 1000}.Select(antal =>
                (from fib in Enumerable.Range(1, antal)
                        let fibonacciStörreÄnEtt = Enumerable.Range(1, fib)
                            .Aggregate(new {Denna = BigInteger.One, Förra = BigInteger.One},
                                (n, i) => new {Denna = n.Denna + n.Förra, Förra = n.Denna}).Denna
                        let delmål = fibonacciStörreÄnEtt.ToString().Sum(c => c - 48) % 10
                        select delmål)
                    .Sum() % 10)
                .ToList().ForEach(Console.WriteLine);
        }
    }
}