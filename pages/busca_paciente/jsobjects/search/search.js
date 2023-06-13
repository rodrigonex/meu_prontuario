export default {
	async searchPatient () {
		searchPatient.run().then((data) => {
			console.log(data)
			if(data.length > 0){
				console.log(data)
				storeValue("patient", data[0]);
				navigateTo("id_person");
			}else{
				console.log("nao achou")
				showModal("errorModal");
			}
		}).catch(() => {
			navigateTo("login_Two");
		})
	}
}