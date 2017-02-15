import java.math.BigDecimal;
import java.util.Arrays;
import java.util.stream.IntStream;

class Fib {
    public static void main(String[] args) {
        for (int n : Arrays.asList(10, 50, 1000)) {
            BigDecimal f1 = BigDecimal.ONE, f2 = f1, s = BigDecimal.ZERO;
            for (int i : IntStream.rangeClosed(1, n).toArray()) {
                s = s.add(new BigDecimal(f2.add(f1).toString().chars().mapToObj(x -> new Character((char) x)).mapToInt(c -> Integer.parseInt(c.toString())).sum() % 10));
                f2 = f2.add(f1);
                f1 = f2.subtract(f1);
            }
            System.out.printf("%d = %d\n", n, s.remainder(BigDecimal.TEN).intValue());
        }
    }
}
