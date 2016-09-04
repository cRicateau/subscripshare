module.exports = function(Subscription) {

  Subscription.findByGroup = function(groupId, next) {
    Subscription.app.models.UserGroup.findById(groupId,
      {include: 'subscriptions'}
    )
    .then((group) => {
      return next(null, group.subscriptions());
    })
  }

  Subscription.remoteMethod(
    'findByGroup',
    {
      accepts: [
        {
          arg: 'groupId',
          type: 'number',
          required: true
        }
      ],
      returns: [{
        type: 'array', root: true
      }],
      http: {
        verb: 'get',
        path: '/findByGroup/:groupId'
      }
    }
  )
};
