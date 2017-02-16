
%macro kvadrat(antalfib);
data _null_;
  length prevfib currfib nextfib $ 1000;
  prevfib='1'||repeat('0',999);
  currfib=prevfib;
  do j=1 to &antalfib.;
    nextfib=repeat('0',1000);
	siffersumma=0;
    do i=1 to 999;
	  substr(nextfib,i,2)=reverse(put(substr(prevfib,i,1)+substr(currfib,i,1)+substr(nextfib,i,1),z2.));
	  siffersumma=sum(siffersumma,substr(nextfib,i,1));
    end;  
	delmal=mod(siffersumma,10);
	delmalsumma=sum(delmalsumma,delmal);
	slutmal=mod(delmalsumma,10);
    prevfib=currfib;
    currfib=nextfib;
  end;
  put "&antalfib." '=' slutmal;
run;
%mend;


%kvadrat(10);
%kvadrat(50);
%kvadrat(1000);

