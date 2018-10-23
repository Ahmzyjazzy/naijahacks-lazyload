const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');

/*TODO: import all queries*/

const getUserDetail = require('../queries/getUserDetail');
const getUserProfile = require('../queries/getUserProfile');
const getAllUsers = require('../queries/getAllUsers');

const getEntity = require('../queries/getEntity');
const getAllEntities = require('../queries/getAllEntities');

const getInstructorConnect = require('../queries/getInstructorConnect');
const getAllInstructorConnect = require('../queries/getAllInstructorConnect');

const getService = require('../queries/getService');
const getAllSevices = require('../queries/getAllSevices');

const getReviews = require('../queries/getReviews');


/*TODO: import all mutations*/

const addUser = require('../mutation/user/addUser');
const addUserProfile = require('../mutation/user/addUserProfile');
const updateUserProfile = require('../mutation/user/updateUserProfile');

const createService = require('../mutation/service/createService');
const updateService = require('../mutation/service/updateService');

const createReview = require('../mutation/review/createReview');

const addInstructorConnect = require('../mutation/instructorConnect/addInstructorConnect');
const updateInstructorConnect = require('../mutation/instructorConnect/updateInstructorConnect');

const createEntity = require('../mutation/entity/createEntity');
const updateEntity = require('../mutation/entity/updateEntity');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
        /* list all queries here */
            getUserDetail,
            getUserProfile,
            getProfileDataByEmail
            getAllUsers,
            getEntity,
            getAllEntities,
            getInstructorConnect,
            getAllInstructorConnect,
            getService,
            getAllSevices,
            getReviews
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
        /* list all mutations here */
            addUser,addUserProfile,updateUserProfile,
            createEntity,updateEntity,
            createService,updateService,
            createReview,
            addInstructorConnect,updateInstructorConnect
        }
    })
});


