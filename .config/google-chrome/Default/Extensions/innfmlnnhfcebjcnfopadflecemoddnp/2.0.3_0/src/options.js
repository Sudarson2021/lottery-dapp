const options = {
  'provider': ''
};
chrome.runtime.getBackgroundPage(async (backgroundPage)=>{
  if(await backgroundPage.shouldShowEIP1559()) {
    renderEIP1559();
  }
  else {
    chrome.storage.sync.get({
      'provider': 'ethgasstation'
    }, (items)=>{
      options.provider = items.provider;
      renderOptions();
    });
  }
});

function renderOptions(){
  let providersHtml = 
    `<li data-provider="ethgasstation" class="js-provider ${options.provider == 'ethgasstation' ? 'active':''}">Eth Gas Station ${options.provider == 'ethgasstation' ? '✓':''}</li>
    <li data-provider="gasnow" class="js-provider ${options.provider == 'gasnow' ? 'active':''}">Gas Now ${options.provider == 'gasnow' ? '✓':''}</li>
    <li data-provider="ethgaswatch" class="js-provider ${options.provider == 'ethgaswatch' ? 'active':''}">ETH Gas.watch ${options.provider == 'ethgaswatch' ? '✓':''}</li>`;

  document.getElementsByClassName('js-content')[0].style = "display: block";
  document.getElementsByClassName('js-providers')[0].innerHTML = DOMPurify.sanitize(providersHtml);
  addClickListeners();
}

function renderEIP1559() {
  document.getElementsByClassName('js-content-eip1559')[0].style = "display: block";
}

function selectProvider(option) {
  // Curry function with option
  return function(e){
    options.provider = option;
    chrome.storage.sync.set({
      'provider': option
    });

    renderOptions();

    chrome.runtime.getBackgroundPage(backgroundPage=>{
      backgroundPage.fetchGasPrice();
    }); 
  };
}

function addClickListeners() {
  // Add click listeners
  let elements = document.getElementsByClassName('js-provider');
  for(let i=0; i<elements.length; i++) {
    const element = elements[i];
    // Select option when clicked
    element.addEventListener('click', selectProvider(element.dataset.provider));
  }
}