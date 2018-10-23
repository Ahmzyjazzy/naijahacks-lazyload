const {GraphQLID} = require('graphql');

const EntityType = require('../types/EntityType');
const Entity = require('../models/Entity');

const getEntity = {
        type: EntityType,
        args: {id:{type:GraphQLID}},
        async resolve(parent,args) {
        return await Entity.findById(args.id);
    }
};

module.exports = getEntity;