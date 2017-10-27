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

const BoxscoreType = new GraphQLObjectType({
  name:'Boxscore',
  fields:() => ({
    teams: new GraphQLObjectType({
      name: 'teams',
      fields:() => ({
        team0: new GraphQLList({
          name: 'team0list',
          fields:() => ({
            slots: new GraphQLObjectType({
              name: 'slots',
              fields:() => ({
                // need to put in list types for all 15 lists
                list0: new GraphQLList({
                  name: 'list0',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list1: new GraphQLList({
                  name: 'list1',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list2: new GraphQLList({
                  name: 'list2',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list3: new GraphQLList({
                  name: 'list3',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list4: new GraphQLList({
                  name: 'list4',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list5: new GraphQLList({
                  name: 'list5',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list6: new GraphQLList({
                  name: 'list6',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list7: new GraphQLList({
                  name: 'list0',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list8: new GraphQLList({
                  name: 'list8',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list9: new GraphQLList({
                  name: 'list9',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list10: new GraphQLList({
                  name: 'list10',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list11: new GraphQLList({
                  name: 'list11',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list12: new GraphQLList({
                  name: 'list12',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list13: new GraphQLList({
                  name: 'list13',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list14: new GraphQLList({
                  name: 'list14',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                list15: new GraphQLList({
                  name: 'list15',
                  fields:() => ({
                    pvoRank: {type: GraphQLInt},
                    player: new GraphQLObjectType({
                      name: 'player',
                      fields:() => ({
                        droppable: {type: GraphQLBoolean},
                        percentStarted: {type: GraphQLFloat},
                        jersey: {type:GraphQLString},
                        playerRatingSeason: {type:GraphQLFloat},
                        positionRank: {type:GraphQLInt},
                        isIREligible: {type:GraphQLBoolean},
                        draftRank: {type:GraphQLInt},
                        value: {type:GraphQLInt},
                        universeId: {type:GraphQLInt},
                        firstName: {type:GraphQLString},
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
                    }),
                    watchList: {type:GraphQLBoolean},
                    isKeeper: {type:GraphQLBoolean},
                    isTradeLocked: {type:GraphQLBoolean},
                    currentPeriodProjectedStats: new GraphQLObjectType({
                      name: 'CurrentPeriodProjectedStats',
                      fields:() => ({
                        appliedProjectedStatTotal: {type:GraphQLFloat}
                      })
                    }),
                    proGameIds: new GraphQLObjectType({
                      name: 'proGameIds',
                      fields:() => ({
                        proGameIds0: {type: GraphQLInt}
                      })
                    }),
                    opponentProTeamId: {type:GraphQLInt},
                    slotCategoryId: {type:GraphQLInt},
                    lockStatus: {type:GraphQLInt},
                    isQueuedWaiverLocked: {type:GraphQLBoolean},
                    currentPeriodRealStats: new GraphQLObjectType({
                      name: 'currentPeriodRealStats',
                      fields:() => ({
                        appliedRealStatTotal: {type: GraphQLFloat}
                      })
                    })
                  })
                }),
                appliedActiveProjectedTotal: {type: GraphQLFloat},
                appliedInactiveRealTotal: {type:GraphQLFloat},
                team: new GraphQLObjectType({
                    divisionStanding: {type:GraphQLInt},
                    overallStanding: {type:GraphQLInt},
                    waiverRank: {type:GraphQLInt},
                    division: new GraphQLObjectType({
                      divisionName: {type: GraphQLString},
                      divisionId: {type: GraphQLInt},
                      size: {type: GraphQLInt}
                    }),
                    teamAbbrev: {type:GraphQLString},
                    teamNickname: {type:GraphQLString},
                    logoUrl: {type:GraphQLString},
                    teamLocation: {type:GraphQLString},
                    teamId: {type:GraphQLInt},
                    logoType: {type:GraphQLString}
                }),
                teamId: {type:GraphQLInt},
                appliedActiveRealTotal: {type:GraphQLFloat},
                appliedInactiveProjectedTotal: {type:GraphQLFloat}

              })
            })
          })
        }),
        team1: new GraphQLList({
            team1: new GraphQLList({
              name: 'team1list',
              fields:() => ({
                slots: new GraphQLObjectType({
                  name: 'slots',
                  fields:() => ({
                    // need to put in list types for all 15 lists
                    list0: new GraphQLList({
                      name: 'list0',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list1: new GraphQLList({
                      name: 'list1',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list2: new GraphQLList({
                      name: 'list2',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list3: new GraphQLList({
                      name: 'list3',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list4: new GraphQLList({
                      name: 'list4',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list5: new GraphQLList({
                      name: 'list5',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list6: new GraphQLList({
                      name: 'list6',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list7: new GraphQLList({
                      name: 'list0',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list8: new GraphQLList({
                      name: 'list8',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list9: new GraphQLList({
                      name: 'list9',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list10: new GraphQLList({
                      name: 'list10',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list11: new GraphQLList({
                      name: 'list11',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list12: new GraphQLList({
                      name: 'list12',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list13: new GraphQLList({
                      name: 'list13',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list14: new GraphQLList({
                      name: 'list14',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    list15: new GraphQLList({
                      name: 'list15',
                      fields:() => ({
                        pvoRank: {type: GraphQLInt},
                        player: new GraphQLObjectType({
                          name: 'player',
                          fields:() => ({
                            droppable: {type: GraphQLBoolean},
                            percentStarted: {type: GraphQLFloat},
                            jersey: {type:GraphQLString},
                            playerRatingSeason: {type:GraphQLFloat},
                            positionRank: {type:GraphQLInt},
                            isIREligible: {type:GraphQLBoolean},
                            draftRank: {type:GraphQLInt},
                            value: {type:GraphQLInt},
                            universeId: {type:GraphQLInt},
                            firstName: {type:GraphQLString},
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
                        }),
                        watchList: {type:GraphQLBoolean},
                        isKeeper: {type:GraphQLBoolean},
                        isTradeLocked: {type:GraphQLBoolean},
                        currentPeriodProjectedStats: new GraphQLObjectType({
                          name: 'CurrentPeriodProjectedStats',
                          fields:() => ({
                            appliedProjectedStatTotal: {type:GraphQLFloat}
                          })
                        }),
                        proGameIds: new GraphQLObjectType({
                          name: 'proGameIds',
                          fields:() => ({
                            proGameIds0: {type: GraphQLInt}
                          })
                        }),
                        opponentProTeamId: {type:GraphQLInt},
                        slotCategoryId: {type:GraphQLInt},
                        lockStatus: {type:GraphQLInt},
                        isQueuedWaiverLocked: {type:GraphQLBoolean},
                        currentPeriodRealStats: new GraphQLObjectType({
                          name: 'currentPeriodRealStats',
                          fields:() => ({
                            appliedRealStatTotal: {type: GraphQLFloat}
                          })
                        })
                      })
                    }),
                    appliedActiveProjectedTotal: {type: GraphQLFloat},
                    appliedInactiveRealTotal: {type:GraphQLFloat},
                    team: new GraphQLObjectType({
                        divisionStanding: {type:GraphQLInt},
                        overallStanding: {type:GraphQLInt},
                        waiverRank: {type:GraphQLInt},
                        division: new GraphQLObjectType({
                          divisionName: {type: GraphQLString},
                          divisionId: {type: GraphQLInt},
                          size: {type: GraphQLInt}
                        }),
                        teamAbbrev: {type:GraphQLString},
                        teamNickname: {type:GraphQLString},
                        logoUrl: {type:GraphQLString},
                        teamLocation: {type:GraphQLString},
                        teamId: {type:GraphQLInt},
                        logoType: {type:GraphQLString}
                    }),
                    teamId: {type:GraphQLInt},
                    appliedActiveRealTotal: {type:GraphQLFloat},
                    appliedInactiveProjectedTotal: {type:GraphQLFloat}

                  })
                })
              })
            }),
          })
        })
      })

    }),
    scoringPeriodId: {type:GraphQLInt},
    matchupPeriodId: {type:GraphQLInt},
    homeTeamBonus: {type:GraphQLInt}
  });



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
