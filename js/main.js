
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
			
			rankLv: 1,
			baseAdConvertRate: 2.5, 
			adjDcr: 0, //== ( adjDcr + baseAdConvertRabe ) = actualStoreConvertRate
			activeDcr: 2.5,
			
			adOffers: 19,
			currentTime: new Date(),
			adCreateTime: "May 26 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 5821, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.
			
			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 72,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 80,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 80,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 70,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 70,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 40,
			
			preAccumulatedAdPointCount: 0,
			lastAccumulatedAdPointCount: 0,
			accumulatedAdPointCount: 40
		},
		
		store_2: {
			name: "Organic Grill",
			address: "23 Organic Grill Street",
			city: "Minneapolis",
			zip: "55411",
			discount: 0.2130,
			
			rankLv: 1,
			baseAdConvertRate: 1.5, 
			adjDcr: 0, //== ( adjDcr + baseAdConvertRabe ) = actualStoreConvertRate
			activeDcr: 2.5,
			
			adOffers: 48,
			currentTime: new Date(),
			adCreateTime: "May 31 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 6000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.
			
			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 72,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 80,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 80,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 70,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 70,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 40,
			
			preAccumulatedAdPointCount: 0,
			lastAccumulatedAdPointCount: 0,
			accumulatedAdPointCount: 40
		},
		
		store_3: {
			name: "Pizza Joint",
			address: "999 Pizza Joint Ave",
			city: "Minneapolis",
			zip: "55404",
			discount: 0.1800,

			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0, 
			
			adOffers: 47,
			currentTime: new Date(),
			adCreateTime: "May 31 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 5000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 72,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 80,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 80,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 70,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 70,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 40,
			
			preAccumulatedAdPointCount: 0,
			lastAccumulatedAdPointCount: 0,
			accumulatedAdPointCount: 40
		},

		store_4: {
			name: "Take Out Sushi",
			address: "672 Take Out Sushi Rd",
			city: "Minneapolis",
			zip: "55409",
			discount: 0.1700,

			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0, 
			
			adOffers: 46,
			currentTime: new Date(),
			adCreateTime: "May 31 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 72,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 80,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 80,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 70,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 70,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 40,
			
			preAccumulatedAdPointCount: 0,
			lastAccumulatedAdPointCount: 0,
			accumulatedAdPointCount: 40
		},

		store_5: {
			name: "Get Me My Veggies",
			address: "43 Veggie Street",
			city: "Minneapolis",
			zip: "55444",
			discount: 0.1600,
			
			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0,
			
			adOffers: 45,
			currentTime: new Date(),
			adCreateTime: "May 31 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 72,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 80,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 80,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 70,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 70,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 40,
			
			preAccumulatedAdPointCount: 0,
			lastAccumulatedAdPointCount: 0,
			accumulatedAdPointCount: 40
		},

		store_6: {
			name: "Good Stuff Grill",
			address: "783 Good Stuff Grill",
			city: "Minneapolis",
			zip: "55416",
			discount: 0.1500,
			
			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0, 
			
			adOffers: 44,
			currentTime: new Date(),
			adCreateTime: "May 31 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 720,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 800,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 100,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 700,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 700,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 400,
			
			preAccumulatedAdPointCount: 100,
			lastAccumulatedAdPointCount: 100,
			accumulatedAdPointCount: 100
		},

		store_7: {
			name: "The Good Bake",
			address: "11 Good Bake Street",
			city: "Minneapolis",
			zip: "55411",
			discount: 0.1400,
			
			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0,
			
			adOffers: 43,
			currentTime: new Date(),
			adCreateTime: "May 31 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 720,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 800,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 100,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 700,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 700,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 400,
			
			preAccumulatedAdPointCount: 100,
			lastAccumulatedAdPointCount: 100,
			accumulatedAdPointCount: 100
		},

		store_8: {
			name: "Sushi Dine",
			address: "409 Sushi Dine Drive",
			city: "Minneapolis",
			zip: "55410",
			discount: 0.1300,

			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0, 
			
			adOffers: 42,
			currentTime: new Date(),
			adCreateTime: "May 31 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 720,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 800,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 100,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 700,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 700,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 400,
			
			preAccumulatedAdPointCount: 100,
			lastAccumulatedAdPointCount: 100,
			accumulatedAdPointCount: 100
		},

		store_9: {
			name: "Burger Burger",
			address: "335 Burger Street",
			city: "Minneapolis",
			zip: "55422",
			discount: 0.1200,
			
			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0,
			
			adOffers: 41,
			currentTime: new Date(),
			adCreateTime: "May 31 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 720,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 800,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 100,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 700,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 700,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 400,
			
			preAccumulatedAdPointCount: 100,
			lastAccumulatedAdPointCount: 100,
			accumulatedAdPointCount: 100
		},

		store_10: {
			name: "Cheesy Grill",
			address: "78 Cheesy Grill Rd",
			city: "Minneapolis",
			zip: "55422",
			discount: 0.1100,
			
			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0,
			
			adOffers: 40,
			currentTime: new Date(),
			adCreateTime: "May 30 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 720,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 800,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 100,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 700,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 700,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 400,
			
			preAccumulatedAdPointCount: 100,
			lastAccumulatedAdPointCount: 100,
			accumulatedAdPointCount: 100
		},

		store_11: {
			name: "The Hot Pot",
			address: "466 Hot Pot Street",
			city: "Minneapolis",
			zip: "55430",
			discount: 0.1000,
			
			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0,
			
			adOffers: 39,
			currentTime: new Date(),
			adCreateTime: "May 30 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 720,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 800,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 100,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 700,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 700,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 400,
			
			preAccumulatedAdPointCount: 100,
			lastAccumulatedAdPointCount: 100,
			accumulatedAdPointCount: 100
		},

		store_12: {
			name: "Green House",
			address: "567 Green House Rd",
			city: "Minneapolis",
			zip: "55444",
			discount: 0.3000,
			
			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 0,
			
			adOffers: 29,
			currentTime: new Date(),
			adCreateTime: "May 30 2016",
			adEndTime: "June 02 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 7000, // SET FOR DEMONSTATION
			rankTimePeriod: new Date(2016, 4, 24, 0, 0, 0, 0 ), // NEED A FUNCTION THAT WILL ALLOW THIS DATE TO SET FOR A DEFINED PERIOD & RESET AFTER A DEFINED NUMBER OF DAYS. THIS IS DIFFERENT FOR EACH ADVERTISER BASED ON REGISTRATION DATE.

			preRankMeasurementTimeSegment: 0,
			
			preClicksCount: 0, 
			lastClickCountMin: 0, 
			clicksCount: 720,
			
			preViewsCount: 0, 
			lastViewsCountMin: 0, 
			viewsCount: 800,
			
			preReviewsCount: 0, 
			lastReviewsCount: 0, 
			reviewsCount: 100,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 700,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 700,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 400,
			
			preAccumulatedAdPointCount: 100,
			lastAccumulatedAdPointCount: 100,
			accumulatedAdPointCount: 100
		}
		
	} //===== END HARD CODE STORES INTO OBJECTS =====//
	

//======================== OUTLINE OF DOCUMENT =============================\\
//==========================================================================\\
	
//SECTION A ******* OBJECTS WITH CONFIGURATION PARAMETERS
//SECTION B ******* GET AND FORMAT TIME FUNCTIONS 
//SECTION C ******* GETTING OBJECTS AND ITS PROPERTIES INTO AN ARRAY 
//SECTION D ******* GET INPUT-BOX VALUES FROM INPUT-BOX
//SECTION E ******* SET VALUE FUNCTIONS FOR ADVERTISERS
//
//SECTION F ******* SET X-AXIS HEADER AND Y-AXIS SIDEBAR BASE VALUE FUNCTIONS
//  SECTION F1 ****** FOR AD-LEDGER ALGORITHM
//  SECTION F2 ****** FOR RANK MEASUREMENT ALGORITHM
//  SECTION F3 ****** FOR AD-PERFORMANCE ALGORITHM
//
//SECTION G ******* GENERATE Y-AXIS SIDEBAR AFTER SETTING ITS BASE VALUES
//  SECTION G1 ****** FOR AD-LEDGER ALGORITHM
//  SECTION G2 ****** FOR RANK MEASUREMENT ALGORITHM
//  SECTION G3 ****** FOR AD-PERFORMANCE ALGORITHM
//
//SECTION H ******* GET VALUE FUNCTIONS FROM ADVERTISER AND PARAM OBJECT FOR ALGORITHM
//
//SECTION I ******* GENERATE/COMPILE FINAL CALCULATED XY TABLES VALUES FOR ALGORITHMS
//  SECTION I1 ****** FOR AD-LEDGER ALGORITHM
//  SECTION I2 ****** FOR RANK MEASUREMENT ALGORITHM
//  SECTION I3 ****** FOR AD-PERFORMANCE ALGORITHM
//
//SECTION J ******* GET ARRAY INDEX-NUMBER FOR RETRIEVING VALUE FROM XY ALGORITM TABLES
//  SECTION J1 ****** FOR AD-LEDGER ALGORITHM
//  SECTION J2 ****** FOR RANK MEASUREMENT ALGORITHM
//  SECTION J3 ****** FOR AD-PERFORMANCE ALGORITHM
//
//SECTION K ******* GET ACTIVE MODIFIER/MULTIPLIER VALUE FROM XY ALGORITHM TABLE
//  SECTION K1 ****** FOR AD-LEDGER ALGORITHM
//  SECTION K2 ****** FOR RANK MEASUREMENT ALGORITHM
//  SECTION K3 ****** FOR AD-PERFORMANCE ALGORITHM
//
//SECTION L ******* UPDATE AND APPLY NEW VALUE FUNCTIONS
//SECTION M ******* BUTTONS FOR INVOKING UPDATE / APPLY FUNCTIONS
	
	
  //=*************************************************  OBJECTS THAT CONTAIN CONFIGURATION PARAMETERS  *****************************************************\\
	//=********************************************************************************************************************************************************\\
	//=*************************************************************** START SECTION A ************************************************************************\\
	
	//== A-00 ==\\
	var rankTimeMeasurementSettingsForAdvertiserObject = {
		
		lv1: {
			rankMTime: 5, 
			rankMOccurences: 3, // in minutes
			actionValue: 1, // number of points awarded per successful action
			minutes: 60,
			hours: 24,
			setRLv: 1,
			adEndTimeForOffers: 5
		},
		
		lv2: {
			rankMTime: 6, // in days
			rankMOccurences: 3, // in minutes
			actionValue: 1, // number of points awarded per successful action
			minutes: 60,
			hours: 24,
			setRLv: 2,
			adEndTimeForOffers: 5
		}
	};
	
	//== A-01 ==\\	
	var adPerformanceTableConfigurationSettingsForAdvertiserObject = {
		
		lv1: { 
			maxScale: 1,
			y1: 0.03,
			y2: 0.01,
			x1: 0.005,
			xTimeScale: 120, //== THIS IS THE NUMBER OF TIME SEGMENTS IN HOURS THAT AN AD OFFER IS MEASURED || EXAMPLE ( (((5DAYS x 24) / 120) * 60) = EVERY 60 MINS  )
			adLimit: 50, // however, the amount of time available will determine actual amount unique for each advertiser
			estAdRedemptionAvg: 0.50, // the pivot point. An estimate in the number of ads that will be acquired. y-axis is plus or minus from this point.
			mTimeSegments: function() { //=== SETTING RANK MEASUREMENT TABLE PARAMS FOR ADVERTISER  ===//
				var mp = rankTimeMeasurementSettingsForAdvertiserObject.lv1;
				return Number(parseFloat( (mp.rankMTime * mp.minutes * mp.hours) / mp.rankMOccurences).toFixed(2));
				//******** THIS ALREADY SUBDIVIDES THE TIME INTO 3, 4, ETC. MINUTES ************* !! IMPORTANT NOTE !! ***\\
			}
		},
		
		lv2: {
			maxScale: 1,
			y1: 0.03,
			y2: 0.01,
			x1: 0.005,
			xTimeScale: 120, // the maximum amount of time an ad offer is live (120 hours in this case) 
			adLimit: 50, // however, the amount of time available will determine actual amount unique for each advertiser
			estAdRedemptionAvg: 0.50, // the pivot point. An estimate in the number of ads that will be acquired. y-axis is plus or minus from this point.
			mTimeSegments: function() {
				var mp = rankTimeMeasurementSettingsForAdvertiserObject.lv1;
				return Number(parseFloat( (mp.rankMTime * mp.minutes * mp.hours) / mp.rankMOccurences).toFixed(2));
				//******** THIS ALREADY SUBDIVIDES THE TIME INTO 3, 4, ETC. MINUTES ************* !! IMPORTANT NOTE !! ***\\
			}
		},
		
	};
	
	//== A-02 ==\\
	var rankConfigMeasurementSettingsForAdvertiserObject = { // EACH RANK WILL HAVE ITS OWN RANK MEASUREMENT VALUES << POSSIBLY INSERT INTO SETRANK OBJECT UNDER CORRESPONDING LEVEL NUMBER
		// ATTEMPTED TO ADD TO "SETRANK" OBJECT BUT TOO LARGE. DECIDED TO SEPERATE CONCERNS BECAUSE THERE'S EXPECTED TO BE OVER 40 RANK LEVELS.
		
		lv1: {
			shopperActivity: {
				clicks: 0.2100,
				views: 0.2100,
				reviews: 0.2200,
				payablePod: 0,
				notPayablePod: 0, // when the customer does not have a pod available at time of link
				podMax: 0, // Keep tally of every advertisers customer that has reached their max pod link limit
				rewardGridVariationLow: {
					low1: 0,
					low2: 0,
					low3: 0
				},
				rewardGridVariationMid: {
					mid1: 0,
					mid2: 0,
					mid3: 0
				},
				rewardGridVariationHigh: {
					high1: 0,
					high2: 0,
					high3: 0
				}
			},	
			adRewardCurrency: {
				eligibleAmount: 0, // total amount awardable
				paidAmount: 0, // actual amount paid out of total eligible
				adRcAvailable: 0,
				secondTransaction: 0, // repeat purchase from same customer
				rcSecondTransaction: 0 // repeat purchase from same customer using rc
			},
			advertiserPerformance: {
				savedAdOccurences: 0.0208,
				purchaseOccurences: 0.0208,
				compoundDiscountOfferPercent: 0.0031,
				accumulatedAdPoint: 1.046,
				rankPointsEarned: 0,
				totalCashValueOfTransactions: 0,
				adOfferProductVariation: {
					cat1: 0,
					cat2: 0
				},
				adAcquisitionPercent: {
					oneToTenPercent: 0,
					tenToTwentyPercent: 0,
					twentyToThirtyPercent: 0,
					thirtyToFortyPercent: 0,
					fortyToFiftyPercent: 0
				},

			},
			advertiserSocialActions: {
				promotions: 0,
				sharing: 0,
				numberOfLinks: 0,
				totalNumberOfOffers: 0
			}
		},
			
		lv2: {
			shopperActivity: {
				clicks: 0.2100,
				views: 0.2100,
				reviews: 0.2200,
				payablePod: 0,
				notPayablePod: 0, // when the customer does not have a pod available at time of link
				podMax: 0, // Keep tally of every advertisers customer that has reached their max pod link limit
				rewardGridVariationLow: {
					low1: 0,
					low2: 0,
					low3: 0
				},
				rewardGridVariationMid: {
					mid1: 0,
					mid2: 0,
					mid3: 0
				},
				rewardGridVariationHigh: {
					high1: 0,
					high2: 0,
					high3: 0
				}
			},
			adRewardCurrency: {
				eligibleAmount: 0, // total amount awardable
				paidAmount: 0, // actual amount paid out of total eligible
				adRcAvailable: 0,
				secondTransaction: 0, // repeat purchase from same customer
				rcSecondTransaction: 0 // repeat purchase from same customer using rc
			},
			advertiserPerformance: {
				savedAdOccurences: 0.0208,
				purchaseOccurences: 0.0208,
				compoundDiscountOfferPercent: 0.0031,
				accumulatedAdPoint: 1.046,
				rankPointsEarned: 0,
				totalCashValueOfTransactions: 0,
				adOfferProductVariation: {
					cat1: 0,
					cat2: 0
				},

				adAcquisitionPercent: {
					oneToTenPercent: 0,
					tenToTwentyPercent: 0,
					twentyToThirtyPercent: 0,
					thirtyToFortyPercent: 0,
					fortyToFiftyPercent: 0
				},

			},
			advertiserSocialActions: {
				promotions: 0,
				sharing: 0,
				numberOfLinks: 0,
				totalNumberOfOffers: 0
			}
		}
		
	};
	
	//== A-03 ==\\
	var baseAdDiscountConvertParamObject = {
		
		set_1: {
			baseAdPointMax: 1000,
			baseAdPointPivotPercent: 0.50,
			baseAdPointAvgDiscount: 0.20,
			lastPeriodLedgerPercent: 0,
		},
		set_2: {
			baseAdPointMax: 1000,
			baseAdPointPivotPercent: 0.60,
			baseAdPointAvgDiscount: 0.30,
			lastPeriodLedgerPercent: 0,
		},	
		set_3: {
			baseAdPointMax: 1000,
			baseAdPointPivotPercent: 0.70,
			baseAdPointAvgDiscount: 0.40,
			lastPeriodLedgerPercent: 0,
		},
	}
	
	//== A-04 ==\\
	var adLedgerDivviationParamObject = {
		
		adLedgerPivotPercent_group1: {
			grocery1: 0.1433,
			grocery2: 0.1796,
			grocery3: 0.1931,
			grocery4: 0.2375,
		},
		adLedgerPivotPercent_group2: {
			clothing1: 0.2121,
			clothing2: 0.2450,
			clothing3: 0.2780,
			clothing4: 0.3500,
		},
		adLedgerPivotPercent_group3: {
			quickServeFood1: 0.243,
			quickServeFood2: 0.243,
			quickServeFood3: 0.243,
			quickServeFood4: 0.243,
		},
		adLedgerPivotPercent_group4: {
			sport1: 0.183,
			sport2: 0.183,
			sport3: 0.183,
			sport4: 0.183,
		}
		
	}
	
	//== A-05 ==\\
	var innerRankLevelSidebarObject = {
		
		lvl_1: {
			startingNumber: 0.30,
			yAxisPivot_Point1: 0.35,
			yAxisPivot_Point1Spread: 0.14,
			yAxisPivot_Point2: 0.60,
			yAxisPivot_Point2Spread: 0.31,
			yAxisPivot_Point3: 0.80,
			yAxisPivot_Point3Spread: 0.31,
			numberOfInnerLevels: 40
		}
		
	}
	
	//== A-06 ==\\
	var innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser = {
		
		adPointAddition_Lv1: {
			y_top: 0.000020,
			y_bottom: 0.000015,
			x1_topLeft: 0.0015,
			x1_bottomLeft: 0.0011,
			x2_topRight: 0.0025,
			x2_bottomRight: 0.0020,
			xMeasureSegments: adPerformanceTableConfigurationSettingsForAdvertiserObject.lv1.mTimeSegments(),
//			yMeasureSegments: (calcTotalPossibleRankPoints() / rankTimeMeasurementSettingsForAdvertiserObject.lv1.rankMOccurences), //== relies on ID-27 & mParamObject
			yPivotTop: 0.50, //== as a percentage of possible measurement segments
			yPivotBottom: 0.50, //== as a percentage of possible measurement segments
			xPivotLeft: 0.50, //== as a percentage of possible measurement segments
			xPivotRight: 0.50, //== as a percentage of possible measurement segments
			pivotStartVal: 2.5 ///== number in which increments and decrements start from == different for each rank level 
			//== ^^ higher number means greater amount of point variation through higher x and y incremental values
			
		},	
		adPointAddition_Lv2: {
			y_top: 0.000020,
			y_bottom: 0.000015,
			x1_topRight: 0.00001,
			x1_topLeft: 0.00027,
			x2_bottomLeft: 0.00025,
			x2_bottomRight: 0.000440,
			xMeasureSegments: adPerformanceTableConfigurationSettingsForAdvertiserObject.lv2.mTimeSegments(),
//			yMeasureSegments: (calcTotalPossibleRankPoints() / rankTimeMeasurementSettingsForAdvertiserObject.lv2.rankMOccurences), //== relies on ID-27 & mParamObject
			yPivotTop: 0.50, //== as a percentage of possible measurement segments
			yPivotBottom: 0.50, //== as a percentage of possible measurement segments
			xPivotLeft: 0.50, //== as a percentage of possible measurement segments
			xPivotRight: 0.50, //== as a percentage of possible measurement segments
			pivotStartVal: 2.5 ///== number in which increments and decrements start from == different for each rank level  
		}
		
	}
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
  //=*************************************************** GET AND FORMAT TIME FUNCTIONS  *********************************************************************\\
	//=********************************************************************************************************************************************************\\
	//=*************************************************************** START SECTION B ************************************************************************\\
	
	
	//== B-00 ==\\ ** MOVED FUNCTION FROM WITHIN THE CALCULATETIME FUNCTION **
	function getOfferEndTimeInNumberFormat() {
		var storeObj, storeNumber, aIndex, offerEndTime;
		
		storeObj = getStoresObj();
		storeNumber = getInputBoxSelectedStore();
		aIndex = storeNumber - 1;
		offerEndTime = Date.parse(storeObj[aIndex].adEndTime) - Date.parse(new Date());
		
		return offerEndTime;
	}
	
	//== B-01 ==\\
	function getTimeNowInNumberFormat() {
		var timeNow;
		
		timeNow = (new Date().getTime());
		return timeNow;
	}
	
	//== B-02 ==\\
	function formatCurrentTimeIntoDate() {
		var timeNow, seconds, minutes, hours, days;
		
		timeNow = getTimeNowInNumberFormat();
		
	  seconds = Math.floor( (timeNow/1000) % 60 );
		minutes = Math.floor( (timeNow/1000/60) % 60 );
		hours = Math.floor( (timeNow/(1000*60*60)) % 24 );
		days = Math.floor( timeNow/(1000*60*60*24) );
		
		return {
			'total': timeNow,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
		
	}
	
	//== B-03 ==\\
  function formatOfferEndTimeIntoDate() {
		var offerEndTime, seconds, minutes, hours, days;
		
		offerEndTime = getOfferEndTimeInNumberFormat();
		
	  seconds = Math.floor( (offerEndTime/1000) % 60 );
		minutes = Math.floor( (offerEndTime/1000/60) % 60 );
		hours = Math.floor( (offerEndTime/(1000*60*60)) % 24 );
		days = Math.floor( offerEndTime/(1000*60*60*24) );
		
		return {
			'total': offerEndTime,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
		
	}
	
	//== B-04 ==\\
	function getTimeDurationForRankLevelPeriod(rankLevel) {
		var rankTimeMeasureObj, rankTimeDuration, rIndex;
		
		rankTimeMeasureObj = getRankTimeMeasurementSettingsForAdvertiserObj();
		rIndex = rankLevel - 1;
		rankTimeDuration = rankTimeMeasureObj[rIndex].rankMTime * 24 * 60;
		return rankTimeDuration;
		
	}
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=************************************************* GET OBJECTS AND ITS PROPERTIES INTO AN ARRAY *****************************************************\\
	//=********************************************************************************************************************************************************\\
	//=*************************************************************** START SECTION C ************************************************************************\\
	
	//== C-00 ==\\
	function getStoresObj() {
		var storesObj = [];
		for ( var p1 in stores) {
			var pass1 = stores[p1]
			storesObj.push(pass1);
		}
		return storesObj;
	}
	
	//== C-01 ==\\
	function getStoresProp() {
		var storesProp = []; //== GET STORE NUMBER ( STORE_1, sTORE_2, ETC )
		for ( var p1 in stores) {
			var pass1 = stores[p1]
			storesProp.push(p1);
		}
		return storesProp;
	}
	
	//== C-02 ==\\
	function getAdPerformanceTableConfigurationSettingsForAdvertiserObj() {
		var adPerformanceObj = [];
		for ( var p1 in adPerformanceTableConfigurationSettingsForAdvertiserObject) {
			var pass1 = adPerformanceTableConfigurationSettingsForAdvertiserObject[p1]
			adPerformanceObj.push(pass1);
		}
		return adPerformanceObj;
	}
	
	//== C-03 ==\\
	function getAdPerformanceTableConfigurationSettingsForAdvertiserProp() {
		var rankSettingsProp = [];
		for ( var p1 in adPerformanceTableConfigurationSettingsForAdvertiserObject) {
			var pass1 = adPerformanceTableConfigurationSettingsForAdvertiserObject[p1]
			rankSettingsProp.push(p1);
		}
		return rankSettingsProp;
	}
	
	//== C-04 ==\\
	function getRankTimeMeasurementSettingsForAdvertiserObj() {
		var setMParamObj = [];
		for ( var p1 in rankTimeMeasurementSettingsForAdvertiserObject) {
			var pass1 = rankTimeMeasurementSettingsForAdvertiserObject[p1]
			setMParamObj.push(pass1);
		}
		return setMParamObj;
	}
	
	//== C-05 ==\\
	function getRankTimeMeasurementSettingsForAdvertiserProp() {
		var setMParamProp = [];
		for ( var p1 in rankTimeMeasurementSettingsForAdvertiserObject) {
			var pass1 = rankTimeMeasurementSettingsForAdvertiserObject[p1]
			setMParamProp.push(p1);
		}
		return setMParamProp;
	}
	
	//== C-06 ==\\
	//== GETS & RETURNS MEASUREMENT OBJECT [ KEY:VALUE ]
	function getRankConfigMeasurementSettingsForAdvertiserObj() {
		var rankMeasurementObj = [];
		
		for ( var p1 in rankConfigMeasurementSettingsForAdvertiserObject) {
			var pass1 = rankConfigMeasurementSettingsForAdvertiserObject[p1]
			for ( var p2 in pass1 ) {
				rankMeasurementObj.push(pass1[p2]);
			}
//			console.log(mTableAdverObj);
			return rankMeasurementObj;
		} 
	}
	
	//== C-07 ==\\
	//== GETS & RETURNS MREASUREMENT OBJECT KEY
	function getRankConfigMeasurementSettingsForAdvertiserProp() {
		var rankMeasurementProp = [];
		
		for ( var p1 in rankConfigMeasurementSettingsForAdvertiserObject) {
			var pass1 = rankConfigMeasurementSettingsForAdvertiserObject[p1];
			for ( var p2 in pass1 ) {
				var pass2 = pass1[p2];
//				mTableAdverProp.push(p2);
				for ( var p3 in pass2 ) {
					var pass3 = pass2[p3];
					rankMeasurementProp.push(p3);
//					console.log(p3);
				}
			}
			return rankMeasurementProp;
		}
	}
	
	//== C-08 ==\\
	function getBaseAdDiscountConvertParamObj() {
		var adLedgerBaseDiscountObj = [];
		
		for (var p1 in baseAdDiscountConvertParamObject ) {
			var pass1 = baseAdDiscountConvertParamObject[p1];
			adLedgerBaseDiscountObj.push(pass1);
		}
		
		return adLedgerBaseDiscountObj;
	}
	
	//== C-09 ==\\
	function getInnerRankLevelSidebarObj(rankLevel) {
		var innerRankLevelObj = [];
		
		for ( var p1 in innerRankLevelSidebarObject ) {
			if (rankLevel) {
				innerRankLevelObj.push(innerRankLevelSidebarObject[p1])
			}
		}
		return innerRankLevelObj;
		
	}
	
	//== C-10 ==\\
	function getActiveRankMeasurementValuesIntoAnArray() {
		var extractMeasurementValues, rankMeasurementObj;
		
		rankMeasurementObj = getRankConfigMeasurementSettingsForAdvertiserObj(); //=== { OBJECT FOR RANK MEASUREMENT PARAMETER SETTINGS AND VALUES } ==//
		extractMeasurementValues = [];
		
		for ( var p1 in rankMeasurementObj ) {
			var pass1 = rankMeasurementObj[p1];
			
			for ( var p2 in pass1 ) {
				var pass2 = pass1[p2];
				if ( pass2 > 0 && pass2 !== typeof object ) {
					extractMeasurementValues.push(pass2);
				}
				
				for ( var p3 in pass2 ) {
					var pass3 = pass2[p3];
					if ( pass3 > 0 && pass3 !== typeof object ) {
						extractMeasurementValues.push(pass3);
					}
				}
			}
		}
		return extractMeasurementValues;
	}
	
	//== C-11 ==\\ //== ACTIVE MEANS ITS MEASURED; HAS A VALUE GREATER THAN 0
	function getActiveRankMeasurementPropertiesIntoAnArray() {
		var extractedProperty, rankMeasurementObj;
		
		rankMeasurementObj = getRankConfigMeasurementSettingsForAdvertiserObj();
		extractedProperty = [];
		
		for ( var p1 in rankMeasurementObj ) {
			var pass1 = rankMeasurementObj[p1];
			
			for ( var p2 in pass1 ) {
				var pass2 = pass1[p2];
				if ( pass2 > 0 && pass2 !== typeof object ) {
					extractedProperty.push(p2.toLowerCase());
				}
				
				for ( var p3 in pass2 ) {
					var pass3 = pass2[p3];
					if ( pass3 > 0 && pass3 !== typeof object ) {
						extractedProperty.push(p3.toLowerCase());
					}
				}
			}
		}
		return extractedProperty;
		
	}
	
	//== C-12 ==\\
	function getInnerRankLevelDCRMeasurementTableObject() {
		var innerRankLevelDCRTableObj = [];
		
		for ( var p1 in innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser ) {
			var pass1 = innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser[p1];
			innerRankLevelDCRTableObj.push(pass1);
		}
		return innerRankLevelDCRTableObj;
		
	}
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=************************************************************  GET INPUT-BOX VALUES FUNCTIONS **********************************************************\\
	//=*******************************************************************************************************************************************************\\
	//=****************************************************************START SECTION D ***********************************************************************\\
	
	//== D-00 ==\\
	//== GETS THE SELECTED MEASUREMENT PARAM
	function getInputBoxSelectedMeasurementParam() {
		var selectMeasurement = $('#measurements option:selected').text();
		return (selectMeasurement).toLowerCase();
	}
	
	//== D-01 ==\\
	function getInputBoxSelectedStore() {
		var selectStore = document.getElementById('storeNumber').value;
		return Number(selectStore);
	}
	
	//== D-02 ==\\
	function getInputBoxSelectedRankLevel() {
		var selectRankLevel = document.getElementById('rankLevel').value;
		return Number(selectRankLevel);
	}
	
	//== D-03 ==\\
	function getInputBoxMeasurementIncreaseOrDecreaseAmount() {
		var value = document.getElementById('changeMSetValue').value;
		return Number(value);
	}
	
	//== D-04 ==\\
	function getInputBoxSelectionForTimePeriod() {
		var selected;
		selected = $('#setDate option:selected').text();
		return (selected).toLowerCase();
	}
	
	//== D-05 ==\\
	//== RETURNS DATE IN NUMBER FORMAT
	function getInputBoxTimePeriod() {
		var month, day, year, time, monthName, monthID;
		
		monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		monthID = document.getElementById('getMonth').value;
		month = monthName[monthID];
		day = document.getElementById('getDay').value;
		year = document.getElementById('getYear').value;
		time = new Date(month + ' ' + day + ' ' + year).getTime();
		
		return time;
	}
	
	//== D-06 ==\\
	function getInputBoxQty() {
		var qty;
		qty = $('#quantity').val();
		return Number(qty);
	}
	
	//== D-07 ==\\
	function getInputBoxDiscountPercent() {
		var discount; 
		discount = $('#discountPercent').val();
		return Number(parseFloat(discount/100/100).toFixed(4));
	}
	
	//== D-08 ==\\	
	function getInputBoxToChangeAdLedgerDivviationPercent() {
		var inputBoxDivviationPercent, inputBoxConfigNumber, formatInputDP, baseAdDiscountConvertObj, dcrPivotPercent;
		
		inputBoxDivviationPercent = $('#setAdDivviationPercent').val();
		inputBoxConfigNumber = $('#setConfigNumber').val();
		formatInputDP = Number((inputBoxDivviationPercent/100).toFixed(4))
		baseAdDiscountConvertObj = [];
		dcrPivotPercent = 0;
		
		for ( var p1 in baseAdDiscountConvertParamObject ) {
			baseAdDiscountConvertObj.push(baseAdDiscountConvertParamObject[p1])
		}
		
		if ( formatInputDP <= baseAdDiscountConvertObj[inputBoxConfigNumber].lastPeriodLedgerPercent ) {
			dcrPivotPercent = (baseAdDiscountConvertObj[inputBoxConfigNumber].baseAdPointAvgDiscount - (baseAdDiscountConvertObj[inputBoxConfigNumber].baseAdPointAvgDiscount - formatInputDP) );
		} else if ( formatInputDP > baseAdDiscountConvertObj[inputBoxConfigNumber].lastPeriodLedgerPercent ) {
			dcrPivotPercent = (baseAdDiscountConvertObj[inputBoxConfigNumber].baseAdPointAvgDiscount + (formatInputDP - baseAdDiscountConvertObj[inputBoxConfigNumber].baseAdPointAvgDiscount) );
		}
		
		baseAdDiscountConvertObj[inputBoxConfigNumber].lastPeriodLedgerPercent = dcrPivotPercent;
		
		return dcrPivotPercent;
	}
	
	//== D-09 ==\\
	function getInputBoxAdLedgerConfigNumber() {
		var adLedgerConfigNumber = $('#setConfigNumber').val();
		return adLedgerConfigNumber;
	}
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=********************************************************* SET VALUE FUNCTIONS FOR ADERTISERS **********************************************************\\
	//=*******************************************************************************************************************************************************\\
	//=****************************************************************START SECTION E ***********************************************************************\\
	
	//== E-00 ==\\
	//== SETS GENERAL/BASE DISCOUNT CONVERT RATE FOR A DEFINED SET << STORE NUMBER IS NOT A REQURIED PARAMETER
	function setGeneralBaseAdDiscountConvertRate() {
		var stores, whichConfigSet, baseDcrObj, baseDCR, adPointMax, adPointPivot, adAvgDiscount, lastPeriodAdLedgerPercent;
		
		stores = getStoresObj();
		whichConfigSet = getInputBoxAdLedgerConfigNumber(); //== GETS THE CONFIG SETTINGS FROM baseAdDiscountConvertParamObject OBJECT
		baseDcrObj = [];
		
		for ( var p1 in baseAdDiscountConvertParamObject ) {
			var pass1 = baseAdDiscountConvertParamObject[p1];
			baseDcrObj.push(pass1);
		}
		
		if (whichConfigSet || whichConfigSet === 0 ) {
			adPointMax = baseDcrObj[whichConfigSet].baseAdPointMax;
			adPointPivot = baseDcrObj[whichConfigSet].baseAdPointPivotPercent;
			adAvgDiscount = baseDcrObj[whichConfigSet].baseAdPointAvgDiscount;
			baseDCR = ( (adPointPivot * adPointMax)/( adAvgDiscount * adPointMax ));
		}
		
		for ( var p2 = 0; p2 < stores.length; p2++ ) {
			stores[p2].baseAdConvertRate = baseDCR;
		}
		
		return baseDCR;		
		
	}
	
	//== E-01 ==\\
	//== SET STORE GENERAL/BASE DISCOUNT CONVERT RATE
	function setAdvertiserBaseAdDiscountRate( ) {
		var storeNumber, whichConfigSet, storeObj, aIndex, baseDcrObj, calculatedDCR, adPointMax, adPointPivot, adAvgDiscount;
		
		storeNumber = getInputBoxSelectedStore(); //== THIS RETURNS THE STORE NUMBER TO IDENTIFY WHICH STORE TO UPDATE THE BASEDCR
		whichConfigSet = getInputBoxAdLedgerConfigNumber(); //== THIS RETURNS THE CONFIG SET TO USE ON BASEDCROBJ
		storeObj = getStoresObj();
		aIndex = storeNumber - 1;
		baseDcrObj = [];
		
		for ( var p1 in baseAdDiscountConvertParamObject ) {
			var pass1 = baseAdDiscountConvertParamObject[p1];
			baseDcrObj.push(pass1);
		}
		
		if (whichConfigSet || whichConfigSet === 0 ) {
			adPointMax = baseDcrObj[whichConfigSet].baseAdPointMax;
			adPointPivot = baseDcrObj[whichConfigSet].baseAdPointPivotPercent;
			adAvgDiscount = baseDcrObj[whichConfigSet].baseAdPointAvgDiscount;
			calculatedDCR = ( (adPointPivot * adPointMax)/( adAvgDiscount * adPointMax ));
		}
		
		storeObj[aIndex].baseAdConvertRate = calculatedDCR;
		return storeObj[aIndex].baseAdConvertRate;	
	}
	
	//== E-02 ==\\
	//== PRIMARY FUNCTION GETS VALUES FROM INPUT-BOX == HOW THE STORE IS IDENTIFIED
	//== SETS THE MEASUREMENT VALUE; RETURNS THE TOTAL ACCUMULATED RANK POINTS 
	function setMeasurementParameterValuesUtilizingInputBoxValues() {
		var store, storeNumber, rankLevel, measurement, increaseDecrease, aIndex, minThresholdValue, currentMeasurementCount, currentTimeSegment ;
		
		store = getStoresObj();
		storeNumber = getInputBoxSelectedStore();
		rankLevel = getInputBoxSelectedRankLevel();
		measurement =	getInputBoxSelectedMeasurementParam();
		increaseDecrease = getInputBoxMeasurementIncreaseOrDecreaseAmount();
		aIndex = (storeNumber-1);
		currentTimeSegment = getStoresCurrentTimeSegment(storeNumber);
		
		store[aIndex].rankLv = rankLevel;
		
		if ( measurement === 'clicks'.toLowerCase() ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].clicksCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preClicksCount && parseInt(minThresholdValue) === store[aIndex].lastClickCountMin && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].clicksCount += increaseDecrease;
				store[aIndex].lastClickCountMin = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'views'.toLowerCase() ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].viewsCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preViewsCount && parseInt(minThresholdValue) === store[aIndex].lastViewsCountMin && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].viewsCount += increaseDecrease;
				store[aIndex].lastViewsCountMin = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'reviews'.toLowerCase() ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].reviewsCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preReviewsCount && parseInt(minThresholdValue) === store[aIndex].lastReviewsCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].reviewsCount += increaseDecrease;
				store[aIndex].lastReviewsCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'savedAdOccurences'.toLowerCase() ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].savedAdOccurencesCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preSavedAdOccurencesCount && parseInt(minThresholdValue) === store[aIndex].lastSavedAdOccurencesCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].savedAdOccurencesCount += increaseDecrease;
				store[aIndex].lastSavedAdOccurencesCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'purchaseOccurences'.toLowerCase() ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].purchaseOccurencesCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].prePurchaseOccurencesCount && parseInt(minThresholdValue) === store[aIndex].lastPurchaseOccurencesCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].purchaseOccurencesCount += increaseDecrease;
				store[aIndex].lastPurchaseOccurencesCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'compoundDiscountOfferPercent'.toLowerCase() ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].compoundDiscountOfferPercentCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preCompoundDiscountOfferPercentCount && parseInt(minThresholdValue) === store[aIndex].lastCompoundDiscountOfferPercentCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].compoundDiscountOfferPercentCount += increaseDecrease;
				store[aIndex].lastCompoundDiscountOfferPercentCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'accumulatedAdPoint'.toLowerCase() ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].accumulatedAdPointCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preAccumulatedAdPointCount && parseInt(minThresholdValue) === store[aIndex].lastAccumulatedAdPointCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].accumulatedAdPointCount += increaseDecrease;
				store[aIndex].lastAccumulatedAdPointCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		}
		
	}
	
	//== E-03 ==\\
	//== SETS THE TIME FOR THE SELECTED PARAM; RETURNS THE TIME IN NUMBER FORMAT
	function setAdvertiserTimeMeasureParamValues() {
		var timePropToUpdate, time, storeNumber, storeObject, aIndex;
		
		storeNumber = getInputBoxSelectedStore();
		timePropToUpdate = getInputBoxSelectionForTimePeriod();
		time = getInputBoxTimePeriod();
		storeObject = getStoresObj();
		aIndex = (storeNumber-1);
		
		if (timePropToUpdate === ('Set Rank Period Start Date').toLowerCase() )   {
			storeObject[aIndex].rankTimePeriod = time;
			return storeObject[aIndex].rankTimePeriod;
		}
		else if (timePropToUpdate === ('Set Offer Create Date').toLowerCase() ) {
			storeObject[aIndex].adCreateTime = time;
			return storeObject[aIndex].adCreateTime;
		}
		else if (timePropToUpdate === ('Set Offer End Date').toLowerCase() ) {
			storeObject[aIndex].adEndTime = time;
			return storeObject[aIndex].adEndTime;
		}	
		
	}
	
	//== E-04 ==\\
	//== SETS THE AD OFFER QTY & DISCOUNT PERCENT
	function setAdvertiserDiscountAndQty() {
		var activeDiscount, activeQty, storeNumber, storeObject, index;
		
		storeNumber = getInputBoxSelectedStore();
		activeQty = getInputBoxQty();
		activeDiscount = getInputBoxDiscountPercent();
		storeObject = getStoresObj();
		index = (storeNumber-1)
		
		if (storeNumber) {
			storeObject[index].discount = activeDiscount;
			storeObject[index].adOffers = activeQty;
			return storeObject[index].discount;
		}
		
	}
	
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=******************************************* SET X-AXIS HEADER AND Y-AXIS SIDEBAR BASE VALUE FUNCTIONS *************************************************\\
	//=*******************************************************************************************************************************************************\\
	//=****************************************************************START SECTION F ***********************************************************************\\
	
	//**************************** FOR AD-LEDGER ALGORITHM ***************************************\\
	//********************************** SECTION F1 **********************************************\\
	//== F-00 ==\\
	//** GENERATE & SET X-AXIS HEADER VALUES FOR AD LEDGER DIVVIATION
	function setXAxisAdLedgerDiscountPercentHeader() {
		var xAxisHeader, xAxisDiscountPercentMin, xAxisDiscountPercentMax, index;
		
		xAxisHeader = [];
		xAxisDiscountPercentMin = 0.0001;
		xAxisDiscountPercentMax = 1.0000;
		index = 0;
		
		for (var p1 = xAxisDiscountPercentMin; p1 <= xAxisDiscountPercentMax; p1 = Number(parseFloat(p1 + xAxisDiscountPercentMin).toFixed(4)) ) {
			xAxisHeader.push(p1);
		}
		return xAxisHeader;
		
	}
	
	//== F-01 ==\\
	//** GENERATE & SET Y-AXIS VALUES FOR Y-AXIS MULTIPLIER USE
	function setYAxisLedgerDiscountPercentDivviationRange() {
		var yAxisSidebar, yAxisAdLedgerPercentMin, yAxisAdLedgerPercentMax, index;
		
		yAxisSidebar = [];
		yAxisAdLedgerPercentMin = 0.0001;
		yAxisAdLedgerPercentMax = 1.0000;
		index = 0;
		
		for (var p1 = yAxisAdLedgerPercentMin; p1 <= yAxisAdLedgerPercentMax; p1 = Number(parseFloat(p1 + yAxisAdLedgerPercentMin).toFixed(4)) ) {
			yAxisSidebar.push(p1);
		}
		
		return yAxisSidebar;
	}
	
	//== F-02 ==\\ 
	//** GENERATE Y-AXIS MULTIPLIER FOR X-AXIS USE
	function setYAxisAdLedgerDiscountPivotSidebar(yAxisDivviationSidebar) {
		var yAxisPivotSidebar, pivotPercent, pivotPercentIndex, baseDCR, baseDCRconvert, yAxisBaseMultiplierSidebar, pivotMultiplierIndex, pivotMultiplier;
		
		//****** COMPILE FIRST Y-AXIS SIDEBAR VALUES  ***************************************************************\\ 
		yAxisPivotSidebar = []; //== STEP THREE
		pivotPercent = getInputBoxToChangeAdLedgerDivviationPercent();  //== STEP ONE >> THIS RETURNS THE PIVOT POINT PERCENT DETERMINED BY THE AD-LEDGERS CURRENT VALUE  <<<<<<<<<<<<   COME BACK, THIS NEEDS TO BE DETEMINED AUTONOMOUSLY
		pivotPercentIndex = Number(((pivotPercent/100) * yAxisDivviationSidebar.length).toFixed(4)); //==STEP TWO >> THE RETURN VALUE IS THE PIVOT INDEX FOR FIRST Y-AXIS
		baseDCR = setGeneralBaseAdDiscountConvertRate(); //== STEP FOUR >> THE BASE DCR IS RETURNED USING CONFIG PARAMETERS
		
		for ( var p1 = 0; p1 < yAxisDivviationSidebar.length; p1++ ) {
			if ( p1 < pivotPercentIndex ) {
				yAxisPivotSidebar.unshift(Number(( 1 - parseFloat(yAxisDivviationSidebar[p1])).toFixed(4)));
			}
			else {
				yAxisPivotSidebar.push(Number(( (1 - (pivotPercent/100)) + parseFloat(yAxisDivviationSidebar[p1])).toFixed(4)));
			}
		}
		
		//========== COMPILE SECOND Y-AXIS SIDEBAR -- TABLE MULTIPLIER VALUES RETURNED FOR USE  ====================================================\\
		//=== IF MULTIPLIER NEEDS TO BE INCREASED OR DECREASED AT A PIVOT POINT, ADD A MODIFIER VALUE TO A SECOND PIVOT POINT \\
		//=== FINAL CHANGES ADD TO ADLEDGERPARAM OBJECT ===\\
		yAxisBaseMultiplierSidebar = []; //== STEP FIVE
		baseDCRconvert = baseDCR; //== STEP 6
		pivotMultiplierIndex = (yAxisPivotSidebar.length * 0.40); //== STEP 7
		pivotMultiplier = 0.25; //==STEP 8
		
		for (var p2 = 0; p2 < yAxisDivviationSidebar.length; p2++ ) {
			if  (p2 < pivotPercentIndex ) {
				yAxisBaseMultiplierSidebar.push(Number((yAxisPivotSidebar[p2] * baseDCRconvert).toFixed(4)));
			} else if ( p2 > pivotPercentIndex && p2 < pivotMultiplierIndex ) {
				yAxisBaseMultiplierSidebar.push(Number(((pivotMultiplier + yAxisPivotSidebar[p2]) * baseDCRconvert).toFixed(4)));
			} else {
				yAxisBaseMultiplierSidebar.push(Number((yAxisPivotSidebar[p2] * baseDCRconvert).toFixed(4)));
			}
		}
		
//		console.log([baseDCR, yAxisPivotSidebar, yAxisBaseMultiplierSidebar ]);
		return yAxisBaseMultiplierSidebar;
	} 
	
	//**************************** FOR RANK MEASUREMENT ALGORITHM ***************************************\\
	//********************************** SECTION F2 **********************************************\\
	
	//== F-03 ==\\
	//==  { REQUIRES THE INNER-RANK LEVEL OF STORE TO PASSED IN }
	function getXAxisHeaderForInnerRankLevelMeasurementTable(innerRankLevel) {
		var innerRankLevelDCRTableObj, aIndex, xAxisMeasureSegments, xAxisHeaderForInnerRankMeasurementTable;
		
		innerRankLevelDCRTableObj = getInnerRankLevelDCRMeasurementTableObject();
		aIndex = innerRankLevel - 1;
		xAxisMeasureSegments = innerRankLevelDCRTableObj[aIndex].xMeasureSegments;
		xAxisHeaderForInnerRankMeasurementTable = [];
		
		for ( var p1 = 0; p1 < xAxisMeasureSegments; p1++ ) {
			xAxisHeaderForInnerRankMeasurementTable.push(p1);
		}
		
		//== REVERSING IN ORDER TO GET TABLE VALUES TO INDEX CORRECTLY WITH COUNTDOWN TIMER
		return xAxisHeaderForInnerRankMeasurementTable.reverse();
	}
	
	
	//**************************** FOR LIVE AD PERFORMANCE ALGORITHM ***************************************\\
	//********************************** SECTION F3 **********************************************\\
	
	//== F-04 ==\\
	function setXAxisHeaderForAdPerformanceTable() {
		var xAxisHeader, rankLevel, aIndex, rankSettingsObj, xMaxTimeScale;
		
		xAxisHeader = [];
		rankLevel = getInputBoxSelectedRankLevel(); 	//== WILL USE THE RANK LEVEL SELECTOR ON TOP OF WEB-SITE
		aIndex = rankLevel - 1;
		rankSettingsObj = getAdPerformanceTableConfigurationSettingsForAdvertiserObj();
		xMaxTimeScale = rankSettingsObj[aIndex].xTimeScale;
		
		for ( var p1 = 0; p1 < xMaxTimeScale; p1++ ) {
			xAxisHeader.push(p1);
		}
		
		return xAxisHeader;
		
	}
	
	//== F-05 ==\\
	function setYAxisSidebarForAdPerformanceTable() {
		var yAxisSidebar, rankSettingsObj, rankLevel, aIndex, yPivot, preVal_y1, preVal_y2 ;
		
		yAxisSidebar = [];
		rankSettingsObj = getAdPerformanceTableConfigurationSettingsForAdvertiserObj();
		rankLevel = getInputBoxSelectedRankLevel(); 	//== WILL USE THE RANK LEVEL SELECTOR ON TOP OF WEB-SITE
		aIndex = rankLevel - 1;
		yPivot = (rankSettingsObj[aIndex].estAdRedemptionAvg * rankSettingsObj[aIndex].adLimit)
		preVal_y1 = rankSettingsObj[aIndex].y1;
		preVal_y2 = rankSettingsObj[aIndex].y2;
		
		for ( var p1 = 0; p1 < rankSettingsObj[aIndex].adLimit; p1++ ) {
			if ( p1 < yPivot ) {
				var pass1 = rankSettingsObj[aIndex].maxScale + preVal_y1;
				yAxisSidebar.unshift( parseFloat( pass1 ).toFixed(4) );
				preVal_y1 += rankSettingsObj[aIndex].y1;
			} else {
				var pass2 = rankSettingsObj[aIndex].maxScale - preVal_y2;
				yAxisSidebar.push( parseFloat( pass2 ).toFixed(4) );
				preVal_y2 += rankSettingsObj[aIndex].y2;
			}
		}
		
		//====== REVERSING Y-AXIS HERE RESULTS IN LARGER QTY OF OFFERS GREATER AMOUNT OF POINTS. << CREATE DEMAND
		return yAxisSidebar.reverse();
	}
	
	
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=******************************************* GENERATE Y-AXIS SIDEBARS AFTER SETTING ITS BASE VALUES *************************************************\\
	//=*******************************************************************************************************************************************************\\
	//=************************************************************* START SECTION G ***********************************************************************\\
	
	//**************************** FOR AD-LEDGER ALGORITHM ***************************************\\
	//********************************** SECTION G1 **********************************************\\
	
	//== G-00 ==\\   //== THIS NEEDS TO SET THE GENERAL BASE AD POINT CONVERT FOR EVERY STORE
	function generateYAxisAdLedgerDiviationSidebar() {
		var xAxisHeader, yAxisDivviationSidebar, yAxisPivot, adLedgerDivviation;
		
		yAxisDivviationSidebar = setYAxisLedgerDiscountPercentDivviationRange();  //== STEP ONE  >> USES ID-13
		yAxisPivot = setYAxisAdLedgerDiscountPivotSidebar(yAxisDivviationSidebar);   //== STEP TWO  >> USES ID-14
		
		return yAxisPivot; //== RETURNS MULTIPLIER VALUES TO USE FOR ADJUSTING THE "GENERAL/GLOBAL" BASE AD-POINT VALUE
		//=== THIS WILL BE SUBDIVIDED BY STORE CATEGORIES/SUB-SECTIONS { USING OBJECT ID-5 }
		
	}
	
	
	//************ FOR RANK MEASUREMENT ALGORITHM ***************************************\\
	//********************************** SECTION G2 **********************************************\\
	
	//== G-01 ==\\
	//== { ONE METHOD OF CREATING LEVELS OF GREATER VARIABILITY }
	function generateYAxisSidebarForRankSublevel() {
		var rankLevel, aIndex, innerRankLevelObj, startNumber, yAxisPos, yAxisNeg, totalInnerLevels, count1, levelThreshold, rLevelPointSpread, levelThreshold, lastCount, lastPointValue, pointThresholdValues  ;
		
		rankLevel = getInputBoxSelectedRankLevel();
		aIndex = rankLevel - 1;
		innerRankLevelObj = getInnerRankLevelSidebarObj(rankLevel);
		startNumber = innerRankLevelObj[aIndex].startingNumber;
		yAxisPos = innerRankLevelObj[aIndex].yAxisPivot_Point1Spread;
		yAxisNeg = innerRankLevelObj[aIndex].yAxisPivot_Point2Spread;
		totalInnerLevels = innerRankLevelObj[aIndex].numberOfInnerLevels;
		count1 = innerRankLevelObj[aIndex].numberOfInnerLevels;
		levelThreshold = 0;
		rLevelPointSpread = [];
		
		lastCount = 0;
		lastPointValue = 0;
		pointThresholdValues = [];
		
		for ( var p1 = totalInnerLevels; p1 !== 0; p1-- ) {
			levelThreshold = Number(parseFloat( levelThreshold + ( count1 * (yAxisPos + startNumber)) ).toFixed(2));
			count1--;
			if (count1 > 27 ) {
				startNumber = Number(parseFloat(startNumber + yAxisPos).toFixed(2));
				rLevelPointSpread.push(levelThreshold);
				if ( lastCount === 0 ) { 
					pointThresholdValues.push( 0 );
				}
				if ( lastCount > 0 ) {
					lastPointValue = Number(parseFloat(lastPointValue + rLevelPointSpread[lastCount-1]).toFixed(2));
					pointThresholdValues.push( lastPointValue );
				}
				lastCount++;
			}
			else {
				// decrement from the incremented numStart
				startNumber = Number(parseFloat(startNumber - yAxisNeg).toFixed(2));
				rLevelPointSpread.push(levelThreshold);
				lastPointValue = Number(parseFloat(lastPointValue + rLevelPointSpread[lastCount-1]).toFixed(2));
				pointThresholdValues.push( lastPointValue );
				lastCount++;
			}
		}
		
		console.log([rLevelPointSpread, pointThresholdValues]);
		
		//=== REVERSE IN ORDER FOR INDEX TO ALIGN WITH Y-AXIS INNER-LEVEL INDEXING
		return pointThresholdValues // .reverse();
		
	}

	
	//************ FOR LIVE AD-PERFORMANCE ALGORITHM ***************************************\\
	//********************************** SECTION G3 **********************************************\\
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=*********************************** GET VALUE FUNCTIONS FROM ADERTISER AND PARAM OBJECT FOR ALGORITHMS **********************************************************\\
	//=*******************************************************************************************************************************************************\\
	//=****************************************************************START SECTION H ***********************************************************************\\
	
	//== H-00 ==\\	 GETS THE AVERAGE DISCOUNT PERCENT OF ALL OFFERS; UPDATE THE LASTPERIOD LEDGER VALUE AND RETURNS THE PERCENT
	function getCombinedDiscountTotalofAllStoreAdOffers() {
		var avgDiscount, dcrParamObj, totalActiveOffers, stores, adLedgerCurrentDcrRateForPeriod, inputBoxConfigNumber, value1, value2;

		stores = getStoresObj();
		dcrParamObj = getBaseAdDiscountConvertParamObj();
		
		avgDiscount = 0;
		totalActiveOffers = 0;
		value1 = 0;
		value2 = 0;
		// adLedgerCurrentDcrRateForPeriod = 0; //  Number(( avgDiscount / totalActiveOffers ).toFixed(4)); 
		inputBoxConfigNumber = getInputBoxAdLedgerConfigNumber();
		
		for ( var p1 in stores ) {
			value1 = Number(parseFloat(stores[p1].discount).toFixed(4));
			value2 = parseInt(stores[p1].adOffers);
			avgDiscount = avgDiscount + ( value1 * value2 );
			totalActiveOffers += Number(stores[p1].adOffers);
		}
		
		adLedgerCurrentDcrRateForPeriod = Number(( avgDiscount / totalActiveOffers ).toFixed(4)); 
		
		dcrParamObj[inputBoxConfigNumber].lastPeriodLedgerPercent;
		
//		return Number(( avgDiscount / totalActiveOffers ).toFixed(4));
		return adLedgerCurrentDcrRateForPeriod;
	} 
	
	//== H-01 ==\\
	function getTimeRemainingForAllOffersInHourFormat() {
		var timeMeasureRankSetObj, storesObj, timeToday, timeLeft, storeRankLevel, aIndex, createTime, endTime, xTimeMax;
		
		
		timeMeasureRankSetObj = getRankTimeMeasurementSettingsForAdvertiserObj();
		storesObj = getStoresObj();
		timeToday = (new Date().getTime())/1000/60;
		timeLeft = [];
		createTime = 0;
		endTime = 0;		
		
		for ( var p1 in storesObj ) {
			storeRankLevel = storesObj[p1].rankLv;
			aIndex = storeRankLevel - 1;
			
			createTime = ((new Date(storesObj[p1].adCreateTime).getTime())/1000/60);
			endTime = createTime + ((timeMeasureRankSetObj[aIndex].adEndTimeForOffers) * 24 * 60);
			timeLeft.push(((( endTime - createTime ) - ( timeToday - createTime ))/60) );
		}
		
		return timeLeft;
		
	}
	
	//== H-02 ==\\
	function getRemainingTimeSegmentsForAllOffersForAdPerformanceUse() {
		var timeMeasureRankSetObj, storesObj, timeRemaning, xTimeSegmentForEachOffer, storeRankLevel, aIndex, xTimeMax; 		
		
		timeMeasureRankSetObj = getRankTimeMeasurementSettingsForAdvertiserObj();
		storesObj = getStoresObj(); 
		timeRemaning = getTimeRemainingForAllOffersInHourFormat();
		xTimeSegmentForEachOffer = [];
		
		for ( var p1 in storesObj ) {
			storeRankLevel = storesObj[p1].rankLv;
			aIndex = storeRankLevel - 1;
			
			xTimeMax = ((timeMeasureRankSetObj[aIndex].adEndTimeForOffers) * 24);
			if ( timeRemaning[p1] < 0 ) {
				xTimeSegmentForEachOffer.push( 0 );
			} else {
				xTimeSegmentForEachOffer.push( parseInt(xTimeMax - timeRemaning[p1] ));
			}
		}
		
		return xTimeSegmentForEachOffer;
		
	}
	
	//== H-03 ==\\
	function getDiscountPercentSetWhenAdCreatedForAllOffers() {
		var storesObj, setDiscountForAllStores;
		
		storesObj = getStoresObj();
		setDiscountForAllStores = [];
		
		for ( var p1 = 0; p1 < storesObj.length; p1++ ) {
			setDiscountForAllStores.push(storesObj[p1].discount);
		}
		return setDiscountForAllStores;
		
	}
	
	//== H-04 ==\\
	function getQtyRemainingForAllOffers() {
		var storesObj, offerQtyForAllOffers;
		
		storesObj = getStoresObj();
		offerQtyForAllOffers = [];
		
		for ( var p1 = 0; p1 < storesObj.length; p1++ ) {
			offerQtyForAllOffers.push(storesObj[p1].adOffers);
		}
		
		return offerQtyForAllOffers;
		
	}
	
	//== H-05 ==\\
	//== GETS THE SET RANK LEVEL OF STORE & RETURNS THE RANK LEVEL
	function getCurrentRankLevel(storeNum) {
		var rankLevel, storesObject;
		
		storesObject = getStoresObj();
		rankLevel = storesObject[storeNum].rankLv;
		return rankLevel;
		
	}
	
	//== H-06 ==\\
	//== GETS THE RANKS LEVELS TOTAL TIME SEGMENTS  
	function getRankLevelTimeSegment() {
		var rankLevel, rankObject, mParamObject, aIndex, rLevelTimeSegment ;
		
		rankLevel = getInputBoxSelectedRankLevel();
		rankObject = getAdPerformanceTableConfigurationSettingsForAdvertiserObj();
		mParamObject= getRankTimeMeasurementSettingsForAdvertiserObj();
		aIndex = rankLevel - 1;
		rLevelTimeSegment = rankObject[aIndex].mTimeSegments(); //== RETURNS 3360 || TOTAL 3 MINUTES SEGMENTS
		
		return Number(rLevelTimeSegment);
		
	}
	
	//== H-07 ==\\
	//== GETS THE STORES CURRENT TIME SEGMENT
	function getStoresCurrentTimeSegment(storeNum) {
		var storeObject, mParamObject, aIndex, rankLevel, rLevelTimeSegment, timeNow, endStoreRankPeriod, timeDifference, calcCurrentTimeSegment, storeCurrentTimeSegment;
		
		storeObject = getStoresObj();
		mParamObject = getRankTimeMeasurementSettingsForAdvertiserObj();
		aIndex = storeNum - 1;
		rankLevel = getCurrentRankLevel(storeNum); //== RETURNS STORES RANK LEVEL 
		rLevelTimeSegment = getRankLevelTimeSegment(rankLevel); //== RETURNS 3360 || TOTAL 3 MIN SEGMENTS
		timeNow = new Date().getTime() / 1000/ 60 ; //== RETURNS 24,402,516 
		endStoreRankPeriod = ((storeObject[aIndex].rankTimePeriod /1000 / 60) + ( rLevelTimeSegment * mParamObject[rankLevel].rankMOccurences ));
		//**********************  UPCONVERT ABOVE RLEVELTIMESEGMENT BY RANK-M-OCCURENCES; RETURNS TO 1 MINUTE SEGMENTS  **********************************\\
		
		timeDifference = Number(((endStoreRankPeriod - timeNow) / mParamObject[rankLevel].rankMOccurences).toFixed(2)); 
		//           ||***************** RANK STOP TIME IS DETERMINED BY SET PARAMETERS ************************************||
		calcCurrentTimeSegment = (rLevelTimeSegment);
		storeCurrentTimeSegment = ((calcCurrentTimeSegment - timeDifference) );
		
//		console.log([ endStoreRankPeriod, timeNow, Number(timeDifference.toFixed(2)), Number(calcCurrentTimeSegment.toFixed(2)), Number(storeCurrentTimeSegment.toFixed(2)) ]);
		return Number(storeCurrentTimeSegment.toFixed(2));
	}
	
	//== H-08 ==\\
	//== SETS THE ACTIVE RANK MEASUREMENT POINT THRESHOLD MINIMUMS
	//== { REQUIRES ( AINDEX - STORE # ) & MEASUREMENT TYPE }
	function setRankMeasurementThresholdMinimumForCurrentTimeSegment(storeNumber, aIndex, measurementType, currentTimeSegment) {
		var mTableObject, mTableProp, mTableMinThresholdValue, keyVal;
		
		mTableObject = getActiveRankMeasurementValuesIntoAnArray();
		mTableProp = getActiveRankMeasurementPropertiesIntoAnArray();		
		
		for ( var p1 = 0; p1 < mTableProp.length; p1++ ) {
			var keyVal = mTableProp[p1];
			if ( keyVal === measurementType ) {
				mTableMinThresholdValue = mTableObject[p1] * currentTimeSegment;
				return mTableMinThresholdValue;
			}
		}
	}
	
	//== H-09 ==\\
	function getMaxRankMeasurementPointsForRankLevel() {
		var  storeRankLevel, aIndex, extractedMeasurementValues, rankTimeSegments, maxPossibleRankPointsForPeriod;
		
		storeRankLevel = getInputBoxSelectedRankLevel();
		aIndex = storeRankLevel - 1;
		extractedMeasurementValues = getActiveRankMeasurementValuesIntoAnArray(); //== GETS MEASUREMENT VALUES THAT ARE GREATER THAN ZERO
		rankTimeSegments = getRankLevelTimeSegment(); //=== RETURNS 2,400 { 2,400 3 MIN TIME SEGMENTS}
		maxPossibleRankPointsForPeriod = extractedMeasurementValues.length * rankTimeSegments; //== { TOTAL NUMBER OF MEASUREMENT POINTS POSSIBLE }
		
//		console.log([extractedMeasurementValues, rankTimeSegments ]);
		return maxPossibleRankPointsForPeriod;
		
	}	
	
	//== H-10 ==\\
	function getStoreRankLevel(storeNumber) {
		var storeIndex = storeNumber - 1, storesObj = getStoresObj(), rankLvl;
		if(storeNumber || storeNumber === 0 ) {
			rankLvl = storesObj[storeIndex].rankLv;
			return rankLvl;
		}
	}
	
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=*********************************** GENERATE/COMPILE FINAL CALCULATED XY TABLE VALUES FOR ALGORITHMS *************************************************\\
	//=******************************************************************************************************************************************************\\
	//=******************************************************* START SECTION I ******************************************************************************\\
	
	//**************************** FOR AD-LEDGER ALGORITHM ***************************************\\
	//********************************** SECTION I1 **********************************************\\
	
	
	
	//**************************** FOR RANK MEASUREMENT ALGORITHM ***************************************\\
	//********************************** SECTION I2 **********************************************\\
	
		
	//== I-00 ==\\
	function getYAxisSidebarForLeftSideOfInnerRankLevelMeasurementTable(innerRankLevel) {
		var innerRankLevelDCRTableObj, aIndex, yAxisMeasurementSegments, yAxisLength, yAxisPivotTop, yAxisPivotBottom, yAxisSidebarForInnerRankLevel, pivotStartValue, y1Top, y1Bottom, yAxisInnerRankLeftSidebar;
		
		innerRankLevelDCRTableObj = getInnerRankLevelDCRMeasurementTableObject();
		aIndex = innerRankLevel - 1;
		
		yAxisLength = getMaxRankMeasurementPointsForRankLevel();
		yAxisMeasurementSegments = getMaxRankMeasurementPointsForRankLevel(); //== RETURNS 8,400 { 16,800 POSSIBLE POINTS }
		yAxisPivotTop = innerRankLevelDCRTableObj[aIndex].yPivotTop * yAxisMeasurementSegments;
		yAxisPivotBottom = innerRankLevelDCRTableObj[aIndex].yPivotBottom * yAxisMeasurementSegments;
		
		pivotStartValue = innerRankLevelDCRTableObj[aIndex].pivotStartVal;
		y1Top = innerRankLevelDCRTableObj[aIndex].y_top;
		y1Bottom = innerRankLevelDCRTableObj[aIndex].y_bottom;
		yAxisInnerRankLeftSidebar = [];
		
		var y1Total = 0;
		var y2Total = 0;
		for ( var p1 = yAxisLength; p1 !== 0; p1-- ) {
			if ( p1 > yAxisPivotTop && p1 <= yAxisLength ) {
				var pass1 = Number(parseFloat(pivotStartValue - ( pivotStartValue * y1Total) ).toFixed(4));
				yAxisInnerRankLeftSidebar.unshift(pass1);
				y1Total = y1Total + ( y1Top + y1Top );
			}
			if ( p1 <= yAxisPivotTop  ) {
				var pass2 = Number(parseFloat(pivotStartValue + ( pivotStartValue * y2Total )).toFixed(4));
				yAxisInnerRankLeftSidebar.push(pass2);
				y2Total = y2Total + ( y1Bottom + y1Bottom );
				
			}
		}
		console.log([yAxisInnerRankLeftSidebar, 'Y-axis InnerRank Left Sidebar'])
		return yAxisInnerRankLeftSidebar;
	}
	
	//== I-01 ==\\
	function getYAxisSideBarForRightSideOfInnerRankLevelMeasurementTable(innerRankLevel) {
		var yAxisTableLeftTable, rightSidebarYAxisForInnerRankTable, aIndex, innerRankLevelDCRTableObj, xPivotHeader, xPivotBreakPoint, yLeftTableLength, xHeaderLength ;
		
		yAxisTableLeftTable = generateInnerRankLevelMeasurementTableForLeftSide(innerRankLevel);
		xPivotHeader = getXAxisHeaderForInnerRankLevelMeasurementTable(innerRankLevel);
		innerRankLevelDCRTableObj = getInnerRankLevelDCRMeasurementTableObject(innerRankLevel);
		
		aIndex = innerRankLevel - 1;
		xPivotBreakPoint = xPivotHeader.length * innerRankLevelDCRTableObj[aIndex].xPivotRight;
		rightSidebarYAxisForInnerRankTable = [];
		yLeftTableLength = yAxisTableLeftTable.length;
		xHeaderLength = xPivotHeader.length;
		
		for ( var p1 = 1; p1 < yLeftTableLength; p1++ ) {
			if ( p1 % xPivotBreakPoint === 0 ) {
				rightSidebarYAxisForInnerRankTable.push(yAxisTableLeftTable[p1-1]);
			}
		}
		rightSidebarYAxisForInnerRankTable.unshift(yAxisTableLeftTable[xPivotBreakPoint-1])
		
		console.log([rightSidebarYAxisForInnerRankTable, 'Right-side/ section2 Y-Axis sidebar for Inner Rank Table']);
		return rightSidebarYAxisForInnerRankTable;
	}
	
	//== I-02 ==\\
	function generateInnerRankLevelMeasurementTableForLeftSide(innerRankLevel) {
		var innerRankDRCTableObj, aIndex, leftSideInnerRankTableValues, ySidebar, ySidebarLength, xHeader, yPivot, xPivot, xRow, x1Top, x1Bottom;
		
		innerRankDRCTableObj = getInnerRankLevelDCRMeasurementTableObject();
		aIndex = innerRankLevel - 1;
		ySidebar = getYAxisSidebarForLeftSideOfInnerRankLevelMeasurementTable(innerRankLevel);
		xHeader = getXAxisHeaderForInnerRankLevelMeasurementTable(innerRankLevel);
		
		ySidebarLength = ySidebar.length;
		yPivot = ySidebar.length * innerRankDRCTableObj[aIndex].yPivotTop;
		xPivot = xHeader.length * innerRankDRCTableObj[aIndex].xPivotLeft;
		x1Top = innerRankDRCTableObj[aIndex].x1_topLeft;
		x1Bottom = innerRankDRCTableObj[aIndex].x1_bottomLeft;
		leftSideInnerRankTableValues = [];
		
		for ( var p1 = 0; p1 < ySidebarLength; p1++ ) {
			var xRow = ySidebar[p1];
			if ( p1 < xPivot ) {
				for ( var p2 = 0; p2 < xPivot; p2++ ) {
					var pass2 = ( xRow + ( xRow * x1Top ));
					leftSideInnerRankTableValues.push(pass2);
					xRow = xRow + ( x1Top + x1Top );
				} 
			}
			if ( p1 >= xPivot && p1 < ySidebarLength ) {
				for ( var p3 = 0; p3 < xPivot; p3++ ) {
					var pass3 = ( xRow + ( xRow * x1Bottom ));
					leftSideInnerRankTableValues.push(pass3);
					xRow = xRow + ( x1Bottom + x1Bottom );
				}
			}
		}
		
		console.log([leftSideInnerRankTableValues.length, 'Left-side/Section1 InnerRank Table'])
		return leftSideInnerRankTableValues;
		
	}
	
	//== I-03 ==\\  
	function generateInnerRankLevelMeasurementTableForRightSide(innerRankLevel) {
		var innerRankDRCTableObj, aIndex, rightSideInnerRankTableValues, ySidebar, ySidebarLength, xHeader, yPivot, xPivot, xRow, x2Top, x2Bottom;
		
		innerRankDRCTableObj = getInnerRankLevelDCRMeasurementTableObject();
		aIndex = innerRankLevel - 1;
		ySidebar = getYAxisSideBarForRightSideOfInnerRankLevelMeasurementTable(innerRankLevel);
		xHeader = getXAxisHeaderForInnerRankLevelMeasurementTable(innerRankLevel);
		
		ySidebarLength = ySidebar.length;
		yPivot = ySidebar.length * innerRankDRCTableObj[aIndex].yPivotBottom;
		xPivot = xHeader.length * innerRankDRCTableObj[aIndex].xPivotRight;
		x2Top = innerRankDRCTableObj[aIndex].x2_topRight;
		x2Bottom = innerRankDRCTableObj[aIndex].x2_bottomRight;
		rightSideInnerRankTableValues = [];
		
		for ( var p1 = 0; p1 < ySidebarLength; p1++ ) {
			var xRow = ySidebar[p1];
			if ( p1 >= xPivot && p1 < ySidebarLength ) {
				for ( var p2 = 0; p2 < xPivot; p2++ ) {
					var pass2 = ( xRow + ( xRow * x2Top ));
					rightSideInnerRankTableValues.push(pass2);
					xRow = xRow + ( x2Top + x2Top );
				} 
			}
			if ( p1 < xPivot ) {
				for ( var p3 = 0; p3 < xPivot; p3++ ) {
					var pass3 = ( xRow + ( xRow * x2Bottom ));
					rightSideInnerRankTableValues.push(pass3);
					xRow = xRow + ( x2Bottom + x2Bottom );
				}   
			}
		}
		
		console.log([rightSideInnerRankTableValues.length, 'Right-side/Section2 InnerRank Table'])
		return rightSideInnerRankTableValues;
		
	}
	
	//== I-04 ==\\
	function concatLeftAndRightInnerRankMeasurementTables(innerRankLevel) {
		var leftSide, rightSide, innerRankLevelMeasurementTable;
		
		leftSide = generateInnerRankLevelMeasurementTableForLeftSide(innerRankLevel);
		rightSide = generateInnerRankLevelMeasurementTableForRightSide(innerRankLevel);
		
		innerRankLevelMeasurementTable = leftSide.concat(rightSide);
		
		console.log([innerRankLevelMeasurementTable.length, 'Complete table - Inner Rank Level'])
		return innerRankLevelMeasurementTable;
		
	}
	
	
	//**************************** FOR LIVE AD-PERFORMANCE ALGORITHM ***************************************\\
	//********************************** SECTION I3 **********************************************\\
	
	//== I-05 ==\\
	function generateAdPerformanceTable() {
		var  rankSettingsObj, rankLevel, aIndex, xAxisHeader, yAxisSidebar, adLedgerDCR, xValue, adPerformanceTable;
		
		rankSettingsObj = getAdPerformanceTableConfigurationSettingsForAdvertiserObj();
		rankLevel = getInputBoxSelectedRankLevel();
		aIndex = rankLevel - 1;
		xAxisHeader = setXAxisHeaderForAdPerformanceTable();
		yAxisSidebar = setYAxisSidebarForAdPerformanceTable();
//		adLedgerDCR = getCombinedDiscountTotalofAllStoreAdOffers(); //== THIS IS NOT REQUIRED FOR GENERATING TABLE; THEREFORE NOT USED << REMOVE
		
		xValue = Number((rankSettingsObj[aIndex].x1).toFixed(4));
		adPerformanceTable = [];
		
		for (var p1 = 0; p1 <= yAxisSidebar.length; p1++ ) {
			var pass1 = parseFloat(yAxisSidebar[p1]);
			for (var p2 = 0; p2 <= xAxisHeader.length; p2++ ) {
				adPerformanceTable.push(Number(parseFloat(pass1 + (yAxisSidebar[p1] * xValue)).toFixed(4)));
				pass1 = (pass1 + (yAxisSidebar[p1] * xValue));
			}
		}
		
		return adPerformanceTable;
	}
	

	//== BTN-ID-7 ==\\
	$('.js-testingBtnSectionE').on('click', function() {
//			var test20 = getStoreData(1);
		var test20 =  getYAxisSideBarForRightSideOfInnerRankLevelMeasurementTable(1);
		console.log([test20]);
	});
	
	
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=****************************** GET ARRAY INDEX-NUMBER FOR RETRIEVING VALUE FROM XY ALGORITHM TABLE ***************************************************\\
	//=******************************************************************************************************************************************************\\
	//=******************************************************* START SECTION J ******************************************************************************\\
	
	//**************************** FOR AD-LEDGER ALGORITHM ***************************************\\
	//********************************** SECTION J1 **********************************************\\
	
	//== J-00 ==\\
	function getIndexNumberForAdLedger() {
		var combinedDiscountAverage, ySidebar, adLedgerIndex;
		
		combinedDiscountAverage = getCombinedDiscountTotalofAllStoreAdOffers();
		ySidebar = generateYAxisAdLedgerDiviationSidebar().length;
		adLedgerIndex = Number(parseInt(combinedDiscountAverage * ySidebar).toFixed(0));
		
		return adLedgerIndex;
		
	}
	
	//************************ FOR RANK MEASUREMENT ALGORITHM ***************************************\\
	//********************************** SECTION J2 **********************************************\\
	
	
	
	//************************ FOR LIVE AD-PERFORMANCE ALGORITHM ***************************************\\
	//********************************** SECTION J3 **********************************************\\
	
	//== J-01 ==\\
	function getAdPerformanceIndexNumberForAllOffers() {
		var currentTimeSegmentForAllOffers, currentQtyRemainForAllOffers, performanceIndex;
		
		currentTimeSegmentForAllOffers = getRemainingTimeSegmentsForAllOffersForAdPerformanceUse();
		currentQtyRemainForAllOffers = getQtyRemainingForAllOffers();
		performanceIndex = [];
		
		for ( var p1 = 0; p1 < currentQtyRemainForAllOffers.length; p1++ ) {
			performanceIndex.push( (currentTimeSegmentForAllOffers[p1] * currentQtyRemainForAllOffers[p1]) );
		}
		
		return performanceIndex;
	}
	
	
	
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=*************************************** GET ACTIVE MODIFIER/MULTIPLIER VALUE FROM XY ALGORITHM TABLE ***************************************************\\
	//=******************************************************************************************************************************************************\\
	//=******************************************************* START SECTION K ******************************************************************************\\
	
	//**************************** FOR AD-LEDGER ALGORITHM ***************************************\\
	//********************************** SECTION K1 **********************************************\\
	
	//== K-00 ==\\  GET DISCOUNT-CONVERT MULTIPLIER UTILIZING Y-AXIS AD-LEDGER DIVVIATION TABLE
	function getModifierForDiscountConvertRateFromAdLedgerTable() {
		var stores, offerCombinedAvg, xHeader, ySidebar, adLedgerIndex, adLedgerModifier;
		
		stores = getStoresObj();
		offerCombinedAvg = getCombinedDiscountTotalofAllStoreAdOffers();
		ySidebar = generateYAxisAdLedgerDiviationSidebar();
		adLedgerIndex = getIndexNumberForAdLedger(); //== ( 0.30 x 10,000 == 3,000) 
		adLedgerModifier = ySidebar[adLedgerIndex];
		
		console.log([offerCombinedAvg, 'offerCombined Avg', ySidebar, 'y-SideBar', adLedgerModifier, 'Add Value To BASE Discount Convert Rate' ]);
		return adLedgerModifier;
		
	}
	
	//************************ FOR RANK MEASUREMENT ALGORITHM ***************************************\\
	//********************************** SECTION K2 **********************************************\\
	
	
	
	//************************ FOR LIVE AD-PERFORMANCE ALGORITHM ***************************************\\
	//********************************** SECTION K3 **********************************************\\
	
	//== K-01 ==\\
	function getMultiplierValueFromPerformanceTableForAllOffers() {
		var  storeObj, offerIndexNumber, adPerformanceTable, offerMultiplierForOffers ; 
		
		//== WILL NEED TO GET DISCOUNT MULTIPLER FOR EACH ADD OFFER << REQUIRES QTY, TIME-SEGMENT, X-TABLE, DISCOUNT-PERCENT, Y-AXIS SIDEBAR
		storeObj = getStoresObj();
		offerIndexNumber = getAdPerformanceIndexNumberForAllOffers();
		adPerformanceTable = generateAdPerformanceTable();
		offerMultiplierForOffers = [];
		
		for (var p1 = 0; p1 < offerIndexNumber.length; p1++ ) {
			offerMultiplierForOffers.push(adPerformanceTable[offerIndexNumber[p1]]);
		}
		
//		console.log([offerIndexNumber, 'Performance-Index #', adPerformanceTable, 'Ad-Performance Table'])
		return offerMultiplierForOffers;
	}
	
	
	
	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=*********************************************** UPDATE / APPLY NEW VALUE FUNCTIONS  ***************************************************\\
	//=******************************************************************************************************************************************************\\
	//=******************************************************** START SECTION L ******************************************************************************\\
	
	//== L-00 ==\\  
	function updateStoreInfoOnOffers() {
		var stores, storeNumber;
		
		stores = getStoresObj();
		storeNumber = 1;
		
		for ( var p1 = 0; p1 < stores.length; p1++ ){
			$('.js-storeName-' + storeNumber).text(stores[p1].name);
			$('.js-storeAddress-' + storeNumber).text(stores[p1].address);
			$('.js-storeCity-' + storeNumber).text(stores[p1].city);
			$('.js-distance-' + storeNumber).text("12.44 miles");
			$('.js-numberOfOffers-' + storeNumber).text(stores[p1].adOffers);
			storeNumber++;
		}
		
	}
	
	//== L-01 ==\\  \\== DCR MULTIPLIER IS EXPECTED TO BE SAME THROUGHOUT IN THIS CASE; WHEN CATEGORIES ARE ADDED, THAT WILL CHANGE FOR EACH
	function updateOfferPointUtilizingAdPerformanceMultiplier() {
		var stores, modifierValue, count, updatePoints, updatedAdjDCR, adPerformanceMultiplierForAllOffers, calculatedAdPointWithDCR, calculatedAdPointWithPerformance;
		
		stores = getStoresObj();
		modifierValue = getModifierForDiscountConvertRateFromAdLedgerTable();
		// RETURNS DCR FOR ALL OFFERS; THIS IS AD LEDGER || THIS IS FOR ALL STORES; ROLLING-AD LEDGER TIMER NOT IMPLEMENTED || ALL OFFER POINT VALUES SHOULD CHANGE IF OFFERS CHANGE }
		adPerformanceMultiplierForAllOffers = getMultiplierValueFromPerformanceTableForAllOffers(); //++ ID-28 { RETURNS AN INDEXED ARRAY OF MULTIPLIERS FOR AD-PEFORMANCE || THIS IS UNIQUE TO EACH STORE OFFER }
		updatePoints = [];
		updatedAdjDCR = [];
		
		count = 1;
		
		for (var p1 = 0; p1 < stores.length; p1++ ) {
			var pass1 = stores[p1];
			updatedAdjDCR.push((pass1.baseAdConvertRate + modifierValue).toFixed(2)); 
			calculatedAdPointWithDCR = Number(parseFloat((pass1.discount * 100) * (pass1.baseAdConvertRate + modifierValue)).toFixed(2)); //== THE MULTIPLIER NEEDS THE BASE DISCOUNT CONVERT RATE TO MULTIPLY BEFORE MULTIPLYING THE DISCOUNT PERCENT OF OFFER
			calculatedAdPointWithPerformance = (calculatedAdPointWithDCR * adPerformanceMultiplierForAllOffers[p1]).toFixed(2);
			updatePoints.push(calculatedAdPointWithPerformance);
			$('.js-pointValue-' + count).text(calculatedAdPointWithPerformance);
			count++;
		}
		
		console.log([updatedAdjDCR, 'Updated DCR w/Adjust', adPerformanceMultiplierForAllOffers, 'Ad-Performance-Multiplier', calculatedAdPointWithDCR, 'calculated with DCR', calculatedAdPointWithPerformance, 'calculated with Performance']);
		return updatePoints;
	}
	
	//== L-02 ==\\
	function updateInnerRankLevelAfterCheckingIfCurrentPointsExceedPointRequirement() {
		var yAxisRankSublevel, storeNumber, aIndex,  stores, rankLevel, currentRankPoints;
		
		yAxisRankSublevel = generateYAxisSidebarForRankSublevel();
		storeNumber = getInputBoxSelectedStore();
		aIndex = storeNumber - 1;
		stores = getStoresObj();
		rankLevel = stores[aIndex].rankLv_Inner;
		currentRankPoints = stores[aIndex].totalRankPoints;
		
		for ( var p1 = 0; p1 < yAxisRankSublevel.length; p1++ ) {
			if ( yAxisRankSublevel[p1] > currentRankPoints ) {
				stores[aIndex].rankLv_Inner = p1 + 1;
				return stores[aIndex].rankLv_Inner;
			}
		}
		
	}
	
	//== L-03 ==\\
	function updateDiscountConvertRateUtilizingAdLedgerModifier() {
		var storeNumber, storeObj, storeIndex, adLedgerAdjustRate, modifierValue;
		
		storeNumber = getInputBoxSelectedStore();
		storeObj = getStoresObj();
		storeIndex = storeNumber - 1;
		modifierValue = getModifierForDiscountConvertRateFromAdLedgerTable();
		
		if ( storeNumber ) {
			adLedgerAdjustRate = storeObj[storeIndex].baseAdConvertRate + modifierValue;
			storeObj[storeIndex].adjDcr = adLedgerAdjustRate;
			return storeObj[storeIndex].adjDcr;
		} 
		
	}
	
	//== L-04 ==\\
	function calculateTime() {
		var endTime;
		
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
		
		function intializeClock(id, n, endTime) {
			var clock = $('.js-timeLeft-'+ n);
			var timeInterval = setInterval(function() {
				var t = getAdTime(endTime);
				
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
				if (t.days < 0 ) {
					clock.text( '00:00:00');
				}
				if(t.total <=0 ) {
					clearInterval(timeInterval);
				}
			}, 1000); // 1000 is equal to 1 second // 
		}
		
		var count = 1;
		for ( var i in stores ) {
			endTime = stores[i].adEndTime;
			intializeClock('clock', count, endTime);
			count++;
		}
		
	}
	
	

	//############################################  ++++++++++++++++++++++++++++++++++++++++++++++++++++  ##############################################################\\
	//=*********************************************** BUTTON FOR INVOKING UPDATE / APPLY FUNCTIONS  ***************************************************\\
	//=******************************************************************************************************************************************************\\
	//=******************************************************** START SECTION M ******************************************************************************\\
	
	//== BTN-ID-1 ==\\
	$('.submitMParams').on('click', function() {
		var returnTotalCurrentRankPoint = setMeasurementParameterValuesUtilizingInputBoxValues();
		console.log(returnTotalCurrentRankPoint); //== RETURNS THE STORES ACCUMULATED RANK POINTS
	});
	
	//== BTN-ID-2 ==\\
	$('.submitSetDate').on('click', function() {
		var time = setAdvertiserTimeMeasureParamValues();
		console.log(time);
	});
	
	//== BTN-ID-3 ==\\
	$('.submitOfferDetails').on('click', function() {
		var discount = setAdvertiserDiscountAndQty();
		console.log(discount);
	});	
	
					//== BTN-ID-4 ==\\
					$('.js-setAdDiscountConfigCategory').on('click', function() {
						var generalDCR = setGeneralBaseAdDiscountConvertRate();
						console.log(generalDCR); //== RETURNS THE GENERAL DISCOUNT CONVERT RATE (DCR);
					});

					//== BTN-ID-5 ==\\
					$('.js-setStoreDiscountConvertRate').on('click', function() {
						var storeDCRconvertRate = setAdvertiserBaseAdDiscountRate();
						console.log(storeDCRconvertRate); //== RETURNS THE STORES SET DISCOUNT CONVERT RATE (DCR);
					});
	
	//== BTN-ID-7 ==\\
	$('.js-testingBtnSectionA').on('click', function() {
		var storePoints = updateOfferPointUtilizingAdPerformanceMultiplier();
		updateStoreInfoOnOffers();
		calculateTime();
		console.log(storePoints); //== UPDATES STORE INFORMATIONAL DATA AND POINTS
	});
	
	//== BTN-ID-6 ==\\
	$('.js-testingBtnSectionB').on('click', function() {
		var test = updateInnerRankLevelAfterCheckingIfCurrentPointsExceedPointRequirement(); //=== UPDATES POINT VALUE OF OFFERS
		console.log(test); 
	});
	
	//== BTN-ID-7 ==\\
	$('.js-testingBtnSectionC').on('click', function() {
		var test20 = updateDiscountConvertRateUtilizingAdLedgerModifier(); 
		console.log([test20]); //== UPDATES ACTIVE CONVERT RATE OF SELECTED STORE
	});
	
	
	//== BTN-ID-7 ==\\
	$('.js-testingBtnSectionD').on('click', function() {
//			var test20 = getStoreData(1);
		var test30 =  updateOfferPointUtilizingAdPerformanceMultiplier(1);
		console.log([test30]);
	});

	
	

	
	//==========================================================================================\\
	//  ||=== CHECK CURRENT POINT VALUE & UPDATE STORES CURRENT INNER RANK LEVEL  ===||
	//  ||=== THIS IS FOR DETERMINING WHETHER THE ACCUMULATED POINTS AWARDS AN INNER RANK LEVEL INCREASE FOR ADVERTISER/STORE
	//                                                           & THIS IS NOT THE MEASUREMENT POINT INCREASE==!! THAT WAS DETERMINED WITHIN FUNCTION ID-17 & 18 ===||
  //==========================================================================================//
	
	//== ID-30 ==\\
	
	function updateRankAdvertiser() {
		var rankPointThreshold = genRankLevelPointThresholdValues(); //== gets the ranks current point threshold values
		var getStore = checkStoreRankLv(); //== get the store_# from function ID-25
		var getStoresTotalRankPoints = stores[getStore].totalRankPoints;
//		console.log(getStoresTotalRankPoints);		
		
		for (var i = 0; i < rankPointThreshold.length; i++ ) {
			if( getStoresTotalRankPoints <= rankPointThreshold[i] ) {
				var setRankLevel = (i + 1);
				stores[getStore].rankLv_Inner = setRankLevel; //== This will set the stores inner rankLevel to the current iteration value (i.e. if true @ 700, rank level is the index value at which that occurs )
				//console.log(stores[getStore].rankLv_Inner); //== validates rank level changes as point threshold value is exceeded
			}
			if ( rankPointThreshold[i] > getStoresTotalRankPoints ) {
				return;
			}
		}	
		
	}
	
	
	
	
	
	
	
	
	//== ID ==\\ { DATA REQUIRED FROM ID-3, ID- }
	
	//== ORIGINATING POINT CONVERT VALUE, GREATEST AD-OCCURANCE FACTOR, GREATEST AD-OFFER OCCURANCE FACTOR ( 4.998 )
	//== BASE AD POINT RANGE IS CURRENTLY @ 1% === 2.5 POINTS >> 2.5 PTS * UP TO 100% DISCOUNT PERCENT === 250 PTS
	//== THE GREAEST ADD-ON PIVOT START VALUE FOR EACH RANK LEVEL FROM ID-31
	
	
	function getUniqueBaseAdPointAdvertiser() {
		var getAddOnVal = getAdPointAdditionValues(1);
		var greatestAddOnVal = getAddOnVal[3][getAddOnVal[3].length - 1];
		
		return [ greatestAddOnVal, getAddOnVal ];

	}
	
	
	// (1). NEED TO CREATE THE NUMBER OF REWARDS GRIDS AVAILABLE > { USE FLOATING POINT RANGE VALUES }
	//** A static point base/range can be set || Base reward distribution proportions/percentages defined at this time ||
	//** then this range modified by the actual point range spectrum of ad-offers redeemed to the exact point value
	//** that value is used to determine the mid-point / pivot-point of the modified distribution proportion for that reward period
	//** From that point, there are 3 segments >> high-point, mid-point & low-point << refer to patent for example configuration
	
	//## Create the following components
	//   > Define a point range { Go back to }
	
	//== How do we get the maximum number of points possible per ad offer? ==\\
	
	// (2). HOW ARE THE REWARD GRIDS ASSOCIATED > { DETERMINE THE MIN AND MAX POINT VALUE SPREAD }
	// (3). CONFIGURE MONETARY DISTRIBUTION PERCENTAGES > { GRID LEVELS 10 THROUGH 20 GET DISTIRBUTION SPECTRUM ONE, ETC. }
	// (4). CONFIGURE EACH GRID BY STAKEHOLDER TYPE / CLASS > { ADVERTISER / SHOPPER }
	// (5). CONFIGURE VARIABLE DISTRIBUTION PERCENTAGES BY STAKEHOLDER TYPE / CLASS
	// (6). ?? CONFIGURE METHOD IN WHICH POD ASSCOCIATES TO REWARD GRID ??
	// (7). ADD TRANSACTION/PURCHASE ACTION AND AMOUNT TO VERIFY FEATURE WORKS
	
	
	
	
	//==========================================================================================\\
	//  ||=== BEGIN STAKEHOLDER PODS AND CONFIGURATIONS ===||
  //==========================================================================================//
	
	
	
	
	//==========================================================================================\\
	//  ||=== BEGIN DISCOUNT PERCENT FEE TABLE AND CONFIGURATIONS ===||
  //==========================================================================================//
	
	
	//==========================================================================================\\
	//  ||=== BEGIN SHOPPER RANK TABLES AND CONFIGURATIONS ===||
  //==========================================================================================//
	
	
	//==========================================================================================\\
	//  ||=== BEGIN RANK EFFECTS OBJECTS AND PARAMETERS ===||
  //==========================================================================================//
	
	
	//==========================================================================================\\
	//  ||=== BEGIN DISCOUNT | RANK POINT ADJUSTMENT TABLES ===||
  //==========================================================================================//

	
	
	
	
	
	
	
	
	
	
	
	

}); // END OF JQUERY DOCUMENT WRAPPER























