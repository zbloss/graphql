const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat
} = require('graphql');
const axios = require('axios');

/*
// Example hardcoded data //

const customers = [
  {id:'1', name:'John Doe', email:'jdoe@gmail.com', age:35},
  {id:'2', name:'Steve Smith', email:'steve@gmail.com', age:25},
  {id:'3', name:'Sara Williams', email:'sara@gmail.com', age:32},
]

*/
// CustomerType //

const CustomerType = new GraphQLObjectType({
  name:'Customer',
  fields:() => ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    email: {type:GraphQLString},
    age: {type:GraphQLInt},
  })
});

const elligibleSlotsCategoryIdsType = new GraphQLObjectType({
  name: 'ElligibleSlotsCategoryIds',
  fields:() => ({
    0: {type:GraphQLInt},
    1: {type:GraphQLInt}
  })
});

const PlayerType = new GraphQLObjectType({
  name: 'Player',
  fields:() => ({
    droppable: {type:GraphQLBoolean},
    percentStarted: {type:GraphQLFloat},
    jersey: {type:GraphQLString},
    playerRatingSeason: {type:GraphQLFloat},
    positionRank: {type:GraphQLInt},
    isIREligible: {type:GraphQLBoolean},
    draftRank: {type:GraphQLInt},
    value: {type:GraphQLInt},
    universeId: {type:GraphQLInt},
    firstName: {type:GraphQLString},
    elligibleSlotsCategoryIds: {type:elligibleSlotsCategoryIdsType},
    gameStarterStatus: {type:GraphQLInt},
    lastName: {type:GraphQLString},
    sportsId: {type:GraphQLInt},
    healthStatus: {type:GraphQLInt},
    percentOwned: {type:GraphQLFloat},
    proTeamId: {type:GraphQLInt},
    tickerId: {type:GraphQLInt},
    isActive: {type:GraphQLBoolean},
    playerId: {type:GraphQLInt},
    percentChange: {type:GraphQLFloat},
    defaultPositionId: {type:GraphQLInt},
    totalPoints: {type:GraphQLFloat}
  })
});


const CurrentPeriodProjectedStatsType = new GraphQLObjectType({
  name: 'CurrentPeriodProjectedStats',
  fields: () => ({
    appliedProjectedStatTotal: {type:GraphQLFloat},
  })
});

const ProGameIdsType = new GraphQLObjectType({
  name: 'ProGameIds',
  fields: () => ({
    id: {type:GraphQLInt},
  })
});

const CurrentPeriodRealStatsType = new GraphQLObjectType({
  name: 'CurrentPeriodRealStats',
  fields: () => ({
    appliedRealStatTotal: {type:GraphQLFloat},
  })
});

const SlotsType = new GraphQLObjectType({
  name: 'Slots',
  fields:() => ({
    // This might take type:GraphQLList, not sure though //
    pvoRank: {type: GraphQLInt},
    player: {type: PlayerType},
    watchList: {type:GraphQLBoolean},
    isKeeper: {type:GraphQLBoolean},
    isTradeLocked: {type:GraphQLBoolean},
    currentPeriodProjectedStats: {type: CurrentPeriodProjectedStats},
    proGameIds: {type: ProGameIds},
    opponentProTeamId: {type:GraphQLInt},
    slotCategoryId: {type:GraphQLInt},
    lockStatus: {type:GraphQLInt},
    isQueuedWaiverLocked: {type:GraphQLBoolean},
    currentPeriodRealStats: {type:CurrentPeriodRealStatsType}
  })
});
/*
const ProgamesType = new GraphQLObjectType({
  name: 'Progames',
  field: () => ({

  })
});
*/

const TeamsType = new GraphQLObjectType({
  name: 'Teams',
  fields: {
    team1: {type:GraphQLList},
    team2: {type:GraphQLList},
  }
});

const BoxscoreType = new GraphQLObjectType({
  name: 'Boxscore',
  fields: () => ({
  //  progames: {type:ProgamesType},
    teams: () => GraphQLList(TeamsType),
    scoringPeriodId: {type:GraphQLInt},
    matchupPeriodId: {type:GraphQLInt},
    homeTeamBonus: {type:GraphQLInt}
  })
});

const MetadataType = new GraphQLObjectType({
  name: 'Metadata',
  fields: () => ({
    leagueId: {type:GraphQLString},
    status: {type:GraphQLString},
    seasonId: {type:GraphQLString}
  })
});


/* Root Query //
const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields: {
    customer:{
      type:CustomerType,
      args:{
        id:{type:GraphQLString}
      },
      resolve(parentValue, args){
        /*for(let i=0; i<customers.length; i++){
          if(customers[i].id == args.id){
            return customers[i]
          }
        }

         return axios.get('http://localhost:3000/customers/' + args.id)
          .then(res => res.data);

      }
    },
    customers:{
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args){
        return axios.get('http://localhost:3000/customers/')
         .then(res => res.data);
      },
    }
  },
});





// Mutations //

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields:{
    addCustomer:{
      type:CustomerType,
      args:{
        name: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)},
      },
      resolve(parentValue, args){
        return axios.post('http://localhost:3000/customers', {
          name:args.name,
          email: args.email,
          age: args.age
        })
        .then(res => res.data);
      }
    },
    deleteCustomer:{
      type:CustomerType,
      args:{
        id: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue, args){
        return axios.delete('http://localhost:3000/customers/' + args.id)
          .then(res => res.data);
      }
    },
    editCustomer:{
      type:CustomerType,
      args:{
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
      },
      resolve(parentValue, args){
        return axios.patch('http://localhost:3000/customers/' + args.id, args)
        .then(res => res.data);
      }
    },
  }
});

*/


/* json structure
{
  boxscore {
    progames {

    },
    teams {
      [
        slots {

        },
        appliedStats : float,
        appliedStats1: float,
        team {
          [
            rank: int,
            player {

            },
            watch: boolean,
            trade: boolean,
            currentProjStats {

            },
            proGameIds {

            }
          ],
          [
            ...
          ],
          [
            ...
          ],
        },
        teamId: int,
        appliedActive: int,
        appliedProjActive: float,
      ],
      [

      ]
  }
  }
}





*/



const EspnQuery = new GraphQLObjectType({
  name: 'EspnQueryType',
  fields: {
    boxscore: {type:BoxscoreType},
  },
  resolve(parentValue, args){

  }
});



// Keep at the bottom //
module.exports = new GraphQLSchema({
  query: EspnQuery
});
