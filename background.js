// Create a context menu item
chrome.contextMenus.create({
    id: "open-with-readify",
    title: "Open with Readify.me",
    contexts: ["link"]
  });
  
  // Handle the click event on the context menu
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-with-readify") {
      // Get the URL from the right-clicked link
      const url = info.linkUrl;
      
      // Modify the URL by prepending "http://readify.me/"
      const modifiedUrl = "http://readify.me/" + url;
      
      // Open the modified URL in a new tab
      chrome.tabs.create({ url: modifiedUrl });
    }
  });
  