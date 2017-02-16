import static java.math.BigInteger.valueOf;

import java.util.AbstractMap.SimpleImmutableEntry;
import java.util.Map.Entry;
import java.util.stream.Stream;

class KodNot1 {
    public static void main(String... args) {
        Stream.of(10, 50, 1000).map(i -> pair(i, solve(i)))
            .map(e -> e.getKey() + " = " + e.getValue())
            .forEach(System.out::println);
    }

    private static int solve(int count) {
        return Stream.iterate(pair(valueOf(2), valueOf(3)), 
            p -> pair(p.getValue(), p.getKey().add(p.getValue())))
            .map(e -> e.getKey().toString().chars().map(c -> c - '0').sum() % 10)
            .limit(count)
            .reduce(0, Integer::sum) % 10;
    }

    private static <S, T> Entry<S, T> pair(S s, T t) {
        return new SimpleImmutableEntry<S, T>(s, t);
    }
}
