function WiFiPortalViewModel(c){var a=this;a.baseHost=ko.observable(""!==c?c:"openevse.local");a.baseEndpoint=ko.pureComputed(function(){return"http://"+a.baseHost()});a.config=new ConfigViewModel(a.baseEndpoint);a.status=new StatusViewModel(a.baseEndpoint);a.scan=new WiFiScanViewModel(a.baseEndpoint);a.wifi=new WiFiConfigViewModel(a.baseEndpoint,a.config,a.status,a.scan);a.initialised=ko.observable(!1);a.updating=ko.observable(!1);var b=null;a.start=function(){a.updating(!0);a.config.update(function(){a.status.update(function(){a.initialised(!0);
b=setTimeout(a.update,5E3);a.updating(!1)})})};a.update=function(){a.updating()||(a.updating(!0),null!==b&&(clearTimeout(b),b=null),a.status.update(function(){b=setTimeout(a.update,5E3);a.updating(!1)}))}};
(function(){var b=window.location.hostname;$(function(){var a=new WiFiPortalViewModel(b);ko.applyBindings(a);a.start()})})();function scaleString(b,a,c){return(parseInt(b)/a).toFixed(c)};