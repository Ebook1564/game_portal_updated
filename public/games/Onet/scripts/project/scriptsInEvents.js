function getShortestPath(runtime) {
	const c3array = runtime.objects.linePaths.getFirstInstance();
	const array = [];
	for(let i=0; i<c3array.width; i++)
		array.push(c3array.getAt(i));
		
	console.log(array);
	
	array.sort(function(a,b) {return a.length - b.length});
	console.log(array);
	
	console.log(array[0]);
	return (array.length>0?array[0]:"");
}


const scriptsInEvents = {

	async Logic_Event85_Act2(runtime, localVars)
	{
		localVars.path = getShortestPath(runtime);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

