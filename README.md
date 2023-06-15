# Nathan Schneider's Personal Site


[deployed url](https://www.nschneider.dev/)
Hosted by Netlify. 

## Notable Features

This site was build in React, and uses several fun packages, such as [React Typist](https://github.com/jstejada/react-typist) for the typing animations, as well as [React Elastic Carousel](https://sag1v.github.io/react-elastic-carousel). 

As I apply to various companies, I'm interested in who is actually viewing this website. As such, each visitor's IP address is temporarily recorded. It is then send to a secondary server that I coded, which extracts data from the IP address using the [ipinfo.io](https://ipinfo.io/) API. The data is then sent to me via SMS through the [Twilio](https://www.twilio.com/) API. After this data is sent, the IP address is deleted. From this process, I can see when people visit the site, along with their approximate location. For example, if the Amazon Hiring Team visits my page, I will likely get a ping from Seattle. 

## Privacy Policy

By using the website you are agreeing to the recording of your IP address, as noted on the footer of the website. This helps me know who's checking it out. If you have any concerns, don't hesitate to contact me at schnei.nathan@gmail.com. 


## Acknowledgments

Starterpack code from Dartmouth COSC 052 with Tim Tregubov.
Inspired in part by [Jai Smith's Website](https://jaismith.dev)
