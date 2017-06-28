"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constans/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _ = require('lodash');
var _authors = [];
console.log(Dispatcher);

var AuthorStore = assign({}, EventEmitter.proptotype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function() {
        return _authors;
    },

    getAuthorById: function(id) {
        return _.find(_authors, {id: id});
    }
});

// Dispatcher.register(function(action) {
//     switch(action.ActionTypes) {
//         case ActionTypes.CREATE_AUTHOR:
//         _authors.push(action.author);
//         AuthorStore.emitChange();
//     }
// });

module.exports = AuthorStore;