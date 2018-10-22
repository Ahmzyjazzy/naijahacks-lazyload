const {GraphQLString} = require('graphql');

const ServiceType = require('../types/ServiceType');
const Service = require('../models/Service');

const getService = {
    type: ServiceType,
    args: {
        entityId:{type:GraphQLString},
        name:{type:GraphQLString}
    },
    async resolve(parent,args) {
    if(args.entityId) {
        return await Service.find({entityId: args.entityId});
    }else{
        return await Service.find({entityId: args.name});
    }

}
};

module.exports = getService;