# Kafkometry
Kafkometry is a lightweight Apache Kafka metric visualizer created using Svelte/SvelteKit.

Placeholder for our OSP Logo

# Table of Contents
* [Features](https://github.com/oslabs-beta/Kafkometry#features)
* [System Design](https://github.com/oslabs-beta/Kafkometry#system-design)
* [Current Implementation](https://github.com/oslabs-beta/Kafkometry#current-implementation)
* [Next Steps](https://github.com/oslabs-beta/Kafkometry#next-steps)
* [Technologies Used](https://github.com/oslabs-beta/Kafkometry#technologies-used)
* [Meet the Team](https://github.com/oslabs-beta/Kafkometry#meet-the-team)
* [License](https://github.com/oslabs-beta/Kafkometry#license)
  
# Features

![kafkometry_2](https://github.com/oslabs-beta/Kafkometry/assets/117921166/cd4f8b86-3404-49ce-98fe-15d0f4336581)

* Live monitoring of key Apache Kafka metrics
* Metric component customization using Grafana Desktop
* Authentication using Google auth
* A lightweight and user friendly UI/UX built in Svelte/SvelteKit

## View your metrics
   1. Active Connections
      
<img width="503" alt="Screenshot 2023-07-26 at 11 22 54 AM" src="https://github.com/oslabs-beta/Kafkometry/assets/117921166/394ee6b6-389a-41ee-ae63-f67777dbc54d">

   2. Partition Count
      
<img width="223" alt="Screenshot 2023-07-26 at 11 24 39 AM" src="https://github.com/oslabs-beta/Kafkometry/assets/117921166/349d5b3e-ad30-4b4a-a38f-5bb8dd10e348">

   3. Successful Authentications
      
<img width="497" alt="Screenshot 2023-07-26 at 11 24 56 AM" src="https://github.com/oslabs-beta/Kafkometry/assets/117921166/5d120872-9eed-4a25-b7f7-77826683442c">

      
   4. Bytes Sent
      
<img width="488" alt="Screenshot 2023-07-26 at 11 27 27 AM" src="https://github.com/oslabs-beta/Kafkometry/assets/117921166/647bd594-8a08-4e20-b370-bffc55da6eed">
   
   5. Records Received
      
<img width="222" alt="Screenshot 2023-07-26 at 11 27 39 AM" src="https://github.com/oslabs-beta/Kafkometry/assets/117921166/ace69595-a562-422f-bd87-2d3477aecbfb">
   
   6. Bytes Received
      
<img width="495" alt="Screenshot 2023-07-26 at 11 27 48 AM" src="https://github.com/oslabs-beta/Kafkometry/assets/117921166/ea6ab0ef-b823-4f59-9152-fcff58c9e612">
  
# System Design

![Kafkometry System Design](https://github.com/oslabs-beta/Kafkometry/assets/70918482/78c62153-12ca-4c8e-b4ef-15ae5eac91ce)

Currently, the flow of data in our application is mapped by the diagram above. Our data flow begins with the Kafka cluster hosted on Confluent Cloud, with a Datagen connector that produces mock messages and events to the cloud-hosted cluster. Confluent Cloud conveniently has their own Confluent Cloud Metrics API, which exposes cluster metrics for availability at a specific HTTP endpoint. Prometheus is run with a prometheus.yml file, which is configured to set up Prometheus to scrape that exposed endpoint at a specific interval or rate. We then configure Grafana to set our local Prometheus instance as a data source, which allows the data that Prometheus scraped from the cloud-cluster to be available for visualization within Grafana. We then customize and configure Grafana dashboards, and embed them into our frontend application via iframes.

# Current Implementation
As of launch, our product and demo is currently set up with local instances of Prometheus and Grafana set up with YAML files to connect to our Confluent Cloud cluster via a Confluent Cloud API Key and Secret. To run this demo on their respective machines we currently require users to:

   1. Host their clusters on Confluent Cloud
   2. Configure a Metrics Viewer Role
   3. Generate their own Cloud API Key and Secret
   4. Install and run their own local, configured Prometheus instance
   5. Create a Grafana Cloud account and select Prometheus as a data source
   6. Fork and clone this repo
   7. Customize and embed their own Grafana dashboards
   8. Run `npm install` and `npm run dev`

In its current state, there are a lot of steps that the user must complete to get Kafkometry up and running. Going forward, the Kafkometry team hopes to abstract many of these steps away to create a more seamless and intuitive user experience. We've thought about providing the necessary configuration YAML files to scrape from OUR Confluent Cloud cluster when running the users' own instances of Prometheus and Grafana so that our users will not have to create any accounts, but this still requires our users to install Prometheus on their own machine. Not to mention unsecure if we decided to post our prometheus.yml and Grafana configs that contain our Cloud API key and secret along with our Grafana credentials. Additionally, Confluent Cloud Metrics API has a rate limit on how often their endpoints can be scraped, therefore preventing the application from receiving realtime data. There's gotta be a better way!

## Next Steps
For our next big patch, we have been working on containerizing our application with **Docker**! For demo purposes, we plan on spinning up a containerized cluster rather than hosting our cluster on Confluent Cloud to overcome the request rate limits imposed by Confluent Cloud Metrics API. We also plan on making the switch from using Grafana, to using Chart.js to design and render our own graphical interfaces for metrics for a superior user experience. With this containerized solution, our users can run the application off of images using a docker-compose.yaml (that we will provide) that can be run with a single `docker-compose -up` command, instead of downloading, configuring, and running their own instances of Prometheus, and eliminates the need to create their own Grafana account and dashboards.

# Technologies Used
![my-skills](https://skillicons.dev/icons?i=svelte,tailwind,kafka,vite,prometheus,nodejs,netlify,grafana,&perline=4)

# Meet the Team
|                       Name                         |                                                                        GitHub                                                               |                                                                                    LinkedIn                                                                  |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**Benjamin Dunn**](https://github.com/benjam-26)  |[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/benjam-26) |[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/benjamin-dunn-4803aa284/)|
|  [**Mitch Gruen**](https://github.com/mitchgruen)  |[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mitchgruen)|[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mitch-gruen/)|
|  [**Alwin  Zhao**](https://github.com/pijjon)  |[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pijjon)|[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alwin-zhao)          |
|  [**Vincent Do**](https://github.com/VDoCodes)   |[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/VDoCodes)|[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vincentydo)              |

# License
[#MIT License](https://choosealicense.com/licenses/mit/)
