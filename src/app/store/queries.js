import gql from 'graphql-tag'

export const saveProgress = gql`
mutation progress($input: ProgressInput!) {
    progress(input: $input)
}`

export const saveStep1 = gql`
mutation saveStep1($input: Step1Input!) {
    saveStep1(input: $input) {
        phone {
            status
        }
        step1 {
            honorific
            firstName
            middleName
            lastName
            phone
            email
            verification
            communicate
        }
    }
}`

export const saveStep2 = gql`
mutation saveStep2($input: Step2Input!) {
    saveStep2(input: $input) {
        phone {
            status
        }
        step1 {
            honorific
            firstName
            middleName
            lastName
            phone
            email
            verification
            communicate
        }
        step2 {
            date
            block
            hour
            location
        }
    }
}`

export const saveStep3 = gql`
mutation saveStep3($input: Step3Input!) {
    saveStep3(input: $input) {
        phone {
            status
        }
        step1 {
            honorific
            firstName
            middleName
            lastName
            phone
            email
            verification
            communicate
        }
        step2 {
            date
            block
            hour
            location
        }
        step3 {
            email
            source
            which
        }
    }
}`

export const saveConfirmation = gql`
mutation saveConfirmation($input: ConfirmationInput!) {
    saveConfirmation(input: $input)
}`


export const checkout = gql`
mutation checkout($token: String!) {
    checkout(token: $token)
}`

export const phoneVerification = gql`
mutation phoneVerification($code: String!) {
    phoneVerification(code: $code) {
        message
        status
        signup {
            phone {
                status
            }
        }
    }
}`

export const resendPhoneVerification = gql`
mutation resendPhoneVerification {
    resendPhoneVerification {
        status
    }
}`

export const signup = gql`
query signupData($locationsInput: LocationsInput) {
    signup {
        id
        progress {
            step
        }
        step1 {
            honorific
            firstName
            middleName
            lastName
            phone
            email
            verification
            communicate
        }
        step2 {
            date
            block
            hour
            location
        }
        step3 {
            email
            source
            which
        }
        phone {
            status
        }
    }
    locations(input: $locationsInput) {
        id
        name
        latitude
        longitude
    }
}
`

export const locations = gql`
query locations($input: LocationsInput) {
    locations(input: $input) {
        id
        name
        latitude
        longitude
    }
}
`

export const availability = gql`
query availability($locationId: ID!, $days:[GraphQLDateTime]!) {
    availability(locationId: $locationId, days: $days) {
        date
        blocks {
            from
            to
            status
            appointments {
                hour
                status
            }
        }
    }
}
`

export const saveSchedulingRequest = gql`
mutation saveSchedulingRquest($input: SchedulingRequestInput!) {
    saveSchedulingRquest(input: $input)
}`

export const changePhone = gql`
mutation changePhone($phone: String!) {
    changePhone(phone: $phone) {
        id
        progress {
            step
        }
        step1 {
            honorific
            firstName
            middleName
            lastName
            phone
            email
            verification
            communicate
        }
        step2 {
            date
            block
            hour
            location
        }
        step3 {
            email
            source
            which
        }
        phone {
            status
        }
    }
}`

export const user = gql`{
    user {
        id
        name
        email
    }
}`