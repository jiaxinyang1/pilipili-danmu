$('.start-button').click( ()=>{
    chrome.storage.sync.set({enabled: true}, function() {
    });

})
$('.stop-button').click( ()=>{
    chrome.storage.sync.set({enabled: false}, function() {
    });
})

