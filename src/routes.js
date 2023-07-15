let homeCtrl = require('./controllers/homeController');
let userCtrl = require('./controllers/userController');
let roomCtrl = require('./controllers/roomController');
let balanceCtrl = require('./controllers/moneyController')
export let initWebRoutes = (app) => {
    app.route('/')
    .get(homeCtrl.getHomePage);

    app.route('/user/get')
    .get(userCtrl.getUserInfo);
    
    app.route('/user/update')
    .post(userCtrl.setUserInfo);

    app.route('/room/create')
    .post(roomCtrl.createRoom);

    app.route('/room/join')
    .post(roomCtrl.joinRoom);

    app.route('/room/leave')
    .post(roomCtrl.leaveRoom);

    app.route('/storage')
        .get(balanceCtrl.getUserPossession);

    app.route('/storage')
        .put(balanceCtrl.updateUserBalance)
}