module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('concat-class-name', function () {
      return Array.from(arguments).map(item => item.value).filter(item => !!item).join('-');
    });
  },
};