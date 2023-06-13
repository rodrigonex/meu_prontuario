export default {
	async save () {
		
		searchPatient.run().then((data) => {
			if(data.length == 0){
				create_patient.run().then((data) => {
					showModal("sucessModal");
					setInterval(() => { 
						closeModal("sucessModal"); 
						navigateTo('busca_paciente');
					}, 5000, "myTimer");	
				});	
			}else{
				showModal("errorModal");	
			}
		})
		
	}
}