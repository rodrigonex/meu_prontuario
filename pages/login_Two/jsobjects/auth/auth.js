export default {
	signIn (){
		return login_api.run().then(data => {
			delete data.user;
			Object.keys(data).forEach(i => {
				console.log(i)
				storeValue(i, data[i])
			});
		}).then(() => navigateTo('home'));	
	},
	continue () {
		if(!appsmith.URL.fullPath.includes('#access_token=')) return;
		appsmith.URL.fullPath.split('#').split('&').forEach(i => {
			const [key, value] = i.split('=');
			storeValue(key, value);
		});
		navigateTo('home');
	}
}