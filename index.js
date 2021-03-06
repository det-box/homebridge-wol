'use strict';

const getNetworkDevice = require('./lib/network-device');

function setup(homebridge) {
  const NetworkDevice = getNetworkDevice(homebridge.hap);

  homebridge.registerAccessory('homebridge-wol', 'NetworkDevice', NetworkDevice);
}

module.exports = setup;
