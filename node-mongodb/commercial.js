var commercial = [
{
	"Email" : "Gmail@gmail.com",
	"FeeDetail" : {
		"Date" :{
			"Regularfee" : {
				"Monthly" : [
				{
					"Status" : "Paid",
					"Month" : "Janury",
					"ReceiptNo" : "385" 
				},
				{
					"Status" : "Paid",
					"Month" : "Feb",
					"ReceiptNo" : "485" 
				}
				]
			}
		}

	}
}
]


db.commercial.insert(commercial);