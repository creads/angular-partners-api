(function() {

  'use strict';

  /**
   * Creads Partners API factory
   */
  angular
    .module('partners.api.factory', [
    ])
    .provider('api', [
      apiProvider
    ])
  ;

  /**
   * ApiProvider
   * @return {void}
   */
  function apiProvider() {
    /* jshint validthis: true */

    var api = {},
        endpoint = 'http://api.creads-partners.com/v1'
    ;

    this.setEndpoint = setEndpoint;
    this.getEndpoint = getEndpoint;
    this.$get = $get;

    /**
     * [setEndpoint]
     * @param {string} value
     * @return apiProvider
     */
    function setEndpoint(value) {
      if (typeof value !== 'string') {
        throw new Error('String value is provide for parameter endpoint');
      }

      endpoint = value;

      return this;
    }

    /**
     * [getEndpoint]
     * @return {string}
     */
    function getEndpoint() {
      return endpoint;
    }

    /**
     * API factory
     * @param  {$http} $http
     * @return {api}
     */
    $get.$inject = ['$http'];
    function $get($http) {

      api.call = call;
      api.getEndpoint = getEndpoint;

      return api;

      /**
       * Call api method
       * @param  {object}  config
       * @param  {string}  config.method
       * @param  {string}  config.url
       * @param  {object}  config.data
       * @param  {object}  config.params
       * @param  {object}  config.headers
       * @return {promise}
       */
      function call(config) {
        return $http({
          method: config.method,
          url: endpoint + config.url,
          data: config.data,
          params: config.params,
          headers: config.headers,
          ignoreLoadingBar: config.ignoreLoadingBar || false,
          options: config.options
        });
      }
    }

  }

})();
