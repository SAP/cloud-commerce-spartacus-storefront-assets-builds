export var translationChunksConfig = {
    common: [
        'common',
        'spinner',
        'searchBox',
        'navigation',
        'sorting',
        'httpHandlers',
        'pageMetaResolver',
        'miniCart',
        'miniLogin',
    ],
    cart: ['cartDetails', 'cartItems', 'orderCost', 'voucher', 'wishList'],
    address: ['addressForm', 'addressBook', 'addressCard'],
    payment: ['paymentForm', 'paymentMethods', 'paymentCard'],
    myAccount: [
        'orderDetails',
        'orderHistory',
        'closeAccount',
        'updateEmailForm',
        'updatePasswordForm',
        'updateProfileForm',
        'consentManagementForm',
    ],
    storeFinder: ['storeFinder'],
    pwa: ['pwa'],
    checkout: [
        'checkout',
        'checkoutAddress',
        'checkoutOrderConfirmation',
        'checkoutReview',
        'checkoutShipping',
        'checkoutProgress',
    ],
    product: [
        'productDetails',
        'productList',
        'productFacetNavigation',
        'productSummary',
        'productReview',
        'addToCart',
        'addToWishList',
        'CMSTabParagraphContainer',
    ],
    user: [
        'anonymousConsents',
        'forgottenPassword',
        'loginForm',
        'register',
        'checkoutLogin',
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmtzLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvYXNzZXRzLyIsInNvdXJjZXMiOlsidHJhbnNsYXRpb25zL3RyYW5zbGF0aW9uLWNodW5rcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQTRCO0lBQzlELE1BQU0sRUFBRTtRQUNOLFFBQVE7UUFDUixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixTQUFTO1FBQ1QsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVztLQUNaO0lBQ0QsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUN0RSxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztJQUN0RCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO0lBQ3pELFNBQVMsRUFBRTtRQUNULGNBQWM7UUFDZCxjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtLQUN4QjtJQUNELFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM1QixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDWixRQUFRLEVBQUU7UUFDUixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtLQUNuQjtJQUNELE9BQU8sRUFBRTtRQUNQLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsV0FBVztRQUNYLGVBQWU7UUFDZiwwQkFBMEI7S0FDM0I7SUFDRCxJQUFJLEVBQUU7UUFDSixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxVQUFVO1FBQ1YsZUFBZTtLQUNoQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVHJhbnNsYXRpb25DaHVua3NDb25maWcge1xuICBbY2h1bms6IHN0cmluZ106IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRpb25DaHVua3NDb25maWc6IFRyYW5zbGF0aW9uQ2h1bmtzQ29uZmlnID0ge1xuICBjb21tb246IFtcbiAgICAnY29tbW9uJyxcbiAgICAnc3Bpbm5lcicsXG4gICAgJ3NlYXJjaEJveCcsXG4gICAgJ25hdmlnYXRpb24nLFxuICAgICdzb3J0aW5nJyxcbiAgICAnaHR0cEhhbmRsZXJzJyxcbiAgICAncGFnZU1ldGFSZXNvbHZlcicsXG4gICAgJ21pbmlDYXJ0JyxcbiAgICAnbWluaUxvZ2luJyxcbiAgXSxcbiAgY2FydDogWydjYXJ0RGV0YWlscycsICdjYXJ0SXRlbXMnLCAnb3JkZXJDb3N0JywgJ3ZvdWNoZXInLCAnd2lzaExpc3QnXSxcbiAgYWRkcmVzczogWydhZGRyZXNzRm9ybScsICdhZGRyZXNzQm9vaycsICdhZGRyZXNzQ2FyZCddLFxuICBwYXltZW50OiBbJ3BheW1lbnRGb3JtJywgJ3BheW1lbnRNZXRob2RzJywgJ3BheW1lbnRDYXJkJ10sXG4gIG15QWNjb3VudDogW1xuICAgICdvcmRlckRldGFpbHMnLFxuICAgICdvcmRlckhpc3RvcnknLFxuICAgICdjbG9zZUFjY291bnQnLFxuICAgICd1cGRhdGVFbWFpbEZvcm0nLFxuICAgICd1cGRhdGVQYXNzd29yZEZvcm0nLFxuICAgICd1cGRhdGVQcm9maWxlRm9ybScsXG4gICAgJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybScsXG4gIF0sXG4gIHN0b3JlRmluZGVyOiBbJ3N0b3JlRmluZGVyJ10sXG4gIHB3YTogWydwd2EnXSxcbiAgY2hlY2tvdXQ6IFtcbiAgICAnY2hlY2tvdXQnLFxuICAgICdjaGVja291dEFkZHJlc3MnLFxuICAgICdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uJyxcbiAgICAnY2hlY2tvdXRSZXZpZXcnLFxuICAgICdjaGVja291dFNoaXBwaW5nJyxcbiAgICAnY2hlY2tvdXRQcm9ncmVzcycsXG4gIF0sXG4gIHByb2R1Y3Q6IFtcbiAgICAncHJvZHVjdERldGFpbHMnLFxuICAgICdwcm9kdWN0TGlzdCcsXG4gICAgJ3Byb2R1Y3RGYWNldE5hdmlnYXRpb24nLFxuICAgICdwcm9kdWN0U3VtbWFyeScsXG4gICAgJ3Byb2R1Y3RSZXZpZXcnLFxuICAgICdhZGRUb0NhcnQnLFxuICAgICdhZGRUb1dpc2hMaXN0JyxcbiAgICAnQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyJyxcbiAgXSxcbiAgdXNlcjogW1xuICAgICdhbm9ueW1vdXNDb25zZW50cycsXG4gICAgJ2ZvcmdvdHRlblBhc3N3b3JkJyxcbiAgICAnbG9naW5Gb3JtJyxcbiAgICAncmVnaXN0ZXInLFxuICAgICdjaGVja291dExvZ2luJyxcbiAgXSxcbn07XG4iXX0=