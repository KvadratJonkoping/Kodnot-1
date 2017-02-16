(ns number1.core
  (:require [clojure.string :as str])
  (:gen-class))

(defn fib 
  ([] (fib 1 1))
  ([a b]
    (lazy-seq (cons a (fib b (+' a b))))))

(defn fib-digits-sum [n]
  (reduce (fn [prev curr]
    (+ prev curr)) 0 (map #(Integer/parseInt %) (str/split (str n) #""))))

(defn mod10 [n]
  (mod n 10))

(defn fibs-sum [fibs]
  (reduce
    (fn [prev fib]
      (+ prev (fib-digits-sum fib))) 0 fibs))

(defn solve [fib-count]
  (mod10
    (fibs-sum
      (drop 2 (take (+ fib-count 2) (fib))))))

(defn -main
  [& args]
  (println (str "10 = " (solve 10)))
  (println (str "50 = " (solve 50)))
  (println (str "1000 = " (solve 1000))))