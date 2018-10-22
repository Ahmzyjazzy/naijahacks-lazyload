const {GraphQLString} = require('graphql');

const EntityType = require('../types/EntityType');
const Entity = require('../models/Entity');

const getAllEntities = {
    type: EntityType,
    async resolve(parent,args) {
    return await Entity.find({});
}
};

module.exports = getAllEntities;