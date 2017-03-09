#!/usr/bin/perl
use strict;
use bignum;

print "How many numbers in series?:\n";
my $input = <STDIN>;
chomp $input;

my @f_array;
$f_array[0] = 1+1;
$f_array[1] = 1+2;
my @f_array_2;
$f_array_2[0] += $_ for split(//,$f_array[0]);
$f_array_2[1] += $_ for split(//,$f_array[1]);
my @f_array_3;
$f_array_3[0] = $f_array_2[0]%10;
$f_array_3[1] += $f_array_2[1]%10;

my $i = 2;

do{
	$f_array[$i] = $f_array[$i-1] + $f_array[$i-2];
	$f_array_2[$i] += $_ for split(//,$f_array[$i]);
	$f_array_3[$i] += $f_array_2[$i]%10;
	$i++;
}until($i>=$input);

my $sum;
foreach my $num (@f_array_3){
	$sum += $num;
}
my $result = $sum%10;

print "@f_array\n@f_array_2\n@f_array_3\n$sum\n\nThe result for $input is: $result";
