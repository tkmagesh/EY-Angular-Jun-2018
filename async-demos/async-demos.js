var app = (function(){
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			callback(result);
		},4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);	
		});
	}

	return { addSyncClient, addAsyncClient };
})();
	
