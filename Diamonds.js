	const stars = function(str){
		let s = "";
		for(let i=0; i < str; i=i+1){
		s = s + "*";}
		return s;
		};
	
    const space =function(spc){
		let a= "";
		for(let y=0; y< spc; y=y+1){
		a = a+ " ";
		}
		return a;
		};
	
		
	const ara = function (spc,str){
		 console.log(space(spc)+ stars(str));
			};
	const ruzik = function (n){
	    if(n%2==0)
		n=n+1
		for (i=0;i<(n+1)/2; i++){
		ara((n+1)/2-i-1, 1+2*i);
			}
		
		for (i=0;i<(n+1)/2-1; i++){
		ara(i+1, n-2*i-2);
		}
	};
	
	ruzik(4);
		
		
		
		
		
		
		
		
		
		
		
		

	