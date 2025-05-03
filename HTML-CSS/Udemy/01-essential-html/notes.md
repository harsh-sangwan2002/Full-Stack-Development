# How browser renders a web page?

Whenever we enter a URL in a web browser, it sends a request to a web server and the web server accordingly sends the browser a response. This is known as request-response cycle.

**In which protocol is the request sent?**
HTTP : Hyper Text Markup Language 

**What is the first response on requesting a web page in the web browser?**
HTML Document. It is the entry point to show the web page.

---
## What happens when we type and enter a website, let's say example.com in the url?
To understand it in depth, try observing the networking tab when you go to inspect website. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/309/original/upload_1e9be89077c265601b70c82a43573e26.png?1695150262)

You will find an HTMl document returned to you, as discussed. On the right, you may see 'waterfall', hover over it and check the statistics mentioned.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/310/original/upload_15bfae00effad6461760de8fa1b7c334.png?1695150301)

If you observe the contents of the waterfall statistic closely, you'll notice that in the process of requesting an HTML file, the waterfall statistics show the whole function calls and stuff going on from top to down. We can call waterfall as the flow of data.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/311/original/upload_1d6b7b1dd27786daa4963f8c6e15274a.png?1695150330)

1. **Resource Scheduling:** First thing mentioned in the waterfall is 'Resource Scheduling'. Because the browser is single threaded, it can perform one task at a time, the request in stored in a queue until the browser fetches it and acts upon it. Hence, the time shown '2.05ms' is the time of the request staying in the queue.

2. **Connection Start:** 
    - Here a very important step is DNS Lookup. DNS stands for 'Domain Name Server'. DNS is a library which maps domain names to IP addresses. In DNS Lookup, domain name is sent to DNS and IP address is obtained as response. 
    - The next step 'initial connection' refers to the creation of TCP connection between the client (browser) and the web server. This done via TCP 3 way Hand shake:  [tcp handshake](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#tcp_handshake)
    - SSL identification is done if the website client is requesting to is secure (https) or not. This is done through [SSL Handshake](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#tls_negotiation) 
    - Note that compared to other steps, the most time is taken by 'initial connection', and all this is happening even before the request has been sent.

3. **Request/Response**
Now that the connection is setup, the request can be sent to the server. The steps are sending the request, waiting for the server response. This is a huge time, because the server is serving multiple requests.

---
title: Navigation
description: First step in the process
duration: 400
card_type: cue_card
---

### Navigation
This whole process discussed above is called 'Navigation'. This is the first step of all the process happening when we enter a website in the URL. The steps in Navigation are:
- DNS Lookup
- TCP Handshake
- SSL Handshake 
- Response

Also note that the next time we visit the same site, the whole process will be faster because of caching. Domain name to IP address map is cached along with some important information.

Some important related terms that we should know are:
- **Latency:** Time between request and response
- The size of first packet received over 'TCP' will be 14kb. 

---
title: Parsing
description: Second step in the process
duration: 400
card_type: cue_card
---

### Parsing
After we have obtained the html file as response from the web server in the navigation step, we have to parse the file.

Parsing involves:
1. Scanning through the obtained data, and converting the HTML data to Document Object Model (DOM).![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/312/original/upload_b35b49ebc4ae2b877801d8bd4dd313c5.png?1695150508)

2. Along with the above parsing going on, another process 'Preconnect Scanner' is executed parallelly. This involves scanning for any links to CSS files, images,videos and download them.
    -  If  Javascript file is encountered while scanning, the HTML parser will pause and JS is execute first, and only after it's completed, the parser wil return. Hence, we should put Javascript at the bottom of the HTML page, so that it is executed after the structure and style of the webpage is loaded.

4. CSS is now converted into the CSS Object Model.

---
title: Rendering
description: Second step in the process
duration: 400
card_type: cue_card
---

### Render
This involves converting to the HTML and CSS that now we understand to a static view.

* DOM tree and CSSOM Tree is combined to create a render tree. Render contains all the info about structure and styling of the page

![Render Tree](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/313/original/upload_260629c41ad1f42e5ab0e74834de879c.png?1695150543)

* Layout : It is the process by which the dimensions and location of all the nodes in the render tree are determined, plus the determination of the size and position of each object on the page
* Paint : It is the process through which render tree is converted into actual pixels so that end user can see it  


---
title: All steps
description: All steps in the process
duration: 400
card_type: cue_card
---

### All steps
Hence, to list the actions performed on entering a website, the steps are:
1. Navigation-> Latency is a major problem to be tackled at this step
2. Parsing -> JS being single threaded, HTML and CSS should be minimized to reduce load time
3. The next step is Render-> This involves converting to the HTML and CSS that now we understand to a static view.
4. Interactivity: The Javascript is used to make the elements (buttons, form submissions etc.) interactive (make these things work)