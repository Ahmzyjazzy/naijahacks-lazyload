import { gql } from 'apollo-boost';

/* Queries */
const getProfileData = gql`
    query($id:ID){
        getUserDetail(id:$id){
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
    createUser, 
}