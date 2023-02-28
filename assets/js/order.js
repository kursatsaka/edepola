$(document).ready(function(){
	
    //order();

});


function order() {
	$.ajax({
			type:'POST',
			url:'ajax/orderhesap.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#sepet").html(cevap);
				console.log(cevap);
			}
		});
}


function sil(id){
	document.getElementById("ilave_"+id).value=0;
	  order();
}



function post(){
	var kucuk= $("#kucuk").val();
	var buyuk= $("#buyuk").val();
	var xl= $("#xl").val();
	var nakliye= $("#naksa").val();
	

	if (nakliye!="N0") {


		if (buyuk >0 || kucuk>0 || xl >0) {
		$.ajax({
			type:'POST',
			url:'siparisisle.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#SepetID").val(cevap);
				console.clear();
				console.log(cevap);
				document.forms["Sepet"].submit();


				
			}
		});


	}else{
		$("#depolama").show();
				setTimeout(function(){
					$("#depolama").hide();
				}, 5000);
	}



	


	}else{
			$("#nakliyeh").show();
				setTimeout(function(){
					$("#nakliyeh").hide();
				}, 5000);


	}

	


	/*if (buyuk>0 && kucuk>0) {
		$.ajax({
			type:'POST',
			url:'siparisisle.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#SepetID").val(cevap);
				document.forms["Sepet"].submit();


				
			}
		});
		
		
	}else if (buyuk>0 && kucuk==0) {
		$.ajax({
			type:'POST',
			url:'siparisisle.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#SepetID").val(cevap);
				document.forms["Sepet"].submit();
				
			}
		});
	}else if (buyuk==0 && kucuk>0) {
		$.ajax({
			type:'POST',
			url:'siparisisle.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#SepetID").val(cevap);
				document.forms["Sepet"].submit();
				
			}
		});
	}else if (buyuk==1 && kucuk>0) {
		$.ajax({
			type:'POST',
			url:'siparisisle.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#SepetID").val(cevap);
				document.forms["Sepet"].submit();
				
			}
		});
	}else if (buyuk>0 && kucuk==1) {
		$.ajax({
			type:'POST',
			url:'siparisisle.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#SepetID").val(cevap);
				document.forms["Sepet"].submit();
				
			}
		});
	}else{
		$("#depolama").show();
		setTimeout(function(){
			$("#depolama").hide();
		}, 5000);
	}

	*/
}


function kucukarti() {
	var kucuk= $("#kucuk").val();
	kucuk++;
	if (kucuk<=10) {
		$("#kucuk").val(kucuk);
		order();
	}

	
	

}

function kucukeksi() {
	var kucuk= $("#kucuk").val();
	kucuk--;
	if (kucuk>=0) {
		$("#kucuk").val(kucuk);
		order();
	}
}



function buyukarti() {
	var buyuk= $("#buyuk").val();
	buyuk++;
	if (buyuk<=10) {
		$("#buyuk").val(buyuk);
		order();
	}

	
	

}

function buyukeksi() {
	var buyuk= $("#buyuk").val();
	buyuk--;
	if (buyuk>=0) {
		$("#buyuk").val(buyuk);
		order();
	}
}



function xlarti() {
	var buyuk= $("#xl").val();
	
	buyuk++;
	$("#xl").val(buyuk);
	order();

	
	

}

function xleksi() {
	var buyuk= $("#xl").val();
	buyuk--;
	if (buyuk>=0) {
		$("#xl").val(buyuk);
		order();
	}
}




function yanurunarti(id) {
	var buyuk= $("#ilave_"+id).val();
	buyuk++;
	if (buyuk<=10) {
		$("#ilave_"+id).val(buyuk);
		order();
	}

	
	

}

function yanuruneksi(id) {
	var yan= $("#ilave_"+id).val();
	yan--;
	if (yan>=0) {
		$("#ilave_"+id).val(yan);
		order();
	}
}


function yanpos(id) {
	$("#yanurunID").val(id);

	$.ajax({
			type:'POST',
			url:'ajax/yanurundetay.php',
			data:$('#yanformps').serialize(),
			success:function(cevap){
				console.log(cevap);
				$("#ilavedetay").html(cevap);
			
				
			}
		});


}


function odemetip(){
	var odeme= $("#inputodeme").val();

	if (odeme==1) {
		// aylık
		$.ajax({
			type:'POST',
			url:'ajax/aylikay.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#selecay").html(cevap);
				
			}
		});
	}else{
		// peşin
		$.ajax({
			type:'POST',
			url:'ajax/pesinay.php',
			data:$('#hesap').serialize(),
			success:function(cevap){
				$("#selecay").html(cevap);
				
			}
		});
	}

}


 function goster() {
          $("#kampanya").hide();
          $("#kampanya2").show();
        }
function gizle() {
          $("#kampanya2").hide();
          $("#kampanya").show();
        }
