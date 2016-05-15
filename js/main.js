
$(document).ready(function() {
	
	//=== HARD CODE STORES INTO OBJECT ===// 
	
	var stores = {
		
		store_1: {
			name: "Fresh Wok",
			address: "112 Fresh Wok Street",
			city: "Minneapolis",
			state: "MN",
			zip: "55411",
			discount: 0.1700,
			rank: 1,
			adOffers: 19,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 18 2016" 
		},
		
		store_2: {
			name: "Organic Grill",
			address: "23 Organic Grill Street",
			city: "Minneapolis",
			zip: "55411",
			discount: 0.2130,
			rank: 0.99,
			adOffers: 48,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 17 2016" 
		},
		
		store_3: {
			name: "Pizza Joint",
			address: "999 Pizza Joint Ave",
			city: "Minneapolis",
			zip: "55404",
			discount: 0.1800,
			rank: 0.98,
			adOffers: 47,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 19 2016" 
		},

		store_4: {
			name: "Take Out Sushi",
			address: "672 Take Out Sushi Rd",
			city: "Minneapolis",
			zip: "55409",
			discount: 0.1700,
			rank: 0.97,
			adOffers: 46,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		},

		store_5: {
			name: "Get Me My Veggies",
			address: "43 Veggie Street",
			city: "Minneapolis",
			zip: "55444",
			discount: 0.1600,
			rank: 0.96,
			adOffers: 45,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		},

		store_6: {
			name: "Good Stuff Grill",
			address: "783 Good Stuff Grill",
			city: "Minneapolis",
			zip: "55416",
			discount: 0.1500,
			rank: 0.95,
			adOffers: 44,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		},

		store_7: {
			name: "The Good Bake",
			address: "11 Good Bake Street",
			city: "Minneapolis",
			zip: "55411",
			discount: 0.1400,
			rank: 0.94,
			adOffers: 43,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		},

		store_8: {
			name: "Sushi Dine",
			address: "409 Sushi Dine Drive",
			city: "Minneapolis",
			zip: "55410",
			discount: 0.1300,
			rank: 0.93,
			adOffers: 42,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		},

		store_9: {
			name: "Burger Burger",
			address: "335 Burger Street",
			city: "Minneapolis",
			zip: "55422",
			discount: 0.1200,
			rank: 0.92,
			adOffers: 41,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		},

		store_10: {
			name: "Cheesy Grill",
			address: "78 Cheesy Grill Rd",
			city: "Minneapolis",
			zip: "55422",
			discount: 0.1100,
			rank: 0.91,
			adOffers: 40,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		},

		store_11: {
			name: "The Hot Pot",
			address: "466 Hot Pot Street",
			city: "Minneapolis",
			zip: "55430",
			discount: 0.1000,
			rank: 0.9,
			adOffers: 39,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		},

		store_12: {
			name: "Green House",
			address: "567 Green House Rd",
			city: "Minneapolis",
			zip: "55444",
			discount: 0.3000,
			rank: 0.89,
			adOffers: 8,
			nowTime: new Date(),
			adCreateTime: "May 12 2016",
			adEndTime: "May 16 2016" 
		}
		
	} //===== END HARD CODE STORES INTO OBJECTS =====//
	
	
	//=========================================================\\
			//=== RANK OBJECT FOR HOLDING VALUES  ===//
  //=========================================================//
	
	var rank = {
		
		rankLevel_1: { 
			activityBaseCo: 1,
			y1: 0.03,
			y2: 0.01,
			x1: 0.005,
			xTimeScale: 120, // the maximum amount of time an ad offer is live (120 hours in this case) 
			adLimit: 50, // however, the amount of time available will determine actual amount unique for each advertiser
			adAcquireAvg: 0.50 // the pivot point. An estimate in the number of ads that will be acquired. y-axis is plus or minus from this point.
		}
		
	}
	
	//=========================================================\\
	//=== CALCUALATE THE TIME AND TIMER FOR ADS  ===//
  //=========================================================\\
	
	//==  ==\\ ** MOVED FUNCTION FROM WITHIN THE CALCULATETIME FUNCTION **
	
	function getAdTime(et, ct, nt) {
		
		var time = Date.parse(et) - Date.parse(new Date());
		var sTime = Date.parse(ct) - Date.parse(new Date());
		var rTime = time - sTime; // required to determine # of days 

		var seconds = Math.floor( (time/1000) % 60 );
		var minutes = Math.floor( (time/1000/60) % 60 );
		var hours = Math.floor( (time/(1000*60*60)) % 24 );
		var days = Math.floor( time/(1000*60*60*24) );

		return {
			'ntotal': nt,
			'total': time,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	
	//== ID-2 ==\\
	
	function calculateTime(s) {
	
		
		function intializeClock(id, c, et, ct, nt) {
			var clock = $('.js-timeLeft-'+ c);
			// console.log(clock);
			var timeInterval = setInterval(function() {
				
				var t = getAdTime(et, ct, nt); // this is the function calling the new time
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
		
		var count = 1;
		for (var i in stores ) {
			intializeClock('clock', count, stores[i].adEndTime, stores[i].adCreateTime, stores[i].nTime);
			count++;
		}
		
	}
	
	calculateTime(stores);
	
	//=========================================================\\
	//=== START CODE FOR GENERATING AD POINT VALUE ===//
  //=========================================================\\
	
	//== ID-3 ==\\
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
		
	}
	
	getAdPointValue();
	
	//=========================================================\\
	//=== START GENERATE VALUES FOR AD POINT ALGORITHM ===//
  //=========================================================\\
	
	//=========================================================\\
	//=== START CODE FOR GENERATING x TABLE SPECTRUM ===//
  //=========================================================\\
	
	
	//== ID-4 ==\\
	//+++++ VARIABLES FOR GETTING X TABLE VALUES FOR AD LEDGER DIVVIATION
	var xAdPointSpectrum = []; 	
	
	function getXAdPointSpectrum() {
		var axisMax = 1;
		var xAxis = 0.01;
		var iCount = 0; // scale x range is 0.01% to 1
		
		// var i = .0001; .0001 < 1; .0001 = .0001 + .0001)
		for (var i = xAxis; i <= axisMax; i = i + xAxis ) {
//			xAdPointSpectrum[iCount] = Number((i * 100).toFixed(2)); // Original
			xAdPointSpectrum[iCount] = Number((i).toFixed(2)); // Attempting not to upConvert Floating-Point Values
			iCount++;
		}
	};
	
	getXAdPointSpectrum(); // verified to contain index count of 10000
	// Changed to contain index of 99 >> Web Browser Freezing with Large Number
	
	//=========================================================\\
	//=== START CODE FOR GENERATING Y TABLE SPECTRUM ===//
  //=========================================================\\
	
	
	//== ID-5 ==\\
	var yAdPointSpectrum = [];
	
	function getYAdPointSpectrum() {
		var axisMax = 1;
		var yAxis = 0.001; 
		var kCount = 0; // scale y range is 0.0001 to 1
		
		for (var k = yAxis; k <= axisMax; k = k + yAxis ) {
			yAdPointSpectrum[kCount] = Number(k.toFixed(4));
			kCount++;
		}
	};
		
	getYAdPointSpectrum(); // verified to contain index count of 10000
	// Changed to contain index of 999 >> Web Browser Freezing with Large Number
	
	
	//=========================================================\\
	//=== START CODE FOR GENERATING **CALCULATED Y** TABLE MULTIPLIER ===//
  //=========================================================\\
	
	//== ID-6 ==\\
	var yPlus = []; // Validated correct values returned >> changed result === 880
	var yMinus = []; // Validated correct values returned >> changed result === 119

	function getYPivotPointValues() {
		// var pivotPoint = yAdPointSpectrum[1199]; // this is equivelant to 12.00% within the array

		var y1Count = 0;
		for (var y = 119; y < yAdPointSpectrum.length; y++ ) {
			yPlus[y1Count] = Number((1 + parseFloat(yAdPointSpectrum[y])).toFixed(4));
			y1Count++;
		}

		var y2Count = 0;
		for (var x = 119; x > 0; x-- ) {
			yMinus[y2Count] = Number((1 - parseFloat(yAdPointSpectrum[x])).toFixed(4));
			y2Count++;
		}
	}
	
	getYPivotPointValues();

	//=========================================================\\
	//=== START CODE FOR GENERATING CALCULATED VALUES FOR GENERATING STEP DIVVIATION MULTIPLIER ===//
  //=========================================================\\
	
	//== ID-7 ==\\
	//+++++ GETTING ACTIVE DR TO MULTIPLY AGAINST X & Y SPECTRUM TABLES
	var baseDrPlus = []; // Verified to have an array length of 880
	var baseDrMinus = []; // Verified to have an array length of 119
	var combinedBaseDr = [];
	var baseMidStartValue = Number((adBaseDiscountConvertRate / 100).toFixed(4));

	function getBaseDr() {
		
		for (var a = 0; a < yPlus.length; a++ ) {
			baseDrPlus[a] = Number((yPlus[a] * baseMidStartValue).toFixed(4));
		}

		for (var b = 0; b <= yMinus.length - 1; b++ ) {
			baseDrMinus[b] = Number((yMinus[b] * baseMidStartValue).toFixed(4)); 
		}
	}
	
	
	//== ID-8 ==\\
	function combineDr() {
		for ( var i in baseDrMinus ) {
			combinedBaseDr.push(baseDrMinus[i]);
		}
	
		for ( var k in baseDrPlus ) {
			combinedBaseDr.push(baseDrPlus[k]);
		}
	}
	
	getBaseDr();
	combineDr();
	
	//=========================================================\\
	//=== START CODE FOR ** FINAL CALCULATED X AND Y ** TO APPLY AS TABLE MULTIPLIER FOR AD LEDGER ===//
	//=========================================================\\
	
	//== ID-9 ==\\ ///====== >>> TEMPORARILY DISABLED FUNCTION UNTIL USE PURPOSE IS DISCOVERED
	
    //=== THE BELOW LOOP FREEZES DUE TO RECORD/TABLE SIZE OF (99*999)x2 = 197,802 VALUES
    //=== WOULD POSSIBLY BE MORE EFFICIENT TO LOOK UP THE DISCOUNT VALUE FIRST, THEN LOCATE THE MULTIPLIER TO APPLY
    //=== THE BELOW IS NOT REQUIRED FOR CALCULATING CHANGE BUT CAN BE USED << BECAUSE CALCULATED BASEDR IS MULTIPLIED BY THE PERCENTAGE APPLIED
    //=== FOR EXAMPLE STEPS:
    //=== (1). CHECK AD LEDGER AVERAGE % ==> get from yAdPointSpectrum
    //=== (2). LOCATE BASEDR FOR CURRENT VALUE ==> get from BaseDrPlus Or Minus
    //=== (3). CHECK APPLIED DISCOUNT PERCENTAGE OF OFFER
    //=== (4). MULTIPLY BASEDR VALUE & DISCOUNT PERCENTAGE OF AD OFFER
    //=== (5). RETURN FINAL RESULT; THIS IS ADS ACTIVE CONVERT POINT VALUE FOR ORIGINATING DISCOUNT AT TIME OF AD CREATION
		// yAdPointSpectrum[ya1] is only used for comparing/getting baseDrPlus value (Divviation Value);	
	
	
	var axisCalculated = [];
	var xyAxisCalculated = [];
	var negIndex = baseDrMinus.length-1;
	var plusIndex = 0; // Need Start INDEX Of "0" for second-half of BaseDrPlus because its index is different than current loop

	function getFinalAdLedgerTable() {
		
		for (var ya = 0; ya < xAdPointSpectrum.length; ya++ ) {  // length === 99	
			for (var ya1 = 0; ya1 < yAdPointSpectrum.length; ya1++ ) { // length === 999
				if (ya1 > 0 && ya1 < 119 ) {
					// console.log(yAdPointSpectrum[ya1] + " Y-Informative-Only==" + baseDrMinus[negIndex] + "==== FIRST LOOP =====XXXX " + xAdPointSpectrum[ya] + " %"); // VERIFIED RESULT === 118 Outer 118 0.002 Y-Informative-Only==0.0249==== FIRST LOOP =====XXXX 1 %
					axisCalculated.push(Number(baseDrMinus[negIndex]).toFixed(4) );
					xyAxisCalculated.push(Number(yAdPointSpectrum[ya]).toFixed(4) );
				}
				if (ya1 >= 119 && ya1 < yAdPointSpectrum.length ) {
					// console.log(yAdPointSpectrum[ya1] + " Y-Informative-Only==" + baseDrPlus[plusIndex] + "====" + plusIndex + "===== XXXX >" + xAdPointSpectrum[ya] + " %  == " + ya1); // This Line Correct >>==  0.12 Y-Informative-Only==0.028====0===== XXXX >1 %  == 1	
					axisCalculated.push(Number(baseDrPlus[plusIndex]).toFixed(4) );
					xyAxisCalculated.push( Number(yAdPointSpectrum[ya]).toFixed(4) );
				}
				if (plusIndex > (baseDrPlus.length - 1) ) {
					plusIndex = 0;
				}
				if (ya1 > 119 ) {
					plusIndex++;
				}
			}
			negIndex--;
			
		}
	}		
//	 getFinalAdLedgerTable();
//	console.log(axisCalculated[98801]);
//	console.log(xyAxisCalculated[98801]);
//	console.log(axisCalculated.length);
//	console.log(xyAxisCalculated.length);
	
	//=========================================================\\
	//=== GET DISCOUNT PERCENTAGE AVERAGE FOR ALL AD OFFERS ===//
  //=========================================================\\
	
	
	//== ID-10 ==\\	
	function getTotalAdOffers(obj) {
		var discountAvg = 0;
		var totalOffers = 0;

		for (var i in obj ) {
			// need to upconvert discount percent in order to use its value with number of offers 
			discountAvg += Number(obj[i].discount * 100) * Number(obj[i].discount * 100);
			totalOffers += Number(obj[i].adOffers);	
		}
		
		return ( totalOffers / discountAvg).toFixed(4);
	}
	
	//=========================================================\\
	//=== GET THE POINT CONVERSION VALUE FOR A SINGLE PERCENTAGE POINT
	//=== EXAMPLE ** (1% === 1.43PTS) >> 20% DISCOUNT * 1.43PTS = 28.6PTS WILL DIPLAY WITHIN AD OFFER ===//
  //=========================================================\\
	
	//== ID-11 ==\\	
	// == Need stores originating discount percent
	// == Each button/ad will have its own unique class, therefore identifying which one is not really relevant at this time
	// (1). Need to match the correct "Y" to TotalAdOffers returned Value 
	// (2). Need to Match RETURNED Value to "yAdPointSpectrum"
	// (3). Get the BASEDR convert value using the RETURNED Index Value
	// (4). Multiply the STORE DISCOUNT PERCENT by the Matched BASE DR Value
	//  combinedBaseDr === yAdPointSpectrum
	
	function getOriginatingDiscountPercent(s) {
		var numberMultiplier = 0;
		var yIndex = 1;
		var yIncrement = 0.001;
		var t = getTotalAdOffers(stores);
		
		// (1). Find Y Value of adjusted Discount Percent (.20) > vertical (999)
		// (2). Find X Value of Stores Percent (20) > horizontal (99)
		// (3). Find DR Value of Y position. > horizontal (98,802)
		function getYIndex() {
			var count = 0;
			for (var i = yIncrement; i < t; i = i + yIncrement ) {
				// console.log(count + " +++ " + i.toFixed(4) + " === " + combinedBaseDr[count] + " +++ " + yAdPointSpectrum[count]);
				
				if ( yAdPointSpectrum[count] <= t ) {
					yIndex = count;
				}
				count++;
			}
		}
		
		getYIndex();
	
		//** s == .12 need 100% upconvert to point value || combinedBaseDr upconvert is optional >> can be moved as neccessary 
		return Number((s * 100) * (combinedBaseDr[yIndex] * 10) * adBaseDiscountConvertRate).toFixed(2);
	}
		
	//=========================================================\\
	//=== APPLY STORES LIVE POINT VALUE TO ADVERTISEMENT ===//
	//=== AD-LEDGER ADJUSTMENT USED TO VARY OFFER ===//
	//== NEED TO CORRECT CODE TO BE MODULAR FOR EACH STORE AD OFFER ===//
  //=========================================================\\
	
	//== ID-12 ==\\	//**** MARKED FOR REMOVAL -- ADDED TO FUNCTION ID-1 ***\\
	
//	function getStoreAdPointValue(v) {
//		// var v = storeOneOriginatingDiscount;
//		var store1 = (stores.store_1.discount * v).toFixed(2);
//		$('.js-pointValue-1').text(store1);
//		
//		var store2 = (stores.store_2.discount * v).toFixed(2);
//		$('.js-pointValue-2').text(store2);
//		
//		var store3 = (stores.store_3.discount * v).toFixed(2);
//		$('.js-pointValue-3').text(store3);
//	}
//	
	// getStoreAdPointValue(getOriginatingDiscountPercent);
	
		
	//=========================================================\\
	//=== BEGIN CODE FOR AD | ACTIVITY OCCURANCE ALGORITHM ===//
  //=========================================================//
	

	
	//=========================================================\\
	//=== GENERATING THE XY AXIS TABLES FOR AD ACTIVITY ===//
  //=========================================================//
	
	var yAdActivity = [];
	var y2PlusAdActivity = [];
	var x1Activity = [];
	
	function getXYAdActivity() { 
		
		function getY1(ab, y1, y2, ali, aq) {
			var pivot = ali * aq;
			var y1a = y1;
			var y2a = y2;
			
			for (var m = 0; m < ali; m++ ) {
				if (m < pivot ) {
					yAdActivity.unshift( parseFloat(ab + y1).toFixed(4) );
					y1 = parseFloat(y1 + y1a);
				}
			
				if (m >= pivot && m < ali ) {
					y2PlusAdActivity.push( parseFloat(ab - y2).toFixed(4) );
					y2 = parseFloat(y2 + y2a);
				}
			}
		}
		
		function getX1(xts) {
			for (var x = 0; x < xts; x++ ) {
				x1Activity.push(x);
			}
		}
		
		for (var i in rank ) {
			getY1(rank[i].activityBaseCo, rank[i].y1, rank[i].y2, rank[i].adLimit, rank[i].adAcquireAvg);
			getX1(rank[i].xTimeScale);
		}
		
		function combineAdActivityTable() {	
			for (var i in y2PlusAdActivity ) {
				yAdActivity.push(y2PlusAdActivity[i]);
			}
		}
		
		combineAdActivityTable();
		
	}
	
	getXYAdActivity();
	
	
	//=========================================================\\
	//=== CALCULATING & GENERATING XY-AXIS TABLE FOR AD ACTIVITY ===//
  //=========================================================//
	
	var activityTable = [];
	
	function getAdActivityTable() { // (assigned ad point value + (assigned ad point value *  occurrence table value))
		
		function calculateAdActivityTable(xt) {
			
			for (var x = 0; x < yAdActivity.length; x++ ) {
				var x3 = parseFloat(yAdActivity[x]);
				for (var x2 = 0; x2 < x1Activity.length; x2++ ) {
						activityTable.push(parseFloat(x3 - (yAdActivity[x] * xt)).toFixed(4));
						x3 = parseFloat(x3 - (yAdActivity[x] * xt));
				}
			}	
		}
		
		for (var i in rank ) {
			calculateAdActivityTable(rank[i].x1);
		}
	}
	
	getAdActivityTable();
//	console.log(activityTable[240]); // For checking values against excel table
//	console.log(activityTable[241]);
//	console.log(activityTable[242]);
//	console.log(activityTable[243]);
//	console.log(activityTable[244]);
//	console.log(activityTable[245]);
	
	
	//=========================================================\\
	//=== GET & CALCULATE THE AD ACTIVITY/OCCURANCE MULTIPLIER >> ===//
  //=========================================================//
	
	// 1. NEED THE NUMBER OF AD OFFER LEFT (40 LEFT) << NEED ACCESS TO STORES OBJECT
	// 2. NEED THE TIME LEFT FOR THE AD OFFER TO THE NEAREST HOUR (80 HOURS LEFT) << NEED TO CALL TIME AND GET THE RTIME
	// 3. NEED THE VALUE TO MUTLIPLY FROM THE ACTIVITY TABLE (1.22 )
	// 3.1. GET NUMBER OF OFFERS LEFT
	// 3.2. LOCATE VALUE ON Y-AXIS; GET THE INDEX NUMBER
	// 3.4. MULTIPLY Y-AXIS INDEX AND X-AXIS.LENGTH
	// 3.5. USE INDEX NUMBER TO LOCATE MULTIPLIER. APPLY TO AD
	
	function adOccuranceFactor() {
		var yIndex;
		var xIndex = x1Activity.length;
		var cIndex;
		var adOccuranceMultiplier = [];
		
		function calculate(ao, ct, et, sd ) {
			var t = getAdTime(et, ct);
			var rt = parseInt(t.total/(1000 * 60 * 60));
			
			for (var y1 = 0; y1 < yAdActivity.length; y1++ ) {
				if ( y1 == ao ) {
					yIndex = y1;
				}
			}
			
			cIndex = (yIndex * xIndex) - (xIndex - rt);
			console.log(cIndex);
			adOccuranceMultiplier.push(parseFloat(activityTable[cIndex]));
		}
		
		
		for (var i in stores ) {
			calculate(stores[i].adOffers, stores[i].adCreateTime, stores[i].adEndTime, stores[i].discount );
		}
		
		return adOccuranceMultiplier;
		
	}
	
	//=========================================================\\
	//=== GET & CALCULATE THE AD ACTIVITY/OCCURANCE MULTIPLIER >> ===//
  //=========================================================//
	
	// NEED TO WORK ON RANK FUNCTION AND FEATURES
	
	// NEED TO AD ACTIVITY OCCURANCE ALGORITHM/TABLE <<< DONE
	// NEED TO TIMER ALGORITHM/TABLE?? 
	// NEED RANK ALGORITHM/TABLES
	// NEED FUNCTION TO REDUCE TOTAL AD COUNT FROM CURRENT TOTAL
	// NEED TO WORK ON CREATING USERS
	// NEED TO CREATE USER RANK TABLE
	// NEED TO CREATE USER PODS
	// NEED TO CREATE TABLE FOR USER PODS
	// NEED TO CREATE REWARD DISTRIBUTION GRIDS
	// NEED TO ADD CREDIT CARD FORM
	
	
	
	
	//=========================================================\\
	//=== START CODE FOR INSERTIN STORE VALUES WITHIN DISPLAYED AD ===\\
	//=== NEED TO KEEP LAST BECAUSE ALGORITHM COMPONENTS NEED TO BE GENERATED ===//
	        //=== OTHERWISE UNDEFINED ERRORS WILL OCCURS ===//
  //=========================================================//
	
	//== ID-1 ==\\
	function compileAdList(st) {
		
		function updateList(c, sn, sa, sc, sz, so, sd) {
			$('.js-storeName-' + c).text(sn);
			$('.js-storeAddress-' + c).text(sa);
			$('.js-storeCity-' + c).text(sc);
			$('.js-distance-' + c).text("12.44 miles");
			$('.js-numberOfOffers-' + c).text(so);
			// Getting point value below uses functions ID-11 & ID-10 >> Variable within gets value from function ID-10
			var j = adOccuranceFactor([c]);
			console.log(j);
//			$('.js-pointValue-' + c).text((getOriginatingDiscountPercent(sd) * adOccuranceFactor()[c-1]).toFixed(2));
			$('.js-pointValue-' + c).text((getOriginatingDiscountPercent(sd) * j[c-1]).toFixed(2));
		}
		
		var count = 1;
		for (var i in stores) {
			updateList(count, stores[i].name, stores[i].address, stores[i].city, stores[i].zip, stores[i].adOffers, stores[i].discount);
			count++;
		}
		
	}
	
	compileAdList(stores);
	
	
	
	
	
	
	
	
	
	
	
	
	
	

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


























