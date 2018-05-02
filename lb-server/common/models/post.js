'use strict';

module.exports = function (Post) {
    Post.disableRemoteMethod('exists', true);
    Post.disableRemoteMethod('findById', true);
    Post.disableRemoteMethod('count', true);
    Post.disableRemoteMethod('findOne', true);
    Post.disableRemoteMethod('createChangeStream', true);
    Post.disableRemoteMethod('upsertWithWhere', true);
    Post.disableRemoteMethodByName('replaceOrCreate');
    Post.disableRemoteMethodByName('updateAll');
    Post.disableRemoteMethodByName('patchOrCreate');
    Post.disableRemoteMethod('patchAttributes', false);
};
