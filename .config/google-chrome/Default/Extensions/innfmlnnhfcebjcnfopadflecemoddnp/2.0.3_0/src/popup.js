const weiToGwei = 1000000000;
function escapeHtml(html){
    var text = document.createTextNode(html);
    var div = document.createElement('div');
    div.appendChild(text);
    return div.innerHTML;
}

function selectOption(option) {
	// Curry function with option
	return function(e){
		chrome.storage.sync.set({
			'gasPriceOption': option
		});

		chrome.runtime.getBackgroundPage(backgroundPage=>{
			backgroundPage.updateBadge();
			updateDom();
			addClickListeners();
		});	
	};
}

async function updateDom() {
	function renderDom(data) {
		let html = 
		`<div class="gasprice js-gasprice" data-option="slow">
			<span class="gasprice-label">Slow</span>
			<span class="gasprice-number">${escapeHtml(data.gasData.slow.gwei)}</span>
			<span class="gasprice-wait">${escapeHtml(data.gasData.slow.wait)}</span>
		</div>`+
		`<div class="gasprice js-gasprice" data-option="standard">
			<span class="gasprice-label">Standard</span>
			<span class="gasprice-number">${escapeHtml(data.gasData.standard.gwei)}</span>
			<span class="gasprice-wait">${escapeHtml(data.gasData.standard.wait)}</span>
		</div>`+
		`<div class="gasprice js-gasprice" data-option="fast">
			<span class="gasprice-label">Fast</span>
			<span class="gasprice-number">${escapeHtml(data.gasData.fast.gwei)}</span>
			<span class="gasprice-wait">${escapeHtml(data.gasData.fast.wait)}</span>
		</div>`+
		`<div class="gasprice js-gasprice" data-option="rapid">
			<span class="gasprice-label">Rapid</span>
			<span class="gasprice-number">${escapeHtml(data.gasData.rapid.gwei)}</span>
			<span class="gasprice-wait">${escapeHtml(data.gasData.rapid.wait)}</span>
		</div>`;

		// Update dom
		document.getElementsByClassName('js-info')[0].style = "display: block";
		document.getElementsByClassName('js-popup')[0].innerHTML = DOMPurify.sanitize(html);
		addClickListeners();

		// Show selected option
		chrome.storage.sync.get({
			'gasPriceOption': 'standard'
		}, (items)=>{
			let element = document.querySelectorAll(`div[data-option='${items.gasPriceOption}']`)[0];
			element.className += ' selected';
		});
	}

	function renderEIP1559(data) {
		let currentData = data.eip1559;
		let network = data.network;
		const bFLength = currentData[network]['baseFeePerGas'].length;
	    const currentBaseFee = currentData[network]['baseFeePerGas'][bFLength-1];
	    let baseFeeFormatted = parseInt(Number(currentBaseFee), 10)/weiToGwei;

	    baseFeeFormatted = baseFeeFormatted.toFixed(1);

		let html = 
		`<div class="gasprice eip1559 js-gasprice" data-option="standard">
			<span class="gasprice-label">Base Fee</span>
			<span class="gasprice-number">${escapeHtml(baseFeeFormatted)}</span>
		</div>`+
		`<div class="gasprice gasprice-basefee-recommended eip1559 js-gasprice" data-option="basefee-recommended">
			<span class="gasprice-label">Recommended Base Fee</span>
			<span class="gasprice-number">${escapeHtml(baseFeeFormatted*2)}</span>
		</div>`;

		// Update dom
		document.getElementsByClassName('js-eip1559-info')[0].style = "display: block";
		document.getElementsByClassName('js-popup')[0].innerHTML = DOMPurify.sanitize(html);
		addClickListeners();

		// Show selected option
		chrome.storage.sync.get({
			'gasPriceOption': 'standard'
		}, (items)=>{
			if(items.gasPriceOption == "slow" || items.gasPriceOption == "fast" || items.gasPriceOption == "rapid") {
				// Remove slow/fast/rapid options on upgrade and make it standard
				items.gasPriceOption = 'standard';
				chrome.storage.sync.set({'gasPriceOption': 'standard'});
			}
			let element = document.querySelectorAll(`div[data-option='${items.gasPriceOption}']`)[0];
			element.className += ' selected';
		});
	}

	chrome.runtime.getBackgroundPage(async (backgroundPage) => {
		const data = backgroundPage.appData;
		if(await backgroundPage.shouldShowEIP1559()) {
			if(typeof data.eip1559.mainnet !== 'undefined') {
				renderEIP1559(data);
			}
			else {
				backgroundPage.fetchGasPrice().then(()=>{
					updateDom(); // Let's try again after data has been fetched
				});
			}
		}
		else {
			if(typeof data.gasData.slow !== 'undefined') {
				renderDom(data);
			}
			else {
				backgroundPage.fetchGasPrice().then(()=>{
					updateDom(); // Let's try again after data has been fetched
				});
			}
		}
	});
}

function addClickListeners() {
	// Add click listeners
	let elements = document.getElementsByClassName('js-gasprice');
	for(let i=0; i<elements.length; i++) {
		const element = elements[i];
		// Select option when clicked
		element.addEventListener('click', selectOption(element.dataset.option));
	}

	// Add click listener to options page buttons
	let optionsElement = document.getElementsByClassName('js-open-options');
	optionsElement[0].addEventListener('click', ()=>{
		chrome.runtime.openOptionsPage();
	});
}

async function start() {
	// Show latest data if we have it
	updateDom();

	// Fetch newest data upon opening
	chrome.runtime.getBackgroundPage(async (backgroundPage) => {
		backgroundPage.fetchGasPrice().then(()=>{
			updateDom(); // Let's try again after data has been fetched
		});

		if(await backgroundPage.shouldShowEIP1559()) {
		  chrome.storage.sync.get({
		    'readEIP1559Notice': false
		  }, function(items){
		  	chrome.storage.sync.set({'readEIP1559Notice': true});
		  	setTimeout(async ()=>{
		  	  await backgroundPage.updateBadge();
		  	}, 1000);
		  });
		}
	});

	// Add click listener to settings button
	let settingsElement = document.getElementsByClassName('js-settings');
	settingsElement[0].addEventListener('click', ()=>{
		chrome.runtime.openOptionsPage();
	});
}

start();