import axios from 'axios'
import queryString from 'query-string'

export class DomainController {
    constructor(props) {
        this.token = props.token
        this.results = []
        this.markers = []
        this.pageEnd = false;
        this.data = {"locations": [
              {"suburb": props.suburb,
                "postCode": props.postcode,
            "state" : props.state,
            "includeSurroundingSuburbs":false
        }
            ], "page": 1,"pageSize": 99, "sort": {"sortKey": "Price"}}
        this.finances ={
            deposit : props.deposit,
            interestRate : props.interestRate,
            loanTerm : props.loanTerm,
            purchaseCosts : props.purchaseCosts,
            ongoingCosts: props.ongoingCosts
        }
        this.rent = []  
        this.propertiesToRemove = ['advertiser', 'hasFloorplan', 'hasVideo', 'headline', 'inspectionSchedule', 'labels', 'listingSlug', 'summaryDescription']
   }

    getAccessToken() {
        const clientId = process.env.REACT_APP_DOMAIN_CLIENTID
        const secret = process.env.REACT_APP_DOMAIN_SECRET
        const data = queryString.stringify({
            grant_type: 'client_credentials',
            scope: 'api_listings_read'
        })
        return axios.post('https://auth.domain.com.au/v1/connect/token', data, {
            headers: {
                'Authorization': `Basic ${base64(`${clientId}:${secret}`)}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((result) => {
                    this.token= result.data.access_token 
                    return (this.token)             
        }).catch(err => console.error(err))
    }

    getListingById(props) {
            return axios.post(`https://api.domain.com.au/v1/listings/residential/_search`, this.data, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then(result => {
                const { data } = result;
                data.map((property) => { 
                    if (property.type === "PropertyListing") {
                        if ((property.listing.hasOwnProperty("media")) && (property.listing.listingType === "Sale") && (/[/$/]/.test(property.listing.priceDetails.displayPrice))){
                            this.propertiesToRemove.map(currentProperty => {                             
                                if (property.listing.hasOwnProperty(currentProperty)) {
                                delete property.listing[currentProperty]
                            }})
                            let newValues = this.repaymentCalculator(property.listing.priceDetails.displayPrice, this.finances)
                                const priceDetails = property.listing.priceDetails
                                priceDetails.displayPrice = newValues[0]
                                priceDetails.monthlyRepayments = newValues[1]
                                
                            this.results.push(property)
                        }
                        if (property.listing.listingType === "Rent"){
                            if (this.hasNumber(property.listing.priceDetails.displayPrice)){
                            this.rent.push(property.listing.priceDetails.displayPrice)
                            }
                        }
                    }
                })
                if (data.length === 0) {
                    this.results.map((property, index) => {
                        
                        if (this.rent.length !== 0){
                        property.listing.priceDetails.estimatedProfit = this.averageRent(this.rent, index, this.results.length) - property.listing.priceDetails.monthlyRepayments
                       
                        } else {
                            property.listing.priceDetails.estimatedProfit = "Unable to calculate"
                        } 
                    })
                    return this.results
                }
                else {
                    this.data.page += 1
                    return (this.getListingById(this.results, this.rent))  
                }
            }).catch(err => console.log(err))
    }
    hasNumber(myString) {
        return /\d/.test(myString);
    }
    repaymentCalculator(propertyPrice, finances) {
        let price = propertyPrice.match(/((?:[$0-9]{1,3}[ \.,]?)*[ \.,]?[0-9]+(?:[mMkK])*)/gm)[0].toString().replace(/[,$]/g,"")
        let adjustedPrice = parseInt(price)
        if (price.includes("k") || price.includes("K") ) {
            adjustedPrice = parseInt(price.replace(/[k]/i, "") * 1000)
        }
        if (price.includes(".")){
            let priceArr = price.split(".")
            if ((priceArr[1].includes("m")) || (priceArr[1].includes("M"))) {
                adjustedPrice = (parseInt(priceArr[0] + priceArr[1].slice(0, 1))) * 1000000
            }
        }
        return [adjustedPrice, Math.ceil((adjustedPrice - finances.deposit) * (1 + (finances.interestRate / 100  * finances.loanTerm)) / (finances.loanTerm * 12) + (finances.ongoingCosts / 12) + (finances.purchaseCosts / (12 * finances.loanTerm)))]
    }

    averageRent(rent, propertyIndex, totalProperties){
        let regexRent = []
        let avgRent = 0
        rent.map(number => { regexRent.push(Math.ceil(number.match(/((?:[$0-9]{1,3}[ \.,]?)*[ \.,]?[0-9]+)/gm)[0].toString().trim().replace(/[,$]/g,"")))})
        regexRent.map(number => {
            avgRent += parseInt(number)
        })
        return Math.round((avgRent / rent.length ) * (6))
    }
}
    
function base64(str) {
    return Buffer.from(str).toString('base64')
}

export default DomainController