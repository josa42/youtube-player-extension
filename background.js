// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    
    const url = tabs[0].url;
    console.log('play', url)
    
    fetch(`http://localhost:9999/play?url=${encodeURIComponent(url)}`)
      .then(console.log)
      .catch(console.log)
  });
});