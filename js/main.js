
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
			baseAdConvertRate: 0, 
			adjDcr: 0, //== ( adjDcr + baseAdConvertRabe ) = actualStoreConvertRate
			activeDcr: 0,
			
			adOffers: 19,
			currentTime: new Date(),
			adCreateTime: "May 26 2016",
			adEndTime: "May 27 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 5821, // SET FOR DEMONSTATION
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
			reviewsCount: 800,
			
			preSavedAdOccurencesCount: 0,
			lastSavedAdOccurencesCount: 0,
			savedAdOccurencesCount: 700,
			
			prePurchaseOccurencesCount: 0,
			lastPurchaseOccurencesCount: 0,
			purchaseOccurencesCount: 700,
			
			preCompoundDiscountOfferPercentCount: 0,
			lastCompoundDiscountOfferPercentCount: 0,
			compoundDiscountOfferPercentCount: 400,
			
			preAccumulatedAdPointCount: 0,
			lastAccumulatedAdPointCount: 0,
			accumulatedAdPointCount: 3800
		},
		
		store_2: {
			name: "Organic Grill",
			address: "23 Organic Grill Street",
			city: "Minneapolis",
			zip: "55411",
			discount: 0.2130,
			
			rankLv: 1,
			adjDcr: 0,
			baseAdConvertRate: 10, 
			
			adOffers: 48,
			currentTime: new Date(),
			adCreateTime: "May 27 2016",
			adEndTime: "May 27 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 6000, // SET FOR DEMONSTATION
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 29 2016",
			
			rankLv_Inner: 1,
			totalRankPoints: 5000, // SET FOR DEMONSTATION
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 28 2016",
			
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 27 2016",
			
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 29 2016",
			
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 28 2016",
			
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 30 2016",
			
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 28 2016",
			
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 29 2016",
			
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 28 2016",
			
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
			adCreateTime: "May 27 2016",
			adEndTime: "May 29 2016",
			
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
	
	//=========================================================\\
		//=== MEASUREMENT PARAM OBJECT FOR EACH RANK LVL ===//
		//=== MUST BE AT TOP ===//
  //=========================================================//
	
	
	//== ID-0 ==\\
	
	var rankTimeMeasurementSettingsForAdvertiserObject = {
		
		lv1: {
			rankMTime: 5, // in days { REDUCING TO PREVENT BROWSER FROM FREEZING }
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
	
	//=========================================================\\
			//=== RANK OBJECT FOR HOLDING VALUES  ===//
  //=========================================================//
	
	//== ID-1 ==\\
		
	var rankXyTableConfigSettingsForAdvertiserObject = {
		
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
				return parseFloat( (mp.rankMTime * mp.minutes * mp.hours) / mp.rankMOccurences).toFixed(2);
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
				return parseFloat( (mp.rankMTime * mp.minutes * mp.hours) / mp.rankMOccurences).toFixed(2);
				//******** THIS ALREADY SUBDIVIDES THE TIME INTO 3, 4, ETC. MINUTES ************* !! IMPORTANT NOTE !! ***\\
			}
		},
		
	};
	
		//=========================================================\\
	//=== CREATING OBJECT TO HOLD MEASUREMENT VALUES FOR ADVERTISER  ===//
  //=========================================================//
	
	//== ID-2 ==\\
	
	var rankMeasurementSettingsForAdvertiserObject = { // EACH RANK WILL HAVE ITS OWN RANK MEASUREMENT VALUES << POSSIBLY INSERT INTO SETRANK OBJECT UNDER CORRESPONDING LEVEL NUMBER
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
				adPointsEarned: 0,
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
				adPointsEarned: 0,
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
	
	
	//=========================================================\\
	//=== CALCUALATE THE TIME AND TIMER FOR ADS  ===//
  //=========================================================\\
	
	//== ID-3 ==\\ ** MOVED FUNCTION FROM WITHIN THE CALCULATETIME FUNCTION **
	
	function formatTimeIntoDate(endTime, createTime, currentTime) {
		
		var time = Date.parse(endTime) - Date.parse(new Date());
		var sTime = Date.parse(createTime) - Date.parse(new Date());
		var rTime = time - sTime; // required to determine # of days 

		var seconds = Math.floor( (time/1000) % 60 );
		var minutes = Math.floor( (time/1000/60) % 60 );
		var hours = Math.floor( (time/(1000*60*60)) % 24 );
		var days = Math.floor( time/(1000*60*60*24) );

		return {
			'cTime': currentTime,
			'total': time,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	
	
	//== ID-4 ==\\
	
	function calculateTime(s) {
	
		
		function intializeClock(et, ct, nt, id, c ) {
			var clock = $('.js-timeLeft-'+ c);
			// console.log(clock);
			var timeInterval = setInterval(function() {
				
				var t = formatTimeIntoDate(et, ct, ct); // this is the function calling the new time
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
			intializeClock(stores[i].adEndTime, stores[i].adCreateTime, stores[i].currentTime, 'clock', count );
			count++;
		}
		
	}
	
	calculateTime(stores);
	
		//==========================================================================================\\
	//  ||=== GETTER FUNCTIONS FOR STORES, SETRANK AND MPARAM  ===||
	//  ||===           RETURNS OBJECTS OR PROPERTY            ===||
  //==========================================================================================//
	
	//=*******************************************************************************************************************************************************\\
	//=*************************************************************** GET OBJECT FUNCTIONS ***********************************************************************\\
	
	//== ID-5 ==\\
	function getStoresObj() {
		var storesObj = [];
		for ( var p1 in stores) {
			var pass1 = stores[p1]
			storesObj.push(pass1);
		}
		return storesObj;
	}
	
	//== ID-6 ==\\
	function getStoresProp() {
		var storesProp = []; //== GET STORE NUMBER ( STORE_1, sTORE_2, ETC )
		for ( var p1 in stores) {
			var pass1 = stores[p1]
			storesProp.push(p1);
		}
		return storesProp;
	}
	
	//== ID-7 ==\\
	function getRankXyTableConfigSettingsForAdvertiserObject() {
		var rankTableConfigObj = [];
		for ( var p1 in rankXyTableConfigSettingsForAdvertiserObject) {
			var pass1 = rankXyTableConfigSettingsForAdvertiserObject[p1]
			rankTableConfigObj.push(pass1);
		}
		return rankTableConfigObj;
	}
	
	//== ID-8 ==\\
	function getRankSettingsProp() {
		var rankSettingsProp = [];
		for ( var p1 in rankXyTableConfigSettingsForAdvertiserObject) {
			var pass1 = rankXyTableConfigSettingsForAdvertiserObject[p1]
			rankSettingsProp.push(p1);
		}
		return rankSettingsProp;
	}
	
	//== ID-9 ==\\
	function getTimeMeasureRankSetObj() {
		var setMParamObj = [];
		for ( var p1 in rankTimeMeasurementSettingsForAdvertiserObject) {
			var pass1 = rankTimeMeasurementSettingsForAdvertiserObject[p1]
			setMParamObj.push(pass1);
		}
		return setMParamObj;
	}
	
	//== ID-10 ==\\
	function getTimeMeasureRankSetProp() {
		var setMParamProp = [];
		for ( var p1 in rankTimeMeasurementSettingsForAdvertiserObject) {
			var pass1 = rankTimeMeasurementSettingsForAdvertiserObject[p1]
			setMParamProp.push(p1);
		}
		return setMParamProp;
	}
	
	//=*******************************************************************************************************************************************************\\
	//=*************************************************************** GET OBJECT FUNCTIONS  ***********************************************************************\\
	

	//=========================================================\\
	//=== START GENERATE VALUES FOR AD POINT DISCOUNT CONVERSION ALGORITHM ===//
  //=========================================================\\
	
	//=************************************************* NEW BLOCK OF IMPROVED AD-LEDGER TABLE FUNCTIONS *****************************************************\\
	//=*******************************************************************************************************************************************************\\
	//=*************************************************************** START SECTION A ***********************************************************************\\
	
		
	//== ID-11 ==\\ OBJECT FOR AD DISCOUNT CONVERT RATE PARAMETERS
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
	
	//== ID-12 ==\\
	//****************************** THIS IS NOT BEING USED FOR 
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
	
	//== ID-13 ==\\
	function getBaseAdDiscountConvertParamObject() {
		var adLedgerBaseDiscountObj = [];
		
		for (var p1 in baseAdDiscountConvertParamObject ) {
			var pass1 = baseAdDiscountConvertParamObject[p1];
			adLedgerBaseDiscountObj.push(pass1);
		}
		
		return adLedgerBaseDiscountObj;
	}
	
	//****************************** INPUT BOX GET FUNCTIONS FOR RETRIEVING VALUES FROM INPUT BOXES ************************\\
	//**********************************************************************************************************************\\
	//== ID-14 ==\\
	function getInputBoxAdLedgerStoreNumber() {
		var storeNumber = $('#setStoreDiscountConvertRate').val();
		return storeNumber;
	}
	
	//== ID-15 ==\\	
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
	
	//== ID-16 ==\\
	function getInputBoxAdLedgerConfigNumber() {
		var adLedgerConfigNumber = $('#setConfigNumber').val();
		return adLedgerConfigNumber;
	}
	
	//**************************************** SET FUNCTIONS FOR SETTING VALUES ********************************************\\
	//**********************************************************************************************************************\\
	
	//== ID-17 ==\\
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
	
	//== ID-18 ==\\
	//== SET STORE GENERAL/BASE DISCOUNT CONVERT RATE
	function setAdvertiserBaseAdDiscountRate( ) {
		var storeNumber, whichConfigSet, storeObj, aIndex, baseDcrObj, calculatedDCR, adPointMax, adPointPivot, adAvgDiscount;
		
		storeNumber = getInputBoxAdLedgerStoreNumber(); //== THIS RETURNS THE STORE NUMBER TO IDENTIFY WHICH STORE TO UPDATE THE BASEDCR
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
	
	//== ID-19 ==\\
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
	
	//== ID-20 ==\\
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
	
	//== ID-21 ==\\ 
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
	
	//******************* FUNCTION FOR GENERATING AD-LEDGER DIVVIATION SIDEBAR MULTIPLER VALUES ********************************\\
	//**************************************************************************************************************************\\
	
	//== ID-22 ==\\   //== THIS NEEDS TO SET THE GENERAL BASE AD POINT CONVERT FOR EVERY STORE
	function generateYAxisAdLedgerDiviationSidebar() {
		var xAxisHeader, yAxisDivviationSidebar, yAxisPivot, adLedgerDivviation;
		
		yAxisDivviationSidebar = setYAxisLedgerDiscountPercentDivviationRange();  //== STEP ONE  >> USES ID-13
		yAxisPivot = setYAxisAdLedgerDiscountPivotSidebar(yAxisDivviationSidebar);   //== STEP TWO  >> USES ID-14
		
		return yAxisPivot; //== RETURNS MULTIPLIER VALUES TO USE FOR ADJUSTING THE "GENERAL/GLOBAL" BASE AD-POINT VALUE
		//=== THIS WILL BE SUBDIVIDED BY STORE CATEGORIES/SUB-SECTIONS { USING OBJECT ID-5 }
		
	}
	
	//****************************** GET VALUES THAT WILL BE USED BY AD-LEDGER  ************************************************\\
	//**************************************************************************************************************************\\
	
	//== ID-23 ==\\	 GETS THE AVERAGE DISCOUNT PERCENT OF ALL OFFERS; UPDATE THE LASTPERIOD LEDGER VALUE AND RETURNS THE PERCENT
	function getCombinedDiscountTotalofAllStoreAdOffers() {
		var avgDiscount, dcrParamObj, totalActiveOffers, stores, adLedgerCurrentDcrRateForPeriod, inputBoxConfigNumber, value1, value2;

		stores = getStoresObj();
		dcrParamObj = getBaseAdDiscountConvertParamObject();
		
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
	
	//== ID-24 ==\\  GET DISCOUNT-CONVERT MULTIPLIER UTILIZING Y-AXIS AD-LEDGER DIVVIATION TABLE
	function getDCRUtilizingAdLedgerTable() {
		var stores, offerCombinedAvg, xHeader, ySidebar, dcrIndex, addDcrValue;
		
		stores = getStoresObj();
		offerCombinedAvg = getCombinedDiscountTotalofAllStoreAdOffers();
		xHeader = setXAxisAdLedgerDiscountPercentHeader();
		ySidebar = generateYAxisAdLedgerDiviationSidebar();
		dcrIndex = (offerCombinedAvg * ySidebar.length ); //== ( 0.30 x 10,000 == 3,000) 
		addDcrValue = ySidebar[dcrIndex];
		
		console.log([offerCombinedAvg, 'offerCombined Avg', ySidebar, 'y-SideBar', addDcrValue, 'Add Value To BASE Discount Convert Rate' ]);
		return addDcrValue;
		
	}
	
	//== ID-25 ==\\  
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
	
	//== ID-26 ==\\
	function setXAxisHeaderForAdPerformanceTable() {
		var xAxisHeader, rankLevel, aIndex, rankSettingsObj, xMaxTimeScale;
		
		xAxisHeader = [];
		rankLevel = getInputBoxSelectedRankLevel(); 	//== WILL USE THE RANK LEVEL SELECTOR ON TOP OF WEB-SITE
		aIndex = rankLevel - 1;
		rankSettingsObj = getRankXyTableConfigSettingsForAdvertiserObject();
		xMaxTimeScale = rankSettingsObj[aIndex].xTimeScale;
		
		for ( var p1 = 0; p1 < xMaxTimeScale; p1++ ) {
			xAxisHeader.push(p1);
		}
		
		return xAxisHeader;
		
	}
	
	//== ID-27 ==\\
	function setYAxisSidebarForAdPerformanceTable() {
		var yAxisSidebar, rankSettingsObj, rankLevel, aIndex, yPivot, preVal_y1, preVal_y2 ;
		
		yAxisSidebar = [];
		rankSettingsObj = getRankXyTableConfigSettingsForAdvertiserObject();
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
		
		return yAxisSidebar;
	}
	
	//== ID-28 ==\\
	function generateAdPerformanceTable() {
		var  rankSettingsObj, rankLevel, aIndex, xAxisHeader, yAxisSidebar, adLedgerDCR, xValue, adPerformanceTable;
		
		rankSettingsObj = getRankXyTableConfigSettingsForAdvertiserObject();
		rankLevel = getInputBoxSelectedRankLevel();
		aIndex = rankLevel - 1;
		xAxisHeader = setXAxisHeaderForAdPerformanceTable();
		yAxisSidebar = setYAxisSidebarForAdPerformanceTable();
//		adLedgerDCR = getCombinedDiscountTotalofAllStoreAdOffers(); //== THIS IS NOT REQUIRED FOR GENERATING TABLE; THEREFORE NOT USED << REMOVE
		
		xValue = Number((rankSettingsObj[aIndex].x1).toFixed(4));
		adPerformanceTable = [];
		
		for (var p1 = 0; p1 < yAxisSidebar.length; p1++ ) {
			var pass1 = parseFloat(yAxisSidebar[p1]);
			for (var p2 = 0; p2 < xAxisHeader.length; p2++ ) {
				adPerformanceTable.push(Number(parseFloat(pass1 + (yAxisSidebar[p1] * xValue)).toFixed(4)));
				pass1 = (pass1 + (yAxisSidebar[p1] * xValue));
			}
		}
		
		return adPerformanceTable;
	}
	
	//== ID-29 ==\\
	function getTimeRemainingForAllOffersInHourFormat() {
		var timeMeasureRankSetObj, storesObj, timeToday, timeLeft, storeRankLevel, aIndex, createTime, endTime, xTimeMax;
		
		
		timeMeasureRankSetObj = getTimeMeasureRankSetObj();
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
	
	//== ID-30 ==\\
	function getRemainingTimeSegmentsForAllOffersForAdPerformanceUse() {
		var timeMeasureRankSetObj, storesObj, timeRemaning, xTimeSegmentForEachOffer, storeRankLevel, aIndex, xTimeMax; 		
		
		timeMeasureRankSetObj = getTimeMeasureRankSetObj();
		storesObj = getStoresObj(); 
		timeRemaning = getTimeRemainingForAllOffersInHourFormat();
		xTimeSegmentForEachOffer = [];
		
		for ( var p1 in storesObj ) {
			storeRankLevel = storesObj[p1].rankLv;
			aIndex = storeRankLevel - 1;
			
			xTimeMax = ((timeMeasureRankSetObj[aIndex].adEndTimeForOffers) * 24); 
			xTimeSegmentForEachOffer.push( parseInt(xTimeMax - timeRemaning[p1] ));
		}
		
		return xTimeSegmentForEachOffer;
		
	}
	
	//== ID-31 ==\\
	function getDiscountPercentSetWhenAdCreatedForAllOffers() {
		var storesObj, setDiscountForAllStores;
		
		storesObj = getStoresObj();
		setDiscountForAllStores = [];
		
		for ( var p1 = 0; p1 < storesObj.length; p1++ ) {
			setDiscountForAllStores.push(storesObj[p1].discount);
		}
		return setDiscountForAllStores;
		
	}
	
	//== ID-32 ==\\
	function getQtyRemainingForAllOffers() {
		var storesObj, offerQtyForAllOffers;
		
		storesObj = getStoresObj();
		offerQtyForAllOffers = [];
		
		for ( var p1 = 0; p1 < storesObj.length; p1++ ) {
			offerQtyForAllOffers.push(storesObj[p1].adOffers);
		}
		
		return offerQtyForAllOffers;
		
	}
	
	//== ID-33 ==\\
	function getAdPerformanceIndexNumberForAllOffers() {
		var currentTimeSegmentForAllOffers, currentQtyRemainForAllOffers, performanceIndex;
		
		currentTimeSegmentForAllOffers = getRemainingTimeSegmentsForAllOffersForAdPerformanceUse();
		currentQtyRemainForAllOffers = getQtyRemainingForAllOffers();
		performanceIndex = [];
		
		for ( var p1 = 0; p1 < currentQtyRemainForAllOffers.length; p1++ ) {
			performanceIndex.push( currentTimeSegmentForAllOffers[p1] * currentQtyRemainForAllOffers[p1] );
		}
		
		return performanceIndex;
		
	}
	
	//== ID-34 ==\\ =========================================================================================================================	      WORKING ON RIGHT HERE  !!!!!!!!  ===========================================!!!!!!!!!
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
	

	//== ID-35 ==\\  \\== DCR MULTIPLIER IS EXPECTED TO BE SAME THROUGHOUT IN THIS CASE; WHEN CATEGORIES ARE ADDED, THAT WILL CHANGE FOR EACH

	function updateOfferPointUtilizingMultiplier() {
		var stores, addAdjustedDcr, count, updatePoints, updatedAdjDCR, adPerformanceMultiplierForAllOffers, calculatedAdPointWithDCR, calculatedAdPointWithPerformance;
		
		stores = getStoresObj();
		addAdjustedDcr = getDCRUtilizingAdLedgerTable(); //+++ ID-24 { RETURNS DCR FOR ALL OFFERS; THIS IS AD LEDGER || THIS IS FOR ALL STORES; ROLLING-AD LEDGER TIMER NOT IMPLEMENTED || ALL OFFER POINT VALUES SHOULD CHANGE IF OFFERS CHANGE }
		adPerformanceMultiplierForAllOffers = getMultiplierValueFromPerformanceTableForAllOffers(); //++ ID-28 { RETURNS AN INDEXED ARRAY OF MULTIPLIERS FOR AD-PEFORMANCE || THIS IS UNIQUE TO EACH STORE OFFER }
		updatePoints = [];
		updatedAdjDCR = [];
		
		count = 1;
		
		for (var p1 = 0; p1 < stores.length; p1++ ) {
			var pass1 = stores[p1];
			updatedAdjDCR.push((pass1.baseAdConvertRate + addAdjustedDcr).toFixed(2)); 
			calculatedAdPointWithDCR = Number(parseFloat((pass1.discount * 100) * (pass1.baseAdConvertRate + addAdjustedDcr)).toFixed(2)); //== THE MULTIPLIER NEEDS THE BASE DISCOUNT CONVERT RATE TO MULTIPLY BEFORE MULTIPLYING THE DISCOUNT PERCENT OF OFFER
			calculatedAdPointWithPerformance = (calculatedAdPointWithDCR * adPerformanceMultiplierForAllOffers[p1]).toFixed(2);
			updatePoints.push(calculatedAdPointWithPerformance);
			$('.js-pointValue-' + count).text(calculatedAdPointWithPerformance);
			count++;
		}
		
		console.log([updatedAdjDCR, 'Updated DCR w/Adjust', adPerformanceMultiplierForAllOffers, 'Ad-Performance-Multiplier', calculatedAdPointWithDCR, 'calculated with DCR', calculatedAdPointWithPerformance, 'calculated with Performance']);
		return updatePoints;
	}
	
	
	//*******************  FUNCTIONAL BUTTONS FOR INVOKING FUNCTIONS OF SECTION A  *********************************************\\
	//**************************************************************************************************************************\\
	
	//== BTN-ID-1 ==\\
	$('.submitMParams').on('click', function() {
		var returnTotalCurrentRankPoint = setAdvertiserMParamValues();
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
	
	//== BTN-ID-6 ==\\
	$('.js-testingBtnSectionB').on('click', function() {
		var test = updateOfferPointUtilizingMultiplier(); //=== UPDATES POINT VALUE OF OFFERS
		updateStoreInfoOnOffers();
		console.log(test); 
	});
	
//	//== BTN-ID-9 ==\\
//	$('.js-testingBtnSectionC').on('click', function() {
//		var test = getMultiplierValueFromPerformanceTableForAllOffers(); //== 
//		console.log(test); 
//	});
	
	//== BTN-ID-7 ==\\
	$('.js-generateAdLedgerDiviationTable').on('click', function() {
		var adLedgerTable = generateYAxisAdLedgerDiviationSidebar();
		console.log(adLedgerTable); //== RETURNS THE STORES ACCUMULATED RANK POINTS
	});
	
	
	//=*************************************************************   NEW CODE ABOVE    *******************************************************************\\
	//=**********************************************************************************************************************************************************\\
	//=*************************************************************** END SECTION A ***********************************************************************\\

	//=========================================================\\
	//=== BEGIN CODE FOR AD | ACTIVITY OCCURANCE ALGORITHM ===//
  //=========================================================//
	
	//=========================================================\\
	//=== CALCULATE ADVERTISERS RANK USING MEASUREMENT TABLE ===//
	//=== NOTES OF FLAWS >> NEED TO REDO USING FOR LOOPS FOR DIRECTING VALUES INTO AN ARRAY ===\\
  //=========================================================//
	
	//=***************************************************************** NEW BLOCK OF IMPROVED FUNCTIONS *****************************************************\\
	//=*******************************************************************************************************************************************************\\
	//=******************************************************************  GETS VALUES FROM INPUT-BOXES ******************************************************\\
	//== GETS THE SELECTED MEASUREMENT PARAM
	function getInputBoxSelectedMeasurementParam() {
		var selectMeasurement = $('#measurements option:selected').text();
		return (selectMeasurement).toLowerCase();
	}
	
	function getInputBoxSelectedStore() {
		var selectStore = document.getElementById('storeNumber').value;
		return Number(selectStore);
	}
	
	function getInputBoxSelectedRankLevel() {
		var selectRankLevel = document.getElementById('rankLevel').value;
		return Number(selectRankLevel);
	}
	
	function getInputBoxMeasurementIncreaseOrDecreaseAmount() {
		var value = document.getElementById('changeMSetValue').value;
		return Number(value);
	}
	
	function getInputBoxTimePeriodStoreNumber() {
		var storeNumber = $('#setStoreDate').val();
		return Number(storeNumber);
	}
	
	function getInputBoxSelectionForTimePeriod() {
		var selected;
		selected = $('#setDate option:selected').text();
		return (selected).toLowerCase();
	}
	
	//== RETURNS DATE IN NUMBER FORMAT
	function getInputBoxTimePeriod() {
		var month, day, year, time;
		month = document.getElementById('getMonth').value;
		day = document.getElementById('getDay').value;
		year = document.getElementById('getYear').value;
		time = new Date(month + ' ' + day + ' ' + year).getTime();
		
		return time;
	}
	
	function getInputBoxDiscountQtyStoreNumber() {
		var storeNumber = $('#setStoreDiscountQty').val();
		return Number(storeNumber);
	}
	
	function getInputBoxQty() {
		var qty;
		qty = $('#quantity').val();
		return Number(qty);
	}
	
	function getInputBoxDiscountPercent() {
		var discount; 
		discount = $('#discountPercent').val();
		return Number(parseFloat(discount/100).toFixed(4));
	}
	
	//=***************************************************************************************************************\\
	//=************  GET AND SET STORE VALUES FROM STORE OBJECT  *****************************************************\\
	
	//== ID-A1 ==\\
	//== GETS THE SET RANK LEVEL OF STORE & RETURNS THE RANK LEVEL
	function getCurrentRankLevel(storeNum) {
		var rankLevel, storesObject;
		
		storesObject = getStoresObj();
		rankLevel = storesObject[storeNum].rankLv;
		return rankLevel;
		
	}
	
	//== ID-A2 ==\\
	//== GETS THE RANKS LEVELS TOTAL TIME SEGMENTS  
	function getRankLevelTimeSegment() {
		var rankLevel, rankObject, mParamObject, aIndex, rLevelTimeSegment ;
		
		rankLevel = getInputBoxSelectedRankLevel();
		rankObject = getRankXyTableConfigSettingsForAdvertiserObject();
		mParamObject= getTimeMeasureRankSetObj();
		aIndex = rankLevel - 1;
		rLevelTimeSegment = rankObject[aIndex].mTimeSegments(); //== RETURNS 3360 || TOTAL 3 MINUTES SEGMENTS
		
		return Number(rLevelTimeSegment);
		
	}
	
	//== ID-A3 ==\\
	//== GETS THE STORES CURRENT TIME SEGMENT
	function getStoresCurrentTimeSegment(storeNum) {
		var storeObject, mParamObject, aIndex, rankLevel, rLevelTimeSegment, timeNow, endStoreRankPeriod, timeDifference, calcCurrentTimeSegment, storeCurrentTimeSegment;
		
		storeObject = getStoresObj();
		mParamObject = getTimeMeasureRankSetObj();
		aIndex = storeNum - 1;
		rankLevel = getCurrentRankLevel(storeNum); //== RETURNS STORES RANK LEVEL 
		rLevelTimeSegment = getRankLevelTimeSegment(rankLevel); //== RETURNS 3360 || TOTAL 3 MIN SEGMENTS
		timeNow = new Date().getTime() / 1000/ 60 ; //== RETURNS 24,402,516 
		endStoreRankPeriod = ((storeObject[aIndex].rankTimePeriod /1000 / 60) + ( rLevelTimeSegment * mParamObject[aIndex].rankMOccurences ));
		//**********************  UPCONVERT ABOVE RLEVELTIMESEGMENT BY RANK-M-OCCURENCES; RETURNS TO 1 MINUTE SEGMENTS  **********************************\\
		
		timeDifference = Number(((endStoreRankPeriod - timeNow) / mParamObject[aIndex].rankMOccurences).toFixed(2)); 
		//           ||***************** RANK STOP TIME IS DETERMINED BY SET PARAMETERS ************************************||
		calcCurrentTimeSegment = (rLevelTimeSegment);
		storeCurrentTimeSegment = ((calcCurrentTimeSegment - timeDifference) );
		
//		console.log([ endStoreRankPeriod, timeNow, Number(timeDifference.toFixed(2)), Number(calcCurrentTimeSegment.toFixed(2)), Number(storeCurrentTimeSegment.toFixed(2)) ]);
		return Number(storeCurrentTimeSegment.toFixed(2));
	}
	
	//=***************************************************************************************************************\\
	//=************  GET OBJECT KEY:VALUE PAIRS AND RETURNING AN INDEXED ARRAY ***************************************\\
	
	//== ID-A4 ==\\
	//== GETS & RETURNS MEASUREMENT OBJECT [ KEY:VALUE ]
	function getRankMeasurementSettingsForAdvertiserObject() {
		var rankMeasurementObj = [];
		
		for ( var p1 in rankMeasurementSettingsForAdvertiserObject) {
			var pass1 = rankMeasurementSettingsForAdvertiserObject[p1]
			for ( var p2 in pass1 ) {
				rankMeasurementObj.push(pass1[p2]);
			}
//			console.log(mTableAdverObj);
			return rankMeasurementObj;
		} 
	}
	
	//== GETS & RETURNS MREASUREMENT OBJECT KEY
	function getMTableAdverProp() {
		var rankMeasurementProp = [];
		
		for ( var p1 in rankMeasurementSettingsForAdvertiserObject) {
			var pass1 = rankMeasurementSettingsForAdvertiserObject[p1];
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
	
	//=***************************************************************************************************************\\
	//=************  SETS INPUT VALUES AND RETURNS A VALUE  **********************************************************\\
	
	//== PRIMARY FUNCTION GETS VALUES FROM INPUT-BOX == HOW THE STORE IS IDENTIFIED
	//== SETS THE MEASUREMENT VALUE; RETURNS THE TOTAL ACCUMULATED RANK POINTS 
	function setAdvertiserMParamValues() {
		var store, storeNumber, rankLevel, measurement, increaseDecrease, aIndex, minThresholdValue, currentMeasurementCount, currentTimeSegment ;
		
		store = getStoresObj();
		storeNumber = getInputBoxSelectedStore();
		rankLevel = getInputBoxSelectedRankLevel();
		measurement =	getInputBoxSelectedMeasurementParam();
		increaseDecrease = getInputBoxMeasurementIncreaseOrDecreaseAmount();
		aIndex = (storeNumber-1);
		currentTimeSegment = getStoresCurrentTimeSegment(storeNumber);
		
		store[aIndex].rankLv = rankLevel;
		
		if ( measurement === 'clicks') {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].clicksCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preClicksCount && parseInt(minThresholdValue) === store[aIndex].lastClickCountMin && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].clicksCount += increaseDecrease;
				store[aIndex].clicksCount = store[aIndex].clicksCount;
				store[aIndex].lastClickCountMin = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'views' ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].viewsCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preViewsCount && parseInt(minThresholdValue) === store[aIndex].lastViewsCountMin && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].viewsCount += increaseDecrease;
				store[aIndex].viewsCount = store[aIndex].viewsCount;
				store[aIndex].lastViewsCountMin = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'reviews' ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].reviewsCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preReviewsCount && parseInt(minThresholdValue) === store[aIndex].lastReviewsCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].reviewsCount += increaseDecrease;
				store[aIndex].reviewsCount = store[aIndex].reviewsCount;
				store[aIndex].lastReviewsCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'saves' ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].savedAdOccurencesCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preSavedAdOccurencesCount && parseInt(minThresholdValue) === store[aIndex].lastSavedAdOccurencesCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].savedAdOccurencesCount += increaseDecrease;
				store[aIndex].savedAdOccurencesCount = store[aIndex].savedAdOccurencesCount;
				store[aIndex].lastSavedAdOccurencesCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'purchases' ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].purchaseOccurencesCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].prePurchaseOccurencesCount && parseInt(minThresholdValue) === store[aIndex].lastPurchaseOccurencesCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].purchaseOccurencesCount += increaseDecrease;
				store[aIndex].purchaseOccurencesCount = store[aIndex].purchaseOccurencesCount;
				store[aIndex].lastPurchaseOccurencesCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'compounded discount' ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].compoundDiscountOfferPercentCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preCompoundDiscountOfferPercentCount && parseInt(minThresholdValue) === store[aIndex].lastCompoundDiscountOfferPercentCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].compoundDiscountOfferPercentCount += increaseDecrease;
				store[aIndex].compoundDiscountOfferPercentCount = store[aIndex].compoundDiscountOfferPercentCount;
				store[aIndex].lastCompoundDiscountOfferPercentCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		} 
		else if ( measurement === 'accumulated points' ) {
			minThresholdValue = setRankMeasurementThresholdMinimumForCurrentTimeSegment( storeNumber, aIndex, measurement, currentTimeSegment );
			currentMeasurementCount = store[aIndex].accumulatedAdPointCount;
			if ( currentMeasurementCount >= minThresholdValue ) {
				if ( currentMeasurementCount === store[aIndex].preAccumulatedAdPointCount && parseInt(minThresholdValue) === store[aIndex].lastAccumulatedAdPointCount && parseInt(currentTimeSegment) === parseInt(store[aIndex].preRankMeasurementTimeSegment)) {
					return;
				}
				store[aIndex].preRankMeasurementTimeSegment = currentTimeSegment;
				store[aIndex].accumulatedAdPointCount += increaseDecrease;
				store[aIndex].accumulatedAdPointCount = store[aIndex].accumulatedAdPointCount;
				store[aIndex].lastAccumulatedAdPointCount = parseInt(minThresholdValue);
				store[aIndex].totalRankPoints += increaseDecrease;
			}
			return store[aIndex].totalRankPoints;
		}
		
	}
	
	//== SETS THE TIME FOR THE SELECTED PARAM; RETURNS THE TIME IN NUMBER FORMAT
	function setAdvertiserTimeMeasureParamValues() {
		var timePropToUpdate, time, storeNumber, storeObject, aIndex;
		
		storeNumber = getInputBoxTimePeriodStoreNumber();
		timePropToUpdate = getInputBoxSelectionForTimePeriod();
		time = getInputBoxTimePeriod();
		storeObject = getStoresObj();
		aIndex = (storeNumber-1);
		
		if (timePropToUpdate === ('Set Rank Period Start Date').toLowerCase() )   {
			storeObject[storeNumber].rankTimePeriod = time;
			return storeObject[storeNumber].rankTimePeriod;
		}
		else if (timePropToUpdate === ('Set Offer Create Date').toLowerCase() ) {
			storeObject[storeNumber].adCreateTime = time;
			return storeObject[storeNumber].adCreateTime;
		}
		else if (timePropToUpdate === ('Set Offer End Date').toLowerCase() ) {
			storeObject[storeNumber].adEndTime = time;
			return storeObject[storeNumber].adEndTime;
		}	
		
	}
	
	//== SETS THE AD OFFER QTY & DISCOUNT PERCENT
	function setAdvertiserDiscountAndQty() {
		var activeDiscount, activeQty, storeNumber, storeObject, index;
		
		storeNumber = getInputBoxDiscountQtyStoreNumber();
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
	
	//== SETS THE ACTIVE RANK MEASUREMENT POINT THRESHOLD MINIMUMS
	//== { REQUIRES ( AINDEX - STORE # ) & MEASUREMENT TYPE }
	function setRankMeasurementThresholdMinimumForCurrentTimeSegment(storeNumber, aIndex, measurementType, currentTimeSegment) {
		var mTableObject, mTableProp, mTableMinThresholdValue;
		
		mTableObject = getRankMeasurementSettingsForAdvertiserObject();
		mTableProp = getMTableAdverProp();
		
		for ( var p1 = 0; p1 < mTableProp.length; p1++ ) {
			var keyVal = mTableProp[p1];
			if ( keyVal === measurementType ) {
				mTableMinThresholdValue = mTableObject[aIndex][keyVal] * currentTimeSegment;
				return mTableMinThresholdValue;
			}
		}
		
	}
	
	
	//=***************************************************************** END BLOCK OF IMPROVED FUNCTIONS *****************************************************\\
	//=*******************************************************************************************************************************************************\\

		
		// (1). BREAK RANK START TIME DOWN INTO DURATION OF 3 MINUTE SEGMENTS OVER 15 DAYS 
		// (2). DONT NEED Y-TABLE BECAUSE TIME INT VALUE SLOT IS MULITPLIED BY MEASUREMENT VALUE
		// (3). NEED TO GET THE TOTAL VALUE FROM EACH CATEGORY
		// (4). COMBINE ALL THE VALUES 
		// (5). COMPARE THE ADVERTISERS CURRENT
		// (6). NEED ACTIVITY COUNTER FOR EACH MEASURED PARAM
		// NOT DONE  >>  (7). NEED TO CLEAR COUNT FOR EACH PARAM IF RANK TIME EXPIRES 
		
		// === (1). NEED AN OBJECT FOR EACH ADVERTISER; KEEP TRACK OF CUMMULATIVE ACTIONS
		// === (2). ADD/CONVERT VARIABLES THAT ARE CREATED HERE TO PROPERTIES OF EACH STORE OF STORES OBJECT
		// === (3). NEED TO ASSOCIATE WITH TIMER >> THIS MEANS AN ACTIVE TIMER FOR EACH AD OFFER
		
		
//	});
	
	//==========================================================================================\\
	//   ||=== GENERAL USE FUNCTION TO GET VALUES FROM #{ SETMTABLEADVER } OBJECT ===||
  //==========================================================================================//
	
	//== ID-19 ==\\  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<---------------------------------------------------MARKED FOR POSSIBLE DELETION;
	
	var getObjectValuesFromSetTableAdver = {
		
		//== (1). USE FUNCTION WITHIN OBJECT; 
		//== (2). RETURN INDEXED ARRAY CONTAINING ITS VALUES
		setTableAdver_Lv1: function() {
			// (2). GET OBJECT INTO ARRAY FORMAT & COUNT NUMBER OF ACTIVE MEASUREMENT PARAMS
			var setTableAdver_base = [];
			var setTableAdverLv1_1deep = [];
			var setTableAdverLv1_2deep = [];
			var setTableAdverLv1_3deep = [];
			var setTableAdverLv1_4deep = [];
			var activeMasurementKeysLv1 = [];
			var activeMasurementValuesLv1 = [];
			var totalMeasurementConditionsLv1Count = 0;

			for ( var p1 in rankMeasurementSettingsForAdvertiserObject ) {
				setTableAdver_base.push(rankMeasurementSettingsForAdvertiserObject);
				if ( p1 == 'lv1' ) {
					var pass1 = rankMeasurementSettingsForAdvertiserObject[p1];
					setTableAdverLv1_1deep.push(pass1);

					for ( var p2 in pass1 ) {
						var pass2 = pass1[p2];
						setTableAdverLv1_2deep.push(pass2);

						for (var p3 in pass2 ) { //== USING 3RD FOR LOOP TO GET TOTAL COUNT OF MEASUREMENT PARAMETERS
							var pass3 = pass2[p3];
							setTableAdverLv1_3deep.push(pass3);
							
							if ( pass3 > 0 && pass3 !== typeof Object ) {
								activeMasurementKeysLv1.push(p3);
								activeMasurementValuesLv1.push(pass3);
								totalMeasurementConditionsLv1Count++;
							}

							for ( var p4 in pass3 ) { //== USING FORTH LOOP TO CHECK THE OBJECT ONE MORE LEVEL DEEP
								var pass4 = pass3[p4];
								setTableAdverLv1_4deep.push(pass4);
								
								if ( pass4 > 0 && pass4 !== typeof Object ) {
									activeMasurementKeysLv1.push(p4);
									activeMasurementValuesLv1.push(pass4);
									totalMeasurementConditionsLv1Count++;
								}
							}
						}
					}
				}
			}
			return [setTableAdver_base, setTableAdverLv1_1deep, setTableAdverLv1_2deep, setTableAdverLv1_3deep, setTableAdverLv1_4deep, activeMasurementKeysLv1, activeMasurementValuesLv1, totalMeasurementConditionsLv1Count ];
		},
		setTableAdver_Lv2: function() {
			var setTableAdver_base = [];
			var setTableAdverLv2_1deep = [];
			var setTableAdverLv2_2deep = [];
			var setTableAdverLv2_3deep = [];
			var setTableAdverLv2_4deep = [];
			var activeMasurementKeysLv2 = [];
			var activeMasurementValuesLv2 = [];
			var totalMeasurementConditionsLv2Count = 0;
			
			for ( var p1 in rankMeasurementSettingsForAdvertiserObject ) {
				setTableAdver_base.push(rankMeasurementSettingsForAdvertiserObject);
				if ( p1 == 'lv2' ) {
					var pass1 = rankMeasurementSettingsForAdvertiserObject[p1];
					setTableAdverLv2_1deep.push(pass1);

					for ( var p2 in pass1 ) {
						var pass2 = pass1[p2];
						setTableAdverLv2_2deep.push(pass2);

						for (var p3 in pass2 ) { //== USING 3RD FOR LOOP TO GET TOTAL COUNT OF MEASUREMENT PARAMETERS
							var pass3 = pass2[p3];
							setTableAdverLv2_3deep.push(pass3);
								if ( pass3 > 0 && pass3 !== typeof Object ) {
									activeMasurementKeysLv2.push(p3);
									activeMasurementValuesLv2.push(pass3);
									totalMeasurementConditionsLv2Count++;
							}

							for ( var p4 in pass3 ) { //== USING FORTH LOOP TO CHECK THE OBJECT ONE MORE LEVEL DEEP
								var pass4 = pass3[p4];
								setTableAdverLv2_4deep.push(pass4);
									if ( pass4 > 0 && pass4 !== typeof Object ) {
										activeMasurementKeysLv2.push(p4);
										activeMasurementValuesLv2.push(pass4);
										totalMeasurementConditionsLv2Count++;
								}
							}
						}
					}
				}
			}
			return [setTableAdver_base, setTableAdverLv2_1deep, setTableAdverLv2_2deep, setTableAdverLv2_3deep, setTableAdverLv2_4deep, activeMasurementKeysLv2, activeMasurementValuesLv2, totalMeasurementConditionsLv2Count ];
		},
		
	}
	
//	var t1 = getObjectValuesFromSetTableAdver.setTableAdver_Lv2();
//	console.log(t1);
	
	//==========================================================================================\\
	//   ||=== GENERAL USE FUNCTION TO GET VALUES FROM #{ MPARAM } OBJECT ===||
  //==========================================================================================//
	
	//== ID-20 ==\\    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<---------------------------------------------------MARKED FOR POSSIBLE DELETION;
	
	var getObjectValuesFromMParam = {

		//== (1). USE FUNCTION WITHIN OBJECT; 
		//== (2). RETURN INDEXED ARRAY CONTAINING ITS VALUES
		mParam_Lv1: function() {
			var mParam_base = [];
			var mParamLv1_1deep = [];
			var mParamLv1_2deep = [];

			for ( var p1 in rankTimeMeasurementSettingsForAdvertiserObject ) {
				mParam_base.push(rankTimeMeasurementSettingsForAdvertiserObject );
				if ( p1 == 'lv1' ) {
					var pass1 = rankTimeMeasurementSettingsForAdvertiserObject[p1];
					mParamLv1_1deep.push(pass1);
					for ( var p2 in pass1 ) {
						mParamLv1_2deep.push(pass1[p2]); //== GET THE NUMERICAL VALUES OF INNER OBJECT
					}
				}
			}
			return [mParam_base, mParamLv1_1deep, mParamLv1_2deep ];
		},
		mParam_Lv2: function() {
			var mParam_base = [];
			var mParamLv2_1deep = [];
			var mParamLv2_2deep = [];

			for ( var p1 in rankTimeMeasurementSettingsForAdvertiserObject ) {
				mParam_base.push(rankTimeMeasurementSettingsForAdvertiserObject );
				if ( p1 == 'lv2' ) {
					var pass1 = rankTimeMeasurementSettingsForAdvertiserObject[p1];
					mParamLv2_1deep.push(pass1);
					
					for ( var p2 in pass1 ) {
						mParamLv2_2deep.push(pass1[p2]); //== GET THE NUMERICAL VALUES OF INNER OBJECT
					}
				}
			}
			return [mParam_base, mParamLv2_1deep, mParamLv2_2deep ];
		}

	}

//	var t2 = getObjectValuesFromMParam.mParam_Lv2();
//	console.log(t2);
	
	//==========================================================================================\\
	//   ||=== GENERAL USE FUNCTION TO GET VALUES FROM #{ STORES } OBJECT ===||
	//        ?? ARRAY OF 12 STORES RETURNING OVER 4700 RECORDS ??
  //==========================================================================================//
	
	//== ID-21 ==\\   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<---------------------------------------------------MARKED FOR POSSIBLE DELETION;
	
	var getObjectValuesFromStores = {
		//== (1). USE FUNCTION WITHIN OBJECT; 
		//== (2). RETURN INDEXED ARRAY CONTAINING ITS VALUES
		//== { ONLY ONE LEVEL DEEP }
		
		stores: function() {
			
			var stores_base = [];
			var stores_1deep = [];
			
			for (var p1 in stores ) {
				var pass1 = stores;
				stores_base.push(pass1);
				
				for (var p2 in stores ) {
					var pass2 = pass1[p2];
					stores_1deep.push(pass2);
				}
			}
			return [stores_base, stores_1deep ];
		},
		
	}
	
//	var t3 = getObjectValuesFromStores.stores();
//	
//	console.log(t3);
	
	//==========================================================================================\\
	//  ||=== GENERAL FUNCTION >> GET VALUES FROM SETRANK OBJECT ===||
  //==========================================================================================//
	
	//== ID-22 ==\\   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<---------------------------------------------------MARKED FOR POSSIBLE DELETION;
	
  var getObjectValuesFromSetRank = {
		
		setRank_lv1: function() {
			
			var setRankLv1_base = [];
			var setRankLv1_1deep = [];
			
			for (var p1 in rankXyTableConfigSettingsForAdvertiserObject ) {
				setRankLv1_base.push(rankXyTableConfigSettingsForAdvertiserObject)
				var pass1 = rankXyTableConfigSettingsForAdvertiserObject[p1];
				for ( var p2 in pass1 ) {
					setRankLv1_1deep.push(rankXyTableConfigSettingsForAdvertiserObject[p1][p2]);
				}
			}
			
			return [ setRankLv1_base, setRankLv1_1deep ];
		}
		
	}
	
//	var t4 = getObjectValuesFromSetRank.setRank_lv1();
//	console.log(t4[1][7]());
	
	
	

	
//	//==========================================================================================\\
//	//  ||=== CHECK WHICH STORE ADVERTISER LOGGED-IN ===||
//	//  ||=== CREATING TEMPORARY LOGIN OBJECT FOR STORE ==||
//	//         ||=== USE BUTTON TO ENTER INPUT AND CHANGE STORE STATUS ===||
//  //==========================================================================================//
//	
//	//== ID-23 ==\\
//	
//	var storeloginStatus = [
//		
//		{ store_1: true },
//		{	store_2: false },
//		{	store_3: false },
//		{	store_4: false },
//		{	store_5: false },
//		{	store_6: false },
//		{	store_7: false },
//		{	store_8: false },
//		{	store_9: false },
//		{	store_10: false },
//		{	store_11: false },
//		{	store_12: false }
//		
//	]
//	
//	
//	//== ID-24 ==\\ 
//	
//	function whichStoreLoggedIn(cv, index, arr) {
//		
//		//== FOR-IN LOOP REQUIRED TO GET NAMED KEY VALUE ==\\
//		for (var p1 in arr[index] ) {
//			if ( arr[index][p1] == true ) {
//				return arr[index][p1];
//			}
//		}
//	}
//	
////	var t5 = storeloginStatus.find(whichStoreLoggedIn);	
//	//	console.log(t5);
//	
//	//==========================================================================================\\
//	//  ||=== GET STORE-IDENTIFIER FROM ID-24; 
//  //==========================================================================================//
//	
//	//== ID-25 ==\\
//	
//	function checkStoreRankLv() {
//		var storeArr = storeloginStatus.find(whichStoreLoggedIn);
//		
//		for (var p1 in storeArr ) {
//			return p1;
//		} 
//		
//	} 
//	
////	var t6 = checkStoreRankLv();
////	console.log(t6);
	
	
	//=***************************************************************** START BLOCK OF IMPROVED FUNCTIONS *************************************************************************\\
	//=******************************************************** INNER-RANK LEVEL MEASUREMENT POINT THRESHOLD VALUES  *************************************************************************\\
	//=*****************************************************************  *************************************************************************\\
	//=*************************************************************************     SECTION B   ***********************************************************************************\\
	
	//== ==\\
	
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
	
	//== ==\\
	
	function getInnerRankLevelSidebarObj(rankLevel) {
		var innerRankLevelObj = [];
		
		for ( var p1 in innerRankLevelSidebarObject ) {
			if (rankLevel) {
				innerRankLevelObj.push(innerRankLevelSidebarObject[p1])
			}
		}
		
		return innerRankLevelObj;
		
	}
	
	//== ==\\
	
	function getActiveRankMeasurementValuesIntoAnArray() {
		var extractMeasurementValues, rankMeasurementObj;
		
		rankMeasurementObj = getRankMeasurementSettingsForAdvertiserObject(); //=== { OBJECT FOR RANK MEASUREMENT PARAMETER SETTINGS AND VALUES } ==//
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
	
	//== ==\\
	
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
	
	//== ID-28 ==\\
	//== { ONE METHOD OF CREATING LEVELS OF GREATER VARIABILITY }
	function generateYAxisSidebarForRankSublevel() {
//		var rankLevel, aIndex, innerRankLevelObj, startNumber, yAxisPos, yAxisNeg, totalInnerLevels, count1, levelThreshold, rLevelPointSpread, levelThreshold, lastCount, lastPointValue, pointThresholdValues  ;
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
		return pointThresholdValues.reverse();
		
	}

		
	//== ID-29 ==\\
	function setInnerRankLevelAfterCheckingIfCurrentPointsExceedPointRequirement() {
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
	
	
	//=***************************************************************** END BLOCK OF IMPROVED FUNCTIONS *************************************************************************\\
	//=*************************************************************************   SECTION B   ***********************************************************************************\\
	
	//==========================================================================================\\
	//  ||=== GET NUMBER OF TOTAL POSSIBLE POINTS FOR A MEASURED RANK PERIOD ===||
  //==========================================================================================//
	
	//== ID-27 ==\\
	
	function calcTotalPossibleRankPoints() {
		var storeRLv = 1;
		
		// (1). GET NUMBER OF GRADED MEASUREMENT CONDITIONS
		// (2). GET TOTAL COUNT OF ACTIVE MEASUREMENT PARAMS
		// (3). MULTIPLY BY THE NUMBER OF GRADED SEGMENT POINTS
		//== RESULT IS TOTAL NUMBER OF POSSIBLE POINTS || ASSUMING EACH ACTION IS WORTH 1 RANK PT ==\\
		
		if (storeRLv === 1 ) {
			var getSetTableVal = getObjectValuesFromSetTableAdver.setTableAdver_Lv1();
			var actMeasurementVal = getSetTableVal[getSetTableVal.length - 1 ];
			var getMSegments = getObjectValuesFromSetRank.setRank_lv1();
			var mSegments = getMSegments[1][7]() * actMeasurementVal;
//			console.log([getSetTableVal, actMeasurementVal, getMSegments, mSegments]);
			return mSegments;
		}
		if (storeRLv === 2 ) {
			var getSetTableVal = getObjectValuesFromSetTableAdver.setTableAdver_Lv2;
			var actMeasurementVal = getSetTableVal[getSetTableVal.length - 1 ];
			var getMSegments = getObjectValuesFromSetRank.setRank_lv2();
			var mSegments = getMSegments[1][7]() * actMeasurementVal;
			return mSegments;
		}
	
	} 
	
	
	
	//==========================================================================================\\
	//  ||=== GET RANK LEVEL OF IDENTIFIED LOGGED-IN ADVERTISER/STORE ===||
	//  ||=== USE KEY VALUE FROM FUNCTION ID-25 TO GET STORES CURRENT RANK LEVEL ===||
  //==========================================================================================//
	
	//== ID-26 ==\\
	
	function getLoggedInStoresRankLv() {
//		var whatStore = checkStoreRankLv();
		var storeRLv = stores[whatStore].rankLv;
		
		return storeRLv;
		
	}
	
//	var t7 = getLoggedInStoresRankLv();
	//	console.log(t7);
	

		
	//=*************************************************************   NEW CODE BELOW    *******************************************************************\\
	//=****************  THIS AFTER THE INNER-RANK LEVEL HAS BEEN DETERMINED; CAUSES THE POINTS OF INDIVIDUAL OFFER TO DEFLECT FROM ITS CURRENT VALUE *******************************\\
	//=**************************  RANK-LEVEL MEASUREMENT TABLE FOR THE STORES CURRRENT INNER-RANK LEVEL  *******************************\\
	//=*************************************************************** START SECTION C ***********************************************************************\\
	
	//== ID-31 ==\\
	//## FOR ADJUSTED DCR 
	var innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser = {
		
		adPointAddition_Lv1: {
			y_top: 0.000020,
			y_bottom: 0.000015,
			x1_topLeft: 0.0015,
			x1_bottomLeft: 0.0011,
			x2_topRight: 0.0025,
			x2_bottomRight: 0.0020,
			xMeasureSegments: rankXyTableConfigSettingsForAdvertiserObject.lv1.mTimeSegments(),
			yMeasureSegments: (calcTotalPossibleRankPoints() / rankTimeMeasurementSettingsForAdvertiserObject.lv1.rankMOccurences), //== relies on ID-27 & mParamObject
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
			xMeasureSegments: rankXyTableConfigSettingsForAdvertiserObject.lv2.mTimeSegments(),
			yMeasureSegments: (calcTotalPossibleRankPoints() / rankTimeMeasurementSettingsForAdvertiserObject.lv2.rankMOccurences), //== relies on ID-27 & mParamObject
			yPivotTop: 0.50, //== as a percentage of possible measurement segments
			yPivotBottom: 0.50, //== as a percentage of possible measurement segments
			xPivotLeft: 0.50, //== as a percentage of possible measurement segments
			xPivotRight: 0.50, //== as a percentage of possible measurement segments
			pivotStartVal: 2.5 ///== number in which increments and decrements start from == different for each rank level  
		}
		
	}
	
	//==  ==\\
	function getInnerRankLevelDCRMeasurementTableObject() {
		var innerRankLevelDCRTableObj = [];
		
		for ( var p1 in innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser ) {
			var pass1 = innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser[p1];
			innerRankLevelDCRTableObj.push(pass1);
		}
		
		return innerRankLevelDCRTableObj;
		
	}
	
	//== ==\\
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
	
	//== 
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
	
	//== 
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
	
	//== ==\\
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
	
	//== ==\\  
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
		
	function concatLeftAndRightInnerRankMeasurementTables(innerRankLevel) {
		var leftSide, rightSide, innerRankLevelMeasurementTable;
		
		leftSide = generateInnerRankLevelMeasurementTableForLeftSide(innerRankLevel);
		rightSide = generateInnerRankLevelMeasurementTableForRightSide(innerRankLevel);
		
		innerRankLevelMeasurementTable = leftSide.concat(rightSide);
		
		console.log([innerRankLevelMeasurementTable.length, 'Complete table - Inner Rank Level'])
		return innerRankLevelMeasurementTable;
		
	}
	
	
	//=*************************************************************   NEW CODE ABOVE    *******************************************************************\\
	//=**********************************************************************************************************************************************************\\
	//=*************************************************************** END SECTION C ***********************************************************************\\
		
	
				
//			function compileY1Top() { 
//				var y1Total = 0;
//				for ( var p1 = yPivotTop; p1 != 0; p1-- ) {
//					var pass1 = (pivotStartVal - ( pivotStartVal * y1Total )); 
//					yTopAxisAddOnPointTable.push( pass1 ); //== Returns 8,400 index records
//					y1Total = y1Total + (y1_top + y1_top);
//				}
//			}
//			
//			//== ID-34 ==\\
			
//			function compileY1Bottom() {
//				var y1Total = 0;
//				for ( var p1 = yPivotBottom; p1 != 0; p1-- ) {
//					var pass1 = (pivotStartVal + ( pivotStartVal * y1Total )); 
//					yBottomAxisAddOnPointTable.push( pass1 ); //== Returns 8,400 index records
//					y1Total = y1Total + (y1_bottom + y1_bottom);
//				}
//			}
			
	
	
		//== BTN-ID-7 ==\\
	$('.js-testingBtnSectionC').on('click', function() {
		var test20 = concatLeftAndRightInnerRankMeasurementTables(1); //== REQUIRES RANK LEVEL AS PARAMETER
//		console.log([test20]);
	});
	
	$('.js-testingBtnSectionD').on('click', function() {
		var test20 = concatLeftAndRightInnerRankMeasurementTables(1);
		console.log([test20]);
	});
	
	
	
	

//  var t8 = calcTotalPossibleRankPoints();
//	console.log(t8);
	
	//==========================================================================================\\
	//  ||=== GENERATE TABLE FOR RANK LEVEL > ADVERTISER ===||
  //==========================================================================================//


	
//	var t9 = genAdvertiserRankLevelTable();
//	console.log(t9);
	
	//==========================================================================================\\
	//  ||=== GENERATE POINT THRESHOLD LEVELS/TABLE FOR > ADVERTISER ===||
	//  !!=== NEEDS A RECURSION METHOD >> CURRENTLY HARD CODED >> STILL WAS NOT ABLE TO GET A SOLUTION AFTER 8+ HOURS ===!!
  //==========================================================================================//
	
	//== ID-29 ==\\
	
	function genRankLevelPointThresholdValues() {
		var arr = []; //== array for holding point threshold values 
		var r = genAdvertiserRankLevelTable();

		for ( var p1 = 0; p1 < r.length; p1++ ) {
			if ( p1 === 0 ) {
				arr.push(r[p1] + 0);
			}
			if ( p1 === 1 ) {
				arr.push( r[p1] + r[p1-1] );
			}
			if ( p1 === 2 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] );
			}
			if ( p1 === 3 ) {
				arr.push( r[p1] + r[p1-1]+ r[p1-2] + r[p1-3] );
			}
			if ( p1 === 4 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] );
			}
			if ( p1 === 5 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5]);
			}
			if ( p1 === 6 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] );
			}
			if ( p1 === 7 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] );
			}
			if ( p1 === 8 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] );
			}
			if ( p1 === 9 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] );
			}
			if ( p1 === 10 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] );
			}
			if ( p1 === 11 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] );
			}
			if ( p1 === 12 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12] );
			}
			if ( p1 === 13 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] );
			}
			if ( p1 === 14 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] );
			}
			if ( p1 === 15 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10]+ r[p1-11] + r[p1-12] + r[p1-13] + r[p1-14] + r[p1-15]  );
			}
			if ( p1 === 16 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10]+ r[p1-11] + r[p1-12] + r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16] );
			}
			if ( p1 === 17 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10]+ r[p1-11] + r[p1-12] + r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] );
			}
			if ( p1 === 18 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] );
			}
			if ( p1 === 19 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] );
			}
			if ( p1 === 20 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] );
			}
			if ( p1 === 21 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] );
			}
			if ( p1 === 22 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] );
			}
			if ( p1 === 23 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] );
			}
			if ( p1 === 24 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24]);
			}
			if ( p1 === 25 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] );
			}
			if ( p1 === 26 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] );
			}
			if ( p1 === 27 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] );
			}
			if ( p1 === 28 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] );
			}
			if ( p1 === 29 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] );
			}
			if ( p1 === 30 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] );
			}
			if ( p1 === 31 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] );
			}
			if ( p1 === 32 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32] );
			}
			if ( p1 === 33 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32]+ r[p1-33] );
			}
			if ( p1 === 34 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32]+ r[p1-33] + r[p1-34] );
			}
			if ( p1 === 35 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32]+ r[p1-33] + r[p1-34] + r[p1-35] );
			}
			if ( p1 === 36 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32]+ r[p1-33] + r[p1-34] + r[p1-35] + r[p1-36] );
			}
			if ( p1 === 37 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32]+ r[p1-33] + r[p1-34] + r[p1-35] + r[p1-36]+ r[p1-37] );
			}
			if ( p1 === 38 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32]+ r[p1-33] + r[p1-34] + r[p1-35] + r[p1-36]+ r[p1-37] + r[p1-38] );
			}
			if ( p1 === 39 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32]+ r[p1-33] + r[p1-34] + r[p1-35] + r[p1-36]+ r[p1-37] + r[p1-38] + r[p1-39] );
			}
			if ( p1 === 40 ) {
				arr.push( r[p1] + r[p1-1] + r[p1-2] + r[p1-3] + r[p1-4] + r[p1-5] + r[p1-6] + r[p1-7] + r[p1-8] + r[p1-9] + r[p1-10] + r[p1-11] + r[p1-12]+ r[p1-13] + r[p1-14] + r[p1-15] + r[p1-16]+ r[p1-17] + r[p1-18] + r[p1-19] + r[p1-20] + r[p1-21] + r[p1-22] + r[p1-23] + r[p1-24] + r[p1-25] + r[p1-26] + r[p1-27] + r[p1-28] + r[p1-29] + r[p1-30] + r[p1-31] + r[p1-32]+ r[p1-33] + r[p1-34] + r[p1-35] + r[p1-36]+ r[p1-37] + r[p1-38] + r[p1-39] + r[p1-40] );
			}

		}

		return arr;
		
	}

//	var t10 = genRankLevelPointThresholdValues();
//	console.log(t10);

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
	
//	var t11 = updateRankAdvertiser();
//	console.log(t11);

	
	
	//************************   START ADJUSTED BASE DISCOUNT CONVERT RATE ALGORITHIM FEATURE   *********************************************\\
	//*******************************************************************************************************************************\\
	
	//  ||=== START TABLE FOR GENERATING AD-POINT ADDITION TO BASE AD-POINT FIGURE OF ID-3 > ADVERTISER ===||
	//    !!== THE VALUE DETERMINED HERE IS ADDED PRIOR TO OTHER MODIFYING FACTORS ==!!
	//    !!== EACH TABLE IS ASSCOIATED WITH ITS OWN RANK LEVEL ( I.E. RANK LEVEL 1 WILL HAVE DIFFERENT CONFIGIRATION THAT RANK LEVEL 2, ETC. )
	
	//==========================================================================================\\
	//  ||=== SET AD-POINT ADDITION XY TABLE VALUES WITHIN AN OBJECT ===||
  //==========================================================================================//
	

	
//	var t12 = innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser.adPointAddition_Lv1.mPointSegments;
//	console.log(t12);
	
	//==========================================================================================\\
	//  ||=== GENERATE XY AD-POINT ADDITION TABLE VALUES USING VALUES FROM ID-31 ===||
  //==========================================================================================//
	
	//== ID-32 ==\\ 
	//== CONTAINS ID-33, 34, 35, 36, 37, 38 & 39 ==\\
	
	function getAdjDCRValues(lvl) {
		//== tables compile from the y-axis values ==\\
		var yTopAxisAddOnPointTable = [];
		var yBottomAxisAddOnPointTable = [];
		
		var y1AddOnPointTable = []; //== refers to top-left block
		var y2AddOnPointTable = []; //== refers top-right block
		var y3AddOnPointTable = []; //== refers to bottom-left block
		var y4AddOnPointTable = []; //== refers to bottom-right block
		
		var yAxisY1 = [];
		var yAxisY3 = [];
		
		var xMeasureSegmentsHeader = [];
		var combineYTable = [];
		var combinedXYDrcTable = []; //== !!Caution!! THIS WILL NOT WORK WITH LARGER ARRAYS > BROWSER WILL FREEZE IF ARRAY TABLE OVER 22 MILLION
		
		//== there should be four divisions/block of values
		if ( lvl === 1 ) {
			var addOnObject = innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser.adPointAddition_Lv1;
			var y1_top = addOnObject.y_top;
			var y1_bottom = addOnObject.y_bottom;
			
			var x1_tLeft = addOnObject.x1_topLeft;
			var x1_tRight = addOnObject.x1_topRight;
			var x2_bLeft = addOnObject.x2_bottomLeft;
			var x2_bRight = addOnObject.x2_bottomRight;
			
			var yMeasureSegments = addOnObject.yMeasureSegments; //== Returns 7,840
			var xMeasureSegments = addOnObject.xMeasureSegments; //== Returns 3,360
			var yPivotTop = (1 - addOnObject.yPivotTop) * yMeasureSegments; //== Returns 3,920
			var yPivotBottom = (1 - addOnObject.yPivotBottom) * yMeasureSegments; //== Returns 3,360
			var xPivotLeft = (1 - addOnObject.xPivotLeft) * addOnObject.xMeasureSegments; //== Returns 1680
			var xPivotRight = (1 - addOnObject.xPivotRight) * addOnObject.xMeasureSegments; //== Returns 1680
			
			var pivotStartVal = addOnObject.pivotStartVal;
			
			//== ID-39 ==\\
			
			function compileXMeasureSegments() {
				for ( var p1 = 0; p1 < xMeasureSegments; p1++ ) {
					xMeasureSegmentsHeader.push(p1);
				}
			}
			
			//== ID-33 ==\\
			
			function compileY1Top() { 
				var y1Total = 0;
				for ( var p1 = yPivotTop; p1 != 0; p1-- ) {
					var pass1 = (pivotStartVal - ( pivotStartVal * y1Total )); 
					yTopAxisAddOnPointTable.push( pass1 ); //== Returns 8,400 index records
					y1Total = y1Total + (y1_top + y1_top);
				}
			}
			
			//== ID-34 ==\\
			
			function compileY1Bottom() {
				var y1Total = 0;
				for ( var p1 = yPivotBottom; p1 != 0; p1-- ) {
					var pass1 = (pivotStartVal + ( pivotStartVal * y1Total )); 
					yBottomAxisAddOnPointTable.push( pass1 ); //== Returns 8,400 index records
					y1Total = y1Total + (y1_bottom + y1_bottom);
				}
			}
			
			//== ID-35 ==\\ { Y1-TOPLEFT TABLE }
				
			function compileYTopLeftAddOnTable() {
				
				for ( var p1 = 0; p1 < yPivotTop; p1++ ) {
					
					var xRowLeft = yTopAxisAddOnPointTable[p1]; //== this is the LEFT starting value to use for each looP					
					for ( var p2 = xPivotLeft; p2 !== 0; p2-- ) {
						
						var pass2 = ( xRowLeft + ( xRowLeft * x1_tLeft ));
						y1AddOnPointTable.push(pass2);
						xRowLeft = xRowLeft + (x1_tLeft + x1_tLeft);
					}
//					if ( p1 == 1 ) {  //=== LEAVE TO TEST VALUES OF LOOP
//					 	return;
//				  }
					
				}
			}
			
			//== ID-37 ==\\ { Y3-BOTTOM-LEFT }
				
			function compileYBottomLeftAddOnTable() {
				
				for ( var p1 = 0; p1 < yPivotBottom; p1++ ) {
					
					var xRowLeft = yBottomAxisAddOnPointTable[p1]; //== this is the LEFT starting value to use for each looP					
					for ( var p2 = xPivotLeft; p2 !== 0; p2-- ) {
						
						var pass2 = ( xRowLeft + ( xRowLeft * x2_bLeft ));
						y3AddOnPointTable.push(pass2);
						xRowLeft = xRowLeft + (x2_bLeft + x2_bLeft);
					}
//					if ( p1 == 1 ) {  //=== LEAVE TO TEST VALUES OF LOOP
//					 	return;
//				  }
					
				}
			} 
			
			//== ID-36 ==\\ { Y2-TOPRIGHT TABLE == ADDED VALUES }
				
			function compileYTopRightAddOnTable() {
				
				for ( var p1 = 0; p1 < yPivotTop; p1++ ) {
					
					var xRowRight =  yAxisY1[p1]; //== this is the RIGHT starting value to use for each loop
					
					for ( var p2 = 0; p2 < xPivotRight; p2++ ) {
						var pass3 = ( xRowRight + ( xRowRight * x1_tRight ));
						y2AddOnPointTable.push(pass3);
						xRowRight = xRowRight + ( x1_tRight + x1_tRight )
					}
//					if ( p1 == 1 ) {  //=== LEAVE TO TEST VALUES OF LOOP
//					 	return;
//				  }
				}
				
			}						
			
			//== ID-38 ==\\  { Y4-BOTTOM-RIGHT } -->> { ADDED VALUES }
				
			function compileYBottomRightAddOnTable() {
				
				for ( var p1 = 0; p1 < yPivotBottom; p1++ ) {
					
					var xRowRight =  yAxisY3[p1]; //== this is the RIGHT starting value to use for each loop
					
					for ( var p2 = 0; p2 < xPivotRight; p2++ ) {
						var pass3 = ( xRowRight + ( xRowRight * x2_bRight ));
						y4AddOnPointTable.push(pass3);
						xRowRight = xRowRight + ( x2_bRight + x2_bRight )
					}
//					if ( p1 == 1 ) {  //=== LEAVE TO TEST VALUES OF LOOP
//					 	return;
//				  }
				}
			} 	
			
			//== ID 40 ==\\
			//** { NEED Y-AXIS CONTINUATION VALUES FROM Y1 OF LAST INDEX OF X-TIME SEGMENT }
			function getYAxisY1() {
				for ( var p1 = 1; p1 < y1AddOnPointTable.length; p1++ ) {
					if (p1 % xPivotLeft === 0 ) {
						yAxisY1.push(y1AddOnPointTable[p1-1]);
					}
				}
				yAxisY1.unshift(y1AddOnPointTable[xPivotLeft-1]);
				yAxisY1.reverse();
			}
			
			//== ID 41 ==\\
			//** { NEED Y-AXIS CONTINUATION VALUES FROM Y3 OF LAST INDEX OF X-TIME SEGMENT }
			function getYAxisY3() {
				for ( var p1 = 1; p1 < y3AddOnPointTable.length; p1++ ) {
					if (p1 % xPivotLeft === 0 ) {
						yAxisY3.push(y3AddOnPointTable[p1-1]);
					}
				}
				yAxisY3.unshift(y3AddOnPointTable[xPivotLeft-1]);
//				yAxisY3.splice(0, 1);
			}
			
			compileXMeasureSegments();
			compileY1Top();
			compileY1Bottom();
			
			//***********   EXECUTION ORDER VERY IMPORTANT   *******************\\
			compileYTopLeftAddOnTable();
			compileYBottomLeftAddOnTable();
			getYAxisY1();
			getYAxisY3();
			
			//**  yAxisY1 & yAxisY3 IS USED AS Y-AXIS STARTING VALUE FOR Y2 & Y4 AXIS  **\\
			compileYTopRightAddOnTable();
			compileYBottomRightAddOnTable();
			
			//=======================================================================\\
			//=======================================================================\\
			
			//==========  CONCAT THE TABLES VALUES INTO ONE  ========================\\
			var yAddOnTables = y1AddOnPointTable.concat(y2AddOnPointTable);
			var xAddOnTables = y3AddOnPointTable.concat(y4AddOnPointTable);
			combinedXYDrcTable = yAddOnTables.concat(xAddOnTables);
			combineYTable = yTopAxisAddOnPointTable.concat(yBottomAxisAddOnPointTable);
			//=======================================================================\\
		}
		if ( lvl === 2 ) {
			var addOnObject = innerRankLevelDCRMeasurementAdjustmentTableObjectForAdvertiser.adPointAddition_Lv2;
			var y1_top = addOnObject.y_top;
			var y1_bottom = addOnObject.y_bottom;
			
			var x1_tLeft = addOnObject.x1_topLeft;
			var x1_tRight = addOnObject.x1_topRight;
			var x2_bLeft = addOnObject.x2_bottomLeft;
			var x2_bRight = addOnObject.x2_bottomRight;
			
			var yMeasureSegments = addOnObject.yMeasureSegments; //== Returns 16,800
			var xMeasureSegments = addOnObject.xMeasureSegments; //== Returns 2,400
			var yPivotTop = (1 - addOnObject.yPivotTop) * yMeasureSegments; //== Returns 8.400
			var yPivotBottom = (1 - addOnObject.yPivotBottom) * yMeasureSegments; //== Returns 8.400
			var xPivotLeft = (1 - addOnObject.xPivotLeft) * addOnObject.xMeasureSegments; //== Returns 1,200
			var xPivotRight = (1 - addOnObject.xPivotRight) * addOnObject.xMeasureSegments; //== Returns 1,200
			
			var pivotStartVal = addOnObject.pivotStartVal;
			
			//== ID-39 ==\\
			
			function compileXMeasureSegments() {
				for ( var p1 = 0; p1 < xMeasureSegments; p1++ ) {
					xMeasureSegmentsHeader.push(p1);
				}
			}
			
			//== ID-33 ==\\
			
			function compileY1Top() { 
				var y1Total = 0;
				for ( var p1 = yPivotTop; p1 != 0; p1-- ) {
					var pass1 = (pivotStartVal - ( pivotStartVal * y1Total )); 
					yTopAxisAddOnPointTable.push( pass1 ); //== Returns 8,400 index records
					y1Total = y1Total + (y1_top + y1_top);
				}
			}
			
			//== ID-34 ==\\
			
			function compileY1Bottom() {
				var y1Total = 0;
				for ( var p1 = yPivotBottom; p1 != 0; p1-- ) {
					var pass1 = (pivotStartVal + ( pivotStartVal * y1Total )); 
					yBottomAxisAddOnPointTable.push( pass1 ); //== Returns 8,400 index records
					y1Total = y1Total + (y1_bottom + y1_bottom);
				}
			}
			
			//== ID-35 ==\\ { Y1-TOPLEFT TABLE }
				
			function compileYTopLeftAddOnTable() {
				
				for ( var p1 = 0; p1 < yPivotTop; p1++ ) {
					
					var xRowLeft = yTopAxisAddOnPointTable[p1]; //== this is the LEFT starting value to use for each looP					
					for ( var p2 = xPivotLeft; p2 !== 0; p2-- ) {
						
						var pass2 = ( xRowLeft + ( xRowLeft * x1_tLeft ));
						y1AddOnPointTable.push(pass2);
						xRowLeft = xRowLeft + (x1_tLeft + x1_tLeft);
					}
//					if ( p1 == 1 ) {  //=== LEAVE TO TEST VALUES OF LOOP
//					 	return;
//				  }
					
				}
			}
			
			//== ID-37 ==\\ { Y3-BOTTOM-LEFT }
				
			function compileYBottomLeftAddOnTable() {
				
				for ( var p1 = 0; p1 < yPivotBottom; p1++ ) {
					
					var xRowLeft = yBottomAxisAddOnPointTable[p1]; //== this is the LEFT starting value to use for each looP					
					for ( var p2 = xPivotLeft; p2 !== 0; p2-- ) {
						
						var pass2 = ( xRowLeft + ( xRowLeft * x2_bLeft ));
						y3AddOnPointTable.push(pass2);
						xRowLeft = xRowLeft + (x2_bLeft + x2_bLeft);
					}
//					if ( p1 == 1 ) {  //=== LEAVE TO TEST VALUES OF LOOP
//					 	return;
//				  }
					
				}
			} 			
			
			//== ID-36 ==\\ { Y2-TOPRIGHT TABLE == ADDED VALUES }
				
			function compileYTopRightAddOnTable() {
				
				for ( var p1 = 0; p1 < yPivotTop; p1++ ) {
					
					var xRowRight =  yAxisY1[p1]; //== this is the RIGHT starting value to use for each loop
					
					for ( var p2 = 0; p2 < xPivotRight; p2++ ) {
						var pass3 = ( xRowRight + ( xRowRight * x1_tRight ));
						y2AddOnPointTable.push(pass3);
						xRowRight = xRowRight + ( x1_tRight + x1_tRight )
					}
//					if ( p1 == 1 ) {  //=== LEAVE TO TEST VALUES OF LOOP
//					 	return;
//				  }
				}
				
			}						
			
			//== ID-38 ==\\  { Y4-BOTTOM-RIGHT } -->> { ADDED VALUES }
				
			function compileYBottomRightAddOnTable() {
				
				for ( var p1 = 0; p1 < yPivotBottom; p1++ ) {
					
					var xRowRight =  yAxisY3[p1]; //== this is the RIGHT starting value to use for each loop
					
					for ( var p2 = 0; p2 < xPivotRight; p2++ ) {
						var pass3 = ( xRowRight + ( xRowRight * x2_bRight ));
						y4AddOnPointTable.push(pass3);
						xRowRight = xRowRight + ( x2_bRight + x2_bRight )
					}
//					if ( p1 == 1 ) {  //=== LEAVE TO TEST VALUES OF LOOP
//					 	return;
//				  }
				}
			} 	
			
			//== ID 40 ==\\
			//** { NEED Y-AXIS CONTINUATION VALUES FROM Y1 OF LAST INDEX OF X-TIME SEGMENT }
			function getYAxisY1() {
				for ( var p1 = 1; p1 < y1AddOnPointTable.length; p1++ ) {
					if (p1 % xPivotLeft === 0 ) {
						yAxisY1.push(y1AddOnPointTable[p1-1]);
					}
				}
				yAxisY1.unshift(y1AddOnPointTable[xPivotLeft-1]);
				yAxisY1.reverse();
			}
			
			//== ID 41 ==\\
			//** { NEED Y-AXIS CONTINUATION VALUES FROM Y3 OF LAST INDEX OF X-TIME SEGMENT }
			function getYAxisY3() {
				for ( var p1 = 1; p1 < y3AddOnPointTable.length; p1++ ) {
					if (p1 % xPivotLeft === 0 ) {
						yAxisY3.push(y3AddOnPointTable[p1-1]);
					}
				}
				yAxisY3.unshift(y3AddOnPointTable[xPivotLeft-1]);
//				yAxisY3.splice(0, 1);
			}
			
			compileY1Top();
			compileY1Bottom();

			//***********   EXECUTION ORDER VERY IMPORTANT   *******************\\
			compileYTopLeftAddOnTable();
			compileYBottomLeftAddOnTable();
			getYAxisY1();
			getYAxisY3();
			
			//**  yAxisY1 & yAxisY3 IS USED AS Y-AXIS STARTING VALUE FOR Y2 & Y4 AXIS  **\\
			compileYTopRightAddOnTable();
			compileYBottomRightAddOnTable();
			
			//=======================================================================\\
			//=======================================================================\\
			
			//==========  CONCAT THE TABLES VALUES INTO ONE  ========================\\
			combinedXYDrcTable = y1AddOnPointTable.concat(y2AddOnPointTable, y3AddOnPointTable, y4AddOnPointTable );
			combineYTable = yTopAxisAddOnPointTable.concat(yBottomAxisAddOnPointTable);
			//=======================================================================\\
		}
		
//		return [ y1AddOnPointTable, y2AddOnPointTable, y3AddOnPointTable, y4AddOnPointTable, combinedXYDrcTable, yAxisY1, yAxisY3 ]; 
		return [ combineYTable, combinedXYDrcTable, xMeasureSegmentsHeader ]; 
		
	}
	
//	var t13 = getAdPointAdditionValues(2); //=== THIS FUNCTION REQUIRES LEVEL NUMBER TO BE PASSED AS A PARAMETER
//	console.log(t13);
	
	//==========================================================================================\\
	//  ||=== SETS THE ADJUSTED DISCOUNT POINT CONVERT RATE FOR ADVERTISER ===||
	//  ||===        IS ABLE TO SET EACH STORES ADJDRC PROPERTY #          ===||
	//  ||===          { REQUIRES STORE-NUMBER AS INPUT PARAM }            ===||
  //==========================================================================================//
					//== LOAD THE CORRECT ADD-ON TABLE ( LEVEL 1, LEVEL 2, ETC. )
					//== GET THE ADD-ON Y-POINT SPECTRUM ( 0 TO 7,840 )
					//== GET THE ADD-ON X-TIME SPECTRUM ( 0 TO 3,360 )
	//== ID-48 ==\\
	//** { ENVOKES FUNCTION ID-32 | ( N ) ACCEPTS AN INTEGER TO IDENTIFY RANK LEVEL
	
	var drcTable = [];
	function loadDRCTable(n) { 
		if ( n == 1 ) {
			drcTable = getAdjDCRValues(n); 
		}
		if ( n == 2 ) {
			drcTable = getAdjDCRValues(n); 
		}
		console.log(' === DCR TABLE GENERATED === ')
		return drcTable;
	}
	
		
	//== ID-49 ==\\
	//** { (STORENUMBER) ACCEPTS INTEGER TO IDENTIFY STORE NUMBER }
	function updateAdjDCR(storeNumber) {
		
		//== ID-50 ==\\
		var storesObj = getStoresObj();
		//== ID-51 ==\\
		var setRankObj = getRankXyTableConfigSettingsForAdvertiserObject();
		//== ID-52 ==\\
		var mParamObj = getTimeMeasureRankSetObj();
		//== ID-53 ==\\
		var rankLvl = 0;
		
		//== ID-54 ==\\
		var activeAdjDRC;
		//== ID-55 ==\\
		var xyAdjDRCTable = drcTable;
		//== ID-56 ==\\
		var xTimeMSegActive = 0;
		//== ID-57 ==\\
		var index = storeNumber - 1;
		
		
		//== GET THE RANK LVL ( RANK LEVEL 1, RANK LEVEL 2 )
		//== ID-58 ==\\
		//** { CHECKS STORENUMBER; RETURNS STORE-RANK LEVEL }
		function getStoreData(storeNumber) {
			if(storeNumber === 1 ) {
				rankLvl = storesObj[0].rankLv;
				return rankLvl;
			}
			if(storeNumber === 2 ) {
				rankLvl = storesObj[1].rankLv;
				return rankLvl;
			}
			if(storeNumber === 3 ) {
				rankLvl = storesObj[2].rankLv;
				return rankLvl;
			}
			if(storeNumber === 4 ) {
				rankLvl = storesObj[3].rankLv;
				return rankLvl;
			}
			if(storeNumber === 5 ) {
				rankLvl = storesObj[4].rankLv;
				return rankLvl;
			}
			if(storeNumber === 6 ) {
				rankLvl = storesObj[5].rankLv;
				return rankLvl;
			}
			if(storeNumber === 7 ) {
				rankLvl = storesObj[6].rankLv;
				return rankLvl;
			}
			if(storeNumber === 8 ) {
				rankLvl = storesObj[7].rankLv;
				return rankLvl;
			}
			if(storeNumber === 9 ) {
				rankLvl = storesObj[8].rankLv;
				return rankLvl;
			}
			if(storeNumber === 10 ) {
				rankLvl = storesObj[9].rankLv;
				return rankLvl;
			}
			if(storeNumber === 11 ) {
				rankLvl = storesObj[10].rankLv;
				return rankLvl;
			}
			if(storeNumber === 12 ) {
				rankLvl = storesObj[11].rankLv;
				return rankLvl;
			}
		}
		
		rankLvl = getStoreData(storeNumber);
//		xyAdjDRCTable = loadDRCTable(rankLvl);
		
		
		//== ID-59 ==\\
		//** USED WITHIN FUNCTION ID-45 **\\
		//** { CALCULATES THE IDENTIFIED RANK PERIODS FULL DURATION IN MINUTES }	
		function getRankPeriodDuration(mp, rankLvl) {
			var rptDuration = (((mp[rankLvl-1].rankMTime) * 24 * 60 )); //== ( DAYS X HOURS X MINUTES ) >> TOTAL RANK TIME PERIOD IN MINUTES
			return rptDuration;
		}
		
		
		//== ID-60 ==\\
		//** { RETURNS THE CURRENT X-TIME AXIS SEGMENT }
		function getXTimeMSegment(so, sr, mp, stNum) {
			//********************  VERFIED VALUES THAT ARE CORRECT ***********************************\\
			
			var rtpStartMin = ((so[stNum-1].rankTimePeriod )/1000/60); //== THIS IS THE START TIME / DATE
			var timeNowToMin = ((new Date().getTime()/1000/60)); //== THIS IS THE CURRENT TIME / DATE
			//		endStoreRankPeriod = ((storeObject[aIndex].rankTimePeriod /1000 / 60) + ( rLevelTimeSegment * mParamObject[aIndex].rankMOccurences ));
			var rankTimeDuration = getRankPeriodDuration( mp, rankLvl ); //== GETS THE TOTAL MINUTES OF THE RANK LEVEL & PERIOD
			var numOfMinSeg = rankTimeDuration / mp[rankLvl-1].rankMOccurences; //== GETS THE TOTAL NUMBER OF THREE MINUTE SEGMENTS
			
			//** MPARAM CANNOT USE INDEX VALUES PASSED IN *** { MUST USE RANK LEVEL AS THERE'S ONLY TWO LEVELS }  ** CAUSES ITERATIONS TO ERROR ONCE INDEX IS GREATER THAN 1
			var rankEndTime = (rtpStartMin + rankTimeDuration ); //== ADDS THE RANK DURATION TO THE START TIME
			
			var rtpTimeLeft = Number((( rankEndTime - timeNowToMin ) / mp[rankLvl-1].rankMOccurences ).toFixed(4)); //== THIS THE TIME REMAINING IN THE RANK PERIOD FROM THE CURRENT TIME
			var calcCurrentTimeSegment = numOfMinSeg;
//			var curXMSegment = parseInt( rtpTimeLeft / mp[rankLvl-1].rankMOccurences); //== THIS IS THE NUMBER OF MINUTES REMAINING / MEASUREMENT TIME DURATION
			var curXMSegment = parseInt( calcCurrentTimeSegment - rtpTimeLeft ); //== THIS IS THE NUMBER OF MINUTES REMAINING / MEASUREMENT TIME DURATION
			
			console.log([ rankEndTime, rtpTimeLeft, curXMSegment ]);
			return curXMSegment;
			//********************  VERFIED VALUES THAT ARE CORRECT ***********************************\\
			
		}
		
		xTimeMSegActive = getXTimeMSegment(storesObj, setRankObj, mParamObj, storeNumber);
		
		//== ID-61 ==\\
		//** { RETURNS THE ADJUSTED BASE AD-POINT CONVERT RATE  }
		function getAdjDRC(so, storeNum, actTimePt, adjTableVals, mp) {
			
			var activeAdPoint = so[storeNum-1].totalRankPoints; //== LOADS THE STORES ACCUMULATED RANK POINTS
			var xSeg = actTimePt; //== THIS IS THE CURRENT TIME SEGMENT
			var tMinSegments = parseInt(getRankPeriodDuration(mp, rankLvl) / mp[rankLvl-1].rankMOccurences);
			var correctXSeg = tMinSegments - xSeg;
//			console.log([xSeg, tMinSegments, correctXSeg]);
			var drc = 0;
			
			//** THIS WILL TRANSVERSE THE X-TIME AXIS
			for ( var p5 = 0; p5 < adjTableVals[2].length; p5++ ) {
				if ( p5 == correctXSeg) {
					//== THIS WILL TRASVERSE Y-POINT AXIS
					for ( var p6 = 0; p6 < adjTableVals[1].length ; p6++ ) {
						if ( p6 === activeAdPoint ) {
							drc = adjTableVals[1][p6];
							return Number((drc).toFixed(8));
						}
					}
				}
			}
		}
		
		activeAdjDRC = getAdjDRC(storesObj, storeNumber, xTimeMSegActive, xyAdjDRCTable, mParamObj );
		
		
		//== ID-62 ==\\
		//** { UPDATES THE STORES PROPERTY ADJDRC VALUE }
		function changeStoreDRC(stNum) {
			for (var p1 = 0; p1 < storesObj.length ; p1++ ) {
				if ( stNum === 1 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==1");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 2 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==2");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 3 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==3");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 4 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==4");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 5 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==5");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 6 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==6");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 7 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==7");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 8 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==8");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 9 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==9");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 10 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==10");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 11 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==11");
					return storesObj[p1].adjDcr;
				}
				if ( stNum === 12 ) {
					storesObj[p1].adjDcr = activeAdjDRC;
//					console.log("run==12");
					return storesObj[p1].adjDcr;
				}
			}
		}
		
		changeStoreDRC(storeNumber);
		
		//== UPDATE BASE AD-POINT ADD-ON CONVERT RATE ( 2.5 POINTS FOR EVERY 1% );
		//== CALC THE ( NUMBER OF STORES RANK POINTS x CURRENT RANK MEASUREMENT TIME ) = INDEX NUMBER TO USE
		//== CAPTURE THE CURRENT ADD-ON VALUE USING THE CALCULATED INDEX NUMBER ON THE CORRECT Y-SEGMENT ADD-ON TABLE
		//== UPDATE STORE OBJECT BASE AD-POINT VALUE
		
//		return [ xyAddOnTable, activeMeasureTimeSegment, addOnPoints, stores.store_1.totalRankPoints, stores.store_1.baseAddOnPoints];
//		console.log( [storesObj, rankLvl, activeAdjDRC, xTimeMSegmentActive, xyAdjDRCTable ] );
		return activeAdjDRC;
		
	}
	
//	var t14 = updateStoresAddOnPoints(1);
//	console.log(t14);
	
	
	//************************   END ADJUSTED BASE DISCOUNT RATE ALGORITHIM FEATURE   *********************************************\\
	//*******************************************************************************************************************************\\
	
	
	
	//==========================================================================================\\
	//  ||=== BEGIN REWARD DISTRIBUTION GRID AND CONFIGURATION ===||
	
	//  ||== NEED THE HIGHEST VALUE TO DETERMINE AD POINT OFFER RANGE
  //==========================================================================================//
	
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	// === FOR ALL >> WILL NEED TO CREATE A SIDEBAR WITH ACTION BUTTONS TO INCREMENT FOR DEMONSTRATIVE PURPOSES
	
	// ##{  } ## NEED TO AD BUTTON FOR EACH AD OFFER = FOR THE ABILITY TO INCREMENT OR DECRENT QTY VALUES >> REDUCE TOTAL AD COUNT FROM CURRENT TOTAL
	// ##{ DONE - REFER TO FUNCTION ID-13, 14, 15 } ## NEED TO AD ACTIVITY OCCURANCE ALGORITHM/TABLE
	// ##{ REFER FUNCTION ID-17, & 18  } NEED TO RANK & TIMER ALGORITHM/TABLE??
	// NEED TO CREATE REWARD DISTRIBUTION GRIDS
	// NEED TO CREATE ENHANCEMENT FOR RANK LEVELS
	// NEED TO CREATE USER OBJECTS
	// NEED TO CREATE USER RANK TABLE
	// NEED TO CREATE USER PODS
	// NEED TO CREATE TABLE FOR USER PODS
	// NEED TO ADD CREDIT CARD FORM
	
	
	//************************************************************************************\\
	//*****************        BUTTONS TO EXECUTE FUNCTIONS          *******************\\
	//************************************************************************************\\
	
	
	//==============================================================================================\\
	//   ||==   (1). GENERATE DCR XY TABLES FOR RANK LEVEL OF INPUT    ==||
	//   ||==   (rLvl) ACCEPTS RANK LEVEL; INTEGER    ==||
	//==============================================================================================\\
	
	$('.js-generateDrcTable').on('click', function() {
		var rLvl = $(this).attr('id');
		rLvl= Number(rLvl);
		
		loadDRCTable(rLvl);
		
	});	
	
	
	//==============================================================================================\\
	//   ||==   (9). UPDATE DCR VALUES OF EACH STORE OBJECT ==||
	//   ||==   (count) ACCEPTS RANK LEVEL; INTEGER    ==||
	//==============================================================================================\\
	
	$('.js-updateDcr').on('click', function() {
		
		var st = getStoresObj();
		
		for ( var i = 1; i < st.length; i++ ) {
			updateAdjDCR(i);
		}
		console.log('=== UPDATED STORE DCR ')
	});	
	
	//==============================================================================================\\
	//   ||============ (10). UPDATE POINT VALUES OF AD OFFERS 1 - 12 ==============||
	//   ||*****             USES ADOCCURENCEFACTOR FUNCTION                   *****||
	
	//   ||***** READ THIS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    IF RANK PERIOD TIME IS EXPIRED, LOOP WILL RETURN NaN     *****||
	//==============================================================================================\\
	
	
	$('.js-drc-PointBtn1').on('click', function() {
		var n = $(this).attr('id');
		nc = Number(n);
		var t;
		
		var st = getStoresObj();
		
		for (var p1 = 1; p1 <= st.length; p1++ ) {
			// Getting point value below uses functions ID-11 & ID-10 >> Variable within gets value from function ID-10
			var j = adOccuranceFactor([p1]);
			if ( p1 == 1 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			}
			if ( p1 == 2 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			} 
			if ( p1 == 3 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			} 
			if ( p1 == 4 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			}
			if ( p1 == 5 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			} 
			if ( p1 == 6 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			}
			if ( p1 == 7 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			}
			if ( p1 == 8 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			} 
			if ( p1 == 9 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			} 
			if ( p1 == 10 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			}
			if ( p1 == 11 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			} 
			if ( p1 == 12 ) {
				t = updateAdjDCR(p1);
				$('.js-pointValue-' + p1).text((getOriginatingDiscountPercent(st[p1-1].discount, t) * j[p1-1]).toFixed(2));
			} 
		}
		
	});	
	
  //==============================================================================================\\
	//   ||== (11). COMPILE AD INFO  ==||
	//==============================================================================================\\
	
	$('.js-drc-PointBtn2').on('click', function() {
		
	});	
	
	//==============================================================================================\\
	//   ||== UPDATE POINT VALUES OF AD OFFERS 4 - 6 ==||
	//==============================================================================================\\
	
	
	$('.js-compileAdBtn').on('click', function() {
//		var num = $(this).attr('id');
		
		compileAdList(stores); //=== NEED TO GO BACK AND FIX << 
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	

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


























