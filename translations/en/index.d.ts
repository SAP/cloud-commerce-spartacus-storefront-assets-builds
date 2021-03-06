export declare const en: {
    address: {
        addressForm: {
            title: string;
            firstName: {
                label: string;
                placeholder: string;
            };
            lastName: {
                label: string;
                placeholder: string;
            };
            address1: string;
            address2: string;
            country: string;
            city: {
                label: string;
                placeholder: string;
            };
            state: string;
            zipCode: {
                label: string;
                placeholder: string;
            };
            phoneNumber: {
                label: string;
                placeholder: string;
            };
            saveAsDefault: string;
            chooseAddress: string;
            streetAddress: string;
            aptSuite: string;
            selectOne: string;
            setAsDefault: string;
            titleRequired: string;
            userAddressAddSuccess: string;
            userAddressUpdateSuccess: string;
            userAddressDeleteSuccess: string;
            invalidAddress: string;
        };
        addressBook: {
            addNewShippingAddress: string;
            editShippingAddress: string;
            areYouSureToDeleteAddress: string;
            addNewAddress: string;
            addAddress: string;
            updateAddress: string;
            backToAddressList: string;
        };
        addressCard: {
            default: string;
            selected: string;
            setAsDefault: string;
            shipTo: string;
            billTo: string;
        };
    };
    asm: {
        asm: {
            mainLogoLabel: string;
            mainTitle: string;
            logout: string;
            hideUi: string;
            toggleUi: {
                collapse: string;
                expand: string;
            };
            loginForm: {
                submit: string;
                userId: {
                    label: string;
                    required: string;
                };
                password: {
                    label: string;
                    required: string;
                };
            };
            customerSearch: {
                searchTerm: {
                    label: string;
                };
                submit: string;
                noMatch: string;
            };
            csagentTokenExpired: string;
            endSession: string;
            agentSessionTimer: {
                label: string;
                minutes: string;
                reset: string;
            };
            standardSessionInProgress: string;
            auth: {
                agentLoggedInError: string;
            };
            error: {
                noCustomerId: string;
            };
        };
    };
    cart: {
        cartDetails: {
            id: string;
            proceedToCheckout: string;
            cartName: string;
        };
        cartItems: {
            id: string;
            description: string;
            item: string;
            itemPrice: string;
            quantity: string;
            quantityTitle: string;
            total: string;
            cartTotal: string;
            cartTotal_plural: string;
        };
        orderCost: {
            orderSummary: string;
            subtotal: string;
            shipping: string;
            estimatedShipping: string;
            discount: string;
            salesTax: string;
            grossTax: string;
            total: string;
            toBeDetermined: string;
        };
        voucher: {
            coupon: string;
            coupon_plural: string;
            apply: string;
            placeholder: string;
            applyVoucherSuccess: string;
            removeVoucherSuccess: string;
            anchorLabel: string;
            vouchersApplied: string;
            availableCoupons: string;
            availableCouponsLabel: string;
        };
        saveForLaterItems: {
            itemTotal: string;
            itemTotal_plural: string;
            cartTitle: string;
            saveForLater: string;
            moveToCart: string;
            stock: string;
            forceInStock: string;
        };
    };
    checkout: {
        checkoutAddress: {
            shippingAddress: string;
            selectYourShippingAddress: string;
            defaultShippingAddress: string;
            verifyYourAddress: string;
            ensureAccuracySuggestChange: string;
            chooseAddressToUse: string;
            suggestedAddress: string;
            enteredAddress: string;
            addNewAddress: string;
            shipToThisAddress: string;
            editAddress: string;
            saveAddress: string;
        };
        checkoutOrderConfirmation: {
            confirmationOfOrder: string;
            thankYou: string;
            invoiceHasBeenSentByEmail: string;
            orderItems: string;
            orderPlacedSuccessfully: string;
            createAccount: string;
            createAccountForNext: string;
            replenishmentNumber: string;
            placedOn: string;
            status: string;
            active: string;
            cancelled: string;
            frequency: string;
            nextOrderDate: string;
            orderNumber: string;
        };
        checkoutReview: {
            review: string;
            orderItems: string;
            autoReplenishOrder: string;
            confirmThatRead: string;
            placeOrder: string;
            scheduleReplenishmentOrder: string;
            orderType_PLACE_ORDER: string;
            orderType_SCHEDULE_REPLENISHMENT_ORDER: string;
            termsAndConditions: string;
            editShippingAddress: string;
            poNumber: string;
            every: string;
            startOn: string;
            dayOfMonth: string;
            repeatOnDays: string;
            recurrencePeriodType_DAILY: string;
            recurrencePeriodType_WEEKLY: string;
            recurrencePeriodType_MONTHLY: string;
        };
        checkoutShipping: {
            shippingMethod: string;
            standardDelivery: string;
            premiumDelivery: string;
        };
        checkout: {
            backToCart: string;
            invalid: {
                accountType: string;
            };
        };
        checkoutPO: {
            noPoNumber: string;
            poNumber: string;
            costCenter: string;
            placeholder: string;
            availableLabel: string;
        };
        checkoutProgress: {
            methodOfPayment: string;
            shippingAddress: string;
            deliveryMode: string;
            paymentDetails: string;
            reviewOrder: string;
        };
    };
    common: {
        common: {
            cancel: string;
            delete: string;
            remove: string;
            edit: string;
            back: string;
            submit: string;
            continue: string;
            save: string;
            done: string;
            home: string;
            noData: string;
            confirm: string;
        };
        pageMetaResolver: {
            category: {
                title: string;
                title_plural: string;
            };
            checkout: {
                title: string;
                title_plural: string;
            };
            search: {
                title: string;
                title_plural: string;
                findProductTitle: string;
                findProductTitle_plural: string;
            };
            product: {
                description: string;
                heading: string;
                title: string;
            };
        };
        spinner: {
            loading: string;
        };
        navigation: {
            shopAll: string;
        };
        searchBox: {
            placeholder: string;
            help: {
                insufficientChars: string;
                noMatch: string;
                exactMatch: string;
                empty: string;
            };
        };
        sorting: {
            date: string;
            orderNumber: string;
            rma: string;
            replenishmentNumber: string;
            nextOrderDate: string;
        };
        httpHandlers: {
            badGateway: string;
            badRequestPleaseLoginAgain: string;
            badRequestOldPasswordIncorrect: string;
            conflict: string;
            forbidden: string;
            gatewayTimeout: string;
            internalServerError: string;
            sessionExpired: string;
            unknownError: string;
            unauthorized: {
                common: string;
                invalid_client: string;
            };
            validationErrors: {
                missing: {
                    card_cardType: string;
                    card_accountNumber: string;
                    card_cvNumber: string;
                    card_expirationMonth: string;
                    card_expirationYear: string;
                    billTo_firstName: string;
                    billTo_lastName: string;
                    billTo_street1: string;
                    billTo_street2: string;
                    billTo_city: string;
                    billTo_state: string;
                    billTo_country: string;
                    billTo_postalCode: string;
                    country: {
                        isocode: string;
                    };
                };
                invalid: {
                    card_expirationMonth: string;
                    firstName: string;
                    lastName: string;
                    password: string;
                    uid: string;
                    code: string;
                    email: string;
                };
            };
            cartNotFound: string;
            invalidCodeProvided: string;
        };
        miniCart: {
            item: string;
            item_plural: string;
            total: string;
            count: string;
        };
        miniLogin: {
            userGreeting: string;
            signInRegister: string;
        };
        skipLink: {
            skipTo: string;
            labels: {
                header: string;
                main: string;
                footer: string;
                productFacets: string;
                productList: string;
            };
        };
        formErrors: {
            globalMessage: string;
            required: string;
            cxInvalidEmail: string;
            cxInvalidPassword: string;
            cxPasswordsMustMatch: string;
            cxEmailsMustMatch: string;
            cxStarRatingEmpty: string;
            cxNoSelectedItemToCancel: string;
            cxNegativeAmount: string;
            cxContainsSpecialCharacters: string;
            date: {
                required: string;
                min: string;
                max: string;
                pattern: string;
                invalid: string;
            };
        };
        errorHandlers: {
            scriptFailedToLoad: string;
            refreshThePage: string;
        };
    };
    myAccount: {
        orderDetails: {
            orderId: string;
            replenishmentId: string;
            purchaseOrderId: string;
            emptyPurchaseOrderId: string;
            none: string;
            placed: string;
            placedBy: string;
            unit: string;
            costCenter: string;
            costCenterAndUnit: string;
            costCenterAndUnitValue: string;
            payByAccount: string;
            paidByCreditCard: string;
            status: string;
            shippedOn: string;
            startOn: string;
            nextOrderDate: string;
            frequency: string;
            cancelled: string;
            deliveryStatus_IN_TRANSIT: string;
            deliveryStatus_READY_FOR_PICKUP: string;
            deliveryStatus_READY_FOR_SHIPPING: string;
            deliveryStatus_WAITING: string;
            deliveryStatus_DELIVERING: string;
            deliveryStatus_PICKPACK: string;
            deliveryStatus_PICKUP_COMPLETE: string;
            deliveryStatus_DELIVERY_COMPLETED: string;
            deliveryStatus_PAYMENT_NOT_CAPTURED: string;
            deliveryStatus_READY: string;
            deliveryStatus_DELIVERY_REJECTED: string;
            deliveryStatus_SHIPPED: string;
            deliveryStatus_TAX_NOT_COMMITTED: string;
            deliveryStatus_CANCELLED: string;
            statusDisplay_cancelled: string;
            statusDisplay_cancelling: string;
            statusDisplay_completed: string;
            statusDisplay_created: string;
            statusDisplay_error: string;
            statusDisplay_Error: string;
            statusDisplay_processing: string;
            statusDisplay_open: string;
            statusDisplay_pending: {
                approval: string;
                merchant: {
                    approval: string;
                };
            };
            statusDisplay_approved: string;
            statusDisplay_rejected: string;
            statusDisplay_merchant: {
                approved: string;
                rejected: string;
            };
            statusDisplay_assigned: {
                admin: string;
            };
            consignmentTracking: {
                action: string;
                dialog: {
                    header: string;
                    shipped: string;
                    estimate: string;
                    carrier: string;
                    trackingId: string;
                    noTracking: string;
                    loadingHeader: string;
                };
            };
            cancellationAndReturn: {
                returnAction: string;
                cancelAction: string;
                item: string;
                itemPrice: string;
                quantity: string;
                returnQty: string;
                cancelQty: string;
                setAll: string;
                totalPrice: string;
                submit: string;
                returnSuccess: string;
                cancelSuccess: string;
            };
            cancelReplenishment: {
                title: string;
                description: string;
                accept: string;
                reject: string;
                cancelSuccess: string;
            };
        };
        orderHistory: {
            orderHistory: string;
            orderId: string;
            emptyPurchaseOrderId: string;
            date: string;
            status: string;
            total: string;
            noOrders: string;
            noReplenishmentOrders: string;
            startShopping: string;
            sortByMostRecent: string;
            replenishmentOrderHistory: string;
            replenishmentOrderId: string;
            purchaseOrderNumber: string;
            startOn: string;
            frequency: string;
            nextOrderDate: string;
            cancel: string;
            cancelled: string;
            replenishmentHistory: string;
            notFound: string;
        };
        closeAccount: {
            confirmAccountClosure: string;
            confirmAccountClosureMessage: string;
            closeMyAccount: string;
            accountClosedSuccessfully: string;
            accountClosedFailure: string;
        };
        updateEmailForm: {
            newEmailAddress: {
                label: string;
                placeholder: string;
            };
            confirmNewEmailAddress: {
                label: string;
                placeholder: string;
            };
            enterValidEmail: string;
            bothEmailMustMatch: string;
            password: {
                label: string;
                placeholder: string;
            };
            pleaseInputPassword: string;
            emailUpdateSuccess: string;
        };
        updatePasswordForm: {
            oldPassword: {
                label: string;
                placeholder: string;
            };
            oldPasswordIsRequired: string;
            newPassword: {
                label: string;
                placeholder: string;
            };
            passwordMinRequirements: string;
            confirmPassword: {
                label: string;
                placeholder: string;
            };
            bothPasswordMustMatch: string;
            passwordUpdateSuccess: string;
        };
        updateProfileForm: {
            title: string;
            none: string;
            firstName: {
                label: string;
                placeholder: string;
            };
            firstNameIsRequired: string;
            lastName: {
                label: string;
                placeholder: string;
            };
            lastNameIsRequired: string;
            profileUpdateSuccess: string;
            customerId: string;
        };
        consentManagementForm: {
            clearAll: string;
            selectAll: string;
            message: {
                success: {
                    given: string;
                    withdrawn: string;
                };
            };
        };
        myCoupons: {
            noCouponsMessage: string;
            effectiveTitle: string;
            Effective: string;
            PreSession: string;
            ExpireSoon: string;
            readMore: string;
            notification: string;
            findProducts: string;
            status: string;
            dialogTitle: string;
            claimCustomerCoupon: string;
            myCoupons: string;
            startDateAsc: string;
            startDateDesc: string;
            endDateAsc: string;
            endDateDesc: string;
            sortByMostRecent: string;
            notesPreffix: string;
            notesLink: string;
            notesSuffix: string;
        };
        notificationPreference: {
            message: string;
            note: string;
            noteMessage: string;
            EMAIL: string;
            SMS: string;
            SITE_MESSAGE: string;
        };
        myInterests: {
            header: string;
            item: string;
            price: string;
            notifications: string;
            noInterests: string;
            inStock: string;
            lowStock: string;
            outOfStock: string;
            BACK_IN_STOCK: string;
            sortByMostRecent: string;
            expirationDate: string;
            productId: string;
            remove: string;
            sorting: {
                byNameAsc: string;
                byNameDesc: string;
            };
        };
        AccountOrderHistoryTabContainer: {
            tabs: {
                AccountOrderHistoryComponent: string;
                OrderReturnRequestListComponent: string;
            };
        };
        returnRequestList: {
            returnRequestId: string;
            orderId: string;
            date: string;
            status: string;
            sortByMostRecent: string;
            statusDisplay_APPROVAL_PENDING: string;
            statusDisplay_CANCELED: string;
            statusDisplay_CANCELLING: string;
            statusDisplay_WAIT: string;
            statusDisplay_RECEIVED: string;
            statusDisplay_RECEIVING: string;
            statusDisplay_APPROVING: string;
            statusDisplay_REVERSING_PAYMENT: string;
            statusDisplay_PAYMENT_REVERSED: string;
            statusDisplay_PAYMENT_REVERSAL_FAILED: string;
            statusDisplay_REVERSING_TAX: string;
            statusDisplay_TAX_REVERSED: string;
            statusDisplay_TAX_REVERSAL_FAILED: string;
            statusDisplay_COMPLETED: string;
        };
        returnRequest: {
            returnRequestId: string;
            orderCode: string;
            status: string;
            cancel: string;
            item: string;
            itemPrice: string;
            returnQty: string;
            total: string;
            summary: string;
            subtotal: string;
            deliveryCode: string;
            estimatedRefund: string;
            note: string;
            cancelSuccess: string;
        };
        wishlist: {
            empty: string;
        };
    };
    payment: {
        paymentForm: {
            payment: string;
            choosePaymentMethod: string;
            paymentType: string;
            accountHolderName: {
                label: string;
                placeholder: string;
            };
            cardNumber: string;
            expirationDate: string;
            securityCode: string;
            securityCodeTitle: string;
            saveAsDefault: string;
            setAsDefault: string;
            billingAddress: string;
            sameAsShippingAddress: string;
            selectOne: string;
            monthMask: string;
            yearMask: string;
            useThisPayment: string;
            addNewPayment: string;
            changePayment: string;
        };
        paymentMethods: {
            paymentMethods: string;
            newPaymentMethodsAreAddedDuringCheckout: string;
            invalidField: string;
        };
        paymentCard: {
            deleteConfirmation: string;
            setAsDefault: string;
            expires: string;
            defaultPaymentMethod: string;
            selected: string;
        };
        paymentTypes: {
            title: string;
            paymentType_CARD: string;
            paymentType_ACCOUNT: string;
        };
    };
    product: {
        productDetails: {
            id: string;
            quantity: string;
            productDetails: string;
            specification: string;
            reviews: string;
            shipping: string;
            share: string;
            showReviews: string;
            noReviews: string;
        };
        productList: {
            filterBy: {
                label: string;
                action: string;
            };
            appliedFilter: string;
            showLess: string;
            showMore: string;
            sortByRelevance: string;
            backToTopBtn: string;
            showMoreBtn: string;
        };
        productFacetNavigation: {
            filterBy: {
                label: string;
                action: string;
            };
            appliedFilter: string;
            showLess: string;
            showMore: string;
            sortByRelevance: string;
        };
        productSummary: {
            id: string;
            showReviews: string;
            share: string;
        };
        productReview: {
            overallRating: string;
            reviewTitle: string;
            writeYourComments: string;
            rating: string;
            reviewerName: string;
            writeReview: string;
            more: string;
            less: string;
            thankYouForReview: string;
        };
        addToCart: {
            itemsAddedToYourCart: string;
            itemsIncrementedInYourCart: string;
            items: string;
            updatingCart: string;
            addToCart: string;
            viewCart: string;
            proceedToCheckout: string;
            quantity: string;
            outOfStock: string;
            inStock: string;
            selectStyleAndSize: string;
        };
        TabPanelContainer: {
            tabs: {
                ProductDetailsTabComponent: string;
                ProductSpecsTabComponent: string;
                ProductReviewsTabComponent: string;
                deliveryTab: string;
            };
        };
        variant: {
            style: string;
            selectedStyle: string;
            size: string;
            color: string;
            sizeGuideLabel: string;
        };
        addToWishList: {
            add: string;
            remove: string;
            anonymous: string;
        };
        stockNotification: {
            notifyMe: string;
            stopNotify: string;
            getNotify: string;
            getNotifySuffix: string;
            activateChannelsPrefix: string;
            channelsLink: string;
            activateChannelsSuffix: string;
            notified: string;
            getNotified: string;
            unsubscribeSuccess: string;
            subscriptionDialog: {
                header: string;
                notifiedPrefix: string;
                notifiedSuffix: string;
                manageChannelsPrefix: string;
                manageChannelsLink: string;
                manageChannelsSuffix: string;
                manageSubscriptionsPrefix: string;
                manageSubscriptionsLink: string;
                manageSubscriptionsSuffix: string;
                okBtn: string;
                subscribing: string;
            };
        };
    };
    pwa: {
        pwa: {
            addToHomeScreenDescription: string;
            noInstallationNeeded: string;
            fastAccessToApplication: string;
            addToHomeScreen: string;
            addedToHomeScreen: string;
        };
    };
    user: {
        anonymousConsents: {
            preferences: string;
            dialog: {
                title: string;
                legalDescription: string;
                selectAll: string;
                clearAll: string;
            };
            banner: {
                title: string;
                description: string;
                allowAll: string;
                viewDetails: string;
            };
        };
        forgottenPassword: {
            resetPassword: string;
            enterEmailAddressAssociatedWithYourAccount: string;
            emailAddress: {
                label: string;
                placeholder: string;
            };
            enterValidEmail: string;
            passwordResetEmailSent: string;
            passwordResetSuccess: string;
        };
        loginForm: {
            forgotPassword: string;
            signIn: string;
            register: string;
            dontHaveAccount: string;
            guestCheckout: string;
            emailAddress: {
                label: string;
                placeholder: string;
            };
            password: {
                label: string;
                placeholder: string;
            };
            wrongEmailFormat: string;
        };
        register: {
            confirmPassword: {
                action: string;
                label: string;
                placeholder: string;
            };
            managementInMyAccount: string;
            termsAndConditions: string;
            signIn: string;
            register: string;
            confirmNewPassword: string;
            resetPassword: string;
            createAccount: string;
            title: string;
            firstName: {
                label: string;
                placeholder: string;
            };
            lastName: {
                label: string;
                placeholder: string;
            };
            emailAddress: {
                label: string;
                placeholder: string;
            };
            password: {
                label: string;
                placeholder: string;
            };
            newPassword: string;
            emailMarketing: string;
            confirmThatRead: string;
            selectTitle: string;
            passwordMinRequirements: string;
            bothPasswordMustMatch: string;
            titleRequired: string;
            postRegisterMessage: string;
        };
        checkoutLogin: {
            emailAddress: {
                label: string;
                placeholder: string;
            };
            confirmEmail: {
                label: string;
                placeholder: string;
            };
            continue: string;
            emailIsRequired: string;
            emailsMustMatch: string;
        };
    };
};
