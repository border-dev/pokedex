"use strict";

require('angular/angular.min');
// require('angular-animate/angular-animate.min');
// require('angular-ui-bootstrap');
// require('angular-ui-router');
// require('jquery-latest');
// require('./jquery.min');

var PokemonListController = require('../pokemonList/PokemonListController');
var PokemonListFactory = require('../pokemonList/PokemonListFactory');
var PokemonListService = require('../pokemonList/PokemonListService');

var moduleName = 'PokemonList';
var moduleDependencies = [];

angular.module(moduleName, moduleDependencies)
	.factory('PokemonListFactory', PokemonListFactory)
	.service('PokemonListService', PokemonListService).
	controller('PokemonListController', PokemonListController);