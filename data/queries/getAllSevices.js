const {GraphQLString} = require('graphql');

const ServiceType = require('../types/ServiceType');
const Service = require('../models/Service');

const getAllService = {
    type: ServiceType,
    async resolve(parent,args) {
        return await Service.find({});
    }
};

module.exports = getAllService;