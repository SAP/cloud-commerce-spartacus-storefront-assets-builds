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
                code: 'Code is not valid.',
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
        cxNegativeAmount: 'Amount must be equal or greater than zero',
        cxContainsSpecialCharacters: 'Field cannot contain special characters',
        date: {
            required: 'This field is required',
            min: 'Date cannot be before {{min}}',
            max: 'Date cannot be after {{max}}',
            pattern: 'Use dateformat yyyy-mm-dd',
            invalid: 'Use a valid date',
        },
    },
    errorHandlers: {
        scriptFailedToLoad: 'Failed to load the script.',
        refreshThePage: 'Please refresh the page.',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXNzZXRzL3NyYy90cmFuc2xhdGlvbnMvZW4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLFVBQVU7UUFDbEIsT0FBTyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsZ0NBQWdDO1lBQ3ZDLFlBQVksRUFBRSxpQ0FBaUM7U0FDaEQ7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFlBQVksRUFBRSwwQkFBMEI7U0FDekM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLFlBQVksRUFBRSxtQ0FBbUM7WUFDakQsZ0JBQWdCLEVBQUUsMENBQTBDO1lBQzVELHVCQUF1QixFQUFFLDJDQUEyQztTQUNyRTtRQUNELE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFLFdBQVc7U0FDbkI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxZQUFZO0tBQ3RCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLHlCQUF5QjtLQUNuQztJQUNELFNBQVMsRUFBRTtR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LElBQUksRUFBRTtZQUNKLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsR0FBRyxFQUFFLCtCQUErQjtZQUNwQyxHQUFHLEVBQUUsOEJBQThCO1lBQ25DLE9BQU8sRUFBRSwyQkFBMkI7WUFDcEMsT0FBTyxFQUFFLGtCQUFrQjtTQUM1QjtLQUNGO0lBQ0QsYUFBYSxFQUFFO1FBQ2Isa0JBQWtCLEVBQUUsNEJBQTRCO1FBQ2hELGNBQWMsRUFBRSwwQkFBMEI7S0FDM0M7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbW1vbiA9IHtcbiAgY29tbW9uOiB7XG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICBkZWxldGU6ICdEZWxldGUnLFxuICAgIHJlbW92ZTogJ1JlbW92ZScsXG4gICAgZWRpdDogJ0VkaXQnLFxuICAgIGJhY2s6ICdCYWNrJyxcbiAgICBzdWJtaXQ6ICdTdWJtaXQnLFxuICAgIGNvbnRpbnVlOiAnQ29udGludWUnLFxuICAgIHNhdmU6ICdTYXZlJyxcbiAgICBkb25lOiAnRG9uZScsXG4gICAgaG9tZTogJ0hvbWUnLFxuICAgIG5vRGF0YTogJ05vIGRhdGEuJyxcbiAgICBjb25maXJtOiAnQ29uZmlybScsXG4gIH0sXG4gIHBhZ2VNZXRhUmVzb2x2ZXI6IHtcbiAgICBjYXRlZ29yeToge1xuICAgICAgdGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciB7e3F1ZXJ5fX0nLFxuICAgICAgdGl0bGVfcGx1cmFsOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIHt7cXVlcnl9fScsXG4gICAgfSxcbiAgICBjaGVja291dDoge1xuICAgICAgdGl0bGU6ICdDaGVja291dCB7e2NvdW50fX0gaXRlbScsXG4gICAgICB0aXRsZV9wbHVyYWw6ICdDaGVja291dCB7e2NvdW50fX0gaXRlbXMnLFxuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICB0aXRsZTogJ3t7Y291bnR9fSByZXN1bHQgZm9yIFwie3txdWVyeX19XCInLFxuICAgICAgdGl0bGVfcGx1cmFsOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIFwie3txdWVyeX19XCInLFxuICAgICAgZmluZFByb2R1Y3RUaXRsZTogJ3t7Y291bnR9fSByZXN1bHQgZm9yIGNvdXBvbiBcInt7Y291cG9ufX1cIicsXG4gICAgICBmaW5kUHJvZHVjdFRpdGxlX3BsdXJhbDogJ3t7Y291bnR9fSByZXN1bHRzIGZvciBjb3Vwb24gXCJ7e2NvdXBvbn19XCInLFxuICAgIH0sXG4gICAgcHJvZHVjdDoge1xuICAgICAgZGVzY3JpcHRpb246ICd7e2Rlc2NyaXB0aW9ufX0nLFxuICAgICAgaGVhZGluZzogJ3t7aGVhZGluZ319JyxcbiAgICAgIHRpdGxlOiAne3t0aXRsZX19JyxcbiAgICB9LFxuICB9LFxuICBzcGlubmVyOiB7XG4gICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgc2hvcEFsbDogJ1Nob3AgYWxsIHt7IG5hdk5vZGV9fSA+JyxcbiAgfSxcbiAgc2VhcmNoQm94OiB7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggaGVyZS4uLicsXG4gICAgaGVscDoge1xuICAgICAgaW5zdWZmaWNpZW50Q2hhcnM6ICdQbGVhc2UgdHlwZSBtb3JlIGNoYXJhY3RlcnMnLFxuICAgICAgbm9NYXRjaDogJ1dlIGNvdWxkIG5vdCBmaW5kIGFueSByZXN1bHRzJyxcbiAgICAgIGV4YWN0TWF0Y2g6ICd7eyB0ZXJtIH19JyxcbiAgICAgIGVtcHR5OiAnQXNrIHVzIGFueXRoaW5nJyxcbiAgICB9LFxuICB9LFxuICBzb3J0aW5nOiB7XG4gICAgZGF0ZTogJ0RhdGUnLFxuICAgIG9yZGVyTnVtYmVyOiAnT3JkZXIgTnVtYmVyJyxcbiAgICBybWE6ICdSZXR1cm4gTnVtYmVyJyxcbiAgICByZXBsZW5pc2htZW50TnVtYmVyOiAnUmVwbGVuaXNobWVudCBOdW1iZXInLFxuICAgIG5leHRPcmRlckRhdGU6ICdOZXh0IE9yZGVyIERhdGUnLFxuICB9LFxuICBodHRwSGFuZGxlcnM6IHtcbiAgICBiYWRHYXRld2F5OiAnQSBzZXJ2ZXIgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgICBiYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbjogJ3t7IGVycm9yTWVzc2FnZSB9fS4gUGxlYXNlIGxvZ2luIGFnYWluLicsXG4gICAgYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0OiAnT2xkIHBhc3N3b3JkIGluY29ycmVjdC4nLFxuICAgIGNvbmZsaWN0OiAnQWxyZWFkeSBleGlzdHMnLFxuICAgIGZvcmJpZGRlbjpcbiAgICAgICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24uIFBsZWFzZSBjb250YWN0IHlvdXIgYWRtaW5pc3RyYXRvciBpZiB5b3UgdGhpbmsgdGhpcyBpcyBhIG1pc3Rha2UuJyxcbiAgICBnYXRld2F5VGltZW91dDogJ1RoZSBzZXJ2ZXIgZGlkIG5vdCByZXNwb25kLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgaW50ZXJuYWxTZXJ2ZXJFcnJvcjpcbiAgICAgICdBbiBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyxcbiAgICBzZXNzaW9uRXhwaXJlZDogJ1lvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIGxvZ2luIGFnYWluLicsXG4gICAgdW5rbm93bkVycm9yOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCcsXG4gICAgdW5hdXRob3JpemVkOiB7XG4gICAgICBjb21tb246ICdBbiB1bmtub3duIGF1dGhvcml6YXRpb24gZXJyb3Igb2NjdXJlZCcsXG4gICAgICBpbnZhbGlkX2NsaWVudDogJ0JhZCBjbGllbnQgY3JlZGVudGlhbHMnLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvbkVycm9yczoge1xuICAgICAgbWlzc2luZzoge1xuICAgICAgICBjYXJkX2NhcmRUeXBlOlxuICAgICAgICAgICdUaGUgc2VsZWN0ZWQgY3JlZGl0IGNhcmQgaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHNlbGVjdCBhbm90aGVyLicsXG4gICAgICAgIGNhcmRfYWNjb3VudE51bWJlcjogJ1RoZSBjcmVkaXQgY2FyZCBudW1iZXIgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgY2FyZF9jdk51bWJlcjogJ1RoZSBzZWN1cml0eSBjb2RlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGNhcmRfZXhwaXJhdGlvbk1vbnRoOlxuICAgICAgICAgICdUaGUgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGNhcmRfZXhwaXJhdGlvblllYXI6XG4gICAgICAgICAgJ1RoZSBjcmVkaXQgY2FyZCBleHBpcmF0aW9uIGRhdGUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX2ZpcnN0TmFtZTogJ1RoZSBmaXJzdCBuYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19sYXN0TmFtZTogJ1RoZSBsYXN0IG5hbWUgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX3N0cmVldDE6ICdUaGUgYWRkcmVzcyBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fc3RyZWV0MjogJ1RoZSBhZGRyZXNzIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19jaXR5OiAnVGhlIGNpdHkgZW50ZXJlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgYmlsbFRvX3N0YXRlOlxuICAgICAgICAgICdUaGUgc3RhdGUvcHJvdmluY2UgZW50ZXJlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgYmlsbFRvX2NvdW50cnk6XG4gICAgICAgICAgJ1RoZSBjb3VudHJ5IGVudGVyZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGJpbGxUb19wb3N0YWxDb2RlOlxuICAgICAgICAgICdUaGUgemlwL3Bvc3RhbCBjb2RlIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBjcmVkaXQgY2FyZC4nLFxuICAgICAgICBjb3VudHJ5OiB7XG4gICAgICAgICAgaXNvY29kZTogJ01pc3NpbmcgY291bnRyeScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW52YWxpZDoge1xuICAgICAgICBjYXJkX2V4cGlyYXRpb25Nb250aDpcbiAgICAgICAgICAnVGhlIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBmaXJzdE5hbWU6ICdGaXJzdCBOYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGxhc3ROYW1lOiAnTGFzdCBOYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIHBhc3N3b3JkOiAnUGFzc3dvcmQgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgdWlkOiAnVUlEIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjb2RlOiAnQ29kZSBpcyBub3QgdmFsaWQuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJ0Tm90Rm91bmQ6ICdDYXJ0IG5vdCBmb3VuZC4nLFxuICAgIGludmFsaWRDb2RlUHJvdmlkZWQ6ICdJbnZhbGlkIGNvZGUgcHJvdmlkZWQuJyxcbiAgfSxcbiAgbWluaUNhcnQ6IHtcbiAgICBpdGVtOiAne3tjb3VudH19IGl0ZW0gY3VycmVudGx5IGluIHlvdXIgY2FydCcsXG4gICAgaXRlbV9wbHVyYWw6ICd7e2NvdW50fX0gaXRlbXMgY3VycmVudGx5IGluIHlvdXIgY2FydCcsXG4gICAgdG90YWw6ICd7e3RvdGFsfX0nLFxuICAgIGNvdW50OiAne3tjb3VudH19JyxcbiAgfSxcbiAgbWluaUxvZ2luOiB7XG4gICAgdXNlckdyZWV0aW5nOiAnSGksIHt7bmFtZX19JyxcbiAgICBzaWduSW5SZWdpc3RlcjogJ1NpZ24gSW4gLyBSZWdpc3RlcicsXG4gIH0sXG4gIHNraXBMaW5rOiB7XG4gICAgc2tpcFRvOiAnU2tpcCB0bycsXG4gICAgbGFiZWxzOiB7XG4gICAgICBoZWFkZXI6ICdIZWFkZXInLFxuICAgICAgbWFpbjogJ01haW4gQ29udGVudCcsXG4gICAgICBmb290ZXI6ICdGb290ZXInLFxuICAgICAgcHJvZHVjdEZhY2V0czogJ1Byb2R1Y3QgRmFjZXRzJyxcbiAgICAgIHByb2R1Y3RMaXN0OiAnUHJvZHVjdCBMaXN0JyxcbiAgICB9LFxuICB9LFxuICBmb3JtRXJyb3JzOiB7XG4gICAgZ2xvYmFsTWVzc2FnZTogJ1RoZSBmb3JtIHlvdSBhcmUgdHJ5aW5nIHRvIHN1Ym1pdCBjb250YWlucyBlcnJvcnMuJyxcbiAgICByZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgIGN4SW52YWxpZEVtYWlsOiAnVGhpcyBpcyBub3QgYSB2YWxpZCBlbWFpbCBmb3JtYXQnLFxuICAgIGN4SW52YWxpZFBhc3N3b3JkOiAnVGhpcyBpcyBub3QgYSB2YWxpZCBwYXNzd29yZCBmb3JtYXQnLFxuICAgIGN4UGFzc3dvcmRzTXVzdE1hdGNoOiAnUGFzc3dvcmQgZmllbGRzIG11c3QgbWF0Y2gnLFxuICAgIGN4RW1haWxzTXVzdE1hdGNoOiAnRW1haWwgZmllbGRzIG11c3QgbWF0Y2gnLFxuICAgIGN4U3RhclJhdGluZ0VtcHR5OiAnUmF0aW5nIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICBjeE5vU2VsZWN0ZWRJdGVtVG9DYW5jZWw6ICdTZWxlY3QgYXQgbGVhc3Qgb25lIGl0ZW0nLFxuICAgIGN4TmVnYXRpdmVBbW91bnQ6ICdBbW91bnQgbXVzdCBiZSBlcXVhbCBvciBncmVhdGVyIHRoYW4gemVybycsXG4gICAgY3hDb250YWluc1NwZWNpYWxDaGFyYWN0ZXJzOiAnRmllbGQgY2Fubm90IGNvbnRhaW4gc3BlY2lhbCBjaGFyYWN0ZXJzJyxcbiAgICBkYXRlOiB7XG4gICAgICByZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgbWluOiAnRGF0ZSBjYW5ub3QgYmUgYmVmb3JlIHt7bWlufX0nLFxuICAgICAgbWF4OiAnRGF0ZSBjYW5ub3QgYmUgYWZ0ZXIge3ttYXh9fScsXG4gICAgICBwYXR0ZXJuOiAnVXNlIGRhdGVmb3JtYXQgeXl5eS1tbS1kZCcsXG4gICAgICBpbnZhbGlkOiAnVXNlIGEgdmFsaWQgZGF0ZScsXG4gICAgfSxcbiAgfSxcbiAgZXJyb3JIYW5kbGVyczoge1xuICAgIHNjcmlwdEZhaWxlZFRvTG9hZDogJ0ZhaWxlZCB0byBsb2FkIHRoZSBzY3JpcHQuJyxcbiAgICByZWZyZXNoVGhlUGFnZTogJ1BsZWFzZSByZWZyZXNoIHRoZSBwYWdlLicsXG4gIH0sXG59O1xuIl19