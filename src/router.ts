export = ({ router, controller }) => {
  router.get('/', controller.home.index);
};