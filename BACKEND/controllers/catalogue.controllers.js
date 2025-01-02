
exports.get = (req, res) => {
	const catalogue = [
	{ref:"1", title : "Unsavory Objekt", price : 12},
	{ref:"2", title : "Bittersweet Objekt", price : 475.65},
	{ref:"3", title : "Cheap Objekt", price : 3},
	{ref:"4", title : "Magnificent Objekt", price : 5000},
	{ref:"5", title : "Undescribable Objekt", price : 997.999},
	];
	

	res.setHeader('Content-Type', 'application/json');
		
	res.send(catalogue);
};    

