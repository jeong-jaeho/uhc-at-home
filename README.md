# UHC-HOME

## Orbital 2023 Milestone 1

## Team Name

UHC@HOME

### Team ID

5955

### Team Members

- Jaeho Jeong
- Tan Shen Nathanael Mark

### Proposed Level of Achievement

Apollo 11

### Code Base

Link to repository:
https://github.com/itsNatTan/UHC-HOME

### Project Pitch (Liftoff)

- Pitch Poster:
  https://drive.google.com/file/d/1sfzmMaTVh0PClR47jn2xdpVWLRlvCC4T/view?usp=share_link
- Pitch Video:
  https://drive.google.com/file/d/19jx5SllhcOVJqyTKHaY38GMat9WlI9WW/view?usp=share_link

### Project Motivation

- UHC is the place NUS students go to whenever we feel unwell and need doctor consultations and medication. However, oftentimes the queue is far too long, needlessly increasing the time spent at the clinic. It takes time to do registration in person in order to verify student status and to do relevant paperwork for medical chart entry. We simply cannot see the end of queueing, getting out of queue for consultations only to find ourselves queueing yet again for medicine prescriptions.

- However, what if you are terribly ill, down with an infectious illness, find it difficult to queue for long, or are in desperate need of medicines. What if we could access this healthcare service in the comfort of your home and perhaps make the queueing process faster? Shouldn’t there be a way to virtually get consulted? What if another virus were to break out and it is difficult to facilitate influx of the sick and unwise to have so many waiting in one confined space?

### Aim of Project

- We aim to make an app that will enable virtual consultations for UHC. The app would allow doctors to connect with NUS student patients virtually via Zoom call. Instead of implementing a video call feature directly in our app, which requires extensive development, students would be given a Zoom conference link to do a video call.

- Furthermore, in light of the recent pandemic, we find it increasingly important to create measures to allow our healthcare system to remain robust in times of tumult, where a virtual setting would be safer. It would also be difficult to accommodate a large number of the sick queueing up while preserving social distancing.

### User Stories

- As a student, I want to be able to have a doctor’s consultation in the comfort of my home without wasting traveling time to cope with a busy school schedule.
- As a commuting student in particular, I want to be able to enjoy the UHC services from afar instead of traveling all the way to UHC from home.
- As a doctor, I want to be able to see as many patients as possible with minimal delay. This app will allow me to connect instantly with my patients while saving them the travel.
- As an administrator, I want a system that can easily track the number of people queueing and allow automatic handling of patients and potentially reduce unnecessary labor costs.

### Tech Stack

React/Next.js

- Using React hooks and a collection of JS, CSS, and JSX files
  PostgresSQL
- Database system for storing user login ID and password as well as live updating the number of people in the queue for UHC consultations
  GitHub/GitHub Desktop
- Source Control
  Postman
- To be used for backend testing, sending requests to the server, and receiving the response back from the server
- To connect to PostgresSQL database and allow pulling of data
  Telegram chatbot API/TeleBot package
- Additional feature to be added later for dealing with commonly asked questions and providing answers and guidance

### Activity diagram (in the perspective of the user)

![Activity diagram](./public/assets/ActivityDiagram.png)
