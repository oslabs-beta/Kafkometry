# Kafkometry
Kafkometry is a lightweight Apache Kafka metric visualizer created using Svelte/SvelteKit.

Placeholder for our OSP Logo

# Table of Contents
* [Features](https://github.com/oslabs-beta/Kafkometry#features)
* [Getting Started](https://github.com/oslabs-beta/Kafkometry#getting-started)
* [Using the Application](https://github.com/oslabs-beta/Kafkometry#using-the-application)
* [Technologies Used](https://github.com/oslabs-beta/Kafkometry#technologies-used)
* [Meet the Team](https://github.com/oslabs-beta/Kafkometry#meet-the-team)
* [License](https://github.com/oslabs-beta/Kafkometry#license)
  
# Features

![kafkometry_2](https://github.com/oslabs-beta/Kafkometry/assets/117921166/cd4f8b86-3404-49ce-98fe-15d0f4336581)

* Live monitoring of key Apache Kafka metrics
* Metric component customization using Grafana Desktop
* Authentication using Google auth
* A lightweight and user friendly UI/UX built in Svelte/SvelteKit
  
# Getting Started
Kafkometry is an Apache Kafkta metric visualizer. To get started you will need the following:
1. Clone this repository to your local machine
2. [Your own Apache Kafka cluster](https://kafka.apache.org/)
3. [A connection to Confluent Cloud](https://www.confluent.io/confluent-cloud/)
4. [An instance of Prometheus running on your local machine](https://prometheus.io/)
5. [Grafana Desktop](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)
6. [Google OAuth2 app registration](https://developers.google.com/identity/protocols/oauth2)
7. [An instance of Pocketbase](https://pocketbase.io/)
   
# Using the Application
## First Steps
   After cloning this repository to your local machine, make sure you have npm and node installed.
   
   npm install -g npm

   https://nodejs.org/en/download

## Creating a cluster
   Placeholder for cluser instructions
   
## Connecting to Confluent Cloud
   Placeholder for Confluent Cloud instructions
   
## Setting up an instance of Prometheus
   Placeholder for Prometheus instructions
   
## Using Grafana Desktop
   Download and install Grafana Desktop. Be sure to follow the correct instructions for your chosen operating system.
   https://grafana.com/grafana/download?platform=linux

   After you have Grafana Desktop installed, you will want to add your local instance of Prometheus as a data source. 
   On your Grafana Desktop gui navigate to Home>>Connections>>Data Sources>>Prometheus and input http://localhost:9090/ (the default address) in the section under HTTP. Leave all other settings in the default state and hit "Save and Test" at the bottom of the page
   
## Import your Grafana Components
   Ben will add instructions here
   
## Add Google Authentication
   Ben will add instructions here
   
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
