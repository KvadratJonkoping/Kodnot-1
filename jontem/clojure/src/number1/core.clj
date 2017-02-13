(ns number1.core
  (:require [clojure.string :as str])
  (:gen-class))

(defn fib 
         ([] (fib 1 1))
         ([a b]
           (lazy-seq (cons a (fib b (+' a b))))))

(defn add-fib [n]
  (reduce (fn [prev curr]
    (+ prev curr)) 0 (map #(Integer/parseInt %) (str/split (str n) #""))))

(defn mod10 [n]
  (mod n 10))

(defn get-fib-sum [fibs]
  (reduce (fn [prev fib]
    (+ prev (add-fib fib))) 0 fibs))

(defn solve [fib-count]
  (let [fibs (drop 2 (take (+ fib-count 2) (fib)))]
    (let [fib-sum (get-fib-sum fibs)]
      (mod10 fib-sum))))

(defn -main
  [& args]
  (println (str "10 = " (solve 10)))
  (println (str "50 = " (solve 50)))
  (println (str "1000 = " (solve 1000))))