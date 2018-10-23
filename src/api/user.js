import { gql } from 'apollo-boost';

/* Queries */
const getProfileDetail = gql`
    query($id:String){
        getUserDetail(id:$id){
            fullName
            email
            phoneNumber
            id
        }
    }
`
const getProfileData = gql`
    query($id:String){
        getUserProfile(id:$id){
            id
            displayName
            skills
            socialLinks
            description
            dateOfBirth
            avatar
            coverPhoto
            gender
            phoneNumber
            preferredLanguage
            country
            city
            state
            userType
            createdAt
            updatedAt
        }
    }
`
const getProfileDataByEmail = gql`
    query($email:String){
        getProfileDataByEmail(email:$email){
            fullName
            phoneNumber
            email
            id
        }
    }
`

/* Mutations */

const createUser = gql`
    mutation($fullName:String!,$email:String!,$password:String!,$phoneNumber:String!){
        addUser(fullName: $fullName, email: $email, password: $password, phoneNumber:$phoneNumber){
            fullName
            email
            phoneNumber
            id
        }
    }
`

export { 
    getProfileData, 
    getProfileDataByEmail,
    createUser, 
}