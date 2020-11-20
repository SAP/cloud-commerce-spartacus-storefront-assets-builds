export const common = {
    common: {
        cancel: 'Cancel',
        delete: 'Delete',
        remove: 'Remove',
        edit: 'Edit',
        back: 'Back',
        submit: 'Submit',
        continue: 'Continue',
        save: 'Save',
        done: 'Done',
        home: 'Home',
        noData: 'No data.',
        confirm: 'Confirm',
    },
    pageMetaResolver: {
        category: {
            title: '{{count}} result for {{query}}',
            title_plural: '{{count}} results for {{query}}',
        },
        checkout: {
            title: 'Checkout {{count}} item',
            title_plural: 'Checkout {{count}} items',
        },
        search: {
            title: '{{count}} result for "{{query}}"',
            title_plural: '{{count}} results for "{{query}}"',
            findProductTitle: '{{count}} result for coupon "{{coupon}}"',
            findProductTitle_plural: '{{count}} results for coupon "{{coupon}}"',
        },
        product: {
            description: '{{description}}',
            heading: '{{heading}}',
            title: '{{title}}',
        },
    },
    spinner: {
        loading: 'Loading...',
    },
    navigation: {
        shopAll: 'Shop all {{ navNode}} >',
    },
    searchBox: {
        placeholder: 'Search here...',
        help: {
            insufficientChars: 'Please type more characters',
            noMatch: 'We could not find any results',
            exactMatch: '{{ term }}',
            empty: 'Ask us anything',
        },
    },
    sorting: {
        date: 'Date',
        orderNumber: 'Order Number',
        rma: 'Return Number',
        replenishmentNumber: 'Replenishment Number',
        nextOrderDate: 'Next Order Date',
    },
    httpHandlers: {
        badGateway: 'A server error occurred. Please try again later.',
        badRequestPleaseLoginAgain: '{{ errorMessage }}. Please login again.',
        badRequestOldPasswordIncorrect: 'Old password incorrect.',
        conflict: 'Already exists',
        forbidden: 'You are not authorized to perform this action. Please contact your administrator if you think this is a mistake.',
        gatewayTimeout: 'The server did not respond, please try again later.',
        internalServerError: 'An Internal Server Error occurred. Please try again later.',
        sessionExpired: 'Your session has expired. Please login again.',
        unknownError: 'An unknown error occurred',
        unauthorized: {
            common: 'An unknown authorization error occured',
            invalid_client: 'Bad client credentials',
        },
        validationErrors: {
            missing: {
                card_cardType: 'The selected credit card is not supported. Please select another.',
                card_accountNumber: 'The credit card number entered is not valid.',
                card_cvNumber: 'The security code entered is not valid.',
                card_expirationMonth: 'The credit card expiration date entered is not valid.',
                card_expirationYear: 'The credit card expiration date entered is not valid.',
                billTo_firstName: 'The first name entered is not valid.',
                billTo_lastName: 'The last name entered is not valid.',
                billTo_street1: 'The address entered is not valid.',
                billTo_street2: 'The address entered is not valid.',
                billTo_city: 'The city entered is not valid for this credit card.',
                billTo_state: 'The state/province entered is not valid for this credit card.',
                billTo_country: 'The country entered is not valid for this credit card.',
                billTo_postalCode: 'The zip/postal code is not valid for this credit card.',
                country: {
                    isocode: 'Missing country',
                },
            },
            invalid: {
                card_expirationMonth: 'The credit card expiration date entered is not valid.',
                firstName: 'First Name entered is not valid.',
                lastName: 'Last Name entered is not valid.',
                password: 'Password entered is not valid.',
                uid: 'UID is not valid.',
            },
        },
        cartNotFound: 'Cart not found.',
        invalidCodeProvided: 'Invalid code provided.',
    },
    miniCart: {
        item: '{{count}} item currently in your cart',
        item_plural: '{{count}} items currently in your cart',
        total: '{{total}}',
        count: '{{count}}',
    },
    miniLogin: {
        userGreeting: 'Hi, {{name}}',
        signInRegister: 'Sign In / Register',
    },
    skipLink: {
        skipTo: 'Skip to',
        labels: {
            header: 'Header',
            main: 'Main Content',
            footer: 'Footer',
            productFacets: 'Product Facets',
            productList: 'Product List',
        },
    },
    formErrors: {
        globalMessage: 'The form you are trying to submit contains errors.',
        required: 'This field is required',
        cxInvalidEmail: 'This is not a valid email format',
        cxInvalidPassword: 'This is not a valid password format',
        cxPasswordsMustMatch: 'Password fields must match',
        cxEmailsMustMatch: 'Email fields must match',
        cxStarRatingEmpty: 'Rating field is required',
        cxNoSelectedItemToCancel: 'Select at least one item',
        cxDateMin: 'Date cannot be before {{min}}',
        cxDateMax: 'Date cannot be after {{max}}',
        cxNegativeAmount: 'Amount must be equal or greater than zero',
        cxContainsSpecialCharacters: 'Field cannot contain special characters',
    },
    errorHandlers: {
        scriptFailedToLoad: 'Failed to load the script.',
        refreshThePage: 'Please refresh the page.',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXNzZXRzL3NyYy90cmFuc2xhdGlvbnMvZW4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLFVBQVU7UUFDbEIsT0FBTyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsZ0NBQWdDO1lBQ3ZDLFlBQVksRUFBRSxpQ0FBaUM7U0FDaEQ7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFlBQVksRUFBRSwwQkFBMEI7U0FDekM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLFlBQVksRUFBRSxtQ0FBbUM7WUFDakQsZ0JBQWdCLEVBQUUsMENBQTBDO1lBQzVELHVCQUF1QixFQUFFLDJDQUEyQztTQUNyRTtRQUNELE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFLFdBQVc7U0FDbkI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxZQUFZO0tBQ3RCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLHlCQUF5QjtLQUNuQztJQUNELFNBQVMsRUFBRTtR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QUEyQixFQUFFLHlDQUF5QztLQUN2RTtJQUNELGFBQWEsRUFBRTtRQUNiLGtCQUFrQixFQUFFLDRCQUE0QjtRQUNoRCxjQUFjLEVBQUUsMEJBQTBCO0tBQzNDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21tb24gPSB7XG4gIGNvbW1vbjoge1xuICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICByZW1vdmU6ICdSZW1vdmUnLFxuICAgIGVkaXQ6ICdFZGl0JyxcbiAgICBiYWNrOiAnQmFjaycsXG4gICAgc3VibWl0OiAnU3VibWl0JyxcbiAgICBjb250aW51ZTogJ0NvbnRpbnVlJyxcbiAgICBzYXZlOiAnU2F2ZScsXG4gICAgZG9uZTogJ0RvbmUnLFxuICAgIGhvbWU6ICdIb21lJyxcbiAgICBub0RhdGE6ICdObyBkYXRhLicsXG4gICAgY29uZmlybTogJ0NvbmZpcm0nLFxuICB9LFxuICBwYWdlTWV0YVJlc29sdmVyOiB7XG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHRpdGxlOiAne3tjb3VudH19IHJlc3VsdCBmb3Ige3txdWVyeX19JyxcbiAgICAgIHRpdGxlX3BsdXJhbDogJ3t7Y291bnR9fSByZXN1bHRzIGZvciB7e3F1ZXJ5fX0nLFxuICAgIH0sXG4gICAgY2hlY2tvdXQ6IHtcbiAgICAgIHRpdGxlOiAnQ2hlY2tvdXQge3tjb3VudH19IGl0ZW0nLFxuICAgICAgdGl0bGVfcGx1cmFsOiAnQ2hlY2tvdXQge3tjb3VudH19IGl0ZW1zJyxcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgdGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciBcInt7cXVlcnl9fVwiJyxcbiAgICAgIHRpdGxlX3BsdXJhbDogJ3t7Y291bnR9fSByZXN1bHRzIGZvciBcInt7cXVlcnl9fVwiJyxcbiAgICAgIGZpbmRQcm9kdWN0VGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciBjb3Vwb24gXCJ7e2NvdXBvbn19XCInLFxuICAgICAgZmluZFByb2R1Y3RUaXRsZV9wbHVyYWw6ICd7e2NvdW50fX0gcmVzdWx0cyBmb3IgY291cG9uIFwie3tjb3Vwb259fVwiJyxcbiAgICB9LFxuICAgIHByb2R1Y3Q6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAne3tkZXNjcmlwdGlvbn19JyxcbiAgICAgIGhlYWRpbmc6ICd7e2hlYWRpbmd9fScsXG4gICAgICB0aXRsZTogJ3t7dGl0bGV9fScsXG4gICAgfSxcbiAgfSxcbiAgc3Bpbm5lcjoge1xuICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIHNob3BBbGw6ICdTaG9wIGFsbCB7eyBuYXZOb2RlfX0gPicsXG4gIH0sXG4gIHNlYXJjaEJveDoge1xuICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGhlcmUuLi4nLFxuICAgIGhlbHA6IHtcbiAgICAgIGluc3VmZmljaWVudENoYXJzOiAnUGxlYXNlIHR5cGUgbW9yZSBjaGFyYWN0ZXJzJyxcbiAgICAgIG5vTWF0Y2g6ICdXZSBjb3VsZCBub3QgZmluZCBhbnkgcmVzdWx0cycsXG4gICAgICBleGFjdE1hdGNoOiAne3sgdGVybSB9fScsXG4gICAgICBlbXB0eTogJ0FzayB1cyBhbnl0aGluZycsXG4gICAgfSxcbiAgfSxcbiAgc29ydGluZzoge1xuICAgIGRhdGU6ICdEYXRlJyxcbiAgICBvcmRlck51bWJlcjogJ09yZGVyIE51bWJlcicsXG4gICAgcm1hOiAnUmV0dXJuIE51bWJlcicsXG4gICAgcmVwbGVuaXNobWVudE51bWJlcjogJ1JlcGxlbmlzaG1lbnQgTnVtYmVyJyxcbiAgICBuZXh0T3JkZXJEYXRlOiAnTmV4dCBPcmRlciBEYXRlJyxcbiAgfSxcbiAgaHR0cEhhbmRsZXJzOiB7XG4gICAgYmFkR2F0ZXdheTogJ0Egc2VydmVyIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgYmFkUmVxdWVzdFBsZWFzZUxvZ2luQWdhaW46ICd7eyBlcnJvck1lc3NhZ2UgfX0uIFBsZWFzZSBsb2dpbiBhZ2Fpbi4nLFxuICAgIGJhZFJlcXVlc3RPbGRQYXNzd29yZEluY29ycmVjdDogJ09sZCBwYXNzd29yZCBpbmNvcnJlY3QuJyxcbiAgICBjb25mbGljdDogJ0FscmVhZHkgZXhpc3RzJyxcbiAgICBmb3JiaWRkZW46XG4gICAgICAnWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLiBQbGVhc2UgY29udGFjdCB5b3VyIGFkbWluaXN0cmF0b3IgaWYgeW91IHRoaW5rIHRoaXMgaXMgYSBtaXN0YWtlLicsXG4gICAgZ2F0ZXdheVRpbWVvdXQ6ICdUaGUgc2VydmVyIGRpZCBub3QgcmVzcG9uZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICAgIGludGVybmFsU2VydmVyRXJyb3I6XG4gICAgICAnQW4gSW50ZXJuYWwgU2VydmVyIEVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgc2Vzc2lvbkV4cGlyZWQ6ICdZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSBsb2dpbiBhZ2Fpbi4nLFxuICAgIHVua25vd25FcnJvcjogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnLFxuICAgIHVuYXV0aG9yaXplZDoge1xuICAgICAgY29tbW9uOiAnQW4gdW5rbm93biBhdXRob3JpemF0aW9uIGVycm9yIG9jY3VyZWQnLFxuICAgICAgaW52YWxpZF9jbGllbnQ6ICdCYWQgY2xpZW50IGNyZWRlbnRpYWxzJyxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25FcnJvcnM6IHtcbiAgICAgIG1pc3Npbmc6IHtcbiAgICAgICAgY2FyZF9jYXJkVHlwZTpcbiAgICAgICAgICAnVGhlIHNlbGVjdGVkIGNyZWRpdCBjYXJkIGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSBzZWxlY3QgYW5vdGhlci4nLFxuICAgICAgICBjYXJkX2FjY291bnROdW1iZXI6ICdUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGNhcmRfY3ZOdW1iZXI6ICdUaGUgc2VjdXJpdHkgY29kZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjYXJkX2V4cGlyYXRpb25Nb250aDpcbiAgICAgICAgICAnVGhlIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjYXJkX2V4cGlyYXRpb25ZZWFyOlxuICAgICAgICAgICdUaGUgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19maXJzdE5hbWU6ICdUaGUgZmlyc3QgbmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fbGFzdE5hbWU6ICdUaGUgbGFzdCBuYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19zdHJlZXQxOiAnVGhlIGFkZHJlc3MgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX3N0cmVldDI6ICdUaGUgYWRkcmVzcyBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fY2l0eTogJ1RoZSBjaXR5IGVudGVyZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGJpbGxUb19zdGF0ZTpcbiAgICAgICAgICAnVGhlIHN0YXRlL3Byb3ZpbmNlIGVudGVyZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGJpbGxUb19jb3VudHJ5OlxuICAgICAgICAgICdUaGUgY291bnRyeSBlbnRlcmVkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBjcmVkaXQgY2FyZC4nLFxuICAgICAgICBiaWxsVG9fcG9zdGFsQ29kZTpcbiAgICAgICAgICAnVGhlIHppcC9wb3N0YWwgY29kZSBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgY291bnRyeToge1xuICAgICAgICAgIGlzb2NvZGU6ICdNaXNzaW5nIGNvdW50cnknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgY2FyZF9leHBpcmF0aW9uTW9udGg6XG4gICAgICAgICAgJ1RoZSBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgZmlyc3ROYW1lOiAnRmlyc3QgTmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBsYXN0TmFtZTogJ0xhc3QgTmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBwYXNzd29yZDogJ1Bhc3N3b3JkIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIHVpZDogJ1VJRCBpcyBub3QgdmFsaWQuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJ0Tm90Rm91bmQ6ICdDYXJ0IG5vdCBmb3VuZC4nLFxuICAgIGludmFsaWRDb2RlUHJvdmlkZWQ6ICdJbnZhbGlkIGNvZGUgcHJvdmlkZWQuJyxcbiAgfSxcbiAgbWluaUNhcnQ6IHtcbiAgICBpdGVtOiAne3tjb3VudH19IGl0ZW0gY3VycmVudGx5IGluIHlvdXIgY2FydCcsXG4gICAgaXRlbV9wbHVyYWw6ICd7e2NvdW50fX0gaXRlbXMgY3VycmVudGx5IGluIHlvdXIgY2FydCcsXG4gICAgdG90YWw6ICd7e3RvdGFsfX0nLFxuICAgIGNvdW50OiAne3tjb3VudH19JyxcbiAgfSxcbiAgbWluaUxvZ2luOiB7XG4gICAgdXNlckdyZWV0aW5nOiAnSGksIHt7bmFtZX19JyxcbiAgICBzaWduSW5SZWdpc3RlcjogJ1NpZ24gSW4gLyBSZWdpc3RlcicsXG4gIH0sXG4gIHNraXBMaW5rOiB7XG4gICAgc2tpcFRvOiAnU2tpcCB0bycsXG4gICAgbGFiZWxzOiB7XG4gICAgICBoZWFkZXI6ICdIZWFkZXInLFxuICAgICAgbWFpbjogJ01haW4gQ29udGVudCcsXG4gICAgICBmb290ZXI6ICdGb290ZXInLFxuICAgICAgcHJvZHVjdEZhY2V0czogJ1Byb2R1Y3QgRmFjZXRzJyxcbiAgICAgIHByb2R1Y3RMaXN0OiAnUHJvZHVjdCBMaXN0JyxcbiAgICB9LFxuICB9LFxuICBmb3JtRXJyb3JzOiB7XG4gICAgZ2xvYmFsTWVzc2FnZTogJ1RoZSBmb3JtIHlvdSBhcmUgdHJ5aW5nIHRvIHN1Ym1pdCBjb250YWlucyBlcnJvcnMuJyxcbiAgICByZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgIGN4SW52YWxpZEVtYWlsOiAnVGhpcyBpcyBub3QgYSB2YWxpZCBlbWFpbCBmb3JtYXQnLFxuICAgIGN4SW52YWxpZFBhc3N3b3JkOiAnVGhpcyBpcyBub3QgYSB2YWxpZCBwYXNzd29yZCBmb3JtYXQnLFxuICAgIGN4UGFzc3dvcmRzTXVzdE1hdGNoOiAnUGFzc3dvcmQgZmllbGRzIG11c3QgbWF0Y2gnLFxuICAgIGN4RW1haWxzTXVzdE1hdGNoOiAnRW1haWwgZmllbGRzIG11c3QgbWF0Y2gnLFxuICAgIGN4U3RhclJhdGluZ0VtcHR5OiAnUmF0aW5nIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICBjeE5vU2VsZWN0ZWRJdGVtVG9DYW5jZWw6ICdTZWxlY3QgYXQgbGVhc3Qgb25lIGl0ZW0nLFxuICAgIGN4RGF0ZU1pbjogJ0RhdGUgY2Fubm90IGJlIGJlZm9yZSB7e21pbn19JyxcbiAgICBjeERhdGVNYXg6ICdEYXRlIGNhbm5vdCBiZSBhZnRlciB7e21heH19JyxcbiAgICBjeE5lZ2F0aXZlQW1vdW50OiAnQW1vdW50IG11c3QgYmUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIHplcm8nLFxuICAgIGN4Q29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyczogJ0ZpZWxkIGNhbm5vdCBjb250YWluIHNwZWNpYWwgY2hhcmFjdGVycycsXG4gIH0sXG4gIGVycm9ySGFuZGxlcnM6IHtcbiAgICBzY3JpcHRGYWlsZWRUb0xvYWQ6ICdGYWlsZWQgdG8gbG9hZCB0aGUgc2NyaXB0LicsXG4gICAgcmVmcmVzaFRoZVBhZ2U6ICdQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZS4nLFxuICB9LFxufTtcbiJdfQ==