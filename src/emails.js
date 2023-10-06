chrome.tabs.create({ url: "URL_DA_PAGINA_DE_EMAIL" });

chrome.tabs.executeScript({ code: 'seu_script_aqui' }, function (result) {

});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "sua_ação", data: "seus_dados" });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "sua_ação") {

    }
});
