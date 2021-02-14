let productCategoryToFacebookCategory = {
	67: "189", /* Silver Cross */

	/* Dameavd */
	43: 466, /* Dameavd */
	77: 430, /* Bluser / Topper */
	46: 441, /* Bukser / Shorts */
	81: 328,/* Smykker */
	88: 407, /* Kosmetikk */
	44: 443, /* Kjoler */
	49: 454, /* Jakker */
	82: 383, /* Hårpynt */
	51: 383, /* Accessoarer */
	47: 442, /* Skjørt */
	57: 442, /* Strutteskjørt */
	86: 150, /* Lommebøker */
	45: 438, /* Cardigan / Bolero */
	83: 434, /* Strømper */
	87: 157, /* Vesker */
	37: 415, /* Damesko */

	/* Herreavd */
	54: 471, /* Skjorter */
	93: 463, /* Bukser */
	92: 291, /* Hårprodukter */
	55: 459, /* T-skjorter */
	89: 386, /* Hatter & luer */
	119: 150, /* Lommebøker */
	69: 466, /* Gensere */
	90: 385, /* Belter */
	70: 391, /* Accessoarer */
	68: 470, /* Jakke */
	94: 387, /* Bukseseler */
	38: 422, /* Herresko */

	/* Ting & Tang */
	102: 43, /* Biler */
	120: 375, /* Hoptimist */
	117: 356, /* Lamper */
	115: 375, /* Mexico-matter */
	103: 407, /* Sypåmerker */
	118: 375, /* Disneyfigurer */
	100: 375, /* Hula & Tiki */
	113: 529, /* Lommespeil */
	110: 146, /* Musikk & film */
	107: 376, /* Alt det andre */
	114: 375, /* Flamingo */
	98: 373, /* Veggklokker */
	101: 375, /* Magneter */
	116: 375, /* Nikkehunder */
	106: 364, /* Flaskeåpner */
	99: 362, /* Krus */
	97: 355, /* Metallbokser */
	108: 407 /* Paraplyer */
};

let productCategoryToCategoryText = {
	67: "Silver Cross",

	/* Dameavd */
	43: "Dameavdelingen",
	77: "Bluser / Topper",
	46: "Bukser / Shorts",
	81: "Smykker",
	88: "Kosmetikk",
	44: "Kjoler",
	49: "Jakker",
	82: "Hårpynt",
	51: "Accessoarer",
	47: "Skjørt",
	57: "Strutteskjørt",
	86: "Lommebøker",
	45: "Cardigan / Bolero",
	83: "Strømper",
	87: "Vesker",
	37: "Damesko",

	/* Herreavd */
	54: "Skjorter",
	93: "Bukser",
	92: "Hårprodukter",
	55: "T-skjorter",
	89: "Hatter & luer",
	119: "Lommebøker",
	69: "Gensere",
	90: "Belter",
	70: "Accessoarer",
	68: "Jakke",
	94: "Bukseseler",
	38: "Herresko",

	/* Ting & Tang */
	102: "Biler",
	120: "Hoptimist",
	117: "Lamper",
	115: "Mexico-matter",
	103: "Sypåmerker",
	118: "Disneyfigurer",
	100: "Hula & Tiki",
	113: "Lommespeil",
	110: "Musikk & film",
	107: "Alt det andre",
	114: "Flamingo",
	98: "Veggklokker",
	101: "Magneter",
	116: "Nikkehunder",
	106: "Flaskeåpner",
	99: "Krus",
	97: "Metallbokser",
	108: "Paraplyer"
};

let productCategoryToGoogleCategory = {
	67: 189, /* Silver Cross */

	/* Dameavd */
	43: 1604, /* Dameavd top level */
	77: 212, /* Bluser / Topper */
	46: 204, /* Bukser / Shorts */
	81: 188,/* Smykker */
	88: 473, /* Kosmetikk */
	44: 2271, /* Kjoler */
	49: 5598, /* Jakker */
	82: 502988, /* Hårpynt */
	51: 167, /* Accessoarer */
	47: 1581, /* Skjørt */
	57: 1581, /* Strutteskjørt */
	86: 6551, /* Lommebøker */
	45: 212, /* Cardigan / Bolero */
	83: 213, /* Strømper */
	87: 3032, /* Vesker */
	37: 187, /* Damesko */

	/* Herreavd */
	41: 1604, /* Herreavd top level */
	54: 212, /* Skjorter */
	93: 204, /* Bukser */
	92: 486, /* Hårprodukter */
	55: 212, /* T-skjorter */
	89: 173, /* Hatter & luer */
	119: 6551, /* Lommebøker */
	69: 212, /* Gensere */
	90: 169, /* Belter */
	70: 167, /* Accessoarer */
	68: 5598, /* Jakke */
	94: 179, /* Bukseseler */
	38: 187, /* Herresko */

	/* Ting & Tang */
	102: 3551, /* Biler */
	120: 696, /* Hoptimist */
	117: 4636, /* Lamper */
	115: 1985, /* Mexico-matter */
	103: 6955, /* Sypåmerker */
	118: 216, /* Disneyfigurer */
	100: 216, /* Hula & Tiki */
	113: 476, /* Lommespeil */
	110: 783, /* Musikk & film */
	107: 536, /* Alt det andre */
	114: 696, /* Flamingo */
	98: 3840, /* Veggklokker */
	101: 5876, /* Magneter */
	116: 7114, /* Nikkehunder */
	106: 3427, /* Flaskeåpner */
	99: 2169, /* Krus */
	97: 5631, /* Metallbokser */
	108: 719 /* Paraplyer */
};

/* Microsoft Clarify */
/*(function(c,l,a,r,i,t,y){
	c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
	t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
	y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "40sq3ih2v2");*/


/* Facebook Pixel Code */
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
									n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');

fbq( 'init', '593141774766659' );
fbq( 'track', 'PageView' );

if ( currentPage === 'category.php' )
{
	fbq( 'track', 'ViewContent' );
}

/* Facebook pixel events */
$( '#add2cart button[type="submit"]' ).on( 'click', function()
{
	fbq('track', 'AddToCart');
});

$( '#cartDrawer a.btn-default-1.righty' ).on( 'click', function()
{
	fbq('track', 'InitiateCheckout');
});

$( document ).ready( function()
{
	/* Remove "Kiosk" from the navigation */
	$( 'a[href*="categories/kiosk"]' ).parent().hide();

	let jsonLdObjects = [];

	if ( $( '.breadcrumb' ).length )
	{
		let breadcrumb = [];
		let i = 1;
		$( '.breadcrumb a' ).each( function()
		{
			let name = $( this ).text();
			name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
			let breadcrumbItem = {
				"@type": "ListItem",
				"position": i++,
				"name": name
			};

			if ( $( this ).attr( 'href' ) !== window.location.href )
			{
				breadcrumbItem.item = $( this ).attr( 'href' );
			}

			breadcrumb.push( breadcrumbItem );
		});

		let breadcrumbJsonLdObject = {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": breadcrumb
		};

		jsonLdObjects.push( breadcrumbJsonLdObject );
	}

	/* Product JSON-LD */
	if ( currentPage === 'product.php' && typeof product == 'object' )
	{
		let availability = product.quantity > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";

		let images = [];

		if ( $( '.slide.gallery_image a[data-zoom-image]' ).length )
		{
			$( '.slide.gallery_image a' ).each( function()
			{
				images.push( $( this ).attr( 'data-zoom-image' ) );
			});
		}
		else
		{
			images.push( $( 'meta[property="og:image"]' ).eq(0).attr( 'content' ) );
		}

		let title 	= $( 'meta[property="og:title"]' ).eq(0).attr( 'content' );
		title 		= title.replace( 'Halden', 'Sarpsborg' );

		let description = $( 'meta[name="description"]' ).eq(0).attr( 'content' );
		description 	= typeof description !== 'undefined' ? description : 'F\u00f8nix er en retro/livsstilsbutikk som f\u00f8rer kl\u00e6r, sko, vesker og tilbeh\u00f8r til Rockabilly, R\u00e6gg\u00e6re, 50-tallsmilj\u00f8er. Vi har avdelinger til b\u00e5de kvinner, menn og barn.';
		description 	= description.replace( 'Halden', 'Sarpsborg' );

		let productJsonLdObject = {
			"@context": "https://schema.org/",
			"@type": "Product",
			"name": title,
			"image": images,
			"description": description.trim(),
			"brand": {
				"@type": "Brand",
				"name": $( 'span[itemprop="brand"] a' ).text().length ? $( 'span[itemprop="brand"] a' ).text() : "Ikke tilgjengelig"
			},
			"sku": $( '#add2cart input[name="products_id"]' ).attr( 'value' ),
			"offers": {
				"@type": "Offer",
				"url": window.location.href,
				"priceCurrency": "NOK",
				"price": product.price.replace( '.-', '' ),
				"priceSpecification": {
					"price": product.price.replace( '.-', '' ),
					"priceCurrency": "NOK",
					"valueAddedTaxIncluded": "true"
				},
				"availability": availability,
				"itemCondition": "https://schema.org/NewCondition",
				"seller": {
					"@type":"Organization",
					"name":"Nostalgia Fønix AS",
					"url":"https://www.nostalgia.no"
				}
			},
			"shippingDetails": {
				"@type": "OfferShippingDetails",
				"shippingRate": {
					"@type": "MonetaryAmount",
					"value": "130",
					"currency": "NOK"
				},
				"shippingDestination": [{
					"@type": "DefinedRegion",
					"addressCountry": "NO"
				}],
				"deliveryTime": {
					"@type": "ShippingDeliveryTime",
					"businessDays": {
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": [
							"https://schema.org/Monday",
							"https://schema.org/Tuesday",
							"https://schema.org/Wednesday",
							"https://schema.org/Thursday",
							"https://schema.org/Friday"
						]
					},
					"cutoffTime": "15:00:00+01:00",
					"handlingTime": {
						"@type": "QuantitativeValue",
						"minValue": 0,
						"maxValue": 2,
						"unitCode": "d"
					},
					"transitTime": {
						"@type": "QuantitativeValue",
						"minValue": 1,
						"maxValue": 5,
						"unitCode": "d"
					}
				}
			}
		};

		/* Work out the Google product category */
		let categoryText = null;
		for ( const cat in product.categories )
		{
			let category = parseInt( product.categories[ cat ] );
			if ( category == 41 )
			{
				productJsonLdObject.audience = {
					"@type": "PeopleAudience",
					"suggestedGender": "male"
				};
			}
			else if ( category == 43 )
			{
				productJsonLdObject.audience = {
					"@type": "PeopleAudience",
					"suggestedGender": "female"
				};
			}

			if ( productCategoryToGoogleCategory[ category ] !== undefined )
			{
				productJsonLdObject.category 				= productCategoryToGoogleCategory[ category ];
				productJsonLdObject.google_product_category = productCategoryToGoogleCategory[ category ];
			}

			/* Used in the FB Pixel event */
			if ( productCategoryToCategoryText[ category ] !== undefined )
			{
				categoryText = productCategoryToCategoryText[ category ];
			}
		}

		if ( productJsonLdObject.google_product_category !== undefined )
		{
			$( 'head' ).append( '<meta property="product:category" content="' + productJsonLdObject.google_product_category + '" />' );
		}

		/* On sale? */
		let validUntil = null;
		if ( $( '.special-ending-in' ).length )
		{
			let dateParts = $( '.special-ending-in' ).text().match( /\d{2}([\/.-])\d{2}\1\d{4}/g )[ 0 ].split( '.' );
			let dateObj = new Date( dateParts[ 2 ] + "-" + dateParts[ 1 ] + "-" + dateParts[ 0 ] + "T00:00:00+01:00" );
			validUntil = dateObj.toJSON();
		}

		if ( ! $( '.special-ending-in' ).length || validUntil === null )
		{
			let dateObj = new Date();
			dateObj.setFullYear( dateObj.getFullYear() + 1 );
			validUntil = dateObj.toJSON();
		}

		productJsonLdObject.offers.priceValidUntil = validUntil;

		jsonLdObjects.push( productJsonLdObject );


		fbq( 'track', 'ViewContent', {
			content_ids: $( '#add2cart input[name="products_id"]' ).attr( 'value' ),
			content_category: categoryText,
			content_name: title,
			content_type: "product",
			currency: 'NOK',
			value: product.price.replace( '.-', '' )
		});
	}

	/* Organization schema. Only shown on the homepage */
	if ( currentPage === 'index.php' )
	{
		let organizationJsonLdObject = {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Store",
					"@id": "https://www.nostalgia.no/#store",
					"name": "Nostalgia F\u00f8nix AS",
					"url": "https://www.nostalgia.no/",
					"telephone": "+4791717664",
					"priceRange": "$$",
					"hasMap": "https://goo.gl/maps/N2bGcVpYP7RHVD349",
					"sameAs": [
						"https://www.facebook.com/nostalgia.fonix",
						"https://www.instagram.com/fonix_nostalgia.no/"
					],
					"logo": {
						"@type": "ImageObject",
						"@id": "https://www.nostalgia.no/#logo",
						"inLanguage": "nb-NO",
						"url": "https://www.nostalgia.no/users/nostalgia_mystore_no/logo/Header09.20.183.png",
						"width": 357,
						"height": 147,
						"caption": "Nostalgia F\u00f8nix AS"
					},
					"image": {
						"@id": "https://www.nostalgia.no/#logo"
					},
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "Hafslunds gate 30",
						"addressLocality": "Borgenhaugen",
						"postalCode": "1738",
						"addressCountry": "NO"
					},
					"geo": {
						"@type": "GeoCoordinates",
						"latitude": 59.2718941,
						"longitude": 11.1494756
					},
					"openingHoursSpecification": [
						{
							"@type": "OpeningHoursSpecification",
							"dayOfWeek": [
								"Monday",
								"Tuesday",
								"Wednesday",
								"Thursday",
								"Friday"
							],
							"opens": "12:00",
							"closes": "18:00"
						},
						{
							"@type": "OpeningHoursSpecification",
							"dayOfWeek": "Saturday",
							"opens": "11:00",
							"closes": "16:00"
						}
					]
				},
				{
					"@type": "WebSite",
					"@id": "https://www.nostalgia.no/#website",
					"name": "Nostalgia F\u00f8nix AS",
					"url": "https://www.nostalgia.no/",
					"potentialAction": {
						"@type": "SearchAction",
						"target": "https://www.nostalgia.no/search_result?keywords={search_term_string}",
						"query-input": "required name=search_term_string"
					},
					"inLanguage": "nb-NO"
				},
				{
					"@type": "WebPage",
					"@id": "https://vestlandvarme.no/#webpage",
					"name": "Nostalgia F\u00f8nix AS",
					"url": "https://www.nostalgia.no/",
					"isPartOf": {
						"@id": "https://www.nostalgia.no/#website"
					},
					"about": {
						"@id": "https://www.nostalgia.no/#store"
					},
					"description": "F\u00f8nix er en retro/livsstilsbutikk som f\u00f8rer kl\u00e6r, sko, vesker og tilbeh\u00f8r til Rockabilly, R\u00e6gg\u00e6re, 50-tallsmilj\u00f8er. Vi har avdelinger til b\u00e5de kvinner, menn og barn.",
					"inLanguage": "nb-NO",
					"potentialAction": [
						{
							"@type": "ReadAction",
							"target": [
								"https://www.nostalgia.no/"
							]
						}
					]
				}
			]
		};

		jsonLdObjects.push( organizationJsonLdObject );
	}

	if ( jsonLdObjects.length )
	{
		$.each( jsonLdObjects, function( i, value )
		{
			let el = document.createElement( 'script' );
			el.type = 'application/ld+json';
			el.text = JSON.stringify( value );
			document.querySelector( 'body' ).appendChild( el );
		});
	}

	let t;
	if ( false )
	{
		$( '#keywords' ).keyup( function ()
		{
			clearTimeout( t );
			if ( $( this ).val().length > 2 )
			{
				t = window.setTimeout( "build_search_results()", 400 );
			}
			else
			{
				$( '#search-down-wrapper' ).hide();
				$( '#search-down-wrapper' ).removeClass( 'showing' );
			}
		} );
	}
});

$( document ).mouseup( function( e )
{
	let container = $( '.search-main' );

	if ( ! container.is( e.target ) && container.has( e.target ).length === 0 )
	{
		$( '#search-down-wrapper' ).hide();
	}
});

function build_search_results()
{
	$.getJSON( '/search_suggest_json?queryString=' + $( '#keywords' ).val(), function ( data )
	{
		if ( data != '' && data != null )
		{
			$( '#search-down-wrapper' ).html( '' );
			let items = [];
			let iterator = 0;
			let total_iterator = 0;

			items.push( '<div class="tail"></div><div class="clearfix"></div><div class="scontent">' );
			items.push( '<div class="left_part">' );
			items.push( '<ul><h3>Søkeforslag</h3>' );
			$.each( data, function ( key, category )
			{

				$.each( category.result_entries, function ( result_key, product )
				{
					items.push( '<li><a href="' + product.products_url + '">' + product.products_name + '</a></li>' );
				} );
			} );
			items.push( '</ul>' );
			items.push( '</div>' );
			items.push( '<div class="right_part">' );
			items.push( '<ul class="search_result"><h3>Kanskje ser du etter disse?</h3>' );

			$.each( data, function ( key, category )
			{
				// items.push('<h3>' + category.categories_name + '</h3><ul class="list-content">');
				iterator = 0;
				$.each( category.result_entries, function ( result_key, product )
				{
					if ( total_iterator < 4 )
					{
						if ( iterator == 0 )
						{
							$( '#search-down-wrapper' ).addClass( 'showing' );
						}

						if ( product.specials_price != '' )
						{
							display_price = '<s>' + product.products_price + '</s> ' + product.specials_price;
						}
						else
						{
							display_price = product.products_price;
						}

						items.push( '<li><img src="product_thumb.php?img=' + product.products_image + '&w=45&h=45" class="fleft" alt=""><div class="fleft"><a href="' + product.products_url + '">' + product.products_name.substring( 0, 20 ) + '...</a><span class="manufacturers_name">' + product.manufacturers_name + '</span><span class="display_price">' + display_price + '</span></div>' );
						items.push( '</li>' );
					}
					total_iterator++;
					iterator++;
				} );
			} );

			items.push( '</ul>' );
			items.push( '</div>' )
			items.push( '</div><div class="searchtotal"><a href="/search_result?keywords=' + $( '#keywords' ).val() + '">' + total_iterator + '  produkter matcher søket</a></div>' );

			data = items.join( '' );

			$( '#search-down-wrapper' ).html( data );
			$( '#search-down-wrapper' ).show();
		}
		else
		{
			$( '#search-down-wrapper' ).hide();
			$( '#search-down-wrapper' ).removeClass( 'showing' );
		}
	});
}
