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

const getEntity = gql`
    query($id:ID){
        getEntity(id: $id) {
            id
            userId
            entityName
            description
            avatar
            country
            coverPhoto
            city
            state
            openingHours
            socialLinks
            entityType
            docLink
            isValidated
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

const createEntity = gql`
    mutation (
        $userId: String!,$entityName: String!,$description: String!,
        $avatar: String!,$coverPhoto: String!,$country: String!,$city: String!,
        $state: String!,$openingHours: String!,$socialLinks: String!,
        $entityType: String!,$docLink: String!,$isValidated: String!
    )
    {
        createEntity(
            userId: $userId,
            entityName: $entityName,
            description: $description,
            avatar: $avatar,
            coverPhoto: $coverPhoto,
            country: $country,
            city: $city,
            state: $state,
            openingHours: $openingHours,
            socialLinks: $socialLinks,
            entityType: $entityType,
            docLink: $docLink,
            isValidated: $isValidated) {
            id
            userId
            entityName
            description
            avatar
            coverPhoto
            country
            city
            state
            openingHours
            socialLinks
            entityType
            docLink
            isValidated
            createdAt
            updatedAt
        }
    }
`

export { 
    getProfileData, 
    createUser,
    createEntity,
    getEntity
}