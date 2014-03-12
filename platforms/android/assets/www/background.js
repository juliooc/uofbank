/**
 * Listens for the app launching then creates the window.
 * Ignores the provided window size.
 *
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        id: 'main',
        width: 360,
        height: 592,
    });
});
