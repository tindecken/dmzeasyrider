var myApp  = angular
    .module('myApp', [
    'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url: '/',
                views:{
                    'contains':{
                        templateUrl: 'posts/home/home.html'
                    },
                    'carousel': {
                        templateUrl: 'templates/carousel.html',                    }
                },
                data : { pageTitle: 'Home' }
            })
            .state('tours',{
                url: '/tours',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/tours.html'
                    }
                },
                data : { pageTitle: 'Tours' }
            })
            .state('about-us',{
                url: '/about-us',
                views:{
                    'contains':{
                        templateUrl: 'posts/about/about.html',
                    }
                },
                data : { pageTitle: 'About us' }
            })
            .state('tripadvisor-certificate',{
                url: '/tripadvisor-certificate',
                views:{
                    'contains':{
                        templateUrl: 'posts/about/tripadvisor-certificate.html',
                    }
                },
                data : { pageTitle: 'Trip Advisor Certificate' }
            })
            .state('build-your-own-tour',{
                url: '/build-your-own-tour',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/build-your-own-tour.html',
                    }
                },
                data : { pageTitle: 'Build your own tour' }
            })
            .state('photo-gallery',{
                url: '/photo-gallery',
                views:{
                    'contains':{
                        templateUrl: 'posts/gallery/photo-gallery.html',
                    }
                },
                data : { pageTitle: 'Photo Gallery' }
            })
            .state('book-tour',{
                url: '/book-tour',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/book-tour.html',
                    }
                },
                data : { pageTitle: 'Book Tour' }
            })
            .state('guest-book',{
                url: '/guest-book',
                views:{
                    'contains':{
                        templateUrl: 'posts/guest-book/guest-book.html'
                    }
                },
                data : { pageTitle: 'Guest Book' }
            })
            .state('hue-gastronomy',{
                url: '/hue-gastronomy',
                views:{
                    'contains':{
                        templateUrl: 'posts/hue-gastronomy/hue-gastronomy.html',
                    }
                },
                data : { pageTitle: 'Hue Gastronomy' }
            })
            .state('hue-dmz-quang-tri-1-day',{
                url: '/tours/hue-dmz-quang-tri-1-day',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/explore-the-dmz/hue-dmz-quang-tri-1-day.html',
                    }
                },
                data : { pageTitle: 'Hue - DMZ - Quang Tri - 1 day' }
            })
            .state('hue-dmz-phong-nha-quang-tri-2-days',{
                url: '/tours/hue-dmz-phong-nha-quang-tri-2-days',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/explore-the-dmz/hue-dmz-phong-nha-quang-tri-2-days.html',
                    }
                },
                data : { pageTitle: 'Hue - DMZ - Phong Nha - Quang Tri - 2 days' }
            })
            .state('hue-dmz-hcm-trail-hoi-an-3-days',{
                url: '/tours/hue-dmz-hcm-trail-hoi-an-3-days',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/explore-the-dmz/hue-dmz-hcm-trail-hoi-an-3-days.html',
                    }
                },
                data : { pageTitle: 'Hue - DMZ - Ho Chi Minh trail - Hoi An - 3 days' }
            })
            .state('hue-dmz-phong-nha-hoi-an-5-days',{
                url: '/tours/hue-dmz-phong-nha-hoi-an-5-days',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/explore-the-dmz/hue-dmz-phong-nha-hoi-an-5-days.html',
                    }
                },
                data : { pageTitle: 'Hue - DMZ - Phong Nha - Hoi An - 5 days' }
            })
            .state('hue-dmz-sapa-8-days',{
                url: '/tours/hue-dmz-sapa-8-days',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/explore-the-dmz/hue-dmz-sapa-8-days.html',
                    }
                },
                data : { pageTitle: 'Hue - DMZ - Sapa - 8 days' }
            })
            .state('hue-prao-hoi-an-kham-duc-kon-tum-buon-ma-thuot-lak-lake-da-lat-nha-trang-8-days',{
                url: '/tours/hue-prao-hoi-an-kham-duc-kon-tum-buon-ma-thuot-lak-lake-da-lat-nha-trang-8-days',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-to-other-places/hue-prao-hoi-an-kham-duc-kon-tum-buon-ma-thuot-lak-lake-da-lat-nha-trang-8-days.html',
                    }
                },
                data : { pageTitle: 'Hue - Prao - Hoi An - Kham Duc - Kon Tum - Buon Ma Thuot - Lak Lake - Da Lat - Nha Trang - 8 days' }
            })
            .state('hue-prao-hoi-an-kham-duc-kon-tum-buon-ma-thuoc-lak-lake-da-lat-mui-ne-or-ho-chi-minh-city-8-days',{
                url: '/tours/hue-prao-hoi-an-kham-duc-kon-tum-buon-ma-thuoc-lak-lake-da-lat-mui-ne-or-ho-chi-minh-city-8-days',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-to-other-places/hue-prao-hoi-an-kham-duc-kon-tum-buon-ma-thuoc-lak-lake-da-lat-mui-ne-or-ho-chi-minh-city-8-days.html',
                    }
                },
                data : { pageTitle: 'Hue - Prao - Hoi An - Kham Duc - Kon Tum - Buon Ma Thuot - Lak Lake - Da Lat - Mui Ne or Ho Chi Minh city - 8 days' }
            })
            .state('hue-city-tours-1-day',{
                url: '/tours/hue-city-tours-1-day',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-city/hue-city-tours-1-day.html',
                    }
                },
                data : { pageTitle: 'Hue city tour - 1 day' }
            })
            .state('hue-city-and-thuan-an-beach-1-day',{
                url: '/tours/hue-city-and-thuan-an-beach-1-day',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-city/hue-city-and-thuan-an-beach-1-day.html',
                    }
                },
                data : { pageTitle: 'Hue city an Thuan An beach - 1 day' }
            })
            .state('hue-to-hoi-an-or-hoi-an-to-hue-1-day',{
                url: '/tours/hue-to-hoi-an-or-hoi-an-to-hue-1-day',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-hoi-an/hue-to-hoi-an-or-hoi-an-to-hue-1-day.html',
                    }
                },
                data : { pageTitle: 'Hue to Hoi An or Hoi An to Hue - 1 day' }
            })
            .state('hue-ho-chi-minh-trail-hoi-an-2-days',{
                url: '/tours/hue-hoi-an/hue-ho-chi-minh-trail-hoi-an-2-days',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-hoi-an/hue-ho-chi-minh-trail-hoi-an-2-days.html',
                    }
                },
                data : { pageTitle: 'Hue - Ho Chi Minh trail - Hoi An - 2 days' }
            })
            .state('hue-prao-kon-tum-quang-ngai-hoi-an-5-days',{
                url: '/tours/hue-hoi-an/hue-prao-kon-tum-quang-ngai-hoi-an-5-days',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-hoi-an/hue-prao-kon-tum-quang-ngai-hoi-an-5-days.html',
                    }
                },
                data : { pageTitle: 'Hue - Prao - Kon Tum - Quang Ngai - Hoi An - 5 days' }
            })
            .state('hue-city-tours',{
                url: '/hue-city-tours',
                views:{
                  'contains':{
                    templateUrl: 'posts/tours/hue-city/hue-city.html',  
                  }
                },
                data : { pageTitle: 'Hue City Tours' }
            })
            .state('explore-the-dmz',{
                url: '/explore-the-dmz',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/explore-the-dmz/explore-the-dmz.html',
                    }
                },
                data : { pageTitle: 'Explore the DMZ Tours' }
            })
            .state('hue-hoi-an',{
                url: '/hue-hoi-an',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-hoi-an/hue-hoi-an.html',
                    }
                },
                data : { pageTitle: 'Hue - Hoi An Tours' }
            })
            .state('hue-to-other-places',{
                url: '/hue-to-other-places',
                views:{
                    'contains':{
                        templateUrl: 'posts/tours/hue-to-other-places/hue-to-other-places.html',
                    }
                },
                data : { pageTitle: 'Hue to other places tours' }
            });
    }])  
    .run([ '$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);
    