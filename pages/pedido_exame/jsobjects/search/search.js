export default {
	async myFun2 () {
		searchPatient.run().then((data) => {
			if(data.length > 0){
				storeValue("patient", data[0]);
				navigateTo("id_person");
			}else{
				showAlert("Paciênte não encontrado.");
			}
		}).catch(err => {
			showAlert(err);
		})
	}
}