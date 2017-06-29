"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constans/actionTypes');
var AuthorApi = require('../api/authorApi');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            ActionTypes: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitializeActions;