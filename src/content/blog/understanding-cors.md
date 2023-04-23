---
title: Understanding CORS
date: '2023-04-23T00:00:00-03:00'
description: 'Understanding what is CORS and how it works.'
---

## What is CORS

Let's say you are running a website on `localhost:8000`, and when your JavaScript code is loaded, it makes a request to the server running on `localhost:9000`. You may be surprised to find out that your request has failed. This is because browsers follow the same-origin policy and restrict how a document or script, loaded by one origin, can interact with a resource from another origin:

- Requests to a server in the same origin are allowed by the browser.
- Requests to a different origin (known as cross-origin requests) are, by default, blocked by the browser and a CORS error occurs.

So, what is CORS? CORS stands for Cross-Origin Request Sharing, and it's an HTTP-header based mechanism where servers can tell browsers if other origins are allowed to interact with its resources.

## How does it work

When a browser makes a cross-origin request, it adds an `Origin` header to the message. The server responds by adding an `Access-Control-Allow-Origin` to the response message. The value in the response header should match the value of the `Origin` header from the request. If it does match, everything is fine, but if it doesn't, browsers prevent the response data from being shared with the client, and the CORS error occurs.

![image](/images/blog/understanding-cors-1.svg)
![image](/images/blog/understanding-cors-2.svg)

Requests that use methods other than `GET`, `POST`, `HEAD`, or requests with non-standard headers, need to be pre-flighted. When making these requests, browsers will send a pre-flight request using the `OPTIONS` HTTP method, and servers will respond with the `Access-Control-Allow-Origin` and the `Access-Control-Allow-Methods` headers. If both headers match the request origin and method, the actual request can be made. Such cross-origin requests are pre-flighted because they may have implications for server data.

![image](/images/blog/understanding-cors-3.svg)
![image](/images/blog/understanding-cors-4.svg)

You may be asking why the `POST` method does not make a pre-flight request since it may also change server data. This is because browsers already allowed cross-origin `POST` requests with standard headers before CORS existed, and servers knew about them. So CORS didn't want to change anything about how previous requests worked, but to enforce servers were protected from these new types of requests they were not expecting to receive.
