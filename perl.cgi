#!/usr/bin/perl
use CGI;
my $q = CGI->new;
$hostname=$q->param('name');


print "Content-type: text/html";
print $q->header();
$Ping_Out=`ping $hostname -c 2 `;
print "$Ping_Out";
