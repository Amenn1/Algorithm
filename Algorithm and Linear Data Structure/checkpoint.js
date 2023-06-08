ALGORITHM SENTENCE

VAR

   nbv,nbw,nbc:= INTEGER ;

   sentc:= STRING[] ;

BEGIN

  nbc:= 0 ;

  nbw:= 1 ;

  nbv:= 0;

  write(sentc)

  read(sentc)

REPEAT



   IF (sentc[nbc]=" ") THEN

       nbw:=nbw+1 ;

   END_IF

  IF (sentc[nbc] in ["a","e","u","i","o","y"]) THEN

   nbv:= nbv +1 ;

   END_IF

   nbc := nbc+1 ;

UNTIL (sentc[nbc]=".")

write( ,nbc+1 )

write (,nbw)

write (,nbv)

END