//-------------------------------------------///
			create userProfile
//__________________________________________///

mutation {
  addUserProfile(
    userId: "5bcc608721c54315e77e54b5"
    displayName: "Adegoke"
    skills: "elepo"
    socialLinks: "elekujay"
    description: ""
    dateOfBirth: ""
    avatar: ""
    coverPhoto: ""
    gender: "male"
    phoneNumber: "08022334455"
    preferredLanguage: "english"
    country: "nigeria"
    city: "surulere"
    state: "lagos"
    userType: ""
    createdAt: "1540126137052"
    updatedAt: "1540126137052"
        
  ){
    id
    userId
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

//-------------------------------------------///
			Get userProfile by ID
//__________________________________________///

{
  getUserProfile(id: "5bcc75d143aaad2a9ebc9221") {
    userId
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