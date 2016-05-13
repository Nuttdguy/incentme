
$(document).ready(function() {
	
	//=== HARD CODE STORES INTO OBJECT ===// 
	
	var store_1 = {
		name: "Fresh Wok",
		address: "112 Fresh Wok Street",
		city: "Minneapolis",
		state: "MN",
		zip: "55411",
		discount: 19.00,
		rank: 1,
		adOffers: 49
	};

	var store_2 = {
		name: "Organic Grill",
		address: "23 Organic Grill Street",
		city: "MN",
		zip: "55411",
		discount: 20.00,
		rank: .99,
		adOffers: 48
	};

	var store_3 = {
		name: "Pizza Joint",
		address: "999 Pizza Joint Ave",
		city: "MN",
		zip: "55404",
		discount: 20.00,
		rank: .98,
		adOffers: 47
	};

	var store_4 = {
		name: "Take Out Sushi",
		address: "672 Take Out Sushi Rd",
		city: "MN",
		zip: "55409",
		discount: 20.00,
		rank: .97,
		adOffers: 46
	};

	var store_5 = {
		name: "Get Me My Veggies",
		address: "43 Veggie Street",
		city: "MN",
		zip: "55444",
		discount: 20.00,
		rank: .96,
		adOffers: 45
	};

	var store_6 = {
		name: "Good Stuff Grill",
		address: "783 Good Stuff Grill",
		city: "MN",
		zip: "55416",
		discount: 20.00,
		rank: .95,
		adOffers: 44
	};

	var store_7 = {
		name: "The Good Bake",
		address: "11 Good Bake Street",
		city: "MN",
		zip: "55411",
		discount: 20.00,
		rank: .94,
		adOffers: 43
	};

	var store_8 = {
		name: "Sushi Dine",
		address: "409 Sushi Dine Drive",
		city: "MN",
		zip: "55410",
		discount: 20.00,
		rank: .93,
		adOffers: 42
	};

	var store_9 = {
		name: "Burger Burger",
		address: "335 Burger Street",
		city: "MN",
		zip: "55422",
		discount: 20.00,
		rank: .92,
		adOffers: 41
	};

	var store_10 = {
		name: "Cheesy Grill",
		address: "78 Cheesy Grill Rd",
		city: "MN",
		zip: "55422",
		discount: 20.00,
		rank: .91,
		adOffers: 50
	};

	var store_11 = {
		name: "The Hot Pot",
		address: "466 Hot Pot Street",
		city: "MN",
		zip: "55430",
		discount: 20.00,
		rank: .9,
		adOffers: 50
	};

	var store_12 = {
		name: "Green House",
		address: "567 Green House Rd",
		city: "MN",
		zip: "55444",
		discount: 20.00,
		rank: .89,
		adOffers: 50
	};
		
	//===== END HARD CODE STORES INTO OBJECTS =====//
	
	
	//=========================================================\\
	//=== START CODE FOR INSERTING NAME WITHIN DISPLAYED AD ===//
  //=========================================================\\
	
	compileAdList();
	calculateTime();
//	getAdPointValue();
	

	function compileAdList() {
		
		$('.js-storeName-1').text(store_1.name);
		$('.js-storeAddress-1').text(store_1.address);
		$('.js-storeCity-1').text(store_1.city + "\n" + store_1.zip);
		
		
		$('.js-distance-1').text("12.44 miles"); // This needs to be dynamic/function
		// $('.js-pointValue-1').text(store_1.); // This needs to be dynamic/function
		$('.js-numberOfOffers-1').text(store_1.adOffers); // This needs to be dynamic/function
		
	}
	
	// Need to tie this into point system // 
	
	
	
	function calculateTime() {
		var adEndTime = 'June 12 2016'; // Set endtime for ad
		
		function getAdTime(endTime) {
			var time = Date.parse(endTime) - Date.parse(new Date());
			var seconds = Math.floor( (time/1000) % 60 );
			var minutes = Math.floor( (time/1000/60) % 60 );
			var hours = Math.floor( (time/(1000*60*60)) % 24 );
			var days = Math.floor( time/(1000*60*60*24) );	
			return {
				'total': time,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}
		
		function intializeClock(id, adEndTime) {
			var clock = $('.js-timeLeft-1');
			var timeInterval = setInterval(function() {
				var t = getAdTime(adEndTime);
				
				if (t.minutes <= 9) {
					clock.text( t.days + ' days ' + t.hours + ':0' + t.minutes + ':' + t.seconds );
				} 
				
				if (t.seconds <= 9) {
						clock.text( t.days + ' days ' + t.hours + ':' + t.minutes + ':0' + t.seconds );
					}
				
				if (t.seconds <= 9) {
						clock.text( t.days + ' days ' + t.hours + ':' + t.minutes + ':0' + t.seconds );
					} 
				
				if (t.minutes <= 9 && t.seconds <= 9) {
					clock.text( t.days + ' days ' + t.hours + ':0' + t.minutes + ':0' + t.seconds );
				} 

				if (t.minutes > 9 && t.seconds > 9) {
					clock.text( t.days + ' days ' + t.hours + ':' + t.minutes + ':' + t.seconds );
				}
				
				if(t.total <=0 ) {
					clearInterval(timeInterval);
				}
			}, 1000); // 1000 is equal to 1 second // 
		}
		
		intializeClock('clock', adEndTime);
		
	}

	
	//=========================================================\\
	//=== START CODE FOR GENERATING AD POINT VALUE ===//
  //=========================================================\\
	var adPointMax;
	var adPointMidPercentage;
	var adBasePercentageDiscountAverage;
	var calculatedMidPoint;
	//--- EXAMPLE OF BELOW CALCULATION (50 / ( .20 * 100 )) = 2.5 
	var adBaseDiscountConvertRate;
	var calculatedAdPointMax;
	
	function getAdPointValue() {
		adPointMax = 100;
		adPointMidPercentage = 0.50;
		adBasePercentageDiscountAverage = 0.20;
		calculatedMidPoint = (adPointMidPercentage * adPointMax);
		//--- EXAMPLE OF BELOW CALCULATION (50 / ( .20 * 100 )) = 2.5 
		adBaseDiscountConvertRate = (calculatedMidPoint/(adBasePercentageDiscountAverage*adPointMax));
		calculatedAdPointMax = (adBaseDiscountConvertRate * 100); // 100 == 100%
		
		function getStoreAdPointValue() {
			var store1 = (store_1.discount * adBaseDiscountConvertRate).toFixed(2);
			$('.js-pointValue-1').text(store1);
		}
		
	}
	
	getAdPointValue();
	
	//=========================================================\\
	//=== START GENERATE VALUES FOR AD POINT ALGORITHM ===//
  //=========================================================\\
	
	//=========================================================\\
	//=== START CODE FOR GENERATING x TABLE SPECTRUM ===//
  //=========================================================\\
	
	//+++++ VARIABLES FOR GETTING X TABLE VALUES FOR AD LEDGER DIVVIATION
	var xAdPointSpectrum = []; 
	
	function getXAdPointSpectrum() {
		var axisMax = 1;
		var xAxis = 0.0001;
		var iCount = 0; // scale x range is 0.01% to 1
		
		// var i = .0001; .0001 < 1; .0001 = .0001 + .0001)
		for (var i = xAxis; i <= axisMax; i = i + xAxis ) {
			xAdPointSpectrum[iCount] = Number(i.toFixed(4));
			iCount++;
		}
	}
	
	getXAdPointSpectrum(); // verified to contain index count of 10000 
	
	//=========================================================\\
	//=== START CODE FOR GENERATING Y TABLE SPECTRUM ===//
  //=========================================================\\
	
	var yAdPointSpectrum = [];
	
	function getYAdPointSpectrum() {
		var axisMax = 1;
		var yAxis = 0.0001;
		var kCount = 0; // scale y range is 0.0001 to 1
		
		for (var k = yAxis; k <= axisMax; k = k + yAxis ) {
			yAdPointSpectrum[kCount] = Number(k.toFixed(4));
			kCount++;
		}
	}
		
	getYAdPointSpectrum(); // verified to contain index count of 10000
	
	
	//=========================================================\\
	//=== START CODE FOR GENERATING **CALCULATED Y** TABLE MULTIPLIER ===//
  //=========================================================\\
	var yPlus = []; // Validated correct values returned
	var yMinus = []; // Validated correct values returned

	function getYPivotPointValues() {
		// var pivotPoint = yAdPointSpectrum[1199]; // this is equivelant to 12.00% within the array

		var y1Count = 0;
		for (var y = 1198; y < yAdPointSpectrum.length; y++ ) {
			yPlus[y1Count] = Number((1 + parseFloat(yAdPointSpectrum[y])).toFixed(4));
			y1Count++;
		}

		var y2Count = 0;
		for (var x = 1199; x > 0; x-- ) {
			yMinus[y2Count] = Number((1 - parseFloat(yAdPointSpectrum[x])).toFixed(4));
			y2Count++;
		}
	}
	
	getYPivotPointValues();
	
	//=========================================================\\
	//=== START CODE FOR GENERATING CALCULATED VALUES FOR GENERATING STEP DIVVIATION MULTIPLIER ===//
  //=========================================================\\
	
	
	//+++++ GETTING ACTIVE DR TO MULTIPLY AGAINST X & Y SPECTRUM TABLES
	var baseDrPlus = []; // Verified to have an array length of 8801
	var baseDrMinus = []; // Verified to have an array length of 1198
	var baseMidStartValue = Number((adBaseDiscountConvertRate / 100).toFixed(4));

	function getBaseDr() {
		
		for (var a = 0; a < yPlus.length - 1; a++ ) {
			baseDrPlus[a] = Number((yPlus[a] * baseMidStartValue).toFixed(4));
		}

		for (var b = 0; b < yMinus.length - 1; b++ ) {
			baseDrMinus[b] = Number((yMinus[b] * baseMidStartValue).toFixed(4)); 
		}	
	}
	
	getBaseDr();
	
	//=========================================================\\
	//=== START CODE FOR ** FINAL CALCULATED X AND Y ** TO APPLY AS TABLE MULTIPLIER FOR AD LEDGER ===//
  //=========================================================\\
			
	var yAxisCalculated = [];
	var xAxisCalculated = [];
	
	function getFinalAdLedgerTable() {
		
		var plusIndex = 0; // Need Start INDEX Of "0" for second-half of BaseDrPlus because its index is different than current loop
		var negIndex = baseDrMinus.length-1;
		
		for (var ya = 0; ya < yAdPointSpectrum.length; ya++ ) {
			//  INNER LOOP FOR MULITPLYING ROWS
			for (var ya1 = 0; ya1 < xAdPointSpectrum.length; ya1++ ) {
		
				if (ya1 > 1198 && ya1 < yAdPointSpectrum.length ) {
					// axisCalculated[ya] = Number( ( yAdPointSpectrum[ya] * xAdPointSpectrum[ya] * baseDrPlus[plusIndex]).toFixed(4) );
					axisCalculated[ya1] = parseFloat( (xAdPointSpectrum[ya1] * baseDrPlus[plusIndex]).toFixed(8) ) + " ++ " + xAdPointSpectrum[ya1] + " %=== " + yAdPointSpectrum[ya];
					plusIndex++;
					
					// console.log((xAdPointSpectrum[ya] + "=====" + baseDrPlus[ya]) + "=== LOOP 1 === " + ya );
				}
				
				if (negIndex > 0 ) {
					axisCalculated[ya1] = parseFloat( (xAdPointSpectrum[ya1] * baseDrMinus[negIndex]).toFixed(8) ) + " ++ " + xAdPointSpectrum[ya1] + " %=== " + yAdPointSpectrum[ya];
					// console.log(parseFloat( (xAdPointSpectrum[ya1] * baseDrMinus[negIndex]).toFixed(8) )) + " ++ " + xAdPointSpectrum[ya1] + " %=== " + yAdPointSpectrum[ya];
					negIndex--;
				}
			}
		}
	}	

	getFinalAdLedgerTable();
	
	
	
	
	
	
	
	
	
	

}); // END OF JQUERY DOCUMENT WRAPPER












//	<div class="ad-container ad-one">
//		<!-- will display buttons and call-to-action stuff below -->
//		<div class="ad-store-name">
//			<p class="js-storeName-1" >Store Name</p>
//			<p class="js-distance-1">Distance 3.5 miles</p>
//			<p class="js-pointValue-1">Point value</p>
//			<p class="js-numberOfOffers-1"># of Offers</p>
//			<p class="js-timeLeft-1">Time Left</p>
//		</div>
//		<div class="ad-store-detail js-adStoreDetail">
//			<p class="js-adOfferDetails-1"># of offers</p>
//			<p class="js-timeLeftDetails-1">time left</p>
//			<button class="js-getInfoBtn-1" > Get Info </button>
//		</div>
//	</div> 


























